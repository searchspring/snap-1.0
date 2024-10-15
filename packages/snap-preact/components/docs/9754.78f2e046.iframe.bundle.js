'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9754],
	{
		'../snap-controller/dist/esm/Autocomplete/AutocompleteController.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Z: () => AutocompleteController });
			var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				_Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-controller/dist/esm/Abstract/AbstractController.js'),
				_utils_getParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-controller/dist/esm/utils/getParams.js'),
				_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-controller/dist/esm/types.js');
			const defaultConfig = {
				id: 'autocomplete',
				selector: '',
				action: '',
				globals: {},
				settings: {
					integratedSpellCorrection: !1,
					initializeFromUrl: !0,
					syncInputs: !0,
					serializeForm: !1,
					facets: { trim: !0, pinFiltered: !0 },
					redirects: { merchandising: !0, singleResult: !1 },
				},
			};
			class AutocompleteController extends _Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_1__.r {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = _types__WEBPACK_IMPORTED_MODULE_2__.k.autocomplete),
						(this.track = {
							product: {
								click: () => {
									this.log.warn('product.click tracking is not currently supported in this controller type');
								},
							},
						}),
						(this.handlers = {
							input: {
								enterKey: async (e) => {
									if (13 == e.keyCode) {
										const input = e.target;
										let actionUrl = this.store.services.urlManager;
										if ((e.preventDefault(), this.config.globals?.search?.query?.spellCorrection)) {
											for (await timeout(201); this.store.loading; ) await timeout(200);
											this.config.settings.integratedSpellCorrection
												? this.store.search.correctedQuery && (actionUrl = actionUrl?.set('fallbackQuery', this.store.search.correctedQuery.string))
												: this.store.search.originalQuery &&
												  ((input.value = this.store.search.query?.string),
												  (actionUrl = actionUrl?.set('oq', this.store.search.originalQuery.string)));
										}
										actionUrl = actionUrl?.set('query', input.value);
										try {
											await this.eventManager.fire('beforeSubmit', { controller: this, input });
										} catch (err) {
											if ('cancelled' == err?.message) return void this.log.warn("'beforeSubmit' middleware cancelled");
											this.log.error("error in 'beforeSubmit' middleware"), console.error(err);
										}
										window.location.href = actionUrl?.href || '';
									}
								},
								escKey: (e) => {
									27 == e.keyCode && (e.target.blur(), this.setFocused());
								},
								focus: (e) => {
									e.stopPropagation(),
										setTimeout(() => {
											this.setFocused(e.target);
										});
								},
								formSubmit: async (e) => {
									const form = e.target,
										input = form.querySelector('input[ss-autocomplete-input]');
									if ((e.preventDefault(), this.config.globals?.search?.query?.spellCorrection)) {
										for (await timeout(201); this.store.loading; ) await timeout(200);
										this.config.settings.integratedSpellCorrection
											? this.store.search.correctedQuery && addHiddenFormInput(form, 'fallbackQuery', this.store.search.correctedQuery.string)
											: this.store.search.originalQuery &&
											  (input && (input.value = this.store.search.query?.string),
											  addHiddenFormInput(form, 'oq', this.store.search.originalQuery.string));
									}
									try {
										await this.eventManager.fire('beforeSubmit', { controller: this, input });
									} catch (err) {
										if ('cancelled' == err?.message) return void this.log.warn("'beforeSubmit' middleware cancelled");
										this.log.error("error in 'beforeSubmit' middleware"), console.error(err);
									}
									form.submit();
								},
								formElementChange: (e) => {
									const input = e.target,
										form = input?.form,
										searchInput = form?.querySelector('input[ss-autocomplete-input]');
									if (form && searchInput && this.config.settings?.serializeForm) {
										const formParameters = getFormParameters(form, function (elem) {
											return elem != searchInput;
										});
										this.store.setService('urlManager', this.store.services.urlManager.reset().withGlobals(formParameters)),
											this.store.reset(),
											this.config.settings?.trending?.limit && this.config.settings?.trending?.limit > 0 && this.searchTrending();
									}
								},
								input: (e) => {
									e.isTrusted && this.store.state.focusedInput !== e.target && this.setFocused(e.target);
									const value = e.target.value;
									if (((!this.store.state.input && !value) || this.store.state.input == value) && this.store.loaded) return;
									if (((this.store.state.input = value), this.config?.settings?.syncInputs)) {
										document.querySelectorAll(this.config.selector).forEach((input) => {
											input.value = value;
										});
									}
									clearTimeout(this.handlers.input.timeoutDelay);
									const trendingResultsEnabled = this.store.trending?.length && this.config.settings?.trending?.showResults,
										historyResultsEnabled = this.store.history?.length && this.config.settings?.history?.showResults;
									this.handlers.input.timeoutDelay = setTimeout(() => {
										value
											? (this.store.state.locks.terms.unlock(),
											  this.store.state.locks.facets.unlock(),
											  this.urlManager.set({ query: this.store.state.input }).go())
											: (this.store.reset(),
											  trendingResultsEnabled
													? this.store.trending[0].preview()
													: historyResultsEnabled
													? this.store.history[0].preview()
													: this.urlManager.reset().go());
									}, 200);
								},
								timeoutDelay: void 0,
							},
							document: {
								click: (e) => {
									const inputs = document.querySelectorAll(this.config.selector);
									Array.from(inputs).includes(e.target) ? e.stopPropagation() : this.setFocused();
								},
							},
						}),
						(this.searchTrending = async () => {
							let trending;
							const storedTerms = this.storage.get('terms');
							if (storedTerms) trending = JSON.parse(storedTerms);
							else {
								const trendingParams = { limit: this.config.settings?.trending?.limit || 5 },
									trendingProfile = this.profiler.create({ type: 'event', name: 'trending', context: trendingParams }).start();
								(trending = await this.client.trending(trendingParams)),
									trendingProfile.stop(),
									this.log.profile(trendingProfile),
									trending?.trending.queries?.length && this.storage.set('terms', JSON.stringify(trending));
							}
							this.store.updateTrendingTerms(trending);
						}),
						(this.search = async () => {
							if (!this.urlManager.state.query) return;
							const params = this.params;
							if (params?.search?.query?.string)
								try {
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: params });
									} catch (err) {
										if ('cancelled' == err?.message) return void this.log.warn("'beforeSearch' middleware cancelled");
										throw (this.log.error("error in 'beforeSearch' middleware"), err);
									}
									const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start(),
										{ meta, search } = await this.client.autocomplete(params);
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
									if (err) {
										if (err.err && err.fetchDetails) {
											switch (err.fetchDetails.status) {
												case 429:
													this.store.error = {
														code: 429,
														type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_3__.B.WARNING,
														message: 'Too many requests try again later',
													};
													break;
												case 500:
													this.store.error = {
														code: 500,
														type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_3__.B.ERROR,
														message: 'Invalid Search Request or Service Unavailable',
													};
													break;
												default:
													this.store.error = { type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_3__.B.ERROR, message: err.err.message };
											}
											this.log.error(this.store.error), this.handleError(err.err, err.fetchDetails);
										} else
											(this.store.error = {
												type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_3__.B.ERROR,
												message: `Something went wrong... - ${err}`,
											}),
												this.log.error(err),
												this.handleError(err);
										this.store.loading = !1;
									}
								}
						}),
						(this.config = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(defaultConfig, this.config)),
						this.store.setConfig(this.config),
						this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
						(this.storage = new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.t({
							type: 'session',
							key: `ss-controller-${this.config.id}`,
						})),
						this.eventManager.on('beforeSearch', async (ac, next) => {
							(ac.controller.store.loading = !0), await next();
						}),
						this.eventManager.on('afterSearch', async (ac, next) => {
							if ((await next(), ac.response.search.autocomplete.query != ac.controller.urlManager.state.query))
								return (ac.controller.store.loading = !1), !1;
						}),
						this.eventManager.on('afterStore', async (ac, next) => {
							await next(), (ac.controller.store.loading = !1);
						}),
						this.eventManager.on('beforeSubmit', async (ac, next) => {
							await next();
							const redirectURL = ac.controller.store.merchandising?.redirect;
							if (redirectURL && this.config?.settings?.redirects?.merchandising) return (window.location.href = redirectURL), !1;
							if (this.config?.settings?.redirects?.singleResult) {
								const { results } = ac.controller.store,
									singleResultUrl = 1 === results.length && 'product' === results[0].type && results[0].mappings.core?.url;
								if (singleResultUrl) return (window.location.href = singleResultUrl), !1;
							}
						}),
						this.use(this.config);
				}
				get params() {
					const urlState = this.urlManager.state,
						params = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(
							{ ...(0, _utils_getParams__WEBPACK_IMPORTED_MODULE_5__.j)(urlState) },
							this.config.globals
						),
						userId = this.tracker.getUserId(),
						sessionId = this.tracker.getContext().sessionId,
						pageLoadId = this.tracker.getContext().pageLoadId;
					if (
						((params.tracking = params.tracking || {}),
						(params.tracking.domain = window.location.href),
						userId && (params.tracking.userId = userId),
						sessionId && (params.tracking.sessionId = sessionId),
						pageLoadId && (params.tracking.pageLoadId = pageLoadId),
						!this.config.globals?.personalization?.disabled)
					) {
						const cartItems = this.tracker.cookies.cart.get();
						cartItems.length && ((params.personalization = params.personalization || {}), (params.personalization.cart = cartItems.join(',')));
						const lastViewedItems = this.tracker.cookies.viewed.get();
						lastViewedItems.length &&
							((params.personalization = params.personalization || {}), (params.personalization.lastViewed = lastViewedItems.join(',')));
						const shopperId = this.tracker.getShopperId();
						shopperId && ((params.personalization = params.personalization || {}), (params.personalization.shopper = shopperId));
					}
					return params;
				}
				async setFocused(inputElement) {
					if (this.store.state.focusedInput !== inputElement) {
						this.store.state.focusedInput = inputElement;
						try {
							try {
								await this.eventManager.fire('focusChange', { controller: this });
							} catch (err) {
								if ('cancelled' != err?.message) throw (this.log.error("error in 'focusChange' middleware"), err);
								this.log.warn("'focusChange' middleware cancelled");
							}
						} catch (err) {
							err && console.error(err);
						}
					}
					inputElement?.dispatchEvent(new Event('input'));
				}
				reset() {
					document.querySelectorAll(this.config.selector).forEach((input) => {
						input.value = '';
					}),
						this.store.reset();
				}
				unbind() {
					const inputs = document.querySelectorAll('input[ss-autocomplete-input]');
					inputs?.forEach((input) => {
						input.removeEventListener('input', this.handlers.input.input),
							input.removeEventListener('keydown', this.handlers.input.enterKey),
							input.removeEventListener('keydown', this.handlers.input.escKey),
							input.removeEventListener('focus', this.handlers.input.focus),
							input.form &&
								(input.form.removeEventListener('submit', this.handlers.input.formSubmit),
								(function unbindFormParameters(form, fn) {
									if ('object' == typeof form && 'FORM' == form.nodeName)
										for (let i = form.elements.length - 1; i >= 0; i--) {
											const elem = form.elements[i];
											elem.name && !INPUT_TYPE_BLOCKLIST.includes(elem.type) && elem.removeEventListener('change', fn);
										}
								})(input.form, this.handlers.input.formElementChange));
					}),
						document.removeEventListener('click', this.handlers.document.click);
				}
				async bind() {
					this.initialized || (await this.init()), this.unbind();
					document.querySelectorAll(this.config.selector).forEach((input) => {
						input.setAttribute('spellcheck', 'false'),
							input.setAttribute('autocomplete', 'off'),
							input.setAttribute('autocorrect', 'off'),
							input.setAttribute('autocapitalize', 'none'),
							input.setAttribute('ss-autocomplete-input', ''),
							input.addEventListener('input', this.handlers.input.input),
							this.config?.settings?.initializeFromUrl && !input.value && this.store.state.input && (input.value = this.store.state.input),
							input.addEventListener('focus', this.handlers.input.focus),
							input.addEventListener('keydown', this.handlers.input.escKey);
						const form = input.form;
						let formActionUrl;
						if (this.config.action) input.addEventListener('keydown', this.handlers.input.enterKey), (formActionUrl = this.config.action);
						else if (
							form &&
							(form.addEventListener('submit', this.handlers.input.formSubmit),
							(formActionUrl = form.action || ''),
							this.config.settings?.serializeForm)
						) {
							!(function bindFormParameters(form, fn, filterFn) {
								if ('object' == typeof form && 'FORM' == form.nodeName)
									for (let i = form.elements.length - 1; i >= 0; i--) {
										const elem = form.elements[i];
										('function' != typeof filterFn || filterFn(elem)) &&
											elem.name &&
											!INPUT_TYPE_BLOCKLIST.includes(elem.type) &&
											elem.addEventListener('change', fn);
									}
							})(form, this.handlers.input.formElementChange, function (elem) {
								return elem != input;
							});
							const formParameters = getFormParameters(form, function (elem) {
								return elem != input;
							});
							this.store.setService('urlManager', this.urlManager.reset().withGlobals(formParameters));
						}
						formActionUrl &&
							this.store.setService(
								'urlManager',
								this.store.services.urlManager.withConfig((translatorConfig) => ({ ...translatorConfig, urlRoot: formActionUrl }))
							),
							document.activeElement !== input || this.store.loading || this.setFocused(input);
					}),
						this.config.settings?.trending?.limit &&
							this.config.settings?.trending?.limit > 0 &&
							!this.store.trending?.length &&
							this.searchTrending(),
						document.addEventListener('click', this.handlers.document.click);
				}
			}
			function addHiddenFormInput(form, name, value) {
				const inputElem = document.createElement('input');
				(inputElem.type = 'hidden'),
					(inputElem.name = name),
					(inputElem.value = value),
					form.querySelector(`[type="hidden"][name="${name}"]`)?.remove(),
					form.append(inputElem);
			}
			async function timeout(time) {
				return new Promise((resolve) => {
					window.setTimeout(resolve, time);
				});
			}
			const INPUT_TYPE_BLOCKLIST = ['file', 'reset', 'submit', 'button', 'image', 'password'];
			function getFormParameters(form, filterFn) {
				const parameters = {};
				if ('object' == typeof form && 'FORM' == form.nodeName)
					for (let i = form.elements.length - 1; i >= 0; i--) {
						const elem = form.elements[i];
						('function' != typeof filterFn || filterFn(elem)) &&
							elem.name &&
							!INPUT_TYPE_BLOCKLIST.includes(elem.type) &&
							(('checkbox' != elem.type && 'radio' != elem.type) || elem.checked) &&
							(parameters[elem.name] = elem.value);
					}
				return parameters;
			}
		},
		'../snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Y: () => AutocompleteStore });
			var mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				AbstractStore = __webpack_require__('../snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
				SearchHistoryStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js'),
				SearchMerchandisingStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
				SearchFilterStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js'),
				SearchResultStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
				SearchPaginationStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
				SearchSortingStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js'),
				StorageStore = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js');
			class AutocompleteStateStore {
				constructor(params) {
					(this.focusedInput = void 0), (this.input = void 0);
					const { services } = params || {};
					(this.locks = { terms: new Lock(!1), facets: new Lock(!1) }),
						(this.url = services.urlManager),
						(0, mobx_esm.Gn)(this, { focusedInput: mobx_esm.sH, locks: mobx_esm.sH, input: mobx_esm.sH, reset: mobx_esm.XI });
				}
				reset() {
					(this.input = void 0), this.locks.terms.reset(), this.locks.facets.reset();
				}
			}
			class Lock {
				constructor(state = !1) {
					this.state = this.startState = state;
				}
				reset() {
					this.state = this.startState;
				}
				get locked() {
					return this.state;
				}
				lock() {
					this.state = !0;
				}
				unlock() {
					this.state = !1;
				}
			}
			class AutocompleteTermStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { config, data } = params || {},
						{ autocomplete, search, pagination } = data?.autocomplete || {},
						suggestions = [...(autocomplete?.alternatives ? autocomplete.alternatives : []).map((term) => term.text)];
					config?.settings?.integratedSpellCorrection
						? (autocomplete?.correctedQuery &&
								search?.query &&
								autocomplete.correctedQuery.toLowerCase() != search.query.toLowerCase() &&
								suggestions.unshift(autocomplete.correctedQuery),
						  search?.query && suggestions.unshift(search.query))
						: autocomplete?.suggested?.text
						? suggestions.unshift(autocomplete.suggested.text)
						: autocomplete?.correctedQuery && pagination?.totalResults
						? suggestions.unshift(autocomplete.correctedQuery)
						: autocomplete?.query && pagination?.totalResults && suggestions.unshift(autocomplete?.query);
					const terms = [];
					suggestions.map((term, index) => terms.push(new Term({ ...params, data: { term: { active: 0 === index, value: term }, terms } }))),
						super(...terms);
				}
			}
			class Term {
				constructor(params) {
					const { services, functions, state, data } = params || {},
						{ term, terms } = data || {};
					(this.active = term?.active),
						(this.value = term?.value),
						(this.url = services?.urlManager?.set({ query: this.value })),
						(this.preview = () => {
							functions.resetTerms(),
								terms.map((term) => {
									term.active = !1;
								}),
								(this.active = !0),
								state.autocomplete.locks.terms.lock(),
								state.autocomplete.locks.facets.unlock(),
								this.url?.set({ query: this.value }).go();
						}),
						(0, mobx_esm.Gn)(this, { active: mobx_esm.sH, value: mobx_esm.sH });
				}
			}
			class AutocompleteHistoryStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { data } = params || {},
						{ queries } = data || {},
						terms = [];
					queries?.map((query) => {
						terms.push(new Term({ ...params, data: { term: { active: !1, value: query }, terms } }));
					}),
						super(...terms);
				}
			}
			class AutocompleteTrendingStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const terms = [],
						{ data } = params || {},
						{ trending } = data?.trending || {};
					trending?.queries?.map((term) => {
						terms.push(new Term({ ...params, data: { term: { active: !1, value: term.searchQuery }, terms } }));
					}),
						super(...terms);
				}
			}
			class AutocompleteQueryStore {
				constructor(params) {
					const { services, data, config } = params || {},
						{ search, autocomplete } = data?.autocomplete || {},
						observables = {};
					search?.query && ((this.query = new Query(services.urlManager, search.query)), (observables.query = mobx_esm.sH)),
						autocomplete?.correctedQuery &&
							(config.settings?.integratedSpellCorrection
								? ((this.correctedQuery = new Query(services.urlManager, autocomplete.correctedQuery)), (observables.correctedQuery = mobx_esm.sH))
								: autocomplete.query &&
								  ((this.originalQuery = new Query(services.urlManager, autocomplete.query)), (observables.originalQuery = mobx_esm.sH))),
						(0, mobx_esm.Gn)(this, observables);
				}
			}
			class Query {
				constructor(urlManager, query) {
					(this.string = query), (this.url = urlManager.set({ query: this.string })), (0, mobx_esm.Gn)(this, { string: mobx_esm.sH });
				}
			}
			var SearchFacetStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js');
			class AutocompleteFacetStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { services, state } = params || {},
						facets = new SearchFacetStore.pC({ ...params, services: { ...services, urlManager: services.urlManager.remove('filter') } });
					facets.forEach((facet) => {
						facet.values?.forEach((value) => {
							value.preview = () => {
								facets.map((facet) => {
									(facet.filtered = !1),
										facet.values?.map((value) => {
											value.filtered = !1;
										});
								}),
									(facet.filtered = !0),
									(value.filtered = !0),
									state?.autocomplete.locks.facets.lock(),
									value.url.go();
							};
						});
					}),
						super(...facets);
				}
			}
			var MetaStore = __webpack_require__('../snap-store-mobx/dist/esm/Meta/MetaStore.js');
			class AutocompleteStore extends AbstractStore.K {
				constructor(config, services) {
					if ((super(config), 'object' != typeof services || 'function' != typeof services.urlManager?.subscribe))
						throw new Error('Invalid service \'urlManager\' passed to AutocompleteStore. Missing "subscribe" function.');
					(this.services = services),
						(this.state = new AutocompleteStateStore({ services: this.services })),
						(this.storage = new StorageStore.t()),
						(this.trending = []),
						(this.history = []),
						this.initHistory(),
						this.reset(),
						(0, mobx_esm.Gn)(this, {
							state: mobx_esm.sH,
							search: mobx_esm.sH,
							terms: mobx_esm.sH,
							facets: mobx_esm.sH,
							filters: mobx_esm.sH,
							merchandising: mobx_esm.sH,
							results: mobx_esm.sH,
							pagination: mobx_esm.sH,
							sorting: mobx_esm.sH,
							history: mobx_esm.sH,
						});
				}
				get hasQuery() {
					return Boolean((this.state.input && this.loaded) || this.search.query?.string);
				}
				reset() {
					this.state.reset(), this.update({ meta: {}, search: {} }), this.resetTerms();
				}
				initHistory() {
					const limit = this.config.settings?.history?.limit;
					if (limit) {
						const historyStore = new SearchHistoryStore.E({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
						this.history = new AutocompleteHistoryStore({
							services: this.services,
							functions: {
								resetTerms: () => {
									this.resetTerms();
								},
							},
							state: { autocomplete: this.state },
							data: { queries: historyStore.getStoredData(limit) },
						});
					}
				}
				resetTerms() {
					this.resetSuggestions(), this.resetTrending(), this.resetHistory();
				}
				resetSuggestions() {
					this.terms?.forEach((term) => (term.active = !1));
				}
				resetTrending() {
					this.trending?.forEach((term) => (term.active = !1));
				}
				resetHistory() {
					this.history?.forEach((term) => (term.active = !1));
				}
				setService(name, service) {
					this.services[name] &&
						service &&
						((this.services[name] = service), 'urlManager' === name && ((this.state.url = service), this.initHistory()));
				}
				updateTrendingTerms(trending) {
					this.trending = new AutocompleteTrendingStore({
						services: this.services,
						functions: {
							resetTerms: () => {
								this.resetTerms();
							},
						},
						state: { autocomplete: this.state },
						data: { trending },
					});
				}
				update(data) {
					if (!data) return;
					const { meta, search } = data || {};
					(this.meta = new MetaStore.l({ data: { meta } })),
						search.search && (this.state.url = this.services.urlManager = this.services.urlManager.set('query', search.search.query)),
						this.state.locks.terms.locked ||
							((this.terms = new AutocompleteTermStore({
								config: this.config,
								services: this.services,
								functions: {
									resetTerms: () => {
										this.resetTerms();
									},
								},
								state: { autocomplete: this.state },
								data: { autocomplete: search },
							})),
							search.autocomplete && this.state.locks.terms.lock()),
						(this.merchandising = new SearchMerchandisingStore.W({ data: { search } })),
						(this.search = new AutocompleteQueryStore({ config: this.config, services: this.services, data: { autocomplete: search } })),
						this.state.locks.facets.locked ||
							(this.facets = new AutocompleteFacetStore({
								config: this.config,
								services: this.services,
								stores: { storage: this.storage },
								state: { autocomplete: this.state },
								data: { search, meta: this.meta.data },
							})),
						(this.filters = new SearchFilterStore.Al({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.results = new SearchResultStore.vP({
							config: this.config,
							state: { loaded: this.loaded },
							data: { search, meta: this.meta.data },
						})),
						((0 === this.results.length && !this.trending.filter((term) => term.active).length) ||
							this.terms?.filter((term) => term.active).length) &&
							this.resetTrending(),
						(this.pagination = new SearchPaginationStore.a3({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.sorting = new SearchSortingStore.q({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.error = void 0),
						(this.loaded = Boolean(search?.pagination));
				}
			}
		},
	},
]);
