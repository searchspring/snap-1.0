/*! For license information please see components-Atoms-Breadcrumbs-Breadcrumbs-stories.da2cff9a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8826],
	{
		'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					SearchPage: () => SearchPage,
					__namedExportsOrder: () => __namedExportsOrder,
					categoryPage: () => categoryPage,
					default: () => Breadcrumbs_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Breadcrumbs = __webpack_require__('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Breadcrumbs_stories = {
					title: 'Atoms/Breadcrumbs',
					component: Breadcrumbs.B,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Breadcrumbs\n\nRenders a list of breadcrumbs. \n\n## Usage\n\n### data\nThe `data` prop specifies an array of breadcrumb objects. \n\n#### breadcrumb object \n\n`label` - required, the breadcrumb label\n \n`url` - optional, the URL of this breadcrumb\n\n```typescript\nconst breadcrumbs = [\n\t{ url: '/', label: 'Home' },\n\t{ url: '/', label: 'Collections' },\n\t{ url: '/', label: 'Appliances' },\n\t{ label: 'Fridge' }\n]\n```\n\n```jsx\n<Breadcrumbs separator={'/'} data={breadcrumbs} />\n```\n\n### separator\nThe `separator` prop spcifies a custom delimiter between each breadcrumb. The default separator is `'/'`. This can be a string or a JSX element.\n\n```jsx\n<Breadcrumbs separator={'>'} data={breadcrumbs} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						data: {
							description: 'Breadcrumb data object',
							type: { required: !0 },
							table: { type: { summary: 'object' } },
							control: { type: 'object' },
						},
						separator: {
							description: 'Breadcrumb delimiter',
							table: { type: { summary: 'string, JSX' }, defaultValue: { summary: '>' } },
							control: { type: 'text' },
						},
						...componentArgs.F,
					},
				},
				categoryPage = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Breadcrumbs.B, { ...args });
			categoryPage.args = {
				data: [{ url: '/', label: 'Home' }, { url: '/', label: 'Collections' }, { url: '/', label: 'Appliances' }, { label: 'Fridge' }],
				separator: '/',
			};
			const SearchPage = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Breadcrumbs.B, { ...args });
			(SearchPage.args = { data: [{ url: '/', label: 'Home' }, { label: 'Search' }] }),
				(categoryPage.parameters = {
					...categoryPage.parameters,
					docs: {
						...categoryPage.parameters?.docs,
						source: { originalSource: '(args: BreadcrumbsProps) => <Breadcrumbs {...args} />', ...categoryPage.parameters?.docs?.source },
					},
				}),
				(SearchPage.parameters = {
					...SearchPage.parameters,
					docs: {
						...SearchPage.parameters?.docs,
						source: { originalSource: '(args: BreadcrumbsProps) => <Breadcrumbs {...args} />', ...SearchPage.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['categoryPage', 'SearchPage'];
		},
		'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { B: () => Breadcrumbs });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS_breadcrumbs = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						'& .ss__breadcrumbs__crumbs': { padding: '0' },
						'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
					}),
				Breadcrumbs = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('breadcrumbs', globalTheme, { separator: '>' }, properties),
						{ data, separator, disableStyles, className, style, styleScript } = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_breadcrumbs(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__breadcrumbs', className),
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('ul', {
									className: 'ss__breadcrumbs__crumbs',
									children: data
										.map((crumb) =>
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('li', {
												className: 'ss__breadcrumbs__crumbs__crumb',
												children: crumb.url
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('a', { href: crumb.url, children: crumb.label })
													: crumb.label,
											})
										)
										.reduce((prev, curr) => [
											prev,
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('li', {
												className: 'ss__breadcrumbs__crumbs__separator',
												children: separator,
											}),
											curr,
										]),
								}),
							}),
						})
					);
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
	},
]);
