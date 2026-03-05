(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6721],
		{
			'./components/src/components/Organisms/Facets/Facets.stories.tsx'(g, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => d, __namedExportsOrder: () => P, default: () => v });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					u = e('./components/src/utilities/snapify.ts');
				const C =
						"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```jsx\nimport { Facets } from '@athoscommerce/snap-preact-components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```jsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked.\n\n```jsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```",
					v = {
						title: 'Organisms/Facets',
						component: s.J,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: O.Z } }, children: C }), (0, o.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, o.Y)('div', { style: { maxWidth: '300px' }, children: (0, o.Y)(p, {}) })],
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
								table: { category: 'Templates Legal', type: { summary: 'number' } },
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
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onFacetOnClick',
							},
							...m.F,
						},
					},
					h = u.p.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
					d = (p, { loaded: { controller: M } }) => (0, o.Y)(s.J, { ...p, controller: M });
				(d.loaders = [async () => (await h.search(), { controller: h })]),
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
				const P = ['Default'];
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(g, r, e) {
				'use strict';
				e.d(r, { J: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					O = e.n(s),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(m),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					h = e('./components/src/providers/cache.tsx'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts');
				const j = () => (0, l.AH)({}),
					_ = (0, C.PA)((y) => {
						const U = (0, d.u)(),
							R = (0, P.LU)(),
							I = { facets: y.controller?.store?.facets, treePath: R };
						let E = (0, M.v6)('facets', U, I, y);
						const { limit: t, onFacetOptionClick: n, disableStyles: a, className: i, internalClassName: c, controller: f, treePath: L } = E,
							A = (x) => {
								n && n(x), f?.setFocused && f?.setFocused();
							},
							b = {
								components: {
									facetGridOptions: { onClick: A },
									facetHierarchyOptions: { onClick: A },
									facetListOptions: { onClick: A },
									facetPaletteOptions: { onClick: A },
								},
							},
							K = u()(b, E?.theme || {}, { arrayMerge: (x, B) => B });
						E = { ...E, theme: K };
						let { facets: D } = E;
						t && D && t > 0 && (D = D.slice(0, +t));
						const F = { facet: { internalClassName: 'ss__facets__facet', ...(0, p.s)({ disableStyles: a }), theme: E.theme, treePath: L } },
							W = (0, T.Z)(E, j);
						return D && D?.length > 0
							? (0, o.Y)(h._, {
									children: (0, o.Y)('div', {
										className: O()('ss__facets', i, c),
										...W,
										children: D.map((x) => (0, o.Y)(v.s, { ...F.facet, facet: x }, x.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(g, r, e) {
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
			'./components/src/utilities/componentArgs.ts'(g, r, e) {
				'use strict';
				e.d(r, { F: () => o });
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
			'./components/src/utilities/snapify.ts'(g, r, e) {
				'use strict';
				e.d(r, { p: () => U });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					j = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					y = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(n) {
						const a = n.id;
						if (_[a]) return _[a];
						const i = (_[a] = I({ client: y, controller: n }));
						return (
							i.on('afterStore', async ({ controller: c }, f) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await f();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(n) {
						const a = n.id;
						if (_[a]) return _[a];
						const i = (_[a] = E({ client: y, controller: n }));
						return (
							i.on('afterStore', async ({ controller: c }, f) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await f();
							}),
							i.init(),
							i
						);
					}
					static search(n) {
						const a = n.id;
						if (_[a]) return _[a];
						const i = (_[a] = R({ client: y, controller: n }));
						return (
							i.on('afterStore', async ({ controller: c }, f) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await f();
							}),
							i.init(),
							i
						);
					}
				}
				function R(t) {
					const n = new h.V(new P.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), d.X);
					return new l.Tp(t.controller, {
						client: new m.K(t.client.globals, t.client.config),
						store: new C.U(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new p.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new j.J(t.client.globals),
					});
				}
				function I(t) {
					const n = new h.V(new P.E(), d.X).detach(!0);
					return new O.c(t.controller, {
						client: new m.K(t.client.globals, t.client.config),
						store: new v.t(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new p.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new j.J(t.client.globals),
					});
				}
				function E(t) {
					const n = new h.V(new P.E(), d.X).detach();
					return new s.Z(t.controller, {
						client: new m.K(t.client.globals, t.client.config),
						store: new u.Y(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new p.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new j.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(g, r, e) {
				'use strict';
				e.d(r, { Z: () => O });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					O = (m) => {
						const u = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								u.current && m.className?.includes('lang-') && !m.className?.includes(s) && window?.Prism?.highlightElement(u.current);
							}, [m.className, m.children, u]),
							(0, o.Y)('code', { ...m, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function r(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (g.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facets-Facets-stories.26c7bc4b.iframe.bundle.js.map
