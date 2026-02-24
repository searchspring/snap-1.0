(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[3049],
		{
			'./components/src/components/Molecules/Carousel/Carousel.stories.tsx'(y, m, n) {
				'use strict';
				n.r(m), n.d(m, { Colors: () => g, Icons: () => x, __namedExportsOrder: () => T, default: () => r });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = n('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = n('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					e = n('./components/src/components/Atoms/Icon/paths.tsx'),
					s = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					o = n('./components/src/utilities/storybook.tsx'),
					c = n('./components/src/utilities/componentArgs.ts'),
					d = n('./components/src/utilities/Colour/Colour.ts');
				const a = `# Carousel

Renders a carousel of slides using children, built with [Swiper v11](https://swiperjs.com/get-started)

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { Carousel } from '@searchspring/snap-preact-components';
\`\`\`

Additional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.
Additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

\`\`\`jsx
<Carousel>{children}</Carousel>
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`jsx
<Carousel loop={true}>{children}</Carousel>
\`\`\`

### pagination
The \`pagination\` prop can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in [swiper docs](https://swiperjs.com/swiper-api#pagination). 

\`\`\`jsx
<Carousel pagination={true}>{children}</Carousel>
\`\`\`

or

\`\`\`js
const paginationConfig = {
	bulletActiveClass: "active",
	bulletClass: 'bullet',
	clickable: false
};
\`\`\`
\`\`\`jsx
<Carousel pagination={paginationConfig}>{children}</Carousel>
\`\`\`

### vertical 
The \`vertical\` prop changes the carousel slide direction from horizontal, to vertical. 

\`\`\`jsx
<Carousel vertical={true}>{children}</Carousel>
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`jsx
<Carousel hideButtons={true}>{children}</Carousel>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Carousel prevButton={'<'}>{children}</Carousel>
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Carousel nextButton={'>'}>{children}</Carousel>
\`\`\`

### onPrevButtonClick
The \`onPrevButtonClick\` prop can be used to handle click events on the prevButton.

\`\`\`jsx
<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onNextButtonClick
The \`onNextButtonClick\` prop can be used to handle click events on the prevButton.

\`\`\`jsx
<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onClick
The \`onClick\` prop can be used to handle click events on the swiper component.

\`\`\`jsx
<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onInit
The \`onInit\` prop can be used to tie into the initialization event for swiper.

\`\`\`jsx
<Carousel onInit={(swiper, e) => { /* do something */ }}>{children}</Carousel>
\`\`\`

### modules
The \`modules\` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\` and \`A11y\` modules by default.

\`\`\`jsx
import { Scrollbar } from 'swiper';
<Carousel modules={[Scrollbar]} scrollbar={{ draggable: true }}>{children}</Carousel>
\`\`\`

### autoAdjustSlides
The \`autoAdjustSlides\` prop when set to \`false\` will disable the carousel from automatically adjusting the \`slidesPerGroup\`, \`slidesPerView\` and \`loop\` props when the \`children\` length is less than the current \`slidesPerView\`

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specifies the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **\`any Carousel props\`** or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. 

\`slidesPerView\` - number of products to display per page (for a peekaboo effect use a decimal number here)

\`slidesPerGroup\` - number of products to scroll by when next/previous button is clicked

\`spaceBetween\` - spacing between each product

\`\`\`js
const defaultCarouselBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
	480: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 10,
	},
};

const defaultVerticalCarouselBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
\`\`\`

\`\`\`jsx
<Carousel breakpoints={defaultCarouselBreakpoints}>{children}</Carousel>
\`\`\`
`,
					r = {
						title: 'Molecules/Carousel',
						component: u.FN,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(h.oz, { options: { overrides: { code: o.Z } }, children: a }), (0, t.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, t.Y)('div', { style: { maxWidth: '900px', height: '300px' }, children: (0, t.Y)(_, {}) })],
						argTypes: {
							loop: {
								defaultValue: !0,
								description: 'Carousel slides loop',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							pagination: {
								defaultValue: !1,
								description: 'Configuration for pagination dots',
								table: { type: { summary: 'boolean | SwiperOptions.pagination' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							vertical: {
								defaultValue: !1,
								description: 'Carousel vertical slide direction',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							modules: {
								description: 'Additional Swiper modules',
								table: { type: { summary: 'SwiperModule[]' }, defaultValue: { summary: '[Navigation, Pagination]' } },
								control: { type: 'none' },
							},
							hideButtons: {
								defaultValue: !1,
								description: 'Hide prev/next buttons',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							prevButton: { description: 'Previous button', table: { type: { summary: 'string | JSX Element' } }, control: { type: 'text' } },
							nextButton: { description: 'Next button', table: { type: { summary: 'string | JSX Element' } }, control: { type: 'text' } },
							breakpoints: {
								defaultValue: void 0,
								description: 'Carousel breakpoints',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							autoAdjustSlides: {
								defaultValue: !1,
								description:
									'If true and children length is less than the current breakpoint slidesPerView value, slidesPerView and slidesPerGroup will be set to the children length and loop to false',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onNextButtonClick: {
								description: 'Carousel next button click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onNextButtonClick',
							},
							onPrevButtonClick: {
								description: 'Carousel prev button click event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onPrevButtonClick',
							},
							onClick: {
								description: 'Carousel onClick event handler (Swiper)',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							onInit: {
								description: 'Carousel onInit event handler (Swiper)',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onInit',
							},
							...c.F,
						},
					},
					l = 10,
					b = Math.floor(180 / l),
					O = Array.from(Array(l).keys()),
					j = new d.V('#3a23ad'),
					g = (_) =>
						(0, t.Y)(u.FN, {
							..._,
							children: O.map((I, k) =>
								(0, t.Y)('div', { style: { height: '100px', width: '100px', background: j.lighten(k * b).hex, margin: '0 auto' } })
							),
						});
				g.args = { pagination: !0, hideButtons: !0, loop: !1 };
				const S = Math.floor(180 / Object.keys(e.c).length),
					x = (_) =>
						(0, t.Y)(u.FN, {
							..._,
							children: Object.keys(e.c).map((I, k) =>
								(0, t.FD)('div', {
									style: { margin: '0 auto', textAlign: 'center' },
									children: [
										(0, t.Y)(s.I, { icon: I, color: j.lighten(k * S).hex, size: '80px', style: { padding: '20px' } }),
										(0, t.Y)('div', { style: { textAlign: 'center' }, children: I }),
									],
								})
							),
						});
				(g.parameters = {
					...g.parameters,
					docs: {
						...g.parameters?.docs,
						source: {
							originalSource: `(props: CarouselProps) => {
  return <Carousel {...props}>
            {colors.map((number, index) => <div style={{
      height: '100px',
      width: '100px',
      background: color.lighten(index * carouselStep).hex,
      margin: '0 auto'
    }}></div>)}
        </Carousel>;
}`,
							...g.parameters?.docs?.source,
						},
					},
				}),
					(x.parameters = {
						...x.parameters,
						docs: {
							...x.parameters?.docs,
							source: {
								originalSource: `(props: CarouselProps) => {
  return <Carousel {...props}>
            {Object.keys(iconPaths).map((icon, index) => {
      return <div style={{
        margin: '0 auto',
        textAlign: 'center'
      }}>
                        <Icon icon={icon as IconType} color={color.lighten(index * iconPathStep).hex} size="80px" style={{
          padding: '20px'
        }} />
                        <div style={{
          textAlign: 'center'
        }}>{icon}</div>
                    </div>;
    })}
        </Carousel>;
}`,
								...x.parameters?.docs?.source,
							},
						},
					});
				const T = ['Colors', 'Icons'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(y, m, n) {
				'use strict';
				n.d(m, { FN: () => ee, K: () => W, og: () => K });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = n('../../node_modules/preact/dist/preact.module.js'),
					u = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					e = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = n('../../node_modules/classnames/index.js'),
					o = n.n(s),
					c = n('../../node_modules/mobx-react-lite/es/index.js'),
					d = n('../../node_modules/deepmerge/dist/cjs.js'),
					a = n.n(d),
					r = n('../../node_modules/swiper/swiper-react.mjs'),
					l = n('./components/src/utilities/cloneWithProps.tsx'),
					b = n('./components/src/utilities/defined.ts'),
					O = n('./components/src/utilities/mergeProps.ts'),
					j = n('./components/src/utilities/mergeStyles.ts'),
					g = n('../../node_modules/swiper/modules/index.mjs'),
					S = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					x = n('./components/src/providers/cache.tsx'),
					T = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = n('./components/src/providers/treePath.tsx'),
					I = n('./components/src/hooks/useDisplaySettings.tsx');
				const k = ({ vertical: w, theme: P }) =>
						(0, e.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: w ? '100%' : void 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
							'&.ss__carousel-vertical': {
								flexDirection: 'column',
								'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
								'.swiper-container': { flexDirection: 'row' },
								'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
								'.swiper-pagination-bullet': { margin: '4px' },
							},
							'.swiper-pagination-bullet-active': { background: P?.variables?.colors?.primary || 'inherit' },
							'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
							},
							'.ss__carousel__next, .ss__carousel__prev': {
								padding: '5px',
								cursor: 'pointer',
								lineHeight: 0,
								'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
							},
							'.swiper': {
								display: 'flex',
								flexDirection: 'column',
								marginLeft: 'auto',
								marginRight: 'auto',
								position: 'relative',
								overflow: 'hidden',
								listStyle: 'none',
								padding: 0,
								zIndex: '1',
								width: '100%',
							},
							'.swiper-vertical > .swiper-wrapper': { flexDirection: 'column' },
							'.swiper-wrapper': {
								order: 0,
								position: 'relative',
								width: '100%',
								height: '100%',
								zIndex: '1',
								display: 'flex',
								transitionProperty: 'transform',
								boxSizing: 'content-box',
							},
							'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
							'.swiper-pagination': {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
								width: '100%',
								order: 1,
								transition: '.3s opacity',
							},
							'.swiper-pagination-bullet': {
								width: '8px',
								height: '8px',
								display: 'inline-block',
								borderRadius: '50%',
								background: '#000',
								opacity: '.2',
								cursor: 'pointer',
								margin: '0 4px',
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: P?.variables?.colors?.primary || '#000' },
							},
							'.swiper-slide-invisible-blank': { visibility: 'hidden' },
							'.swiper-horizontal': { touchAction: 'pan-y' },
							'.swiper-vertical': { touchAction: 'pan-x' },
							'.swiper-scrollbar': {
								position: 'absolute',
								bottom: '0',
								left: '0',
								width: '100%',
								height: '2px',
								backgroundColor: '#d9d9d9',
								'&:empty': { display: 'none' },
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: P?.variables?.colors?.primary || '#000' },
							},
						}),
					W = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					K = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					ee = (0, c.PA)((w) => {
						const P = (0, T.u)(),
							te = (0, _.LU)(),
							ne = {
								breakpoints: w.vertical ? JSON.parse(JSON.stringify(K)) : JSON.parse(JSON.stringify(W)),
								pagination: !1,
								slidesPerGroup: 5,
								slidesPerView: 5,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: te,
							};
						let f = (0, O.v6)('carousel', P, ne, w),
							v;
						if (
							!(w.theme?.name || P.name) &&
							f.breakpoints &&
							(Object.keys(f.breakpoints).forEach((i) => {
								const p = f.breakpoints[i];
								p.slidesPerView && (p.slidesPerView = Number(p.slidesPerView) || 1),
									p.slidesPerGroup && (p.slidesPerGroup = Number(p.slidesPerGroup) || 1);
							}),
							(v = (0, I.X)(f.breakpoints)),
							v && Object.keys(v).length)
						) {
							const i = a()(f?.theme || {}, v?.theme || {}, { arrayMerge: (p, V) => V });
							f.autoAdjustSlides &&
								f.children.length < v.slidesPerView &&
								((v.slidesPerView = f.children.length), (v.slidesPerGroup = f.children.length)),
								(f = { ...f, ...v, theme: i });
						}
						const {
							children: U,
							loop: se,
							nextButton: oe,
							prevButton: ie,
							hideButtons: z,
							vertical: A,
							onInit: $,
							onBeforeInit: Y,
							onAfterInit: G,
							onNextButtonClick: J,
							onPrevButtonClick: H,
							onClick: F,
							disableStyles: re,
							style: ue,
							styleScript: me,
							themeStyleScript: he,
							modules: X,
							className: ae,
							internalClassName: le,
							treePath: Z,
							...C
						} = f;
						let E = f.pagination,
							B = f.navigation,
							D = f.scrollbar;
						const Q = { icon: { internalClassName: 'ss__carousel__icon', ...(0, b.s)({ disableStyles: re }), theme: f.theme, treePath: Z } },
							q = Array.isArray(X) ? [g.Vx, g.dK, g.Ze, g.Jq].concat(X) : [g.Vx, g.dK, g.Ze, g.Jq],
							ce = q.filter((i, p) => q.indexOf(i) === p),
							R = (0, u.li)(null),
							N = (0, u.li)(null),
							M = (0, u.li)(null),
							de = (0, j.Z)(f, k);
						(0, u.vJ)(() => {
							if (M.current) {
								const p = M.current.querySelector('.swiper');
								p?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									p?.classList.contains('swiper-vertical') && p.classList.add('swiper-container-vertical'),
									p?.classList.contains('swiper-horizontal') && p.classList.add('swiper-container-horizontal');
							}
							L();
						}, [w]),
							E && (typeof E == 'object' ? (E = { clickable: !0, ...E }) : (E = { clickable: !0 })),
							B && typeof B == 'object'
								? (B = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...B })
								: (B = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							D && (typeof D == 'object' ? (D = { enabled: !0, ...D }) : (D = { enabled: !0 }));
						const L = () => {
							if (M.current) {
								const p = M.current?.querySelectorAll('.swiper-slide-visible');
								p.forEach((V, pe) => {
									V.classList.remove('swiper-last-visible-slide'), pe == p.length - 1 && V.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete C.breakpoints,
							U?.length
								? (0, t.Y)(x._, {
										children: (0, t.FD)('div', {
											ref: M,
											...de,
											className: o()('ss__carousel', A ? 'ss__carousel-vertical' : '', ae, le),
											children: [
												(0, t.Y)('div', {
													className: o()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': z }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: R,
														onClick: H && ((i) => H(i)),
														children: ie || (0, t.Y)(S.I, { icon: A ? 'angle-up' : 'angle-left', ...Q.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(r.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (i) => {
														(i.params.navigation.prevEl = R.current ? R.current : void 0),
															(i.params.navigation.nextEl = N.current ? N.current : void 0),
															Y && Y(i);
													},
													onInit: (i) => {
														$ && $(i);
													},
													onAfterInit: (i) => {
														(i.navigation.onPrevClick = (p) => {
															p.preventDefault(), !(i.isBeginning && !i.params.loop && !i.params.rewind) && (i.slidePrev(), i.emit('navigationPrev'));
														}),
															(i.navigation.onNextClick = (p) => {
																p.preventDefault(), !(i.isEnd && !i.params.loop && !i.params.rewind) && (i.slideNext(), i.emit('navigationNext'));
															}),
															G && G(i);
													},
													onClick: (i, p) => {
														F && F(i, p);
													},
													direction: A ? 'vertical' : 'horizontal',
													loop: se,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ce,
													...C,
													...v,
													controller: void 0,
													navigation: B,
													pagination: E,
													scrollbar: D,
													onResize: (i) => {
														C.onResize && C.onResize(), i.updateSlidesClasses(), L();
													},
													onTransitionEnd: () => {
														C.onTransitionEnd && C.onTransitionEnd(), L();
													},
													children: U.map((i) => (i != null ? (0, t.Y)(r.qr, { children: (0, l.Y)(i, { treePath: Z }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: o()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': z }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: N,
														onClick: J && ((i) => J(i)),
														children: oe || (0, t.Y)(S.I, { icon: A ? 'angle-down' : 'angle-right', ...Q.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: (0, t.Y)(h.FK, {})
						);
					});
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(y, m, n) {
				'use strict';
				n.d(m, { I: () => e, r: () => u });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = n('../../node_modules/dequal/dist/index.mjs');
				function u(s) {
					const o = (0, t.li)(s),
						c = (0, t.li)(0);
					return (0, h.j)(s, o.current) || ((o.current = s), (c.current += 1)), (0, t.Kr)(() => o.current, [c.current]);
				}
				function e(s, o) {
					return (0, t.vJ)(s, [u(o)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(y, m, n) {
				'use strict';
				n.d(m, { Q: () => s, X: () => e });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = n('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js'),
					u = n('./components/src/hooks/useDeepCompareEffect.tsx');
				function e(o) {
					if (!o || !Object.keys(o).length) return;
					const [c, d] = (0, t.J0)(s(o));
					let a;
					const r = () => {
						function l() {
							d(s(o));
						}
						(a = (0, h.s)(() => {
							l();
						}, 50)),
							window.addEventListener('resize', a);
					};
					return (
						(0, t.vJ)(() => (r(), () => window.removeEventListener('resize', a)), []),
						(0, u.I)(() => {
							d(s(o)), r();
						}, [o]),
						c
					);
				}
				const s = (o) => {
					let c;
					const d = window.innerWidth,
						a = Object.keys(o)
							.map((r) => +r)
							.sort((r, l) => r - l)
							.map((r) => ({ [r]: o[r] }));
					if (a.length) {
						for (let r = 0; r < a.length; r++) {
							const l = a[r],
								b = parseInt(Object.keys(l)[0]);
							if (r + 1 === a.length || (r === 0 && d < b)) {
								c = a[r][b];
								break;
							} else {
								const g = parseInt(Object.keys(a[r + 1])[0]);
								if (d >= b && d < g) {
									c = a[r][b];
									break;
								}
							}
						}
						return c;
					}
					return c;
				};
			},
			'./components/src/utilities/Colour/Colour.ts'(y, m, n) {
				'use strict';
				n.d(m, { V: () => t });
				class t {
					get hex() {
						return this.hexValue ? this.hexValue : this.value;
					}
					get rgb() {
						return this.rgbValue ? this.rgbValue : this.value;
					}
					get contrast() {
						if (this.hexValue) {
							const e = parseInt(this.hexValue.slice(1, 3), 16),
								s = parseInt(this.hexValue.slice(3, 5), 16),
								o = parseInt(this.hexValue.slice(5, 7), 16),
								d = [e / 255, s / 255, o / 255].map((r) => (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)));
							return 0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2] <= 0.179 ? '#ffffff' : '#000000';
						}
						return this.value;
					}
					constructor(e) {
						(this.value = e),
							e &&
								(e.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (e = `#${e[1].repeat(2)}${e[2].repeat(2)}${e[3].repeat(2)}`),
								t.isHex(e)
									? ((this.hexValue = e), (this.rgbValue = t.hexToRgb(e)))
									: t.isRgb(e) && ((this.rgbValue = e), (this.hexValue = t.rgbToHex(e))));
					}
					shift(e) {
						return new t(t.brightness(this.hex, e));
					}
					lighten(e) {
						return e < 0 ? this : new t(t.brightness(this.hex, e));
					}
					darken(e) {
						return e < 0 ? this : new t(t.brightness(this.hex, -e));
					}
					opacity(e) {
						return new t(t.opacity(this.hex, e));
					}
					transparency(e) {
						return e < 0 ? this : new t(t.opacity(this.hex, e));
					}
					opaque(e) {
						return e < 0 ? this : new t(t.opacity(this.hex, -e));
					}
					static isRgb(e) {
						return !!(
							e.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							e.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
						);
					}
					static isHex(e) {
						return !!(e.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || e.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
					}
					static hexToRgb(e) {
						if (!t.isHex(e)) throw 'invalid hex supplied';
						const s = parseInt(e.slice(1, 3), 16),
							o = parseInt(e.slice(3, 5), 16),
							c = parseInt(e.slice(5, 7), 16),
							d = parseInt(e.slice(7, 9), 16);
						return Number.isInteger(d) ? `rgba(${s}, ${o}, ${c}, ${h(d / 255)})` : `rgb(${s}, ${o}, ${c})`;
					}
					static rgbToHex(e) {
						if (!t.isRgb(e)) throw 'invalid rgb supplied';
						const [s, o, c, d] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((a, r) => {
							if (r == 3) {
								a.match(/%/) && (a = (Number(a.replace('%', '').trim()) / 100).toString());
								let l = Number(a);
								(Number.isNaN(l) || l > 1) && (l = 1), l < 0 && (l = 0), (a = Math.floor(l * 255).toString());
							}
							return Number(a).toString(16).padStart(2, '0');
						});
						return `#${s}${o}${c}${d || ''}`;
					}
					static opacity(e, s) {
						let o = !1;
						if ((e && t.isRgb(e) && ((o = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const c = e.slice(7, 9) || 'ff';
						let a = parseInt(c, 16) - s;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						const r = a.toString(16).padStart(2, '0'),
							l = `${e.slice(0, 7)}${r}`;
						return o ? t.hexToRgb(l) : l;
					}
					static brightness(e, s) {
						let o = !1;
						if ((e && t.isRgb(e) && ((o = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const c = e.slice(1, 7),
							d = parseInt(c, 16);
						let a = (d & 255) + s;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						let r = ((d >> 8) & 255) + s;
						r > 255 ? (r = 255) : r < 0 && (r = 0);
						let l = (d >> 16) + s;
						l > 255 ? (l = 255) : l < 0 && (l = 0);
						const b = `#${(a | (r << 8) | (l << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return o ? t.hexToRgb(b) : b;
					}
				}
				function h(u) {
					const e = Math.floor(u),
						s = u - e;
					if (!s) return u;
					const o = Math.floor(s * 10) * 10,
						c = Math.round(u * 100 - o);
					return e + (o + c) / 100;
				}
			},
			'./components/src/utilities/componentArgs.ts'(y, m, n) {
				'use strict';
				n.d(m, { F: () => t });
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
			'./components/src/utilities/defined.ts'(y, m, n) {
				'use strict';
				n.d(m, { s: () => t });
				function t(h) {
					const u = {};
					return (
						Object.keys(h).map((e) => {
							h[e] !== void 0 && (u[e] = h[e]);
						}),
						u
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(y, m, n) {
				'use strict';
				n.d(m, { Z: () => e });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					e = (s) => {
						const o = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								o.current && s.className?.includes('lang-') && !s.className?.includes(u) && window?.Prism?.highlightElement(o.current);
							}, [s.className, s.children, o]),
							(0, t.Y)('code', { ...s, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function m(n) {
					var t = new Error("Cannot find module '" + n + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(m.keys = () => []), (m.resolve = m), (m.id = '../../node_modules/memoizerific sync recursive'), (y.exports = m);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Carousel-Carousel-stories.5d844510.iframe.bundle.js.map
