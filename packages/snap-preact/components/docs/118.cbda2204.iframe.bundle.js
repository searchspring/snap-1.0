'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[118],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(q, W, e) {
				e.d(W, { _: () => V });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/preact/dist/preact.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					n = e.n(o),
					a = e('./components/src/providers/cache.tsx'),
					s = e('./components/src/providers/controller.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/withTracking.tsx'),
					T = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useA11y.tsx'),
					F = e('./components/src/types.ts'),
					G = e('../../node_modules/mobx-react-lite/es/index.js');
				const M = ({ width: L }) =>
						(0, E.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: L,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					V = (0, s.Bk)(
						(0, S.W)(
							(0, G.PA)((L) => {
								const h = (0, _.u)(),
									O = (0, T.LU)(),
									I = { layout: F.V.grid, width: 'auto', treePath: O },
									y = (0, z.v6)('inlineBanner', h, I, L),
									{ banner: v, className: $, internalClassName: Y, disableA11y: b, layout: P, onClick: B } = y,
									X = (0, K.Z)(y, M);
								return v && v.value
									? (0, t.Y)(a._, {
											children: (0, t.Y)('div', {
												onClick: (g) => {
													B && B(g, v);
												},
												role: 'article',
												ref: (g) => {
													b || (0, D.iy)(g), (L.trackingRef.current = g);
												},
												className: n()('ss__inline-banner', `ss__inline-banner--${P}`, $, Y),
												...X,
												dangerouslySetInnerHTML: { __html: v.value },
											}),
									  })
									: (0, t.Y)(A.FK, {});
							})
						)
					);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(q, W, e) {
				e.d(W, { i: () => L });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/preact/dist/preact.module.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					a = e.n(n),
					s = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					z = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/hooks/useLang.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					F = e.n(D);
				const G = ({ vertical: h, theme: O }) =>
						(0, o.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: h ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: O?.variables?.colors?.primary } },
								},
							},
						}),
					M = (h) => h?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					V = (h, O) => {
						if (h && O) {
							const I = h.match(M(O));
							if (O && h && I && typeof I.index == 'number') {
								const y = h.slice(0, I.index),
									v = h.slice(I.index + O.length, h.length);
								return `${y ? `<em>${y}</em>` : ''}${O}${v ? `<em>${v}</em>` : ''}`;
							}
						}
						return `<em>${h}</em>`;
					},
					L = (0, E.PA)((h) => {
						const O = (0, _.u)(),
							I = { vertical: !0, previewOnHover: !0 },
							y = (0, T.v6)('terms', O, I, h),
							{ title: v, onTermClick: $, limit: Y, previewOnHover: b, emIfy: P, className: B, internalClassName: X, controller: g } = y,
							Z = g?.store?.state?.input,
							u = y.terms,
							J = (0, z.Z)(y, G),
							ee = (d, p) => {
								$ && $(d, p), g?.setFocused && g?.setFocused();
							},
							m = Y ? u?.slice(0, Y) : u,
							U = { title: { value: v } },
							H = F()(U, y.lang || {}),
							i = (0, K.u)({ title: H.title }, { controller: g });
						return m?.length
							? (0, t.Y)(s._, {
									children: (0, t.FD)('div', {
										...J,
										className: a()('ss__terms', B, X),
										children: [
											v ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...i.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': v,
												children: m?.map((d, p) => {
													const x = {
															term: {
																value: `${P ? V(d.value, Z || '') : d.value}`,
																attributes: { 'aria-label': `${v || ''} item ${p + 1} of ${m.length}, ${d.value}` },
															},
														},
														c = F()(x, y.lang || {}),
														C = (0, K.u)({ term: c.term }, { index: p, numberOfTerms: m.length, term: d });
													return (0, t.Y)('li', {
														className: a()('ss__terms__option', { 'ss__terms__option--active': d.active }),
														children: (0, t.Y)('a', {
															onClick: (r) => ee(r, d),
															href: d.url.href,
															...(b ? (0, S.l)(d.preview) : {}),
															...C.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: (0, t.Y)(A.FK, {});
					});
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(q, W, e) {
				e.d(W, { h: () => ee });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/preact/dist/preact.module.js'),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					s = e.n(a),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(_),
					T = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					z = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					K = e('./components/src/components/Organisms/Results/Results.tsx'),
					D = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					F = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					G = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/defined.ts'),
					V = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/cache.tsx'),
					I = e('./components/src/types.ts'),
					y = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useA11y.tsx'),
					$ = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					Y = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					b = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					P = e('./components/src/components/Atoms/Button/Button.tsx'),
					B = e('./components/src/hooks/useCleanUpEmptyDivs.tsx'),
					X = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/hooks/useCreateController.tsx'),
					Z = e('./components/src/hooks/useComponent.tsx');
				function u(m, U) {
					let H, i, d;
					if (m?.recommendation?.enabled) {
						const x = m?.recommendation?.component || 'RecommendationGrid',
							c = (0, X.uk)();
						if (c?.templates) {
							const C = U?.name;
							let r;
							C && (r = c?.templates?.config.theme?.resultComponent);
							const N = m?.recommendation?.resultComponent || r,
								w = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, m.recommendation.config);
							(w.id = w.id || `search-${w.tag}`),
								(d = (0, g.i)(c, 'recommendation', w)),
								!d?.store?.loaded && !d?.store?.loading && d?.store.error?.type !== 'error' && d?.search(),
								N && c?.templates?.library.import.component.result && (i = (0, Z.x)(c?.templates?.library.import.component.result, N)),
								x &&
									c?.templates?.library.import.component.recommendation.default &&
									(H = (0, Z.x)(c?.templates?.library.import.component.recommendation.default, x));
						}
					}
					return { RecommendationTemplateComponent: H, RecommendationTemplateResultComponent: i, recsController: d };
				}
				const J = ({ controller: m, input: U, viewportMaxHeight: H, width: i, theme: d, column1: p, column2: x, column3: c, column4: C }) => {
						let r = 0;
						if (U) {
							let w;
							typeof U == 'string' ? (w = document.querySelector(U)) : (w = U), (r = w?.getBoundingClientRect()?.bottom || 0);
						}
						const N = !!(m.store.search?.query?.string && m.store.results.length === 0);
						return (0, n.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: p?.width == 'auto' ? '1 1 auto' : `1 0 ${p?.width}`,
								maxWidth: p?.width == 'auto' ? 'auto' : p?.width,
								alignContent: p?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: x?.width == 'auto' ? '1 1 auto' : `1 0 ${x?.width}`,
								maxWidth: x?.width == 'auto' ? 'auto' : x?.width,
								alignContent: x?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: c?.width == 'auto' ? '1 1 auto' : `1 0 ${c?.width}`,
								maxWidth: c?.width == 'auto' ? 'auto' : c?.width,
								alignContent: c?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: C?.width == 'auto' ? '1 1 auto' : `1 0 ${C?.width}`,
								maxWidth: C?.width == 'auto' ? 'auto' : C?.width,
								alignContent: C?.alignContent,
							},
							'.ss__autocomplete__column, .ss__autocomplete__row': { minWidth: 0 },
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							flexWrap: 'wrap',
							display: 'flex',
							flexDirection: 'row',
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							maxWidth: i,
							maxHeight: H && r ? `calc(100vh - ${r + 10}px)` : void 0,
							overflowY: 'scroll',
							'.ss__autocomplete__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__autocomplete__column': { display: 'flex', flexDirection: 'column', flexFlow: 'wrap' },
							'.ss__autocomplete__column:empty, .ss__autocomplete__row:empty': { display: 'none' },
							'.ss__autocomplete__separator': { flexGrow: 1, flexShrink: 1 },
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'.ss__autocomplete__terms-wrapper': { background: '#f8f8f8', width: '100%' },
							'.ss__autocomplete__facets': {
								display: 'flex',
								width: 'auto',
								flexDirection: 'column',
								columnGap: '20px',
								padding: '10px',
								overflowY: 'auto',
								'.ss__facets': { display: 'flex', flexDirection: 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__facets-wrapper': { width: '100%' },
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: '1 1 0%',
								flexDirection: 'column',
								justifyContent: 'space-between',
								overflowY: 'auto',
								margin: N ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: N ? 'center' : 'right',
								a: { fontWeight: 'bold', color: d?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					ee = (0, o.PA)((m) => {
						const U = (0, h.u)(),
							H = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let i = (0, G.v6)('autocompleteLayout', U, H, m);
						delete i.treePath;
						const d = (0, L.l)(),
							p = () => {
								f?.setFocused && f?.setFocused();
							},
							x = {
								components: {
									facet: { valueProps: d },
									facetGridOptions: { onClick: p },
									facetHierarchyOptions: { onClick: p },
									facetListOptions: { onClick: p },
									facetPaletteOptions: { onClick: p },
								},
							};
						if (U?.name) i.theme = S().all([x, i?.theme || {}], { arrayMerge: (l, j) => j });
						else {
							const l = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								j = S().all([l, x, i?.theme || {}], { arrayMerge: (me, Ye) => Ye });
							i = { ...i, theme: j };
						}
						let c = i.input;
						c && typeof c == 'string' && (c = document.querySelector(c));
						const {
								facetsTitle: C,
								contentTitle: r,
								layout: N,
								column1: w,
								column2: oe,
								column3: fe,
								column4: ge,
								onReset: Ee,
								excludeBanners: re,
								resultComponent: Re,
								templates: ve,
								disableStyles: k,
								className: Ae,
								internalClassName: Be,
								controller: f,
							} = i,
							R = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										f?.setFocused && f.setFocused(), (window.location.href = ue.url.href);
									},
									name: 'see-more',
									...(0, M.s)({ disableStyles: k }),
									theme: i.theme,
									treePath: m.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									controller: f,
									...(0, M.s)({ disableStyles: k }),
									theme: i.theme,
									treePath: m.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									controller: f,
									...(0, M.s)({ disableStyles: k }),
									theme: i.theme,
									treePath: m.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, M.s)({ disableStyles: k }), theme: i.theme, treePath: m.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, M.s)({ disableStyles: k }), theme: i.theme, treePath: m.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, M.s)({ disableStyles: k }), theme: i.theme, treePath: m.treePath },
								results: {
									columns: 3,
									rows: 2,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: Re,
									...(0, M.s)({ disableStyles: k }),
									theme: i.theme,
									treePath: m.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, M.s)({ disableStyles: k }),
									theme: i.theme,
									treePath: m.treePath,
								},
							},
							{
								search: le,
								terms: Le,
								trending: _e,
								results: se,
								merchandising: Q,
								pagination: Pe,
								filters: Ie,
								facets: ye,
								state: ue,
								loading: de,
							} = f.store,
							pe = f.store.history || [];
						f &&
							typeof c == 'string' &&
							((c = document.querySelector(c)),
							(0, E.vJ)(() => {
								f.bind();
							}, []));
						const We = c === ue.focusedInput && (Le.length > 0 || _e?.length > 0 || pe?.length > 0 || (ue.input && f.store.loaded)),
							De = () => !!(se.length > 0 || Object.keys(Q.content).length > 0 || le?.query?.string || de),
							[Oe, xe] = (0, E.J0)(De()),
							Te = () => {
								const l = _e?.filter((me) => me.active).pop(),
									j = pe?.filter((me) => me.active).pop();
								l || j || De() ? xe(!0) : xe(!1);
							};
						(0, E.vJ)(() => {
							Te();
						}, [_e, pe]);
						const ae = ye.length ? ye.filter((l) => l.display !== I.Q.SLIDER) : [];
						Te();
						const Ke = (0, V.Z)(i, J),
							Me = () => {
								f.setFocused(), Ee && Ee();
							},
							Ue = {
								contentTitle: { value: r },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: C },
								noResultsText: {
									value: `<p>No results found for "${le.originalQuery?.string || le.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${Pe.totalResults} ${Ie.length > 0 ? 'filtered' : ''} result${Pe.totalResults == 1 ? '' : 's'} for "${
										le.query?.string
									}"`,
								},
							},
							ie = S()(Ue, i.lang || {}),
							te = (0, y.u)(ie, { controller: f });
						let ce, he, Ce;
						const je = !!(f.store.search?.query?.string && f.store.results.length === 0);
						if (ve?.recommendation?.enabled && je) {
							const l = u(ve, m.theme);
							(he = l.RecommendationTemplateComponent), (Ce = l.RecommendationTemplateResultComponent), (ce = l.recsController);
						}
						(0, B.P)(['.ss__autocomplete__terms-wrapper, .ss__autocomplete__row', '.ss__autocomplete__column'], '.ss__autocomplete__separator');
						const ne = (l) => {
							if (typeof l != 'string') return (0, t.Y)('div', { className: 'ss__autocomplete__row', children: l?.map((j) => ne(j)) });
							if (l == 'c1' && w?.layout?.length)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c1',
									children: w?.layout?.map((j) => ne(j)),
								});
							if (l == 'c2' && oe?.layout?.length)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c2',
									children: oe?.layout?.map((j) => ne(j)),
								});
							if (l == 'c3' && fe?.layout?.length)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c3',
									children: fe?.layout?.map((j) => ne(j)),
								});
							if (l == 'c4' && ge?.layout?.length)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c4',
									children: ge?.layout?.map((j) => ne(j)),
								});
							if (l == 'termsList')
								return (0, t.Y)('div', {
									className: s()('ss__autocomplete__terms-wrapper'),
									children: (0, t.Y)($.G, { controller: f, ...R.termsList }),
								});
							if (l == 'terms.history')
								return (0, t.Y)(Y.i, {
									controller: f,
									terms: f.store.history,
									className: 'ss__terms-list__terms--history',
									name: 'history',
									limit: f.config.settings?.history?.limit,
									...R.terms,
									title: 'History',
								});
							if (l == 'terms.trending')
								return (0, t.Y)(Y.i, {
									controller: f,
									terms: f.store.trending,
									className: 'ss__terms-list__terms--trending',
									name: 'trending',
									limit: f.config.settings?.trending?.limit,
									...R.terms,
									title: 'Trending',
								});
							if (l == 'terms.suggestions')
								return (0, t.Y)(Y.i, {
									controller: f,
									terms: f.store.terms,
									className: 'ss__terms-list__terms--suggestions',
									name: 'suggestions',
									...R.terms,
									title: 'Suggestions',
								});
							if (l == 'facets')
								return ae.length
									? (0, t.FD)('div', {
											className: s()('ss__autocomplete__facets-wrapper'),
											children: [
												C || ie.facetsTitle.value
													? (0, t.Y)('div', {
															className: s()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...te.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(F.J, { ...R.facets, facets: ae }),
														re ? null : (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: (0, t.Y)(t.FK, {});
							if (l == 'facetsHorizontal')
								return ae.length
									? (0, t.FD)(t.FK, {
											children: [
												C || ie.facetsTitle.value
													? (0, t.Y)('div', {
															className: s()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...te.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(b.b, { ...R.facetsHorizontal, facets: ae }),
														re ? null : (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: (0, t.Y)(t.FK, {});
							if (l == 'content' && Oe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										se.length > 0 || !de
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														re ? null : (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.HEADER, name: 'header' }),
														re ? null : (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.BANNER, name: 'banner' }),
														se.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(r || ie.contentTitle.value) && se.length > 0
																			? (0, t.Y)('div', {
																					className: s()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...te.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(K.n, { results: se, ...R.results, controller: f }),
																	],
															  })
															: de
															? (0, t.Y)(t.FK, {})
															: (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...te.noResultsText?.all }),
																		he && ce?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(he, {
																						controller: ce,
																						title: ce.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Ce,
																						name: 'noResultsRecommendations',
																						treePath: m.treePath,
																					}),
																			  })
																			: null,
																	],
															  }),
														re ? null : (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.FOOTER, name: 'footer' }),
													],
											  })
											: (0, t.Y)(t.FK, {}),
								});
							if (l == '_') return (0, t.Y)('div', { className: 'ss__autocomplete__separator' });
							if (l == 'banner.banner') return (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.BANNER, name: 'banner' });
							if (l == 'banner.footer') return (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.FOOTER, name: 'footer' });
							if (l == 'banner.header') return (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.HEADER, name: 'header' });
							if (l == 'banner.left') return (0, t.Y)(D.l, { ...R.banner, content: Q.content, type: T.c.LEFT, name: 'left' });
							if (l == 'button.see-more' && Oe && le?.query?.string && se.length > 0)
								return (0, t.FD)(P.$, {
									...R.button,
									...te.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...te.seeMoreButton.value }), (0, t.Y)(z.I, { ...R.icon })],
								});
						};
						return We && N?.length
							? (0, t.Y)(O._, {
									children: (0, t.FD)('div', {
										...Ke,
										className: s()('ss__autocomplete', Ae, Be),
										onClick: (l) => l.stopPropagation(),
										ref: (l) => (0, v.iy)(l, 0, !1, Me),
										children: [
											(0, t.Y)('span', {
												role: 'link',
												ref: (l) => (0, v.iy)(l),
												onClick: () => Me(),
												className: 'ss__autocomplete__close-button',
												style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
												...te.closeButton?.all,
											}),
											N?.map((l) => ne(l)),
										],
									}),
							  })
							: (0, t.Y)(A.FK, {});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(q, W, e) {
				e.d(W, { n: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					a = e.n(n),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(s),
					S = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					T = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					z = e('./components/src/components/Molecules/Result/Result.tsx'),
					K = e('./components/src/types.ts'),
					D = e('./components/src/utilities/defined.ts'),
					F = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/providers/cache.tsx'),
					V = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/withTracking.tsx'),
					h = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/hooks/useDisplaySettings.tsx'),
					y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					v = e('./components/src/hooks/useComponent.tsx');
				const $ = ({ gapSize: P, columns: B }) =>
						(0, A.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: P,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${B}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / B}% - (${B - 1} * ${P} / ${B} ) )`,
								marginRight: P,
								marginBottom: P,
								[`&:nth-of-type(${B}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${B})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					Y = (0, L.W)(z.Q),
					b = (0, o.PA)((P) => {
						const B = (0, V.u)(),
							X = (0, O.LU)(),
							g = {
								0: { columns: P.columns || 1 },
								540: { columns: P.columns || 2 },
								768: { columns: P.columns || 3 },
								991: { columns: P.columns || 4 },
							},
							Z = { results: P.controller?.store?.results, columns: 4, gapSize: '20px', layout: K.V.grid, breakpoints: g, treePath: X };
						let u = (0, F.v6)('results', B, Z, P);
						if (!P.theme?.name) {
							const r = (0, I.X)(u?.breakpoints || {}),
								N = _()(u?.theme || {}, r?.theme || {}, { arrayMerge: (w, oe) => oe });
							u = { ...u, ...r, theme: N };
						}
						const { disableStyles: J, className: ee, internalClassName: m, layout: U, theme: H, controller: i, treePath: d } = u;
						let { resultComponent: p } = u;
						const x = {
							result: { internalClassName: 'ss__results__result', ...(0, D.s)({ disableStyles: J }), theme: u?.theme, treePath: d },
							inlineBanner: {
								controller: i,
								internalClassName: 'ss__results__inline-banner',
								...(0, D.s)({ disableStyles: J }),
								theme: u?.theme,
								treePath: d,
							},
						};
						let c = u.results;
						u?.columns && u?.rows && u.columns > 0 && u.rows > 0 && (c = u.results?.slice(0, u.columns * u.rows));
						const C = (0, G.Z)({ ...u, columns: U == K.V.list ? 1 : u.columns }, $);
						if (typeof p == 'string') {
							const r = (0, h.uk)();
							if (r?.templates?.library.import.component.result && ((p = (0, v.x)(r?.templates?.library.import.component.result, p)), !p))
								return (0, t.Y)(E.FK, {});
						}
						return c?.length
							? (0, t.Y)(M._, {
									children: (0, t.Y)('div', {
										...C,
										className: a()('ss__results', `ss__results-${u.layout}`, ee, m),
										children: c.map((r) =>
											(() => {
												switch (r.type) {
													case S.c.BANNER:
														return (0, A.n)(T._, { ...x.inlineBanner, key: r.id, banner: r, layout: u.layout });
													default:
														if (p && i) {
															const N = p;
															return (0, t.Y)(y.o, {
																result: r,
																controller: i,
																children: (0, t.Y)(N, { controller: i, result: r, theme: H, treePath: d }, r.id),
															});
														} else return (0, t.Y)(Y, { ...x.result, result: r, layout: u.layout, controller: i }, r.id);
												}
											})()
										),
									}),
							  })
							: (0, t.Y)(E.FK, {});
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(q, W, e) {
				e.d(W, { G: () => G });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/preact/dist/preact.module.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					a = e.n(n),
					s = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					z = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					D = e('./components/src/hooks/useCleanUpEmptyDivs.tsx');
				const F = ({}) =>
						(0, o.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					G = (0, E.PA)((M) => {
						const V = (0, _.u)(),
							L = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'History',
								trendingTitle: 'Trending',
								suggestionTitle: 'Suggestions',
							},
							h = (0, T.v6)('termsList', V, L, M),
							{
								layout: O,
								historyTitle: I,
								trendingTitle: y,
								suggestionTitle: v,
								retainHistory: $,
								retainTrending: Y,
								treePath: b,
								disableStyles: P,
								className: B,
								internalClassName: X,
								controller: g,
							} = h,
							Z = { terms: { ...(0, S.s)({ disableStyles: P }), theme: h.theme, treePath: b } },
							u = (0, z.Z)(h, F),
							J = g?.store.history || [],
							ee = g?.store.terms || [],
							m = g?.store.trending || [],
							U = m?.filter((r) => r.active).pop(),
							H = J?.filter((r) => r.active).pop(),
							{ loaded: i, results: d, state: p } = g?.store;
						let x = !1;
						m?.length && ((Y && i) || (!d.length && !p.input)) && (x = !0);
						let c = !1;
						J?.length && (($ && i) || (!d.length && !p.input)) && (c = !0),
							!g.store.state.input && (H || U) && (J?.length && (c = !0), m?.length && (x = !0)),
							(0, D.P)(['.ss__terms-list', '.ss__terms-list__row'], '.ss__terms-list__separator');
						const C = (r) => {
							if (typeof r != 'string') return (0, t.Y)('div', { className: 'ss__terms-list__row', children: r?.map((N) => C(N)) });
							if (r == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
							if (r == 'History' && c)
								return (0, t.Y)(K.i, {
									internalClassName: 'ss__terms-list__terms--history',
									title: I,
									terms: J,
									controller: g,
									name: 'history',
									limit: g.config.settings?.history?.limit,
									...Z.terms,
								});
							if (r == 'Trending' && x)
								return (0, t.Y)(K.i, {
									internalClassName: 'ss__terms-list__terms--trending',
									title: y,
									terms: m,
									controller: g,
									name: 'trending',
									limit: g.config.settings?.trending?.limit,
									...Z.terms,
								});
							if (r == 'Suggestions')
								return (0, t.Y)(K.i, {
									internalClassName: 'ss__terms-list__terms--suggestions',
									title: v,
									terms: ee,
									controller: g,
									name: 'suggestions',
									...Z.terms,
								});
						};
						return O?.length
							? (0, t.Y)(s._, { children: (0, t.Y)('div', { ...u, className: a()('ss__terms-list', B, X), children: O?.map((r) => C(r)) }) })
							: (0, t.Y)(A.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(q, W, e) {
				e.d(W, { o: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					n = e.n(o),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/createImpressionObserver.ts');
				const S = { ResultTracker: () => (0, A.AH)({}) },
					T = (0, E.PA)((z) => {
						const K = (0, a.u)(),
							D = (0, s.v6)('resultTracker', K, {}, z),
							F = { impression: !0, click: !0 },
							{ children: G, result: M, track: V, controller: L, className: h, internalClassName: O, disableStyles: I, style: y } = D,
							v = { ...F, ...V },
							{ ref: $, inViewport: Y } = (0, _.Q)();
						Y && v.impression && L?.track.product.impression(M);
						const b = {};
						return (
							I ? y && (b.css = [y]) : (b.css = [S.ResultTracker(), y]),
							(0, t.Y)('div', {
								className: n()('ss__result-tracker', `ss__${L?.type}-result-tracker`, h, O),
								onClick: (P) => {
									v.click && L?.track.product.click(P, M);
								},
								ref: $,
								...b,
								children: G,
							})
						);
					});
			},
			'./components/src/hooks/useCreateController.tsx'(q, W, e) {
				e.d(W, { i: () => A });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const A = (E, o, n) => {
					const [a, s] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							E.getController(n.id)
								.then((_) => {
									s(_);
								})
								.catch(() => {
									E.createController(o, n).then((_) => {
										s(_);
									});
								});
						}, []),
						a
					);
				};
			},
			'../../node_modules/dequal/dist/index.mjs'(q, W, e) {
				e.d(W, { j: () => E });
				var t = Object.prototype.hasOwnProperty;
				function A(o, n, a) {
					for (a of o.keys()) if (E(a, n)) return a;
				}
				function E(o, n) {
					var a, s, _;
					if (o === n) return !0;
					if (o && n && (a = o.constructor) === n.constructor) {
						if (a === Date) return o.getTime() === n.getTime();
						if (a === RegExp) return o.toString() === n.toString();
						if (a === Array) {
							if ((s = o.length) === n.length) for (; s-- && E(o[s], n[s]); );
							return s === -1;
						}
						if (a === Set) {
							if (o.size !== n.size) return !1;
							for (s of o) if (((_ = s), (_ && typeof _ == 'object' && ((_ = A(n, _)), !_)) || !n.has(_))) return !1;
							return !0;
						}
						if (a === Map) {
							if (o.size !== n.size) return !1;
							for (s of o) if (((_ = s[0]), (_ && typeof _ == 'object' && ((_ = A(n, _)), !_)) || !E(s[1], n.get(_)))) return !1;
							return !0;
						}
						if (a === ArrayBuffer) (o = new Uint8Array(o)), (n = new Uint8Array(n));
						else if (a === DataView) {
							if ((s = o.byteLength) === n.byteLength) for (; s-- && o.getInt8(s) === n.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((s = o.byteLength) === n.byteLength) for (; s-- && o[s] === n[s]; );
							return s === -1;
						}
						if (!a || typeof o == 'object') {
							s = 0;
							for (a in o) if ((t.call(o, a) && ++s && !t.call(n, a)) || !(a in n) || !E(o[a], n[a])) return !1;
							return Object.keys(n).length === s;
						}
					}
					return o !== o && n !== n;
				}
			},
		},
	]);
})();
