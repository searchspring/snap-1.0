(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4401],
		{
			'./components/src/components/Molecules/Pagination/Pagination.stories.tsx'(P, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => d, __namedExportsOrder: () => T, default: () => x });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					s = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const L =
						"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n```jsx\nimport { Pagination } from '@athoscommerce/snap-preact-components';\n```\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```jsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### persistFirst\nThe `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.\n\n```jsx\n<Pagination pagination={controller.store.pagination} persistFirst={true} />\n```\n\n### persistLast\nThe `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.\n\n```jsx\n<Pagination pagination={controller.store.pagination} persistLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```jsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} lastButton={'Prev'} />\n```",
					x = {
						title: 'Molecules/Pagination',
						component: g.d,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(l.oz, { options: { overrides: { code: s.Z } }, children: L }), (0, n.Y)(l.uY, { story: l.h1 })],
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
							pages: {
								description:
									'Number of pages shown - recommend using an odd number as it includes the current page with an even spread to the left and right (excluding first and last)',
								defaultValue: 5,
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 5 } },
								control: { type: 'number' },
							},
							pagesLeft: {
								description: 'Number of pages shown to the left (excluding first) - must be used with pagesRight',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							pagesRight: {
								description: 'Number of pages shown to the right (excluding last) - must be used with pagesLeft',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							nextButton: {
								description: 'Pagination next button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							prevButton: {
								description: 'Pagination prev button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							firstButton: {
								description: 'Pagination first button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							lastButton: {
								description: 'Pagination last button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							hideFirst: {
								description: 'Hide first button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideLast: {
								description: 'Hide last button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							persistFirst: {
								description: 'persists the first page button (when not on first page)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							persistLast: {
								description: 'persists the last page button (when not on last page)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideEllipsis: {
								description: 'Hide ellipsis',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideNext: {
								description: 'Hide next button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hidePrev: {
								description: 'Hide previous button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...t.F,
						},
					},
					y = o.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					M = (0, m.PA)(({ args: b, controller: f }) => (0, n.Y)(g.d, { ...b, pagination: f?.store?.pagination })),
					d = (b, { loaded: { controller: f } }) => (0, n.Y)(M, { args: b, controller: f });
				(d.loaders = [async () => (await y.search(), { controller: y })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: PaginationProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservablePagination args={args} controller={controller} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const T = ['Default'];
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(P, r, e) {
				'use strict';
				e.d(r, { d: () => D });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					s = e.n(g),
					t = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(T),
					f = e('./components/src/hooks/useLang.tsx');
				const h = () =>
						(0, l.AH)({
							'& .ss__pagination__page': {
								padding: '5px',
								display: 'inline-block',
								minHeight: '1em',
								minWidth: '1em',
								textAlign: 'center',
								'&.ss__pagination__page--active': { fontWeight: 'bold' },
								'&:hover:not(.ss__pagination__page--active)': {},
							},
						}),
					D = (0, m.PA)((B) => {
						const C = (0, o.u)(),
							A = { pages: 5, treePath: (0, L.LU)() },
							a = (0, y.v6)('pagination', C, A, B),
							{
								pagination: c,
								controller: u,
								pages: _,
								pagesLeft: p,
								pagesRight: v,
								hideFirst: Y,
								hideLast: V,
								persistFirst: J,
								persistLast: X,
								hideEllipsis: U,
								hideNext: H,
								hidePrev: z,
								nextButton: K,
								prevButton: S,
								firstButton: W,
								lastButton: N,
								disableStyles: Z,
								className: $,
								internalClassName: G,
								treePath: Q,
							} = a,
							w = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, x.s)({ disableStyles: Z }), theme: a?.theme, treePath: Q },
							},
							i = c || u?.store?.pagination,
							k = Number.isInteger(p) && Number.isInteger(v) ? [p, v] : [_],
							R = i?.getPages(...k),
							O = R?.map((E) => E.number),
							q = (0, M.Z)(a, h),
							ee = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${i?.last.number}` } },
							},
							te = b()(ee, a.lang || {}),
							j = (0, f.u)(te, { pagination: i });
						return O && O.length > 1 && i?.totalResults
							? (0, n.Y)(t._, {
									children: (0, n.Y)('div', {
										...q,
										className: s()('ss__pagination', $, G),
										children: (0, n.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												i.previous &&
													!z &&
													(0, n.Y)('a', {
														...i.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...j.previous?.all,
														children: S || (0, n.Y)(d.I, { ...w.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!O.includes(i.first.number) || (J && i.page !== i.first.number)) &&
													!Y &&
													(0, n.FD)(n.FK, {
														children: [
															(0, n.Y)('a', {
																...i.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...j.first?.all,
																children: W || i.first.number,
															}),
															!O.includes(2) && !U && (0, n.Y)('span', { children: '\u2026' }),
														],
													}),
												R &&
													R.map((E) => {
														const ne = { page: { attributes: { 'aria-label': `go to page ${E.number}` } } },
															se = b()(ne, a.lang || {}),
															F = (0, f.u)(se, { pagination: i, page: E });
														return E.active
															? (0, n.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...F.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: E.number,
															  })
															: (0, n.Y)('a', { ...E.url.link, className: 'ss__pagination__page', ...F.page?.all, children: E.number });
													}),
												(!O.includes(i.last.number) || (X && i.page !== i.last.number)) &&
													!V &&
													(0, n.FD)(n.FK, {
														children: [
															!O.includes(i.totalPages - 1) && !U && (0, n.Y)('span', { children: '\u2026' }),
															(0, n.Y)('a', {
																...i.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...j.last?.all,
																children: N || i.last.number,
															}),
														],
													}),
												i.next &&
													!H &&
													(0, n.Y)('a', {
														...i.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...j.next?.all,
														children: K || (0, n.Y)(d.I, { ...w.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(P, r, e) {
				'use strict';
				e.d(r, { u: () => n });
				const n = (m, l) => {
					const g = {};
					return (
						Object.keys(m).forEach((s) => {
							const t = m && m[s],
								o = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (o.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (o.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((o.attributes = { 'ss-lang': s }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (o.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (o.attributes.title = t.attributes.title(l))
											: (o.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (o.attributes.alt = t.attributes.alt(l)) : (o.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = t.attributes.placeholder(l))
											: (o.attributes.placeholder = t.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': s })),
								(g[s] = o);
						}),
						g
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(P, r, e) {
				'use strict';
				e.d(r, { F: () => n });
				const n = {
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
			'./components/src/utilities/defined.ts'(P, r, e) {
				'use strict';
				e.d(r, { s: () => n });
				function n(m) {
					const l = {};
					return (
						Object.keys(m).map((g) => {
							m[g] !== void 0 && (l[g] = m[g]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/snapify.ts'(P, r, e) {
				'use strict';
				e.d(r, { p: () => B });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					D = { globals: { siteId: 'atkzs2' } };
				class B {
					static recommendation(c) {
						const u = c.id;
						if (h[u]) return h[u];
						const _ = (h[u] = I({ client: D, controller: c }));
						return (
							_.on('afterStore', async ({ controller: p }, v) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(c) {
						const u = c.id;
						if (h[u]) return h[u];
						const _ = (h[u] = A({ client: D, controller: c }));
						return (
							_.on('afterStore', async ({ controller: p }, v) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static search(c) {
						const u = c.id;
						if (h[u]) return h[u];
						const _ = (h[u] = C({ client: D, controller: c }));
						return (
							_.on('afterStore', async ({ controller: p }, v) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
				}
				function C(a) {
					const c = new x.V(new M.E({ settings: { coreType: 'query', corePrefix: a.controller.id } }), y.X);
					return new m.Tp(a.controller, {
						client: new s.K(a.client.globals, a.client.config),
						store: new o.U(a.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new d.E(),
						profiler: new T.U(),
						logger: new b.V(),
						tracker: new f.J(a.client.globals),
					});
				}
				function I(a) {
					const c = new x.V(new M.E(), y.X).detach(!0);
					return new g.c(a.controller, {
						client: new s.K(a.client.globals, a.client.config),
						store: new L.t(a.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new d.E(),
						profiler: new T.U(),
						logger: new b.V(),
						tracker: new f.J(a.client.globals),
					});
				}
				function A(a) {
					const c = new x.V(new M.E(), y.X).detach();
					return new l.Z(a.controller, {
						client: new s.K(a.client.globals, a.client.config),
						store: new t.Y(a.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new d.E(),
						profiler: new T.U(),
						logger: new b.V(),
						tracker: new f.J(a.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, r, e) {
				'use strict';
				e.d(r, { Z: () => g });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					g = (s) => {
						const t = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								t.current && s.className?.includes('lang-') && !s.className?.includes(l) && window?.Prism?.highlightElement(t.current);
							}, [s.className, s.children, t]),
							(0, n.Y)('code', { ...s, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function r(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (P.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Pagination-Pagination-stories.386e6233.iframe.bundle.js.map
