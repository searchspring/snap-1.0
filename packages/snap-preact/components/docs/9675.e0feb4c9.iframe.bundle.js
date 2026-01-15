'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9675],
	{
		'./components/src/components/Organisms/Autocomplete/Autocomplete.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { j: () => Autocomplete });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Results__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				_Atoms_Merchandising_Banner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'
				),
				_Facets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/types.ts'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const defaultStyles = ({ hideFacets, horizontalTerms, controller, input, contentSlot, viewportMaxHeight, vertical, width, theme }) => {
					let inputViewportOffsetBottom = 0;
					if (input) {
						let elem;
						elem = 'string' == typeof input ? document.querySelector(input) : input;
						const rect = elem?.getBoundingClientRect();
						inputViewportOffsetBottom = rect?.bottom || 0;
					}
					const noResults = Boolean(controller.store.search?.query?.string && 0 === controller.store.results.length);
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
						display: 'flex',
						flexDirection: vertical ? 'column' : 'row',
						flexWrap: horizontalTerms && !vertical ? 'wrap' : void 0,
						position: 'absolute',
						zIndex: '10002',
						border: '1px solid #ebebeb',
						background: '#ffffff',
						width,
						maxWidth: '100vw',
						maxHeight: viewportMaxHeight && inputViewportOffsetBottom ? `calc(100vh - ${inputViewportOffsetBottom + 10}px)` : void 0,
						overflowY: viewportMaxHeight && horizontalTerms && !vertical ? 'scroll' : void 0,
						'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
						'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
						'&.ss__autocomplete--only-terms': { width: `${vertical || horizontalTerms || Boolean(contentSlot) ? width : '150px'}` },
						'.ss__autocomplete__title--trending, .ss__autocomplete__title--history, .ss__autocomplete__title--terms': {
							fontWeight: 'normal',
							margin: 0,
							color: '#c5c5c5',
							textTransform: 'uppercase',
							padding: '10px',
							h5: { fontSize: '.8em', margin: 0 },
						},
						'.ss__autocomplete__title--facets': { order: vertical ? 2 : void 0 },
						'.ss__autocomplete__terms': {
							display: 'flex',
							flexDirection: 'column',
							flex: '1 1 auto',
							maxWidth: '' + (vertical || horizontalTerms ? 'auto' : '150px'),
							minWidth: '150px',
							order: 1,
							background: '#f8f8f8',
							'.ss__autocomplete__terms__options': {
								display: vertical || horizontalTerms ? 'flex' : void 0,
								justifyContent: 'space-evenly',
								flexWrap: 'wrap',
								'.ss__autocomplete__terms__option': {
									flexGrow: vertical || horizontalTerms ? '1' : void 0,
									textAlign: vertical || horizontalTerms ? 'center' : void 0,
									wordBreak: 'break-all',
									a: { display: 'block', padding: vertical || horizontalTerms ? '10px 30px' : '10px', em: { fontStyle: 'normal' } },
									'&.ss__autocomplete__terms__option--active': {
										background: '#fff',
										a: { fontWeight: 'bold', color: theme?.variables?.colors?.primary },
									},
								},
							},
						},
						'.ss__autocomplete__facets': {
							display: 'flex',
							flex: '0 0 150px',
							flexDirection: vertical ? 'row' : 'column',
							columnGap: '20px',
							order: 2,
							padding: vertical ? '10px 20px' : '10px',
							overflowY: vertical ? void 0 : 'auto',
							'.ss__facets': { display: 'flex', flexDirection: vertical ? 'row' : 'column', columnGap: '20px' },
							'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
								{ paddingLeft: 0 },
							'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
							'.ss__facet-palette-options__icon': { display: 'none' },
						},
						'.ss__autocomplete__content': {
							display: 'flex',
							flex: '1 1 ' + (hideFacets ? 'auto' : '0%'),
							flexDirection: 'column',
							justifyContent: 'space-between',
							order: 3,
							overflowY: 'auto',
							margin: noResults ? '0 auto' : void 0,
							padding: vertical ? '10px 20px' : '10px',
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__content__results': { minHeight: '0%' },
							'.ss__autocomplete__content__info': {
								padding: '10px',
								textAlign: noResults ? 'center' : 'right',
								a: { fontWeight: 'bold', color: theme?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						},
					});
				},
				Autocomplete = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)();
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)(
						'autocomplete',
						globalTheme,
						{
							termsTitle: '',
							trendingTitle: 'Popular Searches',
							historyTitle: 'Previously Searched',
							facetsTitle: '',
							contentTitle: '',
							width: '100%',
						},
						properties
					);
					const valueProps = (0, _toolbox__WEBPACK_IMPORTED_MODULE_8__.l)(),
						facetClickEvent = (e) => {
							properties.onFacetOptionClick && properties.onFacetOptionClick(e), controller?.setFocused && controller?.setFocused();
						},
						termClickEvent = (e) => {
							properties.onTermClick && properties.onTermClick(e), controller?.setFocused && controller?.setFocused();
						},
						themeFunctionalityProps = {
							components: {
								facet: { valueProps, previewOnFocus: !0 },
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						};
					if (globalTheme?.name)
						props.theme = deepmerge__WEBPACK_IMPORTED_MODULE_4___default().all([themeFunctionalityProps, props?.theme || {}], {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					else {
						props.breakpoints = props.breakpoints || {
							0: {
								columns: 2,
								rows: 1,
								hideFacets: props.hideFacets ?? !0,
								vertical: props.vertical ?? !0,
								hideHistory: props.hideHistory ?? !0,
								hideTrending: props.hideTrending ?? !0,
							},
							540: {
								columns: 3,
								rows: 1,
								vertical: props.vertical ?? !0,
								hideHistory: props.hideHistory ?? !0,
								hideTrending: props.hideTrending ?? !0,
							},
							768: { columns: 2, rows: 3 },
						};
						const themeDefaults = {
								components: {
									facet: { limit: 6, disableOverflow: !0, disableCollapse: !0 },
									facetGridOptions: { columns: 3 },
									facetHierarchyOptions: { hideCount: !0 },
									facetListOptions: { hideCheckbox: !0, hideCount: !0 },
									facetPaletteOptions: { hideLabel: !0, columns: 3 },
									result: { hideBadge: !0 },
								},
							},
							displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props.breakpoints) || {},
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_4___default().all(
								[themeDefaults, themeFunctionalityProps, props?.theme || {}, displaySettings?.theme || {}],
								{ arrayMerge: (destinationArray, sourceArray) => sourceArray }
							);
						props = { ...props, ...displaySettings, theme };
					}
					let input = props.input;
					input && 'string' == typeof input && (input = document.querySelector(input));
					const {
							hideTerms,
							hideFacets,
							hideContent,
							hideBanners,
							hideLink,
							hideHistory,
							hideTrending,
							retainTrending,
							retainHistory,
							vertical,
							termsTitle,
							trendingTitle,
							historyTitle,
							facetsTitle,
							contentTitle,
							termsSlot,
							facetsSlot,
							contentSlot,
							resultsSlot,
							noResultsSlot,
							linkSlot,
							resultComponent,
							onTermClick,
							seeMoreButtonText,
							disableStyles,
							className,
							internalClassName,
							controller,
							treePath,
						} = props,
						subProps_facets = { limit: 3, ...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_banner = {
							internalClassName: 'ss__autocomplete__banner',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_results = {
							internalClassName: 'ss__autocomplete__results',
							breakpoints: props.breakpoints,
							resultComponent,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							internalClassName: 'ss__autocomplete__icon',
							icon: 'angle-right',
							size: '10px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						{ search, terms, trending, results, merchandising, pagination, loaded, filters, facets, state, loading } = controller.store,
						history = controller.store.history || [];
					controller &&
						'string' == typeof input &&
						((input = document.querySelector(input)),
						(0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.vJ)(() => {
							controller.bind();
						}, []));
					const visible =
							Boolean(input === state.focusedInput) &&
							(terms.length > 0 || trending?.length > 0 || history?.length > 0 || (state.input && controller.store.loaded)),
						trendingActive = trending?.filter((term) => term.active).pop(),
						historyActive = history?.filter((term) => term.active).pop();
					let showTrending = !1;
					trending?.length && ((retainTrending && controller.store.loaded) || (!results.length && !state.input)) && (showTrending = !0);
					let showHistory = !1;
					history?.length && ((retainHistory && controller.store.loaded) || (!results.length && !state.input)) && (showHistory = !0),
						state.input || (!historyActive && !trendingActive) || (history?.length && (showHistory = !0), trending?.length && (showTrending = !0));
					const facetsToShow = facets.length ? facets.filter((facet) => facet.display !== _types__WEBPACK_IMPORTED_MODULE_11__.Q.SLIDER) : [],
						onlyTerms = (trending?.length || history.length) && !loaded && !loading;
					let showResults = Boolean(results.length > 0 || Object.keys(merchandising.content).length > 0 || search?.query?.string);
					((hideTrending && trendingActive) || (hideHistory && historyActive)) && (showResults = !1);
					const noResults = Boolean(search?.query?.string && 0 === results.length),
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Z)(props, defaultStyles),
						reset = () => {
							controller.setFocused();
						},
						defaultSeeMoreButtonText = seeMoreButtonText
							? 'function' == typeof seeMoreButtonText
								? seeMoreButtonText(controller)
								: seeMoreButtonText
							: `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${1 == pagination.totalResults ? '' : 's'} for "${
									search.query?.string
							  }"`,
						defaultLang = {
							trendingTitle: { value: trendingTitle },
							termsTitle: { value: termsTitle },
							contentTitle: { value: contentTitle },
							historyTitle: { value: historyTitle },
							closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
							facetsTitle: { value: facetsTitle },
							noResultsText: {
								value: `<p>No results found for "${search.originalQuery?.string || search.query?.string}".</p><p>Please try another search.</p>`,
							},
							seeMoreButton: { value: defaultSeeMoreButtonText },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.u)(lang, { controller });
					return visible
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_providers__WEBPACK_IMPORTED_MODULE_15__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete', className, internalClassName, {
										'ss__autocomplete--only-terms': onlyTerms,
										'ss__autocomplete--vertical': vertical,
										'ss__autocomplete--no-results': noResults,
									}),
									onClick: (e) => e.stopPropagation(),
									ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_16__.iy)(e, 0, !0, reset),
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('span', {
											role: 'link',
											ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_16__.iy)(e),
											onClick: () => reset(),
											className: 'ss__autocomplete__close-button',
											style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
											...mergedLang.closeButton?.all,
										}),
										!hideTerms &&
											(showTrending || terms.length > 0 || termsSlot || (!hideHistory && history.length > 0)) &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete__terms', {
													'ss__autocomplete__terms-trending': showTrending,
												}),
												children: termsSlot
													? (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(termsSlot, {
															terms,
															trending,
															termsTitle,
															trendingTitle,
															showTrending,
															history,
															historyTitle,
															valueProps,
															emIfy,
															onTermClick,
															controller,
															treePath,
													  })
													: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)(
															_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FK,
															{
																children: [
																	terms.length > 0
																		? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('div', {
																				className: 'ss__autocomplete__terms__suggestions',
																				children: [
																					termsTitle || lang.termsTitle.value
																						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																								className:
																									'ss__autocomplete__title ss__autocomplete__title--terms ss__autocomplete__title--suggestions',
																								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('h5', {
																									...mergedLang.termsTitle?.all,
																								}),
																						  })
																						: null,
																					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': termsTitle,
																						children: terms.map((term, idx) => {
																							const defaultLang = {
																									suggestionsTerm: {
																										attributes: { 'aria-label': `item ${idx + 1} of ${terms.length}, ${term.value}` },
																									},
																								},
																								suggestionLang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
																								suggestionTermLangObj = (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.u)(suggestionLang, {
																									controller,
																									term,
																									index: idx,
																								});
																							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																								className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': term.active,
																								}),
																								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('a', {
																									onClick: (e) => termClickEvent(e),
																									href: term.url.href,
																									...(0, _toolbox__WEBPACK_IMPORTED_MODULE_8__.l)(term.preview),
																									role: 'link',
																									...suggestionTermLangObj.suggestionsTerm?.all,
																									children: emIfy(term.value, state.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	showTrending && !hideTrending
																		? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('div', {
																				className: 'ss__autocomplete__terms__trending',
																				children: [
																					trendingTitle || lang.trendingTitle.value
																						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--trending',
																								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('h5', {
																									...mergedLang.trendingTitle?.all,
																								}),
																						  })
																						: null,
																					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': trendingTitle,
																						children: trending.map((term, idx) => {
																							const defaultLang = {
																									trendingTerm: {
																										attributes: { 'aria-label': `item ${idx + 1} of ${trending.length}, ${term.value}` },
																									},
																								},
																								trendingLang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
																								trendingTermLangObj = (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.u)(trendingLang, {
																									controller,
																									term,
																									index: idx,
																								});
																							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																								className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': term.active,
																								}),
																								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('a', {
																									onClick: (e) => termClickEvent(e),
																									href: term.url.href,
																									...(0, _toolbox__WEBPACK_IMPORTED_MODULE_8__.l)(term.preview),
																									role: 'link',
																									...trendingTermLangObj.trendingTerm?.all,
																									children: emIfy(term.value, state.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	showHistory && !hideHistory
																		? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('div', {
																				className: 'ss__autocomplete__terms__history',
																				children: [
																					historyTitle || lang.historyTitle.value
																						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--history',
																								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('h5', {
																									...mergedLang.historyTitle?.all,
																								}),
																						  })
																						: null,
																					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': historyTitle,
																						children: history.map((term, idx) => {
																							const defaultLang = {
																									historyTerm: {
																										attributes: { 'aria-label': `item ${idx + 1} of ${history.length}, ${term.value}` },
																									},
																								},
																								historyLang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
																								historyTermLangObj = (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.u)(historyLang, {
																									controller,
																									term,
																									index: idx,
																								});
																							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																								className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': term.active,
																								}),
																								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('a', {
																									onClick: (e) => termClickEvent(e),
																									href: term.url.href,
																									...(0, _toolbox__WEBPACK_IMPORTED_MODULE_8__.l)(term.preview),
																									role: 'link',
																									...historyTermLangObj.historyTerm?.all,
																									children: emIfy(term.value, state.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																],
															}
													  ),
											}),
										!hideFacets &&
											(facetsSlot
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
														className: 'ss__autocomplete__facets',
														children: (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(facetsSlot, {
															facets: facetsToShow,
															merchandising,
															facetsTitle,
															hideBanners,
															controller,
															valueProps,
															treePath,
														}),
												  })
												: facetsToShow.length > 0 &&
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FK,
														{
															children: [
																(facetsTitle || lang.facetsTitle.value) && vertical
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																			className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
																				'ss__autocomplete__title',
																				'ss__autocomplete__title--facets'
																			),
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('h5', {
																				...mergedLang.facetsTitle?.all,
																			}),
																	  })
																	: null,
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('div', {
																	className: 'ss__autocomplete__facets',
																	children: [
																		(!facetsTitle && !lang.facetsTitle.value) || vertical
																			? null
																			: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																					className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
																						'ss__autocomplete__title',
																						'ss__autocomplete__title--facets'
																					),
																					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('h5', {
																						...mergedLang.facetsTitle?.all,
																					}),
																			  }),
																		(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_Facets__WEBPACK_IMPORTED_MODULE_18__.J, {
																			...subProps_facets,
																			facets: facetsToShow,
																		}),
																		hideBanners
																			? null
																			: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
																					_Atoms_Merchandising_Banner__WEBPACK_IMPORTED_MODULE_19__.l,
																					{
																						...subProps_banner,
																						content: merchandising.content,
																						type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_20__.c.LEFT,
																						name: 'left',
																					}
																			  ),
																	],
																}),
															],
														}
												  )),
										hideContent
											? null
											: contentSlot
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
													className: 'ss__autocomplete__content',
													children: (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(contentSlot, {
														results,
														merchandising,
														search,
														pagination,
														filters,
														controller,
														treePath,
													}),
											  })
											: showResults
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
													className: 'ss__autocomplete__content',
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FK,
														{
															children: [
																hideBanners
																	? null
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
																			_Atoms_Merchandising_Banner__WEBPACK_IMPORTED_MODULE_19__.l,
																			{
																				...subProps_banner,
																				content: merchandising.content,
																				type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_20__.c.HEADER,
																				name: 'header',
																			}
																	  ),
																hideBanners
																	? null
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
																			_Atoms_Merchandising_Banner__WEBPACK_IMPORTED_MODULE_19__.l,
																			{
																				...subProps_banner,
																				content: merchandising.content,
																				type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_20__.c.BANNER,
																				name: 'banner',
																			}
																	  ),
																results.length > 0
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																			className: 'ss__autocomplete__content__results',
																			children: resultsSlot
																				? (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(resultsSlot, {
																						results,
																						contentTitle,
																						controller,
																						treePath,
																				  })
																				: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)(
																						_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FK,
																						{
																							children: [
																								(contentTitle || lang.contentTitle.value) && results.length > 0
																									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																											className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
																												'ss__autocomplete__title',
																												'ss__autocomplete__title--content'
																											),
																											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('h5', {
																												...mergedLang.contentTitle?.all,
																											}),
																									  })
																									: null,
																								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
																									_Results__WEBPACK_IMPORTED_MODULE_21__.n,
																									{ results, ...subProps_results, controller }
																								),
																							],
																						}
																				  ),
																	  })
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																			className: 'ss__autocomplete__content__no-results',
																			children: noResultsSlot
																				? (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(noResultsSlot, { search, pagination, controller, treePath })
																				: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																						...mergedLang.noResultsText?.all,
																				  }),
																	  }),
																hideBanners
																	? null
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
																			_Atoms_Merchandising_Banner__WEBPACK_IMPORTED_MODULE_19__.l,
																			{
																				...subProps_banner,
																				content: merchandising.content,
																				type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_20__.c.FOOTER,
																				name: 'footer',
																			}
																	  ),
																hideLink
																	? null
																	: linkSlot
																	? (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(linkSlot, {
																			search,
																			results,
																			pagination,
																			filters,
																			controller,
																			treePath,
																	  })
																	: search?.query?.string && results.length > 0
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
																			className: 'ss__autocomplete__content__info',
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('a', {
																				href: state.url.href,
																				onClick: () => controller?.setFocused && controller.setFocused(),
																				...mergedLang.seeMoreButton.attributes,
																				children: [
																					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('span', {
																						...mergedLang.seeMoreButton.value,
																					}),
																					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
																						_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__.I,
																						{ ...subProps_icon }
																					),
																				],
																			}),
																	  })
																	: null,
															],
														}
													),
											  })
											: null,
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				}),
				emIfy = (term, search) => {
					if (term && search) {
						const match = term.match(escapeRegExp(search));
						if (search && term && match && 'number' == typeof match.index) {
							const beforeMatch = term.slice(0, match.index),
								afterMatch = term.slice(match.index + search.length, term.length);
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FK, {
								children: [
									beforeMatch ? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('em', { children: beforeMatch }) : '',
									search,
									afterMatch ? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('em', { children: afterMatch }) : '',
								],
							});
						}
					}
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FK, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('em', { children: term }),
					});
				},
				escapeRegExp = (string) => string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		},
	},
]);
