'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4900],
	{
		'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { w: () => SearchHeader });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				SearchHeader = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						landingPage = properties.controller?.store.merchandising.landingPage || properties.merchandising?.landingPage,
						pagination = properties.controller?.store.pagination || properties.pagination,
						search = properties.controller?.store.search || properties.query,
						defaultProps = {
							titleText: `Showing ${
								pagination?.multiplePages
									? `<span class="ss__search-header__results-count-range"> ${pagination?.begin} - ${pagination?.end} of </span>`
									: ''
							} \n\t\t<span class="ss__search-header__results-count-total">${pagination?.totalResults}</span> \n\t\tresult${
								1 == pagination?.totalResults ? '' : 's'
							} \n\t\t${search?.query ? `for <span class="ss__search-header__results-query">"${search.query.string}"</span>` : ''}\n\t`,
							correctedQueryText: `No results found for <em>"${search?.originalQuery?.string}"</em>, showing results for <em>"${search?.query?.string}"</em> instead.`,
							didYouMeanText: `Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?`,
							noResultsText:
								'' +
								(search?.query
									? `<span>\n\t\t\tNo results for <span class="ss__search-header__results-query">"${search.query.string}"</span> found.\n\t\t</span>`
									: '<span>No results found.</span>'),
							treePath: globalTreePath,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('searchHeader', globalTheme, defaultProps, properties),
						{
							className,
							titleText,
							subtitleText,
							correctedQueryText,
							noResultsText,
							didYouMeanText,
							hideTitleText,
							hideSubtitleText,
							hideCorrectedQueryText,
							hideNoResultsText,
							hideDidYouMeanText,
						} = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						defaultLang = {
							titleText: { value: titleText },
							subtitleText: { value: subtitleText },
							correctedQueryText: { value: correctedQueryText },
							noResultsText: { value: noResultsText },
							didYouMeanText: { value: didYouMeanText },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.u)(lang, { pagination, search });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('header', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__search-header', className),
							children: landingPage
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h3', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
											'ss__search-header__title',
											'ss__search-header__title--landing-page'
										),
										children: landingPage.title,
								  })
								: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
										children: [
											pagination?.totalResults
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
														{
															children: [
																!hideTitleText &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h3', {
																		className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																			'ss__search-header__title',
																			'ss__search-header__title--results'
																		),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...mergedLang.titleText?.all,
																	}),
																search?.originalQuery &&
																	!hideCorrectedQueryText &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h5', {
																		className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																			'ss__search-header__title',
																			'ss__search-header__title--corrected'
																		),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...mergedLang.correctedQueryText?.all,
																	}),
															],
														}
												  )
												: 0 === pagination?.totalResults &&
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
														className: 'ss__search-header__no-results-wrapper',
														children: [
															!hideNoResultsText &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h3', {
																	className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																		'ss__search-header__title',
																		'ss__search-header__title--no-results'
																	),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...mergedLang.noResultsText?.all,
																}),
															search?.didYouMean &&
																!hideDidYouMeanText &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h4', {
																	className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																		'ss__search-header__title',
																		'ss__search-header__title--dym'
																	),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...mergedLang.didYouMeanText?.all,
																}),
														],
												  }),
											(subtitleText || lang.subtitleText.value) &&
												!hideSubtitleText &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h4', {
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
														'ss__search-header__title',
														'ss__search-header__title--subtitle'
													),
													'aria-atomic': 'true',
													'aria-live': 'polite',
													...mergedLang.subtitleText?.all,
												}),
										],
								  }),
						}),
					});
				});
		},
		'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { b: () => FacetsHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				_Facet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_MobileSidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
						'& .ss__facets-horizontal__header': {
							display: 'flex',
							flexWrap: 'wrap',
							gap: '10px',
							'& .ss__mobile-sidebar': { margin: '0 10px' },
							'& .ss__facets-horizontal__header__dropdown': {
								margin: '0 0 10px 0',
								'.ss__dropdown__button': { display: 'flex' },
								'& .ss__dropdown__button__heading': {
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									padding: '5px 10px',
									flexShrink: '0',
									gap: '10px',
								},
								'&.ss__dropdown--open': {
									'& .ss__dropdown__button__heading': { '& .ss__icon': {} },
									'& .ss__dropdown__content': {
										padding: '10px',
										minWidth: '160px',
										width: 'max-content',
										maxHeight: '500px',
										overflowY: 'auto',
										zIndex: 1e3,
									},
								},
							},
						},
						'&.ss__facets-horizontal--overlay': {
							'& .ss__facets-horizontal__header__dropdown': { '&.ss__dropdown--open': { '& .ss__dropdown__content': {} } },
						},
						'& .ss__facet__show-more-less': { display: 'block', margin: '8px 8px 0 8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
					}),
				FacetsHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.LU)(),
						defaultProps = {
							limit: 6,
							overlay: !0,
							iconCollapse: 'angle-up',
							iconExpand: 'angle-down',
							facets: properties.controller?.store?.facets,
							treePath: globalTreePath,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.v6)('facetsHorizontal', globalTheme, defaultProps, properties);
					const {
							facets,
							limit,
							overlay,
							alwaysShowFiltersButton,
							onFacetOptionClick,
							iconExpand,
							iconCollapse,
							disableStyles,
							className,
							controller,
							treePath,
						} = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e);
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(themeDefaults, props?.theme || {});
					props = { ...props, theme };
					let facetsToShow = facets,
						isOverflowing = !1;
					void 0 !== limit &&
						Number.isInteger(limit) &&
						facets &&
						((isOverflowing = facets.length > +limit), limit > 0 ? (facetsToShow = facets.slice(0, +limit)) : 0 == limit && (facetsToShow = []));
					const subProps = {
							dropdown: {
								className: 'ss__facets-horizontal__header__dropdown',
								disableClickOutside: !0,
								disableOverlay: !0,
								disableA11y: !0,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							icon: {
								className: 'ss__dropdown__button__heading__icon',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
								theme: props?.theme,
								treePath: `${treePath} dropdown button`,
							},
							facet: {
								className: 'ss__facets-horizontal__content__facet',
								justContent: !0,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, overlay }),
								theme: props?.theme,
								treePath: overlay ? `${treePath} dropdown` : treePath,
							},
							MobileSidebar: {
								className: 'ss__facets-horizontal__header__mobile-sidebar',
								hidePerPage: !0,
								hideSortBy: !0,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Z)(props, defaultStyles),
						[selectedFacet, setSelectedFacet] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(void 0),
						innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.L)(() => {
							selectedFacet && setSelectedFacet(void 0);
						});
					let contentRef;
					return (
						(0, react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
							!overlay && contentRef?.focus();
						}, [selectedFacet]),
						(facetsToShow && facetsToShow?.length > 0) || isOverflowing
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
											'ss__facets-horizontal',
											{ 'ss__facets-horizontal--overlay': overlay },
											className
										),
										ref: innerRef,
										...styling,
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
												className: 'ss__facets-horizontal__header',
												children: [
													facetsToShow?.map((facet) => {
														const defaultLang = {
																dropdownButton: {
																	attributes: {
																		'aria-label': `currently ${selectedFacet?.field === facet.field ? 'open' : 'collapsed'} ${
																			facet.field
																		} facet dropdown ${facet.values?.length ? facet.values?.length + ' options' : ''}`,
																	},
																},
															},
															lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
															mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_15__.u)(lang, { selectedFacet, facet });
														return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_16__.m, {
															...subProps.dropdown,
															className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																subProps.dropdown.className,
																`ss__facets-horizontal__header__dropdown--${facet.display}`,
																`ss__facets-horizontal__header__dropdown--${facet.field}`
															),
															open: selectedFacet?.field === facet.field,
															onClick: () => {
																setSelectedFacet(selectedFacet !== facet ? facet : void 0);
															},
															button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
																className: 'ss__dropdown__button__heading',
																ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_17__.i)(e, 0),
																role: 'heading',
																'aria-level': 3,
																...mergedLang.dropdownButton.attributes,
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																		...mergedLang.dropdownButton.value,
																		children: facet?.label,
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_18__.I, {
																		...subProps.icon,
																		...(selectedFacet?.field === facet.field
																			? { ...('string' == typeof iconExpand ? { icon: iconExpand } : iconExpand) }
																			: { ...('string' == typeof iconCollapse ? { icon: iconCollapse } : iconCollapse) }),
																	}),
																],
															}),
															disableOverlay: !overlay,
															children: overlay
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_19__.s, {
																		...subProps.facet,
																		facet,
																  })
																: void 0,
														});
													}),
													(isOverflowing || alwaysShowFiltersButton) &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_MobileSidebar__WEBPACK_IMPORTED_MODULE_20__.R, {
															controller,
															...subProps.MobileSidebar,
														}),
												],
											}),
											!overlay &&
												selectedFacet &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
													ref: (e) => {
														(0, _hooks__WEBPACK_IMPORTED_MODULE_17__.i)(e, 0, !0, () => {
															setSelectedFacet(void 0),
																setTimeout(() => {
																	innerRef.current?.querySelector('.ss__dropdown__button__heading')?.focus();
																});
														}),
															(contentRef = e);
													},
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
														'ss__facets-horizontal__content',
														`ss__facets-horizontal__content--${selectedFacet.display}`,
														`ss__facets-horizontal__content--${selectedFacet.field}`
													),
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_19__.s, {
														...subProps.facet,
														facet: facets?.find((facet) => facet.field === selectedFacet.field),
													}),
												}),
										],
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Organisms/NoResults/NoResults.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => NoResults });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_hooks_useComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				_hooks_useCreateController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				NoResults = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = {
							suggestionsTitleText: 'Suggestions',
							suggestionsList: [
								'Check for misspellings.',
								'Remove possible redundant keywords (ie. "products").',
								'Use other words to describe what you are searching for.',
							],
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('noResults', globalTheme, defaultProps, properties),
						{
							contentSlot,
							suggestionsTitleText,
							hideSuggestionsTitleText,
							hideContactsTitleText,
							suggestionsList,
							hideContact,
							contactsTitleText,
							hideSuggestions,
							contactsList,
							controller,
							templates,
							className,
							treePath,
						} = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						suggestionsExist = suggestionsList && Array.isArray(suggestionsList) && 0 !== suggestionsList.length,
						contactsExist = contactsList && Array.isArray(contactsList) && 0 !== contactsList.length;
					let recommendationTemplateComponent, recommendationTemplateResultComponent, recsController;
					if (templates?.recommendation?.enabled) {
						const componentName = templates?.recommendation?.component || 'Recommendation',
							snap = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.uk)();
						if (snap?.templates) {
							const themeName = properties.theme?.name;
							let defaultResultComponentFromTheme;
							themeName && (defaultResultComponentFromTheme = snap?.templates?.config.themes[themeName]?.resultComponent);
							const resultComponentName = templates?.recommendation?.resultComponent || defaultResultComponentFromTheme,
								mergedConfig = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, templates.recommendation.config);
							(mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`),
								(recsController = (0, _hooks_useCreateController__WEBPACK_IMPORTED_MODULE_9__.i)(snap, 'recommendation', mergedConfig)),
								recsController?.store?.loaded ||
									recsController?.store?.loading ||
									'error' === recsController?.store.error?.type ||
									recsController?.search(),
								resultComponentName &&
									snap?.templates?.library.import.component.result &&
									(recommendationTemplateResultComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_10__.x)(
										snap?.templates?.library.import.component.result,
										resultComponentName
									)),
								componentName &&
									snap?.templates?.library.import.component.recommendation.default &&
									(recommendationTemplateComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_10__.x)(
										snap?.templates?.library.import.component.recommendation.default,
										componentName
									));
						}
					}
					const RecommendationTemplateComponent = recommendationTemplateComponent,
						RecommendationTemplateResultComponent = recommendationTemplateResultComponent,
						defaultLang = {
							suggestionsTitleText: { value: suggestionsTitleText },
							suggestionsList: {
								value: `${
									suggestionsList
										? suggestionsList.map((suggestion) => `<li class="ss__no-results__suggestions__list__option">${suggestion}</li>`).join('')
										: void 0
								}\n\t\t\t`,
							},
							contactsTitleText: { value: contactsTitleText },
							contactsList: {
								value: `${
									contactsList
										? contactsList
												.map(
													(contact) =>
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__.p(
															contact.title
														)}'><h4 class="ss__no-results__contact__detail__title">${
															contact.title
														}</h4><p class="ss__no-results__contact__detail__content">${contact.content}</p></div>`
												)
												.join('')
										: void 0
								}`,
							},
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { controller });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__no-results', className),
						...styling,
						children: [
							contentSlot &&
								('string' == typeof contentSlot
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
											className: 'ss__no-results__slot',
											dangerouslySetInnerHTML: { __html: contentSlot },
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
											className: 'ss__no-results__slot',
											children: (0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(contentSlot, { controller, treePath }),
									  })),
							!hideSuggestions &&
								(suggestionsTitleText || suggestionsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
									className: 'ss__no-results__suggestions',
									children: [
										suggestionsTitleText &&
											!hideSuggestionsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('h3', {
												className: 'ss__no-results__suggestions__title',
												...mergedLang.suggestionsTitleText?.all,
											}),
										suggestionsExist &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('ul', {
												className: 'ss__no-results__suggestions__list',
												...mergedLang.suggestionsList?.all,
											}),
									],
								}),
							!hideContact &&
								(contactsTitleText || contactsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
									className: 'ss__no-results__contact',
									children: [
										contactsTitleText &&
											!hideContactsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('h3', {
												className: 'ss__no-results__contact__title',
												...mergedLang.contactsTitleText?.all,
											}),
										contactsExist && (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', { ...mergedLang.contactsList?.all }),
									],
								}),
							RecommendationTemplateComponent && recsController?.store?.loaded
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
										className: 'ss__no-results__recommendations',
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(RecommendationTemplateComponent, {
											controller: recsController,
											title: recsController.store?.profile?.display?.templateParameters?.title,
											resultComponent: RecommendationTemplateResultComponent,
											name: 'noResultsRecommendations',
										}),
								  })
								: null,
						],
					});
				});
		},
		'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { j: () => SearchHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_Organisms_Results__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				_Atoms_SearchHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
				_Organisms_NoResults__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Organisms_FacetsHorizontal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'
				);
			const defaultStyles = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				SearchHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('searchHorizontal', globalTheme, { hideMiddleToolbar: !0 }, properties),
						{
							disableStyles,
							className,
							controller,
							hideSearchHeader,
							hideMerchandisingBanners,
							hideTopToolbar,
							hideMiddleToolbar,
							resultComponent,
							hideFacetsHorizontal,
							hideBottomToolBar,
							treePath,
						} = props,
						store = controller.store,
						subProps_FacetsHorizontal = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_Banner = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_TopToolbar = {
							name: 'top',
							modules: ['FilterSummary', 'LayoutSelector', 'SortBy', 'PerPage'],
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_MiddleToolbar = {
							name: 'middle',
							modules: ['PerPage', 'SortBy'],
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_BottomToolbar = {
							name: 'bottom',
							modules: ['Pagination'],
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_SearchHeader = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_Results = {
							name: 'search',
							resultComponent,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_NoResults = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }), theme: props.theme, treePath },
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles),
						merchandising = controller.store.merchandising;
					let hideHeaderBanner, hideBannerBanner, hideFooterBanner;
					return (
						hideMerchandisingBanners &&
							('boolean' == typeof hideMerchandisingBanners
								? ((hideHeaderBanner = !0), (hideBannerBanner = !0), (hideFooterBanner = !0))
								: 'object' == typeof hideMerchandisingBanners &&
								  hideMerchandisingBanners.map((type) => {
										'banner' == type.toLowerCase() && (hideBannerBanner = !0),
											'header' == type.toLowerCase() && (hideHeaderBanner = !0),
											'footer' == type.toLowerCase() && (hideFooterBanner = !0);
								  })),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__search-horizontal', className),
								children: [
									!hideSearchHeader &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Atoms_SearchHeader__WEBPACK_IMPORTED_MODULE_9__.w, {
											...subProps_SearchHeader,
											controller,
										}),
									!hideTopToolbar &&
										store.pagination.totalResults > 0 &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_10__.M, {
											...subProps_TopToolbar,
											className: 'ss__search-horizontal__content__toolbar--top-toolbar',
											controller,
										}),
									!hideFacetsHorizontal &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Organisms_FacetsHorizontal__WEBPACK_IMPORTED_MODULE_11__.b, {
											...subProps_FacetsHorizontal,
											facets: store.facets,
											controller,
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__search-horizontal__content'),
										children: [
											!hideHeaderBanner &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_12__.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_13__.c.HEADER,
													name: 'header',
												}),
											!hideBannerBanner &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_12__.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_13__.c.BANNER,
													name: 'banner',
												}),
											!hideMiddleToolbar &&
												store.pagination.totalResults > 0 &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_10__.M, {
													...subProps_MiddleToolbar,
													className: 'ss__search-horizontal__content__toolbar--middle-toolbar',
													controller,
												}),
											store.pagination.totalResults
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Organisms_Results__WEBPACK_IMPORTED_MODULE_14__.n, {
														...subProps_Results,
														controller,
												  })
												: 0 === store.pagination.totalResults &&
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Organisms_NoResults__WEBPACK_IMPORTED_MODULE_15__.a, {
														...subProps_NoResults,
														controller,
												  }),
											!hideFooterBanner &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_12__.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_13__.c.FOOTER,
													name: 'footer',
												}),
											!hideBottomToolBar &&
												store.pagination.totalResults > 0 &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_10__.M, {
													...subProps_BottomToolbar,
													className: 'ss__search-horizontal__content__toolbar--bottom-toolbar',
													controller,
												}),
										],
									}),
								],
							}),
						})
					);
				});
		},
		'./components/src/hooks/useCreateController.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => useCreateController });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useCreateController = (snap, type, config) => {
				const [controller, setController] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(void 0);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						snap
							.getController(config.id)
							.then((controller) => {
								setController(controller);
							})
							.catch(() => {
								snap.createController(type, config).then((controller) => {
									setController(controller);
								});
							});
					}, []),
					controller
				);
			};
		},
	},
]);
