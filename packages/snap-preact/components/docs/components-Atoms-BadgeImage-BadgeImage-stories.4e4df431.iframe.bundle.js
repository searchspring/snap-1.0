(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8536],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.stories.tsx'(l, t, e) {
				'use strict';
				e.r(t), e.d(t, { Default: () => r, __namedExportsOrder: () => g, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const n =
						"# BadgeImage\n\nRenders an image badge. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n\n```jsx\nimport { BadgeImage } from '@searchspring/snap-preact-components';\n```\n\n### url\nThe required `url` prop specifies the badge image `src` attribute.\n\n```jsx\n<BadgeImage url={'/images/example.png'}/>\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```jsx\n<BadgeImage tag={'30-off-promo'} url={'/images/example.png'}/>\n```\n\n### label\nThe `label` prop specifies the badge image `alt` attribute. \n\n```jsx\n<BadgeImage label={'example badge'} url={'/images/example.png'} />\n```\n",
					c = {
						title: 'Atoms/BadgeImage',
						component: m.z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(a.oz, { options: { overrides: { code: i.Z } }, children: n }), (0, s.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [
							(d) => (0, s.Y)('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: (0, s.Y)(d, {}) }),
						],
						argTypes: {
							tag: { description: 'Badge location tag', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							url: {
								description: 'Badge image url',
								type: { required: !0 },
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							label: {
								description: 'Badge image alt text',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							...o.F,
						},
					},
					r = (d) => (0, s.Y)(m.z, { ...d });
				(r.args = { url: '//cdn.searchspring.net/ajax_search/img/star-badge-new-blue.png', label: 'placeholder badge image' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgeImageProps) => <BadgeImage {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(l, t, e) {
				'use strict';
				e.d(t, { z: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts');
				const h = () => (0, m.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					x = (0, n.PA)((E) => {
						const b = (0, r.u)(),
							B = { treePath: (0, g.LU)() },
							p = (0, d.v6)('badgeImage', b, B, E),
							{ label: P, url: u, tag: _, className: f, internalClassName: v } = p,
							D = (0, y.Z)(p, h);
						return u
							? (0, s.Y)(c._, {
									children: (0, s.Y)('img', {
										...D,
										className: o()('ss__badge-image', `ss__badge-image--${_}`, f, v),
										alt: P || `${_} badge`,
										src: u,
									}),
							  })
							: (0, s.Y)(a.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(l, t, e) {
				'use strict';
				e.d(t, { F: () => s });
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
			'./components/src/utilities/storybook.tsx'(l, t, e) {
				'use strict';
				e.d(t, { Z: () => i });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					i = (o) => {
						const n = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								n.current && o.className?.includes('lang-') && !o.className?.includes(m) && window?.Prism?.highlightElement(n.current);
							}, [o.className, o.children, n]),
							(0, s.Y)('code', { ...o, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(l) {
				function t(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(t.keys = () => []), (t.resolve = t), (t.id = '../../node_modules/memoizerific sync recursive'), (l.exports = t);
			},
		},
	]);
})();
