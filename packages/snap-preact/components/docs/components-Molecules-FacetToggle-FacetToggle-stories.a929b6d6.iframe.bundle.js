'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4487],
	{
		'./components/src/components/Molecules/FacetToggle/FacetToggle.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetToggle_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetToggle = __webpack_require__('./components/src/components/Molecules/FacetToggle/FacetToggle.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const FacetToggle_stories = {
					title: 'Molecules/FacetToggle',
					component: FacetToggle.a,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# Facet Toggle\n\nRenders a facet option toggle switch. Note this component will only render when used with a facet that contains a single value.\n\n## Sub-components\n- toggle\n\n## Usage\n\n### values\nThe `values` prop specifies facet values to use. Overrides values passed via the facet prop. Note this component will only render when used with a facet that contains a single value.\n\n```jsx\n<FacetToggle values={facet.values} />\n```\n\n## facet\nThe `facet` prop specifies the reference to the facet object in the store. Note this component will only render when used with a facet that contains a single value.\n\n```jsx\n<FacetToggle facet={sizeFacet} />\n```\n\n### label\nThe `label` prop specifies the label to render. \n\n```jsx\n<FacetToggle value={facet.values[0]} label={facet.values[0].label} />\n```\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the toggle is clicked.\n\n```jsx\n<FacetToggle value={facet.values[0]} onClick={(e)=>{console.log(e)}} />\n```\n',
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
						values: {
							description: 'Facet.values store reference',
							type: { required: !0 },
							table: { type: { summary: 'facet values store array' } },
							control: { type: 'none' },
						},
						facet: {
							description: 'Facet store reference',
							type: { required: !1 },
							table: { type: { summary: 'facet store object' } },
							control: { type: 'none' },
						},
						label: { description: 'custom toggle label', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						onClick: {
							description: 'Toggle click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'FacetFacetToggle', globals: { siteId: '8uyt2m' } }),
				Default = (args, { loaded: { controller } }) => {
					const sizeFacet = controller?.store?.facets.filter((facet) => 'on_sale' == facet.field).pop();
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetToggle.a, { label: sizeFacet.label, ...args, values: [sizeFacet.values[0]] });
				};
			(Default.args = {}),
				(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								"(args: FacetToggleProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  const sizeFacet = controller?.store?.facets.filter(facet => facet.field == 'on_sale').pop();\n  return <FacetToggle label={sizeFacet.label} {...args} values={[sizeFacet.values[0]]} />;\n}",
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/Toggle/Toggle.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Toggle });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_toggle = ({ activeColor, inactiveColor: deActiveColor, buttonColor, size }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						alignItems: 'center',
						'&.ss__toggle--disabled': { opacity: '.5', cursor: 'none', pointerEvents: 'none' },
						'& .ss__toggle__switch': {
							position: 'relative',
							display: 'inline-block',
							width: size,
							height: `calc(${size} / 2 + 4px)`,
							margin: '10px',
						},
						'& .ss__toggle__switch input': { opacity: '0', width: '0', height: '0' },
						'& .ss__toggle__slider-box': {
							position: 'absolute',
							cursor: 'pointer',
							top: '0',
							left: '0',
							right: '0',
							bottom: '0',
							backgroundColor: `${deActiveColor}`,
							transition: '.4s',
						},
						'.ss__toggle__slider': {
							position: 'absolute',
							content: "''",
							height: `calc(${size} / 2 - 4px)`,
							width: `calc(${size} / 2 - 4px)`,
							left: '4px',
							bottom: '4px',
							backgroundColor: `${buttonColor}`,
							transition: '.4s',
							zIndex: 1,
						},
						'& .ss__toggle__switch--filtered .ss__toggle__slider-box': { backgroundColor: `${activeColor}` },
						'& .ss__toggle__switch--filtered .ss__toggle__slider-box .ss__toggle__slider': { transform: `translateX(calc(${size} / 2 - 4px))` },
						'& .ss__toggle__slider-box.ss__toggle__slider-box--round': { borderRadius: `calc(${size} * 2)` },
						'& .ss__toggle__slider.ss__toggle__slider--round': { borderRadius: `calc(${size} / 2)` },
					}),
				Toggle = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'toggle',
							globalTheme,
							{ round: !0, size: '60px', activeColor: '#2196F3', inactiveColor: '#ccc', buttonColor: 'white' },
							properties
						),
						{ toggled, round, onClick, label, disabled, disableStyles, className, style, styleScript } = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_toggle(stylingProps), style]);
					const [toggledState, setToggleState] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(toggled || !1),
						defaultLang = {
							toggleSwitch: {
								attributes: { 'aria-label': `currently ${toggledState ? 'selected' : 'not selected'} toggle switch ${label ? `for ${label}` : ''} ` },
							},
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__.u)(lang, { toggledState, label, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__toggle', disabled ? 'ss__toggle--disabled' : '', className),
							children: [
								label && (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('label', { className: 'ss__toggle__label', children: label }),
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									className: 'ss__toggle__switch ' + (!disabled && toggledState ? 'ss__toggle__switch--filtered' : ''),
									onClick: (e) => {
										((e) => {
											onClick && onClick(e, !toggledState), setToggleState(!toggledState);
										})(e);
									},
									ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.i)(e),
									'aria-checked': toggledState,
									...mergedLang.toggleSwitch?.all,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
										className: 'ss__toggle__slider-box ' + (round ? 'ss__toggle__slider-box--round' : ''),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
											className: 'ss__toggle__slider ' + (round ? 'ss__toggle__slider--round' : ''),
										}),
									}),
								}),
							],
						}),
					});
				});
		},
		'./components/src/components/Molecules/FacetToggle/FacetToggle.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => FacetToggle });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Atoms/Toggle/Toggle.tsx');
			const CSS_toggle = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				FacetToggle = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)();
					let value;
					properties.values && 1 == properties.values.length
						? (value = properties.values[0])
						: properties.facet && 1 == properties.facet.values.length && (value = properties.facet.values[0]);
					const defaultProps = { label: value?.label },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('facetToggle', globalTheme, defaultProps, properties),
						{ label, onClick, disableStyles, className, style, styleScript, treePath } = props,
						subProps_Toggle = {
							...globalTheme?.components?.toggle,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_toggle(stylingProps), style]);
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-toggle', className),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Atoms_Toggle__WEBPACK_IMPORTED_MODULE_9__.l, {
										...subProps_Toggle,
										label,
										onClick: (e, toggled) => {
											((e, toggled) => {
												value?.url?.link?.onClick(e), onClick && onClick(e, toggled);
											})(e, toggled);
										},
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
	},
]);
