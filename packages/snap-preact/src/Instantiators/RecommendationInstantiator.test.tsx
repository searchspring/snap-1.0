import { RecommendationInstantiator, RecommendationInstantiatorConfig } from './RecommendationInstantiator';
import type { PluginGrouping } from '@searchspring/snap-controller';

import { Logger } from '@searchspring/snap-logger';
import { MockClient } from '@searchspring/snap-shared';

const DEFAULT_PROFILE = 'trending';

const Component = (props) => {
	const controller = props.controller;
	return <div className="injectedComponent">{controller.type}</div>;
};

const wait = (time = 1) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

const baseConfig: RecommendationInstantiatorConfig = {
	client: {
		globals: {
			siteId: '8uyt2m',
		},
	},
	components: {
		Default: async () => Component,
	},
	config: {
		branch: 'production',
	},
};

describe('RecommendationInstantiator', () => {
	beforeEach(() => {
		delete window.searchspring;
	});

	it('throws if configuration is not provided', () => {
		expect(() => {
			// @ts-ignore - testing bad instantiation
			const recommendationInstantiator = new RecommendationInstantiator();
		}).toThrow();
	});

	it('throws if configuration is missing branch config', () => {
		const invalidConfig = {
			client: {
				globals: {
					siteId: '8uyt2m',
				},
			},
			components: {
				Default: async () => Component,
			},
			config: {},
		};

		expect(() => {
			// @ts-ignore - testing bad instantiation
			const recommendationInstantiator = new RecommendationInstantiator(invalidConfig);
		}).toThrow();
	});

	it('throws if configuration is missing client globals', () => {
		const invalidConfig = {
			components: {
				Default: async () => Component,
			},
			config: {
				branch: 'production',
			},
		};

		expect(() => {
			// @ts-ignore - testing bad instantiation
			const recommendationInstantiator = new RecommendationInstantiator(invalidConfig);
		}).toThrow();
	});

	it('throws if configuration is not complete', () => {
		const invalidConfig = {
			components: {
				Default: async () => Component,
			},
			config: {
				branch: 'production',
			},
		};

		expect(() => {
			// @ts-ignore - testing bad instantiation
			const recommendationInstantiator = new RecommendationInstantiator(invalidConfig);
		}).toThrow();
	});

	it('throws if configuration is missing component mapping', () => {
		const invalidConfig = {
			client: {
				globals: {
					siteId: '8uyt2m',
				},
			},
			components: {},
			config: {
				branch: 'production',
			},
		};

		expect(() => {
			// @ts-ignore - testing bad instantiation
			const recommendationInstantiator = new RecommendationInstantiator(invalidConfig);
		}).toThrow();
	});

	it('creates a proper RecommendationInstantiator object with minimal configuration', () => {
		const recommendationInstantiator = new RecommendationInstantiator(baseConfig);

		// services are defined
		expect(recommendationInstantiator.logger).toBeDefined();
		expect(recommendationInstantiator.client).toBeDefined();
		expect(recommendationInstantiator.tracker).toBeDefined();

		// properties are defined
		expect(recommendationInstantiator.config).toStrictEqual(baseConfig);
		expect(recommendationInstantiator.context).toStrictEqual({});
		expect(recommendationInstantiator.controllers).toStrictEqual({});

		// @ts-ignore - checking private property
		expect(recommendationInstantiator.client.globals.siteId).toBe(baseConfig.client.globals.siteId);
	});

	it('skips creation and logs a warning when it finds a target without a profile', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend"></script>`;

		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		expect(() => {
			const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { client });
			expect(Object.keys(recommendationInstantiator.controllers).length).toBe(0);
			expect(clientSpy).toHaveBeenCalledTimes(0);
		}).toThrow();
	});

	it('logs an error when the profile response does not contain templateParameters', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}"></script>`;

		const logger = new Logger('RecommendationInstantiator ');
		const loggerSpy = jest.spyOn(logger, 'error');
		const client = new MockClient(baseConfig.client.globals, {});
		client.mockData.updateConfig({ recommend: { profile: 'missingParameters' } });
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { logger, client });
		await wait();
		expect(Object.keys(recommendationInstantiator.controllers).length).toBe(1);
		expect(clientSpy).toHaveBeenCalledTimes(1);
		expect(loggerSpy).toHaveBeenCalledTimes(1);
	});

	it('logs an error when the profile response does not contain a component', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}"></script>`;

		const logger = new Logger('RecommendationInstantiator ');
		const loggerSpy = jest.spyOn(logger, 'error');
		const client = new MockClient(baseConfig.client.globals, {});
		client.mockData.updateConfig({ recommend: { profile: 'missingComponent' } });
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { logger, client });
		await wait();
		expect(Object.keys(recommendationInstantiator.controllers).length).toBe(1);
		expect(clientSpy).toHaveBeenCalledTimes(1);
		expect(loggerSpy).toHaveBeenCalledTimes(1);
	});

	it('logs an error when the profile response does not find a mapped component', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}"></script>`;

		const logger = new Logger('RecommendationInstantiator ');
		const loggerSpy = jest.spyOn(logger, 'error');
		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		const modifiedConfig = {
			...baseConfig,
			components: {
				Recs: () => Component,
			},
		};

		const recommendationInstantiator = new RecommendationInstantiator(modifiedConfig, { logger, client });
		await wait();
		expect(Object.keys(recommendationInstantiator.controllers).length).toBe(1);
		expect(clientSpy).toHaveBeenCalledTimes(1);
		expect(loggerSpy).toHaveBeenCalledTimes(1);
	});

	it('creates a controllers when it finds a target', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}"></script>`;

		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { client });
		await wait();
		expect(Object.keys(recommendationInstantiator.controllers).length).toBe(1);
		Object.keys(recommendationInstantiator.controllers).forEach((controllerId, index) => {
			const controller = recommendationInstantiator.controllers[controllerId];
			expect(controllerId).toBe(`recommend_${controller.context.profile}${index}`);
		});
		expect(clientSpy).toHaveBeenCalledTimes(1);
	});

	it('creates a controller for each target it finds', async () => {
		document.body.innerHTML = `
		<script type="searchspring/recommend" profile="trending"></script>
		<script type="searchspring/recommend" profile="trending"></script>
		<script type="searchspring/recommend" profile="trending"></script>`;

		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { client });
		await wait();
		expect(Object.keys(recommendationInstantiator.controllers).length).toBe(3);
		Object.keys(recommendationInstantiator.controllers).forEach((controllerId, index) => {
			const controller = recommendationInstantiator.controllers[controllerId];
			expect(controllerId).toBe(`recommend_${controller.context.profile}${index}`);
		});
		expect(clientSpy).toHaveBeenCalledTimes(3);
	});

	it('makes the context found on the target available', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}">
			shopper = { id: 'snapdev' };
			product = 'sku1';
			options = {
				branch: 'testing',
				siteId: 'abc123',
				categories: ['cats'],
				limit: 5
			}
		</script>`;

		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { client });
		await wait();
		expect(Object.keys(recommendationInstantiator.controllers).length).toBe(1);
		Object.keys(recommendationInstantiator.controllers).forEach((controllerId, index) => {
			const controller = recommendationInstantiator.controllers[controllerId];
			expect(controller.context).toStrictEqual({
				profile: 'trending',
				shopper: {
					id: 'snapdev',
				},
				product: 'sku1',
				options: {
					branch: 'testing',
					categories: ['cats'],
					limit: 5,
					siteId: 'abc123',
				},
			});
		});

		expect(clientSpy).toHaveBeenCalledTimes(1);
		expect(clientSpy).toHaveBeenCalledWith({
			batched: true,
			branch: 'testing',
			categories: ['cats'],
			limits: 5,
			product: 'sku1',
			shopper: 'snapdev',
			siteId: 'abc123',
			tag: 'trending',
		});
	});

	it('will utilize attachments (plugins / middleware) added via methods upon creation of controllers', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}"></script>`;

		const plugin = jest.fn();
		const plugin2 = jest.fn();
		const plugin3 = jest.fn();
		const plugin4 = jest.fn();
		const middlewareFn = jest.fn();
		const middleware = async (things, next) => {
			middlewareFn();
			await next();
		};

		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(baseConfig, { client });
		recommendationInstantiator.plugin(plugin, 'param1', { thing: 'here' });
		recommendationInstantiator.plugin(plugin2);
		recommendationInstantiator.on('beforeSearch', middleware);
		recommendationInstantiator.on('afterSearch', middleware);
		recommendationInstantiator.on('afterStore', middleware);
		recommendationInstantiator.use({
			plugins: [[plugin3, 'p1', 'p2', 'p3'] as PluginGrouping, [plugin4] as PluginGrouping],
			middleware: {
				beforeSearch: middleware,
				afterSearch: middleware,
				afterStore: middleware,
			},
		});
		await wait();

		Object.keys(recommendationInstantiator.controllers).forEach((controllerId, index) => {
			const controller = recommendationInstantiator.controllers[controllerId];
			expect(clientSpy).toHaveBeenCalledTimes(1);
			expect(middlewareFn).toHaveBeenCalledTimes(6);
			expect(plugin).toHaveBeenCalledTimes(1);
			expect(plugin).toHaveBeenCalledWith(controller, 'param1', { thing: 'here' });
			expect(plugin2).toHaveBeenCalledTimes(1);
			expect(plugin2).toHaveBeenCalledWith(controller);
			expect(plugin3).toHaveBeenCalledTimes(1);
			expect(plugin3).toHaveBeenCalledWith(controller, 'p1', 'p2', 'p3');
			expect(plugin4).toHaveBeenCalledTimes(1);
			expect(plugin4).toHaveBeenCalledWith(controller);
		});
	});

	it('will utilize config based attachments (plugins / middleware) on created controllers', async () => {
		document.body.innerHTML = `<script type="searchspring/recommend" profile="${DEFAULT_PROFILE}"></script>`;

		const plugin = jest.fn();
		const plugin2 = jest.fn();
		const middlewareFn = jest.fn();
		const middleware = async (things, next) => {
			middlewareFn();
			await next();
		};

		const attachmentConfig = {
			...baseConfig,
			config: {
				branch: baseConfig.config.branch,
				plugins: [[plugin, 'param1', { thing: 'here' }] as PluginGrouping, [plugin2] as PluginGrouping],
				middleware: {
					beforeSearch: middleware,
					afterSearch: middleware,
					afterStore: middleware,
				},
			},
		};

		const client = new MockClient(baseConfig.client.globals, {});
		const clientSpy = jest.spyOn(client, 'recommend');

		const recommendationInstantiator = new RecommendationInstantiator(attachmentConfig as RecommendationInstantiatorConfig, { client });
		await wait();

		Object.keys(recommendationInstantiator.controllers).forEach((controllerId, index) => {
			const controller = recommendationInstantiator.controllers[controllerId];
			expect(clientSpy).toHaveBeenCalledTimes(1);
			expect(middlewareFn).toHaveBeenCalledTimes(3);
			expect(plugin).toHaveBeenCalledTimes(1);
			expect(plugin).toHaveBeenCalledWith(controller, 'param1', { thing: 'here' });
			expect(plugin2).toHaveBeenCalledTimes(1);
			expect(plugin2).toHaveBeenCalledWith(controller);
		});
	});
});
