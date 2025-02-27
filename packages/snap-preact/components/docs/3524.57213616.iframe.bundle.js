'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3524],
	{
		'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { R: () => PaginationInfo });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				PaginationInfo = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						pagination = properties.controller?.store.pagination || properties.pagination,
						defaultProps = {
							infoText: `${pagination?.multiplePages ? `${pagination?.begin} - ${pagination?.end} of` : ''} ${pagination?.totalResults} result${
								1 == pagination?.totalResults ? '' : 's'
							}`,
							treePath: globalTreePath,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('paginationInfo', globalTheme, defaultProps, properties),
						{ controller, infoText, className } = props,
						store = pagination || controller?.store?.pagination,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						defaultLang = {
							infoText: {
								value: infoText,
								attributes: {
									'aria-label': `displaying ${pagination?.multiplePages ? `${pagination?.begin} - ${pagination?.end} of` : ''} ${
										pagination?.totalResults
									} result${1 == pagination?.totalResults ? '' : 's'}`,
								},
							},
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.u)(lang, { pagination: store });
					return store?.totalResults
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination-info', className),
									...mergedLang.infoText?.all,
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { s: () => LayoutSelector });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/Select/Select.tsx'),
				_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				_RadioList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/RadioList/RadioList.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
				LayoutSelector = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = {
							label: 'Layout',
							type: 'dropdown',
							showSingleOption: !1,
							selected: properties.options && properties.options.length ? properties.options[0] : void 0,
							treePath: globalTreePath,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('layoutSelector', globalTheme, defaultProps, properties),
						{ options, selected, type, onSelect, showSingleOption, hideLabel, disableStyles, className, treePath } = props;
					let label = props.label;
					const subProps_Select = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_RadioList = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_List = {
							multiSelect: !1,
							horizontal: !0,
							hideOptionCheckboxes: !0,
							requireSelection: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = { label: { value: label } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {});
					return (
						hideLabel && (delete lang.label.value, (label = void 0)),
						(options && options.length > 1) || (1 === options?.length && showSingleOption)
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
									children: [
										'dropdown' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Select__WEBPACK_IMPORTED_MODULE_12__.l, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__layout__select', className),
												...subProps_Select,
												label,
												options,
												selected,
												onSelect: (e, option) => {
													onSelect(e, option);
												},
												lang: { buttonLabel: lang.label },
											}),
										'list' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_List__WEBPACK_IMPORTED_MODULE_13__.B, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__layout__list', className),
												...subProps_List,
												onSelect: (e, option) => {
													onSelect(e, option);
												},
												options,
												selected,
												titleText: label,
												lang: { title: lang.label },
											}),
										'radio' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_RadioList__WEBPACK_IMPORTED_MODULE_14__.q, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__layout__radioList', className),
												...subProps_RadioList,
												onSelect: (e, option) => {
													onSelect(e, option);
												},
												options,
												selected,
												titleText: label,
												lang: { title: lang.label },
											}),
									],
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Molecules/LoadMore/LoadMore.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { e: () => LoadMore });
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
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useFuncDebounce.tsx');
			const defaultStyles = ({ pagination, progressIndicatorWidth, progressIndicatorSize, color, backgroundColor, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '20px',
						'& .ss__load-more__button--disabled': {
							opacity: 0.7,
							borderColor: 'rgba(51,51,51,0.7)',
							backgroundColor: 'initial',
							pointerEvents: 'none',
							'&:hover': { cursor: 'default' },
						},
						'& .ss__load-more__button--hidden': { display: 'none' },
						'& .ss__button': { alignItems: 'center' },
						'& .ss__load-more__icon': {
							marginLeft: '5px',
							animation: `${(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.i7)({
								'0%': { transform: 'rotate(0deg)' },
								'100%': { transform: 'rotate(360deg)' },
							})} linear 1s infinite`,
						},
						'&.ss__load-more': {
							'& .ss__load-more__progress': {
								display: 'flex',
								flexDirection: 'column',
								gap: '5px',
								'& .ss__load-more__progress__indicator': {
									width: progressIndicatorWidth,
									background: backgroundColor || theme?.variables?.colors?.secondary || '#f8f8f8',
									borderRadius: progressIndicatorSize,
									'& .ss__load-more__progress__indicator__bar': {
										width: pagination ? (pagination.end / pagination.totalResults) * 100 + '%' : '',
										background: color || theme?.variables?.colors?.primary || '#ccc',
										borderRadius: progressIndicatorSize,
										height: progressIndicatorSize,
									},
								},
								'& .ss__load-more__progress__text': { textAlign: 'center' },
							},
						},
					}),
				LoadMore = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							loadMoreText: 'Load More',
							loadingLocation: 'button',
							loadingIcon: 'spinner',
							progressIndicatorWidth: '300px',
							progressIndicatorSize: '5px',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('loadMore', globalTheme, defaultProps, properties),
						{
							pagination,
							controller,
							onClick,
							autoFetch,
							intersectionOffset,
							loading,
							loadMoreText,
							hideProgressIndicator,
							hideProgressText,
							loadingLocation,
							loadingIcon,
							disableStyles,
							className,
							treePath,
						} = props,
						store = pagination || controller?.store?.pagination,
						isLoading = 'boolean' == typeof loading ? loading : controller?.store?.loading,
						isButtonDisabled = (isLoading && 'button' === loadingLocation) || !Boolean(store?.next),
						subProps_button = {
							className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
								'ss__load-more__button',
								{ 'ss__load-more__button--hidden': isLoading && 'outside' === loadingLocation },
								{ 'ss__load-more__button--disabled': isButtonDisabled }
							),
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__load-more__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					if (!store) return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Z)({ ...props, pagination: store }, defaultStyles),
						autoProps = {};
					if (autoFetch) {
						const loadMoreRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
						autoProps.ref = loadMoreRef;
						const loadMoreInViewport = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.v)(loadMoreRef, intersectionOffset || '0px'),
							[preventLoading, setPreventLoading] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!0);
						isLoading
							? setPreventLoading(!0)
							: (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.d)(() => {
									setPreventLoading(!1);
							  }, 500),
							loadMoreInViewport && store.next && !preventLoading && store.next.url.go({ history: 'replace' });
					}
					const defaultLang = {
							loadMoreButton: { value: loadMoreText, attributes: { 'aria-label': loadMoreText } },
							progressText: { value: `You've viewed ${store?.end} of ${store?.totalResults} products` },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_14__.u)(lang, { pagination: store });
					return store.totalResults
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_15__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
									...styling,
									...autoProps,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__load-more',
										{ 'ss__load-more--loading': isLoading },
										{ 'ss__load-more--autoFetch': autoFetch },
										className
									),
									children: [
										!autoFetch &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_16__.$, {
														onClick: (e) => {
															store.next?.url.go({ history: 'replace' }), onClick && onClick(e);
														},
														...subProps_button,
														...mergedLang.loadMoreButton.attributes,
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																...mergedLang.loadMoreButton.value,
																children: loadMoreText,
															}),
															loadingIcon && isLoading && 'button' === loadingLocation
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__.I, {
																		...subProps_icon,
																		...('string' == typeof loadingIcon ? { icon: loadingIcon } : loadingIcon),
																  })
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
														],
													}),
													loadingIcon &&
														isLoading &&
														'outside' === loadingLocation &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__.I, {
															...subProps_icon,
															...('string' == typeof loadingIcon ? { icon: loadingIcon } : loadingIcon),
														}),
												],
											}),
										(!hideProgressIndicator || !hideProgressText) &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
												className: 'ss__load-more__progress',
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
													children: [
														!hideProgressIndicator &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
																className: 'ss__load-more__progress__indicator',
																children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
																	className: 'ss__load-more__progress__indicator__bar',
																}),
															}),
														!hideProgressText &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
																'aria-atomic': 'true',
																'aria-live': 'polite',
																className: 'ss__load-more__progress__text',
																...mergedLang.progressText?.all,
															}),
													],
												}),
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/Pagination/Pagination.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => Pagination });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'& .ss__pagination__page': {
							padding: '5px',
							display: 'inline-block',
							minHeight: '1em',
							minWidth: '1em',
							textAlign: 'center',
							'&.ss__pagination__page--active': { fontWeight: 'bold' },
							'&:hover:not(.ss__pagination__page--active)': {},
						},
					}),
				Pagination = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { pages: 5, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('pagination', globalTheme, defaultProps, properties),
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
							treePath,
						} = props,
						subProps_icon = {
							className: 'ss__pagination__icon',
							size: '10px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						store = pagination || controller?.store?.pagination,
						getPagesParams = Number.isInteger(pagesLeft) && Number.isInteger(pagesRight) ? [pagesLeft, pagesRight] : [pages],
						_pages = store?.getPages(...getPagesParams),
						pageNumbers = _pages?.map((page) => page.number),
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = {
							previous: { attributes: { 'aria-label': 'go to previous page' } },
							next: { attributes: { 'aria-label': 'go to next page' } },
							first: { attributes: { 'aria-label': 'go to first page' } },
							last: { attributes: { 'aria-label': `go to last page ${store?.last.number}` } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { pagination: store });
					return pageNumbers && pageNumbers.length > 1 && store?.totalResults
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination', className),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('nav', {
										role: 'navigation',
										'aria-label': 'Pagination',
										children: [
											store.previous &&
												!hidePrev &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
													...store.previous.url.link,
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination__page', 'ss__pagination__page--previous'),
													...mergedLang.previous?.all,
													children:
														prevButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__.I, {
															...subProps_icon,
															icon: 'angle-left',
															name: 'prev',
														}),
												}),
											!pageNumbers.includes(store.first.number) &&
												!hideFirst &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FK,
													{
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
																...store.first.url.link,
																className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination__page', 'ss__pagination__page--first'),
																...mergedLang.first?.all,
																children: firstButton || store.first.number,
															}),
															!pageNumbers.includes(2) &&
																!hideEllipsis &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { children: '…' }),
														],
													}
												),
											_pages &&
												_pages.map((page) => {
													const defaultPageLang = { page: { attributes: { 'aria-label': `go to page ${page.number}` } } },
														pagelang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultPageLang, props.lang || {}),
														mergedPageLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(pagelang, { pagination: store, page });
													return page.active
														? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
																className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination__page', 'ss__pagination__page--active'),
																...mergedPageLang.page?.all,
																'aria-current': 'true',
																'aria-live': 'polite',
																children: page.number,
														  })
														: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
																...page.url.link,
																className: 'ss__pagination__page',
																...mergedPageLang.page?.all,
																children: page.number,
														  });
												}),
											!pageNumbers.includes(store.last.number) &&
												!hideLast &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FK,
													{
														children: [
															!pageNumbers.includes(store.totalPages - 1) &&
																!hideEllipsis &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { children: '…' }),
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
																...store.last.url.link,
																className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination__page', 'ss__pagination__page--last'),
																...mergedLang.last?.all,
																children: lastButton || store.last.number,
															}),
														],
													}
												),
											store.next &&
												!hideNext &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
													...store.next.url.link,
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__pagination__page', 'ss__pagination__page--next'),
													...mergedLang.next?.all,
													children:
														nextButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__.I, {
															...subProps_icon,
															icon: 'angle-right',
															name: 'next',
														}),
												}),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Toolbar/Toolbar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { M: () => Toolbar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_FilterSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_Molecules_Pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./components/src/components/Molecules/Pagination/Pagination.tsx'),
				_Molecules_LoadMore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
				_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Molecules/SortBy/SortBy.tsx'),
				_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Molecules/PerPage/PerPage.tsx'),
				_Molecules_LayoutSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'
				),
				_MobileSidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				_Atoms_PaginationInfo_PaginationInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'
				);
			const defaultStyles = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({ display: 'flex', justifyContent: 'flex-end', gap: '10px' }),
				Toolbar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
						snap = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.uk)(),
						themeStore = snap?.templates?.getThemeStore(globalTheme.name),
						defaultProps = {
							treePath: globalTreePath,
							modules: ['MobileSidebar', 'FilterSummary', 'PaginationInfo', 'SortBy', 'PerPage', 'Pagination'],
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('toolbar', globalTheme, defaultProps, properties),
						{ controller, topSlot, bottomSlot, hideTopSlot, hideBottomSlot, disableStyles, className, treePath, modules } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						subProps_MobileSidebar = {
							controller,
							className: 'ss__toolbar__mobile-sidebar',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_FilterSummary = {
							controller,
							className: 'ss__toolbar__filter-summary',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_LayoutSelector = {
							controller,
							className: 'ss__toolbar__layout-selector',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_Pagination = {
							controller,
							className: 'ss__toolbar__pagination',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_PaginationInfo = {
							controller,
							className: 'ss__toolbar__pagination-info',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_LoadMore = {
							controller,
							className: 'ss__toolbar__load-more',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_SortBy = {
							controller,
							className: 'ss__toolbar__sort-by',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_PerPage = {
							controller,
							className: 'ss__toolbar__per-page',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					return Boolean((!hideTopSlot && topSlot) || modules?.length || (!hideBottomSlot && bottomSlot))
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__toolbar', className),
									children: [
										!hideTopSlot &&
											topSlot &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__toolbar__slot', 'ss__toolbar__slot--top'),
												children: (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Y)(topSlot),
											}),
										modules?.map((module) =>
											'MobileSidebar' == module && controller.store.pagination.totalResults > 0
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_MobileSidebar__WEBPACK_IMPORTED_MODULE_12__.R, {
														controller,
														...subProps_MobileSidebar,
												  })
												: 'FilterSummary' == module
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_FilterSummary__WEBPACK_IMPORTED_MODULE_13__.r, {
														...subProps_FilterSummary,
												  })
												: 'LayoutSelector' == module && themeStore && props.theme?.layoutOptions && props.theme.layoutOptions.length > 0
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_LayoutSelector__WEBPACK_IMPORTED_MODULE_14__.s, {
														onSelect: (e, option) => {
															option && themeStore?.layout.select(option);
														},
														selected: themeStore?.layout.selected,
														options: props.theme?.layoutOptions,
														...subProps_LayoutSelector,
												  })
												: 'PaginationInfo' == module
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(
														_Atoms_PaginationInfo_PaginationInfo__WEBPACK_IMPORTED_MODULE_15__.R,
														{ ...subProps_PaginationInfo }
												  )
												: 'SortBy' == module
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_16__.g, {
														...subProps_SortBy,
												  })
												: 'PerPage' == module
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_17__.F, {
														...subProps_PerPage,
												  })
												: 'Pagination' == module
												? controller.config.settings?.infinite
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_LoadMore__WEBPACK_IMPORTED_MODULE_18__.e, {
															...subProps_LoadMore,
													  })
													: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Pagination__WEBPACK_IMPORTED_MODULE_19__.d, {
															...subProps_Pagination,
													  })
												: void 0
										),
										!hideBottomSlot &&
											bottomSlot &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__toolbar__slot', 'ss__toolbar__slot--bottom'),
												children: (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Y)(bottomSlot),
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FK, {});
				});
		},
		'./components/src/hooks/useFuncDebounce.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => useFuncDebounce });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useFuncDebounce = (func, delay) => {
				const funcRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(func);
				(funcRef.current = func),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const handler = setTimeout(() => {
							funcRef.current();
						}, delay);
						return () => {
							clearTimeout(handler);
						};
					}, [func, delay]);
			};
		},
	},
]);
