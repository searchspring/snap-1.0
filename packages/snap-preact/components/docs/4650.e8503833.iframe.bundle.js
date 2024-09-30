(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4650],
	{
		'./components/src/providers/cache.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => CacheProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const emotionCache = (0, __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js').A)({
					key: 'ss',
					prepend: !0,
				}),
				CacheProvider = (props) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.C, {
						value: props.cache || emotionCache,
						children: props.children,
					});
		},
		'./components/src/utilities/componentArgs.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { F: () => componentArgs });
			const componentArgs = {
				className: {
					description: 'Class name appended to root element of component',
					table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
					control: { type: 'text' },
				},
				disableStyles: {
					defaultValue: !1,
					description: 'Disable all default styling',
					table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
					control: { type: 'boolean' },
				},
				style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
				theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
			};
		},
		'./components/src/utilities/snapify.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { p: () => Snapify });
			var mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				css_escape = __webpack_require__('../../node_modules/css.escape/css.escape.js'),
				css_escape_default = __webpack_require__.n(css_escape);
			let globallyTargetedElems = [];
			class DomTargeter {
				constructor(targets, onTarget, document) {
					(this.targets = []),
						(this.styleBlockRefs = {}),
						(this.targetedElems = []),
						(this.unhideTarget = (selector) => {
							if (this.styleBlockRefs[selector])
								try {
									this.document.head.removeChild(this.styleBlockRefs[selector]), delete this.styleBlockRefs[selector];
								} catch (err) {}
						}),
						(this.hideTarget = (selector) => {
							if (this.styleBlockRefs[selector]) return;
							const styles = `${selector} { visibility: hidden !important }`,
								styleBlock = this.document.createElement('style');
							styleBlock.setAttribute('type', 'text/css'),
								styleBlock.appendChild(this.document.createTextNode(styles)),
								this.document.head.appendChild(styleBlock),
								(this.styleBlockRefs[selector] = styleBlock);
						}),
						(this.document = document || window.document),
						(this.targets = targets),
						(this.onTarget = onTarget),
						this.retarget(),
						this.targets.forEach((target) => {
							let timeoutTime = 100;
							const checker = () => {
								timeoutTime < 2e3
									? ((timeoutTime += 200), this.retarget(), setTimeout(checker, timeoutTime))
									: target.hideTarget && this.unhideTarget(target.selector);
							};
							if (target.clickRetarget) {
								let clickElems = [];
								'boolean' == typeof target.clickRetarget
									? clickElems.push(this.document)
									: (clickElems = Array.from(this.document.querySelectorAll(target.clickRetarget))),
									clickElems.map((elem) => {
										elem.addEventListener('click', () => {
											(timeoutTime = 100), checker();
										});
									});
							}
							target.autoRetarget
								? checker()
								: /complete|interactive|loaded/.test(this.document.readyState)
								? target.hideTarget && this.unhideTarget(target.selector)
								: this.document.addEventListener('DOMContentLoaded', () => {
										this.retarget(), target.hideTarget && this.unhideTarget(target.selector);
								  });
						});
				}
				getTargets() {
					return this.targets;
				}
				retarget() {
					const targetElemPairs = this.targets.flatMap((target) => {
							target.hideTarget && this.hideTarget(target.selector);
							const elems = this.domQuery(target.selector).filter((elem) => {
								if (!globallyTargetedElems.find((e) => e == elem) && !this.targetedElems.find((e) => e == elem)) return !0;
								target.hideTarget && this.unhideTarget(target.selector);
							});
							return target.inject?.element || (globallyTargetedElems = globallyTargetedElems.concat(elems)), elems.map((elem) => ({ target, elem }));
						}),
						errors = [];
					if (
						(targetElemPairs.forEach(async ({ target, elem }) => {
							if (target.inject)
								try {
									const injectedElem = this.inject(elem, target);
									(this.targetedElems = this.targetedElems.concat(elem)), await this.onTarget(target, injectedElem, elem);
								} catch (e) {
									errors.push(String(e));
								}
							else {
								if (((target.emptyTarget = target.emptyTarget ?? !0), target.emptyTarget))
									for (; elem.firstChild && elem.removeChild(elem.firstChild); );
								await this.onTarget(target, elem);
							}
							target.hideTarget && this.unhideTarget(target.selector),
								(target.unsetTargetMinHeight = target.unsetTargetMinHeight ?? !0),
								target.unsetTargetMinHeight && elem.style.minHeight && (elem.style.minHeight = '');
						}),
						errors.length)
					)
						throw new Error(errors.reduce((acc, err) => acc + (err + '\n'), '\n'));
				}
				domQuery(selector) {
					return Array.from(this.document.querySelectorAll(selector));
				}
				inject(elem, target) {
					if (!target || !target.inject) throw new Error('DomTargeter::inject: Injected element unspecified');
					const injectedElem = target.inject.element instanceof Function ? target.inject.element(target, elem) : target.inject.element;
					if (!injectedElem) throw new Error('DomTargeter::inject: Injected element unspecified');
					if (!elem.parentNode) throw new Error('DomTargeter::inject: Provided element has no parent element');
					switch (target?.inject?.action) {
						case 'before':
							elem.parentNode.insertBefore(injectedElem, elem);
							break;
						case 'after':
							elem.nextSibling ? elem.parentNode.insertBefore(injectedElem, elem.nextSibling) : elem.parentNode.appendChild(injectedElem);
							break;
						case 'append':
							elem.appendChild(injectedElem);
							break;
						case 'prepend':
							elem.firstChild ? elem.insertBefore(injectedElem, elem.firstChild) : elem.appendChild(injectedElem);
							break;
						case 'replace':
							elem.parentNode.replaceChild(injectedElem, elem);
					}
					return injectedElem;
				}
			}
			class AbstractController {
				get initialized() {
					return this._initialized;
				}
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context = {}) {
					if (
						((this.type = 'abstract'),
						(this.targeters = {}),
						(this._initialized = !1),
						(this.handleError = (err, details) => {
							let event;
							if (err instanceof ErrorEvent) event = err;
							else if (err instanceof Error) event = new ErrorEvent('error', { error: err, message: err.message });
							else if ('string' == typeof err || 'number' == typeof err) event = new ErrorEvent('error', { error: new Error(err.toString()) });
							else if ('object' == typeof err && Object.keys(err).length)
								try {
									event = new ErrorEvent('error', { error: new Error(JSON.stringify(err)) });
								} catch (e) {}
							if (event) {
								const {
										filename,
										colno,
										lineno,
										error: { stack },
										message,
										timeStamp,
									} = event,
									beaconPayload = {
										filename,
										stack,
										message,
										colno,
										lineno,
										errortimestamp: timeStamp,
										details,
										context: { controller: { id: this.id, type: this.type } },
									};
								this.tracker.track.error(beaconPayload), this.eventManager.fire('error', { controller: this, error: err });
							}
						}),
						'object' != typeof config || 'string' != typeof config.id || !config.id.match(/^[a-zA-Z0-9_-]*$/))
					)
						throw new Error('Invalid config passed to controller. The "id" attribute must be an alphanumeric string.');
					if ('object' != typeof client || 'function' != typeof client.search)
						throw new Error('Invalid service \'client\' passed to controller. Missing "search" function.');
					if ('object' != typeof store || 'function' != typeof store.update)
						throw new Error('Invalid service \'store\' passed to controller. Missing "update" function.');
					if ('object' != typeof urlManager || 'function' != typeof urlManager.subscribe)
						throw new Error('Invalid service \'urlManager\' passed to controller. Missing "subscribe" function.');
					if ('object' != typeof eventManager || 'function' != typeof eventManager.on)
						throw new Error('Invalid service \'eventManager\' passed to controller. Missing "on" function.');
					if ('object' != typeof eventManager || 'function' != typeof eventManager.fire)
						throw new Error('Invalid service \'eventManager\' passed to controller. Missing "fire" function.');
					if ('object' != typeof profiler || 'function' != typeof profiler.setNamespace)
						throw new Error('Invalid service \'profiler\' passed to controller. Missing "setNamespace" function.');
					if ('object' != typeof profiler || 'function' != typeof profiler.create)
						throw new Error('Invalid service \'profiler\' passed to controller. Missing "create" function.');
					if ('object' != typeof logger || 'function' != typeof logger.dev)
						throw new Error('Invalid service \'logger\' passed to controller. Missing "dev" function.');
					if ('object' != typeof tracker || 'object' != typeof tracker.track)
						throw new Error('Invalid service \'tracker\' passed to controller. Missing "track" object.');
					(this.id = config.id),
						(this.config = config),
						(this.client = client),
						(this.store = store),
						(this.urlManager = urlManager),
						(this.eventManager = eventManager),
						(this.profiler = profiler),
						(this.log = logger),
						(this.tracker = tracker),
						(this.context = context),
						this.log.setNamespace(this.config.id),
						this.profiler.setNamespace(this.config.id);
				}
				createTargeter(target, onTarget, document) {
					return this.addTargeter(new DomTargeter([target], onTarget, document));
				}
				addTargeter(target) {
					const firstTarget = target.getTargets()[0],
						targetName = firstTarget?.name ?? firstTarget?.selector;
					if (targetName && !this.targeters[targetName]) return (this.targeters[targetName] = target), target;
				}
				async init() {
					this._initialized && this.log.warn("'init' middleware recalled");
					const initProfile = this.profiler.create({ type: 'event', name: 'init', context: this.config }).start();
					try {
						try {
							await this.eventManager.fire('init', { controller: this });
						} catch (err) {
							if ('cancelled' != err?.message) throw (this.log.error("error in 'init' middleware"), err);
							this.log.warn("'init' middleware cancelled");
						}
					} catch (err) {
						err && (console.error(err), this.handleError(err));
					}
					this._initialized ||
						(this.urlManager.subscribe((prev, next) => {
							try {
								const prevString = JSON.stringify(prev);
								prevString !== JSON.stringify(next) && this.search();
							} catch (err) {
								this.log.error('URL state is invalid', err);
							}
						}),
						(this._initialized = !0)),
						initProfile.stop(),
						this.log.profile(initProfile);
				}
				retarget() {
					Object.keys(this.targeters).forEach((target) => {
						this.targeters[target].retarget();
					});
				}
				async plugin(func, ...args) {
					await func(this, ...args);
				}
				on(event, ...func) {
					this.eventManager.on(event, ...func);
				}
				use(attachments) {
					if (attachments?.plugins)
						try {
							if (!Array.isArray(attachments?.plugins)) throw 'invalid format';
							attachments?.plugins.forEach((plugin) => {
								if (!Array.isArray(plugin)) throw 'invalid format';
								const [func, ...args] = plugin;
								this.plugin(func, ...args);
							});
						} catch (err) {
							this.log.warn('plugins not attached - use format [func, ...args?][]');
						}
					attachments?.middleware &&
						Object.keys(attachments.middleware).forEach((eventName) => {
							const eventMiddleware = attachments.middleware[eventName];
							let middlewareArray;
							(middlewareArray = Array.isArray(eventMiddleware) ? eventMiddleware : [eventMiddleware]),
								middlewareArray.forEach((middleware) => {
									this.on(eventName, middleware);
								});
						});
				}
			}
			var types = __webpack_require__('../snap-store-mobx/dist/esm/types.js');
			const cookies = {
				set: (name, val, sameSite, expires, domain) => {
					sameSite = sameSite || 'Lax';
					let cookie = name + '=' + encodeURIComponent(val) + ';SameSite=' + sameSite + ';path=/;';
					if (('https:' == window.location.protocol && (cookie += 'Secure;'), expires)) {
						const d = new Date();
						d.setTime(d.getTime() + expires), (cookie += 'expires=' + d.toUTCString() + ';');
					}
					domain && (cookie += 'domain=' + domain + ';'), (window.document.cookie = cookie);
				},
				get: (name) => {
					name += '=';
					const ca = window.document.cookie.split(';');
					for (let i = 0; i < ca.length; i++) {
						let c = ca[i];
						for (; ' ' == c.charAt(0); ) c = c.substring(1);
						if (0 == c.indexOf(name)) return decodeURIComponent(c.substring(name.length, c.length));
					}
					return '';
				},
				unset: (name, domain) => {
					let cookie = name + '=; path=/; Max-Age=-99999999;';
					domain && (cookie += 'domain=' + domain + ';'), (window.document.cookie = cookie);
				},
			};
			function getFlags(userAgent = '') {
				userAgent = (userAgent || ('undefined' == typeof window ? {} : window?.navigator).userAgent || '').toLowerCase();
				const isIE = (function () {
					let ieVersion;
					return function isIE() {
						if (void 0 === ieVersion) {
							const version = (userAgent.match(/(msie|trident\/7.0; rv:) ?([0-9]{1,2})\./) || [])[2];
							ieVersion = !!version && Number(version);
						}
						return ieVersion;
					};
				})();
				return {
					cors: function () {
						return !isIE() || Number(isIE()) >= 10;
					},
					cookies: function () {
						return 'undefined' != typeof window && window?.navigator?.cookieEnabled;
					},
					storage: function () {
						try {
							return window?.localStorage.setItem('ss-test', 'ss-test'), window?.localStorage.removeItem('ss-test'), !0;
						} catch (e) {
							return !1;
						}
					},
				};
			}
			const flags = getFlags(),
				featureFlags_cookies = (flags.cors(), flags.cookies()),
				featureFlags_storage = flags.storage(),
				utils_cookies = cookies;
			class StorageStore {
				constructor(config) {
					if (
						((this.type = null),
						(this.expiration = 31536e6),
						(this.sameSite = 'Lax'),
						(this.key = 'ss-storage'),
						(this.cookieDomain =
							('undefined' != typeof window && window.location.hostname && '.' + window.location.hostname.replace(/^www\./, '')) || void 0),
						(this.state = {}),
						config)
					)
						switch (
							('' !== config.key.trim() && (this.key = config.key.trim()),
							config?.cookie?.expiration && (this.expiration = config.cookie.expiration),
							config?.cookie?.sameSite && (this.sameSite = config.cookie.sameSite),
							config.type)
						) {
							case StorageType.session:
								(this.type = featureFlags_storage ? config.type : null),
									this.type &&
										((this.state = JSON.parse(window.sessionStorage.getItem(this.key) || '{}')),
										window.sessionStorage.setItem(this.key, JSON.stringify(this.state)));
								break;
							case StorageType.local:
								(this.type = featureFlags_storage ? config.type : null),
									this.type &&
										((this.state = JSON.parse(window.localStorage.getItem(this.key) || '{}')),
										window.localStorage.setItem(this.key, JSON.stringify(this.state)));
								break;
							case StorageType.cookie:
								if (featureFlags_cookies) {
									this.type = config.type;
									const data = utils_cookies.get(this.key);
									data && (this.state = JSON.parse(data));
								}
								break;
							default:
								this.type = StorageType.memory;
						}
				}
				set(path, value) {
					const paths = path?.split('.');
					let location = this.state;
					switch (
						(paths?.forEach((p, i) => {
							i == paths.length - 1 ? (location[p] = value) : (location = location[p] = location[p] || {});
						}),
						this.type)
					) {
						case StorageType.session:
							window.sessionStorage.setItem(this.key, JSON.stringify(this.state));
							break;
						case StorageType.local:
							window.localStorage.setItem(this.key, JSON.stringify(this.state));
							break;
						case StorageType.cookie:
							utils_cookies.set(this.key, JSON.stringify(this.state), this.sameSite, this.expiration, this.cookieDomain);
					}
				}
				get(path) {
					switch (this.type) {
						case StorageType.session:
							const sessionData = window.sessionStorage.getItem(this.key);
							this.state = sessionData ? JSON.parse(sessionData) : {};
							break;
						case StorageType.local:
							const localData = window.localStorage.getItem(this.key);
							this.state = localData ? JSON.parse(localData) : {};
							break;
						case StorageType.cookie:
							const data = utils_cookies.get(this.key);
							data && (this.state = JSON.parse(data) || {});
					}
					const paths = path?.split('.');
					if (!paths?.length) return;
					let value = this.state;
					for (const p of paths) {
						if (!value || void 0 === value[p]) return void (value = {});
						value = value[p];
					}
					return value;
				}
				clear() {
					switch (this.type) {
						case StorageType.session:
							window.sessionStorage.removeItem(this.key);
							break;
						case StorageType.local:
							window.localStorage.removeItem(this.key);
							break;
						case StorageType.cookie:
							utils_cookies.unset(this.key, this.cookieDomain);
					}
					this.state = {};
				}
			}
			var StorageType, ControllerTypes;
			function getSearchParams(state) {
				const params = {};
				if (
					(state.tag && ((params.merchandising = params.merchandising || {}), (params.merchandising.landingPage = state.tag)),
					state.query &&
						((params.search = params.search || {}), (params.search.query = params.search.query || {}), (params.search.query.string = state.query)),
					state.rq && ((params.search = params.search || {}), (params.search.subQuery = state.rq)),
					state.oq && ((params.search = params.search || {}), (params.search.originalQuery = state.oq)),
					state.fallbackQuery && ((params.search = params.search || {}), (params.search.fallbackQuery = state.fallbackQuery)),
					state.page && ((params.pagination = params.pagination || {}), (params.pagination.page = state.page)),
					state.pageSize && ((params.pagination = params.pagination || {}), (params.pagination.pageSize = state.pageSize)),
					state.sort)
				) {
					params.sorts = params.sorts || [];
					const sort = (Array.isArray(state.sort) ? state.sort : [state.sort])[0];
					sort && sort.field && sort.direction && params.sorts.push({ field: sort.field, direction: sort.direction });
				}
				return (
					state.filter &&
						((params.filters = params.filters || []),
						Object.keys(state.filter).forEach((field) => {
							if ('string' != typeof field) return;
							const filter = state.filter[field];
							(Array.isArray(filter) ? filter : [filter]).forEach((value) => {
								'object' != typeof value
									? params.filters.push({ type: 'value', field, value })
									: void 0 !== value.low && void 0 !== value.high && params.filters.push({ type: 'range', field, value });
							});
						})),
					params
				);
			}
			!(function (StorageType) {
				(StorageType.session = 'session'), (StorageType.local = 'local'), (StorageType.cookie = 'cookie'), (StorageType.memory = 'memory');
			})(StorageType || (StorageType = {})),
				(function (ControllerTypes) {
					(ControllerTypes.search = 'search'),
						(ControllerTypes.autocomplete = 'autocomplete'),
						(ControllerTypes.finder = 'finder'),
						(ControllerTypes.recommendation = 'recommendation');
				})(ControllerTypes || (ControllerTypes = {}));
			const defaultConfig = {
				id: 'search',
				globals: {},
				settings: { redirects: { merchandising: !0, singleResult: !0 }, facets: { trim: !0, pinFiltered: !0, storeRange: !0, autoOpenActive: !0 } },
			};
			class SearchController extends AbstractController {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = ControllerTypes.search),
						(this.previousResults = []),
						(this.track = {
							product: {
								click: (e, result) => {
									const target = e.target,
										resultHref = result.display?.mappings.core?.url || result.mappings.core?.url,
										elemHref = target?.getAttribute('href'),
										storedHref = -1 != elemHref?.indexOf(resultHref) ? resultHref : elemHref || resultHref,
										scrollMap = {},
										selector = (function generateHrefSelector(element, href, levels = 7) {
											let level = 0,
												elem = element;
											for (; elem && level <= levels; ) {
												const innerHrefElem = elem.querySelector(`[href*="${href}"]`);
												if (innerHrefElem) {
													let selector = '',
														parentElem = innerHrefElem;
													for (; parentElem && parentElem != elem.parentElement; ) {
														const escapedClassSelector = parentElem.classList.value
															.trim()
															.split(' ')
															.reduce(
																(classes, classname) => (classname.trim() ? `${classes}.${css_escape_default()(classname.trim())}` : classes),
																''
															);
														(selector = `${parentElem.tagName}${escapedClassSelector}${selector ? ` ${selector}` : ''}`),
															(parentElem = parentElem.parentElement);
													}
													return `${selector}[href*="${href}"]`;
												}
												(elem = elem.parentElement), level++;
											}
											return;
										})(target, storedHref),
										domRect = selector ? document?.querySelector(selector)?.getBoundingClientRect() : void 0;
									if (selector || storedHref || domRect)
										try {
											const storableRequestParams = getStorableRequestParams(JSON.parse(this.storage.get('lastStringyParams')));
											scrollMap[JSON.stringify(storableRequestParams)] = { domRect, href: storedHref, selector };
										} catch (err) {
											this.log.warn('Failed to save scollMap!', err);
										}
									this.storage.set('scrollMap', scrollMap);
									const { intellisuggestData, intellisuggestSignature } = result.attributes,
										event = this.tracker.track.product.click({ intellisuggestData, intellisuggestSignature, href: elemHref || resultHref });
									return this.eventManager.fire('track.product.click', { controller: this, event: e, result, trackEvent: event }), event;
								},
							},
						}),
						(this.search = async () => {
							this.initialized || (await this.init());
							const params = this.params;
							this.params.search?.query?.string &&
								this.params.search?.query?.string.length &&
								this.store.history.save(this.params.search.query.string);
							try {
								try {
									await this.eventManager.fire('beforeSearch', { controller: this, request: params });
								} catch (err) {
									if ('cancelled' == err?.message) return void this.log.warn("'beforeSearch' middleware cancelled");
									throw (this.log.error("error in 'beforeSearch' middleware"), err);
								}
								const stringyParams = JSON.stringify(params);
								if (stringyParams == this.storage.get('lastStringyParams')) return;
								const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();
								let meta = {},
									search = {};
								if (this.config.settings?.infinite && params.pagination?.page && params.pagination.page > 1) {
									const preventBackfill =
											this.config.settings.infinite?.backfill &&
											!this.store.results.length &&
											params.pagination.page > this.config.settings.infinite.backfill,
										dontBackfill = !this.config.settings.infinite?.backfill && !this.store.results.length;
									if (preventBackfill || dontBackfill) return this.storage.set('scrollMap', {}), void this.urlManager.set('page', 1).go();
									if (this.config.settings?.infinite.backfill && !this.previousResults.length) {
										const backfillRequests = Array(params.pagination.page)
												.fill('backfill')
												.map((v, i) => {
													const backfillParams = cjs_default()({ ...params }, { pagination: { page: i + 1 }, search: { redirectResponse: 'full' } });
													return (
														i + 1 == 1 &&
															(delete backfillParams?.pagination?.page,
															this.config.settings?.redirects?.merchandising && delete backfillParams?.search?.redirectResponse),
														this.client.search(backfillParams)
													);
												}),
											backfillResponses = await Promise.all(backfillRequests);
										(meta = backfillResponses[0].meta), (search = backfillResponses[0].search);
										const backfillResults = backfillResponses.reduce((results, response) => results.concat(...response.search.results), []);
										(search.pagination.totalPages = Math.ceil(search.pagination.totalResults / search.pagination.pageSize)),
											(search.pagination.page = params.pagination?.page),
											(search.results = backfillResults);
									} else {
										const response = await this.client.search(params);
										(meta = response.meta), (search = response.search), (search.results = [...this.previousResults, ...(search.results || [])]);
									}
								} else {
									const res = await this.client.search(params);
									(meta = res.meta), (search = res.search);
								}
								searchProfile.stop(), this.log.profile(searchProfile);
								const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();
								try {
									await this.eventManager.fire('afterSearch', { controller: this, request: params, response: { meta, search } });
								} catch (err) {
									if ('cancelled' == err?.message) return this.log.warn("'afterSearch' middleware cancelled"), void afterSearchProfile.stop();
									throw (this.log.error("error in 'afterSearch' middleware"), err);
								}
								afterSearchProfile.stop(),
									this.log.profile(afterSearchProfile),
									this.config.settings?.infinite && (this.previousResults = JSON.parse(JSON.stringify(search.results))),
									this.store.update({ meta, search });
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
									this.store.loading = !1;
								}
							}
						}),
						(this.config = cjs_default()(defaultConfig, this.config)),
						this.config.settings?.infinite &&
							void 0 === this.config.settings.restorePosition &&
							(this.config.settings.restorePosition = { enabled: !0 }),
						this.store.setConfig(this.config),
						(this.storage = new StorageStore({ type: 'session', key: `ss-controller-${this.config.id}` })),
						this.storage.set('lastStringyParams', void 0),
						this.eventManager.on('beforeSearch', async (search, next) => {
							(search.controller.store.loading = !0), await next();
						}),
						this.eventManager.on('afterSearch', async (search, next) => {
							const config = search.controller.config,
								redirectURL = search.response?.search?.merchandising?.redirect,
								searchStore = search.controller.store;
							if (redirectURL && config?.settings?.redirects?.merchandising && !search?.response?.search?.filters?.length && !searchStore.loaded)
								return window.location.replace(redirectURL), !1;
							const nonBackgroundFilters = search?.request?.filters?.filter((filter) => !filter.background);
							if (
								config?.settings?.redirects?.singleResult &&
								search?.response?.search?.search?.query &&
								1 === search?.response?.search?.pagination?.totalResults &&
								!nonBackgroundFilters?.length &&
								!search.controller.previousResults.length &&
								search?.response?.search?.results?.[0]?.mappings?.core?.url
							)
								return window.location.replace(search.response.search.results[0].mappings.core.url), !1;
							await next();
						}),
						this.eventManager.on('afterStore', async (search, next) => {
							await next(), this.storage.set('lastStringyParams', JSON.stringify(search.request));
							const storableRequestParams = getStorableRequestParams(search.request),
								stringyParams = JSON.stringify(storableRequestParams),
								elementPosition = (this.storage.get('scrollMap') || {})[stringyParams];
							elementPosition || this.storage.set('scrollMap', {}),
								await this.eventManager.fire('restorePosition', { controller: this, element: elementPosition }),
								(search.controller.store.loading = !1);
						}),
						this.config.settings?.restorePosition?.enabled &&
							(this.eventManager.on('restorePosition', async ({ controller, element }, next) => {
								if (!element?.selector) {
									const lastRequest = this.storage.get('lastStringyParams');
									if (lastRequest) {
										const storableRequestParams = getStorableRequestParams(JSON.parse(lastRequest)),
											stringyParams = JSON.stringify(storableRequestParams),
											scrollMap = this.storage.get('scrollMap') || {};
										element = scrollMap[stringyParams];
									}
								}
								element &&
									(await new Promise(async (resolve) => {
										const maxScrolls = Math.ceil(10),
											maxCheckCount = maxScrolls + 2;
										let scrolledElem,
											scrollBackCount = 0,
											checkCount = 0;
										const checkAndScroll = () => {
											let offset = element?.domRect?.top || 0,
												elem = document.querySelector(element?.selector);
											for (; elem && !elem.getBoundingClientRect().height; ) (elem = elem.parentElement), (offset = 0);
											if (elem) {
												const { y } = elem.getBoundingClientRect();
												scrollBackCount++, y > offset + 1 || y < offset - 1 ? window.scrollBy(0, y - offset) : (scrolledElem = elem);
											} else checkCount++;
											return !0;
										};
										for (; checkAndScroll() && scrollBackCount <= maxScrolls && checkCount <= maxCheckCount; )
											await new Promise((resolve) => setTimeout(resolve, 50));
										scrolledElem
											? controller.log.debug('restored position to: ', scrolledElem)
											: controller.log.debug('attempted to scroll back to element with selector: ', element?.selector),
											resolve();
									})),
									await next();
							}),
							this.config.settings?.restorePosition?.onPageShow &&
								window.addEventListener('pageshow', () => {
									this.eventManager.fire('restorePosition', { controller: this, element: {} });
								})),
						this.use(this.config);
				}
				get params() {
					const params = cjs_default()({ ...getSearchParams(this.urlManager.state) }, this.config.globals || {});
					(this.config.settings?.redirects?.merchandising && !this.store.loaded) ||
						((params.search = params.search || {}), (params.search.redirectResponse = 'full')),
						(params.tracking = params.tracking || {}),
						(params.tracking.domain = window.location.href);
					const userId = this.tracker.getUserId();
					userId && (params.tracking.userId = userId);
					const sessionId = this.tracker.getContext().sessionId;
					sessionId && (params.tracking.sessionId = sessionId);
					const pageId = this.tracker.getContext().pageLoadId;
					if ((pageId && (params.tracking.pageLoadId = pageId), !this.config.globals?.personalization?.disabled)) {
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
			}
			function getStorableRequestParams(request) {
				return {
					siteId: request.siteId,
					sorts: request.sorts,
					search: { query: { string: request?.search?.query?.string || '' }, subQuery: request?.search?.subQuery || '' },
					filters: request.filters,
					pagination: request.pagination,
					facets: request.facets,
					merchandising: { landingPage: request.merchandising?.landingPage || '' },
				};
			}
			var BeaconType, BeaconCategory, ProfilePlacement;
			!(function (BeaconType) {
				(BeaconType.PRODUCT = 'product'),
					(BeaconType.CART = 'cart'),
					(BeaconType.ORDER = 'transaction'),
					(BeaconType.LOGIN = 'login'),
					(BeaconType.CLICK = 'click'),
					(BeaconType.ERROR = 'error'),
					(BeaconType.CUSTOM = 'custom'),
					(BeaconType.PROFILE_RENDER = 'profile.render'),
					(BeaconType.PROFILE_IMPRESSION = 'profile.impression'),
					(BeaconType.PROFILE_CLICK = 'profile.click'),
					(BeaconType.PROFILE_ADDBUNDLE = 'profile.addBundle'),
					(BeaconType.PROFILE_PRODUCT_RENDER = 'profile.product.render'),
					(BeaconType.PROFILE_PRODUCT_IMPRESSION = 'profile.product.impression'),
					(BeaconType.PROFILE_PRODUCT_CLICK = 'profile.product.click'),
					(BeaconType.PROFILE_PRODUCT_ADDEDTOBUNDLE = 'profile.product.addedToBundle'),
					(BeaconType.PROFILE_PRODUCT_REMOVEDFROMBUNDLE = 'profile.product.removedFromBundle');
			})(BeaconType || (BeaconType = {})),
				(function (BeaconCategory) {
					(BeaconCategory.PAGEVIEW = 'searchspring.page.view'),
						(BeaconCategory.CARTVIEW = 'searchspring.shop.cart'),
						(BeaconCategory.ORDERVIEW = 'searchspring.shop.transaction'),
						(BeaconCategory.PERSONALIZATION = 'searchspring.personalization'),
						(BeaconCategory.RECOMMENDATIONS = 'searchspring.recommendations.user-interactions'),
						(BeaconCategory.INTERACTION = 'searchspring.user-interactions'),
						(BeaconCategory.RUNTIME = 'searchspring.js.runtime'),
						(BeaconCategory.CUSTOM = 'custom');
				})(BeaconCategory || (BeaconCategory = {})),
				(function (ProfilePlacement) {
					(ProfilePlacement.BASKETPAGE = 'basket-page'),
						(ProfilePlacement.CONFIRMATIONPAGE = 'confirmation-page'),
						(ProfilePlacement.PRODUCTPAGE = 'product-page'),
						(ProfilePlacement.NORESULTSPAGE = 'no-results-page'),
						(ProfilePlacement.HOMEPAGE = 'home-page'),
						(ProfilePlacement.OTHER = 'other');
				})(ProfilePlacement || (ProfilePlacement = {}));
			const RecommendationController_defaultConfig = { id: 'recommend', tag: '', batched: !0, realtime: !1, globals: {} };
			class RecommendationController extends AbstractController {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					if (
						(super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = ControllerTypes.recommendation),
						(this.events = { click: void 0, impression: void 0, render: void 0, product: {} }),
						(this.track = (() => {
							const getSeed = () => {
								let skus = [];
								switch (this.store.profile.placement) {
									case ProfilePlacement.PRODUCTPAGE:
										this.config.globals?.product
											? (skus = [this.config.globals?.product])
											: this.config.globals?.products && (skus = this.config.globals?.products);
										break;
									case ProfilePlacement.BASKETPAGE:
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
												type: BeaconType.PROFILE_PRODUCT_CLICK,
												category: BeaconCategory.RECOMMENDATIONS,
												context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
												event: {
													context: {
														action: 'navigate',
														placement: this.store.profile.placement,
														tag: this.store.profile.tag,
														type: 'product-recommendation',
													},
													product: { id: result.id, mappings: { core: result.display.mappings.core }, seed: getSeed() },
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
											type: BeaconType.PROFILE_PRODUCT_IMPRESSION,
											category: BeaconCategory.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.display.mappings.core }, seed: getSeed() },
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
											type: BeaconType.PROFILE_PRODUCT_RENDER,
											category: BeaconCategory.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.display.mappings.core }, seed: getSeed() },
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
											type: BeaconType.PROFILE_PRODUCT_REMOVEDFROMBUNDLE,
											category: BeaconCategory.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.display.mappings.core }, seed: getSeed() },
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
											type: BeaconType.PROFILE_PRODUCT_ADDEDTOBUNDLE,
											category: BeaconCategory.RECOMMENDATIONS,
											context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
											event: {
												context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
												product: { id: result.id, mappings: { core: result.display.mappings.core }, seed: getSeed() },
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
										type: BeaconType.PROFILE_ADDBUNDLE,
										category: BeaconCategory.RECOMMENDATIONS,
										context: this.config.globals?.siteId ? { website: { trackingCode: this.config.globals?.siteId } } : void 0,
										event: {
											context: { placement: this.store.profile.placement, tag: this.store.profile.tag, type: 'product-recommendation' },
											products: results.map((result) => ({
												id: result.id,
												mappings: { core: result.display.mappings.core },
												quantity: result.quantity,
											})),
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
										type: BeaconType.PROFILE_CLICK,
										category: BeaconCategory.RECOMMENDATIONS,
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
										type: BeaconType.PROFILE_IMPRESSION,
										category: BeaconCategory.RECOMMENDATIONS,
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
										type: BeaconType.PROFILE_RENDER,
										category: BeaconCategory.RECOMMENDATIONS,
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
							this.initialized || (await this.init());
							const params = this.params;
							try {
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
								if (err) {
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
									this.store.loading = !1;
								}
							}
						}),
						!config.tag)
					)
						throw new Error('Invalid config passed to RecommendationController. The "tag" attribute is required.');
					(this.config = cjs_default()(RecommendationController_defaultConfig, this.config)),
						this.store.setConfig(this.config),
						this.eventManager.on('beforeSearch', async (recommend, next) => {
							(recommend.controller.store.loading = !0), await next();
						}),
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
								}),
								(recommend.controller.store.loading = !1);
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
			const AutocompleteController_defaultConfig = {
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
			class AutocompleteController extends AbstractController {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = ControllerTypes.autocomplete),
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
										this.store.loading = !1;
									}
								}
						}),
						(this.config = cjs_default()(AutocompleteController_defaultConfig, this.config)),
						this.store.setConfig(this.config),
						this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
						(this.storage = new StorageStore({ type: 'session', key: `ss-controller-${this.config.id}` })),
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
						params = cjs_default()({ ...getSearchParams(urlState) }, this.config.globals),
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
			var AppMode;
			!(function (AppMode) {
				(AppMode.production = 'production'), (AppMode.development = 'development');
			})(AppMode || (AppMode = {}));
			const NetworkCache_defaultConfig = { enabled: !0, ttl: 3e5, maxSize: 200, purgeable: !0 };
			class NetworkCache {
				constructor(config) {
					(this.memoryCache = {}),
						(this.config = cjs_default()(NetworkCache_defaultConfig, config || {})),
						this.config?.entries &&
							Object.keys(this.config.entries).map((key) => {
								this.config.entries && this.config.entries[key] && this.set(key, this.config.entries[key]);
							});
				}
				get(key) {
					if (this.config.enabled)
						try {
							if (this.memoryCache[key] && Date.now() < this.memoryCache[key].expires) return cjs_default()({}, this.memoryCache[key].value);
							if ('undefined' != typeof window && window?.sessionStorage) {
								const stored = window.sessionStorage.getItem('ss-networkcache'),
									localData = stored && JSON.parse(stored);
								if (localData && key && localData[key]) {
									if (!(Date.now() >= localData[key].expires)) return localData[key].value;
									{
										const newStored = { ...localData };
										delete newStored[key], window.sessionStorage.setItem('ss-networkcache', JSON.stringify(newStored));
									}
								}
							}
						} catch (err) {
							console.warn('something went wrong, browser might not have cookies enabled');
						}
				}
				set(key, value) {
					if (this.config.enabled)
						try {
							const cacheObject = { value, expires: Date.now() + this.config.ttl, purgeable: this.config.purgeable };
							if (((this.memoryCache[key] = cacheObject), 'undefined' != typeof window && window?.sessionStorage)) {
								const stored = window.sessionStorage.getItem('ss-networkcache'),
									newStored = { ...(stored && JSON.parse(stored)) };
								newStored[key] = cacheObject;
								let size = new Blob([JSON.stringify(newStored)], { endings: 'native' }).size / 1024;
								for (; size > this.config.maxSize; ) {
									const oldestKey = Object.keys(newStored)
										.filter((key) => newStored[key].purgeable)
										.sort((a, b) => newStored[a].expires - newStored[b].expires)[0];
									if (!oldestKey) break;
									delete newStored[oldestKey], (size = new Blob([JSON.stringify(newStored)], { endings: 'native' }).size / 1024);
								}
								size < this.config.maxSize && window.sessionStorage.setItem('ss-networkcache', JSON.stringify(newStored));
							}
						} catch (err) {
							console.warn('something went wrong, browser might not have cookies enabled');
						}
				}
				clear() {
					try {
						(this.memoryCache = {}), 'undefined' != typeof window && window?.sessionStorage && window.sessionStorage.setItem('ss-networkcache', '');
					} catch (err) {
						console.warn('something went wrong, browser might not have cookies enabled');
					}
				}
			}
			class API {
				constructor(configuration) {
					(this.configuration = configuration),
						(this.retryDelay = 1e3),
						(this.retryCount = 0),
						(this.cache = new NetworkCache(this.configuration.cache));
				}
				get mode() {
					return this.configuration.mode;
				}
				async request(context, cacheKey) {
					const { url, init } = this.createFetchParams(context);
					if (cacheKey) {
						const cachedResponse = this.cache.get(`${context.path}/${cacheKey}`) || this.cache.get(`${context.path}/*`);
						if (cachedResponse) return (this.retryCount = 0), (this.retryDelay = 1e3), cachedResponse;
					}
					let response, responseJSON;
					try {
						if (
							((response = await this.fetchApi(url, init)), (responseJSON = await response?.json()), response.status >= 200 && response.status < 300)
						)
							return (
								(this.retryCount = 0), (this.retryDelay = 1e3), cacheKey && this.cache.set(`${context.path}/${cacheKey}`, responseJSON), responseJSON
							);
						if (429 == response.status)
							throw this.retryCount < this.configuration.maxRetry
								? (await new Promise((resolve) => setTimeout(resolve, this.retryDelay)),
								  (this.retryDelay =
										1e3 *
										((num) => {
											let temp,
												a = 1,
												b = 0;
											for (; num >= 0; ) (temp = a), (a += b), (b = temp), num--;
											return b;
										})(this.retryCount)),
								  this.retryCount++,
								  new Error('Rate limited.'))
								: new Error('Retry rate limit exceeded.');
						if (404 == response.status && 'Profile is currently paused' == responseJSON?.message)
							throw new Error(`${responseJSON.message}: ${context.query?.tag}`);
						throw new Error('Unexpected Response Status.');
					} catch (err) {
						if ('Rate limited.' == err.message) return await this.request(context, cacheKey);
						throw { err, fetchDetails: { status: response?.status, message: response?.statusText || 'FAILED', url, ...init } };
					}
				}
				createFetchParams(context) {
					const siteId = context?.body?.siteId || context?.query?.siteId;
					if (!siteId) throw new Error('Request failed. Missing "siteId" parameter.');
					const siteIdHost = `https://${siteId}.a.searchspring.io`;
					let url = `${(this.configuration.origin || siteIdHost).replace(/\/$/, '')}/${context.path.replace(/^\//, '')}`;
					const combinedQuery = cjs_default()(context.query || {}, this.configuration.globals);
					0 !== Object.keys(combinedQuery).length && (url += '?' + this.configuration.queryParamsStringify(combinedQuery));
					const body =
						('undefined' != typeof FormData && context.body instanceof FormData) ||
						context.body instanceof URLSearchParams ||
						((value = context.body), 'undefined' != typeof Blob && value instanceof Blob)
							? context.body
							: JSON.stringify(context.body ? cjs_default()(context.body, this.configuration.globals) : context.body);
					var value;
					const headers = { ...this.configuration.headers, ...context.headers };
					return { url, init: { method: context.method, headers, body } };
				}
				async fetchApi(url, init) {
					return await this.configuration.fetchApi(url, init);
				}
			}
			class ApiConfiguration {
				constructor(config = {}) {
					(this.config = config),
						config.maxRetry || (this.config.maxRetry = 8),
						(this.config.cache = this.config.cache || {}),
						(this.config.mode = this.config.mode || AppMode.production),
						this.config.mode == AppMode.development && (this.config.cache.enabled = !1);
				}
				get cache() {
					return this.config?.cache || {};
				}
				get maxRetry() {
					return this.config.maxRetry || 8;
				}
				get origin() {
					return this.config.origin || '';
				}
				get fetchApi() {
					return this.config.fetchApi || ('undefined' != typeof window ? window.fetch?.bind(window) : fetch);
				}
				get queryParamsStringify() {
					return this.config.queryParamsStringify || querystring;
				}
				get headers() {
					return this.config.headers || {};
				}
				set headers(newHeaders) {
					this.config.headers = newHeaders;
				}
				get globals() {
					return this.config.globals || {};
				}
				set globals(newGlobals) {
					this.config.globals = newGlobals;
				}
				get mode() {
					return this.config.mode;
				}
			}
			function querystring(params, prefix = '') {
				return Object.keys(params)
					.map((key) => {
						const fullKey = prefix + (prefix.length ? `[${key}]` : key),
							value = params[key];
						if (value instanceof Array) {
							const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
							return `${encodeURIComponent(fullKey)}=${multiValue}`;
						}
						return value instanceof Date
							? `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`
							: value instanceof Object
							? querystring(value, fullKey)
							: `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
					})
					.filter((part) => part.length > 0)
					.join('&');
			}
			class LegacyAPI extends API {
				async getEndpoint(queryParameters, path = '/api/search/search.json') {
					queryParameters.resultsFormat = 'native';
					const cacheParameters = { ...queryParameters };
					delete cacheParameters.pageLoadId, delete cacheParameters.domain;
					return await this.request({ path, method: 'GET', headers: {}, query: queryParameters }, JSON.stringify(cacheParameters));
				}
				async postMeta(requestParameters) {
					const headerParameters = { 'Content-Type': 'application/json' };
					return await this.request(
						{ path: '/api/meta/meta.json', method: 'POST', headers: headerParameters, body: requestParameters },
						JSON.stringify(requestParameters)
					);
				}
				async getMeta(queryParameters) {
					return await this.request(
						{ path: '/api/meta/meta.json', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async getSearch(queryParameters) {
					return (queryParameters.ajaxCatalog = 'Snap'), this.getEndpoint(queryParameters, '/api/search/search.json');
				}
				async getAutocomplete(queryParameters) {
					return (queryParameters.ajaxCatalog = 'Snap'), this.getEndpoint(queryParameters, '/api/search/autocomplete.json');
				}
				async getFinder(queryParameters) {
					return (queryParameters.ajaxCatalog = 'Snap'), this.getEndpoint(queryParameters, '/api/search/finder.json');
				}
			}
			class SuggestAPI extends API {
				async getSuggest(queryParameters) {
					return await this.request(
						{ path: '/api/suggest/query', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async postSuggest(requestParameters) {
					const headerParameters = { 'Content-Type': 'application/json' };
					return await this.request(
						{ path: '/api/suggest/query', method: 'POST', headers: headerParameters, body: requestParameters },
						JSON.stringify(requestParameters)
					);
				}
				async getTrending(queryParameters) {
					return await this.request(
						{ path: '/api/suggest/trending', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async postTrending(requestParameters) {
					const headerParameters = { 'Content-Type': 'application/json' };
					return await this.request(
						{ path: '/api/suggest/trending', method: 'POST', headers: headerParameters, body: requestParameters },
						JSON.stringify(requestParameters)
					);
				}
			}
			function transformSearchRequest(request) {
				return (function mergeParams(...args) {
					const ret = {};
					return (
						args.reverse().forEach((params) => {
							Object.keys(params).forEach((key) => {
								const values = params[key] instanceof Array ? params[key] : [params[key]];
								ret[key] = (ret[key] || []).concat(values);
							});
						}),
						ret
					);
				})(
					transformSearchRequest.sorts(request),
					transformSearchRequest.search(request),
					transformSearchRequest.filters(request),
					transformSearchRequest.merchandising(request),
					transformSearchRequest.pagination(request),
					transformSearchRequest.siteId(request),
					transformSearchRequest.facets(request),
					transformSearchRequest.tracking(request),
					transformSearchRequest.personalization(request)
				);
			}
			function unescapeHTML(value) {
				return value
					.replace(/&gt;/g, '>')
					.replace(/&lt;/g, '<')
					.replace(/&#0?39;/g, "'")
					.replace(/&apos;/g, "'")
					.replace(/&#0?34;/g, '"')
					.replace(/&quot;/g, '"')
					.replace(/&amp;/g, '&');
			}
			(transformSearchRequest.sorts = (request = {}) =>
				(request.sorts || []).reduce(
					(acc, sort) =>
						!sort.field || !sort.direction || ('asc' != sort.direction && 'desc' != sort.direction)
							? acc
							: { ...acc, ['sort.' + sort.field]: (acc[sort.field] || []).concat([sort.direction]) },
					{}
				)),
				(transformSearchRequest.search = (request = {}) => {
					const reqSearch = request.search || {},
						search = {};
					return (
						reqSearch.query && reqSearch.query.string && (search.q = reqSearch.query.string),
						reqSearch.subQuery && (search.rq = reqSearch.subQuery.trim()),
						reqSearch.originalQuery && (search.originalQuery = reqSearch.originalQuery.trim()),
						reqSearch.fallbackQuery && (search.fallbackQuery = reqSearch.fallbackQuery.trim()),
						reqSearch.redirectResponse && (search.redirectResponse = reqSearch.redirectResponse),
						search
					);
				}),
				(transformSearchRequest.filters = (request = {}) =>
					(request.filters || []).reduce((acc, filter) => {
						const baseKey = filter.background ? 'bgfilter' : 'filter';
						if ('value' == filter.type) {
							const key = baseKey + '.' + filter.field;
							return { ...acc, [key]: (acc[key] || []).concat([filter.value]) };
						}
						if ('range' == filter.type) {
							const keyLow = baseKey + '.' + filter.field + '.low',
								keyHigh = baseKey + '.' + filter.field + '.high',
								low = filter?.value?.low ?? '*',
								high = filter?.value?.high ?? '*';
							return { ...acc, [keyLow]: (acc[keyLow] || []).concat([low]), [keyHigh]: (acc[keyHigh] || []).concat([high]) };
						}
						return acc;
					}, {})),
				(transformSearchRequest.merchandising = (request = {}) => {
					const reqMerch = request.merchandising || {},
						merch = reqMerch.disabled ? { disableMerchandising: !0 } : {};
					return (
						reqMerch.landingPage && (merch['landing-page'] = reqMerch.landingPage),
						reqMerch.segments instanceof Array &&
							reqMerch.segments.length &&
							(merch.tag = reqMerch.segments.map((segment) => `merch.segment/${segment}`)),
						'boolean' == typeof reqMerch.intellisuggest && (merch.intellisuggest = reqMerch.intellisuggest),
						reqMerch.disableInlineBanners && (merch.disableInlineBanners = reqMerch.disableInlineBanners),
						merch
					);
				}),
				(transformSearchRequest.pagination = (request = {}) => {
					const pagination = request.pagination || {},
						params = {};
					return (
						pagination.page && (params.page = pagination.page),
						(pagination.pageSize || 0 === pagination.pageSize) && (params.resultsPerPage = pagination.pageSize),
						params
					);
				}),
				(transformSearchRequest.siteId = (request = {}) => (request.siteId ? { siteId: request.siteId } : {})),
				(transformSearchRequest.facets = (request = {}) => {
					const facets = request.facets || {},
						params = {};
					if (facets.include && facets.include.length && facets.exclude && facets.exclude.length)
						throw 'cannot use facet include and exclude at the same time';
					return (
						facets.include?.length && (params.includedFacets = facets.include),
						facets.exclude?.length && (params.excludedFacets = facets.exclude),
						!1 === facets.autoDrillDown && (params.disableFacetDrillDown = !0),
						params
					);
				}),
				(transformSearchRequest.tracking = (request = {}) => {
					const reqTracking = request.tracking || {},
						params = {};
					return (
						reqTracking.userId && (params.userId = reqTracking.userId),
						reqTracking.domain && (params.domain = reqTracking.domain),
						reqTracking.sessionId && (params.sessionId = reqTracking.sessionId),
						reqTracking.pageLoadId && (params.pageLoadId = reqTracking.pageLoadId),
						params
					);
				}),
				(transformSearchRequest.personalization = (request = {}) => {
					const personalization = request.personalization || {},
						params = {};
					return (
						personalization.disabled && (params.skipPersonalization = personalization.disabled),
						personalization.cart && (params.cart = personalization.cart),
						personalization.lastViewed && (params.lastViewed = personalization.lastViewed),
						personalization.shopper && (params.shopper = personalization.shopper),
						params
					);
				});
			const CORE_FIELDS = [
				'uid',
				'sku',
				'name',
				'url',
				'addToCartUrl',
				'price',
				'msrp',
				'imageUrl',
				'secureImageUrl',
				'thumbnailImageUrl',
				'secureThumbnailImageUrl',
				'rating',
				'ratingCount',
				'description',
				'stockMessage',
				'brand',
				'popularity',
				'caption',
			];
			class Result {
				constructor(result) {
					Object.assign(this, result);
				}
			}
			function transformSearchResponse(response, request) {
				return {
					...transformSearchResponse.pagination(response),
					...transformSearchResponse.results(response),
					...transformSearchResponse.filters(response),
					...transformSearchResponse.facets(response, request),
					...transformSearchResponse.sorting(response),
					...transformSearchResponse.merchandising(response),
					...transformSearchResponse.search(response, request),
				};
			}
			function decodeProperty(encoded) {
				return Array.isArray(encoded)
					? encoded.map((item) => ('string' == typeof item ? unescapeHTML(String(item)) : item))
					: unescapeHTML(String(encoded));
			}
			function transformSuggestResponse(response) {
				return {
					...transformSuggestResponse.query(response),
					...transformSuggestResponse.correctedQuery(response),
					...transformSuggestResponse.suggested(response),
					...transformSuggestResponse.alternatives(response),
				};
			}
			(transformSearchResponse.pagination = (response) => {
				const pagination = response?.pagination;
				return {
					pagination: {
						totalResults: pagination?.totalResults,
						page: pagination?.currentPage,
						pageSize: pagination?.perPage,
						totalPages: pagination?.totalPages,
					},
				};
			}),
				(transformSearchResponse.results = (response) => ({ results: (response?.results || []).map(transformSearchResponse.result) })),
				(transformSearchResponse.result = (rawResult) => {
					const coreFieldValues = CORE_FIELDS.reduce(
						(coreFields, key) => (void 0 !== rawResult[key] ? { ...coreFields, [key]: decodeProperty(rawResult[key] || '') } : coreFields),
						{}
					);
					coreFieldValues.price && (coreFieldValues.price = +coreFieldValues.price),
						coreFieldValues.msrp && (coreFieldValues.msrp = +coreFieldValues.msrp);
					const attributes = Object.keys(rawResult)
							.filter((k) => -1 == CORE_FIELDS.indexOf(k))
							.filter((k) => !('badges' == k && 'object' == typeof rawResult[k]))
							.reduce((attributes, key) => ({ ...attributes, [key]: decodeProperty(rawResult[key] || '') }), {}),
						children =
							rawResult?.children?.map((child) => ({
								attributes: { ...Object.keys(child).reduce((attributes, key) => ({ ...attributes, [key]: decodeProperty(child[key]) }), {}) },
							})) || [];
					return new Result({
						id: rawResult.uid,
						mappings: { core: coreFieldValues },
						attributes,
						badges: 'object' == typeof rawResult.badges ? rawResult.badges : [],
						children,
					});
				}),
				(transformSearchResponse.filters = (response) => ({
					filters: (response?.filterSummary || []).map((filter) => {
						let value = filter.value,
							type = 'value';
						return (
							'object' == typeof filter.value &&
								filter &&
								filter.value &&
								filter.value.rangeHigh &&
								filter.value.rangeLow &&
								((type = 'range'), (value = { low: +filter.value.rangeLow, high: +filter.value.rangeHigh })),
							{ type, field: filter.field, label: filter.filterValue, value }
						);
					}),
				})),
				(transformSearchResponse.facets = (response, request = {}) => {
					const filters = request.filters || [],
						facets = response?.facets || [],
						limit = request?.facets?.limit,
						valueLimit = request?.facets?.valueLimit;
					let transformedFacets = facets.map((facet) => {
						let transformedFacet = { field: facet.field, type: 'value', filtered: Boolean(facet.facet_active) };
						if (facet.step)
							facet.range &&
								(transformedFacet = {
									...transformedFacet,
									type: 'range',
									step: facet.step,
									range: { low: '*' == facet.range[0] ? void 0 : +facet.range[0], high: '*' == facet.range[1] ? void 0 : +facet.range[1] },
								}),
								facet.active &&
									'boolean' != typeof facet.active &&
									facet.active.length > 1 &&
									(transformedFacet.active = {
										low: '*' == facet.active[0] ? void 0 : +facet.active[0],
										high: '*' == facet.active[1] ? void 0 : +facet.active[1],
									});
						else if (facet.values instanceof Array)
							if ('hierarchy' == facet.type) {
								(transformedFacet.type = 'value'),
									(transformedFacet.values = (facet.values || []).map((value) => ({
										filtered: Boolean(value.active),
										value: value.value,
										label: value.label,
										count: value.count,
									})));
								const filterSelected = filters.find((f) => f.field == facet.field),
									newValues = [];
								if (filterSelected && !filterSelected.background) {
									const valueLevels = filterSelected.value?.split(facet.hierarchyDelimiter || '>');
									if (valueLevels)
										for (let i = valueLevels.length - 1; i >= 0; i--) {
											const valueSplit = valueLevels.slice(0, i + 1),
												value = valueSplit.join(facet.hierarchyDelimiter);
											newValues.unshift({ value, filtered: value == filterSelected.value, label: valueSplit[valueSplit.length - 1] });
										}
									newValues.unshift({ value: null, filtered: !1, label: 'View All' });
								}
								transformedFacet.values = newValues.concat(transformedFacet.values);
							} else
								'value' == facet.values[0].type
									? ((transformedFacet.type = 'value'),
									  (transformedFacet.values = facet.values.map((value) => ({
											filtered: value.active,
											value: value.value,
											label: value.label,
											count: value.count,
									  }))))
									: 'range' == facet.values[0].type &&
									  ((transformedFacet.type = 'range-buckets'),
									  (transformedFacet.values = facet.values.map((value) => ({
											filtered: value.active,
											low: '*' == value.low ? null : value.low ? +value.low : null,
											high: '*' == value.high ? null : value.high ? +value.high : null,
											label: value.label,
											count: value.count,
									  }))));
						return transformedFacet;
					});
					return (
						limit && (transformedFacets = transformedFacets.slice(0, limit)),
						valueLimit &&
							(transformedFacets = transformedFacets.map((facet) => (facet.values && (facet.values = facet.values.slice(0, valueLimit)), facet))),
						{ facets: transformedFacets }
					);
				}),
				(transformSearchResponse.sorting = (response) => ({
					sorting: (response?.sorting?.options || []).filter((sort) => sort.active).map((sort) => ({ field: sort.field, direction: sort.direction })),
				})),
				(transformSearchResponse.merchandising = (response) => {
					const merchandising = response?.merchandising;
					merchandising?.content && Array.isArray(merchandising.content) && !merchandising.content.length && (merchandising.content = {});
					return {
						merchandising: {
							redirect: merchandising?.redirect || '',
							content: merchandising?.content || {},
							campaigns: merchandising?.triggeredCampaigns || [],
							personalized: merchandising?.personalized,
						},
					};
				}),
				(transformSearchResponse.search = (response, request) => {
					const searchObj = {
						search: { query: request?.search?.query?.string, didYouMean: response?.didYouMean?.query, matchType: response?.query?.matchType },
					};
					return (
						response?.query?.corrected && response?.query.original
							? ((searchObj.search.query = response?.query?.corrected), (searchObj.search.originalQuery = response?.query?.original))
							: request?.search?.originalQuery && (searchObj.search.originalQuery = request?.search?.originalQuery),
						searchObj
					);
				}),
				(transformSuggestResponse.query = (response) => (response?.query ? { query: response.query } : {})),
				(transformSuggestResponse.correctedQuery = (response) =>
					'object' == typeof response && response['corrected-query'] ? { correctedQuery: response['corrected-query'] } : {}),
				(transformSuggestResponse.suggested = (response) =>
					'object' == typeof response && response.suggested && 'object' == typeof response.suggested
						? { suggested: { text: response.suggested?.text, type: response.suggested?.type, source: response.suggested?.source } }
						: {}),
				(transformSuggestResponse.alternatives = (response) => ({
					alternatives: (response?.alternatives || []).map((alternative) => ({ text: alternative.text })),
				}));
			class HybridAPI extends API {
				constructor(configuration, requesterConfigurations) {
					super(configuration);
					const legacyConfig = cjs_default()(
						{
							mode: this.configuration.mode,
							origin: this.configuration.origin,
							cache: this.configuration.cache,
							fetchApi: this.configuration.fetchApi,
						},
						requesterConfigurations?.legacy || {}
					);
					configuration.mode == AppMode.development && (legacyConfig.headers = { ...legacyConfig.headers, 'searchspring-no-beacon': '' });
					const suggestConfig = cjs_default()(
							{
								mode: this.configuration.mode,
								origin: this.configuration.origin,
								cache: this.configuration.cache,
								fetchApi: this.configuration.fetchApi,
							},
							requesterConfigurations?.suggest || {}
						),
						legacyConfiguration = new ApiConfiguration(legacyConfig),
						suggestConfiguration = new ApiConfiguration(suggestConfig);
					this.requesters = { legacy: new LegacyAPI(legacyConfiguration), suggest: new SuggestAPI(suggestConfiguration) };
				}
				async getMeta(requestParameters) {
					const legacyRequestParameters = requestParameters;
					return this.requesters.legacy.getMeta(legacyRequestParameters);
				}
				async getSearch(requestParameters) {
					const legacyRequestParameters = transformSearchRequest(requestParameters);
					return transformSearchResponse(await this.requesters.legacy.getSearch(legacyRequestParameters), requestParameters);
				}
				async getFinder(requestParameters) {
					const legacyRequestParameters = transformSearchRequest(requestParameters);
					return transformSearchResponse(await this.requesters.legacy.getFinder(legacyRequestParameters), requestParameters);
				}
				async getAutocomplete(requestParameters) {
					const legacyRequestParameters = transformSearchRequest(requestParameters),
						suggestParams = {
							siteId: legacyRequestParameters.siteId,
							language: 'en',
							query: legacyRequestParameters.q,
							suggestionCount: (requestParameters.suggestions || {}).count || 5,
						};
					((requestParameters.search || {}).query || {}).spellCorrection || (suggestParams.disableSpellCorrect = !0);
					const transformedSuggestResults = transformSuggestResponse(await this.requesters.suggest.getSuggest(suggestParams));
					let q = (transformedSuggestResults.suggested || {}).text || transformedSuggestResults.correctedQuery || transformedSuggestResults.query;
					this.requesters.suggest.configuration?.globals?.integratedSpellCorrection &&
						(q = (transformedSuggestResults.suggested || {}).text || transformedSuggestResults.query || transformedSuggestResults.correctedQuery);
					const queryParameters = { ...legacyRequestParameters, redirectResponse: 'full', q };
					requestParameters.search?.query?.string && (requestParameters.search.query.string = q);
					return {
						...transformSearchResponse(await this.requesters.legacy.getAutocomplete(queryParameters), requestParameters),
						autocomplete: transformedSuggestResults,
					};
				}
			}
			const transformRecommendationFiltersPost = (filters) => {
				if (!filters) return;
				const filterArray = [];
				return (
					filters.map((filter) => {
						if ('value' == filter.type) {
							const i = filterArray.findIndex((_filter) => _filter.field == filter.field);
							if (i > -1) filterArray[i].values.push(filter.value);
							else {
								const val = { field: filter.field, type: '=', values: [filter.value] };
								filterArray.push(val);
							}
						} else if ('range' == filter.type) {
							if ('number' == typeof filter.value.low) {
								const low = { field: filter.field, type: '>=', values: [filter.value.low] },
									i = filterArray.findIndex((_filter) => _filter.field == filter.field && '>=' == _filter.type);
								i > -1 ? (filterArray[i] = low) : filterArray.push(low);
							}
							if ('number' == typeof filter.value.high) {
								const high = { field: filter.field, type: '<=', values: [filter.value.high] },
									i = filterArray.findIndex((_filter) => _filter.field == filter.field && '<=' == _filter.type);
								i > -1 ? (filterArray[i] = high) : filterArray.push(high);
							}
						}
					}),
					filterArray
				);
			};
			class Deferred {
				constructor() {
					this.promise = new Promise((resolve, reject) => {
						(this.reject = reject), (this.resolve = resolve);
					});
				}
			}
			class RecommendAPI extends API {
				constructor(config) {
					super(config), (this.batches = {});
				}
				async getProfile(queryParameters) {
					return await this.request(
						{ path: '/api/personalized-recommendations/profile.json', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async batchRecommendations(parameters) {
					const batchId = parameters.batchId || 1,
						key = parameters.batched ? `${parameters.profile?.siteId || parameters.siteId}:${batchId}` : `${Math.random()}:${batchId}`,
						batch = (this.batches[key] = this.batches[key] || { timeout: null, request: { profiles: [] }, entries: [] }),
						deferred = new Deferred();
					batch.entries.push({ request: parameters, deferred });
					const timeoutClear = 'undefined' != typeof window ? window.clearTimeout : clearTimeout,
						timeoutSet = 'undefined' != typeof window ? window.setTimeout : setTimeout;
					return (
						timeoutClear && timeoutClear(batch.timeout),
						(batch.timeout = timeoutSet(async () => {
							delete this.batches[key],
								batch.entries.sort(sortBatchEntries),
								batch.entries.map((entry) => {
									if (
										(entry.request.product &&
											(Array.isArray(entry.request.products) && -1 == entry.request.products.indexOf(entry.request.product)
												? (entry.request.products = entry.request.products.concat(entry.request.product))
												: (entry.request.products = [entry.request.product])),
										entry.request.profile)
									) {
										const {
												tag,
												profile: { categories, brands, blockedItems, limit, query, filters, dedupe },
											} = entry.request,
											profile = {
												tag,
												...defined({
													categories,
													brands,
													blockedItems,
													limit,
													searchTerm: query,
													filters: transformRecommendationFiltersPost(filters),
													dedupe,
												}),
											};
										batch.request.profiles?.push(profile);
									} else {
										const { tag, categories, brands, limit, query, dedupe } = entry.request,
											profile = { tag, ...defined({ categories, brands, limit, searchTerm: query, dedupe }) };
										batch.request.profiles?.push(profile);
									}
									const { products, blockedItems, filters, test, cart, lastViewed, shopper } = entry.request;
									batch.request = {
										...batch.request,
										...defined({
											siteId: entry.request.profile?.siteId || entry.request.siteId,
											products,
											blockedItems,
											filters: transformRecommendationFiltersPost(filters),
											test,
											cart,
											lastViewed,
											shopper,
										}),
									};
								});
							try {
								this.configuration.mode == AppMode.development && (batch.request.test = !0);
								const response = await this.postRecommendations(batch.request);
								batch.entries?.forEach((entry, index) => {
									entry.deferred.resolve(response[index]);
								});
							} catch (err) {
								batch.entries?.forEach((entry) => {
									entry.deferred.reject(err);
								});
							}
						}, 150)),
						deferred.promise
					);
				}
				async postRecommendations(requestParameters) {
					const headerParameters = { 'Content-Type': 'text/plain' },
						path = `/boost/${requestParameters.siteId}/recommend`;
					return await this.request({ path, method: 'POST', headers: headerParameters, body: requestParameters }, JSON.stringify(requestParameters));
				}
			}
			function sortBatchEntries(a, b) {
				const one = a.request,
					two = b.request;
				return null == one.order && null == two.order
					? 0
					: null == one.order && null != two.order
					? 1
					: (null == two.order && null != one.order) || one.order < two.order
					? -1
					: one.order > two.order
					? 1
					: 0;
			}
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			const Client_defaultConfig = {
				mode: AppMode.production,
				meta: { cache: { purgeable: !1 } },
				search: {},
				autocomplete: {},
				recommend: {},
				finder: {},
				suggest: {},
			};
			class Client {
				constructor(globals, config = {}) {
					if (((this.mode = AppMode.production), !globals?.siteId)) throw 'no siteId specified!';
					(this.globals = globals),
						(this.config = cjs_default()(Client_defaultConfig, config)),
						Object.values(AppMode).includes(this.config.mode) && (this.mode = this.config.mode),
						(this.requesters = {
							autocomplete: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.autocomplete?.origin,
									headers: this.config.autocomplete?.headers,
									cache: this.config.autocomplete?.cache,
									globals: this.config.autocomplete?.globals,
								}),
								this.config.autocomplete?.requesters
							),
							meta: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.meta?.origin,
									headers: this.config.meta?.headers,
									cache: this.config.meta?.cache,
									globals: this.config.meta?.globals,
								})
							),
							recommend: new RecommendAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.recommend?.origin,
									headers: this.config.recommend?.headers,
									cache: this.config.recommend?.cache,
									globals: this.config.recommend?.globals,
								})
							),
							search: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.search?.origin,
									headers: this.config.search?.headers,
									cache: this.config.search?.cache,
									globals: this.config.search?.globals,
								})
							),
							finder: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.finder?.origin,
									headers: this.config.finder?.headers,
									cache: this.config.finder?.cache,
									globals: this.config.finder?.globals,
								})
							),
							suggest: new SuggestAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.suggest?.origin,
									headers: this.config.suggest?.headers,
									cache: this.config.suggest?.cache,
									globals: this.config.suggest?.globals,
								})
							),
						});
				}
				async meta(params) {
					const defaultParams = { siteId: this.globals.siteId };
					return (params = cjs_default()(defaultParams, params || {})), this.requesters.meta.getMeta(params);
				}
				async autocomplete(params = {}) {
					if (!params.search?.query?.string) throw 'query string parameter is required';
					params = cjs_default()(this.globals, params);
					const [meta, search] = await Promise.all([
						this.meta({ siteId: params.siteId || '' }),
						this.requesters.autocomplete.getAutocomplete(params),
					]);
					return { meta, search };
				}
				async search(params = {}) {
					params = cjs_default()(this.globals, params);
					const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.search.getSearch(params)]);
					return { meta, search };
				}
				async finder(params = {}) {
					params = cjs_default()(this.globals, params);
					const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.finder.getFinder(params)]);
					return { meta, search };
				}
				async trending(params) {
					return (params = cjs_default()({ siteId: this.globals.siteId }, params || {})), this.requesters.suggest.getTrending(params);
				}
				async recommend(params) {
					const { tag, ...otherParams } = params;
					if (!tag) throw 'tag parameter is required';
					const profileParams = { tag, siteId: params.siteId || this.globals.siteId };
					otherParams.branch && ((profileParams.branch = otherParams.branch), delete otherParams.branch);
					const recommendParams = { tag, ...otherParams, siteId: params.siteId || this.globals.siteId },
						[meta, profile, recommend] = await Promise.all([
							this.meta(params.siteId ? { siteId: params.siteId } : void 0),
							this.requesters.recommend.getProfile(profileParams),
							this.requesters.recommend.batchRecommendations(recommendParams),
						]);
					return { meta, profile, recommend };
				}
			}
			class SearchQueryStore {
				constructor(params) {
					const { services, data } = params || {},
						{ search } = data.search || {},
						observables = {};
					search?.query && ((this.query = new Query(services, search.query)), (observables.query = mobx_esm.sH)),
						search?.didYouMean && ((this.didYouMean = new Query(services, search.didYouMean)), (observables.didYouMean = mobx_esm.sH)),
						search?.originalQuery && ((this.originalQuery = new Query(services, search.originalQuery)), (observables.originalQuery = mobx_esm.sH)),
						search?.matchType && ((this.matchType = search.matchType), (observables.matchType = mobx_esm.sH)),
						(0, mobx_esm.Gn)(this, observables);
				}
			}
			class Query {
				constructor(services, query) {
					(this.string = (function escapeHTML(unsafe) {
						if ('string' != typeof unsafe) throw new Error('parameter must be a string');
						if (window?.document) {
							const textAreaDiv = window.document.createElement('textarea');
							return (textAreaDiv.textContent = unsafe), textAreaDiv.innerHTML;
						}
						return unsafe.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;');
					})(query)),
						(this.url = services?.urlManager?.remove('page').remove('filter').set('query', this.string)),
						(0, mobx_esm.Gn)(this, { string: mobx_esm.sH });
				}
			}
			class SearchHistoryStore {
				constructor(params) {
					const { services, config } = params || {};
					(this.config = config),
						(this.services = services),
						(this.max = this.config.settings?.history?.max ?? 25),
						this.config.settings?.history?.url &&
							(this.services.urlManager = this.services.urlManager.withConfig((translatorConfig) => ({
								...translatorConfig,
								urlRoot: this.config.settings?.history?.url,
							}))),
						(this.storage = new StorageStore({
							type: 'local',
							key: 'ss-history' + (this.config.globals?.siteId ? `-${this.config.globals?.siteId}` : ''),
						})),
						0 === this.max && this.reset(),
						this.queries.length > this.max &&
							this.getStoredData().forEach((term, index) => {
								index > this.max - 1 && this.remove(term);
							});
				}
				get queries() {
					return this.getStoredData().map((query) => new Query(this.services, query));
				}
				save(term) {
					if (this.max) {
						const history = this.getStoredData(),
							index = history.indexOf(term);
						-1 != index && history.splice(index, 1),
							history.unshift(term),
							history.length > this.max && history.pop(),
							this.storage.set('history', JSON.stringify(history));
					}
				}
				remove(term) {
					const history = this.getStoredData(),
						index = history.indexOf(term);
					-1 != index && (history.splice(index, 1), this.storage.set('history', JSON.stringify(history)));
				}
				reset() {
					this.storage.clear();
				}
				getStoredData(limit) {
					const storedHistory = this.storage.get('history');
					if (storedHistory)
						try {
							const history = JSON.parse(storedHistory);
							if (Array.isArray(history)) return limit && Number.isInteger(limit) ? history.slice(0, limit) : history;
						} catch (err) {
							this.reset();
						}
					return [];
				}
			}
			var SearchMerchandisingStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js');
			class SearchFacetStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const config = params?.config || {},
						{ services, stores, data } = params || {},
						{ search, meta } = data || {},
						{ facets, merchandising, pagination } = search || {},
						{ storage } = stores || {};
					super(
						...(facets
							?.filter((facet) => {
								const facetMeta = facet.field && meta.facets && meta.facets[facet.field];
								if (!facetMeta) return !1;
								if (('slider' == facetMeta.display && 'range' !== facet.type) || ('range' == facet.type && 'slider' !== facetMeta.display)) return !1;
								const facetConfig = config.settings?.facets?.fields && facet.field && config.settings?.facets?.fields[facet.field];
								if ('boolean' == typeof facetConfig?.trim ? facetConfig?.trim : config.settings?.facets?.trim) {
									if ('range' === facet.type && facet?.range?.low == facet?.range?.high) return !1;
									if (0 == facet.values?.length) return !1;
									if (!facet.filtered && 1 == facet.values?.length)
										return merchandising?.content?.inline
											? facet.values[0].count + merchandising.content?.inline.length != pagination.totalResults
											: facet.values[0].count != pagination.totalResults;
								}
								return !0;
							})
							.map((facet) => {
								const facetMeta = facet.field && meta.facets && meta.facets[facet.field],
									facetConfig = cjs_default()(
										{ ...config.settings?.facets, fields: void 0 },
										(config.settings?.facets?.fields && facet.field && config.settings?.facets?.fields[facet.field]) || {}
									);
								return (
									delete facetConfig.fields,
									'range' === facet.type
										? new RangeFacet(services, storage, facet, facetMeta || {}, facetConfig)
										: new ValueFacet(services, storage, facet, facetMeta || {}, facetConfig)
								);
							}) || [])
					);
				}
			}
			class Facet {
				constructor(services, storage, facet, facetMeta, config) {
					(this.filtered = !1),
						(this.custom = {}),
						(this.collapsed = !1),
						(this.display = ''),
						(this.label = ''),
						(this.services = services),
						(this.storage = storage),
						Object.assign(this, facetMeta, facet),
						(0, mobx_esm.Gn)(this, {
							type: mobx_esm.sH,
							field: mobx_esm.sH,
							filtered: mobx_esm.sH,
							custom: mobx_esm.sH,
							collapsed: mobx_esm.sH,
							display: mobx_esm.sH,
							label: mobx_esm.sH,
							clear: mobx_esm.EW,
							toggleCollapse: mobx_esm.XI,
						});
					const collapseData = this.storage.get(`facets.${this.field}.collapsed`);
					(this.collapsed = collapseData ?? this.collapsed),
						this.filtered && this.collapsed && void 0 === collapseData && config.autoOpenActive && this.toggleCollapse();
				}
				get clear() {
					return { url: this.services.urlManager.remove('page').remove(`filter.${this.field}`) };
				}
				toggleCollapse() {
					(this.collapsed = !this.collapsed), this.storage.set(`facets.${this.field}.collapsed`, this.collapsed);
				}
			}
			class RangeFacet extends Facet {
				constructor(services, storage, facet, facetMeta, config) {
					super(services, storage, facet, facetMeta, config),
						(this.range = { low: 0, high: 0 }),
						(this.active = { low: 0, high: 0 }),
						(this.step = facet?.step);
					const storedRange = config.storeRange && this.storage.get(`facets.${this.field}.range`);
					storedRange && facet.filtered && (facet.range?.low > storedRange.low || facet.range?.high < storedRange.high)
						? (this.range = this.storage.get(`facets.${this.field}.range`))
						: (this.storage.set(`facets.${this.field}.range`, facet.range), (this.range = facet.range)),
						(this.active = facet.active || facet.range),
						(this.formatSeparator = facetMeta?.formatSeparator || '-'),
						(this.formatValue = facetMeta?.formatValue || '%01.2f'),
						(0, mobx_esm.Gn)(this, {
							step: mobx_esm.sH,
							range: mobx_esm.sH,
							active: mobx_esm.sH,
							formatSeparator: mobx_esm.sH,
							formatValue: mobx_esm.sH,
						});
				}
				get filteredCount() {
					return Number(this.filtered);
				}
			}
			class ValueFacet extends Facet {
				constructor(services, storage, facet, facetMeta, config) {
					super(services, storage, facet, facetMeta, config),
						(this.values = []),
						(this.search = { input: '' }),
						(this.overflow = {
							enabled: !1,
							limited: !0,
							limit: 0,
							remaining: void 0,
							setLimit: function (limit) {
								limit != this.limit && ((this.enabled = !0), (this.limit = limit), this.calculate());
							},
							toggle: (val) => {
								(this.overflow.limited = void 0 !== val ? val : !this.overflow.limited),
									this.storage.set(`facets.${this.field}.overflow.limited`, this.overflow.limited),
									this.overflow.calculate();
							},
							calculate: () => {
								if (this.overflow.limit > 0) {
									const remaining = this.values.length - this.overflow.limit;
									remaining > 0 && !this.search.input
										? ((this.overflow.enabled = !0), this.overflow.limited ? (this.overflow.remaining = remaining) : (this.overflow.remaining = 0))
										: (this.overflow.enabled = !1);
								}
							},
						}),
						(this.multiple = this.multiple),
						(this.values =
							(facet.values &&
								facet.values.map((value) => {
									switch (facet.type) {
										case 'value':
											if ('hierarchy' === facetMeta.display) {
												const filteredValues = facet?.values?.filter((value) => value.filtered) || [];
												return new FacetHierarchyValue(services, this, value, filteredValues);
											}
											return (value.value = value?.value?.toString()), new FacetValue(services, this, value);
										case 'range-buckets':
											return new FacetRangeValue(services, this, value);
									}
								})) ||
							[]),
						config.pinFiltered && 'hierarchy' !== facetMeta.display && this.values.sort((a, b) => Number(b.filtered) - Number(a.filtered));
					const overflowLimitedState = this.storage.get(`facets.${this.field}.overflow.limited`);
					void 0 !== overflowLimitedState && this.overflow.toggle(overflowLimitedState),
						(0, mobx_esm.Gn)(this, {
							values: mobx_esm.sH,
							search: mobx_esm.sH,
							multiple: mobx_esm.sH,
							overflow: mobx_esm.sH,
							refinedValues: mobx_esm.EW,
						}),
						(0, mobx_esm.mJ)(
							() => this.search.input,
							() => {
								this.overflow.calculate();
							}
						);
				}
				get filteredCount() {
					return this.values.filter((value) => value?.filtered).length;
				}
				get refinedValues() {
					let values = this.values || [];
					if (this.search.input) {
						const search = new RegExp(
							(function escapeRegExp(string) {
								return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
							})(this.search.input),
							'i'
						);
						values = this.values.filter((value) => String(value?.label || '').match(search));
					}
					return this.overflow.enabled && this.overflow.limited && (values = values.slice(0, this.overflow.limit)), values;
				}
			}
			class FacetValue {
				constructor(services, facet, value) {
					if ((Object.assign(this, value), this.filtered)) this.url = services.urlManager.remove('page').remove(`filter.${facet.field}`, value.value);
					else {
						let valueUrl = services.urlManager.remove('page');
						'single' == facet.multiple && (valueUrl = valueUrl?.remove(`filter.${facet.field}`)),
							(this.url = valueUrl?.merge(`filter.${facet.field}`, value.value));
					}
				}
			}
			class FacetHierarchyValue extends FacetValue {
				constructor(services, facet, value, filteredValues) {
					if (
						(super(services, facet, value),
						(this.level = 0),
						(this.history = !1),
						value.value && facet.hierarchyDelimiter && (this.level = value.value.split(facet.hierarchyDelimiter).length),
						facet.filtered && filteredValues?.length)
					) {
						const filteredLevel = facet?.hierarchyDelimiter && filteredValues[0].value?.split(facet.hierarchyDelimiter).length;
						filteredLevel && this.level <= filteredLevel && (this.history = !0);
					}
					value.value
						? (this.url = services.urlManager.remove('page').set(`filter.${facet.field}`, value.value))
						: (this.url = services.urlManager.remove('page').remove(`filter.${facet.field}`));
				}
			}
			class FacetRangeValue {
				constructor(services, facet, value) {
					if ((Object.assign(this, value), this.filtered))
						this.url = services.urlManager.remove('page').remove(`filter.${facet.field}`, [{ low: this.low, high: this.high }]);
					else {
						let valueUrl = services.urlManager.remove('page');
						'single' == facet.multiple && (valueUrl = valueUrl?.remove(`filter.${facet.field}`)),
							(this.url = valueUrl?.merge(`filter.${facet.field}`, [{ low: this.low, high: this.high }]));
					}
				}
			}
			class SearchFilterStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { services, data } = params || {},
						{ search, meta } = data || {},
						{ filters } = search || {};
					super(
						...(filters?.map((filter) => {
							const field = filter.field,
								facetMeta = meta.facets && meta.facets[field];
							if ('range' === filter.type) {
								return new RangeFilter(services, filter, facetMeta);
							}
							return new Filter(services, filter, facetMeta);
						}) || [])
					);
				}
			}
			class Filter {
				constructor(services, filter, meta) {
					(this.facet = { field: filter.field, label: meta?.label || filter.field }),
						(this.value = { value: filter.value, label: filter.label }),
						(this.label = `${this.facet.label}: ${this.value.label}`),
						(this.url = services?.urlManager?.remove('page').remove(`filter.${this.facet.field}`, this.value.value)),
						(0, mobx_esm.Gn)(this, { facet: mobx_esm.sH, value: mobx_esm.sH, label: mobx_esm.sH });
				}
			}
			class RangeFilter {
				constructor(services, filter, meta) {
					(this.facet = { field: filter.field, label: meta?.label || filter.field }),
						(this.value = {
							low: filter?.value?.low,
							high: filter?.value?.high,
							label: filter.label || `${filter?.value?.low} - ${filter?.value?.high}`,
						}),
						(this.label = `${this.facet.label}: ${this.value.label}`),
						(this.url = services?.urlManager?.remove('page').remove(`filter.${this.facet.field}`, { low: this.value.low, high: this.value.high })),
						(0, mobx_esm.Gn)(this, { facet: mobx_esm.sH, value: mobx_esm.sH, label: mobx_esm.sH });
				}
			}
			var is_plain_object = __webpack_require__('../../node_modules/is-plain-object/dist/is-plain-object.mjs');
			class SearchResultStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { config, data, state } = params || {},
						{ search, meta } = data || {},
						{ results, merchandising, pagination } = search || {},
						{ loaded } = state || {};
					let resultsArr = (results || []).map((result) => new Product({ config, data: { result, meta } }));
					const variantConfig = config?.settings?.variants;
					if (
						variantConfig?.realtime?.enabled &&
						(!loaded &&
							resultsArr.length &&
							document.querySelectorAll('[ss-variant-option]').forEach((elem) => {
								variantConfig?.field &&
									!1 == !variantConfig?.realtime?.enabled &&
									elem.addEventListener('click', () =>
										(function variantOptionClick(elem, variantConfig, results) {
											const options = {},
												attr = elem.getAttribute('ss-variant-option');
											if (attr) {
												const [option, value] = attr.split(':');
												(options[option.toLowerCase()] = [value.toLowerCase()]), makeVariantSelections(variantConfig, options, results);
											}
										})(elem, variantConfig, resultsArr)
									);
							}),
						resultsArr.length && variantConfig?.field && !1 == !variantConfig?.realtime?.enabled)
					) {
						const options = {};
						document.querySelectorAll('[ss-variant-option-selected]').forEach((elem) => {
							const attr = elem.getAttribute('ss-variant-option');
							if (attr) {
								const [option, value] = attr.split(':');
								option && value && (options[option.toLowerCase()] = [value.toLowerCase()]);
							}
						}),
							makeVariantSelections(variantConfig, options, resultsArr);
					}
					if (merchandising?.content?.inline) {
						const banners = merchandising.content.inline
							.sort(function (a, b) {
								return a.config.position.index - b.config.position.index;
							})
							.map((banner) => new Banner({ data: { banner } }));
						banners &&
							pagination?.totalResults &&
							(resultsArr = (function addBannersToResults(params, results, banners) {
								const { config, data } = params || {},
									{ search } = data || {},
									{ pagination } = search || {},
									productCount = results.length;
								let minIndex = pagination?.pageSize * (pagination?.page - 1);
								const maxIndex = minIndex + pagination?.pageSize;
								config?.settings?.infinite && (minIndex = 0);
								return (
									banners
										.reduce((adding, banner) => {
											const resultCount = productCount + adding.length;
											return (
												banner.config.position.index >= minIndex &&
													(banner.config.position.index < maxIndex || resultCount < pagination?.pageSize) &&
													adding.push(banner),
												adding
											);
										}, [])
										.forEach((banner) => {
											const adjustedIndex = banner.config.position.index - minIndex;
											results.splice(adjustedIndex, 0, banner);
										}),
									results
								);
							})(params, resultsArr, banners));
					}
					super(...resultsArr);
				}
			}
			class Banner {
				constructor(bannerData) {
					(this.type = 'banner'), (this.attributes = {}), (this.mappings = { core: {} }), (this.custom = {});
					const { banner } = bannerData?.data || {};
					(this.id = 'ss-ib-' + banner.config.position.index),
						(this.config = banner.config),
						(this.value = banner.value),
						(0, mobx_esm.Gn)(this, { id: mobx_esm.sH, mappings: mobx_esm.sH, attributes: mobx_esm.sH });
				}
			}
			class Product {
				constructor(productData) {
					(this.type = 'product'),
						(this.attributes = {}),
						(this.mappings = { core: {} }),
						(this.custom = {}),
						(this.children = []),
						(this.quantity = 1),
						(this.mask = new ProductMask());
					const { config } = productData || {},
						{ result, meta } = productData?.data || {};
					(this.id = result.id),
						(this.attributes = result.attributes),
						(this.mappings = result.mappings),
						(this.badges = new Badges({ data: { meta, result } }));
					const variantsField = config?.settings?.variants?.field;
					if (config && variantsField && this.attributes && this.attributes[variantsField])
						try {
							const parsedVariants = JSON.parse(this.attributes[variantsField]);
							this.variants = new Variants({ config: config.settings?.variants, data: { mask: this.mask, variants: parsedVariants } });
						} catch (err) {
							console.error(err, `Invalid variant JSON for product id: ${result.id}`);
						}
					result.children?.length &&
						(this.children = result.children.map((variant, index) => new Child({ data: { result: { id: `${result.id}-${index}`, ...variant } } }))),
						(0, mobx_esm.Gn)(this, { id: mobx_esm.sH, display: mobx_esm.EW, attributes: mobx_esm.sH, custom: mobx_esm.sH, quantity: mobx_esm.sH });
					const coreObservables = Object.keys(this.mappings.core).reduce((map, key) => ({ ...map, [key]: mobx_esm.sH }), {});
					(0, mobx_esm.Gn)(this.mappings.core, coreObservables);
				}
				get display() {
					return cjs_default()({ id: this.id, mappings: this.mappings, attributes: this.attributes }, this.mask.data, {
						isMergeableObject: is_plain_object.Q,
					});
				}
			}
			class Badges {
				constructor(badgesData) {
					this.all = [];
					const { data } = badgesData || {},
						{ meta, result } = data || {};
					(this.all = (result.badges || [])
						.filter((badge) => !!(badge?.tag && meta.badges?.tags && meta.badges?.tags[badge.tag] && meta.badges?.tags[badge.tag].enabled))
						.map((badge) => {
							const metaBadgeData = meta.badges?.tags?.[badge.tag];
							return { ...badge, ...metaBadgeData };
						})
						.sort((a, b) => a.priority - b.priority)),
						(0, mobx_esm.Gn)(this, { all: mobx_esm.sH, tags: mobx_esm.EW, locations: mobx_esm.EW });
				}
				atLocation(location) {
					const locations = Array.isArray(location) ? location : [location];
					return this.all.filter((badge) => locations.some((location) => badge.location.startsWith(`${location}/`) || badge.location == location));
				}
				get tags() {
					return this.all.reduce((badgeMap, badge) => ((badgeMap[badge.tag] = badge), badgeMap), {});
				}
				get locations() {
					return this.all.reduce((locationMap, badge) => {
						const [section, tag] = badge.location.split('/');
						return (
							(locationMap[section] = locationMap[section] || {}),
							(locationMap[section][tag] = (locationMap[section][tag] || []).concat(badge)),
							locationMap
						);
					}, {});
				}
			}
			class ProductMask {
				constructor() {
					(this.data = {}), (0, mobx_esm.Gn)(this, { data: mobx_esm.sH });
				}
				merge(mask) {
					JSON.stringify(cjs_default()(this.data, mask)) != JSON.stringify(this.data) && (this.data = cjs_default()(this.data, mask));
				}
				set(mask) {
					JSON.stringify(mask) != JSON.stringify(this.data) && (this.data = mask);
				}
				reset() {
					this.data = {};
				}
			}
			class Variants {
				constructor(variantData) {
					(this.data = []), (this.selections = []);
					const { config, data } = variantData || {},
						{ variants, mask } = data || {};
					(this.setActive = (variant) => {
						(this.active = variant), mask.set({ mappings: this.active.mappings, attributes: this.active.attributes });
					}),
						config && (this.config = config),
						this.update(variants, config);
				}
				update(variantData, config = this.config) {
					try {
						const options = [];
						(this.data = variantData
							.filter((variant) => !1 !== variant.attributes.available)
							.map(
								(variant) => (
									variant.mappings.core?.price && (variant.mappings.core.price = Number(variant.mappings.core?.price)),
									variant.mappings.core?.msrp && (variant.mappings.core.msrp = Number(variant.mappings.core?.msrp)),
									variant
								)
							)
							.map(
								(variant) => (
									Object.keys(variant.options).forEach((variantOption) => {
										options.includes(variantOption) || options.push(variantOption);
									}),
									new Variant({ data: { variant } })
								)
							)),
							(this.selections = []),
							options.map((option) => {
								const variantOptionConfig = this.config?.options && this.config.options[option];
								this.selections.push(new VariantSelection({ config: variantOptionConfig, data: { variants: this, selectorField: option } }));
							});
						const preselectedOptions = {};
						config?.options &&
							Object.keys(config?.options).forEach((option) => {
								config.options[option].preSelected && (preselectedOptions[option] = config.options[option].preSelected);
							}),
							this.makeSelections(preselectedOptions);
					} catch (err) {
						console.error(err, `Invalid variant JSON for: ${variantData}`);
					}
				}
				makeSelections(options) {
					options && Object.keys(options).length
						? this.selections.forEach((selection, idx) => {
								const availableOptions = selection.values.filter((value) => 0 == idx || value.available),
									preferedOptions = options[selection.field];
								let preferencedOption = selection.selected || availableOptions[0];
								if (preferedOptions) {
									const checkIfAvailable = (preference) => {
										const availablePreferedOptions = availableOptions.find(
											(value) => value.value.toString().toLowerCase() == preference?.toString().toLowerCase()
										);
										availablePreferedOptions && (preferencedOption = availablePreferedOptions);
									};
									Array.isArray(preferedOptions)
										? preferedOptions.forEach((preference) => {
												checkIfAvailable(preference);
										  })
										: checkIfAvailable(preferedOptions);
								}
								preferencedOption && selection.select(preferencedOption.value, !0);
						  })
						: this.selections.forEach((selection) => {
								const firstAvailableOption = selection.values.find((value) => value.available);
								firstAvailableOption && selection.select(firstAvailableOption.value, !0);
						  });
				}
				refineSelections(fromSelection) {
					const orderedSelections = [...this.selections];
					orderedSelections.sort((a) => (a.field == fromSelection.field ? 1 : -1)),
						orderedSelections.forEach((selection) => selection.refineValues(this));
					const selectedSelections = this.selections.filter((selection) => selection.selected?.value?.length);
					if (selectedSelections.length) {
						let availableVariants = this.data;
						for (const selectedSelection of selectedSelections)
							availableVariants = availableVariants.filter(
								(variant) => selectedSelection.selected?.value == variant.options[selectedSelection.field].value && variant.available
							);
						1 == availableVariants.length && this.setActive(availableVariants[0]);
					}
				}
			}
			class VariantSelection {
				constructor(variantSelectionData) {
					(this.selected = void 0), (this.previouslySelected = void 0), (this.values = []);
					const { data, config } = variantSelectionData || {},
						{ variants, selectorField } = data || {};
					(this.field = selectorField),
						(this.label = config?.label || selectorField),
						(this.config = config || {}),
						(this.variantsUpdate = () => variants.refineSelections(this)),
						this.refineValues(variants),
						(0, mobx_esm.Gn)(this, { selected: mobx_esm.sH, values: mobx_esm.sH });
				}
				refineValues(variants) {
					const selectedSelections = variants.selections.filter((selection) => selection.field != this.field && selection.selected);
					let availableVariants = variants.data.filter((variant) => variant.available);
					for (const selectedSelection of selectedSelections)
						availableVariants = availableVariants.filter(
							(variant) => selectedSelection.selected?.value == variant.options[selectedSelection.field].value && variant.available
						);
					const newValues = variants.data
						.filter((variant) => variant.options[this.field])
						.reduce((values, variant) => {
							if (!values.some((val) => variant.options[this.field].value == val.value)) {
								const value = variant.options[this.field].value,
									thumbnailImageUrl = variant.mappings.core?.thumbnailImageUrl,
									mappedValue = {
										value,
										label: value,
										thumbnailImageUrl,
										available: Boolean(
											availableVariants.some((availableVariant) => availableVariant.options[this.field].value == variant.options[this.field].value)
										),
									};
								if (
									(this.config.thumbnailBackgroundImages
										? (mappedValue.backgroundImageUrl = thumbnailImageUrl)
										: variant.options[this.field].backgroundImageUrl &&
										  (mappedValue.backgroundImageUrl = variant.options[this.field].backgroundImageUrl),
									variant.options[this.field].background && (mappedValue.background = variant.options[this.field].background),
									this.config.mappings && this.config.mappings && this.config.mappings[value.toString().toLowerCase()])
								) {
									const mapping = this.config.mappings[value.toString().toLowerCase()];
									mapping.label && (mappedValue.label = mapping.label),
										mapping.background && (mappedValue.background = mapping.background),
										mapping.backgroundImageUrl && (mappedValue.backgroundImageUrl = mapping.backgroundImageUrl);
								}
								values.push(mappedValue);
							}
							return values;
						}, []);
					if (this.selected && !newValues.some((val) => val.value == this.selected?.value && val.available))
						if (
							this.selected !== this.previouslySelected &&
							this.previouslySelected &&
							newValues.some((val) => val.value == this.previouslySelected?.value && val.available)
						)
							this.select(this.previouslySelected.value, !0);
						else {
							const availableValues = newValues.filter((val) => val.available);
							if (newValues.length && availableValues.length) {
								const nextAvailableValue = availableValues[0].value;
								this.selected.value !== nextAvailableValue && this.select(nextAvailableValue, !0);
							}
						}
					this.values = newValues;
				}
				reset() {
					(this.selected = void 0), this.values.forEach((val) => (val.available = !1));
				}
				select(value, internalSelection = !1) {
					const valueExist = this.values.find((val) => val.value == value);
					valueExist && (internalSelection || (this.previouslySelected = this.selected), (this.selected = valueExist), this.variantsUpdate());
				}
			}
			class Variant {
				constructor(variantData) {
					(this.type = 'variant'), (this.attributes = {}), (this.mappings = { core: {} }), (this.custom = {});
					const { data } = variantData || {},
						{ variant } = data || {};
					(this.attributes = variant.attributes),
						(this.mappings = variant.mappings),
						(this.options = variant.options),
						(this.available = this.attributes.available || !1),
						(0, mobx_esm.Gn)(this, { attributes: mobx_esm.sH, mappings: mobx_esm.sH, custom: mobx_esm.sH, available: mobx_esm.sH });
				}
			}
			class Child {
				constructor(childData) {
					(this.type = 'child'), (this.attributes = {}), (this.custom = {});
					const { result } = childData?.data || {};
					(this.id = result.id),
						(this.attributes = result.attributes),
						(0, mobx_esm.Gn)(this, { id: mobx_esm.sH, attributes: mobx_esm.sH, custom: mobx_esm.sH });
				}
			}
			function makeVariantSelections(variantConfig, options, results) {
				let filteredResults = results;
				variantConfig.realtime?.filters?.forEach((filter) => {
					'first' == filter && (filteredResults = [filteredResults[0]]),
						'unaltered' == filter &&
							(filteredResults = filteredResults.filter((result) => !result.variants?.selections.some((selection) => selection.previouslySelected)));
				}),
					filteredResults.forEach((result) => {
						'product' == result.type && result.variants?.makeSelections(options);
					});
			}
			class SearchPaginationStore {
				constructor(params) {
					const { services, data, config } = params || {},
						{ search, meta } = data || {},
						{ pagination } = search || {},
						paginationSettings = config?.settings?.pagination;
					(this.services = services),
						(this.controllerConfig = config),
						(this.page = pagination?.page),
						(this.pageSize = pagination?.pageSize),
						(this.totalResults = pagination?.totalResults),
						(this.defaultPageSize = meta?.pagination?.defaultPageSize),
						(this.totalPages = pagination?.totalPages);
					const pageSizeOptions = paginationSettings?.pageSizeOptions || [
						{ label: `Show ${this.defaultPageSize}`, value: this.defaultPageSize },
						{ label: 'Show ' + 2 * this.defaultPageSize, value: 2 * this.defaultPageSize },
						{ label: 'Show ' + 3 * this.defaultPageSize, value: 3 * this.defaultPageSize },
					];
					(this.pageSizeOptions = pageSizeOptions
						.filter((option) => option.value <= 100)
						.map((pageOption) => new PageSizeOption(this.services, this.pageSize, { label: pageOption.label, value: pageOption.value }))),
						(this.pageSizeOption = this.pageSizeOptions.find((option) => option.active)),
						(0, mobx_esm.Gn)(this, {
							page: mobx_esm.sH,
							pageSize: mobx_esm.sH,
							totalResults: mobx_esm.sH,
							totalPages: mobx_esm.sH,
							begin: mobx_esm.EW,
							end: mobx_esm.EW,
							multiplePages: mobx_esm.EW,
							current: mobx_esm.EW,
							first: mobx_esm.EW,
							last: mobx_esm.EW,
							next: mobx_esm.EW,
							previous: mobx_esm.EW,
							getPages: mobx_esm.XI,
							setPageSize: mobx_esm.XI,
						});
				}
				get begin() {
					return this.controllerConfig?.settings?.infinite ? 1 : this.pageSize * (this.page - 1) + 1;
				}
				get end() {
					return this.pageSize * this.page > this.totalResults ? this.totalResults : this.pageSize * this.page;
				}
				get multiplePages() {
					return this.pageSize < this.totalResults;
				}
				get current() {
					return new Page(this.services, { number: this.page, active: !0 });
				}
				get first() {
					return new Page(this.services, { number: 1, active: 1 == this.page });
				}
				get last() {
					return new Page(this.services, { number: this.totalPages, active: this.totalPages == this.page });
				}
				get next() {
					if (this.page < this.totalPages) return new Page(this.services, { number: this.page + 1 });
				}
				get previous() {
					if (this.page > 1) return new Page(this.services, { number: this.page - 1 });
				}
				getPages(min = 5, max) {
					if (!Number.isInteger(min)) return [];
					if (void 0 !== max && Number.isInteger(max)) (min = -Math.abs(min)), (max = Math.abs(max));
					else {
						const surrounding = min - 1;
						let from = this.page,
							to = this.page,
							last = to - from;
						do {
							if (((last = to - from), to < this.totalPages && to++, to - from >= surrounding)) break;
							from > 1 && from--;
						} while (last != to - from && to - from < surrounding);
						(min = from - this.page), (max = to - this.page);
					}
					const pages = [];
					for (let i = this.page + min; i <= this.page + max; i++)
						i > 0 && i <= this.totalPages && pages.push(new Page(this.services, { number: i, active: i == this.page }));
					return pages;
				}
				setPageSize(num) {
					num && this.services.urlManager.remove('page').set('pageSize', num).go();
				}
			}
			class PageSizeOption {
				constructor(services, currentPageSize, option) {
					(this.services = services),
						(this.value = option.value),
						(this.label = option.label),
						(this.url = this.services?.urlManager.remove('page').set('pageSize', option.value)),
						(this.active = Boolean(currentPageSize == option.value));
				}
			}
			class Page {
				constructor(services, page) {
					(this.services = services),
						(this.number = page.number),
						(this.active = page.active || !1),
						(this.url = this.services?.urlManager?.set('page', this.number)),
						(this.key = this.url.href);
				}
			}
			class SearchSortingStore {
				constructor(params) {
					this.options = [];
					const { services, data } = params || {},
						{ meta } = data || {},
						{ sorting, search } = data?.search || {};
					if (services && meta.sortOptions) {
						const activeSort = sorting?.length && sorting[0],
							options = (meta.sortOptions || [])
								.filter((option) => (search?.query ? option : 'field' == option.type))
								.map((option, index) => {
									(option.active = !1),
										activeSort && activeSort.field == option.field && String(activeSort.direction) == String(option.direction)
											? (option.active = !0)
											: activeSort || 0 !== index || (option.active = !0),
										(option.default = !1),
										0 === index && (option.default = !0);
									return new Option(services, option, index);
								});
						(this.options = options), (0, mobx_esm.Gn)(this, { options: mobx_esm.sH, current: mobx_esm.EW });
					}
				}
				get current() {
					return this.options.filter((option) => option.active).pop();
				}
			}
			class Option {
				constructor(services, option, index) {
					(this.active = option.active),
						(this.default = option.default),
						(this.field = option.field),
						(this.label = option.label),
						(this.direction = option.direction),
						(this.type = option.type),
						(this.value = `${option.label}:${option.field}:${option.direction}:${index}`),
						this.default
							? (this.url = services.urlManager.remove('page').remove('sort'))
							: (this.url = services.urlManager.remove('page').set('sort', [{ field: this.field, direction: this.direction }])),
						(0, mobx_esm.Gn)(this, { field: mobx_esm.sH, label: mobx_esm.sH, direction: mobx_esm.sH, type: mobx_esm.sH, value: mobx_esm.sH });
				}
			}
			class AbstractStore {
				constructor(config) {
					(this.custom = {}),
						(this.loading = !1),
						(this.loaded = !1),
						(this.config = config),
						(0, mobx_esm.Gn)(this, { custom: mobx_esm.sH, loading: mobx_esm.sH, loaded: mobx_esm.sH });
				}
				setConfig(newConfig) {
					this.config = newConfig;
				}
				toJSON(thing = this) {
					return (0, mobx_esm.HO)(thing);
				}
			}
			class MetaStore {
				constructor(params) {
					const { meta } = params?.data || {};
					(this.data = meta ?? {}), (this.badges = new MetaBadges(this.data));
				}
			}
			class MetaBadges {
				constructor(metaData) {
					this.groups = {};
					const groups = { overlay: { sections: ['left', 'right'] } };
					Object.keys(groups).map((name) => {
						const group = groups[name],
							sections = group.sections.map((section) => ({
								areas: metaData?.badges?.locations?.[section]?.map((area) => area.tag) || [],
								grid: [],
							})),
							lcmSections = sections.map((section) => section.areas.length).reduce(lcm);
						sections.forEach((section) => {
							section.grid = Array.from({ length: lcmSections }).map(
								(_, index) => section.areas[Math.floor(index / (lcmSections / section.areas.length))]
							);
						});
						const grid = Array.from({ length: lcmSections }).map((_, i) => sections.map((section) => section.grid[i]));
						this.groups[name] = { sections: group.sections, grid };
					});
				}
			}
			function gcd(a, b) {
				return b ? gcd(b, a % b) : a;
			}
			function lcm(a, b) {
				return (a * b) / gcd(a, b);
			}
			class SearchStore extends AbstractStore {
				constructor(config, services) {
					if ((super(config), 'object' != typeof services || 'function' != typeof services.urlManager?.subscribe))
						throw new Error('Invalid service \'urlManager\' passed to SearchStore. Missing "subscribe" function.');
					(this.services = services),
						(this.storage = new StorageStore()),
						(this.history = new SearchHistoryStore({ services: this.services, config: this.config })),
						this.update({ search: {}, meta: {} }),
						(0, mobx_esm.Gn)(this, {
							search: mobx_esm.sH,
							merchandising: mobx_esm.sH,
							facets: mobx_esm.sH,
							filters: mobx_esm.sH,
							results: mobx_esm.sH,
							pagination: mobx_esm.sH,
							sorting: mobx_esm.sH,
						});
				}
				reset() {
					this.update({ search: {}, meta: {} });
				}
				update(data) {
					const { search, meta } = data || {};
					(this.meta = new MetaStore({ data: { meta } })),
						(this.merchandising = new SearchMerchandisingStore.W({ data: { search } })),
						(this.search = new SearchQueryStore({ services: this.services, data: { search } })),
						(this.facets = new SearchFacetStore({
							config: this.config,
							services: this.services,
							stores: { storage: this.storage },
							data: { search, meta: this.meta.data },
						})),
						(this.filters = new SearchFilterStore({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.results = new SearchResultStore({ config: this.config, state: { loaded: this.loaded }, data: { search, meta: this.meta.data } })),
						(this.pagination = new SearchPaginationStore({ config: this.config, services: this.services, data: { search, meta: this.meta.data } })),
						(this.sorting = new SearchSortingStore({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.error = void 0),
						(this.loaded = Boolean(search?.pagination));
				}
			}
			class MiddlewareManager {
				constructor() {
					this.functions = [];
				}
				use(...func) {
					this.functions.push(...func);
				}
				remove(func) {
					const stringyFunc = func.toString();
					this.functions = this.functions.filter((fn) => func.name !== fn.name || fn.toString() != stringyFunc);
				}
				clear() {
					this.functions = [];
				}
				async dispatch(context) {
					const cancelling = await (async function runFunctionsWithAbortWrapper(context, functions) {
						let cancelled = !1;
						return (
							await runFunctions(context, functions, (proceed) => {
								!1 === proceed && (cancelled = !0);
							}),
							cancelled
						);
					})(context || {}, this.functions);
					if (1 == cancelling) throw new Error('cancelled');
				}
			}
			async function runFunctions(context, functions, callback) {
				if (!functions.length) return;
				const func = functions[0],
					proceed = await func(context, async () => {
						await runFunctions(context, functions.slice(1), callback);
					});
				callback(proceed);
			}
			class EventManager {
				constructor() {
					this.events = {};
				}
				async fire(event, context) {
					return this.events[event] && (await this.events[event].dispatch(context)), Promise.resolve();
				}
				on(event, ...func) {
					this.events[event] || (this.events[event] = new MiddlewareManager()), this.events[event].use(...func);
				}
			}
			class CartStore {
				constructor() {
					(this.items = []),
						(0, mobx_esm.Gn)(this, { items: mobx_esm.sH, price: mobx_esm.EW, count: mobx_esm.EW, msrp: mobx_esm.EW }),
						(this.eventManager = new EventManager());
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
			class RecommendationStore extends AbstractStore {
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
						(this.meta = new MetaStore({ data: { meta } })),
						(this.profile = new RecommendationProfileStore({ data: { profile } })),
						(this.results = new SearchResultStore({
							config: this.config,
							state: { loaded: this.loaded },
							data: { search: { results: recommend.results }, meta: this.meta.data },
						})),
						'bundle' == this.profile.type && (this.cart = new CartStore()),
						(this.loaded = !!profile);
				}
			}
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
					search?.query && ((this.query = new AutocompleteQueryStore_Query(services.urlManager, search.query)), (observables.query = mobx_esm.sH)),
						autocomplete?.correctedQuery &&
							(config.settings?.integratedSpellCorrection
								? ((this.correctedQuery = new AutocompleteQueryStore_Query(services.urlManager, autocomplete.correctedQuery)),
								  (observables.correctedQuery = mobx_esm.sH))
								: autocomplete.query &&
								  ((this.originalQuery = new AutocompleteQueryStore_Query(services.urlManager, autocomplete.query)),
								  (observables.originalQuery = mobx_esm.sH))),
						(0, mobx_esm.Gn)(this, observables);
				}
			}
			class AutocompleteQueryStore_Query {
				constructor(urlManager, query) {
					(this.string = query), (this.url = urlManager.set({ query: this.string })), (0, mobx_esm.Gn)(this, { string: mobx_esm.sH });
				}
			}
			class AutocompleteFacetStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { services, state } = params || {},
						facets = new SearchFacetStore({ ...params, services: { ...services, urlManager: services.urlManager.remove('filter') } });
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
			class AutocompleteStore extends AbstractStore {
				constructor(config, services) {
					if ((super(config), 'object' != typeof services || 'function' != typeof services.urlManager?.subscribe))
						throw new Error('Invalid service \'urlManager\' passed to AutocompleteStore. Missing "subscribe" function.');
					(this.services = services),
						(this.state = new AutocompleteStateStore({ services: this.services })),
						(this.storage = new StorageStore()),
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
						const historyStore = new SearchHistoryStore({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
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
					(this.meta = new MetaStore({ data: { meta } })),
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
						(this.filters = new SearchFilterStore({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.results = new SearchResultStore({ config: this.config, state: { loaded: this.loaded }, data: { search, meta: this.meta.data } })),
						((0 === this.results.length && !this.trending.filter((term) => term.active).length) ||
							this.terms?.filter((term) => term.active).length) &&
							this.resetTrending(),
						(this.pagination = new SearchPaginationStore({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.sorting = new SearchSortingStore({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.error = void 0),
						(this.loaded = Boolean(search?.pagination));
				}
			}
			var RangeValueProperties,
				ParamLocationType,
				seamless_immutable_development = __webpack_require__('../../node_modules/seamless-immutable/seamless-immutable.development.js'),
				seamless_immutable_development_default = __webpack_require__.n(seamless_immutable_development);
			class WatcherPool {
				constructor() {
					this.callbacks = [];
				}
				subscribe(cb) {
					return this.callbacks.push(cb), () => (this.callbacks = this.callbacks.filter((_cb) => _cb != cb));
				}
				notify() {
					this.callbacks.forEach((cb) => cb());
				}
			}
			class UrlManager {
				constructor(translator, linker, globalState, localState, watcherPool, omissions = [], detached) {
					(this.linker = linker),
						(this.omissions = omissions),
						(this.detached = detached),
						(this.urlState = seamless_immutable_development_default()({})),
						(this.globalState = seamless_immutable_development_default()({})),
						(this.localState = seamless_immutable_development_default()({})),
						(this.mergedState = seamless_immutable_development_default()({})),
						(this.localState = seamless_immutable_development_default()(localState || {})),
						(this.globalState = seamless_immutable_development_default()(globalState || {})),
						(this.translator = translator);
					const translatorConfig = this.getTranslatorConfig();
					translatorConfig.urlRoot &&
						translatorConfig.settings?.serializeUrlRoot &&
						(this.globalState = this.globalState.merge(
							seamless_immutable_development_default()(this.translator.deserialize(translatorConfig.urlRoot)),
							{ deep: !0, merger: arrayConcatMerger }
						)),
						watcherPool
							? (this.watcherPool = watcherPool)
							: ((this.watcherPool = new WatcherPool()),
							  this.translator.bindExternalEvents instanceof Function && this.translator.bindExternalEvents(() => this.watcherPool.notify())),
						this.subscribe(() => {
							this.refresh();
						}),
						this.refresh();
				}
				without(obj, fullPath, values) {
					const path = fullPath.slice(0, -1),
						lastKey = fullPath[fullPath.length - 1];
					return path.length
						? obj.getIn(path)
							? obj.updateIn(path, (node) => updateNode(lastKey, node))
							: obj
						: values?.length
						? updateNode(lastKey, obj)
						: obj.without(lastKey);
					function updateNode(key, node) {
						return void 0 === node[lastKey]
							? node
							: node[lastKey] instanceof Array
							? values && values.length
								? node.set(
										lastKey,
										node[lastKey].filter((value) => !values.some((removeValue) => compareObjects(value, removeValue)))
								  )
								: node.without(lastKey)
							: 'object' == typeof node
							? node.without(lastKey)
							: node;
					}
				}
				getTranslatorUrl() {
					return this.detached ? this.detached.url : this.translator.getCurrentUrl();
				}
				refresh() {
					(this.prevState = this.mergedState),
						(this.urlState = this.omissions.reduce(
							(state, om) => this.without(state, om.path, om.values),
							seamless_immutable_development_default()(this.translator.deserialize(this.getTranslatorUrl()))
						)),
						(this.mergedState = this.globalState.merge(this.urlState, { deep: !0, merger: arrayConcatMerger })),
						(this.mergedState = this.mergedState.merge(this.localState, { deep: !0, merger: arrayConcatMerger }));
				}
				get state() {
					return this.mergedState;
				}
				unpackPathAndState(stateOrPath, _state) {
					return {
						path: stateOrPath instanceof Array ? stateOrPath : 'string' == typeof stateOrPath ? stateOrPath.split('.') : [],
						state: stateOrPath instanceof Array || 'object' != typeof stateOrPath ? (void 0 === _state ? {} : _state) : stateOrPath,
					};
				}
				set(...args) {
					const { path, state } = this.unpackPathAndState(args[0], args[1]),
						newState = path.length ? this.localState.setIn(path, removeArrayDuplicates(state)) : removeArrayDuplicates(state),
						omissions = removeArrayDuplicates(
							this.omissions.concat(path.length ? { path } : Object.keys(this.urlState).map((key) => ({ path: [key] })))
						);
					return new UrlManager(this.translator, this.linker, this.globalState, newState, this.watcherPool, omissions, this.detached);
				}
				merge(...args) {
					const { path, state } = this.unpackPathAndState(args[0], args[1]),
						newState = path.length
							? this.localState.updateIn(path, (oldState) => {
									if (oldState instanceof Array) {
										const newValues = Array.isArray(state) ? state : [state];
										return removeArrayDuplicates(oldState.concat(newValues));
									}
									if ('object' == typeof oldState)
										return Array.isArray(state)
											? state.length
												? removeArrayDuplicates([oldState].concat(state))
												: oldState
											: oldState.merge(state, { deep: !0, merger: arrayConcatMerger });
									if (void 0 !== oldState) {
										const newValues = (Array.isArray(state) ? state : [state]).filter((value) => !compareObjects(value, oldState));
										return newValues.length ? removeArrayDuplicates([oldState].concat(newValues)) : oldState;
									}
									if (void 0 === oldState) {
										if (this.urlState.getIn(path) instanceof Array && !Array.isArray(state)) return [state];
									}
									return state;
							  })
							: this.localState.merge(state, { deep: !0, merger: arrayConcatMerger });
					return new UrlManager(this.translator, this.linker, this.globalState, newState, this.watcherPool, this.omissions, this.detached);
				}
				remove(_path, values) {
					const { path } = this.unpackPathAndState(_path, {});
					values = void 0 !== values ? (values instanceof Array ? values : [values]) : [];
					const without = this.without(this.localState, path, values),
						omissions = removeArrayDuplicates(this.omissions.concat({ path, values }));
					return new UrlManager(this.translator, this.linker, this.globalState, without, this.watcherPool, omissions, this.detached);
				}
				reset() {
					return (
						this.detached && (this.detached.url = ''),
						new UrlManager(
							this.translator,
							this.linker,
							this.globalState,
							{},
							this.watcherPool,
							Object.keys(this.urlState).map((k) => ({ path: [k] })),
							this.detached
						)
					);
				}
				withConfig(config) {
					return (
						config instanceof Function && (config = config(this.translator.getConfig())),
						new UrlManager(
							new (Object.getPrototypeOf(this.translator).constructor)(config),
							this.linker,
							this.globalState,
							this.localState,
							this.watcherPool,
							this.omissions,
							this.detached
						)
					);
				}
				withGlobals(globals) {
					return (
						(this.globalState = this.globalState.merge(seamless_immutable_development_default()(globals), { deep: !0, merger: arrayConcatMerger })),
						new UrlManager(this.translator, this.linker, this.globalState, this.localState, this.watcherPool, this.omissions, this.detached)
					);
				}
				getTranslatorConfig() {
					return this.translator.getConfig();
				}
				get href() {
					return this.translator.serialize(this.state);
				}
				go(config) {
					this.detached ? (this.detached.url = this.href) : this.translator.go(this.href, config), this.watcherPool.notify();
				}
				detach(reset = !1) {
					return new UrlManager(this.translator, this.linker, this.globalState, this.localState, new WatcherPool(), this.omissions, {
						url: reset ? '' : this.getTranslatorUrl(),
					});
				}
				get link() {
					return this.linker ? this.linker(this) : {};
				}
				subscribe(cb) {
					return this.watcherPool.subscribe(() => {
						const prevState = this.prevState,
							state = this.mergedState;
						cb(prevState, state);
					});
				}
			}
			function removeArrayDuplicates(array) {
				return Array.isArray(array) && array.length
					? array.reduce((accu, item) => (accu.some((keep) => compareObjects(keep, item)) || accu.push(item), accu), [array[0]])
					: array;
			}
			function arrayConcatMerger(current, other) {
				if (current instanceof Array && other instanceof Array) return removeArrayDuplicates([...current, ...other]);
			}
			function compareObjects(obj1, obj2) {
				if (!obj1 && !obj2) return !0;
				if ((!obj1 && obj2) || (obj1 && !obj2)) return !1;
				const typeA = typeof obj1;
				if (typeA !== typeof obj2) return !1;
				if (['string', 'number', 'boolean', 'undefined'].includes(typeA)) return obj1 === obj2;
				const isArrayA = Array.isArray(obj1);
				if (isArrayA !== Array.isArray(obj2)) return !1;
				if (!isArrayA) {
					if (!compareObjects(Object.keys(obj1).sort(), Object.keys(obj2).sort())) return !1;
					let result = !0;
					return (
						Object.keys(obj1).forEach((key) => {
							compareObjects(obj1[key], obj2[key]) || (result = !1);
						}),
						result
					);
				}
				if (obj1.length != obj2.length) return !1;
				for (let i = 0; i < obj1.length; i++) if (!compareObjects(obj1[i], obj2[i])) return !1;
				return !0;
			}
			!(function (RangeValueProperties) {
				(RangeValueProperties.LOW = 'low'), (RangeValueProperties.HIGH = 'high');
			})(RangeValueProperties || (RangeValueProperties = {})),
				(function (ParamLocationType) {
					(ParamLocationType.hash = 'hash'), (ParamLocationType.query = 'query');
				})(ParamLocationType || (ParamLocationType = {}));
			const UrlTranslator_defaultConfig = {
					urlRoot: '',
					settings: { corePrefix: '', customType: ParamLocationType.query, serializeUrlRoot: !0 },
					parameters: {
						core: {
							query: { name: 'q', type: ParamLocationType.query },
							oq: { name: 'oq', type: ParamLocationType.query },
							rq: { name: 'rq', type: ParamLocationType.query },
							tag: { name: 'tag', type: ParamLocationType.query },
							page: { name: 'page', type: ParamLocationType.query },
							pageSize: { name: 'pageSize', type: ParamLocationType.hash },
							sort: { name: 'sort', type: ParamLocationType.hash },
							filter: { name: 'filter', type: ParamLocationType.hash },
							fallbackQuery: { name: 'fallbackQuery', type: ParamLocationType.query },
						},
						custom: {},
					},
				},
				UrlTranslator_CORE_FIELDS = ['query', 'oq', 'fallbackQuery', 'rq', 'tag', 'page', 'pageSize', 'sort', 'filter'];
			class UrlTranslator {
				constructor(config) {
					(this.reverseMapping = {}),
						(this.config = cjs_default()(UrlTranslator_defaultConfig, config || {})),
						Object.keys(this.config.parameters.core).forEach((param) => {
							const coreParam = this.config.parameters.core[param];
							this.config.settings.corePrefix && (coreParam.name = this.config.settings.corePrefix + coreParam.name);
							const paramType = this.config.settings?.coreType;
							paramType &&
								Object.values(ParamLocationType).includes(paramType) &&
								(config?.parameters?.core && config.parameters?.core[param]?.type
									? (coreParam.type = config.parameters?.core[param]?.type)
									: (coreParam.type = paramType)),
								(this.reverseMapping[coreParam.name] = param);
						});
					const implicit = this.config.settings?.customType;
					implicit && !Object.values(ParamLocationType).includes(implicit) && (this.config.settings.customType = ParamLocationType.hash);
				}
				bindExternalEvents(update) {
					window.addEventListener('popstate', update);
				}
				getCurrentUrl() {
					return window.location.search + window.location.hash;
				}
				getConfig() {
					return cjs_default()({}, this.config);
				}
				deserialize(url) {
					const params = this.parseUrlParams(url);
					return this.paramsToState(params);
				}
				parseUrlParams(url) {
					const queryString = (url.includes('?') && (url.split('?').pop() || '').split('#').shift()) || '',
						hashString = (url.includes('#') && url.substring(url.indexOf('#') + 1)) || '';
					return [...this.parseHashString(hashString), ...this.parseQueryString(queryString)];
				}
				parseQueryString(queryString) {
					return (queryString.split('?').pop() || '')
						.split('&')
						.filter((v) => v)
						.map((kvPair) => {
							const [key, value] = kvPair.split('=').map((v) => decodeURIComponent(v.replace(/\+/g, ' ')));
							return { key: key.split('.'), value, type: ParamLocationType.query };
						})
						.filter((param) => {
							const isCoreField = this.reverseMapping[param.key[0]];
							return !isCoreField || (isCoreField && param.value);
						});
				}
				parseHashString(hashString) {
					const params = [];
					return (
						(hashString.split('#').join('/') || '')
							.split('/')
							.filter((v) => v)
							.map((hashEntries) =>
								hashEntries.split(':').map((v) =>
									(function decodeHashComponent(string) {
										'string' == typeof string &&
											((string = (string = string.replace(/%2425/g, '$$25')).replace(/\$25/g, '%')), (string = decodeURIComponent(string)));
										return string;
									})(v)
								)
							)
							.filter((param) => {
								const [key, value] = param,
									isCoreField = this.reverseMapping[key];
								return !isCoreField || (isCoreField && value);
							})
							.forEach((decodedHashEntries) => {
								if (1 == decodedHashEntries.length) params.push({ key: [decodedHashEntries[0]], value: '', type: ParamLocationType.hash });
								else if (decodedHashEntries.length && decodedHashEntries.length >= 2) {
									const isCoreField = this.reverseMapping[decodedHashEntries[0]];
									if (isCoreField && 'filter' == isCoreField && 4 == decodedHashEntries.length) {
										const [path0, path1, low, high] = decodedHashEntries;
										params.push({ key: [path0, path1, 'low'], value: low, type: ParamLocationType.hash }),
											params.push({ key: [path0, path1, 'high'], value: high, type: ParamLocationType.hash });
									} else {
										const [value, ...keys] = decodedHashEntries.reverse();
										params.push({ key: keys.reverse(), value, type: ParamLocationType.hash });
									}
								}
							}),
						params
					);
				}
				paramsToState(params) {
					const coreOtherParams = [],
						coreFilterParams = [],
						coreSortParams = [],
						otherParams = [];
					return (
						params?.forEach((param) => {
							const coreStateKey = this.reverseMapping[param.key[0]],
								coreConfig = this.config.parameters.core[coreStateKey],
								customStateKey = this.config.parameters.custom[param.key[0]];
							if (coreStateKey)
								switch (coreStateKey) {
									case 'filter':
										coreConfig.type == param.type && coreFilterParams.push(param);
										break;
									case 'sort':
										coreConfig.type == param.type && coreSortParams.push(param);
										break;
									default:
										coreConfig.type == param.type && coreOtherParams.push(param);
								}
							else
								UrlTranslator_CORE_FIELDS.includes(param.key[0]) ||
									(customStateKey || (this.config.parameters.custom[param.key[0]] = { type: param.type || this.config.settings.customType }),
									otherParams.push(param));
						}),
						{
							...this.parseCoreOther(coreOtherParams),
							...this.parseCoreFilter(coreFilterParams),
							...this.parseCoreSort(coreSortParams),
							...this.parseOther(otherParams),
						}
					);
				}
				parseCoreOther(otherParams) {
					const state = {},
						numberTypeParams = ['page', 'pageSize'];
					return otherParams
						? (otherParams.forEach((param) => {
								const coreKey = this.reverseMapping[param.key[0]];
								if (numberTypeParams.includes(coreKey)) {
									const numValue = Number(param.value);
									(('page' == coreKey && numValue > 1) || 'page' != coreKey) && (state[coreKey] = numValue);
								} else state[coreKey] = param.value;
						  }),
						  state)
						: {};
				}
				parseCoreFilter(filterParams) {
					const valueFilterParams = filterParams.filter((p) => 2 == p.key.length),
						rangeFilterParams = filterParams.filter((p) => 3 == p.key.length),
						valueFilters = valueFilterParams.reduce((state, param) => {
							const currentValue = (state.filter || {})[param.key[1]] || [];
							return { filter: { ...state.filter, [param.key[1]]: [...(Array.isArray(currentValue) ? currentValue : [currentValue]), param.value] } };
						}, {}),
						rangeFilters = rangeFilterParams.reduce((state, param, index) => {
							let newState = state;
							const nextRangeParam = rangeFilterParams[index + 1];
							if (
								index % 2 == 0 &&
								nextRangeParam &&
								nextRangeParam.key[1] == param.key[1] &&
								param.key[2] == RangeValueProperties.LOW &&
								nextRangeParam.key[2] == RangeValueProperties.HIGH
							) {
								const currentValue = (state.filter || {})[param.key[1]] || [];
								newState = {
									filter: {
										...state.filter,
										[param.key[1]]: [
											...(Array.isArray(currentValue) ? currentValue : [currentValue]),
											{
												[RangeValueProperties.LOW]: isNaN(+param.value) ? null : +param.value,
												[RangeValueProperties.HIGH]: isNaN(+nextRangeParam.value) ? null : +nextRangeParam.value,
											},
										],
									},
								};
							}
							return newState;
						}, {});
					return { ...(valueFilters.filter || rangeFilters.filter ? { filter: { ...valueFilters.filter, ...rangeFilters.filter } } : {}) };
				}
				parseCoreSort(sortParams) {
					return sortParams.length ? { sort: sortParams.map((param) => ({ field: param.key[1], direction: param.value })) } : {};
				}
				parseOther(otherParams) {
					const state = {};
					return (
						otherParams.forEach((param) => {
							let node = state;
							param.key.forEach((key, i) => {
								i == param.key.length - 1
									? ((node[key] = node[key] || []), param.value && node[key].push(param.value))
									: ((node[key] = node[key] || {}), (node = node[key]));
							});
						}),
						state
					);
				}
				serialize(state) {
					const root = this.config.urlRoot.includes('?')
							? this.config.urlRoot.split('?')[0]
							: this.config.urlRoot.includes('#')
							? this.config.urlRoot.split('#')[0]
							: this.config.urlRoot || window.location.pathname,
						params = this.stateToParams(state),
						queryParams = params.filter((p) => p.type == ParamLocationType.query),
						hashParams = params.filter((p) => p.type == ParamLocationType.hash);
					return `${root}${
						queryParams.length
							? '?' +
							  queryParams
									.map((param) => encodeURIComponent(param.key.join('.')) + (param.value ? '=' + encodeURIComponent(param.value) : ''))
									.join('&')
							: ''
					}${
						hashParams.length
							? '#/' +
							  hashParams
									.map(
										(param) => param.key.map((k) => encodeHashComponent(k)).join(':') + (param.value ? ':' + encodeHashComponent(param.value) : '')
									)
									.join('/')
							: ''
					}`;
				}
				stateToParams(state) {
					return [
						...this.encodeOther(state),
						...this.encodeCoreOther(state, ['filter', 'sort']),
						...this.encodeCoreFilters(state),
						...this.encodeCoreSorts(state),
					];
				}
				encodeCoreFilters(state) {
					const filterConfig = this.config.parameters.core.filter;
					return state.filter && filterConfig
						? Object.keys(state.filter).flatMap((key) => {
								if (!state.filter || !state.filter[key]) return [];
								const filter = state.filter[key];
								return (filter instanceof Array ? filter : [filter]).flatMap((value) => {
									if ('string' == typeof value || 'number' == typeof value || 'boolean' == typeof value)
										return [{ key: [filterConfig.name, key], value: '' + value, type: filterConfig.type }];
									if ('object' == typeof value && void 0 !== value[RangeValueProperties.LOW] && void 0 !== value[RangeValueProperties.HIGH]) {
										if (filterConfig.type == ParamLocationType.query)
											return [
												{
													key: [filterConfig.name, key, RangeValueProperties.LOW],
													value: '' + (value[RangeValueProperties.LOW] ?? '*'),
													type: filterConfig.type,
												},
												{
													key: [filterConfig.name, key, RangeValueProperties.HIGH],
													value: '' + (value[RangeValueProperties.HIGH] ?? '*'),
													type: filterConfig.type,
												},
											];
										if (filterConfig.type == ParamLocationType.hash)
											return [
												{
													key: [filterConfig.name, key, '' + (value[RangeValueProperties.LOW] ?? '*')],
													value: '' + (value[RangeValueProperties.HIGH] ?? '*'),
													type: filterConfig.type,
												},
											];
									}
									return [];
								});
						  })
						: [];
				}
				encodeCoreSorts(state) {
					const sortConfig = this.config.parameters.core.sort;
					return state.sort && sortConfig
						? (state.sort instanceof Array ? state.sort : [state.sort]).map((sort) => ({
								key: [sortConfig.name, sort.field],
								value: sort.direction,
								type: sortConfig.type,
						  }))
						: [];
				}
				encodeCoreOther(state, except) {
					const params = [];
					return (
						Object.keys(state)
							.sort(function (a, b) {
								return UrlTranslator_CORE_FIELDS.indexOf(a) - UrlTranslator_CORE_FIELDS.indexOf(b);
							})
							.map((param) => {
								if (UrlTranslator_CORE_FIELDS.includes(param) && !except.includes(param)) {
									const paramConfig = this.config.parameters.core[param];
									('page' == param && 1 == state[param]) ||
										params.push({ key: [paramConfig.name], value: '' + state[param], type: paramConfig.type });
								}
							}),
						params
					);
				}
				encodeOther(state) {
					let params = [];
					const addRecursive = (obj, currentPath) => {
						Object.keys(obj).forEach((key) => {
							if (0 == currentPath.length && UrlTranslator_CORE_FIELDS.includes(key)) return;
							const value = obj[key];
							if (value instanceof Array) {
								const customConfig = this.config.parameters.custom[currentPath[0] || key],
									type = customConfig?.type || this.config.settings.customType;
								params = value.length
									? params.concat(value.map((v) => ({ key: [...currentPath, key], value: v, type })))
									: params.concat({ key: [...currentPath, key], value: '', type });
							} else if ('object' == typeof value && Object.keys(value || {}).length) addRecursive(value, [...currentPath, key]);
							else {
								const customConfig = this.config.parameters.custom[currentPath[0] || key],
									type = customConfig?.type || this.config.settings.customType,
									stringValue = 'object' == typeof value ? void 0 : value;
								params = params.concat([{ key: [...currentPath, key], value: stringValue, type }]);
							}
						});
					};
					return addRecursive(state, []), params;
				}
				go(url, config) {
					url != this.getCurrentUrl() && ('replace' == config?.history ? history.replaceState(null, '', url) : history.pushState(null, '', url));
				}
			}
			function encodeHashComponent(string) {
				return 'string' == typeof string && (string = (string = encodeURIComponent(string)).replace(/%/g, '$$25')), string;
			}
			function reactLinker(urlManager) {
				return {
					href: urlManager.href,
					onClick: (ev) => {
						urlManager?.detached || ev?.preventDefault(), urlManager.go();
					},
				};
			}
			class Profiler {
				constructor(namespace) {
					(this.namespace = namespace || ''), (this.profiles = []);
				}
				setNamespace(namespace) {
					this.namespace || (this.namespace = namespace);
				}
				create({ type, name, context }) {
					if (!name) throw new Error('Profile name is required.');
					const profile = new Profile(this.namespace, { type, name, context });
					return this.profiles.push(profile), profile;
				}
			}
			class Profile {
				constructor(namespace, { type, name, context }) {
					(this.status = 'pending'),
						(this.time = { date: 0, begin: 0, end: 0, run: 0 }),
						(this.namespace = namespace),
						(this.type = type),
						(this.name = name),
						(this.context = context);
				}
				start() {
					return this.time.begin || ((this.time.date = Date.now()), (this.time.begin = window.performance.now()), (this.status = 'started')), this;
				}
				stop() {
					return (
						!this.time.end &&
							this.time.begin &&
							((this.time.date = Date.now()),
							(this.time.end = window.performance.now()),
							(this.time.run = +(this.time.end - this.time.begin).toFixed(3)),
							(this.status = 'finished')),
						this
					);
				}
			}
			const colors = {
					blue: '#3379c1',
					bluelight: '#688BA3',
					bluedark: '#1B3141',
					bluegreen: '#318495',
					grey: '#61717B',
					green: '#507B43',
					greendark: '#63715F',
					greenblue: '#46927D',
					indigo: '#4c3ce2',
					orange: '#ecaa15',
					orangelight: '#ff6600',
					orangedark: '#c59600',
					red: '#cc1212',
					redlight: '#f30707',
					reddark: '#8E111C',
					yellow: '#d1d432',
				},
				emoji = {
					bang: String.fromCodePoint(8252),
					bright: String.fromCodePoint(128262),
					check: String.fromCodePoint(10004),
					clock: String.fromCodePoint(128342),
					cloud: String.fromCodePoint(9729),
					dim: String.fromCodePoint(128261),
					gear: String.fromCodePoint(9881),
					interobang: String.fromCodePoint(8265),
					lightning: String.fromCodePoint(9889),
					magic: String.fromCodePoint(10024),
					rocket: String.fromCodePoint(128640),
					search: String.fromCodePoint(128269),
					snap: String.fromCodePoint(128165),
					ufo: String.fromCodePoint(128760),
					vortex: String.fromCodePoint(127744),
					warning: String.fromCodePoint(9888),
				};
			class Logger {
				constructor(config) {
					(this.mode = AppMode.production),
						(this.emoji = emoji),
						(this.colors = colors),
						(this.prefix = ''),
						(this.prefix = config?.prefix || ''),
						(this.mode = config?.mode || AppMode.production);
				}
				setNamespace(group) {
					this.prefix = ` [${group}] :: `;
				}
				error(...params) {
					let text = '',
						rest = params;
					params.length && 'string' == typeof params[0] && ([text, ...rest] = params),
						console.log(
							`%c ${emoji.bang} %c${this.prefix}${text}`,
							`color: ${colors.red}; font-weight: bold; font-size: 14px; line-height: 12px;`,
							`color: ${colors.red}; font-weight: bold;`,
							...rest
						);
				}
				warn(...params) {
					let text = '',
						rest = params;
					params.length && 'string' == typeof params[0] && ([text, ...rest] = params),
						console.log(
							`%c ${emoji.warning} %c${this.prefix}%c${text}`,
							`color: ${colors.yellow}; font-weight: bold; font-size: 14px; line-height: 12px;`,
							`color: ${colors.yellow}; font-weight: normal;`,
							`color: ${colors.yellow}; font-weight: bold;`,
							...rest
						);
				}
				image({ url, width, height }, ...params) {
					const styles_size = `font-size: 1px; padding: ${height || width} ${width || height};`,
						styles_background = `background: url("${url}") no-repeat; background-size: contain;`;
					this.dev('%c...', `${styles_size} ${styles_background}`, ...params);
				}
				imageText({ url, text = '', style }, ...params) {
					const styles_background = `margin-left: 6px; background: url("${url}") no-repeat; background-size: contain;`,
						styles_custom = style;
					let imgText = text,
						rest = params;
					!imgText && params?.length && ([imgText, ...rest] = params),
						this.dev(`%c ${'  ' + this.prefix}${imgText}`, `${styles_background} ${styles_custom}`, ...rest);
				}
				debug(...params) {
					let text = '',
						rest = params;
					params.length && 'string' == typeof params[0] && ([text, ...rest] = params),
						this.dev(
							`%c ${emoji.interobang} %c${this.prefix}${text}`,
							`color: ${colors.orangelight}; font-weight: bold; font-size: 14px; line-height: 12px;`,
							`color: ${colors.orangelight}; font-weight: bold;`,
							...rest
						);
				}
				profile(profile, ...params) {
					this.dev(
						`%c ${emoji.gear} %c${this.prefix}%c${profile.type}  %c~  ${profile.name}  ::  %c${profile.status.toUpperCase()}${
							'finished' == profile.status ? '  ::  %c' + profile.time.run + 'ms' : ''
						}`,
						`color: ${colors.orange}; font-size: 14px; line-height: 12px;`,
						`color: ${colors.orange};`,
						`color: ${colors.orange}; font-style: italic;`,
						`color: ${colors.orange};`,
						`color: ${colors.orange}; font-weight: bold;`,
						`color: ${colors.grey};`,
						...params
					);
				}
				dev(...params) {
					this.mode === AppMode.development && console.log(...params);
				}
			}
			var v4 = __webpack_require__('../../node_modules/uuid/dist/esm-browser/v4.js');
			function charsParams(params) {
				if ('object' != typeof params) throw new Error('function requires an object');
				return Object.keys(params).reduce((count, key) => {
					const keyLength = key.length,
						value = params[key];
					return Array.isArray(value)
						? count + value.reduce((length, val) => length + keyLength + 1 + ('' + val).length, 0)
						: 'object' == typeof value
						? count + keyLength + 1 + charsParams(value)
						: 'string' == typeof value || 'number' == typeof value
						? count + keyLength + 1 + ('' + value).length
						: count + keyLength;
				}, 1);
			}
			const { version } = { version: '1.1.11' };
			function removeUndefined(variables) {
				return (
					Object.keys(variables).forEach((key) => {
						void 0 === variables[key] && delete variables[key];
					}),
					variables
				);
			}
			class TrackEvent {
				constructor(payload) {
					if (((payload.event = payload.event), !payload.context || !payload.event))
						throw 'TrackEvent: object parameter required a valid `context` BeaconContext and `event` ProductClickEvent objects';
					if (!payload.event?.intellisuggestData || !payload.event?.intellisuggestSignature)
						throw 'TrackEvent: object parameter `event` ProductClickEvent object requires valid intellisuggestData and intellisuggestSignature values. These are the corresponding attributes in the Searchspring API response.';
					(this.intellisuggestData = payload.event.intellisuggestData),
						(this.intellisuggestSignature = payload.event.intellisuggestSignature),
						(this.href = payload.event?.href || ''),
						(this.endpoint = `https://${payload.context.website.trackingCode}.a.searchspring.io/api/track/track.json`),
						(this.src =
							this.endpoint +
							`?d=${encodeURIComponent(this.intellisuggestData)}` +
							`&s=${encodeURIComponent(this.intellisuggestSignature)}` +
							`&u=${encodeURIComponent(this.href || '')}`),
						window.document.referrer && (this.src += `&r=${encodeURIComponent(window.document.referrer)}`),
						(this.img = new Image(1, 1)),
						(this.img.src = this.src);
				}
			}
			class PixelEvent {
				constructor(payload) {
					switch (
						((this.endpoint = 'https://d3cgm8py10hi0z.cloudfront.net/is.gif'),
						(this.src =
							this.endpoint +
							`?s=${encodeURIComponent(payload?.context?.website?.trackingCode || '')}` +
							`&u=${encodeURIComponent(payload?.context?.userId || '')}&ce=` +
							(featureFlags_cookies ? '1' : '0') +
							`&pt=${encodeURIComponent(document.title)}&v=1` +
							`&x=${Math.floor(2147483647 * Math.random())}` +
							(window.document.referrer ? `&r=${encodeURIComponent(window.document.referrer)}` : '')),
						payload?.context?.currency?.code && (this.src += `&currencyCode=${encodeURIComponent(payload?.context?.currency?.code)}`),
						payload.category)
					) {
						case BeaconCategory.PAGEVIEW:
							(this.event = payload.event), (this.src += '&a=viewItem'), this.event.sku && (this.src += `&sku=${encodeURIComponent(this.event.sku)}`);
							break;
						case BeaconCategory.CARTVIEW:
							(this.event = payload.event),
								(this.src += '&a=basket'),
								this.event.items.forEach((item) => {
									item?.sku &&
										(this.src += `&item=${encodeURIComponent(item.sku)};${encodeURIComponent(item?.qty || '')};${encodeURIComponent(
											item?.price || ''
										)};`);
								});
							break;
						case BeaconCategory.ORDERVIEW:
							const { orderId, total, transactionTotal, city, state, country, items } = (this.event = payload.event);
							(this.src += '&a=sale'),
								orderId && (this.src += `&orderId=${encodeURIComponent(orderId)}`),
								total && (this.src += `&total=${encodeURIComponent(total)}`),
								transactionTotal && (this.src += `&transactionTotal=${encodeURIComponent(transactionTotal)}`),
								city && (this.src += `&city=${encodeURIComponent(city)}`),
								state && (this.src += `&state=${encodeURIComponent(state)}`),
								country && (this.src += `&country=${encodeURIComponent(country)}`),
								items.forEach((item) => {
									item?.sku &&
										(this.src += `&item=${encodeURIComponent(item.sku)};${encodeURIComponent(item?.qty || '')};${encodeURIComponent(
											item?.price || ''
										)};`);
								});
					}
					this.src.includes('&a=') && ((this.img = new Image(1, 1)), (this.img.src = this.src));
				}
			}
			class BeaconEvent {
				constructor(payload, config) {
					(this.type = payload.type),
						(this.category = payload.category),
						(this.context = payload.context),
						(this.meta = payload.meta),
						(this.event = payload.event),
						(this.id = payload.id),
						(this.pid = payload.pid),
						(this.meta = { initiator: { lib: 'searchspring/snap', 'lib.version': version, 'lib.framework': config.framework } }),
						(this.id = (0, v4.A)());
				}
			}
			const COOKIE_DOMAIN =
					('undefined' != typeof window && window.location.hostname && '.' + window.location.hostname.replace(/^www\./, '')) || void 0,
				Tracker_defaultConfig = { id: 'track', framework: 'snap', mode: AppMode.production };
			class Tracker {
				constructor(globals, config) {
					if (
						((this.mode = AppMode.production),
						(this.targeters = []),
						(this.track = {
							event: (payload) => {
								const event = {
									type: payload?.type || BeaconType.CUSTOM,
									category: payload?.category || BeaconCategory.CUSTOM,
									context: payload?.context ? cjs_default()(this.context, payload.context) : this.context,
									event: payload.event,
									pid: payload?.pid || void 0,
								};
								if (this.doNotTrack.find((entry) => entry.type === event.type && entry.category === event.category)) return;
								const beaconEvent = new BeaconEvent(event, this.config);
								return this.sendEvents([beaconEvent]), beaconEvent;
							},
							error: (data, siteId) => {
								if (!data?.stack && !data?.message) return;
								let context = this.context;
								siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
								const { href, filename, stack, message, colno, lineno, errortimestamp, details } = data,
									payload = {
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
								return payload.event.message?.includes('Profile is currently paused') ||
									!payload.event.href ||
									payload.event.href.includes('//localhost') ||
									payload.event.href.includes('//snapui.searchspring.io/')
									? void 0
									: this.track.event(payload);
							},
							shopper: {
								login: (data, siteId) => {
									if (!getFlags().cookies()) return;
									if (!data.id)
										return void console.error(
											'tracker.shopper.login event: requires a valid shopper ID parameter. Example: tracker.shopper.login({ id: "1234" })'
										);
									data.id = `${data.id}`;
									let context = this.context;
									siteId && ((context = cjs_default()(context, { context: { website: { trackingCode: siteId } } })), (context.shopperId = data.id));
									if (this.getShopperId() != data.id) {
										cookies.set('ssShopperId', data.id, 'Lax', 31536e6, COOKIE_DOMAIN), (this.context.shopperId = data.id), this.sendPreflight();
										const payload = {
											type: BeaconType.LOGIN,
											category: BeaconCategory.PERSONALIZATION,
											context,
											event: { userId: this.context.userId, shopperId: data.id },
										};
										return this.track.event(payload);
									}
								},
							},
							product: {
								view: (data, siteId) => {
									if (!(data?.uid || data?.sku || data?.childUid || data?.childSku))
										return void console.error(
											'track.product.view event: requires a valid uid, sku and/or childUid, childSku. \nExample: track.product.view({ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a" })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const payload = {
											type: BeaconType.PRODUCT,
											category: BeaconCategory.PAGEVIEW,
											context,
											event: {
												uid: data?.uid ? `${data.uid}` : void 0,
												sku: data?.sku ? `${data.sku}` : void 0,
												childUid: data?.childUid ? `${data.childUid}` : void 0,
												childSku: data?.childSku ? `${data.childSku}` : void 0,
											},
										},
										event = this.track.event(payload);
									if (event) {
										const sku = data?.childSku || data?.childUid || data?.sku || data?.uid;
										if (sku) {
											const lastViewedProducts = this.cookies.viewed.get(),
												uniqueCartItems = Array.from(new Set([...lastViewedProducts, sku])).map((item) => item.trim());
											cookies.set('ssViewedProducts', uniqueCartItems.slice(0, 20).join(','), 'Lax', 220752e6, COOKIE_DOMAIN),
												lastViewedProducts.includes(sku) || this.sendPreflight();
										}
										return data?.sku && new PixelEvent({ ...payload, event: { sku: data.sku, id: data.uid } }), event;
									}
								},
								click: (data, siteId) => {
									if (!data?.intellisuggestData || !data?.intellisuggestSignature)
										return void console.error(
											'track.product.click event: object parameter requires a valid intellisuggestData and intellisuggestSignature. \nExample: track.click.product({ intellisuggestData: "eJwrTs4tNM9jYCjKTM8oYXDWdQ3TDTfUDbIwMDVjMARCYwMQSi_KTAEA9IQKWA", intellisuggestSignature: "9e46f9fd3253c267fefc298704e39084a6f8b8e47abefdee57277996b77d8e70" })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const payload = {
										type: BeaconType.CLICK,
										category: BeaconCategory.INTERACTION,
										context,
										event: {
											intellisuggestData: data.intellisuggestData,
											intellisuggestSignature: data.intellisuggestSignature,
											href: data?.href ? `${data.href}` : void 0,
										},
									};
									return new TrackEvent(payload), this.track.event(payload);
								},
							},
							cart: {
								view: (data, siteId) => {
									if (!Array.isArray(data?.items) || !data?.items.length)
										return void console.error(
											'track.view.cart event: parameter must be an array of cart items. \nExample: track.view.cart({ items: [{ id: "123", sku: "product123", childSku: "product123_a", qty: "1", price: "9.99" }] })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const items = data.items.map((item, index) => {
											if (!(item?.qty && item?.price && (item?.uid || item?.sku || item?.childUid || item?.childSku)))
												return void console.error(
													`track.view.cart event: item at index ${index} requires a valid qty, price, and (uid and/or sku and/or childUid and/or childSku.) \nExample: track.view.cart({ items: [{ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a", qty: "1", price: "9.99" }] })`
												);
											const product = { qty: `${item.qty}`, price: `${item.price}` };
											return (
												item?.uid && (product.uid = `${item.uid}`),
												item?.sku && (product.sku = `${item.sku}`),
												item?.childUid && (product.childUid = `${item.childUid}`),
												item?.childSku && (product.childSku = `${item.childSku}`),
												product
											);
										}),
										payload = { type: BeaconType.CART, category: BeaconCategory.CARTVIEW, context, event: { items } },
										event = this.track.event(payload);
									if (event) {
										if (items.length) {
											const products = items.map((item) => item?.childSku || item?.childUid || item?.sku || item?.uid || '').filter((sku) => sku);
											this.cookies.cart.add(products);
										}
										return new PixelEvent(payload), event;
									}
								},
							},
							order: {
								transaction: (data, siteId) => {
									if (!data?.items || !Array.isArray(data.items) || !data.items.length)
										return void console.error(
											'track.order.transaction event: object parameter must contain `items` array of cart items. \nExample: order.transaction({ order: { id: "1001", total: "10.71", transactionTotal: "9.99", city: "Los Angeles", state: "CA", country: "US" }, items: [{ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a", qty: "1", price: "9.99" }] })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const items = data.items.map((item, index) => {
											if (!(item?.qty && item?.price && (item?.uid || item?.sku || item?.childUid || item?.childSku)))
												return void console.error(
													`track.order.transaction event: object parameter \`items\`: item at index ${index} requires a valid qty, price, and (id or sku and/or childSku.) \nExample: order.view({ items: [{ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a", qty: "1", price: "9.99" }] })`
												);
											const product = { qty: `${item.qty}`, price: `${item.price}` };
											return (
												item?.uid && (product.uid = `${item.uid}`),
												item?.sku && (product.sku = `${item.sku}`),
												item?.childUid && (product.childUid = `${item.childUid}`),
												item?.childSku && (product.childSku = `${item.childSku}`),
												product
											);
										}),
										eventPayload = {
											orderId: data?.order?.id ? `${data.order.id}` : void 0,
											total: data?.order?.total ? `${data.order.total}` : void 0,
											transactionTotal: data?.order?.transactionTotal ? `${data.order.transactionTotal}` : void 0,
											city: data?.order?.city ? `${data.order.city}` : void 0,
											state: data?.order?.state ? `${data.order.state}` : void 0,
											country: data?.order?.country ? `${data.order.country}` : void 0,
											items,
										},
										payload = { type: BeaconType.ORDER, category: BeaconCategory.ORDERVIEW, context, event: eventPayload },
										event = this.track.event(payload);
									return event ? (this.cookies.cart.clear(), new PixelEvent(payload), event) : void 0;
								},
							},
						}),
						(this.updateContext = (key, value) => {
							value && (this.context[key] = value);
						}),
						(this.setCurrency = (currency) => {
							currency?.code && (this.context.currency = currency);
						}),
						(this.getUserId = () => {
							let userId;
							try {
								if (getFlags().cookies())
									(userId = cookies.get('_isuid') || cookies.get('ssUserId') || (0, v4.A)()),
										cookies.set('ssUserId', userId, 'Lax', 31536e6, COOKIE_DOMAIN),
										cookies.set('_isuid', userId, 'Lax', 31536e6, COOKIE_DOMAIN);
								else {
									if (!getFlags().storage()) throw 'unsupported features';
									(userId = window.localStorage.getItem('ssUserId') || (0, v4.A)()), window.localStorage.setItem('ssUserId', userId);
								}
							} catch (e) {
								console.error('Failed to persist user id to cookie or local storage:', e);
							}
							return userId;
						}),
						(this.getSessionId = () => {
							let sessionId;
							if (getFlags().storage())
								try {
									(sessionId = window.sessionStorage.getItem('ssSessionIdNamespace') || (0, v4.A)()),
										window.sessionStorage.setItem('ssSessionIdNamespace', sessionId),
										getFlags().cookies() && cookies.set('ssSessionIdNamespace', sessionId, 'Lax', 0, COOKIE_DOMAIN);
								} catch (e) {
									console.error('Failed to persist session id to session storage:', e);
								}
							else
								getFlags().cookies() &&
									((sessionId = cookies.get('ssSessionIdNamespace')),
									sessionId || ((sessionId = (0, v4.A)()), cookies.set('ssSessionIdNamespace', sessionId, 'Lax', 0, COOKIE_DOMAIN)));
							return sessionId;
						}),
						(this.getShopperId = () => {
							const shopperId = cookies.get('ssShopperId');
							if (shopperId) return shopperId;
						}),
						(this.sendPreflight = () => {
							const userId = this.getUserId(),
								siteId = this.context.website.trackingCode,
								shopper = this.getShopperId(),
								cart = this.cookies.cart.get(),
								lastViewed = this.cookies.viewed.get();
							if (userId && 'string' == typeof userId && siteId && (shopper || cart.length || lastViewed.length)) {
								const preflightParams = { userId, siteId };
								let queryStringParams = `?userId=${encodeURIComponent(userId)}&siteId=${encodeURIComponent(siteId)}`;
								shopper && ((preflightParams.shopper = shopper), (queryStringParams += `&shopper=${encodeURIComponent(shopper)}`)),
									cart.length &&
										((preflightParams.cart = cart), (queryStringParams += cart.map((item) => `&cart=${encodeURIComponent(item)}`).join(''))),
									lastViewed.length &&
										((preflightParams.lastViewed = lastViewed),
										(queryStringParams += lastViewed.map((item) => `&lastViewed=${encodeURIComponent(item)}`).join('')));
								const endpoint = `${
										this.config.requesters?.personalization?.origin || `https://${siteId}.a.searchspring.io`
									}/api/personalization/preflightCache`,
									xhr = new XMLHttpRequest();
								charsParams(preflightParams) > 1024
									? (xhr.open('POST', endpoint), xhr.setRequestHeader('Content-Type', 'application/json'), xhr.send(JSON.stringify(preflightParams)))
									: (xhr.open('GET', endpoint + queryStringParams), xhr.send());
							}
						}),
						(this.cookies = {
							cart: {
								get: () => {
									const items = cookies.get('ssCartProducts');
									return items ? items.split(',') : [];
								},
								set: (items) => {
									if (items.length) {
										const cartItems = items.map((item) => item.trim()),
											uniqueCartItems = Array.from(new Set(cartItems));
										cookies.set('ssCartProducts', uniqueCartItems.join(','), 'Lax', 0, COOKIE_DOMAIN);
										cartItems.filter((item) => items.includes(item)).length !== items.length && this.sendPreflight();
									}
								},
								add: (items) => {
									if (items.length) {
										const currentCartItems = this.cookies.cart.get(),
											itemsToAdd = items.map((item) => item.trim()),
											uniqueCartItems = Array.from(new Set([...currentCartItems, ...itemsToAdd]));
										cookies.set('ssCartProducts', uniqueCartItems.join(','), 'Lax', 0, COOKIE_DOMAIN);
										currentCartItems.filter((item) => itemsToAdd.includes(item)).length !== itemsToAdd.length && this.sendPreflight();
									}
								},
								remove: (items) => {
									if (items.length) {
										const currentCartItems = this.cookies.cart.get(),
											itemsToRemove = items.map((item) => item.trim()),
											updatedItems = currentCartItems.filter((item) => !itemsToRemove.includes(item));
										cookies.set('ssCartProducts', updatedItems.join(','), 'Lax', 0, COOKIE_DOMAIN);
										currentCartItems.length !== updatedItems.length && this.sendPreflight();
									}
								},
								clear: () => {
									this.cookies.cart.get().length && (cookies.unset('ssCartProducts', COOKIE_DOMAIN), this.sendPreflight());
								},
							},
							viewed: {
								get: () => {
									const items = cookies.get('ssViewedProducts');
									return items ? items.split(',') : [];
								},
							},
						}),
						(this.sendEvents = (eventsToSend) => {
							if (this.mode !== AppMode.production) return;
							const savedEvents = JSON.parse(this.localStorage.get('ssBeaconPool') || '[]');
							if (eventsToSend) {
								const eventsClone = [];
								savedEvents.forEach((_event, idx) => {
									eventsClone.push(Object.assign({}, _event)), delete eventsClone[idx].id, delete eventsClone[idx].pid;
								});
								const stringyEventsClone = JSON.stringify(eventsClone);
								eventsToSend.forEach((event, idx) => {
									const newEvent = Object.assign({}, event);
									delete newEvent.id,
										delete newEvent.pid,
										-1 == stringyEventsClone.indexOf(JSON.stringify(newEvent)) && savedEvents.push({ ...eventsToSend[idx] });
								}),
									this.localStorage.set('ssBeaconPool', JSON.stringify(savedEvents));
							}
							clearTimeout(this.isSending),
								(this.isSending = window.setTimeout(() => {
									if (savedEvents.length) {
										const xhr = new XMLHttpRequest(),
											origin = this.config.requesters?.beacon?.origin || 'https://beacon.searchspring.io';
										xhr.open('POST', `${origin}/beacon`),
											xhr.setRequestHeader('Content-Type', 'application/json'),
											xhr.send(JSON.stringify(1 == savedEvents.length ? savedEvents[0] : savedEvents));
									}
									this.localStorage.set('ssBeaconPool', JSON.stringify([]));
								}, 200));
						}),
						'object' != typeof globals || 'string' != typeof globals.siteId)
					)
						throw new Error('Invalid config passed to tracker. The "siteId" attribute must be provided.');
					(this.config = cjs_default()(Tracker_defaultConfig, config || {})),
						(this.doNotTrack = this.config.doNotTrack || []),
						Object.values(AppMode).includes(this.config.mode) && (this.mode = this.config.mode),
						(this.globals = globals),
						(this.localStorage = new StorageStore({ type: 'local', key: `ss-${this.config.id}` })),
						this.localStorage.set('siteId', this.globals.siteId),
						(this.context = {
							userId: this.getUserId() || '',
							sessionId: this.getSessionId(),
							shopperId: this.getShopperId(),
							pageLoadId: (0, v4.A)(),
							website: { trackingCode: this.globals.siteId },
						}),
						this.globals.currency?.code && (this.context.currency = this.globals.currency),
						window.searchspring?.tracker ||
							((window.searchspring = window.searchspring || {}), (window.searchspring.tracker = this), (window.searchspring.version = version)),
						setTimeout(() => {
							this.targeters.push(
								new DomTargeter([{ selector: 'script[type^="searchspring/track/"]', emptyTarget: !1 }], (target, elem) => {
									const { item, items, siteId, shopper, order, type, currency } = (function getContext(evaluate = [], script) {
										(script && 'string' != typeof script) ||
											(script = Array.from(document.querySelectorAll(script || 'script[id^=searchspring], script[src*="snapui.searchspring.io"]'))
												.sort((a, b) => a.innerHTML.length - b.innerHTML.length)
												.pop());
										if (!script || 'object' != typeof script || 'SCRIPT' !== script.tagName) throw new Error('getContext: did not find a script tag');
										const scriptElem = script;
										if (
											!scriptElem.getAttribute('type')?.match(/^searchspring/i) &&
											!scriptElem.id?.match(/^searchspring/i) &&
											!scriptElem.src?.match(/\/\/snapui.searchspring.io/i)
										)
											throw new Error('getContext: did not find a script from Snap CDN or with attribute (type, id) starting with "searchspring"');
										if ((evaluate && !Array.isArray(evaluate)) || (evaluate && !evaluate.reduce((accu, name) => accu && 'string' == typeof name, !0)))
											throw new Error('getContext: first parameter must be an array of strings');
										const attributeVariables = {};
										Object.values(scriptElem.attributes).map((attr) => {
											const name = attr.nodeName;
											evaluate.includes(name) && (attributeVariables[name] = scriptElem.getAttribute(name));
										});
										const scriptVariables = {};
										evaluate?.forEach((name) => {
											const fn = new Function(`\n\t\t\tvar ${evaluate.join(', ')};\n\t\t\t${scriptElem.innerHTML}\n\t\t\treturn ${name};\n\t\t`);
											scriptVariables[name] = fn();
										});
										const variables = { ...removeUndefined(attributeVariables), ...removeUndefined(scriptVariables) };
										if (evaluate.includes('siteId') && !variables.siteId) {
											const siteId = script.getAttribute('src')?.match(/.*snapui.searchspring.io\/([a-zA-Z0-9]{6})\//);
											siteId && siteId.length > 1 && (variables.siteId = siteId[1]);
										}
										return variables;
									})(['item', 'items', 'siteId', 'shopper', 'order', 'type', 'currency'], elem);
									switch ((this.setCurrency(currency), type)) {
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
									}
								})
							);
						}),
						this.sendEvents();
				}
				getGlobals() {
					return JSON.parse(JSON.stringify(this.globals));
				}
				getContext() {
					return JSON.parse(JSON.stringify(this.context));
				}
				retarget() {
					this.targeters.forEach((target) => {
						target.retarget();
					});
				}
			}
			(0, mobx_esm.jK)({ useProxies: 'never', isolateGlobalState: !0, enforceActions: 'never' });
			const controllers = {},
				client = { globals: { siteId: '8uyt2m' } };
			class Snapify {
				static recommendation(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createRecommendationController(config) {
						const urlManager = new UrlManager(new UrlTranslator(), reactLinker).detach(!0),
							cntrlr = new RecommendationController(config.controller, {
								client: new Client(config.client.globals, config.client.config),
								store: new RecommendationStore(config.controller, { urlManager }),
								urlManager,
								eventManager: new EventManager(),
								profiler: new Profiler(),
								logger: new Logger(),
								tracker: new Tracker(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static autocomplete(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createAutocompleteController(config) {
						const urlManager = new UrlManager(new UrlTranslator(), reactLinker).detach(),
							cntrlr = new AutocompleteController(config.controller, {
								client: new Client(config.client.globals, config.client.config),
								store: new AutocompleteStore(config.controller, { urlManager }),
								urlManager,
								eventManager: new EventManager(),
								profiler: new Profiler(),
								logger: new Logger(),
								tracker: new Tracker(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static search(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createSearchController(config) {
						const urlManager = new UrlManager(new UrlTranslator(), reactLinker),
							cntrlr = new SearchController(config.controller, {
								client: new Client(config.client.globals, config.client.config),
								store: new SearchStore(config.controller, { urlManager }),
								urlManager,
								eventManager: new EventManager(),
								profiler: new Profiler(),
								logger: new Logger(),
								tracker: new Tracker(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
			}
		},
		'./components/src/utilities/storybook.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => highlightedCode });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const highlightedCode = (props) => {
				const elemRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						elemRef.current &&
							props.className?.includes('lang-') &&
							!props.className?.includes('prism-block') &&
							window?.Prism?.highlightElement(elemRef.current);
					}, [props.className, props.children, elemRef]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)('code', { ...props, ref: elemRef, 'data-prismjs-copy': 'Copy' })
				);
			};
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ContentType;
			__webpack_require__.d(__webpack_exports__, { W: () => SearchMerchandisingStore, c: () => ContentType }),
				(function (ContentType) {
					(ContentType.HEADER = 'header'),
						(ContentType.BANNER = 'banner'),
						(ContentType.FOOTER = 'footer'),
						(ContentType.LEFT = 'left'),
						(ContentType.INLINE = 'inline');
				})(ContentType || (ContentType = {}));
			class SearchMerchandisingStore {
				constructor(params) {
					(this.redirect = ''), (this.content = {}), (this.campaigns = []);
					const { merchandising } = params?.data?.search || {};
					merchandising &&
						((this.redirect = merchandising.redirect || ''),
						merchandising.content &&
							Object.values(ContentType).forEach((type) => {
								merchandising.content && merchandising.content[type] && (this.content[type] = new Content(merchandising.content[type]));
							}),
						merchandising.campaigns &&
							((this.campaigns = merchandising.campaigns),
							merchandising.campaigns.forEach((campaign) => {
								'landing-page' == campaign.type && (this.landingPage = campaign);
							})),
						merchandising.personalized && (this.personalized = merchandising.personalized));
				}
			}
			class Content extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(content) {
					super(...content);
				}
			}
		},
		'../snap-store-mobx/dist/esm/types.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ErrorType;
			__webpack_require__.d(__webpack_exports__, { B: () => ErrorType }),
				(function (ErrorType) {
					(ErrorType.WARNING = 'warning'), (ErrorType.INFO = 'info'), (ErrorType.ERROR = 'error');
				})(ErrorType || (ErrorType = {}));
		},
		'../../node_modules/memoizerific sync recursive': (module) => {
			function webpackEmptyContext(req) {
				var e = new Error("Cannot find module '" + req + "'");
				throw ((e.code = 'MODULE_NOT_FOUND'), e);
			}
			(webpackEmptyContext.keys = () => []),
				(webpackEmptyContext.resolve = webpackEmptyContext),
				(webpackEmptyContext.id = '../../node_modules/memoizerific sync recursive'),
				(module.exports = webpackEmptyContext);
		},
	},
]);
