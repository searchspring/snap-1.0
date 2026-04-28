import 'whatwg-fetch';
import { v4 as uuidv4 } from 'uuid';

import { ChatStore } from '@athoscommerce/snap-store-mobx';
import type { ChatStoreConfig, Product } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager, Next } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockClient } from '@athoscommerce/snap-shared';
import type { ChatRequestModel, ProductsResponseModel } from '@athoscommerce/snap-client';

import { ChatController } from './ChatController';
import type { ChatControllerConfig } from '../types';

const globals = { siteId: '8uyt2m' };

const chatConfigDefault: ChatControllerConfig = {
	id: 'chat',
	settings: {
		feedbackAfterMessages: 3,
	},
};

let chatConfig: ChatControllerConfig;
const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);

// mocks fetch so beacon client does not make network requests
jest.spyOn(global.window, 'fetch').mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

function createController(configOverrides?: Partial<ChatControllerConfig>, mockClient?: MockClient): ChatController {
	const config = { ...chatConfig, ...configOverrides };
	const client = mockClient || new MockClient(globals, {});
	return new ChatController(config, {
		client,
		store: new ChatStore(config),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	});
}

describe.skip('Chat Controller', () => {
	beforeEach(() => {
		chatConfig = { ...chatConfigDefault };
		chatConfig.id = uuidv4().split('-').join('');
	});

	describe('instantiation', () => {
		it('can create a ChatController instance', () => {
			const controller = createController();

			expect(controller instanceof ChatController).toBeTruthy();
			expect(controller.store instanceof ChatStore).toBeTruthy();
			expect(controller.config.id).toBe(chatConfig.id);
			expect(controller.type).toBe('chat');
		});

		it('deep merges config with defaults', () => {
			const controller = createController({
				settings: {
					feedbackAfterMessages: 5,
				},
			});

			expect(controller.config.settings?.feedbackAfterMessages).toBe(5);
		});

		it('applies default config values', () => {
			const controller = createController({});

			// defaultConfig sets feedbackAfterMessages to 3 via deepmerge in constructor
			expect(controller.config.settings?.feedbackAfterMessages).toBe(3);
		});
	});

	describe('checkChatStatus', () => {
		it('checks chat status and sets store values when enabled', async () => {
			const controller = createController();

			const result = await controller.checkChatStatus();

			expect(result).toBe(true);
			expect(controller.store.chatEnabled).toBe(true);
			expect(controller.store.suggestedQuestions.length).toBeGreaterThan(0);
			expect(controller.store.welcomeMessage).toBeTruthy();
			expect(controller.store.features.imageSearch.enabled).toBe(true);
			expect(controller.store.features.similarProducts.enabled).toBe(true);
		});

		it('checks chat status and sets store values when disabled', async () => {
			const mockClient = new MockClient(globals, {});
			mockClient.mockData.updateConfig({ chatStatus: 'chatStatus.disabled' });
			const controller = createController({}, mockClient);

			const result = await controller.checkChatStatus();

			expect(result).toBe(false);
			expect(controller.store.chatEnabled).toBe(false);
			expect(controller.store.suggestedQuestions).toEqual([]);
			expect(controller.store.welcomeMessage).toBe('');
			expect(controller.store.features.imageSearch.enabled).toBe(false);
		});

		it('falls back to default response when chatStatus API throws', async () => {
			const controller = createController();
			controller.client.chatStatus = jest.fn().mockRejectedValue(new Error('Network error'));

			const result = await controller.checkChatStatus();

			// fallback enables chat with default suggested questions
			expect(result).toBe(true);
			expect(controller.store.chatEnabled).toBe(true);
			expect(controller.store.suggestedQuestions.length).toBeGreaterThan(0);
		});
	});

	describe('startNewChat', () => {
		it('creates a new chat session', async () => {
			const controller = createController();
			controller.store.chatEnabled = null; // force status check

			const chat = await controller.startNewChat();

			expect(chat).toBeDefined();
			expect(chat!.sessionId).toBe('test-session-001');
			expect(controller.store.currentChat).toBeDefined();
		});

		it('throws when chat is disabled', async () => {
			const mockClient = new MockClient(globals, {});
			mockClient.mockData.updateConfig({ chatStatus: 'chatStatus.disabled' });
			const controller = createController({}, mockClient);

			await expect(controller.startNewChat()).rejects.toThrow('Chat is currently unavailable');
			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.type).toBe('warning');
		});

		it('sets initChatLoading during initialization', async () => {
			const controller = createController();
			controller.store.chatEnabled = null;

			// capture loading state during the call
			let loadingDuringInit = false;
			const originalChatInit = controller.client.chatInit.bind(controller.client);
			controller.client.chatInit = jest.fn(async (params) => {
				loadingDuringInit = controller.store.initChatLoading;
				return originalChatInit(params);
			});

			await controller.startNewChat();

			expect(loadingDuringInit).toBe(true);
			expect(controller.store.initChatLoading).toBe(false); // reset after completion
		});

		it('handles chatInit API error', async () => {
			const controller = createController();
			controller.store.chatEnabled = null;
			controller.client.chatInit = jest.fn().mockRejectedValue(new Error('Init failed'));
			const logSpy = jest.spyOn(controller.log, 'error');

			const chat = await controller.startNewChat();

			expect(chat).toBeUndefined();
			expect(logSpy).toHaveBeenCalledWith('Error starting new chat:', expect.any(Error));
			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.message).toBe('Failed to start new chat.');
			logSpy.mockClear();
		});
	});

	describe('search', () => {
		it('sends a chat message and updates the store', async () => {
			const controller = createController();
			// pre-create a chat session so beforeSearch doesn't trigger startNewChat
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'show me dresses';

			await controller.search();

			expect(controller.store.loading).toBe(false);
			expect(controller.store.inputValue).toBe('');
		});

		it('sets loading state during search', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;

			let loadingDuringSearch = false;
			const originalChat = controller.client.chat.bind(controller.client);
			controller.client.chat = jest.fn(async (params) => {
				loadingDuringSearch = controller.store.loading;
				return originalChat(params);
			});

			await controller.search();

			expect(loadingDuringSearch).toBe(true);
			expect(controller.store.loading).toBe(false);
		});

		it('clears input value after sending', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test query';

			await controller.search();

			expect(controller.store.inputValue).toBe('');
		});

		it('can send search with overrides', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');

			await controller.search({ data: { requestType: 'general', message: 'override message' } } as Partial<ChatRequestModel>);

			expect(chatSpy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.objectContaining({
						message: 'override message',
					}),
				})
			);
			chatSpy.mockClear();
		});

		it('handles 429 rate limiting error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const handleError = jest.spyOn(controller, 'handleError');
			const error = new Error('Too many requests');

			controller.client.chat = jest.fn(() => {
				throw { err: error, fetchDetails: { status: 429, url: 'test.com' } };
			});

			await controller.search();

			expect(controller.store.error).toStrictEqual({
				code: 429,
				type: 'warning',
				message: 'Too many frequent requests. Please try again later',
			});
			expect(handleError).toHaveBeenCalledWith(error, { status: 429, url: 'test.com' });
			handleError.mockClear();
		});

		it('handles 500 server error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const handleError = jest.spyOn(controller, 'handleError');
			const error = new Error('Server error');

			controller.client.chat = jest.fn(() => {
				throw { err: error, fetchDetails: { status: 500, url: 'test.com' } };
			});

			await controller.search();

			expect(controller.store.error).toStrictEqual({
				code: 500,
				type: 'error',
				message: 'An unexpected error occured. Please try again.',
			});
			expect(handleError).toHaveBeenCalledWith(error, { status: 500, url: 'test.com' });
			handleError.mockClear();
		});

		it('handles session limit exceeded error (CS_003)', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;

			controller.client.chat = jest.fn(() => {
				throw {
					err: new Error('Session limit exceeded'),
					fetchDetails: { status: 400, url: 'test.com' },
					responseBody: { errorCode: 'CS_003' },
				};
			});

			await controller.search();

			expect(controller.store.currentChat!.sessionLimitReached).toBe(true);
		});

		it('handles unknown error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const logSpy = jest.spyOn(controller.log, 'error');

			controller.client.chat = jest.fn(() => {
				throw new Error('Unknown error');
			});

			await controller.search();

			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.type).toBe('error');
			expect(logSpy).toHaveBeenCalled();
			logSpy.mockClear();
		});

		it('resets loading to false even after error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;

			controller.client.chat = jest.fn(() => {
				throw { err: new Error('fail'), fetchDetails: { status: 500, url: 'test.com' } };
			});

			await controller.search();

			expect(controller.store.loading).toBe(false);
		});
	});

	describe('middleware events', () => {
		const events = ['beforeSearch', 'afterSearch', 'afterStore'];
		events.forEach((event) => {
			it(`tests ${event} middleware cancellation`, async () => {
				const controller = createController();
				controller.store.createChat({ sessionId: 'test-session-001' });
				controller.store.chatEnabled = true;

				controller.on(event, () => false); // return false to cancel
				const spy = jest.spyOn(controller.log, 'warn');

				await controller.search();

				expect(spy).toHaveBeenCalledWith(`'${event}' middleware cancelled`);
				spy.mockClear();
			});
		});

		events.forEach((event) => {
			it(`logs error if middleware throws in ${event}`, async () => {
				const controller = createController();
				controller.store.createChat({ sessionId: 'test-session-001' });
				controller.store.chatEnabled = true;

				const middleware = jest.fn(() => {
					throw new Error('middleware error');
				});
				controller.on(event, middleware);

				const logErrorSpy = jest.spyOn(controller.log, 'error');
				await controller.search();

				expect(middleware).toHaveBeenCalledTimes(1);
				expect(logErrorSpy).toHaveBeenCalledWith(`error in '${event}' middleware`);
				logErrorSpy.mockClear();
			});
		});

		it('beforeSearch prevents search when chat is disabled', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = false;
			const logSpy = jest.spyOn(controller.log, 'warn');

			await controller.search();

			expect(logSpy).toHaveBeenCalledWith('Chat is disabled, preventing search request');
			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.type).toBe('warning');
			logSpy.mockClear();
		});

		it('beforeSearch starts a new chat when no session exists', async () => {
			const controller = createController();
			controller.store.chatEnabled = true;
			expect(controller.store.currentChat).toBeUndefined();

			const chatInitSpy = jest.spyOn(controller.client, 'chatInit');
			await controller.search();

			expect(chatInitSpy).toHaveBeenCalled();
			expect(controller.store.currentChat).toBeDefined();
			chatInitSpy.mockClear();
		});
	});

	describe('params', () => {
		it('constructs general request params', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.inputValue = 'hello';

			const params = controller.params;

			expect(params.context.sessionId).toBe('test-session-001');
			expect(params.data).toEqual({ requestType: 'general', message: 'hello' });
			expect(params.tracking).toBeDefined();
			expect(params.tracking.domain).toBe(window.location.href);
		});

		it('constructs request with personalization when shopperId exists', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			const shopper = { id: 'shopper123' };
			controller.tracker.track.shopper.login(shopper);

			const params = controller.params;

			expect(params.personalization?.shopper).toBe('shopper123');
		});
	});

	describe('viewProduct', () => {
		it('sets productQuickview on store and fetches product data', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			const mockResponse: ProductsResponseModel = {
				mappings: { core: { name: 'Test Product' } },
				variants: { optionConfig: {}, data: [] },
			};
			controller.client.products = jest.fn().mockResolvedValue(mockResponse);

			const result = {
				id: 'prod1',
				mappings: { core: { parentId: 'parent1', name: 'Test Product' } },
			} as unknown as Product;

			await controller.viewProduct(result);

			expect(controller.store.productQuickview).toBeDefined();
			expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'parent1' });
		});

		it('falls back to result.id when parentId is missing', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.client.products = jest.fn().mockResolvedValue({
				mappings: { core: {} },
				variants: { optionConfig: {}, data: [] },
			});

			const result = { id: 'fallback-id', mappings: { core: {} } } as unknown as Product;
			await controller.viewProduct(result);

			expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'fallback-id' });
		});

		it('sets error when products API fails', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			const logSpy = jest.spyOn(controller.log, 'error');

			controller.client.products = jest.fn().mockRejectedValue(new Error('Network error'));

			const result = {
				id: 'prod1',
				mappings: { core: { parentId: 'parent1' } },
			} as unknown as Product;

			await controller.viewProduct(result);

			expect(logSpy).toHaveBeenCalledWith('Failed to fetch product details', expect.any(Error));
			expect(controller.store.productQuickviewError).toBe('Failed to load product details. Please try again.');
			logSpy.mockClear();
		});

		it('creates a chat if none exists', async () => {
			const controller = createController();
			expect(controller.store.currentChat).toBeUndefined();

			controller.client.products = jest.fn().mockResolvedValue({
				mappings: { core: {} },
				variants: { optionConfig: {}, data: [] },
			});

			const result = { id: 'prod1', mappings: { core: {} } } as unknown as Product;
			await controller.viewProduct(result);

			expect(controller.store.currentChat).toBeDefined();
		});
	});

	describe('compareProduct', () => {
		it('adds a product to the comparison set', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			const result = {
				id: 'prod1',
				display: { mappings: { core: { uid: 'uid1' } } },
				mappings: { core: { uid: 'uid1' } },
			} as unknown as Product;

			controller.compareProduct(result);

			expect(controller.store.currentChat!.comparisons.compared.length).toBe(1);
		});

		it('removes productQuery attachments when comparing', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			// add a productQuery attachment first
			controller.store.sendProductQuery(
				{ id: 'prod-q', display: { mappings: { core: { name: 'Query Product', thumbnailImageUrl: 'thumb.jpg' } } } },
				{ requestType: 'productQuery' }
			);
			const productQueryAttachments = controller.store.currentChat!.attachments.attached.filter((item) => item.type === 'product');
			expect(productQueryAttachments.length).toBe(1);

			const result = {
				id: 'prod1',
				display: { mappings: { core: { uid: 'uid1' } } },
				mappings: { core: { uid: 'uid1' } },
			} as unknown as Product;

			controller.compareProduct(result);

			// productQuery attachments should be removed
			const remainingProductQuery = controller.store.currentChat!.attachments.attached.filter(
				(item) => item.type === 'product' && (item as any).requestType === 'productQuery'
			);
			expect(remainingProductQuery.length).toBe(0);
		});
	});

	describe('discussProduct', () => {
		it('sends a product query attachment', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			const sendSpy = jest.spyOn(controller.store, 'sendProductQuery');

			const result = {
				id: 'prod1',
				mappings: { core: { name: 'Test', thumbnailImageUrl: 'thumb.jpg' } },
			} as unknown as Product;

			controller.discussProduct(result, { requestType: 'productQuery' });

			expect(sendSpy).toHaveBeenCalledWith(result, { requestType: 'productQuery' });
			sendSpy.mockClear();
		});

		it('triggers search for productSimilar request type', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const searchSpy = jest.spyOn(controller, 'search').mockResolvedValue();

			const result = {
				id: 'prod1',
				mappings: { core: { name: 'Test', thumbnailImageUrl: 'thumb.jpg' } },
			} as unknown as Product;

			controller.discussProduct(result, { requestType: 'productSimilar' });

			expect(searchSpy).toHaveBeenCalled();
			searchSpy.mockRestore();
		});

		it('resets comparisons when discussing a product (non-comparison)', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			// add comparison items first
			const compareResult1 = {
				id: 'comp1',
				display: { mappings: { core: { uid: 'uid1' } } },
				mappings: { core: { uid: 'uid1' } },
			} as unknown as Product;
			controller.store.compareProduct(compareResult1);
			expect(controller.store.currentChat!.comparisons.compared.length).toBe(1);

			const resetSpy = jest.spyOn(controller.store.currentChat!.comparisons, 'reset');

			const result = {
				id: 'prod1',
				mappings: { core: { name: 'Test' } },
			} as unknown as Product;

			controller.discussProduct(result, { requestType: 'productQuery' });

			expect(resetSpy).toHaveBeenCalled();
			resetSpy.mockRestore();
		});
	});

	describe('openChat', () => {
		it('opens the chat UI', () => {
			const controller = createController();

			controller.openChat();

			expect(controller.store.open).toBe(true);
		});

		it('creates a chat if none exists when opening without a message', () => {
			const controller = createController();
			expect(controller.store.currentChat).toBeUndefined();

			controller.openChat();

			expect(controller.store.currentChat).toBeDefined();
		});

		it('sends an initial message when provided', async () => {
			const controller = createController();
			controller.store.chatEnabled = true;
			const searchSpy = jest.spyOn(controller, 'search');

			controller.openChat('test message');

			expect(controller.store.open).toBe(true);
			expect(searchSpy).toHaveBeenCalledWith({ data: { message: 'test message' } });
			searchSpy.mockClear();
		});
	});

	describe('handlers', () => {
		it('input.enterKey triggers search on Enter', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const searchSpy = jest.spyOn(controller, 'search').mockResolvedValue();

			const event = { keyCode: 13 } as KeyboardEvent;
			await controller.handlers.input.enterKey(event);

			expect(searchSpy).toHaveBeenCalled();
			searchSpy.mockRestore();
		});

		it('input.enterKey does not trigger search on non-Enter key', async () => {
			const controller = createController();
			const searchSpy = jest.spyOn(controller, 'search').mockResolvedValue();

			const event = { keyCode: 65 } as KeyboardEvent; // 'a' key
			await controller.handlers.input.enterKey(event);

			expect(searchSpy).not.toHaveBeenCalled();
			searchSpy.mockRestore();
		});

		it('input.input updates store inputValue', () => {
			const controller = createController();
			const event = { target: { value: 'test input' } } as unknown as Event;

			controller.handlers.input.input(event);

			expect(controller.store.inputValue).toBe('test input');
		});

		it('button.click toggles store open state', () => {
			const controller = createController();
			expect(controller.store.open).toBe(false);

			controller.handlers.button.click();
			expect(controller.store.open).toBe(true);

			controller.handlers.button.click();
			expect(controller.store.open).toBe(false);
		});
	});

	describe('handleFeedback', () => {
		it('records thumbs up feedback', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.handleFeedback('UP');

			expect(controller.store.currentChat!.sessionFeedback).toEqual({ rating: 'UP' });
			expect(controller.store.currentChat!.feedbackJustGiven).toBe(true);
		});

		it('records thumbs down feedback', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.handleFeedback('DOWN');

			expect(controller.store.currentChat!.sessionFeedback).toEqual({ rating: 'DOWN' });
		});

		it('does nothing when no current chat exists', () => {
			const controller = createController();
			expect(controller.store.currentChat).toBeUndefined();

			// should not throw
			controller.handleFeedback('UP');
		});

		it('auto-dismisses feedback after timeout', () => {
			jest.useFakeTimers();
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.handleFeedback('UP');
			expect(controller.store.currentChat!.feedbackDismissed).toBeFalsy();

			jest.advanceTimersByTime(3000);
			expect(controller.store.currentChat!.feedbackDismissed).toBe(true);

			jest.useRealTimers();
		});
	});

	describe('addToCart', () => {
		it('fires addToCart event with single product', async () => {
			const controller = createController();
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const product = { id: 'prod1', mappings: { core: {} } } as unknown as Product;
			await controller.addToCart(product);

			expect(eventSpy).toHaveBeenCalledWith('addToCart', {
				controller,
				products: [product],
			});
			eventSpy.mockClear();
		});

		it('fires addToCart event with multiple products', async () => {
			const controller = createController();
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const products = [
				{ id: 'prod1', mappings: { core: {} } },
				{ id: 'prod2', mappings: { core: {} } },
			] as unknown as Product[];

			await controller.addToCart(products);

			expect(eventSpy).toHaveBeenCalledWith('addToCart', {
				controller,
				products,
			});
			eventSpy.mockClear();
		});

		it('does not fire event for empty products', async () => {
			const controller = createController();
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			await controller.addToCart([] as unknown as Product[]);

			expect(eventSpy).not.toHaveBeenCalled();
			eventSpy.mockClear();
		});
	});

	describe('addToCart callback', () => {
		it('invokes settings.addToCart callback via middleware', async () => {
			const addToCartCallback = jest.fn();
			const controller = createController({
				settings: {
					addToCart: addToCartCallback,
				},
			});

			const products = [{ id: 'prod1', mappings: { core: {} } }] as unknown as Product[];
			await controller.addToCart(products);

			expect(addToCartCallback).toHaveBeenCalledWith(products);
		});
	});

	describe('tracking', () => {
		it('track.product.impression fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			controller.track.product.impression(result);

			expect(eventSpy).toHaveBeenCalledWith('track.product.impression', expect.objectContaining({ controller, product: result }));
			eventSpy.mockClear();
		});

		it('track.product.impression deduplicates calls', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			controller.track.product.impression(result);
			controller.track.product.impression(result);

			// only fires once for the same product/response
			const impressionCalls = eventSpy.mock.calls.filter((call) => call[0] === 'track.product.impression');
			expect(impressionCalls.length).toBe(1);
			eventSpy.mockClear();
		});

		it('track.product.clickThrough fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			const event = new MouseEvent('click');
			controller.track.product.clickThrough(event, result);

			expect(eventSpy).toHaveBeenCalledWith('track.product.clickThrough', expect.objectContaining({ controller, product: result }));
			eventSpy.mockClear();
		});

		it('track.product.addToCart fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				quantity: 1,
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1', price: 48 } },
			} as unknown as Product;

			controller.track.product.addToCart(result);

			expect(eventSpy).toHaveBeenCalledWith('track.product.addToCart', expect.objectContaining({ controller, product: result }));
			eventSpy.mockClear();
		});

		it('track.product.feedback fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			controller.track.product.feedback('UP');

			expect(eventSpy).toHaveBeenCalledWith('track.product.feedback', expect.objectContaining({ controller }));
			eventSpy.mockClear();
		});

		it('track methods warn when no chatSessionId', () => {
			const controller = createController({ beacon: { enabled: true } });
			// no chat created - so no sessionId
			const logSpy = jest.spyOn(controller.log, 'warn');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1' } },
			} as unknown as Product;

			controller.track.product.impression(result);
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.impression');

			logSpy.mockClear();

			controller.track.product.clickThrough(new MouseEvent('click'), result);
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.clickThrough');

			logSpy.mockClear();

			controller.track.product.addToCart(result as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.addToCart');

			logSpy.mockClear();

			controller.track.product.feedback('UP');
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.feedback');

			logSpy.mockClear();
		});

		it('track methods warn when no result provided', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const logSpy = jest.spyOn(controller.log, 'warn');

			controller.track.product.impression(undefined as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No result provided to track.product.impression');

			logSpy.mockClear();

			controller.track.product.clickThrough(new MouseEvent('click'), undefined as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No result provided to track.product.clickThrough');

			logSpy.mockClear();

			controller.track.product.addToCart(undefined as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No result provided to track.product.addToCart');

			logSpy.mockClear();
		});
	});
});
