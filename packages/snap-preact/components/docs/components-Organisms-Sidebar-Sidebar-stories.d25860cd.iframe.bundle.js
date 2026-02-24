(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7583],
		{
			'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx'(b, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => u, __namedExportsOrder: () => v, default: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts'),
					h = e('./components/src/utilities/snapify.ts');
				const D =
						"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Sidebar controller={controller} />\n```\n\n### layout \nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;\n\n```jsx\n<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>\n```\n\n### hideTitleText\nThe `hideTitleText` prop will disable the sidebar title from rendering.\n\n```jsx\n<Sidebar controller={controller} hideTitleText />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```jsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### sticky\nThe `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.\n\n```jsx\n<Sidebar controller={controller} sticky={'true'} />\n```\n\n\n### stickyOffset\nThe `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.\n\n```jsx\n<Sidebar controller={controller} stickyOffset={50} />\n```",
					x = {
						title: 'Organisms/Sidebar',
						component: o.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(m.oz, { options: { overrides: { code: O.Z } }, children: D }), (0, s.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, s.Y)('div', { style: { maxWidth: '300px' }, children: (0, s.Y)(y, {}) })],
						argTypes: {
							controller: {
								description: 'Search controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'specifies the layout of the sidebar',
								table: {
									type: {
										summary: "['filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_']",
									},
									defaultValue: { summary: "[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]" },
								},
								control: 'array',
							},
							titleText: {
								description: 'Text to render in the sidebar title',
								type: { required: !1 },
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
								control: { type: 'text' },
							},
							hideTitleText: {
								defaultValue: !1,
								description: 'hides the sidebar title component',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							sticky: {
								description: 'specifies if the sidebar should be sticky',
								table: { type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							stickyOffset: {
								description: 'specifies the offset of the sidebar when sticky is true',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							...d.F,
						},
					},
					f = h.p.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } }),
					u = (y, { loaded: { controller: P } }) => (0, s.Y)(o.B, { ...y, controller: P });
				(u.loaders = [async () => (await f.search(), { controller: f })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: SidebarProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Sidebar {...args} controller={controller} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(b, a, e) {
				'use strict';
				e.d(a, { B: () => R });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					h = e.n(d),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(D),
					f = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					u = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					A = e('./components/src/hooks/useA11y.tsx'),
					U = e('./components/src/hooks/useLang.tsx'),
					L = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const j = ({ horizontal: t }) =>
					(0, O.AH)({
						display: 'flex',
						flexDirection: t ? 'row' : 'column',
						alignItems: t ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: t ? 'row' : 'column',
							alignItems: t ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					});
				function R(t) {
					const n = (0, v.u)(),
						_ = { treePath: (0, y.LU)() },
						r = (0, T.v6)('list', n, _, t),
						{
							titleText: g,
							onSelect: K,
							native: W,
							multiSelect: w,
							hideOptionLabels: F,
							hideOptionIcons: J,
							hideOptionCheckboxes: Z,
							disabled: N,
							hideTitleText: k,
							options: I,
							requireSelection: Y,
							disableStyles: V,
							className: $,
							internalClassName: Q,
							treePath: G,
						} = r;
					let M = r.selected;
					const H = {
							checkbox: { native: W, ...(0, P.s)({ disableStyles: V }), theme: r?.theme, treePath: G },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, P.s)({ disableStyles: V }), theme: r?.theme, treePath: G },
						},
						q = (0, C.Z)(r, j);
					M && !Array.isArray(M) && (M = [M]);
					const [S, z] = (0, o.J0)(M || []),
						[ee] = (0, o.J0)(M || []);
					try {
						if (M) {
							const l = JSON.stringify(ee),
								p = JSON.stringify(M),
								c = JSON.stringify(S);
							l !== p && p !== c && z(M);
						}
					} catch {}
					const se = (l, p) => {
							let c;
							w
								? S.find((B) => B.value === p.value)
									? ((c = [...S]),
									  c.splice(
											c.findIndex((B) => B.value === p.value),
											1
									  ),
									  c.length == 0 && Y && (c = [p]))
									: (c = [...S, p])
								: !Y && S.find((B) => B.value === p.value)
								? (c = [])
								: (c = [p]),
								K && K(l, p, c),
								z(c);
						},
						te = {},
						X = x()(te, r.lang || {}),
						ne = (0, U.u)(X, { options: I, selectedOptions: S });
					return typeof I == 'object' && I?.length
						? (0, s.Y)(u._, {
								children: (0, s.FD)('div', {
									...q,
									className: h()('ss__list', { 'ss__list--native': W, 'ss__list--disabled': N }, $, Q),
									children: [
										(g || X?.title?.value) && !k && (0, s.Y)('h5', { className: 'ss__list__title', ...ne.title?.all, children: g }),
										(0, s.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': g,
											children: I.map((l) => {
												const p = S.some((c) => c.value == l.value);
												return (0, s.FD)('li', {
													className: h()(`ss__list__option ss__list__option--${f.p(l.value?.toString())}`, {
														'ss__list__option--selected': p,
														'ss__list__option--disabled': l?.disabled,
														'ss__list__option--unavailable': l?.available === !1,
													}),
													ref: (c) => (0, A.iy)(c),
													onClick: (c) => !N && !l?.disabled && se(c, l),
													title: l.label,
													role: 'option',
													'aria-selected': p,
													'aria-disabled': l.disabled || l?.available === !1,
													children: [
														!Z && (0, s.Y)(E.S, { ...H.checkbox, checked: p, disableA11y: !0, 'aria-label': l.label }),
														l.icon && !J && (0, s.Y)(L.I, { ...H.icon, ...(typeof l.icon == 'string' ? { icon: l.icon } : l.icon) }),
														!F && (l.label || !l.icon) && (0, s.Y)('label', { className: 'ss__list__option__label', children: l.label || l.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: (0, s.Y)(m.FK, {});
				}
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(b, a, e) {
				'use strict';
				e.d(a, { B: () => U });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					d = e.n(O),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(T),
					E = e('./components/src/hooks/useLang.tsx');
				const A = ({ stickyOffset: L }) =>
						(0, o.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: L || 0 }, '& .ss__facets': { width: '100%' } }),
					U = (0, h.PA)((L) => {
						const j = (0, x.u)(),
							t = { titleText: 'Filters', treePath: (0, f.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							n = (0, v.v6)('sidebar', j, t, L),
							{
								controller: i,
								layout: _,
								hideTitleText: r,
								titleText: g,
								sticky: K,
								disableStyles: W,
								className: w,
								internalClassName: F,
								treePath: J,
							} = n,
							Z = (0, y.Z)(n, A),
							N = { titleText: { value: g } },
							k = C()(N, n.lang || {}),
							I = (0, E.u)(k, { controller: i }),
							Y = { Layout: { ...(0, u.s)({ disableStyles: W }), theme: n.theme, treePath: J } },
							V = _?.length;
						return i?.store?.loaded && i?.store?.pagination?.totalResults > 0 && V
							? (0, s.Y)(D._, {
									children: (0, s.FD)('div', {
										...Z,
										className: d()('ss__sidebar', w, F, { 'ss__sidebar--sticky': K }),
										children: [
											r
												? (0, s.Y)(s.FK, {})
												: (0, s.Y)('h4', {
														className: d()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...I.titleText.all,
														children: g,
												  }),
											(0, s.Y)('div', { className: d()('ss__sidebar__inner'), children: (0, s.Y)(P.P, { controller: i, layout: _, ...Y.Layout }) }),
										],
									}),
							  })
							: (0, s.Y)(m.FK, {});
					});
			},
			'./components/src/types.ts'(b, a, e) {
				'use strict';
				e.d(a, { Q: () => m, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					m = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(m || {});
			},
			'./components/src/utilities/componentArgs.ts'(b, a, e) {
				'use strict';
				e.d(a, { F: () => s });
				const s = {
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
			'./components/src/utilities/snapify.ts'(b, a, e) {
				'use strict';
				e.d(a, { p: () => U });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					h = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					D = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const E = {},
					A = { globals: { siteId: '8uyt2m' } };
				class U {
					static recommendation(n) {
						const i = n.id;
						if (E[i]) return E[i];
						const _ = (E[i] = j({ client: A, controller: n }));
						return (
							_.on('afterStore', async ({ controller: r }, g) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await g();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(n) {
						const i = n.id;
						if (E[i]) return E[i];
						const _ = (E[i] = R({ client: A, controller: n }));
						return (
							_.on('afterStore', async ({ controller: r }, g) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await g();
							}),
							_.init(),
							_
						);
					}
					static search(n) {
						const i = n.id;
						if (E[i]) return E[i];
						const _ = (E[i] = L({ client: A, controller: n }));
						return (
							_.on('afterStore', async ({ controller: r }, g) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await g();
							}),
							_.init(),
							_
						);
					}
				}
				function L(t) {
					const n = new f.V(new v.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), u.X);
					return new m.Tp(t.controller, {
						client: new d.K(t.client.globals, t.client.config),
						store: new D.U(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new y.E(),
						profiler: new P.U(),
						logger: new T.V(),
						tracker: new C.J(t.client.globals),
					});
				}
				function j(t) {
					const n = new f.V(new v.E(), u.X).detach(!0);
					return new O.c(t.controller, {
						client: new d.K(t.client.globals, t.client.config),
						store: new x.t(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new y.E(),
						profiler: new P.U(),
						logger: new T.V(),
						tracker: new C.J(t.client.globals),
					});
				}
				function R(t) {
					const n = new f.V(new v.E(), u.X).detach();
					return new o.Z(t.controller, {
						client: new d.K(t.client.globals, t.client.config),
						store: new h.Y(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new y.E(),
						profiler: new P.U(),
						logger: new T.V(),
						tracker: new C.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, a, e) {
				'use strict';
				e.d(a, { Z: () => O });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					O = (d) => {
						const h = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								h.current && d.className?.includes('lang-') && !d.className?.includes(o) && window?.Prism?.highlightElement(h.current);
							}, [d.className, d.children, h]),
							(0, s.Y)('code', { ...d, ref: h, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (b.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Sidebar-Sidebar-stories.d25860cd.iframe.bundle.js.map
