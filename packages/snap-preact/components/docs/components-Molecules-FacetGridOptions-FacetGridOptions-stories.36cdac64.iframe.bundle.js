(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7383],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx'(E, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => g, __namedExportsOrder: () => M, default: () => y });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const C =
						"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```jsx\nimport { FacetGridOptions } from '@searchspring/snap-preact-components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```jsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```jsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```jsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n",
					y = {
						title: 'Molecules/FacetGridOptions',
						component: m.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(d.oz, { options: { overrides: { code: o.Z } }, children: C }), (0, s.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, s.Y)('div', { style: { maxWidth: '500px' }, children: (0, s.Y)(h, {}) })],
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
								table: { type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							gridSize: {
								defaultValue: '45px',
								description: 'Size of each grid item. Does not apply if using `columns` prop',
								table: { type: { summary: 'string' }, defaultValue: { summary: '45px' } },
								control: { type: 'text' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
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
					O = n.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
					P = (0, p.PA)(({ args: h, controller: v }) => {
						const _ = v?.store?.facets.filter((x) => x.field == 'color').pop();
						return (0, s.Y)(m.S, { ...h, values: _.values });
					}),
					g = (h, { loaded: { controller: v } }) => (0, s.Y)(P, { args: h, controller: v });
				(g.loaders = [async () => (await O.search(), { controller: O })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(E, i, e) {
				'use strict';
				e.d(i, { S: () => F });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					o = e.n(m),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					M = e('./components/src/hooks/useLang.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(h),
					_ = e('../../node_modules/color/index.js'),
					x = e.n(_);
				const A = ({ columns: b, gapSize: D, gridSize: r, theme: a }) => {
						const l = a?.variables,
							u = new (x())(l?.colors.primary),
							c = u.isDark() ? '#fff' : '#000';
						return (0, d.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: b ? `repeat(${b}, 1fr)` : `repeat(auto-fill, minmax(${r}, 1fr))`,
							gap: D,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${u.hex() || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${b} - ${2 * Math.round((b + 2) / 2)}px)`,
								margin: `0 ${D} ${D} 0`,
								[`:nth-of-type(${b}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: u.hex() || '#ccc', color: c || '#333' },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: u.hex() || '#f8f8f8', color: c || '#333' },
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
					F = (0, t.PA)((b) => {
						const D = (0, C.u)(),
							a = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, y.LU)() },
							l = (0, O.v6)('facetGridOptions', D, a, b),
							{ values: u, onClick: c, previewOnFocus: T, valueProps: R, facet: j, horizontal: U, className: I, internalClassName: K } = l;
						U && (l.columns = 0);
						const S = (0, P.Z)(l, A),
							L = u || j?.refinedValues;
						return L?.length
							? (0, s.Y)(n._, {
									children: (0, s.Y)('div', {
										...S,
										className: o()('ss__facet-grid-options', I, K),
										children: L.map((f) => {
											const z = {
													gridOption: {
														attributes: {
															'aria-label': `${
																f.filtered
																	? `remove selected filter ${j?.label || ''} - ${f.label}`
																	: j?.label
																	? `filter by ${j?.label} - ${f.label}`
																	: `filter by ${f.label}`
															}`,
														},
													},
												},
												B = v()(z, l.lang || {}),
												W = (0, M.u)(B, { facet: j, value: f });
											return (0, s.Y)('a', {
												className: o()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': f.filtered }),
												href: f.url?.link?.href,
												...R,
												onClick: (w) => {
													f.url?.link?.onClick(w), c && c(w);
												},
												...(T ? (0, g.l)(() => f?.preview && f.preview()) : {}),
												...W.gridOption?.all,
												children: (0, s.Y)('span', {
													className: o()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': f.label.length > 3,
													}),
													children: f.label,
												}),
											});
										}),
									}),
							  })
							: (0, s.Y)(p.FK, {});
					});
			},
			'./components/src/hooks/useLang.tsx'(E, i, e) {
				'use strict';
				e.d(i, { u: () => s });
				const s = (p, d) => {
					const m = {};
					return (
						Object.keys(p).forEach((o) => {
							const t = p && p[o],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(d) } })
										: (n.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](d))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](d))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(d))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(d)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(d))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': o })),
								(m[o] = n);
						}),
						m
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(E, i, e) {
				'use strict';
				e.d(i, { l: () => s });
				const s = (p, d = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (o) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									d.focusElem && o.target.focus(), p && p();
								}, d.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(E, i, e) {
				'use strict';
				e.d(i, { F: () => s });
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
			'./components/src/utilities/snapify.ts'(E, i, e) {
				'use strict';
				e.d(i, { p: () => A });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					d = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					x = { globals: { siteId: '8uyt2m' } };
				class A {
					static recommendation(a) {
						const l = a.id;
						if (_[l]) return _[l];
						const u = (_[l] = b({ client: x, controller: a }));
						return (
							u.on('afterStore', async ({ controller: c }, T) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await T();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(a) {
						const l = a.id;
						if (_[l]) return _[l];
						const u = (_[l] = D({ client: x, controller: a }));
						return (
							u.on('afterStore', async ({ controller: c }, T) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await T();
							}),
							u.init(),
							u
						);
					}
					static search(a) {
						const l = a.id;
						if (_[l]) return _[l];
						const u = (_[l] = F({ client: x, controller: a }));
						return (
							u.on('afterStore', async ({ controller: c }, T) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await T();
							}),
							u.init(),
							u
						);
					}
				}
				function F(r) {
					const a = new y.V(new P.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), O.X);
					return new p.Tp(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new n.U(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function b(r) {
					const a = new y.V(new P.E(), O.X).detach(!0);
					return new m.c(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new C.t(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function D(r) {
					const a = new y.V(new P.E(), O.X).detach();
					return new d.Z(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(E, i, e) {
				'use strict';
				e.d(i, { Z: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					m = (o) => {
						const t = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(d) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, s.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (E.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetGridOptions-FacetGridOptions-stories.36cdac64.iframe.bundle.js.map
