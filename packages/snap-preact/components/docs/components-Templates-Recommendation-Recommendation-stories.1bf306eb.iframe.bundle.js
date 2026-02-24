(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1921],
		{
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(w, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => m, __namedExportsOrder: () => M, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					v = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts'),
					u = e('./components/src/utilities/snapify.ts');
				const D = `# Recommendation

Renders a carousel of product recommendations, built using the Carousel Component.

If using children, the provided children elements array length and order must match the results stored in the \`controller.store.results\` (or \`results\` prop) to avoid unexpected tracking behaviour.

Any modification to the results array and data are recommended to be made using an \`afterSearch\` and/or \`afterStore\` event via the Controller instead of making modifications in the component.


## Sub-components
- Carousel
- ResultTracker
- Result (default)

## Usage
\`\`\`jsx
import { Recommendation } from '@searchspring/snap-preact-components';
\`\`\`

Additional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.
Additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`jsx
<Recommendation controller={controller} />
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`jsx
<Recommendation controller={controller} loop={true} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`

If using children, the provided children elements array length and order must match the results stored in the \`results\` prop to avoid unexpected tracking behaviour.

\`\`\`jsx
<Recommendation controller={controller} results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`jsx

const CustomResult = ({
	controller 
	result
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Recommendation controller={controller} resultComponent={CustomResult} />
\`\`\`

### title
The \`title\` prop specifies the carousel title

\`\`\`jsx
<Recommendation controller={controller} title={'Recommended Products'} />
\`\`\`

### hideTitle
The \`hideTitle\` prop hides the carousel title

\`\`\`jsx
<Recommendation controller={controller} title={'Recommended Products'} hideTitle={true} />
\`\`\`

### description
The \`description\` prop specifies the carousel description

\`\`\`jsx
<Recommendation controller={controller} description={'Recommended Products are so awesome!'} />
\`\`\`

### pagination
The \`pagination\` prop specifies if the carousel should display pagination dots. 

\`\`\`jsx
<Recommendation controller={controller} pagination={true} />
\`\`\`

### vertical
The \`vertical\` prop sets the carousel scroll direction to vertical.

\`\`\`jsx
<Recommendation vertical={true}>{children}<Recommendation/>
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`jsx
<Recommendation hideButtons={true}>{children}<Recommendation/>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Recommendation controller={controller} prevButton={'<'} />
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Recommendation controller={controller} nextButton={'>'} />
\`\`\`

### modules
The \`modules\` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\` and \`A11y\` modules by default.

\`\`\`jsx
import { Scrollbar } from 'swiper';
<Recommendation controller={controller} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`jsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<Recommendation controller={controller} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **\`any Recommendation props\`**, or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. 

\`slidesPerView\` - number of products to display per page (for a peekaboo effect use a decimal number here)

\`slidesPerGroup\` - number of products to scroll by when next/previous button is clicked

\`spaceBetween\` - spacing between each product

\`\`\`js
const defaultRecommendationBreakpoints = {
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

const defaultVerticalRecommendationBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
\`\`\`

\`\`\`jsx
<Recommendation controller={controller} breakpoints={defaultRecommendationBreakpoints} />
\`\`\`
`,
					P = {
						title: 'Templates/Recommendation',
						component: a.A,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(h.oz, { options: { overrides: { code: v.Z } }, children: D }), (0, t.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, t.Y)('div', { style: { maxWidth: '900px', height: '500px' }, children: (0, t.Y)(p, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							title: {
								description: 'Recommendation title',
								table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							hideTitle: {
								defaultValue: !1,
								description: 'hide title',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							description: {
								description: 'recommendation description',
								table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							loop: {
								defaultValue: !0,
								description: 'Recommendation pagination loops',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							results: {
								description: 'Results store reference, overrides controller.store.results',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							modules: {
								description: 'Additional Swiper modules',
								table: { type: { summary: 'SwiperModule[]' }, defaultValue: { summary: '[Navigation, Pagination]' } },
								control: { type: 'none' },
							},
							pagination: {
								defaultValue: !1,
								description: 'Display pagination dots',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							scrollbar: {
								defaultValue: !1,
								description: 'Display scrollbar',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							vertical: {
								defaultValue: !1,
								description: 'Recommendation carousel direction',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideButtons: {
								defaultValue: !1,
								description: 'Hide prev/next buttons',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							prevButton: { description: 'Previous button', table: { type: { summary: 'string | JSX Element' } }, control: { type: 'text' } },
							nextButton: { description: 'Next button', table: { type: { summary: 'string | JSX Element' } }, control: { type: 'text' } },
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							breakpoints: {
								defaultValue: void 0,
								description: 'Recommendation title',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'none' },
							},
							...s.F,
						},
					},
					f = u.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					m = (p, { loaded: { controller: _ } }) => (0, t.Y)(a.A, { ...p, controller: _ });
				(m.loaders = [
					async () => (
						f.on('afterStore', async ({ controller: p }, _) => {
							p.store.results.forEach((b) => (b.mappings.core.url = 'javascript:void(0);')), await _();
						}),
						await f.search(),
						{ controller: f }
					),
				]),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <Recommendation {...props} controller={controller} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(w, i, e) {
				'use strict';
				e.d(i, { FN: () => l, K: () => o, og: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					u = e.n(s),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(P),
					m = e('../../node_modules/swiper/swiper-react.mjs'),
					M = e('./components/src/utilities/cloneWithProps.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/swiper/modules/index.mjs'),
					R = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					L = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useDisplaySettings.tsx');
				const I = ({ vertical: E, theme: d }) =>
						(0, v.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: E ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: d?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: d?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: d?.variables?.colors?.primary || '#000' },
							},
						}),
					o = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					c = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					l = (0, D.PA)((E) => {
						const d = (0, O.u)(),
							K = (0, x.LU)(),
							U = {
								breakpoints: E.vertical ? JSON.parse(JSON.stringify(c)) : JSON.parse(JSON.stringify(o)),
								pagination: !1,
								slidesPerGroup: 5,
								slidesPerView: 5,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: K,
							};
						let g = (0, _.v6)('carousel', d, U, E),
							A;
						if (
							!(E.theme?.name || d.name) &&
							g.breakpoints &&
							(Object.keys(g.breakpoints).forEach((n) => {
								const r = g.breakpoints[n];
								r.slidesPerView && (r.slidesPerView = Number(r.slidesPerView) || 1),
									r.slidesPerGroup && (r.slidesPerGroup = Number(r.slidesPerGroup) || 1);
							}),
							(A = (0, C.X)(g.breakpoints)),
							A && Object.keys(A).length)
						) {
							const n = f()(g?.theme || {}, A?.theme || {}, { arrayMerge: (r, oe) => oe });
							g.autoAdjustSlides &&
								g.children.length < A.slidesPerView &&
								((A.slidesPerView = g.children.length), (A.slidesPerGroup = g.children.length)),
								(g = { ...g, ...A, theme: n });
						}
						const {
							children: J,
							loop: T,
							nextButton: j,
							prevButton: re,
							hideButtons: H,
							vertical: N,
							onInit: Z,
							onBeforeInit: $,
							onAfterInit: Q,
							onNextButtonClick: z,
							onPrevButtonClick: G,
							onClick: q,
							disableStyles: ie,
							style: me,
							styleScript: ue,
							themeStyleScript: pe,
							modules: ee,
							className: le,
							internalClassName: ae,
							treePath: F,
							...V
						} = g;
						let S = g.pagination,
							B = g.navigation,
							W = g.scrollbar;
						const te = { icon: { internalClassName: 'ss__carousel__icon', ...(0, p.s)({ disableStyles: ie }), theme: g.theme, treePath: F } },
							ne = Array.isArray(ee) ? [y.Vx, y.dK, y.Ze, y.Jq].concat(ee) : [y.Vx, y.dK, y.Ze, y.Jq],
							ce = ne.filter((n, r) => ne.indexOf(n) === r),
							Y = (0, a.li)(null),
							se = (0, a.li)(null),
							k = (0, a.li)(null),
							de = (0, b.Z)(g, I);
						(0, a.vJ)(() => {
							if (k.current) {
								const r = k.current.querySelector('.swiper');
								r?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									r?.classList.contains('swiper-vertical') && r.classList.add('swiper-container-vertical'),
									r?.classList.contains('swiper-horizontal') && r.classList.add('swiper-container-horizontal');
							}
							X();
						}, [E]),
							S && (typeof S == 'object' ? (S = { clickable: !0, ...S }) : (S = { clickable: !0 })),
							B && typeof B == 'object'
								? (B = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...B })
								: (B = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							W && (typeof W == 'object' ? (W = { enabled: !0, ...W }) : (W = { enabled: !0 }));
						const X = () => {
							if (k.current) {
								const r = k.current?.querySelectorAll('.swiper-slide-visible');
								r.forEach((oe, _e) => {
									oe.classList.remove('swiper-last-visible-slide'), _e == r.length - 1 && oe.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete V.breakpoints,
							J?.length
								? (0, t.Y)(L._, {
										children: (0, t.FD)('div', {
											ref: k,
											...de,
											className: u()('ss__carousel', N ? 'ss__carousel-vertical' : '', le, ae),
											children: [
												(0, t.Y)('div', {
													className: u()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': H }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: Y,
														onClick: G && ((n) => G(n)),
														children: re || (0, t.Y)(R.I, { icon: N ? 'angle-up' : 'angle-left', ...te.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(m.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (n) => {
														(n.params.navigation.prevEl = Y.current ? Y.current : void 0),
															(n.params.navigation.nextEl = se.current ? se.current : void 0),
															$ && $(n);
													},
													onInit: (n) => {
														Z && Z(n);
													},
													onAfterInit: (n) => {
														(n.navigation.onPrevClick = (r) => {
															r.preventDefault(), !(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), n.emit('navigationPrev'));
														}),
															(n.navigation.onNextClick = (r) => {
																r.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), n.emit('navigationNext'));
															}),
															Q && Q(n);
													},
													onClick: (n, r) => {
														q && q(n, r);
													},
													direction: N ? 'vertical' : 'horizontal',
													loop: T,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ce,
													...V,
													...A,
													controller: void 0,
													navigation: B,
													pagination: S,
													scrollbar: W,
													onResize: (n) => {
														V.onResize && V.onResize(), n.updateSlidesClasses(), X();
													},
													onTransitionEnd: () => {
														V.onTransitionEnd && V.onTransitionEnd(), X();
													},
													children: J.map((n) => (n != null ? (0, t.Y)(m.qr, { children: (0, M.Y)(n, { treePath: F }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: u()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': H }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: se,
														onClick: z && ((n) => z(n)),
														children: j || (0, t.Y)(R.I, { icon: N ? 'angle-down' : 'angle-right', ...te.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: (0, t.Y)(h.FK, {})
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(w, i, e) {
				'use strict';
				e.d(i, { A: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					u = e.n(s),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(P),
					m = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					M = e('./components/src/components/Molecules/Result/Result.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useIntersection.tsx'),
					R = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/hooks/useDisplaySettings.tsx'),
					x = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const o = ({ vertical: l }) => (0, v.AH)({ height: l ? '100%' : void 0, '.ss__result__image-wrapper': { height: l ? '85%' : void 0 } }),
					c = (0, D.PA)((l) => {
						const E = (0, L.u)(),
							d = {
								breakpoints: l.vertical ? JSON.parse(JSON.stringify(m.og)) : JSON.parse(JSON.stringify(m.K)),
								pagination: !1,
								loop: !0,
								title: l.controller?.store?.profile?.display?.templateParameters?.title,
								description: l.controller?.store?.profile?.display?.templateParameters?.description,
							},
							K = { name: l.controller?.store?.profile?.tag?.toLowerCase(), ...l };
						let U = (0, _.v6)('recommendation', E, d, K),
							g;
						!(l.theme?.name || E.name) && U.breakpoints && ((g = (0, O.X)(U.breakpoints)), g && Object.keys(g).length && (U = { ...U, ...g }));
						const {
								title: A,
								description: J,
								controller: T,
								children: j,
								loop: re,
								results: H,
								pagination: N,
								nextButton: Z,
								prevButton: $,
								hideButtons: Q,
								resultComponent: z,
								disableStyles: G,
								className: q,
								internalClassName: ie,
								style: me,
								styleScript: ue,
								themeStyleScript: pe,
								lazyRender: ee,
								vertical: le,
								hideTitle: ae,
								treePath: F,
								...V
							} = U,
							S = { enabled: !0, offset: '10%', ...ee };
						if (!T || T.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const B = H || T.store?.results;
						if (Array.isArray(j) && j.length !== B.length)
							return (
								T.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								(0, t.Y)(h.FK, {})
							);
						const W = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, p.s)({ disableStyles: G, vertical: le }),
									theme: U?.theme,
									treePath: F,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, p.s)({ disableStyles: G }), theme: U?.theme, treePath: F },
							},
							te = (0, b.Z)(U, o),
							[ne, ce] = (0, a.J0)(!1),
							Y = (0, a.li)(null);
						(!S?.enabled || (0, y.v)(Y, `${S.offset} 0px ${S.offset} 0px`, !0)) && ce(!0);
						const k = { titleText: { value: `${A}` } },
							de = f()(k, U.lang || {}),
							X = (0, C.u)(de, {});
						return (Array.isArray(j) && j.length) || B?.length
							? (0, t.Y)(R._, {
									children: (0, t.Y)('div', {
										...te,
										className: u()('ss__recommendation', q, ie),
										ref: Y,
										children: ne
											? (0, t.FD)(x.l, {
													controller: T,
													children: [
														A && !ae && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...X.titleText?.all, children: A }),
														J && (0, t.Y)('h4', { className: 'ss__recommendation__description', children: J }),
														(0, t.Y)(m.FN, {
															prevButton: $,
															nextButton: Z,
															hideButtons: Q,
															loop: re,
															pagination: N,
															...W.carousel,
															...V,
															children:
																Array.isArray(j) && j.length
																	? j.map((n, r) => (0, t.Y)(I.o, { controller: T, result: B[r], children: n }))
																	: B.map((n) =>
																			(0, t.Y)(I.o, {
																				controller: T,
																				result: n,
																				children: (() => {
																					if (z && T) {
																						const r = z;
																						return (0, t.Y)(r, { controller: T, result: n, treePath: W.result.treePath });
																					} else return (0, t.Y)(M.Q, { ...W.result, controller: T, result: n }, n.id);
																				})(),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(x.l, {
													controller: T,
													children:
														Array.isArray(j) && j.length
															? j.map((n, r) => (0, t.Y)(I.o, { controller: T, result: B[r], children: (0, t.Y)(t.FK, {}) }))
															: B.map((n) => (0, t.Y)(I.o, { controller: T, result: n, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(w, i, e) {
				'use strict';
				e.d(i, { l: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					u = e.n(s),
					D = e('./components/src/utilities/mergeStyles.ts');
				const P = () => (0, a.AH)({}),
					f = (0, v.PA)((m) => {
						const { children: M, className: p, internalClassName: _ } = m,
							b = (0, h.v2)(M),
							y = (0, D.Z)(m, P);
						return b.length ? (0, t.Y)('div', { className: u()('ss__recommendation-profile-tracker', p, _), ...y, children: M }) : (0, t.Y)(h.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(w, i, e) {
				'use strict';
				e.d(i, { o: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/createImpressionObserver.ts');
				const f = { ResultTracker: () => (0, h.AH)({}) },
					m = (0, a.PA)((M) => {
						const p = (0, u.u)(),
							_ = (0, D.v6)('resultTracker', p, {}, M),
							b = { impression: !0, click: !0 },
							{ children: y, result: R, track: L, controller: O, className: x, internalClassName: C, disableStyles: I, style: o } = _,
							c = { ...b, ...L },
							{ ref: l, inViewport: E } = (0, P.Q)();
						E && c.impression && O?.track.product.impression(R);
						const d = {};
						return (
							I ? o && (d.css = [o]) : (d.css = [f.ResultTracker(), o]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${O?.type}-result-tracker`, x, C),
								onClick: (K) => {
									c.click && O?.track.product.click(K, R);
								},
								ref: l,
								...d,
								children: y,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(w, i, e) {
				'use strict';
				e.d(i, { v: () => h });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = (a, v = '0px', s = !1) => {
					const [u, D] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const P = new IntersectionObserver(
								([f]) => {
									D(f.isIntersecting), s && f.isIntersecting && P.unobserve(a.current);
								},
								{ rootMargin: v }
							);
							return (
								a.current && P.observe(a.current),
								() => {
									P.unobserve(a.current);
								}
							);
						}, []),
						u
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, i, e) {
				'use strict';
				e.d(i, { v: () => a });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 250,
					a = (s, u = {}) => {
						const { rootMargin: D = '0px', fireOnce: P = !1, threshold: f = 0, minVisibleTime: m = 0 } = u,
							[M, p] = (0, t.J0)(!1),
							_ = (0, t.li)(null),
							b = (0, t.li)(null),
							[y, R] = (0, t.J0)(0),
							L = (0, t.hb)((O) => {
								(s.current = O), R((x) => x + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								p(!1);
								let O = null,
									x = null;
								if (!window.IntersectionObserver || !s.current) return;
								const C = () => {
										x && (window.clearInterval(x), (x = null));
									},
									I = () => {
										m > 0
											? ((b.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													p(!0), P && s.current && O && O.unobserve(s.current);
											  }, m)))
											: (p(!0), P && s.current && O && O.unobserve(s.current));
									},
									o = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (b.current = null), p(!1);
									};
								return (
									(O = new IntersectionObserver(
										([c]) => {
											c.isIntersecting
												? s.current && v(s.current)
													? (C(), I())
													: (o(),
													  x ||
															(x = window.setInterval(() => {
																if (!s.current) {
																	C();
																	return;
																}
																v(s.current) && (C(), I());
															}, h)))
												: (C(), o());
										},
										{ rootMargin: D, threshold: f }
									)),
									s.current && O.observe(s.current),
									() => {
										p(!1), C(), _.current && window.clearTimeout(_.current), O && s.current && O.unobserve(s.current);
									}
								);
							}, [s, y]),
							{ inViewport: M, updateRef: L }
						);
					};
				function v(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(w, i, e) {
				'use strict';
				e.d(i, { F: () => t });
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
			'./components/src/utilities/createImpressionObserver.ts'(w, i, e) {
				'use strict';
				e.d(i, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					v = 1e3;
				function s(u) {
					const D = (0, t.li)(null),
						{ inViewport: P, updateRef: f } = (0, h.v)(D, { ...u, fireOnce: !0, threshold: a, minVisibleTime: v });
					return { ref: D, inViewport: P, updateRef: f };
				}
			},
			'./components/src/utilities/snapify.ts'(w, i, e) {
				'use strict';
				e.d(i, { p: () => O });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					h = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					u = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					D = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					P = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					m = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const R = {},
					L = { globals: { siteId: '8uyt2m' } };
				class O {
					static recommendation(c) {
						const l = c.id;
						if (R[l]) return R[l];
						const E = (R[l] = C({ client: L, controller: c }));
						return (
							E.on('afterStore', async ({ controller: d }, K) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await K();
							}),
							E.init(),
							E
						);
					}
					static autocomplete(c) {
						const l = c.id;
						if (R[l]) return R[l];
						const E = (R[l] = I({ client: L, controller: c }));
						return (
							E.on('afterStore', async ({ controller: d }, K) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await K();
							}),
							E.init(),
							E
						);
					}
					static search(c) {
						const l = c.id;
						if (R[l]) return R[l];
						const E = (R[l] = x({ client: L, controller: c }));
						return (
							E.on('afterStore', async ({ controller: d }, K) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await K();
							}),
							E.init(),
							E
						);
					}
				}
				function x(o) {
					const c = new f.V(new M.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), m.X);
					return new h.Tp(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new D.U(o.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new p.E(),
						profiler: new _.U(),
						logger: new b.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function C(o) {
					const c = new f.V(new M.E(), m.X).detach(!0);
					return new v.c(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new P.t(o.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new p.E(),
						profiler: new _.U(),
						logger: new b.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function I(o) {
					const c = new f.V(new M.E(), m.X).detach();
					return new a.Z(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new u.Y(o.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new p.E(),
						profiler: new _.U(),
						logger: new b.V(),
						tracker: new y.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, i, e) {
				'use strict';
				e.d(i, { Z: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					v = (s) => {
						const u = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								u.current && s.className?.includes('lang-') && !s.className?.includes(a) && window?.Prism?.highlightElement(u.current);
							}, [s.className, s.children, u]),
							(0, t.Y)('code', { ...s, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function i(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (w.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.1bf306eb.iframe.bundle.js.map
