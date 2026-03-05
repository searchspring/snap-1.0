(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1840],
		{
			'./components/src/components/Atoms/Button/Button.stories.tsx'(b, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => d, Disabled: () => u, Native: () => s, __namedExportsOrder: () => y, default: () => g });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Atoms/Button/Button.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const t = `# Button

Renders a native or custom button.

## Usage
\`\`\`jsx
import { Button } from '@athoscommerce/snap-preact/components';
\`\`\`

### content
The \`content\` prop specifies the button text. This can be a string or a JSX element.

\`\`\`jsx
<Button content={"click me!"} />
\`\`\`
 
Or alternatively as children:

\`\`\`jsx
<Button>click me!</Button>
\`\`\`

### disabled
The \`disabled\` prop will disable the button from being clickable.

\`\`\`jsx
<Button content={"click me!"} disabled />
\`\`\`

### native
The \`native\` prop will use a native html \`<button>\` element.

\`\`\`jsx
<Button content={"click me!"} native />
\`\`\`

### backgroundColor
The \`backgroundColor\` prop specifies the button background color.

\`\`\`jsx
<Button content={"click me!"} backgroundColor={'#eeeeee'} />
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon you wish to add to the button content. Note this currently only supports icons from our list of available icons. (see Icon Component for more details)

\`\`\`jsx
<Button content={"click me!"} icon={'cog'} />
\`\`\`

### borderColor
The \`borderColor\` prop specifies the button border color.

\`\`\`jsx
<Button content={"click me!"} borderColor={'#cccccc'} />
\`\`\`
### color
The \`color\` prop specifies the button text color.

\`\`\`jsx
<Button content={"click me!"} color={'#222222'} />
\`\`\`

### disableA11y
The \`disableA11y\` prop specifies a boolean to disable the autoset ally properties.

\`\`\`jsx
<Button content={"click me!"} disableA11y />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when the button is clicked.

\`\`\`jsx
<Button content={"click me!"} onClick={(e)=>{console.log(e)}} />
\`\`\`
`;
				var a = e('./components/src/components/Atoms/Icon/paths.tsx');
				const g = {
						title: 'Atoms/Button',
						component: n.$,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, o.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							content: {
								description: 'Content to be displayed in button',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							children: {
								description: 'Content to be displayed in button (using children)',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable button',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Button click event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							color: {
								description: 'Button text color',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'color' },
							},
							icon: {
								description: 'Button Icon name',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [...Object.keys(a.c)],
								control: { type: 'select' },
							},
							backgroundColor: {
								description: 'Button background color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#fff' } },
								control: { type: 'color' },
							},
							borderColor: {
								description: 'Button border color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#333' } },
								control: { type: 'color' },
							},
							native: {
								description: 'Render as unstyled native button',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...i.F,
						},
					},
					d = (m) => (0, o.Y)(n.$, { ...m });
				d.args = { content: 'Button' };
				const u = (m) => (0, o.Y)(n.$, { ...m });
				u.args = { content: 'Button', disabled: !0 };
				const s = (m) => (0, o.Y)(n.$, { ...m });
				(s.args = { content: 'Button', native: !0 }),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...d.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...u.parameters?.docs?.source } },
					}),
					(s.parameters = {
						...s.parameters,
						docs: { ...s.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...s.parameters?.docs?.source } },
					});
				const y = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(b, r, e) {
				'use strict';
				e.d(r, { $: () => N });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					c = e.n(n),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useA11y.tsx'),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/hooks/useLang.tsx'),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(U),
					K = e('../../node_modules/color/index.js'),
					S = e.n(K);
				const W = ({ native: B, color: E, backgroundColor: O, borderColor: C, theme: _ }) => {
						const f = new (S())(O || E || _?.variables?.colors?.primary || void 0).lightness(95);
						return B
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: E || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: O || '#fff',
									border: `1px solid ${C || E || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: f.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					N = (0, i.PA)((B) => {
						const E = (0, a.u)(),
							C = { disableA11y: !1, treePath: (0, g.LU)() },
							_ = (0, y.v6)('button', E, C, B),
							{
								content: f,
								children: x,
								disabled: P,
								native: A,
								onClick: M,
								disableA11y: Y,
								disableStyles: F,
								className: $,
								internalClassName: V,
								icon: p,
								lang: L,
								treePath: v,
								style: X,
								styleScript: w,
								themeStyleScript: G,
								...H
							} = _,
							j = { icon: { internalClassName: 'ss__button__icon', ...(0, s.s)({ disableStyles: F }), theme: _?.theme, treePath: v } },
							I = {
								...(0, m.Z)(_, W),
								className: c()('ss__button', { 'ss__button--native': A, 'ss__button--disabled': P }, $, V),
								disabled: P,
								onClick: (T) => !P && M && M(T),
								...H,
							},
							J = { ref: (T) => (0, d.iy)(T) },
							Z = {},
							z = R()(Z, L || {}),
							D = (0, k.u)(z, {});
						return f || x || p || L?.button?.value
							? (0, o.Y)(t._, {
									children: A
										? (0, o.FD)('button', {
												...I,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...D.button?.all,
														children: [(0, u.Y)(f, { treePath: v }), (0, u.Y)(x, { treePath: v })],
													}),
													p && (0, o.Y)(h.I, { ...j.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  })
										: (0, o.FD)('div', {
												...(Y ? {} : J),
												role: 'button',
												'aria-disabled': P,
												...I,
												...D.button?.attributes,
												children: [
													f || x || D.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...D.button?.value,
																children: [(0, u.Y)(f, { treePath: v }), (0, u.Y)(x, { treePath: v })],
														  })
														: void 0,
													p && (0, o.Y)(h.I, { ...j.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, r, e) {
				'use strict';
				e.d(r, { DH: () => c, aZ: () => n, iy: () => i });
				const o = 9,
					l = 27,
					n = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(t, a, g, d) {
					const u = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${u}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = u),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					t &&
						!t.attributes?.[n] &&
						(t.setAttribute(n, !0),
						t.setAttribute('tabIndex', `${a || 0}`),
						t.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && t.click();
						}),
						g &&
							t.addEventListener('keydown', function (s) {
								const y = t.querySelectorAll(c),
									m = y[0],
									h = y[y.length - 1];
								if (s.keyCode == l) {
									t.focus(), d && d(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === m && (h.focus(), s.preventDefault())
										: document.activeElement === h && (m.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(b, r, e) {
				'use strict';
				e.d(r, { u: () => o });
				const o = (l, n) => {
					const c = {};
					return (
						Object.keys(l).forEach((i) => {
							const t = l && l[i],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(n))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(n)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(n))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': i })),
								(c[i] = a);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, r, e) {
				'use strict';
				e.d(r, { F: () => o });
				const o = {
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
			'./components/src/utilities/defined.ts'(b, r, e) {
				'use strict';
				e.d(r, { s: () => o });
				function o(l) {
					const n = {};
					return (
						Object.keys(l).map((c) => {
							l[c] !== void 0 && (n[c] = l[c]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, r, e) {
				'use strict';
				e.d(r, { Z: () => c });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					c = (i) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, o.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function r(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (b.exports = r);
			},
		},
	]);
})();
