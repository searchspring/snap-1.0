import { Term, TermData } from './AutocompleteTermStore';
import { AutocompleteRequestModelSearchSourceEnum } from '@athoscommerce/snapi-types';
import type { AutocompleteStateStore } from './AutocompleteStateStore';

type AutocompleteHistoryStoreConfig = Omit<TermData, 'data' | 'type'> & {
	data: {
		queries: string[];
	};
	functions: {
		resetTerms: () => void;
	};
	state: {
		rootState: AutocompleteStateStore;
	};
};

export class AutocompleteHistoryStore extends Array<Term> {
	static get [Symbol.species](): ArrayConstructor {
		return Array;
	}

	constructor(params: AutocompleteHistoryStoreConfig) {
		const { data } = params || {};
		const { queries } = data || {};
		const terms: Array<Term> = [];

		queries?.map((query) => {
			terms.push(
				new Term({
					...params,
					data: {
						term: {
							active: false,
							value: query,
						},
						terms,
					},
					functions: params.functions,
					state: params.state,
					type: 'historical' as AutocompleteRequestModelSearchSourceEnum,
				})
			);
		});

		super(...terms);
	}
}
