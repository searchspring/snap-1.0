(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8982],
		{
			'./components/src/components/Atoms/Overlay/Overlay.stories.tsx'(m, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => c, __namedExportsOrder: () => u, default: () => v });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts');
				const s =
						"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n```jsx\nimport { Overlay } from '@athoscommerce/snap-preact-components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```jsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```jsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```jsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```jsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
					v = {
						title: 'Atoms/Overlay',
						component: a.h,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(l.oz, { options: { overrides: { code: i.Z } }, children: s }), (0, n.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							active: {
								description: 'Overlay is displayed',
								type: { required: !0 },
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							color: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Overlay color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
								control: { type: 'color' },
							},
							transitionSpeed: {
								defaultValue: '0.25s',
								description: 'Overlay opening/closing transition speed',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '0.25s' } },
								control: { type: 'text' },
							},
							onClick: {
								description: 'Overlay click event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							...r.F,
						},
					},
					c = (p) => (0, n.Y)(a.h, { ...p });
				(c.args = { active: !0 }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: OverlayProps) => <Overlay {...args} />', ...c.parameters?.docs?.source },
						},
					});
				const u = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(m, o, e) {
				'use strict';
				e.d(o, { h: () => f });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					i = e.n(a),
					r = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useA11y.tsx');
				const t = ({ transitionSpeed: d, color: y }) =>
					(0, l.AH)({
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
						h = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, v.LU)() },
						g = (0, c.v6)('overlay', y, h, d),
						{ active: _, onClick: O, disableA11y: b, className: x, internalClassName: D } = g,
						P = (0, u.Z)(g, t);
					return (0, n.Y)(r._, {
						children: (0, n.Y)('div', {
							onClick: (E) => O && _ && O(E),
							ref: (E) => (b ? null : (0, p.iy)(E, _ ? 0 : -1)),
							className: i()('ss__overlay', { 'ss__overlay--active': _ }, x, D),
							...P,
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(m, o, e) {
				'use strict';
				e.d(o, { DH: () => i, aZ: () => a, iy: () => r });
				const n = 9,
					l = 27,
					a = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(s, v, c, u) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = p),
							(t.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					s &&
						!s.attributes?.[a] &&
						(s.setAttribute(a, !0),
						s.setAttribute('tabIndex', `${v || 0}`),
						s.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && s.click();
						}),
						c &&
							s.addEventListener('keydown', function (t) {
								const f = s.querySelectorAll(i),
									d = f[0],
									y = f[f.length - 1];
								if (t.keyCode == l) {
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
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/storybook.tsx'(m, o, e) {
				'use strict';
				e.d(o, { Z: () => i });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					i = (r) => {
						const s = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								s.current && r.className?.includes('lang-') && !r.className?.includes(a) && window?.Prism?.highlightElement(s.current);
							}, [r.className, r.children, s]),
							(0, n.Y)('code', { ...r, ref: s, 'data-prismjs-copy': 'Copy' })
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
