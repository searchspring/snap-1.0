(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3049],
	{
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
		'./components/src/components/Molecules/Carousel/Carousel.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Colors: () => Colors,
					Icons: () => Icons,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Carousel_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Carousel = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				Colour = __webpack_require__('./components/src/utilities/Colour/Colour.ts');
			const Carousel_stories = {
					title: 'Molecules/Carousel',
					component: Carousel.FN,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Carousel\n\nRenders a carousel of slides using children, built with [Swiper v11](https://swiperjs.com/get-started)\n\n## Sub-components\n- Icon\n\n## Usage\n\nAdditional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.\nAdditional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n```jsx\n<Carousel>{children}</Carousel>\n```\n### loop\nThe `loop` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.\n\n```jsx\n<Carousel loop={true}>{children}</Carousel>\n```\n\n### pagination\nThe `pagination` prop can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in [swiper docs](https://swiperjs.com/swiper-api#pagination). \n\n```jsx\n<Carousel pagination={true}>{children}</Carousel>\n```\n\nor\n\n```typescript\nconst paginationConfig = {\n\tbulletActiveClass: \"active\",\n\tbulletClass: 'bullet',\n\tclickable: false\n};\n```\n```jsx\n<Carousel pagination={paginationConfig}>{children}</Carousel>\n```\n\n### vertical \nThe `vertical` prop changes the carousel slide direction from horizontal, to vertical. \n\n```jsx\n<Carousel vertical={true}>{children}</Carousel>\n```\n\n### hideButtons\nThe `hideButtons` prop specifies if the carousel should hide prev/next buttons.\n\n```jsx\n<Carousel hideButtons={true}>{children}</Carousel>\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<Carousel prevButton={'<'}>{children}</Carousel>\n```\n\n### nextButton\nThe `nextButton` prop specifies the next button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<Carousel nextButton={'>'}>{children}</Carousel>\n```\n\n### onPrevButtonClick\nThe `onPrevButtonClick` prop can be used to handle click events on the prevButton.\n\n```jsx\n<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onNextButtonClick\nThe `onNextButtonClick` prop can be used to handle click events on the prevButton.\n\n```jsx\n<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onClick\nThe `onClick` prop can be used to handle click events on the swiper component.\n\n```jsx\n<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onInit\nThe `onInit` prop can be used to tie into the initialization event for swiper.\n\n```jsx\n<Carousel onInit={(swiper, e) => { /* do something */ }}>{children}</Carousel>\n```\n\n### modules\nThe `modules` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include `Navigation`, `Pagination` and `A11y` modules by default.\n\n```jsx\nimport { Scrollbar } from 'swiper';\n<Carousel modules={[Scrollbar]} scrollbar={{ draggable: true }}>{children}</Carousel>\n```\n\n### autoAdjustSlides\nThe `autoAdjustSlides` prop when set to `false` will disable the carousel from automatically adjusting the `slidesPerGroup`, `slidesPerView` and `loop` props when the `children` length is less than the current `slidesPerView`\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nThe object key specifies the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any Carousel props`** or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. \n\n`slidesPerView` - number of products to display per page (for a peekaboo effect use a decimal number here)\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```typescript\nconst defaultCarouselBreakpoints = {\n\t0: {\n\t\tslidesPerView: 1,\n\t\tslidesPerGroup: 1,\n\t\tspaceBetween: 0,\n\t},\n\t480: {\n\t\tslidesPerView: 2,\n\t\tslidesPerGroup: 2,\n\t\tspaceBetween: 10,\n\t},\n\t768: {\n\t\tslidesPerView: 3,\n\t\tslidesPerGroup: 3,\n\t\tspaceBetween: 10,\n\t},\n\t1024: {\n\t\tslidesPerView: 4,\n\t\tslidesPerGroup: 4,\n\t\tspaceBetween: 10,\n\t},\n\t1200: {\n\t\tslidesPerView: 5,\n\t\tslidesPerGroup: 5,\n\t\tspaceBetween: 10,\n\t},\n};\n\nconst defaultVerticalCarouselBreakpoints = {\n\t0: {\n\t\tslidesPerView: 1,\n\t\tslidesPerGroup: 1,\n\t\tspaceBetween: 0,\n\t},\n};\n```\n\n```jsx\n<Carousel breakpoints={defaultCarouselBreakpoints}>{children}</Carousel>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px', height: '300px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
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
						...componentArgs.F,
					},
				},
				carouselStep = Math.floor(18),
				colors = Array.from(Array(10).keys()),
				color = new Colour.V('#3a23ad'),
				Colors = (props) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Carousel.FN, {
						...props,
						children: colors.map((number, index) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { height: '100px', width: '100px', background: color.lighten(index * carouselStep).hex, margin: '0 auto' },
							})
						),
					});
			Colors.args = { pagination: !0, hideButtons: !0, loop: !1 };
			const iconPathStep = Math.floor(180 / Object.keys(paths.c).length),
				Icons = (props) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Carousel.FN, {
						...props,
						children: Object.keys(paths.c).map((icon, index) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { margin: '0 auto', textAlign: 'center' },
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
										icon,
										color: color.lighten(index * iconPathStep).hex,
										size: '80px',
										style: { padding: '20px' },
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { style: { textAlign: 'center' }, children: icon }),
								],
							})
						),
					});
			(Colors.parameters = {
				...Colors.parameters,
				docs: {
					...Colors.parameters?.docs,
					source: {
						originalSource:
							"(props: CarouselProps) => {\n  return <Carousel {...props}>\n            {colors.map((number, index) => <div style={{\n      height: '100px',\n      width: '100px',\n      background: color.lighten(index * carouselStep).hex,\n      margin: '0 auto'\n    }}></div>)}\n        </Carousel>;\n}",
						...Colors.parameters?.docs?.source,
					},
				},
			}),
				(Icons.parameters = {
					...Icons.parameters,
					docs: {
						...Icons.parameters?.docs,
						source: {
							originalSource:
								"(props: CarouselProps) => {\n  return <Carousel {...props}>\n            {Object.keys(iconPaths).map((icon, index) => {\n      return <div style={{\n        margin: '0 auto',\n        textAlign: 'center'\n      }}>\n                        <Icon icon={icon as IconType} color={color.lighten(index * iconPathStep).hex} size=\"80px\" style={{\n          padding: '20px'\n        }} />\n                        <div style={{\n          textAlign: 'center'\n        }}>{icon}</div>\n                    </div>;\n    })}\n        </Carousel>;\n}",
							...Icons.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Colors', 'Icons'];
		},
		'./components/src/components/Molecules/Carousel/Carousel.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				FN: () => Carousel,
				K: () => defaultCarouselBreakpoints,
				og: () => defaultVerticalCarouselBreakpoints,
			});
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/swiper/swiper-react.mjs'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/swiper/modules/index.mjs'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx');
			const defaultStyles = ({ vertical, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({
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
						'.swiper-scrollbar': {
							position: 'absolute',
							bottom: '0',
							left: '0',
							width: '100%',
							height: '2px',
							backgroundColor: '#d9d9d9',
							'&:empty': { display: 'none' },
							'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: theme?.variables?.colors?.primary || '#000' },
						},
					}),
				defaultCarouselBreakpoints = {
					0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
					480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
					768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
					1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
					1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
				},
				defaultVerticalCarouselBreakpoints = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
				Carousel = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_9__.LU)(),
						defaultProps = {
							breakpoints: properties.vertical
								? JSON.parse(JSON.stringify(defaultVerticalCarouselBreakpoints))
								: JSON.parse(JSON.stringify(defaultCarouselBreakpoints)),
							pagination: !1,
							slidesPerGroup: 5,
							slidesPerView: 5,
							spaceBetween: 10,
							loop: !0,
							autoAdjustSlides: !1,
							treePath: globalTreePath,
						};
					let displaySettings,
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.v6)('carousel', globalTheme, defaultProps, properties);
					if (
						!properties.theme?.name &&
						!globalTheme.name &&
						props.breakpoints &&
						(Object.keys(props.breakpoints).forEach((breakpoint) => {
							const breakPointProps = props.breakpoints[breakpoint];
							breakPointProps.slidesPerView && (breakPointProps.slidesPerView = Number(breakPointProps.slidesPerView) || 1),
								breakPointProps.slidesPerGroup && (breakPointProps.slidesPerGroup = Number(breakPointProps.slidesPerGroup) || 1);
						}),
						(displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__.X)(props.breakpoints)),
						displaySettings && Object.keys(displaySettings).length)
					) {
						const theme = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(props?.theme || {}, displaySettings?.theme || {}, {
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
						style: _,
						styleScript: __,
						themeStyleScript: ___,
						modules,
						className,
						internalClassName,
						treePath,
						...additionalProps
					} = props;
					let pagination = props.pagination,
						navigation = props.navigation,
						scrollbar = props.scrollbar;
					const subProps_icon = {
							internalClassName: 'ss__carousel__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						swiperModulesUnfiltered = Array.isArray(modules)
							? [
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Vx,
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.dK,
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Ze,
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Jq,
							  ].concat(modules)
							: [
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Vx,
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.dK,
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Ze,
									swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Jq,
							  ],
						swiperModules = swiperModulesUnfiltered.filter((module, pos) => swiperModulesUnfiltered.indexOf(module) === pos),
						navigationPrevRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						navigationNextRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						rootComponentRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Z)(props, defaultStyles);
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
								: { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
						scrollbar && (scrollbar = 'object' == typeof scrollbar ? { enabled: !0, ...scrollbar } : { enabled: !0 });
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
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_providers__WEBPACK_IMPORTED_MODULE_15__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.FD)('div', {
										ref: rootComponentRef,
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
											'ss__carousel',
											vertical ? 'ss__carousel-vertical' : '',
											className,
											internalClassName
										),
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel__prev-wrapper', {
													'ss__carousel__prev-wrapper--hidden': hideButtons,
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
													className: 'ss__carousel__prev',
													ref: navigationPrevRef,
													onClick: onPrevButtonClick && ((e) => onPrevButtonClick(e)),
													children:
														prevButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
															icon: vertical ? 'angle-up' : 'angle-left',
															...subProps_icon,
															name: 'prev',
														}),
												}),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.RC, {
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
												scrollbar,
												onResize: (swiper) => {
													additionalProps.onResize && additionalProps.onResize(), swiper.updateSlidesClasses(), attachClasstoLastVisibleSlide();
												},
												onTransitionEnd: () => {
													additionalProps.onTransitionEnd && additionalProps.onTransitionEnd(), attachClasstoLastVisibleSlide();
												},
												children: children.map((child) =>
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.qr, {
														children: (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(child, { treePath }),
													})
												),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel__next-wrapper', {
													'ss__carousel__next-wrapper--hidden': hideButtons,
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
													className: 'ss__carousel__next',
													ref: navigationNextRef,
													onClick: onNextButtonClick && ((e) => onNextButtonClick(e)),
													children:
														nextButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
															icon: vertical ? 'angle-down' : 'angle-right',
															...subProps_icon,
															name: 'next',
														}),
												}),
											}),
										],
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
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
		'./components/src/utilities/Colour/Colour.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { V: () => Colour });
			class Colour {
				get hex() {
					return this.hexValue ? this.hexValue : this.value;
				}
				get rgb() {
					return this.rgbValue ? this.rgbValue : this.value;
				}
				get contrast() {
					if (this.hexValue) {
						const calculation = [
							parseInt(this.hexValue.slice(1, 3), 16) / 255,
							parseInt(this.hexValue.slice(3, 5), 16) / 255,
							parseInt(this.hexValue.slice(5, 7), 16) / 255,
						].map((color) => (color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4)));
						return 0.2126 * calculation[0] + 0.7152 * calculation[1] + 0.0722 * calculation[2] <= 0.179 ? '#ffffff' : '#000000';
					}
					return this.value;
				}
				constructor(value) {
					(this.value = value),
						value &&
							(value.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (value = `#${value[1].repeat(2)}${value[2].repeat(2)}${value[3].repeat(2)}`),
							Colour.isHex(value)
								? ((this.hexValue = value), (this.rgbValue = Colour.hexToRgb(value)))
								: Colour.isRgb(value) && ((this.rgbValue = value), (this.hexValue = Colour.rgbToHex(value))));
				}
				shift(offset) {
					return new Colour(Colour.brightness(this.hex, offset));
				}
				lighten(offset) {
					return offset < 0 ? this : new Colour(Colour.brightness(this.hex, offset));
				}
				darken(offset) {
					return offset < 0 ? this : new Colour(Colour.brightness(this.hex, -offset));
				}
				opacity(offset) {
					return new Colour(Colour.opacity(this.hex, offset));
				}
				transparency(offset) {
					return offset < 0 ? this : new Colour(Colour.opacity(this.hex, offset));
				}
				opaque(offset) {
					return offset < 0 ? this : new Colour(Colour.opacity(this.hex, -offset));
				}
				static isRgb(color) {
					return Boolean(
						color.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							color.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
					);
				}
				static isHex(color) {
					return Boolean(color.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || color.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
				}
				static hexToRgb(hex) {
					if (!Colour.isHex(hex)) throw 'invalid hex supplied';
					const red = parseInt(hex.slice(1, 3), 16),
						green = parseInt(hex.slice(3, 5), 16),
						blue = parseInt(hex.slice(5, 7), 16),
						alpha = parseInt(hex.slice(7, 9), 16);
					return Number.isInteger(alpha)
						? `rgba(${red}, ${green}, ${blue}, ${(function round(number) {
								const flooredNumber = Math.floor(number),
									decimal = number - flooredNumber;
								if (!decimal) return number;
								const tenths = 10 * Math.floor(10 * decimal),
									hundredths = Math.round(100 * number - tenths);
								return flooredNumber + (tenths + hundredths) / 100;
						  })(alpha / 255)})`
						: `rgb(${red}, ${green}, ${blue})`;
				}
				static rgbToHex(rgb) {
					if (!Colour.isRgb(rgb)) throw 'invalid rgb supplied';
					const [r, g, b, a] = (rgb.match(/[0-9]?\.?[0-9]+%?/g) || []).map((d, index) => {
						if (3 == index) {
							d.match(/%/) && (d = (Number(d.replace('%', '').trim()) / 100).toString());
							let fraction = Number(d);
							(Number.isNaN(fraction) || fraction > 1) && (fraction = 1), fraction < 0 && (fraction = 0), (d = Math.floor(255 * fraction).toString());
						}
						return Number(d).toString(16).padStart(2, '0');
					});
					return `#${r}${g}${b}${a || ''}`;
				}
				static opacity(color, offset) {
					let isRgb = !1;
					if (
						(color && Colour.isRgb(color) && ((isRgb = !0), (color = Colour.rgbToHex(color))),
						!color || !Colour.isHex(color) || !Number.isInteger(offset))
					)
						return color;
					offset > 255 && (offset = 255), offset < -255 && (offset = -255);
					const alpha = color.slice(7, 9) || 'ff';
					let a = parseInt(alpha, 16) - offset;
					a > 255 ? (a = 255) : a < 0 && (a = 0);
					const newAlpha = a.toString(16).padStart(2, '0'),
						hexValue = `${color.slice(0, 7)}${newAlpha}`;
					return isRgb ? Colour.hexToRgb(hexValue) : hexValue;
				}
				static brightness(color, offset) {
					let isRgb = !1;
					if (
						(color && Colour.isRgb(color) && ((isRgb = !0), (color = Colour.rgbToHex(color))),
						!color || !Colour.isHex(color) || !Number.isInteger(offset))
					)
						return color;
					offset > 255 && (offset = 255), offset < -255 && (offset = -255);
					const value = color.slice(1, 7),
						num = parseInt(value, 16);
					let red = (255 & num) + offset;
					red > 255 ? (red = 255) : red < 0 && (red = 0);
					let green = ((num >> 8) & 255) + offset;
					green > 255 ? (green = 255) : green < 0 && (green = 0);
					let blue = (num >> 16) + offset;
					blue > 255 ? (blue = 255) : blue < 0 && (blue = 0);
					const hexValue = `#${(red | (green << 8) | (blue << 16)).toString(16).padStart(6, '0')}${color.slice(7, 9)}`;
					return isRgb ? Colour.hexToRgb(hexValue) : hexValue;
				}
			}
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
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			__webpack_require__.d(__webpack_exports__, { s: () => defined });
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
	},
]);
