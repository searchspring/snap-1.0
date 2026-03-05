(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(T, c, e) {
				'use strict';
				e.d(c, { p: () => o });
				function o(l) {
					if (typeof l != 'string') return l;
					let s = l.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(T, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => b, List: () => g, __namedExportsOrder: () => P, default: () => M });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const A = `# Facet Palette Options

Renders a grid of facet palette options. 

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { FacetPaletteOptions } from '@athoscommerce/snap-preact/components';
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
The colorMapping prop allows for custom color mapping overrides. The object used is keyed by a color label, and can take background, backgroundImageUrl and label properties. 
The color label can be any accepted CSS background property value. So a color, string, hash, RGB, gradiant, or an image URL could be used. 
The label takes a string value and replaces the color's original label for display.
The backgroundImageUrl will render an actual HTML Image element rather than css background url. 

\`\`\`jsx
const colorMapping = {
	'Camo': {
		background: 'brown',
		label: 'Army'
	},
	'Red': {
		backgroundImageUrl: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/bfbec80cfd07b650c2f02b5f8a8c29b3c726e9da',
		label: 'Red'
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
					M = {
						title: 'Molecules/FacetPaletteOptions',
						component: d.P,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: p.Z } }, children: A }), (0, o.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(E) => (0, o.Y)(E, {})],
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
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							gridSize: {
								defaultValue: '45px',
								description: 'Size of each palette item. Does not apply if using `columns` prop',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '45px' } },
								control: { type: 'text' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
							},
							hideLabel: {
								description: 'Hide facet option label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCount: {
								description: 'Hide facet option count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hideCheckbox: {
								description: 'Hide facet option checkbox',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							layout: {
								description: 'facet option layout',
								defaultValue: 'grid',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: ['grid', 'list'],
								control: { type: 'select' },
							},
							hideIcon: {
								description: 'Hide facet option icon',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							horizontal: {
								defaultValue: !1,
								description: 'Render facet options horizontally',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							previewOnFocus: {
								description: 'Invoke facet value preview upon focus',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							valueProps: {
								description: 'Object of facet value props',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'none' },
							},
							onClick: {
								description: 'Facet option click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							colorMapping: {
								description: 'Object of color mapping values',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'object' },
							},
							...t.F,
						},
					},
					v = r.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					i = (0, l.PA)(({ args: E, controller: h }) => {
						const I = h?.store?.facets.filter((j) => j.field == 'color').pop();
						return (0, o.Y)(d.P, { ...E, values: I.values });
					}),
					b = (E, { loaded: { controller: h } }) =>
						(0, o.Y)('div', { style: { maxWidth: E?.layout == 'list' ? '100%' : '500px' }, children: (0, o.Y)(i, { args: E, controller: h }) });
				b.loaders = [async () => (await v.search(), { controller: v })];
				const g = (E, { loaded: { controller: h } }) =>
					(0, o.Y)('div', { style: { maxWidth: E?.layout == 'list' ? '100%' : '500px' }, children: (0, o.Y)(i, { args: E, controller: h }) });
				(g.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(g.loaders = [async () => (await v.search(), { controller: v })]),
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
  return <div style={{
    maxWidth: args?.layout == 'list' ? '100%' : '500px'
  }}>
            <ObservableFacetPaletteOptions args={args} controller={controller} />
        </div>;
}`,
								...b.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
  return <div style={{
    maxWidth: args?.layout == 'list' ? '100%' : '500px'
  }}>
            <ObservableFacetPaletteOptions args={args} controller={controller} />
        </div>;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default', 'List'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(T, c, e) {
				'use strict';
				e.d(c, { _: () => g, t: () => i });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					p = e.n(d),
					t = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts');
				const i = '//cdn.athoscommerce.net/snap/images/fallback.png',
					b = ({ height: P }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: P || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function g(P) {
					const E = (0, r.u)(),
						h = (0, A.LU)(),
						I = { fallback: i, lazy: !0, treePath: h },
						j = (0, M.v6)('image', E, I, P),
						{
							alt: k,
							src: x,
							fallback: U,
							title: _,
							hoverSrc: m,
							lazy: a,
							onMouseOver: f,
							onMouseOut: u,
							onError: y,
							onLoad: O,
							onClick: F,
							className: K,
							internalClassName: R,
						} = j,
						[Y, w] = (0, l.J0)(!1),
						[S, N] = (0, l.J0)(!1),
						B = (0, l.li)('');
					(0, l.vJ)(() => {
						B.current = x;
					}),
						B.current && B.current != x && w(!1);
					const z = (0, v.Z)(j, b);
					return (0, o.Y)(t._, {
						children: (0, o.Y)('div', {
							...z,
							className: p()('ss__image', { 'ss__image--hidden': !Y }, K, R),
							children: (0, o.Y)('img', {
								src: (S ? m : x) || U,
								alt: k,
								title: _ || k,
								loading: a ? 'lazy' : void 0,
								onLoad: (C) => {
									w(!0), O && O(C);
								},
								onClick: (C) => F && F(C),
								onError: (C) => {
									(C.target.src = U || ''), y && y(C);
								},
								onMouseOver: (C) => {
									m && N(!0), f && f(C);
								},
								onMouseOut: (C) => {
									m && N(!1), u && u(C);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(T, c, e) {
				'use strict';
				e.d(c, { S: () => k });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					p = e.n(d),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useA11y.tsx'),
					E = e('./components/src/hooks/useLang.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(h);
				const j = ({ size: x, color: U, theme: _, native: m }) => {
						const a = isNaN(Number(x)) ? x : `${x}px`;
						return m
							? (0, s.AH)({})
							: (0, s.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: a,
									width: a,
									border: `1px solid ${U || _?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${x} - 30%)`, height: `calc(${x} - 30%)` },
							  });
					},
					k = (0, t.PA)((x) => {
						const U = (0, i.u)(),
							m = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, b.LU)() },
							a = (0, A.v6)('checkbox', U, m, x),
							{
								checked: f,
								color: u,
								disabled: y,
								icon: O,
								iconColor: F,
								onClick: K,
								size: R,
								startChecked: Y,
								native: w,
								disableA11y: S,
								disableStyles: N,
								className: B,
								internalClassName: z,
								theme: C,
								treePath: W,
								lang: oe,
								style: G,
								styleScript: ne,
								themeStyleScript: ae,
								name: X,
								...V
							} = a,
							Q = isNaN(Number(R)) ? R : `${R}px`,
							q = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, r.s)({ color: F || u || C?.variables?.colors?.primary, disableStyles: N, icon: O, size: Q && `calc(${Q} - 30%)` }),
									theme: a.theme,
									treePath: W,
								},
							};
						let n, $;
						const ee = f === void 0;
						ee ? ([n, $] = (0, l.J0)(Y)) : (n = f);
						const H = (D) => {
								y || (ee && $ && $((se) => !se), K && K(D));
							},
							L = (0, M.Z)(a, j),
							J = { checkbox: {} },
							Z = I()(J, oe || {}),
							te = (0, E.u)(Z, { checkedState: n, disabled: y });
						return (0, o.Y)(v._, {
							children: w
								? (0, o.Y)('input', {
										...L,
										className: p()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': y, 'ss__checkbox--active': n }, B, z),
										type: 'checkbox',
										'aria-checked': n,
										onClick: (D) => H(D),
										disabled: y,
										checked: n,
								  })
								: (0, o.Y)('span', {
										...L,
										className: p()('ss__checkbox', { 'ss__checkbox--disabled': y, 'ss__checkbox--active': n }, B, z),
										onClick: (D) => H(D),
										ref: (D) => (S ? null : (0, P.iy)(D)),
										'aria-disabled': y,
										role: 'checkbox',
										'aria-checked': n,
										...V,
										...te.checkbox.all,
										children: n
											? (0, o.Y)(g.I, { ...q.icon, ...(typeof O == 'string' ? { icon: O } : O) })
											: (0, o.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(T, c, e) {
				'use strict';
				e.d(c, { P: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					d = e.n(s),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					r = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					E = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					h = e('./components/src/hooks/useLang.tsx'),
					I = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(I),
					k = e('../../node_modules/color/index.js'),
					x = e.n(k),
					U = e('./components/src/components/Atoms/Image/Image.tsx');
				const _ = ({ columns: a, gridSize: f, gapSize: u, horizontal: y, theme: O }) =>
						(0, l.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: a ? `repeat(${a}, calc((100% - (${a - 1} * ${u}))/ ${a}))` : `repeat(auto-fill, minmax(${f}, 1fr))`,
							gap: u,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${a} - ${2 * Math.round((a + 2) / 2)}px )`,
								marginRight: u,
								marginBottom: u,
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
									'&.ss__facet-palette-options__option__palette--image': { paddingTop: '0', height: 'auto' },
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
								flexDirection: y ? 'row' : 'column',
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
										borderColor: O?.variables?.colors?.primary || '#333 !important',
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
					m = (0, p.PA)((a) => {
						const f = (0, b.u)(),
							u = (0, g.LU)(),
							y = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: a.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: u,
							},
							O = (0, A.v6)('facetPaletteOptions', f, y, a),
							{
								values: F,
								hideLabel: K,
								layout: R,
								hideCount: Y,
								hideCheckbox: w,
								colorMapping: S,
								hideIcon: N,
								onClick: B,
								previewOnFocus: z,
								valueProps: C,
								facet: W,
								horizontal: oe,
								disableStyles: G,
								className: ne,
								internalClassName: ae,
								treePath: X,
							} = O;
						oe && (O.columns = 0);
						const V = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, r.s)({ disableStyles: G, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: O?.theme,
									treePath: X,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, r.s)({ disableStyles: G }), theme: O?.theme, treePath: X },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, r.s)({ disableStyles: G }),
									theme: O?.theme,
									treePath: X,
								},
							},
							Q = (0, M.Z)(O, _),
							q = F || W?.values;
						return q?.length
							? (0, o.Y)(i._, {
									children: (0, o.Y)('div', {
										...Q,
										className: d()('ss__facet-palette-options', `ss__facet-palette-options--${R?.toLowerCase()}`, ne, ae),
										children: q.map((n) => {
											const $ = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																n.filtered
																	? `remove selected filter ${W?.label || ''} - ${n.label}`
																	: W?.label
																	? `filter by ${W?.label} - ${n.label}`
																	: `filter by ${n.label}`
															}`,
														},
													},
												},
												ee = j()($, O.lang || {}),
												H = (0, h.u)(ee, { facet: W, value: n });
											let L;
											S && (L = Object.fromEntries(Object.entries(S).map(([D, se]) => [D.toLowerCase(), se])));
											const J = L && L[n.label.toLowerCase()] && L[n.label.toLowerCase()].background ? L[n.label.toLowerCase()].background : n.value,
												Z =
													L && L[n.label.toLowerCase()] && L[n.label.toLowerCase()].backgroundImageUrl
														? L[n.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let te = !1;
											if (J)
												try {
													te = new (x())(J.toLowerCase()).isDark();
												} catch {}
											return (0, o.FD)(
												'a',
												{
													className: d()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': n.filtered },
														{ 'ss__facet-palette-options__option--dark': te },
														`ss__facet-palette-options__option--${R?.toLowerCase()}`
													),
													href: n.url?.link?.href,
													...(K ? { title: n.label } : {}),
													...C,
													onClick: (D) => {
														n.url?.link?.onClick(D), B && B(D);
													},
													'aria-atomic': 'false',
													...(z ? (0, P.l)(() => n?.preview && n.preview()) : {}),
													...H.paletteOption?.all,
													children: [
														!w && (0, o.Y)(E.S, { ...V.checkbox, checked: n.filtered, disableA11y: !0, ...H.paletteOption.attributes }),
														(0, o.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, o.FD)('div', {
																className: d()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${t.p(n.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': Z }
																),
																style: { background: J },
																children: [
																	Z ? (0, o.Y)(U._, { ...V.image, src: Z, alt: n.label || n.value.toString() }) : null,
																	!N && n.filtered && R?.toLowerCase() == 'grid' && (0, o.Y)(v.I, { ...V.icon }),
																],
															}),
														}),
														!K &&
															(0, o.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: L?.[n.label.toLowerCase()]?.label ?? n.label,
															}),
														!Y &&
															n?.count > 0 &&
															(0, o.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', n.count, ')'] }),
													],
												},
												n.value
											);
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(T, c, e) {
				'use strict';
				e.d(c, { DH: () => d, aZ: () => s, iy: () => p });
				const o = 9,
					l = 27,
					s = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function p(t, r, A, M) {
					const v = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${v}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = v),
							(i.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${r || 0}`),
						t.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && t.click();
						}),
						A &&
							t.addEventListener('keydown', function (i) {
								const b = t.querySelectorAll(d),
									g = b[0],
									P = b[b.length - 1];
								if (i.keyCode == l) {
									t.focus(), M && M(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === o) &&
									(i.shiftKey
										? document.activeElement === g && (P.focus(), i.preventDefault())
										: document.activeElement === P && (g.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(T, c, e) {
				'use strict';
				e.d(c, { u: () => o });
				const o = (l, s) => {
					const d = {};
					return (
						Object.keys(l).forEach((p) => {
							const t = l && l[p],
								r = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (r.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (r.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((r.attributes = { 'ss-lang': p }),
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
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': p })),
								(d[p] = r);
						}),
						d
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(T, c, e) {
				'use strict';
				e.d(c, { l: () => o });
				const o = (l, s = { delay: 333, focusElem: !0 }) => {
					let d;
					return {
						onMouseEnter: (p) => {
							clearTimeout(d),
								(d = window.setTimeout(() => {
									s.focusElem && p.target.focus(), l && l();
								}, s.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(d);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(T, c, e) {
				'use strict';
				e.d(c, { F: () => o });
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
			'./components/src/utilities/defined.ts'(T, c, e) {
				'use strict';
				e.d(c, { s: () => o });
				function o(l) {
					const s = {};
					return (
						Object.keys(l).map((d) => {
							l[d] !== void 0 && (s[d] = l[d]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(T, c, e) {
				'use strict';
				e.d(c, { p: () => j });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					p = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					i = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					g = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					I = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(m) {
						const a = m.id;
						if (h[a]) return h[a];
						const f = (h[a] = x({ client: I, controller: m }));
						return (
							f.on('afterStore', async ({ controller: u }, y) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await y();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(m) {
						const a = m.id;
						if (h[a]) return h[a];
						const f = (h[a] = U({ client: I, controller: m }));
						return (
							f.on('afterStore', async ({ controller: u }, y) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await y();
							}),
							f.init(),
							f
						);
					}
					static search(m) {
						const a = m.id;
						if (h[a]) return h[a];
						const f = (h[a] = k({ client: I, controller: m }));
						return (
							f.on('afterStore', async ({ controller: u }, y) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await y();
							}),
							f.init(),
							f
						);
					}
				}
				function k(_) {
					const m = new M.V(new i.E({ settings: { coreType: 'query', corePrefix: _.controller.id } }), v.X);
					return new l.Tp(_.controller, {
						client: new p.K(_.client.globals, _.client.config),
						store: new r.U(_.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new b.E(),
						profiler: new g.U(),
						logger: new P.V(),
						tracker: new E.J(_.client.globals),
					});
				}
				function x(_) {
					const m = new M.V(new i.E(), v.X).detach(!0);
					return new d.c(_.controller, {
						client: new p.K(_.client.globals, _.client.config),
						store: new A.t(_.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new b.E(),
						profiler: new g.U(),
						logger: new P.V(),
						tracker: new E.J(_.client.globals),
					});
				}
				function U(_) {
					const m = new M.V(new i.E(), v.X).detach();
					return new s.Z(_.controller, {
						client: new p.K(_.client.globals, _.client.config),
						store: new t.Y(_.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new b.E(),
						profiler: new g.U(),
						logger: new P.V(),
						tracker: new E.J(_.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, c, e) {
				'use strict';
				e.d(c, { Z: () => d });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					d = (p) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && p.className?.includes('lang-') && !p.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [p.className, p.children, t]),
							(0, o.Y)('code', { ...p, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function c(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (T.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.7aa3aa93.iframe.bundle.js.map
