import deepmerge from 'deepmerge';

import { ErrorType, Product } from '@searchspring/snap-store-mobx';
import { BeaconEvent } from '@searchspring/snap-tracker';
import { AbstractController } from '../Abstract/AbstractController';
import { ControllerTypes } from '../types';
import type { RecommendationStore } from '@searchspring/snap-store-mobx';
import type { RecommendRequestModel } from '@searchspring/snap-client';
import type { RecommendationControllerConfig, ControllerServices, ContextVariables } from '../types';
import { Item, RecommendationsSchemaData } from '@searchspring/beacon';

type RecommendationTrackMethods = {
	product: {
		click: (e: MouseEvent, result: Product) => BeaconEvent | undefined;
		render: (result: Product) => BeaconEvent | undefined;
		impression: (result: Product) => BeaconEvent | undefined;
	};
	addBundle: (e: MouseEvent, results: Product[]) => BeaconEvent | undefined;
};

const defaultConfig: RecommendationControllerConfig = {
	id: 'recommend',
	tag: '',
	batched: true,
	realtime: false,
	globals: {},
};

export class RecommendationController extends AbstractController {
	public type = ControllerTypes.recommendation;
	declare store: RecommendationStore;
	declare config: RecommendationControllerConfig;

	events: {
		product: Record<
			string,
			{
				impression?: RecommendationsSchemaData;
				render?: RecommendationsSchemaData;
			}
		>;
	} = {
		product: {},
	};

	constructor(
		config: RecommendationControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		if (!config.tag) {
			throw new Error(`Invalid config passed to RecommendationController. The "tag" attribute is required.`);
		}

		// attach to bfCache restore event and re-run search on the controller
		// enabled by default
		if (config.settings?.searchOnPageShow !== false) {
			window.addEventListener('pageshow', (e) => {
				if (e.persisted && !this.store.error && this.store.loaded && !this.store.loading) {
					this.search();
				}
			});
		}

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);
		this.store.setConfig(this.config);

		// add 'afterStore' middleware
		// this.eventManager.on('afterStore', async (recommend: AfterStoreObj, next: Next): Promise<void | boolean> => {
		// 	await next();

		// 	// attach tracking events to cart store
		// 	this.store.cart?.on('addItems', ({ items }: { items: Product[] }) => {
		// 		items.forEach((item) => {
		// 			this.track.product.addedToBundle(item);
		// 		});
		// 	});

		// 	this.store.cart?.on('removeItems', ({ items }: { items: Product[] }) => {
		// 		items.forEach((item) => {
		// 			this.track.product.removedFromBundle(item);
		// 		});
		// 	});
		// });

		// attach config plugins and event middleware
		this.use(this.config);
	}

	track: RecommendationTrackMethods = (() => {
		const getRecommendationsSchemaData = (results?: Product[]): RecommendationsSchemaData => {
			return {
				tag: this.store.profile.tag,
				results:
					results?.map((result: Product): Item => {
						return {
							uid: result.display?.mappings.core?.uid || result?.mappings.core?.uid || '',
							// @ts-ignore - childUid not on snapi-types
							// TODO: fix types here
							childUid: result.display?.mappings.core?.childUid || result?.mappings.core?.childUid,
							sku: result.display?.mappings.core?.sku || result?.mappings.core?.sku,
							// @ts-ignore - childSku not on snapi-types
							childSku: result.display?.mappings.core?.childSku || result?.mappings.core?.childSku,
						};
					}) || [],
			};
		};

		return {
			product: {
				click: (e: MouseEvent, result): void => {
					if (!this.store.profile.tag || !result) return;

					const data = getRecommendationsSchemaData([result]);
					this.tracker.beacon.events.recommendations.clickThrough({ data });
					this.eventManager.fire('track.product.click', { controller: this, event: e, result, trackEvent: data });
				},
				impression: (result): RecommendationsSchemaData | undefined => {
					if (!this.store.profile.tag || !result || (this.events.product && this.events.product[result.id]?.impression)) return;

					const data = getRecommendationsSchemaData([result]);
					this.tracker.beacon.events.recommendations.impression({ data });
					this.events.product![result.id] = this.events.product![result.id] || {};
					this.events.product![result.id].impression = data;
					this.eventManager.fire('track.product.impression', { controller: this, result, trackEvent: data });
					return data;
				},
				render: (result): RecommendationsSchemaData | undefined => {
					if (!this.store.profile.tag || !result || this.events.product![result.id]?.render) return;

					const data = getRecommendationsSchemaData([result]);
					this.tracker.beacon.events.recommendations.render({ data });
					this.events.product![result.id] = this.events.product![result.id] || {};
					this.events.product![result.id].render = data;
					this.eventManager.fire('track.product.render', { controller: this, result, trackEvent: data });
					return data;
				},
				// TODO: keep or remove?
				// removedFromBundle: (): void => {
				// 	this.log.warn('product.removedFromBundle tracking is not currently supported in this controller type');
				// },
				// addedToBundle: (): void => {
				// 	this.log.warn('product.addedToBundle tracking is not currently supported in this controller type');
				// },
			},
			addBundle: (e: MouseEvent, results: Product[]): RecommendationsSchemaData | undefined => {
				if (!results.length || !this.store.profile.tag || this.store.profile.type != 'bundle') return;

				const data = getRecommendationsSchemaData(results);
				this.tracker.beacon.events.recommendations.addToCart({ data });
				this.eventManager.fire('track.product.addBundle', { controller: this, results, trackEvent: data });
				return data;
			},
			// click: (): undefined => {
			// 	// TODO: remove after removing references to this
			// },
			impression: (): undefined => {
				// TODO: remove after removing references to this
			},
		} as RecommendationTrackMethods;
	})();

	get params(): RecommendRequestModel {
		const params = {
			tag: this.config.tag,
			batched: this.config.batched,
			branch: this.config.branch || 'production',
			batchId: this.config.batchId,
			...this.config.globals,
		};

		const shopperId = this.tracker.getContext().shopperId;
		const cart = this.tracker.cookies.cart.get();
		const lastViewed = this.tracker.cookies.viewed.get();

		if (shopperId) {
			params.shopper = shopperId;
		}

		if (!params.siteId || params.siteId == this.tracker.getGlobals().siteId) {
			if (cart?.length) {
				params.cart = cart;
			}
			if (lastViewed?.length) {
				params.lastViewed = lastViewed;
			}
		}

		return params as RecommendRequestModel;
	}

	search = async (): Promise<void> => {
		try {
			if (!this.initialized) {
				await this.init();
			}

			const params = this.params;

			this.store.loading = true;

			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const { meta, profile, recommend } = await this.client.recommend(params);
			searchProfile.stop();
			this.log.profile(searchProfile);

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response: { meta, profile, recommend },
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterSearch' middleware cancelled`);
					afterSearchProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterSearch' middleware`);
					throw err;
				}
			}

			afterSearchProfile.stop();
			this.log.profile(afterSearchProfile);

			// update the store
			this.store.update({ meta, profile, recommend });

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response: { meta, profile, recommend },
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterStore' middleware cancelled`);
					afterStoreProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterStore' middleware`);
					throw err;
				}
			}

			afterStoreProfile.stop();
			this.log.profile(afterStoreProfile);
		} catch (err: any) {
			if (err) {
				if (err.err && err.fetchDetails) {
					switch (err.fetchDetails.status) {
						case 429: {
							this.store.error = {
								code: 429,
								type: ErrorType.WARNING,
								message: 'Too many requests try again later',
							};
							break;
						}

						case 500: {
							this.store.error = {
								code: 500,
								type: ErrorType.ERROR,
								message: 'Invalid Search Request or Service Unavailable',
							};
							break;
						}

						default: {
							this.store.error = {
								type: ErrorType.ERROR,
								message: err.err.message,
							};
							break;
						}
					}

					this.log.error(this.store.error);
					this.handleError(err.err, err.fetchDetails);
				} else {
					this.store.error = {
						type: ErrorType.ERROR,
						message: `Something went wrong... - ${err}`,
					};
					this.log.error(err);
					this.handleError(err);
				}
			}
		} finally {
			this.store.loading = false;
		}
	};

	addToCart = async (products: Product[]): Promise<void> => {
		const eventContext = {
			controller: this,
			products: products,
		};

		this.eventManager.fire('addToCart', eventContext);

		// TODO: fire some future beacon event
	};
}
