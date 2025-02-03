import deepmerge from 'deepmerge';
import { v4 as uuidv4 } from 'uuid';

import { StorageStore } from '@searchspring/snap-store-mobx';
import { cookies, getFlags, version, DomTargeter, getContext, charsParams } from '@searchspring/snap-toolbox';
import { AppMode } from '@searchspring/snap-toolbox';

import { Beacon } from '@searchspring/beacon';

import { BeaconEvent } from './BeaconEvent';
import {
	TrackerGlobals,
	TrackMethods,
	BeaconPayload,
	BeaconType,
	BeaconCategory,
	BeaconContext,
	ProductViewEvent,
	CartViewEvent,
	ProductClickEvent,
	ShopperLoginEvent,
	TrackErrorEvent,
	OrderTransactionData,
	TrackerConfig,
	DoNotTrackEntry,
	PreflightRequestModel,
	CurrencyContext,
} from './types';
import { CartSchemaData, Item, OrderTransactionSchemaData, Product } from '@searchspring/beacon';

export const BATCH_TIMEOUT = 200;
const LEGACY_USERID_COOKIE_NAME = '_isuid';
const USERID_COOKIE_NAME = 'ssUserId';
const SHOPPERID_COOKIE_NAME = 'ssShopperId';
const COOKIE_EXPIRATION = 31536000000; // 1 year
const COOKIE_SAMESITE = 'Lax';
const COOKIE_DOMAIN =
	(typeof window !== 'undefined' && window.location.hostname && '.' + window.location.hostname.replace(/^www\./, '')) || undefined;
const SESSIONID_STORAGE_NAME = 'ssSessionIdNamespace';
const LOCALSTORAGE_BEACON_POOL_NAME = 'ssBeaconPool';
const CART_PRODUCTS = 'ssCartProducts';
const VIEWED_PRODUCTS = 'ssViewedProducts';
export const MAX_VIEWED_COUNT = 20;

const defaultConfig: TrackerConfig = {
	id: 'track',
	framework: 'snap',
	mode: AppMode.production,
};

export class Tracker {
	private mode = AppMode.production;
	private globals: TrackerGlobals;
	private localStorage: StorageStore;

	// @ts-ignore - temp
	private context: BeaconContext = {};
	private isSending: number | undefined;
	private doNotTrack: DoNotTrackEntry[];

	public config: TrackerConfig;
	private targeters: DomTargeter[] = [];
	public beacon: Beacon;

	constructor(globals: TrackerGlobals, config?: TrackerConfig) {
		if (typeof globals != 'object' || typeof globals.siteId != 'string') {
			throw new Error(`Invalid config passed to tracker. The "siteId" attribute must be provided.`);
		}

		this.config = deepmerge(defaultConfig, config || {});
		this.doNotTrack = this.config.doNotTrack || [];

		if (Object.values(AppMode).includes(this.config.mode as AppMode)) {
			this.mode = this.config.mode as AppMode;
		}

		this.globals = globals;

		this.localStorage = new StorageStore({
			type: 'local',
			key: `ss-${this.config.id}`,
		});

		this.localStorage.set('siteId', this.globals.siteId);

		this.beacon = new Beacon({ siteId: this.globals.siteId, currency: this.globals.currency }, { version, framework: 'snap' });
		console.log('beacon', this.beacon);

		// this.context = {
		// 	userId: this.getUserId() || '',
		// 	sessionId: this.getSessionId(),
		// 	shopperId: this.getShopperId(),
		// 	pageLoadId: uuidv4(),
		// 	website: {
		// 		trackingCode: this.globals.siteId,
		// 	},
		// };

		// if (this.globals.currency?.code) {
		// 	this.context.currency = this.globals.currency;
		// }

		if (!window.searchspring?.tracker) {
			window.searchspring = window.searchspring || {};
			window.searchspring.tracker = this;
			window.searchspring.version = version;
		}

		// since this is in the constructor, setTimeout is required for jest.spyOn
		setTimeout(() => {
			this.targeters.push(
				new DomTargeter([{ selector: 'script[type^="searchspring/track/"]', emptyTarget: false }], (target: any, elem: Element) => {
					const { item, items, siteId, shopper, order, type, currency } = getContext(
						['item', 'items', 'siteId', 'shopper', 'order', 'type', 'currency'],
						elem as HTMLScriptElement
					);

					this.setCurrency(currency);
					switch (type) {
						case 'searchspring/track/shopper/login':
							this.track.shopper.login(shopper, siteId);
							break;
						case 'searchspring/track/product/view':
							this.track.product.view(item, siteId);
							break;
						case 'searchspring/track/cart/view':
							this.track.cart.view({ items }, siteId);
							break;
						case 'searchspring/track/order/transaction':
							this.track.order.transaction({ order, items }, siteId);
							break;
						default:
							console.error(`event '${type}' is not supported`);
							break;
					}
				})
			);
		});

		this.sendEvents();
	}

	public getGlobals(): TrackerGlobals {
		return JSON.parse(JSON.stringify(this.globals));
	}

	public getContext(): BeaconContext {
		return JSON.parse(JSON.stringify(this.context));
	}

	public retarget(): void {
		this.targeters.forEach((target) => {
			target.retarget();
		});
	}

	track: TrackMethods = {
		event: (payload: BeaconPayload): BeaconEvent | undefined => {
			const event: BeaconPayload = {
				type: payload?.type || BeaconType.CUSTOM,
				category: payload?.category || BeaconCategory.CUSTOM,
				context: payload?.context ? deepmerge(this.context, payload.context) : this.context,
				event: payload.event,
				pid: payload?.pid || undefined,
			};

			const doNotTrack = this.doNotTrack.find((entry) => entry.type === event.type && entry.category === event.category);
			if (doNotTrack) {
				return;
			}

			const beaconEvent = new BeaconEvent(event as BeaconPayload, this.config);
			this.sendEvents([beaconEvent]);

			return beaconEvent;
		},

		error: (data: TrackErrorEvent, siteId?: string): BeaconEvent | undefined => {
			if (!data?.stack && !data?.message) {
				// no console log
				return;
			}

			let context = this.context;
			if (siteId) {
				context = deepmerge(context, {
					context: {
						website: {
							trackingCode: siteId,
						},
					},
				});
			}
			const { href, filename, stack, message, colno, lineno, errortimestamp, details } = data;

			const payload = {
				type: BeaconType.ERROR,
				category: BeaconCategory.RUNTIME,
				context,
				event: {
					href: href || window.location.href,
					filename,
					stack,
					message,
					colno,
					lineno,
					errortimestamp,
					details,
					context: data.context,
				},
			};

			// prevent sending of errors when on localhost or CDN
			if (
				payload.event.message?.includes('Profile is currently paused') ||
				!payload.event.href ||
				payload.event.href.includes('//localhost') ||
				payload.event.href.includes('//snapui.searchspring.io/')
			) {
				return;
			}

			return this.track.event(payload);
		},

		shopper: {
			login: (data: ShopperLoginEvent, siteId?: string): undefined => {
				this.beacon.events.shopper.login({ data: { id: data.id }, siteId });
			},
		},
		product: {
			view: (data: Item | ProductViewEvent, siteId?: string): undefined => {
				this.beacon.events.product.pageView({ data: { result: data as Item }, siteId });
			},
			click: (data: ProductClickEvent, siteId?: string): BeaconEvent | undefined => {
				if (!data?.intellisuggestData || !data?.intellisuggestSignature) {
					console.error(
						`track.product.click event: object parameter requires a valid intellisuggestData and intellisuggestSignature. \nExample: track.click.product({ intellisuggestData: "eJwrTs4tNM9jYCjKTM8oYXDWdQ3TDTfUDbIwMDVjMARCYwMQSi_KTAEA9IQKWA", intellisuggestSignature: "9e46f9fd3253c267fefc298704e39084a6f8b8e47abefdee57277996b77d8e70" })`
					);
					return;
				}
				let context = this.context;
				if (siteId) {
					context = deepmerge(context, {
						context: {
							website: {
								trackingCode: siteId,
							},
						},
					});
				}
				const payload = {
					type: BeaconType.CLICK,
					category: BeaconCategory.INTERACTION,
					context,
					event: {
						intellisuggestData: data.intellisuggestData,
						intellisuggestSignature: data.intellisuggestSignature,
						href: data?.href ? `${data.href}` : undefined,
					},
				};

				return this.track.event(payload);
			},
		},
		cart: {
			view: (data: CartViewEvent | CartSchemaData, siteId?: string): undefined => {
				const results = (data as CartViewEvent).items || (data as CartSchemaData).results;
				this.beacon.events.cart.view({ data: { results: results as Product[] }, siteId });
			},
		},
		order: {
			transaction: (data: OrderTransactionData | OrderTransactionSchemaData, siteId?: string): undefined => {
				if ((data as OrderTransactionData).items && !(data as OrderTransactionSchemaData).orderId) {
					// backwards compatibility for OrderTransactionData
					const order = (data as OrderTransactionData).order;
					const items = (data as OrderTransactionData).items as Product[];
					const orderTransactionData: OrderTransactionSchemaData = {
						orderId: `${order?.id || ''}`,
						transactionTotal: Number(order?.transactionTotal || 0),
						total: Number(order?.total || 0),
						city: order?.city,
						state: order?.state,
						country: order?.country,
						results: items.map((item) => {
							return {
								// uid is required - fallback to get most relevant
								uid: item.uid || this.beacon.getSku(item),
								childUid: item.childUid,
								sku: item.sku,
								childSku: item.childSku,
								qty: Number(item.qty),
								price: Number(item.price),
							};
						}),
					};
					this.beacon.events.order.transaction({ data: orderTransactionData, siteId });
				} else {
					this.beacon.events.order.transaction({ data: data as OrderTransactionSchemaData, siteId });
				}
			},
		},
	};

	updateContext = (key: keyof BeaconContext, value: any) => {
		if (value) {
			this.context[key] = value;
		}
	};

	setCurrency = (currency: CurrencyContext): void => {
		if (!currency?.code) {
			return;
		}
		this.context.currency = currency;
	};

	getUserId = (): string | undefined | null => {
		let userId;
		try {
			// use cookies if available, fallback to localstorage
			if (getFlags().cookies()) {
				userId = cookies.get(LEGACY_USERID_COOKIE_NAME) || cookies.get(USERID_COOKIE_NAME) || uuidv4();
				cookies.set(USERID_COOKIE_NAME, userId, COOKIE_SAMESITE, COOKIE_EXPIRATION, COOKIE_DOMAIN);
				cookies.set(LEGACY_USERID_COOKIE_NAME, userId, COOKIE_SAMESITE, COOKIE_EXPIRATION, COOKIE_DOMAIN);
			} else if (getFlags().storage()) {
				userId = window.localStorage.getItem(USERID_COOKIE_NAME) || uuidv4();
				window.localStorage.setItem(USERID_COOKIE_NAME, userId);
			} else {
				throw 'unsupported features';
			}
		} catch (e) {
			console.error('Failed to persist user id to cookie or local storage:', e);
		}

		return userId;
	};

	getSessionId = (): string | undefined => {
		let sessionId;
		if (getFlags().storage()) {
			try {
				sessionId = window.sessionStorage.getItem(SESSIONID_STORAGE_NAME) || uuidv4();
				window.sessionStorage.setItem(SESSIONID_STORAGE_NAME, sessionId);
				getFlags().cookies() && cookies.set(SESSIONID_STORAGE_NAME, sessionId, COOKIE_SAMESITE, 0, COOKIE_DOMAIN); //session cookie
			} catch (e) {
				console.error('Failed to persist session id to session storage:', e);
			}
		} else if (getFlags().cookies()) {
			// use cookies if sessionStorage is not enabled and only reset cookie if new session to keep expiration
			sessionId = cookies.get(SESSIONID_STORAGE_NAME);
			if (!sessionId) {
				sessionId = uuidv4();
				cookies.set(SESSIONID_STORAGE_NAME, sessionId, COOKIE_SAMESITE, 0, COOKIE_DOMAIN);
			}
		}

		return sessionId;
	};

	getShopperId = (): string | undefined => {
		const shopperId = cookies.get(SHOPPERID_COOKIE_NAME);
		if (!shopperId) {
			return;
		}

		return shopperId;
	};

	sendPreflight = (): void => {
		const userId = this.getUserId();
		const siteId = this.globals.siteId;
		const shopper = this.getShopperId();
		const cart = this.cookies.cart.get();
		const lastViewed = this.cookies.viewed.get();

		if (userId && typeof userId == 'string' && siteId && (shopper || cart.length || lastViewed.length)) {
			const preflightParams: PreflightRequestModel = {
				userId,
				siteId,
			};

			let queryStringParams = `?userId=${encodeURIComponent(userId)}&siteId=${encodeURIComponent(siteId)}`;
			if (shopper) {
				preflightParams.shopper = shopper;
				queryStringParams += `&shopper=${encodeURIComponent(shopper)}`;
			}
			if (cart.length) {
				preflightParams.cart = cart;
				queryStringParams += cart.map((item) => `&cart=${encodeURIComponent(item)}`).join('');
			}
			if (lastViewed.length) {
				preflightParams.lastViewed = lastViewed;
				queryStringParams += lastViewed.map((item) => `&lastViewed=${encodeURIComponent(item)}`).join('');
			}

			const origin = this.config.requesters?.personalization?.origin || `https://${siteId}.a.searchspring.io`;
			const endpoint = `${origin}/api/personalization/preflightCache`;
			const xhr = new XMLHttpRequest();

			if (charsParams(preflightParams) > 1024) {
				xhr.open('POST', endpoint);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.send(JSON.stringify(preflightParams));
			} else {
				xhr.open('GET', endpoint + queryStringParams);
				xhr.send();
			}
		}
	};

	cookies = {
		cart: {
			get: (): string[] => {
				const items = cookies.get(CART_PRODUCTS);
				if (!items) {
					return [];
				}
				return items.split(',');
			},
			set: (items: string[]): void => {
				if (items.length) {
					const cartItems = items.map((item) => `${item}`.trim());
					const uniqueCartItems = Array.from(new Set(cartItems));
					cookies.set(CART_PRODUCTS, uniqueCartItems.join(','), COOKIE_SAMESITE, 0, COOKIE_DOMAIN);

					const itemsHaveChanged = cartItems.filter((item) => items.includes(item)).length !== items.length;
					if (itemsHaveChanged) {
						this.sendPreflight();
					}
				}
			},
			add: (items: string[]): void => {
				if (items.length) {
					const currentCartItems = this.cookies.cart.get();
					const itemsToAdd = items.map((item) => `${item}`.trim());
					const uniqueCartItems = Array.from(new Set([...currentCartItems, ...itemsToAdd]));
					cookies.set(CART_PRODUCTS, uniqueCartItems.join(','), COOKIE_SAMESITE, 0, COOKIE_DOMAIN);

					const itemsHaveChanged = currentCartItems.filter((item) => itemsToAdd.includes(item)).length !== itemsToAdd.length;
					if (itemsHaveChanged) {
						this.sendPreflight();
					}
				}
			},
			remove: (items: string[]): void => {
				if (items.length) {
					const currentCartItems = this.cookies.cart.get();
					const itemsToRemove = items.map((item) => `${item}`.trim());
					const updatedItems = currentCartItems.filter((item) => !itemsToRemove.includes(item));
					cookies.set(CART_PRODUCTS, updatedItems.join(','), COOKIE_SAMESITE, 0, COOKIE_DOMAIN);

					const itemsHaveChanged = currentCartItems.length !== updatedItems.length;
					if (itemsHaveChanged) {
						this.sendPreflight();
					}
				}
			},
			clear: () => {
				if (this.cookies.cart.get().length) {
					cookies.unset(CART_PRODUCTS, COOKIE_DOMAIN);
					this.sendPreflight();
				}
			},
		},
		viewed: {
			get: (): string[] => {
				const items = cookies.get(VIEWED_PRODUCTS);
				if (!items) {
					return [];
				}
				return items.split(',');
			},
		},
	};

	sendEvents = (eventsToSend?: BeaconEvent[]): void => {
		if (this.mode !== AppMode.production) {
			return;
		}

		const savedEvents = JSON.parse(this.localStorage.get(LOCALSTORAGE_BEACON_POOL_NAME) || '[]') as BeaconEvent[];
		if (eventsToSend) {
			const eventsClone: BeaconEvent[] = [];
			savedEvents.forEach((_event: BeaconEvent, idx: number) => {
				// using Object.assign since we are not modifying nested properties
				eventsClone.push(Object.assign({}, _event));
				delete eventsClone[idx].id;
				delete eventsClone[idx].pid;
			});

			const stringyEventsClone = JSON.stringify(eventsClone);

			// de-dupe events
			eventsToSend.forEach((event, idx) => {
				const newEvent: BeaconEvent = Object.assign({}, event);
				delete newEvent.id;
				delete newEvent.pid;
				if (stringyEventsClone.indexOf(JSON.stringify(newEvent)) == -1) {
					savedEvents.push({ ...eventsToSend[idx] });
				}
			});

			// save the beacon pool with de-duped events
			this.localStorage.set(LOCALSTORAGE_BEACON_POOL_NAME, JSON.stringify(savedEvents));
		}

		clearTimeout(this.isSending);
		this.isSending = window.setTimeout(() => {
			if (savedEvents.length) {
				const xhr = new XMLHttpRequest();
				const origin = this.config.requesters?.beacon?.origin || 'https://beacon.searchspring.io';
				xhr.open('POST', `${origin}/beacon`);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.send(JSON.stringify(savedEvents.length == 1 ? savedEvents[0] : savedEvents));
			}
			this.localStorage.set(LOCALSTORAGE_BEACON_POOL_NAME, JSON.stringify([]));
		}, BATCH_TIMEOUT);
	};
}
