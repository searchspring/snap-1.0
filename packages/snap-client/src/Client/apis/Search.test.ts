import 'whatwg-fetch';
import { ApiConfiguration } from './Abstract';
import { SearchAPI } from './Search';
import { version } from '@athoscommerce/snap-toolbox';

describe('Search Api', () => {
	beforeAll(() => {
		// mock performance to prevent warning in test
		Object.defineProperty(window, 'performance', {
			value: {
				getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]),
			},
		});
	});

	beforeEach(() => {
		window.sessionStorage.clear();
	});

	it('has expected default functions', () => {
		const api = new SearchAPI(new ApiConfiguration({}));

		// @ts-ignore
		expect(api?.getEndpoint).toBeDefined();

		expect(api?.getMeta).toBeDefined();

		expect(api?.getSearch).toBeDefined();

		expect(api?.getAutocomplete).toBeDefined();

		expect(api?.getFinder).toBeDefined();
	});

	it('can call getMeta', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = 'https://8uyt2m.a.athoscommerce.net/v1/meta?siteId=8uyt2m';

		await api.getMeta({
			siteId: '8uyt2m',
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getSearch', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/search?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getSearch({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call postMeta', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			body: '{"siteId":"abc123"}',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		};
		const reuestUrl = 'https://abc123.a.athoscommerce.net/v1/meta';

		await api.postMeta({
			siteId: 'abc123',
		});

		expect(requestMock).toHaveBeenCalledWith(reuestUrl, params);

		requestMock.mockReset();
	});

	it('can call getAutocomplete', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/autocomplete?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getAutocomplete({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getFinder', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/finder?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getFinder({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getEndpoint', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));

		let requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			body: undefined,
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/search?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		//@ts-ignore
		await api.getEndpoint(
			{
				siteId: '8uyt2m',
				search: { query: { string: 'dress' } },
			},
			'/v1/search'
		);
		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();

		requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		//can get endpoint with custom path
		//@ts-ignore
		await api.getEndpoint(
			{
				siteId: '8uyt2m',
				search: { query: { string: 'dress' } },
			},
			'mycustompath'
		);

		expect(requestMock).toHaveBeenCalledWith(
			`https://8uyt2m.a.athoscommerce.net/mycustompath?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`,
			{
				...params,
			}
		);

		requestMock.mockReset();
	});
});
