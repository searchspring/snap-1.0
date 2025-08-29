'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6936],
	{
		'../snap-controller/dist/esm/Recommendation/RecommendationController.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { c: () => RecommendationController });
			var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				_Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-controller/dist/esm/Abstract/AbstractController.js'),
				_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-controller/dist/esm/types.js'),
				_searchspring_beacon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@searchspring/beacon/dist/esm/src/index.js'),
				_utils_isClickWithinProductLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../snap-controller/dist/esm/utils/isClickWithinProductLink.js'
				);
			const defaultConfig = { id: 'recommend', tag: '', batched: !0, realtime: !1, globals: {} };
			class RecommendationController extends _Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_2__.r {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					if (
						(super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = _types__WEBPACK_IMPORTED_MODULE_3__.k.recommendation),
						(this.events = { product: {} }),
						(this.track = {
							product: {
								clickThrough: (e, result) => {
									if (this.events.product[result.id]?.clickThrough) return;
									const data = getRecommendationsSchemaData({ store: this.store, results: [result] });
									this.tracker.events.recommendations.clickThrough({ data, siteId: this.config.globals?.siteId }),
										(this.events.product[result.id] = this.events.product[result.id] || {}),
										(this.events.product[result.id].clickThrough = !0),
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: result, trackEvent: data });
								},
								click: (e, result) => {
									this.events.product[result.id]?.click ||
										('banner' !== result.type &&
											((0, _utils_isClickWithinProductLink__WEBPACK_IMPORTED_MODULE_4__.bU)(e, result) && this.track.product.clickThrough(e, result),
											(this.events.product[result.id] = this.events.product[result.id] || {}),
											(this.events.product[result.id].click = !0),
											setTimeout(() => {
												this.events.product[result.id].click = !1;
											}, _utils_isClickWithinProductLink__WEBPACK_IMPORTED_MODULE_4__.WG)));
								},
								impression: (result) => {
									if (this.events.product[result.id]?.impression || !this.events.product[result.id]?.render) return;
									const data = getRecommendationsSchemaData({ store: this.store, results: [result] });
									return (
										this.tracker.events.recommendations.impression({ data, siteId: this.config.globals?.siteId }),
										(this.events.product[result.id] = this.events.product[result.id] || {}),
										(this.events.product[result.id].impression = !0),
										this.eventManager.fire('track.product.impression', { controller: this, product: result, trackEvent: data }),
										data
									);
								},
								render: (result) => {
									if (this.events.product[result.id]?.render) return;
									const data = getRecommendationsSchemaData({ store: this.store, results: [result] });
									return (
										this.tracker.events.recommendations.render({ data, siteId: this.config.globals?.siteId }),
										(this.events.product[result.id] = this.events.product[result.id] || {}),
										(this.events.product[result.id].render = !0),
										this.eventManager.fire('track.product.render', { controller: this, product: result, trackEvent: data }),
										data
									);
								},
								addToCart: (result) => {
									const data = (function getRecommendationsAddtocartSchemaData({ store, results }) {
										return {
											tag: store.profile.tag,
											results:
												results?.map((result) => {
													const core = result.mappings.core;
													return { uid: core?.uid || '', sku: core?.sku, price: Number(core?.price), qty: result.quantity || 1 };
												}) || [],
										};
									})({ store: this.store, results: [result] });
									return (
										this.tracker.events.recommendations.addToCart({ data, siteId: this.config.globals?.siteId }),
										this.eventManager.fire('track.product.addToCart', { controller: this, product: result, trackEvent: data }),
										data
									);
								},
							},
						}),
						(this.search = async () => {
							try {
								this.initialized || (await this.init());
								const params = this.params;
								(this.events = { product: {} }), (this.store.loading = !0);
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
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.B.WARNING,
													message: 'Too many requests try again later',
												};
												break;
											case 500:
												this.store.error = {
													code: 500,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.B.ERROR,
													message: 'Invalid Search Request or Service Unavailable',
												};
												break;
											default:
												this.store.error = { type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.B.ERROR, message: err.err.message };
										}
										this.log.error(this.store.error), this.handleError(err.err, err.fetchDetails);
									} else
										(this.store.error = {
											type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.B.ERROR,
											message: `Something went wrong... - ${err}`,
										}),
											this.log.error(err),
											this.handleError(err);
							} finally {
								this.store.loading = !1;
							}
						}),
						(this.addToCart = async (_products) => {
							const products = 'function' == typeof _products.slice ? _products.slice() : [_products];
							products.forEach((product) => {
								this.track.product.addToCart(product);
							}),
								products.length > 0 && this.eventManager.fire('addToCart', { controller: this, products });
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
						this.eventManager.on('afterStore', async (search, next) => {
							await next();
							const controller = search.controller;
							if (controller.store.loaded && !controller.store.error) {
								const products = controller.store.results.filter((result) => 'product' === result.type),
									results = 0 === products.length ? [] : products,
									data = getRecommendationsSchemaData({ store: this.store, results });
								search.response._cached || this.tracker.events.recommendations.render({ data, siteId: this.config.globals?.siteId }),
									products.forEach((result) => {
										(this.events.product[result.id] = this.events.product[result.id] || {}),
											(this.events.product[result.id].render = !0),
											search.response._cached ||
												this.eventManager.fire('track.product.render', { controller: this, product: result, trackEvent: data });
									});
							}
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
						{ shopperId } = this.tracker.getContext();
					if ((shopperId && (params.shopper = shopperId), !params.siteId || params.siteId == this.tracker.getGlobals().siteId)) {
						const cart = this.tracker.cookies.cart.get(),
							lastViewed = this.tracker.cookies.viewed.get();
						cart?.length && (params.cart = cart), lastViewed?.length && (params.lastViewed = lastViewed);
					}
					return params;
				}
			}
			function getRecommendationsSchemaData({ store, results }) {
				return {
					tag: store.profile.tag,
					results:
						results?.map((result) => {
							const core = result.mappings.core,
								position = result.position;
							return { type: _searchspring_beacon__WEBPACK_IMPORTED_MODULE_1__.hLm.Product, position, uid: core.uid || '', sku: core.sku };
						}) || [],
				};
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
					if (profile?.tag) {
						if (!profile.display.template) throw new Error(`Recommendation Profile Store found a profile without a set template: ${profile.tag}`);
						(this.tag = profile.tag),
							(this.placement = profile.placement),
							(this.display = profile.display),
							(this.type = profile.display.template.type),
							(0, mobx_esm.Gn)(this, { tag: mobx_esm.sH, placement: mobx_esm.sH, display: mobx_esm.sH, type: mobx_esm.sH });
					}
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
		'./src/create/createRecommendationController.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../snap-controller/dist/esm/Recommendation/RecommendationController.js'
				),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				_searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				_searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			const __WEBPACK_DEFAULT_EXPORT__ = (config, services) => {
				const urlManager = (
					services?.urlManager ||
					new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_0__.V(
						new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.E(config.url),
						_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.X
					)
				).detach(!0);
				config.mode && config.client && ((config.client.config = config.client.config || {}), (config.client.config.mode = config.mode));
				return new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_3__.c(
					config.controller,
					{
						client: services?.client || new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_4__.K(config.client.globals, config.client.config),
						store: services?.store || new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.t(config.controller, { urlManager }),
						urlManager,
						eventManager: services?.eventManager || new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_6__.E(),
						profiler: services?.profiler || new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_7__.U(),
						logger: services?.logger || new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_8__.V({ mode: config.mode }),
						tracker: services?.tracker || new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_9__.J(config.client.globals),
					},
					config.context
				);
			};
		},
	},
]);
