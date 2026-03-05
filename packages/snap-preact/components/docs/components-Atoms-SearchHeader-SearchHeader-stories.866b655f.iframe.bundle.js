(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2134],
		{
			'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx'(P, i, e) {
				'use strict';
				e.r(i),
					e.d(i, {
						CorrectedResults: () => x,
						Default: () => c,
						DidYouMeanResults: () => a,
						NoResults: () => y,
						__namedExportsOrder: () => D,
						default: () => C,
					});
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/utilities/storybook.tsx'),
					f = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const t =
					'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `query` prop specifies a reference to the SearchQueryStore, the `pagination` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```jsx\n<SearchHeader query={SearchQueryStore} pagination={SearchPaginationStore} merchandising={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\nconst getCorrected = (controller) => {\n	const { pagination, search } = controller.store;\n	return `<div class="ss__search-header__corrected">No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\nconst getDym = (controller) => {\n	const { search } = controller.store;\n	return `<div class="ss__search-header__dym">Sorry, but did you mean "<em><a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a></em>"</div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n### expandedSearchText\nThe `expandedSearchText` prop specifies the text to show when the search matchType equals \'expanded\'.\n```jsx\n<SearchHeader controller={controller} expandedSearchText={"We couldn\'t find an exact match for that, but heres something similar:"} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop hides the title text.\n\n```jsx\n<SearchHeader controller={controller} hideTitleText={true} />\n```\n\n### hideSubtitleText\nThe `hideSubtitleText` prop hides the subtitle text.\n\n```jsx\n<SearchHeader controller={controller} hideSubtitleText={true} />\n```\n\n### hideCorrectedQueryText\nThe `hideCorrectedQueryText` prop hides the corrected query text.\n\n```jsx\n<SearchHeader controller={controller} hideCorrectedQueryText={true} />\n```\n\n### hideNoResultsText\nThe `hideNoResultsText` prop hides the no results text.\n\n```jsx\n<SearchHeader controller={controller} hideNoResultsText={true} />\n```\n\n### hideDidYouMeanText\nThe `hideDidYouMeanText` prop hides did you mean text.\n\n```jsx\n<SearchHeader controller={controller} hideDidYouMeanText={true} />\n```\n\n### hideExpandedSearchText\nThe `hideExpandedSearchText` prop hides the expanded search text.\n\n```jsx\n<SearchHeader controller={controller} hideExpandedSearchText={true} />\n```';
				var s = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
				const C = {
						title: 'Atoms/SearchHeader',
						component: s.w,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(p.oz, { options: { overrides: { code: _.Z } }, children: t }), (0, r.Y)(p.uY, { story: p.h1 })],
									}),
								actions: { disabled: !0 },
							},
						},
						decorators: [(u) => (0, r.Y)('div', { style: { maxWidth: '900px' }, children: (0, r.Y)(u, {}) })],
						argTypes: {
							controller: {
								description: 'Search Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							query: {
								description: 'Search Query Store reference',
								type: { required: !1 },
								table: { type: { summary: 'Search Query Store object' } },
								control: { type: 'none' },
							},
							pagination: {
								description: 'Search Pagination Store reference',
								type: { required: !1 },
								table: { type: { summary: 'Search Pagination Store object' } },
								control: { type: 'none' },
							},
							merchandising: {
								description: 'Search Merchandising Store reference',
								type: { required: !1 },
								table: { type: { summary: 'Search Merchandising Store object' } },
								control: { type: 'none' },
							},
							titleText: {
								description: 'Search Title Text',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'Search results' } },
								control: { type: 'text' },
							},
							subtitleText: {
								description: 'Search Subtitle Text',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							correctedQueryText: {
								description: 'Original query redirect text',
								table: {
									type: { summary: 'string' },
									category: 'Templates Legal',
									defaultValue: {
										summary:
											'No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.',
									},
								},
								control: { type: 'text' },
							},
							noResultsText: {
								description: 'no results found text',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '<span>No results found.</span>' } },
								control: { type: 'text' },
							},
							didYouMeanText: {
								description: '"Did you mean" text',
								table: {
									type: { summary: 'string' },
									category: 'Templates Legal',
									defaultValue: { summary: 'Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?' },
								},
								control: { type: 'text' },
							},
							expandedSearchText: {
								description: 'Expanded search text',
								table: {
									type: { summary: 'string' },
									category: 'Templates Legal',
									defaultValue: {
										summary: `We couldn't find an exact match for "<span className="ss__search-header__results-query">\${search?.query?.string}</span>", but here's something similar:`,
									},
								},
								control: { type: 'text' },
							},
							hideTitleText: {
								description: 'Hide title title',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSubtitleText: {
								description: 'Hide subtitle',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCorrectedQueryText: {
								description: 'Hide CorrectedQuery Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideExpandedSearchText: {
								description: 'Hide Expanded Search Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideNoResultsText: {
								description: 'Hide No Results Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideDidYouMeanText: {
								description: 'Hide Did You Mean Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...f.F,
						},
					},
					S = o.p.search({ id: 'SearchHeader', globals: { siteId: 'atkzs2', search: { query: { string: 'dress' } } } }),
					c = (u, { loaded: { controller: T } }) => (0, r.Y)(s.w, { ...u, controller: T });
				c.loaders = [async () => (await S.search(), { controller: S })];
				const E = o.p.search({ id: 'SearchHeader-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } } }),
					y = (u, { loaded: { controller: T } }) => (0, r.Y)(s.w, { ...u, controller: T });
				y.loaders = [async () => (await E.search(), { controller: E })];
				const M = o.p.search({ id: 'SearchHeader-correctedResults', globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } } }),
					x = (u, { loaded: { controller: T } }) => (0, r.Y)(s.w, { ...u, controller: T });
				x.loaders = [async () => (await M.search(), { controller: M })];
				const b = o.p.search({ id: 'SearchHeader-dymResults', globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } } }),
					a = (u, { loaded: { controller: T } }) => (0, r.Y)(s.w, { ...u, controller: T });
				(a.loaders = [
					async () => (
						b.on('afterSearch', ({ response: u }) => {
							(u.search.search.query = 'redd dress'), (u.search.search.didYouMean = 'red dress');
						}),
						await b.search(),
						{ controller: b }
					),
				]),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...c.parameters?.docs?.source,
							},
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...y.parameters?.docs?.source,
							},
						},
					}),
					(x.parameters = {
						...x.parameters,
						docs: {
							...x.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...x.parameters?.docs?.source,
							},
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...a.parameters?.docs?.source,
							},
						},
					});
				const D = ['Default', 'NoResults', 'CorrectedResults', 'DidYouMeanResults'];
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(P, i, e) {
				'use strict';
				e.d(i, { w: () => b });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					S = e('../../node_modules/classnames/index.js'),
					c = e.n(S),
					E = e('./components/src/hooks/useLang.tsx'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(y);
				const x = () => (0, p.AH)({}),
					b = (0, _.PA)((a) => {
						const D = (0, o.u)(),
							u = (0, t.LU)(),
							T = a.controller?.store.merchandising.landingPage || a.merchandising?.landingPage,
							O = a.controller?.store.pagination || a.pagination,
							d = a.controller?.store.search || a.query,
							n = {
								titleText: `Search result${O?.totalResults == 1 ? '' : 's'} ${
									d?.query ? `for "<span class="ss__search-header__results-query">${d.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${d?.originalQuery?.string}</em>", showing results for "<em>${d?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${d?.didYouMean?.url.href}>${d?.didYouMean?.string}</a>?`,
								noResultsText: `${
									d?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${d.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${d?.query?.string}</span>", but here's something similar:`,
								treePath: u,
							},
							l = (0, s.v6)('searchHeader', D, n, a),
							{
								className: m,
								internalClassName: g,
								titleText: h,
								subtitleText: v,
								correctedQueryText: A,
								noResultsText: H,
								didYouMeanText: Y,
								expandedSearchText: I,
								hideTitleText: U,
								hideSubtitleText: N,
								hideCorrectedQueryText: w,
								hideNoResultsText: K,
								hideExpandedSearchText: j,
								hideDidYouMeanText: W,
							} = l,
							B = (0, C.Z)(l, x),
							Q = {
								titleText: { value: h },
								subtitleText: { value: v },
								correctedQueryText: { value: A },
								noResultsText: { value: H },
								didYouMeanText: { value: Y },
								expandedSearchText: { value: I },
							},
							L = M()(Q, l.lang || {}),
							R = (0, E.u)(L, { pagination: O, search: d });
						return (0, r.Y)(f._, {
							children: (0, r.Y)('header', {
								...B,
								className: c()('ss__search-header', m, g),
								children: T
									? (0, r.Y)('h3', { className: c()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: T.title })
									: (0, r.FD)(r.FK, {
											children: [
												O?.totalResults
													? (0, r.FD)(r.FK, {
															children: [
																!j && d?.matchType && d.matchType == 'expanded'
																	? (0, r.Y)('h3', {
																			className: c()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...R.expandedSearchText?.all,
																	  })
																	: (0, r.Y)(r.FK, {}),
																!U &&
																	(d?.matchType !== 'expanded' || j) &&
																	(0, r.Y)('h3', {
																		className: c()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.titleText?.all,
																	}),
																d?.originalQuery &&
																	!w &&
																	(0, r.Y)('h5', {
																		className: c()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.correctedQueryText?.all,
																	}),
															],
													  })
													: O?.totalResults === 0 &&
													  (0, r.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!K &&
																	(0, r.Y)('h3', {
																		className: c()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.noResultsText?.all,
																	}),
																d?.didYouMean &&
																	!W &&
																	(0, r.Y)('h5', {
																		className: c()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.didYouMeanText?.all,
																	}),
															],
													  }),
												(v || L.subtitleText.value) &&
													!N &&
													(0, r.Y)('h5', {
														className: c()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...R.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
			},
			'./components/src/hooks/useLang.tsx'(P, i, e) {
				'use strict';
				e.d(i, { u: () => r });
				const r = (p, _) => {
					const f = {};
					return (
						Object.keys(p).forEach((o) => {
							const t = p && p[o],
								s = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (s.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(_) } })
										: (s.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((s.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = t.attributes['aria-label'](_))
											: (s.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](_))
											: (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (s.attributes.title = t.attributes.title(_))
											: (s.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (s.attributes.alt = t.attributes.alt(_)) : (s.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = t.attributes.placeholder(_))
											: (s.attributes.placeholder = t.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': o })),
								(f[o] = s);
						}),
						f
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(P, i, e) {
				'use strict';
				e.d(i, { F: () => r });
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
			'./components/src/utilities/snapify.ts'(P, i, e) {
				'use strict';
				e.d(i, { p: () => u });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const a = {},
					D = { globals: { siteId: 'atkzs2' } };
				class u {
					static recommendation(l) {
						const m = l.id;
						if (a[m]) return a[m];
						const g = (a[m] = O({ client: D, controller: l }));
						return (
							g.on('afterStore', async ({ controller: h }, v) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await v();
							}),
							g.init(),
							g
						);
					}
					static autocomplete(l) {
						const m = l.id;
						if (a[m]) return a[m];
						const g = (a[m] = d({ client: D, controller: l }));
						return (
							g.on('afterStore', async ({ controller: h }, v) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await v();
							}),
							g.init(),
							g
						);
					}
					static search(l) {
						const m = l.id;
						if (a[m]) return a[m];
						const g = (a[m] = T({ client: D, controller: l }));
						return (
							g.on('afterStore', async ({ controller: h }, v) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await v();
							}),
							g.init(),
							g
						);
					}
				}
				function T(n) {
					const l = new S.V(new E.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), c.X);
					return new p.Tp(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new s.U(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new b.J(n.client.globals),
					});
				}
				function O(n) {
					const l = new S.V(new E.E(), c.X).detach(!0);
					return new f.c(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new C.t(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new b.J(n.client.globals),
					});
				}
				function d(n) {
					const l = new S.V(new E.E(), c.X).detach();
					return new _.Z(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new t.Y(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new b.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, i, e) {
				'use strict';
				e.d(i, { Z: () => f });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					f = (o) => {
						const t = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(_) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, r.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function i(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (P.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-SearchHeader-SearchHeader-stories.866b655f.iframe.bundle.js.map
