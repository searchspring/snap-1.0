import deepmerge from 'deepmerge';

import { StorageStore, StorageType } from '@searchspring/snap-store-mobx';
import { AbstractController } from '../Abstract/AbstractController';
import { getSearchParams } from '../utils/getParams';
import { URL as utilsURL } from '../utils/URL';

import type { AutocompleteStore } from '@searchspring/snap-store-mobx';
import type { AutocompleteControllerConfig, BeforeSearchObj, AfterSearchObj, ControllerServices, NextEvent } from '../types';
import type { AutocompleteRequestModel } from '@searchspring/snapi-types';

const TRENDING_TERMS_CACHE = 'ss-ac-trending-cache';

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
	config: AutocompleteControllerConfig;
	storage: StorageStore;

	constructor(config: AutocompleteControllerConfig, { client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker });

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);
		this.store.setConfig(this.config);

		// get current search from url before detaching
		if (this.config.settings.initializeFromUrl) {
			this.store.state.input = this.urlManager.state.query;
		}

		// persist trending terms in local storage
		this.storage = new StorageStore({
			type: StorageType.SESSION,
			key: TRENDING_TERMS_CACHE,
		});

		// add 'beforeSearch' middleware
		this.eventManager.on('beforeSearch', async (search: BeforeSearchObj, next: NextEvent): Promise<void | boolean> => {
			search.controller.store.loading = true;

			await next();
		});

		// add 'afterSearch' middleware
		this.eventManager.on('afterSearch', async (search: AfterSearchObj, next: NextEvent): Promise<void | boolean> => {
			await next();

			search.controller.store.loading = false;

			// cancel search if no input or query doesn't match current urlState
			if (search.response.autocomplete.query != search.controller.urlManager.state.query) {
				return false;
			}
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
		if (this.store.state.focusedInput === inputElement) {
			return;
		}

		this.store.state.focusedInput = inputElement;

		if (inputElement?.value) {
			inputElement.dispatchEvent(new Event('keyup'));
		}

		// fire visibilityChange event
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

	reset(): void {
		// reset input values and state
		const inputs = document.querySelectorAll(this.config.selector);
		inputs.forEach((input: HTMLInputElement) => {
			input.value = '';
		});
		this.store.reset();
	}

	async bind(): Promise<void> {
		if (!this.initialized) {
			await this.init();
		}

		let delayTimeout;

		const keyUpEvent = (e) => {
			const inputDelay = 200;

			if (e.isTrusted) {
				this.store.state.locks.terms.unlock();
				this.store.state.locks.facets.unlock();
			}

			const value = e.target.value;
			this.store.state.input = value;
			this.config.settings.syncInputs &&
				inputs.forEach((input: HTMLInputElement) => {
					input.value = value;
				});

			clearTimeout(delayTimeout);

			if (!value) {
				// TODO cancel any current requests?
				this.store.reset();
				this.urlManager.reset().go();
			} else if (e.isTrusted || !this.store.loaded) {
				delayTimeout = setTimeout(() => {
					if (value && this.store.state.input) {
						this.urlManager.set({ query: this.store.state.input }).go();
					}
				}, inputDelay);
			}
		};

		const focusEvent = (e) => {
			e.stopPropagation();
			this.setFocused(e.target);
		};

		const removeVisibleAC = (e) => {
			if (!Array.from(inputs).includes(e.target)) {
				this.setFocused();
			}
		};

		const enterKeyEvent = (e: KeyboardEvent): void => {
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

				const newUrl = actionUrl.url();
				window.location.href = newUrl;
			}
		};

		const addHiddenFormInput = (form: HTMLFormElement, name: string, value: string) => {
			const inputElem = window.document.createElement('input');
			inputElem.type = 'hidden';
			inputElem.name = name;
			inputElem.value = value;
			form.append(inputElem);
		};

		const formSubmitEvent = (e, input): void => {
			const form = e.target;

			let query = input.value;
			if (!this.store.loading && this.store.search.originalQuery) {
				query = this.store.search.query;
				addHiddenFormInput(form, 'oq', this.store.search.originalQuery.string);
			}

			// TODO expected spell correct behavior queryAssumption

			input.value = query;
		};

		const inputs = document.querySelectorAll(this.config.selector);
		inputs.forEach((input: HTMLInputElement) => {
			input.removeEventListener('keyup', keyUpEvent);
			input.addEventListener('keyup', keyUpEvent);

			if (this.config.settings.initializeFromUrl) {
				input.value = this.store.state.input || '';
			}

			if (document.activeElement === input) {
				this.setFocused(input);
			}

			input.removeEventListener('focus', focusEvent);
			input.addEventListener('focus', focusEvent);

			const form = input.form;

			let formActionUrl = this.config.action;

			if (!form && this.config.action) {
				input.removeEventListener('keyup', enterKeyEvent);
				input.addEventListener('keyup', enterKeyEvent);
			} else if (form) {
				if (this.config.action) {
					form.action = this.config.action;
				} else {
					formActionUrl = form.action;
				}

				const inputPasser = (e) => {
					formSubmitEvent(e, input);
				};

				form.removeEventListener('submit', inputPasser);
				form.addEventListener('submit', inputPasser);
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
		});

		if (this.config.settings?.trending?.limit > 0) {
			this.searchTrending();
		}

		document.removeEventListener('click', removeVisibleAC);
		document.addEventListener('click', removeVisibleAC);
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

			const response = await this.client.autocomplete(params);
			if (!response.meta) {
				/**
				 * MockClient will overwrite the client search() method and use
				 * SearchData to return mock data which already contains meta data
				 */
				response.meta = this.client.meta;
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
