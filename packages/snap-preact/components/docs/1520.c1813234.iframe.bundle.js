'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1520],
		{
			'../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'(z, Q, g) {
				g.d(Q, { Z: () => A });
				var d = g('../../node_modules/deepmerge/dist/cjs.js'),
					P = g.n(d),
					F = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Storage/StorageStore.js'),
					k = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/types.js'),
					B = g('../../node_modules/@searchspring/snap-controller/dist/esm/Abstract/AbstractController.js'),
					N = g('../../node_modules/@searchspring/snap-controller/dist/esm/utils/getParams.js'),
					U = g('../../node_modules/@searchspring/snap-controller/dist/esm/types.js'),
					S = g('../../node_modules/@searchspring/snap-controller/dist/esm/utils/isClickWithinProductLink.js'),
					L = g('../../node_modules/@searchspring/snap-controller/dist/esm/utils/isClickWithinBannerLink.js');
				const w = 'ss-autocomplete-input',
					b = 200,
					_ = 13,
					M = 27,
					x = 'oq',
					q = 'fallbackQuery',
					K = {
						id: 'autocomplete',
						selector: '',
						action: '',
						globals: {},
						beacon: { enabled: !0 },
						settings: {
							integratedSpellCorrection: !1,
							initializeFromUrl: !0,
							syncInputs: !0,
							serializeForm: !1,
							facets: { trim: !0, pinFiltered: !0 },
							redirects: { merchandising: !0, singleResult: !1 },
							bind: { input: !0, submit: !0 },
						},
					};
				class A extends B.r {
					constructor(o, { client: t, store: a, urlManager: c, eventManager: u, profiler: f, logger: v, tracker: E }, W) {
						super(o, { client: t, store: a, urlManager: c, eventManager: u, profiler: f, logger: v, tracker: E }, W),
							(this.type = U.k.autocomplete),
							(this.events = {}),
							(this.track = {
								banner: {
									impression: (e) => {
										if (!e) {
											this.log.warn('No banner provided to track.banner.impression');
											return;
										}
										const { responseId: s, uid: r } = e;
										if (this.events[s]?.banner?.[r]?.impression) return;
										const l = { responseId: s, banners: [{ uid: r }], results: [] };
										this.eventManager.fire('track.banner.impression', { controller: this, product: { uid: r }, trackEvent: l }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: l, siteId: this.config.globals?.siteId }),
											(this.events[s].banner[r] = this.events[s].banner[r] || {}),
											(this.events[s].banner[r].impression = !0);
									},
									click: (e, s) => {
										if (!s) {
											this.log.warn('No banner provided to track.banner.click');
											return;
										}
										const { responseId: r, uid: h } = s;
										if ((0, L.c)(e)) {
											if (this.events?.[r]?.banner[h]?.clickThrough) return;
											this.track.banner.clickThrough(e, s),
												(this.events[r].banner[h] = this.events[r].banner[h] || {}),
												(this.events[r].banner[h].clickThrough = !0),
												setTimeout(() => {
													this.events[r].banner[h].clickThrough = !1;
												}, S.WG);
										}
									},
									clickThrough: (e, { uid: s, responseId: r }) => {
										if (!s) {
											this.log.warn('No banner uid provided to track.banner.clickThrough');
											return;
										}
										const l = { responseId: r, banners: [{ uid: s }] };
										this.eventManager.fire('track.banner.clickThrough', { controller: this, event: e, product: { uid: s }, trackEvent: l }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: l, siteId: this.config.globals?.siteId }),
											(this.events[r].banner[s] = this.events[r].banner[s] || {}),
											(this.events[r].banner[s].clickThrough = !0),
											setTimeout(() => {
												this.events[r].banner[s].clickThrough = !1;
											}, S.WG);
									},
								},
								product: {
									clickThrough: (e, s) => {
										if (!s) {
											this.log.warn('No result provided to track.product.clickThrough');
											return;
										}
										const r = s.responseId,
											h = ['product', 'banner'].includes(s.type) ? s.type : 'product',
											l = {
												type: h,
												uid: s.id ? '' + s.id : '',
												...(h === 'product'
													? {
															parentId: s.mappings.core?.parentId ? '' + s.mappings.core?.parentId : '',
															sku: s.mappings.core?.sku ? '' + s.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											m = { responseId: r, results: [l] };
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: s, trackEvent: m }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: m, siteId: this.config.globals?.siteId });
									},
									click: (e, s) => {
										if (!s) {
											this.log.warn('No result provided to track.product.click');
											return;
										}
										const r = s.responseId;
										if (s.type === 'banner' && (0, L.c)(e)) {
											if (this.events?.[r]?.product[s.id]?.inlineBannerClickThrough) return;
											this.track.product.clickThrough(e, s),
												(this.events[r].product[s.id] = this.events[r].product[s.id] || {}),
												(this.events[r].product[s.id].inlineBannerClickThrough = !0),
												setTimeout(() => {
													this.events[r].product[s.id].inlineBannerClickThrough = !1;
												}, S.WG);
										} else if ((0, S.bU)(e, s)) {
											if (this.events?.[r]?.product[s.id]?.productClickThrough) return;
											this.track.product.clickThrough(e, s),
												(this.events[r].product[s.id] = this.events[r].product[s.id] || {}),
												(this.events[r].product[s.id].productClickThrough = !0),
												setTimeout(() => {
													this.events[r].product[s.id].productClickThrough = !1;
												}, S.WG);
										}
									},
									impression: (e) => {
										if (!e) {
											this.log.warn('No result provided to track.product.impression');
											return;
										}
										const s = e.responseId;
										if (this.events?.[s]?.product[e.id]?.impression) return;
										const r = ['product', 'banner'].includes(e.type) ? e.type : 'product',
											h = {
												type: r,
												uid: e.id ? '' + e.id : '',
												...(r === 'product'
													? {
															parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
															sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											l = { responseId: s, results: [h], banners: [] };
										this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: l }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: l, siteId: this.config.globals?.siteId }),
											(this.events[s].product[e.id] = this.events[s].product[e.id] || {}),
											(this.events[s].product[e.id].impression = !0);
									},
									addToCart: (e) => {
										if (!e) {
											this.log.warn('No result provided to track.product.addToCart');
											return;
										}
										const s = e.responseId,
											r = { parentId: e.id, uid: e.id, sku: e.mappings.core?.sku, qty: e.quantity || 1, price: Number(e.mappings.core?.price) },
											h = { responseId: s, results: [r] };
										this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.addToCart({ data: h, siteId: this.config.globals?.siteId });
									},
								},
								redirect: ({ redirectURL: e, responseId: s }) => {
									if (!e) {
										this.log.warn('No redirectURL provided to track.redirect');
										return;
									}
									const r = { responseId: s, redirect: e };
									this.eventManager.fire('track.redirect', { controller: this, redirectURL: e, trackEvent: r }),
										this.config.beacon?.enabled && this.tracker.events.autocomplete.redirect({ data: r, siteId: this.config.globals?.siteId });
								},
							}),
							(this.handlers = {
								input: {
									enterKey: async (e) => {
										if (e.keyCode == _) {
											const s = e.target;
											let r = this.store.services.urlManager;
											if ((e.preventDefault(), this.config.globals?.search?.query?.spellCorrection)) {
												for (; this.store.loading; ) await T(b);
												this.config.settings.integratedSpellCorrection
													? this.store.search.correctedQuery && (r = r?.set(q, this.store.search.correctedQuery.string))
													: this.store.search.originalQuery &&
													  ((s.value = this.store.search.query?.string), (r = r?.set(x, this.store.search.originalQuery.string)));
											}
											(r = r?.set('query', s.value)), await T(b + 1);
											try {
												await this.eventManager.fire('beforeSubmit', { controller: this, input: s });
											} catch (h) {
												if (h?.message == 'cancelled') {
													this.log.warn("'beforeSubmit' middleware cancelled");
													return;
												} else this.log.error("error in 'beforeSubmit' middleware"), console.error(h);
											}
											window.location.href = r?.href || '';
										}
									},
									escKey: (e) => {
										e.keyCode == M && (e.target.blur(), this.setFocused());
									},
									focus: (e) => {
										e.stopPropagation(),
											setTimeout(() => {
												this.setFocused(e.target);
											});
									},
									formSubmit: async (e) => {
										const s = e.target,
											r = s.querySelector(`input[${w}]`);
										if ((e.preventDefault(), this.config.globals?.search?.query?.spellCorrection)) {
											for (; this.store.loading; ) await T(b);
											this.config.settings.integratedSpellCorrection
												? this.store.search.correctedQuery && O(s, q, this.store.search.correctedQuery.string)
												: this.store.search.originalQuery &&
												  (r && (r.value = this.store.search.query?.string), O(s, x, this.store.search.originalQuery.string));
										}
										await T(b + 1);
										try {
											await this.eventManager.fire('beforeSubmit', { controller: this, input: r });
										} catch (h) {
											if (h?.message == 'cancelled') {
												this.log.warn("'beforeSubmit' middleware cancelled");
												return;
											} else this.log.error("error in 'beforeSubmit' middleware"), console.error(h);
										}
										s.submit();
									},
									formElementChange: (e) => {
										const r = e.target?.form,
											h = r?.querySelector(`input[${w}]`);
										if (r && h && this.config.settings?.serializeForm) {
											const l = j(r, function (m) {
												return m != h;
											});
											this.store.setService('urlManager', this.store.services.urlManager.reset().withGlobals(l)),
												this.store.reset(),
												this.config.settings?.trending?.enabled &&
													this.config.settings?.trending?.limit &&
													this.config.settings?.trending?.limit > 0 &&
													this.searchTrending();
										}
									},
									input: (e) => {
										e.isTrusted && this.store.state.focusedInput !== e.target && this.setFocused(e.target);
										const s = e.target.value;
										if (((!this.store.state.input && !s) || this.store.state.input == s) && this.store.loaded) return;
										(this.store.state.source = 'input'),
											(this.store.state.input = s),
											(this.store.merchandising.redirect = ''),
											this.config?.settings?.syncInputs &&
												document.querySelectorAll(this.config.selector).forEach((m) => {
													m.value = s;
												}),
											clearTimeout(this.handlers.input.timeoutDelay);
										const r = this.store.trending?.length && this.config.settings?.trending?.enabled && this.config.settings?.trending?.showResults,
											h = this.store.history?.length && this.config.settings?.history?.enabled && this.config.settings?.history?.showResults;
										this.handlers.input.timeoutDelay = setTimeout(() => {
											s
												? (this.store.state.locks.terms.unlock(),
												  this.store.state.locks.facets.unlock(),
												  this.urlManager.set({ query: this.store.state.input }).go())
												: (this.store.reset(),
												  r ? this.store.trending[0].preview() : h ? this.store.history[0].preview() : this.urlManager.reset().go());
										}, b);
									},
									timeoutDelay: void 0,
								},
								document: {
									click: (e) => {
										const s = document.querySelectorAll(this.config.selector);
										Array.from(s).includes(e.target) || (e.target?.nodeName == 'FORM' && e.target.querySelectorAll(this.config.selector).length)
											? e.stopPropagation()
											: this.setFocused();
									},
								},
							}),
							(this.searchTrending = async (e) => {
								let s;
								const r = this.storage.get('terms');
								if (r && !e?.limit) s = JSON.parse(r);
								else {
									const h = { limit: e?.limit || this.config.settings?.trending?.limit || 5 },
										l = this.profiler.create({ type: 'event', name: 'trending', context: h }).start();
									(s = await this.client.trending(h)),
										l.stop(),
										this.log.profile(l),
										s?.trending.queries?.length && this.storage.set('terms', JSON.stringify(s));
								}
								this.store.updateTrendingTerms(s);
							}),
							(this.search = async () => {
								try {
									if ((this.initialized || (await this.init()), !this.urlManager.state.query)) return;
									const e = this.params;
									if (!e?.search?.query?.string) return;
									(this.store.loading = !0), (this.store.merchandising.redirect = '');
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: e });
									} catch (y) {
										if (y?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), y);
									}
									const s = this.profiler.create({ type: 'event', name: 'search', context: e }).start(),
										{ meta: r, search: h } = await this.client.autocomplete(e);
									s.stop(), this.log.profile(s);
									const l = h.tracking.responseId;
									this.events[l] = this.events[l] || { product: {}, banner: {} };
									const m = this.store.results[0]?.responseId;
									if (m && m === l) {
										const y = Object.keys(this.events[l].product || {}).filter((D) => this.events[l].product?.[D]?.impression);
										this.events[l] = { product: y.reduce((D, G) => ((D[G] = { impression: !0 }), D), {}), banner: this.events[l].banner };
									} else this.events[l] = { product: {}, banner: {} };
									const I = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: r, search: h } });
									} catch (y) {
										if (y?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), I.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), y);
									}
									I.stop(), this.log.profile(I), this.store.update({ meta: r, search: h });
									const H = { responseId: l };
									this.config.beacon?.enabled && this.tracker.events.autocomplete.render({ data: H, siteId: this.config.globals?.siteId });
									const R = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: e, response: { meta: r, search: h } });
									} catch (y) {
										if (y?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), R.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), y);
									}
									R.stop(), this.log.profile(R);
								} catch (e) {
									if (e)
										if (e.err && e.fetchDetails) {
											switch (e.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: k.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: k.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: k.B.ERROR, message: e.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
										} else
											(this.store.error = { type: k.B.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.addToCart = async (e) => {
								const s = typeof e?.slice == 'function' ? e.slice() : [e];
								if (!e || s.length === 0) {
									this.log.warn('No products provided to autocomplete controller.addToCart');
									return;
								}
								s.forEach((r) => {
									this.track.product.addToCart(r);
								}),
									s.length > 0 && this.eventManager.fire('addToCart', { controller: this, products: s });
							}),
							(this.config = P()(K, this.config)),
							this.config.settings?.trending?.limit &&
								typeof this.config.settings?.trending?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, trending: { enabled: !0, ...this.config.settings.trending } }),
							this.config.settings?.history?.limit &&
								typeof this.config.settings?.history?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, history: { enabled: !0, ...this.config.settings.history } }),
							this.store.setConfig(this.config),
							this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
							(this.storage = new F.t({ type: 'session', key: `ss-controller-${this.config.id}` })),
							this.eventManager.on('afterSearch', async (e, s) => {
								if ((await s(), e.response.search.autocomplete?.query != e.controller.urlManager.state.query)) return !1;
							}),
							this.eventManager.on('beforeSubmit', async (e, s) => {
								if ((await s(), e.controller.store.loading)) return;
								const h = e.controller.store.state.input,
									l = e.controller.store.merchandising?.redirect;
								if (this.config?.settings?.redirects?.merchandising && h && l)
									return (
										this.track.redirect({ redirectURL: l, responseId: e.controller.store.merchandising?.responseId }), (window.location.href = l), !1
									);
								if (this.config?.settings?.redirects?.singleResult) {
									const { results: m } = e.controller.store,
										I = m.filter((R) => R.type == 'product'),
										H = I.length === 1 && I[0].mappings.core?.url;
									if (H) return (window.location.href = H), !1;
								}
							}),
							this.use(this.config);
					}
					get params() {
						const o = this.urlManager.state,
							t = P()({ ...(0, N.j)(o) }, this.config.globals || {}),
							{ userId: a, sessionId: c, pageLoadId: u, shopperId: f } = this.tracker.getContext();
						if (
							((t.tracking = t.tracking || {}),
							(t.tracking.domain = window.location.href),
							a && (t.tracking.userId = a),
							c && (t.tracking.sessionId = c),
							u && (t.tracking.pageLoadId = u),
							this.store.state.input && ((t.search = t.search || {}), (t.search.input = this.store.state.input)),
							this.store.state.source && ((t.search = t.search || {}), (t.search.source = this.store.state.source)),
							!this.config.globals?.personalization?.disabled)
						) {
							const v = this.tracker.cookies.cart.get();
							v.length && ((t.personalization = t.personalization || {}), (t.personalization.cart = v.join(',')));
							const E = this.tracker.cookies.viewed.get();
							E.length && ((t.personalization = t.personalization || {}), (t.personalization.lastViewed = E.join(','))),
								f && ((t.personalization = t.personalization || {}), (t.personalization.shopper = f));
						}
						return t;
					}
					async setFocused(o) {
						if (this.store.state.focusedInput !== o) {
							this.store.state.focusedInput = o;
							try {
								try {
									await this.eventManager.fire('focusChange', { controller: this });
								} catch (t) {
									if (t?.message == 'cancelled') this.log.warn("'focusChange' middleware cancelled");
									else throw (this.log.error("error in 'focusChange' middleware"), t);
								}
							} catch (t) {
								t && console.error(t);
							}
						}
						o?.dispatchEvent(new Event('input'));
					}
					reset() {
						document.querySelectorAll(this.config.selector).forEach((t) => {
							t.value = '';
						}),
							this.store.reset();
					}
					unbind() {
						document.querySelectorAll(`input[${w}]`)?.forEach((t) => {
							t.removeEventListener('input', this.handlers.input.input),
								t.removeEventListener('keydown', this.handlers.input.enterKey),
								t.removeEventListener('keydown', this.handlers.input.escKey),
								t.removeEventListener('focus', this.handlers.input.focus),
								t.form && (t.form.removeEventListener('submit', this.handlers.input.formSubmit), n(t.form, this.handlers.input.formElementChange));
						}),
							document.removeEventListener('click', this.handlers.document.click);
					}
					async bind() {
						this.initialized || (await this.init()),
							this.unbind(),
							document.querySelectorAll(this.config.selector).forEach((t) => {
								t.setAttribute('spellcheck', 'false'),
									t.setAttribute('autocomplete', 'off'),
									t.setAttribute('autocorrect', 'off'),
									t.setAttribute('autocapitalize', 'none'),
									t.setAttribute(w, ''),
									this.config.settings?.bind?.input && t.addEventListener('input', this.handlers.input.input),
									this.config?.settings?.initializeFromUrl && !t.value && this.store.state.input && (t.value = this.store.state.input),
									t.addEventListener('focus', this.handlers.input.focus),
									t.addEventListener('keydown', this.handlers.input.escKey);
								const a = t.form;
								let c;
								if (this.config.action)
									this.config.settings?.bind?.submit && t.addEventListener('keydown', this.handlers.input.enterKey), (c = this.config.action);
								else if (
									a &&
									(this.config.settings?.bind?.submit && a.addEventListener('submit', this.handlers.input.formSubmit),
									(c = a.action || ''),
									this.config.settings?.serializeForm)
								) {
									p(a, this.handlers.input.formElementChange, function (f) {
										return f != t;
									});
									const u = j(a, function (f) {
										return f != t;
									});
									this.store.setService('urlManager', this.urlManager.reset().withGlobals(u));
								}
								c &&
									this.store.setService(
										'urlManager',
										this.store.services.urlManager.withConfig((u) => ({ ...u, urlRoot: c }))
									),
									document.activeElement === t && !this.store.loading && this.setFocused(t);
							}),
							this.config.settings?.trending?.enabled &&
								this.config.settings?.trending?.limit &&
								this.config.settings?.trending?.limit > 0 &&
								!this.store.trending?.length &&
								this.searchTrending(),
							this.config.settings?.disableClickOutside || document.addEventListener('click', this.handlers.document.click);
					}
				}
				function O(i, o, t) {
					const a = document.createElement('input');
					(a.type = 'hidden'), (a.name = o), (a.value = t), i.querySelector(`[type="hidden"][name="${o}"]`)?.remove(), i.append(a);
				}
				async function T(i) {
					return new Promise((o) => {
						window.setTimeout(o, i);
					});
				}
				const C = ['file', 'reset', 'submit', 'button', 'image', 'password'];
				function j(i, o) {
					const t = {};
					if (typeof i == 'object' && i.nodeName == 'FORM')
						for (let a = i.elements.length - 1; a >= 0; a--) {
							const c = i.elements[a];
							(typeof o == 'function' && !o(c)) ||
								(c.name && !C.includes(c.type) && ((c.type != 'checkbox' && c.type != 'radio') || c.checked) && (t[c.name] = c.value));
						}
					return t;
				}
				function p(i, o, t) {
					if (typeof i == 'object' && i.nodeName == 'FORM')
						for (let a = i.elements.length - 1; a >= 0; a--) {
							const c = i.elements[a];
							(typeof t == 'function' && !t(c)) || (c.name && !C.includes(c.type) && c.addEventListener('change', o));
						}
				}
				function n(i, o) {
					if (typeof i == 'object' && i.nodeName == 'FORM')
						for (let t = i.elements.length - 1; t >= 0; t--) {
							const a = i.elements[t];
							a.name && !C.includes(a.type) && a.removeEventListener('change', o);
						}
				}
			},
			'../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'(z, Q, g) {
				g.d(Q, { Y: () => j });
				var d = g('../../node_modules/mobx/dist/mobx.esm.js'),
					P = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					F = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js'),
					k = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					B = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js'),
					N = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
					U = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
					S = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js'),
					L = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Storage/StorageStore.js');
				class w {
					constructor(n) {
						(this.focusedInput = void 0), (this.input = void 0), (this.source = 'input');
						const { services: i } = n || {};
						(this.locks = { terms: new b(!1), facets: new b(!1) }),
							(this.url = i.urlManager),
							(0, d.Gn)(this, { focusedInput: d.sH, locks: d.sH, input: d.sH, reset: d.XI });
					}
					reset() {
						(this.input = void 0), this.locks.terms.reset(), this.locks.facets.reset();
					}
				}
				class b {
					constructor(n = !1) {
						this.state = this.startState = n;
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
				class _ extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(n) {
						const { config: i, data: o } = n || {},
							{ autocomplete: t, search: a, pagination: c } = o?.autocomplete || {},
							u = [...(t?.alternatives ? t.alternatives : []).map((v) => v.text)];
						i?.settings?.integratedSpellCorrection
							? (t?.correctedQuery && a?.query && t.correctedQuery.toLowerCase() != a.query.toLowerCase() && u.unshift(t.correctedQuery),
							  a?.query && u.unshift(a.query))
							: t?.suggested?.text
							? u.unshift(t.suggested.text)
							: t?.correctedQuery && c?.totalResults
							? u.unshift(t.correctedQuery)
							: t?.query && c?.totalResults && u.unshift(t?.query);
						const f = [];
						u.map((v, E) =>
							f.push(
								new M({ ...n, data: { term: { active: E === 0, value: v }, terms: f }, functions: n.functions, state: n.state, type: 'suggested' })
							)
						),
							super(...f);
					}
				}
				class M {
					constructor(n) {
						const { services: i, functions: o, state: t, data: a, type: c } = n || {},
							{ term: u, terms: f } = a || {};
						(this.active = u?.active),
							(this.value = u?.value),
							(this.type = c),
							(this.url = i?.urlManager?.set({ query: this.value })),
							(this.preview = () => {
								o.resetTerms(),
									f.map((v) => {
										v.active = !1;
									}),
									(t.rootState.source = c),
									(this.active = !0),
									t.rootState.locks.terms.lock(),
									t.rootState.locks.facets.unlock(),
									this.url?.set({ query: this.value }).go();
							}),
							(0, d.Gn)(this, { active: d.sH, value: d.sH });
					}
				}
				class x extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(n) {
						const { data: i } = n || {},
							{ queries: o } = i || {},
							t = [];
						o?.map((a) => {
							t.push(new M({ ...n, data: { term: { active: !1, value: a }, terms: t }, functions: n.functions, state: n.state, type: 'historical' }));
						}),
							super(...t);
					}
				}
				class q extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(n) {
						const i = [],
							{ data: o } = n || {},
							{ trending: t } = o?.trending || {};
						t?.queries?.map((a) => {
							i.push(
								new M({
									...n,
									data: { term: { active: !1, value: a.searchQuery }, terms: i },
									functions: n.functions,
									state: n.state,
									type: 'popular',
								})
							);
						}),
							super(...i);
					}
				}
				class K {
					constructor(n) {
						const { services: i, data: o, config: t } = n || {},
							{ search: a, autocomplete: c } = o?.autocomplete || {},
							u = {};
						a?.query && ((this.query = new A(i.urlManager, a.query)), (u.query = d.sH)),
							c?.correctedQuery &&
								(t.settings?.integratedSpellCorrection
									? ((this.correctedQuery = new A(i.urlManager, c.correctedQuery)), (u.correctedQuery = d.sH))
									: c.query && ((this.originalQuery = new A(i.urlManager, c.query)), (u.originalQuery = d.sH))),
							(this.matchType = a?.matchType),
							(u.matchType = d.sH),
							(0, d.Gn)(this, u);
					}
				}
				class A {
					constructor(n, i) {
						(this.string = i), (this.url = n.set({ query: this.string })), (0, d.Gn)(this, { string: d.sH });
					}
				}
				var O = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js');
				class T extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(n) {
						const { services: i, state: o } = n || {},
							t = new O.pC({ ...n, services: { ...i, urlManager: i.urlManager.remove('filter') } });
						t.forEach((a) => {
							a.values?.forEach((c) => {
								c.preview = () => {
									t.map((u) => {
										(u.filtered = !1),
											u.values?.map((f) => {
												f.filtered = !1;
											});
									}),
										(a.filtered = !0),
										(c.filtered = !0),
										o?.autocomplete.locks.facets.lock(),
										c.url.go();
								};
							});
						}),
							super(...t);
					}
				}
				var C = g('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class j extends P.K {
					constructor(n, i) {
						if ((super(n), typeof i != 'object' || typeof i.urlManager?.subscribe != 'function'))
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = i),
							(this.state = new w({ services: this.services })),
							(this.storage = new L.t()),
							(this.trending = []),
							(this.history = []),
							this.initHistory(),
							this.reset(),
							(0, d.Gn)(this, {
								state: d.sH,
								search: d.sH,
								terms: d.sH,
								facets: d.sH,
								filters: d.sH,
								merchandising: d.sH,
								results: d.sH,
								pagination: d.sH,
								sorting: d.sH,
								history: d.sH,
								trending: d.sH,
							});
					}
					get hasQuery() {
						return !!((this.state.input && this.loaded) || this.search.query?.string);
					}
					reset() {
						this.state.reset(), this.update(), this.resetTerms();
					}
					initHistory() {
						const n = this.config.settings?.history?.limit;
						if (n) {
							const i = new F.E({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
							this.history = new x({
								services: this.services,
								functions: {
									resetTerms: () => {
										this.resetTerms();
									},
								},
								state: { rootState: this.state },
								data: { queries: i.getStoredData(n) },
							});
						} else this.history = [];
					}
					resetTerms() {
						this.resetSuggestions(), this.resetTrending(), this.resetHistory();
					}
					resetSuggestions() {
						this.terms?.forEach((n) => (n.active = !1));
					}
					resetTrending() {
						this.trending?.forEach((n) => (n.active = !1));
					}
					resetHistory() {
						this.history?.forEach((n) => (n.active = !1));
					}
					setService(n, i) {
						this.services[n] && i && ((this.services[n] = i), n === 'urlManager' && ((this.state.url = i), this.initHistory()));
					}
					updateTrendingTerms(n) {
						this.trending = new q({
							services: this.services,
							functions: {
								resetTerms: () => {
									this.resetTerms();
								},
							},
							state: { rootState: this.state },
							data: { trending: n },
						});
					}
					update(n) {
						const { meta: i, search: o } = n || {};
						(this.meta = new C.l({ data: { meta: i } })),
							o?.search && (this.state.url = this.services.urlManager = this.services.urlManager.set('query', o.search.query)),
							this.state.locks.terms.locked ||
								((this.terms = new _({
									config: this.config,
									services: this.services,
									functions: {
										resetTerms: () => {
											this.resetTerms();
										},
									},
									state: { rootState: this.state },
									data: { autocomplete: o },
								})),
								o?.autocomplete && this.state.locks.terms.lock()),
							(this.merchandising = new k.W({ data: { search: o } })),
							(this.search = new K({ config: this.config, services: this.services, data: { autocomplete: o } })),
							this.state.locks.facets.locked ||
								(this.facets = new T({
									config: this.config,
									services: this.services,
									stores: { storage: this.storage },
									state: { autocomplete: this.state },
									data: { search: o, meta: this.meta.data },
								})),
							(this.filters = new B.Al({ config: this.config, services: this.services, data: { search: o, meta: this.meta.data } })),
							(this.results = new N.vP({ config: this.config, state: { loaded: this.loaded }, data: { search: o, meta: this.meta.data } })),
							((this.results.length === 0 && !this.trending.filter((t) => t.active).length) || this.terms?.filter((t) => t.active).length) &&
								this.resetTrending(),
							(this.pagination = new U.a3({ services: this.services, data: { search: o, meta: this.meta.data } })),
							(this.sorting = new S.q({ services: this.services, data: { search: o, meta: this.meta.data } })),
							(this.error = void 0),
							(this.loaded = !!o?.pagination);
					}
				}
			},
		},
	]);
})();
