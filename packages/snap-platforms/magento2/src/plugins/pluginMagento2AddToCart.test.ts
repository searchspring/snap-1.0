import { pluginMagento2AddToCart as pluginAddToCart } from './pluginMagento2AddToCart';
import { MockClient } from '@searchspring/snap-shared';
import { Product, SearchStore } from '@searchspring/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@searchspring/snap-url-manager';
import { EventManager } from '@searchspring/snap-event-manager';
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

describe('magento2/addToCart', () => {
	beforeEach(() => {
		searchConfig = { ...searchConfigDefault };
		controller = new SearchController(searchConfig, createControllerServices());
		expect(controller.config.globals).toBeDefined();
		expect(controller.config.globals!.filters).toEqual([]);
	});

	it('assigns a function to get called when addToCart function is used on the controller', async () => {
		const controller = new SearchController(searchConfig, createControllerServices());

		const onEventSpy = jest.spyOn(controller.eventManager, 'on');
		const fireEventSpy = jest.spyOn(controller.eventManager, 'fire');

		expect(controller.addToCart).toBeDefined();

		await controller.init();
		await controller.search();

		pluginAddToCart(controller);

		controller.addToCart([controller.store.results[0] as Product]);

		expect(fireEventSpy).toHaveBeenCalledWith('addToCart', {
			controller,
			products: [controller.store.results[0]],
		});
		expect(onEventSpy).toHaveBeenCalledWith('addToCart', expect.any(Function));

		// @ts-ignore
		expect(controller.eventManager.events.addToCart.functions[0].name).toBe('addToCartMagento2Event');
		fireEventSpy.mockClear();
		onEventSpy.mockClear();
	});

	it('can be disabled', async () => {
		const pluginConfig = {
			enabled: false,
		};

		const controller = new SearchController(searchConfig, createControllerServices());

		const eventSpy = jest.spyOn(controller.eventManager, 'on');
		const fireEventSpy = jest.spyOn(controller.eventManager, 'fire');

		expect(controller.addToCart).toBeDefined();

		await controller.search();

		pluginAddToCart(controller, pluginConfig);

		expect(eventSpy).not.toHaveBeenCalledWith('addToCart', {
			products: [controller.store.results[0]],
		});

		controller.addToCart([controller.store.results[0] as Product]);

		expect(fireEventSpy).toHaveBeenCalledWith('addToCart', {
			controller,
			products: [controller.store.results[0]],
		});

		expect(eventSpy).not.toHaveBeenCalledWith('addToCart', expect.any(Object));

		eventSpy.mockClear();
	});
});
