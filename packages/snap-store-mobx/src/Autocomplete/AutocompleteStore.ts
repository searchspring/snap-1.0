import { makeObservable, observable } from 'mobx';

import { UrlManager } from '@searchspring/snap-url-manager';
import { AbstractStore } from '../Abstract/AbstractStore';
import {
	SearchFilterStore,
	SearchResultStore,
	SearchMerchandisingStore,
	SearchPaginationStore,
	SearchSortingStore,
	SearchHistoryStore,
} from '../Search/Stores';
import { StorageStore } from '../Storage/StorageStore';
import {
	AutocompleteStateStore,
	AutocompleteTermStore,
	AutocompleteQueryStore,
	AutocompleteFacetStore,
	AutocompleteTrendingStore,
	AutocompleteHistoryStore,
} from './Stores';

import type { AutocompleteResponseModel, MetaResponseModel } from '@searchspring/snapi-types';
import type { TrendingResponseModel } from '@searchspring/snap-client';
import type { AutocompleteStoreConfig, StoreServices } from '../types';
import { MetaStore } from '../Meta/MetaStore';

export class AutocompleteStore extends AbstractStore {
	public services: StoreServices;
	public meta!: MetaStore;
	public merchandising!: SearchMerchandisingStore;
	public search!: AutocompleteQueryStore;
	public terms!: AutocompleteTermStore;
	public facets!: AutocompleteFacetStore;
	public filters!: SearchFilterStore;
	public results!: SearchResultStore;
	public pagination!: SearchPaginationStore;
	public sorting!: SearchSortingStore;
	public state: AutocompleteStateStore;
	public storage: StorageStore;
	public trending: AutocompleteTrendingStore;
	public history: AutocompleteHistoryStore;

	constructor(config: AutocompleteStoreConfig, services: StoreServices) {
		super(config);

		if (typeof services != 'object' || typeof services.urlManager?.subscribe != 'function') {
			throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
		}

		this.services = services;

		this.state = new AutocompleteStateStore(services);

		this.storage = new StorageStore();

		this.trending = [];
		this.history = [];
		this.initHistory();

		this.reset();

		makeObservable(this, {
			state: observable,
			search: observable,
			terms: observable,
			facets: observable,
			filters: observable,
			merchandising: observable,
			results: observable,
			pagination: observable,
			sorting: observable,
			history: observable,
		});
	}

	get hasQuery() {
		return Boolean((this.state.input && this.loaded) || this.search.query?.string);
	}

	public reset(): void {
		this.state.reset();
		this.update();
		this.resetTerms();
	}

	public initHistory(): void {
		const limit = (this.config as AutocompleteStoreConfig).settings?.history?.limit;
		if (limit) {
			const historyStore = new SearchHistoryStore({ siteId: this.config.globals?.siteId! }, this.services);

			this.history = new AutocompleteHistoryStore({
				config: this.config,
				services: this.services,
				functions: {
					resetTerms: () => {
						this.resetTerms();
					},
				},
				state: {
					autocomplete: this.state,
					loaded: this.loaded,
				},
				data: {
					queries: historyStore.getStoredData(limit),
				},
			});
		}
	}

	public resetTerms(): void {
		this.resetSuggestions();
		this.resetTrending();
		this.resetHistory();
	}

	public resetSuggestions(): void {
		this.terms?.forEach((term) => (term.active = false));
	}

	public resetTrending(): void {
		this.trending?.forEach((term) => (term.active = false));
	}

	public resetHistory(): void {
		this.history?.forEach((term) => (term.active = false));
	}

	public setService(name: keyof StoreServices, service: UrlManager): void {
		if (this.services[name] && service) {
			this.services[name] = service;
			if (name === 'urlManager') {
				this.state.url = service;
				this.initHistory();
			}
		}
	}

	public updateTrendingTerms(data: TrendingResponseModel): void {
		this.trending = new AutocompleteTrendingStore({
			config: this.config,
			services: this.services,
			functions: {
				resetTerms: () => {
					this.resetTerms();
				},
			},
			state: {
				autocomplete: this.state,
				loaded: this.loaded,
			},
			data,
		});
	}

	public update(data: AutocompleteResponseModel & { meta?: MetaResponseModel } = {}): void {
		if (!data) return;
		this.error = undefined;
		this.meta = new MetaStore(data.meta);

		// set the query to match the actual queried term and not the input query
		if (data.search) {
			this.state.url = this.services.urlManager = this.services.urlManager.set('query', data.search.query);
		}

		// only run if we want to update the terms (not locked)
		if (!this.state.locks.terms.locked) {
			this.terms = new AutocompleteTermStore({
				config: this.config,
				services: this.services,
				functions: {
					resetTerms: () => {
						this.resetTerms();
					},
				},
				state: {
					autocomplete: this.state,
					loaded: this.loaded,
				},
				data: {
					...data,
					meta: this.meta.data,
				},
			});

			// only lock if there was data
			data.autocomplete && this.state.locks.terms.lock();
		}

		this.merchandising = new SearchMerchandisingStore({
			config: this.config,
			services: this.services,
			data: {
				...data,
				meta: this.meta.data,
			},
		});

		this.search = new AutocompleteQueryStore({
			config: this.config,
			services: this.services,
			data: {
				...data,
				meta: this.meta.data,
			},
		});

		// only run if we want to update the facets (not locked)
		if (!this.state.locks.facets.locked) {
			this.facets = new AutocompleteFacetStore({
				config: this.config,
				services: this.services,
				stores: {
					storage: this.storage,
				},
				state: {
					autocomplete: this.state,
					loaded: this.loaded,
				},
				data: {
					...data,
					meta: this.meta.data,
				},
			});
		}

		this.filters = new SearchFilterStore({
			config: this.config,
			services: this.services,
			data: {
				...data,
				meta: this.meta.data,
			},
		});

		this.results = new SearchResultStore({
			config: this.config,
			services: this.services,
			stores: {
				storage: this.storage,
			},
			data: {
				...data,
				meta: this.meta.data,
			},
			state: {
				autocomplete: this.state,
				loaded: this.loaded,
			},
		});

		if ((this.results.length === 0 && !this.trending.filter((term) => term.active).length) || this.terms?.filter((term) => term.active).length) {
			// if a trending term was selected and then a subsequent search yields no results, reset trending terms to remove active state
			// OR if any terms are active, also reset to ensure only a single term or trending term is active
			this.resetTrending();
		}

		this.pagination = new SearchPaginationStore({
			config: this.config,
			services: this.services,
			data: {
				...data,
				meta: this.meta.data,
			},
		});

		this.sorting = new SearchSortingStore({
			config: this.config,
			services: this.services,
			data: {
				...data,
				meta: this.meta.data,
			},
		});

		this.loaded = !!data.pagination;
	}
}
