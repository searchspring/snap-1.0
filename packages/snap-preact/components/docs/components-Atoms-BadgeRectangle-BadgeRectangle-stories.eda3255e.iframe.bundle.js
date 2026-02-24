(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9440],
		{
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx'(l, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => r, __namedExportsOrder: () => g, default: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# BadgeRectangle\n\nRenders a text badge in the shape of a rectangle. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n```jsx\nimport { BadgeRectangle } from '@searchspring/snap-preact-components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```jsx\n<BadgeRectangle value={'30% Off'} />\n```\n\n### color\nThe `color` prop specifies the badge background color.\n\n```jsx\n<BadgeRectangle color={'rgba(255, 255, 255, 0.5)'} value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```jsx\n<BadgeRectangle colorText={'#000000'} value={'30% Off'} />\n```\n\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```jsx\n<BadgeRectangle tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
					m = {
						title: 'Atoms/BadgeRectangle',
						component: c.Z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: d.Z } }, children: a }), (0, t.Y)(n.uY, { story: n.h1 })],
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
							color: {
								description: 'Badge background color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(58, 35, 173, 1)' } },
								control: { type: 'color' },
							},
							colorText: {
								description: 'Badge text color',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#ffffff' } },
								control: { type: 'color' },
							},
							tag: { description: 'Badge location tag', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							...o.F,
						},
					},
					r = (i) => (0, t.Y)(c.Z, { ...i });
				(r.args = { value: '30% Off', color: '#0000FF', colorText: '#FFFFFF' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgeRectangleProps) => <BadgeRectangle {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(l, s, e) {
				'use strict';
				e.d(s, { Z: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					o = e.n(d),
					a = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					m = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts');
				const x = ({ color: p, colorText: u }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: p,
							color: u,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					h = (0, a.PA)((p) => {
						const u = (0, r.u)(),
							v = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, g.LU)() },
							_ = (0, i.v6)('badgeRectangle', u, v, p),
							{ value: f, tag: E, className: b, internalClassName: O } = _,
							B = (0, y.Z)(_, x);
						return f
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										...B,
										className: o()('ss__badge-rectangle', `ss__badge-rectangle--${E}`, b, O),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: f }),
									}),
							  })
							: (0, t.Y)(n.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(l, s, e) {
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
			'./components/src/utilities/storybook.tsx'(l, s, e) {
				'use strict';
				e.d(s, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					d = (o) => {
						const a = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								a.current && o.className?.includes('lang-') && !o.className?.includes(c) && window?.Prism?.highlightElement(a.current);
							}, [o.className, o.children, a]),
							(0, t.Y)('code', { ...o, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(l) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (l.exports = s);
			},
		},
	]);
})();
