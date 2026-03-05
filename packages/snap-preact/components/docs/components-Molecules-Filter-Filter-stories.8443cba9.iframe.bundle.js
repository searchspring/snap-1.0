(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[909],
		{
			'./components/src/components/Molecules/Filter/Filter.stories.tsx'(O, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => o, NoFacetLabel: () => f, __namedExportsOrder: () => D, default: () => P });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					p = e('./components/src/components/Atoms/Icon/paths.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const L =
						"# Filter\n\nRenders a facet filter.\n\n## Sub-components\n- Icon\n- Button\n\n## Usage\n```jsx\nimport { Filter } from '@athoscommerce/snap-preact/components';\n```\n\n### facetLabel\nThe `facetLabel` prop specifies the filter label. Typically set to the facet label.\n\n```jsx\n<Filter facetLabel={'Brand'} />\n```\n\n### valueLabel\nThe `valueLabel` prop specifies the filter value. Typically set to the facet value label.\n\n```jsx\n<Filter valueLabel={'Nike'} />\n```\n\n### url\nThe `url` prop specifies a link to clear the filter selection.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} url={filter.url} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop will disable the filter facet label.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} hideFacetLabel={true} />\n```\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel`.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} separator={': '} />\n```\n\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery).\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when a filter is clicked.\n\n```jsx\n<Filter onClick={(e)=>{console.log(e)}}/>\n```\n",
					P = {
						title: 'Molecules/Filter',
						component: l.d,
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
							facetLabel: {
								description: 'Filter field',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							valueLabel: {
								description: 'Filter value',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							url: { description: 'URL manager object', table: { type: { summary: 'object' } }, control: { type: 'object' } },
							hideFacetLabel: {
								description: 'Hide facet label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							separator: {
								description: 'Filter delimiter',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							icon: {
								defaultValue: 'close-thin',
								description: 'Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
								options: [...Object.keys(p.c)],
								control: { type: 'select' },
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
					b = a.p.search({ id: 'Filter', globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Blue' }] } }),
					o = (h, { loaded: { controller: y } }) =>
						(0, s.Y)(l.d, {
							...h,
							facetLabel: y?.store?.facets.filter((_) => _.type === 'value').shift().label,
							valueLabel: y?.store?.facets
								.filter((_) => _.type === 'value')
								.shift()
								.values.shift().value,
						});
				o.loaders = [async () => (await b.search(), { controller: b })];
				const f = (h, { loaded: { controller: y } }) =>
					(0, s.Y)(l.d, {
						...h,
						facetLabel: y?.store?.facets.filter((_) => _.type === 'value').shift().label,
						valueLabel: y?.store?.facets
							.filter((_) => _.type === 'value')
							.shift()
							.values.shift().value,
					});
				(f.loaders = [async () => (await b.search(), { controller: b })]),
					(f.args = { hideFacetLabel: !0 }),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
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
								...o.parameters?.docs?.source,
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
			'./components/src/components/Atoms/Button/Button.tsx'(O, c, e) {
				'use strict';
				e.d(c, { $: () => K });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					p = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useA11y.tsx'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					o = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					y = e('./components/src/hooks/useLang.tsx'),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(_),
					j = e('../../node_modules/color/index.js'),
					U = e.n(j);
				const B = ({ native: r, color: n, backgroundColor: u, borderColor: E, theme: m }) => {
						const v = new (U())(u || n || m?.variables?.colors?.primary || void 0).lightness(95);
						return r
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: n || m?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: u || '#fff',
									border: `1px solid ${E || n || m?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: v.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					K = (0, i.PA)((r) => {
						const n = (0, a.u)(),
							E = { disableA11y: !1, treePath: (0, L.LU)() },
							m = (0, f.v6)('button', n, E, r),
							{
								content: v,
								children: I,
								disabled: T,
								native: A,
								onClick: R,
								disableA11y: W,
								disableStyles: Y,
								className: V,
								internalClassName: F,
								icon: g,
								lang: x,
								treePath: M,
								style: $,
								styleScript: z,
								themeStyleScript: Z,
								...w
							} = m,
							S = { icon: { internalClassName: 'ss__button__icon', ...(0, o.s)({ disableStyles: Y }), theme: m?.theme, treePath: M } },
							k = {
								...(0, D.Z)(m, B),
								className: p()('ss__button', { 'ss__button--native': A, 'ss__button--disabled': T }, V, F),
								disabled: T,
								onClick: (J) => !T && R && R(J),
								...w,
							},
							X = { ref: (J) => (0, P.iy)(J) },
							G = {},
							Q = C()(G, x || {}),
							N = (0, y.u)(Q, {});
						return v || I || g || x?.button?.value
							? (0, s.Y)(t._, {
									children: A
										? (0, s.FD)('button', {
												...k,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...N.button?.all,
														children: [(0, b.Y)(v, { treePath: M }), (0, b.Y)(I, { treePath: M })],
													}),
													g && (0, s.Y)(h.I, { ...S.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
												],
										  })
										: (0, s.FD)('div', {
												...(W ? {} : X),
												role: 'button',
												'aria-disabled': T,
												...k,
												...N.button?.attributes,
												children: [
													v || I || N.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...N.button?.value,
																children: [(0, b.Y)(v, { treePath: M }), (0, b.Y)(I, { treePath: M })],
														  })
														: void 0,
													g && (0, s.Y)(h.I, { ...S.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(O, c, e) {
				'use strict';
				e.d(c, { d: () => j });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					i = e.n(p),
					t = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/components/Atoms/Button/Button.tsx'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					h = e('./components/src/hooks/useLang.tsx'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(y);
				const C = ({}) =>
						(0, l.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					j = (0, d.PA)((U) => {
						const B = (0, b.u)(),
							r = { treePath: (0, o.LU)() },
							n = (0, a.v6)('filter', B, r, U),
							{
								filter: u,
								facetLabel: E,
								valueLabel: m,
								url: v,
								hideFacetLabel: I,
								onClick: T,
								icon: A,
								separator: R,
								disableStyles: W,
								className: Y,
								internalClassName: V,
								treePath: F,
							} = n,
							g = u?.url?.link || v?.link,
							x = u?.value.label || m,
							M = u?.facet.label || E,
							$ = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, t.s)({ disableStyles: W }), theme: n.theme, treePath: F },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, t.s)({ disableStyles: W, icon: A }),
									theme: n.theme,
									treePath: F,
								},
							},
							z = (0, L.Z)(n, C),
							Z = { filter: { attributes: { 'aria-label': M ? `remove selected ${M} filter ${x}` : x } } },
							w = _()(Z, n.lang || {}),
							S = (0, h.u)(w, { label: M, value: x });
						return x
							? (0, s.Y)(P._, {
									children: (0, s.Y)('a', {
										...z,
										className: i()('ss__filter', Y, V),
										onClick: (H) => {
											g?.onClick && g.onClick(H), T && T(H);
										},
										href: g?.href,
										tabIndex: 0,
										...S.filter?.all,
										children: (0, s.FD)(f.$, {
											...$.button,
											children: [
												(0, s.Y)(D.I, { ...$.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												!I &&
													(0, s.FD)('span', {
														className: 'ss__filter__label',
														children: [M, R && (0, s.Y)('span', { className: 'ss__filter__label__separator', children: R })],
													}),
												(0, s.Y)('span', { className: 'ss__filter__value', children: x }),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(O, c, e) {
				'use strict';
				e.d(c, { DH: () => p, aZ: () => l, iy: () => i });
				const s = 9,
					d = 27,
					l = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(t, a, L, P) {
					const b = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${b}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = b),
							(o.innerHTML = `[${l}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					t &&
						!t.attributes?.[l] &&
						(t.setAttribute(l, !0),
						t.setAttribute('tabIndex', `${a || 0}`),
						t.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && t.click();
						}),
						L &&
							t.addEventListener('keydown', function (o) {
								const f = t.querySelectorAll(p),
									D = f[0],
									h = f[f.length - 1];
								if (o.keyCode == d) {
									t.focus(), P && P(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === s) &&
									(o.shiftKey
										? document.activeElement === D && (h.focus(), o.preventDefault())
										: document.activeElement === h && (D.focus(), o.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(O, c, e) {
				'use strict';
				e.d(c, { u: () => s });
				const s = (d, l) => {
					const p = {};
					return (
						Object.keys(d).forEach((i) => {
							const t = d && d[i],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(l))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(l)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(l))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': i })),
								(p[i] = a);
						}),
						p
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(O, c, e) {
				'use strict';
				e.d(c, { F: () => s });
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
			'./components/src/utilities/defined.ts'(O, c, e) {
				'use strict';
				e.d(c, { s: () => s });
				function s(d) {
					const l = {};
					return (
						Object.keys(d).map((p) => {
							d[p] !== void 0 && (l[p] = d[p]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/snapify.ts'(O, c, e) {
				'use strict';
				e.d(c, { p: () => j });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					o = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					C = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(n) {
						const u = n.id;
						if (_[u]) return _[u];
						const E = (_[u] = B({ client: C, controller: n }));
						return (
							E.on('afterStore', async ({ controller: m }, v) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await v();
							}),
							E.init(),
							E
						);
					}
					static autocomplete(n) {
						const u = n.id;
						if (_[u]) return _[u];
						const E = (_[u] = K({ client: C, controller: n }));
						return (
							E.on('afterStore', async ({ controller: m }, v) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await v();
							}),
							E.init(),
							E
						);
					}
					static search(n) {
						const u = n.id;
						if (_[u]) return _[u];
						const E = (_[u] = U({ client: C, controller: n }));
						return (
							E.on('afterStore', async ({ controller: m }, v) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await v();
							}),
							E.init(),
							E
						);
					}
				}
				function U(r) {
					const n = new P.V(new o.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), b.X);
					return new d.Tp(r.controller, {
						client: new i.K(r.client.globals, r.client.config),
						store: new a.U(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new D.U(),
						logger: new h.V(),
						tracker: new y.J(r.client.globals),
					});
				}
				function B(r) {
					const n = new P.V(new o.E(), b.X).detach(!0);
					return new p.c(r.controller, {
						client: new i.K(r.client.globals, r.client.config),
						store: new L.t(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new D.U(),
						logger: new h.V(),
						tracker: new y.J(r.client.globals),
					});
				}
				function K(r) {
					const n = new P.V(new o.E(), b.X).detach();
					return new l.Z(r.controller, {
						client: new i.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new D.U(),
						logger: new h.V(),
						tracker: new y.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, c, e) {
				'use strict';
				e.d(c, { Z: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					p = (i) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(l) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, s.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function c(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (O.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Filter-Filter-stories.8443cba9.iframe.bundle.js.map
