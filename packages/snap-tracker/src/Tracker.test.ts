import deepmerge from 'deepmerge';
import { Tracker } from './Tracker';
import { BeaconCategory, BeaconType } from './types';

const globals = {
	siteId: 'xxxzzz',
};

const resetAllCookies = () => {
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i];
		const eqPos = cookie.indexOf('=');
		const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	}
};

Object.defineProperty(global.window.navigator, 'cookieEnabled', {
	writable: true,
	value: true,
});

describe('Script Block Tracking', () => {
	afterEach(() => {
		global.document.body.innerHTML = '';
	});

	afterAll(() => {
		resetAllCookies();
	});

	it('can target track/shopper/login', async () => {
		const shopper = { id: Date.now().toString() };
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/shopper/login">
				shopper = ${JSON.stringify(shopper)};
			</script>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track.shopper, 'login');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith(shopper, undefined);

		trackEvent.mockRestore();
	});

	it('can target track/product/view', async () => {
		const item = { sku: 'abc123' };
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/product/view">
				item = ${JSON.stringify(item)};
			</script>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track.product, 'view');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith(item, undefined);

		trackEvent.mockRestore();
	});

	it('can target track/cart/view', async () => {
		const items = [{ sku: 'abc123' }];
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/cart/view">
				items = ${JSON.stringify(items)};
			</script>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track.cart, 'view');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith({ items }, undefined);

		trackEvent.mockRestore();
	});

	it('can target track/order/transaction', async () => {
		const order = {
			id: '123456',
			total: '9.99',
			city: 'Los Angeles',
			state: 'CA',
			country: 'US',
		};
		const items = [
			{
				sku: 'abc123',
				childSku: 'abc123_a',
				qty: '1',
				price: '9.99',
			},
		];
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/order/transaction">
				order = ${JSON.stringify(order)};
				items = ${JSON.stringify(items)};
			</script>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track.order, 'transaction');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith({ order, items }, undefined);

		trackEvent.mockRestore();
	});

	it('logs console error if invalid type attribute', async () => {
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/dne"></script>
		</div>`;

		new Tracker(globals);
		const consoleError = jest.spyOn(console, 'error');

		await new Promise((r) => setTimeout(r));
		expect(consoleError).toHaveBeenCalledTimes(1);

		consoleError.mockRestore();
	});
});

describe('Attribute Click Tracking', () => {
	afterEach(() => {
		global.document.body.innerHTML = '';
	});

	afterAll(() => {
		resetAllCookies();
	});

	it('can track ss-track-cart-add', async () => {
		const attribute = 'ss-track-cart-add';
		const skus = ['abc123'];

		global.document.body.innerHTML = `<div>
			<button ${attribute}='${skus.join(',')}'></button>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.cookies.cart, 'add');

		const clickEvent = new Event('click', {
			bubbles: true, // required because our click event is attached to the document
		});

		const button = global.document.querySelector(`[${attribute}]`);
		button.dispatchEvent(clickEvent);

		expect(trackEvent).toHaveBeenCalledWith(skus);
		expect(global.document.cookie).toContain(`ssCartProducts=${encodeURIComponent(skus.join(','))}`);

		trackEvent.mockRestore();
	});

	it('can track ss-track-cart-remove', async () => {
		const attribute = 'ss-track-cart-remove';
		const skus = ['abc123'];

		global.document.body.innerHTML = `<div>
			<button ${attribute}='${skus.join(',')}'></button>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.cookies.cart, 'remove');

		const clickEvent = new Event('click', {
			bubbles: true, // required because our click event is attached to the document
		});

		const button = global.document.querySelector(`[${attribute}]`);
		button.dispatchEvent(clickEvent);

		expect(trackEvent).toHaveBeenCalledWith(skus);
		expect(global.document.cookie).not.toContain(`${skus[0]}`);

		trackEvent.mockRestore();
	});

	it('can track ss-track-cart-clear', async () => {
		const attribute = 'ss-track-cart-clear';

		global.document.body.innerHTML = `<div>
			<button ${attribute}></button>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.cookies.cart, 'clear');

		// first add products to cart
		const skus = ['abc123', 'def456'];
		tracker.cookies.cart.add(skus);
		expect(global.document.cookie).toContain(`ssCartProducts=${encodeURIComponent(skus.join(','))}`);

		const clickEvent = new Event('click', {
			bubbles: true, // required because our click event is attached to the document
		});

		const button = global.document.querySelector(`[${attribute}]`);
		button.dispatchEvent(clickEvent);

		expect(trackEvent).toHaveBeenCalledTimes(1);
		expect(global.document.cookie).not.toContain(`${skus[0]}`);
		expect(global.document.cookie).not.toContain(`${skus[1]}`);

		trackEvent.mockRestore();
	});

	it('can track ss-track-intellisuggest and ss-track-intellisuggest-signature', async () => {
		const intellisuggestData = 'intellisuggestData';
		const intellisuggestSignature = 'intellisuggestSignature';
		const href = '/search';

		global.document.body.innerHTML = `<div>
			<a 
				href='${href}' 
				ss-track-intellisuggest='${intellisuggestData}' 
				ss-track-intellisuggest-signature='${intellisuggestSignature}'>
			</a>
		</div>`;

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track.product, 'click');

		const clickEvent = new Event('click', {
			bubbles: true, // required because our click event is attached to the document
		});

		const button = global.document.querySelector('[ss-track-intellisuggest][ss-track-intellisuggest-signature]');
		button.dispatchEvent(clickEvent);

		expect(trackEvent).toHaveBeenCalledWith({
			intellisuggestData,
			intellisuggestSignature,
			href,
		});

		trackEvent.mockRestore();
	});
});
describe('Tracker', () => {
	afterAll(() => {
		resetAllCookies();
	});

	afterEach(() => {
		(global.window as any).navigator.cookieEnabled = true;
	});

	it('can create instance', async () => {
		const tracker = new Tracker(globals);

		expect(tracker.globals).toStrictEqual(globals);
		expect(tracker.localStorage).toBeDefined();
		expect(tracker.context).toBeDefined();
		expect(tracker.context.userId).toBeDefined();
		expect(tracker.context.sessionId).toBeDefined();
		expect(tracker.context.shopperId).not.toBeDefined(); // should not be defined
		expect(tracker.context.pageLoadId).toBeDefined();
		expect(tracker.context.website).toBeDefined();
		expect(tracker.context.website.trackingCode).toBeDefined();
		expect(tracker.context.website.trackingCode).toStrictEqual(globals.siteId);
		expect(tracker.track).toBeDefined();
		expect(tracker.track.event).toBeDefined();
		expect(tracker.track.shopper.login).toBeDefined();
		expect(tracker.track.product.view).toBeDefined();
		expect(tracker.track.product.click).toBeDefined();
		expect(tracker.track.cart.view).toBeDefined();
		expect(tracker.track.order.transaction).toBeDefined();
	});

	it('throws if globals does not contain siteId', async () => {
		expect(() => {
			// @ts-ignore
			new Tracker({});
		}).toThrow();
	});

	it('can pass config and use custom namespace', async () => {
		const config = {
			id: 'trackerrrr',
		};

		const tracker = new Tracker(globals);

		expect(tracker.localStorage.key).toStrictEqual(`ss-track-${globals.siteId}-local`);

		const tracker2 = new Tracker(globals, config);

		expect(tracker2.localStorage.key).toStrictEqual(`ss-${config.id}-${globals.siteId}-local`);
	});

	it('can persist userId in storage if cookies are disabled', async () => {
		resetAllCookies();
		// @ts-ignore
		global.window.navigator.cookieEnabled = false;

		const tracker = new Tracker(globals);

		expect(tracker.context.userId).toBeDefined();

		expect(global.document.cookie).not.toContain(`ssUserId`);
		expect(tracker.context.userId).toStrictEqual(global.window.localStorage.getItem('ssUserId'));
	});

	it('can invoke sendPreflight GET', async () => {
		const tracker = new Tracker(globals);

		// only add 1 product to be under threshold and still generate request
		const items = ['abc123'];
		tracker.cookies.cart.add(items);

		const sendPreflight = jest.spyOn(tracker, 'sendPreflight');
		const xhrMock: Partial<XMLHttpRequest> = {
			open: jest.fn(),
			send: jest.fn(),
			setRequestHeader: jest.fn(),
			readyState: 4,
			status: 200,
			response: 'Hello World!',
		};
		const request = jest.spyOn(global.window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);

		await tracker.sendPreflight();

		expect(sendPreflight).toHaveBeenCalledTimes(1);

		const querystring = `?userId=${encodeURIComponent(tracker.context.userId)}&siteId=${encodeURIComponent(
			tracker.globals.siteId
		)}&cart=${encodeURIComponent(items[0])}`;
		expect(xhrMock.open).toBeCalledWith(
			'GET',
			`https://${tracker.globals.siteId}.a.searchspring.io/api/personalization/preflightCache${querystring}`
		);

		sendPreflight.mockRestore();
		request.mockRestore();
	});

	it('can invoke sendPreflight POST', async () => {
		const tracker = new Tracker(globals);

		// populate cart cookie so charsParams threshold is met for GET request
		const items = [];
		const minBytesThreshold = 1024;
		const skuPrefix = 'a_very_long_product_sku_to_fill_charsParams_bytes_'; // 50 chars
		for (let i = 0; i < Math.ceil(minBytesThreshold / skuPrefix.length); i++) {
			// = 21 loops
			items.push(`${skuPrefix}_${i}`);
		}

		tracker.cookies.cart.add(items); // 51 * 20 = 1050 bytes
		expect(items.join().length).toBeGreaterThanOrEqual(minBytesThreshold);

		const sendPreflight = jest.spyOn(tracker, 'sendPreflight');
		const xhrMock: Partial<XMLHttpRequest> = {
			open: jest.fn(),
			send: jest.fn(),
			setRequestHeader: jest.fn(),
			readyState: 4,
			status: 200,
			response: 'Hello World!',
		};
		const request = jest.spyOn(global.window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);

		await tracker.sendPreflight();

		expect(sendPreflight).toHaveBeenCalledTimes(1);
		expect(xhrMock.open).toBeCalledWith('POST', `https://${tracker.globals.siteId}.a.searchspring.io/api/personalization/preflightCache`);

		sendPreflight.mockRestore();
		request.mockRestore();
	});

	it('can invoke sendEvents', async () => {
		const tracker = new Tracker(globals, { id: `track-${Date.now().toString()}` }); // custom id to create separate localStorage pool

		const xhrMock: Partial<XMLHttpRequest> = {
			open: jest.fn(),
			send: jest.fn(),
			setRequestHeader: jest.fn(),
			readyState: 4,
			status: 200,
			response: 'Hello World!',
		};
		const request = jest.spyOn(global.window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);

		tracker.track.product.view({ sku: 'abc123' }); // ensure at least 1 beacon event is in the pool
		const sendEvents = jest.spyOn(tracker, 'sendEvents');

		await tracker.sendEvents();
		await new Promise((r) => setTimeout(r, 150 + 1)); // BATCH_TIMEOUT + 1

		expect(sendEvents).toHaveBeenCalledTimes(1);
		expect(xhrMock.open).toBeCalledWith('POST', `https://beacon.searchspring.io/beacon`);

		sendEvents.mockRestore();
		request.mockRestore();
	});

	it('can invoke sendEvents with events', async () => {
		const tracker = new Tracker(globals, { id: `track-${Date.now().toString()}` }); // custom id to create separate localStorage pool

		const xhrMock: Partial<XMLHttpRequest> = {
			open: jest.fn(),
			send: jest.fn(),
			setRequestHeader: jest.fn(),
			readyState: 4,
			status: 200,
			response: 'Hello World!',
		};
		const request = jest.spyOn(global.window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);

		const sendEvents = jest.spyOn(tracker, 'sendEvents');

		const events = [{ hello: 'world' }];
		// @ts-ignore
		await tracker.sendEvents(events);
		await new Promise((r) => setTimeout(r, 150 + 1)); // BATCH_TIMEOUT + 1

		expect(sendEvents).toHaveBeenCalledTimes(1);
		expect(xhrMock.open).toBeCalledWith('POST', `https://beacon.searchspring.io/beacon`);
		expect(xhrMock.send).toBeCalledWith(JSON.stringify(events[0]));

		sendEvents.mockRestore();
		request.mockRestore();
	});

	it('tests track.shopper.login with cookies disabled', async () => {
		resetAllCookies();
		// @ts-ignore
		global.window.navigator.cookieEnabled = false;

		const tracker = new Tracker(globals);
		const shopperLogin = jest.spyOn(tracker.track.shopper, 'login');

		const shopperId = Date.now().toString();

		expect(global.document.cookie).not.toContain('ssShopperId');

		const payload = { id: shopperId };
		await tracker.track.shopper.login(payload);

		expect(global.document.cookie).not.toContain('ssShopperId');

		shopperLogin.mockRestore();
	});

	it('can invoke track.shopper.login', async () => {
		const tracker = new Tracker(globals);
		const shopperLogin = jest.spyOn(tracker.track.shopper, 'login');

		const shopperId = Date.now().toString();
		const payload = { id: shopperId };
		await tracker.track.shopper.login(payload);

		expect(tracker.context.shopperId).toStrictEqual(shopperId);
		expect(shopperLogin).toHaveBeenCalledWith(payload);

		shopperLogin.mockRestore();
	});

	it('can invoke track.shopper.login with siteId override', async () => {
		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track, 'event');
		const shopperLogin = jest.spyOn(tracker.track.shopper, 'login');

		const shopperId = Date.now().toString();
		const siteId = 'xxxxxx';
		const payload = { id: shopperId };
		await tracker.track.shopper.login(payload, siteId);

		expect(trackEvent).toHaveBeenCalledWith({
			type: BeaconType.LOGIN,
			category: BeaconCategory.PERSONALIZATION,
			context: deepmerge(tracker.context, {
				context: {
					website: {
						trackingCode: siteId,
					},
				},
			}),
			event: {},
		});
		expect(shopperLogin).toHaveBeenCalledWith(payload, siteId);

		trackEvent.mockRestore();
		shopperLogin.mockRestore();
	});

	it('logs console error if no id provided to track.shopper.login', async () => {
		const tracker = new Tracker(globals);
		const shopperLogin = jest.spyOn(tracker.track.shopper, 'login');
		const consoleError = jest.spyOn(console, 'error');

		const shopperId = '';
		const payload = { id: shopperId };
		await tracker.track.shopper.login(payload);

		expect(shopperLogin).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalled();

		shopperLogin.mockRestore();
		consoleError.mockRestore();
	});

	it('can invoke track.product.view event method', async () => {
		const tracker = new Tracker(globals);
		const eventFn = jest.spyOn(tracker.track.product, 'view');

		const payload = {
			sku: 'abc123',
			childSku: 'abc123_a',
		};
		const beaconEvent = await tracker.track.product.view(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.PRODUCT);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.PAGEVIEW);
		expect(beaconEvent.event).toStrictEqual(payload);

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('can invoke track.product.view with siteId override', async () => {
		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track, 'event');
		const productView = jest.spyOn(tracker.track.product, 'view');

		const siteId = 'xxxxxx';
		const payload = {
			sku: 'abc123',
			childSku: 'abc123_a',
		};
		await tracker.track.product.view(payload, siteId);

		expect(trackEvent).toHaveBeenCalledWith({
			type: BeaconType.PRODUCT,
			category: BeaconCategory.PAGEVIEW,
			context: deepmerge(tracker.context, {
				context: {
					website: {
						trackingCode: siteId,
					},
				},
			}),
			event: { ...payload },
		});
		expect(productView).toHaveBeenCalledWith(payload, siteId);

		trackEvent.mockRestore();
		productView.mockRestore();
	});

	it('logs console error if no sku or childSku is provided to track.product.view', async () => {
		const tracker = new Tracker(globals);
		const eventFn = jest.spyOn(tracker.track.product, 'view');
		const consoleError = jest.spyOn(console, 'error');

		const payload = {};
		await tracker.track.product.view(payload);

		expect(eventFn).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalled();

		consoleError.mockRestore();
		eventFn.mockRestore();
	});

	it('can invoke track.product.click event method', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track.product, 'click');

		const payload = {
			intellisuggestData: 'abc123',
			intellisuggestSignature: 'def456',
			href: '/test',
		};
		const beaconEvent = await tracker.track.product.click(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.CLICK);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.INTERACTION);
		expect(beaconEvent.event).toStrictEqual(payload);

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);
		eventFn.mockRestore();
	});

	it('logs console error if no intellisuggestData or intellisuggestSignature is provided to track.product.click', async () => {
		const tracker = new Tracker(globals);
		const productClick = jest.spyOn(tracker.track.product, 'click');
		const consoleError = jest.spyOn(console, 'error');

		let payload = {
			// intellisuggestData: 'abc123',
			// intellisuggestSignature: 'def456',
		};
		// @ts-ignore
		await tracker.track.product.click(payload);

		expect(productClick).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(1);

		payload = {
			intellisuggestData: 'abc123',
			// intellisuggestSignature: 'def456',
		};
		// @ts-ignore
		await tracker.track.product.click(payload);

		expect(productClick).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(2);

		payload = {
			// intellisuggestData: 'abc123',
			intellisuggestSignature: 'def456',
		};
		// @ts-ignore
		await tracker.track.product.click(payload);

		expect(productClick).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(3);

		consoleError.mockRestore();
		productClick.mockRestore();
	});

	it('can invoke track.product.click with siteId override', async () => {
		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track, 'event');
		const productClick = jest.spyOn(tracker.track.product, 'click');

		const siteId = 'xxxxxx';
		const payload = {
			intellisuggestData: 'abc123',
			intellisuggestSignature: 'def456',
		};
		await tracker.track.product.click(payload, siteId);

		expect(trackEvent).toHaveBeenCalledWith({
			type: BeaconType.CLICK,
			category: BeaconCategory.INTERACTION,
			context: deepmerge(tracker.context, {
				context: {
					website: {
						trackingCode: siteId,
					},
				},
			}),
			event: { ...payload },
		});
		expect(productClick).toHaveBeenCalledWith(payload, siteId);
		productClick.mockRestore();
		trackEvent.mockRestore();
	});

	it('can invoke track.cart.view event method', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track.cart, 'view');

		const payload = {
			items: [
				{
					sku: 'abc123',
					childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
				{
					sku: 'def456',
					childSku: 'def456_a',
					qty: '2',
					price: '10.99',
				},
			],
		};
		const beaconEvent = await tracker.track.cart.view(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.CART);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.CARTVIEW);
		expect(beaconEvent.event).toStrictEqual(payload);

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('can invoke track.cart.view event method without item skus', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track.cart, 'view');

		const payload = {
			items: [
				{
					childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
				{
					childSku: 'def456_a',
					qty: '2',
					price: '10.99',
				},
			],
		};
		const beaconEvent = await tracker.track.cart.view(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.CART);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.CARTVIEW);
		expect(beaconEvent.event).toStrictEqual(payload);

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('can invoke track.cart.view event method without childSku', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track.cart, 'view');

		const payload = {
			items: [
				{
					sku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
				{
					sku: 'def456_a',
					qty: '2',
					price: '10.99',
				},
			],
		};
		const beaconEvent = await tracker.track.cart.view(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.CART);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.CARTVIEW);
		expect(beaconEvent.event).toStrictEqual(payload);

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('logs console error if no items is provided to track.cart.view', async () => {
		const tracker = new Tracker(globals);
		const eventFn = jest.spyOn(tracker.track.cart, 'view');
		const consoleError = jest.spyOn(console, 'error');

		let consoleCount = 0;
		let payload = {
			items: [],
		};
		await tracker.track.cart.view(payload);
		consoleCount++;

		expect(eventFn).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(consoleCount);

		// without qty, price, childSku or sku
		payload = {
			items: [
				{
					childSku: 'abc123_a',
					// qty: '1',
					price: '9.99',
				},
				{
					childSku: 'def456_a',
					qty: '2',
					// price: '10.99',
				},
				{
					// childSku: 'def456_a',
					qty: '2',
					price: '10.99',
				},
			],
		};
		await tracker.track.cart.view(payload);
		consoleCount += payload.items.length;

		expect(eventFn).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(consoleCount);

		consoleError.mockRestore();
		eventFn.mockRestore();
	});

	it('can invoke track.cart.view with siteId override', async () => {
		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track, 'event');
		const cartView = jest.spyOn(tracker.track.cart, 'view');

		const siteId = 'xxxxxx';
		const payload = {
			items: [
				{
					childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
				{
					childSku: 'def456_a',
					qty: '2',
					price: '10.99',
				},
			],
		};
		await tracker.track.cart.view(payload, siteId);

		expect(trackEvent).toHaveBeenCalledWith({
			type: BeaconType.CART,
			category: BeaconCategory.CARTVIEW,
			context: deepmerge(tracker.context, {
				context: {
					website: {
						trackingCode: siteId,
					},
				},
			}),
			event: { ...payload },
		});
		expect(cartView).toHaveBeenCalledWith(payload, siteId);

		cartView.mockRestore();
		trackEvent.mockRestore();
	});

	it('can invoke track.order.transaction event method', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track.order, 'transaction');

		const payload = {
			order: {
				id: '123456',
				total: '9.99',
				city: 'Los Angeles',
				state: 'CA',
				country: 'US',
			},
			items: [
				{
					sku: 'abc123',
					childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
			],
		};
		const beaconEvent = await tracker.track.order.transaction(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.ORDER);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.ORDERVIEW);
		expect(beaconEvent.event).toStrictEqual({
			orderId: payload.order.id,
			total: payload.order.total,
			city: payload.order.city,
			state: payload.order.state,
			country: payload.order.country,
			items: payload.items,
		});

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('can invoke track.order.transaction event method without item skus', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track.order, 'transaction');

		const payload = {
			order: {
				id: '123456',
				total: '9.99',
				city: 'Los Angeles',
				state: 'CA',
				country: 'US',
			},
			items: [
				{
					sku: 'abc123',
					childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
			],
		};
		const beaconEvent = await tracker.track.order.transaction(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.ORDER);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.ORDERVIEW);
		expect(beaconEvent.event).toStrictEqual({
			orderId: payload.order.id,
			total: payload.order.total,
			city: payload.order.city,
			state: payload.order.state,
			country: payload.order.country,
			items: payload.items,
		});

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('logs console error if no items is provided to track.order.transaction', async () => {
		const tracker = new Tracker(globals);
		const eventFn = jest.spyOn(tracker.track.order, 'transaction');
		const consoleError = jest.spyOn(console, 'error');

		let consoleCount = 0;
		let payload = {
			order: {
				id: '123456',
				total: '9.99',
				city: 'Los Angeles',
				state: 'CA',
				country: 'US',
			},
			items: [],
		};
		// @ts-ignore
		await tracker.track.order.transaction(payload);
		consoleCount++;

		expect(eventFn).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(consoleCount);

		// invalid items (no qty, no price, no sku or childSku)
		payload = {
			order: {
				id: '123456',
				total: '9.99',
				city: 'Los Angeles',
				state: 'CA',
				country: 'US',
			},
			items: [
				{
					sku: 'abc123',
					childSku: 'abc123_a',
					// qty: '1',
					price: '9.99',
				},
				{
					sku: 'abc123',
					childSku: 'abc123_a',
					qty: '1',
					// price: '9.99',
				},
				{
					// sku: 'abc123',
					// childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
			],
		};
		// @ts-ignore
		await tracker.track.order.transaction(payload);
		consoleCount += payload.items.length;

		expect(eventFn).toHaveBeenCalledWith(payload);
		expect(consoleError).toHaveBeenCalledTimes(consoleCount);

		consoleError.mockRestore();
		eventFn.mockRestore();
	});

	it('can invoke track.order.transaction with siteId override', async () => {
		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.track, 'event');
		const orderTransaction = jest.spyOn(tracker.track.order, 'transaction');

		const siteId = 'xxxxxx';
		const payload = {
			order: {
				id: '123456',
				total: '9.99',
				city: 'Los Angeles',
				state: 'CA',
				country: 'US',
			},
			items: [
				{
					sku: 'abc123',
					childSku: 'abc123_a',
					qty: '1',
					price: '9.99',
				},
			],
		};
		await tracker.track.order.transaction(payload, siteId);

		expect(trackEvent).toHaveBeenCalledWith({
			type: BeaconType.ORDER,
			category: BeaconCategory.ORDERVIEW,
			context: deepmerge(tracker.context, {
				context: {
					website: {
						trackingCode: siteId,
					},
				},
			}),
			event: {
				orderId: payload.order.id,
				total: payload.order.total,
				city: payload.order.city,
				state: payload.order.state,
				country: payload.order.country,
				items: payload.items,
			},
		});
		expect(orderTransaction).toHaveBeenCalledWith(payload, siteId);

		orderTransaction.mockRestore();
		trackEvent.mockRestore();
	});

	it('can invoke generic track.event method', async () => {
		const tracker = new Tracker(globals);

		const eventFn = jest.spyOn(tracker.track, 'event');

		const payload = {
			type: BeaconType.CUSTOM,
			category: BeaconCategory.CUSTOM,
			event: {
				custom: '123',
			},
		};
		const beaconEvent = await tracker.track.event(payload);

		expect(beaconEvent.type).toStrictEqual(BeaconType.CUSTOM);
		expect(beaconEvent.category).toStrictEqual(BeaconCategory.CUSTOM);
		expect(beaconEvent.event).toStrictEqual(payload.event);

		expect(eventFn).toHaveBeenCalledTimes(1);
		expect(eventFn).toHaveBeenCalledWith(payload);

		eventFn.mockRestore();
	});

	it('can invoke cookies.cart.set', async () => {
		// Tracker.ts itself does not use cookies.cart.set however Snap.tsx does

		const tracker = new Tracker(globals);
		const trackEvent = jest.spyOn(tracker.cookies.cart, 'set');

		// first add products to cart
		const skus = ['abc123', 'def456', 'ghi789'];
		tracker.cookies.cart.set(skus);
		expect(global.document.cookie).toContain(`ssCartProducts=${encodeURIComponent(skus.join(','))}`);

		expect(trackEvent).toHaveBeenCalledTimes(1);
		expect(global.document.cookie).toContain(`${skus[0]}`);
		expect(global.document.cookie).toContain(`${skus[1]}`);
		expect(global.document.cookie).toContain(`${skus[2]}`);

		trackEvent.mockRestore();
	});
});
