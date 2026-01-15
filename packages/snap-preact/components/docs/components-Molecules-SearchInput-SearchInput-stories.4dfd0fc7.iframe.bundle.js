(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[2407],
	{
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
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = ({ native, color, backgroundColor, borderColor, theme }) => {
					const lightenedPrimaryColorObj = new (color__WEBPACK_IMPORTED_MODULE_4___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								gap: '5px',
								padding: '5px 10px',
								position: 'relative',
								color: color || theme?.variables?.colors?.primary,
								outline: 0,
								backgroundColor: backgroundColor || '#fff',
								border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
								'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: lightenedPrimaryColorObj.hex() || '#f8f8f8' },
								'&.ss__button--disabled': { opacity: 0.3, backgroundColor: 'initial', '&:hover': { cursor: 'default' } },
								'.ss__button__content': { width: '100%' },
								label: { cursor: 'pointer' },
						  });
				},
				Button = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('button', globalTheme, defaultProps, properties),
						{
							content,
							children,
							disabled,
							native,
							onClick,
							disableA11y,
							disableStyles,
							className,
							internalClassName,
							icon,
							lang,
							treePath,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							...additionalProps
						} = props,
						subProps_icon = {
							internalClassName: 'ss__button__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						elementProps = {
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__button',
								{ 'ss__button--native': native, 'ss__button--disabled': disabled },
								className,
								internalClassName
							),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.iy)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
													className: 'ss__button__content',
													...mergedLang.button?.all,
													children: [
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
													],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											role: 'button',
											'aria-disabled': disabled,
											...elementProps,
											...mergedLang.button?.attributes,
											children: [
												content || children || mergedLang.button?.value
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__button__content',
															...mergedLang.button?.value,
															children: [
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
															],
													  })
													: void 0,
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => SearchInput_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				SearchInput = __webpack_require__('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const SearchInput_stories = {
					title: 'Molecules/SearchInput',
					component: SearchInput.D,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# SearchInput\n\nRenders an input element\n\n## Sub-components\n- Button\n\n## Usage\n```jsx\nimport { SearchInput } from '@searchspring/snap-preact-components';\n```\n```jsx\n<SearchInput onChange={handleChange} placeholderText={\"placeholder text\"}/>\n```\n\n### value\nThe `value` prop sets the input value if externally managed.\n\n```jsx\n<SearchInput value={'dress'} placeholderText={\"placeholder text\"} />\n```\n\n### placeholderText\nThe `placeholderText` prop sets the input placeholder text. \n\n```jsx\n<SearchInput placeholderText={\"placeholder text\"} />\n```\n\n### inputName\nThe `inputName` prop sets the input name attribute value. \n\n```jsx\n<SearchInput inputName={\"query\"} />\n```\n\n### onChange\nThe `onChange` prop is invoked when the input's value has been changed. \n\n```jsx\n<SearchInput onChange={handleChange} />\n```\n\n### onKeyUp\nThe `onKeyUp` prop is invoked on keyUp on the input. \n\n```jsx\n<SearchInput onKeyUp={handleChange} />\n```\n\n### onKeyDown\nThe `onKeyDown` prop is invoked keyDown on the input\n\n```jsx\n<SearchInput onKeyDown={handleChange} />\n```\n\n### onClick\nThe `onClick` prop is invoked on click of anything in the component. Wrapper, input or icon. \n\n```jsx\n<SearchInput onClick={handleChange} />\n```\n\n### submitSearchButton\nThe `submitSearchButton` prop specifies props to pass to the submit search button component. Takes any `Button` component props. \n\n```jsx\n\nconst buttonProps = {\n    icon: 'search',\n    onClick: () => func\n};\n\n<SearchInput submitSearchButton={buttonProps} />\n```\n\n### clearSearchButton\nThe `clearSearchButton` prop specifies props to pass to the clear search button component. Takes any `Button` component props. Note this button only renders if there is a value to clear. \n\n```jsx\n\nconst buttonProps = {\n    icon: 'close-thin',\n    onClick: () => func\n};\n\n<SearchInput clearSearchButton={buttonProps} />\n```\n\n### closeSearchButton\nThe `closeSearchButton` prop specifies props to pass to the close search button component. Takes any `Button` component props. \n\n```jsx\n\nconst buttonProps = {\n    icon: 'angle-left',\n    onClick: () => func\n};\n\n<SearchInput closeSearchButton={buttonProps} />\n```\n\n### inputRef\nThe `inputRef` prop specifies a ref to set on the input element. To be accessed in a parent component.\n\n```jsx\nconst renderedInputRef = useRef(null);\nuseEffect(() => {\n    console.log(renderedInputRef)\n},[])\n\n<SearchInput inputRef={renderedInputRef} />\n```\n",
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
						value: {
							defaultValue: '',
							type: { required: !0 },
							description: 'sets the value for the input',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						onChange: { description: 'OnChange Callback', table: { type: { summary: 'function' } }, control: { type: 'none' }, action: 'onChange' },
						onKeyUp: { description: 'OnKeyUp Callback', table: { type: { summary: 'function' } }, control: { type: 'none' }, action: 'onKeyUp' },
						onKeyDown: {
							description: 'OnKeyDown Callback',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onKeyDown',
						},
						onClick: { description: 'OnClick Callback', table: { type: { summary: 'function' } }, control: { type: 'none' }, action: 'onClick' },
						submitSearchButton: {
							description: 'Button component props for submit search button',
							table: { type: { summary: "{ icon: 'search' }" } },
							control: { type: 'object' },
						},
						clearSearchButton: {
							description: 'Button component props for clear search button',
							table: { type: { summary: "{ icon: 'close-thin' }" } },
							control: { type: 'object' },
						},
						closeSearchButton: {
							description: 'Button component props for close search button',
							table: { type: { summary: '{}' } },
							control: { type: 'object' },
						},
						placeholderText: {
							defaultValue: 'Search',
							description: 'Display placeholder text',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Search' } },
							control: { type: 'text' },
						},
						inputName: { description: 'sets the name attribute for the input', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						disabled: {
							description: 'boolean to set disabled attribute',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(SearchInput.D, { ...args });
			(Default.args = { submitSearchButton: { icon: 'search' }, clearSearchButton: { icon: 'close-thin' } }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...Default.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/SearchInput/SearchInput.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { D: () => SearchInput });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks_useLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						border: `1px solid ${theme?.variables?.colors?.primary || '#ccc'}`,
						'& .ss__icon': { padding: '5px' },
						'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
						'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
						'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
					}),
				SearchInput = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							placeholderText: 'Search',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
							submitSearchButton: { icon: 'search' },
							clearSearchButton: { icon: 'close-thin' },
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('searchInput', globalTheme, defaultProps, properties);
					(props.submitSearchButton = { ...defaultProps.submitSearchButton, ...props.submitSearchButton, ...properties?.submitSearchButton }),
						(props.clearSearchButton = { ...defaultProps.clearSearchButton, ...props.clearSearchButton, ...properties?.clearSearchButton }),
						(props.closeSearchButton = { ...defaultProps.closeSearchButton, ...props.closeSearchButton, ...properties?.closeSearchButton });
					const {
						placeholderText,
						value,
						submitSearchButton,
						closeSearchButton,
						clearSearchButton,
						inputRef,
						inputName,
						onChange,
						onClick,
						onKeyDown,
						onKeyUp,
						disabled,
						disableStyles,
						className,
						internalClassName,
						treePath,
					} = props;
					let inputValue, setInputValue;
					void 0 === value ? ([inputValue, setInputValue] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)('')) : (inputValue = value);
					const subProps_submitSearchButton = {
							...submitSearchButton,
							internalClassName: 'ss__search-input__button--submit-search-button',
							name: 'submit-search',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_clearSearchButton = {
							...clearSearchButton,
							internalClassName: 'ss__search-input__button--clear-search-button',
							name: 'clear-search',
							onClick: () => {
								inputRef?.current && (((inputRef?.current).value = ''), (inputRef?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
									setInputValue && setInputValue(''),
									clearSearchButton?.onClick && clearSearchButton.onClick();
							},
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_closeSearchButton = {
							...closeSearchButton,
							internalClassName: 'ss__search-input__button--close-search-button',
							name: 'close-search',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = {
							placeholderText: { attributes: { placeholder: placeholderText } },
							closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
							clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
							submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks_useLang__WEBPACK_IMPORTED_MODULE_10__.u)(lang, {});
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__search-input',
								{ 'ss__input--disabled': disabled },
								className,
								internalClassName
							),
							onClick: (e) => !disabled && onClick && onClick(e),
							children: [
								closeSearchButton &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
										...subProps_closeSearchButton,
										...mergedLang.closeSearchButton.all,
									}),
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
									type: 'text',
									className: 'ss__search-input__input',
									...mergedLang.placeholderText.attributes,
									value: inputValue,
									name: inputName,
									ref: inputRef,
									onKeyDown: (e) => onKeyDown && onKeyDown(e),
									onKeyUp: (e) => onKeyUp && onKeyUp(e),
									onChange: (e) => {
										setInputValue && setInputValue(e.target.value || ''), onChange && onChange(e);
									},
									disabled,
								}),
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: 'ss__search-input__icons',
									children: [
										clearSearchButton && inputValue?.length
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
													...subProps_clearSearchButton,
													...mergedLang.clearSearchButton.all,
											  })
											: null,
										submitSearchButton &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
												...subProps_submitSearchButton,
												...mergedLang.submitSearchButton.all,
											}),
									],
								}),
							],
						}),
					});
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { DH: () => FOCUSABLE_ELEMENTS, aZ: () => A11Y_ATTRIBUTE, iy: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y',
				FOCUSABLE_ELEMENTS =
					'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
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
							const focusableEls = elem.querySelectorAll(FOCUSABLE_ELEMENTS),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(e), e.preventDefault(), void e.stopPropagation();
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
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt)),
								currentLangSettings?.attributes?.placeholder &&
									('function' == typeof currentLangSettings.attributes?.placeholder
										? (currentObj.attributes.placeholder = currentLangSettings.attributes.placeholder(data))
										: (currentObj.attributes.placeholder = currentLangSettings.attributes.placeholder))),
							(currentObj.all = { ...currentObj.value, ...currentObj.attributes, 'ss-lang': key })),
							(returnObj[key] = currentObj);
					}),
					returnObj
				);
			};
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
	},
]);
