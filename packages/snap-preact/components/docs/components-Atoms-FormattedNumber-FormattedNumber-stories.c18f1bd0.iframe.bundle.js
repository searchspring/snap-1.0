(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8422],
	{
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
				FormattedNumber = __webpack_require__('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const FormattedNumber_stories = {
					title: 'Atoms/FormattedNumber',
					component: FormattedNumber.G,
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
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FormattedNumber.G, { ...args });
			Default.args = { value: 1099.99 };
			const Temperature = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FormattedNumber.G, { ...args });
			Temperature.args = { value: 100, symbol: ' °C', decimalPlaces: 2 };
			const Length = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FormattedNumber.G, { ...args });
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
		'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { G: () => FormattedNumber });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({});
			function FormattedNumber(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = {
						symbol: '',
						decimalPlaces: 3,
						padDecimalPlaces: !0,
						thousandsSeparator: '',
						decimalSeparator: '.',
						symbolAfter: !0,
						treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					},
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('formattedNumber', globalTheme, defaultProps, properties),
					{ value, symbol, decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator, symbolAfter, className, raw } = props,
					formattedNumber = _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__.Z(value, {
						symbol,
						decimalPlaces,
						padDecimalPlaces,
						thousandsSeparator,
						decimalSeparator,
						symbolAfter,
					}),
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return raw
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children: formattedNumber })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__formatted-number', className),
								...styling,
								children: formattedNumber,
							}),
					  });
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
