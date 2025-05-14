'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8072],
	{
		'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { B: () => Breadcrumbs });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						'& .ss__breadcrumbs__crumbs': { padding: '0' },
						'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
					}),
				Breadcrumbs = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						defaultProps = { separator: '>', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('breadcrumbs', globalTheme, defaultProps, properties),
						{ data, separator, className } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__breadcrumbs', className),
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('ul', {
								className: 'ss__breadcrumbs__crumbs',
								children: data
									.map((crumb) =>
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('li', {
											className: 'ss__breadcrumbs__crumbs__crumb',
											children: crumb.url
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('a', { href: crumb.url, children: crumb.label })
												: crumb.label,
										})
									)
									.reduce((prev, curr) => [
										prev,
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('li', {
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({});
			function FormattedNumber(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = {
						symbol: '',
						decimalPlaces: 3,
						padDecimalPlaces: !0,
						thousandsSeparator: '',
						decimalSeparator: '.',
						symbolAfter: !0,
						treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					},
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('formattedNumber', globalTheme, defaultProps, properties),
					{ value, symbol, decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator, symbolAfter, className, raw } = props,
					formattedNumber = _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__.Z(value, {
						symbol,
						decimalPlaces,
						padDecimalPlaces,
						thousandsSeparator,
						decimalSeparator,
						symbolAfter,
					}),
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return raw
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children: formattedNumber })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__formatted-number', className),
								...styling,
								children: formattedNumber,
							}),
					  });
			}
		},
		'./components/src/components/Atoms/Loading/LoadingBar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => LoadingBar });
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
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
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
						defaultProps = { height: '5px', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('loadingBar', globalTheme, defaultProps, properties),
						{ active, className } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return active
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__loading-bar', className),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', { className: 'ss__loading-bar__bar' }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Atoms/Skeleton/Skeleton.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { E: () => Skeleton });
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
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ width, height, round, backgroundColor, animatedColor }) => {
					const animation = (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.i7)({
						from: { transform: 'translateX(-100%)' },
						to: { transform: 'translateX(100%)' },
					});
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
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
				Skeleton = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						defaultProps = { backgroundColor: '#ebebeb', animatedColor: '#f5f5f5', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('skeleton', globalTheme, defaultProps, properties),
						{ className } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__skeleton', className),
						}),
					});
				});
		},
		'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { z: () => ErrorHandler });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/Colour/Colour.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const warnColour = new _utilities__WEBPACK_IMPORTED_MODULE_4__.V('#ecaa15'),
				errorColour = new _utilities__WEBPACK_IMPORTED_MODULE_4__.V('#cc1212'),
				infoColour = new _utilities__WEBPACK_IMPORTED_MODULE_4__.V('#4c3ce2'),
				defaultStyles = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
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
				ErrorHandler = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('errorHandler', globalTheme, defaultProps, properties),
						{ controller, error, disableStyles, onRetryClick, className, treePath } = props,
						subProps_icon = {
							size: '18px',
							className: 'ss__error-handler__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_buttonRetry = {
							className: 'ss__error-handler__button',
							icon: 'rotate-right',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						errorObject = controller?.store?.error || error,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
						defaultLang = {
							warningText: { value: 'Warning:' },
							infoText: { value: 'Info:' },
							errorText: { value: 'Error:' },
							reloadText: { value: 'Retry' },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.u)(lang, { controller });
					return Object.values(_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.B).includes(errorObject?.type) && errorObject?.message
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__error-handler',
										`ss__error-handler--${errorObject.type}`,
										className
									),
									...styling,
									children: (() => {
										switch (errorObject.type) {
											case _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.B.WARNING:
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(
													_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK,
													{
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																		...subProps_icon,
																		icon: 'warn',
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																		className: 'ss__error-handler__message__type',
																		...mergedLang.warningText?.all,
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																		className: 'ss__error-handler__message__content',
																		children: errorObject.message,
																	}),
																],
															}),
															429 == errorObject?.code
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
																		_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_16__.$,
																		{
																			...subProps_buttonRetry,
																			onClick: (e) => {
																				onRetryClick ? onRetryClick(e) : controller?.search();
																			},
																			...mergedLang.reloadText.attributes,
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																				className: 'ss__error-handler__button__text',
																				...mergedLang.reloadText.value,
																			}),
																		}
																  )
																: null,
														],
													}
												);
											case _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.B.ERROR:
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
													className: 'ss__error-handler__message',
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															...subProps_icon,
															icon: 'error',
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
															className: 'ss__error-handler__message__type',
															...mergedLang.errorText?.all,
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
															className: 'ss__error-handler__message__content',
															children: errorObject.message,
														}),
													],
												});
											case _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.B.INFO:
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
													className: 'ss__error-handler__message',
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															...subProps_icon,
															icon: 'info',
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
															className: 'ss__error-handler__message__type',
															...mergedLang.infoText?.all,
														}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
															className: 'ss__error-handler__message__content',
															children: errorObject.message,
														}),
													],
												});
										}
									})(),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/Terms/Terms.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => Terms });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({ vertical, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'.ss__terms__title': {
							fontWeight: 'normal',
							margin: 0,
							textTransform: 'uppercase',
							padding: '10px',
							h5: { fontSize: '.8em', margin: 0 },
						},
						'.ss__terms__options': {
							display: 'flex',
							justifyContent: 'space-evenly',
							flexDirection: vertical ? 'column' : 'row',
							flexWrap: 'wrap',
							padding: '0px',
							'.ss__terms__option': {
								listStyle: 'none',
								padding: '10px',
								wordBreak: 'break-all',
								a: { display: 'block', em: { fontStyle: 'normal' } },
								'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: theme?.variables?.colors?.primary } },
							},
						},
					}),
				emIfyTerm = (term, search) => {
					if (term && search) {
						const match = term.match(((string = search), string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
						if (search && term && match && 'number' == typeof match.index) {
							const beforeMatch = term.slice(0, match.index),
								afterMatch = term.slice(match.index + search.length, term.length);
							return `${beforeMatch ? `<em>${beforeMatch}</em>` : ''}${search}${afterMatch ? `<em>${afterMatch}</em>` : ''}`;
						}
					}
					var string;
					return `<em>${term}</em>`;
				},
				Terms = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('terms', globalTheme, { vertical: !0, previewOnHover: !0 }, properties),
						{ title, onTermClick, limit, previewOnHover, emIfy, className, controller } = props,
						currentInput = controller?.store?.state?.input,
						terms = props.terms,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						termsToShow = limit ? terms?.slice(0, limit) : terms,
						escCallback = () => {
							controller?.setFocused && controller?.setFocused();
						},
						defaultLang = { title: { value: title } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedTitleLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)({ title: lang.title }, { controller });
					return termsToShow?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms', className),
									children: [
										title
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
													className: 'ss__terms__title',
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h5', { ...mergedTitleLang.title.all }),
											  })
											: null,
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('ul', {
											className: 'ss__terms__options',
											'aria-label': title,
											ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.i)(e, 0, !0, escCallback),
											children: termsToShow?.map((term, idx) => {
												const defaultTermLang = {
														term: {
															value: `${emIfy ? emIfyTerm(term.value, currentInput || '') : term.value}`,
															attributes: { 'aria-label': `item ${idx + 1} of ${termsToShow.length}, ${term.value}` },
														},
													},
													termLang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultTermLang, props.lang || {}),
													mergedTermLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(
														{ term: termLang.term },
														{ index: idx, numberOfTerms: termsToShow.length, term }
													);
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('li', {
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms__option', {
														'ss__terms__option--active': term.active,
													}),
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
														onClick: (e) =>
															((e, term) => {
																onTermClick && onTermClick(e, term), controller?.setFocused && controller?.setFocused();
															})(e, term),
														href: term.url.href,
														...(previewOnHover ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_12__.l)(term.preview) : {}),
														...mergedTermLang.term?.all,
													}),
												});
											}),
										}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { n: () => BranchOverride });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx');
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
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('branchOverride', globalTheme, defaultProps, properties),
						{ branch, details, error, className, darkMode, disableStyles, onRemoveClick, treePath } = props,
						subProps_icon = {
							className: 'ss__branch-override__bottom__left__icon',
							size: '12px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						prefersDark = 'boolean' == typeof darkMode ? darkMode : !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
						[themeName, setThemeName] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(prefersDark ? 'darkTheme' : 'lightTheme'),
						[collapsed, setCollapsed] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(0);
					error && setThemeName('failureTheme');
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)({ ...props, componentTheme: componentThemes[themeName] }, defaultStyles);
					return (details || error) && branch
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
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
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__branch-override__top',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('img', {
												className: 'ss__branch-override__top__logo',
												src: componentThemes[themeName].top.logo.src,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: 'ss__branch-override__top__collapse',
												onClick: (e) => {
													e.preventDefault(), e.stopPropagation(), setCollapsed(1);
												},
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.I, {
													size: '18px',
													color: componentThemes[themeName].top.close.fill,
													...subProps_icon,
													icon: 'close-thin',
												}),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: 'ss__branch-override__top__button',
												onClick: (e) => {
													e.preventDefault(), e.stopPropagation(), onRemoveClick && onRemoveClick(e, branch);
												},
												children: componentThemes[themeName].top.button.content,
											}),
										],
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__branch-override__bottom',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
												className: 'ss__branch-override__bottom__left',
												children: error
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(
															_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FK,
															{
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.I, {
																		size: '12px',
																		color: componentThemes[themeName].bottom.branch.color,
																		...subProps_icon,
																		icon: 'warn',
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { children: error.message }),
																],
															}
													  )
													: branch,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
												className: 'ss__branch-override__bottom__right',
												children: error ? branch : details?.lastModified,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: 'ss__branch-override__bottom__content',
												children: error?.description || componentThemes[themeName].bottom.content,
											}),
										],
									}),
								],
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				};
		},
		'./components/src/components/Organisms/BranchOverride/index.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, { BranchOverride: () => _BranchOverride__WEBPACK_IMPORTED_MODULE_0__.n });
			var _BranchOverride__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'
			);
		},
		'./components/src/components/Organisms/TermsList/TermsList.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => TermsList });
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
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
				_hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useCleanUpEmptyDivs.tsx');
			const CSS_TermsList = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'flex',
						flexDirection: 'row',
						background: '#f8f8f8',
						width: 'auto',
						flexWrap: 'wrap',
						'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
						'.ss__terms-list__row:empty': { display: 'none' },
						'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
					}),
				TermsList = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)(
							'termsList',
							globalTheme,
							{
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'History',
								trendingTitle: 'Trending',
								suggestionTitle: 'Suggestions',
							},
							properties
						),
						{
							layout,
							historyTitle,
							trendingTitle,
							suggestionTitle,
							retainHistory,
							retainTrending,
							treePath,
							disableStyles,
							style,
							className,
							controller,
							styleScript,
						} = props,
						subProps_terms = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }), theme: props.theme, treePath },
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_TermsList(stylingProps), style]);
					const history = controller?.store.history || [],
						suggestions = controller?.store.terms || [],
						trending = controller?.store.trending || [],
						trendingActive = trending?.filter((term) => term.active).pop(),
						historyActive = history?.filter((term) => term.active).pop(),
						{ loaded, results, state } = controller?.store;
					let showTrending = !1;
					trending?.length && ((retainTrending && loaded) || (!results.length && !state.input)) && (showTrending = !0);
					let showHistory = !1;
					history?.length && ((retainHistory && loaded) || (!results.length && !state.input)) && (showHistory = !0),
						controller.store.state.input ||
							(!historyActive && !trendingActive) ||
							(history?.length && (showHistory = !0), trending?.length && (showTrending = !0)),
						(0, _hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_7__.P)('.ss__terms-list__row, .ss__terms-list');
					const findModule = (module) =>
						'string' != typeof module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									className: 'ss__terms-list__row',
									children: module?.map((subModule) => findModule(subModule)),
							  })
							: '_' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', { className: 'ss__terms-list__separator' })
							: 'History' == module && showHistory
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__.i, {
									className: 'ss__terms-list__terms--history',
									title: historyTitle,
									terms: history,
									controller,
									name: 'history',
									...subProps_terms,
							  })
							: 'Trending' == module && showTrending
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__.i, {
									className: 'ss__terms-list__terms--trending',
									title: trendingTitle,
									terms: trending,
									controller,
									name: 'trending',
									...subProps_terms,
							  })
							: 'Suggestions' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__.i, {
									className: 'ss__terms-list__terms--suggestions',
									title: suggestionTitle,
									terms: suggestions,
									controller,
									name: 'suggestions',
									...subProps_terms,
							  })
							: void 0;
					return layout?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms-list', className),
									children: layout?.map((module) => findModule(module)),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
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
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						height: vertical ? '100%' : void 0,
						'.ss__result__image-wrapper': { height: vertical ? '85%' : void 0 },
					}),
				Recommendation = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							breakpoints: properties.vertical
								? JSON.parse(JSON.stringify(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.og))
								: JSON.parse(JSON.stringify(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.K)),
							pagination: !1,
							loop: !0,
							title: properties.controller?.store?.profile?.display?.templateParameters?.title,
						},
						_properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties };
					let displaySettings,
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendation', globalTheme, defaultProps, _properties);
					properties.theme?.name ||
						globalTheme.name ||
						!props.breakpoints ||
						((displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props.breakpoints)),
						displaySettings && Object.keys(displaySettings).length && (props = { ...props, ...displaySettings }));
					const {
							title,
							controller,
							children,
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
							breakpoints: ____,
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
					const subProps = {
							carousel: {
								className: 'ss__recommendation__Carousel',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles, vertical }),
								theme: props?.theme,
								treePath,
							},
							result: {
								className: 'ss__recommendation__result',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Z)(props, defaultStyles),
						[isVisible, setIsVisible] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),
						recsRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
					(!mergedlazyRender?.enabled ||
						(0, _hooks__WEBPACK_IMPORTED_MODULE_13__.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
						setIsVisible(!0);
					const defaultLang = { titleText: { value: `${title}` } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
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
															...subProps.carousel,
															...additionalProps,
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
																								treePath: subProps.result.treePath,
																							});
																						}
																						return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																							_Molecules_Result__WEBPACK_IMPORTED_MODULE_18__.Q,
																							{ ...subProps.result, controller, result },
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
				RecommendationBundleEasyAdd = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const _properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties },
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties,
						subProps_recommendationBundle = {
							hideCheckboxes: !0,
							seedText: '',
							ctaButtonText: 'Add Both',
							ctaInline: !1,
							hideSeed: !0,
							alias: 'recommendationBundleEasyAdd',
							limit: 1,
							carousel: { enabled: !1 },
							separatorIcon: !1,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_2__.s)({ disableStyles }),
							theme: _properties?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.Z)(_properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_5__.g, {
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
			__webpack_require__.d(__webpack_exports__, { X: () => CTASlot, a: () => RecommendationBundleList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				),
				_Atoms_Price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
							display: 'flex',
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
							'.ss__result__details': { textAlign: 'left' },
						},
						'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
						'.ss__recommendation-bundle-list__wrapper': { order: '3' },
						'.ss__recommendation-bundle-list__wrapper__cta': {
							order: '2',
							'.ss__button': { cursor: 'pointer', border: '1px solid black' },
							'.cta__inner_images': { display: 'flex', flexDirection: 'row' },
							'.cta__inner__image-wrapper .ss__icon': { top: '50%', position: 'absolute', right: '-0.5em' },
							'.cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
							'.cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
						},
					}),
				RecommendationBundleList = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const _properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties },
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties,
						subProps_recommendationBundle = {
							seedText: '',
							ctaInline: !1,
							limit: 5,
							preselectedCount: 2,
							carousel: { enabled: !1, seedInCarousel: !0 },
							ctaSlot: (props) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(CTASlot, { ...props }),
							resultComponent: (props) =>
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_3__.Q, {
									hideImage: !0,
									...props,
								}),
							vertical: !0,
							separatorIcon: !1,
							alias: 'recommendationBundleList',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_4__.s)({ disableStyles }),
							theme: _properties?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(_properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_6__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
					});
				}),
				CTASlot = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((props) => {
					const cartStore = props.cartStore;
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('div', {
						className: 'cta',
						children: [
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('div', {
								className: 'cta__inner',
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('div', {
										className: 'cta__inner_images',
										children: cartStore.items.map((item) => {
											const core = item.display.mappings.core;
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('div', {
												className: 'cta__inner__image-wrapper',
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_7__._, {
														src: core.thumbnailImageUrl,
														alt: core.name,
														lazy: !1,
													}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_8__.I, {
														icon: 'plus',
														size: 12,
													}),
												],
											});
										}),
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('div', {
										className: 'cta__inner__subtotal__title',
										children: `${cartStore.count} item${1 != cartStore.count ? 's' : ''}`,
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('div', {
										className: 'cta__inner__price',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('div', {
												className: 'cta__inner__price__title',
												children: 'Total Price',
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('div', {
												className: 'cta__inner__price__wrapper',
												children: [
													cartStore.msrp > cartStore.price &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('span', {
															className: 'cta__inner__price__msrp',
															children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('s', {
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_9__.g, {
																		value: cartStore.msrp,
																	}),
																	' USD',
																],
															}),
														}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)('span', {
														className: 'cta__inner__price__msrp',
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_9__.g, {
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
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('div', {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_10__.$, {
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
						'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
					}),
				RecommendationBundleVertical = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const _properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties },
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties,
						subProps_recommendationBundle = {
							ctaInline: !1,
							carousel: { enabled: !1 },
							separatorIcon: !1,
							alias: 'recommendationBundleVertical',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_2__.s)({ disableStyles }),
							theme: _properties?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.Z)(_properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_5__.g, {
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
			__webpack_require__.d(__webpack_exports__, { O: () => recommendationEmailThemeComponentProps, i: () => RecommendationEmail });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const recommendationEmailThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} },
				RecommendationEmail = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
						defaultProps = { resultWidth: '240px', name: properties.controller?.store?.profile?.tag?.toLowerCase() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)('recommendationEmail', globalTheme, defaultProps, properties),
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
														treePath,
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
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
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
				react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const defaultStyles = ({ gapSize, columns }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
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
				RecommendationGrid = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						defaultProps = { results: properties.controller?.store?.results, gapSize: '20px' },
						_properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendationGrid', globalTheme, defaultProps, _properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, title, resultComponent, trim, lazyRender, className, treePath, theme, controller } = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender },
						subProps_result = {
							className: 'ss__recommendation-grid__result',
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
						[isVisible, setIsVisible] = (0, react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),
						recsRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_5__.li)(null);
					return (
						(!mergedlazyRender?.enabled ||
							(0, _hooks__WEBPACK_IMPORTED_MODULE_12__.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
							setIsVisible(!0),
						results?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
										...styling,
										ref: recsRef,
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation-grid', className),
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
																				treePath,
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
		'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { j: () => SearchHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Search_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/components/Templates/Search/Search.tsx');
			const SearchHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) =>
				(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_providers__WEBPACK_IMPORTED_MODULE_2__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Search_Search__WEBPACK_IMPORTED_MODULE_3__.v, {
						...properties,
						alias: 'searchHorizontal',
					}),
				})
			);
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
					BranchOverride: () => BranchOverride.BranchOverride,
					Breadcrumbs: () => Breadcrumbs.B,
					Button: () => Button.$,
					CTASlot: () => RecommendationBundleList.X,
					CacheProvider: () => cache._,
					CalloutBadge: () => CalloutBadge.W,
					Carousel: () => Carousel.FN,
					Checkbox: () => Checkbox.S,
					ControllerProvider: () => controller.e2,
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
					PaginationInfo: () => PaginationInfo.R,
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
					Terms: () => Terms.i,
					TermsList: () => TermsList.G,
					ThemeProvider: () => emotion_element_5486c51c_browser_esm.a,
					Toolbar: () => Toolbar.M,
					TreePathProvider: () => treePath.p3,
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
					recommendationEmailThemeComponentProps: () => RecommendationEmail.O,
					snapnco: () => snapnco.N,
					snappy: () => snappy.m,
					useA11y: () => useA11y.i,
					useClickOutside: () => useClickOutside.L,
					useComponent: () => useComponent.x,
					useConstructor: () => useConstructor,
					useController: () => controller.as,
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
					useTreePath: () => treePath.LU,
					withController: () => controller.Bk,
					withSnap: () => snap.b$,
					withStore: () => withStore,
					withTheme: () => emotion_element_5486c51c_browser_esm.b,
					withTreePath: () => treePath.QE,
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
				PaginationInfo = __webpack_require__('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
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
				Terms = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
				BranchOverride = __webpack_require__('./components/src/components/Organisms/BranchOverride/index.ts'),
				Facet = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				Facets = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				FacetsHorizontal = __webpack_require__('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
				FilterSummary = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				MobileSidebar = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				NoResults = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				Sidebar = __webpack_require__('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
				Toolbar = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				Autocomplete = __webpack_require__('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
				TermsList = __webpack_require__('./components/src/components/Organisms/TermsList/TermsList.tsx'),
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
				controller = __webpack_require__('./components/src/providers/controller.tsx');
			const StoreContext = (0, __webpack_require__('../../node_modules/preact/dist/preact.module.js').q6)(null),
				StoreProvider = ({ children, store }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(StoreContext.Provider, { value: store, children }),
				useStore = () => (0, hooks_module.NT)(StoreContext);
			function withStore(Component) {
				return (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Component, { store: useStore(), ...props });
			}
			var emotion_element_5486c51c_browser_esm = __webpack_require__(
				'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
			);
			const defaultTheme = {
				variables: {
					breakpoints: { mobile: 540, tablet: 767, desktop: 1200 },
					colors: { text: '#222222', primary: '#3A23AD', secondary: '#4c3ce2', accent: '#00cee1' },
				},
			};
			var snap = __webpack_require__('./components/src/providers/snap.tsx'),
				treePath = __webpack_require__('./components/src/providers/treePath.tsx'),
				createHoverProps = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				base = __webpack_require__('./components/src/themes/base/base.ts'),
				bocachica = __webpack_require__('./components/src/themes/bocachica/bocachica.ts'),
				snappy = __webpack_require__('./components/src/themes/snappy/snappy.ts'),
				snapnco = __webpack_require__('./components/src/themes/snapnco/snapnco.ts');
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
//# sourceMappingURL=8072.0c0da972.iframe.bundle.js.map
