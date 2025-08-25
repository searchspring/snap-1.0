'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3636],
	{
		'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => FormattedNumber });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
					{ value, symbol, decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator, symbolAfter, className, internalClassName, raw } =
						props,
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
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__formatted-number', className, internalClassName),
								...styling,
								children: formattedNumber,
							}),
					  });
			}
		},
		'./components/src/components/Atoms/Loading/LoadingBar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => LoadingBar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
						{ active, className, internalClassName } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return active
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__loading-bar', className, internalClassName),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', { className: 'ss__loading-bar__bar' }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Atoms/Skeleton/Skeleton.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { E: () => Skeleton });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
						{ className, internalClassName } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__skeleton', className, internalClassName),
						}),
					});
				});
		},
		'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { z: () => ErrorHandler });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/Colour/Colour.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
						{ controller, error, disableStyles, onRetryClick, className, internalClassName, treePath } = props,
						subProps_icon = {
							size: '18px',
							internalClassName: 'ss__error-handler__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_buttonRetry = {
							internalClassName: 'ss__error-handler__button',
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
										className,
										internalClassName
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
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
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
						{ title, onTermClick, limit, previewOnHover, emIfy, className, internalClassName, controller } = props,
						currentInput = controller?.store?.state?.input,
						terms = props.terms,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						termsToShow = limit ? terms?.slice(0, limit) : terms,
						defaultLang = { title: { value: title } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedTitleLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)({ title: lang.title }, { controller });
					return termsToShow?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms', className, internalClassName),
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
											children: termsToShow?.map((term, idx) => {
												const defaultTermLang = {
														term: {
															value: `${emIfy ? emIfyTerm(term.value, currentInput || '') : term.value}`,
															attributes: { 'aria-label': `${title} item ${idx + 1} of ${termsToShow.length}, ${term.value}` },
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
														...(previewOnHover ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_11__.l)(term.preview) : {}),
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
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
						{ branch, details, error, className, internalClassName, darkMode, disableStyles, onRemoveClick, treePath } = props,
						subProps_icon = {
							internalClassName: 'ss__branch-override__bottom__left__icon',
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
									className,
									internalClassName
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
				_hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useCleanUpEmptyDivs.tsx');
			const defaultStyles = ({}) =>
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
							className,
							internalClassName,
							controller,
						} = props,
						subProps_terms = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }), theme: props.theme, treePath },
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						history = controller?.store.history || [],
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
						(0, _hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_8__.P)(['.ss__terms-list', '.ss__terms-list__row'], '.ss__terms-list__separator');
					const findModule = (module) =>
						'string' != typeof module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									className: 'ss__terms-list__row',
									children: module?.map((subModule) => findModule(subModule)),
							  })
							: '_' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', { className: 'ss__terms-list__separator' })
							: 'History' == module && showHistory
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__.i, {
									internalClassName: 'ss__terms-list__terms--history',
									title: historyTitle,
									terms: history,
									controller,
									name: 'history',
									limit: controller.config.settings?.history?.limit,
									...subProps_terms,
							  })
							: 'Trending' == module && showTrending
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__.i, {
									internalClassName: 'ss__terms-list__terms--trending',
									title: trendingTitle,
									terms: trending,
									controller,
									name: 'trending',
									limit: controller.config.settings?.trending?.limit,
									...subProps_terms,
							  })
							: 'Suggestions' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__.i, {
									internalClassName: 'ss__terms-list__terms--suggestions',
									title: suggestionTitle,
									terms: suggestions,
									controller,
									name: 'suggestions',
									...subProps_terms,
							  })
							: void 0;
					return layout?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms-list', className, internalClassName),
									children: layout?.map((module) => findModule(module)),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Templates/Recommendation/Recommendation.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { A: () => Recommendation });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
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
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'
				);
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
							internalClassName,
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
								internalClassName: 'ss__recommendation__Carousel',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles, vertical }),
								theme: props?.theme,
								treePath,
							},
							result: {
								internalClassName: 'ss__recommendation__result',
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
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation', className, internalClassName),
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
																				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.o,
																				{ controller, result: resultsToRender[idx], children: child }
																			)
																	  )
																	: resultsToRender.map((result) =>
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.o,
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
																		_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.o,
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
																		_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_17__.o,
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
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				),
				_Atoms_Price__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities_componentNameToClassName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./components/src/utilities/componentNameToClassName.ts'
				),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
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
							'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': { top: '50%', position: 'absolute', right: '-0.5em' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
						},
					}),
				alias = 'recommendationBundleList',
				RecommendationBundleList = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const _properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties },
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties,
						subProps_recommendationBundle = {
							seedText: '',
							ctaInline: !1,
							limit: 5,
							preselectedCount: 2,
							carousel: { enabled: !1, seedInCarousel: !0 },
							ctaSlot: (props) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(CTASlot, { ...props }),
							resultComponent: (props) =>
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q, {
									hideImage: !0,
									hideBadge: !0,
									...props,
								}),
							vertical: !0,
							separatorIcon: !1,
							alias,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: _properties?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(_properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_9__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
					});
				}),
				CTASlot = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((props) => {
					const cartStore = props.cartStore,
						classNamePrefix = `ss__${(0, _utilities_componentNameToClassName__WEBPACK_IMPORTED_MODULE_10__.b)(alias)}`;
					props.onAddToCart = (e) => {
						setAddedToCart(!0), props.onAddToCart(e), setTimeout(() => setAddedToCart(!1), props.ctaButtonSuccessTimeout);
					};
					const [addedToCart, setAddedToCart] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(!1);
					props.addedToCart = addedToCart;
					props.treePath;
					const subProps_separatorIcon = {
							name: 'bundle-cart-separator',
							className: `${classNamePrefix}__wrapper__cta__icon--separator`,
							icon: 'plus',
							size: 12,
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_icon = {
							name: 'bundle-cart',
							className: `${classNamePrefix}__wrapper__cta__icon`,
							size: 50,
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_subtotalStrike = {
							name: 'bundle-msrp',
							className: `${classNamePrefix}__wrapper__cta__price--strike`,
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_subtotalPrice = {
							className: `${classNamePrefix}__wrapper__cta__price`,
							name: 'bundle-price',
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_button = { className: `${classNamePrefix}__wrapper__cta__button`, theme: props?.theme, treePath: props.treePath },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.u)(lang, {});
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
						className: `${classNamePrefix}__wrapper__cta`,
						children: [
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
								className: `${classNamePrefix}__wrapper__cta__inner`,
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
										className: `${classNamePrefix}__wrapper__cta__inner__images`,
										children: cartStore.items.map((item) => {
											const core = item.display.mappings.core;
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
												className: `${classNamePrefix}__wrapper__cta__inner__image-wrapper`,
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('a', {
														href: core.url,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_12__._, {
															src: core.thumbnailImageUrl,
															alt: core.name,
															lazy: !1,
														}),
													}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__.I, {
														...subProps_separatorIcon,
													}),
												],
											});
										}),
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
										className: `${classNamePrefix}__wrapper__cta__subtotal`,
										'aria-atomic': 'false',
										'aria-live': 'polite',
										children: [
											props.ctaIcon
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
														className: `${classNamePrefix}__wrapper__cta__subtotal__icon__wrapper`,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__.I, {
															...subProps_icon,
															...('string' == typeof props.ctaIcon ? { icon: props.ctaIcon } : props.ctaIcon),
														}),
												  })
												: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK,
														{}
												  ),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('span', {
												className: `${classNamePrefix}__wrapper__cta__subtotal__title`,
												children: `Subtotal for ${cartStore.count} items`,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
												className: `${classNamePrefix}__wrapper__cta__subtotal__prices`,
												children: [
													cartStore.msrp && cartStore.msrp !== cartStore.price
														? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('label', {
																className: `${classNamePrefix}__wrapper__cta__subtotal__strike`,
																children: [
																	'Was ',
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_14__.g, {
																		...subProps_subtotalStrike,
																		lineThrough: !0,
																		value: cartStore.msrp,
																	}),
																],
														  })
														: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(
																_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK,
																{}
														  ),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('label', {
														className: `${classNamePrefix}__wrapper__cta__subtotal__price`,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_14__.g, {
															...subProps_subtotalPrice,
															value: cartStore.price,
														}),
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_15__.$, {
									...subProps_button,
									disabled: 0 == cartStore.items.length,
									disableStyles: !0,
									internalClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${classNamePrefix}__wrapper__cta__button`, {
										[`${classNamePrefix}__wrapper__cta__button--added`]: addedToCart,
									}),
									'aria-live': addedToCart,
									onClick: (e) => props.onAddToCart(e),
									...(addedToCart ? mergedLang.ctaButtonSuccessText?.all : mergedLang.ctaButtonText?.all),
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
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
			const recommendationEmailThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} },
				defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				RecommendationEmail = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						defaultProps = { resultWidth: '240px', name: properties.controller?.store?.profile?.tag?.toLowerCase() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('recommendationEmail', globalTheme, defaultProps, properties),
						{ controller, results, resultComponent, resultProps, resultWidth, treePath, disableStyles, internalClassName, className } = props,
						subProps_result = {
							internalClassName: 'ss__recommendation-email__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles),
						resultsToRender = results || controller?.store?.results || [];
					return resultsToRender.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-email', className, internalClassName),
								...styling,
								children: resultsToRender.map((result, idx) =>
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(
										'div',
										{
											id: `ss-emailrec${idx}`,
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-email__result-wrapper'),
											style: { display: 'block', width: resultWidth },
											children: (() => {
												if (resultComponent) {
													const ResultComponent = resultComponent;
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(ResultComponent, {
														controller,
														result,
														...resultProps,
														email: !0,
														treePath,
													});
												}
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_8__.Q, {
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
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FK, {});
				});
		},
		'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { q: () => RecommendationGrid });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'
				),
				react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const defaultStyles = ({ gapSize, columns }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
						maxWidth: '100%',
						maxHeight: '100%',
						'.ss__recommendation-grid__results': {
							display: 'flex',
							flexFlow: 'row wrap',
							gap: gapSize,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							overflow: 'auto',
							'@supports (display: grid)': { display: 'grid' },
						},
					}),
				RecommendationGrid = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						defaultProps = {
							results: properties.controller?.store?.results,
							gapSize: '20px',
							title: properties.controller?.store?.profile?.display?.templateParameters?.title,
						},
						_properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendationGrid', globalTheme, defaultProps, _properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, title, resultComponent, trim, lazyRender, className, internalClassName, treePath, theme, controller } = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender },
						subProps_result = {
							internalClassName: 'ss__recommendation-grid__result',
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
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation-grid', className, internalClassName),
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
																			_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.o,
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
																_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.o,
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
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
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
					A11Y_ATTRIBUTE: () => useA11y.aZ,
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
					FOCUSABLE_ELEMENTS: () => useA11y.DH,
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
					RecommendationResultTracker: () => ResultTracker.o,
					Result: () => Result.Q,
					ResultTracker: () => ResultTracker.o,
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
					useA11y: () => useA11y.iy,
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
					useIntersectionAdvanced: () => useIntersectionAdvanced.v,
					useLang: () => useLang.u,
					useMediaQuery: () => useMediaQuery.U,
					useSnap: () => snap.uk,
					useStore: () => useStore,
					useTheme: () => emotion_element_5486c51c_browser_esm.u,
					useTracking: () => useTracking,
					useTreePath: () => treePath.LU,
					withController: () => controller.Bk,
					withSnap: () => snap.b$,
					withStore: () => withStore,
					withTheme: () => emotion_element_5486c51c_browser_esm.b,
					withTracking: () => withTracking.W,
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
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				emotion_react_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx');
			const AthosCommerceLogo = () =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)('svg', {
					id: 'Layer_2',
					className: 'athos-logo',
					'data-name': 'Layer 2',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 271.84 40',
					children: (0, emotion_react_jsx_runtime_browser_esm.Y)('g', {
						id: 'Layer_1-2',
						'data-name': 'Layer 1',
						children: (0, emotion_react_jsx_runtime_browser_esm.FD)('g', {
							children: [
								(0, emotion_react_jsx_runtime_browser_esm.FD)('g', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.FD)('g', {
											children: [
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-2',
													d: 'M50.86,18.26c.58-1.16,1.37-2.05,2.37-2.67,1-.62,2.11-.94,3.34-.94,1.05,0,1.97.21,2.77.64.79.43,1.4.99,1.83,1.68v-2.11h4.57v14.92h-4.57v-2.11c-.45.69-1.07,1.26-1.86,1.68-.79.43-1.72.64-2.77.64-1.21,0-2.32-.32-3.31-.95-1-.63-1.79-1.53-2.37-2.7s-.87-2.52-.87-4.05.29-2.88.87-4.04ZM60.22,19.62c-.63-.66-1.4-.99-2.3-.99-.66,0-1.31.2-1.85.58-.95.66-1.42,1.69-1.42,3.09,0,1.14.32,2.05.95,2.71.78.82,1.77,1.14,2.96.95.2-.03.41-.1.6-.19,1.34-.64,2.01-1.79,2.01-3.45,0-1.14-.32-2.04-.95-2.7Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-2',
													d: 'M77.07,25.91v3.88h-2.33c-1.66,0-2.95-.41-3.88-1.22s-1.39-2.13-1.39-3.97v-5.94h-1.82v-3.8h1.82v-3.64h4.57v3.64h2.99v3.8h-2.99v5.99c0,.45.11.77.32.96s.57.29,1.07.29h1.63Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-2',
													d: 'M92.29,16.4c1.03,1.13,1.55,2.69,1.55,4.66v8.72h-4.55v-8.1c0-1-.26-1.77-.78-2.33s-1.21-.83-2.08-.83-1.57.28-2.08.83c-.52.55-.78,1.33-.78,2.33v8.1h-4.57V10h4.57v6.87c.46-.66,1.1-1.19,1.9-1.58.8-.39,1.7-.59,2.7-.59,1.71,0,3.08.57,4.12,1.7Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-2',
													d: 'M99.47,29.06c-1.17-.62-2.08-1.52-2.75-2.67-.67-1.16-1-2.51-1-4.06s.34-2.88,1.02-4.05c.68-1.17,1.6-2.06,2.78-2.69s2.49-.94,3.96-.94,2.78.31,3.96.94,2.1,1.52,2.78,2.69c.68,1.17,1.02,2.52,1.02,4.05s-.34,2.88-1.03,4.05c-.69,1.17-1.62,2.06-2.81,2.69-1.19.62-2.51.94-3.97.94s-2.78-.31-3.94-.94ZM105.65,25.08c.61-.64.92-1.56.92-2.75s-.3-2.11-.9-2.75c-.6-.64-1.33-.96-2.21-.96s-1.63.32-2.22.95c-.59.63-.88,1.56-.88,2.77s.29,2.11.87,2.75c.58.64,1.31.96,2.18.96s1.62-.32,2.23-.96Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-2',
													d: 'M116.45,29.33c-1.02-.45-1.82-1.06-2.41-1.83-.59-.78-.92-1.65-.99-2.61h4.52c.05.52.3.94.72,1.26.43.32.95.48,1.58.48.57,0,1.01-.11,1.32-.33.31-.22.47-.51.47-.87,0-.43-.22-.74-.67-.95-.45-.2-1.17-.43-2.17-.68-1.07-.25-1.96-.51-2.67-.79-.71-.28-1.33-.71-1.84-1.31-.52-.6-.78-1.4-.78-2.42,0-.86.24-1.63.71-2.34.47-.7,1.17-1.26,2.09-1.67s2.01-.61,3.28-.61c1.87,0,3.35.46,4.42,1.39s1.7,2.16,1.86,3.69h-4.22c-.07-.52-.3-.93-.68-1.23-.38-.3-.89-.45-1.51-.45-.53,0-.95.1-1.23.31s-.43.49-.43.84c0,.43.23.75.68.96s1.16.43,2.13.64c1.1.29,2.01.57,2.7.84.7.28,1.31.72,1.83,1.34s.8,1.44.82,2.47c0,.87-.25,1.65-.74,2.34-.49.69-1.19,1.23-2.11,1.62-.92.39-1.98.59-3.2.59-1.3,0-2.46-.22-3.48-.67Z',
												}),
											],
										}),
										(0, emotion_react_jsx_runtime_browser_esm.FD)('g', {
											children: [
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M133.64,18.4c.61-1.14,1.46-2.02,2.54-2.65,1.08-.62,2.31-.93,3.7-.93,1.82,0,3.32.45,4.49,1.35,1.18.9,1.94,2.12,2.28,3.67h-2.02c-.25-1.06-.8-1.9-1.63-2.5-.84-.6-1.88-.9-3.12-.9-.99,0-1.88.22-2.67.67s-1.42,1.12-1.88,2.01c-.46.89-.69,1.99-.69,3.28s.23,2.39.69,3.29,1.08,1.58,1.88,2.02c.79.45,1.68.68,2.67.68,1.24,0,2.28-.3,3.12-.91.84-.6,1.38-1.44,1.63-2.52h2.02c-.34,1.51-1.11,2.73-2.29,3.64-1.19.92-2.68,1.38-4.48,1.38-1.39,0-2.62-.31-3.7-.93s-1.93-1.5-2.54-2.65c-.61-1.14-.92-2.48-.92-4.01s.31-2.87.92-4.01Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M152.31,29.07c-1.11-.62-1.98-1.5-2.62-2.65-.64-1.14-.96-2.48-.96-4.01s.32-2.87.97-4.01,1.53-2.02,2.65-2.65c1.12-.62,2.37-.93,3.75-.93s2.64.31,3.77.93c1.12.62,2.01,1.5,2.65,2.65.64,1.14.96,2.48.96,4.01s-.32,2.84-.97,4c-.65,1.15-1.54,2.04-2.67,2.66-1.13.62-2.39.93-3.78.93s-2.63-.31-3.74-.93ZM158.75,27.69c.83-.44,1.5-1.11,2.01-2,.51-.89.77-1.98.77-3.28s-.25-2.39-.76-3.28-1.17-1.56-2-2c-.83-.44-1.73-.66-2.7-.66s-1.87.22-2.7.66-1.49,1.11-1.99,2c-.49.89-.74,1.99-.74,3.28s.25,2.39.74,3.28c.5.89,1.15,1.56,1.97,2,.82.44,1.72.66,2.69.66s1.87-.22,2.7-.66Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M187.32,16.41c1.09,1.09,1.63,2.67,1.63,4.74v8.64h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.83-1.27-3.16-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.84-1.27-3.19-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.89v-14.74h1.89v2.54c.47-.92,1.13-1.61,2-2.09.86-.48,1.83-.72,2.89-.72,1.28,0,2.4.31,3.36.92.96.61,1.66,1.51,2.09,2.7.4-1.17,1.07-2.06,2.04-2.69s2.06-.93,3.28-.93c1.73,0,3.14.55,4.23,1.63Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M212.8,16.41c1.09,1.09,1.63,2.67,1.63,4.74v8.64h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.83-1.27-3.16-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.84-1.27-3.19-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.89v-14.74h1.89v2.54c.47-.92,1.13-1.61,2-2.09.86-.48,1.83-.72,2.89-.72,1.28,0,2.4.31,3.36.92.96.61,1.66,1.51,2.09,2.7.4-1.17,1.07-2.06,2.04-2.69s2.06-.93,3.28-.93c1.73,0,3.14.55,4.23,1.63Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M230.57,23.14h-12.23c.05,1.12.32,2.07.81,2.86s1.12,1.39,1.92,1.8c.79.4,1.66.61,2.59.61,1.22,0,2.26-.3,3.09-.89s1.39-1.39,1.66-2.4h2c-.36,1.44-1.13,2.62-2.31,3.52s-2.66,1.36-4.44,1.36c-1.39,0-2.63-.31-3.73-.93-1.1-.62-1.96-1.5-2.58-2.65-.62-1.14-.93-2.48-.93-4.01s.31-2.87.92-4.02c.61-1.15,1.47-2.03,2.56-2.65s2.35-.92,3.75-.92,2.63.31,3.69.92c1.05.61,1.86,1.44,2.43,2.47.57,1.04.85,2.18.85,3.44,0,.65-.02,1.14-.05,1.48ZM228.05,18.79c-.46-.77-1.09-1.36-1.88-1.76-.79-.4-1.66-.59-2.59-.59-1.4,0-2.6.45-3.59,1.35-.99.9-1.54,2.17-1.65,3.81h10.37c.02-1.1-.2-2.03-.66-2.81Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M236.49,15.53c.85-.5,1.9-.76,3.15-.76v1.97h-.51c-1.37,0-2.47.37-3.29,1.11-.83.74-1.24,1.97-1.24,3.7v8.23h-1.89v-14.74h1.89v2.62c.41-.92,1.05-1.63,1.9-2.13Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M242.55,18.4c.61-1.14,1.46-2.02,2.54-2.65s2.31-.93,3.7-.93c1.82,0,3.32.45,4.49,1.35,1.18.9,1.94,2.12,2.28,3.67h-2.02c-.25-1.06-.8-1.9-1.63-2.5-.84-.6-1.88-.9-3.12-.9-.99,0-1.88.22-2.67.67s-1.42,1.12-1.88,2.01c-.46.89-.69,1.99-.69,3.28s.23,2.39.69,3.29,1.08,1.58,1.88,2.02c.79.45,1.68.68,2.67.68,1.24,0,2.28-.3,3.12-.91.84-.6,1.38-1.44,1.63-2.52h2.02c-.34,1.51-1.11,2.73-2.29,3.64-1.19.92-2.68,1.38-4.48,1.38-1.39,0-2.62-.31-3.7-.93s-1.93-1.5-2.54-2.65c-.61-1.14-.92-2.48-.92-4.01s.31-2.87.92-4.01Z',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
													className: 'cls-1',
													d: 'M271.79,23.14h-12.23c.05,1.12.32,2.07.81,2.86.49.79,1.12,1.39,1.92,1.8.79.4,1.66.61,2.59.61,1.22,0,2.25-.3,3.09-.89.84-.59,1.39-1.39,1.66-2.4h2c-.36,1.44-1.13,2.62-2.31,3.52-1.18.91-2.66,1.36-4.44,1.36-1.39,0-2.63-.31-3.73-.93s-1.96-1.5-2.58-2.65c-.62-1.14-.93-2.48-.93-4.01s.31-2.87.92-4.02c.61-1.15,1.47-2.03,2.57-2.65s2.35-.92,3.75-.92,2.63.31,3.68.92c1.05.61,1.86,1.44,2.43,2.47.57,1.04.85,2.18.85,3.44,0,.65-.02,1.14-.05,1.48ZM269.26,18.79c-.46-.77-1.09-1.36-1.88-1.76-.79-.4-1.66-.59-2.59-.59-1.4,0-2.6.45-3.59,1.35s-1.54,2.17-1.65,3.81h10.37c.02-1.1-.2-2.03-.66-2.81Z',
												}),
											],
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('g', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
											className: 'cls-2',
											d: 'M40,13.34c0,2.87-2.1,5.2-4.7,5.2h-10.42c-3.66,0-5.9-4.42-4.02-7.9l4.37-8.11c.86-1.57,2.37-2.53,4.02-2.53h6.03c2.59,0,4.7,2.34,4.7,5.2l.02,8.14Z',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
											className: 'cls-1',
											d: 'M40,34.79c0,2.87-2.1,5.2-4.7,5.2h-10.42c-3.66,0-5.9-4.42-4.02-7.9l4.37-8.11c.86-1.57,2.37-2.53,4.02-2.53h6.03c2.59,0,4.7,2.34,4.7,5.2l.02,8.14Z',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
											className: 'cls-1',
											d: 'M0,5.2C0,2.34,2.1,0,4.7,0h10.42c3.66,0,5.9,4.42,4.02,7.9l-4.37,8.11c-.86,1.57-2.37,2.53-4.02,2.53h-6.03C2.12,18.54.02,16.21.02,13.34l-.02-8.14Z',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
											className: 'cls-2',
											d: 'M0,26.66c0-2.87,2.1-5.2,4.7-5.2h10.42c3.66,0,5.9,4.42,4.02,7.9l-4.37,8.11c-.86,1.57-2.37,2.53-4.02,2.53h-6.03C2.12,40,.02,37.66.02,34.8l-.02-8.14Z',
										}),
									],
								}),
							],
						}),
					}),
				});
			var hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const Reset = () =>
					(0, emotion_react_jsx_runtime_browser_esm.FD)('svg', {
						fill: '#000000',
						viewBox: '0 0 1920 1920',
						xmlns: 'http://www.w3.org/2000/svg',
						children: [
							(0, emotion_react_jsx_runtime_browser_esm.Y)('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }),
							(0, emotion_react_jsx_runtime_browser_esm.Y)('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }),
							(0, emotion_react_jsx_runtime_browser_esm.Y)('g', {
								id: 'SVGRepo_iconCarrier',
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)('path', {
									d: 'M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0',
									fillRule: 'evenodd',
								}),
							}),
						],
					}),
				Control = (0, es.PA)((props) => {
					const { type, label, description, onReset, display, showReset, value, options, onChange } = props,
						[inputValue, setInputValue] = (0, hooks_module.J0)(value);
					return (
						(0, hooks_module.vJ)(() => {
							setInputValue(value);
						}, [value]),
						'hidden' === display
							? null
							: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'option checkbox',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { children: label }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'reset',
											children: showReset
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
														title: 'Reset',
														onClick: () => {
															onReset();
														},
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Reset, {}),
												  })
												: null,
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'value',
											title: description,
											children: (() => {
												switch (type) {
													case 'text':
														return (0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
															type: 'text',
															value,
															onChange: (e) => onChange(e.target.value),
															disabled: 'disabled' === display,
														});
													case 'number':
														return (0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
															type: 'number',
															value,
															onChange: (e) => onChange(Number(e.target.value)),
															disabled: 'disabled' === display,
														});
													case 'checkbox':
														return (0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
															type: 'checkbox',
															checked: value,
															onChange: (e) => onChange(e.target.checked),
															disabled: 'disabled' === display,
														});
													case 'dropdown':
														return (0, emotion_react_jsx_runtime_browser_esm.Y)('select', {
															onChange: (e) => onChange(e.target.value),
															disabled: 'disabled' === display,
															value,
															children: options?.map((group, groupIndex) =>
																group.group
																	? (0, emotion_react_jsx_runtime_browser_esm.Y)(
																			'optgroup',
																			{
																				label: group.group,
																				children: group.options.map((option, optionIndex) =>
																					(0, emotion_react_jsx_runtime_browser_esm.Y)(
																						'option',
																						{ value: option.value, children: option.label || option.value },
																						`${groupIndex}-${optionIndex}`
																					)
																				),
																			},
																			groupIndex
																	  )
																	: group.options.map((option, optionIndex) =>
																			(0, emotion_react_jsx_runtime_browser_esm.Y)(
																				'option',
																				{ value: option.value, children: option.label || option.value },
																				`${groupIndex}-${optionIndex}`
																			)
																	  )
															),
														});
													case 'color':
														return (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
															children: [
																(0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
																	type: 'color',
																	value,
																	onChange: (e) => {
																		setInputValue(e.target.value), onChange(e.target.value);
																	},
																	disabled: 'disabled' === display,
																}),
																(0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
																	type: 'text',
																	className: isValidHexColor(inputValue) ? '' : 'invalid',
																	value: inputValue,
																	onChange: (e) => {
																		setInputValue(e.target.value), isValidHexColor(e.target.value) && onChange(e.target.value);
																	},
																	disabled: 'disabled' === display,
																}),
															],
														});
													default:
														return null;
												}
											})(),
										}),
									],
							  })
					);
				}),
				isValidHexColor = (color) => !!/^#[0-9A-F]{6}$/i.test(color),
				CSS_AbstractedControls = ({}) => (0, emotion_react_browser_esm.AH)({}),
				AbstractedControls = (0, es.PA)((properties) => {
					const styling = { css: [CSS_AbstractedControls({ ...properties })] },
						{ title, enableGroupReset, feature, editorStore, data } = properties,
						[section, feat] = feature.split('/'),
						controlSection = editorStore.uiAbstractions[section],
						controlGroups = controlSection?.[feat];
					if (!controlGroups) return console.warn(`No controls found for feature: ${feature}`, controlSection, controlGroups), null;
					const showGroupReset = enableGroupReset && controlGroups.some((group) => group.controls.some((control) => control.shouldShowReset()));
					return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
						className: 'ss__template-editor__abstracted-controls',
						...styling,
						children: [
							title &&
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'control-title',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('h3', { children: title }),
										showGroupReset &&
											(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
												className: 'reset',
												children: (0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
													title: 'Reset',
													onClick: () => {
														controlGroups.forEach((group) => {
															group.controls.forEach((control) => {
																control.shouldShowReset() && control.onReset(data);
															});
														});
													},
													children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Reset, {}),
												}),
											}),
									],
								}),
							controlGroups.map((group) => {
								const showGroupReset = group.showReset && group.controls.some((control) => control.shouldShowReset());
								return (0, emotion_react_jsx_runtime_browser_esm.FD)(
									'div',
									{
										className: 'group',
										children: [
											group.title &&
												(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
													className: 'group-title',
													children: [
														(0, emotion_react_jsx_runtime_browser_esm.Y)('h4', { title: group.description, children: group.title }),
														showGroupReset &&
															(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
																className: 'reset',
																children: showGroupReset
																	? (0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
																			title: 'Reset',
																			onClick: () => {
																				group.controls.forEach((control) => {
																					control.shouldShowReset() && control.onReset(data);
																				});
																			},
																			children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Reset, {}),
																	  })
																	: null,
															}),
													],
												}),
											group.controls.map((control, index) =>
												(0, emotion_react_jsx_runtime_browser_esm.Y)(
													Control,
													{
														type: control.type,
														label: control.label,
														description: control.description,
														showReset: control.shouldShowReset(),
														onChange: (value) => control.onValueChange(value, data),
														onReset: () => control.onReset(data),
														display: control.getDisplayState ? control.getDisplayState(data) : 'visible',
														value: control.getValue(data),
														options: control.getOptions ? control.getOptions(data) : [],
													},
													index
												)
											),
										],
									},
									group.title
								);
							}),
						],
					});
				}),
				DropdownControl = (props) => {
					const { label, description, onReset, disabled, showReset, value, options, onChange } = props;
					return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
						className: 'option dropdown',
						children: [
							(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { children: label }),
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								className: 'reset',
								children: showReset
									? (0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
											title: 'Reset',
											onClick: () => {
												onReset();
											},
											children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Reset, {}),
									  })
									: null,
							}),
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								className: 'value',
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)('select', {
										onChange: (e) => onChange(e.target.value),
										disabled,
										value,
										children: options.map((option, index) =>
											(0, emotion_react_jsx_runtime_browser_esm.Y)('option', { value: option, children: option }, index)
										),
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { children: description }),
								],
							}),
						],
					});
				},
				TemplatesEditor_CSS_TemplatesEditor = ({}) =>
					(0, emotion_react_browser_esm.AH)({
						display: 'flex',
						flexDirection: 'column',
						minWidth: '400px',
						overflow: 'hidden',
						fontSize: '14px',
						position: 'fixed',
						zIndex: '10003',
						cursor: 'auto',
						top: '10px',
						right: 0,
						color: '#333',
						borderRight: 0,
						borderTopLeftRadius: '5px',
						borderBottomLeftRadius: '5px',
						boxShadow: 'rgba(81, 81, 81, 0.5) -1px 0px 3px 0px',
						border: '1px solid #D0E0F3',
						background: '#F2F6FC',
						transition: 'right ease 0.2s, height ease 0.3s 0.3s, max-height ease 0.3s 0.3s',
						boxSizing: 'border-box',
						width: '400px',
						maxWidth: '90vw',
						maxHeight: 'calc(100vh - 20px)',
						'*': { boxSizing: 'border-box' },
						'.ss__template-editor__header': {
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '8px 8px 4px 8px',
							'.athos-logo': { maxWidth: '100%', width: '200px', '.cls-1': { fill: '#00aeef' }, '.cls-2': { fill: '#1d4990' } },
							'.header-actions': { display: 'flex', gap: '10px', '& button': { width: 'unset' } },
						},
						'>aside': {
							overflow: 'hidden',
							flexGrow: 1,
							display: 'flex',
							flexDirection: 'column',
							'.tab-selection': {
								display: 'flex',
								alignItems: 'center',
								padding: '0 5px',
								gap: '4px',
								height: '33px',
								flexShrink: 0,
								'.tab': {
									fontSize: '12px',
									position: 'relative',
									boxShadow: 'rgb(110 110 110 / 50%) 0px -1px 2px -1px',
									textTransform: 'capitalize',
									top: '6px',
									fontWeight: 'bold',
									border: '1px solid #D0E0F3',
									borderBottom: 'none',
									padding: '5px 10px 4px 10px',
									height: '100%',
									color: '#9eaab8',
									backgroundColor: '#dce3eb',
									borderTopLeftRadius: '5px',
									borderTopRightRadius: '5px',
									cursor: 'pointer',
									transition: 'font-size 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
									'&:hover': { backgroundColor: '#d2deed', color: '#7a838e' },
									'&.active': { fontSize: '14px', backgroundColor: '#fff', color: '#283E57', paddingTop: '7px', top: '2px', zIndex: 4 },
								},
							},
							'.tab-view': {
								position: 'relative',
								zIndex: 3,
								borderTop: '2px solid #D0E0F3',
								background: '#fff',
								flexGrow: 1,
								display: 'flex',
								flexDirection: 'column',
								minHeight: 0,
								'.tab-view-shadow': {
									position: 'absolute',
									top: 0,
									left: 0,
									right: '10px',
									bottom: 0,
									boxShadow: 'inset 5px 12px 6px 0px #fff',
									pointerEvents: 'none',
									'&.bottom': { boxShadow: 'inset 0 -12px 6px 0px #fff' },
								},
								'.tab-view-content': {
									padding: '0 10px 10px',
									flexGrow: 1,
									overflowY: 'auto',
									minHeight: 0,
									'&::-webkit-scrollbar': { width: '8px' },
									'&::-webkit-scrollbar-track': { background: '#f5f5f5' },
									'&::-webkit-scrollbar-thumb': { background: '#96aabe' },
								},
							},
						},
						'&.ss__template-editor--collapsed': {
							right: '-354px',
							transition: 'right ease 0.5s, height ease 0.3s 0.3s, max-height ease 0.3s 0.3s',
							height: '48px',
							maxHeight: '48px',
							cursor: 'pointer',
							overflow: 'hidden',
						},
						'input, select, option, optgroup, button, h1, h2, h3, h4, h5, h6, i': { all: 'revert', color: '#283E57' },
						h1: { fontSize: '20px' },
						h2: { fontSize: '18px' },
						h3: { fontSize: '16px' },
						h4: { fontSize: '14px' },
						h5: { fontSize: '12px' },
						h6: { fontSize: '10px' },
						'input[type="text"], input[type="number"], select, button': {
							border: '1px solid #ccc',
							height: '30px',
							minHeight: '30px',
							padding: '0 10px',
							borderRadius: '5px',
							fontSize: '12px',
							color: '#333',
							backgroundColor: '#fff',
							boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
							width: '100%',
							'&:hover': { color: 'unset', background: 'unset' },
							'&:disabled': { borderColor: '#ddd', boxShadow: 'none', opacity: 1, color: '#999', cursor: 'default' },
						},
						'input[type="checkbox"]': { height: '18px', width: '18px', margin: '6px 0', border: '1px solid #ccc' },
						button: {
							border: 0,
							outline: 0,
							cursor: 'pointer',
							borderRadius: '4px',
							color: '#fff',
							backgroundColor: '#283e57',
							'&:hover': { color: '#fff', backgroundColor: '#0e1f33ff' },
						},
						'input[type="number"]': { width: '50px' },
						'input[type="color"]': {
							width: '70px',
							height: '30px',
							border: '1px solid #ccc',
							borderRadius: '5px',
							outline: 'none',
							boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
							padding: 0,
							margin: '0 5px 0 0',
							'&::-moz-color-swatch': { border: 'none' },
							'&::-webkit-color-swatch-wrapper': { padding: 0, borderRadius: 0 },
							'&::-webkit-color-swatch': { border: 'none' },
						},
						textarea: { width: '100%', height: '200px', border: '1px solid #ccc', color: '#777', padding: '10px' },
						'.reset': {
							flex: '0 0 30px',
							display: 'flex',
							justifyContent: 'flex-end',
							button: {
								'&:hover': { background: 'unset' },
								margin: '0 0.5em',
								padding: 0,
								background: 'unset',
								border: 'unset',
								cursor: 'pointer',
								boxShadow: 'unset',
								height: 'unset',
								svg: { fill: '#1c71bf', height: '15px' },
							},
						},
						'.control-title': { display: 'flex', alignItems: 'center', margin: '5px 0', height: '30px', h4: { margin: 0 } },
						'.group-title': { display: 'flex', alignItems: 'center', margin: '5px 0', height: '30px', h4: { margin: 0 } },
						'.option': {
							display: 'flex',
							alignItems: 'center',
							marginBottom: '5px',
							fontSize: '12px',
							label: { flex: '0 0 12em' },
							'.value': {
								flex: '1 1 auto',
								display: 'flex',
								alignItems: 'center',
								'.invalid': { border: '1px solid #cc0000', outline: '1px solid #cc0000' },
							},
							'&.color-picker': { alignItems: 'center', '.value': { alignItems: 'center' } },
						},
					}),
				TemplatesEditor = (0, es.PA)((properties) => {
					const { onRemoveClick, templatesStore, editorStore, snap } = properties,
						styling = { css: [TemplatesEditor_CSS_TemplatesEditor({ ...properties })] };
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
						children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
							className: classnames_default()('ss__template-editor', { 'ss__template-editor--collapsed': editorStore.state.hidden }),
							...styling,
							onClick: (e) => {
								e.stopPropagation(), editorStore.toggleHide(!1);
							},
							children: [
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'ss__template-editor__header',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'logo',
											children: (0, emotion_react_jsx_runtime_browser_esm.Y)(AthosCommerceLogo, {}),
										}),
										(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
											className: 'header-actions',
											onClick: (e) => {
												e.preventDefault(), e.stopPropagation(), editorStore.toggleHide(!0);
											},
											children: [
												(0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
													onClick: (e) => {
														e.stopPropagation(), confirm('Closing the editor will disable modification.') && onRemoveClick();
													},
													children: 'Close',
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
													onClick: () => {
														editorStore.toggleHide(!0);
													},
													children: 'Hide',
												}),
											],
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.FD)('aside', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'tab-selection',
											children: editorStore.tabs.map((tab, i) =>
												(0, emotion_react_jsx_runtime_browser_esm.Y)(
													'div',
													{
														className: classnames_default()('tab', { active: editorStore.state.activeTab === tab }),
														onClick: () => {
															editorStore.switchTabs(tab);
														},
														children: tab,
													},
													i
												)
											),
										}),
										(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
											className: 'tab-view',
											children: [
												(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'tab-view-shadow' }),
												(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
													className: 'tab-view-content',
													children: [
														'templates' === editorStore.state.activeTab
															? (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
																	children: [
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(TemplateTargetSettings, { feature: 'search', templatesStore }),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(AbstractedControls, {
																			editorStore,
																			data: snap.controllers.search,
																			feature: 'controllers/search',
																		}),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(TemplateTargetSettings, { feature: 'autocomplete', templatesStore }),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(AbstractedControls, {
																			editorStore,
																			data: snap.controllers.autocomplete,
																			feature: 'controllers/autocomplete',
																		}),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(TemplateTargetSettings, {
																			feature: 'recommendation/default',
																			templatesStore,
																		}),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(TemplateTargetSettings, {
																			feature: 'recommendation/bundle',
																			templatesStore,
																		}),
																	],
															  })
															: '',
														'configuration' === editorStore.state.activeTab
															? (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
																	children: [
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(AbstractedControls, {
																			title: 'Project Configuration',
																			editorStore,
																			feature: 'templates/config',
																		}),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(AbstractedControls, {
																			title: 'Theme Configuration',
																			editorStore,
																			feature: 'templates/theme',
																		}),
																	],
															  })
															: '',
													],
												}),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'tab-view-shadow bottom' }),
											],
										}),
									],
								}),
								(0, emotion_react_jsx_runtime_browser_esm.Y)('footer', {}),
							],
						}),
					});
				}),
				TemplateTargetSettings = (0, es.PA)((props) => {
					const { feature, templatesStore } = props,
						[type, recsType = ''] = feature.split('/'),
						idPrefix = `${type}${recsType ? `-${recsType}` : ''}`,
						config = templatesStore.config,
						configTarget = config[type]?.[recsType]?.[`${recsType.charAt(0).toUpperCase() + recsType.slice(1)}`] || config[type]?.targets?.[0],
						libraryComponents = templatesStore.library.components,
						libraryTemplates = recsType ? libraryComponents[type]?.[recsType] : libraryComponents[type],
						libraryResultComponents = libraryComponents?.result,
						activeTarget = templatesStore.getTarget(feature, configTarget.selector),
						showTemplateReset = Boolean(activeTarget?.component) && activeTarget?.component !== configTarget?.component,
						showResultTemplateReset = (activeTarget?.resultComponent || 'Result') != (configTarget?.resultComponent || 'Result');
					return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
						className: 'template-target-settings',
						children: [
							(0, emotion_react_jsx_runtime_browser_esm.Y)('h3', {
								children: type.charAt(0).toUpperCase() + type.slice(1) + (recsType ? ` (${recsType})` : ''),
							}),
							!recsType &&
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'option',
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('label', { htmlFor: `${idPrefix}-target`, children: 'Target' }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'reset' }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'value',
											children: (0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
												id: `${idPrefix}-target`,
												type: 'text',
												placeholder: '',
												disabled: !0,
												value: configTarget.selector,
											}),
										}),
									],
								}),
							(0, emotion_react_jsx_runtime_browser_esm.Y)(
								DropdownControl,
								{
									label: 'Template',
									description: '',
									showReset: showTemplateReset,
									options: Object.keys(libraryTemplates),
									onReset: () => activeTarget?.setComponent(configTarget?.component),
									disabled: !1,
									value: activeTarget?.component,
									onChange: (value) => activeTarget?.setComponent(`${value}`),
								},
								`${idPrefix}-template`
							),
							(0, emotion_react_jsx_runtime_browser_esm.Y)(
								DropdownControl,
								{
									label: 'Result Template',
									description: '',
									showReset: showResultTemplateReset,
									options: Object.keys(libraryResultComponents),
									onReset: () => activeTarget?.setResultComponent(configTarget?.resultComponent || 'Result'),
									disabled: !1,
									value: activeTarget?.resultComponent,
									onChange: (value) => activeTarget?.setResultComponent(`${value}`),
								},
								`${idPrefix}-result-template`
							),
						],
					});
				});
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
				types = __webpack_require__('./components/src/types.ts'),
				RecommendationProfileTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				ResultTracker = __webpack_require__('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
				useClickOutside = __webpack_require__('./components/src/hooks/useClickOutside.tsx');
			const useConstructor = (callBack = () => {}) => {
				const hasBeenCalled = (0, hooks_module.li)(!1);
				hasBeenCalled.current || (callBack(), (hasBeenCalled.current = !0));
			};
			var useMediaQuery = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				useIntersectionAdvanced = __webpack_require__('./components/src/hooks/useIntersectionAdvanced.tsx'),
				useDisplaySettings = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				useFuncDebounce = __webpack_require__('./components/src/hooks/useFuncDebounce.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useDeepCompareEffect = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx'),
				useCreateController = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				useComponent = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				createImpressionObserver = __webpack_require__('./components/src/utilities/createImpressionObserver.ts');
			function useTracking({ controller, result }) {
				controller || console.warn('Warning: No controller provided to useTracking'),
					result || console.warn('Warning: No result provided to useTracking');
				const { ref, inViewport } = (0, createImpressionObserver.Q)();
				return (
					(0, hooks_module.vJ)(() => {
						inViewport && 'product' === result.type && controller?.track.product.impression(result);
					}, [inViewport]),
					(0, hooks_module.vJ)(() => {
						const currentRef = ref.current;
						if (currentRef) {
							currentRef.setAttribute('sstracking', 'true');
							const handleClick = (e) => {
								controller?.track.product.click(e, result);
							};
							return (
								currentRef.addEventListener('click', handleClick),
								() => {
									currentRef.removeEventListener('click', handleClick);
								}
							);
						}
					}, [result]),
					{ trackingRef: ref }
				);
			}
			var controller = __webpack_require__('./components/src/providers/controller.tsx');
			const StoreContext = (0, __webpack_require__('../../node_modules/preact/dist/preact.module.js').q6)(null),
				StoreProvider = ({ children, store }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(StoreContext.Provider, { value: store, children }),
				useStore = () => (0, hooks_module.NT)(StoreContext);
			function withStore(Component) {
				return (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Component, { store: useStore(), ...props });
			}
			var emotion_element_5486c51c_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
			const defaultTheme = {
				variables: {
					breakpoints: { mobile: 540, tablet: 767, desktop: 1200 },
					colors: { text: '#222222', primary: '#3A23AD', secondary: '#4c3ce2', accent: '#00cee1' },
				},
			};
			var withTracking = __webpack_require__('./components/src/providers/withTracking.tsx'),
				snap = __webpack_require__('./components/src/providers/snap.tsx'),
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
