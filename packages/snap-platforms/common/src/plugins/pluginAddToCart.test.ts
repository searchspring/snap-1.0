import { pluginAddToCart } from './pluginAddToCart';

import { MockClient } from '@searchspring/snap-shared';
import { Product, SearchStore } from '@searchspring/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@searchspring/snap-url-manager';
import { EventManager, Next } from '@searchspring/snap-event-manager';
import { Profiler } from '@searchspring/snap-profiler';
import { Logger } from '@searchspring/snap-logger';
import { Tracker } from '@searchspring/snap-tracker';
import { SearchController } from '@searchspring/snap-controller';

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
	urlManager: urlManager,
};
let searchConfig = {
	id: 'search',
};

const globals = { siteId: '8uyt2m' };
const searchConfigDefault = {
	id: 'search',
	globals: {
		filters: [],
	},
	settings: {},
};

let controller: SearchController;

// function to recreate fresh services for each test (otherwise globals are shared)
const createControllerServices = () => {
	return {
		client: new MockClient(globals, {}),
		store: new SearchStore(searchConfig, services),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	};
};

describe('common/pluginAddToCart', () => {
	beforeEach(() => {
		searchConfig = { ...searchConfigDefault };
		controller = new SearchController(searchConfig, createControllerServices());
		expect(controller.config.globals).toBeDefined();
		expect(controller.config.globals!.filters).toEqual([]);
	});

	it('assigns a function to get called when addToCart function is used on the controller', async () => {
		const fn = jest.fn();

		const pluginConfig = {
			enabled: true,
			function: fn,
		};

		const controller = new SearchController(searchConfig, createControllerServices());
		const onEventSpy = jest.spyOn(controller.eventManager, 'on');
		const fireEventSpy = jest.spyOn(controller.eventManager, 'fire');

		controller.plugin(pluginAddToCart, pluginConfig);

		// @ts-ignore
		expect(controller.eventManager.events.addToCart.functions[0].name).toBe('addToCartEvent');
		expect(onEventSpy).toHaveBeenCalledWith('addToCart', expect.any(Function));
		expect(controller.addToCart).toBeDefined();

		await controller.search();
		const products = [controller.store.results[0] as Product];

		controller.addToCart(products);

		expect(fireEventSpy).toHaveBeenCalledWith('addToCart', {
			controller,
			products,
		});

		expect(fn).toHaveBeenCalledWith(products, controller);

		fireEventSpy.mockClear();
		onEventSpy.mockClear();
	});

	it('throws an error if no function is set and addToCart is called', async () => {
		const pluginConfig = {
			enabled: true,
		};

		const controller = new SearchController(searchConfig, createControllerServices());
		const onEventSpy = jest.spyOn(controller.eventManager, 'on');
		const fireEventSpy = jest.spyOn(controller.eventManager, 'fire');
		const loggerSpy = jest.spyOn(controller.log, 'error');

		controller.plugin(pluginAddToCart, pluginConfig);

		// @ts-ignore
		expect(controller.eventManager.events.addToCart.functions[0].name).toBe('addToCartEvent');
		expect(onEventSpy).toHaveBeenCalledWith('addToCart', expect.any(Function));
		expect(controller.addToCart).toBeDefined();

		await controller.search();
		const products = [controller.store.results[0] as Product];

		controller.addToCart(products);
		expect(fireEventSpy).toHaveBeenCalledWith('addToCart', {
			controller,
			products,
		});

		expect(loggerSpy).toHaveBeenCalledWith('common/addToCart: Error - No function provided in config!');

		fireEventSpy.mockClear();
		onEventSpy.mockClear();
	});

	it('can be disabled via a config to the plugin', async () => {
		const fn = jest.fn();

		const pluginConfig = {
			enabled: false,
			function: fn,
		};

		const controller = new SearchController(searchConfig, createControllerServices());
		const eventSpy = jest.spyOn(controller.eventManager, 'on');
		const fireEventSpy = jest.spyOn(controller.eventManager, 'fire');

		controller.plugin(pluginAddToCart, pluginConfig);

		// @ts-ignore
		expect(controller.eventManager.events.addToCart).not.toBeDefined();
		expect(eventSpy).not.toHaveBeenCalledWith('addToCart', expect.any(Object));
		expect(controller.addToCart).toBeDefined();

		await controller.search();

		expect(eventSpy).not.toHaveBeenCalledWith('addToCart', {
			products: [controller.store.results[0]],
		});

		controller.addToCart([controller.store.results[0] as Product]);

		expect(fireEventSpy).toHaveBeenCalledWith('addToCart', {
			controller,
			products: [controller.store.results[0]],
		});

		expect(fn).not.toHaveBeenCalled();

		eventSpy.mockClear();
	});
});
