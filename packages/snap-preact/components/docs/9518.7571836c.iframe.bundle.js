'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9518],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'(Ze, ge, n) {
				n.d(ge, { j: () => Ie });
				var e = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					ve = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ye = n('../../node_modules/mobx-react-lite/es/index.js'),
					xe = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Ee = n('../../node_modules/classnames/index.js'),
					g = n.n(Ee),
					Te = n('../../node_modules/deepmerge/dist/cjs.js'),
					P = n.n(Te),
					W = n('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					Oe = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					De = n('./components/src/components/Organisms/Results/Results.tsx'),
					K = n('./components/src/components/Atoms/Banner/Banner.tsx'),
					Pe = n('./components/src/components/Organisms/Facets/Facets.tsx'),
					M = n('./components/src/utilities/cloneWithProps.tsx'),
					S = n('./components/src/utilities/defined.ts'),
					Me = n('./components/src/utilities/mergeProps.ts'),
					be = n('./components/src/utilities/mergeStyles.ts'),
					U = n('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					Ce = n('./components/src/providers/cache.tsx'),
					Ye = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Be = n('./components/src/providers/treePath.tsx'),
					Le = n('./components/src/types.ts'),
					Ae = n('./components/src/hooks/useDisplaySettings.tsx'),
					ne = n('./components/src/hooks/useA11y.tsx'),
					k = n('./components/src/hooks/useLang.tsx');
				const Re = ({
						hideFacets: i,
						horizontalTerms: a,
						controller: v,
						input: d,
						contentSlot: s,
						viewportMaxHeight: b,
						vertical: l,
						width: C,
						theme: A,
					}) => {
						let c = 0;
						if (d) {
							let R;
							typeof d == 'string' ? (R = document.querySelector(d)) : (R = d), (c = R?.getBoundingClientRect()?.bottom || 0);
						}
						const j = !!(v.store.search?.query?.string && v.store.results.length === 0);
						return (0, xe.AH)({
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							display: 'flex',
							flexDirection: l ? 'column' : 'row',
							flexWrap: a && !l ? 'wrap' : void 0,
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							width: C,
							maxWidth: '100vw',
							maxHeight: b && c ? `calc(100vh - ${c + 10}px)` : void 0,
							overflowY: b && a && !l ? 'scroll' : void 0,
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'&.ss__autocomplete--only-terms': { width: `${l || a || s ? C : '150px'}` },
							'.ss__autocomplete__title--trending, .ss__autocomplete__title--history, .ss__autocomplete__title--terms': {
								fontWeight: 'normal',
								margin: 0,
								color: '#c5c5c5',
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__autocomplete__title--facets': { order: l ? 2 : void 0 },
							'.ss__autocomplete__terms': {
								display: 'flex',
								flexDirection: 'column',
								flex: '1 1 auto',
								maxWidth: `${l || a ? 'auto' : '150px'}`,
								minWidth: '150px',
								order: 1,
								background: '#f8f8f8',
								'.ss__autocomplete__terms__options': {
									display: l || a ? 'flex' : void 0,
									justifyContent: 'space-evenly',
									flexWrap: 'wrap',
									'.ss__autocomplete__terms__option': {
										flexGrow: l || a ? '1' : void 0,
										textAlign: l || a ? 'center' : void 0,
										wordBreak: 'break-all',
										a: { display: 'block', padding: l || a ? '10px 30px' : '10px', em: { fontStyle: 'normal' } },
										'&.ss__autocomplete__terms__option--active': {
											background: '#fff',
											a: { fontWeight: 'bold', color: A?.variables?.colors?.primary },
										},
									},
								},
							},
							'.ss__autocomplete__facets': {
								display: 'flex',
								flex: '0 0 150px',
								flexDirection: l ? 'row' : 'column',
								columnGap: '20px',
								order: 2,
								padding: l ? '10px 20px' : '10px',
								overflowY: l ? void 0 : 'auto',
								'.ss__facets': { display: 'flex', flexDirection: l ? 'row' : 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: `1 1 ${i ? 'auto' : '0%'}`,
								flexDirection: 'column',
								justifyContent: 'space-between',
								order: 3,
								overflowY: 'auto',
								margin: j ? '0 auto' : void 0,
								padding: l ? '10px 20px' : '10px',
								'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
								'.ss__banner.ss__banner--footer': { margin: '10px 0' },
								'.ss__autocomplete__content__results': { minHeight: '0%' },
								'.ss__autocomplete__content__info': {
									padding: '10px',
									textAlign: j ? 'center' : 'right',
									a: { fontWeight: 'bold', color: A?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
								},
							},
						});
					},
					Ie = (0, ye.PA)((i) => {
						const a = (0, Ye.u)(),
							d = {
								termsTitle: '',
								trendingTitle: 'Popular Searches',
								historyTitle: 'Previously Searched',
								facetsTitle: '',
								contentTitle: '',
								width: '100%',
								seeMoreButtonIcon: 'angle-right',
								treePath: (0, Be.LU)(),
							};
						let s = (0, Me.v6)('autocomplete', a, d, i);
						const b = (0, U.l)(),
							l = (t) => {
								i.onFacetOptionClick && i.onFacetOptionClick(t), o?.setFocused && o?.setFocused();
							},
							C = (t) => {
								i.onTermClick && i.onTermClick(t), o?.setFocused && o?.setFocused();
							},
							A = {
								components: {
									facet: { valueProps: b, previewOnFocus: !0 },
									facetGridOptions: { onClick: l },
									facetHierarchyOptions: { onClick: l },
									facetListOptions: { onClick: l },
									facetPaletteOptions: { onClick: l },
								},
							};
						if (a?.name) s.theme = P().all([A, s?.theme || {}], { arrayMerge: (t, r) => r });
						else {
							s.breakpoints = s.breakpoints || {
								0: {
									columns: 2,
									rows: 1,
									hideFacets: s.hideFacets ?? !0,
									vertical: s.vertical ?? !0,
									hideHistory: s.hideHistory ?? !0,
									hideTrending: s.hideTrending ?? !0,
								},
								540: { columns: 3, rows: 1, vertical: s.vertical ?? !0, hideHistory: s.hideHistory ?? !0, hideTrending: s.hideTrending ?? !0 },
								768: { columns: 2, rows: 3 },
							};
							const t = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								r = (0, Ae.X)(s.breakpoints) || {},
								O = P().all([t, A, s?.theme || {}, r?.theme || {}], { arrayMerge: (L, D) => D });
							s = { ...s, ...r, theme: O };
						}
						let c = s.input;
						c && typeof c == 'string' && (c = document.querySelector(c));
						const {
								hideTerms: j,
								hideFacets: R,
								hideContent: le,
								hideBanners: I,
								hideLink: Ne,
								hideHistory: X,
								hideTrending: ie,
								retainTrending: We,
								retainHistory: Ke,
								vertical: Z,
								termsTitle: H,
								trendingTitle: w,
								historyTitle: G,
								facetsTitle: J,
								contentTitle: z,
								termsSlot: q,
								facetsSlot: ae,
								contentSlot: re,
								resultsSlot: ce,
								noResultsSlot: _e,
								linkSlot: ue,
								resultComponent: Se,
								onTermClick: Ue,
								seeMoreButtonText: Q,
								seeMoreButtonIcon: ee,
								disableStyles: V,
								className: ke,
								internalClassName: $e,
								controller: o,
								treePath: u,
							} = s,
							x = {
								facets: { limit: 3, ...(0, S.s)({ disableStyles: V }), theme: s.theme, treePath: u },
								banner: {
									internalClassName: 'ss__autocomplete__banner',
									controller: o,
									...(0, S.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								results: {
									internalClassName: 'ss__autocomplete__results',
									breakpoints: s.breakpoints,
									resultComponent: Se,
									...(0, S.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								icon: { internalClassName: 'ss__autocomplete__icon', size: '10px', ...(0, S.s)({ disableStyles: V }), theme: s.theme, treePath: u },
							},
							{
								search: p,
								terms: Y,
								trending: y,
								results: _,
								merchandising: E,
								pagination: F,
								loaded: je,
								filters: te,
								facets: me,
								state: h,
								loading: He,
							} = o.store,
							f = o.store.history || [];
						o &&
							typeof c == 'string' &&
							((c = document.querySelector(c)),
							(0, ve.vJ)(() => {
								o.bind();
							}, []));
						const we = c === h.focusedInput && (Y.length > 0 || y?.length > 0 || f?.length > 0 || (h.input && o.store.loaded)),
							de = y?.filter((t) => t.active).pop(),
							pe = f?.filter((t) => t.active).pop();
						let B = !1;
						y?.length && ((We && o.store.loaded) || (!_.length && !h.input)) && (B = !0);
						let se = !1;
						f?.length && ((Ke && o.store.loaded) || (!_.length && !h.input)) && (se = !0),
							!h.input && (pe || de) && (f?.length && (se = !0), y?.length && (B = !0));
						const oe = me.length ? me.filter((t) => t.display !== Le.Q.SLIDER) : [],
							Ge = (y?.length || f.length) && !je && !He;
						let he = !!(_.length > 0 || Object.keys(E.content).length > 0 || p?.query?.string);
						((ie && de) || (X && pe)) && (he = !1);
						const Je = !!(p?.query?.string && _.length === 0),
							Qe = (0, be.Z)(s, Re),
							fe = () => {
								o.setFocused();
							},
							Ve = Q
								? typeof Q == 'function'
									? Q(o)
									: Q
								: `See ${F.totalResults} ${te.length > 0 ? 'filtered' : ''} result${F.totalResults == 1 ? '' : 's'} for "${p.query?.string}"`,
							Xe = {
								trendingTitle: { value: w },
								termsTitle: { value: H },
								contentTitle: { value: z },
								historyTitle: { value: G },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: J },
								noResultsText: {
									value: `<p>No results found for "${p.originalQuery?.string || p.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: { value: Ve },
							},
							T = P()(Xe, s.lang || {}),
							m = (0, k.u)(T, { controller: o });
						return we
							? (0, e.Y)(Ce._, {
									children: (0, e.FD)('div', {
										...Qe,
										className: g()('ss__autocomplete', ke, $e, {
											'ss__autocomplete--only-terms': Ge,
											'ss__autocomplete--vertical': Z,
											'ss__autocomplete--no-results': Je,
										}),
										onClick: (t) => t.stopPropagation(),
										ref: (t) => (0, ne.iy)(t, 0, !0, fe),
										children: [
											(0, e.Y)('span', {
												role: 'link',
												ref: (t) => (0, ne.iy)(t),
												onClick: () => fe(),
												className: 'ss__autocomplete__close-button',
												style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
												...m.closeButton?.all,
											}),
											!j &&
												(B || Y.length > 0 || q || (!X && f.length > 0)) &&
												(0, e.Y)('div', {
													className: g()('ss__autocomplete__terms', { 'ss__autocomplete__terms-trending': B }),
													children: q
														? (0, M.Y)(q, {
																terms: Y,
																trending: y,
																termsTitle: H,
																trendingTitle: w,
																showTrending: B,
																history: f,
																historyTitle: G,
																valueProps: b,
																emIfy: $,
																onTermClick: Ue,
																controller: o,
																treePath: u,
														  })
														: (0, e.FD)(e.FK, {
																children: [
																	Y.length > 0
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__suggestions',
																				children: [
																					H || T.termsTitle.value
																						? (0, e.Y)('div', {
																								className:
																									'ss__autocomplete__title ss__autocomplete__title--terms ss__autocomplete__title--suggestions',
																								children: (0, e.Y)('h5', { ...m.termsTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': H,
																						children: Y.map((t, r) => {
																							const O = {
																									suggestionsTerm: { attributes: { 'aria-label': `item ${r + 1} of ${Y.length}, ${t.value}` } },
																								},
																								L = P()(O, s.lang || {}),
																								D = (0, k.u)(L, { controller: o, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (N) => C(N),
																									href: t.url.href,
																									...(0, U.l)(t.preview),
																									role: 'link',
																									...D.suggestionsTerm?.all,
																									children: $(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	B && !ie
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__trending',
																				children: [
																					w || T.trendingTitle.value
																						? (0, e.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--trending',
																								children: (0, e.Y)('h5', { ...m.trendingTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': w,
																						children: y.map((t, r) => {
																							const O = {
																									trendingTerm: { attributes: { 'aria-label': `item ${r + 1} of ${y.length}, ${t.value}` } },
																								},
																								L = P()(O, s.lang || {}),
																								D = (0, k.u)(L, { controller: o, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (N) => C(N),
																									href: t.url.href,
																									...(0, U.l)(t.preview),
																									role: 'link',
																									...D.trendingTerm?.all,
																									children: $(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	se && !X
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__history',
																				children: [
																					G || T.historyTitle.value
																						? (0, e.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--history',
																								children: (0, e.Y)('h5', { ...m.historyTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': G,
																						children: f.map((t, r) => {
																							const O = { historyTerm: { attributes: { 'aria-label': `item ${r + 1} of ${f.length}, ${t.value}` } } },
																								L = P()(O, s.lang || {}),
																								D = (0, k.u)(L, { controller: o, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (N) => C(N),
																									href: t.url.href,
																									...(0, U.l)(t.preview),
																									role: 'link',
																									...D.historyTerm?.all,
																									children: $(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																],
														  }),
												}),
											!R &&
												(ae
													? (0, e.Y)('div', {
															className: 'ss__autocomplete__facets',
															children: (0, M.Y)(ae, {
																facets: oe,
																merchandising: E,
																facetsTitle: J,
																hideBanners: I,
																controller: o,
																valueProps: b,
																treePath: u,
															}),
													  })
													: oe.length > 0 &&
													  (0, e.FD)(e.FK, {
															children: [
																(J || T.facetsTitle.value) && Z
																	? (0, e.Y)('div', {
																			className: g()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																			children: (0, e.Y)('h5', { ...m.facetsTitle?.all }),
																	  })
																	: null,
																(0, e.FD)('div', {
																	className: 'ss__autocomplete__facets',
																	children: [
																		(J || T.facetsTitle.value) && !Z
																			? (0, e.Y)('div', {
																					className: g()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																					children: (0, e.Y)('h5', { ...m.facetsTitle?.all }),
																			  })
																			: null,
																		(0, e.Y)(Pe.J, { ...x.facets, facets: oe }),
																		I ? null : (0, e.Y)(K.l, { ...x.banner, content: E.content, type: W.c.LEFT, name: 'left' }),
																	],
																}),
															],
													  })),
											le
												? null
												: re
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, M.Y)(re, {
															results: _,
															merchandising: E,
															search: p,
															pagination: F,
															filters: te,
															controller: o,
															treePath: u,
														}),
												  })
												: he
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, e.FD)(e.FK, {
															children: [
																I ? null : (0, e.Y)(K.l, { ...x.banner, content: E.content, type: W.c.HEADER, name: 'header' }),
																I ? null : (0, e.Y)(K.l, { ...x.banner, content: E.content, type: W.c.BANNER, name: 'banner' }),
																_.length > 0
																	? (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__results',
																			children: ce
																				? (0, M.Y)(ce, { results: _, contentTitle: z, controller: o, treePath: u })
																				: (0, e.FD)(e.FK, {
																						children: [
																							(z || T.contentTitle.value) && _.length > 0
																								? (0, e.Y)('div', {
																										className: g()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																										children: (0, e.Y)('h5', { ...m.contentTitle?.all }),
																								  })
																								: null,
																							(0, e.Y)(De.n, { results: _, ...x.results, controller: o }),
																						],
																				  }),
																	  })
																	: (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__no-results',
																			children: _e
																				? (0, M.Y)(_e, { search: p, pagination: F, controller: o, treePath: u })
																				: (0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...m.noResultsText?.all }),
																	  }),
																I ? null : (0, e.Y)(K.l, { ...x.banner, content: E.content, type: W.c.FOOTER, name: 'footer' }),
																Ne
																	? null
																	: ue
																	? (0, M.Y)(ue, { search: p, results: _, pagination: F, filters: te, controller: o, treePath: u })
																	: p?.query?.string && _.length > 0
																	? (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__info',
																			children: (0, e.FD)('a', {
																				href: h.url.href,
																				onClick: () => o?.setFocused && o.setFocused(),
																				...m.seeMoreButton.attributes,
																				children: [
																					(0, e.Y)('span', { ...m.seeMoreButton.value }),
																					(0, e.Y)(Oe.I, { ...x.icon, ...(typeof ee == 'string' ? { icon: ee } : ee) }),
																				],
																			}),
																	  })
																	: null,
															],
														}),
												  })
												: null,
										],
									}),
							  })
							: null;
					}),
					$ = (i, a) => {
						if (i && a) {
							const v = i.match(Fe(a));
							if (a && i && v && typeof v.index == 'number') {
								const d = i.slice(0, v.index),
									s = i.slice(v.index + a.length, i.length);
								return (0, e.FD)(e.FK, { children: [d ? (0, e.Y)('em', { children: d }) : '', a, s ? (0, e.Y)('em', { children: s }) : ''] });
							}
						}
						return (0, e.Y)(e.FK, { children: (0, e.Y)('em', { children: i }) });
					},
					Fe = (i) => i?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			},
		},
	]);
})();
