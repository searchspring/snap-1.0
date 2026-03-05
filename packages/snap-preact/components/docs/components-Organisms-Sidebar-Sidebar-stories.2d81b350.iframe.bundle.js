(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7583],
		{
			'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx'(D, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => u, __namedExportsOrder: () => b, default: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					g = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts'),
					E = e('./components/src/utilities/snapify.ts');
				const T =
						"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Sidebar controller={controller} />\n```\n\n### layout \nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;\n\n```jsx\n<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>\n```\n\n### hideTitleText\nThe `hideTitleText` prop will disable the sidebar title from rendering.\n\n```jsx\n<Sidebar controller={controller} hideTitleText />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```jsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### sticky\nThe `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.\n\n```jsx\n<Sidebar controller={controller} sticky={'true'} />\n```\n\n\n### stickyOffset\nThe `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.\n\n```jsx\n<Sidebar controller={controller} stickyOffset={50} />\n```",
					x = {
						title: 'Organisms/Sidebar',
						component: r.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(d.oz, { options: { overrides: { code: g.Z } }, children: T }), (0, t.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(y, {}) })],
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
									category: 'Templates Legal',
									type: {
										summary: "['filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_']",
									},
									defaultValue: { summary: "[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]" },
								},
								control: 'none',
							},
							titleText: {
								description: 'Text to render in the sidebar title',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
								control: { type: 'text' },
							},
							hideTitleText: {
								defaultValue: !1,
								description: 'hides the sidebar title component',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							sticky: {
								description: 'specifies if the sidebar should be sticky',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							stickyOffset: {
								description: 'specifies the offset of the sidebar when sticky is true',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							..._.F,
						},
					},
					f = E.p.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } }),
					u = (y, { loaded: { controller: v } }) => (0, t.Y)(r.B, { ...y, controller: v });
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
				const b = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(D, a, e) {
				'use strict';
				e.d(a, { B: () => R });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					_ = e.n(g),
					E = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(E),
					x = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					f = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					h = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const j = ({ horizontal: P }) =>
					(0, r.AH)({
						display: 'flex',
						flexDirection: P ? 'row' : 'column',
						alignItems: P ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: P ? 'row' : 'column',
							alignItems: P ? 'center' : void 0,
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
				function R(P) {
					const s = (0, u.u)(),
						c = { treePath: (0, b.LU)() },
						i = (0, v.v6)('list', s, c, P),
						{
							titleText: l,
							onSelect: O,
							native: K,
							multiSelect: w,
							hideOptionLabels: V,
							hideOptionIcons: J,
							hideOptionCheckboxes: F,
							disabled: W,
							hideTitleText: k,
							options: U,
							requireSelection: N,
							disableStyles: Y,
							className: X,
							internalClassName: $,
							treePath: Z,
						} = i;
					let M = i.selected;
					const z = {
							checkbox: { native: K, ...(0, y.s)({ disableStyles: Y }), theme: i?.theme, treePath: Z },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, y.s)({ disableStyles: Y }), theme: i?.theme, treePath: Z },
						},
						Q = (0, C.Z)(i, j);
					M && !Array.isArray(M) && (M = [M]);
					const [I, G] = (0, d.J0)(M || []),
						[q] = (0, d.J0)(M || []);
					try {
						if (M) {
							const n = JSON.stringify(q),
								p = JSON.stringify(M),
								m = JSON.stringify(I);
							n !== p && p !== m && G(M);
						}
					} catch {}
					const ee = (n, p) => {
							let m;
							w
								? I.find((B) => B.value === p.value)
									? ((m = [...I]),
									  m.splice(
											m.findIndex((B) => B.value === p.value),
											1
									  ),
									  m.length == 0 && N && (m = [p]))
									: (m = [...I, p])
								: !N && I.find((B) => B.value === p.value)
								? (m = [])
								: (m = [p]),
								O && O(n, p, m),
								G(m);
						},
						te = {},
						H = T()(te, i.lang || {}),
						se = (0, S.u)(H, { options: U, selectedOptions: I });
					return typeof U == 'object' && U?.length
						? (0, t.Y)(f._, {
								children: (0, t.FD)('div', {
									...Q,
									className: _()('ss__list', { 'ss__list--native': K, 'ss__list--disabled': W }, X, $),
									children: [
										(l || H?.title?.value) && !k && (0, t.Y)('h5', { className: 'ss__list__title', ...se.title?.all, children: l }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': l,
											children: U.map((n) => {
												const p = I.some((m) => m.value == n.value);
												return (0, t.FD)('li', {
													className: _()(`ss__list__option ss__list__option--${x.p(n.value?.toString())}`, {
														'ss__list__option--selected': p,
														'ss__list__option--disabled': n?.disabled,
														'ss__list__option--unavailable': n?.available === !1,
													}),
													ref: (m) => (0, h.iy)(m),
													onClick: (m) => !W && !n?.disabled && ee(m, n),
													title: n.label,
													role: 'option',
													'aria-selected': p,
													'aria-disabled': n.disabled || n?.available === !1,
													children: [
														!F && (0, t.Y)(L.S, { ...z.checkbox, checked: p, disableA11y: !0, 'aria-label': n.label }),
														n.icon && !J && (0, t.Y)(A.I, { ...z.icon, ...(typeof n.icon == 'string' ? { icon: n.icon } : n.icon) }),
														!V && (n.label || !n.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: n.label || n.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(D, a, e) {
				'use strict';
				e.d(a, { B: () => S });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					g = e.n(r),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(v),
					L = e('./components/src/hooks/useLang.tsx');
				const h = ({ stickyOffset: A }) =>
						(0, d.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: A || 0 }, '& .ss__facets': { width: '100%' } }),
					S = (0, _.PA)((A) => {
						const j = (0, T.u)(),
							P = { titleText: 'Filters', treePath: (0, x.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							s = (0, u.v6)('sidebar', j, P, A),
							{
								controller: o,
								layout: c,
								hideTitleText: i,
								titleText: l,
								sticky: O,
								disableStyles: K,
								className: w,
								internalClassName: V,
								treePath: J,
							} = s,
							F = (0, b.Z)(s, h),
							W = { titleText: { value: l } },
							k = C()(W, s.lang || {}),
							U = (0, L.u)(k, { controller: o }),
							N = { Layout: { ...(0, f.s)({ disableStyles: K }), theme: s.theme, treePath: J } },
							Y = c?.length;
						return o?.store?.loaded && o?.store?.pagination?.totalResults > 0 && Y
							? (0, t.Y)(E._, {
									children: (0, t.FD)('div', {
										...F,
										className: g()('ss__sidebar', w, V, { 'ss__sidebar--sticky': O }),
										children: [
											i
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: g()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...U.titleText.all,
														children: l,
												  }),
											(0, t.Y)('div', { className: g()('ss__sidebar__inner'), children: (0, t.Y)(y.P, { controller: o, layout: c, ...N.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(D, a, e) {
				'use strict';
				e.d(a, { Q: () => d, V: () => t });
				var t = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(t || {}),
					d = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(d || {});
			},
			'./components/src/utilities/componentArgs.ts'(D, a, e) {
				'use strict';
				e.d(a, { F: () => t });
				const t = {
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
			'./components/src/utilities/snapify.ts'(D, a, e) {
				'use strict';
				e.d(a, { p: () => A });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					C = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					L = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					S = { globals: { siteId: 'atkzs2' } };
				class A {
					static recommendation(o) {
						const c = o.id;
						if (h[c]) return h[c];
						const i = (h[c] = R({ client: S, controller: o }));
						return (
							i.on('afterStore', async ({ controller: l }, O) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(o) {
						const c = o.id;
						if (h[c]) return h[c];
						const i = (h[c] = P({ client: S, controller: o }));
						return (
							i.on('afterStore', async ({ controller: l }, O) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static search(o) {
						const c = o.id;
						if (h[c]) return h[c];
						const i = (h[c] = j({ client: S, controller: o }));
						return (
							i.on('afterStore', async ({ controller: l }, O) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
				}
				function j(s) {
					const o = new f.V(new b.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), u.X);
					return new d.Tp(s.controller, {
						client: new _.K(s.client.globals, s.client.config),
						store: new T.U(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new y.E(),
						profiler: new v.U(),
						logger: new C.V(),
						tracker: new L.J(s.client.globals),
					});
				}
				function R(s) {
					const o = new f.V(new b.E(), u.X).detach(!0);
					return new g.c(s.controller, {
						client: new _.K(s.client.globals, s.client.config),
						store: new x.t(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new y.E(),
						profiler: new v.U(),
						logger: new C.V(),
						tracker: new L.J(s.client.globals),
					});
				}
				function P(s) {
					const o = new f.V(new b.E(), u.X).detach();
					return new r.Z(s.controller, {
						client: new _.K(s.client.globals, s.client.config),
						store: new E.Y(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new y.E(),
						profiler: new v.U(),
						logger: new C.V(),
						tracker: new L.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, a, e) {
				'use strict';
				e.d(a, { Z: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					g = (_) => {
						const E = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								E.current && _.className?.includes('lang-') && !_.className?.includes(r) && window?.Prism?.highlightElement(E.current);
							}, [_.className, _.children, E]),
							(0, t.Y)('code', { ..._, ref: E, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (D.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Sidebar-Sidebar-stories.2d81b350.iframe.bundle.js.map
