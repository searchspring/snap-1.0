'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2656],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(te, K, e) {
				e.d(K, { _: () => V });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					n = e('./components/src/providers/cache.tsx'),
					r = e('./components/src/providers/controller.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/withTracking.tsx'),
					p = e('./components/src/providers/treePath.tsx'),
					H = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useA11y.tsx'),
					b = e('./components/src/types.ts'),
					C = e('../../node_modules/mobx-react-lite/es/index.js');
				const T = ({ width: $ }) =>
						(0, O.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: $,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					V = (0, r.Bk)(
						(0, i.W)(
							(0, C.PA)(($) => {
								const w = (0, l.u)(),
									f = (0, p.LU)(),
									A = { layout: b.V.grid, width: 'auto', treePath: f },
									S = (0, H.v6)('inlineBanner', w, A, $),
									{ banner: M, className: L, internalClassName: N, disableA11y: Z, layout: g, onClick: B } = S,
									q = (0, F.Z)(S, T);
								return M && M.value
									? (0, t.Y)(n._, {
											children: (0, t.Y)('div', {
												onClick: (z) => {
													B && B(z, M);
												},
												role: 'article',
												ref: (z) => {
													Z || (0, h.iy)(z), ($.trackingRef.current = z);
												},
												className: o()('ss__inline-banner', `ss__inline-banner--${g}`, L, N),
												...q,
												dangerouslySetInnerHTML: { __html: M.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(te, K, e) {
				e.d(K, { i: () => w });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					n = e.n(o),
					r = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useLang.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(b);
				const T = ({ vertical: f, theme: A }) =>
						(0, u.AH)({
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
								flexDirection: f ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: A?.variables?.colors?.primary } },
								},
							},
						}),
					V = (f) => f?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					$ = (f, A) => {
						if (f && A) {
							const S = f.match(V(A));
							if (A && f && S && typeof S.index == 'number') {
								const M = f.slice(0, S.index),
									L = f.slice(S.index + A.length, f.length);
								return `${M ? `<em>${M}</em>` : ''}${A}${L ? `<em>${L}</em>` : ''}`;
							}
						}
						return `<em>${f}</em>`;
					},
					w = (0, O.PA)((f) => {
						const A = (0, l.u)(),
							M = { vertical: !0, previewOnHover: !0, treePath: (0, i.LU)() },
							L = (0, H.v6)('terms', A, M, f),
							{ title: N, onTermClick: Z, limit: g, previewOnHover: B, emIfy: q, className: z, internalClassName: oe, controller: c } = L,
							Q = c?.store?.state?.input,
							d = L.terms,
							U = (0, F.Z)(L, T),
							J = (m, x) => {
								Z && Z(m, x), c?.setFocused && c?.setFocused();
							},
							s = g ? d?.slice(0, g) : d,
							R = { title: { value: N } },
							I = C()(R, L.lang || {}),
							P = (0, h.u)({ title: I.title }, { controller: c });
						return s?.length
							? (0, t.Y)(r._, {
									children: (0, t.FD)('div', {
										...U,
										className: n()('ss__terms', z, oe),
										children: [
											N ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...P.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': N,
												children: s?.map((m, x) => {
													const Y = {
															term: {
																value: `${q ? $(m.value, Q || '') : m.value}`,
																attributes: { 'aria-label': `${N || ''} item ${x + 1} of ${s.length}, ${m.value}` },
															},
														},
														_ = C()(Y, L.lang || {}),
														D = (0, h.u)({ term: _.term }, { index: x, numberOfTerms: s.length, term: m });
													return (0, t.Y)('li', {
														className: n()('ss__terms__option', { 'ss__terms__option--active': m.active }),
														children: (0, t.Y)('a', { onClick: (X) => J(X, m), href: m.url.href, ...(B ? (0, p.l)(m.preview) : {}), ...D.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(te, K, e) {
				e.d(K, { h: () => Q });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					r = e.n(n),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(l),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					H = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					F = e('./components/src/components/Organisms/Results/Results.tsx'),
					h = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					b = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					C = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/defined.ts'),
					V = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/cache.tsx'),
					A = e('./components/src/types.ts'),
					S = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useA11y.tsx'),
					L = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					N = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					Z = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx'),
					B = e('./components/src/providers/snap.tsx'),
					q = e('./components/src/hooks/useCreateController.tsx'),
					z = e('./components/src/hooks/useComponent.tsx');
				function oe(d, U) {
					let J, s, R;
					if (d?.recommendation?.enabled) {
						const P = d?.recommendation?.component || 'RecommendationGrid',
							m = (0, B.uk)();
						if (m?.templates) {
							const x = U?.name;
							let Y;
							x && (Y = m?.templates?.config.theme?.resultComponent);
							const _ = d?.recommendation?.resultComponent || Y,
								D = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, d.recommendation.config);
							(D.id = D.id || `search-${D.tag}`),
								(R = (0, q.i)(m, 'recommendation', D)),
								!R?.store?.loaded && !R?.store?.loading && R?.store.error?.type !== 'error' && R?.search(),
								_ && m?.templates?.library.import.component.result && (s = (0, z.x)(m?.templates?.library.import.component.result, _)),
								P &&
									m?.templates?.library.import.component.recommendation.default &&
									(J = (0, z.x)(m?.templates?.library.import.component.recommendation.default, P));
						}
					}
					return { RecommendationTemplateComponent: J, RecommendationTemplateResultComponent: s, recsController: R };
				}
				const c = ({ controller: d, input: U, viewportMaxHeight: J, width: s, theme: R, column1: I, column2: P, column3: m, column4: x }) => {
						let Y = 0;
						if (U) {
							let D;
							typeof U == 'string' ? (D = document.querySelector(U)) : (D = U), (Y = D?.getBoundingClientRect()?.bottom || 0);
						}
						const _ = !!(d.store.search?.query?.string && d.store.results.length === 0);
						return (0, o.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: I?.width == 'auto' ? '1 1 auto' : `1 0 ${I?.width}`,
								maxWidth: I?.width == 'auto' ? 'auto' : I?.width,
								alignContent: I?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: P?.width == 'auto' ? '1 1 auto' : `1 0 ${P?.width}`,
								maxWidth: P?.width == 'auto' ? 'auto' : P?.width,
								alignContent: P?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: m?.width == 'auto' ? '1 1 auto' : `1 0 ${m?.width}`,
								maxWidth: m?.width == 'auto' ? 'auto' : m?.width,
								alignContent: m?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: x?.width == 'auto' ? '1 1 auto' : `1 0 ${x?.width}`,
								maxWidth: x?.width == 'auto' ? 'auto' : x?.width,
								alignContent: x?.alignContent,
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
							maxWidth: s,
							maxHeight: J && Y ? `calc(100vh - ${Y + 10}px)` : void 0,
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
								margin: _ ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: _ ? 'center' : 'right',
								a: { fontWeight: 'bold', color: R?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					Q = (0, u.PA)((d) => {
						const U = (0, w.u)(),
							J = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let s = (0, C.v6)('autocompleteLayout', U, J, d);
						delete s.treePath, s.layout == 'terms' && (s.templates = { recommendation: { enabled: !1 } });
						const R = (0, $.l)(),
							I = () => {
								v?.setFocused && v?.setFocused();
							},
							P = {
								components: {
									facet: { valueProps: R },
									facetGridOptions: { onClick: I },
									facetHierarchyOptions: { onClick: I },
									facetListOptions: { onClick: I },
									facetPaletteOptions: { onClick: I },
								},
							};
						if (U?.name) s.theme = i().all([P, s?.theme || {}], { arrayMerge: (a, y) => y });
						else {
							const a = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								y = i().all([a, P, s?.theme || {}], { arrayMerge: (ee, E) => E });
							s = { ...s, theme: y };
						}
						let m = s.input;
						m && typeof m == 'string' && (m = document.querySelector(m));
						const {
							facetsTitle: x,
							contentTitle: Y,
							column1: _,
							column2: D,
							column3: X,
							column4: W,
							onReset: ce,
							excludeBanners: ae,
							resultComponent: me,
							templates: fe,
							disableStyles: se,
							className: Be,
							internalClassName: Ie,
							controller: v,
						} = s;
						let _e = s.layout;
						const j = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										v?.setFocused && v.setFocused(), (window.location.href = ye.url.href);
									},
									name: 'see-more',
									...(0, T.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: d.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(s.layout == 'terms' || s.layout == 'mini'),
									controller: v,
									...(0, T.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: d.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(s.layout == 'terms' || s.layout == 'mini'),
									controller: v,
									...(0, T.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: d.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, T.s)({ disableStyles: se }), theme: s.theme, treePath: d.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, T.s)({ disableStyles: se }), theme: s.theme, treePath: d.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, T.s)({ disableStyles: se }), theme: s.theme, treePath: d.treePath },
								results: {
									columns: 3,
									rows: 2,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: me,
									...(0, T.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: d.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, T.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: d.treePath,
								},
							},
							{
								search: ue,
								terms: Ee,
								trending: de,
								results: re,
								merchandising: k,
								pagination: Oe,
								filters: We,
								facets: Ce,
								state: ye,
								loading: De,
								loaded: Te,
							} = v.store,
							pe = v.store.history || [];
						v &&
							typeof m == 'string' &&
							((m = document.querySelector(m)),
							(0, O.vJ)(() => {
								v.bind();
							}, []));
						const Ue = m === ye.focusedInput && (Ee.length > 0 || de?.length > 0 || pe?.length > 0 || (ye.input && v.store.loaded)),
							Me = () => !!(re.length > 0 || Object.keys(k.content).length > 0 || ue?.query?.string || De),
							[Pe, Re] = (0, O.J0)(Me()),
							Ae = () => {
								const a = de?.filter((ee) => ee.active).pop(),
									y = pe?.filter((ee) => ee.active).pop();
								a || y || Me() ? Re(!0) : Re(!1);
							};
						(0, O.vJ)(() => {
							Ae();
						}, [de, pe]);
						const ge = Ce.length ? Ce.filter((a) => a.display !== A.Q.SLIDER) : [];
						Ae();
						const je = (0, V.Z)(s, c),
							Le = () => {
								v.setFocused(), ce && ce();
							},
							Ke = {
								contentTitle: { value: Y },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: x },
								noResultsText: {
									value: `<p>No results found for "${ue.originalQuery?.string || ue.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${Oe.totalResults} ${We.length > 0 ? 'filtered' : ''} result${Oe.totalResults == 1 ? '' : 's'} for "${
										ue.query?.string
									}"`,
								},
							},
							ve = i()(Ke, s.lang || {}),
							ne = (0, S.u)(ve, { controller: v });
						let le, he, xe;
						const Ne = !!(v.store.search?.query?.string && v.store.results.length === 0);
						if (fe?.recommendation?.enabled && Ne) {
							const a = oe(fe, d.theme);
							(he = a.RecommendationTemplateComponent), (xe = a.RecommendationTemplateResultComponent), (le = a.recsController);
						}
						const ie = (a) => {
							if (typeof a != 'string') {
								const y = a?.map((E) => ie(E));
								return a.some((E, G) => E !== '_' && y[G]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: y }) : null;
							}
							if (a == 'c1' && _?.layout?.length) {
								const y = _.layout.map((E) => ie(E));
								return _.layout.some((E, G) => (Array.isArray(E) || E !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: y })
									: null;
							}
							if (a == 'c2' && D?.layout?.length) {
								const y = D.layout.map((E) => ie(E));
								return D.layout.some((E, G) => (Array.isArray(E) || E !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: y })
									: null;
							}
							if (a == 'c3' && X?.layout?.length) {
								const y = X.layout.map((E) => ie(E));
								return X.layout.some((E, G) => (Array.isArray(E) || E !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: y })
									: null;
							}
							if (a == 'c4' && W?.layout?.length) {
								const y = W.layout.map((E) => ie(E));
								return W.layout.some((E, G) => (Array.isArray(E) || E !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: y })
									: null;
							}
							if (a == 'termsList')
								return !Ee?.length && !pe?.length && !de?.length
									? null
									: (0, t.Y)('div', {
											className: r()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(L.G, { controller: v, ...j.termsList }),
									  });
							if (a == 'terms.history')
								return pe?.length
									? (0, t.Y)(N.i, {
											controller: v,
											terms: v.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: v.config.settings?.history?.limit,
											...j.terms,
											title: 'History',
									  })
									: null;
							if (a == 'terms.trending')
								return de?.length
									? (0, t.Y)(N.i, {
											controller: v,
											terms: v.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: v.config.settings?.trending?.limit,
											...j.terms,
											title: 'Trending',
									  })
									: null;
							if (a == 'terms.suggestions')
								return Ee?.length
									? (0, t.Y)(N.i, {
											controller: v,
											terms: v.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...j.terms,
											title: 'Suggestions',
									  })
									: null;
							if (a == 'facets')
								return ge.length
									? (0, t.FD)('div', {
											className: r()('ss__autocomplete__facets-wrapper'),
											children: [
												x || ve.facetsTitle.value
													? (0, t.Y)('div', {
															className: r()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ne.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(b.J, { ...j.facets, facets: ge }),
														ae ? null : (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (a == 'facetsHorizontal')
								return ge.length
									? (0, t.FD)(t.FK, {
											children: [
												x || ve.facetsTitle.value
													? (0, t.Y)('div', {
															className: r()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ne.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(Z.b, { ...j.facetsHorizontal, facets: ge }),
														ae ? null : (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (a == 'content' && Pe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										re.length > 0 || Te
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														ae ? null : (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.HEADER, name: 'header' }),
														ae ? null : (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.BANNER, name: 'banner' }),
														re.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(Y || ve.contentTitle.value) && re.length > 0
																			? (0, t.Y)('div', {
																					className: r()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...ne.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(F.n, { results: re, ...j.results, controller: v }),
																	],
															  })
															: Te
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ne.noResultsText?.all }),
																		he && le?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(he, {
																						controller: le,
																						title: le.store?.profile?.display?.templateParameters?.title,
																						resultComponent: xe,
																						name: 'noResultsRecommendations',
																						treePath: d.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														ae ? null : (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (a == 'no-results' && Pe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										re.length == 0 && !De
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ne.noResultsText?.all }),
														he && le?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(he, {
																		controller: le,
																		title: le.store?.profile?.display?.templateParameters?.title,
																		resultComponent: xe,
																		name: 'noResultsRecommendations',
																		treePath: d.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, t.Y)(t.FK, {}),
								});
							if (a == '_') return (0, t.Y)('div', { className: 'ss__autocomplete__separator' });
							if (a == 'banner.banner') return (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.BANNER, name: 'banner' });
							if (a == 'banner.footer') return (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.FOOTER, name: 'footer' });
							if (a == 'banner.header') return (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.HEADER, name: 'header' });
							if (a == 'banner.left') return (0, t.Y)(h.l, { ...j.banner, content: k.content, type: p.c.LEFT, name: 'left' });
							if (a == 'button.see-more' && Pe && ue?.query?.string && re.length > 0)
								return (0, t.FD)(g.$, {
									...j.button,
									...ne.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...ne.seeMoreButton.value }), (0, t.Y)(H.I, { ...j.icon })],
								});
						};
						return (
							typeof s.layout == 'string' &&
								(s.layout === 'terms' && (_e = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								s.layout === 'mini' && (_e = [['termsList'], ['content'], ['_', 'button.see-more']]),
								s.layout === 'standard' && (_e = [['c1', 'c2', 'c3']])),
							Ue && _e?.length
								? (0, t.Y)(f._, {
										children: (0, t.FD)('div', {
											...je,
											className: r()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': s.layout === 'terms' },
												{ 'ss__autocomplete--mini': s.layout === 'mini' },
												Be,
												Ie
											),
											onClick: (a) => a.stopPropagation(),
											ref: (a) => (0, M.iy)(a, 0, !1, Le),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (a) => (0, M.iy)(a),
													onClick: () => Le(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...ne.closeButton?.all,
												}),
												_e?.map((a) => ie(a)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(te, K, e) {
				e.d(K, { n: () => Z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					n = e.n(o),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(r),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					p = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					H = e('./components/src/components/Molecules/Result/Result.tsx'),
					F = e('./components/src/types.ts'),
					h = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/providers/cache.tsx'),
					V = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = e('./components/src/providers/withTracking.tsx'),
					w = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useDisplaySettings.tsx'),
					S = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					M = e('./components/src/hooks/useComponent.tsx');
				const L = ({ gapSize: g, columns: B }) =>
						(0, O.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: g,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${B}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / B}% - (${B - 1} * ${g} / ${B} ) )`,
								marginRight: g,
								marginBottom: g,
								[`&:nth-of-type(${B}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${B})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					N = (0, $.W)(H.Q),
					Z = (0, u.PA)((g) => {
						const B = (0, V.u)(),
							q = (0, f.LU)(),
							z = {
								0: { columns: g.columns || 1 },
								540: { columns: g.columns || 2 },
								768: { columns: g.columns || 3 },
								991: { columns: g.columns || 4 },
							},
							oe = { results: g.controller?.store?.results, columns: 4, gapSize: '20px', layout: F.V.grid, breakpoints: z, treePath: q };
						let c = (0, b.v6)('results', B, oe, g);
						if (!g.theme?.name) {
							const _ = (0, A.X)(c?.breakpoints || {}),
								D = l()(c?.theme || {}, _?.theme || {}, { arrayMerge: (X, W) => W });
							c = { ...c, ..._, theme: D };
						}
						const { disableStyles: Q, className: d, internalClassName: U, layout: J, theme: s, controller: R, treePath: I } = c;
						let { resultComponent: P } = c;
						const m = {
							result: { internalClassName: 'ss__results__result', ...(0, h.s)({ disableStyles: Q }), theme: c?.theme, treePath: I },
							inlineBanner: {
								controller: R,
								internalClassName: 'ss__results__inline-banner',
								...(0, h.s)({ disableStyles: Q }),
								theme: c?.theme,
								treePath: I,
							},
						};
						let x = c.results;
						c?.columns && c?.rows && c.columns > 0 && c.rows > 0 && (x = c.results?.slice(0, c.columns * c.rows));
						const Y = (0, C.Z)({ ...c, columns: J == F.V.list ? 1 : c.columns }, L);
						if (typeof P == 'string') {
							const _ = (0, w.uk)();
							if (_?.templates?.library.import.component.result && ((P = (0, M.x)(_?.templates?.library.import.component.result, P)), !P))
								return null;
						}
						return x?.length
							? (0, t.Y)(T._, {
									children: (0, t.Y)('div', {
										...Y,
										className: n()('ss__results', `ss__results-${c.layout}`, d, U),
										children: x.map((_) =>
											(() => {
												switch (_.type) {
													case i.c.BANNER:
														return (0, O.n)(p._, { ...m.inlineBanner, key: _.id, banner: _, layout: c.layout });
													default:
														if (P && R) {
															const D = P;
															return (0, t.Y)(S.o, {
																result: _,
																controller: R,
																children: (0, t.Y)(D, { controller: R, result: _, theme: s, treePath: I }, _.id),
															});
														} else return (0, t.Y)(N, { ...m.result, result: _, layout: c.layout, controller: R }, _.id);
												}
											})()
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(te, K, e) {
				e.d(K, { G: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					n = e.n(o),
					r = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const b = ({}) =>
						(0, u.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					C = (0, O.PA)((T) => {
						const V = (0, l.u)(),
							$ = (0, i.LU)(),
							w = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: $,
							},
							f = (0, H.v6)('termsList', V, w, T),
							{
								layout: A,
								historyTitle: S,
								verticalOptions: M,
								trendingTitle: L,
								suggestionTitle: N,
								retainHistory: Z,
								retainTrending: g,
								treePath: B,
								disableStyles: q,
								className: z,
								internalClassName: oe,
								controller: c,
							} = f,
							Q = { terms: { vertical: !!M, ...(0, p.s)({ disableStyles: q }), theme: f.theme, treePath: B } },
							d = (0, F.Z)(f, b),
							U = c?.store.history || [],
							J = c?.store.terms || [],
							s = c?.store.trending || [],
							R = s?.filter((W) => W.active).pop(),
							I = U?.filter((W) => W.active).pop(),
							{ loaded: P, results: m, state: x } = c?.store;
						let Y = !1;
						s?.length && ((g && P) || (!m.length && !x.input)) && (Y = !0);
						let _ = !1;
						U?.length && ((Z && P) || (!m.length && !x.input)) && (_ = !0),
							!c.store.state.input && (I || R) && (U?.length && (_ = !0), s?.length && (Y = !0));
						const D = (W) => {
								if (typeof W != 'string') {
									const ce = W?.map((me) => D(me));
									return W?.some((me, fe) => me !== '_' && ce[fe]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: ce }) : null;
								}
								if (W == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (W == 'History' && _)
									return (0, t.Y)(h.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: S,
										terms: U,
										controller: c,
										name: 'history',
										limit: c.config.settings?.history?.limit,
										...Q.terms,
									});
								if (W == 'Trending' && Y)
									return (0, t.Y)(h.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: L,
										terms: s,
										controller: c,
										name: 'trending',
										limit: c.config.settings?.trending?.limit,
										...Q.terms,
									});
								if (W == 'Suggestions')
									return J.length
										? (0, t.Y)(h.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: N,
												terms: J,
												controller: c,
												name: 'suggestions',
												...Q.terms,
										  })
										: null;
							},
							X = A?.map((W) => D(W));
						return X?.some(Boolean)
							? (0, t.Y)(r._, { children: (0, t.Y)('div', { ...d, className: n()('ss__terms-list', z, oe), children: X }) })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(te, K, e) {
				e.d(K, { o: () => H });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					n = e.n(o),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const p = { ResultTracker: () => (0, O.AH)({}) },
					H = (0, u.PA)((F) => {
						const h = (0, r.u)(),
							b = (0, l.v6)('resultTracker', h, {}, F),
							C = { impression: !0, click: !0 },
							{ children: T, result: V, track: $, controller: w, className: f, internalClassName: A, disableStyles: S, style: M } = b,
							L = { ...C, ...$ },
							{ ref: N, inViewport: Z } = (0, i.Q)();
						Z && L.impression && w?.track.product.impression(V);
						const g = {};
						return (
							S ? M && (g.css = [M]) : (g.css = [p.ResultTracker(), M]),
							(0, t.Y)('div', {
								className: n()('ss__result-tracker', `ss__${w?.type}-result-tracker`, f, A),
								onClick: (B) => {
									L.click && w?.track.product.click(B, V);
								},
								ref: N,
								...g,
								children: T,
							})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(te, K, e) {
				e.d(K, { x: () => O });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function O({ input: u, controller: o, renderInput: n, buttonSelector: r, renderedInputRef: l, setActive: i }) {
					const [p, H] = (0, t.J0)(u),
						[F, h] = (0, t.J0)(!1),
						b = () => {
							i && i(!0),
								setTimeout(async () => {
									F || (H(l.current), (o.config.selector = '.autocomplete__search-input input'), await o.bind(), l?.current?.focus()), h(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (n && r) {
								let C;
								typeof r == 'string' ? (C = document.querySelector(r)) : (C = r),
									C &&
										(C.addEventListener('click', (T) => {
											T.stopPropagation(), b();
										}),
										C.addEventListener('focus', () => b()),
										C.addEventListener('select', () => b()));
							} else
								i &&
									(u.addEventListener('click', (C) => {
										C.stopPropagation(), i(!0);
									}),
									u.addEventListener('focus', () => i(!0)),
									u.addEventListener('select', () => i(!0)));
						}, []),
						(0, t.vJ)(() => {
							u !== p &&
								p?.addEventListener('input', () => {
									u.value = p.value;
								});
						}, [p]),
						p
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(te, K, e) {
				e.d(K, { i: () => O });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = (u, o, n) => {
					const [r, l] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							u.getController(n.id)
								.then((i) => {
									l(i);
								})
								.catch(() => {
									u.createController(o, n).then((i) => {
										l(i);
									});
								});
						}, []),
						r
					);
				};
			},
			'../../node_modules/dequal/dist/index.mjs'(te, K, e) {
				e.d(K, { j: () => u });
				var t = Object.prototype.hasOwnProperty;
				function O(o, n, r) {
					for (r of o.keys()) if (u(r, n)) return r;
				}
				function u(o, n) {
					var r, l, i;
					if (o === n) return !0;
					if (o && n && (r = o.constructor) === n.constructor) {
						if (r === Date) return o.getTime() === n.getTime();
						if (r === RegExp) return o.toString() === n.toString();
						if (r === Array) {
							if ((l = o.length) === n.length) for (; l-- && u(o[l], n[l]); );
							return l === -1;
						}
						if (r === Set) {
							if (o.size !== n.size) return !1;
							for (l of o) if (((i = l), (i && typeof i == 'object' && ((i = O(n, i)), !i)) || !n.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== n.size) return !1;
							for (l of o) if (((i = l[0]), (i && typeof i == 'object' && ((i = O(n, i)), !i)) || !u(l[1], n.get(i)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (n = new Uint8Array(n));
						else if (r === DataView) {
							if ((l = o.byteLength) === n.byteLength) for (; l-- && o.getInt8(l) === n.getInt8(l); );
							return l === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((l = o.byteLength) === n.byteLength) for (; l-- && o[l] === n[l]; );
							return l === -1;
						}
						if (!r || typeof o == 'object') {
							l = 0;
							for (r in o) if ((t.call(o, r) && ++l && !t.call(n, r)) || !(r in n) || !u(o[r], n[r])) return !1;
							return Object.keys(n).length === l;
						}
					}
					return o !== o && n !== n;
				}
			},
		},
	]);
})();
