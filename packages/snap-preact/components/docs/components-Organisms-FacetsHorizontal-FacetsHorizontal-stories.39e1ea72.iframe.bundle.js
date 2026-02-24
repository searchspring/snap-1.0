(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1249],
		{
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(O, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => u, __namedExportsOrder: () => P, default: () => M });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					v = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts'),
					h = e('./components/src/utilities/snapify.ts'),
					C = e('./components/src/components/Atoms/Icon/paths.tsx');
				const T = `# FacetsHorizontal

Renders all facets in a horizontal display. Also incluses MobileSidebar.

## Sub-components
- Facet
- Dropdown
- MobileSidebar

## Usage

### controller
The \`controller\` prop specifies a reference to the search controller.

\`\`\`jsx
<FacetsHorizontal controller={controller} />
\`\`\`

### facets
The optional\`facets\` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. 

\`\`\`jsx
<FacetsHorizontal facets={facets} />
\`\`\`

### iconExpand
The \`iconExpand\` prop is the name of the icon to render when the facet is in its collapsed state.

\`\`\`jsx
<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />
\`\`\`

### iconCollapse
The \`iconCollapse\` prop is the name of the icon to render when the facet is in its open state.

\`\`\`jsx
<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />
\`\`\`

### limit
The \`limit\` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.

\`\`\`jsx
<FacetsHorizontal controller={controller} limit={6}/>
\`\`\`

### alwaysShowFiltersButton
The \`alwaysShowFiltersButton\` prop will always render the button and MobileSidebar, not just when facets are overflowing.

\`\`\`jsx
<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />
\`\`\`

### hideFiltersButton
The \`hideFiltersButton\` specifies wether the filters button should be rendered or not. If true, the button will render when there are more filters to show than the limit prop allows (unless the alwaysShowFiltersButton prop is passed, which will ignore the limit). 

\`\`\`jsx
<FacetsHorizontal controller={controller} hideFiltersButton={true}/>
\`\`\`


### onFacetOptionClick
The \`onFacetOptionClick\` callback function for when a facet option is clicked. 

\`\`\`jsx
<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>
\`\`\`

### overlay
The \`overlay\` prop will render the facet options in a dropdown overlay.

\`\`\`jsx
<FacetsHorizontal controller={controller} overlay={true}/>
\`\`\`
`,
					M = {
						title: 'Organisms/FacetsHorizontal',
						component: o.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(m.oz, { options: { overrides: { code: v.Z } }, children: T }), (0, s.Y)(m.uY, { story: m.h1 })],
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
								table: { type: { summary: 'number' }, defaultValue: { summary: 6 } },
								control: { type: 'number' },
							},
							alwaysShowFiltersButton: {
								defaultValue: !1,
								description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideFiltersButton: {
								defaultValue: !1,
								description: 'Hide the filters button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onFacetOptionClick: {
								description: 'Callback function for when a facet option is clicked',
								type: { required: !1 },
								table: { type: { summary: 'function' } },
								action: 'onFacetOptionClick',
							},
							overlay: {
								defaultValue: !0,
								description: 'Render facet options as a dropdown overlay',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							iconExpand: {
								defaultValue: 'angle-down',
								description: 'Icon for when facet is collapsed',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(C.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								defaultValue: 'angle-up',
								description: 'Icon for when facet is expanded',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(C.c)],
								control: { type: 'select' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							..._.F,
						},
					},
					y = h.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					u = (b, { loaded: { controller: D } }) => (0, s.Y)(o.b, { ...b, controller: D });
				(u.loaders = [async () => (await y.search(), { controller: y })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
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
								...u.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(O, a, e) {
				'use strict';
				e.d(a, { B: () => R });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					h = e.n(_),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(C),
					M = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					y = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const U = ({ horizontal: t }) =>
					(0, v.AH)({
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
					const l = (0, u.u)(),
						p = { treePath: (0, P.LU)() },
						r = (0, D.v6)('list', l, p, t),
						{
							titleText: g,
							onSelect: B,
							native: K,
							multiSelect: k,
							hideOptionLabels: J,
							hideOptionIcons: G,
							hideOptionCheckboxes: Z,
							disabled: F,
							hideTitleText: X,
							options: L,
							requireSelection: W,
							disableStyles: z,
							className: $,
							internalClassName: Q,
							treePath: H,
						} = r;
					let E = r.selected;
					const V = {
							checkbox: { native: K, ...(0, b.s)({ disableStyles: z }), theme: r?.theme, treePath: H },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, b.s)({ disableStyles: z }), theme: r?.theme, treePath: H },
						},
						q = (0, I.Z)(r, U);
					E && !Array.isArray(E) && (E = [E]);
					const [x, N] = (0, o.J0)(E || []),
						[ee] = (0, o.J0)(E || []);
					try {
						if (E) {
							const n = JSON.stringify(ee),
								d = JSON.stringify(E),
								i = JSON.stringify(x);
							n !== d && d !== i && N(E);
						}
					} catch {}
					const se = (n, d) => {
							let i;
							k
								? x.find((A) => A.value === d.value)
									? ((i = [...x]),
									  i.splice(
											i.findIndex((A) => A.value === d.value),
											1
									  ),
									  i.length == 0 && W && (i = [d]))
									: (i = [...x, d])
								: !W && x.find((A) => A.value === d.value)
								? (i = [])
								: (i = [d]),
								B && B(n, d, i),
								N(i);
						},
						te = {},
						Y = T()(te, r.lang || {}),
						ne = (0, S.u)(Y, { options: L, selectedOptions: x });
					return typeof L == 'object' && L?.length
						? (0, s.Y)(y._, {
								children: (0, s.FD)('div', {
									...q,
									className: h()('ss__list', { 'ss__list--native': K, 'ss__list--disabled': F }, $, Q),
									children: [
										(g || Y?.title?.value) && !X && (0, s.Y)('h5', { className: 'ss__list__title', ...ne.title?.all, children: g }),
										(0, s.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': g,
											children: L.map((n) => {
												const d = x.some((i) => i.value == n.value);
												return (0, s.FD)('li', {
													className: h()(`ss__list__option ss__list__option--${M.p(n.value?.toString())}`, {
														'ss__list__option--selected': d,
														'ss__list__option--disabled': n?.disabled,
														'ss__list__option--unavailable': n?.available === !1,
													}),
													ref: (i) => (0, j.iy)(i),
													onClick: (i) => !F && !n?.disabled && se(i, n),
													title: n.label,
													role: 'option',
													'aria-selected': d,
													'aria-disabled': n.disabled || n?.available === !1,
													children: [
														!Z && (0, s.Y)(f.S, { ...V.checkbox, checked: d, disableA11y: !0, 'aria-label': n.label }),
														n.icon && !G && (0, s.Y)(w.I, { ...V.icon, ...(typeof n.icon == 'string' ? { icon: n.icon } : n.icon) }),
														!J && (n.label || !n.icon) && (0, s.Y)('label', { className: 'ss__list__option__label', children: n.label || n.value }),
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
			'./components/src/types.ts'(O, a, e) {
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
			'./components/src/utilities/componentArgs.ts'(O, a, e) {
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
			'./components/src/utilities/snapify.ts'(O, a, e) {
				'use strict';
				e.d(a, { p: () => S });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					_ = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					h = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					C = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					u = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					P = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					b = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					D = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					I = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					j = { globals: { siteId: '8uyt2m' } };
				class S {
					static recommendation(l) {
						const c = l.id;
						if (f[c]) return f[c];
						const p = (f[c] = U({ client: j, controller: l }));
						return (
							p.on('afterStore', async ({ controller: r }, g) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await g();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(l) {
						const c = l.id;
						if (f[c]) return f[c];
						const p = (f[c] = R({ client: j, controller: l }));
						return (
							p.on('afterStore', async ({ controller: r }, g) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await g();
							}),
							p.init(),
							p
						);
					}
					static search(l) {
						const c = l.id;
						if (f[c]) return f[c];
						const p = (f[c] = w({ client: j, controller: l }));
						return (
							p.on('afterStore', async ({ controller: r }, g) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await g();
							}),
							p.init(),
							p
						);
					}
				}
				function w(t) {
					const l = new M.V(new u.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), y.X);
					return new m.Tp(t.controller, {
						client: new _.K(t.client.globals, t.client.config),
						store: new C.U(t.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new P.E(),
						profiler: new b.U(),
						logger: new D.V(),
						tracker: new I.J(t.client.globals),
					});
				}
				function U(t) {
					const l = new M.V(new u.E(), y.X).detach(!0);
					return new v.c(t.controller, {
						client: new _.K(t.client.globals, t.client.config),
						store: new T.t(t.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new P.E(),
						profiler: new b.U(),
						logger: new D.V(),
						tracker: new I.J(t.client.globals),
					});
				}
				function R(t) {
					const l = new M.V(new u.E(), y.X).detach();
					return new o.Z(t.controller, {
						client: new _.K(t.client.globals, t.client.config),
						store: new h.Y(t.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new P.E(),
						profiler: new b.U(),
						logger: new D.V(),
						tracker: new I.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, a, e) {
				'use strict';
				e.d(a, { Z: () => v });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					v = (_) => {
						const h = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								h.current && _.className?.includes('lang-') && !_.className?.includes(o) && window?.Prism?.highlightElement(h.current);
							}, [_.className, _.children, h]),
							(0, s.Y)('code', { ..._, ref: h, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (O.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.39e1ea72.iframe.bundle.js.map
