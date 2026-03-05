(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7861],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(v, c, t) {
				'use strict';
				t.d(c, { p: () => o });
				function o(l) {
					if (typeof l != 'string') return l;
					let r = l.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.stories.tsx'(v, c, t) {
				'use strict';
				t.r(c),
					t.d(c, {
						Default: () => m,
						Disabled: () => f,
						GradientBackground: () => g,
						Grid: () => i,
						Images: () => u,
						__namedExportsOrder: () => B,
						default: () => d,
					});
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = t('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					n = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const s = `# Swatches

Renders a swatch component.

## Components Used
- Slideshow
- Swatches
- Image

## Usage
\`\`\`jsx
import { Swatches } from '@athoscommerce/snap-preact-components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render. Each option requires a value, but can optionally provide label, background, backgroundImageUrl, and disabled properties. 
if no background or backgroundImageUrl provided, the value will be used as the css background color. 

\`\`\`jsx
const options: SwatchOption = [
        {
            value: 'Rainbow',
            label: 'Rainbow',
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
        },
        {
            value: 'red',
            label: 'red',
            backgroundImageUrl:
                'https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png',
        },
		{ value: 'Blue', label: 'Blue' },
		{ value: 'Green', label: 'Green' },
		{ value: 'Orange', label: 'Orange', disabled: true },
		{ value: 'Tan', label: 'Tan' },
		{ value: 'Pink', label: 'Pink'},
		{ value: 'Black', label: 'Black' },
		{ value: 'White', label: 'White'},
	],

<Swatches options={options} />
\`\`\`

### type
The optional \`type\` prop specifies if what the swatch options should be rendered as. Type options are \`carousel\` or \`grid\`, with \`carousel\` as default. When a type is set, you can optionally pass additional child props to be spread in to each sub component. 

\`\`\`jsx
const carouselProps: Partial<CarouselProps> = {
    loop: true,
    nextButton: 'Next',
    prevButton: "Prev"
}

<Swatches options={options} type={"carousel"} carousel={carouselProps}/>
\`\`\`
or
\`\`\`jsx
const gridProps: Partial<GridProps> = {
    rows: 1, 
    columns: 6,
}

<Swatches options={options} type={"grid"} grid={gridProps}/>
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`jsx
<Swatches options={options} hideLabels={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`jsx
const onSelectFunc = (event, clickedOption) => {
    console.log(event, clickedOption)
}

<Swatches options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the Swatches title. 

\`\`\`jsx
<Swatches options={options} titleText={"Swatches Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option if the selected state is handled outside of the component. 

\`\`\`jsx

const selectedOption: SwatchOption = { value: 'Red', label: 'Red', disabled: false },

<Swatches options={options} selected={selectedOption} />
\`\`\`


### breakpoints
An object that modifies the responsive behavior of the swatches at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

Depending on the \`type\` prop passed, the default configuration contains the following properties, however **\`any swatches props\`**, can be specified. 

\`\`\`js
    const defaultCarouselBreakpoints = {
		0: {
			carousel: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
			}
		},
		768: {
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			}
		},
		1200: {
			carousel: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 10,
			}
		},
	};

	const defaultGridBreakpoints = {
		0: {
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
	};

    const customBreakpoints = {
        0: {
            type={'carousel'}
			carousel: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
			},
            hideLabels: true,
            
		},
		768: {
            type={'carousel'}
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			},
            hideLabels: true,
		},
		1200: {
            type={'grid'}
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
    }
\`\`\`

\`\`\`jsx
<Swatches options={options} breakpoints={customBreakpoints} />
\`\`\`

`,
					d = {
						title: 'Molecules/Swatches',
						component: a.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(r.oz, { options: { overrides: { code: n.Z } }, children: s }), (0, o.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, o.Y)('div', { style: { maxWidth: '350px' }, children: (0, o.Y)(p, {}) })],
						argTypes: {
							onSelect: {
								description: 'option onSelect event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onSelect',
							},
							options: {
								description: 'list of options to display',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'SwatchOption[]' } },
								control: { type: 'object' },
							},
							selected: {
								description: 'Current selected option',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'SwatchOption' } },
								control: { type: 'none' },
							},
							hideLabels: {
								description: 'enable/disable option labels',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							breakpoints: {
								defaultValue: void 0,
								description: 'Carousel breakpoints',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							type: {
								description: 'swatches type to render',
								table: { category: 'Templates Legal', type: { summary: 'swatches type' }, defaultValue: { summary: 'carousel' } },
								control: { type: 'select', options: ['carousel', 'grid'] },
							},
							...e.F,
						},
					},
					h = (0, l.PA)(({ args: p }) => (0, o.Y)(a.l, { ...p })),
					m = (p) => (0, o.Y)(h, { args: p }),
					i = (p) => (0, o.Y)(h, { args: p }),
					f = (p) => (0, o.Y)(h, { args: p }),
					g = (p) => (0, o.Y)(h, { args: p }),
					u = (p) => (0, o.Y)(h, { args: p });
				(m.args = {
					options: [
						{ value: 'Red', label: 'Red', disabled: !1 },
						{ value: 'Blue', label: 'Blue', disabled: !1 },
						{ value: 'Green', label: 'Green', disabled: !1 },
						{ value: 'Orange', label: 'Orange', disabled: !1 },
						{ value: 'Tan', label: 'Tan', disabled: !1 },
						{ value: 'Pink', label: 'Pink', disabled: !1 },
						{ value: 'Black', label: 'Black', disabled: !1 },
						{ value: 'White', label: 'White', disabled: !1 },
					],
				}),
					(i.args = {
						options: [
							{ value: 'Red', label: 'Red', disabled: !1 },
							{ value: 'Blue', label: 'Blue', disabled: !1 },
							{ value: 'Green', label: 'Green', disabled: !1 },
							{ value: 'Orange', label: 'Orange', disabled: !1 },
							{ value: 'Tan', label: 'Tan', disabled: !1 },
							{ value: 'Pink', label: 'Pink', disabled: !1 },
							{ value: 'Black', label: 'Black', disabled: !1 },
							{ value: 'White', label: 'White', disabled: !1 },
						],
						type: 'grid',
					}),
					(f.args = {
						options: [
							{ value: 'Red', label: 'Red', disabled: !0 },
							{ value: 'Blue', label: 'Blue', disabled: !1 },
							{ value: 'Green', label: 'Green', disabled: !0 },
							{ value: 'Orange', label: 'Orange', disabled: !1 },
							{ value: 'Tan', label: 'Tan', disabled: !1 },
							{ value: 'Pink', label: 'Pink', disabled: !0 },
							{ value: 'Black', label: 'Black', disabled: !1 },
							{ value: 'White', label: 'White', disabled: !0 },
						],
						type: 'slideshow',
					}),
					(g.args = {
						options: [
							{
								value: 'Rainbow',
								label: 'Rainbow',
								disabled: !1,
								background: `linear-gradient(
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
            )`,
							},
							{ value: 'Red', label: 'Red', disabled: !0 },
							{ value: 'Blue', label: 'Blue', disabled: !1 },
							{ value: 'Green', label: 'Green', disabled: !0 },
							{ value: 'Orange', label: 'Orange', disabled: !1 },
							{ value: 'Tan', label: 'Tan', disabled: !1 },
						],
					}),
					(u.args = {
						carousel: { slidesPerView: 3, spaceBetween: 10 },
						breakpoints: {},
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
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...i.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const B = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(v, c, t) {
				'use strict';
				t.d(c, { $: () => A });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/classnames/index.js'),
					a = t.n(r),
					n = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/treePath.tsx'),
					h = t('./components/src/hooks/useA11y.tsx'),
					m = t('./components/src/utilities/cloneWithProps.tsx'),
					i = t('./components/src/utilities/defined.ts'),
					f = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					u = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = t('./components/src/hooks/useLang.tsx'),
					p = t('../../node_modules/deepmerge/dist/cjs.js'),
					W = t.n(p),
					j = t('../../node_modules/color/index.js'),
					w = t.n(j);
				const M = ({ native: T, color: E, backgroundColor: S, borderColor: D, theme: y }) => {
						const P = new (w())(S || E || y?.variables?.colors?.primary || void 0).lightness(95);
						return T
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: E || y?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: S || '#fff',
									border: `1px solid ${D || E || y?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: P.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					A = (0, n.PA)((T) => {
						const E = (0, s.u)(),
							D = { disableA11y: !1, treePath: (0, d.LU)() },
							y = (0, f.v6)('button', E, D, T),
							{
								content: P,
								children: O,
								disabled: x,
								native: L,
								onClick: I,
								disableA11y: K,
								disableStyles: C,
								className: G,
								internalClassName: k,
								icon: _,
								lang: R,
								treePath: b,
								style: Z,
								styleScript: J,
								themeStyleScript: Q,
								...V
							} = y,
							N = { icon: { internalClassName: 'ss__button__icon', ...(0, i.s)({ disableStyles: C }), theme: y?.theme, treePath: b } },
							F = {
								...(0, g.Z)(y, M),
								className: a()('ss__button', { 'ss__button--native': L, 'ss__button--disabled': x }, G, k),
								disabled: x,
								onClick: (Y) => !x && I && I(Y),
								...V,
							},
							z = { ref: (Y) => (0, h.iy)(Y) },
							H = {},
							$ = W()(H, R || {}),
							U = (0, B.u)($, {});
						return P || O || _ || R?.button?.value
							? (0, o.Y)(e._, {
									children: L
										? (0, o.FD)('button', {
												...F,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...U.button?.all,
														children: [(0, m.Y)(P, { treePath: b }), (0, m.Y)(O, { treePath: b })],
													}),
													_ && (0, o.Y)(u.I, { ...N.icon, ...(typeof _ == 'string' ? { icon: _ } : _) }),
												],
										  })
										: (0, o.FD)('div', {
												...(K ? {} : z),
												role: 'button',
												'aria-disabled': x,
												...F,
												...U.button?.attributes,
												children: [
													P || O || U.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...U.button?.value,
																children: [(0, m.Y)(P, { treePath: b }), (0, m.Y)(O, { treePath: b })],
														  })
														: void 0,
													_ && (0, o.Y)(u.I, { ...N.icon, ...(typeof _ == 'string' ? { icon: _ } : _) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(v, c, t) {
				'use strict';
				t.d(c, { _: () => g, t: () => i });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					n = t.n(a),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/treePath.tsx'),
					h = t('./components/src/utilities/mergeProps.ts'),
					m = t('./components/src/utilities/mergeStyles.ts');
				const i = '//cdn.athoscommerce.net/snap/images/fallback.png',
					f = ({ height: u }) =>
						(0, r.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: u || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function g(u) {
					const B = (0, s.u)(),
						p = (0, d.LU)(),
						W = { fallback: i, lazy: !0, treePath: p },
						j = (0, h.v6)('image', B, W, u),
						{
							alt: w,
							src: M,
							fallback: A,
							title: T,
							hoverSrc: E,
							lazy: S,
							onMouseOver: D,
							onMouseOut: y,
							onError: P,
							onLoad: O,
							onClick: x,
							className: L,
							internalClassName: I,
						} = j,
						[K, C] = (0, l.J0)(!1),
						[G, k] = (0, l.J0)(!1),
						_ = (0, l.li)('');
					(0, l.vJ)(() => {
						_.current = M;
					}),
						_.current && _.current != M && C(!1);
					const R = (0, m.Z)(j, f);
					return (0, o.Y)(e._, {
						children: (0, o.Y)('div', {
							...R,
							className: n()('ss__image', { 'ss__image--hidden': !K }, L, I),
							children: (0, o.Y)('img', {
								src: (G ? E : M) || A,
								alt: w,
								title: T || w,
								loading: S ? 'lazy' : void 0,
								onLoad: (b) => {
									C(!0), O && O(b);
								},
								onClick: (b) => x && x(b),
								onError: (b) => {
									(b.target.src = A || ''), P && P(b);
								},
								onMouseOver: (b) => {
									E && k(!0), D && D(b);
								},
								onMouseOut: (b) => {
									E && k(!1), y && y(b);
								},
							}),
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(v, c, t) {
				'use strict';
				t.d(c, { DH: () => a, aZ: () => r, iy: () => n });
				const o = 9,
					l = 27,
					r = 'ss-a11y',
					a =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function n(e, s, d, h) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = m),
							(i.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					e &&
						!e.attributes?.[r] &&
						(e.setAttribute(r, !0),
						e.setAttribute('tabIndex', `${s || 0}`),
						e.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && e.click();
						}),
						d &&
							e.addEventListener('keydown', function (i) {
								const f = e.querySelectorAll(a),
									g = f[0],
									u = f[f.length - 1];
								if (i.keyCode == l) {
									e.focus(), h && h(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === o) &&
									(i.shiftKey
										? document.activeElement === g && (u.focus(), i.preventDefault())
										: document.activeElement === u && (g.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(v, c, t) {
				'use strict';
				t.d(c, { u: () => o });
				const o = (l, r) => {
					const a = {};
					return (
						Object.keys(l).forEach((n) => {
							const e = l && l[n],
								s = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (s.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: e.value(r) } })
										: (s.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((s.attributes = { 'ss-lang': n }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = e.attributes['aria-label'](r))
											: (s.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](r))
											: (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (s.attributes.title = e.attributes.title(r))
											: (s.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (s.attributes.alt = e.attributes.alt(r)) : (s.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = e.attributes.placeholder(r))
											: (s.attributes.placeholder = e.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': n })),
								(a[n] = s);
						}),
						a
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(v, c, t) {
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
			'./components/src/utilities/defined.ts'(v, c, t) {
				'use strict';
				t.d(c, { s: () => o });
				function o(l) {
					const r = {};
					return (
						Object.keys(l).map((a) => {
							l[a] !== void 0 && (r[a] = l[a]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(v, c, t) {
				'use strict';
				t.d(c, { Z: () => a });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					a = (n) => {
						const e = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								e.current && n.className?.includes('lang-') && !n.className?.includes(r) && window?.Prism?.highlightElement(e.current);
							}, [n.className, n.children, e]),
							(0, o.Y)('code', { ...n, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(v, c, t) {
				'use strict';
				t.d(c, { j: () => r });
				var o = Object.prototype.hasOwnProperty;
				function l(a, n, e) {
					for (e of a.keys()) if (r(e, n)) return e;
				}
				function r(a, n) {
					var e, s, d;
					if (a === n) return !0;
					if (a && n && (e = a.constructor) === n.constructor) {
						if (e === Date) return a.getTime() === n.getTime();
						if (e === RegExp) return a.toString() === n.toString();
						if (e === Array) {
							if ((s = a.length) === n.length) for (; s-- && r(a[s], n[s]); );
							return s === -1;
						}
						if (e === Set) {
							if (a.size !== n.size) return !1;
							for (s of a) if (((d = s), (d && typeof d == 'object' && ((d = l(n, d)), !d)) || !n.has(d))) return !1;
							return !0;
						}
						if (e === Map) {
							if (a.size !== n.size) return !1;
							for (s of a) if (((d = s[0]), (d && typeof d == 'object' && ((d = l(n, d)), !d)) || !r(s[1], n.get(d)))) return !1;
							return !0;
						}
						if (e === ArrayBuffer) (a = new Uint8Array(a)), (n = new Uint8Array(n));
						else if (e === DataView) {
							if ((s = a.byteLength) === n.byteLength) for (; s-- && a.getInt8(s) === n.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(a)) {
							if ((s = a.byteLength) === n.byteLength) for (; s-- && a[s] === n[s]; );
							return s === -1;
						}
						if (!e || typeof a == 'object') {
							s = 0;
							for (e in a) if ((o.call(a, e) && ++s && !o.call(n, e)) || !(e in n) || !r(a[e], n[e])) return !1;
							return Object.keys(n).length === s;
						}
					}
					return a !== a && n !== n;
				}
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function c(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (v.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Swatches-Swatches-stories.d82a2a30.iframe.bundle.js.map
