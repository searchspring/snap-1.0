(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3049],
	{
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
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			function shiftColor(base, change) {
				const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;
				if (!base || !change) return '#000000';
				if (!base.match(colorRegEx) || !change.match(colorRegEx)) return '#000000';
				(base = base.replace(/\#/g, '')), (change = change.replace(/\#/g, ''));
				let newColor = '';
				for (let i = 0; i < 3; i++) {
					let newPiece;
					(newPiece = parseInt(base.substring(2 * i, 2 * i + 2), 16) + parseInt(change.substring(2 * i, 2 * i + 2), 16)),
						(newPiece = newPiece > 255 ? 255 : newPiece),
						(newPiece = newPiece.toString(16)),
						(newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece),
						(newColor += newPiece);
				}
				return `#${newColor}`;
			}
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
				colors = Array.from(Array(9).keys()),
				Colors = (props) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Carousel.FN, {
						...props,
						children: colors.map((number, index) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { height: '100px', width: '100px', background: shiftColor('#3a23ad', (index + '111').padStart(6, '0')), margin: '0 auto' },
							})
						),
					});
			Colors.args = { pagination: !0, hideButtons: !0, loop: !1 };
			const Icons = (props) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Carousel.FN, {
					...props,
					children: Object.keys(paths.c).map((icon, index) =>
						(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
							style: { margin: '0 auto', textAlign: 'center' },
							children: [
								(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
									icon,
									color: shiftColor('#3a23ad', (index + '111').padStart(6, '1')),
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
							"(props: CarouselProps) => {\n  return <Carousel {...props}>\n            {colors.map((number, index) => <div style={{\n      height: '100px',\n      width: '100px',\n      background: shiftColor('#3a23ad', (index + `111`).padStart(6, '0')),\n      margin: '0 auto'\n    }}></div>)}\n        </Carousel>;\n}",
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
								"(props: CarouselProps) => {\n  return <Carousel {...props}>\n            {Object.keys(iconPaths).map((icon, index) => {\n      return <div style={{\n        margin: '0 auto',\n        textAlign: 'center'\n      }}>\n                        <Icon icon={(icon as IconType)} color={shiftColor('#3a23ad', (index + '111').padStart(6, '1'))} size=\"80px\" style={{\n          padding: '20px'\n        }} />\n                        <div style={{\n          textAlign: 'center'\n        }}>{icon}</div>\n                    </div>;\n    })}\n        </Carousel>;\n}",
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
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { X: () => useDisplaySettings });
			var hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const debounce = (func, timeout = 200) => {
				let timer;
				return (...args) => {
					clearTimeout(timer),
						(timer = window.setTimeout(() => {
							func.apply(void 0, args);
						}, timeout));
				};
			};
			var dist = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, hooks_module.li)(value),
					signalRef = (0, hooks_module.li)(0);
				return (
					(0, dist.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, hooks_module.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, hooks_module.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = debounce(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, hooks_module.vJ)(() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)), []),
					(function useDeepCompareEffect(callback, dependencies) {
						return (0, hooks_module.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
					})(() => {
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
		'./components/src/providers/cache.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => CacheProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const emotionCache = (0, __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js').A)({
					key: 'ss',
					prepend: !0,
				}),
				CacheProvider = (props) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.C, {
						value: props.cache || emotionCache,
						children: props.children,
					});
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
		'../../node_modules/deepmerge/dist/cjs.js': (module) => {
			'use strict';
			var isMergeableObject = function isMergeableObject(value) {
				return (
					(function isNonNullObject(value) {
						return !!value && 'object' == typeof value;
					})(value) &&
					!(function isSpecial(value) {
						var stringValue = Object.prototype.toString.call(value);
						return (
							'[object RegExp]' === stringValue ||
							'[object Date]' === stringValue ||
							(function isReactElement(value) {
								return value.$$typeof === REACT_ELEMENT_TYPE;
							})(value)
						);
					})(value)
				);
			};
			var REACT_ELEMENT_TYPE = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
			function cloneUnlessOtherwiseSpecified(value, options) {
				return !1 !== options.clone && options.isMergeableObject(value)
					? deepmerge(
							(function emptyTarget(val) {
								return Array.isArray(val) ? [] : {};
							})(value),
							value,
							options
					  )
					: value;
			}
			function defaultArrayMerge(target, source, options) {
				return target.concat(source).map(function (element) {
					return cloneUnlessOtherwiseSpecified(element, options);
				});
			}
			function getKeys(target) {
				return Object.keys(target).concat(
					(function getEnumerableOwnPropertySymbols(target) {
						return Object.getOwnPropertySymbols
							? Object.getOwnPropertySymbols(target).filter(function (symbol) {
									return Object.propertyIsEnumerable.call(target, symbol);
							  })
							: [];
					})(target)
				);
			}
			function propertyIsOnObject(object, property) {
				try {
					return property in object;
				} catch (_) {
					return !1;
				}
			}
			function mergeObject(target, source, options) {
				var destination = {};
				return (
					options.isMergeableObject(target) &&
						getKeys(target).forEach(function (key) {
							destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
						}),
					getKeys(source).forEach(function (key) {
						(function propertyIsUnsafe(target, key) {
							return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
						})(target, key) ||
							(propertyIsOnObject(target, key) && options.isMergeableObject(source[key])
								? (destination[key] = (function getMergeFunction(key, options) {
										if (!options.customMerge) return deepmerge;
										var customMerge = options.customMerge(key);
										return 'function' == typeof customMerge ? customMerge : deepmerge;
								  })(key, options)(target[key], source[key], options))
								: (destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)));
					}),
					destination
				);
			}
			function deepmerge(target, source, options) {
				((options = options || {}).arrayMerge = options.arrayMerge || defaultArrayMerge),
					(options.isMergeableObject = options.isMergeableObject || isMergeableObject),
					(options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
				var sourceIsArray = Array.isArray(source);
				return sourceIsArray === Array.isArray(target)
					? sourceIsArray
						? options.arrayMerge(target, source, options)
						: mergeObject(target, source, options)
					: cloneUnlessOtherwiseSpecified(source, options);
			}
			deepmerge.all = function deepmergeAll(array, options) {
				if (!Array.isArray(array)) throw new Error('first argument should be an array');
				return array.reduce(function (prev, next) {
					return deepmerge(prev, next, options);
				}, {});
			};
			var deepmerge_1 = deepmerge;
			module.exports = deepmerge_1;
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
