'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[401],
	{
		'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Grid: () => Grid,
					List: () => List,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => RecommendationGrid_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				Result = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				useDisplaySettings = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				RecommendationProfileTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				RecommendationResultTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const CSS_results = ({ columns, gapSize }) =>
					(0, emotion_react_browser_esm.AH)({
						overflow: 'auto',
						maxWidth: '100%',
						maxHeight: '100%',
						'.ss__recommendation-grid__results': {
							display: 'flex',
							flexFlow: 'row wrap',
							gap: gapSize,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							'@supports (display: grid)': { display: 'grid' },
						},
					}),
				RecommendationGrid = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = { results: properties.controller?.store?.results, gapSize: '20px' };
					let props = (0, mergeProps.v6)('recommendationGrid', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, useDisplaySettings.X)(props?.breakpoints || {}),
							theme = cjs_default()(props?.theme || {}, displaySettings?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, title, resultComponent, trim, lazyRender, className, style, theme, styleScript, controller } = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender },
						subProps_result = {
							className: 'ss__recommendation-grid__result',
							...globalTheme?.components?.result,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
						};
					let results = props.results || controller.store.results;
					if (props.columns || props.rows)
						if (props.columns && !props.rows) {
							if (((props.rows = Math.floor(results.length / props.columns)), trim)) {
								const remainder = results.length % props.columns;
								results = results.slice(0, results.length - remainder);
							}
						} else if (props.rows && !props.columns) {
							if (trim) {
								const remainder = results.length % props.rows;
								results = results.slice(0, results.length - remainder);
							}
							props.columns = Math.ceil(results.length / props.rows);
						} else props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = results?.slice(0, props.columns * props.rows));
					else (props.rows = 1), (props.columns = results.length);
					const styling = {},
						stylingProps = { ...props, columns: props.columns, gapSize: props.gapSize, theme };
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_results(stylingProps), style]);
					const [isVisible, setIsVisible] = (0, compat_module.useState)(!1),
						recsRef = (0, hooks_module.li)(null);
					return (
						(!mergedlazyRender?.enabled || (0, useIntersection.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
							setIsVisible(!0),
						results?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										...styling,
										ref: recsRef,
										className: classnames_default()('ss__recommendation-grid', className),
										children: isVisible
											? (0, emotion_react_jsx_runtime_browser_esm.FD)(RecommendationProfileTracker.l, {
													controller,
													children: [
														title &&
															(0, emotion_react_jsx_runtime_browser_esm.Y)('h3', { className: 'ss__recommendation-grid__title', children: title }),
														(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
															className: 'ss__recommendation-grid__results',
															children: results.map((result) =>
																(() => {
																	if (resultComponent && controller) {
																		const ResultComponent = resultComponent;
																		return (0, emotion_react_jsx_runtime_browser_esm.Y)(ResultComponent, { controller, result, theme });
																	}
																	return (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																		result,
																		controller,
																		children: (0, emotion_react_jsx_runtime_browser_esm.Y)(
																			Result.Q,
																			{ ...subProps_result, result, controller },
																			result.id
																		),
																	});
																})()
															),
														}),
													],
											  })
											: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationProfileTracker.l, {
													controller,
													children: results.map((result) =>
														(0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
															controller,
															result,
															children: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
														})
													),
											  }),
									}),
							  })
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
					);
				});
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const RecommendationGrid_stories = {
					title: 'Templates/RecommendationGrid',
					component: RecommendationGrid,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# RecommendationGrid\n\nRenders a List of results utilizing `<Result />` components.\n\n## Sub-components\n- Result\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the recommendation controller.\n\n```jsx\n<RecommendationGrid controller={controller.store.results} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. \n\n```jsx\n<RecommendationGrid results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the title text to render.\n\n```jsx\n<RecommendationGrid results={controller.store.results} title={\'Recommended For You\'} />\n```\n\n### columns\nThe `columns` prop specifies the number of columns to display. \n\n```jsx\n<RecommendationGrid results={controller.store.results} columns={4} />\n```\n\n### rows\nThe `rows` prop specifies the number of rows to display.\n\n```jsx\n<RecommendationGrid results={controller.store.results} rows={2} />\n```\n\n### trim\nThe `trim` prop specifies whether we should trim off excess results in order to have equal rows and columns.\n\n```jsx\n<RecommendationGrid results={controller.store.results} rows={3} trim={true} />\n```\n\n### gapSize\nThe `gapSize` prop specifies the gap size between each result.\n\n```jsx\n<RecommendationGrid results={controller.store.results} gapSize={\'10px\'} />\n```\n\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `"10%"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n\tenabled: true,\n\toffset: "20px" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationGrid results={controller.store.results} lazyRender={ customLazyRenderProps } />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the `<Result />` component.\n\nEach entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)\n\nTypically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.\n\n\nDefault Results `breakpoints` object:\n\n```typescript\nconst breakpoints = {\n\t0: {\n\t\tcolumns: 1,\n\t},\n\t540: {\n\t\tcolumns: 2,\n\t},\n\t768: {\n\t\tcolumns: 3,\n\t},\n\t991: {\n\t\tcolumns: 4,\n\t},\n};\n```\n\n```jsx\n<RecommendationGrid results={controller.store.results} breakpoints={breakpoints} />\n```\n\n### ResultComponent\nThe `ResultCompnent` prop specifies a custom result component to render.\n\n```jsx\n\nconst CustomResult = ({\n\tcontroller \n\tresult\n\ttheme\n}) => {\n\treturn <div>{result.mappings.core?.name}</div>\n}\n\n<RecommendationGrid results={controller.store.results} resultComponent={CustomResult} />\n```',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: {
							description: 'Controller reference',
							table: { type: { summary: 'Controller' } },
							type: { required: !0 },
							control: { type: 'none' },
						},
						title: {
							description: 'Recommendation title',
							table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						results: {
							description: 'Results store reference',
							type: { required: !1 },
							table: { type: { summary: 'Results store object' } },
							control: { type: 'none' },
						},
						columns: { description: 'Number of columns in results grid', table: { type: { summary: 'number' } }, control: { type: 'number' } },
						rows: { description: 'Number of rows in results grid', table: { type: { summary: 'number' } }, control: { type: 'number' } },
						trim: {
							description: 'trim off extra results based on columns and rows?',
							table: { type: { summary: 'boolean' } },
							control: { type: 'boolean' },
						},
						gapSize: {
							defaultValue: '20px',
							description: 'Gap size between rows and columns',
							table: { type: { summary: 'string' }, defaultValue: { summary: '20px' } },
							control: { type: 'text' },
						},
						lazyRender: {
							description: 'Lazy render settings object',
							defaultValue: { enabled: !0, offset: '10%' },
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
							control: { type: 'object' },
						},
						breakpoints: {
							defaultValue: { summary: 'Breakpoint object' },
							description: 'Breakpoints options object',
							table: { type: { summary: 'object' } },
							control: { type: 'none' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: '8uyt2m' } }),
				List = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationGrid, { ...args, controller, results: controller?.store?.results });
			List.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const Grid = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationGrid, { ...args, controller, results: controller?.store?.results });
			(Grid.args = { columns: 4 }),
				(Grid.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(List.parameters = {
					...List.parameters,
					docs: {
						...List.parameters?.docs,
						source: {
							originalSource:
								'(args: RecommendationGridProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: RecommendationController;\n  };\n}) => {\n  return <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />;\n}',
							...List.parameters?.docs?.source,
						},
					},
				}),
				(Grid.parameters = {
					...Grid.parameters,
					docs: {
						...Grid.parameters?.docs,
						source: {
							originalSource:
								'(args: RecommendationGridProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: RecommendationController;\n  };\n}) => {\n  return <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />;\n}',
							...Grid.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['List', 'Grid'];
		},
		'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { l: () => RecommendationProfileTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_RecommendationProfileTracker = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				RecommendationProfileTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const { children, controller, className, style, styleScript, disableStyles } = properties,
						childs = (0, preact__WEBPACK_IMPORTED_MODULE_0__.v2)(children),
						componentRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
					(0, _hooks__WEBPACK_IMPORTED_MODULE_5__.v)(componentRef, '0px') && controller.track.impression(),
						childs.length && controller.track.render();
					const styling = { 'ss-name': properties.name },
						stylingProps = properties;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_RecommendationProfileTracker(stylingProps), style]),
						childs.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation-profile-tracker', className),
									onClick: (e) => controller.track.click(e),
									ref: componentRef,
									...styling,
									children,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { x: () => RecommendationResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
			const CSS_RecommendationResultTracker = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				RecommendationResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const { children, result, track, controller, className, disableStyles, style, styleScript } = properties,
						mergedTrack = { impression: !0, click: !0, ...track },
						resultRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
						resultInViewport = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.v)(resultRef, '0px');
					controller.events.render || controller.log.warn('<RecommendationResultTracker> used without <RecommendationProfileTracker>'),
						controller.track.product.render(result),
						resultInViewport &&
							mergedTrack.impression &&
							(controller.events.impression || controller.track.impression(), controller.track.product.impression(result));
					const styling = { 'ss-name': properties.name },
						stylingProps = properties;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_RecommendationResultTracker(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-result-tracker', className),
							onClick: (e) => mergedTrack.click && controller.track.product.click(e, result),
							ref: resultRef,
							...styling,
							children,
						})
					);
				});
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { X: () => useDisplaySettings });
			var hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const debounce = (func, timeout = 200) => {
				let timer;
				return (...args) => {
					clearTimeout(timer),
						(timer = window.setTimeout(() => {
							func.apply(void 0, args);
						}, timeout));
				};
			};
			var dist = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, hooks_module.li)(value),
					signalRef = (0, hooks_module.li)(0);
				return (
					(0, dist.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, hooks_module.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, hooks_module.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = debounce(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, hooks_module.vJ)(() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)), []),
					(function useDeepCompareEffect(callback, dependencies) {
						return (0, hooks_module.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
					})(() => {
						setDisplaySettings(getDisplaySettings(breakpointsObj)), resetResizeListener();
					}, [breakpointsObj]),
					displaySettings
				);
			}
			const getDisplaySettings = (breakpoints) => {
				let breakpointsSettings;
				const currentScreenWidth = window.innerWidth,
					sortedList = Object.keys(breakpoints)
						.map((str) => +str)
						.sort((a, b) => a - b)
						.map((vp) => ({ [vp]: breakpoints[vp] }));
				if (sortedList.length) {
					for (let i = 0; i < sortedList.length; i++) {
						const entry = sortedList[i],
							breakpoint = parseInt(Object.keys(entry)[0]);
						if (i + 1 === sortedList.length || (0 === i && currentScreenWidth < breakpoint)) {
							breakpointsSettings = sortedList[i][breakpoint];
							break;
						}
						{
							const nextBreakpoint = parseInt(Object.keys(sortedList[i + 1])[0]);
							if (currentScreenWidth >= breakpoint && currentScreenWidth < nextBreakpoint) {
								breakpointsSettings = sortedList[i][breakpoint];
								break;
							}
						}
					}
					return breakpointsSettings;
				}
				return breakpointsSettings;
			};
		},
		'./components/src/hooks/useIntersection.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersection });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersection = (ref, rootMargin = '0px', fireOnce = !1) => {
				const [isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const observer = new IntersectionObserver(
							([entry]) => {
								setIntersecting(entry.isIntersecting), fireOnce && entry.isIntersecting && observer.unobserve(ref.current);
							},
							{ rootMargin }
						);
						return (
							ref.current && observer.observe(ref.current),
							() => {
								observer.unobserve(ref.current);
							}
						);
					}, []),
					isIntersecting
				);
			};
		},
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function mergeProps(componentType, globalTheme, defaultProps, props) {
				const theme = props.theme,
					componentName = props?.name;
				let treePath = props.treePath ?? '',
					mergedProps = { ...defaultProps };
				if (globalTheme?.name) {
					mergedProps = { ...mergedProps, ...props };
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps));
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps)),
						(treePath += `${treePath ? ' ' : ''}${componentType}` + (componentName?.match(/^[A-Z,a-z]+$/) ? `.${componentName}` : ''));
					const applicableSelectors = (function filterSelectors(themeComponents, treePath) {
						const selectors = Object.keys(themeComponents),
							paths = treePath.split(' '),
							componentTypeAndName = paths.splice(-1).pop() ?? '',
							[componentType, componentName] = componentTypeAndName.split('.'),
							mappedSplitTreePath = paths.map((path) => {
								const [type, name] = path.split('.');
								return { type, name, path };
							});
						return selectors
							.filter((key) => key.endsWith(componentType) || key.endsWith(`${componentType}.${componentName}`))
							.filter((selector) => {
								const split = selector.split(' ').slice(0, -1);
								if (0 == split.length) return !0;
								for (let s = 0; s < split.length; s++) {
									let prevIndex = -1;
									const value = split[s];
									for (let i = -1 == prevIndex ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
										const pathValue = mappedSplitTreePath[i];
										if (value === pathValue.path || value === pathValue.type) {
											prevIndex = s;
											break;
										}
									}
									if (-1 == prevIndex) return !1;
								}
								return !0;
							});
					})(globalTheme?.components || {}, treePath).sort(sortSelectors);
					applicableSelectors.forEach((selector) => {
						const componentProps = globalTheme.components?.[selector];
						componentProps && (mergedProps = mergeThemeProps(componentProps, mergedProps));
					}),
						(mergedProps = { ...mergedProps, theme: { ...mergedProps.theme, name: globalTheme.name }, treePath }),
						globalTheme.variables && (mergedProps.theme.variables = globalTheme.variables),
						globalTheme.layoutOptions && (mergedProps.theme.layoutOptions = globalTheme.layoutOptions);
				} else {
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps)), (mergedProps = { ...mergedProps, ...props });
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps));
				}
				return mergedProps;
			}
			function mergeThemeProps(componentThemeProps, mergedProps) {
				return componentThemeProps && (mergedProps = { ...mergedProps, ...componentThemeProps }), mergedProps;
			}
			function sortSelectors(a, b) {
				return (
					a
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0) -
					b
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0)
				);
			}
			__webpack_require__.d(__webpack_exports__, { v6: () => mergeProps });
		},
		'../../node_modules/dequal/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { j: () => dequal });
			var has = Object.prototype.hasOwnProperty;
			function find(iter, tar, key) {
				for (key of iter.keys()) if (dequal(key, tar)) return key;
			}
			function dequal(foo, bar) {
				var ctor, len, tmp;
				if (foo === bar) return !0;
				if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
					if (ctor === Date) return foo.getTime() === bar.getTime();
					if (ctor === RegExp) return foo.toString() === bar.toString();
					if (ctor === Array) {
						if ((len = foo.length) === bar.length) for (; len-- && dequal(foo[len], bar[len]); );
						return -1 === len;
					}
					if (ctor === Set) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!bar.has(tmp)) return !1;
						}
						return !0;
					}
					if (ctor === Map) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len[0]) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!dequal(len[1], bar.get(tmp))) return !1;
						}
						return !0;
					}
					if (ctor === ArrayBuffer) (foo = new Uint8Array(foo)), (bar = new Uint8Array(bar));
					else if (ctor === DataView) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo.getInt8(len) === bar.getInt8(len); );
						return -1 === len;
					}
					if (ArrayBuffer.isView(foo)) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo[len] === bar[len]; );
						return -1 === len;
					}
					if (!ctor || 'object' == typeof foo) {
						for (ctor in ((len = 0), foo)) {
							if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return !1;
							if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return !1;
						}
						return Object.keys(bar).length === len;
					}
				}
				return foo != foo && bar != bar;
			}
		},
	},
]);
