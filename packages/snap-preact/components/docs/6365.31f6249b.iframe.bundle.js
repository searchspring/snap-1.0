'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6365],
	{
		'./components/src/components/Atoms/Image/Image.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { _: () => Image, t: () => FALLBACK_IMAGE_URL });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const FALLBACK_IMAGE_URL = '//cdn.searchspring.net/ajax_search/img/default_image.png',
				CSS = {
					image: ({ visibility }) =>
						(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: 'auto',
							'& img': { visibility, flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
						}),
				};
			function Image(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = { fallback: FALLBACK_IMAGE_URL, lazy: !0 },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('image', globalTheme, defaultProps, properties),
					{ alt, src, fallback, hoverSrc, lazy, onMouseOver, onMouseOut, onError, onLoad, onClick, disableStyles, className, style, styleScript } =
						props,
					[visibility, setVisibility] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)('hidden'),
					[isHovering, setHover] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					prevSrcRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)('');
				(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
					prevSrcRef.current = src;
				}),
					prevSrcRef.current && prevSrcRef.current != src && setVisibility('hidden');
				const styling = { 'ss-name': props.name },
					stylingProps = { ...props, visibility };
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.image(stylingProps), style]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__image', className),
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('img', {
								src: (isHovering ? hoverSrc : src) || fallback,
								alt,
								title: alt,
								loading: lazy ? 'lazy' : void 0,
								onLoad: (e) => {
									setVisibility('visible'), onLoad && onLoad(e);
								},
								onClick: (e) => onClick && onClick(e),
								onError: (e) => {
									(e.target.src = fallback || ''), onError && onError(e);
								},
								onMouseOver: (e) => {
									hoverSrc && setHover(!0), onMouseOver && onMouseOver(e);
								},
								onMouseOut: (e) => {
									hoverSrc && setHover(!1), onMouseOut && onMouseOut(e);
								},
							}),
						}),
					})
				);
			}
		},
		'./components/src/components/Molecules/Carousel/Carousel.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'./components/src/components/Molecules/Grid/Grid.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { x: () => Grid });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx');
			const CSS = {
				Grid: ({ theme, columns, gapSize, disableOverflowAction }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'& .ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							gap: gapSize,
							gridAutoRows: '1fr',
							'& .ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
								margin: `0 ${gapSize} ${gapSize} 0`,
								'.ss__grid__option__label': { cursor: 'pointer' },
								[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
								'&.ss__grid__option--selected': { border: `2px solid ${theme?.variables?.colors?.primary || '#333'}` },
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
								'&:hover:not(.ss__grid__option--selected)': {
									cursor: 'pointer',
									background: theme?.variables?.colors?.hover?.background || '#f8f8f8',
								},
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						},
						'& .ss__grid__show-more-wrapper': { '&:hover': { cursor: disableOverflowAction ? 'initial !important' : 'pointer !important' } },
					}),
			};
			function Grid(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					theme = { ...globalTheme, ...properties.theme },
					props = {
						multiSelect: !1,
						columns: 4,
						gapSize: '8px',
						...globalTheme?.components?.grid,
						...properties,
						...properties.theme?.components?.grid,
					},
					{
						titleText,
						onSelect,
						hideLabels,
						disableOverflowAction,
						multiSelect,
						overflowButton,
						columns,
						rows,
						hideShowLess,
						gapSize,
						overflowButtonInGrid,
						disabled,
						options,
						disableStyles,
						onOverflowButtonClick,
						className,
						style,
						treePath,
					} = props,
					subProps_image = {
						className: 'ss__swatches__Image',
						...globalTheme?.components?.image,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					};
				let selected = props.selected;
				const styling = { 'ss-name': props.name };
				disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS.Grid({ theme, columns, gapSize, disableOverflowAction }), style]),
					selected && !Array.isArray(selected) && (selected = [selected]);
				const [selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || []),
					[originalSelected] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || []);
				try {
					if (selected) {
						const originalSelectedstr = JSON.stringify(originalSelected),
							selectedstr = JSON.stringify(selected),
							selectionstr = JSON.stringify(selection);
						originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
					}
				} catch (e) {}
				const limit = rows && columns ? columns * rows : options.length,
					remainder = Math.max(0, options.length - (limit - (overflowButtonInGrid ? 1 : 0))),
					[limited, setLimited] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(remainder),
					OverflowButtonElem = () => {
						const showButton = !hideShowLess || !!limited,
							defaultLang = { showMoreText: { value: `+ ${remainder}` }, showLessText: { value: 'Less' } },
							lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
							mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__.u)(lang, { limited, remainder });
						return showButton && remainder > 0 && options.length !== limit
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									className: 'ss__grid__show-more-wrapper ' + (overflowButtonInGrid ? 'ss__grid__option' : ''),
									onClick: (e) => {
										!disableOverflowAction && setLimited(!limited), onOverflowButtonClick && onOverflowButtonClick(e, Boolean(limited), remainder);
									},
									...(limited ? mergedLang.showMoreText.attributes : mergedLang.showLessText.attributes),
									children: overflowButton
										? (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Y)(overflowButton, { limited, remainder, treePath })
										: limited
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
												className: 'ss__grid__show-more',
												...mergedLang.showMoreText.value,
										  })
										: remainder
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
												className: 'ss__grid__show-less',
												...mergedLang.showLessText.value,
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					};
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__grid', disabled ? 'ss__grid--disabled' : '', className),
								children: [
									titleText &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h5', { className: 'ss__grid__title', children: titleText }),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
										className: 'ss__grid__options',
										children: [
											options.map((option, idx) => {
												const selected = selection.some((select) => select.value == option.value);
												if (!limited || options.length == limit || idx < limit - (overflowButtonInGrid ? 1 : 0))
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
															`ss__grid__option ss__grid__option--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__.p(
																option.value.toString()
															)}`,
															{
																'ss__grid__option--selected': selected,
																'ss__grid__option--disabled': option?.disabled,
																'ss__grid__option--unavailable': !1 === option?.available,
															}
														),
														style: { background: option.background ? option.background : option.backgroundImageUrl ? void 0 : option.value },
														onClick: (e) =>
															!disabled &&
															!option?.disabled &&
															((e, option) => {
																if (multiSelect) {
																	let newArray;
																	selection.find((select) => select.value === option.value)
																		? ((newArray = [...selection]),
																		  newArray.splice(
																				newArray.findIndex((select) => select.value === option.value),
																				1
																		  ))
																		: (newArray = [...selection, option]),
																		onSelect && onSelect(e, option, newArray),
																		setSelection(newArray);
																} else onSelect && onSelect(e, option, [option]), setSelection([option]);
															})(e, option),
														ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.i)(e),
														title: option.label,
														role: 'option',
														'aria-selected': selected,
														children: [
															!option.background && option.backgroundImageUrl
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_13__._, {
																		...subProps_image,
																		src: option.backgroundImageUrl,
																		alt: option.label || option.value.toString(),
																  })
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
															hideLabels
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('label', {
																		className: 'ss__grid__option__label',
																		children: option.label || option.value,
																  }),
														],
													});
											}),
											overflowButtonInGrid
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(OverflowButtonElem, {})
												: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
										],
									}),
									overflowButtonInGrid
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(OverflowButtonElem, {}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Molecules/Swatches/Swatches.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Swatches });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/Grid/Grid.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js');
			const CSS = {
				Swatches: ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						marginTop: '10px',
						'.ss__swatches__carousel__swatch': {
							boxSizing: 'content-box',
							cursor: 'pointer',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
							aspectRatio: '1/1',
							margin: 'auto',
							flexDirection: 'column',
							'&.ss__swatches__carousel__swatch--selected': { border: `2px solid ${theme?.variables?.colors?.primary || '#333'}` },
							'&.ss__swatches__carousel__swatch--disabled:before, &.ss__swatches__carousel__swatch--unavailable:before': {
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
							'&.ss__swatches__carousel__swatch--disabled': { position: 'relative', cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'&.ss__swatches__carousel__swatch--unavailable': { cursor: 'pointer', opacity: 0.5 },
						},
					}),
			};
			function Swatches(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					theme = { ...globalTheme, ...properties.theme };
				let props = {
					type: 'carousel',
					hideLabels: !0,
					...globalTheme?.components?.swatches,
					...properties,
					...properties.theme?.components?.swatches,
				};
				const breakpoints =
						props.breakpoints ||
						('carousel' == props.type
							? {
									0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
									768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
									1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
							  }
							: {}),
					displaySettings = (0, _hooks__WEBPACK_IMPORTED_MODULE_6__.X)(breakpoints);
				if (displaySettings && Object.keys(displaySettings).length) {
					const theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
						arrayMerge: (destinationArray, sourceArray) => sourceArray,
					});
					props = { ...props, ...displaySettings, theme };
				}
				const { onSelect, disabled, options, hideLabels, disableStyles, className, style, type, carousel, grid, treePath } = props,
					subProps_carousel = {
						className: 'ss__swatches__carousel',
						loop: !1,
						...carousel,
						...globalTheme?.components?.carousel,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ breakpoints, disableStyles }),
						theme: props?.theme,
						treePath,
					},
					subProps_grid = {
						className: 'ss__swatches__grid',
						hideLabels,
						overflowButtonInGrid: !0,
						disableOverflowAction: !0,
						rows: 1,
						columns: 6,
						...grid,
						...globalTheme?.components?.grid,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					subProps_image = {
						className: 'ss__swatches__image',
						...globalTheme?.components?.image,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					selected = props.selected,
					styling = { 'ss-name': props.name };
				disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS.Swatches({ theme }), style]);
				const [selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || void 0),
					makeSelection = (e, option) => {
						onSelect && onSelect(e, option), setSelection(option);
					};
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__swatches', className),
								children:
									'carousel' == type
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Carousel__WEBPACK_IMPORTED_MODULE_10__.FN, {
												...subProps_carousel,
												children: options.map((option) => {
													const label = option.label,
														selected = selection?.value == option.value;
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
															`ss__swatches__carousel__swatch ss__swatches__carousel__swatch--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__.p(
																option.value.toString()
															)}`,
															{
																'ss__swatches__carousel__swatch--selected': selected,
																'ss__swatches__carousel__swatch--disabled': option?.disabled,
																'ss__swatches__carousel__swatch--unavailable': !1 === option?.available,
															}
														),
														title: label,
														style: { background: option.background ? option.background : option.backgroundImageUrl ? '' : option.value },
														onClick: (e) => !disabled && !option?.disabled && makeSelection(e, option),
														ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.i)(e),
														role: 'option',
														'aria-selected': selected,
														children: [
															!option.background && option.backgroundImageUrl
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_13__._, {
																		...subProps_image,
																		src: option.backgroundImageUrl,
																		alt: option.label || option.value.toString(),
																  })
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
															!hideLabels &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
																	className: 'ss__swatches__carousel__swatch__value',
																	children: label || option.value,
																}),
														],
													});
												}),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Grid__WEBPACK_IMPORTED_MODULE_14__.x, {
												...subProps_grid,
												options,
												onSelect: (e, option) => {
													!disabled && makeSelection(e, option);
												},
												selected,
										  }),
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y';
			function useA11y(elem, tabIndex, trapFocus, escCallback) {
				if (!document.querySelector('#ssA11yFocusStyle')) {
					const style = document.createElement('style');
					(style.type = 'text/css'),
						(style.id = 'ssA11yFocusStyle'),
						(style.innerHTML = `[${A11Y_ATTRIBUTE}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
						document.getElementsByTagName('head')[0].appendChild(style);
				}
				elem &&
					!elem.attributes?.[A11Y_ATTRIBUTE] &&
					(elem.setAttribute(A11Y_ATTRIBUTE, !0),
					elem.setAttribute('tabIndex', `${tabIndex || 0}`),
					elem.addEventListener('keydown', (event) => {
						('Space' !== event.code && 'Enter' !== event.code) || elem.click();
					}),
					trapFocus &&
						elem.addEventListener('keydown', function (e) {
							const focusableEls = elem.querySelectorAll(
									'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]'
								),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(), void e.preventDefault();
							('Tab' !== e.key && e.keyCode !== KEYCODE_TAB) ||
								(e.shiftKey
									? document.activeElement === firstFocusableEl && (lastFocusableEl.focus(), e.preventDefault())
									: document.activeElement === lastFocusableEl && (firstFocusableEl.focus(), e.preventDefault()));
						}));
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label']({ data }))
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
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
			};
		},
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'../snap-toolbox/dist/esm/filters/handleize.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function handleize(input) {
				if ('string' != typeof input) return input;
				let handleized = input.toLowerCase();
				return (handleized = handleized.replace(/[^\w\s]/g, '').trim()), (handleized = handleized.replace(/\s/g, '-')), handleized;
			}
			__webpack_require__.d(__webpack_exports__, { p: () => handleize });
		},
	},
]);
