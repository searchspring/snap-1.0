(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'(O, l, e) {
				'use strict';
				e.d(l, { p: () => o });
				function o(c) {
					if (typeof c != 'string') return c;
					let s = c.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(O, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => f, List: () => b, __namedExportsOrder: () => M, default: () => x });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/snapify.ts');
				const D = `# Facet Palette Options

Renders a grid of facet palette options. 

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { FacetPaletteOptions } from '@searchspring/snap-preact-components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'palette'. Overrides values passed via the facet prop. 

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`jsx
<FacetPaletteOptions facet={paletteFacet} />
\`\`\`

### hideLabel
The \`hideLabel\` prop will disable the facet label.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideLabel={true} />
\`\`\`

### columns
The \`columns\` prop is the number of columns the grid should contain. Not applicable if using \`horizontal\` prop'.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} columns={3} />
\`\`\`

### gridSize
The \`gridSize\` prop is the size of each palette item. Does not apply if using \`columns\` prop.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} gridSize={'45px'} columns={0} />
\`\`\`

### gapSize
The \`gapSize\` prop is the gap size between rows and columns.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} gapSize={'10px'} />
\`\`\`

### hideIcon
The \`hideIcon\` prop will disable the facet icon from being rendered.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideIcon={true} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet option counts from being rendered.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideCount={true} />
\`\`\`

### hideCheckbox
The \`hideCheckbox\` prop will disable the facet option checkboxes from being rendered.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### layout
The \`layout\` prop determines if the options should render as a \`list\` or \`grid\`. By default \`grid\` will be used.
\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`jsx
<Autocomplete>
	...
	<FacetPaletteOptions values={paletteFacet.values} previewOnFocus={true} />
	...
</Autocomplete>
\`\`\`

### valueProps
The \`valueProps\` prop will be spread onto each value's \`<a>\` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

\`\`\`js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
\`\`\`

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} valueProps={valueProps} />
\`\`\`

### icon
The \`icon\` prop specifiesan object with \`Icon\` component props. 

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`


#### colorMapping
The colorMapping prop allows for custom color mapping overrides. The object used is keyed by a color label, and can take background and label properties. The color label can be any accepted CSS background property value. So a color, string, hash, RGB, gradiant, or an image URL could be used. The label takes a string value and replaces the color's original label for display.

\`\`\`jsx
const colorMapping = {
	'Camo': {
		background: 'brown',
		label: 'Army'
	},
	'Striped': {
		background: "url(https://mysite.com/cdn/shop/files/candy-stripe-square_small.jpg)",
		label: "stripy"
	},
	'rainbow': {
		background: \`linear-gradient(
			90deg,
			rgba(255, 0, 0, 1) 0%,
			rgba(255, 154, 0, 1) 10%,
			rgba(208, 222, 33, 1) 20%,
			rgba(79, 220, 74, 1) 30%,
			rgba(63, 218, 216, 1) 40%,
			rgba(47, 201, 226, 1) 50%,
			rgba(28, 127, 238, 1) 60%,
			rgba(95, 21, 242, 1) 70%,
			rgba(186, 12, 248, 1) 80%,
			rgba(251, 7, 217, 1) 90%,
			rgba(255, 0, 0, 1) 100%
		)\`,
	}
}
<FacetPaletteOptions values={paletteFacet.values} colorMapping={colorMapping} />
\`\`\`


`,
					x = {
						title: 'Molecules/FacetPaletteOptions',
						component: d.P,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: r.Z } }, children: D }), (0, o.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(v) => (0, o.Y)('div', { style: { maxWidth: '500px' }, children: (0, o.Y)(v, {}) })],
						argTypes: {
							values: {
								description: 'Facet.values store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet values store array' } },
								control: { type: 'none' },
							},
							facet: {
								description: 'Facet store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in palette. Not applicable if using horizontal prop',
								table: { type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							gridSize: {
								defaultValue: '45px',
								description: 'Size of each palette item. Does not apply if using `columns` prop',
								table: { type: { summary: 'string' }, defaultValue: { summary: '45px' } },
								control: { type: 'text' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
							},
							hideLabel: {
								description: 'Hide facet option label',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCount: {
								description: 'Hide facet option count',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hideCheckbox: {
								description: 'Hide facet option checkbox',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							layout: {
								description: 'facet option layout',
								defaultValue: 'grid',
								table: { type: { summary: 'string' } },
								options: ['grid', 'list'],
								control: { type: 'select' },
							},
							hideIcon: {
								description: 'Hide facet option icon',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							horizontal: {
								defaultValue: !1,
								description: 'Render facet options horizontally',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							previewOnFocus: {
								description: 'Invoke facet value preview upon focus',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							valueProps: {
								description: 'Object of facet value props',
								table: { type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'none' },
							},
							onClick: {
								description: 'Facet option click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							colorMapping: {
								description: 'Object of color mapping values',
								table: { type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'object' },
							},
							...t.F,
						},
					},
					y = p.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					i = (0, c.PA)(({ args: v, controller: h }) => {
						const T = h?.store?.facets.filter((I) => I.field == 'color').pop();
						return (0, o.Y)(d.P, { ...v, values: T.values });
					}),
					f = (v, { loaded: { controller: h } }) => (0, o.Y)(i, { args: v, controller: h });
				f.loaders = [async () => (await y.search(), { controller: y })];
				const b = (v, { loaded: { controller: h } }) => (0, o.Y)(i, { args: v, controller: h });
				(b.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(b.loaders = [async () => (await y.search(), { controller: y })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: FacetPaletteOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableFacetPaletteOptions args={args} controller={controller} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: {
								originalSource: `(args: FacetPaletteOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableFacetPaletteOptions args={args} controller={controller} />;
}`,
								...b.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default', 'List'];
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(O, l, e) {
				'use strict';
				e.d(l, { S: () => U });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					r = e.n(d),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = e('./components/src/hooks/useA11y.tsx'),
					v = e('./components/src/hooks/useLang.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(h);
				const I = ({ size: C, color: k, theme: u, native: _ }) => {
						const a = isNaN(Number(C)) ? C : `${C}px`;
						return _
							? (0, s.AH)({})
							: (0, s.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: a,
									width: a,
									border: `1px solid ${k || u?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${C} - 30%)`, height: `calc(${C} - 30%)` },
							  });
					},
					U = (0, t.PA)((C) => {
						const k = (0, i.u)(),
							_ = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, f.LU)() },
							a = (0, D.v6)('checkbox', k, _, C),
							{
								checked: g,
								color: m,
								disabled: E,
								icon: P,
								iconColor: Z,
								onClick: F,
								size: w,
								startChecked: G,
								native: X,
								disableA11y: N,
								disableStyles: Q,
								className: B,
								internalClassName: z,
								theme: q,
								treePath: R,
								lang: ee,
								style: te,
								styleScript: se,
								themeStyleScript: ne,
								name: oe,
								...$
							} = a,
							V = isNaN(Number(w)) ? w : `${w}px`,
							Y = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, p.s)({ color: Z || m || q?.variables?.colors?.primary, disableStyles: Q, icon: P, size: V && `calc(${V} - 30%)` }),
									theme: a.theme,
									treePath: R,
								},
							};
						let n, K;
						const H = g === void 0;
						H ? ([n, K] = (0, c.J0)(G)) : (n = g);
						const S = (L) => {
								E || (H && K && K((ae) => !ae), F && F(L));
							},
							A = (0, x.Z)(a, I),
							W = { checkbox: {} },
							J = T()(W, ee || {}),
							j = (0, v.u)(J, { checkedState: n, disabled: E });
						return (0, o.Y)(y._, {
							children: X
								? (0, o.Y)('input', {
										...A,
										className: r()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': E, 'ss__checkbox--active': n }, B, z),
										type: 'checkbox',
										'aria-checked': n,
										onClick: (L) => S(L),
										disabled: E,
										checked: n,
								  })
								: (0, o.Y)('span', {
										...A,
										className: r()('ss__checkbox', { 'ss__checkbox--disabled': E, 'ss__checkbox--active': n }, B, z),
										onClick: (L) => S(L),
										ref: (L) => (N ? null : (0, M.iy)(L)),
										'aria-disabled': E,
										role: 'checkbox',
										'aria-checked': n,
										...$,
										...j.checkbox.all,
										children: n
											? (0, o.Y)(b.I, { ...Y.icon, ...(typeof P == 'string' ? { icon: P } : P) })
											: (0, o.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(O, l, e) {
				'use strict';
				e.d(l, { P: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/dist/preact.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					r = e.n(d),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					D = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					f = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					h = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					T = e('./components/src/hooks/useLang.tsx'),
					I = e('../../node_modules/deepmerge/dist/cjs.js'),
					U = e.n(I),
					C = e('../../node_modules/color/index.js'),
					k = e.n(C);
				const u = ({ columns: a, gridSize: g, gapSize: m, horizontal: E, theme: P }) =>
						(0, s.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: a ? `repeat(${a}, calc((100% - (${a - 1} * ${m}))/ ${a}))` : `repeat(auto-fill, minmax(${g}, 1fr))`,
							gap: m,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${a} - ${2 * Math.round((a + 2) / 2)}px )`,
								marginRight: m,
								marginBottom: m,
								[`:nth-of-type(${a}n)`]: { marginRight: '0' },
								'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '100%', padding: '2px' },
								'.ss__facet-palette-options__option__palette': {
									paddingTop: 'calc(100% - 2px)',
									border: '1px solid #EBEBEB',
									borderRadius: '100%',
									position: 'relative',
									'.ss__facet-palette-options__icon': {
										position: 'absolute',
										top: 0,
										right: 0,
										left: 0,
										margin: 'auto',
										bottom: 0,
										textAlign: 'center',
										stroke: 'black',
										strokeWidth: '3px',
										strokeLinejoin: 'round',
										opacity: 0,
									},
								},
								'.ss__facet-palette-options__option__value': {
									display: 'block',
									textAlign: 'center',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								},
							},
							'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
							'&.ss__facet-palette-options--list': {
								display: 'flex',
								flexDirection: E ? 'row' : 'column',
								'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
								'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
								'.ss__facet-palette-options__option--list': { alignItems: 'center' },
								'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
								'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
							},
							'&.ss__facet-palette-options--grid': {
								'.ss__facet-palette-options__checkbox': {
									display: 'flex',
									textAlign: 'center',
									overflow: 'hidden',
									margin: 'auto',
									marginBottom: '5px',
								},
								'.ss__facet-palette-options__option--filtered': {
									'.ss__facet-palette-options__option__wrapper': {
										borderColor: P?.variables?.colors?.primary || '#333 !important',
										padding: '0px',
										borderWidth: '4px',
									},
								},
								'.ss__facet-palette-options__option': {
									'&:hover': {
										cursor: 'pointer',
										'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
										'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
									},
								},
							},
							'.ss__facet-palette-options__option__value__count': {
								fontSize: '0.8em',
								display: 'block',
								textAlign: 'center',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							},
						}),
					_ = (0, t.PA)((a) => {
						const g = (0, b.u)(),
							m = (0, M.LU)(),
							E = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: a.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: m,
							},
							P = (0, x.v6)('facetPaletteOptions', g, E, a),
							{
								values: Z,
								hideLabel: F,
								layout: w,
								hideCount: G,
								hideCheckbox: X,
								colorMapping: N,
								hideIcon: Q,
								onClick: B,
								previewOnFocus: z,
								valueProps: q,
								facet: R,
								horizontal: ee,
								disableStyles: te,
								className: se,
								internalClassName: ne,
								treePath: oe,
							} = P;
						ee && (P.columns = 0);
						const $ = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, D.s)({ disableStyles: te, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: P?.theme,
									treePath: oe,
								},
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, D.s)({ disableStyles: te }),
									theme: P?.theme,
									treePath: oe,
								},
							},
							V = (0, y.Z)(P, u),
							Y = Z || R?.values;
						return Y?.length
							? (0, o.Y)(f._, {
									children: (0, o.Y)('div', {
										...V,
										className: r()('ss__facet-palette-options', `ss__facet-palette-options--${w?.toLowerCase()}`, se, ne),
										children: Y.map((n) => {
											const K = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																n.filtered
																	? `remove selected filter ${R?.label || ''} - ${n.label}`
																	: R?.label
																	? `filter by ${R?.label} - ${n.label}`
																	: `filter by ${n.label}`
															}`,
														},
													},
												},
												H = U()(K, P.lang || {}),
												S = (0, T.u)(H, { facet: R, value: n });
											let A;
											N && (A = Object.fromEntries(Object.entries(N).map(([j, L]) => [j.toLowerCase(), L])));
											const W = A && A[n.label.toLowerCase()] && A[n.label.toLowerCase()].background ? A[n.label.toLowerCase()].background : n.value;
											let J = !1;
											if (W)
												try {
													J = new (k())(W.toLowerCase()).isDark();
												} catch {}
											return (0, o.FD)(
												'a',
												{
													className: r()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': n.filtered },
														{ 'ss__facet-palette-options__option--dark': J },
														`ss__facet-palette-options__option--${w?.toLowerCase()}`
													),
													href: n.url?.link?.href,
													...(F ? { title: n.label } : {}),
													...q,
													onClick: (j) => {
														n.url?.link?.onClick(j), B && B(j);
													},
													'aria-atomic': 'false',
													...(z ? (0, v.l)(() => n?.preview && n.preview()) : {}),
													...S.paletteOption?.all,
													children: [
														!X && (0, o.Y)(h.S, { ...$.checkbox, checked: n.filtered, disableA11y: !0, ...S.paletteOption.attributes }),
														(0, o.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, o.Y)('div', {
																className: r()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${p.p(n.value)}`
																),
																style: { background: W },
																children: !Q && n.filtered && w?.toLowerCase() == 'grid' && (0, o.Y)(i.I, { ...$.icon }),
															}),
														}),
														!F &&
															(0, o.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: A?.[n.label.toLowerCase()]?.label ?? n.label,
															}),
														!G &&
															n?.count > 0 &&
															(0, o.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', n.count, ')'] }),
													],
												},
												n.value
											);
										}),
									}),
							  })
							: (0, o.Y)(c.FK, {});
					});
			},
			'./components/src/hooks/useA11y.tsx'(O, l, e) {
				'use strict';
				e.d(l, { DH: () => d, aZ: () => s, iy: () => r });
				const o = 9,
					c = 27,
					s = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(t, p, D, x) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = y),
							(i.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${p || 0}`),
						t.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && t.click();
						}),
						D &&
							t.addEventListener('keydown', function (i) {
								const f = t.querySelectorAll(d),
									b = f[0],
									M = f[f.length - 1];
								if (i.keyCode == c) {
									t.focus(), x && x(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === o) &&
									(i.shiftKey
										? document.activeElement === b && (M.focus(), i.preventDefault())
										: document.activeElement === M && (b.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(O, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (c, s) => {
					const d = {};
					return (
						Object.keys(c).forEach((r) => {
							const t = c && c[r],
								p = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (p.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (p.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((p.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (p.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (p.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (p.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (p.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (p.attributes.title = t.attributes.title(s))
											: (p.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (p.attributes.alt = t.attributes.alt(s)) : (p.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (p.attributes.placeholder = t.attributes.placeholder(s))
											: (p.attributes.placeholder = t.attributes.placeholder))),
								(p.all = { ...p.value, ...p.attributes, 'ss-lang': r })),
								(d[r] = p);
						}),
						d
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(O, l, e) {
				'use strict';
				e.d(l, { l: () => o });
				const o = (c, s = { delay: 333, focusElem: !0 }) => {
					let d;
					return {
						onMouseEnter: (r) => {
							clearTimeout(d),
								(d = window.setTimeout(() => {
									s.focusElem && r.target.focus(), c && c();
								}, s.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(d);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(O, l, e) {
				'use strict';
				e.d(l, { F: () => o });
				const o = {
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
			'./components/src/utilities/defined.ts'(O, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(c) {
					const s = {};
					return (
						Object.keys(c).map((d) => {
							c[d] !== void 0 && (s[d] = c[d]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(O, l, e) {
				'use strict';
				e.d(l, { p: () => I });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					p = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					D = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					i = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					b = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					T = { globals: { siteId: '8uyt2m' } };
				class I {
					static recommendation(_) {
						const a = _.id;
						if (h[a]) return h[a];
						const g = (h[a] = C({ client: T, controller: _ }));
						return (
							g.on('afterStore', async ({ controller: m }, E) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await E();
							}),
							g.init(),
							g
						);
					}
					static autocomplete(_) {
						const a = _.id;
						if (h[a]) return h[a];
						const g = (h[a] = k({ client: T, controller: _ }));
						return (
							g.on('afterStore', async ({ controller: m }, E) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await E();
							}),
							g.init(),
							g
						);
					}
					static search(_) {
						const a = _.id;
						if (h[a]) return h[a];
						const g = (h[a] = U({ client: T, controller: _ }));
						return (
							g.on('afterStore', async ({ controller: m }, E) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await E();
							}),
							g.init(),
							g
						);
					}
				}
				function U(u) {
					const _ = new x.V(new i.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), y.X);
					return new c.Tp(u.controller, {
						client: new r.K(u.client.globals, u.client.config),
						store: new p.U(u.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new f.E(),
						profiler: new b.U(),
						logger: new M.V(),
						tracker: new v.J(u.client.globals),
					});
				}
				function C(u) {
					const _ = new x.V(new i.E(), y.X).detach(!0);
					return new d.c(u.controller, {
						client: new r.K(u.client.globals, u.client.config),
						store: new D.t(u.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new f.E(),
						profiler: new b.U(),
						logger: new M.V(),
						tracker: new v.J(u.client.globals),
					});
				}
				function k(u) {
					const _ = new x.V(new i.E(), y.X).detach();
					return new s.Z(u.controller, {
						client: new r.K(u.client.globals, u.client.config),
						store: new t.Y(u.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new f.E(),
						profiler: new b.U(),
						logger: new M.V(),
						tracker: new v.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, l, e) {
				'use strict';
				e.d(l, { Z: () => d });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					d = (r) => {
						const t = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, o.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (O.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.fe188b97.iframe.bundle.js.map
