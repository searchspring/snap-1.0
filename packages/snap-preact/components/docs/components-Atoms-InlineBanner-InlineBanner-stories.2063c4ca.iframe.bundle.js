(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[54],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.stories.tsx'(C, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => n, __namedExportsOrder: () => m, default: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					f = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const b =
					"# Inline Banner\n\n## Usage\n```jsx\nimport { InlineBanner } from '@athoscommerce/snap-preact/components';\n```\n\n### banner\nThe `banner` prop specifies a reference to an inline banner object from the `content` object.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} />\n```\n\n### width\nThe `width` prop specifies the width of the inline banner.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} width={'300px'} />\n```\n\n### layout\nThe `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} layout={'grid'} />\n```\n\n\n### onClick\nThe `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.\n\n```js\nconst CustomBannerClick = (e, banner) => {\n    console.log('You Clicked a banner!' , e)\n};\n```\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} onClick={CustomBannerClick} />\n```";
				var P = e('./components/src/types.ts');
				const E = {
						title: 'Atoms/InlineBanner',
						component: o._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(p.oz, { options: { overrides: { code: f.Z } }, children: b }), (0, s.Y)(p.uY, { story: p.h1 })],
									}),
							},
						},
						argTypes: {
							banner: {
								description: 'Banner object reference',
								type: { required: !0 },
								table: { type: { summary: 'inline banner store object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Banner layout',
								defaultValue: P.V.grid,
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [P.V.grid, P.V.list],
								control: { type: 'select' },
							},
							width: {
								description: 'InlineBanner width',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							...t.F,
						},
						decorators: [
							(r) =>
								(0, s.Y)('div', { style: { width: '220px', height: '300px', position: 'relative' }, children: (0, s.Y)(r, { height: '200px' }) }),
						],
					},
					d = a.p.search({ id: 'InlineBanner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					n = (r, { loaded: { controller: _ } }) => {
						const T = _?.store?.results?.filter((g) => g.type === 'banner').pop();
						return T && (0, s.Y)(o._, { ...r, banner: T });
					};
				(n.loaders = [async () => (await d.search(), { controller: d })]),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: {
								originalSource: `(args: InlineBannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const inlineBanners = controller?.store?.results?.filter(result => result.type === 'banner').pop() as Banner;
  return inlineBanners && <InlineBanner {...args} banner={inlineBanners} />;
}`,
								...n.parameters?.docs?.source,
							},
						},
					});
				const m = ['Default'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(C, i, e) {
				'use strict';
				e.d(i, { _: () => g });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					f = e.n(o),
					t = e('./components/src/providers/cache.tsx'),
					a = e('./components/src/providers/controller.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/withTracking.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/hooks/useA11y.tsx'),
					r = e('./components/src/types.ts'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js');
				const T = ({ width: O }) =>
						(0, p.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: O,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					g = (0, a.Bk)(
						(0, P.W)(
							(0, _.PA)((O) => {
								const h = (0, b.u)(),
									v = (0, E.LU)(),
									M = { layout: r.V.grid, width: 'auto', treePath: v },
									D = (0, d.v6)('inlineBanner', h, M, O),
									{ banner: c, className: l, internalClassName: y, disableA11y: u, layout: I, onClick: B } = D,
									x = (0, n.Z)(D, T);
								return c && c.value
									? (0, s.Y)(t._, {
											children: (0, s.Y)('div', {
												onClick: (A) => {
													B && B(A, c);
												},
												role: 'article',
												ref: (A) => {
													u || (0, m.iy)(A), (O.trackingRef.current = A);
												},
												className: f()('ss__inline-banner', `ss__inline-banner--${I}`, l, y),
												...x,
												dangerouslySetInnerHTML: { __html: c.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/hooks/useA11y.tsx'(C, i, e) {
				'use strict';
				e.d(i, { DH: () => f, aZ: () => o, iy: () => t });
				const s = 9,
					p = 27,
					o = 'ss-a11y',
					f =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function t(a, b, P, E) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = d),
							(n.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					a &&
						!a.attributes?.[o] &&
						(a.setAttribute(o, !0),
						a.setAttribute('tabIndex', `${b || 0}`),
						a.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && a.click();
						}),
						P &&
							a.addEventListener('keydown', function (n) {
								const m = a.querySelectorAll(f),
									r = m[0],
									_ = m[m.length - 1];
								if (n.keyCode == p) {
									a.focus(), E && E(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === s) &&
									(n.shiftKey
										? document.activeElement === r && (_.focus(), n.preventDefault())
										: document.activeElement === _ && (r.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(C, i, e) {
				'use strict';
				e.d(i, { v: () => o });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 250,
					o = (t, a = {}) => {
						const { rootMargin: b = '0px', fireOnce: P = !1, threshold: E = 0, minVisibleTime: d = 0 } = a,
							[n, m] = (0, s.J0)(!1),
							r = (0, s.li)(null),
							_ = (0, s.li)(null),
							[T, g] = (0, s.J0)(0),
							O = (0, s.hb)((h) => {
								(t.current = h), g((v) => v + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								m(!1);
								let h = null,
									v = null;
								if (!window.IntersectionObserver || !t.current) return;
								const M = () => {
										v && (window.clearInterval(v), (v = null));
									},
									D = () => {
										d > 0
											? ((_.current = Date.now()),
											  r.current && window.clearTimeout(r.current),
											  (r.current = window.setTimeout(() => {
													m(!0), P && t.current && h && h.unobserve(t.current);
											  }, d)))
											: (m(!0), P && t.current && h && h.unobserve(t.current));
									},
									c = () => {
										r.current && window.clearTimeout(r.current), (r.current = null), (_.current = null), m(!1);
									};
								return (
									(h = new IntersectionObserver(
										([l]) => {
											l.isIntersecting
												? t.current && f(t.current)
													? (M(), D())
													: (c(),
													  v ||
															(v = window.setInterval(() => {
																if (!t.current) {
																	M();
																	return;
																}
																f(t.current) && (M(), D());
															}, p)))
												: (M(), c());
										},
										{ rootMargin: b, threshold: E }
									)),
									t.current && h.observe(t.current),
									() => {
										m(!1), M(), r.current && window.clearTimeout(r.current), h && t.current && h.unobserve(t.current);
									}
								);
							}, [t, T]),
							{ inViewport: n, updateRef: O }
						);
					};
				function f(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(C, i, e) {
				'use strict';
				e.d(i, { N: () => f, W: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('./components/src/utilities/createImpressionObserver.ts'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const f = 'sstracking';
				function t(a) {
					const b = a;
					return (E) => {
						const { controller: d, result: n, banner: m, type: r, content: _, ...T } = E;
						if (E.trackingRef) return (0, s.Y)(b, { ...E });
						!d && (!r || !_) && console.warn('Warning: No controller provided to withTracking', E),
							!n && !m && (!r || !_) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: g, inViewport: O, updateRef: h } = (0, p.Q)(),
							v = (n || m || (r && _?.[r]?.[0]))?.responseId,
							M = (0, o.li)(v),
							D = (0, o.li)(!1);
						M.current !== v && (D.current = !0),
							(0, o.vJ)(() => {
								M.current !== v && ((M.current = v), h(g.current));
							}, [v, h]),
							(0, o.vJ)(() => {
								D.current && !O && (D.current = !1);
							}, [O, v]);
						const c = r && _ && !n && ['search', 'autocomplete'].includes(d?.type || '');
						O && !D.current && (c ? d?.track.banner.impression(_[r][0]) : n?.bundleSeed || d?.track.product.impression(n || m));
						const l = (0, o.hb)(
							(u) => {
								c ? d?.track.banner.click(u, _[r][0]) : d?.track.product.click(u, n || m);
							},
							[d, n, m, r, _]
						);
						(0, o.vJ)(() => {
							const u = g.current;
							if (u)
								return (
									u.setAttribute(f, 'true'),
									u.addEventListener('click', l, !0),
									() => {
										u.removeEventListener('click', l, !0);
									}
								);
						}, [l]);
						const y = {
							...T,
							controller: d,
							result: n,
							banner: m,
							type: r,
							content: _,
							trackingRef: (0, o.hb)(
								(u) => {
									h(u);
								},
								[h]
							),
						};
						return (0, s.Y)(b, { ...y });
					};
				}
			},
			'./components/src/types.ts'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => p, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					p = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(p || {});
			},
			'./components/src/utilities/componentArgs.ts'(C, i, e) {
				'use strict';
				e.d(i, { F: () => s });
				const s = {
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
			'./components/src/utilities/createImpressionObserver.ts'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					f = 1e3;
				function t(a) {
					const b = (0, s.li)(null),
						{ inViewport: P, updateRef: E } = (0, p.v)(b, { ...a, fireOnce: !0, threshold: o, minVisibleTime: f });
					return { ref: b, inViewport: P, updateRef: E };
				}
			},
			'./components/src/utilities/snapify.ts'(C, i, e) {
				'use strict';
				e.d(i, { p: () => h });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					r = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					_ = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					O = { globals: { siteId: 'atkzs2' } };
				class h {
					static recommendation(l) {
						const y = l.id;
						if (g[y]) return g[y];
						const u = (g[y] = M({ client: O, controller: l }));
						return (
							u.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(l) {
						const y = l.id;
						if (g[y]) return g[y];
						const u = (g[y] = D({ client: O, controller: l }));
						return (
							u.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							u.init(),
							u
						);
					}
					static search(l) {
						const y = l.id;
						if (g[y]) return g[y];
						const u = (g[y] = v({ client: O, controller: l }));
						return (
							u.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							u.init(),
							u
						);
					}
				}
				function v(c) {
					const l = new E.V(new n.E({ settings: { coreType: 'query', corePrefix: c.controller.id } }), d.X);
					return new p.Tp(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new b.U(c.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new m.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new T.J(c.client.globals),
					});
				}
				function M(c) {
					const l = new E.V(new n.E(), d.X).detach(!0);
					return new f.c(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new P.t(c.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new m.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new T.J(c.client.globals),
					});
				}
				function D(c) {
					const l = new E.V(new n.E(), d.X).detach();
					return new o.Z(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new a.Y(c.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new m.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new T.J(c.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, i, e) {
				'use strict';
				e.d(i, { Z: () => f });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					f = (t) => {
						const a = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								a.current && t.className?.includes('lang-') && !t.className?.includes(o) && window?.Prism?.highlightElement(a.current);
							}, [t.className, t.children, a]),
							(0, s.Y)('code', { ...t, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (C.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-InlineBanner-InlineBanner-stories.2063c4ca.iframe.bundle.js.map
