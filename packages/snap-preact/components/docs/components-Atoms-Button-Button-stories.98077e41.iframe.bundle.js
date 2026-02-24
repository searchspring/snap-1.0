(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1840],
		{
			'./components/src/components/Atoms/Button/Button.stories.tsx'(b, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => u, Disabled: () => d, Native: () => o, __namedExportsOrder: () => _, default: () => h });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Atoms/Button/Button.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts');
				const t = `# Button

Renders a native or custom button.

## Usage
\`\`\`jsx
import { Button } from '@searchspring/snap-preact-components';
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
				var r = e('./components/src/components/Atoms/Icon/paths.tsx');
				const h = {
						title: 'Atoms/Button',
						component: s.$,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(i.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, n.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						argTypes: {
							content: { description: 'Content to be displayed in button', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							children: {
								description: 'Content to be displayed in button (using children)',
								table: { type: { summary: 'string, JSX' } },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Button click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							color: { description: 'Button text color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
							icon: {
								description: 'Button Icon name',
								table: { type: { summary: 'string' } },
								options: [...Object.keys(r.c)],
								control: { type: 'select' },
							},
							backgroundColor: {
								description: 'Button background color',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#fff' } },
								control: { type: 'color' },
							},
							borderColor: {
								description: 'Button border color',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#333' } },
								control: { type: 'color' },
							},
							native: {
								description: 'Render as unstyled native button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...l.F,
						},
					},
					u = (m) => (0, n.Y)(s.$, { ...m });
				u.args = { content: 'Button' };
				const d = (m) => (0, n.Y)(s.$, { ...m });
				d.args = { content: 'Button', disabled: !0 };
				const o = (m) => (0, n.Y)(s.$, { ...m });
				(o.args = { content: 'Button', native: !0 }),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...u.parameters?.docs?.source } },
					}),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...d.parameters?.docs?.source } },
					}),
					(o.parameters = {
						...o.parameters,
						docs: { ...o.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...o.parameters?.docs?.source } },
					});
				const _ = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(b, a, e) {
				'use strict';
				e.d(a, { $: () => Y });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/dist/preact.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					l = e.n(c),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useA11y.tsx'),
					o = e('./components/src/utilities/cloneWithProps.tsx'),
					_ = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					U = e('./components/src/hooks/useLang.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(K),
					S = e('../../node_modules/color/index.js'),
					W = e.n(S);
				const N = ({ native: B, color: E, backgroundColor: O, borderColor: C, theme: y }) => {
						const f = new (W())(O || E || y?.variables?.colors?.primary).lightness(95);
						return B
							? (0, s.AH)({})
							: (0, s.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: E || y?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: O || '#fff',
									border: `1px solid ${C || E || y?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: f.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					Y = (0, t.PA)((B) => {
						const E = (0, h.u)(),
							C = { disableA11y: !1, treePath: (0, u.LU)() },
							y = (0, m.v6)('button', E, C, B),
							{
								content: f,
								children: x,
								disabled: D,
								native: T,
								onClick: j,
								disableA11y: F,
								disableStyles: $,
								className: V,
								internalClassName: H,
								icon: p,
								lang: I,
								treePath: v,
								style: w,
								styleScript: G,
								themeStyleScript: Q,
								...J
							} = y,
							L = { icon: { internalClassName: 'ss__button__icon', ...(0, _.s)({ disableStyles: $ }), theme: y?.theme, treePath: v } },
							k = {
								...(0, g.Z)(y, N),
								className: l()('ss__button', { 'ss__button--native': T, 'ss__button--disabled': D }, V, H),
								disabled: D,
								onClick: (A) => !D && j && j(A),
								...J,
							},
							Z = { ref: (A) => (0, d.iy)(A) },
							z = {},
							X = R()(z, I || {}),
							P = (0, U.u)(X, {});
						return f || x || p || I?.button?.value
							? (0, n.Y)(r._, {
									children: T
										? (0, n.FD)('button', {
												...k,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...P.button?.all,
														children: [(0, o.Y)(f, { treePath: v }), (0, o.Y)(x, { treePath: v })],
													}),
													p && (0, n.Y)(M.I, { ...L.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  })
										: (0, n.FD)('div', {
												...(F ? {} : Z),
												role: 'button',
												'aria-disabled': D,
												...k,
												...P.button?.attributes,
												children: [
													f || x || P.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...P.button?.value,
																children: [(0, o.Y)(f, { treePath: v }), (0, o.Y)(x, { treePath: v })],
														  })
														: void 0,
													p && (0, n.Y)(M.I, { ...L.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  }),
							  })
							: (0, n.Y)(i.FK, {});
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, a, e) {
				'use strict';
				e.d(a, { DH: () => c, aZ: () => s, iy: () => l });
				const n = 9,
					i = 27,
					s = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(t, r, h, u) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = d),
							(o.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${r || 0}`),
						t.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && t.click();
						}),
						h &&
							t.addEventListener('keydown', function (o) {
								const _ = t.querySelectorAll(c),
									m = _[0],
									g = _[_.length - 1];
								if (o.keyCode == i) {
									t.focus(), u && u(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === n) &&
									(o.shiftKey
										? document.activeElement === m && (g.focus(), o.preventDefault())
										: document.activeElement === g && (m.focus(), o.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(b, a, e) {
				'use strict';
				e.d(a, { u: () => n });
				const n = (i, s) => {
					const c = {};
					return (
						Object.keys(i).forEach((l) => {
							const t = i && i[l],
								r = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (r.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (r.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((r.attributes = { 'ss-lang': l }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (r.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (r.attributes.title = t.attributes.title(s))
											: (r.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (r.attributes.alt = t.attributes.alt(s)) : (r.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = t.attributes.placeholder(s))
											: (r.attributes.placeholder = t.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': l })),
								(c[l] = r);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, a, e) {
				'use strict';
				e.d(a, { F: () => n });
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
			'./components/src/utilities/defined.ts'(b, a, e) {
				'use strict';
				e.d(a, { s: () => n });
				function n(i) {
					const s = {};
					return (
						Object.keys(i).map((c) => {
							i[c] !== void 0 && (s[c] = i[c]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, a, e) {
				'use strict';
				e.d(a, { Z: () => c });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (l) => {
						const t = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								t.current && l.className?.includes('lang-') && !l.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [l.className, l.children, t]),
							(0, n.Y)('code', { ...l, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function a(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (b.exports = a);
			},
		},
	]);
})();
