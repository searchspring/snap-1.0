'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9849],
	{
		'../snap-controller/dist/esm/Recommendation/RecommendationController.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { c: () => RecommendationController });
			var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-tracker/dist/esm/types.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				_Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-controller/dist/esm/Abstract/AbstractController.js'),
				_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-controller/dist/esm/types.js');
			const defaultConfig = { id: 'recommend', tag: '', batched: !0, realtime: !1, globals: {} };
			class RecommendationController extends _Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_1__.r {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					if (
						(super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = _types__WEBPACK_IMPORTED_MODULE_2__.k.recommendation),
						(this.events = { click: void 0, impression: void 0, render: void 0, product: {} }),
						(this.track = (() => {
							const getSeed = () => {
								let skus = [];
								switch (this.store.profile.placement) {
									case _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.VQ.PRODUCTPAGE:
										this.config.globals?.product
											? (skus = [this.config.globals?.product])
											: this.config.globals?.products && (skus = this.config.globals?.products);
										break;
									case _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.VQ.BASKETPAGE:
										skus = this.tracker.cookies.cart.get();
										break;
									default:
										return;
								}
								if (skus.length) return skus.map((sku) => ({ sku }));
							};
							return {
								product: {
									click: (e, result) => {
										if (!this.store.profile.tag || !result) return;
										this.track.click(e);
										const payload = {
												type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_PRODUCT_CLICK,
												category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
												context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
												event: {
													context: {
														action: 'navigate',
														placement: this.store.profile.placement,
														tag: this.store.profile.tag,
														type: 'product-recommendation',
													},
													product: { id: result.id, mappings: { core: result.mappings.core }, seed: getSeed() },
												},
												pid: this.events.click?.id,
											},
											event = this.tracker.track.event(payload);
										return this.eventManager.fire('track.product.click', { controller: this, event: e, result, trackEvent: event }), event;
									},
									impression: (result) => {
										if (
											!this.store.profile.tag ||
											!result ||
											!this.events.impression ||
											(this.events.product && this.events.product[result.id]?.impression)
										)
											return;
										const payload = {
											type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_PRODUCT_IMPRESSION,
											category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.mappings.core }, seed: getSeed() },
											},
											pid: this.events.impression.id,
										};
										this.events.product[result.id] = this.events.product[result.id] || {};
										const event = (this.events.product[result.id].impression = this.tracker.track.event(payload));
										return this.eventManager.fire('track.product.impression', { controller: this, result, trackEvent: event }), event;
									},
									render: (result) => {
										if (!this.store.profile.tag || !result || !this.events.render || this.events.product[result.id]?.render) return;
										const payload = {
											type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_PRODUCT_RENDER,
											category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.mappings.core }, seed: getSeed() },
											},
											pid: this.events.render.id,
										};
										this.events.product[result.id] = this.events.product[result.id] || {};
										const event = (this.events.product[result.id].render = this.tracker.track.event(payload));
										return this.eventManager.fire('track.product.render', { controller: this, result, trackEvent: event }), event;
									},
									removedFromBundle: (result) => {
										if (
											!(
												this.store.profile.tag &&
												result &&
												this.events.render &&
												this.events.product[result.id]?.render &&
												'bundle' == this.store.profile.type
											)
										)
											return;
										const payload = {
											type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_PRODUCT_REMOVEDFROMBUNDLE,
											category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.mappings.core }, seed: getSeed() },
											},
											pid: this.events.click?.id,
										};
										this.events.product[result.id] = this.events.product[result.id] || {};
										const event = (this.events.product[result.id].render = this.tracker.track.event(payload));
										return this.eventManager.fire('track.product.removedFromBundle', { controller: this, result, trackEvent: event }), event;
									},
									addedToBundle: (result) => {
										if (
											!(
												this.store.profile.tag &&
												result &&
												this.events.render &&
												this.events.product[result.id]?.render &&
												'bundle' == this.store.profile.type
											)
										)
											return;
										const payload = {
											type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_PRODUCT_ADDEDTOBUNDLE,
											category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.mappings.core }, seed: getSeed() },
											},
											pid: this.events.click?.id,
										};
										this.events.product[result.id] = this.events.product[result.id] || {};
										const event = (this.events.product[result.id].render = this.tracker.track.event(payload));
										return this.eventManager.fire('track.product.addedToBundle', { controller: this, result, trackEvent: event }), event;
									},
								},
								addBundle: (e, results) => {
									if (!results.length || !this.store.profile.tag || 'bundle' != this.store.profile.type) return;
									const event = this.tracker.track.event({
										type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_ADDBUNDLE,
										category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
										context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
										event: {
											context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
											products: results.map((result) => ({ id: result.id, mappings: { core: result.mappings.core }, quantity: result.quantity })),
											profile: {
												tag: this.store.profile.tag,
												placement: this.store.profile.placement,
												threshold: this.store.profile.display.threshold,
												templateId: this.store.profile.display.template.uuid,
												seed: getSeed(),
											},
										},
									});
									return this.eventManager.fire('track.addBundle', { controller: this, event: e, trackEvent: event }), event;
								},
								click: (e) => {
									if (!this.store.profile.tag) return;
									const event = this.tracker.track.event({
										type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_CLICK,
										category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
										context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
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
												seed: getSeed(),
											},
										},
									});
									return (this.events.click = event), this.eventManager.fire('track.click', { controller: this, event: e, trackEvent: event }), event;
								},
								impression: () => {
									if (!this.store.profile.tag || this.events.impression) return;
									const event = this.tracker.track.event({
										type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_IMPRESSION,
										category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
										context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
										event: {
											context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
											profile: {
												tag: this.store.profile.tag,
												placement: this.store.profile.placement,
												threshold: this.store.profile.display.threshold,
												templateId: this.store.profile.display.template.uuid,
												seed: getSeed(),
											},
										},
									});
									return (this.events.impression = event), this.eventManager.fire('track.impression', { controller: this, trackEvent: event }), event;
								},
								render: () => {
									if (!this.store.profile.tag || this.events.render) return;
									const event = this.tracker.track.event({
										type: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.Tz.PROFILE_RENDER,
										category: _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_3__.fx.RECOMMENDATIONS,
										context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
										event: {
											context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
											profile: {
												tag: this.store.profile.tag,
												placement: this.store.profile.placement,
												threshold: this.store.profile.display.threshold,
												templateId: this.store.profile.display.template.uuid,
												seed: getSeed(),
											},
										},
									});
									return (this.events.render = event), this.eventManager.fire('track.render', { controller: this, trackEvent: event }), event;
								},
							};
						})()),
						(this.search = async () => {
							try {
								this.initialized || (await this.init());
								const params = this.params;
								this.store.loading = !0;
								try {
									await this.eventManager.fire('beforeSearch', { controller: this, request: params });
								} catch (err) {
									if ('cancelled' == err?.message) return void this.log.warn("'beforeSearch' middleware cancelled");
									throw (this.log.error("error in 'beforeSearch' middleware"), err);
								}
								const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start(),
									{ meta, profile, recommend } = await this.client.recommend(params);
								searchProfile.stop(), this.log.profile(searchProfile);
								const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();
								try {
									await this.eventManager.fire('afterSearch', { controller: this, request: params, response: { meta, profile, recommend } });
								} catch (err) {
									if ('cancelled' == err?.message) return this.log.warn("'afterSearch' middleware cancelled"), void afterSearchProfile.stop();
									throw (this.log.error("error in 'afterSearch' middleware"), err);
								}
								afterSearchProfile.stop(), this.log.profile(afterSearchProfile), this.store.update({ meta, profile, recommend });
								const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();
								try {
									await this.eventManager.fire('afterStore', { controller: this, request: params, response: { meta, profile, recommend } });
								} catch (err) {
									if ('cancelled' == err?.message) return this.log.warn("'afterStore' middleware cancelled"), void afterStoreProfile.stop();
									throw (this.log.error("error in 'afterStore' middleware"), err);
								}
								afterStoreProfile.stop(), this.log.profile(afterStoreProfile);
							} catch (err) {
								if (err)
									if (err.err && err.fetchDetails) {
										switch (err.fetchDetails.status) {
											case 429:
												this.store.error = {
													code: 429,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.WARNING,
													message: 'Too many requests try again later',
												};
												break;
											case 500:
												this.store.error = {
													code: 500,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.ERROR,
													message: 'Invalid Search Request or Service Unavailable',
												};
												break;
											default:
												this.store.error = { type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.ERROR, message: err.err.message };
										}
										this.log.error(this.store.error), this.handleError(err.err, err.fetchDetails);
									} else
										(this.store.error = {
											type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.ERROR,
											message: `Something went wrong... - ${err}`,
										}),
											this.log.error(err),
											this.handleError(err);
							} finally {
								this.store.loading = !1;
							}
						}),
						(this.addToCart = async (products) => {
							const eventContext = { controller: this, products };
							this.eventManager.fire('addToCart', eventContext);
						}),
						!config.tag)
					)
						throw new Error('Invalid config passed to RecommendationController. The "tag" attribute is required.');
					!1 !== config.settings?.searchOnPageShow &&
						window.addEventListener('pageshow', (e) => {
							e.persisted && !this.store.error && this.store.loaded && !this.store.loading && this.search();
						}),
						(this.config = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(defaultConfig, this.config)),
						this.store.setConfig(this.config),
						this.eventManager.on('afterStore', async (recommend, next) => {
							await next(),
								this.store.cart?.on('addItems', ({ items }) => {
									items.forEach((item) => {
										this.track.product.addedToBundle(item);
									});
								}),
								this.store.cart?.on('removeItems', ({ items }) => {
									items.forEach((item) => {
										this.track.product.removedFromBundle(item);
									});
								});
						}),
						this.use(this.config);
				}
				get params() {
					const params = {
							tag: this.config.tag,
							batched: this.config.batched,
							branch: this.config.branch || 'production',
							batchId: this.config.batchId,
							...this.config.globals,
						},
						shopperId = this.tracker.getContext().shopperId,
						cart = this.tracker.cookies.cart.get(),
						lastViewed = this.tracker.cookies.viewed.get();
					return (
						shopperId && (params.shopper = shopperId),
						(params.siteId && params.siteId != this.tracker.getGlobals().siteId) ||
							(cart?.length && (params.cart = cart), lastViewed?.length && (params.lastViewed = lastViewed)),
						params
					);
				}
			}
		},
		'../snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { t: () => RecommendationStore });
			var mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				AbstractStore = __webpack_require__('../snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
				SearchResultStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
				EventManager = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js');
			class CartStore {
				constructor() {
					(this.items = []),
						(0, mobx_esm.Gn)(this, { items: mobx_esm.sH, price: mobx_esm.EW, count: mobx_esm.EW, msrp: mobx_esm.EW }),
						(this.eventManager = new EventManager.E());
				}
				on(event, ...func) {
					this.eventManager.on(event, ...func);
				}
				get count() {
					let count = 0;
					return (
						this.items.forEach((item) => {
							count += item.quantity;
						}),
						count
					);
				}
				get price() {
					let newPrice = 0;
					return (
						this.items.forEach((item) => {
							newPrice = (100 * newPrice + 100 * (item.display.mappings.core?.price || 0) * item.quantity) / 100 || 0;
						}),
						newPrice
					);
				}
				get msrp() {
					let newPrice = 0;
					return (
						this.items.forEach((item) => {
							newPrice =
								(100 * newPrice +
									+(100 * (item.display.mappings.core?.msrp || 0) || 100 * (item.display.mappings.core?.price || 0) || 0) * item.quantity) /
									100 || 0;
						}),
						newPrice
					);
				}
				addItems(items) {
					items.forEach((item) => {
						-1 == this.items.findIndex((result) => result.id == item.id) && this.items.push(item);
					}),
						this.eventManager.fire('addItems', { cart: this, items });
				}
				removeItems(items) {
					const newIds = [...this.items];
					items.forEach((item) => {
						const idx = newIds.findIndex((result) => result.id == item.id);
						idx > -1 && (newIds.splice(idx, 1), 0 == newIds.length && this.eventManager.fire('emptied', { cart: this }));
					}),
						(this.items = newIds),
						this.eventManager.fire('removeItems', { cart: this, items });
				}
				reset() {
					(this.items = []), this.eventManager.fire('reset', { cart: this });
				}
			}
			class RecommendationProfileStore {
				constructor(params) {
					(this.display = {}), (this.type = 'default');
					const { data } = params || {},
						{ profile } = data?.profile || {};
					profile?.tag &&
						((this.tag = profile.tag),
						(this.placement = profile.placement),
						(this.display = profile.display),
						(this.type = profile.display.template.type),
						(0, mobx_esm.Gn)(this, { tag: mobx_esm.sH, placement: mobx_esm.sH, display: mobx_esm.sH, type: mobx_esm.sH }));
				}
			}
			var MetaStore = __webpack_require__('../snap-store-mobx/dist/esm/Meta/MetaStore.js');
			class RecommendationStore extends AbstractStore.K {
				constructor(config, services) {
					if (
						(super(config),
						(this.loaded = !1),
						(this.profile = {}),
						(this.results = []),
						'object' != typeof services || 'function' != typeof services.urlManager?.subscribe)
					)
						throw new Error('Invalid service \'urlManager\' passed to AutocompleteStore. Missing "subscribe" function.');
					(this.services = services), (0, mobx_esm.Gn)(this, { profile: mobx_esm.sH, results: mobx_esm.sH });
				}
				reset() {
					(this.error = void 0), (this.loaded = !1), (this.profile = {}), (this.results = []);
				}
				update(data) {
					const { meta, profile, recommend } = data || {};
					(this.error = void 0),
						(this.meta = new MetaStore.l({ data: { meta } })),
						(this.profile = new RecommendationProfileStore({ data: { profile } })),
						(this.results = new SearchResultStore.vP({
							config: this.config,
							state: { loaded: this.loaded },
							data: { search: { results: recommend.results }, meta: this.meta.data },
						})),
						'bundle' == this.profile.type && (this.cart = new CartStore()),
						(this.loaded = !!profile);
				}
			}
		},
	},
]);
