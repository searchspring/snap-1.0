(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(R, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => g, IconOptions: () => P, Native: () => E, __namedExportsOrder: () => f, default: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/components/Molecules/Select/Select.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts'),
					w = e('./components/src/components/Atoms/Icon/paths.tsx');
				const I =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```jsx\nimport { Select } from '@searchspring/snap-preact-components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```jsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```jsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```jsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```jsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```jsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```jsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```jsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```jsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```jsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n",
					j = {
						title: 'Molecules/Select',
						component: p.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: a.Z } }, children: I }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						argTypes: {
							options: {
								description: 'Select options from store reference',
								type: { required: !0 },
								table: { type: { summary: 'Array of Option objects' } },
								control: { type: 'none' },
							},
							selected: {
								description: 'Current selected options from store reference',
								table: { type: { summary: 'Option object' } },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable select',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							label: { description: 'Header label', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							hideLabel: {
								description: 'hide the Header label',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							clearSelection: { description: 'Unselect label', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							hideLabelOnSelection: {
								description: 'Hide label when selection has been made (non-native only)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSelection: {
								description: 'Hide the current selection in the dropdown button (non-native only)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideIcon: {
								description: 'Hide the icon in the dropdown button (non-native only)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionIcons: {
								description: 'Hide the icon in the options (non-native only)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionLabels: {
								description: 'Hide the label in the options (non-native only)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							separator: {
								defaultValue: ': ',
								description: 'Select delimiter',
								table: { type: { summary: 'string' }, defaultValue: { summary: ': ' } },
								control: { type: 'text' },
							},
							color: { description: 'Select color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
							borderColor: { description: 'Select border color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
							backgroundColor: { description: 'Select background color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
							iconColor: {
								description: 'Select icon color',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#333' } },
								control: { type: 'color' },
							},
							iconOpen: {
								defaultValue: 'angle-down',
								description: 'Icon for when select is closed',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(w.c)],
								control: { type: 'select' },
							},
							iconClose: {
								defaultValue: 'angle-up',
								description: 'Icon for when select is open',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(w.c)],
								control: { type: 'select' },
							},
							stayOpenOnSelection: {
								defaultValue: !1,
								description: 'Keep dropdown open when an option is selected',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							startOpen: {
								defaultValue: !1,
								description: 'Open on initial render',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							native: {
								defaultValue: !1,
								description: 'Use native select element',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								defaultValue: !1,
								description: 'Ignore clicks outside of element',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onSelect: { description: 'Select onSelect event handler', table: { type: { summary: 'function' } }, action: 'onSelect' },
							...o.F,
						},
					},
					s = l.p.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
					v = (0, h.PA)(({ args: D, controller: y }) =>
						(0, t.Y)(p.l, {
							...D,
							options: y?.store?.sorting?.options,
							selected: y?.store?.sorting?.current,
							onSelect: ($, k) => {
								k && k?.url?.go();
							},
						})
					),
					g = (D, { loaded: { controller: y } }) => (0, t.Y)(v, { args: D, controller: y });
				(g.loaders = [async () => (await s.search(), { controller: s })]), (g.args = { label: 'Sort By' });
				const E = (D, { loaded: { controller: y } }) => (0, t.Y)(v, { args: D, controller: y });
				(E.loaders = [async () => (await s.search(), { controller: s })]), (E.args = { label: 'Sort By', native: !0 });
				const P = (D) => {
					const y = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(p.l, { ...D, options: y });
				};
				(P.args = { label: 'Layout' }),
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
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
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
								...E.parameters?.docs?.source,
							},
						},
					}),
					(P.parameters = {
						...P.parameters,
						docs: {
							...P.parameters?.docs,
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
								...P.parameters?.docs?.source,
							},
						},
					});
				const f = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(R, c, e) {
				'use strict';
				e.d(c, { $: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					a = e.n(p),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					f = e('./components/src/hooks/useLang.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(D),
					$ = e('../../node_modules/color/index.js'),
					k = e.n($);
				const te = ({ native: m, color: _, backgroundColor: b, borderColor: d, theme: O }) => {
						const S = new (k())(b || _ || O?.variables?.colors?.primary).lightness(95);
						return m
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: _ || O?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: b || '#fff',
									border: `1px solid ${d || _ || O?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: S.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					u = (0, o.PA)((m) => {
						const _ = (0, w.u)(),
							d = { disableA11y: !1, treePath: (0, I.LU)() },
							O = (0, g.v6)('button', _, d, m),
							{
								content: S,
								children: M,
								disabled: K,
								native: le,
								onClick: F,
								disableA11y: N,
								disableStyles: ce,
								className: J,
								internalClassName: ae,
								icon: T,
								lang: oe,
								treePath: W,
								style: Y,
								styleScript: B,
								themeStyleScript: x,
								...H
							} = O,
							U = { icon: { internalClassName: 'ss__button__icon', ...(0, v.s)({ disableStyles: ce }), theme: O?.theme, treePath: W } },
							ne = {
								...(0, E.Z)(O, te),
								className: a()('ss__button', { 'ss__button--native': le, 'ss__button--disabled': K }, J, ae),
								disabled: K,
								onClick: (q) => !K && F && F(q),
								...H,
							},
							X = { ref: (q) => (0, j.iy)(q) },
							Z = {},
							G = y()(Z, oe || {}),
							Q = (0, f.u)(G, {});
						return S || M || T || oe?.button?.value
							? (0, t.Y)(l._, {
									children: le
										? (0, t.FD)('button', {
												...ne,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...Q.button?.all,
														children: [(0, s.Y)(S, { treePath: W }), (0, s.Y)(M, { treePath: W })],
													}),
													T && (0, t.Y)(P.I, { ...U.icon, ...(typeof T == 'string' ? { icon: T } : T) }),
												],
										  })
										: (0, t.FD)('div', {
												...(N ? {} : X),
												role: 'button',
												'aria-disabled': K,
												...ne,
												...Q.button?.attributes,
												children: [
													S || M || Q.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...Q.button?.value,
																children: [(0, s.Y)(S, { treePath: W }), (0, s.Y)(M, { treePath: W })],
														  })
														: void 0,
													T && (0, t.Y)(P.I, { ...U.icon, ...(typeof T == 'string' ? { icon: T } : T) }),
												],
										  }),
							  })
							: (0, t.Y)(h.FK, {});
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(R, c, e) {
				'use strict';
				e.d(c, { m: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/compat/dist/compat.module.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					w = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/hooks/useClickOutside.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					g = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/hooks/useA11y.tsx');
				const f = ({ disableOverlay: y }) =>
						(0, p.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: y ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${y ? 'default' : 'pointer'}` },
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
					D = (0, l.PA)((y) => {
						const $ = (0, I.u)(),
							te = { startOpen: !1, disableA11y: !1, treePath: (0, j.LU)() },
							u = (0, g.v6)('dropdown', $, te, y),
							{
								button: m,
								content: _,
								children: b,
								disabled: d,
								open: O,
								toggleOnHover: S,
								onMouseEnter: M,
								onMouseLeave: K,
								disableClick: le,
								onClick: F,
								onToggle: N,
								focusTrapContent: ce,
								startOpen: J,
								disableClickOutside: ae,
								disableA11y: T,
								className: oe,
								internalClassName: W,
								treePath: Y,
								usePortal: B,
							} = u;
						let x, H;
						const U = O === void 0;
						U ? ([x, H] = (0, n.J0)(J)) : (x = O);
						const [z, ne] = (0, n.J0)(!1),
							X = (0, n.li)(null),
							Z = (0, n.li)(null),
							[G, Q] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let q;
						ae ||
							(q = (0, s.L)((r) => {
								(B && Z.current && Z.current.contains(r.target)) || (x && (d || (U && H && H(!1), N && N(r, !1))));
							})),
							(0, n.vJ)(() => {
								if (B && x) {
									const r = () => {
										if (X.current) {
											const L = X.current.getBoundingClientRect();
											Q({ top: L.bottom + window.scrollY, left: L.left + window.scrollX, width: L.width });
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
							}, [B, x]);
						const V = (r, L) => {
								U &&
									H &&
									H((re) => {
										const ee = L ?? !re;
										return ee != re && N && N(r, ee), ee;
									});
							},
							de = (0, E.Z)(u, f),
							pe = {
								onMouseEnter:
									(S || M) &&
									((r) => {
										z || (S && !d && V(r, !0), M && M(r));
									}),
								onMouseLeave:
									(S || K) &&
									((r) => {
										z || (S && !d && V(r, !1), K && K(r));
									}),
							},
							se = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (r) => {
									(Z.current = r),
										T ||
											(0, P.iy)(r, 0, !!ce, (L) => {
												U ? V(L) : F && F(L);
											});
								},
								children: [(0, v.Y)(_, { open: x, toggleOpen: V, treePath: Y }), (0, v.Y)(b, { open: x, toggleOpen: V, treePath: Y })],
							});
						return (0, t.Y)(w._, {
							children: (0, t.FD)('div', {
								...de,
								className: o()('ss__dropdown', { 'ss__dropdown--open': x }, oe, W),
								ref: q,
								...pe,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (r) => {
											(X.current = r), T || (0, P.iy)(r);
										},
										'aria-expanded': x,
										role: 'button',
										onTouchStart: () => {
											ne(!0);
										},
										onClick: (r) => {
											!d && !le && (V(r), F && F(r)),
												setTimeout(() => {
													ne(!1);
												}, 300);
										},
										children: (0, v.Y)(m, { open: x, toggleOpen: V, treePath: Y }),
									}),
									B
										? x &&
										  (_ || b) &&
										  (0, h.createPortal)(
												(0, t.Y)('div', {
													className: o()('ss__dropdown__portal', oe, W, { 'ss__dropdown__portal--open': x }),
													css: de.css,
													style: { position: 'absolute', top: G.top, left: G.left, width: G.width, zIndex: 9999 },
													children: se,
												}),
												document.body
										  )
										: (_ || b) && se,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Select/Select.tsx'(R, c, e) {
				'use strict';
				e.d(c, { l: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					l = e.n(o),
					w = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					P = e('./components/src/components/Atoms/Button/Button.tsx'),
					f = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					D = e('./components/src/hooks/useA11y.tsx'),
					y = e('./components/src/hooks/useLang.tsx'),
					$ = e('../../node_modules/deepmerge/dist/cjs.js'),
					k = e.n($),
					te = e('../../node_modules/color/index.js'),
					u = e.n(te);
				const m = ({ color: b, backgroundColor: d, borderColor: O, theme: S, native: M }) => {
						const K = new (u())(d || b || S?.variables?.colors?.primary).lightness(95);
						return M
							? (0, a.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, a.AH)({
									display: 'inline-flex',
									color: b,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: d || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${O || b || S?.variables?.colors?.primary || '#333'}`,
										'.ss__select__dropdown__button': { alignItems: 'center' },
										'.ss__select__select__option': {
											cursor: 'pointer',
											padding: '6px 8px',
											color: 'initial',
											display: 'flex',
											alignItems: 'center',
											gap: '5px',
											'&.ss__select__select__option--selected': { fontWeight: 'bold' },
											'&:hover': { backgroundColor: K.hex() || '#f8f8f8' },
										},
									},
							  });
					},
					_ = (0, p.PA)((b) => {
						const d = (0, I.u)(),
							S = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, j.LU)() },
							M = (0, v.v6)('select', d, S, b),
							{
								backgroundColor: K,
								borderColor: le,
								color: F,
								clearSelection: N,
								disableClickOutside: ce,
								disabled: J,
								hideLabel: ae,
								hideLabelOnSelection: T,
								iconColor: oe,
								iconClose: W,
								iconOpen: Y,
								label: B,
								native: x,
								onSelect: H,
								selected: U,
								separator: z,
								startOpen: ne,
								hideIcon: X,
								hideOptionIcons: Z,
								hideOptionLabels: G,
								hideSelection: Q,
								stayOpenOnSelection: q,
								disableStyles: V,
								className: de,
								internalClassName: pe,
								treePath: se,
							} = M;
						let { options: r } = M;
						const L = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, s.s)({ disableStyles: V, disabled: J }),
									theme: M?.theme,
									treePath: se,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, s.s)({ disableStyles: V, disabled: J, color: F, backgroundColor: K, borderColor: le }),
									theme: M?.theme,
									treePath: se,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, s.s)({ disableStyles: V, color: oe || F, size: '12px' }),
									theme: M?.theme,
									treePath: se,
								},
							},
							[re, ee] = (0, n.J0)(!!ne),
							[A, he] = (0, n.J0)(U),
							[Ee] = (0, n.J0)(U);
						try {
							if (U) {
								const i = JSON.stringify(Ee),
									C = JSON.stringify(U),
									ie = JSON.stringify(A);
								i !== C && C !== ie && he(U);
							}
						} catch {}
						A && N && (r = [{ label: N, value: '' }, ...r]);
						const ge = (i, C) => {
								C != A && H && H(i, C), he(C), !q && ee(!1);
							},
							fe = (0, g.Z)(M, m),
							ue = r.filter((i) => A?.value === i.value),
							ye = {
								buttonLabel: {
									value: B,
									attributes: {
										'aria-label': `${B} dropdown, ${r.length} options ${ue.length ? `, Currently selected option is ${ue[0].label}` : ''}`,
									},
								},
							},
							_e = k()(ye, M.lang || {}),
							me = (0, y.u)(_e, { options: r, selectedOptions: ue, label: B, open: re });
						return typeof r == 'object' && r?.length
							? (0, t.Y)(w._, {
									children: (0, t.Y)('div', {
										...fe,
										className: l()('ss__select', { 'ss__select--native': x }, { 'ss__select--disabled': J }, de, pe),
										children: x
											? (0, t.FD)(t.FK, {
													children: [
														(B || _e.buttonLabel.value) &&
															!ae &&
															!T &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...me.buttonLabel?.all }),
																	z && (0, t.Y)('span', { className: 'ss__select__label__separator', children: z }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: J || void 0,
															onChange: (i) => {
																const C = i.target,
																	ie = C.options[C.selectedIndex],
																	Oe = r.filter((be, ve) => be.label == ie.text && (be.value == ie.value || be.value == ve)).pop();
																!J && ge(i, Oe);
															},
															children: [
																!A && N && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: N }),
																r.map((i, C) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: A?.value === i.value,
																		value: i.value ?? C,
																		children: i.label,
																	})
																),
															],
														}),
														!X && (0, t.Y)(f.I, { ...L.icon, name: 'open', ...(typeof Y == 'string' ? { icon: Y } : Y) }),
													],
											  })
											: (0, t.Y)(E.m, {
													...L.dropdown,
													disableClickOutside: ce,
													open: re,
													onToggle: (i, C) => ee((ie) => C ?? !ie),
													onClick: () => ee((i) => !i),
													disableA11y: !0,
													button: (0, t.FD)(P.$, {
														...L.button,
														children: [
															(B || _e.buttonLabel.value) &&
																!T &&
																!ae &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...me.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...me.buttonLabel.value }),
																		z && A && (0, t.Y)('span', { className: 'ss__select__label__separator', children: z }),
																	],
																}),
															A &&
																!Q &&
																(0, t.FD)(t.FK, {
																	children: [
																		A.icon &&
																			!Z &&
																			(0, t.Y)(f.I, {
																				...L.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof A.icon == 'string' ? { icon: A.icon } : A.icon),
																			}),
																		!G && (0, t.Y)('span', { className: 'ss__select__selection', children: A?.label }),
																	],
																}),
															!X &&
																(0, t.Y)(f.I, {
																	...L.icon,
																	name: re ? 'open' : 'close',
																	...(re ? { ...(typeof W == 'string' ? { icon: W } : W) } : { ...(typeof Y == 'string' ? { icon: Y } : Y) }),
																}),
														],
													}),
													children: (0, t.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof B == 'string' ? B : '',
														ref: (i) => (0, D.iy)(i, -1, !0, () => ee(!1)),
														children: r.map((i) =>
															(0, t.FD)('li', {
																ref: (C) => (0, D.iy)(C),
																'aria-disabled': i.disabled,
																title: i.label,
																className: l()('ss__select__select__option', { 'ss__select__select__option--selected': A?.value === i.value }),
																onClick: (C) => !J && ge(C, i),
																role: 'option',
																'aria-selected': A?.value === i.value,
																children: [
																	i.icon &&
																		!Z &&
																		(0, t.Y)(f.I, {
																			...L.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${se} dropdown`,
																			...(typeof i.icon == 'string' ? { icon: i.icon } : i.icon),
																		}),
																	!G && (0, t.Y)('span', { children: i.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: (0, t.Y)(h.FK, {});
					});
			},
			'./components/src/hooks/useA11y.tsx'(R, c, e) {
				'use strict';
				e.d(c, { DH: () => p, aZ: () => n, iy: () => a });
				const t = 9,
					h = 27,
					n = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(o, l, w, I) {
					const j = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${j}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = j),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					o &&
						!o.attributes?.[n] &&
						(o.setAttribute(n, !0),
						o.setAttribute('tabIndex', `${l || 0}`),
						o.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && o.click();
						}),
						w &&
							o.addEventListener('keydown', function (s) {
								const v = o.querySelectorAll(p),
									g = v[0],
									E = v[v.length - 1];
								if (s.keyCode == h) {
									o.focus(), I && I(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === t) &&
									(s.shiftKey
										? document.activeElement === g && (E.focus(), s.preventDefault())
										: document.activeElement === E && (g.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(R, c, e) {
				'use strict';
				e.d(c, { L: () => h });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function h(n) {
					const p = (0, t.li)(),
						a = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							p.current = n;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', o), () => document.removeEventListener('click', o);
							function o(l) {
								a.current && p.current && !a.current.contains(l.target) && p.current(l);
							}
						}, []),
						a
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(R, c, e) {
				'use strict';
				e.d(c, { u: () => t });
				const t = (h, n) => {
					const p = {};
					return (
						Object.keys(h).forEach((a) => {
							const o = h && h[a],
								l = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (l.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: o.value(n) } })
										: (l.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((l.attributes = { 'ss-lang': a }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = o.attributes['aria-label'](n))
											: (l.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](n))
											: (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (l.attributes.title = o.attributes.title(n))
											: (l.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (l.attributes.alt = o.attributes.alt(n)) : (l.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = o.attributes.placeholder(n))
											: (l.attributes.placeholder = o.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': a })),
								(p[a] = l);
						}),
						p
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(R, c, e) {
				'use strict';
				e.d(c, { F: () => t });
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
			'./components/src/utilities/defined.ts'(R, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(h) {
					const n = {};
					return (
						Object.keys(h).map((p) => {
							h[p] !== void 0 && (n[p] = h[p]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(R, c, e) {
				'use strict';
				e.d(c, { p: () => y });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					h = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					w = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					I = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					j = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					v = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					g = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					D = { globals: { siteId: '8uyt2m' } };
				class y {
					static recommendation(m) {
						const _ = m.id;
						if (f[_]) return f[_];
						const b = (f[_] = k({ client: D, controller: m }));
						return (
							b.on('afterStore', async ({ controller: d }, O) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await O();
							}),
							b.init(),
							b
						);
					}
					static autocomplete(m) {
						const _ = m.id;
						if (f[_]) return f[_];
						const b = (f[_] = te({ client: D, controller: m }));
						return (
							b.on('afterStore', async ({ controller: d }, O) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await O();
							}),
							b.init(),
							b
						);
					}
					static search(m) {
						const _ = m.id;
						if (f[_]) return f[_];
						const b = (f[_] = $({ client: D, controller: m }));
						return (
							b.on('afterStore', async ({ controller: d }, O) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await O();
							}),
							b.init(),
							b
						);
					}
				}
				function $(u) {
					const m = new I.V(new s.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), j.X);
					return new h.Tp(u.controller, {
						client: new a.K(u.client.globals, u.client.config),
						store: new l.U(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new v.E(),
						profiler: new g.U(),
						logger: new E.V(),
						tracker: new P.J(u.client.globals),
					});
				}
				function k(u) {
					const m = new I.V(new s.E(), j.X).detach(!0);
					return new p.c(u.controller, {
						client: new a.K(u.client.globals, u.client.config),
						store: new w.t(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new v.E(),
						profiler: new g.U(),
						logger: new E.V(),
						tracker: new P.J(u.client.globals),
					});
				}
				function te(u) {
					const m = new I.V(new s.E(), j.X).detach();
					return new n.Z(u.controller, {
						client: new a.K(u.client.globals, u.client.config),
						store: new o.Y(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new v.E(),
						profiler: new g.U(),
						logger: new E.V(),
						tracker: new P.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, c, e) {
				'use strict';
				e.d(c, { Z: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					p = (a) => {
						const o = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								o.current && a.className?.includes('lang-') && !a.className?.includes(n) && window?.Prism?.highlightElement(o.current);
							}, [a.className, a.children, o]),
							(0, t.Y)('code', { ...a, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function c(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (R.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Select-Select-stories.39dcc465.iframe.bundle.js.map
