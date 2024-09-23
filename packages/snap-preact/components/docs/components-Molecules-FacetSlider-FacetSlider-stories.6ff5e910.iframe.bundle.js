(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[5019],
	{
		'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Price: () => Price,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetSlider_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetSlider = __webpack_require__('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const sliderFacetMock = {
					field: 'price',
					label: 'Price',
					type: 'range',
					display: 'slider',
					filtered: !1,
					collapsed: !1,
					range: { low: 0, high: 120 },
					active: { low: 0, high: 120 },
					step: 1,
					formatValue: '$%01.2f',
				},
				FacetSlider_stories = {
					title: 'Molecules/FacetSlider',
					component: FacetSlider.l,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Facet Slider\n\nRenders a slider to be used with any slider facet. Built using [react-ranger](https://github.com/tannerlinsley/react-ranger).\n\n## Usage\n\n### facet\nThe required `facet` prop specifies a reference to a facet within the facets store array. The facet must be a range facet (`display` type of `'slider'`).\n\n```jsx\n<FacetSlider facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} />\n```\n\n### showTicks\nThe `showTicks` prop will render reference ticks below the slider track.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tshowTicks={true}\n/>\n```\n\n### tickSize\nThe `tickSize` prop specifies the unit number between ticks. Must be used with `showTicks` prop.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tshowTicks={true}\n\ttickSize={20}\n/>\n```\n\n### tickTextColor\nThe `tickTextColor` prop specifies ticks text color. Must be used with `showTicks` prop.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tshowTicks={true}\n\ttickTextColor={'#cccccc'}\n/>\n```\n\n### handleColor\nThe `handleColor` prop specifies the handle color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\thandleColor={'#0000ff'}\n/>\n```\n\n### stickyHandleLabel\nThe `stickyHandleLabel` prop specifies if the handle value text should display above each handle.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tstickyHandleLabel={true}\n/>\n```\n\n### handleDraggingColor\nThe `handleDraggingColor` prop specifies the handle color while dragging.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\thandleDraggingColor={'0000ff'}\n/>\n```\n\n### valueTextColor\nThe `valueTextColor` prop specifies the value text color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tvalueTextColor={'#222222'}\n/>\n```\n\n### trackColor\nThe `trackColor` prop specifies the slider track (background) color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\ttrackColor={'#cccccc'}\n/>\n```\n\n### railColor\nThe `railColor` prop specifies the slider rail (foreground) color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\trailColor={'#0000ff'}\n/>\n```\n\n### Events\n\n#### onChange\nThe `onChange` prop allows for a custom callback function for when a slider handle has been changed.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tonChange={(values)=>{ console.log(`low: ${values[0]} high: ${values[1]}`) }}\n/>\n```\n\n#### onDrag\nThe `onDrag` prop allows for a custom callback function for when a slider handle is being dragged.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tonDrag={(values)=>{ console.log(`low: ${values[0]} high: ${values[1]}`) }}\n/>\n```\n",
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
						facet: {
							description: 'Facet store reference',
							type: { required: !0 },
							table: { type: { summary: 'facet store object' } },
							control: { type: 'none' },
						},
						showTicks: {
							description: 'enables/disables ticks',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						tickSize: {
							defaultValue: 20,
							description: 'distance between ticks',
							table: { type: { summary: 'number' }, defaultValue: { summary: 20 } },
							control: { type: 'number' },
						},
						tickTextColor: { description: 'ticks color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						trackColor: { description: 'Slider track color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						railColor: { description: 'Slider rail Color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						valueTextColor: { description: 'Slider value Text Color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						handleColor: { description: 'Slider handle color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						stickyHandleLabel: {
							description: 'enables/disables sticky handle labels',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						handleDraggingColor: {
							description: 'Slider handle color when dragging',
							table: { type: { summary: 'string' } },
							control: { type: 'color' },
						},
						onDrag: {
							description: 'Slider onDrag event handler - fires as the slider is dragged (should not be used to trigger searches)',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onDrag',
						},
						onChange: {
							description: 'Slider onChange event handler - fires after touchEnd (used to trigger search)',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onChange',
						},
						...componentArgs.F,
					},
				},
				Price = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetSlider.l, { ...args, facet: sliderFacetMock });
			Price.parameters = {
				...Price.parameters,
				docs: {
					...Price.parameters?.docs,
					source: {
						originalSource: '(args: FacetSliderProps) => <FacetSlider {...args} facet={(sliderFacetMock as RangeFacet)} />',
						...Price.parameters?.docs?.source,
					},
				},
			};
			const __namedExportsOrder = ['Price'];
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/providers/cache.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => CacheProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const emotionCache = (0, __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js').A)({
					key: 'ss',
					prepend: !0,
				}),
				CacheProvider = (props) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.C, {
						value: props.cache || emotionCache,
						children: props.children,
					});
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
		'../../node_modules/deepmerge/dist/cjs.js': (module) => {
			'use strict';
			var isMergeableObject = function isMergeableObject(value) {
				return (
					(function isNonNullObject(value) {
						return !!value && 'object' == typeof value;
					})(value) &&
					!(function isSpecial(value) {
						var stringValue = Object.prototype.toString.call(value);
						return (
							'[object RegExp]' === stringValue ||
							'[object Date]' === stringValue ||
							(function isReactElement(value) {
								return value.$$typeof === REACT_ELEMENT_TYPE;
							})(value)
						);
					})(value)
				);
			};
			var REACT_ELEMENT_TYPE = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
			function cloneUnlessOtherwiseSpecified(value, options) {
				return !1 !== options.clone && options.isMergeableObject(value)
					? deepmerge(
							(function emptyTarget(val) {
								return Array.isArray(val) ? [] : {};
							})(value),
							value,
							options
					  )
					: value;
			}
			function defaultArrayMerge(target, source, options) {
				return target.concat(source).map(function (element) {
					return cloneUnlessOtherwiseSpecified(element, options);
				});
			}
			function getKeys(target) {
				return Object.keys(target).concat(
					(function getEnumerableOwnPropertySymbols(target) {
						return Object.getOwnPropertySymbols
							? Object.getOwnPropertySymbols(target).filter(function (symbol) {
									return Object.propertyIsEnumerable.call(target, symbol);
							  })
							: [];
					})(target)
				);
			}
			function propertyIsOnObject(object, property) {
				try {
					return property in object;
				} catch (_) {
					return !1;
				}
			}
			function mergeObject(target, source, options) {
				var destination = {};
				return (
					options.isMergeableObject(target) &&
						getKeys(target).forEach(function (key) {
							destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
						}),
					getKeys(source).forEach(function (key) {
						(function propertyIsUnsafe(target, key) {
							return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
						})(target, key) ||
							(propertyIsOnObject(target, key) && options.isMergeableObject(source[key])
								? (destination[key] = (function getMergeFunction(key, options) {
										if (!options.customMerge) return deepmerge;
										var customMerge = options.customMerge(key);
										return 'function' == typeof customMerge ? customMerge : deepmerge;
								  })(key, options)(target[key], source[key], options))
								: (destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)));
					}),
					destination
				);
			}
			function deepmerge(target, source, options) {
				((options = options || {}).arrayMerge = options.arrayMerge || defaultArrayMerge),
					(options.isMergeableObject = options.isMergeableObject || isMergeableObject),
					(options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
				var sourceIsArray = Array.isArray(source);
				return sourceIsArray === Array.isArray(target)
					? sourceIsArray
						? options.arrayMerge(target, source, options)
						: mergeObject(target, source, options)
					: cloneUnlessOtherwiseSpecified(source, options);
			}
			deepmerge.all = function deepmergeAll(array, options) {
				if (!Array.isArray(array)) throw new Error('first argument should be an array');
				return array.reduce(function (prev, next) {
					return deepmerge(prev, next, options);
				}, {});
			};
			var deepmerge_1 = deepmerge;
			module.exports = deepmerge_1;
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
	},
]);
