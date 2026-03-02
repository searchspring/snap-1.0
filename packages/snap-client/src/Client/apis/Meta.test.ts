import 'whatwg-fetch';
import { ApiConfiguration } from './Abstract';
import { MetaAPI } from './Meta';
import { version } from '@athoscommerce/snap-toolbox';

describe('Meta Api', () => {
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
		const api = new MetaAPI(new ApiConfiguration({}));

		expect(api?.getMeta).toBeDefined();

		expect(api?.postMeta).toBeDefined();
	});

	it('can call getMeta', async () => {
		const api = new MetaAPI(new ApiConfiguration({}));
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

	it('can call postMeta', async () => {
		const api = new MetaAPI(new ApiConfiguration({}));
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

	it('uses configured paths', async () => {
		const api = new MetaAPI(
			new ApiConfiguration({
				paths: {
					meta: '/custom/meta',
				},
			})
		);
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		await api.getMeta({
			siteId: '8uyt2m',
		});

		expect(requestMock).toHaveBeenNthCalledWith(1, 'https://8uyt2m.a.athoscommerce.net/custom/meta?siteId=8uyt2m', {
			headers: {},
			method: 'GET',
		});

		await api.postMeta({
			siteId: 'abc123',
		});

		expect(requestMock).toHaveBeenNthCalledWith(2, 'https://abc123.a.athoscommerce.net/custom/meta', {
			body: '{"siteId":"abc123"}',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		requestMock.mockReset();
	});
});
