/*! For license information please see components-Atoms-Overlay-Overlay-stories.c454557e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8982],
	{
		'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { FD: () => jsxs, FK: () => Fragment, Y: () => jsx });
			var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/jsx-runtime.mjs'),
				_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				Fragment =
					(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
					__webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js'),
					__webpack_require__('../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'),
					__webpack_require__('../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js'),
					__webpack_require__(
						'../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js'
					),
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FK);
			function jsx(type, props, key) {
				return _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')
					? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y(
							_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E,
							(0, _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props),
							key
					  )
					: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y(type, props, key);
			}
			function jsxs(type, props, key) {
				return _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')
					? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD(
							_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E,
							(0, _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props),
							key
					  )
					: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD(type, props, key);
			}
		},
		'./components/src/components/Atoms/Overlay/Overlay.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Overlay_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Overlay = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Overlay_stories = {
					title: 'Atoms/Overlay',
					component: Overlay.h,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```jsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```jsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```jsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```jsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						active: {
							description: 'Overlay is displayed',
							type: { required: !0 },
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						color: {
							defaultValue: 'rgba(0,0,0,0.8)',
							description: 'Overlay color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
							control: { type: 'color' },
						},
						transitionSpeed: {
							defaultValue: '0.25s',
							description: 'Overlay opening/closing transition speed',
							table: { type: { summary: 'string' }, defaultValue: { summary: '0.25s' } },
							control: { type: 'text' },
						},
						onClick: {
							description: 'Overlay click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Overlay.h, { ...args });
			(Default.args = { active: !0 }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: OverlayProps) => <Overlay {...args} />', ...Default.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/Overlay/Overlay.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { h: () => Overlay });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
				overlay: ({ color, transitionSpeed }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						transition: `background ${transitionSpeed} ease 0s, left 0s ease ${transitionSpeed}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${transitionSpeed} ease, left 0s ease`, background: color, left: '0' },
					}),
			};
			function Overlay(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)(
						'overlay',
						globalTheme,
						{ color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s' },
						properties
					),
					{ active, onClick, disableStyles, className, style, styleScript } = props,
					styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.overlay(stylingProps), style]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_providers__WEBPACK_IMPORTED_MODULE_5__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('div', {
							onClick: (e) => onClick && active && onClick(e),
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__overlay', { 'ss__overlay--active': active }, className),
							...styling,
						}),
					})
				);
			}
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
		'../../node_modules/preact/compat/jsx-runtime.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { FK: () => preact_module.FK, Y: () => e, FD: () => e });
			__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			var preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				o = 0;
			function e(_, e, n, t, f) {
				var l,
					s,
					u = {};
				for (s in e) 'ref' == s ? (l = e[s]) : (u[s] = e[s]);
				var a = {
					type: _,
					props: u,
					key: n,
					ref: l,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: --o,
					__source: f,
					__self: t,
				};
				if ('function' == typeof _ && (l = _.defaultProps)) for (s in l) void 0 === u[s] && (u[s] = l[s]);
				return preact_module.fF.vnode && preact_module.fF.vnode(a), a;
			}
		},
	},
]);
