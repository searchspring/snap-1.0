(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7383],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx'(y, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => f, __namedExportsOrder: () => M, default: () => O });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const C =
						"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```jsx\nimport { FacetGridOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```jsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```jsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```jsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n",
					O = {
						title: 'Molecules/FacetGridOptions',
						component: m.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: a.Z } }, children: C }), (0, o.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, o.Y)('div', { style: { maxWidth: '500px' }, children: (0, o.Y)(h, {}) })],
						argTypes: {
							values: {
								description: 'Facet.values store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet values store array' } },
								control: { type: 'none' },
							},
							facet: {
								description: 'Facet store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in grid. Not applicable if using horizontal prop',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							gridSize: {
								defaultValue: '45px',
								description: 'Size of each grid item. Does not apply if using `columns` prop',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '45px' } },
								control: { type: 'text' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
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
					E = n.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
					P = (0, p.PA)(({ args: h, controller: v }) => {
						const _ = v?.store?.facets.filter((x) => x.field == 'size').pop();
						return (0, o.Y)(m.S, { ...h, values: _.values });
					}),
					f = (h, { loaded: { controller: v } }) => (0, o.Y)(P, { args: h, controller: v });
				(f.loaders = [async () => (await E.search(), { controller: E })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: FacetGridOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableFacetGridOptions args={args} controller={controller} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(y, i, e) {
				'use strict';
				e.d(i, { S: () => A });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					m = e.n(c),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					h = e.n(M),
					v = e('../../node_modules/color/index.js'),
					_ = e.n(v);
				const x = ({ columns: b, gapSize: D, gridSize: L, theme: r }) => {
						const s = r?.variables,
							l = new (_())(s?.colors.primary || void 0),
							d = l.isDark() ? '#fff' : '#000';
						return (0, p.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: b ? `repeat(${b}, 1fr)` : `repeat(auto-fill, minmax(${L}, 1fr))`,
							gap: D,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${l.hex() || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${b} - ${2 * Math.round((b + 2) / 2)}px)`,
								margin: `0 ${D} ${D} 0`,
								[`:nth-of-type(${b}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: l.hex() || '#ccc', color: d || '#333' },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: l.hex() || '#f8f8f8', color: d || '#333' },
								'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						});
					},
					A = (0, a.PA)((b) => {
						const D = (0, n.u)(),
							r = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, C.LU)() },
							s = (0, O.v6)('facetGridOptions', D, r, b),
							{ values: l, onClick: d, previewOnFocus: u, valueProps: T, facet: j, horizontal: R, className: U, internalClassName: I } = s;
						R && (s.columns = 0);
						const z = (0, E.Z)(s, x),
							F = l || j?.refinedValues;
						return F?.length
							? (0, o.Y)(t._, {
									children: (0, o.Y)('div', {
										...z,
										className: m()('ss__facet-grid-options', U, I),
										children: F.map((g) => {
											const S = {
													gridOption: {
														attributes: {
															'aria-label': `${
																g.filtered
																	? `remove selected filter ${j?.label || ''} - ${g.label}`
																	: j?.label
																	? `filter by ${j?.label} - ${g.label}`
																	: `filter by ${g.label}`
															}`,
														},
													},
												},
												K = h()(S, s.lang || {}),
												B = (0, f.u)(K, { facet: j, value: g });
											return (0, o.Y)('a', {
												className: m()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': g.filtered }),
												href: g.url?.link?.href,
												...T,
												onClick: (w) => {
													g.url?.link?.onClick(w), d && d(w);
												},
												...(u ? (0, P.l)(() => g?.preview && g.preview()) : {}),
												...B.gridOption?.all,
												children: (0, o.Y)('span', {
													className: m()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': g.label.length > 3,
													}),
													children: g.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(y, i, e) {
				'use strict';
				e.d(i, { u: () => o });
				const o = (p, c) => {
					const m = {};
					return (
						Object.keys(p).forEach((a) => {
							const t = p && p[a],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value(c) } })
										: (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': a }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](c))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](c))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(c))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(c)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(c))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': a })),
								(m[a] = n);
						}),
						m
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, i, e) {
				'use strict';
				e.d(i, { l: () => o });
				const o = (p, c = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (a) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									c.focusElem && a.target.focus(), p && p();
								}, c.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, i, e) {
				'use strict';
				e.d(i, { F: () => o });
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
			'./components/src/utilities/snapify.ts'(y, i, e) {
				'use strict';
				e.d(i, { p: () => A });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					x = { globals: { siteId: 'atkzs2' } };
				class A {
					static recommendation(s) {
						const l = s.id;
						if (_[l]) return _[l];
						const d = (_[l] = D({ client: x, controller: s }));
						return (
							d.on('afterStore', async ({ controller: u }, T) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await T();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(s) {
						const l = s.id;
						if (_[l]) return _[l];
						const d = (_[l] = L({ client: x, controller: s }));
						return (
							d.on('afterStore', async ({ controller: u }, T) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await T();
							}),
							d.init(),
							d
						);
					}
					static search(s) {
						const l = s.id;
						if (_[l]) return _[l];
						const d = (_[l] = b({ client: x, controller: s }));
						return (
							d.on('afterStore', async ({ controller: u }, T) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await T();
							}),
							d.init(),
							d
						);
					}
				}
				function b(r) {
					const s = new O.V(new P.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), E.X);
					return new p.Tp(r.controller, {
						client: new a.K(r.client.globals, r.client.config),
						store: new n.U(r.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function D(r) {
					const s = new O.V(new P.E(), E.X).detach(!0);
					return new m.c(r.controller, {
						client: new a.K(r.client.globals, r.client.config),
						store: new C.t(r.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function L(r) {
					const s = new O.V(new P.E(), E.X).detach();
					return new c.Z(r.controller, {
						client: new a.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, i, e) {
				'use strict';
				e.d(i, { Z: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					m = (a) => {
						const t = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								t.current && a.className?.includes('lang-') && !a.className?.includes(c) && window?.Prism?.highlightElement(t.current);
							}, [a.className, a.children, t]),
							(0, o.Y)('code', { ...a, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function i(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (y.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetGridOptions-FacetGridOptions-stories.3f64837a.iframe.bundle.js.map
