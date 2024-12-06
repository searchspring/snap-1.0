/*! For license information please see components-Molecules-ErrorHandler-ErrorHandler-stories.664a64e6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9753],
	{
		'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					CustomError: () => CustomError,
					Error: () => Error,
					Info: () => Info,
					Warning: () => Warning,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => ErrorHandler_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				types = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				ErrorHandler = __webpack_require__('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const ErrorHandler_stories = {
					title: 'Molecules/ErrorHandler',
					component: ErrorHandler.z,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# ErrorHandler\n\nRenders error messages.\n\n## Sub-components\n- Icon\n- Button\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to a Snap controller. This is the standard usage.\n\n```jsx\n<ErrorHandler controller={controller} />\n```\n\n### error\nThe `error` prop provides an alternative means of utilizing the component to display errors messages.\n\n```jsx\nimport { ErrorType } from '@searchspring/snap-store-mobx';\nconst errorObject = {\n\tcode: 500,\n\ttype: ErrorType.ERROR,\n\tmessage: 'Invalid Search Request or Service Unavailable',\n}\n\n<ErrorHandler error={errorObject} />\n```\n\n### onRetryClick\nWhen a request has been rate limited, a 'warning' error with code `429` will be generated. For this error the component will render a 'retry' button to try the request again. By default the retry button will run the provided controller's `search` method unless the `onRetryClick` prop is provided.\n\n```jsx\n<ErrorHandler controller={controller} onRetryClick={(e) => {\n    // do something\n    controller.search();\n}}/>\n```\n\n```jsx\nimport { ErrorType } from '@searchspring/snap-store-mobx';\nconst errorObject = {\n\tcode: 429,\n\ttype: ErrorType.WARNING,\n\tmessage: 'Too many requests try again later',\n}\n\n<ErrorHandler error={errorObject} onRetryClick={(e) => {\n    // do something\n}}/>\n```\n\n\n## ErrorHandle Types\n\n```typescript\nimport { ErrorType } from '@searchspring/snap-store-mobx';\n\nexport enum ErrorType {\n\tWARNING = 'warning',\n\tINFO = 'info',\n\tERROR = 'error',\n}\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px', height: '300px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: { description: 'Controller reference', table: { type: { summary: 'Controller object' } }, control: { type: 'none' } },
						error: {
							description: 'Error object containing message and type',
							table: { type: { summary: 'Error object' } },
							control: { type: 'object' },
						},
						onRetryClick: {
							description: 'Retry button click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onRetryClick',
						},
						...componentArgs.F,
					},
				},
				Warning = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler.z, { ...args });
			Warning.args = { controller: { store: { error: { code: 429, type: types.B.WARNING, message: 'Too many requests try again later' } } } };
			const Error = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler.z, { ...args });
			Error.args = { controller: { store: { error: { code: 500, type: types.B.ERROR, message: 'Invalid Search Request or Service Unavailable' } } } };
			const Info = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler.z, { ...args });
			Info.args = { controller: { store: { error: { code: 200, type: types.B.INFO, message: 'Something important happened' } } } };
			const CustomError = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler.z, { ...args });
			(CustomError.args = { error: { type: types.B.INFO, message: 'Custom error using info type' } }),
				(Warning.parameters = {
					...Warning.parameters,
					docs: {
						...Warning.parameters?.docs,
						source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...Warning.parameters?.docs?.source },
					},
				}),
				(Error.parameters = {
					...Error.parameters,
					docs: {
						...Error.parameters?.docs,
						source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...Error.parameters?.docs?.source },
					},
				}),
				(Info.parameters = {
					...Info.parameters,
					docs: {
						...Info.parameters?.docs,
						source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...Info.parameters?.docs?.source },
					},
				}),
				(CustomError.parameters = {
					...CustomError.parameters,
					docs: {
						...CustomError.parameters?.docs,
						source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...CustomError.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Warning', 'Error', 'Info', 'CustomError'];
		},
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({ native, color, backgroundColor, borderColor, theme }) => {
					const lightenedPrimary = new (color__WEBPACK_IMPORTED_MODULE_3___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								padding: '5px 10px',
								position: 'relative',
								color: color || theme?.variables?.colors?.primary,
								outline: 0,
								backgroundColor: backgroundColor || '#fff',
								border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
								'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: lightenedPrimary.hex() || '#f8f8f8' },
								'&.ss__button--disabled': { opacity: 0.3, backgroundColor: 'initial', '&:hover': { cursor: 'default' } },
								'.ss__button__content': { width: '100%' },
								label: { cursor: 'pointer' },
						  });
				},
				Button = (0, mobx_react__WEBPACK_IMPORTED_MODULE_5__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('button', globalTheme, { disableA11y: !1 }, properties),
						{
							content,
							children,
							disabled,
							native,
							onClick,
							disableA11y,
							disableStyles,
							className,
							icon,
							lang,
							treePath,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							...additionalProps
						} = props,
						subProps_icon = {
							className: 'ss__button__icon',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						elementProps = {
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__button',
								{ 'ss__button--native': native, 'ss__button--disabled': disabled },
								className
							),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__.i)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_providers__WEBPACK_IMPORTED_MODULE_13__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('span', {
													className: 'ss__button__content',
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('span', {
													className: 'ss__button__content',
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a: () => A11Y_ATTRIBUTE, i: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y';
			function useA11y(elem, tabIndex, trapFocus, escCallback) {
				if (!document.querySelector('#ssA11yFocusStyle')) {
					const style = document.createElement('style');
					(style.type = 'text/css'),
						(style.id = 'ssA11yFocusStyle'),
						(style.innerHTML = `[${A11Y_ATTRIBUTE}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
						document.getElementsByTagName('head')[0].appendChild(style);
				}
				elem &&
					!elem.attributes?.[A11Y_ATTRIBUTE] &&
					(elem.setAttribute(A11Y_ATTRIBUTE, !0),
					elem.setAttribute('tabIndex', `${tabIndex || 0}`),
					elem.addEventListener('keydown', (event) => {
						('Space' !== event.code && 'Enter' !== event.code) || elem.click();
					}),
					trapFocus &&
						elem.addEventListener('keydown', function (e) {
							const focusableEls = elem.querySelectorAll(
									'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]'
								),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(), void e.preventDefault();
							('Tab' !== e.key && e.keyCode !== KEYCODE_TAB) ||
								(e.shiftKey
									? document.activeElement === firstFocusableEl && (lastFocusableEl.focus(), e.preventDefault())
									: document.activeElement === lastFocusableEl && (firstFocusableEl.focus(), e.preventDefault()));
						}));
			}
		},
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'](data))
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
		'./components/src/utilities/Colour/Colour.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/utilities/componentArgs.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { F: () => componentArgs });
			const componentArgs = {
				className: {
					description: 'Class name appended to root element of component',
					table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
					control: { type: 'text' },
				},
				disableStyles: {
					defaultValue: !1,
					description: 'Disable all default styling',
					table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
					control: { type: 'boolean' },
				},
				style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
				theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
			};
		},
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/utilities/storybook.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => highlightedCode });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const highlightedCode = (props) => {
				const elemRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						elemRef.current &&
							props.className?.includes('lang-') &&
							!props.className?.includes('prism-block') &&
							window?.Prism?.highlightElement(elemRef.current);
					}, [props.className, props.children, elemRef]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)('code', { ...props, ref: elemRef, 'data-prismjs-copy': 'Copy' })
				);
			};
		},
		'../../node_modules/classnames/index.js': (module, exports) => {
			var __WEBPACK_AMD_DEFINE_RESULT__;
			!(function () {
				'use strict';
				var hasOwn = {}.hasOwnProperty;
				function classNames() {
					for (var classes = '', i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						arg && (classes = appendClass(classes, parseValue(arg)));
					}
					return classes;
				}
				function parseValue(arg) {
					if ('string' == typeof arg || 'number' == typeof arg) return arg;
					if ('object' != typeof arg) return '';
					if (Array.isArray(arg)) return classNames.apply(null, arg);
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) return arg.toString();
					var classes = '';
					for (var key in arg) hasOwn.call(arg, key) && arg[key] && (classes = appendClass(classes, key));
					return classes;
				}
				function appendClass(value, newClass) {
					return newClass ? (value ? value + ' ' + newClass : value + newClass) : value;
				}
				module.exports
					? ((classNames.default = classNames), (module.exports = classNames))
					: void 0 ===
							(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
								return classNames;
							}.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
			})();
		},
		'../../node_modules/memoizerific sync recursive': (module) => {
			function webpackEmptyContext(req) {
				var e = new Error("Cannot find module '" + req + "'");
				throw ((e.code = 'MODULE_NOT_FOUND'), e);
			}
			(webpackEmptyContext.keys = () => []),
				(webpackEmptyContext.resolve = webpackEmptyContext),
				(webpackEmptyContext.id = '../../node_modules/memoizerific sync recursive'),
				(module.exports = webpackEmptyContext);
		},
	},
]);
