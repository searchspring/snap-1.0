import { v4 as uuidv4 } from 'uuid';

import { FinderStore } from '@searchspring/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@searchspring/snap-url-manager';
import { EventManager } from '@searchspring/snap-event-manager';
import { Profiler } from '@searchspring/snap-profiler';
import { Logger } from '@searchspring/snap-logger';
import { Tracker } from '@searchspring/snap-tracker';

import { FinderController } from './FinderController';
import { MockClient } from '../__mocks__/MockClient';

const globals = { siteId: 'ga9kq2' };

const finderHierarchyConfig = {
	id: 'accessoriesFinder',
	url: '',
	selector: '.searchspring-finder_accessories',
	wrapSelect: true,
	type: 'ymm',
	className: 'ss-vehicle-finder',
	fields: [
		{
			field: 'ss_accessory',
			levels: ['Type', 'Year', 'Make', 'Model'],
		},
	],
};

const finderNonhierarchyConfig = {
	id: 'tiresBySize',
	url: '',
	selector: '.searchspring-finder_tires_by_size',
	wrapSelect: false,
	fields: [{ field: 'custom_tire_size_1' }, { field: 'custom_tire_size_2' }, { field: 'custom_wheel_size' }],
};

let urlManager, services;

describe('Finder Controller', () => {
	beforeEach(() => {
		urlManager = new UrlManager(new QueryStringTranslator(), reactLinker).detach();
		services = { urlManager };

		finderHierarchyConfig.id = uuidv4().split('-').join('');
		finderNonhierarchyConfig.id = uuidv4().split('-').join('');
	});

	it('Hierarchy type can make selection', async () => {
		const controller = new FinderController(finderHierarchyConfig, {
			client: new MockClient(globals, { meta: { prefetch: false } }),
			store: new FinderStore(finderHierarchyConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		controller.client.mockDataFile = 'finder.include.ss_accessory';
		controller.init();
		await controller.search(); // /src/__mocks__/data/ga9kq2/searches/finder.include.ss_accessory.json

		expect(controller.store.selections.length).toBe(finderHierarchyConfig.fields[0].levels.length);

		controller.store.selections.forEach((selection, index) => {
			expect(selection.display).toBe('hierarchy');
			if (index === 0) {
				expect(selection.disabled).toBe(false);
			} else {
				expect(selection.disabled).toBe(true);
			}
		});
		const firstSelection = controller.store.selections[0];
		const field = firstSelection.field;
		const valueToSelect = firstSelection.values.filter((value) => value.count > 10)[0].value;

		spyOn(controller, 'search');
		controller.store.selections[0].select(valueToSelect);
		expect(controller.search).toHaveBeenCalled();

		expect(controller.urlManager.state.filter).toEqual({ [field]: [valueToSelect] });
		expect(controller.store.selections[0].field).toBe(field);
		expect(controller.store.selections[0].selected).toBe(valueToSelect);
	});

	it('Non-hierarchy type can make selection', async () => {
		const controller = new FinderController(finderNonhierarchyConfig, {
			client: new MockClient(globals, { meta: { prefetch: false } }),
			store: new FinderStore(finderNonhierarchyConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		controller.init();
		await controller.search();

		expect(controller.store.selections.length).toBe(finderNonhierarchyConfig.fields.length);

		controller.store.selections.forEach((selection) => {
			expect(selection.disabled).toBe(false);
		});
		const firstSelection = controller.store.selections[0];
		const field = firstSelection.field;
		const valueToSelect = firstSelection.values.filter((value) => value.count > 10)[0].value;

		spyOn(controller, 'search');
		controller.store.selections[0].select(valueToSelect);
		expect(controller.search).toHaveBeenCalled();

		expect(controller.urlManager.state.filter).toEqual({ [field]: [valueToSelect] });
		expect(controller.store.selections[0].field).toBe(field);
		expect(controller.store.selections[0].selected).toBe(valueToSelect);
	});

	const events = ['beforeSearch', 'afterSearch', 'afterStore'];
	events.forEach((event) => {
		it(`tests ${event} middleware err handled`, async () => {
			const controller = new FinderController(finderHierarchyConfig, {
				client: new MockClient(globals, { meta: { prefetch: false } }),
				store: new FinderStore(finderHierarchyConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});

			controller.on(event, () => false); // return false to stop middleware
			const spy = jest.spyOn(console, 'log');

			controller.init();
			await controller.search();

			expect(console.log).toHaveBeenCalledTimes(1);
			spy.mockClear();
		});
	});

	it('can call reset method', async () => {
		const controller = new FinderController(finderNonhierarchyConfig, {
			client: new MockClient(globals, { meta: { prefetch: false } }),
			store: new FinderStore(finderNonhierarchyConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		controller.init();
		await controller.search();

		const firstSelection = controller.store.selections[0];
		const field = firstSelection.field;
		const valueToSelect = firstSelection.values.filter((value) => value.count > 10)[0].value;

		controller.store.selections[0].select(valueToSelect);
		expect(controller.urlManager.state.filter).toEqual({ [field]: [valueToSelect] });
		expect(controller.store.selections[0].field).toBe(field);
		expect(controller.store.selections[0].selected).toBe(valueToSelect);

		controller.reset();
		await controller.search(); // reset() calls search() however is async, call again to assert
		expect(controller.urlManager.state.filter).not.toBeDefined();
		expect(controller.store.selections[0].selected).toBe('');
	});
});
