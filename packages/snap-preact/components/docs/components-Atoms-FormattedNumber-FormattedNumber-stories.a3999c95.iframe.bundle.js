(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8422],
		{
			'../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/formatNumber.js'(p, a, e) {
				'use strict';
				e.d(a, { Z: () => s });
				function s(r, l) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const o = m(r, t.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(t.decimalPlaces, '0'));
					let n = o.join(t.decimalSeparator);
					return t.symbolAfter ? (n = n + t.symbol) : (n = t.symbol + n), n;
				}
				function m(r, l) {
					const t = r.toString(),
						o = t.indexOf('.'),
						n = o == -1 ? t.length : 1 + o + (l || -1);
					return t.substr(0, n);
				}
			},
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.stories.tsx'(p, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => c, Length: () => d, Temperature: () => u, __namedExportsOrder: () => b, default: () => n });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Formatted Number\n\nUtilizes `formatNumber` from [@searchspring/snap-preact/toolbox](https://searchspring.github.io/snap/#/package-toolbox) to render a `<span>` containing a formatted number.\n\n## Usage\n```jsx\nimport { FormattedNumber } from '@searchspring/snap-preact-components';\n```\n\n### value\nThe required `value` prop specifies the number to be formatted. \n\n```jsx\n<FormattedNumber value={99.99} />\n```\nFormatted output from above properties: `99.990`\n\n### symbol\nThe `symbol` prop specifies an optional symbol to be included. Typically used when adding a unit of measure to a number.\n\n```jsx\n<FormattedNumber value={99} symbol={' \xB0C'} /> \n```\nFormatted output from above properties: `99.000 \xB0C`\n\n### decimalPlaces\nThe `decimalPlaces` prop specifies how many decimal places to format.\n\n```jsx\n<FormattedNumber value={99} decimalPlaces={2} /> \n```\nFormatted output from above properties: `99.00`\n\n### padDecimalPlaces\nThe `padDecimalPlaces` prop pads excess decimal places with zeros.\n\n```jsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={true} /> \n```\nFormatted output from above properties: `99.9900`\n\n```jsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={false} /> \n```\nFormatted output from above properties: `99.99`\n\n### thousandsSeparator\nThe `thousandsSeparator` prop specifies the thousands separator character.\n\n```jsx\n<FormattedNumber value={10999.99} thousandsSeparator={','} /> \n```\nFormatted output from above properties: `10,999.990`\n\n### decimalSeparator\nThe `decimalSeparator` prop specifies the decimal separator character.\n\n```jsx\n<FormattedNumber value={10999.99} decimalSeparator={','} decimalPlaces={2} /> \n```\nFormatted output from above properties: `10999,99`\n\n### symbolAfter\nThe `symbolAfter` prop specifies if the provided `symbol` prop should be placed after the formatted `value`.\n\n```jsx\n<FormattedNumber value={999.999} symbol={'km'} symbolAfter={true} /> \n```\nFormatted output from above properties: `999.999km`",
					n = {
						title: 'Atoms/FormattedNumber',
						component: r.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(m.oz, { options: { overrides: { code: l.Z } }, children: o }), (0, s.Y)(m.uY, { story: m.h1 })],
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
							...t.F,
						},
					},
					c = (i) => (0, s.Y)(r.G, { ...i });
				c.args = { value: 1099.99 };
				const u = (i) => (0, s.Y)(r.G, { ...i });
				u.args = { value: 100, symbol: ' \xB0C', decimalPlaces: 2 };
				const d = (i) => (0, s.Y)(r.G, { ...i });
				(d.args = { value: 100, symbol: ' mm', decimalPlaces: 2 }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...c.parameters?.docs?.source },
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...u.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const b = ['Default', 'Temperature', 'Length'];
			},
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'(p, a, e) {
				'use strict';
				e.d(a, { G: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/formatNumber.js'),
					t = e('../../node_modules/classnames/index.js'),
					o = e.n(t),
					n = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, r.AH)({});
				function h(_) {
					const P = (0, c.u)(),
						v = {
							symbol: '',
							decimalPlaces: 3,
							padDecimalPlaces: !0,
							thousandsSeparator: '',
							decimalSeparator: '.',
							symbolAfter: !0,
							treePath: (0, u.LU)(),
						},
						f = (0, d.v6)('formattedNumber', P, v, _),
						{
							value: g,
							symbol: E,
							decimalPlaces: N,
							padDecimalPlaces: D,
							thousandsSeparator: x,
							decimalSeparator: F,
							symbolAfter: j,
							className: O,
							internalClassName: A,
							raw: T,
						} = f,
						y = l.Z(g, { symbol: E, decimalPlaces: N, padDecimalPlaces: D, thousandsSeparator: x, decimalSeparator: F, symbolAfter: j }),
						M = (0, b.Z)(f, i);
					return T
						? (0, s.Y)(m.FK, { children: y })
						: (0, s.Y)(n._, { children: (0, s.Y)('span', { className: o()('ss__formatted-number', O, A), ...M, children: y }) });
				}
			},
			'./components/src/utilities/componentArgs.ts'(p, a, e) {
				'use strict';
				e.d(a, { F: () => s });
				const s = {
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
			'./components/src/utilities/storybook.tsx'(p, a, e) {
				'use strict';
				e.d(a, { Z: () => l });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					l = (t) => {
						const o = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								o.current && t.className?.includes('lang-') && !t.className?.includes(r) && window?.Prism?.highlightElement(o.current);
							}, [t.className, t.children, o]),
							(0, s.Y)('code', { ...t, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (p.exports = a);
			},
		},
	]);
})();
