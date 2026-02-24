(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[774],
		{
			'../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/formatNumber.js'(p, r, e) {
				'use strict';
				e.d(r, { Z: () => s });
				function s(a, c) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...c };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const o = n(a, t.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(t.decimalPlaces, '0'));
					let l = o.join(t.decimalSeparator);
					return t.symbolAfter ? (l = l + t.symbol) : (l = t.symbol + l), l;
				}
				function n(a, c) {
					const t = a.toString(),
						o = t.indexOf('.'),
						l = o == -1 ? t.length : 1 + o + (c || -1);
					return t.substr(0, l);
				}
			},
			'./components/src/components/Atoms/Price/Price.stories.tsx'(p, r, e) {
				'use strict';
				e.r(r), e.d(r, { CustomCurrency: () => u, Default: () => m, __namedExportsOrder: () => b, default: () => l, lineThrough: () => i });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Price/Price.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Price\n\nUtilizes `currency` from [@searchspring/snap-preact/toolbox](https://searchspring.github.io/snap/#/package-toolbox) to render a `<span>` containing a formatted number.\n\n## Usage\n```jsx\nimport { Price } from '@searchspring/snap-preact-components';\n```\n\nThe `Price` component utilizes all props from the `FormattedNumber` component with the following additional prop:\n\n### lineThrough\nThe `lineThrough` prop will style the formatted number with a line-through.\n\n```jsx\n<Price value={1099.99} symbol=' \u20AC' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />\n```\nFormatted output from above properties: ~~`1.099,99 \u20AC`~~\n",
					l = {
						title: 'Atoms/Price',
						component: a.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(n.oz, { options: { overrides: { code: c.Z } }, children: o }), (0, s.Y)(n.uY, { story: n.h1 })],
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
							...t.F,
						},
					},
					m = (d) => (0, s.Y)(a.g, { ...d });
				m.args = { value: 1099.99 };
				const i = (d) => (0, s.Y)(a.g, { ...d });
				i.args = { value: 1199.99, lineThrough: !0 };
				const u = (d) => (0, s.Y)(a.g, { ...d });
				(u.args = { value: 999.99, symbol: ' \u20AC', thousandsSeparator: '.', decimalSeparator: ',', symbolAfter: !0 }),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...m.parameters?.docs?.source } },
					}),
					(i.parameters = {
						...i.parameters,
						docs: { ...i.parameters?.docs, source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...i.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...u.parameters?.docs?.source } },
					});
				const b = ['Default', 'lineThrough', 'CustomCurrency'];
			},
			'./components/src/components/Atoms/Price/Price.tsx'(p, r, e) {
				'use strict';
				e.d(r, { g: () => N });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/formatNumber.js');
				function c(y, g) {
					const P = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...g };
					return (0, a.Z)(y, P);
				}
				var t = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					l = e.n(o),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/providers/cache.tsx'),
					b = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts');
				const S = ({ theme: y }) =>
					(0, t.AH)({ color: y?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } });
				function N(y) {
					const g = (0, m.u)(),
						C = {
							symbol: '$',
							decimalPlaces: 2,
							padDecimalPlaces: !0,
							thousandsSeparator: ',',
							decimalSeparator: '.',
							symbolAfter: !1,
							lineThrough: !1,
							treePath: (0, i.LU)(),
						},
						v = (0, b.v6)('price', g, C, y),
						{
							lineThrough: A,
							value: x,
							symbol: h,
							decimalPlaces: D,
							padDecimalPlaces: T,
							thousandsSeparator: V,
							decimalSeparator: Y,
							symbolAfter: j,
							raw: E,
							className: O,
							internalClassName: w,
						} = v;
					let f;
					x && (f = c(x, { symbol: '', decimalPlaces: D, padDecimalPlaces: T, thousandsSeparator: V, decimalSeparator: Y }));
					const F = (0, d.Z)(v, S);
					return f
						? E
							? (0, s.Y)(n.FK, { children: f })
							: (0, s.Y)(u._, {
									children: (0, s.FD)('span', {
										...F,
										className: l()('ss__price', { 'ss__price--strike': A }, O, w),
										children: [
											h && !j ? (0, s.Y)('span', { className: 'ss__price__symbol', children: h }) : (0, s.Y)(s.FK, {}),
											(0, s.Y)('span', { className: 'ss__price__value', children: f }),
											h && j ? (0, s.Y)('span', { className: 'ss__price__symbol', children: h }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
						: (0, s.Y)(n.FK, {});
				}
			},
			'./components/src/utilities/componentArgs.ts'(p, r, e) {
				'use strict';
				e.d(r, { F: () => s });
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
			'./components/src/utilities/storybook.tsx'(p, r, e) {
				'use strict';
				e.d(r, { Z: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					c = (t) => {
						const o = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								o.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(o.current);
							}, [t.className, t.children, o]),
							(0, s.Y)('code', { ...t, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function r(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (p.exports = r);
			},
		},
	]);
})();
