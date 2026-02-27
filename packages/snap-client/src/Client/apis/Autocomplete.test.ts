import 'whatwg-fetch';
import { ApiConfiguration } from './Abstract';
import { AutocompleteAPI } from './Autocomplete';
import { MockData } from '@searchspring/snap-shared';
import { version } from '@searchspring/snap-toolbox';

const mockData = new MockData();

describe('Hybrid Api', () => {
	beforeAll(() => {
		// mock performance to prevent warning in test
		Object.defineProperty(window, 'performance', {
			value: {
				getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]),
			},
		});
	});

	it('has expected default functions', () => {
		const api = new AutocompleteAPI(new ApiConfiguration({}));

		//@ts-ignore
		expect(api?.requesters).toBeDefined();

		//@ts-ignore
		expect(api?.requesters.search).toBeDefined();

		//@ts-ignore
		expect(api?.requesters.suggest).toBeDefined();

		expect(api?.getAutocomplete).toBeDefined();
	});

	beforeEach(() => {
		window.sessionStorage.clear();
	});

	it('can call getAutcomplete (empty search)', async () => {
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockData.autocomplete()) } as Response));

		const api = new AutocompleteAPI(new ApiConfiguration({}));

		const params = {
			body: undefined,
			headers: {},
			method: 'GET',
		};
		const cacheKey = 'https://8uyt2m.a.athoscommerce.net/v1/suggest?siteId=8uyt2m&language=en&query=&suggestionCount=5&disableSpellCorrect=true';

		await api.getAutocomplete({
			siteId: '8uyt2m',
		});

		expect(requestMock).toHaveBeenCalledWith(cacheKey, params);

		requestMock.mockReset();
	});

	it('can call getAutcomplete (wtih search)', async () => {
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockData.autocomplete()) } as Response));

		const api = new AutocompleteAPI(new ApiConfiguration({}));

		const params = {
			body: undefined,
			headers: {},
			method: 'GET',
		};
		const cacheKey = 'https://8uyt2m.a.athoscommerce.net/v1/suggest?siteId=8uyt2m&language=en&query=dress&suggestionCount=5&disableSpellCorrect=true';

		await api.getAutocomplete({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(cacheKey, params);

		requestMock.mockReset();
	});
});
