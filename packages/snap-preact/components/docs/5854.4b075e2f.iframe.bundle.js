'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[5854],
	{
		'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { _: () => InlineBanner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/types.ts');
			const defaultStyles = ({ width }) =>
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
				});
			function InlineBanner(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					defaultProps = { layout: _types__WEBPACK_IMPORTED_MODULE_5__.VT.grid, width: 'auto', treePath: globalTreePath },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('inlineBanner', globalTheme, defaultProps, properties),
					{ banner, className, internalClassName, disableA11y, layout, onClick } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return banner && banner.value
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
								onClick: (e) => {
									onClick && onClick(e, banner);
								},
								role: 'article',
								ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__.iy)(e)),
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__inline-banner',
									`ss__inline-banner--${layout}`,
									className,
									internalClassName
								),
								...styling,
								dangerouslySetInnerHTML: { __html: banner.value },
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Organisms/NoResults/NoResults.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => NoResults });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
							templates: { recommendation: { enabled: !0 } },
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
							internalClassName,
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
							themeName && (defaultResultComponentFromTheme = snap?.templates?.config.theme?.resultComponent);
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
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__no-results', className, internalClassName),
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
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { n: () => Results });
			var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'
				),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/withTracking.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const defaultStyles = ({ gapSize, columns }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
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
				TrackedResultComponent = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.W)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q),
				Results = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.LU)(),
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
							layout: _types__WEBPACK_IMPORTED_MODULE_9__.VT.grid,
							breakpoints: defaultBreakpointsProps,
							treePath: globalTreePath,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.v6)('results', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, className, internalClassName, layout, theme, controller, treePath } = props;
					let { resultComponent } = props;
					const subProps_result = {
							internalClassName: 'ss__results__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_inlineBanner = {
							internalClassName: 'ss__results__inline-banner',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let results = props.results;
					props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = props.results?.slice(0, props.columns * props.rows));
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Z)(
						{ ...props, columns: layout == _types__WEBPACK_IMPORTED_MODULE_9__.VT.list ? 1 : props.columns },
						defaultStyles
					);
					if ('string' == typeof resultComponent) {
						const snap = (0, _providers__WEBPACK_IMPORTED_MODULE_14__.uk)();
						if (
							snap?.templates?.library.import.component.result &&
							((resultComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_15__.x)(snap?.templates?.library.import.component.result, resultComponent)),
							!resultComponent)
						)
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					}
					return results?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(_providers__WEBPACK_IMPORTED_MODULE_17__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__results',
										`ss__results-${props.layout}`,
										className,
										internalClassName
									),
									children: results.map((result) =>
										(() => {
											if (result.type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_18__.c.BANNER)
												return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.n)(_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_19__._, {
													...subProps_inlineBanner,
													key: result.id,
													banner: result,
													layout: props.layout,
												});
											if (resultComponent && controller) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
													_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_20__.o,
													{
														result,
														controller,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
															ResultComponent,
															{ controller, result, theme, treePath },
															result.id
														),
													}
												);
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
												TrackedResultComponent,
												{ ...subProps_result, result, layout: props.layout, controller },
												result.id
											);
										})()
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Sidebar/Sidebar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { B: () => Sidebar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Organisms/Layout/Layout.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = ({ stickyOffset }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'&.ss__sidebar--sticky': { position: 'sticky', top: stickyOffset || 0 },
						'& .ss__facets': { width: '100%' },
					}),
				Sidebar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							titleText: 'Filters',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
							layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']],
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('sidebar', globalTheme, defaultProps, properties),
						{ controller, layout, hideTitleText, titleText, sticky, disableStyles, className, internalClassName, treePath } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						defaultLang = { titleText: { value: titleText } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__.u)(lang, { controller }),
						subProps_Layout = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }), theme: props.theme, treePath },
						hasChildrenToRender = layout?.length;
					return controller?.store?.loaded && controller?.store?.pagination?.totalResults > 0 && hasChildrenToRender
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__sidebar', className, internalClassName, {
										'ss__sidebar--sticky': sticky,
									}),
									children: [
										hideTitleText
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FK,
													{}
											  )
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h4', {
													className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__sidebar__title'),
													'aria-atomic': 'true',
													'aria-live': 'polite',
													...mergedLang.titleText.all,
													children: titleText,
											  }),
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__sidebar__inner'),
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Layout__WEBPACK_IMPORTED_MODULE_13__.P, {
												controller,
												layout,
												...subProps_Layout,
											}),
										}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Toolbar/Toolbar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { M: () => Toolbar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Organisms/Layout/Layout.tsx');
			const defaultStyles = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				Toolbar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						defaultProps = {
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
							layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'],
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('toolbar', globalTheme, defaultProps, properties),
						{ controller, toggleSideBarButton, disableStyles, className, internalClassName, treePath, layout } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles),
						subProps_Layout = {
							toggleSideBarButton,
							internalClassName: 'ss__toolbar__layout',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						hasChildrenToRender = layout?.length;
					return hasChildrenToRender
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__toolbar', className, internalClassName),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Layout__WEBPACK_IMPORTED_MODULE_10__.P, {
										controller,
										layout,
										...subProps_Layout,
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FK, {});
				});
		},
		'./components/src/components/Templates/Search/Search.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => Search });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				mergeStyles = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				Sidebar = __webpack_require__('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
				Toolbar = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				NoResults = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				useMediaQuery = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const useLayoutOptions = (props, globalTheme) => {
				const layoutOptions = props?.layoutOptions || [],
					[selectedLayout, setSelectedLayout] = ((controller, key, defaultVal) => {
						const storage = controller.storage,
							initialState = storage.get(key) || defaultVal || void 0,
							[state, setState] = (0, hooks_module.J0)(initialState);
						return [
							state,
							(newState) => {
								storage.set(key, newState), setState(newState);
							},
						];
					})(props.controller, 'layoutOptions', layoutOptions.filter((option) => option.default).pop());
				try {
					if (!layoutOptions.some((option) => JSON.stringify(option) == JSON.stringify(selectedLayout))) {
						const newSelection = layoutOptions.filter((option) => option.default).pop();
						setSelectedLayout(newSelection);
					}
				} catch (err) {
					props.controller.log('invalid layoutOptions provided to component', props.inherits ? ` '${props.inherits}'` : '');
				}
				(props.theme = props.theme || {}),
					(props.theme.components = {
						...(props.theme.components || {}),
						layoutSelector: {
							options: layoutOptions,
							onSelect: (e, option) => {
								option && setSelectedLayout(option);
							},
							selected: selectedLayout,
						},
					});
				let shouldUseOverrides = !1;
				if (globalTheme.components && props.treePath) {
					const templateComponent = props.treePath.split(' ')[0];
					Object.keys(globalTheme.components).forEach((key) => {
						const paths = key.split(' '),
							componentTypeAndName = paths.splice(-1).pop() ?? '',
							[componentType] = componentTypeAndName.split('.');
						if (
							globalTheme.components &&
							'toolbar' == componentType &&
							(paths[0] == templateComponent ||
								paths[0] == `*${templateComponent}` ||
								paths[0] == `*(M)${templateComponent}` ||
								paths[0] == `*(T)${templateComponent}` ||
								paths[0] == `*(D)${templateComponent}` ||
								!paths.length)
						) {
							const toolbarConfig = globalTheme.components[key];
							toolbarConfig?.layout && toolbarConfig.layout.toString().indexOf('layoutSelector') > -1 && (shouldUseOverrides = !0);
						}
					});
				}
				selectedLayout?.overrides &&
					shouldUseOverrides &&
					(props.theme = cjs_default()(props.theme, { components: selectedLayout.overrides.components }));
			};
			var componentNameToClassName = __webpack_require__('./components/src/utilities/componentNameToClassName.ts'),
				useCleanUpEmptyDivs = __webpack_require__('./components/src/hooks/useCleanUpEmptyDivs.tsx');
			const defaultStyles = (props) => {
					let classNamePrefix = 'ss__search';
					return (
						props.alias && (classNamePrefix = `ss__${(0, componentNameToClassName.b)(props.alias)}`),
						(0, emotion_react_browser_esm.AH)({
							[`.${classNamePrefix}__header-section`]: { marginBottom: '20px' },
							[`.${classNamePrefix}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
							'.ss__sidebar': { flex: '0 1 auto', width: '270px', '&:empty': { display: 'none' } },
							[`.${classNamePrefix}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
						})
					);
				},
				Search = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = {
							toggleSidebarButtonText: 'Filters',
							hideToggleSidebarButton: !0,
							mobileDisplayAt: globalTheme?.variables?.breakpoints?.tablet ? `${globalTheme.variables?.breakpoints?.tablet}px` : '991px',
						},
						props = (0, mergeProps.v6)(properties.alias || 'search', globalTheme, defaultProps, properties),
						{
							disableStyles,
							className,
							internalClassName,
							controller,
							hideSidebar,
							toggleSidebarButtonText,
							hideTopToolbar,
							hideMiddleToolbar,
							hideBottomToolbar,
							resultComponent,
							hideToggleSidebarButton,
							mobileDisplayAt,
							toggleSidebarStartClosed,
							treePath,
						} = props;
					let classNamePrefix = 'ss__search';
					props.alias && (classNamePrefix = `ss__${(0, componentNameToClassName.b)(props.alias)}`),
						globalTheme?.name && props.layoutOptions && useLayoutOptions(props, globalTheme);
					const store = controller.store,
						isMobile = (0, useMediaQuery.U)(`(max-width: ${mobileDisplayAt})`),
						[sidebarOpenState, setSidebarOpenState] = (0, hooks_module.J0)(Boolean(!toggleSidebarStartClosed)),
						defaultLang = { toggleSidebarButtonText: { value: toggleSidebarButtonText } },
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { filters: store.filters, sidebarOpenState }),
						toggleSidebarButtonProps = {
							onClick: () => {
								setSidebarOpenState(!sidebarOpenState),
									setTimeout(() => {
										if (!sidebarOpenState) {
											const firstAvailableElemToFocus = document.querySelector('.ss__sidebar')?.querySelector(useA11y.DH);
											firstAvailableElemToFocus && firstAvailableElemToFocus.focus();
										}
									});
							},
							children:
								hideToggleSidebarButton || !store.loaded || isMobile || (!toggleSidebarButtonText && !mergedLang.toggleSidebarButtonText?.value)
									? void 0
									: () =>
											(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
												className: classnames_default()(
													`${classNamePrefix}__sidebar-toggle`,
													sidebarOpenState ? `${classNamePrefix}__sidebar-toggle--open` : ''
												),
												children: (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.toggleSidebarButtonText.all }),
											}),
						},
						subProps_TopToolbar = {
							name: 'top',
							internalClassName: `${classNamePrefix}__header-section__toolbar--top-toolbar`,
							layout: [['banner.header'], ['searchHeader', '_', 'button.sidebar-toggle']],
							toggleSideBarButton: { ...toggleSidebarButtonProps },
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_MiddleToolbar = {
							name: 'middle',
							internalClassName: `${classNamePrefix}__content__toolbar--middle-toolbar`,
							layout: isMobile
								? [['mobileSidebar', '_', 'paginationInfo'], ['banner.banner']]
								: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
							toggleSideBarButton: { ...toggleSidebarButtonProps },
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_BottomToolbar = {
							name: 'bottom',
							internalClassName: `${classNamePrefix}__content__toolbar--bottom-toolbar`,
							layout: [['banner.footer'], ['_', 'pagination']],
							toggleSideBarButton: { ...toggleSidebarButtonProps },
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_Sidebar = {
							layout: [['filterSummary'], ['facets'], ['banner.left']],
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_Results = { resultComponent, ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_NoResults = { ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						styling = (0, mergeStyles.Z)(props, defaultStyles);
					return (
						(0, useCleanUpEmptyDivs.P)(['.ss__search__sidebar']),
						(0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
							children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								...styling,
								className: classnames_default()(
									classNamePrefix,
									className,
									internalClassName,
									sidebarOpenState ? `${classNamePrefix}--sidebar-open` : ''
								),
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										className: `${classNamePrefix}__header-section`,
										children: !hideTopToolbar && (0, emotion_react_jsx_runtime_browser_esm.Y)(Toolbar.M, { ...subProps_TopToolbar, controller }),
									}),
									(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: `${classNamePrefix}__main-section`,
										children: [
											!hideSidebar &&
												!isMobile &&
												sidebarOpenState &&
												(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
													className: `${classNamePrefix}__sidebar`,
													children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Sidebar.B, { ...subProps_Sidebar, controller }),
												}),
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: classnames_default()(`${classNamePrefix}__content`),
												children: [
													!hideMiddleToolbar && (0, emotion_react_jsx_runtime_browser_esm.Y)(Toolbar.M, { ...subProps_MiddleToolbar, controller }),
													store.pagination.totalResults
														? (0, emotion_react_jsx_runtime_browser_esm.Y)(Results.n, { ...subProps_Results, controller })
														: 0 === store.pagination.totalResults &&
														  (0, emotion_react_jsx_runtime_browser_esm.Y)(NoResults.a, { ...subProps_NoResults, controller }),
													!hideBottomToolbar && (0, emotion_react_jsx_runtime_browser_esm.Y)(Toolbar.M, { ...subProps_BottomToolbar, controller }),
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
		'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { o: () => ResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts');
			const CSS_ResultTracker = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({}),
				ResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('resultTracker', globalTheme, {}, properties),
						{ children, result, track, controller, className, internalClassName, disableStyles, style } = props,
						mergedTrack = { render: !0, impression: !0, click: !0, ...track },
						{ ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Q)();
					inViewport && mergedTrack.impression && 'product' === result.type && controller?.track.product.impression(result);
					const styling = {};
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_ResultTracker(), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__result-tracker',
								`ss__${controller?.type}-result-tracker`,
								className,
								internalClassName
							),
							onClick: (e) => {
								'product' === result.type && mergedTrack.click && controller?.track.product.click(e, result);
							},
							ref,
							...styling,
							children,
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
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { I: () => useDeepCompareEffect, r: () => useDeepCompareMemoize });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(value),
					signalRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(0);
				return (
					(0, dequal__WEBPACK_IMPORTED_MODULE_1__.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDeepCompareEffect(callback, dependencies) {
				return (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => getDisplaySettings, X: () => useDisplaySettings });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				_useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx');
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.s)(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
						() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)),
						[]
					),
					(0, _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__.I)(() => {
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
		'./components/src/hooks/useIntersectionAdvanced.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersectionAdvanced });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersectionAdvanced = (ref, options = {}) => {
				const { rootMargin = '0px', fireOnce = !1, threshold = 0, minVisibleTime = 0, resetKey } = options,
					[isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					visibleTimerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					visibleStartRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					lastResetKeyRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(resetKey);
				return (
					resetKey !== lastResetKeyRef.current &&
						(setIntersecting(!1),
						visibleTimerRef.current && (window.clearTimeout(visibleTimerRef.current), (visibleTimerRef.current = null)),
						(visibleStartRef.current = null),
						(lastResetKeyRef.current = resetKey)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						if ((setIntersecting(!1), !window.IntersectionObserver || !ref.current)) return;
						let observer = null;
						return (
							(observer = new IntersectionObserver(
								([entry]) => {
									entry.isIntersecting
										? minVisibleTime > 0
											? ((visibleStartRef.current = Date.now()),
											  visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
											  (visibleTimerRef.current = window.setTimeout(() => {
													setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current);
											  }, minVisibleTime)))
											: (setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current))
										: (visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
										  (visibleTimerRef.current = null),
										  (visibleStartRef.current = null),
										  setIntersecting(!1));
								},
								{ rootMargin, threshold }
							)),
							ref.current && observer.observe(ref.current),
							() => {
								setIntersecting(!1),
									visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									observer && ref.current && observer.unobserve(ref.current);
							}
						);
					}, [ref, resetKey]),
					isIntersecting
				);
			};
		},
		'./components/src/providers/withTracking.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { W: () => withTracking });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function withTracking(WrappedComponent) {
				return (props) => {
					const { controller, result, ...restProps } = props;
					let resetKey;
					if (
						(controller || console.warn('Warning: No controller provided to withTracking'),
						result || console.warn('Warning: No result provided to withTracking'),
						'search' === controller?.type || 'autocomplete' === controller?.type)
					) {
						const urlManager = controller.urlManager;
						resetKey = JSON.stringify({
							q: urlManager.state.query,
							p: urlManager.state.page,
							ps: urlManager.state.pageSize,
							s: urlManager.state.sort,
							f: urlManager.state.filter,
						});
					} else if ('recommendation' === controller?.type) {
						const recStore = controller.store;
						resetKey = JSON.stringify({ tag: recStore.profile?.tag, ids: recStore.results.map((result) => result.id).join(',') });
					}
					const { ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_1__.Q)({ resetKey });
					inViewport && 'product' === result?.type && controller?.track.product.impression(result);
					const currentRef = ref.current;
					if (currentRef) {
						const handleClick = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.hb)((e) => {
							controller?.track.product.click(e, result);
						}, []);
						currentRef.setAttribute('sstracking', 'true'),
							currentRef.removeEventListener('click', handleClick),
							currentRef.addEventListener('click', handleClick);
					}
					const trackingProps = { ...restProps, controller, result, trackingRef: ref };
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(WrappedComponent, { ...trackingProps });
				};
			}
		},
		'./components/src/utilities/componentNameToClassName.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { b: () => componentNameToClassName });
			const componentNameToClassName = (name) => name.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase());
		},
		'./components/src/utilities/createImpressionObserver.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => createImpressionObserver });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/hooks/useIntersectionAdvanced.tsx');
			const IMPRESSION_VISIBILITY_THRESHOLD = 0.7,
				IMPRESSION_MIN_VISIBLE_TIME = 1e3;
			function createImpressionObserver(options) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return {
					ref,
					inViewport: (0, _hooks__WEBPACK_IMPORTED_MODULE_1__.v)(ref, {
						...options,
						fireOnce: !0,
						threshold: IMPRESSION_VISIBILITY_THRESHOLD,
						minVisibleTime: IMPRESSION_MIN_VISIBLE_TIME,
					}),
				};
			}
		},
	},
]);
