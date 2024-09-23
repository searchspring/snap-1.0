/*! For license information please see components-Atoms-FormattedNumber-FormattedNumber-stories.786731d2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8422],
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
		'./components/src/components/Atoms/FormattedNumber/FormattedNumber.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Length: () => Length,
					Temperature: () => Temperature,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FormattedNumber_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				formatNumber = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS_formattedNumber = ({}) => (0, emotion_react_browser_esm.AH)({});
			function FormattedNumber(properties) {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = (0, mergeProps.v6)(
						'formattedNumber',
						globalTheme,
						{ symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !0 },
						properties
					),
					{
						value,
						symbol,
						decimalPlaces,
						padDecimalPlaces,
						thousandsSeparator,
						decimalSeparator,
						symbolAfter,
						disableStyles,
						className,
						style,
						raw,
						styleScript,
					} = props,
					formattedNumber = formatNumber.Z(value, { symbol, decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator, symbolAfter }),
					styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_formattedNumber(stylingProps), style]),
					raw
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, { children: formattedNumber })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
									className: classnames_default()('ss__formatted-number', className),
									...styling,
									children: formattedNumber,
								}),
						  })
				);
			}
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const FormattedNumber_stories = {
					title: 'Atoms/FormattedNumber',
					component: FormattedNumber,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Formatted Number\n\nUtilizes `formatNumber` from [@searchspring/snap-preact/toolbox](https://searchspring.github.io/snap/#/package-toolbox) to render a `<span>` containing a formatted number.\n\n## Usage\n\n### value\nThe required `value` prop specifies the number to be formatted. \n\n```jsx\n<FormattedNumber value={99.99} />\n```\nFormatted output from above properties: `99.990`\n\n### symbol\nThe `symbol` prop specifies an optional symbol to be included. Typically used when adding a unit of measure to a number.\n\n```jsx\n<FormattedNumber value={99} symbol={' °C'} /> \n```\nFormatted output from above properties: `99.000 °C`\n\n### decimalPlaces\nThe `decimalPlaces` prop specifies how many decimal places to format.\n\n```jsx\n<FormattedNumber value={99} decimalPlaces={2} /> \n```\nFormatted output from above properties: `99.00`\n\n### padDecimalPlaces\nThe `padDecimalPlaces` prop pads excess decimal places with zeros.\n\n```jsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={true} /> \n```\nFormatted output from above properties: `99.9900`\n\n```jsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={false} /> \n```\nFormatted output from above properties: `99.99`\n\n### thousandsSeparator\nThe `thousandsSeparator` prop specifies the thousands separator character.\n\n```jsx\n<FormattedNumber value={10999.99} thousandsSeparator={','} /> \n```\nFormatted output from above properties: `10,999.990`\n\n### decimalSeparator\nThe `decimalSeparator` prop specifies the decimal separator character.\n\n```jsx\n<FormattedNumber value={10999.99} decimalSeparator={','} decimalPlaces={2} /> \n```\nFormatted output from above properties: `10999,99`\n\n### symbolAfter\nThe `symbolAfter` prop specifies if the provided `symbol` prop should be placed after the formatted `value`.\n\n```jsx\n<FormattedNumber value={999.999} symbol={'km'} symbolAfter={true} /> \n```\nFormatted output from above properties: `999.999km`",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						value: {
							description: 'Numeric value to be formatted',
							type: { required: !0 },
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						symbol: { defaultValue: '', description: 'Unit symbol', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						symbolAfter: {
							defaultValue: !0,
							description: 'Place unit symbol after the value',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						decimalPlaces: {
							defaultValue: 3,
							description: 'Number of decimal places',
							table: { type: { summary: 'number' }, defaultValue: { summary: 3 } },
							control: { type: 'number' },
						},
						padDecimalPlaces: {
							defaultValue: !0,
							description: 'Pad decimal places with zeros',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						thousandsSeparator: {
							defaultValue: '',
							description: 'Character used to separate thousands',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						decimalSeparator: {
							defaultValue: '.',
							description: 'Character used to separate decimal values',
							table: { type: { summary: 'string' }, defaultValue: { summary: '.' } },
							control: { type: 'text' },
						},
						raw: {
							description: 'Returns raw value without wrapping DOM node',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FormattedNumber, { ...args });
			Default.args = { value: 1099.99 };
			const Temperature = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FormattedNumber, { ...args });
			Temperature.args = { value: 100, symbol: ' °C', decimalPlaces: 2 };
			const Length = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FormattedNumber, { ...args });
			(Length.args = { value: 100, symbol: ' mm', decimalPlaces: 2 }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(Temperature.parameters = {
					...Temperature.parameters,
					docs: {
						...Temperature.parameters?.docs,
						source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...Temperature.parameters?.docs?.source },
					},
				}),
				(Length.parameters = {
					...Length.parameters,
					docs: {
						...Length.parameters?.docs,
						source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...Length.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default', 'Temperature', 'Length'];
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
		'../snap-toolbox/dist/esm/filters/formatNumber.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function formatNumber(input, opts) {
				const options = {
					symbol: '',
					decimalPlaces: 3,
					padDecimalPlaces: !0,
					thousandsSeparator: '',
					decimalSeparator: '.',
					symbolAfter: !1,
					...opts,
				};
				if ('number' != typeof input || Number.isNaN(input)) return;
				const split = (function truncateDecimals(input, digits) {
					const numString = input.toString(),
						decimalPosition = numString.indexOf('.'),
						substrLength = -1 == decimalPosition ? numString.length : 1 + decimalPosition + (digits || -1);
					return numString.substr(0, substrLength);
				})(input, options.decimalPlaces).split('.');
				(split[0] = split[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + options.thousandsSeparator)),
					options.decimalPlaces > 0 && options.padDecimalPlaces && (split[1] = (split[1] || '').padEnd(options.decimalPlaces, '0'));
				let output = split.join(options.decimalSeparator);
				return options.symbolAfter ? (output += options.symbol) : (output = options.symbol + output), output;
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => formatNumber });
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
