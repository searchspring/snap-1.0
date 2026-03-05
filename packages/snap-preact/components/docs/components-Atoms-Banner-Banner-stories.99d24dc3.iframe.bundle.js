(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4188],
		{
			'./components/src/components/Atoms/Banner/Banner.stories.tsx'(B, _, e) {
				'use strict';
				e.r(_), e.d(_, { Footer: () => l, Header: () => a, Left: () => t, Secondary: () => c, __namedExportsOrder: () => p, default: () => T });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts');
				const I =
						"# Banner\n\nRenders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. \n\nThis `Banner` component does not support inline banners. See `InlineBanner` component below.\n\n## Usage\n```jsx\nimport { Banner } from '@athoscommerce/snap-preact-components';\n```\n\n### content\nThe required `content` prop specifies an object of banners returned from the athos API.\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n### type\nThe required `type` prop specifies the banner type to render from the `content` object.\n\nBanner Types include `header`, `footer`, `left`, and `banner`. \n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'footer'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'left'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'banner'} />\n```",
					T = {
						title: 'Atoms/Banner',
						component: m.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(P.oz, { options: { overrides: { code: O.Z } }, children: I }), (0, o.Y)(P.uY, { story: P.h1 })],
									}),
							},
						},
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							content: {
								description: 'Banner content store reference',
								type: { required: !0 },
								table: { type: { summary: 'banner content store object' }, category: 'Templates Legal' },
								control: { type: 'none' },
							},
							type: {
								description: 'Banner position type',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: ['header', 'footer', 'left', 'inline', 'banner'],
								control: { type: 'select' },
							},
							...n.F,
						},
					},
					d = y.p.search({ id: 'Banner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					a = (g, { loaded: { controller: i } }) => (0, o.Y)(m.l, { ...g, content: i?.store?.merchandising?.content });
				(a.loaders = [async () => (await d.search(), { controller: d })]), (a.args = { type: 'header' });
				const l = (g, { loaded: { controller: i } }) => (0, o.Y)(m.l, { ...g, content: i?.store?.merchandising?.content });
				(l.loaders = [async () => (await d.search(), { controller: d })]), (l.args = { type: 'footer' });
				const c = (g, { loaded: { controller: i } }) => (0, o.Y)(m.l, { ...g, content: i?.store?.merchandising?.content });
				(c.loaders = [async () => (await d.search(), { controller: d })]), (c.args = { type: 'banner' });
				const t = (g, { loaded: { controller: i } }) => (0, o.Y)(m.l, { ...g, content: i?.store?.merchandising?.content });
				(t.loaders = [async () => (await d.search(), { controller: d })]),
					(t.args = { type: 'left' }),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...a.parameters?.docs?.source,
							},
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...l.parameters?.docs?.source,
							},
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...c.parameters?.docs?.source,
							},
						},
					}),
					(t.parameters = {
						...t.parameters,
						docs: {
							...t.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...t.parameters?.docs?.source,
							},
						},
					});
				const p = ['Header', 'Footer', 'Secondary', 'Left'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(B, _, e) {
				'use strict';
				e.d(_, { l: () => i });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					n = e.n(O),
					y = e('./components/src/providers/cache.tsx'),
					I = e('./components/src/providers/controller.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/withTracking.tsx'),
					a = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					i = (0, I.Bk)(
						(0, P.PA)((b) => {
							const h = (0, T.u)(),
								D = { treePath: (0, a.LU)() },
								M = (0, l.v6)('banner', h, D, b),
								{ controller: s, type: r, className: E, internalClassName: u } = M,
								f = M.content || s?.store?.merchandising.content;
							if (r === t.c.INLINE) return console.warn(`BannerType '${t.c.INLINE}' is not supported in <Banner /> component`), null;
							const C = (0, c.Z)(M, g),
								A = f?.[r]?.[0]?.value;
							if (!r || !A) return null;
							const R = (0, p.hb)(
								(0, d.W)((j) =>
									(0, o.Y)('div', {
										className: n()('ss__banner', `ss__banner--${r}`, E, u),
										...C,
										ref: j.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof A == 'string' ? A : A.join('') },
									})
								),
								[A, r]
							);
							return (0, o.Y)(y._, { children: (0, o.Y)(R, { ...M }) });
						})
					);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, _, e) {
				'use strict';
				e.d(_, { v: () => m });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = 250,
					m = (n, y = {}) => {
						const { rootMargin: I = '0px', fireOnce: T = !1, threshold: d = 0, minVisibleTime: a = 0 } = y,
							[l, c] = (0, o.J0)(!1),
							t = (0, o.li)(null),
							p = (0, o.li)(null),
							[g, i] = (0, o.J0)(0),
							b = (0, o.hb)((h) => {
								(n.current = h), i((v) => v + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								c(!1);
								let h = null,
									v = null;
								if (!window.IntersectionObserver || !n.current) return;
								const D = () => {
										v && (window.clearInterval(v), (v = null));
									},
									M = () => {
										a > 0
											? ((p.current = Date.now()),
											  t.current && window.clearTimeout(t.current),
											  (t.current = window.setTimeout(() => {
													c(!0), T && n.current && h && h.unobserve(n.current);
											  }, a)))
											: (c(!0), T && n.current && h && h.unobserve(n.current));
									},
									s = () => {
										t.current && window.clearTimeout(t.current), (t.current = null), (p.current = null), c(!1);
									};
								return (
									(h = new IntersectionObserver(
										([r]) => {
											r.isIntersecting
												? n.current && O(n.current)
													? (D(), M())
													: (s(),
													  v ||
															(v = window.setInterval(() => {
																if (!n.current) {
																	D();
																	return;
																}
																O(n.current) && (D(), M());
															}, P)))
												: (D(), s());
										},
										{ rootMargin: I, threshold: d }
									)),
									n.current && h.observe(n.current),
									() => {
										c(!1), D(), t.current && window.clearTimeout(t.current), h && n.current && h.unobserve(n.current);
									}
								);
							}, [n, g]),
							{ inViewport: l, updateRef: b }
						);
					};
				function O(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(B, _, e) {
				'use strict';
				e.d(_, { N: () => O, W: () => n });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = 'sstracking';
				function n(y) {
					const I = y;
					return (d) => {
						const { controller: a, result: l, banner: c, type: t, content: p, ...g } = d;
						if (d.trackingRef) return (0, o.Y)(I, { ...d });
						!a && (!t || !p) && console.warn('Warning: No controller provided to withTracking', d),
							!l && !c && (!t || !p) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: i, inViewport: b, updateRef: h } = (0, P.Q)(),
							v = (l || c || (t && p?.[t]?.[0]))?.responseId,
							D = (0, m.li)(v),
							M = (0, m.li)(!1);
						D.current !== v && (M.current = !0),
							(0, m.vJ)(() => {
								D.current !== v && ((D.current = v), h(i.current));
							}, [v, h]),
							(0, m.vJ)(() => {
								M.current && !b && (M.current = !1);
							}, [b, v]);
						const s = t && p && !l && ['search', 'autocomplete'].includes(a?.type || '');
						b && !M.current && (s ? a?.track.banner.impression(p[t][0]) : l?.bundleSeed || a?.track.product.impression(l || c));
						const r = (0, m.hb)(
							(u) => {
								s ? a?.track.banner.click(u, p[t][0]) : a?.track.product.click(u, l || c);
							},
							[a, l, c, t, p]
						);
						(0, m.vJ)(() => {
							const u = i.current;
							if (u)
								return (
									u.setAttribute(O, 'true'),
									u.addEventListener('click', r, !0),
									() => {
										u.removeEventListener('click', r, !0);
									}
								);
						}, [r]);
						const E = {
							...g,
							controller: a,
							result: l,
							banner: c,
							type: t,
							content: p,
							trackingRef: (0, m.hb)(
								(u) => {
									h(u);
								},
								[h]
							),
						};
						return (0, o.Y)(I, { ...E });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(B, _, e) {
				'use strict';
				e.d(_, { F: () => o });
				const o = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/createImpressionObserver.ts'(B, _, e) {
				'use strict';
				e.d(_, { Q: () => n });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					P = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					O = 1e3;
				function n(y) {
					const I = (0, o.li)(null),
						{ inViewport: T, updateRef: d } = (0, P.v)(I, { ...y, fireOnce: !0, threshold: m, minVisibleTime: O });
					return { ref: I, inViewport: T, updateRef: d };
				}
			},
			'./components/src/utilities/snapify.ts'(B, _, e) {
				'use strict';
				e.d(_, { p: () => h });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					c = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					t = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					b = { globals: { siteId: 'atkzs2' } };
				class h {
					static recommendation(r) {
						const E = r.id;
						if (i[E]) return i[E];
						const u = (i[E] = D({ client: b, controller: r }));
						return (
							u.on('afterStore', async ({ controller: f }, C) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(r) {
						const E = r.id;
						if (i[E]) return i[E];
						const u = (i[E] = M({ client: b, controller: r }));
						return (
							u.on('afterStore', async ({ controller: f }, C) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
					static search(r) {
						const E = r.id;
						if (i[E]) return i[E];
						const u = (i[E] = v({ client: b, controller: r }));
						return (
							u.on('afterStore', async ({ controller: f }, C) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
				}
				function v(s) {
					const r = new d.V(new l.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), a.X);
					return new P.Tp(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new I.U(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new c.E(),
						profiler: new t.U(),
						logger: new p.V(),
						tracker: new g.J(s.client.globals),
					});
				}
				function D(s) {
					const r = new d.V(new l.E(), a.X).detach(!0);
					return new O.c(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new T.t(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new c.E(),
						profiler: new t.U(),
						logger: new p.V(),
						tracker: new g.J(s.client.globals),
					});
				}
				function M(s) {
					const r = new d.V(new l.E(), a.X).detach();
					return new m.Z(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new y.Y(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new c.E(),
						profiler: new t.U(),
						logger: new p.V(),
						tracker: new g.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, _, e) {
				'use strict';
				e.d(_, { Z: () => O });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					O = (n) => {
						const y = (0, P.li)(null);
						return (
							(0, P.vJ)(() => {
								y.current && n.className?.includes('lang-') && !n.className?.includes(m) && window?.Prism?.highlightElement(y.current);
							}, [n.className, n.children, y]),
							(0, o.Y)('code', { ...n, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function _(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(_.keys = () => []), (_.resolve = _), (_.id = '../../node_modules/memoizerific sync recursive'), (B.exports = _);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Banner-Banner-stories.99d24dc3.iframe.bundle.js.map
