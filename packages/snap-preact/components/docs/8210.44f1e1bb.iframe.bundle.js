/*! For license information please see 8210.44f1e1bb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8210],
	{
		'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { q: () => RecommendationGrid });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const CSS_results = ({ columns, gapSize }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
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
				RecommendationGrid = (0, mobx_react__WEBPACK_IMPORTED_MODULE_6__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						defaultProps = { results: properties.controller?.store?.results, gapSize: '20px' };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendationGrid', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, title, resultComponent, trim, lazyRender, className, style, theme, styleScript, controller } = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender },
						subProps_result = {
							className: 'ss__recommendation-grid__result',
							...globalTheme?.components?.result,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
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
					const [isVisible, setIsVisible] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),
						recsRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_4__.li)(null);
					return (
						(!mergedlazyRender?.enabled ||
							(0, _hooks__WEBPACK_IMPORTED_MODULE_11__.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
							setIsVisible(!0),
						results?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_providers__WEBPACK_IMPORTED_MODULE_13__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
										...styling,
										ref: recsRef,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-grid', className),
										children: isVisible
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)(
													_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_14__.l,
													{
														controller,
														children: [
															title &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('h3', {
																	className: 'ss__recommendation-grid__title',
																	children: title,
																}),
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: results.map((result) =>
																	(() => {
																		if (resultComponent && controller) {
																			const ResultComponent = resultComponent;
																			return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(ResultComponent, {
																				controller,
																				result,
																				theme,
																			});
																		}
																		return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
																			_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_15__.x,
																			{
																				result,
																				controller,
																				children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
																					_Molecules_Result__WEBPACK_IMPORTED_MODULE_16__.Q,
																					{ ...subProps_result, result, controller },
																					result.id
																				),
																			}
																		);
																	})()
																),
															}),
														],
													}
											  )
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
													_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_14__.l,
													{
														controller,
														children: results.map((result) =>
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
																_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_15__.x,
																{
																	controller,
																	result,
																	children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
																		_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FK,
																		{}
																	),
																}
															)
														),
													}
											  ),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
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
			'use strict';
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
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { I: () => useDeepCompareEffect, r: () => useDeepCompareMemoize });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(value),
					signalRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(0);
				return (
					(0, dequal__WEBPACK_IMPORTED_MODULE_1__.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDeepCompareEffect(callback, dependencies) {
				return (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Q: () => getDisplaySettings, X: () => useDisplaySettings });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				_useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx');
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.s)(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
						() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)),
						[]
					),
					(0, _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__.I)(() => {
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
			'use strict';
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
			'use strict';
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
						props.lang && (mergedProps.lang = props.lang),
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
		'./src/Templates/Stores/library/components/RecommendationGrid.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					RecommendationGrid: () => _components_src_components_Templates_RecommendationGrid__WEBPACK_IMPORTED_MODULE_0__.q,
				});
			var _components_src_components_Templates_RecommendationGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'
			);
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
		'../../node_modules/dequal/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
