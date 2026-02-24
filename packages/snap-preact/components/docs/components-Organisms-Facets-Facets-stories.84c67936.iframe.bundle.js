(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6721],
		{
			'./components/src/components/Organisms/Facets/Facets.stories.tsx'(g, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => d, __namedExportsOrder: () => O, default: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/snapify.ts');
				const D =
						"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```jsx\nimport { Facets } from '@searchspring/snap-preact-components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```jsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked.\n\n```jsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```",
					y = {
						title: 'Organisms/Facets',
						component: o.J,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: h.Z } }, children: D }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(u, {}) })],
						argTypes: {
							facets: {
								description: 'Facets store reference',
								type: { required: !1 },
								table: { type: { summary: 'Facets store object' } },
								control: { type: 'none' },
							},
							limit: {
								description: 'Maximum number of facets to display',
								type: { required: !1 },
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							onFacetOptionClick: {
								description: 'Callback function for when a facet option is clicked',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onFacetOnClick',
							},
							...i.F,
						},
					},
					E = p.p.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
					d = (u, { loaded: { controller: f } }) => (0, t.Y)(o.J, { ...u, controller: f });
				(d.loaders = [async () => (await E.search(), { controller: E })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: FacetsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Facets {...args} controller={controller} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(g, r, e) {
				'use strict';
				e.d(r, { J: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					i = e.n(h),
					p = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(p),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					d = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts');
				const _ = () => (0, o.AH)({}),
					T = (0, y.PA)((x) => {
						const U = (0, O.u)(),
							R = (0, u.LU)(),
							I = { facets: x.controller?.store?.facets, treePath: R };
						let s = (0, C.v6)('facets', U, I, x);
						const { limit: n, onFacetOptionClick: a, disableStyles: m, className: c, internalClassName: P, controller: L, treePath: K } = s,
							A = (j) => {
								a && a(j), L?.setFocused && L?.setFocused();
							},
							b = {
								components: {
									facetGridOptions: { onClick: A },
									facetHierarchyOptions: { onClick: A },
									facetListOptions: { onClick: A },
									facetPaletteOptions: { onClick: A },
								},
							},
							F = D()(b, s?.theme || {}, { arrayMerge: (j, S) => S });
						s = { ...s, theme: F };
						let { facets: M } = s;
						n && M && n > 0 && (M = M.slice(0, +n));
						const W = { facet: { internalClassName: 'ss__facets__facet', ...(0, f.s)({ disableStyles: m }), theme: s.theme, treePath: K } },
							B = (0, v.Z)(s, _);
						return M && M?.length > 0
							? (0, t.Y)(d._, {
									children: (0, t.Y)('div', {
										className: i()('ss__facets', c, P),
										...B,
										children: M.map((j) => (0, t.Y)(E.s, { ...W.facet, facet: j }, j.field)),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/types.ts'(g, r, e) {
				'use strict';
				e.d(r, { Q: () => l, V: () => t });
				var t = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(t || {}),
					l = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(g, r, e) {
				'use strict';
				e.d(r, { F: () => t });
				const t = {
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
			'./components/src/utilities/snapify.ts'(g, r, e) {
				'use strict';
				e.d(r, { p: () => x });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					h = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					p = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					D = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					u = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					C = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					T = { globals: { siteId: '8uyt2m' } };
				class x {
					static recommendation(n) {
						const a = n.id;
						if (_[a]) return _[a];
						const m = (_[a] = R({ client: T, controller: n }));
						return (
							m.on('afterStore', async ({ controller: c }, P) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await P();
							}),
							m.init(),
							m
						);
					}
					static autocomplete(n) {
						const a = n.id;
						if (_[a]) return _[a];
						const m = (_[a] = I({ client: T, controller: n }));
						return (
							m.on('afterStore', async ({ controller: c }, P) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await P();
							}),
							m.init(),
							m
						);
					}
					static search(n) {
						const a = n.id;
						if (_[a]) return _[a];
						const m = (_[a] = U({ client: T, controller: n }));
						return (
							m.on('afterStore', async ({ controller: c }, P) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await P();
							}),
							m.init(),
							m
						);
					}
				}
				function U(s) {
					const n = new E.V(new O.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), d.X);
					return new l.Tp(s.controller, {
						client: new i.K(s.client.globals, s.client.config),
						store: new D.U(s.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new u.E(),
						profiler: new f.U(),
						logger: new C.V(),
						tracker: new v.J(s.client.globals),
					});
				}
				function R(s) {
					const n = new E.V(new O.E(), d.X).detach(!0);
					return new h.c(s.controller, {
						client: new i.K(s.client.globals, s.client.config),
						store: new y.t(s.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new u.E(),
						profiler: new f.U(),
						logger: new C.V(),
						tracker: new v.J(s.client.globals),
					});
				}
				function I(s) {
					const n = new E.V(new O.E(), d.X).detach();
					return new o.Z(s.controller, {
						client: new i.K(s.client.globals, s.client.config),
						store: new p.Y(s.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new u.E(),
						profiler: new f.U(),
						logger: new C.V(),
						tracker: new v.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(g, r, e) {
				'use strict';
				e.d(r, { Z: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					h = (i) => {
						const p = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								p.current && i.className?.includes('lang-') && !i.className?.includes(o) && window?.Prism?.highlightElement(p.current);
							}, [i.className, i.children, p]),
							(0, t.Y)('code', { ...i, ref: p, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function r(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (g.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facets-Facets-stories.84c67936.iframe.bundle.js.map
