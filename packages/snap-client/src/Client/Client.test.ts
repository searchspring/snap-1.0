import 'whatwg-fetch';
import { Client } from './Client';
import type { ClientConfig } from '../types';

const wait = (time = undefined) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

describe('Snap Client', () => {
	it('requires a siteId during construction', () => {
		expect(() => {
			// @ts-ignore
			new Client();
		}).toThrow();

		expect(() => {
			// @ts-ignore
			new Client({});
		}).toThrow();

		expect(() => {
			new Client({ siteId: '' });
		}).toThrow();

		expect(() => {
			new Client({ siteId: '8uyt2m' });
		}).not.toThrow();
	});

	it('can pass in a client config', () => {
		const config: ClientConfig = {
			meta: {
				api: {
					origin: 'https://snapi.kube.searchspring.io/meta',
				},
			},
			search: {
				api: {
					origin: 'https://snapi.kube.searchspring.io/search',
				},
			},
			autocomplete: {
				api: {
					origin: 'https://snapi.kube.searchspring.io/autocomplete',
				},
			},
			recommend: {
				api: {
					origin: 'https://snapi.kube.searchspring.io/recommend',
				},
			},
			suggest: {
				api: {
					origin: 'https://snapi.kube.searchspring.io/suggest',
				},
			},
		};

		const client = new Client({ siteId: '8uyt2m' }, config);

		setTimeout(() => {
			try {
				expect(client.meta).toBeDefined();
				// @ts-ignore
				let clientConfig = client.config;

				expect(clientConfig.meta.api.origin).toBe(config.meta.api.origin);

				//check it merged with the default config
				expect(clientConfig.meta.cache.purgeable).toBe(false);
				expect(clientConfig.search.api.origin).toBe(config.search.api.origin);
				expect(clientConfig.autocomplete.api.origin).toBe(config.autocomplete.api.origin);
				expect(clientConfig.recommend.api.origin).toBe(config.recommend.api.origin);
				expect(clientConfig.suggest.api.origin).toBe(config.suggest.api.origin);
			} catch (err) {}
		});
	});

	it('has all the fetch functions defined', () => {
		const client = new Client({ siteId: '8uyt2m' });

		expect(client.search).toBeDefined();
		expect(client.autocomplete).toBeDefined();
		expect(client.trending).toBeDefined();
		expect(client.recommend).toBeDefined();
		expect(client.meta).toBeDefined();
	});

	describe('each fetch method uses the expected requester', () => {
		it('autocomplete method', async () => {
			const client = new Client({ siteId: '8uyt2m' });

			//@ts-ignore
			const autocompleteRequester = client.requesters.autocomplete.requesters.legacy;
			//@ts-ignore
			const suggestRequester = client.requesters.autocomplete.requesters.suggest;
			//@ts-ignore
			const metaRequester = client.requesters.meta.requesters.legacy;

			const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);
			const suggestRequesterSpy = jest.spyOn(suggestRequester, 'request' as never);
			const acRequesterSpy = jest.spyOn(autocompleteRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as unknown as Response));

			const acparams = {
				search: {
					query: {
						string: 'hello',
					},
				},
			};

			client.autocomplete(acparams);

			await wait();

			const metaRequest = {
				headers: {},
				method: 'GET',
				path: '/api/meta/meta.json',
				query: {
					siteId: '8uyt2m',
				},
			};

			const metaCacheKey = '/api/meta/meta.json{"siteId":"8uyt2m"}';

			expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
			expect(metaRequesterSpy.mock.calls).toEqual([
				[metaRequest, metaCacheKey], // first call
			]);
			const suggestRequest = {
				headers: {},
				method: 'GET',
				path: '/api/suggest/query',
				query: {
					disableSpellCorrect: true,
					language: 'en',
					query: ['hello'],
					siteId: ['8uyt2m'],
					suggestionCount: 5,
				},
			};
			const suggestCacheKey =
				'/api/suggest/query{"siteId":["8uyt2m"],"language":"en","query":["hello"],"suggestionCount":5,"disableSpellCorrect":true}';

			expect(suggestRequesterSpy).toHaveBeenCalledTimes(1);
			expect(suggestRequesterSpy.mock.calls).toEqual([
				[suggestRequest, suggestCacheKey], // first call
			]);

			const acRequest = {
				headers: {},
				method: 'GET',
				path: '/api/search/autocomplete.json',
				query: {
					q: undefined,
					redirectResponse: 'full',
					resultsFormat: 'native',
					siteId: ['8uyt2m'],
				},
			};
			const acCacheKey = '/api/search/autocomplete.json{"siteId":["8uyt2m"],"redirectResponse":"full","resultsFormat":"native"}';

			expect(acRequesterSpy).toHaveBeenCalledTimes(1);
			expect(acRequesterSpy.mock.calls).toEqual([
				[acRequest, acCacheKey], // first call
			]);

			expect(fetchApiMock).toHaveBeenCalledTimes(3);

			fetchApiMock.mockClear();
		});

		it('Meta method', async () => {
			const client = new Client({ siteId: '8uyt2m' });

			//@ts-ignore
			const metaRequester = client.requesters.meta.requesters.legacy;

			const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as unknown as Response));

			const metaprops = { siteId: '88uyt2m' };

			client.meta(metaprops);

			await wait();

			const metaRequest = {
				headers: {},
				method: 'GET',
				path: '/api/meta/meta.json',
				query: {
					siteId: '88uyt2m',
				},
			};

			const metaCacheKey = '/api/meta/meta.json{"siteId":"88uyt2m"}';

			expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
			expect(metaRequesterSpy.mock.calls).toEqual([[metaRequest, metaCacheKey]]);

			expect(fetchApiMock).toHaveBeenCalledTimes(1);
		});

		it('Search method', async () => {
			const client = new Client({ siteId: '8uyt2m' });

			//@ts-ignore
			const searchRequester = client.requesters.search.requesters.legacy;

			const searchRequesterSpy = jest.spyOn(searchRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as unknown as Response));

			const searchprops = { siteId: '8uyt2m' };

			client.search(searchprops);

			await wait();

			const searchparams = { headers: {}, method: 'GET', path: '/api/search/search.json', query: { resultsFormat: 'native', siteId: ['8uyt2m'] } };

			const searchcacheKey = '/api/search/search.json{"siteId":["8uyt2m"],"resultsFormat":"native"}';

			expect(searchRequesterSpy).toHaveBeenCalledTimes(1);
			expect(searchRequesterSpy.mock.calls).toEqual([[searchparams, searchcacheKey]]);
			expect(fetchApiMock).toHaveBeenCalledTimes(2);
			fetchApiMock.mockReset();
		});

		it('Trending method', async () => {
			const client = new Client({ siteId: '8uyt2m' });

			//@ts-ignore
			const suggestRequester = client.requesters.suggest;

			const suggestRequesterSpy = jest.spyOn(suggestRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as unknown as Response));

			const trendingprops = { siteId: '8uyt2m' };

			client.trending(trendingprops);

			await wait();

			const trendingparams = { headers: {}, method: 'GET', path: '/api/suggest/trending', query: { siteId: '8uyt2m' } };

			const trendingcacheKey = '/api/suggest/trending{"siteId":"8uyt2m"}';

			expect(suggestRequesterSpy).toHaveBeenCalledTimes(1);
			expect(suggestRequesterSpy.mock.calls).toEqual([[trendingparams, trendingcacheKey]]);
			expect(fetchApiMock).toHaveBeenCalledTimes(1);
			fetchApiMock.mockReset();
		});

		it('Recommend method', async () => {
			const client = new Client({ siteId: '8uyt2m' });

			//@ts-ignore
			const recommendRequester = client.requesters.recommend;

			const recommendRequesterSpy = jest.spyOn(recommendRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as unknown as Response));

			const recommendprops = { siteId: '8uyt2m', tag: 'dress' };

			client.recommend(recommendprops);

			await wait();

			const recommendparams = {
				headers: {},
				method: 'GET',
				path: '/api/personalized-recommendations/profile.json',
				query: {
					siteId: '8uyt2m',
					tag: 'dress',
				},
			};

			const recommendcacheKey = '/api/personalized-recommendations/profile.json{"tag":"dress","siteId":"8uyt2m"}';

			expect(recommendRequesterSpy).toHaveBeenCalledTimes(1);
			expect(recommendRequesterSpy.mock.calls).toEqual([[recommendparams, recommendcacheKey]]);
			expect(fetchApiMock).toHaveBeenCalledTimes(1);
			fetchApiMock.mockReset();
		});
	});
});
