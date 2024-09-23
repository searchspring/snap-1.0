'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9491],
	{
		'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { s: () => LayoutSelector });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/Select/Select.tsx'),
				_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				_RadioList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/RadioList/RadioList.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_LayoutSelector = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				LayoutSelector = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							label: 'Layout',
							type: 'dropdown',
							showSingleOption: !1,
							selected: properties.options && properties.options.length ? properties.options[0] : void 0,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('layoutSelector', globalTheme, defaultProps, properties),
						{ options, selected, type, onSelect, showSingleOption, label, disableStyles, className, style, styleScript, treePath } = props,
						subProps_Select = {
							...globalTheme?.components?.select,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_RadioList = {
							...globalTheme?.components?.radioList,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_List = {
							multiSelect: !1,
							horizontal: !0,
							hideOptionCheckboxes: !0,
							...globalTheme?.components?.list,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_LayoutSelector(stylingProps), style]);
					const defaultLang = { label: { value: label } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {});
					return (options && options.length > 1) || (1 === options?.length && showSingleOption)
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: [
									'dropdown' == type?.toLowerCase() &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Select__WEBPACK_IMPORTED_MODULE_10__.l, {
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
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_List__WEBPACK_IMPORTED_MODULE_11__.B, {
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
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_RadioList__WEBPACK_IMPORTED_MODULE_12__.q, {
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
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/LoadMore/LoadMore.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { e: () => LoadMore });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				Button = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			var cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const CSS_LoadMore = ({
					pagination,
					hideProgressIndicator,
					hideProgressText,
					progressIndicatorWidth,
					progressIndicatorSize,
					color,
					backgroundColor,
					theme,
				}) => {
					const radialAngle = Math.max(3.6, (3.6 * Math.floor((pagination.end / pagination.totalResults) * 100)) / 2);
					return (0, emotion_react_browser_esm.AH)({
						'& .ss__load-more__button--hidden': { display: 'none' },
						'& .ss__button': { alignItems: 'center' },
						'& .ss__load-more__icon': {
							marginLeft: '5px',
							animation: `${(0, emotion_react_browser_esm.i7)({
								'0%': { transform: 'rotate(0deg)' },
								'100%': { transform: 'rotate(360deg)' },
							})} linear 1s infinite`,
						},
						'&.ss__load-more--bar': {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
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
						'&.ss__load-more--radial': {
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							'& .ss__load-more__button': { height: 'fit-content' },
							'& .ss__load-more__progress': {
								height: !hideProgressText && hideProgressIndicator ? void 0 : progressIndicatorWidth,
								'& .ss__load-more__progress__indicator': {
									'& .ss__load-more__progress__indicator__radial': {
										background: backgroundColor || theme?.variables?.colors?.secondary || '#f8f8f8',
										height: progressIndicatorWidth,
										width: progressIndicatorWidth,
										borderRadius: '50%',
										'& .ss__load-more__progress__indicator__radial__mask, .ss__load-more__progress__indicator__radial__mask__fill': {
											width: progressIndicatorWidth,
											height: progressIndicatorWidth,
											position: 'absolute',
											borderRadius: '50%',
										},
										'& .ss__load-more__progress__indicator__radial__mask': { clipPath: `inset(0px 0px 0px calc(${progressIndicatorWidth}/2))` },
										'& .ss__load-more__progress__indicator__radial__mask__fill': { transform: `rotate(${radialAngle}deg)` },
									},
									'& .ss__load-more__progress__text': {
										width: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
										height: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
										borderRadius: '50%',
										background: '#fff',
										lineHeight: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
										textAlign: 'center',
										marginTop: `calc(${progressIndicatorSize} / 2)`,
										marginLeft: `calc(${progressIndicatorSize} / 2)`,
										position: 'absolute',
										fontSize: `calc(${progressIndicatorWidth} / ${Math.max(1, `${pagination.end}`.length + `${pagination.totalResults}`.length)})`,
									},
									'& .ss__load-more__progress__indicator__radial__mask': {
										'& .ss__load-more__progress__indicator__radial__mask__fill': {
											clipPath: `inset(0px calc((${progressIndicatorWidth} / 2)) 0px 0px)`,
											backgroundColor: color || theme?.variables?.colors?.primary || '#ccc',
										},
										'&.ss__load-more__progress__indicator__radial__mask--full': { transform: `rotate(${radialAngle}deg)` },
									},
								},
							},
						},
					});
				},
				LoadMore = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = {
							loadMoreText: 'Load More',
							progressIndicator: 'bar',
							loadingLocation: 'button',
							loadingIcon: 'spinner',
							progressIndicatorWidth: 'radial' === properties?.progressIndicator ? '70px' : '300px',
							progressIndicatorSize: 'radial' === properties?.progressIndicator ? '10px' : '5px',
						},
						props = (0, mergeProps.v6)('loadMore', globalTheme, defaultProps, properties),
						{
							pagination,
							controller,
							onClick,
							autoFetch,
							intersectionOffset,
							loading,
							loadMoreText,
							progressIndicator,
							hideProgressIndicator,
							hideProgressText,
							loadingLocation,
							loadingIcon,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						store = pagination || controller?.store?.pagination,
						isLoading = 'boolean' == typeof loading ? loading : controller?.store?.loading,
						isButtonDisabled = (isLoading && 'button' === loadingLocation) || !Boolean(store?.next),
						subProps_button = {
							className: classnames_default()(
								'ss__load-more__button',
								{ 'ss__load-more__button--hidden': isLoading && 'outside' === loadingLocation },
								{ 'ss__load-more__button--disabled': isButtonDisabled }
							),
							disabled: isButtonDisabled,
							...globalTheme?.components?.button,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__load-more__icon',
							...globalTheme?.components?.icon,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					if (!store) return (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
					const styling = { 'ss-name': props.name },
						stylingProps = { ...props, pagination: store };
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_LoadMore(stylingProps), style]);
					const autoProps = {};
					if (autoFetch) {
						const loadMoreRef = (0, hooks_module.li)(null);
						autoProps.ref = loadMoreRef;
						const loadMoreInViewport = (0, useIntersection.v)(loadMoreRef, intersectionOffset || '0px'),
							[preventLoading, setPreventLoading] = (0, hooks_module.J0)(!0);
						isLoading
							? setPreventLoading(!0)
							: ((func, delay) => {
									const funcRef = (0, hooks_module.li)(func);
									(funcRef.current = func),
										(0, hooks_module.vJ)(() => {
											const handler = setTimeout(() => {
												funcRef.current();
											}, delay);
											return () => {
												clearTimeout(handler);
											};
										}, [func, delay]);
							  })(() => {
									setPreventLoading(!1);
							  }, 500),
							loadMoreInViewport && store.next && !preventLoading && store.next.url.go({ history: 'replace' });
					}
					const defaultLang = {
							loadMoreButton: { value: loadMoreText, attributes: { 'aria-label': loadMoreText } },
							progressText: { value: `You've viewed ${store?.end} of ${store?.totalResults} products` },
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { paginationStore: store });
					return store.totalResults
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									...styling,
									...autoProps,
									className: classnames_default()(
										'ss__load-more',
										`ss__load-more--${progressIndicator}`,
										{ 'ss__load-more--loading': isLoading },
										{ 'ss__load-more--autoFetch': autoFetch },
										className
									),
									children: [
										!autoFetch &&
											(0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
												children: [
													(0, emotion_react_jsx_runtime_browser_esm.FD)(Button.$, {
														onClick: (e) => {
															store.next?.url.go({ history: 'replace' }), onClick && onClick(e);
														},
														...subProps_button,
														...mergedLang.loadMoreButton.attributes,
														children: [
															(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.loadMoreButton.value, children: loadMoreText }),
															loadingIcon && isLoading && 'button' === loadingLocation
																? (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
																		...subProps_icon,
																		...('string' == typeof loadingIcon ? { icon: loadingIcon } : loadingIcon),
																  })
																: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {}),
														],
													}),
													loadingIcon &&
														isLoading &&
														'outside' === loadingLocation &&
														(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
															...subProps_icon,
															...('string' == typeof loadingIcon ? { icon: loadingIcon } : loadingIcon),
														}),
												],
											}),
										(!hideProgressIndicator || !hideProgressText) &&
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: 'ss__load-more__progress',
												children: [
													'bar' === progressIndicator &&
														(0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
															children: [
																!hideProgressIndicator &&
																	(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__load-more__progress__indicator',
																		children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__load-more__progress__indicator__bar',
																		}),
																	}),
																!hideProgressText &&
																	(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__load-more__progress__text',
																		...mergedLang.progressText?.all,
																	}),
															],
														}),
													'radial' === progressIndicator &&
														(0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {
															children:
																!hideProgressText && hideProgressIndicator
																	? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__load-more__progress__text',
																			children: `${store.end} / ${store.totalResults}`,
																	  })
																	: hideProgressIndicator
																	? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
																	: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__load-more__progress__indicator',
																			children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																				className: 'ss__load-more__progress__indicator__radial',
																				children: [
																					(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																						className:
																							'ss__load-more__progress__indicator__radial__mask ss__load-more__progress__indicator__radial__mask--full',
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: 'ss__load-more__progress__indicator__radial__mask__fill',
																						}),
																					}),
																					(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																						className:
																							'ss__load-more__progress__indicator__radial__mask ss__load-more__progress__indicator__radial__mask--half',
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: 'ss__load-more__progress__indicator__radial__mask__fill',
																						}),
																					}),
																					(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																						className: 'ss__load-more__progress__text',
																						children: [' ', hideProgressText ? '' : `${store.end} / ${store.totalResults}`],
																					}),
																				],
																			}),
																	  }),
														}),
												],
											}),
									],
								}),
						  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				});
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
		'./components/src/components/Organisms/Toolbar/Toolbar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { M: () => Toolbar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_FilterSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Molecules_Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/Pagination/Pagination.tsx'),
				_Molecules_LoadMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
				_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Molecules/SortBy/SortBy.tsx'),
				_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/PerPage/PerPage.tsx'),
				_Molecules_LayoutSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'
				);
			const CSS_toolbar = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				Toolbar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						snap = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.uk)(),
						themeStore = snap?.templates?.getThemeStore(globalTheme.name),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)(
							'toolbar',
							globalTheme,
							{ hideFilterSummary: !1, hideLayoutSelector: !1, hidePerPage: !1, hideSortBy: !1, hidePagination: !1 },
							properties
						),
						{
							controller,
							hideFilterSummary,
							hidePerPage,
							hideSortBy,
							hideLayoutSelector,
							hidePagination,
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
						: (styling.css = [CSS_toolbar(stylingProps), style]);
					const subProps_FilterSummary = {
							controller,
							className: 'ss__toolbar__filter-summary',
							...globalTheme?.components?.filterSummary,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_LayoutSelector = {
							controller,
							className: 'ss__toolbar__layout-selector',
							...globalTheme?.components?.layoutSelector,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_Pagination = {
							controller,
							className: 'ss__toolbar__pagination',
							...globalTheme?.components?.pagination,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_LoadMore = {
							controller,
							className: 'ss__toolbar__load-more',
							...globalTheme?.components?.loadMore,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_SortBy = {
							controller,
							className: 'ss__toolbar__sort-by',
							...globalTheme?.components?.sortBy,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_PerPage = {
							controller,
							className: 'ss__toolbar__per-page',
							...globalTheme?.components?.perPage,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__toolbar', className),
							children: [
								!hideFilterSummary &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_FilterSummary__WEBPACK_IMPORTED_MODULE_9__.r, {
										...subProps_FilterSummary,
									}),
								!hideLayoutSelector &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_LayoutSelector__WEBPACK_IMPORTED_MODULE_10__.s, {
										onSelect: (e, option) => {
											option && themeStore?.layout.select(option);
										},
										selected: themeStore?.layout.selected,
										options: props.theme?.layoutOptions,
										...subProps_LayoutSelector,
									}),
								!hideSortBy &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_11__.g, {
										...subProps_SortBy,
									}),
								!hidePerPage &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_12__.F, {
										...subProps_PerPage,
									}),
								!hidePagination &&
									(controller.config.settings?.infinite
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_LoadMore__WEBPACK_IMPORTED_MODULE_13__.e, {
												...subProps_LoadMore,
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_Pagination__WEBPACK_IMPORTED_MODULE_14__.d, {
												...subProps_Pagination,
										  })),
							],
						}),
					});
				});
		},
		'./components/src/hooks/useIntersection.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersection });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersection = (ref, rootMargin = '0px', fireOnce = !1) => {
				const [isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const observer = new IntersectionObserver(
							([entry]) => {
								setIntersecting(entry.isIntersecting), fireOnce && entry.isIntersecting && observer.unobserve(ref.current);
							},
							{ rootMargin }
						);
						return (
							ref.current && observer.observe(ref.current),
							() => {
								observer.unobserve(ref.current);
							}
						);
					}, []),
					isIntersecting
				);
			};
		},
	},
]);
