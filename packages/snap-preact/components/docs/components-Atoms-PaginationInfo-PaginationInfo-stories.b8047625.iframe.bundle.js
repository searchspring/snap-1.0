(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9800],
		{
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx'(b, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => g, __namedExportsOrder: () => y, default: () => v });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					f = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					s = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const D =
						'# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```jsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```jsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```',
					v = {
						title: 'Atoms/PaginationInfo',
						component: f.R,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(c.oz, { options: { overrides: { code: s.Z } }, children: D }), (0, r.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						argTypes: {
							controller: {
								description: 'Search Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							pagination: {
								description: 'Pagination store reference',
								type: { required: !1 },
								table: { type: { summary: 'pagination store object' } },
								control: { type: 'none' },
							},
							infoText: {
								description: 'Pagination info text to display',
								table: { type: { summary: 'string, ()=>string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							...t.F,
						},
					},
					h = o.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					O = (0, p.PA)(({ args: E, controller: P }) => (0, r.Y)(f.R, { ...E, pagination: P?.store?.pagination })),
					g = (E, { loaded: { controller: P } }) => (0, r.Y)(O, { args: E, controller: P });
				(g.loaders = [async () => (await h.search(), { controller: h })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: PaginationInfoProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservablePaginationInfo args={args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(b, l, e) {
				'use strict';
				e.d(l, { R: () => P });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					s = e.n(f),
					t = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(O),
					y = e('./components/src/hooks/useLang.tsx');
				const E = ({}) => (0, c.AH)({}),
					P = (0, p.PA)((u) => {
						const x = (0, o.u)(),
							T = (0, D.LU)(),
							d = u.controller?.store.pagination || u.pagination,
							j = {
								infoText: `${d?.multiplePages ? `${d?.begin} - ${d?.end} of` : ''} ${`${d?.totalResults} result${d?.totalResults == 1 ? '' : 's'}`}`,
								treePath: T,
							},
							I = (0, v.v6)('paginationInfo', x, j, u),
							{ controller: n, infoText: a, className: m, internalClassName: _ } = I,
							i = d || n?.store?.pagination,
							M = (0, h.Z)(I, E),
							C = {
								infoText: {
									value: a,
									attributes: {
										'aria-label': `displaying ${d?.multiplePages ? `${d?.begin} - ${d?.end} of` : ''} ${d?.totalResults} result${
											d?.totalResults == 1 ? '' : 's'
										} ${n?.store?.search.query ? `for "${n?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							A = g()(C, I.lang || {}),
							R = (0, y.u)(A, { pagination: i });
						return i?.totalResults
							? (0, r.Y)(t._, {
									children: (0, r.Y)('div', {
										...M,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', m, _),
										...R.infoText?.all,
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(b, l, e) {
				'use strict';
				e.d(l, { u: () => r });
				const r = (p, c) => {
					const f = {};
					return (
						Object.keys(p).forEach((s) => {
							const t = p && p[s],
								o = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (o.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value(c) } })
										: (o.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((o.attributes = { 'ss-lang': s }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = t.attributes['aria-label'](c))
											: (o.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](c))
											: (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (o.attributes.title = t.attributes.title(c))
											: (o.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (o.attributes.alt = t.attributes.alt(c)) : (o.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = t.attributes.placeholder(c))
											: (o.attributes.placeholder = t.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': s })),
								(f[s] = o);
						}),
						f
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, l, e) {
				'use strict';
				e.d(l, { F: () => r });
				const r = {
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
			'./components/src/utilities/snapify.ts'(b, l, e) {
				'use strict';
				e.d(l, { p: () => T });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					x = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(a) {
						const m = a.id;
						if (u[m]) return u[m];
						const _ = (u[m] = j({ client: x, controller: a }));
						return (
							_.on('afterStore', async ({ controller: i }, M) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(a) {
						const m = a.id;
						if (u[m]) return u[m];
						const _ = (u[m] = I({ client: x, controller: a }));
						return (
							_.on('afterStore', async ({ controller: i }, M) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static search(a) {
						const m = a.id;
						if (u[m]) return u[m];
						const _ = (u[m] = d({ client: x, controller: a }));
						return (
							_.on('afterStore', async ({ controller: i }, M) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
				}
				function d(n) {
					const a = new v.V(new O.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), h.X);
					return new p.Tp(n.controller, {
						client: new s.K(n.client.globals, n.client.config),
						store: new o.U(n.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new P.J(n.client.globals),
					});
				}
				function j(n) {
					const a = new v.V(new O.E(), h.X).detach(!0);
					return new f.c(n.controller, {
						client: new s.K(n.client.globals, n.client.config),
						store: new D.t(n.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new P.J(n.client.globals),
					});
				}
				function I(n) {
					const a = new v.V(new O.E(), h.X).detach();
					return new c.Z(n.controller, {
						client: new s.K(n.client.globals, n.client.config),
						store: new t.Y(n.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new P.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, l, e) {
				'use strict';
				e.d(l, { Z: () => f });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					f = (s) => {
						const t = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								t.current && s.className?.includes('lang-') && !s.className?.includes(c) && window?.Prism?.highlightElement(t.current);
							}, [s.className, s.children, t]),
							(0, r.Y)('code', { ...s, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function l(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (b.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-PaginationInfo-PaginationInfo-stories.b8047625.iframe.bundle.js.map
