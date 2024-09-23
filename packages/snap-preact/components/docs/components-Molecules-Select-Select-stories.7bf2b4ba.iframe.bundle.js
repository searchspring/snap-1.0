'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7421],
	{
		'./components/src/components/Molecules/Select/Select.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
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
												"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```typescript\n{\n\tlabel: 'Price',\n\tvalue: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```jsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```jsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```jsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```jsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```jsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```jsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```jsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state.\n\n```jsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```jsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n",
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
						borderColor: {
							description: 'Select border color',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#333' } },
							control: { type: 'color' },
						},
						backgroundColor: {
							description: 'Select background color',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#FFF' } },
							control: { type: 'color' },
						},
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
				ObservableSelect = (0, mobxreact_esm.PA)(({ args, controller }) =>
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
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
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
