(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8982],
		{
			'./components/src/components/Atoms/Overlay/Overlay.stories.tsx'(m, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => l, __namedExportsOrder: () => u, default: () => v });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const s =
						"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n```jsx\nimport { Overlay } from '@searchspring/snap-preact-components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```jsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```jsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```jsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```jsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
					v = {
						title: 'Atoms/Overlay',
						component: r.h,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(i.oz, { options: { overrides: { code: c.Z } }, children: s }), (0, n.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						argTypes: {
							active: {
								description: 'Overlay is displayed',
								type: { required: !0 },
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							color: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Overlay color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
								control: { type: 'color' },
							},
							transitionSpeed: {
								defaultValue: '0.25s',
								description: 'Overlay opening/closing transition speed',
								table: { type: { summary: 'string' }, defaultValue: { summary: '0.25s' } },
								control: { type: 'text' },
							},
							onClick: {
								description: 'Overlay click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...a.F,
						},
					},
					l = (p) => (0, n.Y)(r.h, { ...p });
				(l.args = { active: !0 }),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(args: OverlayProps) => <Overlay {...args} />', ...l.parameters?.docs?.source },
						},
					});
				const u = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(m, o, e) {
				'use strict';
				e.d(o, { h: () => f });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					c = e.n(r),
					a = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useA11y.tsx');
				const t = ({ transitionSpeed: d, color: y }) =>
					(0, i.AH)({
						transition: `background ${d} ease 0s, left 0s ease ${d}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${d} ease, left 0s ease`, background: y, left: '0' },
					});
				function f(d) {
					const y = (0, s.u)(),
						b = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, v.LU)() },
						O = (0, l.v6)('overlay', y, b, d),
						{ active: _, onClick: h, disableA11y: g, className: x, internalClassName: D } = O,
						C = (0, u.Z)(O, t);
					return (0, n.Y)(a._, {
						children: (0, n.Y)('div', {
							onClick: (E) => h && _ && h(E),
							ref: (E) => (g ? null : (0, p.iy)(E, _ ? 0 : -1)),
							className: c()('ss__overlay', { 'ss__overlay--active': _ }, x, D),
							...C,
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(m, o, e) {
				'use strict';
				e.d(o, { DH: () => c, aZ: () => r, iy: () => a });
				const n = 9,
					i = 27,
					r = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(s, v, l, u) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = p),
							(t.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					s &&
						!s.attributes?.[r] &&
						(s.setAttribute(r, !0),
						s.setAttribute('tabIndex', `${v || 0}`),
						s.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && s.click();
						}),
						l &&
							s.addEventListener('keydown', function (t) {
								const f = s.querySelectorAll(c),
									d = f[0],
									y = f[f.length - 1];
								if (t.keyCode == i) {
									s.focus(), u && u(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === n) &&
									(t.shiftKey
										? document.activeElement === d && (y.focus(), t.preventDefault())
										: document.activeElement === y && (d.focus(), t.preventDefault()));
							}));
				}
			},
			'./components/src/utilities/componentArgs.ts'(m, o, e) {
				'use strict';
				e.d(o, { F: () => n });
				const n = {
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
			'./components/src/utilities/storybook.tsx'(m, o, e) {
				'use strict';
				e.d(o, { Z: () => c });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					c = (a) => {
						const s = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								s.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(s.current);
							}, [a.className, a.children, s]),
							(0, n.Y)('code', { ...a, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(m) {
				function o(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (m.exports = o);
			},
		},
	]);
})();
