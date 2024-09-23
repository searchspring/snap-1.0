'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6175],
	{
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
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
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
												"# Filter Summary\n\nRenders all selected filters including a wrapper with a title and a 'clear all' button. \n\n## Components Used\n- Filter\n## Usage\n\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<FilterSummary controller={controller} />\n```\n\n### filters\nThe `filters` prop specifies a reference to the filters store array. If no filters prop is passed in, the component will default to using the filters in controller.store. \n\n```jsx\n<FilterSummary filters={controller.store.filters} />\n```\n\n### title\nThe `title` prop specifies the title of the filter summary wrapper. The default is `'Current Filters'`.\n\n```jsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} />\n```\n\n### filterIcon\nThe `filterIcon` prop is the name of the icon to render for each filter. \n\n```jsx\n<FilterSummary filters={controller.store.filters} filterIcon={'close-thin'} />\n```\n\n### clearAllIcon\nThe `clearAllIcon` prop is the name of the icon to render for the 'clear all' button. \n\n```jsx\n<FilterSummary filters={controller.store.filters} clearAllIcon={'close-thin'} />\n```\n\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel` of the `<Filter />` sub-component.\n\n```jsx\n<FilterSummary filters={controller.store.filters} separator={': '} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop prevents the filter label (selected facet name) from displaying. Only the value selected will be displayed. Use of this prop will nullify the `separator` prop.\n\n```jsx\n<FilterSummary filters={controller.store.filters} hideFacetLabel={true} />\n```\n\n### clearAllLabel\nThe `clearAllLabel` prop is the 'clear all' button text. This is passed to the `<Filter />` sub-component `valueLabel` prop. The default value is `'Clear All'`.\n\n```jsx\n<FilterSummary filters={controller.store.filters} clearAllLabel={'Clear All'} />\n```\n\n### hideClearAll\nThe `hideClearAll` prop prevents the 'clear all' button from rendering.\n\n```jsx\n<FilterSummary filters={controller.store.filters} hideClearAll={true} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when any of the selected filters are clicked.\n\n```jsx\n<FilterSummary filters={controller.store.filters} onClick={(e, filter) => {console.log(e, filter)}} />\n```\n\n#### onClearAllClick\nThe `onClearAllClick` prop allows for a custom callback function for when the 'clear all' button is clicked.\n\n```jsx\n<FilterSummary filters={controller.store.filters} onClearAllClick={(e) => {console.log(e)}} />\n```\n",
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
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'./components/src/components/Molecules/Filter/Filter.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => Filter });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_filter = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						textDecoration: 'none',
						display: 'inline-flex',
						'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { marginRight: '5px' } },
						'& .ss__filter__label': { marginRight: '5px', fontWeight: 'bold' },
					}),
				Filter = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('filter', globalTheme, {}, properties),
						{
							filter,
							facetLabel,
							valueLabel,
							url,
							hideFacetLabel,
							onClick,
							icon,
							separator,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						link = filter?.url?.link || url?.link,
						value = filter?.value.label || valueLabel,
						label = filter?.facet.label || facetLabel,
						subProps_button = {
							className: 'ss__filter__button',
							...globalTheme?.components?.button,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							icon: 'close-thin',
							className: 'ss__filter__button__icon',
							size: '10px',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles, icon }),
							theme: props.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_filter(stylingProps), style]);
					const defaultLang = { filter: { attributes: { 'aria-label': label ? `remove selected ${label} filter ${value}` : value } } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { label, value });
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__filter', className),
									onClick: (e) => {
										link?.onClick && link.onClick(e), onClick && onClick(e);
									},
									href: link?.href,
									...mergedLang.filter?.all,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_11__.$, {
										...subProps_button,
										disableA11y: !0,
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
											}),
											!hideFacetLabel &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('span', {
													className: 'ss__filter__label',
													children: [
														label,
														separator &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
																className: 'ss__filter__label__separator',
																children: separator,
															}),
													],
												}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { className: 'ss__filter__value', children: value }),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { r: () => FilterSummary });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_Molecules_Filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Molecules/Filter/Filter.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_filterSummary = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						'& .ss__filter-summary__filter': { margin: '5px 10px 5px 0' },
						'& .ss__filter-summary__title': { fontSize: '1.2em' },
					}),
				FilterSummary = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							title: 'Current Filters',
							clearAllLabel: 'Clear All',
							clearAllIcon: 'close-thin',
							filterIcon: 'close-thin',
							filters: properties.controller?.store?.filters,
							onClearAllClick: () => properties.controller?.urlManager.remove('filter').remove('page').go(),
							separator: ':',
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('filterSummary', globalTheme, defaultProps, properties),
						{
							filters,
							title,
							filterIcon,
							clearAllIcon,
							separator,
							hideFacetLabel,
							clearAllLabel,
							hideClearAll,
							onClick,
							onClearAllClick,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						subProps_filter = {
							name: 'filter',
							className: 'ss__filter-summary__filter',
							...globalTheme?.components?.filter,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles, separator, hideFacetLabel, icon: filterIcon }),
							theme: props.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_filterSummary(stylingProps), style]);
					const defaultLang = { title: { value: title } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { filters });
					return filters?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__filter-summary', className),
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
											className: 'ss__filter-summary__title',
											...mergedLang.title?.all,
										}),
										filters.map((filter) =>
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Filter__WEBPACK_IMPORTED_MODULE_11__.d, {
												...subProps_filter,
												filter,
												onClick: (e) => onClick && onClick(e, filter),
											})
										),
										!hideClearAll &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Filter__WEBPACK_IMPORTED_MODULE_11__.d, {
												...subProps_filter,
												name: 'clear-all',
												icon: clearAllIcon,
												className: `${subProps_filter?.className} ss__filter-summary__clear-all`,
												hideFacetLabel: !0,
												valueLabel: clearAllLabel,
												onClick: (e) => onClearAllClick && onClearAllClick(e),
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
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
	},
]);
