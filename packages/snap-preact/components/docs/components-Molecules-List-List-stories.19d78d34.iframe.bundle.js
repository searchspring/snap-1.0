'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3893],
	{
		'./components/src/components/Molecules/List/List.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					DisabledOption: () => DisabledOption,
					Icons: () => Icons,
					PerPage: () => PerPage,
					SortBy: () => SortBy,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => List_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				List = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			var snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const List_stories = {
					title: 'Molecules/List',
					component: List.B,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# List\n\nRenders a list of options.\n\n## Sub-components\n- Checkbox\n\n## Usage\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<List options={store.options} />\n```\n\n### hideCheckbox\nThe `hideCheckbox` prop will disable the checkbox elements from rendering.\n\n```jsx\n<List options={store.options} hideCheckbox={true} />\n```\n\n### hideLabels\nThe `hideLabels` prop will disable the option label elements from rendering.\n\n```jsx\n<List options={store.options} hideLabels={true} />\n```\n\n### hideIcons\nThe `hideIcons` prop will disable the option icon elements from rendering.\n\n```jsx\n<List options={store.options} hideIcons={true} />\n```\n\n### requireSelection\nThe `requireSelection` prop will enable/disable the ability to have no options selected.\n\n```jsx\n<List options={store.options} requireSelection={false} />\n```\n\n### multiSelect\nThe `multiSelect` prop will enable/disable the ability to select more than one option at a time.\n\n```jsx\n<List options={store.options} multiSelect={true} />\n```\n\n### horizontal\nThe `horizontal` prop will render the list options horizontally.\n\n```jsx\n<List options={store.options} horizontal={true} />\n```\n\n### native\nThe `native` prop is a boolean to render unstyled native checkbox elements\n\n```jsx\n<List options={store.options} native={true} />\n```\n\n### titleText\nThe `titleText` prop is will render a title element\n\n```jsx\n<List options={store.options} titleText={'Per Page'} />\n```\n\n### disabled\nThe `disabled` prop will put the inputs in a disabled state.\n\n```jsx\n<List options={store.options} disabled={true} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. \n\n```jsx\n<List options={store.pagination.pageSizeOptions} selected={store.pagination.pageSize} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<List options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />\n```",
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
						hideOptionCheckboxes: {
							description: 'enable/disable checkboxes',
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
						requireSelection: {
							description: 'enable/disable requireSelection',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						multiSelect: {
							description: 'enable/disable multiselect',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						horizontal: {
							defaultValue: !1,
							description: 'render the list options horizontally',
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
						native: {
							description: 'boolean to render unstyled native checkbox elements',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						selected: { description: 'Current selected option', table: { type: { summary: 'string | number' } }, control: { type: 'none' } },
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'List', globals: { siteId: '8uyt2m' } }),
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(List.B, { ...args });
			Default.args = { options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }] };
			const DisabledOption = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(List.B, { ...args });
			DisabledOption.args = { options: [{ value: 'one', disabled: !0 }, { value: 'two' }, { value: 'three' }, { value: 'four' }] };
			const viewOptions = [
					{ label: '1 wide', value: '1 wide', icon: 'square' },
					{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
					{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
				],
				Icons = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(List.B, { ...args });
			Icons.args = { requireSelection: !0, options: viewOptions, selected: viewOptions[0] };
			const PerPage = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(List.B, {
					...args,
					options: controller.store.pagination.pageSizeOptions,
					selected: controller.store.pagination.pageSizeOptions[0],
				});
			(PerPage.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(PerPage.args = { titleText: 'Per Page', requireSelection: !0 });
			const SortBy = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(List.B, {
					...args,
					options: controller?.store?.sorting.options,
					selected: controller?.store?.sorting.current,
				});
			(SortBy.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(SortBy.args = { titleText: 'Sort By', requireSelection: !0 }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: ListProps) => <List {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(DisabledOption.parameters = {
					...DisabledOption.parameters,
					docs: {
						...DisabledOption.parameters?.docs,
						source: { originalSource: '(args: ListProps) => <List {...args} />', ...DisabledOption.parameters?.docs?.source },
					},
				}),
				(Icons.parameters = {
					...Icons.parameters,
					docs: {
						...Icons.parameters?.docs,
						source: { originalSource: '(args: ListProps) => <List {...args} />', ...Icons.parameters?.docs?.source },
					},
				}),
				(PerPage.parameters = {
					...PerPage.parameters,
					docs: {
						...PerPage.parameters?.docs,
						source: {
							originalSource:
								'(args: ListProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <List {...args} options={controller.store.pagination.pageSizeOptions} selected={controller.store.pagination.pageSizeOptions[0]} />;\n}',
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
								'(args: ListProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <List {...args} options={controller?.store?.sorting.options} selected={controller?.store?.sorting.current} />;\n}',
							...SortBy.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'DisabledOption', 'Icons', 'PerPage', 'SortBy'];
		},
		'./components/src/components/Molecules/Checkbox/Checkbox.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { S: () => Checkbox });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_checkbox = ({ size, color, theme }) => {
					const pixelSize = isNaN(Number(size)) ? size : `${size}px`;
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: pixelSize,
						width: pixelSize,
						border: `1px solid ${color || theme?.variables?.colors?.primary || '#333'}`,
						'&.ss__checkbox--disabled': { opacity: 0.7 },
						'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${pixelSize} - 30%)`, height: `calc(${pixelSize} - 30%)` },
					});
				},
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Checkbox = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'checkbox',
							globalTheme,
							{ size: '12px', startChecked: !1, disableA11y: !1 },
							properties
						),
						{
							checked,
							color,
							disabled,
							icon,
							iconColor,
							onClick,
							size,
							startChecked,
							native,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							theme,
							treePath,
						} = props,
						pixelSize = isNaN(Number(size)) ? size : `${size}px`,
						subProps_icon = {
							className: 'ss__checkbox__icon',
							icon: 'check-thin',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({
								color: iconColor || color || theme?.variables?.colors?.primary,
								disableStyles,
								icon,
								size: size && `calc(${pixelSize} - 30%)`,
							}),
							theme: props.theme,
							treePath,
						};
					let checkedState, setCheckedState;
					const stateful = void 0 === checked;
					stateful ? ([checkedState, setCheckedState] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startChecked)) : (checkedState = checked);
					const clickFunc = (e) => {
							disabled || (stateful && setCheckedState && setCheckedState((prev) => !prev), onClick && onClick(e));
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_checkbox(stylingProps), style]);
					const defaultLang = {
							checkbox: { attributes: { 'aria-label': `${disabled ? 'disabled' : ''} ${checkedState ? 'checked' : 'unchecked'} checkbox` } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { checkedState, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('input', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__checkbox', { 'ss__checkbox--disabled': disabled }, className),
									type: 'checkbox',
									'aria-checked': checkedState,
									onClick: (e) => clickFunc(e),
									disabled,
									checked: checkedState,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__checkbox', { 'ss__checkbox--disabled': disabled }, className),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e)),
									role: 'checkbox',
									'aria-checked': checkedState,
									...mergedLang.checkbox?.all,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { className: 'ss__checkbox__empty' }),
							  }),
					});
				});
		},
		'./components/src/components/Molecules/List/List.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { B: () => List });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const CSS = {
				List: ({ horizontal }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						flexDirection: horizontal ? 'row' : 'column',
						alignItems: horizontal ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'& .ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: horizontal ? 'row' : 'column',
							alignItems: horizontal ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'& .ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					}),
			};
			function List(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					defaultProps = { ...globalTheme?.components?.list, ...properties, ...properties.theme?.components?.list },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('list', globalTheme, defaultProps, properties),
					{
						titleText,
						onSelect,
						native,
						multiSelect,
						hideOptionLabels,
						hideOptionIcons,
						hideOptionCheckboxes,
						disabled,
						options,
						requireSelection,
						disableStyles,
						className,
						style,
						styleScript,
						treePath,
					} = props;
				let selected = props.selected;
				const subProps_checkbox = { native, ...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }), theme: props?.theme, treePath },
					subProps_icon = {
						className: 'ss__list__option__icon',
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					styling = { 'ss-name': props.name },
					stylingProps = { ...props };
				styleScript && !disableStyles
					? (styling.css = [styleScript(stylingProps), style])
					: disableStyles
					? style && (styling.css = [style])
					: (styling.css = [CSS.List(stylingProps), style]),
					selected && !Array.isArray(selected) && (selected = [selected]);
				const [selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || []),
					[originalSelected] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || []);
				try {
					if (selected) {
						const originalSelectedstr = JSON.stringify(originalSelected),
							selectedstr = JSON.stringify(selected),
							selectionstr = JSON.stringify(selection);
						originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
					}
				} catch (e) {}
				const lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, props.lang || {}),
					mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { options, selectedOptions: selection });
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__list', disabled ? 'ss__list--disabled' : '', className),
								children: [
									(titleText || lang?.title?.value) &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h5', {
											className: 'ss__list__title',
											...mergedLang.title?.all,
											children: titleText,
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('ul', {
										className: 'ss__list__options',
										role: 'listbox',
										'aria-label': titleText,
										children: options.map((option) => {
											const selected = selection.some((select) => select.value == option.value);
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('li', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
													`ss__list__option ss__list__option--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__.p(option.value.toString())}`,
													{
														'ss__list__option--selected': selected,
														'ss__list__option--disabled': option?.disabled,
														'ss__list__option--unavailable': !1 === option?.available,
													}
												),
												ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.i)(e),
												onClick: (e) =>
													!disabled &&
													!option?.disabled &&
													((e, option) => {
														let newArray;
														multiSelect
															? selection.find((select) => select.value === option.value)
																? ((newArray = [...selection]),
																  newArray.splice(
																		newArray.findIndex((select) => select.value === option.value),
																		1
																  ),
																  0 == newArray.length && requireSelection && (newArray = [option]))
																: (newArray = [...selection, option])
															: (newArray = !requireSelection && selection.find((select) => select.value === option.value) ? [] : [option]),
															onSelect && onSelect(e, option, newArray),
															setSelection(newArray);
													})(e, option),
												title: option.label,
												role: 'option',
												'aria-selected': selected,
												children: [
													!hideOptionCheckboxes &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Checkbox__WEBPACK_IMPORTED_MODULE_13__.S, {
															...subProps_checkbox,
															checked: selected,
															disableA11y: !0,
														}),
													option.icon &&
														!hideOptionIcons &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
															...subProps_icon,
															...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
														}),
													!hideOptionLabels &&
														(option.label || !option.icon) &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('label', {
															className: 'ss__list__option__label',
															children: option.label || option.value,
														}),
												],
											});
										}),
									}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'../snap-toolbox/dist/esm/filters/handleize.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function handleize(input) {
				if ('string' != typeof input) return input;
				let handleized = input.toLowerCase();
				return (handleized = handleized.replace(/[^\w\s]/g, '').trim()), (handleized = handleized.replace(/\s/g, '-')), handleized;
			}
			__webpack_require__.d(__webpack_exports__, { p: () => handleize });
		},
	},
]);
