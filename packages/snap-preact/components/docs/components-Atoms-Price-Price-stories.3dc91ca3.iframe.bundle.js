/*! For license information please see components-Atoms-Price-Price-stories.3dc91ca3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[774],
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
		'./components/src/components/Atoms/Price/Price.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					CustomCurrency: () => CustomCurrency,
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Price_stories,
					lineThrough: () => lineThrough,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Price = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Price_stories = {
					title: 'Atoms/Price',
					component: Price.g,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Price\n\nUtilizes `currency` from [@searchspring/snap-preact/toolbox](https://searchspring.github.io/snap/#/package-toolbox) to render a `<span>` containing a formatted number.\n\n## Usage\n\nThe `Price` component utilizes all props from the `FormattedNumber` component with the following additional prop:\n\n### lineThrough\nThe `lineThrough` prop will style the formatted number with a line-through.\n\n```jsx\n<Price value={1099.99} symbol=' €' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />\n```\nFormatted output from above properties: ~~`1.099,99 €`~~\n",
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
						symbol: {
							description: 'Currency symbol',
							defaultValue: '$',
							table: { type: { summary: 'string' }, defaultValue: { summary: '$' } },
							control: { type: 'text' },
						},
						symbolAfter: {
							description: 'Place currency symbol after the value',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						decimalPlaces: {
							description: 'Number of decimal places',
							defaultValue: 2,
							table: { type: { summary: 'number' }, defaultValue: { summary: 2 } },
							control: { type: 'number' },
						},
						padDecimalPlaces: {
							description: 'Pad decimal places with zeros',
							defaultValue: !0,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						thousandsSeparator: {
							description: 'Character used to separate thousands',
							defaultValue: ',',
							table: { type: { summary: 'string' }, defaultValue: { summary: ',' } },
							control: { type: 'text' },
						},
						decimalSeparator: {
							description: 'Character used to separate decimal values',
							defaultValue: '.',
							table: { type: { summary: 'string' }, defaultValue: { summary: '.' } },
							control: { type: 'text' },
						},
						lineThrough: {
							description: 'Add line through styling',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
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
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...args });
			Default.args = { value: 1099.99 };
			const lineThrough = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...args });
			lineThrough.args = { value: 1199.99, lineThrough: !0 };
			const CustomCurrency = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...args });
			(CustomCurrency.args = { value: 999.99, symbol: ' €', thousandsSeparator: '.', decimalSeparator: ',', symbolAfter: !0 }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(lineThrough.parameters = {
					...lineThrough.parameters,
					docs: {
						...lineThrough.parameters?.docs,
						source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...lineThrough.parameters?.docs?.source },
					},
				}),
				(CustomCurrency.parameters = {
					...CustomCurrency.parameters,
					docs: {
						...CustomCurrency.parameters?.docs,
						source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...CustomCurrency.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default', 'lineThrough', 'CustomCurrency'];
		},
		'./components/src/components/Atoms/Price/Price.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { g: () => Price });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				formatNumber = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js');
			var emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
				price: ({ theme }) =>
					(0, emotion_react_browser_esm.AH)({
						color: theme?.variables?.colors?.primary,
						'&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' },
					}),
			};
			function Price(properties) {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = (0, mergeProps.v6)(
						'price',
						globalTheme,
						{ symbol: '$', decimalPlaces: 2, padDecimalPlaces: !0, thousandsSeparator: ',', decimalSeparator: '.', symbolAfter: !1, lineThrough: !1 },
						properties
					),
					{
						lineThrough,
						value,
						symbol,
						decimalPlaces,
						padDecimalPlaces,
						thousandsSeparator,
						decimalSeparator,
						symbolAfter,
						raw,
						disableStyles,
						className,
						style,
						styleScript,
					} = props;
				let formattedPrice;
				value &&
					(formattedPrice = (function currency(input, opts) {
						const defaultOptions = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...opts };
						return (0, formatNumber.Z)(input, defaultOptions);
					})(value, { symbol: '', decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator }));
				const styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.price(stylingProps), style]),
					formattedPrice
						? raw
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, { children: formattedPrice })
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.FD)('span', {
										...styling,
										className: classnames_default()('ss__price', { 'ss__price--strike': lineThrough }, className),
										children: [
											symbol && !symbolAfter
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { className: 'ss__price__symbol', children: symbol })
												: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
											(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { className: 'ss__price__value', children: formattedPrice }),
											symbol && symbolAfter
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { className: 'ss__price__symbol', children: symbol })
												: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
										],
									}),
							  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
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
