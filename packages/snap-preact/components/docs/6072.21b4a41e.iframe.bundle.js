'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6072],
		{
			'./src/Instantiators/RecommendationInstantiator.tsx'(k, D, n) {
				n.d(D, { RecommendationInstantiator: () => U });
				var T = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = n('../../node_modules/preact/dist/preact.module.js'),
					j = n('../../node_modules/deepmerge/dist/cjs.js'),
					I = n.n(j),
					w = n('../../node_modules/@searchspring/snap-toolbox/dist/esm/DomTargeter/DomTargeter.js'),
					L = n('../../node_modules/@searchspring/snap-toolbox/dist/esm/getContext/getContext.js'),
					M = n('../../node_modules/@searchspring/snap-toolbox/dist/esm/types.js'),
					$ = n('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					v = n('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					B = n('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				const K = 'production';
				class U {
					constructor(i, e, y) {
						if (
							((this.mode = M.$.production),
							(this.controller = {}),
							(this.uses = []),
							(this.plugins = []),
							(this.middleware = []),
							(this.config = i),
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
							(window.searchspring = window.searchspring || {}),
							(this.context = I()(y || {}, i.context || {})),
							(this.client = e?.client || new $.K(this.config.client.globals, this.config.client.config)),
							(this.tracker = e?.tracker || new B.J(this.config.client.globals)),
							(this.logger = e?.logger || new v.V({ prefix: 'RecommendationInstantiator ', mode: this.mode }));
						const u = {};
						this.targeter = new w.b(
							[
								{
									selector: `${
										this.config.selector || 'script[type="searchspring/recommend"], script[type="searchspring/personalized-recommendations"]'
									}, script[type="searchspring/recommend"][profile="email"]`,
									autoRetarget: !0,
									clickRetarget: !0,
									inject: {
										action: 'before',
										element: (d, m) => {
											const b = m.getAttribute('profile') || '',
												s = document.createElement('div');
											return s.setAttribute('searchspring-recommend', b), s;
										},
									},
								},
								{ selector: 'script[type="searchspring/recommendations"]', autoRetarget: !0, clickRetarget: !0, emptyTarget: !1 },
							],
							async (d, m, b) => {
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
									b || m
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
													r = I()(this.context, P({ globals: f, profile: c.profile }));
												s.custom && (r.custom = I()(r.custom, s.custom)), O(this, e || {}, l, r, u, t, E, c);
											}
										});
								} else {
									const { profile: C, products: f, product: a, seed: _, filters: c, blockedItems: l, options: t, shopper: E, shopperId: r } = s,
										R = [].concat(f || a || _ || []),
										h = [E, E?.id, r, r?.id].filter((p) => p && typeof p == 'string').pop(),
										g = {
											tag: C,
											...P({ products: R.length ? R : void 0, cart: s.cart && A(s.cart), shopper: h, filters: c, blockedItems: l, profile: t }),
										};
									O(this, e || {}, m, I()(this.context, s), u, b, g, d);
								}
							}
						);
					}
					plugin(i, ...e) {
						this.plugins.push({ func: i, args: e });
					}
					on(i, ...e) {
						this.middleware.push({ event: i, func: e });
					}
					use(i) {
						this.uses.push(i);
					}
				}
				async function O(o, i, e, y, u, d, m, b) {
					const { profile: s, batchId: C, cart: f, tag: a } = m,
						_ = s?.batched ?? m.batched ?? !0;
					if (!a) {
						o.logger.warn("'tag' is missing from <script> tag, skipping this profile", d);
						return;
					}
					Array.isArray(f) && o.tracker.cookies.cart.set(f), (u[a] = u[a] + 1 || 1);
					const c = I().all([o.config.client?.globals || {}, o.config.config?.globals || {}, m]),
						l = {
							id: `recommend_${a}_${u[a] - 1}`,
							tag: a,
							batched: _ ?? o.config.config?.batched ?? !0,
							realtime: !!(y.options?.realtime ?? y.profile?.options?.realtime ?? o.config.config?.realtime),
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
						.map((g) => o.controller[g])
						.filter(
							(g) =>
								JSON.stringify({
									batched: g.config.batched,
									branch: g.config.branch,
									globals: g.config.globals,
									tag: g.config.tag,
									realtime: g.config.realtime,
								}) == JSON.stringify({ batched: l.batched, branch: l.branch, globals: l.globals, tag: l.tag, realtime: l.realtime })
						)[0];
					if (!t) {
						const g = (await Promise.all([n.e(2904), n.e(935)]).then(n.bind(n, './src/create/createRecommendationController.ts'))).default;
						(t = g({ url: o.config.url, controller: l, context: y, mode: o.config.mode }, { client: o.client, tracker: o.tracker })),
							o.uses.forEach((p) => t.use(p)),
							o.plugins.forEach((p) => t.plugin(p.func, ...p.args)),
							o.middleware.forEach((p) => t.on(p.event, ...p.func));
					}
					t.store.loading || (await t.search()),
						t.addTargeter(o.targeter),
						(o.controller[t.config.id] = t),
						(window.searchspring.controller = window.searchspring.controller || {}),
						(window.searchspring.controller[t.config.id] = t);
					const E = t.store.profile.display?.templateParameters,
						r = t.store.profile.display?.template?.component;
					if (t.store.error) return;
					if (!t.store.profile.display.template) {
						o.logger.error(`profile '${a}' found on the following element is missing a template!
${d?.outerHTML}`);
						return;
					}
					if (!E) {
						o.logger.error(`profile '${a}' found on the following element is missing templateParameters!
${d?.outerHTML}`);
						return;
					}
					if (!r) {
						o.logger.error(`profile '${a}' found on the following element is missing a component!
${d?.outerHTML}`);
						return;
					}
					let R = {},
						h;
					if (
						((R.className = `ss__recommendation-${r.toLowerCase()}`),
						e?.setAttribute('id', `${l.id}`),
						o.config.components[r]?.onTarget?.(b, d, e, t),
						o.config.components[r] && typeof o.config.components[r] == 'function')
					)
						h = await o.config.components[r]();
					else if (o.config.components[r] && typeof o.config.components[r] == 'object') {
						R = o.config.components[r].props || {};
						const g = [];
						g.push(o.config.components[r].component()), (h = (await Promise.all(g))[0]);
					}
					if (!h) {
						o.logger.error(`profile '${a}' found on the following element is expecting component mapping for '${r}' - verify instantiator config.
${d?.outerHTML}`);
						return;
					}
					setTimeout(() => {
						e && h && (0, x.XX)((0, T.Y)(h, { controller: t, snap: i?.snap, ...R }), e);
					});
				}
				function A(o) {
					if (typeof o == 'function')
						try {
							const i = o();
							if (Array.isArray(i)) return i;
						} catch {}
					else if (Array.isArray(o)) return o;
					return [];
				}
				function P(o) {
					const i = {};
					return (
						Object.keys(o).map((e) => {
							o[e] !== void 0 && (i[e] = o[e]);
						}),
						i
					);
				}
			},
		},
	]);
})();

//# sourceMappingURL=6072.21b4a41e.iframe.bundle.js.map
