'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[957],
	{
		'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { B: () => Breadcrumbs });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						'& .ss__breadcrumbs__crumbs': { padding: '0' },
						'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
					}),
				Breadcrumbs = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('breadcrumbs', globalTheme, { separator: '>' }, properties),
						{ data, separator, className } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__breadcrumbs', className),
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('ul', {
								className: 'ss__breadcrumbs__crumbs',
								children: data
									.map((crumb) =>
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('li', {
											className: 'ss__breadcrumbs__crumbs__crumb',
											children: crumb.url
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('a', { href: crumb.url, children: crumb.label })
												: crumb.label,
										})
									)
									.reduce((prev, curr) => [
										prev,
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('li', {
											className: 'ss__breadcrumbs__crumbs__separator',
											children: separator,
										}),
										curr,
									]),
							}),
						}),
					});
				});
		},
		'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => FormattedNumber });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({});
			function FormattedNumber(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)(
						'formattedNumber',
						globalTheme,
						{ symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !0 },
						properties
					),
					{ value, symbol, decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator, symbolAfter, className, raw } = props,
					formattedNumber = _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_5__.Z(value, {
						symbol,
						decimalPlaces,
						padDecimalPlaces,
						thousandsSeparator,
						decimalSeparator,
						symbolAfter,
					}),
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
				return raw
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children: formattedNumber })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('span', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__formatted-number', className),
								...styling,
								children: formattedNumber,
							}),
					  });
			}
		},
		'./components/src/components/Atoms/Loading/LoadingBar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => LoadingBar });
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
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ color, height, backgroundColor, theme }) => {
					const animation = (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.i7)({
						from: { left: '-200px', width: '30%' },
						'50%': { width: '30%' },
						'70%': { width: '70%' },
						'80%': { left: '50%' },
						'95%': { left: '120%' },
						to: { left: '100%' },
					});
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						height,
						position: 'fixed',
						top: '0',
						left: '0',
						right: '0',
						margin: 'auto',
						transition: 'opacity 0.3s ease',
						opacity: '1',
						visibility: 'visible',
						zIndex: '10000',
						background: backgroundColor || theme?.variables?.colors?.secondary || '#f8f8f8',
						'& .ss__loading-bar__bar': {
							position: 'absolute',
							top: '0',
							left: '-200px',
							height: '100%',
							background: `${color || theme?.variables?.colors?.primary || '#ccc'}`,
							animation: `${animation} 2s linear infinite`,
						},
					});
				},
				LoadingBar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('loadingBar', globalTheme, { height: '5px' }, properties),
						{ active, className } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
					return active
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__loading-bar', className),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', { className: 'ss__loading-bar__bar' }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { w: () => SearchHeader });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
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
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						defaultLang = {
							titleText: { value: titleText },
							subtitleText: { value: subtitleText },
							correctedQueryText: { value: correctedQueryText },
							noResultsText: { value: noResultsText },
							didYouMeanText: { value: didYouMeanText },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { pagination, search });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('header', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__search-header', className),
							children: landingPage
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h3', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
											'ss__search-header__title',
											'ss__search-header__title--landing-page'
										),
										children: landingPage.title,
								  })
								: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
										children: [
											pagination?.totalResults
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FK,
														{
															children: [
																!hideTitleText &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h3', {
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
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h5', {
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
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
														className: 'ss__search-header__no-results-wrapper',
														children: [
															!hideNoResultsText &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h3', {
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
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h4', {
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
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h4', {
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
		'./components/src/components/Atoms/Skeleton/Skeleton.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { E: () => Skeleton });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ width, height, round, backgroundColor, animatedColor }) => {
					const animation = (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.i7)({
						from: { transform: 'translateX(-100%)' },
						to: { transform: 'translateX(100%)' },
					});
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						width,
						height,
						borderRadius: round ? width : '0.25rem',
						backgroundColor,
						display: 'inline-flex',
						lineHeight: '1',
						position: 'relative',
						overflow: 'hidden',
						zIndex: '1',
						'&:after': {
							content: '""',
							display: 'block',
							position: 'absolute',
							left: '0',
							right: '0',
							height: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundImage: `linear-gradient(90deg, ${backgroundColor}, ${animatedColor}, ${backgroundColor})`,
							transform: 'translateX(-100%)',
							animation: `${animation} 1.5s linear infinite`,
							animationTimingFunction: 'ease-in-out',
						},
					});
				},
				Skeleton = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)(
							'skeleton',
							globalTheme,
							{ backgroundColor: '#ebebeb', animatedColor: '#f5f5f5' },
							properties
						),
						{ className } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__skeleton', className),
						}),
					});
				});
		},
		'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { z: () => ErrorHandler });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/Colour/Colour.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const warnColour = new _utilities__WEBPACK_IMPORTED_MODULE_3__.V('#ecaa15'),
				errorColour = new _utilities__WEBPACK_IMPORTED_MODULE_3__.V('#cc1212'),
				infoColour = new _utilities__WEBPACK_IMPORTED_MODULE_3__.V('#4c3ce2'),
				defaultStyles = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						borderRadius: '2px',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderLeft: '4px solid',
						'.ss__error-handler__message': {
							padding: '10px',
							display: 'flex',
							alignItems: 'center',
							'.ss__error-handler__message__type': { fontWeight: 'bold', marginRight: '5px' },
							'.ss__icon': { marginRight: '10px' },
						},
						'& .ss__error-handler__button': {
							backgroundColor: 'unset',
							color: 'inherit',
							borderColor: theme?.variables?.colors?.primary,
							width: ['150px', 'fit-content'],
							margin: '5px 10px',
							'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
							'.ss__icon': { margin: '0 5px 0 0' },
						},
						'&.ss__error-handler--error': {
							backgroundColor: errorColour.lighten(180).hex,
							borderLeftColor: errorColour.hex,
							'.ss__error-handler__message': { '.ss__icon': { fill: errorColour.hex } },
						},
						'&.ss__error-handler--warning': {
							backgroundColor: warnColour.lighten(180).hex,
							borderLeftColor: warnColour.hex,
							'.ss__icon': { fill: warnColour.hex, stroke: warnColour.hex },
							'.ss__error-handler__button': {
								color: warnColour.hex,
								borderColor: warnColour.hex,
								fontWeight: 'bold',
								textTransform: 'uppercase',
								display: 'inline-flex',
								alignItems: 'center',
								'.ss__button__content': { order: 2 },
								'.ss__button__icon': { order: 1, width: '10px', height: '10px', fill: warnColour.hex, stroke: warnColour.hex },
								'&:hover': {
									color: warnColour.darken(30).hex,
									borderColor: warnColour.darken(30).hex,
									'.ss__button__icon': { fill: warnColour.darken(30).hex, stroke: warnColour.darken(30).hex },
								},
							},
						},
						'&.ss__error-handler--info': {
							backgroundColor: infoColour.lighten(180).hex,
							borderLeftColor: infoColour.hex,
							'.ss__error-handler__message': { '.ss__icon': { fill: infoColour.hex } },
						},
					}),
				ErrorHandler = (0, mobx_react__WEBPACK_IMPORTED_MODULE_5__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('errorHandler', globalTheme, {}, properties),
						{ controller, error, disableStyles, onRetryClick, className, treePath } = props,
						subProps_icon = {
							size: '18px',
							className: 'ss__error-handler__icon',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_buttonRetry = {
							className: 'ss__error-handler__button',
							icon: 'rotate-right',
							...globalTheme?.components?.button,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						errorObject = controller?.store?.error || error,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = {
							warningText: { value: 'Warning:' },
							infoText: { value: 'Info:' },
							errorText: { value: 'Error:' },
							reloadText: { value: 'Retry' },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { controller });
					return Object.values(_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_11__.B).includes(errorObject?.type) && errorObject?.message
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_providers__WEBPACK_IMPORTED_MODULE_13__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__error-handler',
										`ss__error-handler--${errorObject.type}`,
										className
									),
									...styling,
									children: (() => {
										switch (errorObject.type) {
											case _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_11__.B.WARNING:
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FK,
													{
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
																		...subProps_icon,
																		icon: 'warn',
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
																		className: 'ss__error-handler__message__type',
																		...mergedLang.warningText?.all,
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
																		className: 'ss__error-handler__message__content',
																		children: errorObject.message,
																	}),
																],
															}),
															429 == errorObject?.code
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
																		_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_15__.$,
																		{
																			...subProps_buttonRetry,
																			onClick: (e) => {
																				onRetryClick ? onRetryClick(e) : controller?.search();
																			},
																			...mergedLang.reloadText.attributes,
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
																				className: 'ss__error-handler__button__text',
																				...mergedLang.reloadText.value,
																			}),
																		}
																  )
																: null,
														],
													}
												);
											case _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_11__.B.ERROR:
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
													className: 'ss__error-handler__message',
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
															...subProps_icon,
															icon: 'error',
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
															className: 'ss__error-handler__message__type',
															...mergedLang.errorText?.all,
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
															className: 'ss__error-handler__message__content',
															children: errorObject.message,
														}),
													],
												});
											case _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_11__.B.INFO:
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
													className: 'ss__error-handler__message',
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
															...subProps_icon,
															icon: 'info',
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
															className: 'ss__error-handler__message__type',
															...mergedLang.infoText?.all,
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('span', {
															className: 'ss__error-handler__message__content',
															children: errorObject.message,
														}),
													],
												});
										}
									})(),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/Rating/Rating.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => Rating });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'flex',
						alignItems: 'center',
						'& .ss__rating__icons': { position: 'relative' },
						'& .ss__rating__stars': {
							width: '100%',
							display: 'inline-grid',
							gridTemplateColumns: '20% 20% 20% 20% 20%',
							'&.ss__rating__stars--full': { position: 'absolute', top: 0, left: 0 },
							'&.ss__rating__stars--empty': { position: 'relative' },
						},
						'& .ss__rating__stars__star': { overflow: 'hidden' },
					}),
				Rating = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('rating', globalTheme, { fullIcon: 'star', emptyIcon: 'star-o' }, properties),
						{ alwaysRender, count, text, disablePartialFill, emptyIcon, fullIcon, disableStyles, className, treePath } = props,
						subProps_fullIcon = {
							name: 'star--full',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_emptyIcon = {
							name: 'star--empty',
							color: '#ccc',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let value = props.value;
					isNaN(value) && (value = Number(value) || 0), value < 0 && (value = 0), value > 5 && (value = 5);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						numStarsToShow = disablePartialFill ? Math.floor(value) : Math.ceil(value);
					return alwaysRender || value || count
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__rating', className),
									...styling,
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
											className: 'ss__rating__icons',
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
													className: 'ss__rating__stars ss__rating__stars--empty',
													children: [...Array(5)].map(() =>
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
															className: 'ss__rating__stars__star ss__rating__stars__star--empty',
															children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_10__.I, {
																...subProps_emptyIcon,
																...('string' == typeof emptyIcon ? { icon: emptyIcon } : emptyIcon),
															}),
														})
													),
												}),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
													className: 'ss__rating__stars ss__rating__stars--full',
													children: [...Array(numStarsToShow)].map((e, i) => {
														let width = 100;
														return (
															i + 1 != numStarsToShow || disablePartialFill || value % 1 == 0 || (width = 100 * (value % 1 || 1)),
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--full',
																style: { width: `${width}%` },
																children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(
																	_Atoms_Icon__WEBPACK_IMPORTED_MODULE_10__.I,
																	{ ...subProps_fullIcon, ...('string' == typeof fullIcon ? { icon: fullIcon } : fullIcon) }
																),
															})
														);
													}),
												}),
											],
										}),
										count
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('span', {
													className: 'ss__rating__count',
													children: ['(', count, ')'],
											  })
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FK,
													{}
											  ),
										text
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', { className: 'ss__rating__text', children: text })
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FK,
													{}
											  ),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { n: () => BranchOverride });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const defaultStyles = ({ componentTheme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						width: '360px',
						height: '120px',
						overflow: 'hidden',
						fontSize: '14px',
						position: 'fixed',
						zIndex: '9999',
						cursor: 'auto',
						bottom: '50px',
						right: 0,
						background: componentTheme.main.background,
						color: componentTheme.main.color,
						border: componentTheme.main.border,
						borderRight: 0,
						borderTopLeftRadius: '5px',
						borderBottomLeftRadius: '5px',
						boxShadow: componentTheme.main.boxShadow,
						transition: 'height ease 0.2s, right ease 0.5s 0.2s',
						'&.ss__branch-override--collapsed': {
							transition: 'height ease 0.5s 0.5s, right ease 0.5s',
							right: '-316px',
							height: '50px',
							cursor: 'pointer',
						},
						'.ss__branch-override__top': {
							padding: '10px',
							background: componentTheme.top.background,
							borderBottom: componentTheme.top.border,
							'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
							'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', padding: '5px', cursor: 'pointer' },
							'.ss__branch-override__top__button': {
								borderRadius: '5px',
								padding: '6px',
								height: '100%',
								lineHeight: '14px',
								textAlign: 'center',
								cursor: 'pointer',
								fontSize: '10px',
								border: componentTheme.top.button.border,
								color: componentTheme.top.button.color,
								float: 'right',
								marginRight: '14px',
							},
						},
						'.ss__branch-override__bottom': {
							padding: '10px 15px',
							fontSize: '12px',
							'.ss__branch-override__bottom__left': {
								fontWeight: 'bold',
								fontStyle: componentTheme.bottom.branch.style,
								color: componentTheme.bottom.branch.color,
								fontSize: '14px',
								lineHeight: '20px',
								display: 'inline-flex',
								alignItems: 'center',
								maxWidth: '180px',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								svg: { marginRight: '10px' },
							},
							'.ss__branch-override__bottom__right': {
								float: 'right',
								fontStyle: 'italic',
								color: componentTheme.bottom.additional.color,
								fontSize: '12px',
								lineHeight: '20px',
							},
							'.ss__branch-override__bottom__content': { marginTop: '10px' },
						},
					}),
				componentThemes = {
					darkTheme: {
						class: 'ss__branch-override--dark',
						main: { border: '0', background: 'rgba(59, 35, 173, 0.9)', color: '#fff', boxShadow: '#4c3ce2 1px 1px 3px 0px' },
						top: {
							background: 'rgba(59, 35, 173, 0.3)',
							border: '1px solid #4c3de1',
							logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
							button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
							close: { fill: '#fff' },
						},
						bottom: {
							content: 'Preview functionality may differ from production.',
							branch: { color: '#03cee1', style: 'italic' },
							additional: { color: '#03cee1' },
						},
					},
					lightTheme: {
						class: 'ss__branch-override--light',
						main: {
							border: '1px solid #ccc',
							background: 'rgba(255, 255, 255, 0.95)',
							color: '#515151',
							boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
						},
						top: {
							border: '1px solid #ccc',
							logo: { src: 'https://snapui.searchspring.io/searchspring.svg' },
							button: { border: '1px solid #515151', color: '#515151', content: 'STOP PREVIEW' },
							close: { fill: '#515151' },
						},
						bottom: {
							content: 'Preview functionality may differ from production.',
							branch: { color: '#3a23ad', style: 'italic' },
							additional: { color: '#3a23ad' },
						},
					},
					failureTheme: {
						class: 'ss__branch-override--error',
						main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: 'rgba(130, 6, 6, 0.4) 1px 1px 3px 0px' },
						top: {
							background: 'rgba(130, 6, 6, 0.3)',
							border: '1px solid #760000',
							logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
							button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
							close: { fill: '#fff' },
						},
						bottom: {
							content: 'Incorrect branch name or branch no longer exists.',
							branch: { color: '#be9628', style: 'italic' },
							additional: { color: '#be9628' },
						},
					},
				},
				BranchOverride = (properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('branchOverride', globalTheme, {}, properties),
						{ branch, details, error, className, darkMode, disableStyles, onRemoveClick, treePath } = props,
						subProps_icon = {
							className: 'ss__branch-override__bottom__left__icon',
							size: '12px',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						prefersDark = 'boolean' == typeof darkMode ? darkMode : !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
						[themeName, setThemeName] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(prefersDark ? 'darkTheme' : 'lightTheme'),
						[collapsed, setCollapsed] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(0);
					error && setThemeName('failureTheme');
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)({ ...props, componentTheme: componentThemes[themeName] }, defaultStyles);
					return (details || error) && branch
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__branch-override',
									componentThemes[themeName].class,
									{ 'ss__branch-override--collapsed': collapsed },
									className
								),
								...styling,
								onClick: (e) => {
									e.preventDefault(), e.stopPropagation(), setCollapsed(0);
								},
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
										className: 'ss__branch-override__top',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('img', {
												className: 'ss__branch-override__top__logo',
												src: componentThemes[themeName].top.logo.src,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
												className: 'ss__branch-override__top__collapse',
												onClick: (e) => {
													e.preventDefault(), e.stopPropagation(), setCollapsed(1);
												},
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__.I, {
													size: '18px',
													color: componentThemes[themeName].top.close.fill,
													...subProps_icon,
													icon: 'close-thin',
												}),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
												className: 'ss__branch-override__top__button',
												onClick: (e) => {
													e.preventDefault(), e.stopPropagation(), onRemoveClick && onRemoveClick(e, branch);
												},
												children: componentThemes[themeName].top.button.content,
											}),
										],
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
										className: 'ss__branch-override__bottom',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
												className: 'ss__branch-override__bottom__left',
												children: error
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(
															_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FK,
															{
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__.I, {
																		size: '12px',
																		color: componentThemes[themeName].bottom.branch.color,
																		...subProps_icon,
																		icon: 'warn',
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', { children: error.message }),
																],
															}
													  )
													: branch,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
												className: 'ss__branch-override__bottom__right',
												children: error ? branch : details?.lastModified,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
												className: 'ss__branch-override__bottom__content',
												children: error?.description || componentThemes[themeName].bottom.content,
											}),
										],
									}),
								],
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				};
		},
		'./components/src/components/Organisms/NoResults/NoResults.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => NoResults });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_hooks_useComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				_hooks_useCreateController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useLang.tsx');
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
							className,
							treePath,
						} = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles),
						suggestionsExist = suggestionsList && Array.isArray(suggestionsList) && 0 !== suggestionsList.length,
						contactsExist = contactsList && Array.isArray(contactsList) && 0 !== contactsList.length;
					let recommendationTemplateComponent, recommendationTemplateResultComponent, recsController;
					if (templates?.recommendation?.enabled) {
						const componentName = templates?.recommendation?.component || 'Recommendation',
							snap = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.uk)();
						if (snap?.templates) {
							const themeName = properties.theme?.name;
							let defaultResultComponentFromTheme;
							themeName && (defaultResultComponentFromTheme = snap?.templates?.config.themes[themeName]?.resultComponent);
							const resultComponentName = templates?.recommendation?.resultComponent || defaultResultComponentFromTheme,
								mergedConfig = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, templates.recommendation.config);
							(mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`),
								(recsController = (0, _hooks_useCreateController__WEBPACK_IMPORTED_MODULE_8__.i)(snap, 'recommendation', mergedConfig)),
								recsController?.store?.loaded ||
									recsController?.store?.loading ||
									'error' === recsController?.store.error?.type ||
									recsController?.search(),
								resultComponentName &&
									snap?.templates?.library.import.component.result &&
									(recommendationTemplateResultComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_9__.x)(
										snap?.templates?.library.import.component.result,
										resultComponentName
									)),
								componentName &&
									snap?.templates?.library.import.component.recommendation.default &&
									(recommendationTemplateComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_9__.x)(
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
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_10__.p(
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
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.u)(lang, { controller });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__no-results', className),
						...styling,
						children: [
							contentSlot &&
								('string' == typeof contentSlot
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
											className: 'ss__no-results__slot',
											dangerouslySetInnerHTML: { __html: contentSlot },
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
											className: 'ss__no-results__slot',
											children: (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(contentSlot, { controller, treePath }),
									  })),
							!hideSuggestions &&
								(suggestionsTitleText || suggestionsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
									className: 'ss__no-results__suggestions',
									children: [
										suggestionsTitleText &&
											!hideSuggestionsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('h3', {
												className: 'ss__no-results__suggestions__title',
												...mergedLang.suggestionsTitleText?.all,
											}),
										suggestionsExist &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('ul', {
												className: 'ss__no-results__suggestions__list',
												...mergedLang.suggestionsList?.all,
											}),
									],
								}),
							!hideContact &&
								(contactsTitleText || contactsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
									className: 'ss__no-results__contact',
									children: [
										contactsTitleText &&
											!hideContactsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('h3', {
												className: 'ss__no-results__contact__title',
												...mergedLang.contactsTitleText?.all,
											}),
										contactsExist && (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', { ...mergedLang.contactsList?.all }),
									],
								}),
							RecommendationTemplateComponent && recsController?.store?.loaded
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
										className: 'ss__no-results__recommendations',
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(RecommendationTemplateComponent, {
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
		'./components/src/components/Templates/Recommendation/Recommendation.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { A: () => Recommendation });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = ({ vertical }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						height: vertical ? '100%' : void 0,
						'.ss__result__image-wrapper': { height: vertical ? '85%' : void 0 },
					}),
				Recommendation = (0, mobx_react__WEBPACK_IMPORTED_MODULE_5__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							breakpoints: properties.vertical
								? JSON.parse(JSON.stringify(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.og))
								: JSON.parse(JSON.stringify(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.K)),
							pagination: !1,
							loop: !0,
						};
					let displaySettings,
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendation', globalTheme, defaultProps, properties);
					!properties.theme?.name &&
						props.breakpoints &&
						((displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props.breakpoints)),
						displaySettings && Object.keys(displaySettings).length && (props = { ...props, ...displaySettings }));
					const {
							title,
							controller,
							children,
							breakpoints,
							loop,
							results,
							pagination,
							nextButton,
							prevButton,
							hideButtons,
							resultComponent,
							disableStyles,
							className,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							lazyRender,
							vertical,
							hideTitle,
							treePath,
							...additionalProps
						} = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender };
					if (!controller || 'recommendation' !== controller.type)
						throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
					const resultsToRender = results || controller.store?.results;
					if (Array.isArray(children) && children.length !== resultsToRender.length)
						return (
							controller.log.error(
								"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
							),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const subProps_carousel = {
							className: 'ss__recommendation__Carousel',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles, vertical }),
							theme: props?.theme,
							treePath,
						},
						subProps_result = {
							className: 'ss__recommendation__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Z)(props, defaultStyles),
						[isVisible, setIsVisible] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),
						recsRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
					(!mergedlazyRender?.enabled ||
						(0, _hooks__WEBPACK_IMPORTED_MODULE_13__.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
						setIsVisible(!0);
					const defaultLang = { titleText: { value: `${title}` } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_14__.u)(lang, {});
					return (Array.isArray(children) && children.length) || resultsToRender?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_15__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation', className),
									ref: recsRef,
									children: isVisible
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(
												_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_16__.l,
												{
													controller,
													children: [
														title &&
															!hideTitle &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h3', {
																className: 'ss__recommendation__title',
																...mergedLang.titleText?.all,
																children: title,
															}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.FN, {
															prevButton,
															nextButton,
															hideButtons,
															loop,
															pagination,
															breakpoints,
															...subProps_carousel,
															...additionalProps,
															...displaySettings,
															children:
																Array.isArray(children) && children.length
																	? children.map((child, idx) =>
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.x,
																				{ controller, result: resultsToRender[idx], children: child }
																			)
																	  )
																	: resultsToRender.map((result) =>
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.x,
																				{
																					controller,
																					result,
																					children: (() => {
																						if (resultComponent && controller) {
																							const ResultComponent = resultComponent;
																							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(ResultComponent, {
																								controller,
																								result,
																							});
																						}
																						return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																							_Molecules_Result__WEBPACK_IMPORTED_MODULE_18__.Q,
																							{ ...subProps_result, controller, result },
																							result.id
																						);
																					})(),
																				}
																			)
																	  ),
														}),
													],
												}
										  )
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
												_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_16__.l,
												{
													controller,
													children:
														Array.isArray(children) && children.length
															? children.map((child, idx) =>
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																		_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.x,
																		{
																			controller,
																			result: resultsToRender[idx],
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
																				{}
																			),
																		}
																	)
															  )
															: resultsToRender.map((result) =>
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																		_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.x,
																		{
																			controller,
																			result,
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
																				{}
																			),
																		}
																	)
															  ),
												}
										  ),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK, {});
				});
		},
		'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { F: () => RecommendationBundleEasyAdd });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)({ '.ss__recommendation-bundle__wrapper__cta': { textAlign: 'center' } }),
				RecommendationBundleEasyAdd = (0, mobx_react__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)('recommendationBundleEasyAdd', globalTheme, {}, properties),
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = props,
						subProps_recommendationBundle = {
							className: 'ss__recommendation-bundle-easy-add',
							hideCheckboxes: !0,
							seedText: '',
							ctaButtonText: 'Add Both',
							ctaInline: !1,
							hideSeed: !0,
							vertical: !0,
							limit: 1,
							carousel: { enabled: !1 },
							separatorIcon: !1,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_4__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_7__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
					});
				});
		},
		'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { a: () => RecommendationBundleList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				),
				_Atoms_Price__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)({
						'.ss__recommendation-bundle__wrapper__selector__result-wrapper': {
							display: 'flex',
							'.ss__recommendation-bundle__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
							'.ss__result__details': { textAlign: 'left' },
						},
						'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
						'.ss__recommendation-bundle__wrapper': { order: '3' },
						'.ss__recommendation-bundle__wrapper__cta': {
							order: '2',
							'.ss__button': { cursor: 'pointer', border: '1px solid black' },
							'.cta__inner_images': { display: 'flex', flexDirection: 'row' },
							'.cta__inner__image-wrapper .ss__icon': { top: '50%', position: 'absolute', right: '-0.5em' },
							'.cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
							'.cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
						},
					}),
				RecommendationBundleList = (0, mobx_react__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)('recommendationBundleList', globalTheme, {}, properties),
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = props,
						subProps_recommendationBundle = {
							className: 'ss__recommendation-bundle-list',
							seedText: '',
							ctaInline: !1,
							limit: 5,
							preselectedCount: 2,
							carousel: { enabled: !1, seedInCarousel: !0 },
							ctaSlot: (props) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(CTASlot, { ...props }),
							resultComponent: (props) =>
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_5__.Q, {
									hideImage: !0,
									...props,
								}),
							vertical: !0,
							separatorIcon: !1,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_8__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
					});
				}),
				CTASlot = (0, mobx_react__WEBPACK_IMPORTED_MODULE_1__.PA)((props) => {
					const cartStore = props.cartStore;
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('div', {
						className: 'cta',
						children: [
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('div', {
								className: 'cta__inner',
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('div', {
										className: 'cta__inner_images',
										children: cartStore.items.map((item) => {
											const core = item.display.mappings.core;
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('div', {
												className: 'cta__inner__image-wrapper',
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_9__._, {
														src: core.thumbnailImageUrl,
														alt: core.name,
														lazy: !1,
													}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_10__.I, {
														icon: 'plus',
														size: 12,
													}),
												],
											});
										}),
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('div', {
										className: 'cta__inner__subtotal__title',
										children: `${cartStore.count} item${1 != cartStore.count ? 's' : ''}`,
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('div', {
										className: 'cta__inner__price',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('div', {
												className: 'cta__inner__price__title',
												children: 'Total Price',
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('div', {
												className: 'cta__inner__price__wrapper',
												children: [
													cartStore.msrp > cartStore.price &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('span', {
															className: 'cta__inner__price__msrp',
															children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('s', {
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_11__.g, {
																		value: cartStore.msrp,
																	}),
																	' USD',
																],
															}),
														}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)('span', {
														className: 'cta__inner__price__msrp',
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_11__.g, {
																value: cartStore.price,
															}),
															' USD',
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('div', {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_12__.$, {
									disabled: 0 == cartStore.items.length,
									disableStyles: !0,
									className: 'cta__add-button ' + (props.addedToCart ? 'cta__add-button--thanks' : ''),
									onClick: (e) => props.onAddToCart(e),
									children: props.addedToCart ? props.ctaButtonSuccessText : props.ctaButtonText,
								}),
							}),
						],
					});
				});
		},
		'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { a: () => RecommendationBundleVertical });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)({
						'.ss__recommendation-bundle__wrapper': { flexDirection: 'column' },
						'.ss__recommendation-bundle__wrapper__cta': { textAlign: 'center' },
					}),
				RecommendationBundleVertical = (0, mobx_react__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)('recommendationBundleVertical', globalTheme, {}, properties),
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = props,
						subProps_recommendationBundle = {
							className: 'ss__recommendation-bundle-vertical',
							ctaInline: !1,
							carousel: { enabled: !1 },
							separatorIcon: !1,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_4__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_7__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
					});
				});
		},
		'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { i: () => RecommendationEmail });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const RecommendationEmail = (0, mobx_react__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)('recommendationEmail', globalTheme, { resultWidth: '240px' }, properties),
					{ controller, results, resultComponent, resultProps, resultWidth, treePath, disableStyles } = props,
					subProps_result = {
						className: 'ss__recommendation-email__result',
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_4__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					resultsToRender = results || controller?.store?.results || [];
				return resultsToRender.length > 0
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
							children: resultsToRender.map((result, idx) =>
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(
									'div',
									{
										id: `ss-emailrec${idx}`,
										className: 'ss__recommendation-email__result-wrapper',
										style: { display: 'block', width: resultWidth },
										children: (() => {
											if (resultComponent) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(ResultComponent, {
													controller,
													result,
													...resultProps,
													email: !0,
												});
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q, {
												result,
												hideBadge: !0,
												theme: { components: { image: { lazy: !1 } } },
												...subProps_result,
												...resultProps,
											});
										})(),
									},
									idx
								)
							),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK, {});
			});
		},
		'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { q: () => RecommendationGrid });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const defaultStyles = ({ gapSize, columns }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						overflow: 'auto',
						maxWidth: '100%',
						maxHeight: '100%',
						'.ss__recommendation-grid__results': {
							display: 'flex',
							flexFlow: 'row wrap',
							gap: gapSize,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							'@supports (display: grid)': { display: 'grid' },
						},
					}),
				RecommendationGrid = (0, mobx_react__WEBPACK_IMPORTED_MODULE_6__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						defaultProps = { results: properties.controller?.store?.results, gapSize: '20px' };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendationGrid', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, title, resultComponent, trim, lazyRender, className, theme, controller } = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender },
						subProps_result = {
							className: 'ss__recommendation-grid__result',
							...globalTheme?.components?.result,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
							theme: props?.theme,
						};
					let results = props.results || controller.store.results;
					if (props.columns || props.rows)
						if (props.columns && !props.rows) {
							if (((props.rows = Math.floor(results.length / props.columns)), trim)) {
								const remainder = results.length % props.columns;
								results = results.slice(0, results.length - remainder);
							}
						} else if (props.rows && !props.columns) {
							if (trim) {
								const remainder = results.length % props.rows;
								results = results.slice(0, results.length - remainder);
							}
							props.columns = Math.ceil(results.length / props.rows);
						} else props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = results?.slice(0, props.columns * props.rows));
					else (props.rows = 1), (props.columns = results.length);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Z)(props, defaultStyles),
						[isVisible, setIsVisible] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),
						recsRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_4__.li)(null);
					return (
						(!mergedlazyRender?.enabled ||
							(0, _hooks__WEBPACK_IMPORTED_MODULE_12__.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
							setIsVisible(!0),
						results?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
										...styling,
										ref: recsRef,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-grid', className),
										children: isVisible
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(
													_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__.l,
													{
														controller,
														children: [
															title &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('h3', {
																	className: 'ss__recommendation-grid__title',
																	children: title,
																}),
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: results.map((result) =>
																	(() => {
																		if (resultComponent && controller) {
																			const ResultComponent = resultComponent;
																			return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(ResultComponent, {
																				controller,
																				result,
																				theme,
																			});
																		}
																		return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
																			_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.x,
																			{
																				result,
																				controller,
																				children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
																					_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__.Q,
																					{ ...subProps_result, result, controller },
																					result.id
																				),
																			}
																		);
																	})()
																),
															}),
														],
													}
											  )
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
													_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__.l,
													{
														controller,
														children: results.map((result) =>
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
																_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.x,
																{
																	controller,
																	result,
																	children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
																		_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK,
																		{}
																	),
																}
															)
														),
													}
											  ),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Templates/Search/Search.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => Search });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_Organisms_Results__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Organisms_Sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
				_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				_Atoms_SearchHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
				_Organisms_NoResults__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				_Organisms_MobileSidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'
				),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						display: 'flex',
						minHeight: '600px',
						'.ss__sidebar': { flex: '0 1 auto', width: '270px', margin: '0 40px 0 0' },
						'.ss__search__content': { flex: '1 1 0%', padding: '0px 10px', width: '100%', boxSizing: 'border-box' },
					}),
				Search = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							mobileSidebarDisplayAt: globalTheme?.variables?.breakpoints?.at(0) ? `${globalTheme.variables?.breakpoints?.at(0)}px` : '991px',
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('search', globalTheme, defaultProps, properties),
						{
							disableStyles,
							className,
							controller,
							hideSidebar,
							hideSearchHeader,
							hideMobileSidebar,
							hideMerchandisingBanners,
							toggleSidebarButtonText,
							hideTopToolbar,
							resultComponent,
							hideBottomToolBar,
							hideToggleSidebarButton,
							mobileSidebarDisplayAt,
							treePath,
						} = props,
						store = controller.store,
						subProps_MobileSidebar = {
							hidePerPage: !0,
							hideSortBy: !0,
							displayAt: mobileSidebarDisplayAt,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_Button = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_TopToolbar = {
							name: 'top',
							hidePagination: !0,
							hideFilterSummary: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_BottomToolbar = {
							name: 'bottom',
							hideFilterSummary: !0,
							hidePerPage: !0,
							hideSortBy: !0,
							hideLayoutSelector: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_Sidebar = {
							hidePerPage: !0,
							hideSortBy: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_SearchHeader = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_Results = {
							name: 'search',
							resultComponent,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_NoResults = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props.theme, treePath },
						styling =
							((0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							props.theme,
							(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles)),
						mobileMediaQuery = `(max-width: ${mobileSidebarDisplayAt})`,
						isMobile = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.U)(mobileMediaQuery),
						merchandising = controller.store.merchandising;
					let hideLeftBanner, hideHeaderBanner, hideBannerBanner, hideFooterBanner;
					hideMerchandisingBanners &&
						('boolean' == typeof hideMerchandisingBanners
							? ((hideLeftBanner = !0), (hideHeaderBanner = !0), (hideBannerBanner = !0), (hideFooterBanner = !0))
							: 'object' == typeof hideMerchandisingBanners &&
							  hideMerchandisingBanners.map((type) => {
									'banner' == type.toLowerCase() && (hideBannerBanner = !0),
										'header' == type.toLowerCase() && (hideHeaderBanner = !0),
										'footer' == type.toLowerCase() && (hideFooterBanner = !0),
										'left' == type.toLowerCase() && (hideLeftBanner = !0);
							  }));
					const [sidebarOpenState, setSidebarOpenState] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_3__.J0)(!0),
						defaultLang = { toggleSidebarButtonText: { value: toggleSidebarButtonText } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {});
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__search', className),
							children: [
								!hideSidebar &&
									!isMobile &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
										className: 'ss__search__sidebar-wrapper',
										children:
											sidebarOpenState &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Organisms_Sidebar__WEBPACK_IMPORTED_MODULE_13__.B, {
														...subProps_Sidebar,
														controller,
													}),
													!hideLeftBanner &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_14__.l, {
															content: merchandising.content,
															type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_15__.c.LEFT,
															name: 'left',
														}),
												],
											}),
									}),
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__search__content'),
									children: [
										!hideSearchHeader &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_SearchHeader__WEBPACK_IMPORTED_MODULE_16__.w, {
												...subProps_SearchHeader,
												controller,
											}),
										!hideHeaderBanner &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_14__.l, {
												content: merchandising.content,
												type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_15__.c.HEADER,
												name: 'header',
											}),
										!hideBannerBanner &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_14__.l, {
												content: merchandising.content,
												type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_15__.c.BANNER,
												name: 'banner',
											}),
										!hideToggleSidebarButton &&
											(toggleSidebarButtonText || lang.toggleSidebarButtonText?.value) &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__.$, {
												onClick: () => setSidebarOpenState(!sidebarOpenState),
												className: 'ss__search__sidebar-wrapper-toggle',
												...subProps_Button,
												lang: { button: lang.toggleSidebarButtonText },
											}),
										!hideTopToolbar &&
											store.pagination.totalResults > 0 &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_18__.M, {
												...subProps_TopToolbar,
												className: 'ss__search__content__toolbar--top-toolbar',
												controller,
											}),
										!hideMobileSidebar &&
											store.pagination.totalResults > 0 &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Organisms_MobileSidebar__WEBPACK_IMPORTED_MODULE_19__.R, {
												controller,
												...subProps_MobileSidebar,
											}),
										store.pagination.totalResults
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Organisms_Results__WEBPACK_IMPORTED_MODULE_20__.n, {
													...subProps_Results,
													controller,
											  })
											: 0 === store.pagination.totalResults &&
											  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Organisms_NoResults__WEBPACK_IMPORTED_MODULE_21__.a, {
													...subProps_NoResults,
													controller,
											  }),
										!hideFooterBanner &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Merchandising__WEBPACK_IMPORTED_MODULE_14__.l, {
												content: merchandising.content,
												type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_15__.c.FOOTER,
												name: 'footer',
											}),
										!hideBottomToolBar &&
											store.pagination.totalResults > 0 &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Organisms_Toolbar__WEBPACK_IMPORTED_MODULE_18__.M, {
												...subProps_BottomToolbar,
												className: 'ss__search__content__toolbar--bottom-toolbar',
												controller,
											}),
									],
								}),
							],
						}),
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
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('searchHorizontal', globalTheme, {}, properties),
						{
							disableStyles,
							className,
							controller,
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
														breakpoints: {},
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
		'./components/src/index.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					A11Y_ATTRIBUTE: () => useA11y.a,
					Autocomplete: () => Autocomplete.j,
					BadgeImage: () => BadgeImage.z,
					BadgePill: () => BadgePill.L,
					BadgeRectangle: () => BadgeRectangle.Z,
					BadgeText: () => BadgeText.p,
					Banner: () => Banner.l,
					BranchOverride: () => BranchOverride.n,
					Breadcrumbs: () => Breadcrumbs.B,
					Button: () => Button.$,
					CacheProvider: () => cache._,
					CalloutBadge: () => CalloutBadge.W,
					Carousel: () => Carousel.FN,
					Checkbox: () => Checkbox.S,
					ControllerProvider: () => ControllerProvider,
					Dropdown: () => Dropdown.m,
					ErrorHandler: () => ErrorHandler.z,
					FALLBACK_IMAGE_URL: () => Image.t,
					Facet: () => Facet.s,
					FacetDisplay: () => types.QK,
					FacetGridOptions: () => FacetGridOptions.S,
					FacetHierarchyOptions: () => FacetHierarchyOptions.T,
					FacetListOptions: () => FacetListOptions.C,
					FacetPaletteOptions: () => FacetPaletteOptions.P,
					FacetSlider: () => FacetSlider.l,
					FacetType: () => types.Cw,
					Facets: () => Facets.J,
					FacetsHorizontal: () => FacetsHorizontal.b,
					Filter: () => Filter.d,
					FilterSummary: () => FilterSummary.r,
					FormattedNumber: () => FormattedNumber.G,
					Grid: () => Grid.x,
					Icon: () => Icon.I,
					Image: () => Image._,
					InlineBanner: () => InlineBanner._,
					LayoutSelector: () => LayoutSelector.s,
					List: () => List.B,
					LoadMore: () => LoadMore.e,
					LoadingBar: () => LoadingBar.G,
					MobileSidebar: () => MobileSidebar.R,
					NoResults: () => NoResults.a,
					Overlay: () => Overlay.h,
					OverlayBadge: () => OverlayBadge.Q,
					Pagination: () => Pagination.d,
					PerPage: () => PerPage.F,
					Price: () => Price.g,
					Radio: () => Radio.s,
					RadioList: () => RadioList.q,
					Rating: () => Rating.G,
					Recommendation: () => Recommendation.A,
					RecommendationBundle: () => RecommendationBundle.g,
					RecommendationBundleEasyAdd: () => RecommendationBundleEasyAdd.F,
					RecommendationBundleList: () => RecommendationBundleList.a,
					RecommendationBundleVertical: () => RecommendationBundleVertical.a,
					RecommendationEmail: () => RecommendationEmail.i,
					RecommendationGrid: () => RecommendationGrid.q,
					RecommendationProfileTracker: () => RecommendationProfileTracker.l,
					RecommendationResultTracker: () => RecommendationResultTracker.x,
					Result: () => Result.Q,
					Results: () => Results.n,
					ResultsLayout: () => types.VT,
					Search: () => Search.v,
					SearchHeader: () => SearchHeader.w,
					SearchHorizontal: () => SearchHorizontal.j,
					SearchInput: () => SearchInput.D,
					Select: () => Select.l,
					Sidebar: () => Sidebar.B,
					Skeleton: () => Skeleton.E,
					Slideout: () => Slideout.S,
					SnapProvider: () => snap.Mz,
					SortBy: () => SortBy.g,
					StoreProvider: () => StoreProvider,
					Swatches: () => Swatches.l,
					TemplateSelect: () => TemplateSelect.F,
					TemplatesEditor: () => TemplatesEditor,
					ThemeProvider: () => emotion_element_5486c51c_browser_esm.a,
					Toolbar: () => Toolbar.M,
					VariantSelection: () => VariantSelection.m,
					base: () => base.E,
					bocachica: () => bocachica.S,
					createHoverProps: () => createHoverProps.l,
					css: () => emotion_react_browser_esm.AH,
					defaultCarouselBreakpoints: () => Carousel.K,
					defaultTheme: () => defaultTheme,
					defaultVerticalCarouselBreakpoints: () => Carousel.og,
					getDisplaySettings: () => useDisplaySettings.Q,
					iconPaths: () => paths.c,
					useA11y: () => useA11y.i,
					useClickOutside: () => useClickOutside.L,
					useComponent: () => useComponent.x,
					useConstructor: () => useConstructor,
					useController: () => useController,
					useCreateController: () => useCreateController.i,
					useDeepCompareEffect: () => useDeepCompareEffect.I,
					useDeepCompareMemoize: () => useDeepCompareEffect.r,
					useDisplaySettings: () => useDisplaySettings.X,
					useFuncDebounce: () => useFuncDebounce.d,
					useIntersection: () => useIntersection.v,
					useLang: () => useLang.u,
					useMediaQuery: () => useMediaQuery.U,
					useSnap: () => snap.uk,
					useStore: () => useStore,
					useTheme: () => emotion_element_5486c51c_browser_esm.u,
					withController: () => withController,
					withSnap: () => snap.b$,
					withStore: () => withStore,
					withTheme: () => emotion_element_5486c51c_browser_esm.b,
				});
			var BadgeImage = __webpack_require__('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'),
				BadgePill = __webpack_require__('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
				BadgeRectangle = __webpack_require__('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
				BadgeText = __webpack_require__('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
				Breadcrumbs = __webpack_require__('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
				Button = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				Dropdown = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				FormattedNumber = __webpack_require__('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				Image = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				LoadingBar = __webpack_require__('./components/src/components/Atoms/Loading/LoadingBar.tsx'),
				Banner = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				InlineBanner = __webpack_require__('./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'),
				Overlay = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx'),
				Price = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				SearchHeader = __webpack_require__('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
				Skeleton = __webpack_require__('./components/src/components/Atoms/Skeleton/Skeleton.tsx'),
				TemplateSelect = __webpack_require__('./components/src/components/Atoms/TemplateSelect/TemplateSelect.tsx'),
				CalloutBadge = __webpack_require__('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
				Carousel = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				Checkbox = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				ErrorHandler = __webpack_require__('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
				FacetGridOptions = __webpack_require__('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
				FacetHierarchyOptions = __webpack_require__('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
				FacetListOptions = __webpack_require__('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'),
				FacetPaletteOptions = __webpack_require__('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
				FacetSlider = __webpack_require__('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
				Filter = __webpack_require__('./components/src/components/Molecules/Filter/Filter.tsx'),
				LayoutSelector = __webpack_require__('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
				List = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				LoadMore = __webpack_require__('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
				Grid = __webpack_require__('./components/src/components/Molecules/Grid/Grid.tsx'),
				OverlayBadge = __webpack_require__('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
				Pagination = __webpack_require__('./components/src/components/Molecules/Pagination/Pagination.tsx'),
				PerPage = __webpack_require__('./components/src/components/Molecules/PerPage/PerPage.tsx'),
				Radio = __webpack_require__('./components/src/components/Molecules/Radio/Radio.tsx'),
				RadioList = __webpack_require__('./components/src/components/Molecules/RadioList/RadioList.tsx'),
				Rating = __webpack_require__('./components/src/components/Molecules/Rating/Rating.tsx'),
				Result = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				SearchInput = __webpack_require__('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
				Select = __webpack_require__('./components/src/components/Molecules/Select/Select.tsx'),
				Slideout = __webpack_require__('./components/src/components/Molecules/Slideout/Slideout.tsx'),
				SortBy = __webpack_require__('./components/src/components/Molecules/SortBy/SortBy.tsx'),
				emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				es = __webpack_require__('../../node_modules/react-color/es/index.js'),
				mobx_react_lite_es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				debounce = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				TargetStore = __webpack_require__('./src/Templates/Stores/TargetStore.ts');
			const CSS_ColorDisplay = ({ color, isColorPickerVisible }) =>
					(0, emotion_react_browser_esm.AH)({ backgroundColor: color, border: isColorPickerVisible ? '1px solid black' : '' }),
				CSS_TemplatesEditor = ({}) =>
					(0, emotion_react_browser_esm.AH)({
						display: 'flex',
						flexDirection: 'column',
						minWidth: '420px',
						overflow: 'hidden',
						fontSize: '14px',
						position: 'fixed',
						zIndex: '10003',
						cursor: 'auto',
						top: '10px',
						right: 0,
						background: 'white',
						padding: '10px',
						color: '#333',
						border: '1px solid #ccc',
						borderRight: 0,
						borderTopLeftRadius: '5px',
						borderBottomLeftRadius: '5px',
						boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
						transition: 'height ease 0.2s, right ease 0.5s 0.2s',
						'&.collapsed': { right: '-400px', transition: 'height ease 0.5s 0.5s, right ease 0.5s', height: '33px', cursor: 'pointer' },
						'& .logo': { '& img': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' } },
						'& input, select, option, optgroup, button, h1, h2, h3, h4, h5, h6, i': { all: 'revert' },
						'& h1': { fontSize: '20px' },
						'& h2': { fontSize: '18px' },
						'& h3': { fontSize: '16px' },
						'& h4': { fontSize: '14px' },
						'& h5': { fontSize: '12px' },
						'& h6': { fontSize: '10px' },
						'& .header-actions': { cursor: 'pointer', position: 'absolute', right: 15, top: 15, '& .ss__button': { margin: '0 10px' } },
						'& .section': {
							marginBottom: '10px',
							fontSize: '14px',
							'& input + span': { marginLeft: '10px' },
							'& label': { width: '215px', display: 'inline-flex', marginRight: '5px' },
							'& .indent': { marginLeft: '15px', '& label': { width: '200px' } },
							'& .theme-editor': {
								padding: '5px 0',
								position: 'relative',
								'& .chrome-picker': { position: 'absolute', zIndex: 2, left: 'calc(225px / 2)', bottom: '35px' },
								'& .color-preview': {
									display: 'inline-flex',
									width: '40px',
									height: '20px',
									borderRadius: '3px',
									cursor: 'pointer',
									boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
									verticalAlign: 'middle',
								},
								'& .color-value': { display: 'inline-flex', padding: '0 10px' },
							},
						},
					}),
				TemplatesEditor = (0, mobx_react_lite_es.PA)((properties) => {
					const { onRemoveClick, templatesStore } = properties,
						searchTargets = Object.keys(templatesStore.targets.search || {}).map((target) => ({
							type: 'search',
							target,
							template: templatesStore.targets.search[target],
							selector: templatesStore.targets.search[target].selector,
						})),
						autocompleteTargets = Object.keys(templatesStore.targets.autocomplete || {}).map((target) => ({
							type: 'autocomplete',
							target,
							template: templatesStore.targets.autocomplete[target],
							selector: templatesStore.targets.autocomplete[target].selector,
						})),
						recommendationBundleTargets = Object.keys(templatesStore.targets.recommendation.bundle || {}).map((target) => ({
							type: 'recommendation/bundle',
							target,
							template: templatesStore.targets.recommendation.bundle[target],
							selector: templatesStore.targets.recommendation.bundle[target].selector,
						})),
						recommendationDefaultTargets = Object.keys(templatesStore.targets.recommendation.default || {}).map((target) => ({
							type: 'recommendation/default',
							target,
							template: templatesStore.targets.recommendation.default[target],
							selector: templatesStore.targets.recommendation.default[target].selector,
						})),
						recommendationEmailTargets = Object.keys(templatesStore.targets.recommendation.email || {}).map((target) => ({
							type: 'recommendation/email',
							target,
							template: templatesStore.targets.recommendation.email[target],
							selector: templatesStore.targets.recommendation.email[target].selector,
						})),
						targets = [
							...searchTargets,
							...autocompleteTargets,
							...recommendationBundleTargets,
							...recommendationDefaultTargets,
							...recommendationEmailTargets,
						],
						[collapsed, setCollapsed] = (0, hooks_module.J0)(!1),
						[selectedTarget, changeTargetSelection] = (0, hooks_module.J0)(targets[0]),
						[selectedLanguage, changeLanguage] = (0, hooks_module.J0)(templatesStore.language),
						[selectedCurrency, changeCurrency] = (0, hooks_module.J0)(templatesStore.currency),
						styling = { css: [CSS_TemplatesEditor({ ...properties })] },
						{ library } = templatesStore,
						{ languages, currencies } = library.locales,
						languageKeys = Object.keys(languages),
						currencyKeys = Object.keys(currencies),
						libraryThemes = Object.keys(templatesStore.themes.library || {}),
						lcoalThemes = Object.keys(templatesStore.themes.local || {}).sort((a, b) => (a === TargetStore.m ? -1 : b === TargetStore.m ? 1 : 0)),
						selectedTargetConfig = templatesStore.getTarget(selectedTarget.type, selectedTarget.target),
						themeRef = templatesStore.themes[selectedTarget.template.theme.location][selectedTarget.template.theme.name],
						theme = themeRef.theme,
						setOverride = (0, debounce.s)((obj) => {
							themeRef.setOverride(obj);
						}, 10),
						[isColorPickerVisible, setColorPickerVisible] = (0, hooks_module.J0)(!1);
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
						children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
							className: classnames_default()('ss__template-editor', { collapsed }),
							...styling,
							onClick: (e) => {
								e.preventDefault(),
									e.stopPropagation(),
									setCollapsed(!1),
									isColorPickerVisible && !e.target.className.includes('color-preview') && setColorPickerVisible(!1);
							},
							children: [
								(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'logo',
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('img', { src: 'https://snapui.searchspring.io/searchspring.svg' }),
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'header-actions',
									onClick: (e) => {
										e.preventDefault(), e.stopPropagation(), setCollapsed(!0);
									},
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(Button.$, {
											onClick: () => {
												onRemoveClick();
											},
											children: 'Stop Editing',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
											onClick: () => {
												setCollapsed(!0);
											},
											children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { icon: 'close-thin' }),
										}),
									],
								}),
								collapsed
									? ''
									: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_browser_esm.mL, {
											styles: emotion_react_browser_esm.AH`
							${selectedTarget.selector} {
								border: 1px dashed black !important;
							}
						`,
									  }),
								(0, emotion_react_jsx_runtime_browser_esm.Y)('h2', { children: 'Global' }),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'section',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: 'language-select', children: 'Language: ' }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('select', {
											id: 'language-select',
											onChange: (e) => {
												const { selectedIndex, options } = e.currentTarget,
													language = options[selectedIndex].value;
												changeLanguage(language), templatesStore.setLanguage(language);
											},
											children: languageKeys.map((language) =>
												(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { selected: language === selectedLanguage, children: language })
											),
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'section',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: 'currency-select', children: 'Currency: ' }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('select', {
											id: 'currency-select',
											onChange: (e) => {
												const { selectedIndex, options } = e.currentTarget,
													currency = options[selectedIndex].value;
												changeCurrency(currency), templatesStore.setCurrency(currency);
											},
											children: currencyKeys.map((currency) =>
												(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { selected: currency === selectedCurrency, children: currency })
											),
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.Y)('h2', { children: 'Template' }),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'section',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: 'target-select', children: 'Template Target: ' }),
										(0, emotion_react_jsx_runtime_browser_esm.FD)('select', {
											id: 'target-select',
											onChange: (e) => {
												const { selectedIndex, options } = e.currentTarget,
													selectedOption = options[selectedIndex],
													targetId = selectedOption.value,
													optgroup = selectedOption.closest('optgroup'),
													controller = optgroup?.label,
													newTarget = targets.find((target) => target.target === targetId && target.type === controller);
												newTarget && changeTargetSelection(newTarget);
											},
											children: [
												searchTargets &&
													(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
														label: 'search',
														children: searchTargets.map((target) =>
															(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { children: target.target })
														),
													}),
												autocompleteTargets &&
													(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
														label: 'autocomplete',
														children: autocompleteTargets.map((target) =>
															(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { children: target.target })
														),
													}),
												recommendationBundleTargets &&
													(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
														label: 'recommendation/bundle',
														children: recommendationBundleTargets.map((target) =>
															(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { children: target.target })
														),
													}),
												recommendationDefaultTargets &&
													(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
														label: 'recommendation/default',
														children: recommendationDefaultTargets.map((target) =>
															(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { children: target.target })
														),
													}),
												recommendationEmailTargets &&
													(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
														label: 'recommendation/email',
														children: recommendationEmailTargets.map((target) =>
															(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { children: target.target })
														),
													}),
											],
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'section',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: 'template-select', children: 'Template Component: ' }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('select', {
											id: 'template-select',
											onChange: (e) => {
												const { selectedIndex, options } = e.currentTarget,
													selectedTemplate = options[selectedIndex].value,
													target = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);
												target?.setComponent(selectedTemplate);
											},
											children: Object.keys({
												...(selectedTarget.type.startsWith('recommendation/')
													? { ...library.components.recommendation[selectedTarget.type.split('/')[1]] }
													: { ...library.components[selectedTarget.type] }),
											}).map((componentName) =>
												(0, emotion_react_jsx_runtime_browser_esm.Y)('option', {
													selected: componentName === selectedTarget.template.component,
													children: componentName,
												})
											),
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'section',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: 'result-select', children: 'Result Component: ' }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('select', {
											id: 'result-select',
											onChange: (e) => {
												const { selectedIndex, options } = e.currentTarget,
													selectedTemplate = options[selectedIndex].value,
													target = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);
												target?.setResultComponent(selectedTemplate);
											},
											children: Object.keys(library.components.result || {}).map((componentName) =>
												(0, emotion_react_jsx_runtime_browser_esm.Y)('option', {
													selected: componentName === selectedTarget.template.resultComponent,
													children: componentName,
												})
											),
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'section',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: 'theme-select', children: 'Theme: ' }),
										(0, emotion_react_jsx_runtime_browser_esm.FD)('select', {
											id: 'theme-select',
											onChange: (e) => {
												const { selectedIndex, options } = e.currentTarget,
													selectedOption = options[selectedIndex],
													selectedTheme = selectedOption.value,
													type = selectedOption.closest('optgroup')?.label,
													target = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);
												target?.setTheme(selectedTheme, type);
											},
											children: [
												(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
													label: 'library',
													children: libraryThemes.map((libraryTheme) =>
														(0, emotion_react_jsx_runtime_browser_esm.Y)('option', {
															selected: 'library' === selectedTargetConfig.theme.location && selectedTargetConfig.theme.name === libraryTheme,
															children: libraryTheme,
														})
													),
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('optgroup', {
													label: 'local',
													children: lcoalThemes.map((localTheme) =>
														(0, emotion_react_jsx_runtime_browser_esm.Y)('option', {
															selected: 'local' === selectedTargetConfig.theme.location && selectedTargetConfig.theme.name === localTheme,
															children: localTheme,
														})
													),
												}),
											],
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('h2', { children: ['Theme variables (', selectedTargetConfig.theme.name, ')'] }),
								(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'section',
									children:
										theme?.variables &&
										(0, emotion_react_jsx_runtime_browser_esm.Y)(ThemeEditor, {
											property: theme?.variables,
											rootEditingKey: 'variables',
											themeName: selectedTarget.template.theme.name,
											setOverride,
											isColorPickerVisible,
											setColorPickerVisible,
										}),
								}),
							],
						}),
					});
				}),
				ThemeEditor = (props) => {
					const pathPrefix = props.pathPrefix || [],
						path = [...pathPrefix, props?.propertyName].filter((a) => a),
						themeName = props.themeName,
						setOverride = props.setOverride,
						rootEditingKey = props.rootEditingKey,
						setColorPickerVisible = props.setColorPickerVisible,
						isColorPickerVisible = props.isColorPickerVisible,
						[colorBeingEdited, setColorBeingEdited] = (0, hooks_module.J0)('');
					if (!props?.property || Array.isArray(props.property) || 'number' == typeof props.property || 'boolean' == typeof props.property)
						return null;
					if ('object' == typeof props.property)
						return Object.values(props.property).map((property, index) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)(
								ThemeEditor,
								{
									property,
									rootEditingKey,
									themeName,
									setOverride,
									propertyName: Object.getOwnPropertyNames(props.property)[index],
									pathPrefix: [...pathPrefix, props.propertyName],
									isColorPickerVisible,
									setColorPickerVisible,
								},
								index
							)
						);
					if ('string' == typeof props.property) {
						const value = props.property.toString(),
							key = path.join('.');
						if (path.includes('colors'))
							return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								className: classnames_default()('theme-editor'),
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.FD)('label', { children: [key, ': '] }),
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										className: 'color-preview',
										css: CSS_ColorDisplay({ color: value, isColorPickerVisible }),
										onClick: () => {
											setColorPickerVisible(''), isColorPickerVisible !== key && (setColorPickerVisible(key), setColorBeingEdited(value));
										},
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'color-value', children: value }),
									isColorPickerVisible == key &&
										(0, emotion_react_jsx_runtime_browser_esm.Y)(es.xk, {
											color: colorBeingEdited,
											onChange: (color) => {
												setColorBeingEdited(color.hex), setOverride({ themeName, path, rootEditingKey, value: color.hex });
											},
										}),
								],
							});
					}
				};
			var Swatches = __webpack_require__('./components/src/components/Molecules/Swatches/Swatches.tsx'),
				VariantSelection = __webpack_require__('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'),
				BranchOverride = __webpack_require__('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'),
				Facet = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				Facets = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				FacetsHorizontal = __webpack_require__('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
				FilterSummary = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				MobileSidebar = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				NoResults = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				Sidebar = __webpack_require__('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
				Toolbar = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				Autocomplete = __webpack_require__('./components/src/components/Templates/Autocomplete/Autocomplete.tsx'),
				Recommendation = __webpack_require__('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
				RecommendationBundle = __webpack_require__('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
				RecommendationBundleEasyAdd = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'
				),
				RecommendationBundleList = __webpack_require__('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
				RecommendationBundleVertical = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'
				),
				RecommendationGrid = __webpack_require__('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
				RecommendationEmail = __webpack_require__('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
				Search = __webpack_require__('./components/src/components/Templates/Search/Search.tsx'),
				SearchHorizontal = __webpack_require__('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'),
				RecommendationProfileTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				RecommendationResultTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				types = __webpack_require__('./components/src/types.ts'),
				useClickOutside = __webpack_require__('./components/src/hooks/useClickOutside.tsx');
			const useConstructor = (callBack = () => {}) => {
				const hasBeenCalled = (0, hooks_module.li)(!1);
				hasBeenCalled.current || (callBack(), (hasBeenCalled.current = !0));
			};
			var useMediaQuery = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				useDisplaySettings = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				useFuncDebounce = __webpack_require__('./components/src/hooks/useFuncDebounce.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useDeepCompareEffect = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx'),
				useCreateController = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				useComponent = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const ControllerContext = (0, preact_module.q6)(null),
				ControllerProvider = ({ children, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(ControllerContext.Provider, { value: controller, children }),
				useController = () => (0, hooks_module.NT)(ControllerContext);
			function withController(Component) {
				return (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Component, { controller: useController(), ...props });
			}
			const StoreContext = (0, preact_module.q6)(null),
				StoreProvider = ({ children, store }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(StoreContext.Provider, { value: store, children }),
				useStore = () => (0, hooks_module.NT)(StoreContext);
			function withStore(Component) {
				return (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Component, { store: useStore(), ...props });
			}
			var emotion_element_5486c51c_browser_esm = __webpack_require__(
				'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
			);
			const defaultTheme = {
				variables: { breakpoints: [540, 767, 1200], colors: { text: '#222222', primary: '#3A23AD', secondary: '#4c3ce2', accent: '#00cee1' } },
			};
			var snap = __webpack_require__('./components/src/providers/snap.tsx'),
				createHoverProps = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				base = __webpack_require__('./components/src/themes/base/base.ts'),
				bocachica = __webpack_require__('./components/src/themes/bocachica/bocachica.ts');
		},
		'./components/src/utilities/Colour/Colour.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { V: () => Colour });
			class Colour {
				get hex() {
					return this.hexValue ? this.hexValue : this.value;
				}
				get rgb() {
					return this.rgbValue ? this.rgbValue : this.value;
				}
				get contrast() {
					if (this.hexValue) {
						const calculation = [
							parseInt(this.hexValue.slice(1, 3), 16) / 255,
							parseInt(this.hexValue.slice(3, 5), 16) / 255,
							parseInt(this.hexValue.slice(5, 7), 16) / 255,
						].map((color) => (color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4)));
						return 0.2126 * calculation[0] + 0.7152 * calculation[1] + 0.0722 * calculation[2] <= 0.179 ? '#ffffff' : '#000000';
					}
					return this.value;
				}
				constructor(value) {
					(this.value = value),
						value &&
							(value.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (value = `#${value[1].repeat(2)}${value[2].repeat(2)}${value[3].repeat(2)}`),
							Colour.isHex(value)
								? ((this.hexValue = value), (this.rgbValue = Colour.hexToRgb(value)))
								: Colour.isRgb(value) && ((this.rgbValue = value), (this.hexValue = Colour.rgbToHex(value))));
				}
				shift(offset) {
					return new Colour(Colour.brightness(this.hex, offset));
				}
				lighten(offset) {
					return offset < 0 ? this : new Colour(Colour.brightness(this.hex, offset));
				}
				darken(offset) {
					return offset < 0 ? this : new Colour(Colour.brightness(this.hex, -offset));
				}
				opacity(offset) {
					return new Colour(Colour.opacity(this.hex, offset));
				}
				transparency(offset) {
					return offset < 0 ? this : new Colour(Colour.opacity(this.hex, offset));
				}
				opaque(offset) {
					return offset < 0 ? this : new Colour(Colour.opacity(this.hex, -offset));
				}
				static isRgb(color) {
					return Boolean(
						color.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							color.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
					);
				}
				static isHex(color) {
					return Boolean(color.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || color.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
				}
				static hexToRgb(hex) {
					if (!Colour.isHex(hex)) throw 'invalid hex supplied';
					const red = parseInt(hex.slice(1, 3), 16),
						green = parseInt(hex.slice(3, 5), 16),
						blue = parseInt(hex.slice(5, 7), 16),
						alpha = parseInt(hex.slice(7, 9), 16);
					return Number.isInteger(alpha)
						? `rgba(${red}, ${green}, ${blue}, ${(function round(number) {
								const flooredNumber = Math.floor(number),
									decimal = number - flooredNumber;
								if (!decimal) return number;
								const tenths = 10 * Math.floor(10 * decimal),
									hundredths = Math.round(100 * number - tenths);
								return flooredNumber + (tenths + hundredths) / 100;
						  })(alpha / 255)})`
						: `rgb(${red}, ${green}, ${blue})`;
				}
				static rgbToHex(rgb) {
					if (!Colour.isRgb(rgb)) throw 'invalid rgb supplied';
					const [r, g, b, a] = (rgb.match(/[0-9]?\.?[0-9]+%?/g) || []).map((d, index) => {
						if (3 == index) {
							d.match(/%/) && (d = (Number(d.replace('%', '').trim()) / 100).toString());
							let fraction = Number(d);
							(Number.isNaN(fraction) || fraction > 1) && (fraction = 1), fraction < 0 && (fraction = 0), (d = Math.floor(255 * fraction).toString());
						}
						return Number(d).toString(16).padStart(2, '0');
					});
					return `#${r}${g}${b}${a || ''}`;
				}
				static opacity(color, offset) {
					let isRgb = !1;
					if (
						(color && Colour.isRgb(color) && ((isRgb = !0), (color = Colour.rgbToHex(color))),
						!color || !Colour.isHex(color) || !Number.isInteger(offset))
					)
						return color;
					offset > 255 && (offset = 255), offset < -255 && (offset = -255);
					const alpha = color.slice(7, 9) || 'ff';
					let a = parseInt(alpha, 16) - offset;
					a > 255 ? (a = 255) : a < 0 && (a = 0);
					const newAlpha = a.toString(16).padStart(2, '0'),
						hexValue = `${color.slice(0, 7)}${newAlpha}`;
					return isRgb ? Colour.hexToRgb(hexValue) : hexValue;
				}
				static brightness(color, offset) {
					let isRgb = !1;
					if (
						(color && Colour.isRgb(color) && ((isRgb = !0), (color = Colour.rgbToHex(color))),
						!color || !Colour.isHex(color) || !Number.isInteger(offset))
					)
						return color;
					offset > 255 && (offset = 255), offset < -255 && (offset = -255);
					const value = color.slice(1, 7),
						num = parseInt(value, 16);
					let red = (255 & num) + offset;
					red > 255 ? (red = 255) : red < 0 && (red = 0);
					let green = ((num >> 8) & 255) + offset;
					green > 255 ? (green = 255) : green < 0 && (green = 0);
					let blue = (num >> 16) + offset;
					blue > 255 ? (blue = 255) : blue < 0 && (blue = 0);
					const hexValue = `#${(red | (green << 8) | (blue << 16)).toString(16).padStart(6, '0')}${color.slice(7, 9)}`;
					return isRgb ? Colour.hexToRgb(hexValue) : hexValue;
				}
			}
		},
	},
]);
//# sourceMappingURL=957.b4d72b91.iframe.bundle.js.map
