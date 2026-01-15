'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7383],
	{
		'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetGridOptions_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetGridOptions = __webpack_require__('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const FacetGridOptions_stories = {
					title: 'Molecules/FacetGridOptions',
					component: FacetGridOptions.S,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```jsx\nimport { FacetGridOptions } from '@searchspring/snap-preact-components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```jsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```jsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```jsx\n<Autocomplete>\n\t...\n\t<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n\t...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```typescript\nconst valueProps = {\n\tonMouseEnter: (e) => {\n\t\tclearTimeout(delayTimeout);\n\t\tdelayTimeout = setTimeout(() => {\n\t\t\te.target.focus();\n\t\t}, delayTime);\n\t},\n\tonMouseLeave: () => {\n\t\tclearTimeout(delayTimeout);\n\t},\n}\n```\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '500px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						values: {
							description: 'Facet.values store reference',
							type: { required: !1 },
							table: { type: { summary: 'facet values store array' } },
							control: { type: 'none' },
						},
						facet: {
							description: 'Facet store reference',
							type: { required: !1 },
							table: { type: { summary: 'facet store object' } },
							control: { type: 'none' },
						},
						columns: {
							defaultValue: 4,
							description: 'Number of columns in grid. Not applicable if using horizontal prop',
							table: { type: { summary: 'number' }, defaultValue: { summary: 4 } },
							control: { type: 'number' },
						},
						gridSize: {
							defaultValue: '45px',
							description: 'Size of each grid item. Does not apply if using `columns` prop',
							table: { type: { summary: 'string' }, defaultValue: { summary: '45px' } },
							control: { type: 'text' },
						},
						gapSize: {
							defaultValue: '8px',
							description: 'Gap size between rows and columns',
							table: { type: { summary: 'string' }, defaultValue: { summary: '8px' } },
							control: { type: 'text' },
						},
						horizontal: {
							defaultValue: !1,
							description: 'Render facet options horizontally',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						previewOnFocus: {
							description: 'Invoke facet value preview upon focus',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						valueProps: {
							description: 'Object of facet value props',
							table: { type: { summary: 'object' }, defaultValue: { summary: '{}' } },
							control: { type: 'none' },
						},
						onClick: {
							description: 'Facet option click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
				ObservableFacetGridOptions = (0, es.PA)(({ args, controller }) => {
					const sizeFacet = controller?.store?.facets.filter((facet) => 'color' == facet.field).pop();
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetGridOptions.S, { ...args, values: sizeFacet.values });
				}),
				Default = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableFacetGridOptions, { args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetGridOptionsProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservableFacetGridOptions args={args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { S: () => FacetGridOptions });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_toolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = ({ columns, gapSize, gridSize, theme }) => {
					const variables = theme?.variables,
						backgroundColor = new (color__WEBPACK_IMPORTED_MODULE_4___default())(variables?.colors.primary),
						color = backgroundColor.isDark() ? '#fff' : '#000';
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						display: 'flex',
						flexFlow: 'row wrap',
						gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
						gap: gapSize,
						gridAutoRows: '1fr',
						'& .ss__facet-grid-options__option': {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flex: '0 1 auto',
							border: `1px solid ${backgroundColor.hex() || '#333'}`,
							textAlign: 'center',
							wordBreak: 'break-all',
							boxSizing: 'border-box',
							padding: '1em 0',
							width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
							margin: `0 ${gapSize} ${gapSize} 0`,
							[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
							'&.ss__facet-grid-options__option--filtered': { background: backgroundColor.hex() || '#ccc', color: color || '#333' },
							'&:hover:not(.ss__facet-grid-options__option--filtered)': {
								cursor: 'pointer',
								background: backgroundColor.hex() || '#f8f8f8',
								color: color || '#333',
							},
							'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
						},
						'@supports (display: grid)': {
							display: 'grid',
							'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
							'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
							'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
						},
					});
				},
				FacetGridOptions = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('facetGridOptions', globalTheme, defaultProps, properties),
						{ values, onClick, previewOnFocus, valueProps, facet, horizontal, className, internalClassName } = props;
					horizontal && (props.columns = 0);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						facetValues = values || facet?.refinedValues;
					return facetValues?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-grid-options', className, internalClassName),
									children: facetValues.map((value) => {
										const defaultLang = {
												gridOption: {
													attributes: {
														'aria-label':
															'' +
															(value.filtered
																? `remove selected filter ${facet?.label || ''} - ${value.label}`
																: facet?.label
																? `filter by ${facet?.label} - ${value.label}`
																: `filter by ${value.label}`),
													},
												},
											},
											lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
											mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet, value });
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('a', {
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-grid-options__option', {
												'ss__facet-grid-options__option--filtered': value.filtered,
											}),
											href: value.url?.link?.href,
											...valueProps,
											onClick: (e) => {
												value.url?.link?.onClick(e), onClick && onClick(e);
											},
											...(previewOnFocus ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_13__.l)(() => value?.preview && value.preview()) : {}),
											...mergedLang.gridOption?.all,
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
												className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-grid-options__option__value', {
													'ss__facet-grid-options__option__value--smaller': value.label.length > 3,
												}),
												children: value.label,
											}),
										});
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
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
		'./components/src/toolbox/createHoverProps/createHoverProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => createHoverProps });
			const createHoverProps = (callback, options = { delay: 333, focusElem: !0 }) => {
				let delayTimeout;
				return {
					onMouseEnter: (e) => {
						clearTimeout(delayTimeout),
							(delayTimeout = window.setTimeout(() => {
								options.focusElem && e.target.focus(), callback && callback();
							}, options.delay || 333));
					},
					onMouseLeave: () => {
						clearTimeout(delayTimeout);
					},
				};
			};
		},
	},
]);
