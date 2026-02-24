(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5114],
		{
			'./components/src/components/Atoms/BadgeText/BadgeText.stories.tsx'(c, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => r, __namedExportsOrder: () => p, default: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# BadgeText\n\nRenders a text badge. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n```jsx\nimport { BadgeText } from '@searchspring/snap-preact-components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```jsx\n<BadgeText value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```jsx\n<BadgeText colorText={'#000000'} value={'30% Off'} />\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```jsx\n<BadgeText tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
					m = {
						title: 'Atoms/BadgeText',
						component: d.p,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: l.Z } }, children: a }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [
							(i) => (0, t.Y)('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: (0, t.Y)(i, {}) }),
						],
						argTypes: {
							value: {
								description: 'Badge text contents',
								type: { required: !0 },
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							colorText: {
								description: 'Badge text color',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#000000' } },
								control: { type: 'color' },
							},
							tag: { description: 'Badge location tag', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							...o.F,
						},
					},
					r = (i) => (0, t.Y)(d.p, { ...i });
				(r.args = { value: '30% Off', colorText: '#000000' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgeTextProps) => <BadgeText {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const p = ['Default'];
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(c, s, e) {
				'use strict';
				e.d(s, { p: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					o = e.n(l),
					a = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					m = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts');
				const y = ({ colorText: u }) =>
						(0, d.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: u,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					T = (0, a.PA)((u) => {
						const h = (0, r.u)(),
							v = { colorText: '#000000', treePath: (0, p.LU)() },
							g = (0, i.v6)('badgeText', h, v, u),
							{ value: x, tag: E, className: f, internalClassName: O } = g,
							B = (0, _.Z)(g, y);
						return x
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										...B,
										className: o()('ss__badge-text', `ss__badge-text--${E}`, f, O),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: x }),
									}),
							  })
							: (0, t.Y)(n.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(c, s, e) {
				'use strict';
				e.d(s, { F: () => t });
				const t = {
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
			'./components/src/utilities/storybook.tsx'(c, s, e) {
				'use strict';
				e.d(s, { Z: () => l });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					l = (o) => {
						const a = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								a.current && o.className?.includes('lang-') && !o.className?.includes(d) && window?.Prism?.highlightElement(a.current);
							}, [o.className, o.children, a]),
							(0, t.Y)('code', { ...o, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(c) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (c.exports = s);
			},
		},
	]);
})();
