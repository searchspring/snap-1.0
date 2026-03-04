import { observable, makeObservable } from 'mobx';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import type { AutocompleteStoreConfig, StoreServices } from '../../types';
import { AutocompleteStateStore } from './AutocompleteStateStore';
import { AutocompleteResponseModel, AutocompleteRequestModelSearchSourceEnum } from '@athoscommerce/snapi-types';

type AutocompleteTermStoreConfig = Omit<TermData, 'data' | 'type'> & {
	config: AutocompleteStoreConfig;
	data: {
		autocomplete: AutocompleteResponseModel;
	};
	functions: {
		resetTerms: () => void;
	};
	state: {
		rootState: AutocompleteStateStore;
	};
};

export class AutocompleteTermStore extends Array<Term> {
	static get [Symbol.species](): ArrayConstructor {
		return Array;
	}

	constructor(params: AutocompleteTermStoreConfig) {
		const { data } = params || {};
		const { autocomplete, search } = data?.autocomplete || {};
		const suggestions = [...(autocomplete?.alternatives ? autocomplete.alternatives : []).map((term) => term.text)] as string[];

		if (autocomplete?.correctedQuery && search?.query && autocomplete.correctedQuery.toLowerCase() != search.query.toLowerCase()) {
			// the query was corrected
			suggestions.unshift(autocomplete.correctedQuery);
		}

		search?.query && suggestions.unshift(search.query);

		const terms: Array<Term> = [];

		suggestions.map((term, index) =>
			terms.push(
				new Term({
					...params,
					data: {
						term: {
							active: index === 0,
							value: term,
						},
						terms,
					},
					functions: params.functions,
					state: params.state,
					type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
				})
			)
		);

		super(...terms);
	}
}

export type TermData = {
	services: StoreServices;
	functions: {
		resetTerms: () => void;
	};
	state: {
		rootState: AutocompleteStateStore;
	};
	data: {
		term: {
			active: boolean;
			value: string;
		};
		terms: Term[];
	};
	type: AutocompleteRequestModelSearchSourceEnum;
};

export class Term {
	public active: boolean;
	public value: string;
	public preview: () => void;
	public url: UrlManager;
	public type: AutocompleteRequestModelSearchSourceEnum;

	constructor(params: TermData) {
		const { services, functions, state, data, type } = params || {};
		const { term, terms } = data || {};

		this.active = term?.active;
		this.value = term?.value;
		this.type = type;

		this.url = services?.urlManager?.set({ query: this.value });

		this.preview = () => {
			functions.resetTerms();
			terms.map((term) => {
				term.active = false;
			});
			state.rootState.source = type;
			this.active = true;
			state.rootState.locks.terms.lock();
			state.rootState.locks.facets.unlock();

			this.url?.set({ query: this.value }).go();
		};

		makeObservable(this, {
			active: observable,
			value: observable,
		});
	}
}
