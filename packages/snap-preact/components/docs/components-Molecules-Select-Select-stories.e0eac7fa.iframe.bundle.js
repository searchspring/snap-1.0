(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(w, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => y, IconOptions: () => f, Native: () => g, __namedExportsOrder: () => T, default: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/components/Molecules/Select/Select.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/utilities/snapify.ts'),
					U = e('./components/src/components/Atoms/Icon/paths.tsx');
				const x =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```jsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```jsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```jsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```jsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```jsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```jsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```jsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```jsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```jsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```jsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n",
					v = {
						title: 'Molecules/Select',
						component: p.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: a.Z } }, children: x }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						argTypes: {
							options: {
								description: 'Select options from store reference',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'Array of Option objects' } },
								control: { type: 'none' },
							},
							selected: {
								description: 'Current selected options from store reference',
								table: { category: 'Templates Legal', type: { summary: 'Option object' } },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable select',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							label: {
								description: 'Header label',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							hideLabel: {
								description: 'hide the Header label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							clearSelection: {
								description: 'Unselect label',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							hideLabelOnSelection: {
								description: 'Hide label when selection has been made (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSelection: {
								description: 'Hide the current selection in the dropdown button (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideIcon: {
								description: 'Hide the icon in the dropdown button (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionIcons: {
								description: 'Hide the icon in the options (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionLabels: {
								description: 'Hide the label in the options (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							separator: {
								defaultValue: ': ',
								description: 'Select delimiter',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: ': ' } },
								control: { type: 'text' },
							},
							color: { description: 'Select color', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'color' } },
							borderColor: {
								description: 'Select border color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							backgroundColor: {
								description: 'Select background color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							iconColor: {
								description: 'Select icon color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#333' } },
								control: { type: 'color' },
							},
							iconOpen: {
								defaultValue: 'angle-down',
								description: 'Icon for when select is closed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(U.c)],
								control: { type: 'select' },
							},
							iconClose: {
								defaultValue: 'angle-up',
								description: 'Icon for when select is open',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(U.c)],
								control: { type: 'select' },
							},
							stayOpenOnSelection: {
								defaultValue: !1,
								description: 'Keep dropdown open when an option is selected',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							startOpen: {
								defaultValue: !1,
								description: 'Open on initial render',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							native: {
								defaultValue: !1,
								description: 'Use native select element',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								defaultValue: !1,
								description: 'Ignore clicks outside of element',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onSelect: {
								description: 'Select onSelect event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onSelect',
							},
							...o.F,
						},
					},
					l = s.p.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
					M = (0, _.PA)(({ args: C, controller: O }) =>
						(0, t.Y)(p.l, {
							...C,
							options: O?.store?.sorting?.options,
							selected: O?.store?.sorting?.current,
							onSelect: ($, k) => {
								k && k?.url?.go();
							},
						})
					),
					y = (C, { loaded: { controller: O } }) => (0, t.Y)(M, { args: C, controller: O });
				(y.loaders = [async () => (await l.search(), { controller: l })]), (y.args = { label: 'Sort By' });
				const g = (C, { loaded: { controller: O } }) => (0, t.Y)(M, { args: C, controller: O });
				(g.loaders = [async () => (await l.search(), { controller: l })]), (g.args = { label: 'Sort By', native: !0 });
				const f = (C) => {
					const O = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(p.l, { ...C, options: O });
				};
				(f.args = { label: 'Layout' }),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: SelectProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableSelect args={args} controller={controller} />;
}`,
								...y.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: SelectProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableSelect args={args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: SelectProps) => {
  const iconOptions: ListOption[] = [{
    label: '1 wide',
    value: '1 wide',
    icon: 'square'
  }, {
    label: '2 wide',
    value: '2 wide',
    icon: {
      icon: 'layout-large'
    }
  }, {
    label: '3 wide',
    value: '3 wide',
    icon: {
      icon: 'layout-grid'
    }
  }];
  return <Select {...args} options={iconOptions} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const T = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(w, d, e) {
				'use strict';
				e.d(d, { $: () => q });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					p = e.n(n),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					U = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useA11y.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					f = e('./components/src/hooks/useLang.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(T),
					O = e('../../node_modules/color/index.js'),
					$ = e.n(O);
				const k = ({ native: m, color: b, backgroundColor: u, borderColor: h, theme: i }) => {
						const E = new ($())(u || b || i?.variables?.colors?.primary || void 0).lightness(95);
						return m
							? (0, _.AH)({})
							: (0, _.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: b || i?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: u || '#fff',
									border: `1px solid ${h || b || i?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: E.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					q = (0, a.PA)((m) => {
						const b = (0, s.u)(),
							h = { disableA11y: !1, treePath: (0, U.LU)() },
							i = (0, M.v6)('button', b, h, m),
							{
								content: E,
								children: P,
								disabled: R,
								native: z,
								onClick: ee,
								disableA11y: N,
								disableStyles: X,
								className: Y,
								internalClassName: re,
								icon: A,
								lang: te,
								treePath: K,
								style: V,
								styleScript: W,
								themeStyleScript: Z,
								...L
							} = i,
							I = { icon: { internalClassName: 'ss__button__icon', ...(0, l.s)({ disableStyles: X }), theme: i?.theme, treePath: K } },
							oe = {
								...(0, y.Z)(i, k),
								className: p()('ss__button', { 'ss__button--native': z, 'ss__button--disabled': R }, Y, re),
								disabled: R,
								onClick: (se) => !R && ee && ee(se),
								...L,
							},
							ne = { ref: (se) => (0, x.iy)(se) },
							G = {},
							Q = C()(G, te || {}),
							J = (0, f.u)(Q, {});
						return E || P || A || te?.button?.value
							? (0, t.Y)(o._, {
									children: z
										? (0, t.FD)('button', {
												...oe,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...J.button?.all,
														children: [(0, v.Y)(E, { treePath: K }), (0, v.Y)(P, { treePath: K })],
													}),
													A && (0, t.Y)(g.I, { ...I.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												],
										  })
										: (0, t.FD)('div', {
												...(N ? {} : ne),
												role: 'button',
												'aria-disabled': R,
												...oe,
												...J.button?.attributes,
												children: [
													E || P || J.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...J.button?.value,
																children: [(0, v.Y)(E, { treePath: K }), (0, v.Y)(P, { treePath: K })],
														  })
														: void 0,
													A && (0, t.Y)(g.I, { ...I.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(w, d, e) {
				'use strict';
				e.d(d, { m: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/compat/dist/compat.module.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useClickOutside.tsx'),
					M = e('./components/src/utilities/cloneWithProps.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useA11y.tsx');
				const T = ({ disableOverlay: O }) =>
						(0, p.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: O ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${O ? 'default' : 'pointer'}` },
							'.ss__dropdown__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
					C = (0, s.PA)((O) => {
						const $ = (0, x.u)(),
							q = { startOpen: !1, disableA11y: !1, treePath: (0, v.LU)() },
							m = (0, y.v6)('dropdown', $, q, O),
							{
								button: b,
								content: u,
								children: h,
								disabled: i,
								open: E,
								toggleOnHover: P,
								onMouseEnter: R,
								onMouseLeave: z,
								disableClick: ee,
								onClick: N,
								onToggle: X,
								focusTrapContent: Y,
								startOpen: re,
								disableClickOutside: A,
								disableA11y: te,
								className: K,
								internalClassName: V,
								treePath: W,
								usePortal: Z,
							} = m;
						let L, I;
						const F = E === void 0;
						F ? ([L, I] = (0, n.J0)(re)) : (L = E);
						const [oe, ne] = (0, n.J0)(!1),
							G = (0, n.li)(null),
							Q = (0, n.li)(null),
							[J, se] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let ae;
						A ||
							(ae = (0, l.L)((r) => {
								(Z && Q.current && Q.current.contains(r.target)) || (L && (i || (F && I && I(!1), X && X(r, !1))));
							})),
							(0, n.vJ)(() => {
								if (Z && L) {
									const r = () => {
										if (G.current) {
											const B = G.current.getBoundingClientRect();
											se({ top: B.bottom + window.scrollY, left: B.left + window.scrollX, width: B.width });
										}
									};
									return (
										r(),
										window.addEventListener('resize', r),
										window.addEventListener('scroll', r, !0),
										() => {
											window.removeEventListener('resize', r), window.removeEventListener('scroll', r, !0);
										}
									);
								}
							}, [Z, L]);
						const H = (r, B) => {
								F &&
									I &&
									I((le) => {
										const D = B ?? !le;
										return D != le && X && X(r, D), D;
									});
							},
							de = (0, g.Z)(m, T),
							ie = {
								onMouseEnter:
									(P || R) &&
									((r) => {
										oe || (P && !i && H(r, !0), R && R(r));
									}),
								onMouseLeave:
									(P || z) &&
									((r) => {
										oe || (P && !i && H(r, !1), z && z(r));
									}),
							},
							j = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (r) => {
									(Q.current = r),
										te ||
											(0, f.iy)(r, 0, !!Y, (B) => {
												F ? H(B) : N && N(B);
											});
								},
								children: [(0, M.Y)(u, { open: L, toggleOpen: H, treePath: W }), (0, M.Y)(h, { open: L, toggleOpen: H, treePath: W })],
							});
						return (0, t.Y)(U._, {
							children: (0, t.FD)('div', {
								...de,
								className: o()('ss__dropdown', { 'ss__dropdown--open': L }, K, V),
								ref: ae,
								...ie,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (r) => {
											(G.current = r), te || (0, f.iy)(r);
										},
										'aria-expanded': L,
										role: 'button',
										onTouchStart: () => {
											ne(!0);
										},
										onClick: (r) => {
											!i && !ee && (H(r), N && N(r)),
												setTimeout(() => {
													ne(!1);
												}, 300);
										},
										children: (0, M.Y)(b, { open: L, toggleOpen: H, treePath: W }),
									}),
									Z
										? L &&
										  (u || h) &&
										  (0, _.createPortal)(
												(0, t.Y)('div', {
													className: o()('ss__dropdown__portal', K, V, { 'ss__dropdown__portal--open': L }),
													css: de.css,
													style: { position: 'absolute', top: J.top, left: J.left, width: J.width, zIndex: 9999 },
													children: j,
												}),
												document.body
										  )
										: (u || h) && j,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Select/Select.tsx'(w, d, e) {
				'use strict';
				e.d(d, { l: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx'),
					f = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					T = e('./components/src/hooks/useA11y.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					$ = e.n(O),
					k = e('../../node_modules/color/index.js'),
					q = e.n(k);
				const m = ({ color: u, backgroundColor: h, borderColor: i, theme: E, native: P }) => {
						const R = new (q())(h || u || E?.variables?.colors?.primary || void 0).lightness(95);
						return P
							? (0, p.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, p.AH)({
									display: 'inline-flex',
									color: u,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: h || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${i || u || E?.variables?.colors?.primary || '#333'}`,
										'.ss__select__dropdown__button': { alignItems: 'center' },
										'.ss__select__select__option': {
											cursor: 'pointer',
											padding: '6px 8px',
											color: 'initial',
											display: 'flex',
											alignItems: 'center',
											gap: '5px',
											'&.ss__select__select__option--selected': { fontWeight: 'bold' },
											'&:hover': { backgroundColor: R.hex() || '#f8f8f8' },
										},
									},
							  });
					},
					b = (0, n.PA)((u) => {
						const h = (0, U.u)(),
							E = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, x.LU)() },
							P = (0, l.v6)('select', h, E, u),
							{
								backgroundColor: R,
								borderColor: z,
								color: ee,
								clearSelection: N,
								disableClickOutside: X,
								disabled: Y,
								hideLabel: re,
								hideLabelOnSelection: A,
								iconColor: te,
								iconClose: K,
								iconOpen: V,
								label: W,
								native: Z,
								onSelect: L,
								selected: I,
								separator: F,
								startOpen: oe,
								hideIcon: ne,
								hideOptionIcons: G,
								hideOptionLabels: Q,
								hideSelection: J,
								stayOpenOnSelection: se,
								disableStyles: ae,
								className: H,
								internalClassName: de,
								treePath: ie,
							} = P;
						let { options: j } = P;
						const r = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, v.s)({ disableStyles: ae, disabled: Y }),
									theme: P?.theme,
									treePath: ie,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, v.s)({ disableStyles: ae, disabled: Y, color: ee, backgroundColor: R, borderColor: z }),
									theme: P?.theme,
									treePath: ie,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, v.s)({ disableStyles: ae, color: te || ee, size: '12px' }),
									theme: P?.theme,
									treePath: ie,
								},
							},
							[B, le] = (0, _.J0)(!!oe),
							[D, be] = (0, _.J0)(I),
							[ge] = (0, _.J0)(I);
						try {
							if (I) {
								const c = JSON.stringify(ge),
									S = JSON.stringify(I),
									ce = JSON.stringify(D);
								c !== S && S !== ce && be(I);
							}
						} catch {}
						D && N && (j = [{ label: N, value: '' }, ...j]);
						const he = (c, S) => {
								S != D && L && L(c, S), be(S), !se && le(!1);
							},
							ye = (0, M.Z)(P, m),
							pe = j.filter((c) => D?.value === c.value),
							fe = {
								buttonLabel: {
									value: W,
									attributes: {
										'aria-label': `${W} dropdown, ${j.length} options ${pe.length ? `, Currently selected option is ${pe[0].label}` : ''}`,
									},
								},
							},
							me = $()(fe, P.lang || {}),
							ue = (0, C.u)(me, { options: j, selectedOptions: pe, label: W, open: B });
						return typeof j == 'object' && j?.length
							? (0, t.Y)(s._, {
									children: (0, t.Y)('div', {
										...ye,
										className: o()('ss__select', { 'ss__select--native': Z }, { 'ss__select--disabled': Y }, H, de),
										children: Z
											? (0, t.FD)(t.FK, {
													children: [
														(W || me.buttonLabel.value) &&
															!re &&
															!A &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...ue.buttonLabel?.all }),
																	F && (0, t.Y)('span', { className: 'ss__select__label__separator', children: F }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: Y || void 0,
															onChange: (c) => {
																const S = c.target,
																	ce = S.options[S.selectedIndex],
																	Ee = j.filter((_e, ve) => _e.label == ce.text && (_e.value == ce.value || _e.value == ve)).pop();
																!Y && he(c, Ee);
															},
															children: [
																!D && N && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: N }),
																j.map((c, S) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: D?.value === c.value,
																		value: c.value ?? S,
																		children: c.label,
																	})
																),
															],
														}),
														!ne && (0, t.Y)(f.I, { ...r.icon, name: 'open', ...(typeof V == 'string' ? { icon: V } : V) }),
													],
											  })
											: (0, t.Y)(y.m, {
													...r.dropdown,
													disableClickOutside: X,
													open: B,
													onToggle: (c, S) => le((ce) => S ?? !ce),
													onClick: () => le((c) => !c),
													disableA11y: !0,
													button: (0, t.FD)(g.$, {
														...r.button,
														children: [
															(W || me.buttonLabel.value) &&
																!A &&
																!re &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...ue.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...ue.buttonLabel.value }),
																		F && D && (0, t.Y)('span', { className: 'ss__select__label__separator', children: F }),
																	],
																}),
															D &&
																!J &&
																(0, t.FD)(t.FK, {
																	children: [
																		D.icon &&
																			!G &&
																			(0, t.Y)(f.I, {
																				...r.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof D.icon == 'string' ? { icon: D.icon } : D.icon),
																			}),
																		!Q && (0, t.Y)('span', { className: 'ss__select__selection', children: D?.label }),
																	],
																}),
															!ne &&
																(0, t.Y)(f.I, {
																	...r.icon,
																	name: B ? 'open' : 'close',
																	...(B ? { ...(typeof K == 'string' ? { icon: K } : K) } : { ...(typeof V == 'string' ? { icon: V } : V) }),
																}),
														],
													}),
													children: (0, t.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof W == 'string' ? W : '',
														ref: (c) => (0, T.iy)(c, -1, !0, () => le(!1)),
														children: j.map((c) =>
															(0, t.FD)('li', {
																ref: (S) => (0, T.iy)(S),
																'aria-disabled': c.disabled,
																title: c.label,
																className: o()('ss__select__select__option', { 'ss__select__select__option--selected': D?.value === c.value }),
																onClick: (S) => !Y && he(S, c),
																role: 'option',
																'aria-selected': D?.value === c.value,
																children: [
																	c.icon &&
																		!G &&
																		(0, t.Y)(f.I, {
																			...r.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${ie} dropdown`,
																			...(typeof c.icon == 'string' ? { icon: c.icon } : c.icon),
																		}),
																	!Q && (0, t.Y)('span', { children: c.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(w, d, e) {
				'use strict';
				e.d(d, { DH: () => p, aZ: () => n, iy: () => a });
				const t = 9,
					_ = 27,
					n = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(o, s, U, x) {
					const v = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${v}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = v),
							(l.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					o &&
						!o.attributes?.[n] &&
						(o.setAttribute(n, !0),
						o.setAttribute('tabIndex', `${s || 0}`),
						o.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && o.click();
						}),
						U &&
							o.addEventListener('keydown', function (l) {
								const M = o.querySelectorAll(p),
									y = M[0],
									g = M[M.length - 1];
								if (l.keyCode == _) {
									o.focus(), x && x(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === t) &&
									(l.shiftKey
										? document.activeElement === y && (g.focus(), l.preventDefault())
										: document.activeElement === g && (y.focus(), l.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(w, d, e) {
				'use strict';
				e.d(d, { L: () => _ });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function _(n) {
					const p = (0, t.li)(),
						a = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							p.current = n;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', o), () => document.removeEventListener('click', o);
							function o(s) {
								a.current && p.current && !a.current.contains(s.target) && p.current(s);
							}
						}, []),
						a
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(w, d, e) {
				'use strict';
				e.d(d, { u: () => t });
				const t = (_, n) => {
					const p = {};
					return (
						Object.keys(_).forEach((a) => {
							const o = _ && _[a],
								s = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (s.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: o.value(n) } })
										: (s.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((s.attributes = { 'ss-lang': a }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = o.attributes['aria-label'](n))
											: (s.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](n))
											: (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (s.attributes.title = o.attributes.title(n))
											: (s.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (s.attributes.alt = o.attributes.alt(n)) : (s.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = o.attributes.placeholder(n))
											: (s.attributes.placeholder = o.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': a })),
								(p[a] = s);
						}),
						p
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(w, d, e) {
				'use strict';
				e.d(d, { F: () => t });
				const t = {
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
			'./components/src/utilities/defined.ts'(w, d, e) {
				'use strict';
				e.d(d, { s: () => t });
				function t(_) {
					const n = {};
					return (
						Object.keys(_).map((p) => {
							_[p] !== void 0 && (n[p] = _[p]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(w, d, e) {
				'use strict';
				e.d(d, { p: () => O });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					M = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const T = {},
					C = { globals: { siteId: 'atkzs2' } };
				class O {
					static recommendation(b) {
						const u = b.id;
						if (T[u]) return T[u];
						const h = (T[u] = k({ client: C, controller: b }));
						return (
							h.on('afterStore', async ({ controller: i }, E) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await E();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(b) {
						const u = b.id;
						if (T[u]) return T[u];
						const h = (T[u] = q({ client: C, controller: b }));
						return (
							h.on('afterStore', async ({ controller: i }, E) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await E();
							}),
							h.init(),
							h
						);
					}
					static search(b) {
						const u = b.id;
						if (T[u]) return T[u];
						const h = (T[u] = $({ client: C, controller: b }));
						return (
							h.on('afterStore', async ({ controller: i }, E) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await E();
							}),
							h.init(),
							h
						);
					}
				}
				function $(m) {
					const b = new x.V(new l.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), v.X);
					return new _.Tp(m.controller, {
						client: new a.K(m.client.globals, m.client.config),
						store: new s.U(m.controller, { urlManager: b }),
						urlManager: b,
						eventManager: new M.E(),
						profiler: new y.U(),
						logger: new g.V(),
						tracker: new f.J(m.client.globals),
					});
				}
				function k(m) {
					const b = new x.V(new l.E(), v.X).detach(!0);
					return new p.c(m.controller, {
						client: new a.K(m.client.globals, m.client.config),
						store: new U.t(m.controller, { urlManager: b }),
						urlManager: b,
						eventManager: new M.E(),
						profiler: new y.U(),
						logger: new g.V(),
						tracker: new f.J(m.client.globals),
					});
				}
				function q(m) {
					const b = new x.V(new l.E(), v.X).detach();
					return new n.Z(m.controller, {
						client: new a.K(m.client.globals, m.client.config),
						store: new o.Y(m.controller, { urlManager: b }),
						urlManager: b,
						eventManager: new M.E(),
						profiler: new y.U(),
						logger: new g.V(),
						tracker: new f.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, d, e) {
				'use strict';
				e.d(d, { Z: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					p = (a) => {
						const o = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								o.current && a.className?.includes('lang-') && !a.className?.includes(n) && window?.Prism?.highlightElement(o.current);
							}, [a.className, a.children, o]),
							(0, t.Y)('code', { ...a, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function d(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (w.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Select-Select-stories.e0eac7fa.iframe.bundle.js.map
