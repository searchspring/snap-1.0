'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9518],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'(Ve, he, n) {
				n.d(he, { j: () => Ae });
				var e = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					fe = n('../../node_modules/preact/dist/preact.module.js'),
					ge = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ve = n('../../node_modules/mobx-react-lite/es/index.js'),
					ye = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Ee = n('../../node_modules/classnames/index.js'),
					g = n.n(Ee),
					xe = n('../../node_modules/deepmerge/dist/cjs.js'),
					M = n.n(xe),
					N = n('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					Te = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					Oe = n('./components/src/components/Organisms/Results/Results.tsx'),
					K = n('./components/src/components/Atoms/Banner/Banner.tsx'),
					De = n('./components/src/components/Organisms/Facets/Facets.tsx'),
					C = n('./components/src/utilities/cloneWithProps.tsx'),
					S = n('./components/src/utilities/defined.ts'),
					Pe = n('./components/src/utilities/mergeProps.ts'),
					Me = n('./components/src/utilities/mergeStyles.ts'),
					k = n('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					Ce = n('./components/src/providers/cache.tsx'),
					be = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Ye = n('./components/src/types.ts'),
					Be = n('./components/src/hooks/useDisplaySettings.tsx'),
					oe = n('./components/src/hooks/useA11y.tsx'),
					U = n('./components/src/hooks/useLang.tsx');
				const Le = ({
						hideFacets: i,
						horizontalTerms: a,
						controller: d,
						input: s,
						contentSlot: v,
						viewportMaxHeight: E,
						vertical: l,
						width: A,
						theme: c,
					}) => {
						let R = 0;
						if (s) {
							let F;
							typeof s == 'string' ? (F = document.querySelector(s)) : (F = s), (R = F?.getBoundingClientRect()?.bottom || 0);
						}
						const $ = !!(d.store.search?.query?.string && d.store.results.length === 0);
						return (0, ye.AH)({
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							display: 'flex',
							flexDirection: l ? 'column' : 'row',
							flexWrap: a && !l ? 'wrap' : void 0,
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							width: A,
							maxWidth: '100vw',
							maxHeight: E && R ? `calc(100vh - ${R + 10}px)` : void 0,
							overflowY: E && a && !l ? 'scroll' : void 0,
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'&.ss__autocomplete--only-terms': { width: `${l || a || v ? A : '150px'}` },
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
											a: { fontWeight: 'bold', color: c?.variables?.colors?.primary },
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
								margin: $ ? '0 auto' : void 0,
								padding: l ? '10px 20px' : '10px',
								'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
								'.ss__banner.ss__banner--footer': { margin: '10px 0' },
								'.ss__autocomplete__content__results': { minHeight: '0%' },
								'.ss__autocomplete__content__info': {
									padding: '10px',
									textAlign: $ ? 'center' : 'right',
									a: { fontWeight: 'bold', color: c?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
								},
							},
						});
					},
					Ae = (0, ve.PA)((i) => {
						const a = (0, be.u)(),
							d = {
								termsTitle: '',
								trendingTitle: 'Popular Searches',
								historyTitle: 'Previously Searched',
								facetsTitle: '',
								contentTitle: '',
								width: '100%',
							};
						let s = (0, Pe.v6)('autocomplete', a, d, i);
						const v = (0, k.l)(),
							E = (t) => {
								i.onFacetOptionClick && i.onFacetOptionClick(t), o?.setFocused && o?.setFocused();
							},
							l = (t) => {
								i.onTermClick && i.onTermClick(t), o?.setFocused && o?.setFocused();
							},
							A = {
								components: {
									facet: { valueProps: v, previewOnFocus: !0 },
									facetGridOptions: { onClick: E },
									facetHierarchyOptions: { onClick: E },
									facetListOptions: { onClick: E },
									facetPaletteOptions: { onClick: E },
								},
							};
						if (a?.name) s.theme = M().all([A, s?.theme || {}], { arrayMerge: (t, r) => r });
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
								r = (0, Be.X)(s.breakpoints) || {},
								D = M().all([t, A, s?.theme || {}, r?.theme || {}], { arrayMerge: (L, P) => P });
							s = { ...s, ...r, theme: D };
						}
						let c = s.input;
						c && typeof c == 'string' && (c = document.querySelector(c));
						const {
								hideTerms: R,
								hideFacets: $,
								hideContent: F,
								hideBanners: b,
								hideLink: Fe,
								hideHistory: X,
								hideTrending: ne,
								retainTrending: Ie,
								retainHistory: We,
								vertical: Z,
								termsTitle: H,
								trendingTitle: w,
								historyTitle: G,
								facetsTitle: J,
								contentTitle: z,
								termsSlot: q,
								facetsSlot: le,
								contentSlot: ie,
								resultsSlot: ae,
								noResultsSlot: re,
								linkSlot: ce,
								resultComponent: Ne,
								onTermClick: Ke,
								seeMoreButtonText: Q,
								disableStyles: V,
								className: Se,
								internalClassName: ke,
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
									resultComponent: Ne,
									...(0, S.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, S.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
							},
							{
								search: p,
								terms: Y,
								trending: y,
								results: _,
								merchandising: T,
								pagination: I,
								loaded: Ue,
								filters: ee,
								facets: _e,
								state: h,
								loading: je,
							} = o.store,
							f = o.store.history || [];
						o &&
							typeof c == 'string' &&
							((c = document.querySelector(c)),
							(0, ge.vJ)(() => {
								o.bind();
							}, []));
						const $e = c === h.focusedInput && (Y.length > 0 || y?.length > 0 || f?.length > 0 || (h.input && o.store.loaded)),
							ue = y?.filter((t) => t.active).pop(),
							me = f?.filter((t) => t.active).pop();
						let B = !1;
						y?.length && ((Ie && o.store.loaded) || (!_.length && !h.input)) && (B = !0);
						let te = !1;
						f?.length && ((We && o.store.loaded) || (!_.length && !h.input)) && (te = !0),
							!h.input && (me || ue) && (f?.length && (te = !0), y?.length && (B = !0));
						const se = _e.length ? _e.filter((t) => t.display !== Ye.Q.SLIDER) : [],
							He = (y?.length || f.length) && !Ue && !je;
						let de = !!(_.length > 0 || Object.keys(T.content).length > 0 || p?.query?.string);
						((ne && ue) || (X && me)) && (de = !1);
						const we = !!(p?.query?.string && _.length === 0),
							Ge = (0, Me.Z)(s, Le),
							pe = () => {
								o.setFocused();
							},
							Je = Q
								? typeof Q == 'function'
									? Q(o)
									: Q
								: `See ${I.totalResults} ${ee.length > 0 ? 'filtered' : ''} result${I.totalResults == 1 ? '' : 's'} for "${p.query?.string}"`,
							Qe = {
								trendingTitle: { value: w },
								termsTitle: { value: H },
								contentTitle: { value: z },
								historyTitle: { value: G },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: J },
								noResultsText: {
									value: `<p>No results found for "${p.originalQuery?.string || p.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: { value: Je },
							},
							O = M()(Qe, s.lang || {}),
							m = (0, U.u)(O, { controller: o });
						return $e
							? (0, e.Y)(Ce._, {
									children: (0, e.FD)('div', {
										...Ge,
										className: g()('ss__autocomplete', Se, ke, {
											'ss__autocomplete--only-terms': He,
											'ss__autocomplete--vertical': Z,
											'ss__autocomplete--no-results': we,
										}),
										onClick: (t) => t.stopPropagation(),
										ref: (t) => (0, oe.iy)(t, 0, !0, pe),
										children: [
											(0, e.Y)('span', {
												role: 'link',
												ref: (t) => (0, oe.iy)(t),
												onClick: () => pe(),
												className: 'ss__autocomplete__close-button',
												style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
												...m.closeButton?.all,
											}),
											!R &&
												(B || Y.length > 0 || q || (!X && f.length > 0)) &&
												(0, e.Y)('div', {
													className: g()('ss__autocomplete__terms', { 'ss__autocomplete__terms-trending': B }),
													children: q
														? (0, C.Y)(q, {
																terms: Y,
																trending: y,
																termsTitle: H,
																trendingTitle: w,
																showTrending: B,
																history: f,
																historyTitle: G,
																valueProps: v,
																emIfy: j,
																onTermClick: Ke,
																controller: o,
																treePath: u,
														  })
														: (0, e.FD)(e.FK, {
																children: [
																	Y.length > 0
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__suggestions',
																				children: [
																					H || O.termsTitle.value
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
																							const D = {
																									suggestionsTerm: { attributes: { 'aria-label': `item ${r + 1} of ${Y.length}, ${t.value}` } },
																								},
																								L = M()(D, s.lang || {}),
																								P = (0, U.u)(L, { controller: o, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (W) => l(W),
																									href: t.url.href,
																									...(0, k.l)(t.preview),
																									role: 'link',
																									...P.suggestionsTerm?.all,
																									children: j(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	B && !ne
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__trending',
																				children: [
																					w || O.trendingTitle.value
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
																							const D = {
																									trendingTerm: { attributes: { 'aria-label': `item ${r + 1} of ${y.length}, ${t.value}` } },
																								},
																								L = M()(D, s.lang || {}),
																								P = (0, U.u)(L, { controller: o, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (W) => l(W),
																									href: t.url.href,
																									...(0, k.l)(t.preview),
																									role: 'link',
																									...P.trendingTerm?.all,
																									children: j(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	te && !X
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__history',
																				children: [
																					G || O.historyTitle.value
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
																							const D = { historyTerm: { attributes: { 'aria-label': `item ${r + 1} of ${f.length}, ${t.value}` } } },
																								L = M()(D, s.lang || {}),
																								P = (0, U.u)(L, { controller: o, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (W) => l(W),
																									href: t.url.href,
																									...(0, k.l)(t.preview),
																									role: 'link',
																									...P.historyTerm?.all,
																									children: j(t.value, h.input || ''),
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
											!$ &&
												(le
													? (0, e.Y)('div', {
															className: 'ss__autocomplete__facets',
															children: (0, C.Y)(le, {
																facets: se,
																merchandising: T,
																facetsTitle: J,
																hideBanners: b,
																controller: o,
																valueProps: v,
																treePath: u,
															}),
													  })
													: se.length > 0 &&
													  (0, e.FD)(e.FK, {
															children: [
																(J || O.facetsTitle.value) && Z
																	? (0, e.Y)('div', {
																			className: g()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																			children: (0, e.Y)('h5', { ...m.facetsTitle?.all }),
																	  })
																	: null,
																(0, e.FD)('div', {
																	className: 'ss__autocomplete__facets',
																	children: [
																		(J || O.facetsTitle.value) && !Z
																			? (0, e.Y)('div', {
																					className: g()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																					children: (0, e.Y)('h5', { ...m.facetsTitle?.all }),
																			  })
																			: null,
																		(0, e.Y)(De.J, { ...x.facets, facets: se }),
																		b ? null : (0, e.Y)(K.l, { ...x.banner, content: T.content, type: N.c.LEFT, name: 'left' }),
																	],
																}),
															],
													  })),
											F
												? null
												: ie
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, C.Y)(ie, {
															results: _,
															merchandising: T,
															search: p,
															pagination: I,
															filters: ee,
															controller: o,
															treePath: u,
														}),
												  })
												: de
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, e.FD)(e.FK, {
															children: [
																b ? null : (0, e.Y)(K.l, { ...x.banner, content: T.content, type: N.c.HEADER, name: 'header' }),
																b ? null : (0, e.Y)(K.l, { ...x.banner, content: T.content, type: N.c.BANNER, name: 'banner' }),
																_.length > 0
																	? (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__results',
																			children: ae
																				? (0, C.Y)(ae, { results: _, contentTitle: z, controller: o, treePath: u })
																				: (0, e.FD)(e.FK, {
																						children: [
																							(z || O.contentTitle.value) && _.length > 0
																								? (0, e.Y)('div', {
																										className: g()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																										children: (0, e.Y)('h5', { ...m.contentTitle?.all }),
																								  })
																								: null,
																							(0, e.Y)(Oe.n, { results: _, ...x.results, controller: o }),
																						],
																				  }),
																	  })
																	: (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__no-results',
																			children: re
																				? (0, C.Y)(re, { search: p, pagination: I, controller: o, treePath: u })
																				: (0, e.Y)('div', { ...m.noResultsText?.all }),
																	  }),
																b ? null : (0, e.Y)(K.l, { ...x.banner, content: T.content, type: N.c.FOOTER, name: 'footer' }),
																Fe
																	? null
																	: ce
																	? (0, C.Y)(ce, { search: p, results: _, pagination: I, filters: ee, controller: o, treePath: u })
																	: p?.query?.string && _.length > 0
																	? (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__info',
																			children: (0, e.FD)('a', {
																				href: h.url.href,
																				onClick: () => o?.setFocused && o.setFocused(),
																				...m.seeMoreButton.attributes,
																				children: [(0, e.Y)('span', { ...m.seeMoreButton.value }), (0, e.Y)(Te.I, { ...x.icon })],
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
							: (0, e.Y)(fe.FK, {});
					}),
					j = (i, a) => {
						if (i && a) {
							const d = i.match(Re(a));
							if (a && i && d && typeof d.index == 'number') {
								const s = i.slice(0, d.index),
									v = i.slice(d.index + a.length, i.length);
								return (0, e.FD)(e.FK, { children: [s ? (0, e.Y)('em', { children: s }) : '', a, v ? (0, e.Y)('em', { children: v }) : ''] });
							}
						}
						return (0, e.Y)(e.FK, { children: (0, e.Y)('em', { children: i }) });
					},
					Re = (i) => i?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			},
		},
	]);
})();
