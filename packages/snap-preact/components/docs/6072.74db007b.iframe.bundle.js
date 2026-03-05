'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6072],
		{
			'./src/Instantiators/RecommendationInstantiator.tsx'(k, D, n) {
				n.d(D, { RecommendationInstantiator: () => U });
				var T = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = n('../../node_modules/preact/dist/preact.module.js'),
					j = n('../../node_modules/deepmerge/dist/cjs.js'),
					R = n.n(j),
					w = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/DomTargeter/DomTargeter.js'),
					L = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/getContext/getContext.js'),
					M = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/types.js'),
					$ = n('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					v = n('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					B = n('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const K = 'production';
				class U {
					constructor(r, e, I) {
						if (
							((this.mode = M.$.production),
							(this.controller = {}),
							(this.uses = []),
							(this.plugins = []),
							(this.middleware = []),
							(this.config = r),
							!this.config)
						)
							throw new Error('Recommendation Instantiator config is required');
						if (
							(this.config.config?.branch || ((this.config.config = this.config.config || {}), (this.config.config.branch = K)),
							!this.config.components || typeof this.config.components != 'object' || !Object.keys(this.config.components).length)
						)
							throw new Error("Recommendation Instantiator config must contain 'components' mapping property");
						if ((!e?.client || !e?.tracker) && !this.config?.client?.globals?.siteId)
							throw new Error('Recommendation Instantiator config must contain a valid config.client.globals.siteId value');
						this.config.mode &&
							Object.values(M.$).includes(this.config.mode) &&
							((this.mode = this.config.mode),
							this.config?.client?.globals?.siteId &&
								((this.config.client.config = this.config.client.config || {}),
								(this.config.client.config.mode = this.config.client.config.mode || this.mode))),
							(window.athos = window.athos || {}),
							(this.context = R()(I || {}, r.context || {})),
							(this.client = e?.client || new $.K(this.config.client.globals, this.config.client.config)),
							(this.tracker = e?.tracker || new B.J(this.config.client.globals)),
							(this.logger = e?.logger || new v.V({ prefix: 'RecommendationInstantiator ', mode: this.mode }));
						const u = {};
						this.targeter = new w.b(
							[
								{
									selector: `${
										this.config.selector ||
										'script[type="searchspring/recommend"], script[type="searchspring/personalized-recommendations"], script[type="athos/recommend"], script[type="athos/personalized-recommendations"]'
									}, script[type="searchspring/recommend"][profile="email"], script[type="athos/recommend"][profile="email"]`,
									autoRetarget: !0,
									clickRetarget: !0,
									inject: {
										action: 'before',
										element: (g, d) => {
											const b = d.getAttribute('profile') || '',
												s = document.createElement('div');
											return s.setAttribute('searchspring-recommend', b), s;
										},
									},
								},
								{
									selector: 'script[type="searchspring/recommendations"], script[type="athos/recommendations"]',
									autoRetarget: !0,
									clickRetarget: !0,
									emptyTarget: !1,
								},
							],
							async (g, d, b) => {
								const s = (0, L.S)(
									[
										'shopperId',
										'shopper',
										'product',
										'products',
										'seed',
										'cart',
										'filters',
										'blockedItems',
										'options',
										'profile',
										'custom',
										'profiles',
										'globals',
									],
									b || d
								);
								if (s.profiles && s.profiles.length) {
									const C = s.profiles,
										f = s.globals,
										a = {
											...P({
												blockedItems: f?.blockedItems,
												filters: f?.filters,
												cart: f?.cart && A(f.cart),
												products: f?.products,
												shopper: f?.shopper?.id,
												batchId: Math.random(),
											}),
										},
										_ = [];
									C.forEach((c) => {
										if (c.selector) {
											const l = { selector: c.selector, autoRetarget: !0, clickRetarget: !0, profile: c };
											_.push(l);
										}
									}),
										new w.b(_, async (c, l, t) => {
											if (c.profile?.profile || c.profile?.tag) {
												const E = { ...a, profile: c.profile?.options, tag: c.profile.tag || c.profile.profile },
													i = R()(this.context, P({ globals: f, profile: c.profile }));
												s.custom && (i.custom = R()(i.custom, s.custom)), O(this, e || {}, l, i, u, t, E, c);
											}
										});
								} else {
									const { profile: C, products: f, product: a, seed: _, filters: c, blockedItems: l, options: t, shopper: E, shopperId: i } = s,
										y = [].concat(f || a || _ || []),
										h = [E, E?.id, i, i?.id].filter((p) => p && typeof p == 'string').pop(),
										m = {
											tag: C,
											...P({ products: y.length ? y : void 0, cart: s.cart && A(s.cart), shopper: h, filters: c, blockedItems: l, profile: t }),
										};
									O(this, e || {}, d, R()(this.context, s), u, b, m, g);
								}
							}
						);
					}
					plugin(r, ...e) {
						this.plugins.push({ func: r, args: e });
					}
					on(r, ...e) {
						this.middleware.push({ event: r, func: e });
					}
					use(r) {
						this.uses.push(r);
					}
				}
				async function O(o, r, e, I, u, g, d, b) {
					const { profile: s, batchId: C, cart: f, tag: a } = d,
						_ = s?.batched ?? d.batched ?? !0;
					if (!a) {
						o.logger.warn("'tag' is missing from <script> tag, skipping this profile", g);
						return;
					}
					Array.isArray(f) && o.tracker.cookies.cart.set(f), (u[a] = u[a] + 1 || 1);
					const c = R().all([o.config.client?.globals || {}, o.config.config?.globals || {}, d]),
						l = {
							id: `recommend_${a}_${u[a] - 1}`,
							tag: a,
							batched: _ ?? o.config.config?.batched ?? !0,
							realtime: !!(I.options?.realtime ?? I.profile?.options?.realtime ?? o.config.config?.realtime),
							batchId: C,
							middleware: o.config.config.middleware,
							plugins: o.config.config.plugins,
							branch: o.config.config?.branch || 'production',
							limit: o.config.config?.limit,
							settings: { variants: o.config.config?.variants },
							globals: c,
						};
					s?.branch && (l.branch = s?.branch);
					let t = Object.keys(o.controller)
						.map((m) => o.controller[m])
						.filter(
							(m) =>
								JSON.stringify({
									batched: m.config.batched,
									branch: m.config.branch,
									globals: m.config.globals,
									tag: m.config.tag,
									realtime: m.config.realtime,
								}) == JSON.stringify({ batched: l.batched, branch: l.branch, globals: l.globals, tag: l.tag, realtime: l.realtime })
						)[0];
					if (!t) {
						const m = (await Promise.all([n.e(9456), n.e(935)]).then(n.bind(n, './src/create/createRecommendationController.ts'))).default;
						(t = m({ url: o.config.url, controller: l, context: I, mode: o.config.mode }, { client: o.client, tracker: o.tracker })),
							o.uses.forEach((p) => t.use(p)),
							o.plugins.forEach((p) => t.plugin(p.func, ...p.args)),
							o.middleware.forEach((p) => t.on(p.event, ...p.func));
					}
					t.store.loading || (await t.search()),
						t.addTargeter(o.targeter),
						(o.controller[t.config.id] = t),
						(window.athos.controller = window.athos.controller || {}),
						(window.athos.controller[t.config.id] = t);
					const E = t.store.profile.display?.templateParameters,
						i = t.store.profile.display?.template?.component;
					if (t.store.error) return;
					if (!t.store.profile.display.template) {
						o.logger.error(`profile '${a}' found on the following element is missing a template!
${g?.outerHTML}`);
						return;
					}
					if (!E) {
						o.logger.error(`profile '${a}' found on the following element is missing templateParameters!
${g?.outerHTML}`);
						return;
					}
					if (!i) {
						o.logger.error(`profile '${a}' found on the following element is missing a component!
${g?.outerHTML}`);
						return;
					}
					let y = {},
						h;
					if (
						((y.className = `ss__recommendation-${i.toLowerCase()}`),
						e?.setAttribute('id', `${l.id}`),
						o.config.components[i]?.onTarget?.(b, g, e, t),
						o.config.components[i] && typeof o.config.components[i] == 'function')
					)
						h = await o.config.components[i]();
					else if (o.config.components[i] && typeof o.config.components[i] == 'object') {
						y = o.config.components[i].props || {};
						const m = [];
						m.push(o.config.components[i].component()), (h = (await Promise.all(m))[0]);
					}
					if (!h) {
						o.logger.error(`profile '${a}' found on the following element is expecting component mapping for '${i}' - verify instantiator config.
${g?.outerHTML}`);
						return;
					}
					setTimeout(() => {
						e && h && (0, x.XX)((0, T.Y)(h, { controller: t, snap: r?.snap, ...y }), e);
					});
				}
				function A(o) {
					if (typeof o == 'function')
						try {
							const r = o();
							if (Array.isArray(r)) return r;
						} catch {}
					else if (Array.isArray(o)) return o;
					return [];
				}
				function P(o) {
					const r = {};
					return (
						Object.keys(o).map((e) => {
							o[e] !== void 0 && (r[e] = o[e]);
						}),
						r
					);
				}
			},
		},
	]);
})();

//# sourceMappingURL=6072.74db007b.iframe.bundle.js.map
