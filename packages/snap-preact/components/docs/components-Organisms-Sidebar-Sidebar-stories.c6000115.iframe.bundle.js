/*! For license information please see components-Organisms-Sidebar-Sidebar-stories.c6000115.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7583],
	{
		'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Sidebar_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Sidebar = __webpack_require__('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Sidebar_stories = {
					title: 'Organisms/Sidebar',
					component: Sidebar.B,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Sidebar controller={controller} />\n```\n\n### hideTitle\nThe `hideTitle` prop will disable the sidebar title from rendering.\n\n```jsx\n<Sidebar controller={controller} hideTitle />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```jsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### hideFacets\nThe `hideFacets` prop will disable the Facets component from rendering.\n\n```jsx\n<Sidebar controller={controller} hideFacets/>\n```\n\n### hidePerPage\nThe `hidePerPage` prop will disable the PerPage component from rendering.\n\n```jsx\n<Sidebar controller={controller} hidePerPage />\n```\n\n### hideSortBy\nThe `hideSortBy` prop will disable the SortBy component from rendering.\n\n```jsx\n<Sidebar controller={controller} hideSortBy />\n```\n### hideFilterSummary\nThe `hideFilterSummary` prop will disable the FilterSummary component from rendering.\n\n```jsx\n<Sidebar controller={controller} hideFilterSummary />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '300px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: {
							description: 'Search controller reference',
							type: { required: !0 },
							table: { type: { summary: 'Search controller object' } },
							control: { type: 'none' },
						},
						titleText: {
							description: 'Text to render in the sidebar title',
							type: { required: !1 },
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
							control: { type: 'text' },
						},
						hideTitle: {
							defaultValue: !1,
							description: 'hides the sidebar title component',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideFacets: {
							defaultValue: !1,
							description: 'hides the sidebar facets component',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hidePerPage: {
							defaultValue: !1,
							description: 'hides the sidebar PerPage component',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideSortBy: {
							defaultValue: !1,
							description: 'hides the sidebar SortBy component',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideFilterSummary: {
							defaultValue: !1,
							description: 'hides the sidebar FilterSummary component',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Sidebar', globals: { siteId: '8uyt2m' } }),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Sidebar.B, { ...args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SidebarProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <Sidebar {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/Filter/Filter.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
						'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
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
									...mergedLang.filter?.attributes,
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
		'./components/src/components/Molecules/SortBy/SortBy.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { g: () => SortBy });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/Select/Select.tsx'),
				_RadioList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/RadioList/RadioList.tsx'),
				_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_sortBy = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
				SortBy = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('sortBy', globalTheme, { label: 'Sort By', type: 'dropdown' }, properties),
						{ sorting, type, controller, hideLabel, disableStyles, className, style, styleScript, treePath } = props;
					let label = props.label;
					const store = sorting || controller?.store?.sorting,
						subProps_Select = {
							...globalTheme?.components?.select,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_RadioList = {
							...globalTheme?.components?.radioList,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_List = {
							multiSelect: !1,
							hideOptionCheckboxes: !0,
							horizontal: !0,
							...globalTheme?.components?.list,
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
						: (styling.css = [CSS_sortBy(stylingProps), style]);
					const defaultLang = { label: { value: label } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {});
					return (
						hideLabel && (delete lang.label.value, (label = void 0)),
						store?.current && 'object' == typeof store?.options && store.options?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
									children: [
										'dropdown' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Select__WEBPACK_IMPORTED_MODULE_10__.l, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__sortby', 'ss__sortby__select', className),
												...subProps_Select,
												label,
												options: store.options,
												selected: store.current,
												onSelect: (e, selection) => {
													selection?.url?.go();
												},
												lang: { buttonLabel: lang.label },
											}),
										'list' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_List__WEBPACK_IMPORTED_MODULE_11__.B, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__sortby', 'ss__sortby__list', className),
												...subProps_List,
												options: store.options,
												selected: store.current,
												titleText: label,
												onSelect: (e, selection) => {
													selection?.url?.go();
												},
												lang: { title: lang.label },
											}),
										'radio' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_RadioList__WEBPACK_IMPORTED_MODULE_12__.q, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__sortby', 'ss__sortby__radioList', className),
												...subProps_RadioList,
												options: store.options,
												selected: store.current,
												titleText: label,
												onSelect: (e, selection) => {
													selection?.url?.go();
												},
												lang: { title: lang.label },
											}),
									],
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Organisms/Facets/Facets.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { J: () => Facets });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_Facet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts');
			const CSS_facets = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Facets = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { facets: properties.controller?.store?.facets };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('facets', globalTheme, defaultProps, properties);
					const { limit, onFacetOptionClick, disableStyles, className, style, styleScript, controller, treePath } = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e), controller?.setFocused && controller?.setFocused();
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(themeDefaults, props?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					props = { ...props, theme };
					let { facets } = props;
					limit && facets && limit > 0 && (facets = facets.slice(0, +limit));
					const subProps_facet = {
							className: 'ss__facets__facet',
							...globalTheme?.components?.facet,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_facets(stylingProps), style]),
						facets && facets?.length > 0
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facets', className),
										...styling,
										children: facets.map((facet) =>
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(
												_Facet__WEBPACK_IMPORTED_MODULE_10__.s,
												{ ...subProps_facet, facet },
												facet.field
											)
										),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
							hideTitle,
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
					const defaultLang = { title: { value: title }, clearAllLabel: { value: clearAllLabel } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { filters });
					return filters?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__filter-summary', className),
									children: [
										!hideTitle &&
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
												lang: { filter: { attributes: { 'aria-label': clearAllLabel } } },
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Sidebar/Sidebar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { B: () => Sidebar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_FilterSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/SortBy/SortBy.tsx'),
				_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/PerPage/PerPage.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Facets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_Sidebar = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				Sidebar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('sidebar', globalTheme, { titleText: 'Filters' }, properties),
						{
							controller,
							hideTitle,
							titleText,
							hideFacets,
							hidePerPage,
							hideSortBy,
							hideFilterSummary,
							disableStyles,
							style,
							styleScript,
							className,
							treePath,
						} = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_Sidebar(stylingProps), style]);
					const subProps_filterSummary = {
							controller,
							...globalTheme?.components?.filterSummary,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_facets = {
							controller,
							...globalTheme?.components?.facets,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_sortBy = {
							controller,
							...globalTheme?.components?.sortBy,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_perPage = {
							controller,
							...globalTheme?.components?.perPage,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						defaultLang = { titleText: { value: titleText } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { controller });
					return controller?.store?.loaded && controller?.store?.pagination?.totalResults > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__sidebar', className),
									children: [
										!hideTitle &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h4', {
												className: 'ss__sidebar__title',
												...mergedLang.titleText?.all,
											}),
										!hideFilterSummary &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_FilterSummary__WEBPACK_IMPORTED_MODULE_11__.r, {
												...subProps_filterSummary,
											}),
										!hideSortBy &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_12__.g, {
												...subProps_sortBy,
											}),
										!hidePerPage &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_13__.F, {
												...subProps_perPage,
											}),
										!hideFacets &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Facets__WEBPACK_IMPORTED_MODULE_14__.J, { ...subProps_facets }),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/types.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ResultsLayout, FacetType, FacetDisplay;
			__webpack_require__.d(__webpack_exports__, { Cw: () => FacetType, QK: () => FacetDisplay, VT: () => ResultsLayout }),
				(function (ResultsLayout) {
					(ResultsLayout.grid = 'grid'), (ResultsLayout.list = 'list');
				})(ResultsLayout || (ResultsLayout = {})),
				(function (FacetType) {
					(FacetType.VALUE = 'value'), (FacetType.RANGE = 'range'), (FacetType.RANGE_BUCKETS = 'range-buckets');
				})(FacetType || (FacetType = {})),
				(function (FacetDisplay) {
					(FacetDisplay.GRID = 'grid'),
						(FacetDisplay.PALETTE = 'palette'),
						(FacetDisplay.LIST = 'list'),
						(FacetDisplay.SLIDER = 'slider'),
						(FacetDisplay.HIERARCHY = 'hierarchy'),
						(FacetDisplay.TOGGLE = 'toggle');
				})(FacetDisplay || (FacetDisplay = {}));
		},
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'function' == typeof input
						? input(props)
						: 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
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
			(0, mobx__WEBPACK_IMPORTED_MODULE_0__.jK)({ useProxies: 'never', isolateGlobalState: !0, enforceActions: 'never' });
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
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
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
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
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
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
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
		'../../node_modules/react-ranger/dist/react-ranger.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { d: () => useRanger });
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			function _extends() {
				return (
					(_extends =
						Object.assign ||
						function (target) {
							for (var i = 1; i < arguments.length; i++) {
								var source = arguments[i];
								for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
							}
							return target;
						}),
					_extends.apply(this, arguments)
				);
			}
			function _objectWithoutPropertiesLoose(source, excluded) {
				if (null == source) return {};
				var key,
					i,
					target = {},
					sourceKeys = Object.keys(source);
				for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
				return target;
			}
			var getBoundingClientRect = function getBoundingClientRect(element) {
					var rect = element.getBoundingClientRect();
					return { left: Math.ceil(rect.left), width: Math.ceil(rect.width) };
				},
				sortNumList = function sortNumList(arr) {
					return [].concat(arr).sort(function (a, b) {
						return Number(a) - Number(b);
					});
				},
				useGetLatest = function useGetLatest(val) {
					var ref = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(val);
					return (
						(ref.current = val),
						react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(function () {
							return ref.current;
						}, [])
					);
				},
				linearInterpolator = {
					getPercentageForValue: function getPercentageForValue(val, min, max) {
						return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
					},
					getValueForClientX: function getValueForClientX(clientX, trackDims, min, max) {
						return (max - min) * ((clientX - trackDims.left) / trackDims.width) + min;
					},
				};
			function useRanger(_ref) {
				var _ref$interpolator = _ref.interpolator,
					interpolator = void 0 === _ref$interpolator ? linearInterpolator : _ref$interpolator,
					_ref$tickSize = _ref.tickSize,
					tickSize = void 0 === _ref$tickSize ? 10 : _ref$tickSize,
					values = _ref.values,
					min = _ref.min,
					max = _ref.max,
					controlledTicks = _ref.ticks,
					steps = _ref.steps,
					onChange = _ref.onChange,
					onDrag = _ref.onDrag,
					stepSize = _ref.stepSize,
					_React$useState = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(null),
					activeHandleIndex = _React$useState[0],
					setActiveHandleIndex = _React$useState[1],
					_React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(),
					tempValues = _React$useState2[0],
					setTempValues = _React$useState2[1],
					getLatest = useGetLatest({ activeHandleIndex, onChange, onDrag, values, tempValues }),
					trackElRef = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(),
					getValueForClientX = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (clientX) {
							var trackDims = getBoundingClientRect(trackElRef.current);
							return interpolator.getValueForClientX(clientX, trackDims, min, max);
						},
						[interpolator, max, min]
					),
					getNextStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val, direction) {
							if (steps) {
								var nextIndex = steps.indexOf(val) + direction;
								return nextIndex >= 0 && nextIndex < steps.length ? steps[nextIndex] : val;
							}
							var nextVal = val + stepSize * direction;
							return nextVal >= min && nextVal <= max ? nextVal : val;
						},
						[max, min, stepSize, steps]
					),
					roundToStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							var left = min,
								right = max;
							if (steps)
								steps.forEach(function (step) {
									step <= val && step > left && (left = step), step >= val && step < right && (right = step);
								});
							else {
								for (0; left < val && left + stepSize < val; ) left += stepSize;
								right = Math.min(left + stepSize, max);
							}
							return val - left < right - val ? left : right;
						},
						[max, min, stepSize, steps]
					),
					handleDrag = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e) {
							var _getLatest = getLatest(),
								activeHandleIndex = _getLatest.activeHandleIndex,
								onDrag = _getLatest.onDrag,
								clientX = 'touchmove' === e.type ? e.changedTouches[0].clientX : e.clientX,
								newValue = getValueForClientX(clientX),
								newRoundedValue = roundToStep(newValue),
								newValues = [].concat(values.slice(0, activeHandleIndex), [newRoundedValue], values.slice(activeHandleIndex + 1));
							onDrag ? onDrag(newValues) : setTempValues(newValues);
						},
						[getLatest, getValueForClientX, roundToStep, values]
					),
					handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e, i) {
							var _getLatest2 = getLatest(),
								values = _getLatest2.values,
								_getLatest2$onChange = _getLatest2.onChange,
								onChange = void 0 === _getLatest2$onChange ? function () {} : _getLatest2$onChange;
							if (37 === e.keyCode || 39 === e.keyCode) {
								setActiveHandleIndex(i);
								var direction = 37 === e.keyCode ? -1 : 1,
									newValue = getNextStep(values[i], direction),
									newValues = [].concat(values.slice(0, i), [newValue], values.slice(i + 1));
								onChange(sortNumList(newValues));
							}
						},
						[getLatest, getNextStep]
					),
					handlePress = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e, i) {
							setActiveHandleIndex(i);
							var handleRelease = function handleRelease(e) {
								var _getLatest3 = getLatest(),
									tempValues = _getLatest3.tempValues,
									values = _getLatest3.values,
									_getLatest3$onChange = _getLatest3.onChange,
									onChange = void 0 === _getLatest3$onChange ? function () {} : _getLatest3$onChange,
									_getLatest3$onDrag = _getLatest3.onDrag,
									onDrag = void 0 === _getLatest3$onDrag ? function () {} : _getLatest3$onDrag;
								document.removeEventListener('mousemove', handleDrag),
									document.removeEventListener('touchmove', handleDrag),
									document.removeEventListener('mouseup', handleRelease),
									document.removeEventListener('touchend', handleRelease);
								var sortedValues = sortNumList(tempValues || values);
								onChange(sortedValues), onDrag(sortedValues), setActiveHandleIndex(null), setTempValues();
							};
							document.addEventListener('mousemove', handleDrag),
								document.addEventListener('touchmove', handleDrag),
								document.addEventListener('mouseup', handleRelease),
								document.addEventListener('touchend', handleRelease);
						},
						[getLatest, handleDrag]
					),
					getPercentageForValue = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							return interpolator.getPercentageForValue(val, min, max);
						},
						[interpolator, max, min]
					),
					ticks = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							var ticks = controlledTicks || steps;
							if (!ticks) {
								for (ticks = [min]; ticks[ticks.length - 1] < max - tickSize; ) ticks.push(ticks[ticks.length - 1] + tickSize);
								ticks.push(max);
							}
							return ticks.map(function (value, i) {
								return {
									value,
									getTickProps: function getTickProps(_temp) {
										var _ref2 = void 0 === _temp ? {} : _temp,
											_ref2$key = _ref2.key,
											key = void 0 === _ref2$key ? i : _ref2$key,
											_ref2$style = _ref2.style,
											style = void 0 === _ref2$style ? {} : _ref2$style,
											rest = _objectWithoutPropertiesLoose(_ref2, ['key', 'style']);
										return _extends(
											{
												key,
												style: _extends(
													{ position: 'absolute', width: 0, left: getPercentageForValue(value) + '%', transform: 'translateX(-50%)' },
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[controlledTicks, getPercentageForValue, max, min, steps, tickSize]
					),
					segments = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							var sortedValues = sortNumList(tempValues || values);
							return [].concat(sortedValues, [max]).map(function (value, i) {
								return {
									value,
									getSegmentProps: function getSegmentProps(_temp2) {
										var _ref3 = void 0 === _temp2 ? {} : _temp2,
											_ref3$key = _ref3.key,
											key = void 0 === _ref3$key ? i : _ref3$key,
											_ref3$style = _ref3.style,
											style = void 0 === _ref3$style ? {} : _ref3$style,
											rest = _objectWithoutPropertiesLoose(_ref3, ['key', 'style']),
											left = getPercentageForValue(sortedValues[i - 1] ? sortedValues[i - 1] : min);
										return _extends(
											{ key, style: _extends({ position: 'absolute', left: left + '%', width: getPercentageForValue(value) - left + '%' }, style) },
											rest
										);
									},
								};
							});
						},
						[getPercentageForValue, max, min, tempValues, values]
					),
					handles = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							return (tempValues || values).map(function (value, i) {
								return {
									value,
									active: i === activeHandleIndex,
									getHandleProps: function getHandleProps(_temp3) {
										var _ref4 = void 0 === _temp3 ? {} : _temp3,
											_ref4$key = _ref4.key,
											key = void 0 === _ref4$key ? i : _ref4$key,
											_onKeyDown = (_ref4.ref, _ref4.innerRef, _ref4.onKeyDown),
											_onMouseDown = _ref4.onMouseDown,
											_onTouchStart = _ref4.onTouchStart,
											_ref4$style = _ref4.style,
											style = void 0 === _ref4$style ? {} : _ref4$style,
											rest = _objectWithoutPropertiesLoose(_ref4, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
										return _extends(
											{
												key,
												onKeyDown: function onKeyDown(e) {
													e.persist(), handleKeyDown(e, i), _onKeyDown && _onKeyDown(e);
												},
												onMouseDown: function onMouseDown(e) {
													e.persist(), handlePress(e, i), _onMouseDown && _onMouseDown(e);
												},
												onTouchStart: function onTouchStart(e) {
													e.persist(), handlePress(e, i), _onTouchStart && _onTouchStart(e);
												},
												role: 'slider',
												'aria-valuemin': min,
												'aria-valuemax': max,
												'aria-valuenow': value,
												style: _extends(
													{
														position: 'absolute',
														top: '50%',
														left: getPercentageForValue(value) + '%',
														zIndex: i === activeHandleIndex ? '1' : '0',
														transform: 'translate(-50%, -50%)',
													},
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[activeHandleIndex, getPercentageForValue, handleKeyDown, handlePress, min, max, tempValues, values]
					);
				return {
					activeHandleIndex,
					getTrackProps: function getTrackProps(_temp4) {
						var _ref5 = void 0 === _temp4 ? {} : _temp4,
							_ref5$style = _ref5.style,
							style = void 0 === _ref5$style ? {} : _ref5$style,
							_ref6 = _ref5.ref,
							rest = _objectWithoutPropertiesLoose(_ref5, ['style', 'ref']);
						return _extends(
							{
								ref: function ref(el) {
									(trackElRef.current = el), _ref6 && ('function' == typeof _ref6 ? _ref6(el) : (_ref6.current = el));
								},
								style: _extends({ position: 'relative', userSelect: 'none' }, style),
							},
							rest
						);
					},
					ticks,
					segments,
					handles,
				};
			}
		},
	},
]);
