import deepmerge from 'deepmerge';

import { StorageStore, StorageType } from '@searchspring/snap-store-mobx';
import { AbstractController } from '../Abstract/AbstractController';
import { getSearchParams } from '../utils/getParams';
import { URL as utilsURL } from '../utils/URL';

import type { AutocompleteStore } from '@searchspring/snap-store-mobx';
import type { AutocompleteControllerConfig, BeforeSearchObj, AfterSearchObj, AfterStoreObj, ControllerServices, NextEvent } from '../types';
import type { AutocompleteRequestModel } from '@searchspring/snapi-types';

const INPUT_ATTRIBUTE = 'ss-autocomplete-input';
const INPUT_DELAY = 200;

const utils = { url: utilsURL };

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
		click: (e, result) => void;
	};
};

export class AutocompleteController extends AbstractController {
	public type = 'autocomplete';
	public store: AutocompleteStore;
	public config: AutocompleteControllerConfig;
	public storage: StorageStore;

	constructor(config: AutocompleteControllerConfig, { client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker });

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);
		this.store.setConfig(this.config);

		// get current search from url before detaching
		if (this.config.settings.initializeFromUrl) {
			this.store.state.input = this.urlManager.state.query;

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
				// const { intellisuggestData, intellisuggestSignature } = result.attributes;
				// const target = e.target as HTMLAnchorElement;
				// const href = target?.href || result.mappings.core?.url || undefined;
				// this.tracker.track.product.click({
				// 	data: {
				// 		intellisuggestData,
				// 		intellisuggestSignature,
				// 		href,
				// 	},
				// });
			},
		},
	};

	get params(): AutocompleteRequestModel {
		const urlState = this.urlManager.state;
		const params: AutocompleteRequestModel = deepmerge({ ...getSearchParams(urlState) }, this.config.globals);

		return params;
	}

	async setFocused(inputElement?: HTMLInputElement): Promise<void> {
		if (this.store.state.focusedInput !== inputElement) {
			this.store.state.focusedInput = inputElement;
			// fire focusChange event
			try {
				try {
					await this.eventManager.fire('focusChange', {
						controller: this,
					});
				} catch (err) {
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

		inputElement?.dispatchEvent(new Event('keyup'));
	}

	reset(): void {
		// reset input values and state
		const inputs = document.querySelectorAll(this.config.selector);
		inputs.forEach((input: HTMLInputElement) => {
			input.value = '';
		});
		this.store.reset();
	}

	handlers = {
		input: {
			enterKey: async (e: KeyboardEvent): Promise<void> => {
				if (e.keyCode == 13) {
					const actionUrl = utils.url(this.config.action);
					const input = e.target as HTMLInputElement;

					let query = input.value;
					if (!this.store.loading && this.store.search.originalQuery) {
						query = this.store.search.query.string;
						actionUrl.params.query.push({
							key: 'oq',
							value: this.store.search.originalQuery.string,
						});
					}

					actionUrl.params.query.push({
						key: input.name || (this.urlManager.getTranslatorConfig().queryParameter as string),
						value: query,
					});

					// TODO expected spell correct behavior queryAssumption

					try {
						await this.eventManager.fire('beforeSubmit', {
							controller: this,
							input,
						});
					} catch (err) {
						if (err?.message == 'cancelled') {
							this.log.warn(`'beforeSubmit' middleware cancelled`);
							return;
						} else {
							this.log.error(`error in 'beforeSubmit' middleware`);
							console.error(err);
						}
					}

					const newUrl = actionUrl.url();
					window.location.href = newUrl;
				}
			},
			escKey: (e: KeyboardEvent): void => {
				if (e.keyCode == 27) {
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
			formSubmit: async (e): Promise<void> => {
				const form = e.target;
				const input = form.querySelector(`input[${INPUT_ATTRIBUTE}]`);

				e.preventDefault();

				let query = input.value;
				if (this.store.search.originalQuery) {
					query = this.store.search.query.string;
					addHiddenFormInput(form, 'oq', this.store.search.originalQuery.string);
				}

				// TODO expected spell correct behavior queryAssumption

				input.value = query;

				try {
					await this.eventManager.fire('beforeSubmit', {
						controller: this,
						input,
					});
				} catch (err) {
					if (err?.message == 'cancelled') {
						this.log.warn(`'beforeSubmit' middleware cancelled`);
						return;
					} else {
						this.log.error(`error in 'beforeSubmit' middleware`);
						console.error(err);
					}
				}

				form.submit();
			},
			keyUp: (e: KeyboardEvent): void => {
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

				if (this.config.settings.syncInputs) {
					const inputs = document.querySelectorAll(this.config.selector);
					inputs.forEach((input: HTMLInputElement) => {
						input.value = value;
					});
				}

				clearTimeout(this.handlers.input.timeoutDelay);

				if (!value) {
					// TODO cancel any current requests?
					this.store.reset();
					this.urlManager.reset().go();
				} else {
					this.handlers.input.timeoutDelay = setTimeout(() => {
						this.store.state.locks.terms.unlock();
						this.store.state.locks.facets.unlock();
						this.urlManager.set({ query: this.store.state.input }).go();
					}, INPUT_DELAY);
				}
			},
			timeoutDelay: undefined,
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
		const inputs = document.querySelectorAll(`input[${INPUT_ATTRIBUTE}]`);
		inputs?.forEach((input: HTMLInputElement) => {
			input.removeEventListener('keyup', this.handlers.input.keyUp);
			input.removeEventListener('keyup', this.handlers.input.enterKey);
			input.removeEventListener('keyup', this.handlers.input.escKey);
			input.removeEventListener('focus', this.handlers.input.focus);
			input.form?.removeEventListener('submit', this.handlers.input.formSubmit);
		});
		document.removeEventListener('click', this.handlers.document.click);
	}

	async bind(): Promise<void> {
		if (!this.initialized) {
			await this.init();
		}

		this.unbind();

		const inputs = document.querySelectorAll(this.config.selector);
		inputs.forEach((input: HTMLInputElement) => {
			input.setAttribute(INPUT_ATTRIBUTE, '');

			input.addEventListener('keyup', this.handlers.input.keyUp);

			if (this.config.settings.initializeFromUrl && !input.value && this.store.state.input) {
				input.value = this.store.state.input;
			}

			input.addEventListener('focus', this.handlers.input.focus);
			input.addEventListener('keyup', this.handlers.input.escKey);

			const form = input.form;

			let formActionUrl = this.config.action;

			if (!form && this.config.action) {
				input.addEventListener('keyup', this.handlers.input.enterKey);
			} else if (form) {
				if (this.config.action) {
					form.action = this.config.action;
				} else {
					formActionUrl = form.action;
				}

				form.addEventListener('submit', this.handlers.input.formSubmit);
			}

			// set the root URL on urlManager
			if (formActionUrl) {
				this.store.setService(
					'urlManager',
					this.urlManager.withConfig((translatorConfig) => {
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

		if (this.config.settings?.trending?.limit > 0 && !this.store.trending?.length) {
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
			} catch (err) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const [response, meta] = await this.client.autocomplete(params);
			if (!response.meta) {
				/**
				 * MockClient will overwrite the client search() method and use
				 * SearchData to return mock data which already contains meta data
				 */
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
			} catch (err) {
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
			this.store.update(response);

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response,
				});
			} catch (err) {
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
				console.error(err);
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
