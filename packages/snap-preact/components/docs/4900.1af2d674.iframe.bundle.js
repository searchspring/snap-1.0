'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4900],
	{
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
		'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { w: () => SearchHeader });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_searchheader = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				SearchHeader = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						landingPage = properties.controller?.store.merchandising.landingPage || properties.merchandisingStore?.landingPage,
						pagination = properties.controller?.store.pagination || properties.paginationStore,
						search = properties.controller?.store.search || properties.queryStore,
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
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('searchHeader', globalTheme, defaultProps, properties),
						{ disableStyles, style, styleScript, className } = props,
						{
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
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_searchheader(stylingProps), style]);
					const defaultLang = {
							titleText: { value: titleText, attributes: { 'aria-label': `Now showing ${pagination?.totalResults} items in the product grid` } },
							subtitleText: { value: subtitleText },
							correctedQueryText: {
								value: correctedQueryText,
								attributes: {
									'aria-label': `No results found for ${search?.originalQuery?.string}, showing results for ${search?.query?.string} instead`,
								},
							},
							noResultsText: { value: noResultsText, attributes: { 'aria-label': `No results found for ${search?.query?.string}` } },
							didYouMeanText: { value: didYouMeanText },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__.u)(lang, { pagination, search });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('header', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__search-header', className),
							children: landingPage
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h3', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
											'ss__search-header__title',
											'ss__search-header__title--landing-page'
										),
										children: landingPage.title,
								  })
								: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
										children: [
											pagination?.totalResults
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FK,
														{
															children: [
																!hideTitleText &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h3', {
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
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h5', {
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
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
														className: 'ss__search-header__no-results-wrapper',
														children: [
															!hideNoResultsText &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h3', {
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
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h4', {
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
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h4', {
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				_Facet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_MobileSidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const CSS_facets = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						'& .ss__facets-horizontal__header': {
							display: 'flex',
							flexWrap: 'wrap',
							gap: '10px',
							'& .ss__mobile-sidebar': { margin: '0 10px' },
							'& .ss__facets-horizontal__header__dropdown': {
								flex: '0 0 0%',
								margin: '0 0 10px 0',
								boxSizing: 'border-box',
								minWidth: '100px',
								'& .ss__dropdown__button__heading': { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' },
								'&.ss__dropdown--open': {
									'& .ss__dropdown__button__heading': { '& .ss__icon': {} },
									'& .ss__dropdown__content': {
										padding: '10px',
										minWidth: '160px',
										width: 'max-content',
										maxHeight: '500px',
										overflowY: 'auto',
										zIndex: 1,
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
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							limit: 6,
							overlay: !0,
							iconCollapse: 'angle-up',
							iconExpand: 'angle-down',
							facets: properties.controller?.store?.facets,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetsHorizontal', globalTheme, defaultProps, properties);
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
							style,
							styleScript,
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
								...globalTheme?.components?.dropdown,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							icon: {
								className: 'ss__dropdown__button__heading__icon',
								...globalTheme?.components?.icon,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							facet: {
								className: 'ss__facets-horizontal__content__facet',
								justContent: !0,
								...globalTheme?.components?.facet,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, overlay }),
								theme: props?.theme,
								treePath,
							},
							MobileSidebar: {
								className: 'ss__facets-horizontal__header__mobile-sidebar',
								hidePerPage: !0,
								hideSortBy: !0,
								...globalTheme?.components?.mobileSidebar,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_facets(stylingProps), style]);
					const [selectedFacet, setSelectedFacet] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(void 0),
						innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.L)(() => {
							selectedFacet && setSelectedFacet(void 0);
						});
					return (facetsToShow && facetsToShow?.length > 0) || isOverflowing
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__facets-horizontal',
										{ 'ss__facets-horizontal--overlay': overlay },
										className
									),
									ref: innerRef,
									...styling,
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											className: 'ss__facets-horizontal__header',
											children: [
												facetsToShow?.map((facet) => {
													const defaultLang = {
															dropdownButton: {
																attributes: {
																	'aria-label': `currently ${selectedFacet?.field === facet.field ? 'collapsed' : 'open'} ${
																		facet.field
																	} facet dropdown ${facet.values?.length ? facet.values?.length + ' options' : ''}`,
																},
															},
														},
														lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
														mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { selectedFacet, facet });
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_13__.m, {
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
														button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
															className: 'ss__dropdown__button__heading',
															role: 'heading',
															'aria-level': 3,
															...mergedLang.dropdownButton.attributes,
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																	...mergedLang.dropdownButton.value,
																	children: facet?.label,
																}),
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
																	...subProps.icon,
																	...(selectedFacet?.field === facet.field
																		? { ...('string' == typeof iconExpand ? { icon: iconExpand } : iconExpand) }
																		: { ...('string' == typeof iconCollapse ? { icon: iconCollapse } : iconCollapse) }),
																}),
															],
														}),
														disableOverlay: !overlay,
														children: overlay
															? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_15__.s, {
																	...subProps.facet,
																	facet,
															  })
															: void 0,
													});
												}),
												(isOverflowing || alwaysShowFiltersButton) &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_MobileSidebar__WEBPACK_IMPORTED_MODULE_16__.R, {
														controller,
														...subProps.MobileSidebar,
													}),
											],
										}),
										!overlay &&
											selectedFacet &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
													'ss__facets-horizontal__content',
													`ss__facets-horizontal__content--${selectedFacet.display}`,
													`ss__facets-horizontal__content--${selectedFacet.field}`
												),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_15__.s, {
													...subProps.facet,
													facet: facets?.find((facet) => facet.field === selectedFacet.field),
												}),
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/NoResults/NoResults.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => NoResults });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_hooks_useComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				_hooks_useCreateController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const CSS_noResults = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				NoResults = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = {
							suggestionsTitleText: 'Suggestions',
							suggestionsList: [
								'Check for misspellings.',
								'Remove possible redundant keywords (ie. "products").',
								'Use other words to describe what you are searching for.',
							],
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('noResults', globalTheme, defaultProps, properties),
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
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_noResults(), style]);
					const suggestionsExist = suggestionsList && Array.isArray(suggestionsList) && 0 !== suggestionsList.length,
						contactsExist = contactsList && Array.isArray(contactsList) && 0 !== contactsList.length;
					let recommendationTemplateComponent, recommendationTemplateResultComponent, recsController;
					if (templates?.recommendation?.enabled) {
						const componentName = templates?.recommendation?.component || 'Recommendation',
							snap = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.uk)();
						if (snap?.templates) {
							const themeName = properties.theme?.name;
							let defaultResultComponentFromTheme;
							themeName && (defaultResultComponentFromTheme = snap?.templates?.config.themes[themeName]?.resultComponent);
							const resultComponentName = templates?.recommendation?.resultComponent || defaultResultComponentFromTheme,
								mergedConfig = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, templates.recommendation.config);
							(mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`),
								(recsController = (0, _hooks_useCreateController__WEBPACK_IMPORTED_MODULE_7__.i)(snap, 'recommendation', mergedConfig)),
								recsController?.store?.loaded ||
									recsController?.store?.loading ||
									'error' === recsController?.store.error?.type ||
									recsController?.search(),
								resultComponentName &&
									snap?.templates?.library.import.component.result &&
									(recommendationTemplateResultComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_8__.x)(
										snap?.templates?.library.import.component.result,
										resultComponentName
									)),
								componentName &&
									snap?.templates?.library.import.component.recommendation.default &&
									(recommendationTemplateComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_8__.x)(
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
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_9__.p(
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
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { controller });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__no-results', className),
						...styling,
						children: [
							contentSlot &&
								('string' == typeof contentSlot
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: 'ss__no-results__slot',
											dangerouslySetInnerHTML: { __html: contentSlot },
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: 'ss__no-results__slot',
											children: (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(contentSlot, { controller, treePath }),
									  })),
							!hideSuggestions &&
								(suggestionsTitleText || suggestionsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: 'ss__no-results__suggestions',
									children: [
										suggestionsTitleText &&
											!hideSuggestionsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h3', {
												className: 'ss__no-results__suggestions__title',
												...mergedLang.suggestionsTitleText?.all,
											}),
										suggestionsExist &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('ul', {
												className: 'ss__no-results__suggestions__list',
												...mergedLang.suggestionsList?.all,
											}),
									],
								}),
							!hideContact &&
								(contactsTitleText || contactsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: 'ss__no-results__contact',
									children: [
										contactsTitleText &&
											!hideContactsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h3', {
												className: 'ss__no-results__contact__title',
												...mergedLang.contactsTitleText?.all,
											}),
										contactsExist && (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', { ...mergedLang.contactsList?.all }),
									],
								}),
							RecommendationTemplateComponent && recsController?.store?.loaded
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
										className: 'ss__no-results__recommendations',
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(RecommendationTemplateComponent, {
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
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
													_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_16__.m,
													{
														result,
														controller,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
															ResultComponent,
															{ controller, result, theme },
															result.id
														),
													}
												);
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
		'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { j: () => SearchHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_Organisms_Results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				_Atoms_SearchHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
				_Organisms_NoResults__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Organisms_FacetsHorizontal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'
				);
			const CSS_SearchHorizontal = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				SearchHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('searchHorizontal', globalTheme, {}, properties),
						{
							disableStyles,
							className,
							controller,
							style,
							styleScript,
							hideSearchHeader,
							hideMerchandisingBanners,
							hideTopToolbar,
							hideMiddleToolbar,
							resultComponent,
							hideBottomToolBar,
							treePath,
						} = props,
						store = controller.store,
						subProps_FacetsHorizontal = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_Banner = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_TopToolbar = {
							name: 'top',
							hideFilterSummary: !1,
							hideLayoutSelector: !0,
							hideSortBy: !0,
							hidePagination: !0,
							hidePerPage: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_MiddleToolbar = {
							name: 'middle',
							hideFilterSummary: !0,
							hidePagination: !0,
							hideSortBy: !1,
							hidePerPage: !1,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_BottomToolbar = {
							name: 'bottom',
							hideFilterSummary: !0,
							hidePerPage: !0,
							hideSortBy: !0,
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
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_SearchHorizontal(stylingProps), style]);
					const merchandising = controller.store.merchandising;
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
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__search-horizontal', className),
								children: [
									!hideSearchHeader &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Atoms_SearchHeader__WEBPACK_IMPORTED_MODULE_8__.w, {
											...subProps_SearchHeader,
											controller,
										}),
									!hideTopToolbar &&
										store.pagination.totalResults > 0 &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_9__.M, {
											...subProps_TopToolbar,
											className: 'ss__search-horizontal__content__toolbar--top-toolbar',
											controller,
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Organisms_FacetsHorizontal__WEBPACK_IMPORTED_MODULE_10__.b, {
										...subProps_FacetsHorizontal,
										facets: store.facets,
										controller,
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__search-horizontal__content'),
										children: [
											!hideHeaderBanner &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_11__.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.c.HEADER,
													name: 'header',
												}),
											!hideBannerBanner &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_11__.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.c.BANNER,
													name: 'banner',
												}),
											!hideMiddleToolbar &&
												store.pagination.totalResults > 0 &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_9__.M, {
													...subProps_MiddleToolbar,
													className: 'ss__search-horizontal__content__toolbar--middle-toolbar',
													controller,
												}),
											store.pagination.totalResults
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Organisms_Results__WEBPACK_IMPORTED_MODULE_13__.n, {
														...subProps_Results,
														controller,
														breakpoints: {},
												  })
												: 0 === store.pagination.totalResults &&
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Organisms_NoResults__WEBPACK_IMPORTED_MODULE_14__.a, {
														...subProps_NoResults,
														controller,
												  }),
											!hideFooterBanner &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_11__.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.c.FOOTER,
													name: 'footer',
												}),
											!hideBottomToolBar &&
												store.pagination.totalResults > 0 &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_9__.M, {
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
