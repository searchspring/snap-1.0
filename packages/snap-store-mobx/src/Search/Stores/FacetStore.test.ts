import { configure } from 'mobx';

import { FacetStore } from './FacetStore';
import { SearchData } from '../../__mocks__/SearchData';
import { StorageStore } from '../../Storage/StorageStore';

import { mockSearchController } from '../../__mocks__/mockControllers';

// disable strict-mode
configure({
	enforceActions: 'never',
});

describe('Facet Store', () => {
	let searchData, storageStore;
	beforeEach(() => {
		expect.hasAssertions();
		searchData = new SearchData();

		storageStore = new StorageStore();
	});

	it('has a symbol species of Array', () => {
		expect(FacetStore[Symbol.species]).toBe(Array);
	});

	it('returns an empty array when nothing is passed to the constructor', () => {
		const facets = new FacetStore(undefined, undefined, undefined, undefined);

		expect(facets.length).toBe(0);
	});

	it('returns an empty array when passed an empty array [] of facets', () => {
		const facets = new FacetStore(mockSearchController, storageStore, [], undefined);

		expect(facets instanceof Array).toBe(true);
		expect(facets.length).toBe(0);
	});

	it('returns an array the same length as the facets passed in', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

		expect(facets.length).toBe(searchData.facets.length);
	});

	it('passes a reference of the controller to each facet', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

		for (const facet of facets) {
			expect(facet.controller).toStrictEqual(mockSearchController);
		}
	});

	it('it merges the proper facet meta', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

		facets.forEach((facet) => {
			expect(facet.display).toBe(searchData.meta.facets[facet.field].display);
			expect(facet.label).toBe(searchData.meta.facets[facet.field].label);
			expect(facet.collapse).toBe(searchData.meta.facets[facet.field].collapse);
		});
	});

	it('will have facet data that matches what was passed in', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

		facets.forEach((facet, index) => {
			expect(facet.field).toBe(searchData.facets[index].field);
			expect(facet.filtered).toStrictEqual(searchData.facets[index].filtered);
			expect(facet.type).toStrictEqual(searchData.facets[index].type);
		});
	});

	it('it toggles the collapsed state', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

		const collapsed = facets[0].collapse;
		expect(collapsed).toEqual(false);
		facets[0].toggleCollapse();
		expect(facets[0].collapse).toEqual(true);
	});

	it('it clears the selected options', () => {
		searchData = new SearchData({ search: 'filtered' });
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

		expect(facets[1].clear.url.href).not.toMatch(facets[1].field);
	});

	it('has overflow has values we expect', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		const valueFacet = facets.filter((facet) => facet.values).pop();

		expect(valueFacet.overflow.enabled).toBeDefined();
		expect(valueFacet.overflow.limited).toBeDefined();
		expect(valueFacet.overflow.limit).toBeDefined();
		expect(valueFacet.overflow.limit).toEqual(0);
		expect(valueFacet.overflow.setLimit).toBeDefined();
		expect(valueFacet.overflow.remaining).toBeUndefined();
		expect(valueFacet.overflow.toggle).toBeDefined();
		expect(valueFacet.overflow.calculate).toBeDefined();
	});

	it('has storage for overflow and restores the limit', () => {
		storageStore = new StorageStore();
		let facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		let facet = facets.filter((facet) => facet.values && facet.values.length > 2).pop();

		const limit = 2;
		expect(facet.overflow.enabled).toBe(false);
		facet.overflow.setLimit(limit);
		expect(facet.refinedValues.length).toBe(limit);
		expect(facet.overflow.enabled).toBe(true);
		expect(facet.overflow.limited).toBe(true);

		facet.overflow.toggle();

		expect(facet.overflow.limited).toBe(false);

		// new store to ensure storage does not bleed

		const newStorageStore = new StorageStore();
		facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		expect(facet.overflow.limited).toBe(false);

		facet = facets.filter((facet) => facet.values && facet.values.length > 2).pop();
		facet.overflow.setLimit(limit);

		expect(facet.overflow.limited).toBe(false);
		expect(facet.overflow.enabled).toBe(true);
	});

	it('has overflow and the toggle function works as expected', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		const valueFacets = facets.filter((facet) => facet.values && facet.values.length > 3);

		valueFacets.forEach((facet) => {
			const limit = 2;
			facet.overflow.setLimit(limit);
			expect(facet.refinedValues.length).toBe(limit);
			expect(facet.overflow.limited).toBe(true);

			facet.overflow.toggle();
			expect(facet.refinedValues.length).toBe(facet.values.length);
			expect(facet.overflow.limited).toBe(false);
		});
	});

	it('has overflow and the toggle function can take a toggle value as parameter', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		const valueFacets = facets.filter((facet) => facet.values && facet.values.length > 3);

		valueFacets.forEach((facet) => {
			const limit = 2;
			facet.overflow.setLimit(limit);
			expect(facet.refinedValues.length).toBe(limit);
			expect(facet.overflow.limited).toBe(true);

			facet.overflow.toggle(true);
			expect(facet.overflow.limited).toBe(true);
			expect(facet.refinedValues.length).toBe(limit);

			facet.overflow.toggle(false);
			expect(facet.overflow.limited).toBe(false);
			expect(facet.refinedValues.length).toBe(facet.values.length);
		});
	});

	it('has overflow and works with the search input', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		const colorFacet = facets.filter((facet) => facet.field == 'color_family').pop();

		const limit = 5;
		colorFacet.overflow.setLimit(limit);
		expect(colorFacet.refinedValues.length).toBe(limit);
		expect(colorFacet.overflow.limited).toBe(true);

		// adding search filter on values for 'blue' and 'black'.
		colorFacet.search.input = 'bl';

		expect(colorFacet.refinedValues.length).toBe(2);
		expect(colorFacet.overflow.limited).toBe(true);
		expect(colorFacet.overflow.enabled).toBe(false);

		colorFacet.overflow.toggle();
		expect(colorFacet.refinedValues.length).toBe(2);
		expect(colorFacet.overflow.limited).toBe(false);
		expect(colorFacet.overflow.enabled).toBe(false);
	});

	it('uses range facet when needed', () => {
		searchData = new SearchData({ search: 'range' });
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		const rangeFacet = facets.filter((facet) => facet.type == 'range').pop();

		expect(rangeFacet.type).toBe('range');
	});

	it('uses range values (range-buckets) when needed', () => {
		const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
		const rangeFacet = facets.filter((facet) => facet.type == 'range-buckets').pop();

		rangeFacet.values.forEach((value) => {
			expect(value.value).toBeUndefined();
			expect(value.low).toBeDefined();
			expect(value.high).toBeDefined();
		});
	});

	describe('ValueFacet', () => {
		it('has the correct facet properties', () => {
			const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

			facets.forEach((facet, index) => {
				expect(facet.multiple).toBe(searchData.meta.facets[facet.field].multiple);
			});
		});

		describe('value', () => {
			it('stores the correct facet values', () => {
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

				facets.forEach((facet, index) => {
					if (facet.type == 'value') {
						expect(facet.values.length).toBe(searchData.facets[index].values.length);
					}
				});
			});

			it('has a removal URL for filter value when it is filtered/active', () => {
				searchData = new SearchData({ search: 'filtered' });
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const filteredValueFacet = facets.filter((facet) => facet.type == 'value' && facet.filtered).pop();

				const filteredValues = filteredValueFacet.values.filter((value) => value.filtered);

				filteredValues.forEach((filteredValue) => {
					expect(filteredValue.url.href).not.toMatch(filteredValueFacet.field);
				});
			});

			it('has a URL for filter value when it is not filtered/active', () => {
				searchData = new SearchData();
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const filteredValueFacet = facets.filter((facet) => facet.type == 'value').pop();

				const filteredValues = filteredValueFacet.values.filter((value) => !value.filtered);

				filteredValues.forEach((filteredValue) => {
					expect(filteredValue.url.href).toMatch(filteredValueFacet.field);
					expect(filteredValue.url.href).toMatch(filteredValue.value);
				});
			});

			it('uses HierarchyValue when the hierarchy display type is used', () => {
				searchData = new SearchData({ search: 'filteredHierarchy' });
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const hierarchyFacet = facets.filter((facet) => facet.display == 'hierarchy').pop();

				hierarchyFacet.values.forEach((value) => {
					expect(value.url).toBeDefined();
					expect(value.level).toBeGreaterThanOrEqual(0);
				});
			});

			it.skip('supports multi select facets', () => {
				searchData = new SearchData({ search: 'filtered' });
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const multiSelectFacet = facets[1];

				const selectedFacetValue = multiSelectFacet.values.filter((value) => value.filtered).pop();
				expect(selectedFacetValue.value).toBeDefined();

				const unselectedFacetValue = multiSelectFacet.values.filter((value) => !value.filtered).pop();

				expect(unselectedFacetValue.url.href).toMatch(selectedFacetValue.value);
			});

			it('supports single select facets', () => {
				searchData = new SearchData({ search: 'filtered' });
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const singleSelectFacet = facets.filter((facet) => facet.multiple == 'single' && facet.filtered).pop();

				const selectedFacetValue = singleSelectFacet.values.filter((value) => value.filtered).pop();
				expect(selectedFacetValue.value).toBeDefined();

				const unselectedFacetValue = singleSelectFacet.values.filter((value) => !value.filtered).pop();

				expect(unselectedFacetValue.url.href).not.toMatch(selectedFacetValue.value);
			});
		});

		describe('range-buckets', () => {
			it('stores the correct facet values', () => {
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

				facets.forEach((facet, index) => {
					if (facet.type == 'range-buckets') {
						expect(facet.values.length).toBe(searchData.facets[index].values.length);
						facet.values.forEach((value) => {
							expect(value).toHaveProperty('low');
							expect(value).toHaveProperty('high');
						});
					}
				});
			});

			it('has a URL for filter value when it is filtered/active', () => {
				searchData = new SearchData({ search: 'filteredRangeBucket' });
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const filteredRangeBucketFacet = facets.filter((facet) => facet.type == 'range-buckets').pop();

				const filteredValues = filteredRangeBucketFacet.values.filter((value) => value.filtered);

				filteredValues.forEach((filteredValue) => {
					// removing the filter (URL should not have the value)
					expect(filteredValue.url.href).not.toMatch(filteredRangeBucketFacet.field);
				});
			});

			it('has a removal URL for filter value when it is not filtered/active', () => {
				searchData = new SearchData({ search: 'filteredRangeBucket' });
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const filteredRangeBucketFacet = facets.filter((facet) => facet.type == 'range-buckets' && facet.filtered).pop();
				const filteredValues = filteredRangeBucketFacet.values.filter((value) => !value.filtered);
				filteredValues.forEach((filteredValue) => {
					expect(filteredValue.url.href).toMatch(`${filteredRangeBucketFacet.field}.low`);
					expect(filteredValue.url.href).toMatch(`${filteredRangeBucketFacet.field}.high`);
				});
			});

			it('has a removal URL for filter value when it is filtered/active with single select', () => {
				searchData = new SearchData({ search: 'filteredRangeBucket' });
				searchData.meta.facets.price.multiple = 'single';
				const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
				const filteredRangeBucketFacet = facets
					.filter((facet) => facet.type == 'range-buckets' && facet.multiple == 'single' && facet.filtered)
					.pop();

				const selectedFacetValue = filteredRangeBucketFacet.values.filter((value) => value.filtered).pop();
				expect(selectedFacetValue).toHaveProperty('low');
				expect(selectedFacetValue).toHaveProperty('high');

				const unselectedFacetValue = filteredRangeBucketFacet.values.filter((value) => !value.filtered).pop();

				// to find a match only once
				expect(unselectedFacetValue.url.href.split(`${filteredRangeBucketFacet.field}.low`)).toHaveLength(2);
			});
		});
	});

	describe('RangeFacet', () => {
		it('it merges the proper facet meta', () => {
			searchData = new SearchData({ search: 'range' });
			const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);
			const rangeFacets = facets.filter((facet) => facet.type == 'range');

			rangeFacets.forEach((facet) => {
				expect(facet.formatValue).toBe(searchData.meta.facets[facet.field].formatValue);
				expect(facet.formatSeparator).toBe(searchData.meta.facets[facet.field].formatSeparator);
			});
		});

		it('it has the correct facet properties', () => {
			searchData = new SearchData({ search: 'range' });
			const facets = new FacetStore(mockSearchController, storageStore, searchData.facets, searchData.meta);

			facets.forEach((facet, index) => {
				if (facet.type == 'range') {
					expect(facet.step).toBe(searchData.facets[index].step);
					expect(facet.range).toStrictEqual(searchData.facets[index].range);
					expect(facet.active).toStrictEqual(searchData.facets[index].active);
				}
			});
		});
	});
});