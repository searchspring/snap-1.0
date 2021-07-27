import deepmerge from 'deepmerge';

import type { BeaconEvent } from '@searchspring/snap-tracker';
import { BeaconType, BeaconCategory } from '@searchspring/snap-tracker';

import { AbstractController } from '../Abstract/AbstractController';
import type { RecommendationControllerConfig, BeforeSearchObj, AfterSearchObj, ControllerServices, NextEvent } from '../types';
import { LogMode } from '@searchspring/snap-logger';

type RecommendationTrackMethods = {
	product: {
		click: (e, result) => BeaconEvent;
		render: (result) => BeaconEvent;
		impression: (result) => BeaconEvent;
	};
	click: (e) => BeaconEvent;
	impression: () => BeaconEvent;
	render: () => BeaconEvent;
};

const defaultConfig: RecommendationControllerConfig = {
	id: 'recommend',
	tag: '',
	globals: {},
};

export class RecommendationController extends AbstractController {
	config: RecommendationControllerConfig;
	events = {
		click: null,
		impression: null,
		render: null,
		product: {},
	};

	constructor(config: RecommendationControllerConfig, { client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker });

		if (!config.tag) {
			throw new Error(`Invalid config passed to RecommendationController. The "tag" attribute is required.`);
		}

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);

		// add 'beforeSearch' middleware
		this.eventManager.on('beforeSearch', async (recommend: BeforeSearchObj, next: NextEvent): Promise<void | boolean> => {
			recommend.controller.store.loading = true;

			await next();
		});

		// add 'afterSearch' middleware
		this.eventManager.on('afterSearch', async (recommend: AfterSearchObj, next: NextEvent): Promise<void | boolean> => {
			await next();

			recommend.controller.store.loading = false;
		});
	}

	track: RecommendationTrackMethods = {
		product: {
			click: (e: MouseEvent, result): BeaconEvent => {
				if (!this.store.profile.tag || !result || !this.events.click) return;
				const payload = {
					type: BeaconType.PROFILE_PRODUCT_CLICK,
					category: BeaconCategory.RECOMMENDATIONS,
					context: this.config.globals.siteId ? { website: { trackingCode: this.config.globals.siteId } } : null,
					event: {
						context: {
							action: 'navigate',
							placement: this.store.profile.placement,
							tag: this.store.profile.tag,
							type: 'product-recommendation',
						},
						product: {
							id: result.id,
							mappings: {
								core: result.mappings.core,
							},
							seed: this.config.globals.seed,
						},
					},
					pid: this.events.click.id,
				};

				const event = this.tracker.track.event(payload);

				return event;
			},
			impression: (result): BeaconEvent => {
				if (!this.store.profile.tag || !result || !this.events.impression || this.events.product[result.id]?.impression) return;
				const payload = {
					type: BeaconType.PROFILE_PRODUCT_IMPRESSION,
					category: BeaconCategory.RECOMMENDATIONS,
					context: this.config.globals.siteId ? { website: { trackingCode: this.config.globals.siteId } } : null,
					event: {
						context: {
							placement: this.store.profile.placement,
							tag: this.store.profile.tag,
							type: 'product-recommendation',
						},
						product: {
							id: result.id,
							mappings: {
								core: result.mappings.core,
							},
							seed: this.config.globals.seed,
						},
					},
					pid: this.events.impression.id,
				};

				this.events.product[result.id] = this.events.product[result.id] || {};
				const event = (this.events.product[result.id].impression = this.tracker.track.event(payload));

				return event;
			},
			render: (result): BeaconEvent => {
				if (!this.store.profile.tag || !result || !this.events.render || this.events.product[result.id]?.render) return;
				const payload = {
					type: BeaconType.PROFILE_PRODUCT_RENDER,
					category: BeaconCategory.RECOMMENDATIONS,
					context: this.config.globals.siteId ? { website: { trackingCode: this.config.globals.siteId } } : null,
					event: {
						context: {
							placement: this.store.profile.placement,
							tag: this.store.profile.tag,
							type: 'product-recommendation',
						},
						product: {
							id: result.id,
							mappings: {
								core: result.mappings.core,
							},
							seed: this.config.globals.seed,
						},
					},
					pid: this.events.render.id,
				};

				this.events.product[result.id] = this.events.product[result.id] || {};
				const event = (this.events.product[result.id].render = this.tracker.track.event(payload));

				return event;
			},
		},
		click: (e: MouseEvent): BeaconEvent => {
			if (!this.store.profile.tag) return;
			const event = this.tracker.track.event({
				type: BeaconType.PROFILE_CLICK,
				category: BeaconCategory.RECOMMENDATIONS,
				context: this.config.globals.siteId ? { website: { trackingCode: this.config.globals.siteId } } : null,
				event: {
					context: {
						action: 'navigate',
						placement: this.store.profile.placement,
						tag: this.store.profile.tag,
						type: 'product-recommendation',
					},
					profile: {
						tag: this.store.profile.tag,
						placement: this.store.profile.placement,
						threshold: this.store.profile.display.threshold,
						templateId: this.store.profile.display.template.uuid,
					},
				},
			});
			this.events.click = event;

			return event;
		},
		impression: (): BeaconEvent => {
			if (!this.store.profile.tag || this.events.impression) return;
			const event = this.tracker.track.event({
				type: BeaconType.PROFILE_IMPRESSION,
				category: BeaconCategory.RECOMMENDATIONS,
				context: this.config.globals.siteId ? { website: { trackingCode: this.config.globals.siteId } } : null,
				event: {
					context: {
						placement: this.store.profile.placement,
						tag: this.store.profile.tag,
						type: 'product-recommendation',
					},
					profile: {
						tag: this.store.profile.tag,
						placement: this.store.profile.placement,
						threshold: this.store.profile.display.threshold,
						templateId: this.store.profile.display.template.uuid,
					},
				},
			});
			this.events.impression = event;

			return event;
		},
		render: (): BeaconEvent => {
			if (!this.store.profile.tag || this.events.render) return;
			const event = this.tracker.track.event({
				type: BeaconType.PROFILE_RENDER,
				category: BeaconCategory.RECOMMENDATIONS,
				context: this.config.globals.siteId ? { website: { trackingCode: this.config.globals.siteId } } : null,
				event: {
					context: {
						placement: this.store.profile.placement,
						tag: this.store.profile.tag,
						type: 'product-recommendation',
					},
					profile: {
						tag: this.store.profile.tag,
						placement: this.store.profile.placement,
						threshold: this.store.profile.display.threshold,
						templateId: this.store.profile.display.template.uuid,
					},
				},
			});

			this.events.render = event;

			// track results render
			this.store.results.forEach((result) => this.track.product.render(result));

			return event;
		},
	};

	get params(): Record<string, any> {
		const params = {
			tag: this.config.tag,
			...this.config.globals,
			branch: this.config.branch || 'production',
		};
		const shopperId = this.tracker.context.shopperId;
		const cart = this.tracker.getCartItems();
		const lastViewed = this.tracker.getLastViewedItems();
		if (shopperId) {
			params.shopper = shopperId;
		}
		if (cart?.length) {
			params.cart = cart;
		}
		if (lastViewed?.length) {
			params.lastViewed = lastViewed;
		}

		if (this.environment == LogMode.DEVELOPMENT) {
			params.test = true;
		}

		return params;
	}

	search = async (): Promise<void> => {
		if (!this.initialized) {
			await this.init();
		}

		const params: Record<string, any> = deepmerge({ ...this.params }, this.config.globals);

		try {
			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const response = await this.client.recommend(params);
			searchProfile.stop();
			this.log.profile(searchProfile);

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response,
				});
			} catch (err) {
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
			this.store.update(response);

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response,
				});
			} catch (err) {
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
		} catch (err) {
			if (err) {
				console.error(err);
			}
		}
	};
}