(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6719],
		{
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx'(y, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => f, __namedExportsOrder: () => T, default: () => M });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts'),
					C = e('./components/src/types.ts');
				const O = `# Facet Hierarchy Options

Renders a list of hierarchy options.

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { FacetHierarchyOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'hierarchy'. Overrides values passed via the facet prop. 

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`jsx
<FacetHierarchyOptions facet={hierarchyFacet} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet count values.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} hideCount={true} />
\`\`\`

### returnIcon
The \`returnIcon\` prop will set the icon to render for the return levels / options.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} returnIcon={'angle-left'} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`jsx
<Autocomplete>
    ...
	<FacetHierarchyOptions values={hierarchyFacet.values} previewOnFocus={true} />
    ...
</Autocomplete>
\`\`\`


### valueProps
The \`valueProps\` prop will be spread onto each value's \`<a>\` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

\`\`\`js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
\`\`\`

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} valueProps={valueProps} />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`
`;
				var P = e('./components/src/components/Atoms/Icon/paths.tsx');
				const M = {
						title: 'Molecules/FacetHierarchyOptions',
						component: m.T,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(o.oz, { options: { overrides: { code: c.Z } }, children: O }), (0, s.Y)(o.uY, { story: o.h1 })],
									}),
							},
						},
						argTypes: {
							values: {
								description: 'Facet.values store reference',
								type: { required: !1 },
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							facet: {
								description: 'Facet store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							returnIcon: {
								description: 'return Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [...Object.keys(P.c)],
								control: { type: 'select' },
							},
							hideCount: {
								defaultValue: !1,
								description: 'Hide facet option count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							horizontal: {
								defaultValue: !1,
								description: 'Render facet options horizontally',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							previewOnFocus: {
								description: 'Invoke facet value preview upon focus',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							valueProps: {
								description: 'Object of facet value props',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'none' },
							},
							onClick: {
								description: 'Facet option click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...t.F,
						},
					},
					b = a.p.search({ id: 'FacetHierarchyOptions', globals: { siteId: 'atkzs2' } }),
					x = (0, r.PA)(({ args: _, controller: g }) => {
						const j = g?.store?.facets
							.filter((v) => v.display === C.Q.HIERARCHY)
							.shift()
							.values.slice(0, 12);
						return (0, s.Y)(m.T, { ..._, values: j });
					}),
					f = (_, { loaded: { controller: g } }) => (0, s.Y)(x, { args: _, controller: g });
				(f.loaders = [async () => (await b.search(), { controller: b })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: FacetHierarchyOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableFacetHierarchyOptions args={args} controller={controller} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const T = ['Default'];
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(y, n, e) {
				'use strict';
				e.d(n, { T: () => j });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					m = e.n(o),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					x = e('./components/src/hooks/useLang.tsx'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(f),
					_ = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const g = ({ theme: v, horizontal: L, returnIcon: D }) =>
						L
							? (0, r.AH)({
									display: 'flex',
									flexWrap: 'wrap',
									'& .ss__facet-hierarchy-options__option': {
										margin: '0 5px 5px 0',
										padding: '6px',
										textDecoration: 'none',
										flex: '0 1 auto',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: v?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[D ? '' : '&:before']: { content: `${D ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: v?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, r.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: v?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[D ? '' : '&:before']: { content: `${D ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: v?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					j = (0, c.PA)((v) => {
						const L = (0, a.u)(),
							i = { treePath: (0, C.LU)() },
							l = (0, P.v6)('facetHierarchyOptions', L, i, v),
							{
								values: d,
								hideCount: h,
								returnIcon: u,
								onClick: E,
								previewOnFocus: U,
								horizontal: F,
								valueProps: H,
								facet: A,
								disableStyles: K,
								treePath: W,
								className: w,
								internalClassName: B,
							} = l,
							S = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, O.s)({ disableStyles: K }), theme: l?.theme, treePath: W },
							},
							V = (0, M.Z)(l, g),
							I = d || A?.refinedValues;
						return I?.length
							? (0, s.Y)(t._, {
									children: (0, s.Y)('div', {
										...V,
										className: m()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': F }, w, B),
										children: I.map((p) => {
											const N = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																p.filtered ? `selected ${p.label}` : A?.label ? `filter by ${A?.label} - ${p.label}` : `filter by ${p.label}`
															}`,
														},
													},
												},
												z = T()(N, l.lang || {}),
												Y = (0, x.u)(z, { facet: A, value: p });
											return (0, s.FD)('a', {
												className: m()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': p.filtered },
													{ 'ss__facet-hierarchy-options__option--return': p.history && !p.filtered }
												),
												href: p.url?.link?.href,
												...H,
												onClick: (R) => {
													p.url?.link?.onClick(R), E && E(R);
												},
												...(U ? (0, b.l)(() => p?.preview && p.preview()) : {}),
												...Y.hierarchyOption?.all,
												children: [
													u && p.history && !p.filtered && (0, s.Y)(_.I, { ...S.icon, ...(typeof u == 'string' ? { icon: u } : u) }),
													(0, s.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															p.label,
															!h &&
																p?.count > 0 &&
																!p.filtered &&
																(0, s.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', p.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(y, n, e) {
				'use strict';
				e.d(n, { u: () => s });
				const s = (r, o) => {
					const m = {};
					return (
						Object.keys(r).forEach((c) => {
							const t = r && r[c],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value(o) } })
										: (a.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': c }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](o))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](o))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(o))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(o)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(o))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': c })),
								(m[c] = a);
						}),
						m
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, n, e) {
				'use strict';
				e.d(n, { l: () => s });
				const s = (r, o = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (c) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									o.focusElem && c.target.focus(), r && r();
								}, o.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
			},
			'./components/src/types.ts'(y, n, e) {
				'use strict';
				e.d(n, { Q: () => r, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					r = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(r || {});
			},
			'./components/src/utilities/componentArgs.ts'(y, n, e) {
				'use strict';
				e.d(n, { F: () => s });
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
			'./components/src/utilities/defined.ts'(y, n, e) {
				'use strict';
				e.d(n, { s: () => s });
				function s(r) {
					const o = {};
					return (
						Object.keys(r).map((m) => {
							r[m] !== void 0 && (o[m] = r[m]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/snapify.ts'(y, n, e) {
				'use strict';
				e.d(n, { p: () => j });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					c = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					g = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(l) {
						const d = l.id;
						if (_[d]) return _[d];
						const h = (_[d] = L({ client: g, controller: l }));
						return (
							h.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(l) {
						const d = l.id;
						if (_[d]) return _[d];
						const h = (_[d] = D({ client: g, controller: l }));
						return (
							h.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							h.init(),
							h
						);
					}
					static search(l) {
						const d = l.id;
						if (_[d]) return _[d];
						const h = (_[d] = v({ client: g, controller: l }));
						return (
							h.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							h.init(),
							h
						);
					}
				}
				function v(i) {
					const l = new O.V(new M.E({ settings: { coreType: 'query', corePrefix: i.controller.id } }), P.X);
					return new r.Tp(i.controller, {
						client: new c.K(i.client.globals, i.client.config),
						store: new a.U(i.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new b.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new T.J(i.client.globals),
					});
				}
				function L(i) {
					const l = new O.V(new M.E(), P.X).detach(!0);
					return new m.c(i.controller, {
						client: new c.K(i.client.globals, i.client.config),
						store: new C.t(i.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new b.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new T.J(i.client.globals),
					});
				}
				function D(i) {
					const l = new O.V(new M.E(), P.X).detach();
					return new o.Z(i.controller, {
						client: new c.K(i.client.globals, i.client.config),
						store: new t.Y(i.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new b.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new T.J(i.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, n, e) {
				'use strict';
				e.d(n, { Z: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					m = (c) => {
						const t = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								t.current && c.className?.includes('lang-') && !c.className?.includes(o) && window?.Prism?.highlightElement(t.current);
							}, [c.className, c.children, t]),
							(0, s.Y)('code', { ...c, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function n(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (y.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetHierarchyOptions-FacetHierarchyOptions-stories.13b0155a.iframe.bundle.js.map
