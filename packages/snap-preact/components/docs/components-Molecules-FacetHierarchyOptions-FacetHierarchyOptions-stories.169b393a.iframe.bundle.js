'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6719],
	{
		'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetHierarchyOptions_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetHierarchyOptions = __webpack_require__('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				types = __webpack_require__('./components/src/types.ts');
			var paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx');
			const FacetHierarchyOptions_stories = {
					title: 'Molecules/FacetHierarchyOptions',
					component: FacetHierarchyOptions.T,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Facet Hierarchy Options\n\nRenders a list of hierarchy options.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'hierarchy'. Overrides values passed via the facet prop. \n\n```jsx\n<FacetHierarchyOptions values={hierarchyFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```jsx\n<FacetHierarchyOptions facet={hierarchyFacet} />\n```\n\n### hideCount\nThe `hideCount` prop will disable the facet count values.\n\n```jsx\n<FacetHierarchyOptions values={hierarchyFacet.values} hideCount={true} />\n```\n\n### returnIcon\nThe `returnIcon` prop will set the icon to render for the return levels / options.\n\n```jsx\n<FacetHierarchyOptions values={hierarchyFacet.values} returnIcon={'angle-left'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```jsx\n<FacetHierarchyOptions values={hierarchyFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over.\n\n```jsx\n<Autocomplete>\n    ...\n\t<FacetHierarchyOptions values={hierarchyFacet.values} previewOnFocus={true} />\n    ...\n</Autocomplete>\n```\n\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```typescript\nconst valueProps = {\n\tonMouseEnter: (e) => {\n\t\tclearTimeout(delayTimeout);\n\t\tdelayTimeout = setTimeout(() => {\n\t\t\te.target.focus();\n\t\t}, delayTime);\n\t},\n\tonMouseLeave: () => {\n\t\tclearTimeout(delayTimeout);\n\t},\n}\n```\n\n```jsx\n<FacetHierarchyOptions values={hierarchyFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when a facet value is clicked.\n\n```jsx\n<FacetHierarchyOptions values={hierarchyFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						values: {
							description: 'Facet.values store reference',
							type: { required: !1 },
							table: { type: { summary: 'object' } },
							control: { type: 'none' },
						},
						facet: {
							description: 'Facet store reference',
							type: { required: !1 },
							table: { type: { summary: 'facet store object' } },
							control: { type: 'none' },
						},
						returnIcon: {
							description: 'return Icon name',
							table: { type: { summary: 'string' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						hideCount: {
							defaultValue: !1,
							description: 'Hide facet option count',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
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
				snapInstance = snapify.p.search({ id: 'FacetHierarchyOptions', globals: { siteId: '8uyt2m' } }),
				ObservableFacetHierarchyOptions = (0, es.PA)(({ args, controller }) => {
					const hierarchyValues = controller?.store?.facets
						.filter((facet) => facet.display === types.QK.HIERARCHY)
						.shift()
						.values.slice(0, 12);
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetHierarchyOptions.T, { ...args, values: hierarchyValues });
				}),
				Default = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableFacetHierarchyOptions, { args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetHierarchyOptionsProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservableFacetHierarchyOptions args={args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { T: () => FacetHierarchyOptions });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_toolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const defaultStyles = ({ theme, horizontal, returnIcon }) =>
					horizontal
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'flex',
								flexWrap: 'wrap',
								'& .ss__facet-hierarchy-options__option': {
									margin: '0 5px 5px 0',
									padding: '6px',
									textDecoration: 'none',
									flex: '0 1 auto',
									'&:hover': { cursor: 'pointer' },
									'&.ss__facet-hierarchy-options__option--filtered': {
										fontWeight: 'bold',
										color: theme?.variables?.colors?.primary,
										marginRight: '2em',
										'&:hover': { cursor: 'default', background: 'unset' },
									},
									'&.ss__facet-hierarchy-options__option--return': {
										'.ss__icon': { padding: '0 0 0 2px' },
										[returnIcon ? '' : '&:before']: {
											content: '' + (returnIcon ? '""' : "'\\0000ab'"),
											padding: '0 2px 0 0',
											color: theme?.variables?.colors?.primary,
										},
									},
									'& .ss__facet-hierarchy-options__option__value': {
										'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
									},
								},
						  })
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								'& .ss__facet-hierarchy-options__option': {
									display: 'flex',
									padding: '6px 0',
									textDecoration: 'none',
									alignItems: 'center',
									'&:hover': { cursor: 'pointer' },
									'&.ss__facet-hierarchy-options__option--filtered': {
										fontWeight: 'bold',
										color: theme?.variables?.colors?.primary,
										'&:hover': { cursor: 'default', background: 'unset' },
										'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
									},
									'&.ss__facet-hierarchy-options__option--return': {
										'.ss__icon': { padding: '0 0 0 2px' },
										[returnIcon ? '' : '&:before']: {
											content: '' + (returnIcon ? '""' : "'\\0000ab'"),
											padding: '0 2px 0 0',
											color: theme?.variables?.colors?.primary,
										},
									},
									'& .ss__facet-hierarchy-options__option__value': {
										marginLeft: '8px',
										'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
									},
								},
						  }),
				FacetHierarchyOptions = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetHierarchyOptions', globalTheme, defaultProps, properties),
						{
							values,
							hideCount,
							returnIcon,
							onClick,
							previewOnFocus,
							horizontal,
							valueProps,
							facet,
							disableStyles,
							treePath,
							className,
							internalClassName,
						} = props,
						subProps_icon = {
							internalClassName: 'ss__facet-hierarchy-options__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						facetValues = values || facet?.refinedValues;
					return facetValues?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__facet-hierarchy-options',
										{ 'ss__facet-hierarchy-options--horizontal': horizontal },
										className,
										internalClassName
									),
									children: facetValues.map((value) => {
										const defaultLang = {
												hierarchyOption: {
													attributes: {
														'aria-label':
															'' +
															(value.filtered
																? `selected ${value.label}`
																: facet?.label
																? `filter by ${facet?.label} - ${value.label}`
																: `filter by ${value.label}`),
													},
												},
											},
											lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
											mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet, value });
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('a', {
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
												'ss__facet-hierarchy-options__option',
												{ 'ss__facet-hierarchy-options__option--filtered': value.filtered },
												{ 'ss__facet-hierarchy-options__option--return': value.history && !value.filtered }
											),
											href: value.url?.link?.href,
											...valueProps,
											onClick: (e) => {
												value.url?.link?.onClick(e), onClick && onClick(e);
											},
											...(previewOnFocus ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_13__.l)(() => value?.preview && value.preview()) : {}),
											...mergedLang.hierarchyOption?.all,
											children: [
												returnIcon &&
													value.history &&
													!value.filtered &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
														...subProps_icon,
														...('string' == typeof returnIcon ? { icon: returnIcon } : returnIcon),
													}),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													className: 'ss__facet-hierarchy-options__option__value',
													children: [
														value.label,
														!hideCount &&
															value?.count > 0 &&
															!value.filtered &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
																className: 'ss__facet-hierarchy-options__option__value__count',
																children: ['(', value.count, ')'],
															}),
													],
												}),
											],
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
		'./components/src/types.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
