(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8826],
		{
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx'(i, r, e) {
				'use strict';
				e.r(r), e.d(r, { SearchPage: () => d, __namedExportsOrder: () => y, categoryPage: () => l, default: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts');
				const m = `# Breadcrumbs

Renders a list of breadcrumbs. 

## Usage
\`\`\`jsx
import { Breadcrumbs } from '@searchspring/snap-preact-components';
\`\`\`

### data
The \`data\` prop specifies an array of breadcrumb objects, or a function that returns an array of breadcrumb objects. The function is passed the controller if available.

#### breadcrumb object 

\`label\` - required, the breadcrumb label
 
\`url\` - optional, the URL of this breadcrumb

\`\`\`js
const breadcrumbs = [
	{ url: '/', label: 'Home' },
	{ url: '/', label: 'Collections' },
	{ url: '/', label: 'Appliances' },
	{ label: 'Fridge' }
]

or 

const breadcrumbsFunction = (controller) => {
	const term = (controller as SearchController).store?.search?.query?.string;
	return [
		{ url: '/', label: 'Home' },
		{ url: '/', label: 'Search' },
		{ label: term }
	]
}

\`\`\`

\`\`\`jsx
<Breadcrumbs separator={'/'} data={breadcrumbs} />
\`\`\`

### separator
The \`separator\` prop spcifies a custom delimiter between each breadcrumb. The default separator is \`'/'\`. This can be a string or a JSX element.

\`\`\`jsx
<Breadcrumbs separator={'>'} data={breadcrumbs} />
\`\`\`


### separatorIcon
The \`separatorIcon\` prop spcifies an icon to render between each breadcrumb. 

\`\`\`jsx
<Breadcrumbs separatorIcon={'angle-right'} data={breadcrumbs} />
\`\`\`
`;
				var _ = e('./components/src/components/Atoms/Icon/paths.tsx');
				const h = {
						title: 'Atoms/Breadcrumbs',
						component: o.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(t.oz, { options: { overrides: { code: a.Z } }, children: m }), (0, s.Y)(t.uY, { story: t.h1 })],
									}),
							},
						},
						argTypes: {
							data: { description: 'Breadcrumb data object', table: { type: { summary: 'object | function' } }, control: { type: 'object' } },
							separator: {
								description: 'Breadcrumb delimiter',
								table: { type: { summary: 'string, JSX, or false' }, defaultValue: { summary: '>' } },
								control: { type: 'text' },
							},
							separatorIcon: {
								description: 'Separator Icon name',
								table: { type: { summary: 'string' } },
								options: [...Object.keys(_.c)],
								control: { type: 'select' },
							},
							...n.F,
						},
					},
					l = (u) => (0, s.Y)(o.B, { ...u });
				l.args = {
					data: [{ url: '/', label: 'Home' }, { url: '/', label: 'Collections' }, { url: '/', label: 'Appliances' }, { label: 'Fridge' }],
					separator: '/',
				};
				const d = (u) => (0, s.Y)(o.B, { ...u });
				(d.args = { data: [{ url: '/', label: 'Home' }, { label: 'Search' }] }),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(args: BreadcrumbsProps) => <Breadcrumbs {...args} />', ...l.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: BreadcrumbsProps) => <Breadcrumbs {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const y = ['categoryPage', 'SearchPage'];
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(i, r, e) {
				'use strict';
				e.d(r, { B: () => v });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					a = e.n(o),
					n = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					m = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const B = () =>
						(0, t.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					v = (0, n.PA)((E) => {
						const O = (0, _.u)(),
							j = {
								separator: '>',
								treePath: (0, h.LU)(),
								data: E.controller
									? (c) => [
											{ label: 'Search' },
											{ label: `Results ${c?.store.search?.query?.string ? `for "${c?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							g = (0, d.v6)('breadcrumbs', O, j, E),
							{ data: f, separator: P, separatorIcon: b, className: x, internalClassName: D, controller: M, disableStyles: A, treePath: C } = g,
							I = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, l.s)({ disableStyles: A }), theme: g?.theme, treePath: C },
							},
							T = (0, y.Z)(g, B);
						let p;
						return (
							typeof f == 'function' ? (p = f(M)) : (p = f),
							p
								? (0, s.Y)(m._, {
										children: (0, s.Y)('div', {
											...T,
											className: a()('ss__breadcrumbs', x, D),
											children: (0, s.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: p
													.map((c) =>
														(0, s.Y)('li', {
															className: 'ss__breadcrumbs__crumbs__crumb',
															children: c.url ? (0, s.Y)('a', { href: c.url, children: c.label }) : c.label,
														})
													)
													.reduce((c, U) => [
														c,
														(0, s.FD)('li', {
															className: 'ss__breadcrumbs__crumbs__separator',
															children: [
																P !== !1 ? P : (0, s.Y)(s.FK, {}),
																b && (0, s.Y)(u.I, { ...I.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
															],
														}),
														U,
													]),
											}),
										}),
								  })
								: (0, s.Y)(s.FK, {})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(i, r, e) {
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
			'./components/src/utilities/defined.ts'(i, r, e) {
				'use strict';
				e.d(r, { s: () => s });
				function s(t) {
					const o = {};
					return (
						Object.keys(t).map((a) => {
							t[a] !== void 0 && (o[a] = t[a]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(i, r, e) {
				'use strict';
				e.d(r, { Z: () => a });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					a = (n) => {
						const m = (0, t.li)(null);
						return (
							(0, t.vJ)(() => {
								m.current && n.className?.includes('lang-') && !n.className?.includes(o) && window?.Prism?.highlightElement(m.current);
							}, [n.className, n.children, m]),
							(0, s.Y)('code', { ...n, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(i) {
				function r(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (i.exports = r);
			},
		},
	]);
})();
