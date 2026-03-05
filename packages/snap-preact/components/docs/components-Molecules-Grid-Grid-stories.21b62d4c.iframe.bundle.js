(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4081],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(x, l, e) {
				'use strict';
				e.d(l, { p: () => o });
				function o(a) {
					if (typeof a != 'string') return a;
					let s = a.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/Grid/Grid.stories.tsx'(x, l, e) {
				'use strict';
				e.r(l),
					e.d(l, {
						Default: () => h,
						DisabledOption: () => _,
						Images: () => f,
						__namedExportsOrder: () => P,
						backgroundColors: () => r,
						default: () => i,
						overflow: () => m,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Molecules/Grid/Grid.tsx'),
					u = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts');
				const t = `# Grid

Renders an Grid of options

## Components Used
- image

## Usage
\`\`\`jsx
import { Grid } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render.

\`\`\`jsx
const options: SwatchOption = [
		{
			value: 'one',
			disabled: true,
		},
		{
			value: 'two',
		},
		{
			value: 'three',
		},
	],

<Grid options={options} />
\`\`\`

### gapSize
The optional \`gapsize\` props specifies the gap size between rows and columns.

\`\`\`jsx
<Grid options={options} gapsize={'15px'} />
\`\`\`

### columns
The optional \`columns\` prop specifies the number of columns to show in the grid. (defaults to 4)

\`\`\`jsx
<Grid options={options} columns={3} />
\`\`\`

### rows
The optional \`rows\` prop specifies the number of rows to show in the grid. Should be noted that if more \`options\` are passed than are allowed via \`columns\` and \`rows\` props, then the component will hide the overflow options behind a \`+ 4 more\` overflow button. 

\`\`\`jsx
<Grid options={options} rows={2} />
\`\`\`

### disableOverflowAction
The optional \`disableOverflowAction\` prop will disable the overflow action from the overflow button (\`+ 4 more\`s). This is to be used when you want the overflow button to show render but you do not want the grid to expand and show all options onclick of the overflow button. 

\`\`\`jsx
<Grid options={options} rows={2} disableOverflowAction={true}/>
\`\`\`

### overflowButton
The optional \`overflowButton\` prop accepts a custom JSX element to render instead of the default overflow button. The custom component will be passed the current expanded state of the grid, as well as the number of options hidden 

\`\`\`jsx

const overflowButton = (expanded, remainder) => {
    return (
       expanded ? (
            <span>
                show {remainder} more
            </span>
        ) : (
            <span>
                Show Less
            </span>
        )
    )
}

<Grid options={options} rows={2} overflowButton={overflowButton}/>
\`\`\`

### overflowButtonInGrid
The optional \`overflowButtonInGrid\` prop specifies if the overflow button should be rendered in the grid or below. 

\`\`\`jsx
<Grid options={options} overflowButtonInGrid={true} />
\`\`\`

### onOverflowButtonClick
The optional \`onOverflowButtonClick\` prop specifies to custom function to call onClick of the overflow button. 

\`\`\`jsx
const onOverflowButtonClick = (expandedState: boolean, remainder: number) => {
    console.log(expandedState, remainder);
}

<Grid options={options} onOverflowButtonClick={onOverflowButtonClick} />
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`jsx
<Grid options={options} hideLabels={true} />
\`\`\`

### hideShowLess
The optional \`hideShowLess\` prop specifies if show less button should be hidden. 

\`\`\`jsx
<Grid options={options} hideShowLess={true} />
\`\`\`

### multiselect
The optional \`multiselect\` prop specifies if more than a single option can be selected at once. 

\`\`\`jsx
<Grid options={options} multiselect={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`jsx
const onSelectFunc = (event, clickedOption, currenctlySelectedOptionArray) => {
    console.log(event, clickedOption, currenctlySelectedOptionArray)
}

<Grid options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the grid title. 

\`\`\`jsx
<Grid options={options} titleText={"Grid Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option(s) if the selected state is handled outside of the component. 

\`\`\`jsx

const selectedOption: SwatchOption = [
    {
        value: 'two',
    },
]

<Grid options={options} selected={selectedOption} />
\`\`\`


`,
					i = {
						title: 'Molecules/Grid',
						component: s.x,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(a.oz, { options: { overrides: { code: u.Z } }, children: t }), (0, o.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, o.Y)('div', { style: { maxWidth: '350px' }, children: (0, o.Y)(d, {}) })],
						argTypes: {
							options: {
								description: 'list of options to display',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'option[]' } },
								control: { type: 'object' },
							},
							titleText: {
								defaultValue: '',
								description: 'optional title to render',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							multiSelect: {
								description: 'enable/disable multiselect',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onSelect: {
								description: 'option onSelect event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onSelect',
							},
							selected: {
								description: 'Current selected option',
								table: { category: 'Templates Legal', type: { summary: 'string | number' } },
								control: { type: 'none' },
							},
							hideLabels: {
								description: 'enable/disable option labels from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideShowLess: {
								description: 'hide show less button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in grid',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
							},
							disableOverflowAction: {
								description: 'enable/disable show more click functionality',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							overflowButtonInGrid: {
								description: 'render overflow button in the grid or below',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							overflowButton: {
								description: 'Slot for custom overflow button component.',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
							},
							onOverflowButtonClick: {
								description: 'Custom onClick event handler for overflow button',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onOverflowButtonClick',
							},
							...c.F,
						},
					},
					h = (d) => (0, o.Y)(s.x, { ...d });
				h.args = {
					options: [
						{ value: 'one' },
						{ value: 'two' },
						{ value: 'three' },
						{ value: 'four' },
						{ value: 'five' },
						{ value: 'six' },
						{ value: 'seven' },
						{ value: 'eight' },
					],
				};
				const _ = (d) => (0, o.Y)(s.x, { ...d });
				_.args = {
					options: [
						{ value: 'one', disabled: !0 },
						{ value: 'two' },
						{ value: 'three' },
						{ value: 'four' },
						{ value: 'five' },
						{ value: 'six' },
						{ value: 'seven' },
						{ value: 'eight' },
					],
				};
				const f = (d) => (0, o.Y)(s.x, { ...d });
				f.args = {
					options: [
						{
							value: 'Faded Khaki',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7.jpg?v=1706125264',
						},
						{
							value: 'Indigo',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb.jpg?v=1706125265https://cdn.shopify.com/s/files/1/0677/2424/7298/files/11136413-I_OK_x_Arvin_Gds_Wool_Boot_Socks_CBM_1_0e3b5702-49e2-4608-acb6-7c131891fc18_450x.jpg?v=1706124808',
						},
						{
							value: 'Mirage',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b.jpg?v=1706125265',
						},
						{
							value: 'Toasted',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb.jpg?v=1706125264',
						},
					],
					overflowButtonInGrid: !0,
					hideLabels: !0,
					rows: 1,
					columns: 4,
				};
				const r = (d) => (0, o.Y)(s.x, { ...d });
				r.args = {
					options: [
						{ value: 'red', background: 'red' },
						{ value: 'blue', background: 'blue' },
						{ value: 'white', background: 'white', disabled: !0 },
						{ value: 'green', background: 'green' },
						{ value: 'yellow', background: 'yellow' },
					],
					hideLabels: !0,
					columns: 5,
					overflowButtonInGrid: !0,
					rows: 1,
				};
				const m = (d) => (0, o.Y)(s.x, { ...d });
				(m.args = {
					options: [
						{ value: 'one' },
						{ value: 'two' },
						{ value: 'three' },
						{ value: 'four' },
						{ value: 'five' },
						{ value: 'six' },
						{ value: 'seven' },
						{ value: 'eight' },
					],
					rows: 2,
					columns: 3,
				}),
					(h.parameters = {
						...h.parameters,
						docs: { ...h.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...h.parameters?.docs?.source } },
					}),
					(_.parameters = {
						..._.parameters,
						docs: { ..._.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ..._.parameters?.docs?.source } },
					}),
					(f.parameters = {
						...f.parameters,
						docs: { ...f.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...f.parameters?.docs?.source } },
					}),
					(r.parameters = {
						...r.parameters,
						docs: { ...r.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...r.parameters?.docs?.source } },
					}),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...m.parameters?.docs?.source } },
					});
				const P = ['Default', 'DisabledOption', 'Images', 'backgroundColors', 'overflow'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(x, l, e) {
				'use strict';
				e.d(l, { _: () => P, t: () => r });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					c = e.n(u),
					t = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts');
				const r = '//cdn.athoscommerce.net/snap/images/fallback.png',
					m = ({ height: d }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: d || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function P(d) {
					const F = (0, i.u)(),
						V = (0, h.LU)(),
						J = { fallback: r, lazy: !0, treePath: V },
						K = (0, _.v6)('image', F, J, d),
						{
							alt: W,
							src: j,
							fallback: N,
							title: H,
							hoverSrc: w,
							lazy: E,
							onMouseOver: S,
							onMouseOut: I,
							onError: L,
							onLoad: B,
							onClick: C,
							className: Z,
							internalClassName: Y,
						} = K,
						[X, k] = (0, a.J0)(!1),
						[$, U] = (0, a.J0)(!1),
						G = (0, a.li)('');
					(0, a.vJ)(() => {
						G.current = j;
					}),
						G.current && G.current != j && k(!1);
					const O = (0, f.Z)(K, m);
					return (0, o.Y)(t._, {
						children: (0, o.Y)('div', {
							...O,
							className: c()('ss__image', { 'ss__image--hidden': !X }, Z, Y),
							children: (0, o.Y)('img', {
								src: ($ ? w : j) || N,
								alt: W,
								title: H || W,
								loading: E ? 'lazy' : void 0,
								onLoad: (g) => {
									k(!0), B && B(g);
								},
								onClick: (g) => C && C(g),
								onError: (g) => {
									(g.target.src = N || ''), L && L(g);
								},
								onMouseOver: (g) => {
									w && U(!0), S && S(g);
								},
								onMouseOut: (g) => {
									w && U(!1), I && I(g);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Grid/Grid.tsx'(x, l, e) {
				'use strict';
				e.d(l, { x: () => H });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/classnames/index.js'),
					c = e.n(u),
					t = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(t),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					_ = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/hooks/useA11y.tsx'),
					P = e('./components/src/hooks/useLang.tsx'),
					d = e('./components/src/components/Atoms/Image/Image.tsx'),
					F = e('./components/src/utilities/cloneWithProps.tsx'),
					V = e('./components/src/utilities/defined.ts'),
					J = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					W = e('../../node_modules/color/index.js'),
					j = e.n(W);
				const N = ({ gapSize: w, columns: E, theme: S, disableOverflowAction: I }) =>
					(0, a.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${E}, 1fr)`,
							gap: w,
							gridAutoRows: '1fr',
							'.ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${S?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px)`,
								margin: `0 ${w} ${w} 0`,
								'.ss__grid__option__inner': {
									aspectRatio: '1/1',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									margin: 'auto',
									height: '100%',
									'.ss__image': { aspectRatio: '1/1' },
								},
								'.ss__grid__option__label': { cursor: 'pointer' },
								[`:nth-of-type(${E}n)`]: { marginRight: '0' },
								'&.ss__grid__option--selected': { border: `2px solid ${S?.variables?.colors?.primary || '#333'}` },
								'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
								'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
								'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: '50%',
									width: '90%',
									height: '1px',
									borderTop: '3px solid #eee',
									outline: '1px solid #ffff',
									transform: 'rotate(-45deg)',
								},
								'&.ss__grid__option--dark': { color: '#fff' },
								'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						},
						'.ss__grid__show-more-wrapper': {
							'&:not(.ss__grid__option)': { margin: '8px' },
							'&:hover': { cursor: I ? 'initial !important' : 'pointer !important' },
						},
					});
				function H(w) {
					const E = (0, f.u)(),
						I = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, r.LU)() },
						L = (0, J.v6)('grid', E, I, w),
						{
							titleText: B,
							onSelect: C,
							hideLabels: Z,
							disableOverflowAction: Y,
							multiSelect: X,
							overflowButton: k,
							columns: $,
							rows: U,
							hideShowLess: G,
							overflowButtonInGrid: O,
							disabled: g,
							options: A,
							disableStyles: oe,
							onOverflowButtonClick: q,
							className: se,
							internalClassName: ne,
							treePath: ee,
							disableA11y: re,
						} = L,
						ae = { image: { internalClassName: 'ss__grid__image', ...(0, V.s)({ disableStyles: oe }), theme: L?.theme, treePath: ee } };
					let T = L.selected;
					const ie = (0, K.Z)(L, N);
					T && !Array.isArray(T) && (T = [T]);
					const [R, Q] = (0, s.J0)(T || []),
						[le] = (0, s.J0)(T || []);
					try {
						if (T) {
							const n = JSON.stringify(le),
								p = JSON.stringify(T),
								b = JSON.stringify(R);
							n !== p && p !== b && Q(T);
						}
					} catch {}
					const ce = (n, p) => {
							if (X) {
								let b;
								R.find((v) => v.value === p.value)
									? ((b = [...R]),
									  b.splice(
											b.findIndex((v) => v.value === p.value),
											1
									  ))
									: (b = [...R, p]),
									C && C(n, p, b),
									Q(b);
							} else C && C(n, p, [p]), Q([p]);
						},
						z = U && $ ? $ * U : A.length,
						D = Math.max(0, A.length - (z - (O ? 1 : 0))),
						[M, de] = (0, s.J0)(!!D),
						te = () => {
							const n = G ? M : !0,
								p = { showMoreText: { value: O ? `+ ${D}` : 'Show More' }, showLessText: { value: O ? `- ${D}` : 'Show Less' } },
								b = i()(p, L.lang || {}),
								v = (0, P.u)(b, { limited: M, remainder: D });
							return n && D > 0 && A.length !== z
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${O ? 'ss__grid__option' : ''}`,
										onClick: (y) => {
											!Y && de(!M), q && q(y, !!M, D);
										},
										role: 'button',
										ref: (y) => (!re && !Y ? (0, m.iy)(y) : null),
										...(M ? v.showMoreText.attributes : v.showLessText.attributes),
										children: k
											? (0, F.Y)(k, { limited: M, remainder: D, treePath: ee })
											: M
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...v.showMoreText.value })
											: D
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...v.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof A == 'object' && A?.length
						? (0, o.Y)(_._, {
								children: (0, o.FD)('div', {
									...ie,
									className: c()('ss__grid', g ? 'ss__grid--disabled' : '', se, ne),
									children: [
										B && (0, o.Y)('h5', { className: 'ss__grid__title', children: B }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												A.map((n, p) => {
													const b = R.some((y) => y.value == n.value);
													let v = !1;
													try {
														v = new (j())(
															n.background ? n.background.toLowerCase() : n.backgroundImageUrl ? '' : n.value.toString().toLowerCase()
														).isDark();
													} catch {}
													if (!M || A.length == z || p < z - (O ? 1 : 0))
														return (0, o.Y)('div', {
															className: c()('ss__grid__option', {
																'ss__grid__option--selected': b,
																'ss__grid__option--disabled': n?.disabled,
																'ss__grid__option--unavailable': n?.available === !1,
																'ss__grid__option--dark': v,
															}),
															onClick: (y) => !g && !n?.disabled && ce(y, n),
															ref: (y) => (0, m.iy)(y),
															title: n.label || n.value.toString(),
															role: 'option',
															'aria-selected': b,
															'aria-disabled': n.disabled,
															children: (0, o.FD)('div', {
																className: c()('ss__grid__option__inner', `ss__grid__option__inner--${h.p(n.value.toString())}`),
																style: { background: n.background ? n.background : n.backgroundImageUrl ? void 0 : n.value },
																children: [
																	!n.background && n.backgroundImageUrl
																		? (0, o.Y)(d._, { ...ae.image, src: n.backgroundImageUrl, alt: n.label || n.value.toString() })
																		: null,
																	Z ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: n.label || n.value }),
																],
															}),
														});
												}),
												O ? (0, o.Y)(te, {}) : null,
											],
										}),
										O ? null : (0, o.Y)(te, {}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/hooks/useA11y.tsx'(x, l, e) {
				'use strict';
				e.d(l, { DH: () => u, aZ: () => s, iy: () => c });
				const o = 9,
					a = 27,
					s = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(t, i, h, _) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = f),
							(r.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(r);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${i || 0}`),
						t.addEventListener('keydown', (r) => {
							(r.code === 'Space' || r.code === 'Enter') && t.click();
						}),
						h &&
							t.addEventListener('keydown', function (r) {
								const m = t.querySelectorAll(u),
									P = m[0],
									d = m[m.length - 1];
								if (r.keyCode == a) {
									t.focus(), _ && _(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === o) &&
									(r.shiftKey
										? document.activeElement === P && (d.focus(), r.preventDefault())
										: document.activeElement === d && (P.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(x, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (a, s) => {
					const u = {};
					return (
						Object.keys(a).forEach((c) => {
							const t = a && a[c],
								i = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((i.attributes = { 'ss-lang': c }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (i.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (i.attributes.title = t.attributes.title(s))
											: (i.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (i.attributes.alt = t.attributes.alt(s)) : (i.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = t.attributes.placeholder(s))
											: (i.attributes.placeholder = t.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': c })),
								(u[c] = i);
						}),
						u
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(x, l, e) {
				'use strict';
				e.d(l, { F: () => o });
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
			'./components/src/utilities/defined.ts'(x, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(a) {
					const s = {};
					return (
						Object.keys(a).map((u) => {
							a[u] !== void 0 && (s[u] = a[u]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(x, l, e) {
				'use strict';
				e.d(l, { Z: () => u });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					u = (c) => {
						const t = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								t.current && c.className?.includes('lang-') && !c.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [c.className, c.children, t]),
							(0, o.Y)('code', { ...c, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (x.exports = l);
			},
		},
	]);
})();
