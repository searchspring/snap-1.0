(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7573],
	{
		'./components/src/components/Atoms/Loading/LoadingBar.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Active: () => Active,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => LoadingBar_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
					loadingBar: ({ color, height, backgroundColor, theme, animation }) =>
						(0, emotion_react_browser_esm.AH)({
							height,
							position: 'fixed',
							top: '0',
							left: '0',
							right: '0',
							margin: 'auto',
							transition: 'opacity 0.3s ease',
							opacity: '1',
							visibility: 'visible',
							zIndex: '10000',
							background: backgroundColor || theme?.variables?.colors?.secondary || '#f8f8f8',
							'& .ss__loading-bar__bar': {
								position: 'absolute',
								top: '0',
								left: '-200px',
								height: '100%',
								background: `${color || theme?.variables?.colors?.primary || '#ccc'}`,
								animation: `${animation} 2s linear infinite`,
							},
						}),
					animation: (0, emotion_react_browser_esm.i7)({
						from: { left: '-200px', width: '30%' },
						'50%': { width: '30%' },
						'70%': { width: '70%' },
						'80%': { left: '50%' },
						'95%': { left: '120%' },
						to: { left: '100%' },
					}),
				},
				LoadingBar = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						props = (0, mergeProps.v6)('loadingBar', globalTheme, { height: '5px' }, properties),
						{ active, disableStyles, className, style, styleScript } = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS.loadingBar({ animation: CSS.animation, ...stylingProps }), style]),
						active
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										...styling,
										className: classnames_default()('ss__loading-bar', className),
										children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'ss__loading-bar__bar' }),
									}),
							  })
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
					);
				});
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs');
			const LoadingBar_stories = {
					title: 'Atoms/LoadingBar',
					component: LoadingBar,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Loading Bar\n\nRenders a Loading Bar.\n\n## Usage\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```jsx\n<LoadingBar active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the loading bar.\n\n```jsx\n<LoadingBar active={true} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the loading bar.\n\n```jsx\n<LoadingBar active={true} backgroundColor={'#eeeeee'} />\n```\n\n\n### height\nThe `height` prop specifies the height of the loading bar.\n\n```jsx\n<LoadingBar active={true} height={'10px'} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						active: {
							defaultValue: !1,
							description: 'LoadingBar is displayed',
							type: { required: !0 },
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						color: {
							description: 'Bar color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'theme.colors.primary' } },
							control: { type: 'color' },
						},
						backgroundColor: {
							description: 'Background color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'theme.colors.secondary' } },
							control: { type: 'color' },
						},
						height: {
							defaultValue: '5px',
							description: 'LoadingBar height',
							table: { type: { summary: 'string' }, defaultValue: { summary: '5px' } },
							control: { type: 'text' },
						},
						...componentArgs.F,
					},
				},
				Active = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(LoadingBar, { ...args });
			(Active.args = { active: !0 }),
				(Active.parameters = {
					...Active.parameters,
					docs: {
						...Active.parameters?.docs,
						source: { originalSource: '(args: LoadingBarProps) => <LoadingBar {...args} />', ...Active.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Active'];
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
