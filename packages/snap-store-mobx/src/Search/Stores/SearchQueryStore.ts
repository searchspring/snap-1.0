import { observable, makeObservable } from 'mobx';

import { escapeHTML } from '@searchspring/snap-toolbox';

import type { UrlManager } from '@searchspring/snap-url-manager';
import type { SearchData, StoreParameters, StoreServices } from '../../types';
import type { SearchResponseModelSearchMatchTypeEnum } from '@searchspring/snapi-types';

export class SearchQueryStore {
	public query?: Query;
	public didYouMean?: Query;
	public originalQuery?: Query;
	public matchType?: SearchResponseModelSearchMatchTypeEnum;

	constructor(params: StoreParameters<SearchData>) {
		const { services, data } = params;
		const { search } = data;
		const observables: Observables = {};

		if (search?.query) {
			this.query = new Query(services, search.query);
			observables.query = observable;
		}

		if (search?.didYouMean) {
			this.didYouMean = new Query(services, search.didYouMean);
			observables.didYouMean = observable;
		}

		if (search?.originalQuery) {
			this.originalQuery = new Query(services, search.originalQuery);
			observables.originalQuery = observable;
		}

		if (search?.matchType) {
			this.matchType = search.matchType;
			observables.matchType = observable;
		}

		makeObservable(this, observables);
	}
}

type Observables = {
	query?: typeof observable;
	didYouMean?: typeof observable;
	originalQuery?: typeof observable;
	matchType?: typeof observable;
};

export class Query {
	public string: string;
	public url: UrlManager;

	constructor(services: StoreServices, query: string) {
		this.string = escapeHTML(query);

		this.url = services?.urlManager?.remove('page').remove('filter').set('query', this.string);

		makeObservable(this, {
			string: observable,
		});
	}
}
