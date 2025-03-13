import {
	additionalRequestKeys,
	appendResults,
	Beacon,
	CART_KEY,
	COOKIE_DOMAIN,
	COOKIE_SAMESITE,
	PayloadRequest,
	PREFLIGHT_POST_THRESHOLD,
	REQUEST_GROUPING_TIMEOUT,
} from './Beacon';
import {
	AutocompleteSchema,
	AutocompleteSchemaDataFilterInnerFromJSON,
	CategorySchema,
	ContextCurrency,
	Product,
	RecommendationsSchema,
	SearchSchema,
} from './client';

jest.mock('./client/apis/ShopperApi', () => {
	return {
		ShopperApi: jest.fn().mockImplementation(() => {
			return {
				login: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/AutocompleteApi', () => {
	return {
		AutocompleteApi: jest.fn().mockImplementation(() => {
			return {
				autocompleteRender: jest.fn().mockResolvedValue({}),
				autocompleteImpression: jest.fn().mockResolvedValue({}),
				autocompleteAddtocart: jest.fn().mockResolvedValue({}),
				autocompleteClickthrough: jest.fn().mockResolvedValue({}),
				autocompleteRedirect: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/SearchApi', () => {
	return {
		SearchApi: jest.fn().mockImplementation(() => {
			return {
				searchRender: jest.fn().mockResolvedValue({}),
				searchImpression: jest.fn().mockResolvedValue({}),
				searchAddtocart: jest.fn().mockResolvedValue({}),
				searchClickthrough: jest.fn().mockResolvedValue({}),
				searchRedirect: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/CategoryApi', () => {
	return {
		CategoryApi: jest.fn().mockImplementation(() => {
			return {
				categoryRender: jest.fn().mockResolvedValue({}),
				categoryImpression: jest.fn().mockResolvedValue({}),
				categoryAddtocart: jest.fn().mockResolvedValue({}),
				categoryClickthrough: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/RecommendationsApi', () => {
	return {
		RecommendationsApi: jest.fn().mockImplementation(() => {
			return {
				recommendationsRender: jest.fn().mockResolvedValue({}),
				recommendationsImpression: jest.fn().mockResolvedValue({}),
				recommendationsAddtocart: jest.fn().mockResolvedValue({}),
				recommendationsClickthrough: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/ProductApi', () => {
	return {
		ProductApi: jest.fn().mockImplementation(() => {
			return {
				productPageview: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/CartApi', () => {
	return {
		CartApi: jest.fn().mockImplementation(() => {
			return {
				cartAdd: jest.fn().mockResolvedValue({}),
				cartRemove: jest.fn().mockResolvedValue({}),
				cartView: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/OrderApi', () => {
	return {
		OrderApi: jest.fn().mockImplementation(() => {
			return {
				orderTransaction: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});
jest.mock('./client/apis/ErrorLogsApi', () => {
	return {
		ErrorLogsApi: jest.fn().mockImplementation(() => {
			return {
				logShopifypixel: jest.fn().mockResolvedValue({}),
				logSnap: jest.fn().mockResolvedValue({}),
			};
		}),
	};
});

const resetAllCookies = () => {
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i];
		const eqPos = cookie.indexOf('=');
		const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	}
};

describe('Beacon', () => {
	let beacon: Beacon;
	const mockGlobals = { siteId: 'test-site-id' };
	const mockConfig = {
		mode: 'development' as const,
	};

	// Mock localStorage
	const localStorageMock = (() => {
		let store: Record<string, string> = {};
		return {
			getItem: jest.fn((key: string) => store[key] || null),
			setItem: jest.fn((key: string, value: string) => {
				store[key] = value.toString();
			}),
			removeItem: jest.fn((key: string) => {
				delete store[key];
			}),
			clear: jest.fn(() => {
				store = {};
			}),
		};
	})();

	Object.defineProperty(window, 'localStorage', {
		value: localStorageMock,
	});

	console.error = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		resetAllCookies();
		localStorageMock.clear();
		beacon = new Beacon(mockGlobals, mockConfig);
	});

	describe('Constructor', () => {
		it('should create an instance with default values', () => {
			expect(beacon['globals']).toBe(mockGlobals);
			expect(beacon['config'].mode).toBe('development');
			expect(beacon['pageLoadId']).toStrictEqual(expect.any(String));
		});

		it('should throw an error if siteId is missing', () => {
			expect(() => new Beacon({} as any)).toThrow('Invalid config passed to tracker. The "siteId" attribute must be provided.');
		});
	});

	describe('Storage', () => {
		describe('Cart', () => {
			const multiQuantityTestProduct = { uid: 'multiQuantityText', qty: 3, price: 10 };
			const mockProducts: Product[] = [
				{ uid: 'productUid1', childUid: 'productChildUid1', sku: 'productSku1', childSku: 'productChildSku1', qty: 1, price: 9.99 },
				{ uid: 'productUid2', childUid: 'productChildUid2', sku: 'productSku2', childSku: 'productChildSku2', qty: 2, price: 10.99 },
				{ uid: 'productUid3', childUid: 'productChildUid3', sku: 'productSku3', childSku: 'productChildSku3', qty: 3, price: 0 },
				{ uid: 'productUid4', qty: 3, price: 0 },
				multiQuantityTestProduct,
			];

			it('can set, get, and remove cart products as string array', () => {
				const mockProductIds = ['productUid1', 'productUid1', 'productUid2'];
				// @ts-ignore - legacy string array support
				beacon.storage.cart.set(mockProductIds);

				// beacon cart getter
				const cartData = beacon.storage.cart.get();
				const updatedCartData = mockProductIds.slice(1).map((id) => ({ uid: id, sku: id, qty: 1, price: 0 }));
				expect(cartData).toStrictEqual(updatedCartData);

				// remove cart data
				const idToRemove = updatedCartData[updatedCartData.length - 1].uid;
				expect(idToRemove).toBe('productUid2');
				// @ts-ignore - legacy string array support
				beacon.storage.cart.remove([idToRemove]);
				const removedCartData = beacon.storage.cart.get();

				expect(removedCartData).toStrictEqual([{ uid: 'productUid1', sku: 'productUid1', qty: 1, price: 0 }]);
			});

			it('can add and get cart products as string array', () => {
				const mockProductIds = ['productUid1', 'productUid1', 'productUid2'];
				// @ts-ignore - legacy string array support
				beacon.storage.cart.add(mockProductIds);

				// beacon cart getter
				const cartData = beacon.storage.cart.get();
				expect(cartData).toStrictEqual(mockProductIds.slice(1).map((id) => ({ uid: id, sku: id, qty: 1, price: 0 })));
			});

			it('can set and get cart products', () => {
				beacon.storage.cart.set(mockProducts);

				// beacon cart getter
				const cartData = beacon.storage.cart.get();
				expect(cartData).toEqual(mockProducts);

				// cookie contains cart data
				expect(global.document.cookie).toContain(`${CART_KEY}=${encodeURIComponent(JSON.stringify(mockProducts))}`);

				// localStorage contains cart data
				expect(localStorageMock.setItem).toHaveBeenCalled();
				const rawItem = localStorageMock.getItem(CART_KEY)!;
				const data = JSON.parse(rawItem);
				// should be key'd by siteId
				expect(data[mockGlobals.siteId]).toBe(JSON.stringify(mockProducts));

				// can add to exisiting cart data and should be at the front
				const product = { uid: 'productUid5', childUid: 'productChildUid5', sku: 'productSku5', childSku: 'productChildSku5', qty: 1, price: 9.99 };
				beacon.storage.cart.add([product]);

				const updatedCartData = beacon.storage.cart.get();
				expect(updatedCartData).toEqual([product, ...mockProducts]);

				// can remove from cart data
				beacon.storage.cart.remove([product]);
				const removedCartData = beacon.storage.cart.get();
				expect(removedCartData).toEqual(mockProducts);

				// can decrease quantity from exisiting cart data
				const decreaseQuantityBy = 2;
				expect(multiQuantityTestProduct.qty).toBeGreaterThan(decreaseQuantityBy);
				beacon.storage.cart.remove([{ ...multiQuantityTestProduct, qty: decreaseQuantityBy }]);

				const removedSingleQuantityCartData = beacon.storage.cart.get();
				expect(removedSingleQuantityCartData).toEqual([
					...mockProducts.filter((p) => p.uid !== multiQuantityTestProduct.uid),
					{
						...multiQuantityTestProduct,
						qty: multiQuantityTestProduct.qty - decreaseQuantityBy,
					},
				]);

				// can add to exisiting cart data and should be at the front
				const product2 = { uid: 'productUid6', childUid: 'productChildUid6', sku: 'productSku6', childSku: 'productChildSku6', qty: 1, price: 9.99 };
				beacon.storage.cart.add([product2]);
				const addedCartData = beacon.storage.cart.get();
				expect(addedCartData).toEqual([product2, ...removedSingleQuantityCartData]);

				// can add quantity to exisiting sku in cart data
				const increaseQuantityBy = 2;
				const product3 = { ...product2, qty: increaseQuantityBy };
				beacon.storage.cart.add([product3]);
				const increasedCartData = beacon.storage.cart.get();
				expect(increasedCartData).toEqual([{ ...product2, qty: product2.qty + increaseQuantityBy }, ...removedSingleQuantityCartData]);

				// can clear cart data
				beacon.storage.cart.clear();
				const clearedCartData = beacon.storage.cart.get();
				expect(clearedCartData).toEqual([]);
				expect(global.document.cookie).toContain(`${CART_KEY}=;`);
				const rawClearedItem = localStorageMock.getItem(CART_KEY)!;
				const clearedData = JSON.parse(rawClearedItem);
				expect(clearedData[mockGlobals.siteId]).toBe('');
			});
		});
		describe.skip('Custom APIs', () => {
			const cookieKey = 'test-cookie';
			const cookieReturnValue = 'test-cookie-value';

			const localStorageKey = 'test-local-storage';
			const localStorageValue = 'test-local-storage-value';
			const localStorageReturnValue = JSON.stringify({ [mockGlobals.siteId]: localStorageValue });

			const apis = {
				cookie: {
					get: jest.fn().mockResolvedValue(cookieReturnValue),
					set: jest.fn().mockResolvedValue(undefined),
				},
				localStorage: {
					clear: jest.fn().mockResolvedValue(undefined),
					getItem: jest.fn().mockResolvedValue(localStorageReturnValue),
					setItem: jest.fn().mockResolvedValue(undefined),
					removeItem: jest.fn().mockResolvedValue(undefined),
				},
			};

			it('can getCookie', () => {
				beacon = new Beacon(mockGlobals, { ...mockConfig, apis });
				const result = beacon['getCookie'](cookieKey);
				expect(result).toEqual(cookieReturnValue);
				expect(apis.cookie.get).toHaveBeenCalledWith(cookieKey);
			});
			it('can setCookie', () => {
				beacon = new Beacon(mockGlobals, { ...mockConfig, apis });
				const result = beacon['setCookie'](cookieKey, cookieReturnValue, COOKIE_SAMESITE, 0, COOKIE_DOMAIN);
				expect(result).toBeUndefined();
				expect(apis.cookie.set).toHaveBeenCalledWith(`${cookieKey}=${cookieReturnValue};SameSite=${COOKIE_SAMESITE};path=/;domain=${COOKIE_DOMAIN};`);
			});
			it('can getLocalStorage', () => {
				beacon = new Beacon(mockGlobals, { ...mockConfig, apis });
				const result = beacon['getLocalStorageItem'](localStorageKey);
				expect(result).toEqual(localStorageValue);
				expect(apis.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
			});
			it('can setLocalStorage', () => {
				beacon = new Beacon(mockGlobals, { ...mockConfig, apis });
				const result = beacon['setLocalStorageItem'](localStorageKey, localStorageValue);
				expect(result).toBeUndefined();
				expect(apis.localStorage.setItem).toHaveBeenCalledWith(localStorageKey, JSON.stringify({ [mockGlobals.siteId]: localStorageValue }));
			});
		});
		describe('Methods', () => {
			it('can getStoredID', async () => {
				const id1 = beacon['getStoredID']('key', 0);
				expect(id1).toStrictEqual(expect.any(String));

				await new Promise((resolve) => setTimeout(resolve, 100));

				const id2 = beacon['getStoredID']('key', 0);
				expect(id2).toStrictEqual(expect.any(String));
				expect(id1).toBe(id2);
			});

			it('can getStoredID with expiration', async () => {
				const expiration = 1000;
				const id1 = beacon['getStoredID']('key', expiration);
				expect(id1).toStrictEqual(expect.any(String));

				await new Promise((resolve) => setTimeout(resolve, expiration / 2));

				const id2 = beacon['getStoredID']('key', expiration);
				expect(id2).toStrictEqual(expect.any(String));
				expect(id1).toBe(id2);

				await new Promise((resolve) => setTimeout(resolve, expiration));

				const id3 = beacon['getStoredID']('key', expiration);
				expect(id3).toStrictEqual(expect.any(String));
				expect(id3).not.toBe(id2);
			});
		});
	});

	describe('Beacon methods', () => {
		it('can getContext', () => {
			const context = beacon.getContext();
			expect(context).toEqual({
				userId: expect.any(String),
				sessionId: expect.any(String),
				shopperId: expect.any(String),
				pageLoadId: expect.any(String),
				timestamp: expect.any(String),
				pageUrl: expect.any(String),
				initiator: expect.any(String),
				attribution: undefined,
				userAgent: expect.any(String),
				currency: undefined,
				dev: true,
			});
		});

		it('can persist getContext values', async () => {
			// recreate beacon to contain attribution
			const type = 'attr_type';
			const id = 'attr_value';
			const href = `https://www.example.com/test.html?ss_attribution=${type}:${id}`;
			beacon = new Beacon(mockGlobals, { ...mockConfig, href });

			beacon.setShopperId('test-shopper-id');
			beacon.setCurrency({ code: 'EUR' });

			const context1 = beacon.getContext();
			await new Promise((resolve) => setTimeout(resolve, 100));
			const context2 = beacon.getContext();

			expect(context1.userId).toBe(context2.userId);
			expect(context1.sessionId).toBe(context2.sessionId);
			expect(context1.shopperId).toBe(context2.shopperId);
			expect(context1.pageLoadId).toBe(context2.pageLoadId);
			expect(context1.pageUrl).toBe(context2.pageUrl);
			expect(context1.initiator).toBe(context2.initiator);
			expect(context1.userAgent).toBe(context2.userAgent);
			expect(context1.currency).toBe(context2.currency);
			expect(context1.attribution).toStrictEqual(context2.attribution);

			// should be different timestamps
			expect(context1.timestamp).not.toBe(context2.timestamp);
		});

		it('can setShopperId and getShopperId', () => {
			// context should not have shopperId initially
			const context = beacon.getContext();
			expect(context.shopperId).toEqual('');

			// storage should not have shopperId initially
			const emptyStoredShopperId = beacon.getShopperId();
			expect(emptyStoredShopperId).toEqual('');

			// set shopperId
			const shopperId = 'test-shopper-id';
			beacon.setShopperId(shopperId);

			// should be stored
			const storedShopperId = beacon.getShopperId();
			expect(storedShopperId).toEqual(shopperId);

			// should be on context
			const updatedContext = beacon.getContext();
			expect(updatedContext.shopperId).toEqual(shopperId);
		});

		it('can setCurrency', () => {
			// context should not have currency initially
			const context = beacon.getContext();
			expect(context.currency).toBeUndefined();
			expect(beacon['currency']).toStrictEqual({ code: '' });

			// set currency
			const currency: ContextCurrency = { code: 'EUR' };
			beacon.setCurrency(currency);

			// should be stored on class property
			expect(beacon['currency']).toStrictEqual(currency);

			// should be on context
			const updatedContext = beacon.getContext();
			expect(updatedContext.currency).toStrictEqual(currency);
		});

		it('can getAttribution', () => {
			// context should not have currency initially
			const context = beacon.getContext();
			expect(context.attribution).toBeUndefined();

			// unable to mock url in jest, using config.href instead
			const type = 'attr_type';
			const id = 'attr_value';
			const href = `https://www.example.com/test.html?ss_attribution=${type}:${id}`;
			beacon = new Beacon(mockGlobals, { ...mockConfig, href });

			const attribution = beacon['getAttribution']();
			expect(attribution).toStrictEqual([{ type, id }]);

			// should be on context
			const updatedContext = beacon.getContext();
			expect(updatedContext.attribution).toStrictEqual([{ type, id }]);

			// get persisted attribution
			const beacon2 = new Beacon(mockGlobals, mockConfig);
			const attribution2 = beacon2['getAttribution']();
			expect(attribution2).toStrictEqual([{ type, id }]);
		});

		it('can sendPreflight via GET', () => {
			// only add 1 product to be under threshold and still generate GET request
			const items = ['abc123'];

			// @ts-ignore - legacy string array support
			beacon.storage.cart.add(items);

			const sendPreflight = jest.spyOn(beacon, 'sendPreflight');
			const xhrMock: Partial<XMLHttpRequest> = {
				open: jest.fn(),
				send: jest.fn(),
				setRequestHeader: jest.fn(),
				readyState: 4,
				status: 200,
				response: 'Hello World!',
			};
			const request = jest.spyOn(global.window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);

			beacon.sendPreflight();

			const querystring =
				`?userId=${encodeURIComponent(beacon['userId'])}` +
				`&siteId=${encodeURIComponent(mockGlobals.siteId)}` +
				`&cart=${encodeURIComponent(items[0])}`;

			expect(xhrMock.open).toHaveBeenCalledWith(
				'GET',
				`https://${mockGlobals.siteId}.a.searchspring.io/api/personalization/preflightCache${querystring}`
			);

			sendPreflight.mockRestore();
			request.mockRestore();
		});

		it('can sendPreflight via POST', () => {
			// populate cart cookie so charsParams threshold is met for POST request
			const items: string[] = [];
			const minBytesThreshold = PREFLIGHT_POST_THRESHOLD;
			const skuPrefix = 'a_very_long_product_sku_to_fill_charsParams_bytes_'; // 50 chars
			for (let i = 0; i < Math.ceil(minBytesThreshold / skuPrefix.length); i++) {
				items.push(`${skuPrefix}_${i}`);
			}

			// @ts-ignore - legacy string array support
			beacon.storage.cart.add(items); // 51 * 20 = 1050 bytes
			expect(items.join().length).toBeGreaterThanOrEqual(minBytesThreshold);

			const sendPreflight = jest.spyOn(beacon, 'sendPreflight');
			const xhrMock: Partial<XMLHttpRequest> = {
				open: jest.fn(),
				send: jest.fn(),
				setRequestHeader: jest.fn(),
				readyState: 4,
				status: 200,
				response: 'Hello World!',
			};
			const request = jest.spyOn(global.window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);

			beacon.sendPreflight();

			expect(xhrMock.open).toHaveBeenCalledWith('POST', `https://${mockGlobals.siteId}.a.searchspring.io/api/personalization/preflightCache`);

			sendPreflight.mockRestore();
			request.mockRestore();
		});
	});

	describe('Events', () => {
		const baseSearchSchema = {
			q: 'test',
			pagination: {
				totalResults: 100,
				page: 1,
				resultsPerPage: 20,
			},
			results: [
				{ uid: 'prodUid1', childUid: 'prodChildUid1', sku: 'prodSku1', childSku: 'prodChildSku1' },
				{ uid: 'prodUid2', childUid: 'prodChildUid2', sku: 'prodSku2', childSku: 'prodChildSku2' },
				{ uid: 'prodUid3', childUid: 'prodChildUid3', sku: 'prodSku3', childSku: 'prodChildSku3' },
				{ uid: 'prodUid4', childUid: 'prodChildUid4', sku: 'prodSku4', childSku: 'prodChildSku4' },
			],
		};
		describe('Shopper Login', () => {
			it('can process login event', () => {
				const shopperId = 'shopper123';
				const data = {
					id: shopperId,
				};
				beacon.events.shopper.login({ data });
				expect(beacon['shopperId']).toBe(shopperId);
				expect(beacon['apis'].shopper.login).toHaveBeenCalled();
			});
			it.skip('logs error if shopperId is not provided', () => {
				const shopperId = '';
				const data = {
					id: shopperId,
				};
				beacon.events.shopper.login({ data });
				expect(console.error).toHaveBeenCalled();
				expect(beacon['apis'].shopper.login).not.toHaveBeenCalled();
			});
		});
		describe('Autocomplete', () => {
			const data = { ...baseSearchSchema };
			it('can process render event', async () => {
				beacon.events.autocomplete.render({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].autocomplete.autocompleteRender).toHaveBeenCalled();
			});
			it('can process impression event', async () => {
				beacon.events.autocomplete.impression({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].autocomplete.autocompleteImpression).toHaveBeenCalled();
			});
			it('can process addToCart event', () => {
				beacon.events.autocomplete.addToCart({ data });
				expect(beacon['apis'].autocomplete.autocompleteAddtocart).toHaveBeenCalled();
			});
			it('can process clickThrough event', () => {
				beacon.events.autocomplete.clickThrough({ data });
				expect(beacon['apis'].autocomplete.autocompleteClickthrough).toHaveBeenCalled();
			});
			it('can process redirect event', () => {
				const data = {
					redirect: '/new-url',
				};
				beacon.events.autocomplete.redirect({ data });
				expect(beacon['apis'].autocomplete.autocompleteRedirect).toHaveBeenCalled();
			});
		});
		describe('Search', () => {
			const data = { ...baseSearchSchema };
			it('can process render event', async () => {
				beacon.events.search.render({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].search.searchRender).toHaveBeenCalled();
			});
			it('can process impression event', async () => {
				beacon.events.search.impression({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].search.searchImpression).toHaveBeenCalled();
			});
			it('can process addToCart event', () => {
				beacon.events.search.addToCart({ data });
				expect(beacon['apis'].search.searchAddtocart).toHaveBeenCalled();
			});
			it('can process clickThrough event', () => {
				beacon.events.search.clickThrough({ data });
				expect(beacon['apis'].search.searchClickthrough).toHaveBeenCalled();
			});
			it('can process redirect event', () => {
				const data = {
					redirect: '/new-url',
				};
				beacon.events.search.redirect({ data });
				expect(beacon['apis'].search.searchRedirect).toHaveBeenCalled();
			});
		});
		describe('Category', () => {
			const data = { ...baseSearchSchema };
			it('can process render event', async () => {
				beacon.events.category.render({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].category.categoryRender).toHaveBeenCalled();
			});
			it('can process impression event', async () => {
				beacon.events.category.impression({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].category.categoryImpression).toHaveBeenCalled();
			});
			it('can process addToCart event', () => {
				beacon.events.category.addToCart({ data });
				expect(beacon['apis'].category.categoryAddtocart).toHaveBeenCalled();
			});
			it('can process clickThrough event', () => {
				beacon.events.category.clickThrough({ data });
				expect(beacon['apis'].category.categoryClickthrough).toHaveBeenCalled();
			});
		});
		describe('Recommendations', () => {
			const data = {
				tag: 'test-tag',
				results: [...baseSearchSchema.results],
			};
			it('can process render event', async () => {
				beacon.events.recommendations.render({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].recommendations.recommendationsRender).toHaveBeenCalled();
			});
			it('can process impression event', async () => {
				beacon.events.recommendations.impression({ data });
				await new Promise((resolve) => setTimeout(resolve, REQUEST_GROUPING_TIMEOUT));
				expect(beacon['apis'].recommendations.recommendationsImpression).toHaveBeenCalled();
			});
			it('can process addToCart event', () => {
				beacon.events.recommendations.addToCart({ data });
				expect(beacon['apis'].recommendations.recommendationsAddtocart).toHaveBeenCalled();
			});
			it('can process clickThrough event', () => {
				beacon.events.recommendations.clickThrough({ data });
				expect(beacon['apis'].recommendations.recommendationsClickthrough).toHaveBeenCalled();
			});
		});
		describe('Product', () => {
			const data = {
				result: baseSearchSchema.results[0],
			};
			it('can process pageView event', () => {
				beacon.events.product.pageView({ data });
				expect(beacon['apis'].product.productPageview).toHaveBeenCalled();
			});
		});
		describe('Cart', () => {
			const data = {
				results: [
					...baseSearchSchema.results.map((item) => {
						return {
							...item,
							price: 10,
							qty: 1,
						};
					}),
				],
				// cart: [],
			};
			it('can process add event', () => {
				beacon.events.cart.add({ data });
				expect(beacon['apis'].cart.cartAdd).toHaveBeenCalled();
			});
			it('can process remove event', () => {
				beacon.events.cart.remove({ data });
				expect(beacon['apis'].cart.cartRemove).toHaveBeenCalled();
			});
			it('can process view event', () => {
				beacon.events.cart.view({ data });
				expect(beacon['apis'].cart.cartView).toHaveBeenCalled();
			});
		});
		describe('Order', () => {
			const data = {
				orderId: '12345',
				transactionTotal: 100,
				total: 110,
				city: 'test-city',
				state: 'test-state',
				country: 'test-country',
				results: [
					...baseSearchSchema.results.map((item) => {
						return {
							...item,
							price: 10,
							qty: 1,
						};
					}),
				],
			};
			it('can process transaction event', () => {
				beacon.events.order.transaction({ data });
				expect(beacon['apis'].order.orderTransaction).toHaveBeenCalled();
			});
		});
		describe('Error', () => {
			const data = {
				message: 'test-message',
				stack: 'test-stack',
				details: { test: 'test' },
			};
			it('can process shopifypixel event', () => {
				beacon.events.error.shopifypixel({ data });
				expect(beacon['apis'].error.logShopifypixel).toHaveBeenCalled();
			});
			it('can process snap event', () => {
				beacon.events.error.snap({ data });
				expect(beacon['apis'].error.logSnap).toHaveBeenCalled();
			});
		});
	});

	describe('Functions', () => {
		const mockContext = {
			userId: 'userId',
			sessionId: 'sessionId',
			shopperId: 'sessionId',
			pageLoadId: 'pageLoadId',
			timestamp: 'timestamp',
			pageUrl: 'pageUrl',
			initiator: 'initiator',
			attribution: [],
			userAgent: 'userAgent',
			currency: {
				code: 'USD',
			},
			dev: true,
		};
		const mockData = {
			q: 'shoes',
			rq: 'rq',
			correctedQuery: 'correctedQuery',
			matchType: 'matchType',
			results: [
				{ uid: 'product1', sku: 'sku1' },
				{ uid: 'product2', sku: 'sku2' },
			],
			pagination: {
				totalResults: 100,
				page: 1,
				resultsPerPage: 20,
			},
		};
		describe('additionalRequestKeys', () => {
			it('can handles unknown endpoint', () => {
				const schema = {
					context: mockContext,
					data: mockData,
				};
				const endpoint = 'unknown' as any;
				const context = schema.context;
				const { pageLoadId, sessionId } = context;

				let baseKey = `${mockGlobals.siteId}||${endpoint}`;
				const key = additionalRequestKeys(baseKey, endpoint, schema);
				const expected = `${mockGlobals.siteId}||${endpoint}||${pageLoadId}||${sessionId}`;
				expect(key).toStrictEqual(expected);
			});
			it('handles SearchSchema', () => {
				const schema = {
					context: mockContext,
					data: mockData,
				};
				const endpoint = 'search';
				const context = schema.context;
				const data = schema.data;
				const { pageLoadId, sessionId } = context;
				const { rq, pagination, q, correctedQuery, matchType } = data;

				let baseKey = `${mockGlobals.siteId}||${endpoint}`;
				const key = additionalRequestKeys(baseKey, endpoint, schema);
				const expected = `${mockGlobals.siteId}||${endpoint}||${pageLoadId}||${sessionId}||rq=${rq}||page=${pagination.page}||resultsPerPage=${pagination.resultsPerPage}||totalResults=${pagination.totalResults}||q=${q}||correctedQuery=${correctedQuery}||matchType=${matchType}`;
				expect(key).toStrictEqual(expected);
			});
			it('handles AutocompleteSchema', () => {
				const schema: AutocompleteSchema = {
					context: mockContext,
					data: mockData,
				};
				const endpoint = 'autocomplete';
				const context = schema.context;
				const data = schema.data;
				const { pageLoadId, sessionId } = context;
				const { rq, pagination, q, correctedQuery, matchType } = data;

				let baseKey = `${mockGlobals.siteId}||${endpoint}`;
				const key = additionalRequestKeys(baseKey, endpoint, schema);
				const expected = `${mockGlobals.siteId}||${endpoint}||${pageLoadId}||${sessionId}||rq=${rq}||page=${pagination.page}||resultsPerPage=${pagination.resultsPerPage}||totalResults=${pagination.totalResults}||q=${q}||correctedQuery=${correctedQuery}||matchType=${matchType}`;
				expect(key).toStrictEqual(expected);
			});
			it('handles CategorySchema', () => {
				const schema: CategorySchema = {
					context: mockContext,
					data: mockData,
				};
				const endpoint = 'category';
				const context = schema.context;
				const data = schema.data;
				const { pageLoadId, sessionId } = context;
				const { rq, pagination } = data;

				let baseKey = `${mockGlobals.siteId}||${endpoint}`;
				const key = additionalRequestKeys(baseKey, endpoint, schema);
				const expected = `${mockGlobals.siteId}||${endpoint}||${pageLoadId}||${sessionId}||rq=${rq}||page=${pagination.page}||resultsPerPage=${pagination.resultsPerPage}||totalResults=${pagination.totalResults}`;
				expect(key).toStrictEqual(expected);
			});
			it('handles RecommendationsSchema', () => {
				const schema: RecommendationsSchema = {
					context: mockContext,
					data: {
						tag: 'tag',
						results: mockData.results,
					},
				};
				const endpoint = 'recommendation';
				const context = schema.context;
				const data = schema.data;
				const { pageLoadId, sessionId } = context;
				const { tag } = data;

				let baseKey = `${mockGlobals.siteId}||${endpoint}`;
				const key = additionalRequestKeys(baseKey, endpoint, schema);
				const expected = `${mockGlobals.siteId}||${endpoint}||${pageLoadId}||${sessionId}||tag=${tag}`;
				expect(key).toStrictEqual(expected);
			});
		});

		describe('appendResults', () => {
			it('can appendResults', () => {
				const acc: {
					nonBatched: PayloadRequest[];
					batches: Record<string, PayloadRequest>;
				} = {
					nonBatched: [],
					batches: {},
				};

				const schemaName = 'searchSchema';
				const initialRequest = {
					apiType: 'search' as const,
					endpoint: 'searchRender',
					payload: {
						[schemaName]: {
							context: mockContext,
							data: mockData,
						},
					},
				};
				const context = initialRequest.payload[schemaName].context;
				const data = initialRequest.payload[schemaName].data;

				const { pageLoadId, sessionId } = context;
				const { rq, pagination, q, correctedQuery, matchType } = data;

				const key = `${mockGlobals.siteId}||${initialRequest.endpoint}||${pageLoadId}||${sessionId}||rq=${rq}||page=${pagination.page}||resultsPerPage=${pagination.resultsPerPage}||totalResults=${pagination.totalResults}||q=${q}||correctedQuery=${correctedQuery}||matchType=${matchType}`;

				// first request should initialize the key in batches
				appendResults(acc, key, schemaName, initialRequest);
				expect(acc.batches[key]).toBe(initialRequest);
				expect(acc.batches[key].payload[schemaName].data.results.length).toBe(2);
				expect(acc.nonBatched.length).toBe(0);

				// additional request should append results to same key
				const additionalRequest = {
					apiType: 'search' as const,
					endpoint: 'searchRender',
					payload: {
						[schemaName]: {
							context: mockContext,
							data: {
								...mockData,
								results: [
									{ uid: 'product3', sku: 'sku3' },
									{ uid: 'product4', sku: 'sku4' },
								],
							},
						},
					},
				};

				appendResults(acc, key, schemaName, additionalRequest);

				// Should still be just one batched request
				expect(Object.keys(acc.batches).length).toBe(1);

				// The original request should be preserved (not replaced)
				expect(acc.batches[key]).toBe(initialRequest);

				// Results should be appended
				expect(acc.batches[key].payload[schemaName].data.results.length).toBe(4);
				expect(acc.batches[key].payload[schemaName].data.results[0].uid).toBe('product1');
				expect(acc.batches[key].payload[schemaName].data.results[2].uid).toBe('product3');

				// Test with different key - should create a new batch
				// Simulate page load with different pageLoadId and pagination data
				const differentRequest = {
					...additionalRequest,
					payload: {
						[schemaName]: {
							...additionalRequest.payload[schemaName],
							context: {
								...additionalRequest.payload[schemaName].context,
								pageLoadId: 'differentPage',
							},
							data: {
								...additionalRequest.payload[schemaName].data,
								pagination: {
									page: 2,
									resultsPerPage: 20,
									totalResults: 100,
								},
							},
						},
					},
				};

				const context2 = differentRequest.payload[schemaName].context;
				const data2 = differentRequest.payload[schemaName].data;
				const key2 = `${mockGlobals.siteId}||${differentRequest.endpoint}||${context2.pageLoadId}||${context2.sessionId}||rq=${data2.rq}||page=${data2.pagination.page}||resultsPerPage=${data2.pagination.resultsPerPage}||totalResults=${data2.pagination.totalResults}||q=${data2.q}||correctedQuery=${data2.correctedQuery}||matchType=${data2.matchType}`;

				appendResults(acc, key2, schemaName, differentRequest);

				// Now should have two batched requests
				expect(Object.keys(acc.batches).length).toBe(2);
				expect(acc.batches[key2]).toBe(differentRequest);

				// Original batch should be unchanged
				expect(acc.batches[key].payload[schemaName].data.results.length).toBe(4);

				// New batch should have its own results
				expect(acc.batches[key2].payload[schemaName].data.results.length).toBe(2);

				// Test different schema on same original pageLoadId
				const recsSchemaName = 'recommendationsSchema';
				const recommendationsRequest = {
					apiType: 'recommendations' as const,
					endpoint: 'recommendationsRender',
					payload: {
						[recsSchemaName]: {
							context: mockContext,
							data: {
								tag: 'tag',
								results: [
									{ uid: 'recProduct1', sku: 'recSku1' },
									{ uid: 'recProduct2', sku: 'recSku2' },
								],
							},
						},
					},
				};

				const recs_context = recommendationsRequest.payload[recsSchemaName].context;
				const recsKey = `${mockGlobals.siteId}||${recommendationsRequest.endpoint}||${recs_context.pageLoadId}||${recs_context.sessionId}`;

				appendResults(acc, recsKey, recsSchemaName, recommendationsRequest);

				// Now should have three batched requests
				expect(Object.keys(acc.batches).length).toBe(3);

				// Other batches should remain unchanged
				expect(acc.batches[key].payload[schemaName].data.results.length).toBe(4);
				expect(acc.batches[key2].payload[schemaName].data.results.length).toBe(2);

				// New recommendations batch should have its results
				expect(acc.batches[recsKey].payload[recsSchemaName].data.results.length).toBe(2);
				expect(acc.batches[recsKey].payload[recsSchemaName].data.results[0].uid).toBe('recProduct1');
				expect(acc.batches[recsKey].payload[recsSchemaName].data.results[1].uid).toBe('recProduct2');
			});
		});
	});
});
