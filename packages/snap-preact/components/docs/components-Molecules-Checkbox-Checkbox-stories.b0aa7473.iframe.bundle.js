(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9143],
		{
			'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx'(b, c, t) {
				'use strict';
				t.r(c), t.d(c, { Default: () => u, Disabled: () => d, Native: () => s, __namedExportsOrder: () => h, default: () => k });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = t('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					i = t('./components/src/components/Atoms/Icon/paths.tsx'),
					r = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const a =
						"# Checkbox\n\nRenders a native or custom checkbox.\n\n## Sub-components\n- Icon\n\n## Usage\n```jsx\nimport { Checkbox } from '@athoscommerce/snap-preact/components';\n```\n\n### native\nThe `native` prop will render an `<input type='checkbox'>` element.\n\n```jsx\n<Checkbox native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```jsx\n<Checkbox checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the checkbox to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```jsx\n<Checkbox startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the checkbox from being toggled or invoking the `onClick` callback.\n\n```jsx\n<Checkbox disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Checkbox disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom checkbox size.\n\n```jsx\n<Checkbox size={'16px'} />\n```\n\n### color\nThe `color` prop sets the checkbox border color and the icon color if the `iconColor` prop is not set.\n\n```jsx\n<Checkbox color={'#ffff00'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop. It will not affect checkbox border color.\n\n```jsx\n<Checkbox iconColor={'#ffff00'} />\n```\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery). This only applies if using a custom checkbox `native={false}`.\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the checkbox is clicked.\n\n```jsx\n<Checkbox onClick={(e)=>{console.log(e)}} />\n```\n",
					k = {
						title: 'Molecules/Checkbox',
						component: n.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: a }), (0, o.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							checked: {
								description: 'Checkbox is checked (externally managed state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disabled: {
								description: 'Checkbox is disabled',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							size: {
								defaultValue: '12px',
								description: 'Checkbox size',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '12px' } },
								control: { type: 'text' },
							},
							icon: {
								defaultValue: 'check-thin',
								description: 'Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'check-thin' } },
								options: [...Object.keys(i.c)],
								control: { type: 'select' },
							},
							color: {
								description: 'Checkbox color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							iconColor: {
								description: 'Checkbox icon color. Overwrites color.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							startChecked: {
								description: 'Checkbox is checked initially (internally managed state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							native: {
								description: 'Render as unstyled native checkbox',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Checkbox click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...e.F,
						},
					},
					u = (m) => (0, o.Y)(n.S, { ...m }),
					d = (m) => (0, o.Y)(n.S, { ...m });
				d.args = { checked: !0, disabled: !0 };
				const s = (m) => (0, o.Y)(n.S, { ...m });
				(s.args = { native: !0 }),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...u.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...d.parameters?.docs?.source },
						},
					}),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...s.parameters?.docs?.source },
						},
					});
				const h = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(b, c, t) {
				'use strict';
				t.d(c, { S: () => W });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = t('../../node_modules/classnames/index.js'),
					r = t.n(i),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					a = t('./components/src/utilities/defined.ts'),
					k = t('./components/src/utilities/mergeProps.ts'),
					u = t('./components/src/utilities/mergeStyles.ts'),
					d = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = t('./components/src/providers/treePath.tsx'),
					m = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = t('./components/src/hooks/useA11y.tsx'),
					B = t('./components/src/hooks/useLang.tsx'),
					N = t('../../node_modules/deepmerge/dist/cjs.js'),
					R = t.n(N);
				const K = ({ size: y, color: v, theme: T, native: E }) => {
						const _ = isNaN(Number(y)) ? y : `${y}px`;
						return E
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: _,
									width: _,
									border: `1px solid ${v || T?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${y} - 30%)`, height: `calc(${y} - 30%)` },
							  });
					},
					W = (0, e.PA)((y) => {
						const v = (0, s.u)(),
							E = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, h.LU)() },
							_ = (0, k.v6)('checkbox', v, E, y),
							{
								checked: D,
								color: Y,
								disabled: x,
								icon: C,
								iconColor: V,
								onClick: M,
								size: P,
								startChecked: w,
								native: z,
								disableA11y: $,
								disableStyles: F,
								className: A,
								internalClassName: L,
								theme: H,
								treePath: Z,
								lang: J,
								style: se,
								styleScript: oe,
								themeStyleScript: ne,
								name: ae,
								...G
							} = _,
							j = isNaN(Number(P)) ? P : `${P}px`,
							Q = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, a.s)({ color: V || Y || H?.variables?.colors?.primary, disableStyles: F, icon: C, size: j && `calc(${j} - 30%)` }),
									theme: _.theme,
									treePath: Z,
								},
							};
						let p, O;
						const I = D === void 0;
						I ? ([p, O] = (0, l.J0)(w)) : (p = D);
						const S = (f) => {
								x || (I && O && O((te) => !te), M && M(f));
							},
							U = (0, u.Z)(_, K),
							X = { checkbox: {} },
							q = R()(X, J || {}),
							ee = (0, B.u)(q, { checkedState: p, disabled: x });
						return (0, o.Y)(d._, {
							children: z
								? (0, o.Y)('input', {
										...U,
										className: r()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': x, 'ss__checkbox--active': p }, A, L),
										type: 'checkbox',
										'aria-checked': p,
										onClick: (f) => S(f),
										disabled: x,
										checked: p,
								  })
								: (0, o.Y)('span', {
										...U,
										className: r()('ss__checkbox', { 'ss__checkbox--disabled': x, 'ss__checkbox--active': p }, A, L),
										onClick: (f) => S(f),
										ref: (f) => ($ ? null : (0, g.iy)(f)),
										'aria-disabled': x,
										role: 'checkbox',
										'aria-checked': p,
										...G,
										...ee.checkbox.all,
										children: p
											? (0, o.Y)(m.I, { ...Q.icon, ...(typeof C == 'string' ? { icon: C } : C) })
											: (0, o.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, c, t) {
				'use strict';
				t.d(c, { DH: () => i, aZ: () => n, iy: () => r });
				const o = 9,
					l = 27,
					n = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(e, a, k, u) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = d),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					e &&
						!e.attributes?.[n] &&
						(e.setAttribute(n, !0),
						e.setAttribute('tabIndex', `${a || 0}`),
						e.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && e.click();
						}),
						k &&
							e.addEventListener('keydown', function (s) {
								const h = e.querySelectorAll(i),
									m = h[0],
									g = h[h.length - 1];
								if (s.keyCode == l) {
									e.focus(), u && u(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === m && (g.focus(), s.preventDefault())
										: document.activeElement === g && (m.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(b, c, t) {
				'use strict';
				t.d(c, { u: () => o });
				const o = (l, n) => {
					const i = {};
					return (
						Object.keys(l).forEach((r) => {
							const e = l && l[r],
								a = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (a.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (a.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((a.attributes = { 'ss-lang': r }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = e.attributes['aria-label'](n))
											: (a.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](n))
											: (a.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (a.attributes.title = e.attributes.title(n))
											: (a.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (a.attributes.alt = e.attributes.alt(n)) : (a.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = e.attributes.placeholder(n))
											: (a.attributes.placeholder = e.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': r })),
								(i[r] = a);
						}),
						i
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, c, t) {
				'use strict';
				t.d(c, { F: () => o });
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
			'./components/src/utilities/defined.ts'(b, c, t) {
				'use strict';
				t.d(c, { s: () => o });
				function o(l) {
					const n = {};
					return (
						Object.keys(l).map((i) => {
							l[i] !== void 0 && (n[i] = l[i]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, c, t) {
				'use strict';
				t.d(c, { Z: () => i });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					i = (r) => {
						const e = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								e.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(e.current);
							}, [r.className, r.children, e]),
							(0, o.Y)('code', { ...r, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function c(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (b.exports = c);
			},
		},
	]);
})();
