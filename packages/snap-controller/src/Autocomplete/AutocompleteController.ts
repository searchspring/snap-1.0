import deepmerge from 'deepmerge';

import { StorageStore, StorageType, ErrorType } from '@searchspring/snap-store-mobx';
import { AbstractController } from '../Abstract/AbstractController';
import { getSearchParams } from '../utils/getParams';
import { ControllerTypes } from '../types';

import { AutocompleteStore } from '@searchspring/snap-store-mobx';
import type {
	AutocompleteControllerConfig,
	BeforeSearchObj,
	AfterSearchObj,
	AfterStoreObj,
	ControllerServices,
	NextEvent,
	ContextVariables,
} from '../types';
import type { AutocompleteRequestModel } from '@searchspring/snapi-types';

const INPUT_ATTRIBUTE = 'ss-autocomplete-input';
export const INPUT_DELAY = 200;
const KEY_ENTER = 13;
const KEY_ESCAPE = 27;
const PARAM_ORIGINAL_QUERY = 'oq';

const defaultConfig: AutocompleteControllerConfig = {
	id: 'autocomplete',
	selector: '',
	action: '',
	globals: {},
	settings: {
		initializeFromUrl: true,
		syncInputs: true,
		facets: {
			trim: true,
			pinFiltered: true,
		},
	},
};

type AutocompleteTrackMethods = {
	product: {
		click: (e: MouseEvent, result: any) => void;
	};
};

export class AutocompleteController extends AbstractController {
	public type = ControllerTypes.autocomplete;
	public store: AutocompleteStore;
	public config: AutocompleteControllerConfig;
	public storage: StorageStore;

	constructor(
		config: AutocompleteControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		this.store = store as AutocompleteStore;
		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, config);
		this.store.setConfig(this.config);

		// get current search from url before detaching
		if (this.config.settings!.initializeFromUrl) {
			this.store.state.input = this.urlManager.state.query || '';

			// reset to force search on focus
			// TODO: make a config setting for this
			this.urlManager.reset().go();
		}

		// persist trending terms in local storage
		this.storage = new StorageStore({
			type: StorageType.SESSION,
			key: `ss-controller-${this.config.id}`,
		});

		// add 'beforeSearch' middleware
		this.eventManager.on('beforeSearch', async (ac: BeforeSearchObj, next: NextEvent): Promise<void | boolean> => {
			ac.controller.store.loading = true;

			await next();
		});

		// add 'afterSearch' middleware
		this.eventManager.on('afterSearch', async (ac: AfterSearchObj, next: NextEvent): Promise<void | boolean> => {
			await next();

			// cancel search if no input or query doesn't match current urlState
			if (ac.response.autocomplete.query != ac.controller.urlManager.state.query) {
				ac.controller.store.loading = false;
				return false;
			}
		});

		// add 'afterStore' middleware
		this.eventManager.on('afterStore', async (ac: AfterStoreObj, next: NextEvent): Promise<void | boolean> => {
			await next();

			ac.controller.store.loading = false;
		});

		// attach config plugins and event middleware
		this.use(this.config);
	}

	track: AutocompleteTrackMethods = {
		// TODO: add in future when autocomplete supports result click tracking
		product: {
			click: (e: MouseEvent, result): void => {
				this.log.warn('product.click tracking is not currently supported in this controller type');
			},
		},
	};

	get params(): AutocompleteRequestModel {
		const urlState = this.urlManager.state;
		const params: AutocompleteRequestModel = deepmerge({ ...getSearchParams(urlState) }, this.config.globals!);

		const userId = this.tracker.getUserId();
		if (userId) {
			params.tracking = params.tracking || {};
			params.tracking.userId = userId;
		}

		if (!this.config.globals?.personalization?.disabled) {
			const cartItems = this.tracker.cookies.cart.get();
			if (cartItems.length) {
				params.personalization = params.personalization || {};
				params.personalization.cart = cartItems.join(',');
			}

			const lastViewedItems = this.tracker.cookies.viewed.get();
			if (lastViewedItems.length) {
				params.personalization = params.personalization || {};
				params.personalization.lastViewed = lastViewedItems.join(',');
			}

			const shopperId = this.tracker.getShopperId();
			if (shopperId) {
				params.personalization = params.personalization || {};
				params.personalization.shopper = shopperId;
			}
		}

		return params;
	}

	async setFocused(inputElement?: HTMLInputElement): Promise<void> {
		if (this.store.state.focusedInput !== inputElement && inputElement) {
			this.store.state.focusedInput = inputElement;
			// fire focusChange event
			try {
				try {
					await this.eventManager.fire('focusChange', {
						controller: this,
					});
				} catch (err: any) {
					if (err?.message == 'cancelled') {
						this.log.warn(`'focusChange' middleware cancelled`);
					} else {
						this.log.error(`error in 'focusChange' middleware`);
						throw err;
					}
				}
			} catch (err) {
				if (err) {
					console.error(err);
				}
			}
		}

		// auto select first trending term?
		if (
			inputElement &&
			!this.store.state?.input &&
			this.store.trending?.length &&
			!this.store.terms?.length &&
			this.config.settings?.trending?.showResults
		) {
			this.store.trending[0].preview();
		} else {
			inputElement?.dispatchEvent(new Event('keyup'));
		}
	}

	reset(): void {
		// reset input values and state
		const inputs = document.querySelectorAll(this.config.selector);
		inputs.forEach((input) => {
			(input as HTMLInputElement).value = '';
		});
		this.store.reset();
	}

	handlers = {
		input: {
			enterKey: async (e: KeyboardEvent): Promise<boolean | undefined> => {
				if (e.keyCode == KEY_ENTER) {
					const input = e.target as HTMLInputElement;
					let actionUrl = this.store.services.urlManager;

					e.preventDefault();

					// when spellCorrection is enabled
					if (this.config.globals?.search?.query?.spellCorrection) {
						// wait until loading is complete before submission
						// TODO make this better
						await timeout(INPUT_DELAY + 1);
						while (this.store.loading) {
							await timeout(INPUT_DELAY);
						}

						// use corrected query and originalQuery
						if (this.store.search.originalQuery) {
							input.value = this.store.search.query.string;
							actionUrl = actionUrl?.set(PARAM_ORIGINAL_QUERY, this.store.search.originalQuery.string);
						}
					}

					actionUrl = actionUrl?.set('query', input.value);

					// TODO expected spell correct behavior queryAssumption

					try {
						await this.eventManager.fire('beforeSubmit', {
							controller: this,
							input,
						});
					} catch (err: any) {
						if (err?.message == 'cancelled') {
							this.log.warn(`'beforeSubmit' middleware cancelled`);
							return;
						} else {
							this.log.error(`error in 'beforeSubmit' middleware`);
							console.error(err);
						}
					}

					window.location.href = actionUrl?.href || '';
				}
			},
			escKey: (e: KeyboardEvent): void => {
				if (e.keyCode == KEY_ESCAPE) {
					(e.target as HTMLInputElement).blur();
					this.setFocused();
				}
			},
			focus: (e: FocusEvent): void => {
				e.stopPropagation();

				// timeout to ensure focus happens AFTER click
				setTimeout(() => {
					this.setFocused(e.target as HTMLInputElement);
				});
			},
			formSubmit: async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
				const form = e.target;
				const input: HTMLInputElement | null = (form as HTMLFormElement).querySelector(`input[${INPUT_ATTRIBUTE}]`);

				e.preventDefault();

				// when spellCorrection is enabled
				if (this.config.globals?.search?.query?.spellCorrection) {
					// wait until loading is complete before submission
					// TODO make this better
					await timeout(INPUT_DELAY + 1);
					while (this.store.loading) {
						await timeout(INPUT_DELAY);
					}

					if (this.store.search.originalQuery) {
						input!.value = this.store.search.query.string;
						addHiddenFormInput(form as HTMLFormElement, PARAM_ORIGINAL_QUERY, this.store.search.originalQuery.string);
					}
				}

				// TODO expected spell correct behavior queryAssumption

				try {
					await this.eventManager.fire('beforeSubmit', {
						controller: this,
						input,
					});
				} catch (err: any) {
					if (err?.message == 'cancelled') {
						this.log.warn(`'beforeSubmit' middleware cancelled`);
						return;
					} else {
						this.log.error(`error in 'beforeSubmit' middleware`);
						console.error(err);
					}
				}

				(form as HTMLFormElement).submit();
			},
			keyUp: (e: KeyboardEvent): void => {
				// ignore enter and escape keys
				if (e?.keyCode == KEY_ENTER || e?.keyCode == KEY_ESCAPE) return;

				// return focus on keyup if it was lost
				if (e.isTrusted && this.store.state.focusedInput !== (e.target as HTMLInputElement)) {
					this.setFocused(e.target as HTMLInputElement);
				}

				const value = (e.target as HTMLInputElement).value;

				// prevent search when value is unchanged
				if (this.store.state.input == value && this.store.loaded) {
					return;
				}

				this.store.state.input = value;

				if (this.config?.settings?.syncInputs) {
					const inputs = document.querySelectorAll(this.config.selector);
					inputs.forEach((input) => {
						(input as HTMLInputElement).value = value;
					});
				}

				clearTimeout(this.handlers.input.timeoutDelay);

				if (!value) {
					// TODO cancel any current requests?
					this.store.reset();
					this.urlManager.reset().go();

					if (this.store.trending?.length && this.config.settings?.trending?.showResults) {
						this.store.trending[0].preview();
					}
				} else {
					this.handlers.input.timeoutDelay = setTimeout(() => {
						this.store.state.locks.terms.unlock();
						this.store.state.locks.facets.unlock();
						this.urlManager.set({ query: this.store.state.input }).go();
					}, INPUT_DELAY);
				}
			},
			timeoutDelay: undefined as undefined | ReturnType<typeof setTimeout>,
		},
		document: {
			click: (e: MouseEvent): void => {
				const inputs = document.querySelectorAll(this.config.selector);
				if (Array.from(inputs).includes(e.target as Element)) {
					e.stopPropagation();
				} else {
					this.setFocused();
				}
			},
		},
	};

	unbind(): void {
		const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[${INPUT_ATTRIBUTE}]`);
		inputs?.forEach((input) => {
			input.removeEventListener('keyup', this.handlers.input.keyUp);
			input.removeEventListener('keydown', this.handlers.input.enterKey);
			input.removeEventListener('keydown', this.handlers.input.escKey);
			input.removeEventListener('focus', this.handlers.input.focus);
			input.form?.removeEventListener('submit', this.handlers.input.formSubmit as unknown as EventListener);
		});
		document.removeEventListener('click', this.handlers.document.click);
	}

	async bind(): Promise<void> {
		if (!this.initialized) {
			await this.init();
		}

		this.unbind();

		const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(this.config.selector);
		inputs.forEach((input) => {
			input.setAttribute('spellcheck', 'false');
			input.setAttribute('autocomplete', 'off');

			input.setAttribute(INPUT_ATTRIBUTE, '');

			input.addEventListener('keyup', this.handlers.input.keyUp);

			if (this.config?.settings?.initializeFromUrl && !input.value && this.store.state.input) {
				input.value = this.store.state.input;
			}

			input.addEventListener('focus', this.handlers.input.focus);
			input.addEventListener('keydown', this.handlers.input.escKey);

			const form = input.form;
			let formActionUrl: string | undefined;

			if (this.config.action) {
				formActionUrl = this.config.action;
				input.addEventListener('keydown', this.handlers.input.enterKey);
			} else if (form) {
				formActionUrl = form.action;
				form.addEventListener('submit', this.handlers.input.formSubmit as unknown as EventListener);
			}

			// set the root URL on urlManager
			if (formActionUrl) {
				this.store.setService(
					'urlManager',
					this.urlManager.withConfig((translatorConfig: any) => {
						return {
							...translatorConfig,
							urlRoot: formActionUrl,
						};
					})
				);
			}

			if (document.activeElement === input) {
				this.setFocused(input);
			}
		});

		if (this.config.settings?.trending?.limit && this.config.settings?.trending?.limit > 0 && !this.store.trending?.length) {
			this.searchTrending();
		}

		document.addEventListener('click', this.handlers.document.click);
	}

	searchTrending = async (): Promise<void> => {
		let terms;
		const storedTerms = this.storage.get('terms');
		if (storedTerms) {
			// terms exist in storage, update store
			terms = JSON.parse(storedTerms);
		} else {
			// query for trending terms, save to storage, update store
			const trendingParams = {
				limit: this.config.settings?.trending?.limit || 5,
			};

			const trendingProfile = this.profiler.create({ type: 'event', name: 'trending', context: trendingParams }).start();

			terms = await this.client.trending(trendingParams);

			trendingProfile.stop();
			this.log.profile(trendingProfile);

			this.storage.set('terms', JSON.stringify(terms));
		}
		this.store.updateTrendingTerms(terms);
	};

	search = async (): Promise<void> => {
		const params = this.params;

		if (!params?.search?.query?.string) {
			return;
		}

		try {
			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const [meta, response] = await this.client.autocomplete(params);
			// @ts-ignore
			if (!response.meta) {
				/**
				 * MockClient will overwrite the client search() method and use
				 * SearchData to return mock data which already contains meta data
				 */
				// @ts-ignore
				response.meta = meta;
			}

			searchProfile.stop();
			this.log.profile(searchProfile);

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterSearch' middleware cancelled`);
					afterSearchProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterSearch' middleware`);
					throw err;
				}
			}

			afterSearchProfile.stop();
			this.log.profile(afterSearchProfile);

			// update the store
			// @ts-ignore
			this.store.update(response);

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterStore' middleware cancelled`);
					afterStoreProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterStore' middleware`);
					throw err;
				}
			}

			afterStoreProfile.stop();
			this.log.profile(afterStoreProfile);
		} catch (err) {
			if (err) {
				switch (err) {
					case 429:
						this.store.error = {
							code: 429,
							type: ErrorType.WARNING,
							message: 'Too many requests try again later',
						};
						this.log.warn(this.store.error);
						break;
					case 500:
						this.store.error = {
							code: 500,
							type: ErrorType.ERROR,
							message: 'Invalid Search Request or Service Unavailable',
						};
						this.log.error(this.store.error);
						break;
					default:
						this.log.error(err);
						break;
				}
				this.store.loading = false;
			}
		}
	};
}

function addHiddenFormInput(form: HTMLFormElement, name: string, value: string) {
	const inputElem = document.createElement('input');
	inputElem.type = 'hidden';
	inputElem.name = name;
	inputElem.value = value;
	form.append(inputElem);
}

async function timeout(time: number): Promise<void> {
	return new Promise((resolve) => {
		window.setTimeout(resolve, time);
	});
}
