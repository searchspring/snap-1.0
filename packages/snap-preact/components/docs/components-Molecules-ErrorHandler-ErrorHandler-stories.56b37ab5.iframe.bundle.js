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
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				Button = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				lightenDarkenColor = __webpack_require__('./components/src/utilities/lightenDarkenColor.ts'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const CSS_errorHandler = ({ theme }) =>
					(0, emotion_react_browser_esm.AH)({
						borderRadius: '2px',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderLeft: '4px solid',
						'.ss__error-handler__message': { padding: '10px', display: 'flex', alignItems: 'center', '.ss__icon': { marginRight: '5px' } },
						'& .ss__error-handler__button': {
							backgroundColor: 'white',
							color: 'inherit',
							borderColor: theme?.variables?.colors?.primary,
							width: ['150px', 'fit-content'],
							margin: '5px 10px',
							'.ss__icon': { marginRight: '5px' },
						},
						'&.ss__error-handler--error': {
							backgroundColor: (0, lightenDarkenColor.S)('#cc1212', 180),
							borderLeftColor: '#cc1212',
							'.ss__error-handler__message': { '.ss__icon': { fill: '#cc1212' } },
						},
						'&.ss__error-handler--warning': {
							backgroundColor: (0, lightenDarkenColor.S)('#ecaa15', 180),
							borderLeftColor: '#ecaa15',
							'.ss__icon': { fill: '#ecaa15' },
							'.ss__error-handler__button': { borderColor: '#ecaa15' },
						},
						'&.ss__error-handler--info': {
							backgroundColor: (0, lightenDarkenColor.S)('#4c3ce2', 180),
							borderLeftColor: '#4c3ce2',
							'.ss__error-handler__message': { '.ss__icon': { fill: '#4c3ce2' } },
						},
					}),
				ErrorHandler = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						props = (0, mergeProps.v6)('errorHandler', globalTheme, {}, properties),
						{ controller, error, disableStyles, style, styleScript, onRetryClick, className, treePath } = props,
						subProps_icon = {
							className: 'ss__error-handler__icon',
							...globalTheme?.components?.icon,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_button = {
							className: 'ss__error-handler__button',
							...globalTheme?.components?.button,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						errorObject = controller?.store?.error || error,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_errorHandler(stylingProps), style]);
					const defaultLang = {
							warningText: { value: '<b>Warning:&nbsp;</b>' },
							infoText: { value: '<b>Info:&nbsp;</b>' },
							errorText: { value: '<b>Error:&nbsp;</b>' },
							reloadText: { value: 'Reload' },
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { controller });
					return Object.values(types.B).includes(errorObject?.type) && errorObject?.message
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: classnames_default()('ss__error-handler', `ss__error-handler--${errorObject.type}`, className),
									...styling,
									children: (() => {
										switch (errorObject.type) {
											case types.B.WARNING:
												return (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
													children: [
														(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
															className: 'ss__error-handler__message',
															children: [
																(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon, icon: 'warn' }),
																(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.warningText?.all }),
																errorObject.message,
															],
														}),
														429 == errorObject?.code
															? (0, emotion_react_jsx_runtime_browser_esm.FD)(Button.$, {
																	...subProps_button,
																	onClick: (e) => {
																		onRetryClick ? onRetryClick(e) : controller?.search();
																	},
																	...mergedLang.reloadText.attributes,
																	children: [
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon, icon: 'rotate-right' }),
																		(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.reloadText.value }),
																	],
															  })
															: null,
													],
												});
											case types.B.ERROR:
												return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
													className: 'ss__error-handler__message',
													children: [
														(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon, icon: 'error' }),
														(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.errorText?.all }),
														errorObject.message,
													],
												});
											case types.B.INFO:
												return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
													className: 'ss__error-handler__message',
													children: [
														(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon, icon: 'info' }),
														(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.infoText?.all }),
														errorObject.message,
													],
												});
										}
									})(),
								}),
						  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				});
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const ErrorHandler_stories = {
					title: 'Molecules/ErrorHandler',
					component: ErrorHandler,
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
				Warning = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler, { ...args });
			Warning.args = { controller: { store: { error: { code: 429, type: types.B.WARNING, message: 'Too many requests try again later' } } } };
			const Error = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler, { ...args });
			Error.args = { controller: { store: { error: { code: 500, type: types.B.ERROR, message: 'Invalid Search Request or Service Unavailable' } } } };
			const Info = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler, { ...args });
			Info.args = { controller: { store: { error: { code: 200, type: types.B.INFO, message: 'Something important happened' } } } };
			const CustomError = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ErrorHandler, { ...args });
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_button = ({ color, backgroundColor, borderColor, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'inline-flex',
						padding: '5px 10px',
						position: 'relative',
						color: color || theme?.variables?.colors?.primary,
						outline: 0,
						backgroundColor: backgroundColor || '#fff',
						border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
						'&:hover': { cursor: 'pointer', backgroundColor: theme?.variables?.colors?.hover?.background || '#f8f8f8' },
						'&.ss__button--disabled': {
							opacity: 0.7,
							borderColor: 'rgba(51,51,51,0.7)',
							backgroundColor: 'initial',
							'&:hover': { cursor: 'default' },
						},
					}),
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Button = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('button', globalTheme, { disableA11y: !1 }, properties),
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
							style,
							styleScript,
							lang,
							treePath,
							...additionalProps
						} = props,
						subProps_icon = {
							...globalTheme?.components?.icon,
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
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_button(stylingProps), style]);
					const elementProps = {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__button', { 'ss__button--disabled': disabled }, className),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_8__.i)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { i: () => useA11y });
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
		'./components/src/providers/cache.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => CacheProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const emotionCache = (0, __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js').A)({
					key: 'ss',
					prepend: !0,
				}),
				CacheProvider = (props) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.C, {
						value: props.cache || emotionCache,
						children: props.children,
					});
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
		'../snap-store-mobx/dist/esm/types.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ErrorType;
			__webpack_require__.d(__webpack_exports__, { B: () => ErrorType }),
				(function (ErrorType) {
					(ErrorType.WARNING = 'warning'), (ErrorType.INFO = 'info'), (ErrorType.ERROR = 'error');
				})(ErrorType || (ErrorType = {}));
		},
		'../../node_modules/deepmerge/dist/cjs.js': (module) => {
			'use strict';
			var isMergeableObject = function isMergeableObject(value) {
				return (
					(function isNonNullObject(value) {
						return !!value && 'object' == typeof value;
					})(value) &&
					!(function isSpecial(value) {
						var stringValue = Object.prototype.toString.call(value);
						return (
							'[object RegExp]' === stringValue ||
							'[object Date]' === stringValue ||
							(function isReactElement(value) {
								return value.$$typeof === REACT_ELEMENT_TYPE;
							})(value)
						);
					})(value)
				);
			};
			var REACT_ELEMENT_TYPE = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
			function cloneUnlessOtherwiseSpecified(value, options) {
				return !1 !== options.clone && options.isMergeableObject(value)
					? deepmerge(
							(function emptyTarget(val) {
								return Array.isArray(val) ? [] : {};
							})(value),
							value,
							options
					  )
					: value;
			}
			function defaultArrayMerge(target, source, options) {
				return target.concat(source).map(function (element) {
					return cloneUnlessOtherwiseSpecified(element, options);
				});
			}
			function getKeys(target) {
				return Object.keys(target).concat(
					(function getEnumerableOwnPropertySymbols(target) {
						return Object.getOwnPropertySymbols
							? Object.getOwnPropertySymbols(target).filter(function (symbol) {
									return Object.propertyIsEnumerable.call(target, symbol);
							  })
							: [];
					})(target)
				);
			}
			function propertyIsOnObject(object, property) {
				try {
					return property in object;
				} catch (_) {
					return !1;
				}
			}
			function mergeObject(target, source, options) {
				var destination = {};
				return (
					options.isMergeableObject(target) &&
						getKeys(target).forEach(function (key) {
							destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
						}),
					getKeys(source).forEach(function (key) {
						(function propertyIsUnsafe(target, key) {
							return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
						})(target, key) ||
							(propertyIsOnObject(target, key) && options.isMergeableObject(source[key])
								? (destination[key] = (function getMergeFunction(key, options) {
										if (!options.customMerge) return deepmerge;
										var customMerge = options.customMerge(key);
										return 'function' == typeof customMerge ? customMerge : deepmerge;
								  })(key, options)(target[key], source[key], options))
								: (destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)));
					}),
					destination
				);
			}
			function deepmerge(target, source, options) {
				((options = options || {}).arrayMerge = options.arrayMerge || defaultArrayMerge),
					(options.isMergeableObject = options.isMergeableObject || isMergeableObject),
					(options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
				var sourceIsArray = Array.isArray(source);
				return sourceIsArray === Array.isArray(target)
					? sourceIsArray
						? options.arrayMerge(target, source, options)
						: mergeObject(target, source, options)
					: cloneUnlessOtherwiseSpecified(source, options);
			}
			deepmerge.all = function deepmergeAll(array, options) {
				if (!Array.isArray(array)) throw new Error('first argument should be an array');
				return array.reduce(function (prev, next) {
					return deepmerge(prev, next, options);
				}, {});
			};
			var deepmerge_1 = deepmerge;
			module.exports = deepmerge_1;
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
