(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1921],
	{
		'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Recommendation_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Recommendation = __webpack_require__('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Recommendation_stories = {
					title: 'Templates/Recommendation',
					component: Recommendation.A,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Recommendation\n\nRenders a carousel of product recommendations, built using the Carousel Component.\n\nIf using children, the provided children elements array length and order must match the results stored in the `controller.store.results` (or `results` prop) to avoid unexpected tracking behaviour.\n\nAny modification to the results array and data are recommended to be made using an `afterSearch` and/or `afterStore` event via the Controller instead of making modifications in the component.\n\n\n## Sub-components\n- Carousel\n- Result (default)\n\n## Usage\n\nAdditional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.\nAdditional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<Recommendation controller={controller} />\n```\n### loop\nThe `loop` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.\n\n```jsx\n<Recommendation controller={controller} loop={true} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`\n\nIf using children, the provided children elements array length and order must match the results stored in the `results` prop to avoid unexpected tracking behaviour.\n\n```jsx\n<Recommendation controller={controller} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the carousel title\n\n```jsx\n<Recommendation controller={controller} title={'Recommended Products'} />\n```\n\n### hideTitle\nThe `hideTitle` prop hides the carousel title\n\n```jsx\n<Recommendation controller={controller} title={'Recommended Products'} hideTitle={true} />\n```\n\n### pagination\nThe `pagination` prop specifies if the carousel should display pagination dots. \n\n```jsx\n<Recommendation controller={controller} pagination={true} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```jsx\n<Recommendation vertical={true}>{children}<Recommendation/>\n```\n\n### hideButtons\nThe `hideButtons` prop specifies if the carousel should hide prev/next buttons.\n\n```jsx\n<Recommendation hideButtons={true}>{children}<Recommendation/>\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<Recommendation controller={controller} prevButton={'<'} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<Recommendation controller={controller} nextButton={'>'} />\n```\n\n### modules\nThe `modules` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include `Navigation`, `Pagination` and `A11y` modules by default.\n\n```jsx\nimport { Scrollbar } from 'swiper';\n<Recommendation controller={controller} modules={[Scrollbar]} scrollbar={{ draggable: true }} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n\tenabled: true,\n\toffset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<Recommendation controller={controller} lazyRender={ customLazyRenderProps } />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nThe object key specified the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any Recommendation props`**, or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. \n\n`slidesPerView` - number of products to display per page (for a peekaboo effect use a decimal number here)\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```typescript\nconst defaultRecommendationBreakpoints = {\n\t0: {\n\t\tslidesPerView: 1,\n\t\tslidesPerGroup: 1,\n\t\tspaceBetween: 0,\n\t},\n\t480: {\n\t\tslidesPerView: 2,\n\t\tslidesPerGroup: 2,\n\t\tspaceBetween: 10,\n\t},\n\t768: {\n\t\tslidesPerView: 3,\n\t\tslidesPerGroup: 3,\n\t\tspaceBetween: 10,\n\t},\n\t1024: {\n\t\tslidesPerView: 4,\n\t\tslidesPerGroup: 4,\n\t\tspaceBetween: 10,\n\t},\n\t1200: {\n\t\tslidesPerView: 5,\n\t\tslidesPerGroup: 5,\n\t\tspaceBetween: 10,\n\t},\n};\n\nconst defaultVerticalRecommendationBreakpoints = {\n\t0: {\n\t\tslidesPerView: 1,\n\t\tslidesPerGroup: 1,\n\t\tspaceBetween: 0,\n\t},\n};\n```\n\n```jsx\n<Recommendation controller={controller} breakpoints={defaultRecommendationBreakpoints} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px', height: '500px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
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
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: '8uyt2m' } }),
				Default = (props, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Recommendation.A, { ...props, controller });
			(Default.loaders = [
				async () => (
					snapInstance.on('afterStore', async ({ controller }, next) => {
						controller.store.results.forEach((result) => (result.mappings.core.url = 'javascript:void(0);')), await next();
					}),
					await snapInstance.search(),
					{ controller: snapInstance }
				),
			]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(props: RecommendationProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: RecommendationController;\n  };\n}) => {\n  return <Recommendation {...props} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/Carousel/Carousel.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				FN: () => Carousel,
				K: () => defaultCarouselBreakpoints,
				og: () => defaultVerticalCarouselBreakpoints,
			});
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/swiper/swiper-react.mjs'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/defined.ts'),
				swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/swiper/modules/index.mjs'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx');
			const CSS_carousel = ({ theme, vertical }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
						display: 'flex',
						maxWidth: '100%',
						maxHeight: vertical ? '100%' : void 0,
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
						'.swiper-pagination-bullet-active': { background: theme?.variables?.colors?.primary || 'inherit' },
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
							'&.swiper-pagination-bullet-active': { opacity: '0.8', background: theme?.variables?.colors?.primary || '#000' },
						},
						'.swiper-slide-invisible-blank': { visibility: 'hidden' },
						'.swiper-horizontal': { touchAction: 'pan-y' },
						'.swiper-vertical': { touchAction: 'pan-x' },
					}),
				defaultCarouselBreakpoints = {
					0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
					480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
					768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
					1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
					1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
				},
				defaultVerticalCarouselBreakpoints = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
				Carousel = (0, mobx_react__WEBPACK_IMPORTED_MODULE_7__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.u)(),
						defaultProps = {
							breakpoints: properties.vertical
								? JSON.parse(JSON.stringify(defaultVerticalCarouselBreakpoints))
								: JSON.parse(JSON.stringify(defaultCarouselBreakpoints)),
							pagination: !1,
							loop: !0,
							autoAdjustSlides: !1,
							...globalTheme?.components?.carousel,
							...properties,
							...properties.theme?.components?.carousel,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.v6)('carousel', globalTheme, defaultProps, properties);
					Object.keys(props.breakpoints).forEach((breakpoint) => {
						const breakPointProps = props.breakpoints[breakpoint];
						breakPointProps.slidesPerView && (breakPointProps.slidesPerView = Number(breakPointProps.slidesPerView) || 1),
							breakPointProps.slidesPerGroup && (breakPointProps.slidesPerGroup = Number(breakPointProps.slidesPerGroup) || 1);
					});
					const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_10__.X)(props.breakpoints);
					if (displaySettings && Object.keys(displaySettings).length) {
						const theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
						props.autoAdjustSlides &&
							props.children.length < displaySettings.slidesPerView &&
							((displaySettings.slidesPerView = props.children.length), (displaySettings.slidesPerGroup = props.children.length)),
							(props = { ...props, ...displaySettings, theme });
					}
					const {
						children,
						loop,
						nextButton,
						prevButton,
						hideButtons,
						vertical,
						onInit,
						onBeforeInit,
						onAfterInit,
						onNextButtonClick,
						onPrevButtonClick,
						onClick,
						disableStyles,
						style,
						styleScript,
						modules,
						className,
						treePath,
						...additionalProps
					} = props;
					let pagination = props.pagination,
						navigation = props.navigation;
					const subProps_icon = {
							className: 'ss__carousel__icon',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						swiperModulesUnfiltered = Array.isArray(modules)
							? [
									swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Vx,
									swiper_modules__WEBPACK_IMPORTED_MODULE_5__.dK,
									swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Jq,
							  ].concat(modules)
							: [
									swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Vx,
									swiper_modules__WEBPACK_IMPORTED_MODULE_5__.dK,
									swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Jq,
							  ],
						swiperModules = swiperModulesUnfiltered.filter((module, pos) => swiperModulesUnfiltered.indexOf(module) === pos),
						navigationPrevRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						navigationNextRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						rootComponentRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_carousel(stylingProps), style]),
						(0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.vJ)(() => {
							if (rootComponentRef.current) {
								const swiperElem = rootComponentRef.current.querySelector('.swiper');
								swiperElem?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									swiperElem?.classList.contains('swiper-vertical') && swiperElem.classList.add('swiper-container-vertical'),
									swiperElem?.classList.contains('swiper-horizontal') && swiperElem.classList.add('swiper-container-horizontal');
							}
							attachClasstoLastVisibleSlide();
						}, [properties]),
						pagination && (pagination = 'object' == typeof pagination ? { clickable: !0, ...pagination } : { clickable: !0 }),
						(navigation =
							navigation && 'object' == typeof navigation
								? { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...navigation }
								: { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' });
					const attachClasstoLastVisibleSlide = () => {
						if (rootComponentRef.current) {
							const swiperElem = rootComponentRef.current,
								slides_visible = swiperElem?.querySelectorAll('.swiper-slide-visible');
							slides_visible.forEach((element, idx) => {
								element.classList.remove('swiper-last-visible-slide'),
									idx == slides_visible.length - 1 && element.classList.add('swiper-last-visible-slide');
							});
						}
					};
					return (
						delete additionalProps.breakpoints,
						children?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_providers__WEBPACK_IMPORTED_MODULE_13__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.FD)('div', {
										ref: rootComponentRef,
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel', vertical ? 'ss__carousel-vertical' : '', className),
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel__prev-wrapper', {
													'ss__carousel__prev-wrapper--hidden': hideButtons,
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
													className: 'ss__carousel__prev',
													ref: navigationPrevRef,
													onClick: onPrevButtonClick && ((e) => onPrevButtonClick(e)),
													children:
														prevButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
															icon: vertical ? 'angle-up' : 'angle-left',
															...subProps_icon,
															name: 'prev',
														}),
												}),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.RC, {
												centerInsufficientSlides: !0,
												onBeforeInit: (swiper) => {
													(swiper.params.navigation.prevEl = navigationPrevRef.current ? navigationPrevRef.current : void 0),
														(swiper.params.navigation.nextEl = navigationNextRef.current ? navigationNextRef.current : void 0),
														onBeforeInit && onBeforeInit(swiper);
												},
												onInit: (swiper) => {
													onInit && onInit(swiper);
												},
												onAfterInit: (swiper) => {
													(swiper.navigation.onPrevClick = (e) => {
														e.preventDefault(),
															(!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) &&
																(swiper.slidePrev(), swiper.emit('navigationPrev'));
													}),
														(swiper.navigation.onNextClick = (e) => {
															e.preventDefault(),
																(!swiper.isEnd || swiper.params.loop || swiper.params.rewind) && (swiper.slideNext(), swiper.emit('navigationNext'));
														}),
														onAfterInit && onAfterInit(swiper);
												},
												onClick: (swiper, e) => {
													onClick && onClick(swiper, e);
												},
												direction: vertical ? 'vertical' : 'horizontal',
												loop,
												threshold: 7,
												loopAddBlankSlides: !1,
												modules: swiperModules,
												...additionalProps,
												...displaySettings,
												controller: void 0,
												navigation,
												pagination,
												onResize: (swiper) => {
													additionalProps.onResize && additionalProps.onResize(), swiper.updateSlidesClasses(), attachClasstoLastVisibleSlide();
												},
												onTransitionEnd: () => {
													additionalProps.onTransitionEnd && additionalProps.onTransitionEnd(), attachClasstoLastVisibleSlide();
												},
												children: children.map((child) =>
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.qr, {
														children: child,
													})
												),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel__next-wrapper', {
													'ss__carousel__next-wrapper--hidden': hideButtons,
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
													className: 'ss__carousel__next',
													ref: navigationNextRef,
													onClick: onNextButtonClick && ((e) => onNextButtonClick(e)),
													children:
														nextButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
															icon: vertical ? 'angle-down' : 'angle-right',
															...subProps_icon,
															name: 'next',
														}),
												}),
											}),
										],
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Templates/Recommendation/Recommendation.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => Recommendation });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const CSS_recommendation = ({ vertical }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						height: vertical ? '100%' : void 0,
						'.ss__result__image-wrapper': { height: vertical ? '85%' : void 0 },
					}),
				Recommendation = (0, mobx_react__WEBPACK_IMPORTED_MODULE_5__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							breakpoints: properties.vertical
								? JSON.parse(JSON.stringify(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.og))
								: JSON.parse(JSON.stringify(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.K)),
							pagination: !1,
							loop: !0,
						};
					let displaySettings,
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('recommendation', globalTheme, defaultProps, properties);
					!properties.theme?.name &&
						props.breakpoints &&
						((displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props.breakpoints)),
						displaySettings && Object.keys(displaySettings).length && (props = { ...props, ...displaySettings }));
					const {
							title,
							controller,
							children,
							breakpoints,
							loop,
							results,
							pagination,
							nextButton,
							prevButton,
							hideButtons,
							resultComponent,
							disableStyles,
							style,
							className,
							styleScript,
							lazyRender,
							vertical,
							hideTitle,
							treePath,
							...additionalProps
						} = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender };
					if (!controller || 'recommendation' !== controller.type)
						throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
					const resultsToRender = results || controller.store?.results;
					if (Array.isArray(children) && children.length !== resultsToRender.length)
						return (
							controller.log.error(
								"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
							),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const subProps_carousel = {
							className: 'ss__recommendation__Carousel',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles, vertical }),
							theme: props?.theme,
							treePath,
						},
						subProps_result = {
							className: 'ss__recommendation__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_11__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_recommendation(stylingProps), style]);
					const [isVisible, setIsVisible] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),
						recsRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
					(!mergedlazyRender?.enabled ||
						(0, _hooks__WEBPACK_IMPORTED_MODULE_12__.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
						setIsVisible(!0);
					const defaultLang = { titleText: { value: `${title}` } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.u)(lang, {});
					return (Array.isArray(children) && children.length) || resultsToRender?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation', className),
									ref: recsRef,
									children: isVisible
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(
												_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__.l,
												{
													controller,
													children: [
														title &&
															!hideTitle &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('h3', {
																className: 'ss__recommendation__title',
																...mergedLang.titleText?.all,
																children: title,
															}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Molecules_Carousel__WEBPACK_IMPORTED_MODULE_7__.FN, {
															prevButton,
															nextButton,
															hideButtons,
															loop,
															pagination,
															breakpoints,
															...subProps_carousel,
															...additionalProps,
															...displaySettings,
															children:
																Array.isArray(children) && children.length
																	? children.map((child, idx) =>
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.x,
																				{ controller, result: resultsToRender[idx], children: child }
																			)
																	  )
																	: resultsToRender.map((result) =>
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.x,
																				{
																					controller,
																					result,
																					children: (() => {
																						if (resultComponent && controller) {
																							const ResultComponent = resultComponent;
																							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(ResultComponent, {
																								controller,
																								result,
																							});
																						}
																						return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																							_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__.Q,
																							{ ...subProps_result, controller, result },
																							result.id
																						);
																					})(),
																				}
																			)
																	  ),
														}),
													],
												}
										  )
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
												_Trackers_Recommendation_ProfileTracker__WEBPACK_IMPORTED_MODULE_15__.l,
												{
													controller,
													children:
														Array.isArray(children) && children.length
															? children.map((child, idx) =>
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																		_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.x,
																		{
																			controller,
																			result: resultsToRender[idx],
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
																				{}
																			),
																		}
																	)
															  )
															: resultsToRender.map((result) =>
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																		_Trackers_Recommendation_ResultTracker__WEBPACK_IMPORTED_MODULE_16__.x,
																		{
																			controller,
																			result,
																			children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
																				{}
																			),
																		}
																	)
															  ),
												}
										  ),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK, {});
				});
		},
		'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { l: () => RecommendationProfileTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_RecommendationProfileTracker = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				RecommendationProfileTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const { children, controller, className, style, styleScript, disableStyles } = properties,
						childs = (0, preact__WEBPACK_IMPORTED_MODULE_0__.v2)(children),
						componentRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
					(0, _hooks__WEBPACK_IMPORTED_MODULE_5__.v)(componentRef, '0px') && controller.track.impression(),
						childs.length && controller.track.render();
					const styling = { 'ss-name': properties.name },
						stylingProps = properties;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_RecommendationProfileTracker(stylingProps), style]),
						childs.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation-profile-tracker', className),
									onClick: (e) => controller.track.click(e),
									ref: componentRef,
									...styling,
									children,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { x: () => RecommendationResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
			const CSS_RecommendationResultTracker = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				RecommendationResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const { children, result, track, controller, className, disableStyles, style, styleScript } = properties,
						mergedTrack = { impression: !0, click: !0, ...track },
						resultRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
						resultInViewport = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.v)(resultRef, '0px');
					controller.events.render || controller.log.warn('<RecommendationResultTracker> used without <RecommendationProfileTracker>'),
						controller.track.product.render(result),
						resultInViewport &&
							mergedTrack.impression &&
							(controller.events.impression || controller.track.impression(), controller.track.product.impression(result));
					const styling = { 'ss-name': properties.name },
						stylingProps = properties;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_RecommendationResultTracker(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-result-tracker', className),
							onClick: (e) => mergedTrack.click && controller.track.product.click(e, result),
							ref: resultRef,
							...styling,
							children,
						})
					);
				});
		},
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { I: () => useDeepCompareEffect, r: () => useDeepCompareMemoize });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(value),
					signalRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(0);
				return (
					(0, dequal__WEBPACK_IMPORTED_MODULE_1__.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDeepCompareEffect(callback, dependencies) {
				return (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Q: () => getDisplaySettings, X: () => useDisplaySettings });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				_useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx');
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.s)(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
						() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)),
						[]
					),
					(0, _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__.I)(() => {
						setDisplaySettings(getDisplaySettings(breakpointsObj)), resetResizeListener();
					}, [breakpointsObj]),
					displaySettings
				);
			}
			const getDisplaySettings = (breakpoints) => {
				let breakpointsSettings;
				const currentScreenWidth = window.innerWidth,
					sortedList = Object.keys(breakpoints)
						.map((str) => +str)
						.sort((a, b) => a - b)
						.map((vp) => ({ [vp]: breakpoints[vp] }));
				if (sortedList.length) {
					for (let i = 0; i < sortedList.length; i++) {
						const entry = sortedList[i],
							breakpoint = parseInt(Object.keys(entry)[0]);
						if (i + 1 === sortedList.length || (0 === i && currentScreenWidth < breakpoint)) {
							breakpointsSettings = sortedList[i][breakpoint];
							break;
						}
						{
							const nextBreakpoint = parseInt(Object.keys(sortedList[i + 1])[0]);
							if (currentScreenWidth >= breakpoint && currentScreenWidth < nextBreakpoint) {
								breakpointsSettings = sortedList[i][breakpoint];
								break;
							}
						}
					}
					return breakpointsSettings;
				}
				return breakpointsSettings;
			};
		},
		'./components/src/hooks/useIntersection.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersection });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersection = (ref, rootMargin = '0px', fireOnce = !1) => {
				const [isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const observer = new IntersectionObserver(
							([entry]) => {
								setIntersecting(entry.isIntersecting), fireOnce && entry.isIntersecting && observer.unobserve(ref.current);
							},
							{ rootMargin }
						);
						return (
							ref.current && observer.observe(ref.current),
							() => {
								observer.unobserve(ref.current);
							}
						);
					}, []),
					isIntersecting
				);
			};
		},
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { u: () => useLang });
			const useLang = (lang, data) => {
				const returnObj = {};
				return (
					Object.keys(lang).forEach((key) => {
						const currentLangSettings = lang && lang[key],
							currentObj = {};
						currentLangSettings &&
							(currentLangSettings?.value &&
								('function' == typeof currentLangSettings.value
									? (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value(data) } })
									: (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value } })),
							currentLangSettings?.attributes &&
								Object.keys(currentLangSettings?.attributes).length &&
								((currentObj.attributes = { 'ss-lang': key }),
								currentLangSettings?.attributes?.['aria-label'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-label']
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'](data))
										: (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'])),
								currentLangSettings?.attributes?.['aria-valuetext'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-valuetext']
										? (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'](data))
										: (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'])),
								currentLangSettings?.attributes?.title &&
									('function' == typeof currentLangSettings.attributes?.title
										? (currentObj.attributes.title = currentLangSettings.attributes.title(data))
										: (currentObj.attributes.title = currentLangSettings.attributes.title)),
								currentLangSettings?.attributes?.alt &&
									('function' == typeof currentLangSettings.attributes?.alt
										? (currentObj.attributes.alt = currentLangSettings.attributes.alt(data))
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt))),
							(currentObj.all = { ...currentObj.value, ...currentObj.attributes, 'ss-lang': key })),
							(returnObj[key] = currentObj);
					}),
					returnObj
				);
			};
		},
		'./components/src/utilities/componentArgs.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { F: () => componentArgs });
			const componentArgs = {
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
		'./components/src/utilities/snapify.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { p: () => Snapify });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-controller/dist/esm/Search/SearchController.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../snap-controller/dist/esm/Recommendation/RecommendationController.js'
				),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../snap-controller/dist/esm/Autocomplete/AutocompleteController.js'
				),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/SearchStore.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'
				),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				_searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				_searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			(0, mobx__WEBPACK_IMPORTED_MODULE_0__.jK)({ useProxies: 'never', isolateGlobalState: !0, enforceActions: 'never' });
			const controllers = {},
				client = { globals: { siteId: '8uyt2m' } };
			class Snapify {
				static recommendation(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createRecommendationController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(!0),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__.c(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.t(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static autocomplete(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createAutocompleteController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__.Z(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__.Y(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static search(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createSearchController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E({
									settings: { coreType: 'query', corePrefix: config.controller.id },
								}),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__.Tp(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.U(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
			}
		},
		'./components/src/utilities/storybook.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => highlightedCode });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const highlightedCode = (props) => {
				const elemRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						elemRef.current &&
							props.className?.includes('lang-') &&
							!props.className?.includes('prism-block') &&
							window?.Prism?.highlightElement(elemRef.current);
					}, [props.className, props.children, elemRef]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)('code', { ...props, ref: elemRef, 'data-prismjs-copy': 'Copy' })
				);
			};
		},
		'../../node_modules/memoizerific sync recursive': (module) => {
			function webpackEmptyContext(req) {
				var e = new Error("Cannot find module '" + req + "'");
				throw ((e.code = 'MODULE_NOT_FOUND'), e);
			}
			(webpackEmptyContext.keys = () => []),
				(webpackEmptyContext.resolve = webpackEmptyContext),
				(webpackEmptyContext.id = '../../node_modules/memoizerific sync recursive'),
				(module.exports = webpackEmptyContext);
		},
	},
]);
