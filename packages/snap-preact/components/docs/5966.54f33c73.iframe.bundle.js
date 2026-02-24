'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(w, R, s) {
				s.d(R, { _: () => $ });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/preact/dist/preact.module.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = s('../../node_modules/classnames/index.js'),
					E = s.n(B),
					v = s('./components/src/providers/cache.tsx'),
					T = s('./components/src/providers/controller.tsx'),
					O = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = s('./components/src/providers/withTracking.tsx'),
					W = s('./components/src/providers/treePath.tsx'),
					S = s('./components/src/utilities/mergeProps.ts'),
					U = s('./components/src/utilities/mergeStyles.ts'),
					L = s('./components/src/hooks/useA11y.tsx'),
					f = s('./components/src/types.ts'),
					b = s('../../node_modules/mobx-react-lite/es/index.js');
				const j = ({ width: C }) =>
						(0, p.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: C,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					$ = (0, T.Bk)(
						(0, P.W)(
							(0, b.PA)((C) => {
								const D = (0, O.u)(),
									A = (0, W.LU)(),
									F = { layout: f.V.grid, width: 'auto', treePath: A },
									K = (0, S.v6)('inlineBanner', D, F, C),
									{ banner: _, className: g, internalClassName: M, disableA11y: x, layout: e, onClick: o } = K,
									m = (0, U.Z)(K, j);
								return _ && _.value
									? (0, t.Y)(v._, {
											children: (0, t.Y)('div', {
												onClick: (n) => {
													o && o(n, _);
												},
												role: 'article',
												ref: (n) => {
													x || (0, L.iy)(n), (C.trackingRef.current = n);
												},
												className: E()('ss__inline-banner', `ss__inline-banner--${e}`, g, M),
												...m,
												dangerouslySetInnerHTML: { __html: _.value },
											}),
									  })
									: (0, t.Y)(h.FK, {});
							})
						)
					);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(w, R, s) {
				s.d(R, { a: () => D });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/mobx-react-lite/es/index.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = s('../../node_modules/classnames/index.js'),
					E = s.n(B),
					v = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = s('./components/src/providers/snap.tsx'),
					O = s('./components/src/providers/treePath.tsx'),
					P = s('./components/src/utilities/cloneWithProps.tsx'),
					W = s('./components/src/utilities/mergeProps.ts'),
					S = s('./components/src/utilities/mergeStyles.ts'),
					U = s('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					L = s('./components/src/hooks/useComponent.tsx'),
					f = s('./components/src/hooks/useCreateController.tsx'),
					b = s('../../node_modules/deepmerge/dist/cjs.js'),
					j = s.n(b),
					$ = s('./components/src/hooks/useLang.tsx');
				const C = ({}) => (0, p.AH)({}),
					D = (0, h.PA)((A) => {
						const F = (0, v.u)(),
							K = (0, O.LU)(),
							_ = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: K,
							},
							g = (0, W.v6)('noResults', F, _, A),
							{
								contentSlot: M,
								suggestionsTitleText: x,
								hideSuggestionsTitleText: e,
								hideContactsTitleText: o,
								suggestionsList: m,
								hideContact: n,
								contactsTitleText: u,
								hideSuggestions: a,
								contactsList: r,
								controller: i,
								templates: c,
								className: I,
								internalClassName: J,
								treePath: y,
							} = g,
							z = (0, S.Z)(g, C),
							N = m && Array.isArray(m) && m.length !== 0,
							X = r && Array.isArray(r) && r.length !== 0;
						let Q, q, l;
						if (c?.recommendation?.enabled) {
							const H = c?.recommendation?.component || 'Recommendation',
								Z = (0, T.uk)();
							if (Z?.templates) {
								const es = A.theme?.name;
								let os;
								es && (os = Z?.templates?.config.theme?.resultComponent);
								const ts = c?.recommendation?.resultComponent || os,
									Y = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, c.recommendation.config);
								(Y.id = Y.id || `search-${Y.tag}`),
									(l = (0, f.i)(Z, 'recommendation', Y)),
									!l?.store?.loaded && !l?.store?.loading && l?.store.error?.type !== 'error' && l?.search(),
									ts && Z?.templates?.library.import.component.result && (q = (0, L.x)(Z?.templates?.library.import.component.result, ts)),
									H &&
										Z?.templates?.library.import.component.recommendation.default &&
										(Q = (0, L.x)(Z?.templates?.library.import.component.recommendation.default, H));
							}
						}
						const d = Q,
							G = q,
							k = {
								suggestionsTitleText: { value: x },
								suggestionsList: {
									value: `${m ? m.map((H) => `<li class="ss__no-results__suggestions__list__option">${H}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: u },
								contactsList: {
									value: `${
										r
											? r
													.map(
														(H) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${U.p(
																H.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																H.title
															}</h4><p class="ss__no-results__contact__detail__content">${H.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							V = j()(k, g.lang || {}),
							ss = (0, $.u)(V, { controller: i });
						return (0, t.FD)('div', {
							className: E()('ss__no-results', I, J),
							...z,
							children: [
								M &&
									(typeof M == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: M } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, P.Y)(M, { controller: i, treePath: y }) })),
								!a &&
									(x || N) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											x && !e && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...ss.suggestionsTitleText?.all }),
											N && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...ss.suggestionsList?.all }),
										],
									}),
								!n &&
									(u || X) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											u && !o && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...ss.contactsTitleText?.all }),
											X && (0, t.Y)('div', { ...ss.contactsList?.all }),
										],
									}),
								d && l?.store?.loaded
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(d, {
												controller: l,
												title: l.store?.profile?.display?.templateParameters?.title,
												resultComponent: G,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(w, R, s) {
				s.d(R, { n: () => x });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/preact/dist/preact.module.js'),
					B = s('../../node_modules/mobx-react-lite/es/index.js'),
					E = s('../../node_modules/classnames/index.js'),
					v = s.n(E),
					T = s('../../node_modules/deepmerge/dist/cjs.js'),
					O = s.n(T),
					P = s('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					W = s('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					S = s('./components/src/components/Molecules/Result/Result.tsx'),
					U = s('./components/src/types.ts'),
					L = s('./components/src/utilities/defined.ts'),
					f = s('./components/src/utilities/mergeProps.ts'),
					b = s('./components/src/utilities/mergeStyles.ts'),
					j = s('./components/src/providers/cache.tsx'),
					$ = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = s('./components/src/providers/withTracking.tsx'),
					D = s('./components/src/providers/snap.tsx'),
					A = s('./components/src/providers/treePath.tsx'),
					F = s('./components/src/hooks/useDisplaySettings.tsx'),
					K = s('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					_ = s('./components/src/hooks/useComponent.tsx');
				const g = ({ gapSize: e, columns: o }) =>
						(0, h.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: e,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${o}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / o}% - (${o - 1} * ${e} / ${o} ) )`,
								marginRight: e,
								marginBottom: e,
								[`&:nth-of-type(${o}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${o})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					M = (0, C.W)(S.Q),
					x = (0, B.PA)((e) => {
						const o = (0, $.u)(),
							m = (0, A.LU)(),
							n = {
								0: { columns: e.columns || 1 },
								540: { columns: e.columns || 2 },
								768: { columns: e.columns || 3 },
								991: { columns: e.columns || 4 },
							},
							u = { results: e.controller?.store?.results, columns: 4, gapSize: '20px', layout: U.V.grid, breakpoints: n, treePath: m };
						let a = (0, f.v6)('results', o, u, e);
						if (!e.theme?.name) {
							const l = (0, F.X)(a?.breakpoints || {}),
								d = O()(a?.theme || {}, l?.theme || {}, { arrayMerge: (G, k) => k });
							a = { ...a, ...l, theme: d };
						}
						const { disableStyles: r, className: i, internalClassName: c, layout: I, theme: J, controller: y, treePath: z } = a;
						let { resultComponent: N } = a;
						const X = {
							result: { internalClassName: 'ss__results__result', ...(0, L.s)({ disableStyles: r }), theme: a?.theme, treePath: z },
							inlineBanner: {
								controller: y,
								internalClassName: 'ss__results__inline-banner',
								...(0, L.s)({ disableStyles: r }),
								theme: a?.theme,
								treePath: z,
							},
						};
						let Q = a.results;
						a?.columns && a?.rows && a.columns > 0 && a.rows > 0 && (Q = a.results?.slice(0, a.columns * a.rows));
						const q = (0, b.Z)({ ...a, columns: I == U.V.list ? 1 : a.columns }, g);
						if (typeof N == 'string') {
							const l = (0, D.uk)();
							if (l?.templates?.library.import.component.result && ((N = (0, _.x)(l?.templates?.library.import.component.result, N)), !N))
								return (0, t.Y)(p.FK, {});
						}
						return Q?.length
							? (0, t.Y)(j._, {
									children: (0, t.Y)('div', {
										...q,
										className: v()('ss__results', `ss__results-${a.layout}`, i, c),
										children: Q.map((l) =>
											(() => {
												switch (l.type) {
													case P.c.BANNER:
														return (0, h.n)(W._, { ...X.inlineBanner, key: l.id, banner: l, layout: a.layout });
													default:
														if (N && y) {
															const d = N;
															return (0, t.Y)(K.o, {
																result: l,
																controller: y,
																children: (0, t.Y)(d, { controller: y, result: l, theme: J, treePath: z }, l.id),
															});
														} else return (0, t.Y)(M, { ...X.result, result: l, layout: a.layout, controller: y }, l.id);
												}
											})()
										),
									}),
							  })
							: (0, t.Y)(p.FK, {});
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(w, R, s) {
				s.d(R, { B: () => C });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/preact/dist/preact.module.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = s('../../node_modules/classnames/index.js'),
					E = s.n(B),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					T = s('./components/src/providers/cache.tsx'),
					O = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = s('./components/src/providers/treePath.tsx'),
					W = s('./components/src/utilities/defined.ts'),
					S = s('./components/src/utilities/mergeProps.ts'),
					U = s('./components/src/utilities/mergeStyles.ts'),
					L = s('./components/src/components/Organisms/Layout/Layout.tsx'),
					f = s('../../node_modules/deepmerge/dist/cjs.js'),
					b = s.n(f),
					j = s('./components/src/hooks/useLang.tsx');
				const $ = ({ stickyOffset: D }) =>
						(0, p.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: D || 0 }, '& .ss__facets': { width: '100%' } }),
					C = (0, v.PA)((D) => {
						const A = (0, O.u)(),
							K = { titleText: 'Filters', treePath: (0, P.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							_ = (0, S.v6)('sidebar', A, K, D),
							{
								controller: g,
								layout: M,
								hideTitleText: x,
								titleText: e,
								sticky: o,
								disableStyles: m,
								className: n,
								internalClassName: u,
								treePath: a,
							} = _,
							r = (0, U.Z)(_, $),
							i = { titleText: { value: e } },
							c = b()(i, _.lang || {}),
							I = (0, j.u)(c, { controller: g }),
							J = { Layout: { ...(0, W.s)({ disableStyles: m }), theme: _.theme, treePath: a } },
							y = M?.length;
						return g?.store?.loaded && g?.store?.pagination?.totalResults > 0 && y
							? (0, t.Y)(T._, {
									children: (0, t.FD)('div', {
										...r,
										className: E()('ss__sidebar', n, u, { 'ss__sidebar--sticky': o }),
										children: [
											x
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: E()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...I.titleText.all,
														children: e,
												  }),
											(0, t.Y)('div', { className: E()('ss__sidebar__inner'), children: (0, t.Y)(L.P, { controller: g, layout: M, ...J.Layout }) }),
										],
									}),
							  })
							: (0, t.Y)(h.FK, {});
					});
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(w, R, s) {
				s.d(R, { M: () => f });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					B = s.n(p),
					E = s('../../node_modules/mobx-react-lite/es/index.js'),
					v = s('./components/src/providers/cache.tsx'),
					T = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = s('./components/src/providers/treePath.tsx'),
					P = s('./components/src/utilities/defined.ts'),
					W = s('./components/src/utilities/mergeProps.ts'),
					S = s('./components/src/utilities/mergeStyles.ts'),
					U = s('./components/src/components/Organisms/Layout/Layout.tsx');
				const L = ({}) => (0, h.AH)({}),
					f = (0, E.PA)((b) => {
						const j = (0, T.u)(),
							C = { treePath: (0, O.LU)(), layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							D = (0, W.v6)('toolbar', j, C, b),
							{ controller: A, toggleSideBarButton: F, disableStyles: K, className: _, internalClassName: g, treePath: M, layout: x } = D,
							e = (0, S.Z)(D, L),
							o = {
								Layout: {
									toggleSideBarButton: F,
									internalClassName: 'ss__toolbar__layout',
									...(0, P.s)({ disableStyles: K }),
									theme: D?.theme,
									treePath: M,
								},
							};
						return x?.length
							? (0, t.Y)(v._, {
									children: (0, t.Y)('div', {
										...e,
										className: B()('ss__toolbar', _, g),
										children: (0, t.Y)(U.P, { controller: A, layout: x, ...o.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Templates/Search/Search.tsx'(w, R, s) {
				s.d(R, { v: () => x });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = s('../../node_modules/mobx-react-lite/es/index.js'),
					B = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = s('../../node_modules/classnames/index.js'),
					v = s.n(E),
					T = s('./components/src/components/Organisms/Results/Results.tsx'),
					O = s('./components/src/utilities/mergeProps.ts'),
					P = s('./components/src/utilities/defined.ts'),
					W = s('./components/src/utilities/mergeStyles.ts'),
					S = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					U = s('./components/src/providers/cache.tsx'),
					L = s('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					f = s('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					b = s('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					j = s('./components/src/hooks/useMediaQuery.tsx'),
					$ = s('./components/src/hooks/useLang.tsx'),
					C = s('./components/src/hooks/useA11y.tsx'),
					D = s('../../node_modules/deepmerge/dist/cjs.js'),
					A = s.n(D);
				const F = (e, o, m) => {
						const n = e.storage,
							a = n.get(o) || m || void 0,
							[r, i] = (0, h.J0)(a);
						return [
							r,
							(I) => {
								n.set(o, I), i(I);
							},
						];
					},
					K = (e, o) => {
						const m = e?.layoutOptions || [],
							[n, u] = F(e.controller, 'layoutOptions', m.filter((r) => r.default).pop());
						try {
							if (!m.some((r) => JSON.stringify(r) == JSON.stringify(n))) {
								const r = m.filter((i) => i.default).pop();
								u(r);
							}
						} catch {
							e.controller.log('invalid layoutOptions provided to component', e.inherits ? ` '${e.inherits}'` : '');
						}
						(e.theme = e.theme || {}),
							(e.theme.components = {
								...(e.theme.components || {}),
								layoutSelector: {
									options: m,
									onSelect: (r, i) => {
										i && u(i);
									},
									selected: n,
								},
							});
						let a = !1;
						if (o.components && e.treePath) {
							const r = e.treePath.split(' ')[0];
							Object.keys(o.components).forEach((i) => {
								const c = i.split(' '),
									I = c.splice(-1).pop() ?? '',
									[J] = I.split('.');
								if (
									o.components &&
									J == 'toolbar' &&
									(c[0] == r || c[0] == `*${r}` || c[0] == `*(M)${r}` || c[0] == `*(T)${r}` || c[0] == `*(D)${r}` || !c.length)
								) {
									const y = o.components[i];
									y?.layout && y.layout.toString().indexOf('layoutSelector') > -1 && (a = !0);
								}
							});
						}
						n?.overrides && a && (e.theme = A()(e.theme, { components: n.overrides.components }));
					};
				var _ = s('./components/src/utilities/componentNameToClassName.ts'),
					g = s('./components/src/hooks/useCleanUpEmptyDivs.tsx');
				const M = (e) => {
						let o = 'ss__search';
						return (
							e.alias && (o = `ss__${(0, _.b)(e.alias)}`),
							(0, B.AH)({
								[`.${o}__header-section`]: { marginBottom: '20px' },
								[`.${o}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
								'.ss__sidebar': { flex: '0 1 auto', width: '270px', '&:empty': { display: 'none' } },
								[`.${o}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
							})
						);
					},
					x = (0, p.PA)((e) => {
						const o = (0, S.u)(),
							m = {
								toggleSidebarButtonText: 'Filters',
								hideToggleSidebarButton: !0,
								mobileDisplayAt: o?.variables?.breakpoints?.tablet ? `${o.variables?.breakpoints?.tablet}px` : '991px',
							},
							n = (0, O.v6)(e.alias || 'search', o, m, e),
							{
								disableStyles: u,
								className: a,
								internalClassName: r,
								controller: i,
								hideSidebar: c,
								toggleSidebarButtonText: I,
								hideTopToolbar: J,
								hideMiddleToolbar: y,
								hideBottomToolbar: z,
								resultComponent: N,
								hideToggleSidebarButton: X,
								mobileDisplayAt: Q,
								toggleSidebarStartClosed: q,
								treePath: l,
							} = n;
						let d = 'ss__search';
						n.alias && (d = `ss__${(0, _.b)(n.alias)}`), o?.name && n.layoutOptions && K(n, o);
						const G = i.store,
							k = (0, j.U)(`(max-width: ${Q})`),
							[V, ss] = (0, h.J0)(!q),
							H = { toggleSidebarButtonText: { value: I } },
							Z = A()(H, n.lang || {}),
							es = (0, $.u)(Z, { filters: G.filters, sidebarOpenState: V }),
							os = () =>
								(0, t.Y)('div', {
									className: v()(`${d}__sidebar-toggle`, V ? `${d}__sidebar-toggle--open` : ''),
									children: (0, t.Y)('span', { ...es.toggleSidebarButtonText.all }),
								}),
							ts = {
								onClick: () => {
									ss(!V),
										setTimeout(() => {
											if (!V) {
												const ns = document.querySelector('.ss__sidebar')?.querySelector(C.DH);
												ns && ns.focus();
											}
										});
								},
								children: !X && G.loaded && !k && (I || es.toggleSidebarButtonText?.value) ? os : void 0,
							},
							Y = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${d}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_', 'button.sidebar-toggle']],
									toggleSideBarButton: { ...ts },
									...(0, P.s)({ disableStyles: u }),
									theme: n.theme,
									treePath: l,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${d}__content__toolbar--middle-toolbar`,
									layout: k
										? [['mobileSidebar', '_', 'paginationInfo'], ['filterSummary'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...ts },
									...(0, P.s)({ disableStyles: u }),
									theme: n.theme,
									treePath: l,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${d}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination']],
									toggleSideBarButton: { ...ts },
									...(0, P.s)({ disableStyles: u }),
									theme: n.theme,
									treePath: l,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, P.s)({ disableStyles: u }), theme: n.theme, treePath: l },
								Results: { resultComponent: N, ...(0, P.s)({ disableStyles: u }), theme: n.theme, treePath: l },
								NoResults: { ...(0, P.s)({ disableStyles: u }), theme: n.theme, treePath: l },
							},
							as = (0, W.Z)(n, M);
						return (
							(0, g.P)(['.ss__search__sidebar']),
							(0, t.Y)(U._, {
								children: (0, t.FD)('div', {
									...as,
									className: v()(d, a, r, V ? `${d}--sidebar-open` : ''),
									children: [
										(0, t.Y)('div', { className: `${d}__header-section`, children: !J && (0, t.Y)(f.M, { ...Y.TopToolbar, controller: i }) }),
										(0, t.FD)('div', {
											className: `${d}__main-section`,
											children: [
												!c && !k && V && (0, t.Y)('div', { className: `${d}__sidebar`, children: (0, t.Y)(L.B, { ...Y.Sidebar, controller: i }) }),
												(0, t.FD)('div', {
													className: v()(`${d}__content`),
													children: [
														!y && (0, t.Y)(f.M, { ...Y.MiddleToolbar, controller: i }),
														G.pagination.totalResults
															? (0, t.Y)(T.n, { ...Y.Results, controller: i })
															: G.pagination.totalResults === 0 && (0, t.Y)(b.a, { ...Y.NoResults, controller: i }),
														!z && (0, t.Y)(f.M, { ...Y.BottomToolbar, controller: i }),
													],
												}),
											],
										}),
									],
								}),
							})
						);
					});
			},
			'./components/src/hooks/useCreateController.tsx'(w, R, s) {
				s.d(R, { i: () => h });
				var t = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = (p, B, E) => {
					const [v, T] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							p.getController(E.id)
								.then((O) => {
									T(O);
								})
								.catch(() => {
									p.createController(B, E).then((O) => {
										T(O);
									});
								});
						}, []),
						v
					);
				};
			},
		},
	]);
})();

//# sourceMappingURL=5966.54f33c73.iframe.bundle.js.map
