'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4401],
	{
		'./components/src/components/Molecules/Pagination/Pagination.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Pagination_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Pagination = __webpack_require__('./components/src/components/Molecules/Pagination/Pagination.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Pagination_stories = {
					title: 'Molecules/Pagination',
					component: Pagination.d,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```jsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```jsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} lastButton={'Prev'} />\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						pagination: {
							description: 'Pagination store reference',
							type: { required: !0 },
							table: { type: { summary: 'pagination store object' } },
							control: { type: 'none' },
						},
						pages: {
							description:
								'Number of pages shown - recommend using an odd number as it includes the current page with an even spread to the left and right (excluding first and last)',
							defaultValue: 5,
							table: { type: { summary: 'number' }, defaultValue: { summary: 5 } },
							control: { type: 'number' },
						},
						pagesLeft: {
							description: 'Number of pages shown to the left (excluding first) - must be used with pagesRight',
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						pagesRight: {
							description: 'Number of pages shown to the right (excluding last) - must be used with pagesLeft',
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						nextButton: { description: 'Pagination next button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						prevButton: { description: 'Pagination prev button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						firstButton: { description: 'Pagination first button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						lastButton: { description: 'Pagination last button content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						hideFirst: {
							description: 'Hide first button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideLast: {
							description: 'Hide last button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideEllipsis: {
							description: 'Hide ellipsis',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideNext: {
							description: 'Hide next button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hidePrev: {
							description: 'Hide previous button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Pagination', globals: { siteId: '8uyt2m' } }),
				ObservablePagination = (0, mobxreact_esm.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Pagination.d, { ...args, pagination: controller?.store?.pagination })
				),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservablePagination, { args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: PaginationProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservablePagination args={args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/Pagination/Pagination.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => Pagination });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const CSS_pagination = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						'& .ss__pagination__page': {
							padding: '5px',
							display: 'inline-block',
							minHeight: '1em',
							minWidth: '1em',
							textAlign: 'center',
							'&.ss__pagination__page--active': { fontWeight: 'bold' },
							'&:hover:not(.ss__pagination__page--active)': { backgroundColor: theme?.variables?.colors?.hover?.background || '#f8f8f8' },
						},
					}),
				Pagination = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('pagination', globalTheme, { pages: 5 }, properties),
						{
							pagination,
							controller,
							pages,
							pagesLeft,
							pagesRight,
							hideFirst,
							hideLast,
							hideEllipsis,
							hideNext,
							hidePrev,
							nextButton,
							prevButton,
							firstButton,
							lastButton,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						subProps_icon = {
							className: 'ss__pagination__icon',
							size: '10px',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						store = pagination || controller?.store?.pagination,
						getPagesParams = Number.isInteger(pagesLeft) && Number.isInteger(pagesRight) ? [pagesLeft, pagesRight] : [pages],
						_pages = store?.getPages(...getPagesParams),
						pageNumbers = _pages?.map((page) => page.number),
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_pagination(stylingProps), style]);
					const defaultLang = {
							previous: { attributes: { 'aria-label': 'go to previous page' } },
							next: { attributes: { 'aria-label': 'go to next page' } },
							first: { attributes: { 'aria-label': 'go to first page' } },
							last: { attributes: { 'aria-label': `go to last page ${store?.last.number}` } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { paginationStore: store });
					return pageNumbers && store?.totalResults
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__pagination', className),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('nav', {
										role: 'navigation',
										'aria-label': 'Pagination',
										children: [
											store.previous &&
												!hidePrev &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
													...store.previous.url.link,
													className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__pagination__page', 'ss__pagination__page--previous'),
													...mergedLang.previous?.all,
													children:
														prevButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_11__.I, {
															...subProps_icon,
															icon: 'angle-left',
															name: 'prev',
														}),
												}),
											!pageNumbers.includes(store.first.number) &&
												!hideFirst &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FK, {
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
															...store.first.url.link,
															className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__pagination__page', 'ss__pagination__page--first'),
															...mergedLang.first?.all,
															children: firstButton || store.first.number,
														}),
														!pageNumbers.includes(2) &&
															!hideEllipsis &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { children: '…' }),
													],
												}),
											_pages &&
												_pages.map((page) => {
													const defaultPageLang = { page: { attributes: { 'aria-label': `go to page ${page.number}` } } },
														pagelang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultPageLang, props.lang || {}),
														mergedPageLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(pagelang, { paginationStore: store, page });
													return page.active
														? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
																className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__pagination__page', 'ss__pagination__page--active'),
																...mergedPageLang.page?.all,
																'aria-current': 'true',
																children: page.number,
														  })
														: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
																...page.url.link,
																className: 'ss__pagination__page',
																...mergedPageLang.page?.all,
																children: page.number,
														  });
												}),
											!pageNumbers.includes(store.last.number) &&
												!hideLast &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FK, {
													children: [
														!pageNumbers.includes(store.totalPages - 1) &&
															!hideEllipsis &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { children: '…' }),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
															...store.last.url.link,
															className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__pagination__page', 'ss__pagination__page--last'),
															...mergedLang.last?.all,
															children: lastButton || store.last.number,
														}),
													],
												}),
											store.next &&
												!hideNext &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
													...store.next.url.link,
													className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__pagination__page', 'ss__pagination__page--next'),
													...mergedLang.next?.all,
													children:
														nextButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_11__.I, {
															...subProps_icon,
															icon: 'angle-right',
															name: 'next',
														}),
												}),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			__webpack_require__.d(__webpack_exports__, { s: () => defined });
		},
	},
]);
