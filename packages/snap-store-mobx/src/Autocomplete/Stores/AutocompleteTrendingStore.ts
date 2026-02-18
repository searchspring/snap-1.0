import { TrendingResponseModel } from '@athoscommerce/snap-client';
import { Term, TermData } from './AutocompleteTermStore';
import { AutocompleteRequestModelSearchSourceEnum } from '@athoscommerce/snapi-types';
import { AutocompleteStateStore } from './AutocompleteStateStore';

type AutocompleteTrendingStoreConfig = Omit<TermData, 'data' | 'type'> & {
	data: {
		trending: TrendingResponseModel;
	};
	functions: {
		resetTerms: () => void;
	};
	state: {
		rootState: AutocompleteStateStore;
	};
};

export class AutocompleteTrendingStore extends Array<Term> {
	static get [Symbol.species](): ArrayConstructor {
		return Array;
	}

	constructor(params: AutocompleteTrendingStoreConfig) {
		const terms: Array<Term> = [];
		const { data } = params || {};
		const { trending } = data?.trending || {};
		trending?.queries?.map((term) => {
			terms.push(
				new Term({
					...params,
					data: {
						term: {
							active: false,
							value: term.searchQuery,
						},
						terms,
					},
					functions: params.functions,
					state: params.state,
					type: 'popular' as AutocompleteRequestModelSearchSourceEnum,
				})
			);
		});

		super(...terms);
	}
}
