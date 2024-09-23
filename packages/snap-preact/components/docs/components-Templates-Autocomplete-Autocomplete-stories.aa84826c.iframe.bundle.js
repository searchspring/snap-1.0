'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8999],
	{
		'./components/src/components/Templates/Autocomplete/Autocomplete.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Autocomplete_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				SearchMerchandisingStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				Banner = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				Facets = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				cloneWithProps = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				createHoverProps = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				types = __webpack_require__('./components/src/types.ts'),
				useDisplaySettings = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const CSS_Autocomplete = ({
					inputViewportOffsetBottom,
					hideFacets,
					horizontalTerms,
					noResults,
					contentSlot,
					viewportMaxHeight,
					vertical,
					width,
					theme,
				}) =>
					(0, emotion_react_browser_esm.AH)({
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
						'& .ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
						'& .ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
						'&.ss__autocomplete--only-terms': { width: `${vertical || horizontalTerms || Boolean(contentSlot) ? width : '150px'}` },
						'.ss__autocomplete__title--trending, .ss__autocomplete__title--history, .ss__autocomplete__title--terms': {
							fontWeight: 'normal',
							margin: 0,
							color: '#c5c5c5',
							textTransform: 'uppercase',
							padding: '10px',
							'& h5': { fontSize: '.8em', margin: 0 },
						},
						'.ss__autocomplete__title--facets': { order: vertical ? 2 : void 0 },
						'& .ss__autocomplete__terms': {
							display: 'flex',
							flexDirection: 'column',
							flex: '1 1 auto',
							maxWidth: '' + (vertical || horizontalTerms ? 'auto' : '150px'),
							minWidth: '150px',
							order: 1,
							background: '#f8f8f8',
							'& .ss__autocomplete__terms__options': {
								display: vertical || horizontalTerms ? 'flex' : void 0,
								justifyContent: 'space-evenly',
								flexWrap: 'wrap',
								'& .ss__autocomplete__terms__option': {
									flexGrow: vertical || horizontalTerms ? '1' : void 0,
									textAlign: vertical || horizontalTerms ? 'center' : void 0,
									wordBreak: 'break-all',
									'& a': { display: 'block', padding: vertical || horizontalTerms ? '10px 30px' : '10px', '& em': { fontStyle: 'normal' } },
									'&.ss__autocomplete__terms__option--active': {
										background: '#fff',
										'& a': { fontWeight: 'bold', color: theme?.variables?.colors?.primary },
									},
								},
							},
						},
						'& .ss__autocomplete__facets': {
							display: 'flex',
							flex: '0 0 150px',
							flexDirection: vertical ? 'row' : 'column',
							columnGap: '20px',
							order: 2,
							padding: vertical ? '10px 20px' : '10px',
							overflowY: vertical ? void 0 : 'auto',
							'& .ss__autocomplete__facet': { flex: vertical ? '0 1 150px' : void 0 },
							'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
								{ paddingLeft: 0 },
							'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
							'.ss__facet-palette-options__icon': { display: 'none' },
						},
						'& .ss__autocomplete__content': {
							display: 'flex',
							flex: '1 1 ' + (hideFacets ? 'auto' : '0%'),
							flexDirection: 'column',
							justifyContent: 'space-between',
							order: 3,
							overflowY: 'auto',
							margin: noResults ? '0 auto' : void 0,
							padding: vertical ? '10px 20px' : '10px',
							'& .ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'& .ss__banner.ss__banner--footer': { margin: '10px 0' },
							'& .ss__autocomplete__content__results': { minHeight: '0%' },
							'& .ss__autocomplete__content__info': {
								padding: '10px',
								textAlign: noResults ? 'center' : 'right',
								'& a': { fontWeight: 'bold', color: theme?.variables?.colors?.primary, '& .ss__icon': { marginLeft: '5px' } },
							},
						},
					}),
				Autocomplete = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)();
					let props = (0, mergeProps.v6)(
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
					const valueProps = (0, createHoverProps.l)(),
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
						props.theme = cjs_default().all([themeFunctionalityProps, props?.theme || {}], {
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
							displaySettings = (0, useDisplaySettings.X)(props.breakpoints) || {},
							theme = cjs_default().all([themeDefaults, themeFunctionalityProps, props?.theme || {}, displaySettings?.theme || {}], {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					let input = props.input,
						inputViewportOffsetBottom = 0;
					if (input) {
						'string' == typeof input && (input = document.querySelector(input));
						const rect = input?.getBoundingClientRect();
						inputViewportOffsetBottom = rect?.bottom || 0;
					}
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
							disableStyles,
							className,
							style,
							controller,
							styleScript,
							treePath,
						} = props,
						subProps_facets = { limit: 3, ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_banner = { className: 'ss__autocomplete__banner', ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_results = {
							name: 'autocomplete',
							className: 'ss__autocomplete__results',
							breakpoints: props.breakpoints,
							resultComponent,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__autocomplete__icon',
							icon: 'angle-right',
							size: '10px',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						{ search, terms, trending, results, merchandising, pagination, loaded, filters, facets, state, loading } = controller.store,
						history = controller.store.history || [];
					controller &&
						'string' == typeof input &&
						((input = document.querySelector(input)),
						(0, hooks_module.vJ)(() => {
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
					const facetsToShow = facets.length ? facets.filter((facet) => facet.display !== types.QK.SLIDER) : [],
						onlyTerms = (trending?.length || history.length) && !loaded && !loading;
					let showResults = Boolean(results.length > 0 || Object.keys(merchandising.content).length > 0 || search?.query?.string);
					((hideTrending && trendingActive) || (hideHistory && historyActive)) && (showResults = !1);
					const styling = { 'ss-name': props.name },
						stylingProps = { ...props, inputViewportOffsetBottom, noResults: Boolean(search?.query?.string && 0 === results.length) };
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_Autocomplete(stylingProps), style]);
					const reset = () => {
							controller.setFocused(), controller.reset();
						},
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
							contentInfo: {
								value: `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${
									1 == pagination.totalResults ? '' : 's'
								} for "${search.query?.string}"`,
							},
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { controller });
					return visible
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									...styling,
									className: classnames_default()('ss__autocomplete', className, { 'ss__autocomplete--only-terms': onlyTerms }),
									onClick: (e) => e.stopPropagation(),
									ref: (e) => (0, useA11y.i)(e, 0, !0, reset),
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
											role: 'link',
											ref: (e) => (0, useA11y.i)(e),
											onClick: () => reset(),
											className: 'ss__autocomplete__close-button',
											style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
											...mergedLang.closeButton?.all,
										}),
										!hideTerms &&
											(showTrending || terms.length > 0 || termsSlot || (!hideHistory && history.length > 0)) &&
											(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
												className: classnames_default()('ss__autocomplete__terms', { 'ss__autocomplete__terms-trending': showTrending }),
												children: termsSlot
													? (0, cloneWithProps.Y)(termsSlot, {
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
													: (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
															children: [
																terms.length > 0
																	? (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																			className: 'ss__autocomplete__terms__suggestions',
																			children: [
																				termsTitle || lang.termsTitle.value
																					? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className:
																								'ss__autocomplete__title ss__autocomplete__title--terms ss__autocomplete__title--suggestions',
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.termsTitle?.all }),
																					  })
																					: null,
																				(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: 'ss__autocomplete__terms__options',
																					role: 'list',
																					'aria-label': termsTitle,
																					children: terms.map((term, idx) => {
																						const defaultLang = {
																								suggestionsTerm: {
																									attributes: { 'aria-label': `item ${idx + 1} of ${terms.length}, ${term.value}` },
																								},
																							},
																							suggestionLang = cjs_default()(defaultLang, props.lang || {}),
																							suggestionTermLangObj = (0, useLang.u)(suggestionLang, { controller, term, index: idx });
																						return (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: classnames_default()('ss__autocomplete__terms__option', {
																								'ss__autocomplete__terms__option--active': term.active,
																							}),
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)('a', {
																								onClick: (e) => termClickEvent(e),
																								href: term.url.href,
																								...(0, createHoverProps.l)(term.preview),
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
																	? (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																			className: 'ss__autocomplete__terms__trending',
																			children: [
																				trendingTitle || lang.trendingTitle.value
																					? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: 'ss__autocomplete__title ss__autocomplete__title--trending',
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.trendingTitle?.all }),
																					  })
																					: null,
																				(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: 'ss__autocomplete__terms__options',
																					role: 'list',
																					'aria-label': trendingTitle,
																					children: trending.map((term, idx) => {
																						const defaultLang = {
																								trendingTerm: {
																									attributes: { 'aria-label': `item ${idx + 1} of ${trending.length}, ${term.value}` },
																								},
																							},
																							trendingLang = cjs_default()(defaultLang, props.lang || {}),
																							trendingTermLangObj = (0, useLang.u)(trendingLang, { controller, term, index: idx });
																						return (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: classnames_default()('ss__autocomplete__terms__option', {
																								'ss__autocomplete__terms__option--active': term.active,
																							}),
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)('a', {
																								onClick: (e) => termClickEvent(e),
																								href: term.url.href,
																								...(0, createHoverProps.l)(term.preview),
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
																	? (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																			className: 'ss__autocomplete__terms__history',
																			children: [
																				historyTitle || lang.historyTitle.value
																					? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: 'ss__autocomplete__title ss__autocomplete__title--history',
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.historyTitle?.all }),
																					  })
																					: null,
																				(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: 'ss__autocomplete__terms__options',
																					role: 'list',
																					'aria-label': historyTitle,
																					children: history.map((term, idx) => {
																						const defaultLang = {
																								historyTerm: { attributes: { 'aria-label': `item ${idx + 1} of ${history.length}, ${term.value}` } },
																							},
																							historyLang = cjs_default()(defaultLang, props.lang || {}),
																							historyTermLangObj = (0, useLang.u)(historyLang, { controller, term, index: idx });
																						return (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: classnames_default()('ss__autocomplete__terms__option', {
																								'ss__autocomplete__terms__option--active': term.active,
																							}),
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)('a', {
																								onClick: (e) => termClickEvent(e),
																								href: term.url.href,
																								...(0, createHoverProps.l)(term.preview),
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
													  }),
											}),
										!hideFacets &&
											(facetsSlot
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
														className: 'ss__autocomplete__facets',
														children: (0, cloneWithProps.Y)(facetsSlot, {
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
												  (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
														children: [
															(facetsTitle || lang.facetsTitle.value) && vertical
																? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: classnames_default()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																		children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.facetsTitle?.all }),
																  })
																: null,
															(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																className: 'ss__autocomplete__facets',
																children: [
																	(!facetsTitle && !lang.facetsTitle.value) || vertical
																		? null
																		: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																				className: classnames_default()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																				children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.facetsTitle?.all }),
																		  }),
																	(0, emotion_react_jsx_runtime_browser_esm.Y)(Facets.J, { ...subProps_facets, facets: facetsToShow }),
																	hideBanners
																		? null
																		: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																				...subProps_banner,
																				content: merchandising.content,
																				type: SearchMerchandisingStore.c.LEFT,
																				name: 'left',
																		  }),
																],
															}),
														],
												  })),
										hideContent
											? null
											: contentSlot
											? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
													className: 'ss__autocomplete__content',
													children: (0, cloneWithProps.Y)(contentSlot, { results, merchandising, search, pagination, filters, controller, treePath }),
											  })
											: showResults
											? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
													className: 'ss__autocomplete__content',
													children: (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
														children: [
															hideBanners
																? null
																: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																		...subProps_banner,
																		content: merchandising.content,
																		type: SearchMerchandisingStore.c.HEADER,
																		name: 'header',
																  }),
															hideBanners
																? null
																: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																		...subProps_banner,
																		content: merchandising.content,
																		type: SearchMerchandisingStore.c.BANNER,
																		name: 'banner',
																  }),
															results.length > 0
																? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__autocomplete__content__results',
																		children: resultsSlot
																			? (0, cloneWithProps.Y)(resultsSlot, { results, contentTitle, controller, treePath })
																			: (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
																					children: [
																						(contentTitle || lang.contentTitle.value) && results.length > 0
																							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																									className: classnames_default()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.contentTitle?.all }),
																							  })
																							: null,
																						(0, emotion_react_jsx_runtime_browser_esm.Y)(Results.n, { results, ...subProps_results, controller }),
																					],
																			  }),
																  })
																: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__autocomplete__content__no-results',
																		children: noResultsSlot
																			? (0, cloneWithProps.Y)(noResultsSlot, { search, pagination, controller, treePath })
																			: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', { ...mergedLang.noResultsText?.all }),
																  }),
															hideBanners
																? null
																: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																		...subProps_banner,
																		content: merchandising.content,
																		type: SearchMerchandisingStore.c.FOOTER,
																		name: 'footer',
																  }),
															hideLink
																? null
																: linkSlot
																? (0, cloneWithProps.Y)(linkSlot, { search, results, pagination, filters, controller, treePath })
																: search?.query?.string && results.length > 0
																? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__autocomplete__content__info',
																		children: (0, emotion_react_jsx_runtime_browser_esm.FD)('a', {
																			href: state.url.href,
																			onClick: () => controller?.setFocused && controller.setFocused(),
																			...mergedLang.contentInfo.attributes,
																			children: [
																				(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.contentInfo.value }),
																				(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon }),
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
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				}),
				emIfy = (term, search) => {
					if (term && search) {
						const match = term.match(escapeRegExp(search));
						if (search && term && match && 'number' == typeof match.index) {
							const beforeMatch = term.slice(0, match.index),
								afterMatch = term.slice(match.index + search.length, term.length);
							return (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
								children: [
									beforeMatch ? (0, emotion_react_jsx_runtime_browser_esm.Y)('em', { children: beforeMatch }) : '',
									search,
									afterMatch ? (0, emotion_react_jsx_runtime_browser_esm.Y)('em', { children: afterMatch }) : '',
								],
							});
						}
					}
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {
						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('em', { children: term }),
					});
				},
				escapeRegExp = (string) => string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Autocomplete_stories = {
					title: 'Templates/Autocomplete',
					component: Autocomplete,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```typescript\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```typescript\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```typescript\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { maxWidth: '960px', position: 'relative' },
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
										type: 'text',
										id: 'searchInput',
										placeholder: 'try me!',
										autoComplete: 'off',
										style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
								],
							}),
					],
					argTypes: {
						controller: {
							description: 'Autocomplete controller reference',
							type: { required: !0 },
							table: { type: { summary: 'Autocomplete controller object' } },
							control: { type: 'none' },
						},
						input: {
							description: 'input element reference',
							type: { required: !0 },
							table: { type: { summary: 'Element or String as CSS Selector' } },
							control: { type: 'none' },
						},
						width: {
							defaultValue: '100%',
							description: 'Change width of the component',
							table: { type: { summary: 'string' }, defaultValue: { summary: '100%' } },
							control: { type: 'text' },
						},
						hideTerms: {
							defaultValue: !1,
							description: 'prevent all terms from rendering (also applicable to trending and history terms)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideHistory: {
							defaultValue: !1,
							description: 'prevent historical terms and results from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideTrending: {
							defaultValue: !1,
							description: 'prevent trending terms and results from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						retainHistory: {
							defaultValue: !1,
							description: 'allow history terms to render even when there is a query in the input',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						retainTrending: {
							defaultValue: !1,
							description: 'allow trending terms to render even when there is a query in the input',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideFacets: {
							defaultValue: !1,
							description: 'prevent facets from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideContent: {
							defaultValue: !1,
							description: 'prevent content area from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideBanners: {
							defaultValue: !1,
							description: 'prevent merchandising banners from rendering (inline banners not affected)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideLink: {
							defaultValue: !1,
							description: 'prevent the "see n results for keyword" link from rendering (hideContent will also hide this)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						horizontalTerms: {
							defaultValue: !1,
							description: 'display terms horizontally, (not required if vertical prop is true)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						vertical: {
							defaultValue: !1,
							description: 'use a vertical (single column) layout',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						termsTitle: {
							defaultValue: '',
							description: 'Change terms header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						trendingTitle: {
							defaultValue: 'Popular Searches',
							description: 'Change trending terms header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Popular Searches' } },
							control: { type: 'text' },
						},
						historyTitle: {
							defaultValue: 'Previously Searched',
							description: 'Change historical terms header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Previously Searched' } },
							control: { type: 'text' },
						},
						facetsTitle: {
							defaultValue: '',
							description: 'Change facets header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						contentTitle: {
							defaultValue: '',
							description: 'Change content header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						viewportMaxHeight: {
							defaultValue: !1,
							description: 'Autocomplete fully visible in viewport',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						termsSlot: { description: 'Slot for custom terms component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
						facetsSlot: { description: 'Slot for custom facets component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
						contentSlot: { description: 'Slot for custom content component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
						linkSlot: {
							description: 'Slot for custom "see n results for keyword" link component',
							table: { type: { summary: 'component' } },
							control: { type: 'none' },
						},
						resultsSlot: {
							description: 'Slot for custom results component & title.',
							table: { type: { summary: 'component' } },
							control: { type: 'none' },
						},
						noResultsSlot: {
							description: 'Slot for custom no-results component.',
							table: { type: { summary: 'component' } },
							control: { type: 'none' },
						},
						breakpoints: {
							description: 'Breakpoints options object',
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
							control: { type: 'none' },
						},
						onFacetOptionClick: {
							description: 'Custom onClick event handler for facet options.',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onFacetOptionClick',
						},
						onTermClick: {
							description: 'Custom onClick event handler for Suggested & Trending Terms',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onTermClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.autocomplete({
					id: 'Autocomplete',
					selector: '#searchInput',
					globals: { siteId: '8uyt2m' },
					settings: { trending: { limit: 5 } },
				}),
				Default = (args, { loaded: { controller } }) => (
					setTimeout(() => {
						controller.bind();
					}),
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Autocomplete, { ...args, controller, input: controller?.config.selector })
				);
			(Default.loaders = [async () => ({ controller: await snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: AutocompleteProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  // bind after input exists\n  setTimeout(() => {\n    controller.bind();\n  });\n  return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { m: () => Dropdown });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const CSS_dropdown = ({ disableOverlay, classId }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						position: 'relative',
						'&.ss__dropdown--open': {
							[`& .ss__dropdown__content--${classId}`]: { position: disableOverlay ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
						},
						'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
						'.ss__dropdown__content': { position: 'absolute', minWidth: '100%', visibility: 'hidden', opacity: 0, top: 'auto', left: 0 },
					}),
				Dropdown = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('dropdown', globalTheme, { startOpen: !1, disableA11y: !1 }, properties),
						{
							button,
							content,
							children,
							disabled,
							open,
							onClick,
							onToggle,
							startOpen,
							disableClickOutside,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props;
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_6__.L)((e) => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1), onToggle && onToggle(e, !1)));
							}));
					const toggleShowContent = (e) => {
							stateful && setShowContent && setShowContent((prev) => (onToggle && onToggle(e, !prev), !prev));
						},
						styling = { 'ss-name': props.name },
						[classId] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)((Math.random() + 1).toString(36).substring(7)),
						stylingProps = { ...props, classId };
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_dropdown(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__dropdown', { 'ss__dropdown--open': showContent }, className),
								ref: innerRef,
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__.i)(e)),
										'aria-expanded': showContent,
										role: 'button',
										onClick: (e) => {
											disabled || (toggleShowContent(e), onClick && onClick(e));
										},
										children: (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(button, { open: showContent, toggleOpen: toggleShowContent, treePath }),
									}),
									(content || children) &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
											className: `ss__dropdown__content ss__dropdown__content--${classId}`,
											children: [
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											],
										}),
								],
							}),
						})
					);
				});
		},
		'./components/src/components/Atoms/Merchandising/Banner/Banner.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Banner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				);
			const CSS_banner = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({ '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
				Banner = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('banner', globalTheme, {}, properties),
						{ controller, type, disableStyles, className, style, styleScript } = props,
						content = props.content || controller?.store?.merchandising.content;
					if (type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.c.INLINE)
						return (
							console.warn(
								`BannerType '${_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.c.INLINE}' is not supported in <Banner /> component`
							),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const styling = { 'ss-name': props.name },
						stylingProps = props;
					let bannerContent;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_banner(stylingProps), style]),
						content && content[type] && (bannerContent = content[type]),
						bannerContent && bannerContent.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__banner', `ss__banner--${type}`, className),
										...styling,
										dangerouslySetInnerHTML: { __html: bannerContent.join('') },
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { _: () => InlineBanner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
				inlineBanner: ({ width }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width,
						'&.ss__inline-banner--grid': { flexDirection: 'column' },
						'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
						'& iframe': { maxWidth: '100%' },
					}),
			};
			function InlineBanner(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = { layout: _types__WEBPACK_IMPORTED_MODULE_4__.VT.grid, width: 'auto' },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('inlineBanner', globalTheme, defaultProps, properties),
					{ banner, disableStyles, className, layout, onClick, style, styleScript } = props,
					styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.inlineBanner(stylingProps), style]),
					banner && banner.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
									onClick: (e) => {
										onClick && onClick(e, banner);
									},
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__inline-banner', `ss__inline-banner--${layout}`, className),
									...styling,
									dangerouslySetInnerHTML: { __html: banner.value },
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
				);
			}
		},
		'./components/src/components/Organisms/Facets/Facets.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { J: () => Facets });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_Facet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts');
			const CSS_facets = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Facets = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { facets: properties.controller?.store?.facets };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('facets', globalTheme, defaultProps, properties);
					const { limit, onFacetOptionClick, disableStyles, className, style, styleScript, controller, treePath } = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e), controller?.setFocused && controller?.setFocused();
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(themeDefaults, props?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					props = { ...props, theme };
					let { facets } = props;
					limit && facets && limit > 0 && (facets = facets.slice(0, +limit));
					const subProps_facet = {
							className: 'ss__facets__facet',
							...globalTheme?.components?.facet,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_facets(stylingProps), style]),
						facets && facets?.length > 0
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facets', className),
										...styling,
										children: facets.map((facet) =>
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_10__.s, {
												...subProps_facet,
												facet,
											})
										),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { n: () => Results });
			var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'
				),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const CSS_results = ({ columns, gapSize }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'flex',
						flexFlow: 'row wrap',
						gap: gapSize,
						gridTemplateRows: 'auto',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						'& .ss__result, & .ss__result-layout': {
							boxSizing: 'border-box',
							flex: '0 1 auto',
							width: `calc(${100 / columns}% - (${columns - 1} * ${gapSize} / ${columns} ) )`,
							marginRight: gapSize,
							marginBottom: gapSize,
							[`&:nth-of-type(${columns}n)`]: { marginRight: '0' },
							[`&:nth-last-of-type(-n+${columns})`]: { marginBottom: '0' },
						},
						'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
					}),
				Results = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultBreakpointsProps = {
							0: { columns: properties.columns || 1 },
							540: { columns: properties.columns || 2 },
							768: { columns: properties.columns || 3 },
							991: { columns: properties.columns || 4 },
						},
						defaultProps = {
							results: properties.controller?.store?.results,
							columns: 4,
							gapSize: '20px',
							layout: _types__WEBPACK_IMPORTED_MODULE_6__.VT.grid,
							breakpoints: defaultBreakpointsProps,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('results', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_8__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, className, layout, style, theme, styleScript, controller, treePath } = props;
					let { resultComponent } = props;
					const subProps_result = {
							className: 'ss__results__result',
							...globalTheme?.components?.result,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_inlineBanner = {
							className: 'ss__results__inline-banner',
							...globalTheme?.components?.inlineBanner,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let results = props.results;
					props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = props.results?.slice(0, props.columns * props.rows));
					const styling = { 'ss-name': props.name },
						stylingProps = {
							...props,
							columns: layout == _types__WEBPACK_IMPORTED_MODULE_6__.VT.list ? 1 : props.columns,
							gapSize: props.gapSize,
							theme,
						};
					if (
						(styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_results(stylingProps), style]),
						'string' == typeof resultComponent)
					) {
						const snap = (0, _providers__WEBPACK_IMPORTED_MODULE_10__.uk)();
						if (
							snap?.templates?.library.import.component.result &&
							((resultComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.x)(snap?.templates?.library.import.component.result, resultComponent)),
							!resultComponent)
						)
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					}
					return results?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_providers__WEBPACK_IMPORTED_MODULE_13__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__results', `ss__results-${props.layout}`, className),
									children: results.map((result) =>
										(() => {
											if (result.type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__.c.BANNER)
												return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.n)(_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_15__._, {
													...subProps_inlineBanner,
													key: result.id,
													banner: result,
													layout: props.layout,
												});
											if (resultComponent && controller) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(ResultComponent, { controller, result, theme });
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
												_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_16__.m,
												{
													result,
													controller,
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
														_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__.Q,
														{ ...subProps_result, result, layout: props.layout, controller },
														result.id
													),
												}
											);
										})()
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { m: () => SearchResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_ResultTracker = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				SearchResultTracker = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const { children, result, controller, className, disableStyles, style, styleScript } = properties,
						resultRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						styling = { 'ss-name': properties.name },
						stylingProps = properties;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_ResultTracker(stylingProps), style]),
						controller || console.error('No SearchController was passed to SearchResultTracker.'),
						controller
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__result-tracker', className),
									onClick: (e) => controller.track.product.click(e, result),
									ref: resultRef,
									...styling,
									children,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children })
					);
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y';
			function useA11y(elem, tabIndex, trapFocus, escCallback) {
				if (!document.querySelector('#ssA11yFocusStyle')) {
					const style = document.createElement('style');
					(style.type = 'text/css'),
						(style.id = 'ssA11yFocusStyle'),
						(style.innerHTML = `[${A11Y_ATTRIBUTE}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
						document.getElementsByTagName('head')[0].appendChild(style);
				}
				elem &&
					!elem.attributes?.[A11Y_ATTRIBUTE] &&
					(elem.setAttribute(A11Y_ATTRIBUTE, !0),
					elem.setAttribute('tabIndex', `${tabIndex || 0}`),
					elem.addEventListener('keydown', (event) => {
						('Space' !== event.code && 'Enter' !== event.code) || elem.click();
					}),
					trapFocus &&
						elem.addEventListener('keydown', function (e) {
							const focusableEls = elem.querySelectorAll(
									'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]'
								),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(), void e.preventDefault();
							('Tab' !== e.key && e.keyCode !== KEYCODE_TAB) ||
								(e.shiftKey
									? document.activeElement === firstFocusableEl && (lastFocusableEl.focus(), e.preventDefault())
									: document.activeElement === lastFocusableEl && (firstFocusableEl.focus(), e.preventDefault()));
						}));
			}
		},
		'./components/src/hooks/useClickOutside.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { L: () => useClickOutside });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useClickOutside(callback) {
				const callbackRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(),
					innerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)();
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						callbackRef.current = callback;
					}),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						return document.addEventListener('click', handleClick), () => document.removeEventListener('click', handleClick);
						function handleClick(e) {
							innerRef.current && callbackRef.current && !innerRef.current.contains(e.target) && callbackRef.current(e);
						}
					}, []),
					innerRef
				);
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { X: () => useDisplaySettings });
			var hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const debounce = (func, timeout = 200) => {
				let timer;
				return (...args) => {
					clearTimeout(timer),
						(timer = window.setTimeout(() => {
							func.apply(void 0, args);
						}, timeout));
				};
			};
			var dist = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, hooks_module.li)(value),
					signalRef = (0, hooks_module.li)(0);
				return (
					(0, dist.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, hooks_module.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, hooks_module.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = debounce(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, hooks_module.vJ)(() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)), []),
					(function useDeepCompareEffect(callback, dependencies) {
						return (0, hooks_module.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
					})(() => {
						setDisplaySettings(getDisplaySettings(breakpointsObj)), resetResizeListener();
					}, [breakpointsObj]),
					displaySettings
				);
			}
			const getDisplaySettings = (breakpoints) => {
				let breakpointsSettings;
				const currentScreenWidth = window.innerWidth,
					sortedList = Object.keys(breakpoints)
						.map((str) => +str)
						.sort((a, b) => a - b)
						.map((vp) => ({ [vp]: breakpoints[vp] }));
				if (sortedList.length) {
					for (let i = 0; i < sortedList.length; i++) {
						const entry = sortedList[i],
							breakpoint = parseInt(Object.keys(entry)[0]);
						if (i + 1 === sortedList.length || (0 === i && currentScreenWidth < breakpoint)) {
							breakpointsSettings = sortedList[i][breakpoint];
							break;
						}
						{
							const nextBreakpoint = parseInt(Object.keys(sortedList[i + 1])[0]);
							if (currentScreenWidth >= breakpoint && currentScreenWidth < nextBreakpoint) {
								breakpointsSettings = sortedList[i][breakpoint];
								break;
							}
						}
					}
					return breakpointsSettings;
				}
				return breakpointsSettings;
			};
		},
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { u: () => useLang });
			const useLang = (lang, data) => {
				const returnObj = {};
				return (
					Object.keys(lang).forEach((key) => {
						const currentLangSettings = lang && lang[key],
							currentObj = {};
						currentLangSettings &&
							(currentLangSettings?.value &&
								('function' == typeof currentLangSettings.value
									? (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value(data) } })
									: (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value } })),
							currentLangSettings?.attributes &&
								Object.keys(currentLangSettings?.attributes).length &&
								((currentObj.attributes = { 'ss-lang': key }),
								currentLangSettings?.attributes?.['aria-label'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-label']
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label']({ data }))
										: (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'])),
								currentLangSettings?.attributes?.['aria-valuetext'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-valuetext']
										? (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'](data))
										: (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'])),
								currentLangSettings?.attributes?.title &&
									('function' == typeof currentLangSettings.attributes?.title
										? (currentObj.attributes.title = currentLangSettings.attributes.title(data))
										: (currentObj.attributes.title = currentLangSettings.attributes.title)),
								currentLangSettings?.attributes?.alt &&
									('function' == typeof currentLangSettings.attributes?.alt
										? (currentObj.attributes.alt = currentLangSettings.attributes.alt(data))
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt))),
							(currentObj.all = { ...currentObj.value, ...currentObj.attributes, 'ss-lang': key })),
							(returnObj[key] = currentObj);
					}),
					returnObj
				);
			};
		},
		'../../node_modules/dequal/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { j: () => dequal });
			var has = Object.prototype.hasOwnProperty;
			function find(iter, tar, key) {
				for (key of iter.keys()) if (dequal(key, tar)) return key;
			}
			function dequal(foo, bar) {
				var ctor, len, tmp;
				if (foo === bar) return !0;
				if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
					if (ctor === Date) return foo.getTime() === bar.getTime();
					if (ctor === RegExp) return foo.toString() === bar.toString();
					if (ctor === Array) {
						if ((len = foo.length) === bar.length) for (; len-- && dequal(foo[len], bar[len]); );
						return -1 === len;
					}
					if (ctor === Set) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!bar.has(tmp)) return !1;
						}
						return !0;
					}
					if (ctor === Map) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len[0]) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!dequal(len[1], bar.get(tmp))) return !1;
						}
						return !0;
					}
					if (ctor === ArrayBuffer) (foo = new Uint8Array(foo)), (bar = new Uint8Array(bar));
					else if (ctor === DataView) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo.getInt8(len) === bar.getInt8(len); );
						return -1 === len;
					}
					if (ArrayBuffer.isView(foo)) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo[len] === bar[len]; );
						return -1 === len;
					}
					if (!ctor || 'object' == typeof foo) {
						for (ctor in ((len = 0), foo)) {
							if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return !1;
							if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return !1;
						}
						return Object.keys(bar).length === len;
					}
				}
				return foo != foo && bar != bar;
			}
		},
	},
]);
