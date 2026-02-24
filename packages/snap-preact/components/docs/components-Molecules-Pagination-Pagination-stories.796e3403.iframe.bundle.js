(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4401],
		{
			'./components/src/components/Molecules/Pagination/Pagination.stories.tsx'(P, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => _, __namedExportsOrder: () => v, default: () => M });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/utilities/snapify.ts');
				const T =
						"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n```jsx\nimport { Pagination } from '@searchspring/snap-preact-components';\n```\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```jsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### persistFirst\nThe `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.\n\n```jsx\n<Pagination pagination={controller.store.pagination} persistFirst={true} />\n```\n\n### persistLast\nThe `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.\n\n```jsx\n<Pagination pagination={controller.store.pagination} persistLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```jsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} lastButton={'Prev'} />\n```",
					M = {
						title: 'Molecules/Pagination',
						component: d.d,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(p.oz, { options: { overrides: { code: i.Z } }, children: T }), (0, n.Y)(p.uY, { story: p.h1 })],
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
								table: { type: { summary: 'number' }, defaultValue: { summary: 5 } },
								control: { type: 'number' },
							},
							pagesLeft: {
								description: 'Number of pages shown to the left (excluding first) - must be used with pagesRight',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							pagesRight: {
								description: 'Number of pages shown to the right (excluding last) - must be used with pagesLeft',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							nextButton: { description: 'Pagination next button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							prevButton: { description: 'Pagination prev button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							firstButton: { description: 'Pagination first button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							lastButton: { description: 'Pagination last button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							hideFirst: {
								description: 'Hide first button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideLast: {
								description: 'Hide last button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							persistFirst: {
								description: 'persists the first page button (when not on first page)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							persistLast: {
								description: 'persists the last page button (when not on last page)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideEllipsis: {
								description: 'Hide ellipsis',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideNext: {
								description: 'Hide next button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hidePrev: {
								description: 'Hide previous button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...t.F,
						},
					},
					E = s.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					O = (0, c.PA)(({ args: f, controller: b }) => (0, n.Y)(d.d, { ...f, pagination: b?.store?.pagination })),
					_ = (f, { loaded: { controller: b } }) => (0, n.Y)(O, { args: f, controller: b });
				(_.loaders = [async () => (await E.search(), { controller: E })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
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
								..._.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(P, r, e) {
				'use strict';
				e.d(r, { d: () => B });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/dist/preact.module.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					t = e.n(i),
					s = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(f),
					h = e('./components/src/hooks/useLang.tsx');
				const j = () =>
						(0, d.AH)({
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
					B = (0, p.PA)((C) => {
						const A = (0, T.u)(),
							o = { pages: 5, treePath: (0, M.LU)() },
							a = (0, O.v6)('pagination', A, o, C),
							{
								pagination: u,
								controller: m,
								pages: g,
								pagesLeft: y,
								pagesRight: U,
								hideFirst: V,
								hideLast: J,
								persistFirst: X,
								persistLast: H,
								hideEllipsis: K,
								hideNext: z,
								hidePrev: Z,
								nextButton: S,
								prevButton: W,
								firstButton: N,
								lastButton: w,
								disableStyles: $,
								className: G,
								internalClassName: Q,
								treePath: k,
							} = a,
							F = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, E.s)({ disableStyles: $ }), theme: a?.theme, treePath: k },
							},
							l = u || m?.store?.pagination,
							q = Number.isInteger(y) && Number.isInteger(U) ? [y, U] : [g],
							R = l?.getPages(...q),
							D = R?.map((x) => x.number),
							ee = (0, _.Z)(a, j),
							te = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${l?.last.number}` } },
							},
							ne = b()(te, a.lang || {}),
							L = (0, h.u)(ne, { pagination: l });
						return D && D.length > 1 && l?.totalResults
							? (0, n.Y)(s._, {
									children: (0, n.Y)('div', {
										...ee,
										className: t()('ss__pagination', G, Q),
										children: (0, n.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												l.previous &&
													!Z &&
													(0, n.Y)('a', {
														...l.previous.url.link,
														className: t()('ss__pagination__page', 'ss__pagination__page--previous'),
														...L.previous?.all,
														children: W || (0, n.Y)(v.I, { ...F.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!D.includes(l.first.number) || (X && l.page !== l.first.number)) &&
													!V &&
													(0, n.FD)(n.FK, {
														children: [
															(0, n.Y)('a', {
																...l.first.url.link,
																className: t()('ss__pagination__page', 'ss__pagination__page--first'),
																...L.first?.all,
																children: N || l.first.number,
															}),
															!D.includes(2) && !K && (0, n.Y)('span', { children: '\u2026' }),
														],
													}),
												R &&
													R.map((x) => {
														const se = { page: { attributes: { 'aria-label': `go to page ${x.number}` } } },
															ae = b()(se, a.lang || {}),
															Y = (0, h.u)(ae, { pagination: l, page: x });
														return x.active
															? (0, n.Y)('span', {
																	className: t()('ss__pagination__page', 'ss__pagination__page--active'),
																	...Y.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: x.number,
															  })
															: (0, n.Y)('a', { ...x.url.link, className: 'ss__pagination__page', ...Y.page?.all, children: x.number });
													}),
												(!D.includes(l.last.number) || (H && l.page !== l.last.number)) &&
													!J &&
													(0, n.FD)(n.FK, {
														children: [
															!D.includes(l.totalPages - 1) && !K && (0, n.Y)('span', { children: '\u2026' }),
															(0, n.Y)('a', {
																...l.last.url.link,
																className: t()('ss__pagination__page', 'ss__pagination__page--last'),
																...L.last?.all,
																children: w || l.last.number,
															}),
														],
													}),
												l.next &&
													!z &&
													(0, n.Y)('a', {
														...l.next.url.link,
														className: t()('ss__pagination__page', 'ss__pagination__page--next'),
														...L.next?.all,
														children: S || (0, n.Y)(v.I, { ...F.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: (0, n.Y)(c.FK, {});
					});
			},
			'./components/src/hooks/useLang.tsx'(P, r, e) {
				'use strict';
				e.d(r, { u: () => n });
				const n = (c, p) => {
					const d = {};
					return (
						Object.keys(c).forEach((i) => {
							const t = c && c[i],
								s = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (s.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(p) } })
										: (s.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((s.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = t.attributes['aria-label'](p))
											: (s.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](p))
											: (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (s.attributes.title = t.attributes.title(p))
											: (s.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (s.attributes.alt = t.attributes.alt(p)) : (s.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = t.attributes.placeholder(p))
											: (s.attributes.placeholder = t.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': i })),
								(d[i] = s);
						}),
						d
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(P, r, e) {
				'use strict';
				e.d(r, { F: () => n });
				const n = {
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
			'./components/src/utilities/defined.ts'(P, r, e) {
				'use strict';
				e.d(r, { s: () => n });
				function n(c) {
					const p = {};
					return (
						Object.keys(c).map((d) => {
							c[d] !== void 0 && (p[d] = c[d]);
						}),
						p
					);
				}
			},
			'./components/src/utilities/snapify.ts'(P, r, e) {
				'use strict';
				e.d(r, { p: () => B });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					j = { globals: { siteId: '8uyt2m' } };
				class B {
					static recommendation(a) {
						const u = a.id;
						if (h[u]) return h[u];
						const m = (h[u] = A({ client: j, controller: a }));
						return (
							m.on('afterStore', async ({ controller: g }, y) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await y();
							}),
							m.init(),
							m
						);
					}
					static autocomplete(a) {
						const u = a.id;
						if (h[u]) return h[u];
						const m = (h[u] = I({ client: j, controller: a }));
						return (
							m.on('afterStore', async ({ controller: g }, y) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await y();
							}),
							m.init(),
							m
						);
					}
					static search(a) {
						const u = a.id;
						if (h[u]) return h[u];
						const m = (h[u] = C({ client: j, controller: a }));
						return (
							m.on('afterStore', async ({ controller: g }, y) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await y();
							}),
							m.init(),
							m
						);
					}
				}
				function C(o) {
					const a = new M.V(new O.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), E.X);
					return new c.Tp(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new s.U(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new _.E(),
						profiler: new v.U(),
						logger: new f.V(),
						tracker: new b.J(o.client.globals),
					});
				}
				function A(o) {
					const a = new M.V(new O.E(), E.X).detach(!0);
					return new d.c(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new T.t(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new _.E(),
						profiler: new v.U(),
						logger: new f.V(),
						tracker: new b.J(o.client.globals),
					});
				}
				function I(o) {
					const a = new M.V(new O.E(), E.X).detach();
					return new p.Z(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new t.Y(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new _.E(),
						profiler: new v.U(),
						logger: new f.V(),
						tracker: new b.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, r, e) {
				'use strict';
				e.d(r, { Z: () => d });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'prism-block',
					d = (i) => {
						const t = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(p) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, n.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
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

//# sourceMappingURL=components-Molecules-Pagination-Pagination-stories.796e3403.iframe.bundle.js.map
