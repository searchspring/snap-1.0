'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1249],
	{
		'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetsHorizontal_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetsHorizontal = __webpack_require__('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx');
			const FacetsHorizontal_stories = {
					title: 'Organisms/FacetsHorizontal',
					component: FacetsHorizontal.b,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# FacetsHorizontal\n\nRenders all facets in a horizontal display. Also incluses MobileSidebar.\n\n## Sub-components\n- Facet\n- Dropdown\n- MobileSidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.\n\n```jsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### alwaysShowFiltersButton\nThe `alwaysShowFiltersButton` prop will always render the button and MobileSidebar.\n\n```jsx\n<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />\n```\n\n### overlay\nThe `overlay` prop will render the facet options in a dropdown overlay.\n\n```jsx\n<FacetsHorizontal controller={controller} overlay={true}/>\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						facets: {
							description: 'Facets store reference',
							type: { required: !1 },
							table: { type: { summary: 'Facets store object' } },
							control: { type: 'none' },
						},
						limit: {
							description: 'Maximum number of facets to display',
							defaultValue: 6,
							type: { required: !1 },
							table: { type: { summary: 'number' }, defaultValue: { summary: 6 } },
							control: { type: 'number' },
						},
						alwaysShowFiltersButton: {
							defaultValue: !1,
							description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						overlay: {
							defaultValue: !1,
							description: 'Render facet options as a dropdown overlay',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						iconExpand: {
							defaultValue: 'angle-down',
							description: 'Icon for when facet is collapsed',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						iconCollapse: {
							defaultValue: 'angle-up',
							description: 'Icon for when facet is expanded',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						controller: {
							description: 'Controller reference',
							type: { required: !1 },
							table: { type: { summary: 'Controller object' } },
							control: { type: 'none' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'FacetsHorizontal', globals: { siteId: '8uyt2m' } }),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetsHorizontal.b, { ...args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetsHorizontalProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <FacetsHorizontal {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { b: () => FacetsHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				_Facet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_MobileSidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const CSS_facets = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						'& .ss__facets-horizontal__header': {
							display: 'flex',
							flexWrap: 'wrap',
							'& .ss__mobile-sidebar': { margin: '0 10px' },
							'& .ss__facets-horizontal__header__dropdown': {
								flex: '0 0 0%',
								margin: '0 0 10px 0',
								boxSizing: 'border-box',
								minWidth: '100px',
								'& .ss__dropdown__button__heading': { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' },
								'&.ss__dropdown--open': {
									'& .ss__dropdown__button__heading': { '& .ss__icon': { fill: theme?.variables?.colors?.active?.accent } },
									'& .ss__dropdown__content': {
										padding: '10px',
										minWidth: '160px',
										width: 'max-content',
										maxHeight: '500px',
										overflowY: 'auto',
										zIndex: 1,
									},
								},
							},
						},
						'&.ss__facets-horizontal--overlay': {
							'& .ss__facets-horizontal__header__dropdown': {
								'&.ss__dropdown--open': {
									'& .ss__dropdown__content': { border: `1px solid ${theme?.variables?.colors?.active?.background || '#ccc'}` },
								},
							},
						},
						'& .ss__facet__show-more-less': { display: 'block', margin: '8px 8px 0 8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
					}),
				FacetsHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { limit: 6, iconCollapse: 'angle-up', iconExpand: 'angle-down', facets: properties.controller?.store?.facets };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetsHorizontal', globalTheme, defaultProps, properties);
					const {
							facets,
							limit,
							overlay,
							alwaysShowFiltersButton,
							onFacetOptionClick,
							iconExpand,
							iconCollapse,
							disableStyles,
							className,
							style,
							styleScript,
							controller,
							treePath,
						} = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e);
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(themeDefaults, props?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					props = { ...props, theme };
					let facetsToShow = facets,
						isOverflowing = !1;
					limit && facets && limit > 0 && ((isOverflowing = facets.length > +limit), (facetsToShow = facets.slice(0, +limit)));
					const subProps = {
							dropdown: {
								className: 'ss__facets-horizontal__header__dropdown',
								disableClickOutside: !0,
								disableOverlay: !0,
								disableA11y: !0,
								...globalTheme?.components?.dropdown,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							icon: {
								className: 'ss__dropdown__button__heading__icon',
								...globalTheme?.components?.icon,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							facet: {
								className: 'ss__facets-horizontal__content__facet',
								justContent: !0,
								horizontal: !0,
								...globalTheme?.components?.facet,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, overlay }),
								theme: props?.theme,
								treePath,
							},
							MobileSidebar: {
								className: 'ss__facets-horizontal__header__mobile-sidebar',
								hidePerPage: !0,
								hideSortBy: !0,
								...globalTheme?.components?.mobileSidebar,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_facets(stylingProps), style]);
					const [selectedFacet, setSelectedFacet] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(void 0),
						innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.L)(() => {
							selectedFacet && setSelectedFacet(void 0);
						});
					return facetsToShow && facetsToShow?.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__facets-horizontal',
										{ 'ss__facets-horizontal--overlay': overlay },
										className
									),
									ref: innerRef,
									...styling,
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											className: 'ss__facets-horizontal__header',
											children: [
												facetsToShow.map((facet) => {
													const defaultLang = {
															dropdownButton: {
																attributes: {
																	'aria-label': `currently ${selectedFacet?.field === facet.field ? 'collapsed' : 'open'} ${
																		facet.field
																	} facet dropdown ${facet.values?.length ? facet.values?.length + ' options' : ''}`,
																},
															},
														},
														lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
														mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { selectedFacet, facet });
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_13__.m, {
														...subProps.dropdown,
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
															subProps.dropdown.className,
															`ss__facets-horizontal__header__dropdown--${facet.display}`,
															`ss__facets-horizontal__header__dropdown--${facet.field}`
														),
														open: selectedFacet?.field === facet.field,
														onClick: () => {
															setSelectedFacet(selectedFacet !== facet ? facet : void 0);
														},
														button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
															className: 'ss__dropdown__button__heading',
															role: 'heading',
															'aria-level': 3,
															...mergedLang.dropdownButton.attributes,
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																	...mergedLang.dropdownButton.value,
																	children: facet?.label,
																}),
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
																	...subProps.icon,
																	...(selectedFacet?.field === facet.field
																		? { ...('string' == typeof iconExpand ? { icon: iconExpand } : iconExpand) }
																		: { ...('string' == typeof iconCollapse ? { icon: iconCollapse } : iconCollapse) }),
																}),
															],
														}),
														disableOverlay: !overlay,
														children: overlay
															? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_15__.s, {
																	...subProps.facet,
																	facet,
															  })
															: void 0,
													});
												}),
												(isOverflowing || alwaysShowFiltersButton) &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_MobileSidebar__WEBPACK_IMPORTED_MODULE_16__.R, {
														controller,
														...subProps.MobileSidebar,
													}),
											],
										}),
										!overlay &&
											selectedFacet &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
													'ss__facets-horizontal__content',
													`ss__facets-horizontal__content--${selectedFacet.display}`,
													`ss__facets-horizontal__content--${selectedFacet.field}`
												),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_15__.s, {
													...subProps.facet,
													facet: facets?.find((facet) => facet.field === selectedFacet.field),
												}),
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
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
