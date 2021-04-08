import { AutocompleteStore } from './AutocompleteStore';

import { SearchData } from '../__mocks__/SearchData';
import { mockAutocompleteController } from '../__mocks__/mockControllers';

describe('Search Store', () => {
	let searchData;
	beforeEach(() => {
		searchData = new SearchData({ search: 'autocomplete' });
	});

	it('links the controller and controller urlManager to state', () => {
		const autocompleteStore = new AutocompleteStore();
		autocompleteStore.link(mockAutocompleteController);

		expect(autocompleteStore.state.url).toStrictEqual(mockAutocompleteController.urlManager);
	});

	it('returns correct initial state', () => {
		const autocompleteStore = new AutocompleteStore();
		autocompleteStore.link(mockAutocompleteController);

		expect(autocompleteStore.loading).toBe(true);

		expect(autocompleteStore.meta).toBeDefined();
		expect(autocompleteStore.meta).toStrictEqual({});

		expect(autocompleteStore.terms).toBeDefined();
		expect(autocompleteStore.terms).toStrictEqual([]);

		expect(autocompleteStore.merchandising).toBeDefined();
		expect(autocompleteStore.merchandising).toEqual({ redirect: '', content: {} });

		expect(autocompleteStore.search).toBeDefined();
		expect(autocompleteStore.search.query).toBeUndefined();

		expect(autocompleteStore.facets).toBeDefined();
		expect(autocompleteStore.facets).toHaveLength(0);

		expect(autocompleteStore.filters).toBeDefined();
		expect(autocompleteStore.filters).toHaveLength(0);

		expect(autocompleteStore.results).toBeDefined();
		expect(autocompleteStore.results).toHaveLength(0);

		expect(autocompleteStore.pagination).toBeDefined();
		expect(autocompleteStore.pagination.totalResults).toBeUndefined();

		expect(autocompleteStore.sorting).toBeDefined();
		expect(autocompleteStore.sorting.options).toHaveLength(0);
	});

	it('update function updates all of the stores', () => {
		const autocompleteStore = new AutocompleteStore();
		autocompleteStore.link(mockAutocompleteController);

		autocompleteStore.update(searchData);

		expect(autocompleteStore.meta).toBeDefined();
		expect(autocompleteStore.meta).toStrictEqual(searchData.meta);

		expect(autocompleteStore.search).toBeDefined();
		expect(autocompleteStore.search.query).toEqual(searchData.autocomplete.query);
		expect(autocompleteStore.search.originalQuery).toBeUndefined();

		expect(autocompleteStore.merchandising).toBeDefined();
		expect(autocompleteStore.merchandising).toEqual(searchData.merchandising);

		expect(autocompleteStore.facets).toHaveLength(searchData.facets.length);

		expect(autocompleteStore.filters).toHaveLength(0);

		expect(autocompleteStore.results).toHaveLength(searchData.results.length);

		expect(autocompleteStore.pagination.totalResults).toBe(searchData.pagination.totalResults);

		expect(autocompleteStore.sorting.options).toHaveLength(searchData.meta.sortOptions.length);
	});
});
