'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[5919],
	{
		'./components/src/components/Molecules/Radio/Radio.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { s: () => Radio });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({ size, native }) =>
					native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: size,
								width: size,
								cursor: 'pointer',
								'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
						  }),
				Radio = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							size: '20px',
							startChecked: !1,
							disableA11y: !1,
							checkedIcon: 'bullet',
							unCheckedIcon: 'bullet-o',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('radio', globalTheme, defaultProps, properties),
						{
							checked,
							color,
							disabled,
							checkedIcon,
							unCheckedIcon,
							onClick,
							startChecked,
							native,
							disableA11y,
							disableStyles,
							className,
							internalClassName,
							size,
							treePath,
							lang,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							name: ____,
							...additionalProps
						} = props,
						subProps_activeIcon = {
							name: 'active',
							internalClassName: 'ss__radio__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ size, color, disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_inactiveIcon = {
							name: 'inactive',
							internalClassName: 'ss__radio__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ size, color, disableStyles }),
							theme: props.theme,
							treePath,
						};
					let checkedState, setCheckedState;
					const stateful = void 0 === checked;
					stateful ? ([checkedState, setCheckedState] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startChecked)) : (checkedState = checked);
					const clickFunc = (e) => {
							disabled || (stateful && setCheckedState && setCheckedState((prev) => !prev), onClick && onClick(e));
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						_lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({ radio: {} }, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(_lang, { disabled, checkedState });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__radio',
										'ss__radio--native',
										{ 'ss__radio--disabled': disabled },
										className,
										internalClassName
									),
									...styling,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__radio__input'),
										'aria-checked': checkedState,
										type: 'radio',
										onClick: (e) => clickFunc(e),
										disabled,
										checked: checkedState,
										tabIndex: disableA11y ? -1 : 0,
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__radio',
										{ 'ss__radio--disabled': disabled, 'ss__radio--active': checkedState },
										className,
										internalClassName
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
									...mergedLang.radio?.all,
									role: 'radio',
									'aria-checked': checkedState,
									'aria-disabled': disabled,
									...additionalProps,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_activeIcon,
												...('string' == typeof checkedIcon ? { icon: checkedIcon } : checkedIcon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_inactiveIcon,
												...('string' == typeof unCheckedIcon ? { icon: unCheckedIcon } : unCheckedIcon),
										  }),
							  }),
					});
				});
		},
		'./components/src/components/Molecules/RadioList/RadioList.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Icons: () => Icons,
					Native: () => Native,
					PerPage: () => PerPage,
					SortBy: () => SortBy,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => RadioList_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				RadioList = __webpack_require__('./components/src/components/Molecules/RadioList/RadioList.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			var snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const RadioList_stories = {
					title: 'Molecules/RadioList',
					component: RadioList.q,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# RadioList\n\nRenders a list of options with radio inputs.\n\n## Sub-components\n- Radio\n\n## Usage\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<RadioList options={store.options} />\n```\n\n### native\nThe `native` prop will use native html `<input type='radio'>` elements.\n\n```jsx\n<RadioList options={store.options} native={true} />\n```\n\n### hideRadios\nThe `hideRadios` prop will disable the option radio elements from rendering.\n\n```jsx\n<RadioList options={store.options} hideRadios={true} />\n```\n\n### hideLabels\nThe `hideLabels` prop will disable the option label elements from rendering.\n\n```jsx\n<RadioList options={store.options} hideLabels={true} />\n```\n\n### hideIcons\nThe `hideIcons` prop will disable the option icon elements from rendering.\n\n```jsx\n<RadioList options={store.options} hideIcons={true} />\n```\n\n### titleText\nThe `titleText` prop is will render a title element\n\n```jsx\n<RadioList options={store.options} titleText={'Per Page'} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop is will hide the title text.\n\n```jsx\n<RadioList options={store.options} titleText={'Per Page'} hideTitleText={true} />\n```\n\n### disabled\nThe `disabled` prop will put the inputs in a disabled state.\n\n```jsx\n<RadioList options={store.options} disabled={true} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. \n\n```jsx\n<RadioList options={store.pagination.pageSizeOptions} selected={store.pagination.pageSize} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<RadioList options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [(Story) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {})],
					argTypes: {
						options: {
							description: 'list of options to display',
							type: { required: !1 },
							table: { type: { summary: 'option[]' } },
							control: { type: 'object' },
						},
						titleText: {
							defaultValue: '',
							description: 'optional title to render',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						hideTitleText: {
							description: 'hide title text',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						native: {
							description: 'use native HTML radio inputs',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideOptionRadios: {
							description: 'enable/disable radio icons',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideOptionIcons: {
							description: 'enable/disable option icons',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideOptionLabels: {
							description: 'enable/disable option labels',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						onSelect: {
							description: 'option onSelect event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onSelect',
						},
						disabled: {
							description: 'boolean to set the select in a disabled state',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						selected: { description: 'Current selected option', table: { type: { summary: 'string | number' } }, control: { type: 'none' } },
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'RadioList', globals: { siteId: '8uyt2m' } }),
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(RadioList.q, { ...args });
			Default.args = { options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }] };
			const Icons = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(RadioList.q, { ...args });
			Icons.args = {
				options: [
					{ label: '1 wide', value: '1 wide', icon: 'square' },
					{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
					{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
				],
			};
			const Native = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(RadioList.q, { ...args });
			Native.args = { native: !0, options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }] };
			const PerPage = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(RadioList.q, {
					...args,
					options: controller.store.pagination.pageSizeOptions,
					selected: controller.store.pagination.pageSizeOptions[0],
				});
			(PerPage.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (PerPage.args = { titleText: 'Per Page' });
			const SortBy = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(RadioList.q, {
					...args,
					options: controller?.store?.sorting.options,
					selected: controller?.store?.sorting.current,
				});
			(SortBy.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(SortBy.args = { titleText: 'Sort By' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: RadioListProps) => <RadioList {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(Icons.parameters = {
					...Icons.parameters,
					docs: {
						...Icons.parameters?.docs,
						source: { originalSource: '(args: RadioListProps) => <RadioList {...args} />', ...Icons.parameters?.docs?.source },
					},
				}),
				(Native.parameters = {
					...Native.parameters,
					docs: {
						...Native.parameters?.docs,
						source: { originalSource: '(args: RadioListProps) => <RadioList {...args} />', ...Native.parameters?.docs?.source },
					},
				}),
				(PerPage.parameters = {
					...PerPage.parameters,
					docs: {
						...PerPage.parameters?.docs,
						source: {
							originalSource:
								'(args: RadioListProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <RadioList {...args} options={controller.store.pagination.pageSizeOptions} selected={controller.store.pagination.pageSizeOptions[0]} />;\n}',
							...PerPage.parameters?.docs?.source,
						},
					},
				}),
				(SortBy.parameters = {
					...SortBy.parameters,
					docs: {
						...SortBy.parameters?.docs,
						source: {
							originalSource:
								'(args: RadioListProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <RadioList {...args} options={controller?.store?.sorting.options} selected={controller?.store?.sorting.current} />;\n}',
							...SortBy.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'Icons', 'Native', 'PerPage', 'SortBy'];
		},
		'./components/src/components/Molecules/RadioList/RadioList.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { q: () => RadioList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				_Radio_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/Radio/Radio.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
					'& .ss__radio-list__options-wrapper': { border: 'none', listStyle: 'none', padding: '0px', margin: '0px' },
					'.ss__radio-list__title': { margin: '0px', padding: '5px' },
					'.ss__radio-list__option': {
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						padding: '5px',
						'& .ss__radio-list__option__label, .ss__radio-list__option__icon': { cursor: 'pointer', padding: '0px 0px 0px 5px' },
					},
					'&.ss__radio-list--disabled, .ss__radio-list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
					'.ss__radio-list__option--selected': { fontWeight: 'bold' },
				});
			function RadioList(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('radioList', globalTheme, defaultProps, properties),
					{
						titleText,
						onSelect,
						hideOptionRadios,
						hideOptionIcons,
						hideOptionLabels,
						hideTitleText,
						native,
						disabled,
						selected,
						options,
						disableStyles,
						className,
						internalClassName,
						treePath,
					} = props,
					subProps_Radio = {
						internalClassName: 'ss__radio-list__option__radio',
						native,
						disableA11y: !0,
						disabled,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					subProps_Icon = {
						internalClassName: 'ss__radio-list__option__icon',
						size: '16px',
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
					[selection, setSelection] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selected),
					[originalSelected] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selected);
				try {
					if (selected) {
						const originalSelectedstr = JSON.stringify(originalSelected),
							selectedstr = JSON.stringify(selected),
							selectionstr = JSON.stringify(selection);
						originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
					}
				} catch (e) {}
				const lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, props.lang || {}),
					mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { options, selectedOptions: selection });
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__radio-list',
									{ 'ss__radio-list--native': native, 'ss__radio-list--disabled': disabled },
									className,
									internalClassName
								),
								children: [
									(titleText || lang?.title?.value) &&
										!hideTitleText &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h5', {
											className: 'ss__radio-list__title',
											...mergedLang.title?.all,
											children: titleText,
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('ul', {
										className: 'ss__radio-list__options-wrapper',
										role: 'listbox',
										'aria-label': titleText,
										children: options.map((option) => {
											const selected = selection && selection.value == option.value;
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('li', {
												className: `ss__radio-list__option ${selected ? 'ss__radio-list__option--selected' : ''} ${
													option.disabled ? 'ss__radio-list__option--disabled' : ''
												}`,
												ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.iy)(e),
												onClick: (e) =>
													!disabled &&
													((e, option) => {
														onSelect && onSelect(e, option), setSelection(option);
													})(e, option),
												title: option.label,
												role: 'option',
												'aria-selected': selected,
												children: [
													!hideOptionRadios &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Radio_Radio__WEBPACK_IMPORTED_MODULE_14__.s, {
															...subProps_Radio,
															checked: selected,
															disableA11y: !0,
														}),
													option.icon &&
														!hideOptionIcons &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															...subProps_Icon,
															...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
														}),
													!hideOptionLabels &&
														(option.label || !option.icon) &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('label', {
															className: 'ss__radio-list__option__label',
															children: option.label || option.value,
														}),
												],
											});
										}),
									}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
