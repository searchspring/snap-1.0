(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9800],
		{
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx'(v, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => _, __namedExportsOrder: () => y, default: () => O });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const x =
						'# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```jsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```jsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```',
					O = {
						title: 'Atoms/PaginationInfo',
						component: g.R,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(l.oz, { options: { overrides: { code: a.Z } }, children: x }), (0, r.Y)(l.uY, { story: l.h1 })],
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
								table: { type: { summary: 'string, ()=>string' } },
								control: { type: 'text' },
							},
							...t.F,
						},
					},
					P = n.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					M = (0, p.PA)(({ args: E, controller: h }) => (0, r.Y)(g.R, { ...E, pagination: h?.store?.pagination })),
					_ = (E, { loaded: { controller: h } }) => (0, r.Y)(M, { args: E, controller: h });
				(_.loaders = [async () => (await P.search(), { controller: P })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
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
								..._.parameters?.docs?.source,
							},
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(v, i, e) {
				'use strict';
				e.d(i, { R: () => f });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					t = e.n(a),
					n = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(_),
					E = e('./components/src/hooks/useLang.tsx');
				const h = ({}) => (0, g.AH)({}),
					f = (0, l.PA)((D) => {
						const I = (0, x.u)(),
							T = (0, O.LU)(),
							u = D.controller?.store.pagination || D.pagination,
							j = {
								infoText: `${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${`${u?.totalResults} result${u?.totalResults == 1 ? '' : 's'}`}`,
								treePath: T,
							},
							s = (0, P.v6)('paginationInfo', I, j, D),
							{ controller: o, infoText: c, className: d, internalClassName: m } = s,
							b = u || o?.store?.pagination,
							C = (0, M.Z)(s, h),
							A = {
								infoText: {
									value: c,
									attributes: {
										'aria-label': `displaying ${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${u?.totalResults} result${
											u?.totalResults == 1 ? '' : 's'
										} ${o?.store?.search.query ? `for "${o?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							R = y()(A, s.lang || {}),
							U = (0, E.u)(R, { pagination: b });
						return b?.totalResults
							? (0, r.Y)(n._, {
									children: (0, r.Y)('div', {
										...C,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: t()('ss__pagination-info', d, m),
										...U.infoText?.all,
									}),
							  })
							: (0, r.Y)(p.FK, {});
					});
			},
			'./components/src/hooks/useLang.tsx'(v, i, e) {
				'use strict';
				e.d(i, { u: () => r });
				const r = (p, l) => {
					const g = {};
					return (
						Object.keys(p).forEach((a) => {
							const t = p && p[a],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': a }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(l))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(l)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(l))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': a })),
								(g[a] = n);
						}),
						g
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(v, i, e) {
				'use strict';
				e.d(i, { F: () => r });
				const r = {
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
			'./components/src/utilities/snapify.ts'(v, i, e) {
				'use strict';
				e.d(i, { p: () => I });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					h = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					D = { globals: { siteId: '8uyt2m' } };
				class I {
					static recommendation(o) {
						const c = o.id;
						if (f[c]) return f[c];
						const d = (f[c] = u({ client: D, controller: o }));
						return (
							d.on('afterStore', async ({ controller: m }, b) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await b();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(o) {
						const c = o.id;
						if (f[c]) return f[c];
						const d = (f[c] = j({ client: D, controller: o }));
						return (
							d.on('afterStore', async ({ controller: m }, b) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await b();
							}),
							d.init(),
							d
						);
					}
					static search(o) {
						const c = o.id;
						if (f[c]) return f[c];
						const d = (f[c] = T({ client: D, controller: o }));
						return (
							d.on('afterStore', async ({ controller: m }, b) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await b();
							}),
							d.init(),
							d
						);
					}
				}
				function T(s) {
					const o = new O.V(new M.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), P.X);
					return new p.Tp(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new n.U(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new _.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new h.J(s.client.globals),
					});
				}
				function u(s) {
					const o = new O.V(new M.E(), P.X).detach(!0);
					return new g.c(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new x.t(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new _.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new h.J(s.client.globals),
					});
				}
				function j(s) {
					const o = new O.V(new M.E(), P.X).detach();
					return new l.Z(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new _.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new h.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, i, e) {
				'use strict';
				e.d(i, { Z: () => g });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					g = (a) => {
						const t = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								t.current && a.className?.includes('lang-') && !a.className?.includes(l) && window?.Prism?.highlightElement(t.current);
							}, [a.className, a.children, t]),
							(0, r.Y)('code', { ...a, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function i(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (v.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-PaginationInfo-PaginationInfo-stories.5d61b8ce.iframe.bundle.js.map
