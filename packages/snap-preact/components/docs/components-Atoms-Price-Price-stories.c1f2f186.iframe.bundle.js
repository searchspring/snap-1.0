(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[774],
	{
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
				treePath = __webpack_require__('./components/src/providers/treePath.tsx'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				mergeStyles = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ theme }) =>
				(0, emotion_react_browser_esm.AH)({
					color: theme?.variables?.colors?.primary,
					'&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' },
				});
			function Price(properties) {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					defaultProps = {
						symbol: '$',
						decimalPlaces: 2,
						padDecimalPlaces: !0,
						thousandsSeparator: ',',
						decimalSeparator: '.',
						symbolAfter: !1,
						lineThrough: !1,
						treePath: (0, treePath.LU)(),
					},
					props = (0, mergeProps.v6)('price', globalTheme, defaultProps, properties),
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
						className,
						internalClassName,
					} = props;
				let formattedPrice;
				value &&
					(formattedPrice = (function currency(input, opts) {
						const defaultOptions = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...opts };
						return (0, formatNumber.Z)(input, defaultOptions);
					})(value, { symbol: '', decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator }));
				const styling = (0, mergeStyles.Z)(props, defaultStyles);
				return formattedPrice
					? raw
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, { children: formattedPrice })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('span', {
									...styling,
									className: classnames_default()('ss__price', { 'ss__price--strike': lineThrough }, className, internalClassName),
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
					: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
			}
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
	},
]);
