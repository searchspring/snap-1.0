'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7401],
	{
		'./src/create/createFinderController.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => createFinderController });
			var cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				types = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				AbstractController = __webpack_require__('../snap-controller/dist/esm/Abstract/AbstractController.js'),
				getParams = __webpack_require__('../snap-controller/dist/esm/utils/getParams.js'),
				esm_types = __webpack_require__('../snap-controller/dist/esm/types.js');
			const defaultConfig = {
				id: 'finder',
				globals: { pagination: { pageSize: 0 } },
				fields: [],
				persist: { enabled: !1, lockSelections: !0, expiration: 0 },
			};
			class FinderController extends AbstractController.r {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = esm_types.k.finder),
						(this.find = async () => {
							await this.store.save();
							try {
								await this.eventManager.fire('beforeFind', { controller: this }), (window.location.href = this.urlManager.href);
							} catch (err) {
								'cancelled' == err?.message
									? this.log.warn("'beforeFind' middleware cancelled")
									: (this.log.error("error in 'beforeFind' middleware"), this.log.error(err));
							}
						}),
						(this.reset = () => {
							this.store.reset(), this.urlManager.remove('filter').go(), this.store.setService('urlManager', this.urlManager);
						}),
						(this.search = async () => {
							try {
								if ((this.initialized || (await this.init()), this.store.persisted)) return;
								const params = this.params;
								this.store.loading = !0;
								try {
									await this.eventManager.fire('beforeSearch', { controller: this, request: params });
								} catch (err) {
									if ('cancelled' == err?.message) return void this.log.warn("'beforeSearch' middleware cancelled");
									throw (this.log.error("error in 'beforeSearch' middleware"), err);
								}
								const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start(),
									{ meta, search } = await this.client.finder(params);
								searchProfile.stop(), this.log.profile(searchProfile);
								const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();
								try {
									await this.eventManager.fire('afterSearch', { controller: this, request: params, response: { meta, search } });
								} catch (err) {
									if ('cancelled' == err?.message) return this.log.warn("'afterSearch' middleware cancelled"), void afterSearchProfile.stop();
									throw (this.log.error("error in 'afterSearch' middleware"), err);
								}
								afterSearchProfile.stop(), this.log.profile(afterSearchProfile), this.store.update({ meta, search });
								const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();
								try {
									await this.eventManager.fire('afterStore', { controller: this, request: params, response: { meta, search } });
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
												this.store.error = { code: 429, type: types.B.WARNING, message: 'Too many requests try again later' };
												break;
											case 500:
												this.store.error = { code: 500, type: types.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
												break;
											default:
												this.store.error = { type: types.B.ERROR, message: err.err.message };
										}
										this.log.error(this.store.error), this.handleError(err.err, err.fetchDetails);
									} else
										(this.store.error = { type: types.B.ERROR, message: `Something went wrong... - ${err}` }),
											this.log.error(err),
											this.handleError(err);
							} finally {
								this.store.loading = !1;
							}
						}),
						(this.config = cjs_default()(defaultConfig, this.config)),
						this.store.setConfig(this.config),
						this.config.url &&
							(this.urlManager = this.urlManager.withConfig((translatorConfig) => ({ ...translatorConfig, urlRoot: this.config.url }))),
						this.eventManager.on('afterSearch', async (finder, next) => {
							await next(), (finder.controller.store.loading = !1);
						}),
						this.use(this.config),
						this.store.loadPersisted();
				}
				get params() {
					const urlState = this.urlManager.state,
						userId = this.tracker.getUserId(),
						sessionId = this.tracker.getContext().sessionId,
						pageLoadId = this.tracker.getContext().pageLoadId,
						tracking = {};
					userId && (tracking.userId = userId),
						sessionId && (tracking.sessionId = sessionId),
						pageLoadId && (tracking.pageLoadId = pageLoadId),
						(tracking.domain = window.location.href);
					const defaultParams = { facets: { include: this.config.fields.map((fieldConfig) => fieldConfig.field), autoDrillDown: !1 }, tracking };
					return cjs_default()({ ...(0, getParams.j)(urlState) }, cjs_default()(defaultParams, this.config.globals));
				}
			}
			var Client = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				AbstractStore = __webpack_require__('../snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
				SearchPaginationStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
				StorageStore = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js');
			class FinderSelectionStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const config = params.config,
						{ services, data, stores, state } = params || {},
						{ storage } = stores || {},
						{ search, meta, selections } = data || {},
						{ facets } = search || {},
						selectedSelections = [];
					selections?.length
						? config.fields.forEach((fieldObj) => {
								const storedData = selections.find((selection) => selection.facet.field === fieldObj.field);
								if (storedData) {
									const { facet, selected } = storedData || {};
									if (facet?.hierarchyDelimiter)
										selections.forEach((selection, index) => {
											const levels = fieldObj?.levels || facet?.values[facet?.values.length - 1]?.value.split(facet.hierarchyDelimiter),
												levelConfig = { index, label: fieldObj.levels ? levels[index] : '', key: `ss-${index}` },
												storageKey = generateStorageKey(config.id, facet.field);
											storage.set(`${storageKey}.${levelConfig.key}.values`, selection.data),
												storage.set(`${storageKey}.${levelConfig.key}.selected`, selection.selected);
											const selectionHierarchy = new SelectionHierarchy({
												config: levelConfig,
												services,
												stores,
												state,
												data: { id: config.id, facet },
											});
											config.persist?.lockSelections && (selectionHierarchy.disabled = !0),
												selection.selected && (services.urlManager = services.urlManager.set(`filter.${selection.facet.field}`, selection.selected)),
												selectedSelections.push(selectionHierarchy);
										});
									else {
										const selection = new Selection({ config: fieldObj, services, stores, state, data: { id: config.id, facet } });
										(selection.selected = selected),
											selection.storage.set('selected', selected),
											(selection.data = facet.values),
											selected && (services.urlManager = services.urlManager.set(`filter.${facet.field}`, selected)),
											config.persist?.lockSelections && (selection.disabled = !0),
											selectedSelections.push(selection);
									}
								}
						  })
						: facets &&
						  meta &&
						  (config?.fields &&
								facets.sort((a, b) => {
									const fields = config.fields.map((fieldConfig) => fieldConfig.field);
									return fields.indexOf(a.field) - fields.indexOf(b.field);
								}),
						  config?.fields?.forEach((fieldObj) => {
								let facet = facets.filter((facet) => facet.field == fieldObj.field).pop();
								facet = { ...((meta?.facets && meta.facets[fieldObj.field]) || {}), ...facet };
								if ('hierarchy' === facet?.display) {
									const filtered = facet.values?.filter((value) => value.filtered).pop();
									if (filtered) {
										const filteredLevel = filtered.value?.split(facet?.hierarchyDelimiter).length;
										facet.values = facet.values?.filter(
											(value, index) =>
												(value.value && value.value.split(facet?.hierarchyDelimiter).length > filteredLevel) || index == facet.values?.length - 1
										);
									}
									const levels =
										fieldObj?.levels || (facet?.values && facet?.values[facet?.values?.length - 1].value?.split(facet.hierarchyDelimiter));
									levels?.map((level, index) => {
										const levelConfig = { index, label: fieldObj.levels ? level : '', key: `ss-${index}` };
										selectedSelections.push(new SelectionHierarchy({ config: levelConfig, services, stores, state, data: { id: config.id, facet } }));
									});
								} else selectedSelections.push(new Selection({ config: fieldObj, services, stores, state, data: { id: config.id, facet } }));
						  })),
						super(...selectedSelections);
				}
			}
			class SelectionBase {
				constructor(selectionData) {
					(this.filtered = !1), (this.collapsed = !1), (this.display = ''), (this.disabled = !1), (this.selected = ''), (this.custom = {});
					const { config, services, stores, state, data } = selectionData || {},
						{ storage } = stores || {},
						{ id, facet } = data || {},
						{ persisted, loading } = state;
					(this.services = services),
						(this.loading = loading),
						(this.persisted = persisted),
						(this.id = id),
						(this.config = config),
						(this.facet = facet),
						(this.type = facet.type),
						(this.field = facet.field),
						(this.filtered = facet.filtered),
						(this.collapsed = facet.collapsed),
						(this.display = facet.display),
						(this.label = facet.label),
						(this.multiple = facet.multiple),
						(this.storage = {
							key: generateStorageKey(this.id, this.field),
							get: function (key) {
								const path = this.key + (key ? `.${key}` : '');
								return storage.get(path);
							},
							set: function (key, value) {
								const path = this.key + (key ? `.${key}` : '');
								return storage.set(path, value);
							},
						});
				}
				get values() {
					const values = [...(this.data || [])];
					return values.unshift({ filtered: !1, value: '', label: this.config.label || this.label }), values;
				}
			}
			class Selection extends SelectionBase {
				constructor(selectionData) {
					super(selectionData);
					const { state, data } = selectionData || {},
						{ loading } = state || {},
						{ facet } = data || {};
					(this.loading = loading), this.storage.set('values', facet.values);
					const storageData = this.storage.get();
					(this.data = storageData.values), (this.disabled = !this.values.length), (this.selected = this.disabled ? '' : storageData.selected || '');
				}
				select(value = '') {
					this.loading ||
						((this.selected = value),
						this.storage.set('selected', value),
						(this.persisted = !1),
						value ? this.services.urlManager.set(`filter.${this.field}`, value).go() : this.services.urlManager.remove(`filter.${this.field}`).go());
				}
			}
			class SelectionHierarchy extends SelectionBase {
				constructor(selectionData) {
					super(selectionData);
					const { data } = selectionData || {},
						{ facet } = data || {};
					this.hierarchyDelimiter = facet.hierarchyDelimiter;
					let storageData = this.storage.get();
					if (storageData)
						if (storageData[this.config.key]?.values) this.selected = storageData[this.config.key]?.selected || '';
						else {
							const storedLevels = this.storage.get(),
								levels = Object.keys(storedLevels).map((a, index) => `ss-${index}`);
							!levels.includes(this.config.key) && levels.push(this.config.key);
							const selectedLevels = Object.keys(storedLevels).filter((key) => storedLevels[key].selected),
								lastSelected = selectedLevels[selectedLevels.length - 1],
								labelIndex = levels.indexOf(this.config.key),
								lastSelectedIndex = levels.indexOf(lastSelected);
							-1 != lastSelectedIndex && labelIndex == lastSelectedIndex + 1
								? this.storage.set(`${this.config.key}.values`, facet.values)
								: (this.disabled = !0);
						}
					else this.storage.set(`${this.config.key}.values`, facet.values), (storageData = this.storage.get());
					this.data = storageData[this.config.key]?.values || [];
				}
				select(value = '') {
					if (this.loading) return;
					(this.selected = value), (this.persisted = !1);
					const selectedLevel = this.config.index,
						storedLevels = this.storage.get(),
						keysToRemove = Object.keys(storedLevels).slice(selectedLevel);
					Object.keys(storedLevels)
						.reverse()
						.forEach((key) => {
							key == this.config.key ? this.storage.set(`${key}.selected`, value) : keysToRemove.includes(key) && this.storage.set(`${key}`, {}),
								(value = value || this.storage.get(`${key}.selected`));
						}),
						value ? this.services.urlManager.set(`filter.${this.field}`, value).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
				}
			}
			function generateStorageKey(id, field) {
				return `ss-finder-${id}.${field}`;
			}
			var MetaStore = __webpack_require__('../snap-store-mobx/dist/esm/Meta/MetaStore.js');
			class FinderStore extends AbstractStore.K {
				constructor(config, services) {
					if (
						(super(config),
						(this.persisted = !1),
						(this.save = () => {}),
						(this.reset = () => {
							this.config.persist?.enabled && (this.persistedStorage?.clear(), (this.persisted = !1)),
								this.services.urlManager.state.filter && (this.storage.clear(), (this.selections = []), (this.loaded = !1));
						}),
						'object' != typeof services || 'function' != typeof services.urlManager?.subscribe)
					)
						throw new Error('Invalid service \'urlManager\' passed to AutocompleteStore. Missing "subscribe" function.');
					(this.services = services),
						this.config.persist?.enabled && (this.persistedStorage = new StorageStore.t({ type: 'local', key: `ss-${this.config.id}-persisted` })),
						(this.storage = new StorageStore.t()),
						this.update({ meta: {}, search: {} }),
						(0, mobx_esm.Gn)(this, { selections: mobx_esm.sH, pagination: mobx_esm.sH });
				}
				setService(name, service) {
					this.services[name] && service && (this.services[name] = service);
				}
				loadPersisted() {
					if (this.config.persist?.enabled && this.persistedStorage) {
						const date = this.persistedStorage.get('date'),
							data = this.persistedStorage.get('data'),
							config = this.persistedStorage.get('config'),
							selections = this.persistedStorage.get('selections'),
							isExpired = this.config.persist.expiration && Date.now() - date > this.config.persist.expiration;
						if (data && selections.filter((selection) => selection.selected).length) {
							JSON.stringify({ ...config, plugins: [], middleware: {} }) !== JSON.stringify({ ...this.config, plugins: [], middleware: {} }) ||
							isExpired
								? this.reset()
								: (this.update(data, selections), (this.persisted = !0), this.services.urlManager.go());
						}
					}
				}
				update(data, selectedSelections) {
					const { meta, search } = data || {};
					(this.meta = new MetaStore.l({ data: { meta } })),
						(this.pagination = new SearchPaginationStore.a3({
							config: this.config,
							services: this.services,
							data: { search, meta: this.meta.data },
						})),
						(this.selections = new FinderSelectionStore({
							config: this.config,
							services: this.services,
							stores: { storage: this.storage },
							state: { persisted: this.persisted, loading: this.loading },
							data: { search, meta: this.meta.data, selections: selectedSelections || [] },
						})),
						(this.save = () => {
							this.config.persist?.enabled &&
								this.persistedStorage &&
								this?.selections?.filter((selection) => selection.selected).length &&
								(this.persistedStorage.set('config', this.config),
								this.persistedStorage.set('data', search),
								this.persistedStorage.set('date', Date.now()),
								this.persistedStorage.set(
									'selections',
									this.selections.map((selection) => ({ selected: selection.selected, data: selection.data, facet: selection.facet }))
								));
						}),
						(this.error = void 0),
						(this.loaded = Boolean(search?.pagination));
				}
			}
			var UrlManager = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				UrlTranslator = __webpack_require__('../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
				react = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				EventManager = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				Profiler = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				Logger = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				Tracker = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			const createFinderController = (config, services) => {
				const urlManager = (services?.urlManager || new UrlManager.V(new UrlTranslator.E(config.url), react.X)).detach(!0);
				config.mode && config.client && ((config.client.config = config.client.config || {}), (config.client.config.mode = config.mode));
				return new FinderController(
					config.controller,
					{
						client: services?.client || new Client.K(config.client.globals, config.client.config),
						store: services?.store || new FinderStore(config.controller, { urlManager }),
						urlManager,
						eventManager: services?.eventManager || new EventManager.E(),
						profiler: services?.profiler || new Profiler.U(),
						logger: services?.logger || new Logger.V({ mode: config.mode }),
						tracker: services?.tracker || new Tracker.JD(config.client.globals),
					},
					config.context
				);
			};
		},
	},
]);
