'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6175],
	{
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
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
		'./components/src/components/Molecules/Filter/Filter.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => Filter });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						textDecoration: 'none',
						display: 'inline-flex',
						'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
						'& .ss__filter__label': { marginRight: '5px', fontWeight: 'bold' },
					}),
				Filter = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('filter', globalTheme, defaultProps, properties),
						{ filter, facetLabel, valueLabel, url, hideFacetLabel, onClick, icon, separator, disableStyles, className, internalClassName, treePath } =
							props,
						link = filter?.url?.link || url?.link,
						value = filter?.value.label || valueLabel,
						label = filter?.facet.label || facetLabel,
						subProps_button = {
							internalClassName: 'ss__filter__button',
							disableA11y: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							icon: 'close-thin',
							internalClassName: 'ss__filter__button__icon',
							size: '10px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, icon }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = { filter: { attributes: { 'aria-label': label ? `remove selected ${label} filter ${value}` : value } } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { label, value });
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__filter', className, internalClassName),
									onClick: (e) => {
										link?.onClick && link.onClick(e), onClick && onClick(e);
									},
									href: link?.href,
									tabIndex: 0,
									...mergedLang.filter?.all,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
										...subProps_button,
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
											}),
											!hideFacetLabel &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('span', {
													className: 'ss__filter__label',
													children: [
														label,
														separator &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
																className: 'ss__filter__label__separator',
																children: separator,
															}),
													],
												}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { className: 'ss__filter__value', children: value }),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/FilterSummary/FilterSummary.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Regular: () => Regular,
					__namedExportsOrder: () => __namedExportsOrder,
					customTitle: () => customTitle,
					default: () => FilterSummary_stories,
					noFacetLabel: () => noFacetLabel,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				FilterSummary = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const FilterSummary_stories = {
					title: 'Organisms/FilterSummary',
					component: FilterSummary.r,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Filter Summary\n\nRenders all selected filters including a wrapper with a title and a 'clear all' button. \n\n## Components Used\n- Filter\n## Usage\n\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<FilterSummary controller={controller} />\n```\n\n### filters\nThe `filters` prop specifies a reference to the filters store array. If no filters prop is passed in, the component will default to using the filters in controller.store. \n\n```jsx\n<FilterSummary filters={controller.store.filters} />\n```\n\n### title\nThe `title` prop specifies the title of the filter summary wrapper. The default is `'Current Filters'`.\n\n```jsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} />\n```\n\n### hideTitle\nThe `hideTitle` prop will hide the title element.\n\n```jsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} hideTitle={true}/>\n```\n### filterIcon\nThe `filterIcon` prop is the name of the icon to render for each filter. \n\n```jsx\n<FilterSummary filters={controller.store.filters} filterIcon={'close-thin'} />\n```\n\n### clearAllIcon\nThe `clearAllIcon` prop is the name of the icon to render for the 'clear all' button. \n\n```jsx\n<FilterSummary filters={controller.store.filters} clearAllIcon={'close-thin'} />\n```\n\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel` of the `<Filter />` sub-component.\n\n```jsx\n<FilterSummary filters={controller.store.filters} separator={': '} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop prevents the filter label (selected facet name) from displaying. Only the value selected will be displayed. Use of this prop will nullify the `separator` prop.\n\n```jsx\n<FilterSummary filters={controller.store.filters} hideFacetLabel={true} />\n```\n\n### clearAllLabel\nThe `clearAllLabel` prop is the 'clear all' button text. This is passed to the `<Filter />` sub-component `valueLabel` prop. The default value is `'Clear All'`.\n\n```jsx\n<FilterSummary filters={controller.store.filters} clearAllLabel={'Clear All'} />\n```\n\n### hideClearAll\nThe `hideClearAll` prop prevents the 'clear all' button from rendering.\n\n```jsx\n<FilterSummary filters={controller.store.filters} hideClearAll={true} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when any of the selected filters are clicked.\n\n```jsx\n<FilterSummary filters={controller.store.filters} onClick={(e, filter) => {console.log(e, filter)}} />\n```\n\n#### onClearAllClick\nThe `onClearAllClick` prop allows for a custom callback function for when the 'clear all' button is clicked.\n\n```jsx\n<FilterSummary filters={controller.store.filters} onClearAllClick={(e) => {console.log(e)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						controller: { description: 'Controller reference', table: { type: { summary: 'Controller object' } }, control: { type: 'none' } },
						filters: { description: 'Filters object', type: { required: !1 }, table: { type: { summary: 'object' } }, control: { type: 'none' } },
						title: {
							defaultValue: 'Current Filters',
							description: 'Filters object',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Current Filters' } },
							control: { type: 'text' },
						},
						hideTitle: { description: 'Hide title', table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } }, control: 'boolean' },
						hideFacetLabel: {
							description: 'Hide filter facet label',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: 'boolean',
						},
						separator: { defaultValue: ':', description: 'Filter delimiter', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						hideClearAll: {
							description: 'Hide filter clear all button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: 'boolean',
						},
						clearAllLabel: {
							defaultValue: 'Clear All',
							description: 'Text to show on clear all filters',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
							control: 'text',
						},
						clearAllIcon: {
							defaultValue: 'close-thin',
							description: 'Icon name',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						filterIcon: {
							defaultValue: 'close-thin',
							description: 'Icon name',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						onClick: {
							description: 'Filter click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						onClearAllClick: {
							description: 'Filter clear click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClearAllClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({
					id: 'FilterSummary',
					globals: {
						siteId: '8uyt2m',
						filters: [
							{ type: 'value', field: 'color_family', value: 'Blue' },
							{ type: 'value', field: 'size', value: 'Small' },
						],
					},
				}),
				Regular = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FilterSummary.r, { ...args, controller });
			Regular.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const noFacetLabel = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(FilterSummary.r, { ...args, controller });
			(noFacetLabel.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(noFacetLabel.args = { hideFacetLabel: !0 });
			const customTitle = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(FilterSummary.r, { ...args, controller });
			(customTitle.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(customTitle.args = { title: 'Selected Filters' }),
				(Regular.parameters = {
					...Regular.parameters,
					docs: {
						...Regular.parameters?.docs,
						source: {
							originalSource:
								'(args: FilterSummaryProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <FilterSummary {...args} controller={controller} />',
							...Regular.parameters?.docs?.source,
						},
					},
				}),
				(noFacetLabel.parameters = {
					...noFacetLabel.parameters,
					docs: {
						...noFacetLabel.parameters?.docs,
						source: {
							originalSource:
								'(args: FilterSummaryProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <FilterSummary {...args} controller={controller} />',
							...noFacetLabel.parameters?.docs?.source,
						},
					},
				}),
				(customTitle.parameters = {
					...customTitle.parameters,
					docs: {
						...customTitle.parameters?.docs,
						source: {
							originalSource:
								'(args: FilterSummaryProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <FilterSummary {...args} controller={controller} />',
							...customTitle.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Regular', 'noFacetLabel', 'customTitle'];
		},
		'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { r: () => FilterSummary });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Molecules_Filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/Filter/Filter.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'.ss__filter-summary__title': { fontSize: '1.2em', padding: '6px 0' },
						'.ss__filter-summary__filters': { margin: '5px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' },
					}),
				FilterSummary = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = {
							title: 'Current Filters',
							clearAllLabel: 'Clear All',
							clearAllIcon: 'close-thin',
							filterIcon: 'close-thin',
							filters: properties.controller?.store?.filters,
							onClearAllClick: () => properties.controller?.urlManager.remove('filter').remove('page').go(),
							separator: ':',
							treePath: globalTreePath,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('filterSummary', globalTheme, defaultProps, properties),
						{
							filters,
							title,
							filterIcon,
							clearAllIcon,
							separator,
							hideFacetLabel,
							hideTitle,
							clearAllLabel,
							hideClearAll,
							onClick,
							onClearAllClick,
							disableStyles,
							className,
							internalClassName,
							treePath,
						} = props,
						subProps_filter = {
							name: 'filter',
							internalClassName: 'ss__filter-summary__filter',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, separator, hideFacetLabel, icon: filterIcon }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = { title: { value: title }, clearAllLabel: { value: clearAllLabel } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { filters });
					return filters?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__filter-summary', className, internalClassName),
									children: [
										!hideTitle &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
												className: 'ss__filter-summary__title',
												...mergedLang.title?.all,
											}),
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
											className: 'ss__filter-summary__filters',
											children: [
												filters.map((filter) =>
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_Filter__WEBPACK_IMPORTED_MODULE_13__.d, {
														...subProps_filter,
														filter,
														onClick: (e) => onClick && onClick(e, filter),
													})
												),
												!hideClearAll &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_Filter__WEBPACK_IMPORTED_MODULE_13__.d, {
														...subProps_filter,
														name: 'clear-all',
														icon: clearAllIcon,
														internalClassName: `${subProps_filter?.internalClassName} ss__filter-summary__clear-all`,
														hideFacetLabel: !0,
														valueLabel: clearAllLabel,
														onClick: (e) => onClearAllClick && onClearAllClick(e),
														lang: { filter: { attributes: { 'aria-label': clearAllLabel } } },
													}),
											],
										}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
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
