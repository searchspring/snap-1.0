(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[909],
		{
			'./components/src/components/Molecules/Filter/Filter.stories.tsx'(O, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => n, NoFacetLabel: () => f, __namedExportsOrder: () => D, default: () => P });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					p = e('./components/src/components/Atoms/Icon/paths.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const L =
						"# Filter\n\nRenders a facet filter.\n\n## Sub-components\n- Icon\n- Button\n\n## Usage\n```jsx\nimport { Filter } from '@searchspring/snap-preact-components';\n```\n\n### facetLabel\nThe `facetLabel` prop specifies the filter label. Typically set to the facet label.\n\n```jsx\n<Filter facetLabel={'Brand'} />\n```\n\n### valueLabel\nThe `valueLabel` prop specifies the filter value. Typically set to the facet value label.\n\n```jsx\n<Filter valueLabel={'Nike'} />\n```\n\n### url\nThe `url` prop specifies a link to clear the filter selection.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} url={filter.url} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop will disable the filter facet label.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} hideFacetLabel={true} />\n```\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel`.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} separator={': '} />\n```\n\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery).\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when a filter is clicked.\n\n```jsx\n<Filter onClick={(e)=>{console.log(e)}}/>\n```\n",
					P = {
						title: 'Molecules/Filter',
						component: a.d,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(d.oz, { options: { overrides: { code: i.Z } }, children: L }), (0, s.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						argTypes: {
							filter: { description: 'Filter store object', table: { type: { summary: 'object' } }, control: { type: 'none' } },
							facetLabel: { description: 'Filter field', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							valueLabel: { description: 'Filter value', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							url: { description: 'URL manager object', table: { type: { summary: 'object' } }, control: { type: 'object' } },
							hideFacetLabel: {
								description: 'Hide facet label',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							separator: { description: 'Filter delimiter', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							icon: {
								defaultValue: 'close-thin',
								description: 'Icon name',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
								options: [...Object.keys(p.c)],
								control: { type: 'select' },
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
					E = o.p.search({ id: 'Filter', globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Blue' }] } }),
					n = (v, { loaded: { controller: g } }) =>
						(0, s.Y)(a.d, {
							...v,
							facetLabel: g?.store?.facets.filter((_) => _.type === 'value').shift().label,
							valueLabel: g?.store?.facets
								.filter((_) => _.type === 'value')
								.shift()
								.values.shift().value,
						});
				n.loaders = [async () => (await E.search(), { controller: E })];
				const f = (v, { loaded: { controller: g } }) =>
					(0, s.Y)(a.d, {
						...v,
						facetLabel: g?.store?.facets.filter((_) => _.type === 'value').shift().label,
						valueLabel: g?.store?.facets
							.filter((_) => _.type === 'value')
							.shift()
							.values.shift().value,
					});
				(f.loaders = [async () => (await E.search(), { controller: E })]),
					(f.args = { hideFacetLabel: !0 }),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: {
								originalSource: `(args: FilterProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Filter {...args} facetLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().label} valueLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().values.shift().value} />`,
								...n.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: FilterProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Filter {...args} facetLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().label} valueLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().values.shift().value} />`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const D = ['Default', 'NoFacetLabel'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(O, l, e) {
				'use strict';
				e.d(l, { $: () => u });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					i = e.n(p),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/hooks/useA11y.tsx'),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					_ = e('./components/src/hooks/useLang.tsx'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					U = e.n(A),
					B = e('../../node_modules/color/index.js'),
					R = e.n(B);
				const K = ({ native: c, color: r, backgroundColor: b, borderColor: m, theme: h }) => {
						const C = new (R())(b || r || h?.variables?.colors?.primary).lightness(95);
						return c
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: r || h?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: b || '#fff',
									border: `1px solid ${m || r || h?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: C.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					u = (0, t.PA)((c) => {
						const r = (0, L.u)(),
							m = { disableA11y: !1, treePath: (0, P.LU)() },
							h = (0, D.v6)('button', r, m, c),
							{
								content: C,
								children: j,
								disabled: T,
								native: I,
								onClick: W,
								disableA11y: F,
								disableStyles: V,
								className: $,
								internalClassName: S,
								icon: y,
								lang: x,
								treePath: M,
								style: H,
								styleScript: z,
								themeStyleScript: X,
								...J
							} = h,
							N = { icon: { internalClassName: 'ss__button__icon', ...(0, f.s)({ disableStyles: V }), theme: h?.theme, treePath: M } },
							G = {
								...(0, v.Z)(h, K),
								className: i()('ss__button', { 'ss__button--native': I, 'ss__button--disabled': T }, $, S),
								disabled: T,
								onClick: (Z) => !T && W && W(Z),
								...J,
							},
							k = { ref: (Z) => (0, E.iy)(Z) },
							Q = {},
							q = U()(Q, x || {}),
							Y = (0, _.u)(q, {});
						return C || j || y || x?.button?.value
							? (0, s.Y)(o._, {
									children: I
										? (0, s.FD)('button', {
												...G,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...Y.button?.all,
														children: [(0, n.Y)(C, { treePath: M }), (0, n.Y)(j, { treePath: M })],
													}),
													y && (0, s.Y)(g.I, { ...N.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												],
										  })
										: (0, s.FD)('div', {
												...(F ? {} : k),
												role: 'button',
												'aria-disabled': T,
												...G,
												...Y.button?.attributes,
												children: [
													C || j || Y.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...Y.button?.value,
																children: [(0, n.Y)(C, { treePath: M }), (0, n.Y)(j, { treePath: M })],
														  })
														: void 0,
													y && (0, s.Y)(g.I, { ...N.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												],
										  }),
							  })
							: (0, s.Y)(d.FK, {});
					});
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(O, l, e) {
				'use strict';
				e.d(l, { d: () => B });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					t = e.n(i),
					o = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/components/Atoms/Button/Button.tsx'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = e('./components/src/hooks/useLang.tsx'),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(_);
				const U = ({}) =>
						(0, p.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', fontWeight: 'bold' },
						}),
					B = (0, a.PA)((R) => {
						const K = (0, n.u)(),
							c = { treePath: (0, f.LU)() },
							r = (0, L.v6)('filter', K, c, R),
							{
								filter: b,
								facetLabel: m,
								valueLabel: h,
								url: C,
								hideFacetLabel: j,
								onClick: T,
								icon: I,
								separator: W,
								disableStyles: F,
								className: V,
								internalClassName: $,
								treePath: S,
							} = r,
							y = b?.url?.link || C?.link,
							x = b?.value.label || h,
							M = b?.facet.label || m,
							H = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, o.s)({ disableStyles: F }), theme: r.theme, treePath: S },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, o.s)({ disableStyles: F, icon: I }),
									theme: r.theme,
									treePath: S,
								},
							},
							z = (0, P.Z)(r, U),
							X = { filter: { attributes: { 'aria-label': M ? `remove selected ${M} filter ${x}` : x } } },
							J = A()(X, r.lang || {}),
							N = (0, g.u)(J, { label: M, value: x });
						return x
							? (0, s.Y)(E._, {
									children: (0, s.Y)('a', {
										...z,
										className: t()('ss__filter', V, $),
										onClick: (w) => {
											y?.onClick && y.onClick(w), T && T(w);
										},
										href: y?.href,
										tabIndex: 0,
										...N.filter?.all,
										children: (0, s.FD)(D.$, {
											...H.button,
											children: [
												(0, s.Y)(v.I, { ...H.icon, ...(typeof I == 'string' ? { icon: I } : I) }),
												!j &&
													(0, s.FD)('span', {
														className: 'ss__filter__label',
														children: [M, W && (0, s.Y)('span', { className: 'ss__filter__label__separator', children: W })],
													}),
												(0, s.Y)('span', { className: 'ss__filter__value', children: x }),
											],
										}),
									}),
							  })
							: (0, s.Y)(d.FK, {});
					});
			},
			'./components/src/hooks/useA11y.tsx'(O, l, e) {
				'use strict';
				e.d(l, { DH: () => p, aZ: () => a, iy: () => i });
				const s = 9,
					d = 27,
					a = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(t, o, L, P) {
					const E = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${E}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = E),
							(n.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					t &&
						!t.attributes?.[a] &&
						(t.setAttribute(a, !0),
						t.setAttribute('tabIndex', `${o || 0}`),
						t.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && t.click();
						}),
						L &&
							t.addEventListener('keydown', function (n) {
								const f = t.querySelectorAll(p),
									D = f[0],
									v = f[f.length - 1];
								if (n.keyCode == d) {
									t.focus(), P && P(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === s) &&
									(n.shiftKey
										? document.activeElement === D && (v.focus(), n.preventDefault())
										: document.activeElement === v && (D.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(O, l, e) {
				'use strict';
				e.d(l, { u: () => s });
				const s = (d, a) => {
					const p = {};
					return (
						Object.keys(d).forEach((i) => {
							const t = d && d[i],
								o = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (o.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(a) } })
										: (o.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((o.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = t.attributes['aria-label'](a))
											: (o.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](a))
											: (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (o.attributes.title = t.attributes.title(a))
											: (o.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (o.attributes.alt = t.attributes.alt(a)) : (o.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = t.attributes.placeholder(a))
											: (o.attributes.placeholder = t.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': i })),
								(p[i] = o);
						}),
						p
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(O, l, e) {
				'use strict';
				e.d(l, { F: () => s });
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
			'./components/src/utilities/defined.ts'(O, l, e) {
				'use strict';
				e.d(l, { s: () => s });
				function s(d) {
					const a = {};
					return (
						Object.keys(d).map((p) => {
							d[p] !== void 0 && (a[p] = d[p]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/snapify.ts'(O, l, e) {
				'use strict';
				e.d(l, { p: () => U });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					L = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					D = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					A = { globals: { siteId: '8uyt2m' } };
				class U {
					static recommendation(c) {
						const r = c.id;
						if (_[r]) return _[r];
						const b = (_[r] = R({ client: A, controller: c }));
						return (
							b.on('afterStore', async ({ controller: m }, h) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await h();
							}),
							b.init(),
							b
						);
					}
					static autocomplete(c) {
						const r = c.id;
						if (_[r]) return _[r];
						const b = (_[r] = K({ client: A, controller: c }));
						return (
							b.on('afterStore', async ({ controller: m }, h) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await h();
							}),
							b.init(),
							b
						);
					}
					static search(c) {
						const r = c.id;
						if (_[r]) return _[r];
						const b = (_[r] = B({ client: A, controller: c }));
						return (
							b.on('afterStore', async ({ controller: m }, h) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await h();
							}),
							b.init(),
							b
						);
					}
				}
				function B(u) {
					const c = new P.V(new n.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), E.X);
					return new d.Tp(u.controller, {
						client: new i.K(u.client.globals, u.client.config),
						store: new o.U(u.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new f.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new g.J(u.client.globals),
					});
				}
				function R(u) {
					const c = new P.V(new n.E(), E.X).detach(!0);
					return new p.c(u.controller, {
						client: new i.K(u.client.globals, u.client.config),
						store: new L.t(u.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new f.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new g.J(u.client.globals),
					});
				}
				function K(u) {
					const c = new P.V(new n.E(), E.X).detach();
					return new a.Z(u.controller, {
						client: new i.K(u.client.globals, u.client.config),
						store: new t.Y(u.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new f.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new g.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, l, e) {
				'use strict';
				e.d(l, { Z: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					p = (i) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(a) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, s.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function l(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (O.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Filter-Filter-stories.26e2e536.iframe.bundle.js.map
