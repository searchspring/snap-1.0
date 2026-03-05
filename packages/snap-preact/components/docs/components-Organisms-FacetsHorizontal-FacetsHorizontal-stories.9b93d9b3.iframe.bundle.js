(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1249],
		{
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(x, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => _, __namedExportsOrder: () => E, default: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					P = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts'),
					C = e('./components/src/components/Atoms/Icon/paths.tsx');
				const A =
						"# FacetsHorizontal\n\nRenders all facets in a horizontal display. Also incluses MobileSidebar.\n\n## Sub-components\n- Facet\n- Dropdown\n- MobileSidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.\n\n```jsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```jsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```jsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowFiltersButton\nThe `alwaysShowFiltersButton` prop will always render the button and MobileSidebar, not just when facets are overflowing.\n\n```jsx\n<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```jsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```jsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```jsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideFiltersButton\nThe `hideFiltersButton` specifies wether the filters button should be rendered or not. If true, the button will render when there are more filters to show than the limit prop allows (unless the alwaysShowFiltersButton prop is passed, which will ignore the limit). \n\n```jsx\n<FacetsHorizontal controller={controller} hideFiltersButton={true}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```jsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```",
					v = {
						title: 'Organisms/FacetsHorizontal',
						component: n.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(d.oz, { options: { overrides: { code: P.Z } }, children: A }), (0, t.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						argTypes: {
							facets: {
								description: 'Facets store reference',
								type: { required: !1 },
								table: { type: { summary: 'Facets store object' } },
								control: { type: 'none' },
							},
							limit: {
								description: 'Maximum number of facets to display',
								defaultValue: 6,
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 6 } },
								control: { type: 'number' },
							},
							alwaysShowFiltersButton: {
								defaultValue: !1,
								description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideFiltersButton: {
								defaultValue: !1,
								description: 'Hide the filters button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onFacetOptionClick: {
								description: 'Callback function for when a facet option is clicked',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onFacetOptionClick',
							},
							showSelectedCount: {
								description: 'shows the number of selected options within the facet headers',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSelectedCountParenthesis: {
								description: 'specifies if the parenthesis should render around the selected count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							showClearAllText: {
								description: 'specifies if the clear all text should render',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							clearAllText: {
								description: 'text to show in the clear all link',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
								control: { type: 'text' },
							},
							clearAllIcon: {
								description: 'Icon to show in the clear all link',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								options: [...Object.keys(C.c)],
								control: { type: 'select' },
							},
							iconExpand: {
								defaultValue: 'angle-down',
								description: 'Icon for when facet is collapsed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(C.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								defaultValue: 'angle-up',
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(C.c)],
								control: { type: 'select' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							...u.F,
						},
					},
					g = f.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					_ = (M, { loaded: { controller: T } }) => (0, t.Y)(n.b, { ...M, controller: T });
				(_.loaders = [async () => (await g.search(), { controller: g })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: FacetsHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <FacetsHorizontal {...args} controller={controller} />;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const E = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(x, l, e) {
				'use strict';
				e.d(l, { B: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					u = e.n(P),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(f),
					A = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					v = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					h = e('./components/src/hooks/useA11y.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const U = ({ horizontal: b }) =>
					(0, n.AH)({
						display: 'flex',
						flexDirection: b ? 'row' : 'column',
						alignItems: b ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: b ? 'row' : 'column',
							alignItems: b ? 'center' : void 0,
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
				function B(b) {
					const s = (0, g.u)(),
						m = { treePath: (0, _.LU)() },
						a = (0, M.v6)('list', s, m, b),
						{
							titleText: c,
							onSelect: O,
							native: R,
							multiSelect: k,
							hideOptionLabels: Y,
							hideOptionIcons: J,
							hideOptionCheckboxes: G,
							disabled: F,
							hideTitleText: Z,
							options: L,
							requireSelection: K,
							disableStyles: W,
							className: X,
							internalClassName: $,
							treePath: z,
						} = a;
					let y = a.selected;
					const H = {
							checkbox: { native: R, ...(0, E.s)({ disableStyles: W }), theme: a?.theme, treePath: z },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, E.s)({ disableStyles: W }), theme: a?.theme, treePath: z },
						},
						Q = (0, T.Z)(a, U);
					y && !Array.isArray(y) && (y = [y]);
					const [D, V] = (0, d.J0)(y || []),
						[q] = (0, d.J0)(y || []);
					try {
						if (y) {
							const o = JSON.stringify(q),
								p = JSON.stringify(y),
								i = JSON.stringify(D);
							o !== p && p !== i && V(y);
						}
					} catch {}
					const ee = (o, p) => {
							let i;
							k
								? D.find((w) => w.value === p.value)
									? ((i = [...D]),
									  i.splice(
											i.findIndex((w) => w.value === p.value),
											1
									  ),
									  i.length == 0 && K && (i = [p]))
									: (i = [...D, p])
								: !K && D.find((w) => w.value === p.value)
								? (i = [])
								: (i = [p]),
								O && O(o, p, i),
								V(i);
						},
						te = {},
						N = C()(te, a.lang || {}),
						oe = (0, j.u)(N, { options: L, selectedOptions: D });
					return typeof L == 'object' && L?.length
						? (0, t.Y)(v._, {
								children: (0, t.FD)('div', {
									...Q,
									className: u()('ss__list', { 'ss__list--native': R, 'ss__list--disabled': F }, X, $),
									children: [
										(c || N?.title?.value) && !Z && (0, t.Y)('h5', { className: 'ss__list__title', ...oe.title?.all, children: c }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': c,
											children: L.map((o) => {
												const p = D.some((i) => i.value == o.value);
												return (0, t.FD)('li', {
													className: u()(`ss__list__option ss__list__option--${A.p(o.value?.toString())}`, {
														'ss__list__option--selected': p,
														'ss__list__option--disabled': o?.disabled,
														'ss__list__option--unavailable': o?.available === !1,
													}),
													ref: (i) => (0, h.iy)(i),
													onClick: (i) => !F && !o?.disabled && ee(i, o),
													title: o.label,
													role: 'option',
													'aria-selected': p,
													'aria-disabled': o.disabled || o?.available === !1,
													children: [
														!G && (0, t.Y)(I.S, { ...H.checkbox, checked: p, disableA11y: !0, 'aria-label': o.label }),
														o.icon && !J && (0, t.Y)(S.I, { ...H.icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
														!Y && (o.label || !o.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: o.label || o.value }),
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
			'./components/src/types.ts'(x, l, e) {
				'use strict';
				e.d(l, { Q: () => d, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
					d = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(d || {});
			},
			'./components/src/utilities/componentArgs.ts'(x, l, e) {
				'use strict';
				e.d(l, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(x, l, e) {
				'use strict';
				e.d(l, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					u = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					I = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					j = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(r) {
						const m = r.id;
						if (h[m]) return h[m];
						const a = (h[m] = B({ client: j, controller: r }));
						return (
							a.on('afterStore', async ({ controller: c }, O) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await O();
							}),
							a.init(),
							a
						);
					}
					static autocomplete(r) {
						const m = r.id;
						if (h[m]) return h[m];
						const a = (h[m] = b({ client: j, controller: r }));
						return (
							a.on('afterStore', async ({ controller: c }, O) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await O();
							}),
							a.init(),
							a
						);
					}
					static search(r) {
						const m = r.id;
						if (h[m]) return h[m];
						const a = (h[m] = U({ client: j, controller: r }));
						return (
							a.on('afterStore', async ({ controller: c }, O) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await O();
							}),
							a.init(),
							a
						);
					}
				}
				function U(s) {
					const r = new v.V(new _.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), g.X);
					return new d.Tp(s.controller, {
						client: new u.K(s.client.globals, s.client.config),
						store: new C.U(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new E.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new I.J(s.client.globals),
					});
				}
				function B(s) {
					const r = new v.V(new _.E(), g.X).detach(!0);
					return new P.c(s.controller, {
						client: new u.K(s.client.globals, s.client.config),
						store: new A.t(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new E.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new I.J(s.client.globals),
					});
				}
				function b(s) {
					const r = new v.V(new _.E(), g.X).detach();
					return new n.Z(s.controller, {
						client: new u.K(s.client.globals, s.client.config),
						store: new f.Y(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new E.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new I.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, l, e) {
				'use strict';
				e.d(l, { Z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					P = (u) => {
						const f = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								f.current && u.className?.includes('lang-') && !u.className?.includes(n) && window?.Prism?.highlightElement(f.current);
							}, [u.className, u.children, f]),
							(0, t.Y)('code', { ...u, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (x.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.9b93d9b3.iframe.bundle.js.map
