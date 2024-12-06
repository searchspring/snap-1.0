'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4208],
	{
		'./components/src/components/Molecules/Carousel/Carousel.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, {
				FN: () => Carousel,
				K: () => defaultCarouselBreakpoints,
				og: () => defaultVerticalCarouselBreakpoints,
			});
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/swiper/modules/index.mjs'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx');
			const defaultStyles = ({ vertical, theme }) =>
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
						style: _,
						styleScript: __,
						themeStyleScript: ___,
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
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Z)(props, defaultStyles);
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
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
										ref: rootComponentRef,
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel', vertical ? 'ss__carousel-vertical' : '', className),
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel__prev-wrapper', {
													'ss__carousel__prev-wrapper--hidden': hideButtons,
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
													className: 'ss__carousel__prev',
													ref: navigationPrevRef,
													onClick: onPrevButtonClick && ((e) => onPrevButtonClick(e)),
													children:
														prevButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															icon: vertical ? 'angle-up' : 'angle-left',
															...subProps_icon,
															name: 'prev',
														}),
												}),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.RC, {
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
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.qr, {
														children: child,
													})
												),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__carousel__next-wrapper', {
													'ss__carousel__next-wrapper--hidden': hideButtons,
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
													className: 'ss__carousel__next',
													ref: navigationNextRef,
													onClick: onNextButtonClick && ((e) => onNextButtonClick(e)),
													children:
														nextButton ||
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															icon: vertical ? 'angle-down' : 'angle-right',
															...subProps_icon,
															name: 'next',
														}),
												}),
											}),
										],
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { g: () => RecommendationBundle });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				Carousel = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				Result = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				mergeStyles = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				cloneWithProps = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				useDisplaySettings = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				RecommendationProfileTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'
				),
				RecommendationResultTracker = __webpack_require__(
					'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx'
				),
				Checkbox = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx');
			const BundleSelector = (0, mobxreact_esm.PA)((properties) => {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = (0, mergeProps.v6)('bundleSelector', globalTheme, { hideCheckboxes: !1 }, properties),
					{ children, checked, icon, seedText, seed, hideCheckboxes, onCheck, title, className, treePath } = props,
					lastPath = treePath?.lastIndexOf(' '),
					modifiedTreePath = treePath?.slice(0, lastPath),
					subProps_icon = {
						name: 'bundle-selector',
						className: 'ss__recommendation-bundle__wrapper__selector__icon',
						size: 15,
						...globalTheme?.components?.icon,
						theme: props?.theme,
						treePath: modifiedTreePath,
					},
					subProps_checkbox = {
						className: 'ss__recommendation-bundle__wrapper__selector__result-wrapper__checkbox',
						checked,
						size: 18,
						onClick: onCheck,
						lang: { checkbox: { attributes: { 'aria-label': checked ? `remove product from bundle ${title}` : `add product to bundle ${title}` } } },
						...globalTheme?.components?.checkbox,
						theme: props?.theme,
						treePath: modifiedTreePath,
					},
					lang = cjs_default()({}, props.lang || {}),
					mergedLang = (0, useLang.u)(lang, {});
				return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
					className: classnames_default()(
						'ss__recommendation-bundle__wrapper__selector',
						checked ? 'ss__recommendation-bundle__wrapper__selector--selected' : '',
						seedText || seed ? 'ss__recommendation-bundle__wrapper__selector--seed' : '',
						className
					),
					children: [
						(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
							className: 'ss__recommendation-bundle__wrapper__selector__result-wrapper',
							children: [
								!hideCheckboxes && (0, emotion_react_jsx_runtime_browser_esm.Y)(Checkbox.S, { ...subProps_checkbox }),
								seedText &&
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										className: 'ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge',
										...mergedLang.seedText?.all,
									}),
								children,
							],
						}),
						icon
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon, ...('string' == typeof icon ? { icon } : icon) })
							: void 0,
					],
				});
			});
			var Button = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				Price = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx');
			const BundledCTA = (0, mobxreact_esm.PA)((properties) => {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = { ...properties };
				props.onAddToCart = (e) => {
					setAddedToCart(!0), properties.onAddToCart(e), setTimeout(() => setAddedToCart(!1), properties.ctaButtonSuccessTimeout);
				};
				const { ctaSlot, cartStore, onAddToCart, ctaIcon, ctaButtonText, ctaButtonSuccessText, treePath } = props,
					[addedToCart, setAddedToCart] = (0, hooks_module.J0)(!1);
				props.addedToCart = addedToCart;
				const subProps_icon = {
						name: 'bundle-cart',
						className: 'ss__recommendation-bundle__wrapper__cta__icon',
						size: 50,
						...globalTheme?.components?.icon,
						theme: props?.theme,
						treePath,
					},
					subProps_subtotalStrike = { name: 'bundle-msrp', ...globalTheme?.components?.price, theme: props?.theme, treePath },
					subProps_subtotalPrice = { name: 'bundle-price', ...globalTheme?.components?.price, theme: props?.theme, treePath },
					lang = cjs_default()({}, props.lang || {}),
					mergedLang = (0, useLang.u)(lang, {});
				return (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
					className: 'ss__recommendation-bundle__wrapper__cta',
					children: ctaSlot
						? (0, cloneWithProps.Y)(ctaSlot, props)
						: (0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: 'ss__recommendation-bundle__wrapper__cta__subtotal',
										'aria-atomic': 'false',
										'aria-live': 'polite',
										children: [
											ctaIcon
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
														className: 'icon',
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
															...subProps_icon,
															...('string' == typeof ctaIcon ? { icon: ctaIcon } : ctaIcon),
														}),
												  })
												: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {}),
											(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
												className: 'ss__recommendation-bundle__wrapper__cta__subtotal__title',
												children: `Subtotal for ${cartStore.count} items`,
											}),
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: 'ss__recommendation-bundle__wrapper__cta__subtotal__prices',
												children: [
													cartStore.msrp && cartStore.msrp !== cartStore.price
														? (0, emotion_react_jsx_runtime_browser_esm.FD)('label', {
																className: 'ss__recommendation-bundle__wrapper__cta__subtotal__strike',
																children: [
																	'Was ',
																	(0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, {
																		...subProps_subtotalStrike,
																		lineThrough: !0,
																		value: cartStore.msrp,
																	}),
																],
														  })
														: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {}),
													(0, emotion_react_jsx_runtime_browser_esm.Y)('label', {
														className: 'ss__recommendation-bundle__wrapper__cta__subtotal__price',
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...subProps_subtotalPrice, value: cartStore.price }),
													}),
												],
											}),
										],
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Button.$, {
										className: classnames_default()('ss__recommendation-bundle__wrapper__cta__button', {
											'ss__recommendation-bundle__wrapper__cta__button--added': addedToCart,
										}),
										'aria-live': addedToCart,
										onClick: (e) => onAddToCart(e),
										...(addedToCart ? mergedLang.ctaButtonSuccessText?.all : mergedLang.ctaButtonText?.all),
										children: addedToCart ? ctaButtonSuccessText : ctaButtonText,
									}),
								],
						  }),
				});
			});
			var useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const defaultStyles = ({ vertical, separatorIcon, carousel, ctaInline }) =>
					(0, emotion_react_browser_esm.AH)({
						'.ss__recommendation-bundle__wrapper': { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
						'.ss__recommendation-bundle__wrapper__selector--seed': {
							width: '' + (vertical ? '100%' : 'auto'),
							margin: '' + (separatorIcon ? 'initial' : 'auto !important'),
						},
						'.ss__recommendation-bundle__wrapper__seed-container': {
							width: vertical ? '100%' : `calc(100% / ${carousel?.slidesPerView + (ctaInline ? 1 : 0)})`,
						},
						'.ss__recommendation-bundle__wrapper__cta': {
							width: vertical ? '100%' : '' + (ctaInline ? `calc(100% / ${carousel?.slidesPerView + 1})` : '100%'),
							textAlign: 'center',
							'.ss__recommendation-bundle__wrapper__cta__subtotal__prices': { display: 'block' },
							'.ss__recommendation-bundle__wrapper__cta__button--added': { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
						},
						'.ss__recommendation-bundle__wrapper__carousel': {
							boxSizing: 'border-box',
							width: vertical ? '100%' : `calc(calc(100% / ${carousel?.slidesPerView + (ctaInline ? 1 : 0)}) * ${carousel?.slidesPerView - 1})`,
						},
						'.ss__recommendation-bundle__wrapper--seed-in-carousel': {
							'.ss__recommendation-bundle__wrapper__cta': {
								width: vertical ? '100%' : `calc(100% / ${carousel?.slidesPerView + (ctaInline ? 1 : 0)})`,
							},
							'.ss__recommendation-bundle__wrapper__carousel': {
								width: vertical ? '100%' : `calc(calc(100% / ${carousel?.slidesPerView + (ctaInline ? 1 : 0)}) * ${carousel?.slidesPerView})`,
								padding: '0',
							},
						},
						'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': {
							'.ss__recommendation-bundle__wrapper__selector__icon': { display: 'none' },
						},
						'.swiper-slide-visible': { '.ss__recommendation-bundle__wrapper__selector__icon': { display: 'block' } },
						'.ss__recommendation-bundle__wrapper--vertical': { flexDirection: 'column' },
						'.ss__recommendation-bundle__wrapper__selector': {
							alignItems: 'baseline',
							position: 'relative',
							'&.ss__recommendation-bundle__wrapper__selector--last': {
								'& .ss__recommendation-bundle__wrapper__selector__icon': { display: 'none' },
							},
							'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
								position: 'absolute',
								top: '0',
								left: '0',
								zIndex: '1',
							},
							'& .ss__recommendation-bundle__wrapper__selector__icon': { position: 'absolute', right: '-1em', top: '140px' },
							'& .ss__recommendation-bundle__wrapper__selector__result-wrapper': {
								alignItems: 'center',
								position: 'relative',
								margin: `0px ${5 + (Number(carousel?.spaceBetween) || 0)}px`,
							},
							'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__checkbox': {
								position: 'absolute',
								top: '0',
								right: '0',
								zIndex: '1',
								cursor: 'pointer',
							},
						},
					}),
				RecommendationBundle = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = {
							breakpoints: JSON.parse(
								JSON.stringify({
									0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10, ctaInline: !1 },
									768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
									1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
								})
							),
							hideCheckboxes: !1,
							separatorIcon: 'plus-thin',
							seedText: 'This Product',
							separatorIconSeedOnly: !0,
							ctaIcon: 'bag',
							ctaButtonText: 'Add All To Cart',
							ctaButtonSuccessText: 'Bundle Added!',
							ctaButtonSuccessTimeout: 2e3,
							ctaInline: !0,
							...globalTheme?.components?.recommendationBundle,
							...properties,
							...properties.theme?.components?.recommendationBundle,
						};
					let displaySettings,
						props = (0, mergeProps.v6)('recommendationBundle', globalTheme, defaultProps, properties);
					if (
						!properties.theme?.name &&
						((displaySettings = (0, useDisplaySettings.X)(props.breakpoints)), displaySettings && Object.keys(displaySettings).length)
					) {
						const theme = cjs_default()(props?.theme || {}, displaySettings?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
						props = { ...props, ...displaySettings, theme };
					}
					const {
							title,
							controller,
							breakpoints,
							results,
							carousel,
							preselectedCount,
							separatorIcon,
							hideCheckboxes,
							limit,
							seedText,
							vertical,
							onAddToCart,
							separatorIconSeedOnly,
							resultComponent,
							ctaSlot,
							hideSeed,
							ctaButtonText,
							ctaButtonSuccessText,
							ctaButtonSuccessTimeout,
							disableStyles,
							ctaIcon,
							ctaInline,
							hideSeedText,
							lazyRender,
							className,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							treePath,
							...additionalProps
						} = props,
						mergedlazyRender = { enabled: !0, offset: '10%', ...lazyRender },
						mergedCarouselProps = { enabled: !0, loop: !1, spaceBetween: 10, ...carousel },
						{ seedInCarousel, prevButton, nextButton, hideButtons, loop, spaceBetween, pagination } = mergedCarouselProps,
						carouselEnabled = mergedCarouselProps.enabled;
					if (!controller || 'recommendation' !== controller.type)
						throw new Error("<BundleRecommendation> Component requires 'controller' prop with an instance of RecommendationController");
					let resultsToRender = results || controller.store?.results;
					limit && (resultsToRender = resultsToRender.slice(0, hideSeed ? limit + 1 : limit));
					const cartStore = controller.store.cart;
					if (!cartStore) throw new Error("<BundleRecommendation> Component requires 'cartStore' to exist in the recommendation store");
					if (!((results && results.length) || controller.store?.results?.length))
						throw new Error('<BundleRecommendation> Component has no results to render!');
					const seed = results ? results[0] : controller.store?.results[0],
						subProps_carousel = {
							loop,
							className: 'ss__recommendation__carousel',
							...globalTheme?.components?.carousel,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_result = {
							className: 'ss__recommendation__result',
							...globalTheme?.components?.result,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let slidesPerView = props.carousel?.slidesPerView || props.slidesPerView;
					slidesPerView ? resultsToRender.length < Number(slidesPerView) && (slidesPerView = resultsToRender.length) : (slidesPerView = 2);
					const styling = (0, mergeStyles.Z)({ ...props, carousel: { ...mergedCarouselProps, slidesPerView } }, defaultStyles),
						_preSelectedCount = 'number' == typeof preselectedCount ? preselectedCount : carouselEnabled ? slidesPerView : resultsToRender.length;
					(0, hooks_module.vJ)(() => {
						cartStore.reset(),
							_preSelectedCount &&
								resultsToRender?.forEach((result, idx) => {
									idx < Number(_preSelectedCount) && cartStore.addItems([result]);
								});
					}, [resultsToRender.length]);
					const selectedItems = cartStore.items,
						modifiedBreakpoints = { ...breakpoints };
					carouselEnabled &&
						Object.keys(props.breakpoints).forEach((breakpoint) => {
							const obj = props.breakpoints[breakpoint],
								objSlidesPerView = obj.carousel?.slidesPerView || obj.slidesPerView || 2,
								objSlidesPerGroup = obj.carousel?.slidesPerGroup || obj.slidesPerGroup || 2;
							let newSlidesPerView = objSlidesPerView,
								newSlidesPerGroup = objSlidesPerGroup;
							const resultCount = seedInCarousel ? resultsToRender.length : resultsToRender.length - 1;
							resultCount &&
								(resultCount >= objSlidesPerView
									? ((newSlidesPerView = objSlidesPerView - (seedInCarousel ? 0 : 1)),
									  seedInCarousel || (newSlidesPerGroup = objSlidesPerGroup - 1 || 1))
									: ((newSlidesPerView = resultCount), (newSlidesPerGroup = resultCount))),
								(modifiedBreakpoints[breakpoint] = {
									...modifiedBreakpoints[breakpoint],
									slidesPerView: newSlidesPerView,
									slidesPerGroup: newSlidesPerGroup,
								});
						});
					const onProductSelect = (product) => {
							if (product) {
								selectedItems.findIndex((result) => result.id == product.id) > -1
									? (cartStore.removeItems([product]), 0 == cartStore.items.length && cartStore.items.push(seed))
									: cartStore.addItems([product]);
							}
						},
						addToCart = (e) => {
							controller.track.addBundle(e, selectedItems), onAddToCart && onAddToCart(e, selectedItems);
						},
						seedRef = (0, hooks_module.li)(),
						carouselRef = (0, hooks_module.li)(),
						[isVisible, setIsVisible] = (0, hooks_module.J0)(!1),
						recsRef = (0, hooks_module.li)(null);
					(!mergedlazyRender?.enabled || (0, useIntersection.v)(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, !0)) &&
						setIsVisible(!0);
					const defaultLang = {
							seedText: { value: seedText },
							ctaButtonText: { value: ctaButtonText },
							ctaButtonSuccessText: { value: ctaButtonSuccessText },
						},
						lang = cjs_default()(defaultLang, props.lang || {});
					return (
						hideSeedText && delete lang.seedText.value,
						resultsToRender?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										...styling,
										ref: recsRef,
										className: classnames_default()('ss__recommendation-bundle', { 'ss__recommendation-bundle--stacked': !ctaInline }, className),
										children: isVisible
											? (0, emotion_react_jsx_runtime_browser_esm.FD)(RecommendationProfileTracker.l, {
													controller,
													children: [
														title &&
															(0, emotion_react_jsx_runtime_browser_esm.Y)('h3', {
																className: 'ss__recommendation-bundle__title',
																children: (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { children: title }),
															}),
														(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
															className: classnames_default()('ss__recommendation-bundle__wrapper', {
																'ss__recommendation-bundle__wrapper--seed-in-carousel': seedInCarousel,
																'ss__recommendation-bundle__wrapper--vertical': vertical,
															}),
															children: [
																carouselEnabled
																	? (0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
																			children: [
																				!seedInCarousel &&
																					!hideSeed &&
																					(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																						className: 'ss__recommendation-bundle__wrapper__seed-container',
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																							controller,
																							result: seed,
																							track: { impression: !1 },
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																								seedText,
																								seed: !0,
																								title: seed.display.mappings.core?.name,
																								onCheck: () => onProductSelect(seed),
																								checked: selectedItems.findIndex((item) => item.id == seed.id) > -1,
																								icon: separatorIcon,
																								hideCheckboxes,
																								theme: props.theme,
																								ref: seedRef,
																								treePath,
																								lang: { seedText: lang.seedText },
																								children: resultComponent
																									? (0, cloneWithProps.Y)(resultComponent, {
																											result: seed,
																											seed: !0,
																											selected: selectedItems.findIndex((item) => item.id == seed.id) > -1,
																											onProductSelect,
																									  })
																									: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																											...subProps_result,
																											controller,
																											result: seed,
																									  }),
																							}),
																						}),
																					}),
																				(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: 'ss__recommendation-bundle__wrapper__carousel',
																					children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Carousel.FN, {
																						prevButton,
																						nextButton,
																						hideButtons,
																						loop,
																						spaceBetween,
																						pagination,
																						breakpoints: modifiedBreakpoints,
																						watchSlidesProgress: !0,
																						observer: !0,
																						vertical,
																						onResize: () =>
																							(() => {
																								if (seedRef.current) {
																									const seedElem = seedRef.current?.base,
																										carouselElem = carouselRef.current?.base,
																										visibleSlide = carouselElem?.querySelector(
																											'.swiper-slide-visible .ss__recommendation-bundle__wrapper__selector'
																										),
																										width = visibleSlide?.offsetWidth;
																									seedElem && (seedElem.style.width = `${width}px`);
																								}
																							})(),
																						...subProps_carousel,
																						...additionalProps,
																						...displaySettings,
																						ref: carouselRef,
																						children: seedInCarousel
																							? resultsToRender
																									.filter((result, idx) => !hideSeed || 0 != idx)
																									.map((result, idx) => {
																										const selected = selectedItems.findIndex((item) => item.id == result.id) > -1;
																										return 0 != idx || hideSeed
																											? (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																													controller,
																													result,
																													children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																														icon: !separatorIconSeedOnly && separatorIcon,
																														title: result.display.mappings.core?.name,
																														onCheck: () => onProductSelect(result),
																														checked: selected,
																														hideCheckboxes,
																														theme: props.theme,
																														treePath,
																														className:
																															idx + 1 == resultsToRender.length
																																? 'ss__recommendation-bundle__wrapper__selector--last'
																																: '',
																														children: resultComponent
																															? (0, cloneWithProps.Y)(resultComponent, {
																																	result,
																																	seed: !1,
																																	selected,
																																	onProductSelect,
																															  })
																															: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																																	...subProps_result,
																																	controller,
																																	result,
																															  }),
																													}),
																											  })
																											: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																													controller,
																													result,
																													track: { impression: !1 },
																													children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																														seedText,
																														seed: !0,
																														title: result.display.mappings.core?.name,
																														icon: separatorIcon,
																														onCheck: () => onProductSelect(result),
																														checked: selected,
																														hideCheckboxes,
																														theme: props.theme,
																														treePath,
																														lang: { seedText: lang.seedText },
																														children: resultComponent
																															? (0, cloneWithProps.Y)(resultComponent, {
																																	result,
																																	seed: !0,
																																	selected,
																																	onProductSelect,
																															  })
																															: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																																	...subProps_result,
																																	controller,
																																	result,
																															  }),
																													}),
																											  });
																									})
																							: resultsToRender
																									.filter((result, idx) => 0 !== idx)
																									.map((result, idx, results) => {
																										const selected = selectedItems.findIndex((item) => item.id == result.id) > -1;
																										return (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																											controller,
																											result,
																											children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																												icon: !separatorIconSeedOnly && separatorIcon,
																												title: result.display.mappings.core?.name,
																												onCheck: () => onProductSelect(result),
																												checked: selected,
																												hideCheckboxes,
																												theme: props.theme,
																												treePath,
																												className:
																													idx + 1 == results.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
																												children: resultComponent
																													? (0, cloneWithProps.Y)(resultComponent, { result, seed: !1, selected, onProductSelect })
																													: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																															...subProps_result,
																															controller,
																															result,
																													  }),
																											}),
																										});
																									}),
																					}),
																				}),
																			],
																	  })
																	: resultsToRender
																			.filter((result, idx) => !hideSeed || 0 != idx)
																			.map((result, idx) => {
																				const selected = selectedItems.findIndex((item) => item.id == result.id) > -1;
																				return 0 != idx || hideSeed
																					? (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																							controller,
																							result,
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																								icon: !separatorIconSeedOnly && separatorIcon,
																								title: result.display.mappings.core?.name,
																								onCheck: () => onProductSelect(result),
																								checked: selected,
																								hideCheckboxes,
																								theme: props.theme,
																								treePath,
																								className:
																									idx + 1 == resultsToRender.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
																								children: resultComponent
																									? (0, cloneWithProps.Y)(resultComponent, { result, seed: !1, selected, onProductSelect })
																									: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																											...subProps_result,
																											controller,
																											result,
																									  }),
																							}),
																					  })
																					: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																							controller,
																							result,
																							track: { impression: !1 },
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																								seedText,
																								seed: !0,
																								title: result.display.mappings.core?.name,
																								icon: separatorIcon,
																								onCheck: () => onProductSelect(result),
																								checked: selected,
																								hideCheckboxes,
																								theme: props.theme,
																								treePath,
																								lang: { seedText: lang.seedText },
																								children: resultComponent
																									? (0, cloneWithProps.Y)(resultComponent, { result, seed: !0, selected, onProductSelect })
																									: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																											...subProps_result,
																											controller,
																											result,
																									  }),
																							}),
																					  });
																			}),
																ctaInline &&
																	(0, emotion_react_jsx_runtime_browser_esm.Y)(BundledCTA, {
																		ctaSlot,
																		cartStore,
																		onAddToCart: (e) => addToCart(e),
																		ctaButtonText,
																		ctaButtonSuccessText,
																		ctaButtonSuccessTimeout,
																		ctaIcon,
																		treePath,
																		lang: { ctaButtonSuccessText: lang.ctaButtonSuccessText, ctaButtonText: lang.ctaButtonText },
																	}),
															],
														}),
														!ctaInline &&
															(0, emotion_react_jsx_runtime_browser_esm.Y)(BundledCTA, {
																ctaSlot,
																cartStore,
																onAddToCart: (e) => addToCart(e),
																ctaButtonText,
																ctaButtonSuccessText,
																ctaButtonSuccessTimeout,
																ctaIcon,
																treePath,
																lang: { ctaButtonSuccessText: lang.ctaButtonSuccessText, ctaButtonText: lang.ctaButtonText },
															}),
													],
											  })
											: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationProfileTracker.l, {
													controller,
													children: resultsToRender.map((result) =>
														(0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
															controller,
															result,
															children: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
														})
													),
											  }),
									}),
							  })
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
					);
				});
		},
		'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { l: () => RecommendationProfileTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				RecommendationProfileTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const { children, controller, className } = properties,
						childs = (0, preact__WEBPACK_IMPORTED_MODULE_0__.v2)(children),
						componentRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null);
					(0, _hooks__WEBPACK_IMPORTED_MODULE_5__.v)(componentRef, '0px') && controller.track.impression(),
						childs.length && controller.track.render();
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(properties, defaultStyles);
					return childs.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation-profile-tracker', className),
								onClick: (e) => controller.track.click(e),
								ref: componentRef,
								...styling,
								children,
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { x: () => RecommendationResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				RecommendationResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const { children, result, track, controller, className } = properties,
						mergedTrack = { impression: !0, click: !0, ...track },
						resultRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
						resultInViewport = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.v)(resultRef, '0px');
					controller.events.render || controller.log.warn('<RecommendationResultTracker> used without <RecommendationProfileTracker>'),
						controller.track.product.render(result),
						resultInViewport &&
							mergedTrack.impression &&
							(controller.events.impression || controller.track.impression(), controller.track.product.impression(result));
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-result-tracker', className),
						onClick: (e) => mergedTrack.click && controller.track.product.click(e, result),
						ref: resultRef,
						...styling,
						children,
					});
				});
		},
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
	},
]);
