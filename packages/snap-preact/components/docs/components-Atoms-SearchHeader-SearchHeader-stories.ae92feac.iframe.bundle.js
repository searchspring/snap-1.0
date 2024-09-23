'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[2134],
	{
		'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					CorrectedResults: () => CorrectedResults,
					Default: () => Default,
					NoResults: () => NoResults,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => SearchHeader_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			var SearchHeader = __webpack_require__('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
			const SearchHeader_stories = {
					title: 'Atoms/SearchHeader',
					component: SearchHeader.w,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `queryStore` prop specifies a reference to the SearchQueryStore, the `paginationStore` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```jsx\n<SearchHeader queryStore={SearchQueryStore} paginationStore={SearchPaginationStore} merchandisingStore={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the controller. \n\n```jsx\nconst getCorrected = (controller) => {\n\tconst { pagination, search } = controller.store;\n\treturn `<div class="ss__search-header__corrected">No results found for <em>"${search?.originalQuery?.string}"</em>, showing results for <em>"${search?.query?.string}"</em> instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the controller. \n\n```jsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the controller. \n\n```jsx\nconst getDym = (controller) => {\n\tconst { search } = controller.store;\n\treturn `<div class="ss__search-header__dym">Sorry, but did you mean <em>"<a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>"</em></div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
							actions: { disabled: !0 },
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: {
							description: 'Search Controller reference',
							type: { required: !1 },
							table: { type: { summary: 'Search controller object' } },
							control: { type: 'none' },
						},
						queryStore: {
							description: 'Search Query Store reference',
							type: { required: !1 },
							table: { type: { summary: 'Search Query Store object' } },
							control: { type: 'none' },
						},
						paginationStore: {
							description: 'Search Pagination Store reference',
							type: { required: !1 },
							table: { type: { summary: 'Search Pagination Store object' } },
							control: { type: 'none' },
						},
						merchandisingStore: {
							description: 'Search Merchandising Store reference',
							type: { required: !1 },
							table: { type: { summary: 'Search Merchandising Store object' } },
							control: { type: 'none' },
						},
						titleText: {
							description: 'Search Title Text',
							table: {
								type: { summary: 'string' },
								defaultValue: {
									summary:
										'Showing <span class="ss-results-count-range">1-30 of</span> <span class="ss-results-count-total">8,474</span> results <span>for <span class="ss-results-query">"*"</span></span>',
								},
							},
							control: { type: 'text' },
						},
						subTitleText: { description: 'Search Subtitle Text', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						correctedQueryText: {
							description: 'Original query redirect text',
							table: {
								type: { summary: 'string' },
								defaultValue: { summary: '<div class="ss-oq">No results found for <em>"*"</em>, showing results for <em>"hat"</em> instead.</div>' },
							},
							control: { type: 'text' },
						},
						noResultsText: {
							description: 'no results found text',
							table: { type: { summary: 'string' }, defaultValue: { summary: '<span>No results found.</span>' } },
							control: { type: 'text' },
						},
						didYouMeanText: {
							description: '"Did you mean" text',
							table: {
								type: { summary: 'string' },
								defaultValue: { summary: 'Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?' },
							},
							control: { type: 'text' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'SearchHeader', globals: { siteId: '8uyt2m', search: { query: { string: '*' } } } }),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(SearchHeader.w, { ...args, controller });
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const NoResultsSnapInstance = snapify.p.search({
					id: 'SearchHeader-noResults',
					globals: { siteId: '8uyt2m', search: { query: { string: 'pokemon' } } },
				}),
				NoResults = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(SearchHeader.w, { ...args, controller });
			NoResults.loaders = [async () => (await NoResultsSnapInstance.search(), { controller: NoResultsSnapInstance })];
			const correctedSnapInstance = snapify.p.search({
					id: 'SearchHeader-correctedResults',
					globals: { siteId: '8uyt2m', search: { query: { string: 'drezz' } } },
				}),
				CorrectedResults = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(SearchHeader.w, { ...args, controller });
			(CorrectedResults.loaders = [async () => (await correctedSnapInstance.search(), { controller: correctedSnapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchHeaderProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHeader {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(NoResults.parameters = {
					...NoResults.parameters,
					docs: {
						...NoResults.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchHeaderProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHeader {...args} controller={controller} />;\n}',
							...NoResults.parameters?.docs?.source,
						},
					},
				}),
				(CorrectedResults.parameters = {
					...CorrectedResults.parameters,
					docs: {
						...CorrectedResults.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchHeaderProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHeader {...args} controller={controller} />;\n}',
							...CorrectedResults.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'NoResults', 'CorrectedResults'];
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
						{ titleText, subtitleText, correctedQueryText, noResultsText, didYouMeanText } = props,
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
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function mergeProps(componentType, globalTheme, defaultProps, props) {
				const theme = props.theme,
					componentName = props?.name;
				let treePath = props.treePath ?? '',
					mergedProps = { ...defaultProps };
				if (globalTheme?.name) {
					mergedProps = { ...mergedProps, ...props };
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps));
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps)),
						(treePath += `${treePath ? ' ' : ''}${componentType}` + (componentName?.match(/^[A-Z,a-z]+$/) ? `.${componentName}` : ''));
					const applicableSelectors = (function filterSelectors(themeComponents, treePath) {
						const selectors = Object.keys(themeComponents),
							paths = treePath.split(' '),
							componentTypeAndName = paths.splice(-1).pop() ?? '',
							[componentType, componentName] = componentTypeAndName.split('.'),
							mappedSplitTreePath = paths.map((path) => {
								const [type, name] = path.split('.');
								return { type, name, path };
							});
						return selectors
							.filter((key) => key.endsWith(componentType) || key.endsWith(`${componentType}.${componentName}`))
							.filter((selector) => {
								const split = selector.split(' ').slice(0, -1);
								if (0 == split.length) return !0;
								for (let s = 0; s < split.length; s++) {
									let prevIndex = -1;
									const value = split[s];
									for (let i = -1 == prevIndex ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
										const pathValue = mappedSplitTreePath[i];
										if (value === pathValue.path || value === pathValue.type) {
											prevIndex = s;
											break;
										}
									}
									if (-1 == prevIndex) return !1;
								}
								return !0;
							});
					})(globalTheme?.components || {}, treePath).sort(sortSelectors);
					applicableSelectors.forEach((selector) => {
						const componentProps = globalTheme.components?.[selector];
						componentProps && (mergedProps = mergeThemeProps(componentProps, mergedProps));
					}),
						(mergedProps = { ...mergedProps, theme: { ...mergedProps.theme, name: globalTheme.name }, treePath }),
						globalTheme.variables && (mergedProps.theme.variables = globalTheme.variables),
						globalTheme.layoutOptions && (mergedProps.theme.layoutOptions = globalTheme.layoutOptions);
				} else {
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps)), (mergedProps = { ...mergedProps, ...props });
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps));
				}
				return mergedProps;
			}
			function mergeThemeProps(componentThemeProps, mergedProps) {
				return componentThemeProps && (mergedProps = { ...mergedProps, ...componentThemeProps }), mergedProps;
			}
			function sortSelectors(a, b) {
				return (
					a
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0) -
					b
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0)
				);
			}
			__webpack_require__.d(__webpack_exports__, { v6: () => mergeProps });
		},
	},
]);
