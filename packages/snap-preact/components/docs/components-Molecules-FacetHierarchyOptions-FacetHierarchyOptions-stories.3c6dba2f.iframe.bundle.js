(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6719],
		{
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx'(y, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => f, __namedExportsOrder: () => D, default: () => M });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts'),
					T = e('./components/src/types.ts');
				const O = `# Facet Hierarchy Options

Renders a list of hierarchy options.

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { FacetHierarchyOptions } from '@searchspring/snap-preact-components';
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
						component: c.T,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: a.Z } }, children: O }), (0, o.Y)(s.uY, { story: s.h1 })],
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
								table: { type: { summary: 'string' } },
								options: [...Object.keys(P.c)],
								control: { type: 'select' },
							},
							hideCount: {
								defaultValue: !1,
								description: 'Hide facet option count',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							horizontal: {
								defaultValue: !1,
								description: 'Render facet options horizontally',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							previewOnFocus: {
								description: 'Invoke facet value preview upon focus',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							valueProps: {
								description: 'Object of facet value props',
								table: { type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'none' },
							},
							onClick: {
								description: 'Facet option click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...t.F,
						},
					},
					E = i.p.search({ id: 'FacetHierarchyOptions', globals: { siteId: 'atkzs2' } }),
					x = (0, l.PA)(({ args: _, controller: v }) => {
						const C = v?.store?.facets
							.filter((j) => j.display === T.Q.HIERARCHY)
							.shift()
							.values.slice(0, 12);
						return (0, o.Y)(c.T, { ..._, values: C });
					}),
					f = (_, { loaded: { controller: v } }) => (0, o.Y)(x, { args: _, controller: v });
				(f.loaders = [async () => (await E.search(), { controller: E })]),
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
				const D = ['Default'];
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(y, r, e) {
				'use strict';
				e.d(r, { T: () => j });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					a = e.n(c),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(D),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const C = ({ theme: b, horizontal: A, returnIcon: n }) =>
						A
							? (0, s.AH)({
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
											color: b?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[n ? '' : '&:before']: { content: `${n ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: b?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, s.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: b?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[n ? '' : '&:before']: { content: `${n ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: b?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					j = (0, t.PA)((b) => {
						const A = (0, T.u)(),
							u = { treePath: (0, O.LU)() },
							p = (0, M.v6)('facetHierarchyOptions', A, u, b),
							{
								values: h,
								hideCount: m,
								returnIcon: g,
								onClick: L,
								previewOnFocus: F,
								horizontal: H,
								valueProps: K,
								facet: I,
								disableStyles: W,
								treePath: B,
								className: w,
								internalClassName: S,
							} = p,
							V = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, P.s)({ disableStyles: W }), theme: p?.theme, treePath: B },
							},
							N = (0, E.Z)(p, C),
							R = h || I?.refinedValues;
						return R?.length
							? (0, o.Y)(i._, {
									children: (0, o.Y)('div', {
										...N,
										className: a()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': H }, w, S),
										children: R.map((d) => {
											const z = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																d.filtered ? `selected ${d.label}` : I?.label ? `filter by ${I?.label} - ${d.label}` : `filter by ${d.label}`
															}`,
														},
													},
												},
												Y = _()(z, p.lang || {}),
												$ = (0, f.u)(Y, { facet: I, value: d });
											return (0, o.FD)('a', {
												className: a()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': d.filtered },
													{ 'ss__facet-hierarchy-options__option--return': d.history && !d.filtered }
												),
												href: d.url?.link?.href,
												...K,
												onClick: (U) => {
													d.url?.link?.onClick(U), L && L(U);
												},
												...(F ? (0, x.l)(() => d?.preview && d.preview()) : {}),
												...$.hierarchyOption?.all,
												children: [
													g && d.history && !d.filtered && (0, o.Y)(v.I, { ...V.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
													(0, o.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															d.label,
															!m &&
																d?.count > 0 &&
																!d.filtered &&
																(0, o.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', d.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: (0, o.Y)(l.FK, {});
					});
			},
			'./components/src/hooks/useLang.tsx'(y, r, e) {
				'use strict';
				e.d(r, { u: () => o });
				const o = (l, s) => {
					const c = {};
					return (
						Object.keys(l).forEach((a) => {
							const t = l && l[a],
								i = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (i.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (i.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((i.attributes = { 'ss-lang': a }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (i.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (i.attributes.title = t.attributes.title(s))
											: (i.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (i.attributes.alt = t.attributes.alt(s)) : (i.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = t.attributes.placeholder(s))
											: (i.attributes.placeholder = t.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': a })),
								(c[a] = i);
						}),
						c
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, r, e) {
				'use strict';
				e.d(r, { l: () => o });
				const o = (l, s = { delay: 333, focusElem: !0 }) => {
					let c;
					return {
						onMouseEnter: (a) => {
							clearTimeout(c),
								(c = window.setTimeout(() => {
									s.focusElem && a.target.focus(), l && l();
								}, s.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(c);
						},
					};
				};
			},
			'./components/src/types.ts'(y, r, e) {
				'use strict';
				e.d(r, { Q: () => l, V: () => o });
				var o = ((s) => ((s.grid = 'grid'), (s.list = 'list'), s))(o || {}),
					l = ((s) => (
						(s.GRID = 'grid'),
						(s.PALETTE = 'palette'),
						(s.LIST = 'list'),
						(s.SLIDER = 'slider'),
						(s.HIERARCHY = 'hierarchy'),
						(s.TOGGLE = 'toggle'),
						s
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(y, r, e) {
				'use strict';
				e.d(r, { F: () => o });
				const o = {
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
			'./components/src/utilities/defined.ts'(y, r, e) {
				'use strict';
				e.d(r, { s: () => o });
				function o(l) {
					const s = {};
					return (
						Object.keys(l).map((c) => {
							l[c] !== void 0 && (s[c] = l[c]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(y, r, e) {
				'use strict';
				e.d(r, { p: () => C });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					v = { globals: { siteId: '8uyt2m' } };
				class C {
					static recommendation(u) {
						const p = u.id;
						if (_[p]) return _[p];
						const h = (_[p] = b({ client: v, controller: u }));
						return (
							h.on('afterStore', async ({ controller: m }, g) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await g();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(u) {
						const p = u.id;
						if (_[p]) return _[p];
						const h = (_[p] = A({ client: v, controller: u }));
						return (
							h.on('afterStore', async ({ controller: m }, g) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await g();
							}),
							h.init(),
							h
						);
					}
					static search(u) {
						const p = u.id;
						if (_[p]) return _[p];
						const h = (_[p] = j({ client: v, controller: u }));
						return (
							h.on('afterStore', async ({ controller: m }, g) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await g();
							}),
							h.init(),
							h
						);
					}
				}
				function j(n) {
					const u = new O.V(new M.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), P.X);
					return new l.Tp(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new i.U(n.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new D.J(n.client.globals),
					});
				}
				function b(n) {
					const u = new O.V(new M.E(), P.X).detach(!0);
					return new c.c(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new T.t(n.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new D.J(n.client.globals),
					});
				}
				function A(n) {
					const u = new O.V(new M.E(), P.X).detach();
					return new s.Z(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new t.Y(n.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new D.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, r, e) {
				'use strict';
				e.d(r, { Z: () => c });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (a) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && a.className?.includes('lang-') && !a.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [a.className, a.children, t]),
							(0, o.Y)('code', { ...a, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function r(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (y.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetHierarchyOptions-FacetHierarchyOptions-stories.3c6dba2f.iframe.bundle.js.map
