import 'whatwg-fetch';
import { ApiConfiguration } from './Abstract';
import { SuggestAPI } from './Suggest';

describe('Suggest Api', () => {
	beforeAll(() => {
		// mock performance to prevent warning in test
		Object.defineProperty(window, 'performance', {
			value: {
				getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]),
			},
		});
	});

	it('has expected default functions', () => {
		const api = new SuggestAPI(new ApiConfiguration({}));

		expect(api?.getSuggest).toBeDefined();

		expect(api?.postSuggest).toBeDefined();

		expect(api?.getTrending).toBeDefined();

		expect(api?.postTrending).toBeDefined();
	});

	it('can call getSuggest', async () => {
		const api = new SuggestAPI(new ApiConfiguration({}));

		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			body: undefined,
			headers: {},
			method: 'GET',
		};
		const requestUrl = 'https://8uyt2m.a.athoscommerce.net/v1/suggest?siteId=8uyt2m&query=dress';

		await api.getSuggest({
			siteId: '8uyt2m',
			query: 'dress',
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockClear();
	});

	it('can call postSuggest', async () => {
		const api = new SuggestAPI(new ApiConfiguration({}));

		const params = {
			body: '{"siteId":"abc123","query":"dress"}',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		};
		const requestUrl = 'https://abc123.a.athoscommerce.net/v1/suggest';

		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		await api.postSuggest({
			siteId: 'abc123',
			query: 'dress',
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getTrending', async () => {
		const api = new SuggestAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			body: undefined,
			headers: {},
			method: 'GET',
		};

		const requestUrl = 'https://8uyt2m.a.athoscommerce.net/v1/trending?siteId=8uyt2m&limit=4';

		await api.getTrending({
			siteId: '8uyt2m',
			limit: 4,
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call postTrending', async () => {
		const api = new SuggestAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			body: '{"siteId":"8uuyt2m","limit":4}',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		};
		const requestUrl = 'https://8uuyt2m.a.athoscommerce.net/v1/trending';

		await api.postTrending({
			siteId: '8uuyt2m',
			limit: 4,
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});
});
