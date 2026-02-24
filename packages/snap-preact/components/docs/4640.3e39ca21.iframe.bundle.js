'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4640],
		{
			'./src/create/createFinderController.ts'(_, j, n) {
				n.r(j), n.d(j, { default: () => q });
				var A = n('../../node_modules/deepmerge/dist/cjs.js'),
					x = n.n(A),
					b = n('../../node_modules/@searchspring/snap-store-mobx/dist/esm/types.js'),
					L = n('../../node_modules/@searchspring/snap-controller/dist/esm/Abstract/AbstractController.js'),
					F = n('../../node_modules/@searchspring/snap-controller/dist/esm/utils/getParams.js'),
					U = n('../../node_modules/@searchspring/snap-controller/dist/esm/types.js');
				const T = {
					id: 'finder',
					beacon: { enabled: !0 },
					globals: { pagination: { pageSize: 0 } },
					fields: [],
					persist: { enabled: !1, lockSelections: !0, expiration: 0 },
				};
				class B extends L.r {
					constructor(e, { client: s, store: i, urlManager: a, eventManager: t, profiler: d, logger: m, tracker: y }, f) {
						super(e, { client: s, store: i, urlManager: a, eventManager: t, profiler: d, logger: m, tracker: y }, f),
							(this.type = U.k.finder),
							(this.find = async () => {
								await this.store.save();
								try {
									await this.eventManager.fire('beforeFind', { controller: this }), (window.location.href = this.urlManager.href);
								} catch (r) {
									r?.message == 'cancelled'
										? this.log.warn("'beforeFind' middleware cancelled")
										: (this.log.error("error in 'beforeFind' middleware"), this.log.error(r));
								}
							}),
							(this.reset = () => {
								this.store.reset(), this.urlManager.remove('filter').go(), this.store.setService('urlManager', this.urlManager);
							}),
							(this.search = async () => {
								try {
									if ((this.initialized || (await this.init()), this.store.persisted)) return;
									const r = this.params;
									this.store.loading = !0;
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: r });
									} catch (c) {
										if (c?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), c);
									}
									const p = this.profiler.create({ type: 'event', name: 'search', context: r }).start(),
										{ meta: u, search: g } = await this.client.finder(r);
									p.stop(), this.log.profile(p);
									const o = this.profiler.create({ type: 'event', name: 'afterSearch', context: r }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: r, response: { meta: u, search: g } });
									} catch (c) {
										if (c?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), o.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), c);
									}
									o.stop(), this.log.profile(o), this.store.update({ meta: u, search: g });
									const h = this.profiler.create({ type: 'event', name: 'afterStore', context: r }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: r, response: { meta: u, search: g } });
									} catch (c) {
										if (c?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), h.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), c);
									}
									h.stop(), this.log.profile(h);
								} catch (r) {
									if (r)
										if (r.err && r.fetchDetails) {
											switch (r.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: b.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: b.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: b.B.ERROR, message: r.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(r.err, r.fetchDetails);
										} else
											(this.store.error = { type: b.B.ERROR, message: `Something went wrong... - ${r}` }), this.log.error(r), this.handleError(r);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.config = x()(T, this.config)),
							this.store.setConfig(this.config),
							this.config.url && (this.urlManager = this.urlManager.withConfig((r) => ({ ...r, urlRoot: this.config.url }))),
							this.use(this.config),
							this.store.loadPersisted();
					}
					get params() {
						const e = this.urlManager.state,
							{ userId: s, sessionId: i, pageLoadId: a } = this.tracker.getContext(),
							t = {};
						s && (t.userId = s), i && (t.sessionId = i), a && (t.pageLoadId = a), (t.domain = window.location.href);
						const d = { facets: { include: this.config.fields.map((y) => y.field), autoDrillDown: !1 }, tracking: t };
						return x()({ ...(0, F.j)(e) }, x()(d, this.config.globals));
					}
				}
				var H = n('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					$ = n('../../node_modules/mobx/dist/mobx.esm.js'),
					O = n('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					K = n('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
					C = n('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Storage/StorageStore.js');
				class N extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(e) {
						const s = e.config,
							{ services: i, data: a, stores: t, state: d } = e || {},
							{ storage: m } = t || {},
							{ search: y, meta: f, selections: r } = a || {},
							{ facets: p } = y || {},
							u = [];
						r?.length
							? s.fields.forEach((g) => {
									const o = r.find((h) => h.facet.field === g.field);
									if (o) {
										const { facet: h, selected: c } = o || {};
										if (h?.hierarchyDelimiter)
											r.forEach((v, S) => {
												const w = g?.levels || h?.values[h?.values.length - 1]?.value.split(h.hierarchyDelimiter),
													M = { index: S, label: g.levels ? w[S] : '', key: `ss-${S}` },
													R = P(s.id, h.field);
												m.set(`${R}.${M.key}.values`, v.data), m.set(`${R}.${M.key}.selected`, v.selected);
												const I = new E({ config: M, services: i, stores: t, state: d, data: { id: s.id, facet: h } });
												s.persist?.lockSelections && (I.disabled = !0),
													v.selected && (i.urlManager = i.urlManager.set(`filter.${v.facet.field}`, v.selected)),
													u.push(I);
											});
										else {
											const v = new D({ config: g, services: i, stores: t, state: d, data: { id: s.id, facet: h } });
											(v.selected = c),
												v.storage.set('selected', c),
												(v.data = h.values),
												c && (i.urlManager = i.urlManager.set(`filter.${h.field}`, c)),
												s.persist?.lockSelections && (v.disabled = !0),
												u.push(v);
										}
									}
							  })
							: p &&
							  f &&
							  (s?.fields &&
									p.sort((g, o) => {
										const h = s.fields.map((c) => c.field);
										return h.indexOf(g.field) - h.indexOf(o.field);
									}),
							  s?.fields?.forEach((g) => {
									let o = p.filter((c) => c.field == g.field).pop();
									if (((o = { ...((f?.facets && f.facets[g.field]) || {}), ...o }), o?.display === 'hierarchy')) {
										const c = o.values?.filter((S) => S.filtered).pop();
										if (c) {
											const S = c.value?.split(o?.hierarchyDelimiter).length;
											o.values = o.values?.filter(
												(w, M) => (w.value && w.value.split(o?.hierarchyDelimiter).length > S) || M == o.values?.length - 1
											);
										}
										(g?.levels || (o?.values && o?.values[o?.values?.length - 1].value?.split(o.hierarchyDelimiter)))?.map((S, w) => {
											const M = { index: w, label: g.levels ? S : '', key: `ss-${w}` };
											u.push(new E({ config: M, services: i, stores: t, state: d, data: { id: s.id, facet: o } }));
										});
									} else u.push(new D({ config: g, services: i, stores: t, state: d, data: { id: s.id, facet: o } }));
							  })),
							super(...u);
					}
				}
				class k {
					constructor(e) {
						(this.filtered = !1), (this.collapsed = !1), (this.display = ''), (this.disabled = !1), (this.selected = ''), (this.custom = {});
						const { config: s, services: i, stores: a, state: t, data: d } = e || {},
							{ storage: m } = a || {},
							{ id: y, facet: f } = d || {},
							{ persisted: r } = t;
						(this.services = i),
							(this.persisted = r),
							(this.id = y),
							(this.config = s),
							(this.facet = f),
							(this.type = f.type),
							(this.field = f.field),
							(this.filtered = f.filtered),
							(this.collapsed = f.collapsed),
							(this.display = f.display),
							(this.label = f.label),
							(this.multiple = f.multiple),
							(this.storage = {
								key: P(this.id, this.field),
								get: function (p) {
									const u = this.key + (p ? `.${p}` : '');
									return m.get(u);
								},
								set: function (p, u) {
									const g = this.key + (p ? `.${p}` : '');
									return m.set(g, u);
								},
							});
					}
					get values() {
						const e = [...(this.data || [])];
						return e.unshift({ filtered: !1, value: '', label: this.config.label || this.label }), e;
					}
				}
				class D extends k {
					constructor(e) {
						super(e);
						const { data: s } = e || {},
							{ facet: i } = s || {};
						this.storage.set('values', i.values);
						const a = this.storage.get();
						(this.data = a.values || []), (this.disabled = !this.values.length), (this.selected = this.disabled ? '' : a.selected || '');
					}
					select(e = '') {
						(this.selected = e),
							this.storage.set('selected', e),
							(this.persisted = !1),
							e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
					}
				}
				class E extends k {
					constructor(e) {
						super(e);
						const { data: s } = e || {},
							{ facet: i } = s || {};
						this.hierarchyDelimiter = i.hierarchyDelimiter;
						let a = this.storage.get();
						if (!a) this.storage.set(`${this.config.key}.values`, i.values), (a = this.storage.get());
						else if (a[this.config.key]?.values) this.selected = a[this.config.key]?.selected || '';
						else {
							const t = this.storage.get(),
								d = Object.keys(t).map((p, u) => `ss-${u}`);
							!d.includes(this.config.key) && d.push(this.config.key);
							const m = Object.keys(t).filter((p) => t[p].selected),
								y = m[m.length - 1],
								f = d.indexOf(this.config.key),
								r = d.indexOf(y);
							r != -1 && f == r + 1 ? this.storage.set(`${this.config.key}.values`, i.values) : (this.disabled = !0);
						}
						this.data = a[this.config.key]?.values || [];
					}
					select(e = '') {
						(this.selected = e), (this.persisted = !1);
						const s = this.config.index,
							i = this.storage.get(),
							a = Object.keys(i).slice(s);
						Object.keys(i)
							.reverse()
							.forEach((t) => {
								t == this.config.key ? this.storage.set(`${t}.selected`, e) : a.includes(t) && this.storage.set(`${t}`, {}),
									(e = e || this.storage.get(`${t}.selected`));
							}),
							e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
					}
				}
				function P(l, e) {
					return `ss-finder-${l}.${e}`;
				}
				var J = n('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class z extends O.K {
					constructor(e, s) {
						if (
							(super(e),
							(this.persisted = !1),
							(this.save = () => {}),
							(this.reset = () => {
								this.config.persist?.enabled && (this.persistedStorage?.clear(), (this.persisted = !1)),
									this.services.urlManager.state.filter && (this.storage.clear(), (this.selections = []), (this.loaded = !1));
							}),
							typeof s != 'object' || typeof s.urlManager?.subscribe != 'function')
						)
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = s),
							this.config.persist?.enabled && (this.persistedStorage = new C.t({ type: 'local', key: `ss-${this.config.id}-persisted` })),
							(this.storage = new C.t()),
							this.update(),
							(0, $.Gn)(this, { selections: $.sH, pagination: $.sH });
					}
					setService(e, s) {
						this.services[e] && s && (this.services[e] = s);
					}
					loadPersisted() {
						if (this.config.persist?.enabled && this.persistedStorage) {
							const e = this.persistedStorage.get('date'),
								s = this.persistedStorage.get('data'),
								i = this.persistedStorage.get('config'),
								a = this.persistedStorage.get('selections'),
								t = this.config.persist.expiration && Date.now() - e > this.config.persist.expiration;
							if (s && a.filter((d) => d.selected).length) {
								const d = JSON.stringify({ ...i, plugins: [], middleware: {} }),
									m = JSON.stringify({ ...this.config, plugins: [], middleware: {} });
								d === m && !t ? (this.update(s, a), (this.persisted = !0), this.services.urlManager.go()) : this.reset();
							}
						}
					}
					update(e, s) {
						const { meta: i, search: a } = e || {};
						(this.error = void 0),
							(this.loaded = !!a?.pagination),
							(this.meta = new J.l({ data: { meta: i || {} } })),
							(this.pagination = new K.a3({ config: this.config, services: this.services, data: { search: a, meta: this.meta.data } })),
							(this.selections = new N({
								config: this.config,
								services: this.services,
								stores: { storage: this.storage },
								state: { persisted: this.persisted },
								data: { search: a, meta: this.meta.data, selections: s || [] },
							})),
							(this.save = () => {
								this.config.persist?.enabled &&
									this.persistedStorage &&
									this?.selections?.filter((t) => t.selected).length &&
									(this.persistedStorage.set('config', this.config),
									this.persistedStorage.set('data', e),
									this.persistedStorage.set('date', Date.now()),
									this.persistedStorage.set(
										'selections',
										this.selections.map((t) => ({ selected: t.selected, data: t.data, facet: t.facet }))
									));
							}),
							(this.error = void 0),
							(this.loaded = !!a?.pagination);
					}
				}
				var G = n('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					V = n('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					W = n('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					X = n('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					Q = n('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					Y = n('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					Z = n('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				const q = (l, e) => {
					const s = (e?.urlManager || new G.V(new V.E(l.url), W.X)).detach(!0);
					return (
						l.mode && l.client && ((l.client.config = l.client.config || {}), (l.client.config.mode = l.mode)),
						new B(
							l.controller,
							{
								client: e?.client || new H.K(l.client.globals, l.client.config),
								store: e?.store || new z(l.controller, { urlManager: s }),
								urlManager: s,
								eventManager: e?.eventManager || new X.E(),
								profiler: e?.profiler || new Q.U(),
								logger: e?.logger || new Y.V({ mode: l.mode }),
								tracker: e?.tracker || new Z.J(l.client.globals),
							},
							l.context
						)
					);
				};
			},
		},
	]);
})();
