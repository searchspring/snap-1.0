(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5126],
		{
			'./components/src/components/Atoms/Image/Image.stories.tsx'(g, o, e) {
				'use strict';
				e.r(o),
					e.d(o, { BrokenImg: () => d, Default: () => p, ManualFallBack: () => l, __namedExportsOrder: () => _, default: () => y, onhover: () => u });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts');
				const m =
						"# Image\n\nRenders an Image with fallback and rollover functionality. \n\n## Usage\n```jsx\nimport { Image } from '@searchspring/snap-preact-components';\n```\n\n### src\nThe required `src` prop specifies the URL of the image to render.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### alt\nThe required `alt` prop is the image `alt` attribute.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### fallback\nThe `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />\n```\n\n### hoverSrc\nThe `hoverSrc` prop specifiesthe URL of the alternative image to display on hover.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />\n```\n\n### height\nThe `height` prop is used to set a height on the image. \n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />\n```\n\n### lazy\nThe `lazy` prop is used to disable the lazy loading feature. Enabled by default. \n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />\n```\n\n### Events\n\n#### onMouseOver\nThe `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />\n```\n\n#### onMouseOut\nThe `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />\n```\n\n#### onError\nThe `onError` prop allows for a custom callback function when the image has encountered an error.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />\n```\n\n#### onLoad\nThe `onLoad` prop allows for a custom callback function when the image has finished loading.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />\n```\n\n#### onClick\nThe `onClick` prop allows for a custom callback function when the image is clicked. \n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />\n```\n",
					r = {
						product1: {
							image: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/12_14_reddress11531_thumb_med.jpg',
							name: 'Elevated Classic White Shirt Dress',
						},
						product2: {
							image:
								'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/110_lcp_9262_copyright_loganpotterf_2016_thumb_med.jpg',
							name: 'Cambridge Classic White Shirt Dress',
						},
					},
					y = {
						title: 'Atoms/Image',
						component: a._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(n.oz, { options: { overrides: { code: h.Z } }, children: m }), (0, s.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(t) => (0, s.Y)('div', { style: { maxWidth: '300px' }, children: (0, s.Y)(t, {}) })],
						argTypes: {
							src: { description: 'Image url', type: { required: !0 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
							alt: { description: 'Image alt text', type: { required: !0 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
							height: { description: 'Image height', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							fallback: {
								description: 'Fallback image url',
								defaultValue: a.t,
								table: { type: { summary: 'string' }, defaultValue: { summary: 'string' } },
								control: { type: 'text' },
							},
							lazy: {
								defaultValue: !0,
								description: 'Image lazy loading',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hoverSrc: { description: 'Image onHover url', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							onError: {
								description: 'Image error event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onError',
							},
							onLoad: {
								description: 'Image loaded event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onLoad',
							},
							onClick: {
								description: 'Image click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							onMouseOver: {
								description: 'Image mouse enter event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onMouseOver',
							},
							onMouseOut: {
								description: 'Image mouse exit event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onMouseOut',
							},
							...c.F,
						},
					},
					p = (t) => (0, s.Y)(a._, { ...t, style: { width: '100%' } });
				p.args = { src: r.product1.image, alt: r.product1.name };
				const d = (t) => (0, s.Y)(a._, { ...t, style: { width: '100%' } });
				d.args = { src: 'intentionally_broken_image.jpg', alt: r.product1.name };
				const l = (t) => (0, s.Y)(a._, { ...t, style: { width: '100%' } });
				l.args = { src: 'intentionally_broken_image.jpg', alt: r.product1.name, fallback: r.product1.image };
				const u = (t) => (0, s.Y)(a._, { ...t, style: { width: '100%' } });
				(u.args = { src: r.product1.image, alt: r.product1.name, hoverSrc: r.product2.image }),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...p.parameters?.docs?.source,
							},
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...d.parameters?.docs?.source,
							},
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...l.parameters?.docs?.source,
							},
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default', 'BrokenImg', 'ManualFallBack', 'onhover'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(g, o, e) {
				'use strict';
				e.d(o, { _: () => _, t: () => l });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					c = e.n(h),
					m = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts');
				const l = '//cdn.searchspring.net/ajax_search/img/default_image.png',
					u = ({ height: t }) =>
						(0, a.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: t || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function _(t) {
					const R = (0, r.u)(),
						U = (0, y.LU)(),
						L = { fallback: l, lazy: !0, treePath: U },
						b = (0, p.v6)('image', R, L, t),
						{
							alt: E,
							src: f,
							fallback: x,
							title: T,
							hoverSrc: v,
							lazy: A,
							onMouseOver: O,
							onMouseOut: M,
							onError: j,
							onLoad: k,
							onClick: D,
							className: w,
							internalClassName: B,
						} = b,
						[S, P] = (0, n.J0)(!1),
						[W, C] = (0, n.J0)(!1),
						I = (0, n.li)('');
					(0, n.vJ)(() => {
						I.current = f;
					}),
						I.current && I.current != f && P(!1);
					const z = (0, d.Z)(b, u);
					return (0, s.Y)(m._, {
						children: (0, s.Y)('div', {
							...z,
							className: c()('ss__image', { 'ss__image--hidden': !S }, w, B),
							children: (0, s.Y)('img', {
								src: (W ? v : f) || x,
								alt: E,
								title: T || E,
								loading: A ? 'lazy' : void 0,
								onLoad: (i) => {
									P(!0), k && k(i);
								},
								onClick: (i) => D && D(i),
								onError: (i) => {
									(i.target.src = x || ''), j && j(i);
								},
								onMouseOver: (i) => {
									v && C(!0), O && O(i);
								},
								onMouseOut: (i) => {
									v && C(!1), M && M(i);
								},
							}),
						}),
					});
				}
			},
			'./components/src/utilities/componentArgs.ts'(g, o, e) {
				'use strict';
				e.d(o, { F: () => s });
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
			'./components/src/utilities/storybook.tsx'(g, o, e) {
				'use strict';
				e.d(o, { Z: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					h = (c) => {
						const m = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								m.current && c.className?.includes('lang-') && !c.className?.includes(a) && window?.Prism?.highlightElement(m.current);
							}, [c.className, c.children, m]),
							(0, s.Y)('code', { ...c, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function o(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (g.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Image-Image-stories.6808856d.iframe.bundle.js.map
