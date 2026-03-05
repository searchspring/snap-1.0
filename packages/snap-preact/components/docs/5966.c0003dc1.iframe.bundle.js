'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(k, L, s) {
				s.d(L, { _: () => Y });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = s('../../node_modules/classnames/index.js'),
					h = s.n(D),
					M = s('./components/src/providers/cache.tsx'),
					g = s('./components/src/providers/controller.tsx'),
					T = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = s('./components/src/providers/withTracking.tsx'),
					u = s('./components/src/providers/treePath.tsx'),
					N = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					S = s('./components/src/hooks/useA11y.tsx'),
					b = s('./components/src/types.ts'),
					$ = s('../../node_modules/mobx-react-lite/es/index.js');
				const f = ({ width: A }) =>
						(0, P.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: A,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					Y = (0, g.Bk)(
						(0, p.W)(
							(0, $.PA)((A) => {
								const I = (0, T.u)(),
									U = (0, u.LU)(),
									F = { layout: b.V.grid, width: 'auto', treePath: U },
									W = (0, N.v6)('inlineBanner', I, F, A),
									{ banner: _, className: C, internalClassName: v, disableA11y: x, layout: l, onClick: o } = W,
									n = (0, K.Z)(W, f);
								return _ && _.value
									? (0, t.Y)(M._, {
											children: (0, t.Y)('div', {
												onClick: (i) => {
													o && o(i, _);
												},
												role: 'article',
												ref: (i) => {
													x || (0, S.iy)(i), (A.trackingRef.current = i);
												},
												className: h()('ss__inline-banner', `ss__inline-banner--${l}`, C, v),
												...n,
												dangerouslySetInnerHTML: { __html: _.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(k, L, s) {
				s.d(L, { a: () => U });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = s('../../node_modules/mobx-react-lite/es/index.js'),
					D = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = s('../../node_modules/classnames/index.js'),
					M = s.n(h),
					g = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = s('./components/src/providers/snap.tsx'),
					p = s('./components/src/providers/treePath.tsx'),
					u = s('./components/src/utilities/cloneWithProps.tsx'),
					N = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					S = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					b = s('./components/src/hooks/useComponent.tsx'),
					$ = s('./components/src/hooks/useCreateController.tsx'),
					f = s('../../node_modules/deepmerge/dist/cjs.js'),
					Y = s.n(f),
					A = s('./components/src/hooks/useLang.tsx');
				const I = ({}) => (0, D.AH)({}),
					U = (0, P.PA)((F) => {
						const W = (0, g.u)(),
							_ = (0, p.LU)(),
							C = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: _,
							},
							v = (0, N.v6)('noResults', W, C, F),
							{
								contentSlot: x,
								suggestionsTitleText: l,
								hideSuggestionsTitleText: o,
								hideContactsTitleText: n,
								suggestionsList: i,
								hideContact: O,
								contactsTitleText: e,
								hideSuggestions: c,
								contactsList: a,
								controller: d,
								templates: r,
								className: j,
								internalClassName: y,
								treePath: H,
							} = v,
							J = (0, K.Z)(v, I),
							G = i && Array.isArray(i) && i.length !== 0,
							V = a && Array.isArray(a) && a.length !== 0;
						let w, m, R;
						if (r?.recommendation?.enabled) {
							const E = r?.recommendation?.component || 'Recommendation',
								Q = (0, T.uk)();
							if (Q?.templates) {
								const ns = F.theme?.name;
								let os;
								ns && (os = Q?.templates?.config.theme?.resultComponent);
								const es = r?.recommendation?.resultComponent || os,
									q = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, r.recommendation.config);
								(q.id = q.id || `search-${q.tag}`),
									(R = (0, $.i)(Q, 'recommendation', q)),
									!R?.store?.loaded && !R?.store?.loading && R?.store.error?.type !== 'error' && R?.search(),
									es && Q?.templates?.library.import.component.result && (m = (0, b.x)(Q?.templates?.library.import.component.result, es)),
									E &&
										Q?.templates?.library.import.component.recommendation.default &&
										(w = (0, b.x)(Q?.templates?.library.import.component.recommendation.default, E));
							}
						}
						const Z = w,
							ts = m,
							B = {
								suggestionsTitleText: { value: l },
								suggestionsList: {
									value: `${i ? i.map((E) => `<li class="ss__no-results__suggestions__list__option">${E}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: e },
								contactsList: {
									value: `${
										a
											? a
													.map(
														(E) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${S.p(
																E.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																E.title
															}</h4><p class="ss__no-results__contact__detail__content">${E.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							z = Y()(B, v.lang || {}),
							X = (0, A.u)(z, { controller: d });
						return (0, t.FD)('div', {
							className: M()('ss__no-results', j, y),
							...J,
							children: [
								x &&
									(typeof x == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: x } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, u.Y)(x, { controller: d, treePath: H }) })),
								!c &&
									(l || G) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											l && !o && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...X.suggestionsTitleText?.all }),
											G && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...X.suggestionsList?.all }),
										],
									}),
								!O &&
									(e || V) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											e && !n && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...X.contactsTitleText?.all }),
											V && (0, t.Y)('div', { ...X.contactsList?.all }),
										],
									}),
								Z && R?.store?.loaded
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(Z, {
												controller: R,
												title: R.store?.profile?.display?.templateParameters?.title,
												resultComponent: ts,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(k, L, s) {
				s.d(L, { n: () => x });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = s('../../node_modules/mobx-react-lite/es/index.js'),
					h = s('../../node_modules/classnames/index.js'),
					M = s.n(h),
					g = s('../../node_modules/deepmerge/dist/cjs.js'),
					T = s.n(g),
					p = s('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					u = s('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					N = s('./components/src/components/Molecules/Result/Result.tsx'),
					K = s('./components/src/types.ts'),
					S = s('./components/src/utilities/defined.ts'),
					b = s('./components/src/utilities/mergeProps.ts'),
					$ = s('./components/src/utilities/mergeStyles.ts'),
					f = s('./components/src/providers/cache.tsx'),
					Y = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = s('./components/src/providers/withTracking.tsx'),
					I = s('./components/src/providers/snap.tsx'),
					U = s('./components/src/providers/treePath.tsx'),
					F = s('./components/src/hooks/useDisplaySettings.tsx'),
					W = s('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					_ = s('./components/src/hooks/useComponent.tsx');
				const C = ({ gapSize: l, columns: o }) =>
						(0, P.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: l,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${o}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / o}% - (${o - 1} * ${l} / ${o} ) )`,
								marginRight: l,
								marginBottom: l,
								[`&:nth-of-type(${o}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${o})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					v = (0, A.W)(N.Q),
					x = (0, D.PA)((l) => {
						const o = (0, Y.u)(),
							n = (0, U.LU)(),
							i = {
								0: { columns: l.columns || 1 },
								540: { columns: l.columns || 2 },
								768: { columns: l.columns || 3 },
								991: { columns: l.columns || 4 },
							},
							O = { results: l.controller?.store?.results, columns: 4, gapSize: '20px', layout: K.V.grid, breakpoints: i, treePath: n };
						let e = (0, b.v6)('results', o, O, l);
						if (!l.theme?.name) {
							const m = (0, F.X)(e?.breakpoints || {}),
								R = T()(e?.theme || {}, m?.theme || {}, { arrayMerge: (Z, ts) => ts });
							e = { ...e, ...m, theme: R };
						}
						const { disableStyles: c, className: a, internalClassName: d, layout: r, theme: j, controller: y, treePath: H } = e;
						let { resultComponent: J } = e;
						const G = {
							result: { internalClassName: 'ss__results__result', ...(0, S.s)({ disableStyles: c }), theme: e?.theme, treePath: H },
							inlineBanner: {
								controller: y,
								internalClassName: 'ss__results__inline-banner',
								...(0, S.s)({ disableStyles: c }),
								theme: e?.theme,
								treePath: H,
							},
						};
						let V = e.results;
						e?.columns && e?.rows && e.columns > 0 && e.rows > 0 && (V = e.results?.slice(0, e.columns * e.rows));
						const w = (0, $.Z)({ ...e, columns: r == K.V.list ? 1 : e.columns }, C);
						if (typeof J == 'string') {
							const m = (0, I.uk)();
							if (m?.templates?.library.import.component.result && ((J = (0, _.x)(m?.templates?.library.import.component.result, J)), !J))
								return null;
						}
						return V?.length
							? (0, t.Y)(f._, {
									children: (0, t.Y)('div', {
										...w,
										className: M()('ss__results', `ss__results-${e.layout}`, a, d),
										children: V.map((m) =>
											(() => {
												switch (m.type) {
													case p.c.BANNER:
														return (0, P.n)(u._, { ...G.inlineBanner, key: m.id, banner: m, layout: e.layout });
													default:
														if (J && y) {
															const R = J;
															return (0, t.Y)(W.o, {
																result: m,
																controller: y,
																children: (0, t.Y)(R, { controller: y, result: m, theme: j, treePath: H }, m.id),
															});
														} else return (0, t.Y)(v, { ...G.result, result: m, layout: e.layout, controller: y }, m.id);
												}
											})()
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(k, L, s) {
				s.d(L, { B: () => A });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = s('../../node_modules/classnames/index.js'),
					h = s.n(D),
					M = s('../../node_modules/mobx-react-lite/es/index.js'),
					g = s('./components/src/providers/cache.tsx'),
					T = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = s('./components/src/providers/treePath.tsx'),
					u = s('./components/src/utilities/defined.ts'),
					N = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					S = s('./components/src/components/Organisms/Layout/Layout.tsx'),
					b = s('../../node_modules/deepmerge/dist/cjs.js'),
					$ = s.n(b),
					f = s('./components/src/hooks/useLang.tsx');
				const Y = ({ stickyOffset: I }) =>
						(0, P.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: I || 0 }, '& .ss__facets': { width: '100%' } }),
					A = (0, M.PA)((I) => {
						const U = (0, T.u)(),
							W = { titleText: 'Filters', treePath: (0, p.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							_ = (0, N.v6)('sidebar', U, W, I),
							{
								controller: C,
								layout: v,
								hideTitleText: x,
								titleText: l,
								sticky: o,
								disableStyles: n,
								className: i,
								internalClassName: O,
								treePath: e,
							} = _,
							c = (0, K.Z)(_, Y),
							a = { titleText: { value: l } },
							d = $()(a, _.lang || {}),
							r = (0, f.u)(d, { controller: C }),
							j = { Layout: { ...(0, u.s)({ disableStyles: n }), theme: _.theme, treePath: e } },
							y = v?.length;
						return C?.store?.loaded && C?.store?.pagination?.totalResults > 0 && y
							? (0, t.Y)(g._, {
									children: (0, t.FD)('div', {
										...c,
										className: h()('ss__sidebar', i, O, { 'ss__sidebar--sticky': o }),
										children: [
											x
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: h()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...r.titleText.all,
														children: l,
												  }),
											(0, t.Y)('div', { className: h()('ss__sidebar__inner'), children: (0, t.Y)(S.P, { controller: C, layout: v, ...j.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(k, L, s) {
				s.d(L, { M: () => $ });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = s('../../node_modules/classnames/index.js'),
					h = s.n(D),
					M = s('../../node_modules/mobx-react-lite/es/index.js'),
					g = s('./components/src/providers/cache.tsx'),
					T = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = s('./components/src/providers/treePath.tsx'),
					u = s('./components/src/utilities/defined.ts'),
					N = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					S = s('./components/src/components/Organisms/Layout/Layout.tsx');
				const b = ({}) => (0, P.AH)({}),
					$ = (0, M.PA)((f) => {
						const Y = (0, T.u)(),
							I = { treePath: (0, p.LU)(), layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							U = (0, N.v6)('toolbar', Y, I, f),
							{ controller: F, toggleSideBarButton: W, disableStyles: _, className: C, internalClassName: v, treePath: x, layout: l } = U,
							o = (0, K.Z)(U, b),
							n = {
								Layout: {
									toggleSideBarButton: W,
									internalClassName: 'ss__toolbar__layout',
									...(0, u.s)({ disableStyles: _ }),
									theme: U?.theme,
									treePath: x,
								},
							};
						return l?.length
							? (0, t.Y)(g._, {
									children: (0, t.Y)('div', {
										...o,
										className: h()('ss__toolbar', C, v),
										children: (0, t.Y)(S.P, { controller: F, layout: l, ...n.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Templates/Search/Search.tsx'(k, L, s) {
				s.d(L, { v: () => l });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					D = s('../../node_modules/mobx-react-lite/es/index.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = s('../../node_modules/classnames/index.js'),
					g = s.n(M),
					T = s('./components/src/components/Organisms/Results/Results.tsx'),
					p = s('./components/src/utilities/mergeProps.ts'),
					u = s('./components/src/utilities/defined.ts'),
					N = s('./components/src/utilities/mergeStyles.ts'),
					K = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = s('./components/src/providers/treePath.tsx'),
					b = s('./components/src/providers/cache.tsx'),
					$ = s('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					f = s('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					Y = s('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					A = s('./components/src/hooks/useMediaQuery.tsx'),
					I = s('./components/src/hooks/useLang.tsx'),
					U = s('./components/src/hooks/useA11y.tsx'),
					F = s('../../node_modules/deepmerge/dist/cjs.js'),
					W = s.n(F);
				const _ = (o, n, i) => {
						const O = o.storage,
							c = O.get(n) || i || void 0,
							[a, d] = (0, P.J0)(c);
						return [
							a,
							(j) => {
								O.set(n, j), d(j);
							},
						];
					},
					C = (o, n) => {
						const i = o?.layoutOptions || [],
							[O, e] = _(o.controller, 'layoutOptions', i.filter((a) => a.default).pop());
						try {
							if (!i.some((a) => JSON.stringify(a) == JSON.stringify(O))) {
								const a = i.filter((d) => d.default).pop();
								e(a);
							}
						} catch {
							o.controller.log('invalid layoutOptions provided to component', o.inherits ? ` '${o.inherits}'` : '');
						}
						(o.theme = o.theme || {}),
							(o.theme.components = {
								...(o.theme.components || {}),
								layoutSelector: {
									options: i,
									onSelect: (a, d) => {
										d && e(d);
									},
									selected: O,
								},
							});
						let c = !1;
						if (n.components && o.treePath) {
							const a = o.treePath.split(' ')[0];
							Object.keys(n.components).forEach((d) => {
								const r = d.split(' '),
									j = r.splice(-1).pop() ?? '',
									[y] = j.split('.');
								if (
									n.components &&
									y == 'toolbar' &&
									(r[0] == a || r[0] == `*${a}` || r[0] == `*(M)${a}` || r[0] == `*(T)${a}` || r[0] == `*(D)${a}` || !r.length)
								) {
									const H = n.components[d];
									H?.layout && H.layout.toString().indexOf('layoutSelector') > -1 && (c = !0);
								}
							});
						}
						O?.overrides && c && (o.theme = W()(o.theme, { components: O.overrides.components }));
					};
				var v = s('./components/src/utilities/componentNameToClassName.ts');
				const x = (o) => {
						let n = 'ss__search';
						return (
							o.alias && (n = `ss__${(0, v.b)(o.alias)}`),
							(0, h.AH)({
								[`.${n}__header-section`]: { marginBottom: '20px' },
								[`.${n}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
								'.ss__sidebar': { flex: '0 1 auto', width: '270px', '&:empty': { display: 'none' } },
								[`.${n}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
							})
						);
					},
					l = (0, D.PA)((o) => {
						const n = (0, K.u)(),
							i = (0, S.LU)(),
							O = {
								toggleSidebarButtonText: 'Filters',
								hideToggleSidebarButton: !0,
								mobileDisplayAt: n?.variables?.breakpoints?.tablet ? `${n.variables?.breakpoints?.tablet}px` : '991px',
								treePath: i,
							},
							e = (0, p.v6)(o.alias || 'search', n, O, o),
							{
								disableStyles: c,
								className: a,
								internalClassName: d,
								controller: r,
								hideSidebar: j,
								toggleSidebarButtonText: y,
								hideTopToolbar: H,
								hideMiddleToolbar: J,
								hideBottomToolbar: G,
								resultComponent: V,
								hideToggleSidebarButton: w,
								mobileDisplayAt: m,
								toggleSidebarStartClosed: R,
								treePath: Z,
								alias: ts,
							} = e;
						let B = 'ss__search';
						e.alias && (B = `ss__${(0, v.b)(e.alias)}`), n?.name && e.layoutOptions && C(e, n);
						const z = r.store,
							X = (0, A.U)(`(max-width: ${m})`),
							[E, Q] = (0, P.J0)(ts !== 'searchHorizontal' && !R),
							ns = { toggleSidebarButtonText: { value: y } },
							os = W()(ns, e.lang || {}),
							es = (0, I.u)(os, { filters: z.filters, sidebarOpenState: E }),
							q = () =>
								(0, t.Y)('div', {
									className: g()(`${B}__sidebar-toggle`, E ? `${B}__sidebar-toggle--open` : ''),
									active: E,
									children: (0, t.Y)('span', { ...es.toggleSidebarButtonText.all }),
								}),
							as = {
								onClick: () => {
									Q(!E),
										setTimeout(() => {
											if (!E) {
												const ls = document.querySelector('.ss__sidebar')?.querySelector(U.DH);
												ls && ls.focus();
											}
										});
								},
								children: !w && z.loaded && !X && (y || es.toggleSidebarButtonText?.value) ? q : void 0,
							},
							ss = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${B}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_', 'button.sidebar-toggle']],
									toggleSideBarButton: { ...as },
									...(0, u.s)({ disableStyles: c }),
									theme: e.theme,
									treePath: Z,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${B}__content__toolbar--middle-toolbar`,
									layout: X
										? [['mobileSidebar', '_', 'paginationInfo'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...as },
									...(0, u.s)({ disableStyles: c }),
									theme: e.theme,
									treePath: Z,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${B}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...as },
									...(0, u.s)({ disableStyles: c }),
									theme: e.theme,
									treePath: Z,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, u.s)({ disableStyles: c }), theme: e.theme, treePath: Z },
								Results: { resultComponent: V, ...(0, u.s)({ disableStyles: c }), theme: e.theme, treePath: Z },
								NoResults: { ...(0, u.s)({ disableStyles: c }), theme: e.theme, treePath: Z },
							},
							rs = (0, N.Z)(e, x);
						return (0, t.Y)(b._, {
							children: (0, t.FD)('div', {
								...rs,
								className: g()(B, a, d, E ? `${B}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${B}__header-section`, children: !H && (0, t.Y)(f.M, { ...ss.TopToolbar, controller: r }) }),
									(0, t.FD)('div', {
										className: `${B}__main-section`,
										children: [
											!j &&
												!X &&
												E &&
												z.loaded &&
												z.pagination.totalResults > 0 &&
												(0, t.Y)('div', { className: `${B}__sidebar`, children: (0, t.Y)($.B, { ...ss.Sidebar, controller: r }) }),
											(0, t.FD)('div', {
												className: g()(`${B}__content`),
												children: [
													!J && (0, t.Y)(f.M, { ...ss.MiddleToolbar, controller: r }),
													z.pagination.totalResults
														? (0, t.Y)(T.n, { ...ss.Results, controller: r })
														: z.pagination.totalResults === 0 && (0, t.Y)(Y.a, { ...ss.NoResults, controller: r }),
													!G && (0, t.Y)(f.M, { ...ss.BottomToolbar, controller: r }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(k, L, s) {
				s.d(L, { i: () => P });
				var t = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = (D, h, M) => {
					const [g, T] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							D.getController(M.id)
								.then((p) => {
									T(p);
								})
								.catch(() => {
									D.createController(h, M).then((p) => {
										T(p);
									});
								});
						}, []),
						g
					);
				};
			},
		},
	]);
})();

//# sourceMappingURL=5966.c0003dc1.iframe.bundle.js.map
