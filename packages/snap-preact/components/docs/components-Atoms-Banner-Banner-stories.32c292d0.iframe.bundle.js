(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4188],
		{
			'./components/src/components/Atoms/Banner/Banner.stories.tsx'(B, u, e) {
				'use strict';
				e.r(u), e.d(u, { Footer: () => _, Header: () => i, Left: () => t, Secondary: () => a, __namedExportsOrder: () => M, default: () => O });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					P = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					E = e('./components/src/utilities/snapify.ts');
				const T =
						"# Banner\n\nRenders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. \n\nThis `Banner` component does not support inline banners. See `InlineBanner` component below.\n\n## Usage\n```jsx\nimport { Banner } from '@searchspring/snap-preact-components';\n```\n\n### content\nThe required `content` prop specifies an object of banners returned from the Searchspring API.\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n### type\nThe required `type` prop specifies the banner type to render from the `content` object.\n\nBanner Types include `header`, `footer`, `left`, and `banner`. \n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'footer'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'left'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'banner'} />\n```",
					O = {
						title: 'Atoms/Banner',
						component: d.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(h.oz, { options: { overrides: { code: P.Z } }, children: T }), (0, r.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						argTypes: {
							content: {
								description: 'Banner content store reference',
								type: { required: !0 },
								table: { type: { summary: 'banner content store object' } },
								control: { type: 'none' },
							},
							type: {
								description: 'Banner position type',
								type: { required: !0 },
								table: { type: { summary: 'string' } },
								options: ['header', 'footer', 'left', 'inline', 'banner'],
								control: { type: 'select' },
							},
							...n.F,
						},
					},
					c = E.p.search({ id: 'Banner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					i = (g, { loaded: { controller: l } }) => (0, r.Y)(d.l, { ...g, content: l?.store?.merchandising?.content });
				(i.loaders = [async () => (await c.search(), { controller: c })]), (i.args = { type: 'header' });
				const _ = (g, { loaded: { controller: l } }) => (0, r.Y)(d.l, { ...g, content: l?.store?.merchandising?.content });
				(_.loaders = [async () => (await c.search(), { controller: c })]), (_.args = { type: 'footer' });
				const a = (g, { loaded: { controller: l } }) => (0, r.Y)(d.l, { ...g, content: l?.store?.merchandising?.content });
				(a.loaders = [async () => (await c.search(), { controller: c })]), (a.args = { type: 'banner' });
				const t = (g, { loaded: { controller: l } }) => (0, r.Y)(d.l, { ...g, content: l?.store?.merchandising?.content });
				(t.loaders = [async () => (await c.search(), { controller: c })]),
					(t.args = { type: 'left' }),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
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
								...i.parameters?.docs?.source,
							},
						},
					}),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
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
								..._.parameters?.docs?.source,
							},
						},
					}),
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
				const M = ['Header', 'Footer', 'Secondary', 'Left'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(B, u, e) {
				'use strict';
				e.d(u, { l: () => D });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/dist/preact.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					E = e.n(n),
					T = e('./components/src/providers/cache.tsx'),
					O = e('./components/src/providers/controller.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/withTracking.tsx'),
					_ = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/utilities/mergeProps.ts'),
					t = e('./components/src/utilities/mergeStyles.ts'),
					M = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = () => (0, P.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					D = (0, O.Bk)(
						(0, d.PA)((p) => {
							const f = (0, c.u)(),
								b = { treePath: (0, _.LU)() },
								s = (0, a.v6)('banner', f, b, p),
								{ controller: m, type: o, className: I, internalClassName: v } = s,
								A = s.content || m?.store?.merchandising.content;
							if (o === M.c.INLINE) return console.warn(`BannerType '${M.c.INLINE}' is not supported in <Banner /> component`), (0, r.Y)(h.FK, {});
							const C = (0, t.Z)(s, l),
								R = A?.[o]?.[0]?.value;
							if (!o || !R) return (0, r.Y)(h.FK, {});
							const j = (0, g.hb)(
								(0, i.W)((x) =>
									(0, r.Y)('div', {
										className: E()('ss__banner', `ss__banner--${o}`, I, v),
										...C,
										ref: x.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof R == 'string' ? R : R.join('') },
									})
								),
								[R, o]
							);
							return (0, r.Y)(T._, { children: (0, r.Y)(j, { ...s }) });
						})
					);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, u, e) {
				'use strict';
				e.d(u, { v: () => d });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 250,
					d = (n, E = {}) => {
						const { rootMargin: T = '0px', fireOnce: O = !1, threshold: c = 0, minVisibleTime: i = 0 } = E,
							[_, a] = (0, r.J0)(!1),
							t = (0, r.li)(null),
							M = (0, r.li)(null),
							[g, l] = (0, r.J0)(0),
							D = (0, r.hb)((p) => {
								(n.current = p), l((f) => f + 1);
							}, []);
						return (
							(0, r.vJ)(() => {
								a(!1);
								let p = null,
									f = null;
								if (!window.IntersectionObserver || !n.current) return;
								const y = () => {
										f && (window.clearInterval(f), (f = null));
									},
									b = () => {
										i > 0
											? ((M.current = Date.now()),
											  t.current && window.clearTimeout(t.current),
											  (t.current = window.setTimeout(() => {
													a(!0), O && n.current && p && p.unobserve(n.current);
											  }, i)))
											: (a(!0), O && n.current && p && p.unobserve(n.current));
									},
									s = () => {
										t.current && window.clearTimeout(t.current), (t.current = null), (M.current = null), a(!1);
									};
								return (
									(p = new IntersectionObserver(
										([m]) => {
											m.isIntersecting
												? n.current && P(n.current)
													? (y(), b())
													: (s(),
													  f ||
															(f = window.setInterval(() => {
																if (!n.current) {
																	y();
																	return;
																}
																P(n.current) && (y(), b());
															}, h)))
												: (y(), s());
										},
										{ rootMargin: T, threshold: c }
									)),
									n.current && p.observe(n.current),
									() => {
										a(!1), y(), t.current && window.clearTimeout(t.current), p && n.current && p.unobserve(n.current);
									}
								);
							}, [n, g]),
							{ inViewport: _, updateRef: D }
						);
					};
				function P(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(B, u, e) {
				'use strict';
				e.d(u, { N: () => P, W: () => n });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('./components/src/utilities/createImpressionObserver.ts'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = 'sstracking';
				function n(E) {
					return (O) => {
						const { controller: c, result: i, banner: _, type: a, content: t, ...M } = O;
						if (O.trackingRef) return (0, r.Y)(E, { ...O });
						!c && (!a || !t) && console.warn('Warning: No controller provided to withTracking', O),
							!i && !_ && (!a || !t) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: g, inViewport: l, updateRef: D } = (0, h.Q)(),
							p = (i || _ || (a && t?.[a]?.[0]))?.responseId,
							f = (0, d.li)(p),
							y = (0, d.li)(!1);
						f.current !== p && (y.current = !0),
							(0, d.vJ)(() => {
								f.current !== p && ((f.current = p), D(g.current));
							}, [p, D]),
							(0, d.vJ)(() => {
								y.current && !l && (y.current = !1);
							}, [l, p]);
						const b = a && t && !i && ['search', 'autocomplete'].includes(c?.type || '');
						l && !y.current && (b ? c?.track.banner.impression(t[a][0]) : i?.bundleSeed || c?.track.product.impression(i || _));
						const s = (0, d.hb)(
							(o) => {
								b ? c?.track.banner.click(o, t[a][0]) : c?.track.product.click(o, i || _);
							},
							[c, i, _, a, t]
						);
						(0, d.vJ)(() => {
							const o = g.current;
							if (o)
								return (
									o.setAttribute(P, 'true'),
									o.addEventListener('click', s, !0),
									() => {
										o.removeEventListener('click', s, !0);
									}
								);
						}, [s]);
						const m = {
							...M,
							controller: c,
							result: i,
							banner: _,
							type: a,
							content: t,
							trackingRef: (0, d.hb)(
								(o) => {
									D(o);
								},
								[D]
							),
						};
						return (0, r.Y)(E, { ...m });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(B, u, e) {
				'use strict';
				e.d(u, { F: () => r });
				const r = {
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
			'./components/src/utilities/createImpressionObserver.ts'(B, u, e) {
				'use strict';
				e.d(u, { Q: () => n });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const d = 0.7,
					P = 1e3;
				function n(E) {
					const T = (0, r.li)(null),
						{ inViewport: O, updateRef: c } = (0, h.v)(T, { ...E, fireOnce: !0, threshold: d, minVisibleTime: P });
					return { ref: T, inViewport: O, updateRef: c };
				}
			},
			'./components/src/utilities/snapify.ts'(B, u, e) {
				'use strict';
				e.d(u, { p: () => p });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					h = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					d = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					P = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					E = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					T = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					c = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					i = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					a = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					t = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const l = {},
					D = { globals: { siteId: '8uyt2m' } };
				class p {
					static recommendation(m) {
						const o = m.id;
						if (l[o]) return l[o];
						const I = (l[o] = y({ client: D, controller: m }));
						return (
							I.on('afterStore', async ({ controller: v }, A) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await A();
							}),
							I.init(),
							I
						);
					}
					static autocomplete(m) {
						const o = m.id;
						if (l[o]) return l[o];
						const I = (l[o] = b({ client: D, controller: m }));
						return (
							I.on('afterStore', async ({ controller: v }, A) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await A();
							}),
							I.init(),
							I
						);
					}
					static search(m) {
						const o = m.id;
						if (l[o]) return l[o];
						const I = (l[o] = f({ client: D, controller: m }));
						return (
							I.on('afterStore', async ({ controller: v }, A) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await A();
							}),
							I.init(),
							I
						);
					}
				}
				function f(s) {
					const m = new c.V(new _.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), i.X);
					return new h.Tp(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new T.U(s.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new a.E(),
						profiler: new t.U(),
						logger: new M.V(),
						tracker: new g.J(s.client.globals),
					});
				}
				function y(s) {
					const m = new c.V(new _.E(), i.X).detach(!0);
					return new P.c(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new O.t(s.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new a.E(),
						profiler: new t.U(),
						logger: new M.V(),
						tracker: new g.J(s.client.globals),
					});
				}
				function b(s) {
					const m = new c.V(new _.E(), i.X).detach();
					return new d.Z(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new E.Y(s.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new a.E(),
						profiler: new t.U(),
						logger: new M.V(),
						tracker: new g.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, u, e) {
				'use strict';
				e.d(u, { Z: () => P });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					P = (n) => {
						const E = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								E.current && n.className?.includes('lang-') && !n.className?.includes(d) && window?.Prism?.highlightElement(E.current);
							}, [n.className, n.children, E]),
							(0, r.Y)('code', { ...n, ref: E, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function u(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(u.keys = () => []), (u.resolve = u), (u.id = '../../node_modules/memoizerific sync recursive'), (B.exports = u);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Banner-Banner-stories.32c292d0.iframe.bundle.js.map
