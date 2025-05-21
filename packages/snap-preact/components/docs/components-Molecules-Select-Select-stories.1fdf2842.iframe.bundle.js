(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7421],
	{
		'./components/src/components/Molecules/Select/Select.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					IconOptions: () => IconOptions,
					Native: () => Native,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Select_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Select = __webpack_require__('./components/src/components/Molecules/Select/Select.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx');
			const Select_stories = {
					title: 'Molecules/Select',
					component: Select.l,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```typescript\n{\n\tlabel: 'Price',\n\tvalue: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```jsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```jsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```jsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```jsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```jsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```jsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```jsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```jsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```jsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						options: {
							description: 'Select options from store reference',
							type: { required: !0 },
							table: { type: { summary: 'Array of Option objects' } },
							control: { type: 'none' },
						},
						selected: {
							description: 'Current selected options from store reference',
							table: { type: { summary: 'Option object' } },
							control: { type: 'none' },
						},
						disabled: {
							description: 'Disable select',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						label: { description: 'Header label', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						hideLabel: {
							description: 'hide the Header label',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						clearSelection: { description: 'Unselect label', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						hideLabelOnSelection: {
							description: 'Hide label when selection has been made (non-native only)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideSelection: {
							description: 'Hide the current selection in the dropdown button (non-native only)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideIcon: {
							description: 'Hide the icon in the dropdown button (non-native only)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideOptionIcons: {
							description: 'Hide the icon in the options (non-native only)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideOptionLabels: {
							description: 'Hide the label in the options (non-native only)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						separator: {
							defaultValue: ': ',
							description: 'Select delimiter',
							table: { type: { summary: 'string' }, defaultValue: { summary: ': ' } },
							control: { type: 'text' },
						},
						color: { description: 'Select color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						borderColor: { description: 'Select border color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						backgroundColor: { description: 'Select background color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						iconColor: {
							description: 'Select icon color',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#333' } },
							control: { type: 'color' },
						},
						iconOpen: {
							defaultValue: 'angle-down',
							description: 'Icon for when select is closed',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						iconClose: {
							defaultValue: 'angle-up',
							description: 'Icon for when select is open',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						stayOpenOnSelection: {
							defaultValue: !1,
							description: 'Keep dropdown open when an option is selected',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						startOpen: {
							defaultValue: !1,
							description: 'Open on initial render',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						native: {
							defaultValue: !1,
							description: 'Use native select element',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						disableClickOutside: {
							defaultValue: !1,
							description: 'Ignore clicks outside of element',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						onSelect: { description: 'Select onSelect event handler', table: { type: { summary: 'function' } }, action: 'onSelect' },
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Select', globals: { siteId: '8uyt2m' } }),
				ObservableSelect = (0, es.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Select.l, {
						...args,
						options: controller?.store?.sorting?.options,
						selected: controller?.store?.sorting?.current,
						onSelect: (e, selectedOption) => {
							selectedOption && selectedOption?.url?.go();
						},
					})
				),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelect, { args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (Default.args = { label: 'Sort By' });
			const Native = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelect, { args, controller });
			(Native.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (Native.args = { label: 'Sort By', native: !0 });
			const IconOptions = (args) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Select.l, {
					...args,
					options: [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					],
				});
			(IconOptions.args = { label: 'Layout' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SelectProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservableSelect args={args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(Native.parameters = {
					...Native.parameters,
					docs: {
						...Native.parameters?.docs,
						source: {
							originalSource:
								'(args: SelectProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservableSelect args={args} controller={controller} />;\n}',
							...Native.parameters?.docs?.source,
						},
					},
				}),
				(IconOptions.parameters = {
					...IconOptions.parameters,
					docs: {
						...IconOptions.parameters?.docs,
						source: {
							originalSource:
								"(args: SelectProps) => {\n  const iconOptions: ListOption[] = [{\n    label: '1 wide',\n    value: '1 wide',\n    icon: 'square'\n  }, {\n    label: '2 wide',\n    value: '2 wide',\n    icon: {\n      icon: 'layout-large'\n    }\n  }, {\n    label: '3 wide',\n    value: '3 wide',\n    icon: {\n      icon: 'layout-grid'\n    }\n  }];\n  return <Select {...args} options={iconOptions} />;\n}",
							...IconOptions.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'Native', 'IconOptions'];
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
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						elementProps = {
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__button',
								{ 'ss__button--native': native, 'ss__button--disabled': disabled },
								className
							),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e) },
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
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												content || children || mergedLang.button?.value
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__button__content',
															...mergedLang.button?.all,
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
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { m: () => Dropdown });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const defaultStyles = ({ disableOverlay }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						position: 'relative',
						'&.ss__dropdown--open': {
							'& .ss__dropdown__content': { position: disableOverlay ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
						},
						'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
						'.ss__dropdown__content': {
							backgroundColor: '#fff',
							position: 'absolute',
							minWidth: '100%',
							visibility: 'hidden',
							opacity: 0,
							top: 'auto',
							left: 0,
						},
					}),
				Dropdown = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { startOpen: !1, disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('dropdown', globalTheme, defaultProps, properties),
						{ button, content, children, disabled, open, onClick, onToggle, startOpen, disableClickOutside, disableA11y, className, treePath } =
							props;
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__.L)((e) => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1), onToggle && onToggle(e, !1)));
							}));
					const toggleShowContent = (e) => {
							stateful && setShowContent && setShowContent((prev) => (onToggle && onToggle(e, !prev), !prev));
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__dropdown', { 'ss__dropdown--open': showContent }, className),
							ref: innerRef,
							children: [
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									className: 'ss__dropdown__button',
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e)),
									'aria-expanded': showContent,
									role: 'button',
									onClick: (e) => {
										disabled || (toggleShowContent(e), onClick && onClick(e));
									},
									children: (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(button, { open: showContent, toggleOpen: toggleShowContent, treePath }),
								}),
								(content || children) &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__dropdown__content ss__dropdown__content',
										ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e)),
										children: [
											(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
										],
									}),
							],
						}),
					});
				});
		},
		'./components/src/components/Molecules/Select/Select.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { l: () => Select });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_5__);
			const defaultStyles = ({ color, backgroundColor, borderColor, theme, native }) => {
					const lightenedPrimary = new (color__WEBPACK_IMPORTED_MODULE_5___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
								'.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } },
						  })
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
								display: 'inline-flex',
								color,
								'&.ss__select--disabled': { opacity: 0.7 },
								'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
								'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
								'.ss__select__select': {
									position: 'relative',
									zIndex: '10000',
									backgroundColor: backgroundColor || '#fff',
									listStyle: 'none',
									padding: '0',
									marginTop: '-1px',
									border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
									'.ss__select__dropdown__button': { alignItems: 'center' },
									'.ss__select__select__option': {
										cursor: 'pointer',
										padding: '6px 8px',
										color: 'initial',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
										'&.ss__select__select__option--selected': { fontWeight: 'bold' },
										'&:hover': { backgroundColor: lightenedPrimary.hex() || '#f8f8f8' },
									},
								},
						  });
				},
				Select = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						defaultProps = {
							iconOpen: 'angle-down',
							iconClose: 'angle-up',
							separator: ': ',
							startOpen: !1,
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_8__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.v6)('select', globalTheme, defaultProps, properties),
						{
							backgroundColor,
							borderColor,
							color,
							clearSelection,
							disableClickOutside,
							disabled,
							hideLabel,
							hideLabelOnSelection,
							iconColor,
							iconClose,
							iconOpen,
							label,
							native,
							onSelect,
							selected,
							separator,
							startOpen,
							hideIcon,
							hideOptionIcons,
							hideOptionLabels,
							hideSelection,
							stayOpenOnSelection,
							disableStyles,
							className,
							treePath,
						} = props;
					let { options } = props;
					const subProps_dropdown = {
							className: 'ss__select__dropdown',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, disabled }),
							theme: props?.theme,
							treePath,
						},
						subProps_button = {
							className: 'ss__select__dropdown__button',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, disabled, color, backgroundColor, borderColor }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__select__dropdown__button__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, color: iconColor || color, size: '12px' }),
							theme: props?.theme,
							treePath,
						},
						[open, setOpen] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(Boolean(startOpen)),
						[selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected),
						[originalSelected] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected);
					try {
						if (selected) {
							const originalSelectedstr = JSON.stringify(originalSelected),
								selectedstr = JSON.stringify(selected),
								selectionstr = JSON.stringify(selection);
							originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
						}
					} catch (e) {}
					selection && clearSelection && (options = [{ label: clearSelection, value: '' }, ...options]);
					const makeSelection = (e, option) => {
							option != selection && onSelect && onSelect(e, option), setSelection(option), !stayOpenOnSelection && setOpen(!1);
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Z)(props, defaultStyles),
						selectedOptions = options.filter((option) => selection?.value === option.value),
						defaultLang = {
							buttonLabel: {
								value: label,
								attributes: {
									'aria-label': `${label} dropdown, ${options.length} options ${
										selectedOptions.length ? `, Currently selected option is ${selectedOptions[0].label}` : ''
									}`,
								},
							},
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { options, selectedOptions, label, open });
					return 'object' == typeof options && options?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
										'ss__select',
										{ 'ss__select--native': native },
										{ 'ss__select--disabled': disabled },
										className
									),
									children: native
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK, {
												children: [
													(label || lang.buttonLabel.value) &&
														!hideLabel &&
														!hideLabelOnSelection &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__select__label',
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('label', { ...mergedLang.buttonLabel?.all }),
																separator &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																		className: 'ss__select__label__separator',
																		children: separator,
																	}),
															],
														}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('select', {
														className: 'ss__select__select',
														disabled: disabled || void 0,
														onChange: (e) => {
															const selectElement = e.target,
																selectedOptionElement = selectElement.options[selectElement.selectedIndex],
																selectedOption = options
																	.filter(
																		(option, index) =>
																			option.label == selectedOptionElement.text &&
																			(option.value == selectedOptionElement.value || option.value == index)
																	)
																	.pop();
															!disabled && makeSelection(e, selectedOption);
														},
														children: [
															!selection &&
																clearSelection &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('option', {
																	className: 'ss__select__select__option',
																	selected: !0,
																	value: '',
																	children: clearSelection,
																}),
															options.map((option, index) =>
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('option', {
																	className: 'ss__select__select__option',
																	selected: selection?.value === option.value,
																	value: option.value ?? index,
																	children: option.label,
																})
															),
														],
													}),
													!hideIcon &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															...subProps_icon,
															name: 'open',
															...('string' == typeof iconOpen ? { icon: iconOpen } : iconOpen),
														}),
												],
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_16__.m, {
												...subProps_dropdown,
												disableClickOutside,
												open,
												onToggle: (e, state) => setOpen((prev) => state ?? !prev),
												onClick: () => setOpen((prev) => !prev),
												disableA11y: !0,
												button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__.$, {
													...subProps_button,
													children: [
														(label || lang.buttonLabel.value) &&
															!hideLabelOnSelection &&
															!hideLabel &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
																className: 'ss__select__label',
																'aria-expanded': open,
																...mergedLang.buttonLabel.attributes,
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('label', { ...mergedLang.buttonLabel.value }),
																	separator &&
																		selection &&
																		(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																			className: 'ss__select__label__separator',
																			children: separator,
																		}),
																],
															}),
														selection &&
															!hideSelection &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(
																_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK,
																{
																	children: [
																		selection.icon &&
																			!hideOptionIcons &&
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																				...subProps_icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...('string' == typeof selection.icon ? { icon: selection.icon } : selection.icon),
																			}),
																		!hideOptionLabels &&
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																				className: 'ss__select__selection',
																				children: selection?.label,
																			}),
																	],
																}
															),
														!hideIcon &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																...subProps_icon,
																name: open ? 'open' : 'close',
																...(open
																	? { ...('string' == typeof iconClose ? { icon: iconClose } : iconClose) }
																	: { ...('string' == typeof iconOpen ? { icon: iconOpen } : iconOpen) }),
															}),
													],
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('ul', {
													className: 'ss__select__select',
													role: 'listbox',
													'aria-label': 'string' == typeof label ? label : '',
													ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_18__.i)(e, -1, !0, () => setOpen(!1)),
													children: options.map((option) =>
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('li', {
															ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_18__.i)(e),
															'aria-disabled': option.disabled,
															title: option.label,
															className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__select__select__option', {
																'ss__select__select__option--selected': selection?.value === option.value,
															}),
															onClick: (e) => !disabled && makeSelection(e, option),
															role: 'option',
															'aria-selected': selection?.value === option.value,
															children: [
																option.icon &&
																	!hideOptionIcons &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																		...subProps_icon,
																		name: 'option',
																		className: 'ss__select__select__option__icon',
																		treePath: `${treePath} dropdown`,
																		...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
																	}),
																!hideOptionLabels &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', { children: option.label }),
															],
														})
													),
												}),
										  }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
		'./components/src/hooks/useClickOutside.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { L: () => useClickOutside });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useClickOutside(callback) {
				const callbackRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(),
					innerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)();
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						callbackRef.current = callback;
					}),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						return document.addEventListener('click', handleClick), () => document.removeEventListener('click', handleClick);
						function handleClick(e) {
							innerRef.current && callbackRef.current && !innerRef.current.contains(e.target) && callbackRef.current(e);
						}
					}, []),
					innerRef
				);
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
		'./components/src/utilities/snapify.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { p: () => Snapify });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-controller/dist/esm/Search/SearchController.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../snap-controller/dist/esm/Recommendation/RecommendationController.js'
				),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../snap-controller/dist/esm/Autocomplete/AutocompleteController.js'
				),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/SearchStore.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'
				),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				_searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				_searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			(0, mobx__WEBPACK_IMPORTED_MODULE_0__.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
			const controllers = {},
				client = { globals: { siteId: '8uyt2m' } };
			class Snapify {
				static recommendation(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createRecommendationController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(!0),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__.c(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.t(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.JD(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static autocomplete(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createAutocompleteController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__.Z(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__.Y(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.JD(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static search(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createSearchController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E({
									settings: { coreType: 'query', corePrefix: config.controller.id },
								}),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__.Tp(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.U(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.JD(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
			}
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
