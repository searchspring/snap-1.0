(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[54],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.stories.tsx'(T, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => t, __namedExportsOrder: () => c, default: () => _ });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					v = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const O =
					"# Inline Banner\n\n## Usage\n```jsx\nimport { InlineBanner } from '@searchspring/snap-preact-components';\n```\n\n### banner\nThe `banner` prop specifies a reference to an inline banner object from the `content` object.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} />\n```\n\n### width\nThe `width` prop specifies the width of the inline banner.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} width={'300px'} />\n```\n\n### layout\nThe `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} layout={'grid'} />\n```\n\n\n### onClick\nThe `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.\n\n```js\nconst CustomBannerClick = (e, banner) => {\n    console.log('You Clicked a banner!' , e)\n};\n```\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} onClick={CustomBannerClick} />\n```";
				var h = e('./components/src/types.ts');
				const _ = {
						title: 'Atoms/InlineBanner',
						component: s._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(E.oz, { options: { overrides: { code: v.Z } }, children: O }), (0, r.Y)(E.uY, { story: E.h1 })],
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
								defaultValue: h.V.grid,
								table: { type: { summary: 'string' } },
								options: [h.V.grid, h.V.list],
								control: { type: 'select' },
							},
							width: { description: 'InlineBanner width', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							onClick: {
								description: 'Custom onClick event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...n.F,
						},
						decorators: [
							(o) =>
								(0, r.Y)('div', { style: { width: '220px', height: '300px', position: 'relative' }, children: (0, r.Y)(o, { height: '200px' }) }),
						],
					},
					p = a.p.search({ id: 'InlineBanner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					t = (o, { loaded: { controller: y } }) => {
						const P = y?.store?.results?.filter((g) => g.type === 'banner').pop();
						return P && (0, r.Y)(s._, { ...o, banner: P });
					};
				(t.loaders = [async () => (await p.search(), { controller: p })]),
					(t.parameters = {
						...t.parameters,
						docs: {
							...t.parameters?.docs,
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
								...t.parameters?.docs?.source,
							},
						},
					});
				const c = ['Default'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(T, l, e) {
				'use strict';
				e.d(l, { _: () => D });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('../../node_modules/preact/dist/preact.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					n = e.n(v),
					a = e('./components/src/providers/cache.tsx'),
					O = e('./components/src/providers/controller.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/withTracking.tsx'),
					p = e('./components/src/providers/treePath.tsx'),
					t = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					o = e('./components/src/hooks/useA11y.tsx'),
					y = e('./components/src/types.ts'),
					P = e('../../node_modules/mobx-react-lite/es/index.js');
				const g = ({ width: m }) =>
						(0, s.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: m,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					D = (0, O.Bk)(
						(0, _.W)(
							(0, P.PA)((m) => {
								const I = (0, h.u)(),
									b = (0, p.LU)(),
									C = { layout: y.V.grid, width: 'auto', treePath: b },
									i = (0, t.v6)('inlineBanner', I, C, m),
									{ banner: d, className: u, internalClassName: M, disableA11y: f, layout: B, onClick: x } = i,
									R = (0, c.Z)(i, g);
								return d && d.value
									? (0, r.Y)(a._, {
											children: (0, r.Y)('div', {
												onClick: (A) => {
													x && x(A, d);
												},
												role: 'article',
												ref: (A) => {
													f || (0, o.iy)(A), (m.trackingRef.current = A);
												},
												className: n()('ss__inline-banner', `ss__inline-banner--${B}`, u, M),
												...R,
												dangerouslySetInnerHTML: { __html: d.value },
											}),
									  })
									: (0, r.Y)(E.FK, {});
							})
						)
					);
			},
			'./components/src/hooks/useA11y.tsx'(T, l, e) {
				'use strict';
				e.d(l, { DH: () => v, aZ: () => s, iy: () => n });
				const r = 9,
					E = 27,
					s = 'ss-a11y',
					v =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function n(a, O, h, _) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = p),
							(t.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					a &&
						!a.attributes?.[s] &&
						(a.setAttribute(s, !0),
						a.setAttribute('tabIndex', `${O || 0}`),
						a.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && a.click();
						}),
						h &&
							a.addEventListener('keydown', function (t) {
								const c = a.querySelectorAll(v),
									o = c[0],
									y = c[c.length - 1];
								if (t.keyCode == E) {
									a.focus(), _ && _(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === r) &&
									(t.shiftKey
										? document.activeElement === o && (y.focus(), t.preventDefault())
										: document.activeElement === y && (o.focus(), t.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(T, l, e) {
				'use strict';
				e.d(l, { v: () => s });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 250,
					s = (n, a = {}) => {
						const { rootMargin: O = '0px', fireOnce: h = !1, threshold: _ = 0, minVisibleTime: p = 0 } = a,
							[t, c] = (0, r.J0)(!1),
							o = (0, r.li)(null),
							y = (0, r.li)(null),
							[P, g] = (0, r.J0)(0),
							D = (0, r.hb)((m) => {
								(n.current = m), g((I) => I + 1);
							}, []);
						return (
							(0, r.vJ)(() => {
								c(!1);
								let m = null,
									I = null;
								if (!window.IntersectionObserver || !n.current) return;
								const b = () => {
										I && (window.clearInterval(I), (I = null));
									},
									C = () => {
										p > 0
											? ((y.current = Date.now()),
											  o.current && window.clearTimeout(o.current),
											  (o.current = window.setTimeout(() => {
													c(!0), h && n.current && m && m.unobserve(n.current);
											  }, p)))
											: (c(!0), h && n.current && m && m.unobserve(n.current));
									},
									i = () => {
										o.current && window.clearTimeout(o.current), (o.current = null), (y.current = null), c(!1);
									};
								return (
									(m = new IntersectionObserver(
										([d]) => {
											d.isIntersecting
												? n.current && v(n.current)
													? (b(), C())
													: (i(),
													  I ||
															(I = window.setInterval(() => {
																if (!n.current) {
																	b();
																	return;
																}
																v(n.current) && (b(), C());
															}, E)))
												: (b(), i());
										},
										{ rootMargin: O, threshold: _ }
									)),
									n.current && m.observe(n.current),
									() => {
										c(!1), b(), o.current && window.clearTimeout(o.current), m && n.current && m.unobserve(n.current);
									}
								);
							}, [n, P]),
							{ inViewport: t, updateRef: D }
						);
					};
				function v(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(T, l, e) {
				'use strict';
				e.d(l, { N: () => v, W: () => n });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('./components/src/utilities/createImpressionObserver.ts'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = 'sstracking';
				function n(a) {
					return (h) => {
						const { controller: _, result: p, banner: t, type: c, content: o, ...y } = h;
						if (h.trackingRef) return (0, r.Y)(a, { ...h });
						!_ && (!c || !o) && console.warn('Warning: No controller provided to withTracking', h),
							!p && !t && (!c || !o) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: P, inViewport: g, updateRef: D } = (0, E.Q)(),
							m = (p || t || (c && o?.[c]?.[0]))?.responseId,
							I = (0, s.li)(m),
							b = (0, s.li)(!1);
						I.current !== m && (b.current = !0),
							(0, s.vJ)(() => {
								I.current !== m && ((I.current = m), D(P.current));
							}, [m, D]),
							(0, s.vJ)(() => {
								b.current && !g && (b.current = !1);
							}, [g, m]);
						const C = c && o && !p && ['search', 'autocomplete'].includes(_?.type || '');
						g && !b.current && (C ? _?.track.banner.impression(o[c][0]) : p?.bundleSeed || _?.track.product.impression(p || t));
						const i = (0, s.hb)(
							(u) => {
								C ? _?.track.banner.click(u, o[c][0]) : _?.track.product.click(u, p || t);
							},
							[_, p, t, c, o]
						);
						(0, s.vJ)(() => {
							const u = P.current;
							if (u)
								return (
									u.setAttribute(v, 'true'),
									u.addEventListener('click', i, !0),
									() => {
										u.removeEventListener('click', i, !0);
									}
								);
						}, [i]);
						const d = {
							...y,
							controller: _,
							result: p,
							banner: t,
							type: c,
							content: o,
							trackingRef: (0, s.hb)(
								(u) => {
									D(u);
								},
								[D]
							),
						};
						return (0, r.Y)(a, { ...d });
					};
				}
			},
			'./components/src/types.ts'(T, l, e) {
				'use strict';
				e.d(l, { Q: () => E, V: () => r });
				var r = ((s) => ((s.grid = 'grid'), (s.list = 'list'), s))(r || {}),
					E = ((s) => (
						(s.GRID = 'grid'),
						(s.PALETTE = 'palette'),
						(s.LIST = 'list'),
						(s.SLIDER = 'slider'),
						(s.HIERARCHY = 'hierarchy'),
						(s.TOGGLE = 'toggle'),
						s
					))(E || {});
			},
			'./components/src/utilities/componentArgs.ts'(T, l, e) {
				'use strict';
				e.d(l, { F: () => r });
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
			'./components/src/utilities/createImpressionObserver.ts'(T, l, e) {
				'use strict';
				e.d(l, { Q: () => n });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const s = 0.7,
					v = 1e3;
				function n(a) {
					const O = (0, r.li)(null),
						{ inViewport: h, updateRef: _ } = (0, E.v)(O, { ...a, fireOnce: !0, threshold: s, minVisibleTime: v });
					return { ref: O, inViewport: h, updateRef: _ };
				}
			},
			'./components/src/utilities/snapify.ts'(T, l, e) {
				'use strict';
				e.d(l, { p: () => m });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					E = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					a = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					O = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					h = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					_ = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					p = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					t = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					c = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					o = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					D = { globals: { siteId: '8uyt2m' } };
				class m {
					static recommendation(d) {
						const u = d.id;
						if (g[u]) return g[u];
						const M = (g[u] = b({ client: D, controller: d }));
						return (
							M.on('afterStore', async ({ controller: f }, B) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await B();
							}),
							M.init(),
							M
						);
					}
					static autocomplete(d) {
						const u = d.id;
						if (g[u]) return g[u];
						const M = (g[u] = C({ client: D, controller: d }));
						return (
							M.on('afterStore', async ({ controller: f }, B) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await B();
							}),
							M.init(),
							M
						);
					}
					static search(d) {
						const u = d.id;
						if (g[u]) return g[u];
						const M = (g[u] = I({ client: D, controller: d }));
						return (
							M.on('afterStore', async ({ controller: f }, B) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await B();
							}),
							M.init(),
							M
						);
					}
				}
				function I(i) {
					const d = new _.V(new t.E({ settings: { coreType: 'query', corePrefix: i.controller.id } }), p.X);
					return new E.Tp(i.controller, {
						client: new n.K(i.client.globals, i.client.config),
						store: new O.U(i.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new c.E(),
						profiler: new o.U(),
						logger: new y.V(),
						tracker: new P.J(i.client.globals),
					});
				}
				function b(i) {
					const d = new _.V(new t.E(), p.X).detach(!0);
					return new v.c(i.controller, {
						client: new n.K(i.client.globals, i.client.config),
						store: new h.t(i.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new c.E(),
						profiler: new o.U(),
						logger: new y.V(),
						tracker: new P.J(i.client.globals),
					});
				}
				function C(i) {
					const d = new _.V(new t.E(), p.X).detach();
					return new s.Z(i.controller, {
						client: new n.K(i.client.globals, i.client.config),
						store: new a.Y(i.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new c.E(),
						profiler: new o.U(),
						logger: new y.V(),
						tracker: new P.J(i.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, l, e) {
				'use strict';
				e.d(l, { Z: () => v });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					v = (n) => {
						const a = (0, E.li)(null);
						return (
							(0, E.vJ)(() => {
								a.current && n.className?.includes('lang-') && !n.className?.includes(s) && window?.Prism?.highlightElement(a.current);
							}, [n.className, n.children, a]),
							(0, r.Y)('code', { ...n, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function l(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (T.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-InlineBanner-InlineBanner-stories.dce825f3.iframe.bundle.js.map
