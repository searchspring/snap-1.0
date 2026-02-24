(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[2134],
		{
			'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx'(v, l, e) {
				'use strict';
				e.r(l),
					e.d(l, {
						CorrectedResults: () => T,
						Default: () => x,
						DidYouMeanResults: () => i,
						NoResults: () => y,
						__namedExportsOrder: () => _,
						default: () => R,
					});
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/utilities/storybook.tsx'),
					b = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const t =
					'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `query` prop specifies a reference to the SearchQueryStore, the `pagination` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```jsx\n<SearchHeader query={SearchQueryStore} pagination={SearchPaginationStore} merchandising={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\nconst getCorrected = (controller) => {\n	const { pagination, search } = controller.store;\n	return `<div class="ss__search-header__corrected">No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\nconst getDym = (controller) => {\n	const { search } = controller.store;\n	return `<div class="ss__search-header__dym">Sorry, but did you mean "<em><a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a></em>"</div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n### expandedSearchText\nThe `expandedSearchText` prop specifies the text to show when the search matchType equals \'expanded\'.\n```jsx\n<SearchHeader controller={controller} expandedSearchText={"We couldn\'t find an exact match for that, but heres something similar:"} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop hides the title text.\n\n```jsx\n<SearchHeader controller={controller} hideTitleText={true} />\n```\n\n### hideSubtitleText\nThe `hideSubtitleText` prop hides the subtitle text.\n\n```jsx\n<SearchHeader controller={controller} hideSubtitleText={true} />\n```\n\n### hideCorrectedQueryText\nThe `hideCorrectedQueryText` prop hides the corrected query text.\n\n```jsx\n<SearchHeader controller={controller} hideCorrectedQueryText={true} />\n```\n\n### hideNoResultsText\nThe `hideNoResultsText` prop hides the no results text.\n\n```jsx\n<SearchHeader controller={controller} hideNoResultsText={true} />\n```\n\n### hideDidYouMeanText\nThe `hideDidYouMeanText` prop hides did you mean text.\n\n```jsx\n<SearchHeader controller={controller} hideDidYouMeanText={true} />\n```\n\n### hideExpandedSearchText\nThe `hideExpandedSearchText` prop hides the expanded search text.\n\n```jsx\n<SearchHeader controller={controller} hideExpandedSearchText={true} />\n```';
				var n = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
				const R = {
						title: 'Atoms/SearchHeader',
						component: n.w,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(m.oz, { options: { overrides: { code: p.Z } }, children: t }), (0, r.Y)(m.uY, { story: m.h1 })],
									}),
								actions: { disabled: !0 },
							},
						},
						decorators: [(d) => (0, r.Y)('div', { style: { maxWidth: '900px' }, children: (0, r.Y)(d, {}) })],
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
								table: {
									type: { summary: 'string' },
									defaultValue: {
										summary:
											'Showing <span class="ss-results-count-range">1-30 of</span> <span class="ss-results-count-total">8,474</span> results <span>for "<span class="ss-results-query">*</span>"</span>',
									},
								},
								control: { type: 'text' },
							},
							subtitleText: { description: 'Search Subtitle Text', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							correctedQueryText: {
								description: 'Original query redirect text',
								table: {
									type: { summary: 'string' },
									defaultValue: {
										summary: '<div class="ss-oq">No results found for "<em>*</em>", showing results for "<em>hat</em>" instead.</div>',
									},
								},
								control: { type: 'text' },
							},
							noResultsText: {
								description: 'no results found text',
								table: { type: { summary: 'string' }, defaultValue: { summary: '<span>No results found.</span>' } },
								control: { type: 'text' },
							},
							didYouMeanText: {
								description: '"Did you mean" text',
								table: {
									type: { summary: 'string' },
									defaultValue: { summary: 'Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?' },
								},
								control: { type: 'text' },
							},
							expandedSearchText: {
								description: 'Expanded search text',
								table: {
									type: { summary: 'string' },
									defaultValue: {
										summary: `We couldn't find an exact match for "<span className="ss__search-header__results-query">\${search?.query?.string}</span>", but here's something similar:`,
									},
								},
								control: { type: 'text' },
							},
							hideTitleText: {
								description: 'Hide title title',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSubtitleText: {
								description: 'Hide subtitle',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCorrectedQueryText: {
								description: 'Hide CorrectedQuery Text',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideExpandedSearchText: {
								description: 'Hide Expanded Search Text',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideNoResultsText: {
								description: 'Hide No Results Text',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideDidYouMeanText: {
								description: 'Hide Did You Mean Text',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...b.F,
						},
					},
					E = a.p.search({ id: 'SearchHeader', globals: { siteId: 'atkzs2', search: { query: { string: 'dress' } } } }),
					x = (d, { loaded: { controller: f } }) => (0, r.Y)(n.w, { ...d, controller: f });
				x.loaders = [async () => (await E.search(), { controller: E })];
				const h = a.p.search({ id: 'SearchHeader-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } } }),
					y = (d, { loaded: { controller: f } }) => (0, r.Y)(n.w, { ...d, controller: f });
				y.loaders = [async () => (await h.search(), { controller: h })];
				const M = a.p.search({ id: 'SearchHeader-correctedResults', globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } } }),
					T = (d, { loaded: { controller: f } }) => (0, r.Y)(n.w, { ...d, controller: f });
				T.loaders = [async () => (await M.search(), { controller: M })];
				const S = a.p.search({ id: 'SearchHeader-dymResults', globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } } }),
					i = (d, { loaded: { controller: f } }) => (0, r.Y)(n.w, { ...d, controller: f });
				(i.loaders = [
					async () => (
						S.on('afterSearch', ({ response: d }) => {
							(d.search.search.query = 'redd dress'), (d.search.search.didYouMean = 'red dress');
						}),
						await S.search(),
						{ controller: S }
					),
				]),
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
					(T.parameters = {
						...T.parameters,
						docs: {
							...T.parameters?.docs,
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
								...T.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
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
								...i.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default', 'NoResults', 'CorrectedResults', 'DidYouMeanResults'];
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(v, l, e) {
				'use strict';
				e.d(l, { w: () => i });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					t = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					x = e('../../node_modules/classnames/index.js'),
					h = e.n(x),
					y = e('./components/src/hooks/useLang.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(M);
				const S = () => (0, p.AH)({}),
					i = (0, b.PA)((_) => {
						const d = (0, t.u)(),
							f = (0, n.LU)(),
							C = _.controller?.store.merchandising.landingPage || _.merchandising?.landingPage,
							P = _.controller?.store.pagination || _.pagination,
							s = _.controller?.store.search || _.query,
							o = {
								titleText: `Search result${P?.totalResults == 1 ? '' : 's'} ${
									s?.query ? `for "<span class="ss__search-header__results-query">${s.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${s?.originalQuery?.string}</em>", showing results for "<em>${s?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${s?.didYouMean?.url.href}>${s?.didYouMean?.string}</a>?`,
								noResultsText: `${
									s?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${s.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${s?.query?.string}</span>", but here's something similar:`,
								treePath: f,
							},
							c = (0, R.v6)('searchHeader', d, o, _),
							{
								className: g,
								internalClassName: u,
								titleText: D,
								subtitleText: j,
								correctedQueryText: Y,
								noResultsText: I,
								didYouMeanText: U,
								expandedSearchText: L,
								hideTitleText: N,
								hideSubtitleText: K,
								hideCorrectedQueryText: w,
								hideNoResultsText: W,
								hideExpandedSearchText: A,
								hideDidYouMeanText: B,
							} = c,
							Q = (0, E.Z)(c, S),
							V = {
								titleText: { value: D },
								subtitleText: { value: j },
								correctedQueryText: { value: Y },
								noResultsText: { value: I },
								didYouMeanText: { value: U },
								expandedSearchText: { value: L },
							},
							H = T()(V, c.lang || {}),
							O = (0, y.u)(H, { pagination: P, search: s });
						return (0, r.Y)(a._, {
							children: (0, r.Y)('header', {
								...Q,
								className: h()('ss__search-header', g, u),
								children: C
									? (0, r.Y)('h3', { className: h()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: C.title })
									: (0, r.FD)(m.FK, {
											children: [
												P?.totalResults
													? (0, r.FD)(r.FK, {
															children: [
																!A && s?.matchType && s.matchType == 'expanded'
																	? (0, r.Y)('h3', {
																			className: h()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...O.expandedSearchText?.all,
																	  })
																	: (0, r.Y)(r.FK, {}),
																!N &&
																	(s?.matchType !== 'expanded' || A) &&
																	(0, r.Y)('h3', {
																		className: h()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.titleText?.all,
																	}),
																s?.originalQuery &&
																	!w &&
																	(0, r.Y)('h5', {
																		className: h()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.correctedQueryText?.all,
																	}),
															],
													  })
													: P?.totalResults === 0 &&
													  (0, r.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!W &&
																	(0, r.Y)('h3', {
																		className: h()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.noResultsText?.all,
																	}),
																s?.didYouMean &&
																	!B &&
																	(0, r.Y)('h5', {
																		className: h()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.didYouMeanText?.all,
																	}),
															],
													  }),
												(j || H.subtitleText.value) &&
													!K &&
													(0, r.Y)('h5', {
														className: h()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...O.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
			},
			'./components/src/hooks/useLang.tsx'(v, l, e) {
				'use strict';
				e.d(l, { u: () => r });
				const r = (m, p) => {
					const b = {};
					return (
						Object.keys(m).forEach((a) => {
							const t = m && m[a],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value(p) } })
										: (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': a }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](p))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](p))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(p))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(p)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(p))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': a })),
								(b[a] = n);
						}),
						b
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(v, l, e) {
				'use strict';
				e.d(l, { F: () => r });
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
			'./components/src/utilities/snapify.ts'(v, l, e) {
				'use strict';
				e.d(l, { p: () => d });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					R = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					x = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					S = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					_ = { globals: { siteId: '8uyt2m' } };
				class d {
					static recommendation(o) {
						const c = o.id;
						if (i[c]) return i[c];
						const g = (i[c] = C({ client: _, controller: o }));
						return (
							g.on('afterStore', async ({ controller: u }, D) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await D();
							}),
							g.init(),
							g
						);
					}
					static autocomplete(o) {
						const c = o.id;
						if (i[c]) return i[c];
						const g = (i[c] = P({ client: _, controller: o }));
						return (
							g.on('afterStore', async ({ controller: u }, D) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await D();
							}),
							g.init(),
							g
						);
					}
					static search(o) {
						const c = o.id;
						if (i[c]) return i[c];
						const g = (i[c] = f({ client: _, controller: o }));
						return (
							g.on('afterStore', async ({ controller: u }, D) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await D();
							}),
							g.init(),
							g
						);
					}
				}
				function f(s) {
					const o = new E.V(new h.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), x.X);
					return new m.Tp(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new n.U(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new S.J(s.client.globals),
					});
				}
				function C(s) {
					const o = new E.V(new h.E(), x.X).detach(!0);
					return new b.c(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new R.t(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new S.J(s.client.globals),
					});
				}
				function P(s) {
					const o = new E.V(new h.E(), x.X).detach();
					return new p.Z(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new T.V(),
						tracker: new S.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, l, e) {
				'use strict';
				e.d(l, { Z: () => b });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'prism-block',
					b = (a) => {
						const t = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								t.current && a.className?.includes('lang-') && !a.className?.includes(p) && window?.Prism?.highlightElement(t.current);
							}, [a.className, a.children, t]),
							(0, r.Y)('code', { ...a, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function l(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (v.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-SearchHeader-SearchHeader-stories.109ba51b.iframe.bundle.js.map
