(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4081],
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
		'../snap-toolbox/dist/esm/filters/handleize.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function handleize(input) {
				if ('string' != typeof input) return input;
				let handleized = input.toLowerCase();
				return (handleized = handleized.replace(/[^\w\s]/g, '').trim()), (handleized = handleized.replace(/\s/g, '-')), handleized;
			}
			__webpack_require__.d(__webpack_exports__, { p: () => handleize });
		},
		'./components/src/components/Atoms/Image/Image.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => Image, t: () => FALLBACK_IMAGE_URL });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const FALLBACK_IMAGE_URL = '//cdn.searchspring.net/ajax_search/img/default_image.png',
				defaultStyles = ({ height }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: height || 'auto',
						'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
						'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
					});
			function Image(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					defaultProps = { fallback: FALLBACK_IMAGE_URL, lazy: !0, treePath: globalTreePath },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('image', globalTheme, defaultProps, properties),
					{ alt, src, fallback, hoverSrc, lazy, onMouseOver, onMouseOut, onError, onLoad, onClick, className, internalClassName } = props,
					[visibile, setVisibile] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					[isHovering, setHover] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					prevSrcRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)('');
				(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
					prevSrcRef.current = src;
				}),
					prevSrcRef.current && prevSrcRef.current != src && setVisibile(!1);
				const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
				return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
						...styling,
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
							'ss__image',
							{ 'ss__image--hidden': !visibile },
							className,
							internalClassName
						),
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('img', {
							src: (isHovering ? hoverSrc : src) || fallback,
							alt,
							title: alt,
							loading: lazy ? 'lazy' : void 0,
							onLoad: (e) => {
								setVisibile(!0), onLoad && onLoad(e);
							},
							onClick: (e) => onClick && onClick(e),
							onError: (e) => {
								(e.target.src = fallback || ''), onError && onError(e);
							},
							onMouseOver: (e) => {
								hoverSrc && setHover(!0), onMouseOver && onMouseOver(e);
							},
							onMouseOut: (e) => {
								hoverSrc && setHover(!1), onMouseOut && onMouseOut(e);
							},
						}),
					}),
				});
			}
		},
		'./components/src/components/Molecules/Grid/Grid.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					DisabledOption: () => DisabledOption,
					__namedExportsOrder: () => __namedExportsOrder,
					backgroundColors: () => backgroundColors,
					backgroundImages: () => backgroundImages,
					default: () => Grid_stories,
					overflow: () => overflow,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Grid = __webpack_require__('./components/src/components/Molecules/Grid/Grid.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Grid_stories = {
					title: 'Molecules/Grid',
					component: Grid.x,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Grid\n\nRenders an Grid of options\n\n## Components Used\n- image\n\n## Usage\n```jsx\nimport { Grid } from '@searchspring/snap-preact-components';\n```\n\n### options\nThe required `options` prop specifies an array of options to render.\n\n```jsx\nconst options: SwatchOption = [\n\t\t{\n\t\t\tvalue: 'one',\n\t\t\tdisabled: true,\n\t\t},\n\t\t{\n\t\t\tvalue: 'two',\n\t\t},\n\t\t{\n\t\t\tvalue: 'three',\n\t\t},\n\t],\n\n<Grid options={options} />\n```\n\n### gapSize\nThe optional `gapsize` props specifies the gap size between rows and columns.\n\n```jsx\n<Grid options={options} gapsize={'15px'} />\n```\n\n### columns\nThe optional `columns` prop specifies the number of columns to show in the grid. (defaults to 4)\n\n```jsx\n<Grid options={options} columns={3} />\n```\n\n### rows\nThe optional `rows` prop specifies the number of rows to show in the grid. Should be noted that if more `options` are passed than are allowed via `columns` and `rows` props, then the component will hide the overflow options behind a `+ 4 more` overflow button. \n\n```jsx\n<Grid options={options} rows={2} />\n```\n\n### disableOverflowAction\nThe optional `disableOverflowAction` prop will disable the overflow action from the overflow button (`+ 4 more`s). This is to be used when you want the overflow button to show render but you do not want the grid to expand and show all options onclick of the overflow button. \n\n```jsx\n<Grid options={options} rows={2} disableOverflowAction={true}/>\n```\n\n### overflowButton\nThe optional `overflowButton` prop accepts a custom JSX element to render instead of the default overflow button. The custom component will be passed the current expanded state of the grid, as well as the number of options hidden \n\n```jsx\n\nconst overflowButton = (expanded, remainder) => {\n    return (\n       expanded ? (\n            <span>\n                show {remainder} more\n            </span>\n        ) : (\n            <span>\n                Show Less\n            </span>\n        )\n    )\n}\n\n<Grid options={options} rows={2} overflowButton={overflowButton}/>\n```\n\n### overflowButtonInGrid\nThe optional `overflowButtonInGrid` prop specifies if the overflow button should be rendered in the grid or below. \n\n```jsx\n<Grid options={options} overflowButtonInGrid={true} />\n```\n\n### onOverflowButtonClick\nThe optional `onOverflowButtonClick` prop specifies to custom function to call onClick of the overflow button. \n\n```jsx\nconst onOverflowButtonClick = (expandedState: boolean, remainder: number) => {\n    console.log(expandedState, remainder);\n}\n\n<Grid options={options} onOverflowButtonClick={onOverflowButtonClick} />\n```\n\n### hideLabels\nThe optional `hideLabels` prop specifies if option labels should be hidden. \n\n```jsx\n<Grid options={options} hideLabels={true} />\n```\n\n### hideShowLess\nThe optional `hideShowLess` prop specifies if show less button should be hidden. \n\n```jsx\n<Grid options={options} hideShowLess={true} />\n```\n\n### multiselect\nThe optional `multiselect` prop specifies if more than a single option can be selected at once. \n\n```jsx\n<Grid options={options} multiselect={true} />\n```\n\n### onSelect\nThe optional `onSelect` prop specifies callback function to be called on option click. \n\n```jsx\nconst onSelectFunc = (event, clickedOption, currenctlySelectedOptionArray) => {\n    console.log(event, clickedOption, currenctlySelectedOptionArray)\n}\n\n<Grid options={options} onSelect={onSelectFunc} />\n```\n\n### titleText\nThe optional `titleText` prop specifies the text to be rendered in the grid title. \n\n```jsx\n<Grid options={options} titleText={\"Grid Title\"} />\n```\n\n### selected\nThe optional `selected` prop specifies the selected option(s) if the selected state is handled outside of the component. \n\n```jsx\n\nconst selectedOption: SwatchOption = [\n    {\n        value: 'two',\n    },\n]\n\n<Grid options={options} selected={selectedOption} />\n```\n\n\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '350px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
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
						multiSelect: {
							description: 'enable/disable multiselect',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						onSelect: {
							description: 'option onSelect event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onSelect',
						},
						selected: { description: 'Current selected option', table: { type: { summary: 'string | number' } }, control: { type: 'none' } },
						hideLabels: {
							description: 'enable/disable option labels from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideShowLess: {
							description: 'hide show less button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						columns: {
							defaultValue: 4,
							description: 'Number of columns in grid',
							table: { type: { summary: 'number' }, defaultValue: { summary: 4 } },
							control: { type: 'number' },
						},
						rows: { description: 'Number of rows in grid', table: { type: { summary: 'number' } }, control: { type: 'number' } },
						gapSize: {
							defaultValue: '8px',
							description: 'Gap size between rows and columns',
							table: { type: { summary: 'string' }, defaultValue: { summary: '8px' } },
							control: { type: 'text' },
						},
						disableOverflowAction: {
							description: 'enable/disable show more click functionality',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						overflowButtonInGrid: {
							description: 'render overflow button in the grid or below',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						overflowButton: { description: 'Slot for custom overflow button component.', table: { type: { summary: 'component' } } },
						onOverflowButtonClick: {
							description: 'Custom onClick event handler for overflow button',
							table: { type: { summary: 'function' } },
							action: 'onOverflowButtonClick',
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Grid.x, { ...args });
			Default.args = {
				options: [
					{ value: 'one' },
					{ value: 'two' },
					{ value: 'three' },
					{ value: 'four' },
					{ value: 'five' },
					{ value: 'six' },
					{ value: 'seven' },
					{ value: 'eight' },
				],
			};
			const DisabledOption = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Grid.x, { ...args });
			DisabledOption.args = {
				options: [
					{ value: 'one', disabled: !0 },
					{ value: 'two' },
					{ value: 'three' },
					{ value: 'four' },
					{ value: 'five' },
					{ value: 'six' },
					{ value: 'seven' },
					{ value: 'eight' },
				],
			};
			const backgroundImages = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Grid.x, { ...args });
			backgroundImages.args = {
				options: [
					{
						value: 'Faded Khaki',
						backgroundImageUrl:
							'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7.jpg?v=1706125264',
					},
					{
						value: 'Indigo',
						backgroundImageUrl:
							'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb.jpg?v=1706125265https://cdn.shopify.com/s/files/1/0677/2424/7298/files/11136413-I_OK_x_Arvin_Gds_Wool_Boot_Socks_CBM_1_0e3b5702-49e2-4608-acb6-7c131891fc18_450x.jpg?v=1706124808',
					},
					{
						value: 'Mirage',
						backgroundImageUrl:
							'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b.jpg?v=1706125265',
					},
					{
						value: 'Toasted',
						backgroundImageUrl:
							'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb.jpg?v=1706125264',
					},
				],
				overflowButtonInGrid: !0,
				hideLabels: !0,
				rows: 1,
				columns: 4,
			};
			const backgroundColors = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Grid.x, { ...args });
			backgroundColors.args = {
				options: [
					{ value: 'red', background: 'red' },
					{ value: 'blue', background: 'blue' },
					{ value: 'white', background: 'white', disabled: !0 },
					{ value: 'green', background: 'green' },
					{ value: 'yellow', background: 'yellow' },
				],
				hideLabels: !0,
				columns: 5,
				overflowButtonInGrid: !0,
				rows: 1,
			};
			const overflow = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Grid.x, { ...args });
			(overflow.args = {
				options: [
					{ value: 'one' },
					{ value: 'two' },
					{ value: 'three' },
					{ value: 'four' },
					{ value: 'five' },
					{ value: 'six' },
					{ value: 'seven' },
					{ value: 'eight' },
				],
				rows: 2,
				columns: 3,
			}),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(DisabledOption.parameters = {
					...DisabledOption.parameters,
					docs: {
						...DisabledOption.parameters?.docs,
						source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...DisabledOption.parameters?.docs?.source },
					},
				}),
				(backgroundImages.parameters = {
					...backgroundImages.parameters,
					docs: {
						...backgroundImages.parameters?.docs,
						source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...backgroundImages.parameters?.docs?.source },
					},
				}),
				(backgroundColors.parameters = {
					...backgroundColors.parameters,
					docs: {
						...backgroundColors.parameters?.docs,
						source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...backgroundColors.parameters?.docs?.source },
					},
				}),
				(overflow.parameters = {
					...overflow.parameters,
					docs: {
						...overflow.parameters?.docs,
						source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...overflow.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default', 'DisabledOption', 'backgroundImages', 'backgroundColors', 'overflow'];
		},
		'./components/src/components/Molecules/Grid/Grid.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { x: () => Grid });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				color__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_15__);
			const defaultStyles = ({ gapSize, columns, theme, disableOverflowAction }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
					'.ss__grid__options': {
						display: 'flex',
						flexFlow: 'row wrap',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						gap: gapSize,
						gridAutoRows: '1fr',
						'.ss__grid__option': {
							display: 'flex',
							flexDirection: 'column',
							boxSizing: 'content-box',
							backgroundRepeat: 'no-repeat',
							backgroundSize: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
							backgroundPosition: 'center !important',
							justifyContent: 'center',
							alignItems: 'center',
							flex: '0 1 auto',
							border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
							textAlign: 'center',
							wordBreak: 'break-all',
							padding: '1em 0',
							width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
							margin: `0 ${gapSize} ${gapSize} 0`,
							'.ss__grid__option__inner': {
								aspectRatio: '1/1',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								margin: 'auto',
								height: '100%',
								'.ss__image': { aspectRatio: '1/1' },
							},
							'.ss__grid__option__label': { cursor: 'pointer' },
							[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
							'&.ss__grid__option--selected': { border: `2px solid ${theme?.variables?.colors?.primary || '#333'}` },
							'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
							'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
							'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: '50%',
								width: '90%',
								height: '1px',
								borderTop: '3px solid #eee',
								outline: '1px solid #ffff',
								transform: 'rotate(-45deg)',
							},
							'&.ss__grid__option--dark': { color: '#fff' },
							'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
						},
						'@supports (display: grid)': {
							display: 'grid',
							'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
							'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
							'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
						},
					},
					'.ss__grid__show-more-wrapper': {
						'&:not(.ss__grid__option)': { margin: '8px' },
						'&:hover': { cursor: disableOverflowAction ? 'initial !important' : 'pointer !important' },
					},
				});
			function Grid(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					defaultProps = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('grid', globalTheme, defaultProps, properties),
					{
						titleText,
						onSelect,
						hideLabels,
						disableOverflowAction,
						multiSelect,
						overflowButton,
						columns,
						rows,
						hideShowLess,
						overflowButtonInGrid,
						disabled,
						options,
						disableStyles,
						onOverflowButtonClick,
						className,
						internalClassName,
						treePath,
						disableA11y,
					} = props,
					subProps_image = {
						internalClassName: 'ss__grid__image',
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					};
				let selected = props.selected;
				const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
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
				const limit = rows && columns ? columns * rows : options.length,
					remainder = Math.max(0, options.length - (limit - (overflowButtonInGrid ? 1 : 0))),
					[limited, setLimited] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!!remainder),
					OverflowButtonElem = () => {
						const showButton = !hideShowLess || limited,
							defaultLang = {
								showMoreText: { value: overflowButtonInGrid ? `+ ${remainder}` : 'Show More' },
								showLessText: { value: overflowButtonInGrid ? `- ${remainder}` : 'Show Less' },
							},
							lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
							mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { limited, remainder });
						return showButton && remainder > 0 && options.length !== limit
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
									className: 'ss__grid__show-more-wrapper ' + (overflowButtonInGrid ? 'ss__grid__option' : ''),
									onClick: (e) => {
										!disableOverflowAction && setLimited(!limited), onOverflowButtonClick && onOverflowButtonClick(e, Boolean(limited), remainder);
									},
									role: 'button',
									ref: (e) => (disableA11y || disableOverflowAction ? null : (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.iy)(e)),
									...(limited ? mergedLang.showMoreText.attributes : mergedLang.showLessText.attributes),
									children: overflowButton
										? (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(overflowButton, { limited, remainder, treePath })
										: limited
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
												className: 'ss__grid__show-more',
												...mergedLang.showMoreText.value,
										  })
										: remainder
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
												className: 'ss__grid__show-less',
												...mergedLang.showLessText.value,
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					};
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
									'ss__grid',
									disabled ? 'ss__grid--disabled' : '',
									className,
									internalClassName
								),
								children: [
									titleText &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h5', { className: 'ss__grid__title', children: titleText }),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
										className: 'ss__grid__options',
										children: [
											options.map((option, idx) => {
												const selected = selection.some((select) => select.value == option.value);
												let isDark = !1;
												try {
													isDark = new (color__WEBPACK_IMPORTED_MODULE_15___default())(
														option.background
															? option.background.toLowerCase()
															: option.backgroundImageUrl
															? ''
															: option.value.toString().toLowerCase()
													).isDark();
												} catch (err) {}
												if (!limited || options.length == limit || idx < limit - (overflowButtonInGrid ? 1 : 0))
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__grid__option', {
															'ss__grid__option--selected': selected,
															'ss__grid__option--disabled': option?.disabled,
															'ss__grid__option--unavailable': !1 === option?.available,
															'ss__grid__option--dark': isDark,
														}),
														style: { background: option.background ? option.background : option.backgroundImageUrl ? void 0 : option.value },
														onClick: (e) =>
															!disabled &&
															!option?.disabled &&
															((e, option) => {
																if (multiSelect) {
																	let newArray;
																	selection.find((select) => select.value === option.value)
																		? ((newArray = [...selection]),
																		  newArray.splice(
																				newArray.findIndex((select) => select.value === option.value),
																				1
																		  ))
																		: (newArray = [...selection, option]),
																		onSelect && onSelect(e, option, newArray),
																		setSelection(newArray);
																} else onSelect && onSelect(e, option, [option]), setSelection([option]);
															})(e, option),
														ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.iy)(e),
														title: option.label || option.value.toString(),
														role: 'option',
														'aria-selected': selected,
														'aria-disabled': option.disabled,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
															className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																'ss__grid__option__inner',
																`ss__grid__option__inner--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_16__.p(option.value.toString())}`
															),
															children: [
																!option.background && option.backgroundImageUrl
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_17__._, {
																			...subProps_image,
																			src: option.backgroundImageUrl,
																			alt: option.label || option.value.toString(),
																	  })
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
																hideLabels
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('label', {
																			className: 'ss__grid__option__label',
																			children: option.label || option.value,
																	  }),
															],
														}),
													});
											}),
											overflowButtonInGrid
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(OverflowButtonElem, {})
												: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
										],
									}),
									overflowButtonInGrid
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(OverflowButtonElem, {}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
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
