'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7959],
	{
		'./components/src/components/Molecules/Carousel/Carousel.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
													null != child
														? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.qr, {
																children: (0, _utilities__WEBPACK_IMPORTED_MODULE_17__.Y)(child, { treePath }),
														  })
														: null
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
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
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
				ResultTracker = __webpack_require__('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
				Checkbox = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx');
			const BundleSelector = (0, es.PA)((properties) => {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = (0, mergeProps.v6)('bundleSelector', globalTheme, { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' }, properties),
					{ children, checked, icon, seedText, seed, hideCheckboxes, onCheck, title, className, internalClassName, treePath, classNamePrefix } =
						props,
					lastPath = treePath?.lastIndexOf(' '),
					modifiedTreePath = -1 !== lastPath ? treePath?.slice(0, lastPath) : treePath,
					subProps_icon = {
						name: 'bundle-selector',
						internalClassName: `${classNamePrefix}__wrapper__selector__icon`,
						size: 15,
						theme: props?.theme,
						treePath: modifiedTreePath,
					},
					subProps_checkbox = {
						internalClassName: `${classNamePrefix}__wrapper__selector__result-wrapper__checkbox`,
						checked,
						size: '18px',
						onClick: onCheck,
						lang: { checkbox: { attributes: { 'aria-label': checked ? `remove product from bundle ${title}` : `add product to bundle ${title}` } } },
						theme: props?.theme,
						treePath: modifiedTreePath,
					},
					lang = cjs_default()({}, props.lang || {}),
					mergedLang = (0, useLang.u)(lang, {});
				return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
					className: classnames_default()(
						`${classNamePrefix}__wrapper__selector`,
						checked ? `${classNamePrefix}__wrapper__selector--selected` : '',
						seedText || seed ? `${classNamePrefix}__wrapper__selector--seed` : '',
						className,
						internalClassName
					),
					children: [
						(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
							className: `${classNamePrefix}__wrapper__selector__result-wrapper`,
							children: [
								!hideCheckboxes && (0, emotion_react_jsx_runtime_browser_esm.Y)(Checkbox.S, { ...subProps_checkbox }),
								seedText &&
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										className: `${classNamePrefix}__wrapper__selector__result-wrapper__seed-badge`,
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
			const BundledCTA = (0, es.PA)((properties) => {
				const props = { ...properties };
				props.onAddToCart = (e) => {
					setAddedToCart(!0), properties.onAddToCart(e), setTimeout(() => setAddedToCart(!1), properties.ctaButtonSuccessTimeout);
				};
				const { ctaSlot, cartStore, onAddToCart, ctaIcon, ctaButtonText, ctaButtonSuccessText, treePath, classNamePrefix } = props,
					[addedToCart, setAddedToCart] = (0, hooks_module.J0)(!1);
				props.addedToCart = addedToCart;
				const subProps_icon = {
						name: 'bundle-cart',
						internalClassName: `${classNamePrefix}__wrapper__cta__icon`,
						size: 50,
						theme: props?.theme,
						treePath,
					},
					subProps_subtotalStrike = { name: 'bundle-msrp', theme: props?.theme, treePath },
					subProps_subtotalPrice = { name: 'bundle-price', theme: props?.theme, treePath },
					subProps_button = { theme: props?.theme, treePath },
					lang = cjs_default()({}, props.lang || {}),
					mergedLang = (0, useLang.u)(lang, { cartStore });
				return (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
					className: `${classNamePrefix}__wrapper__cta`,
					children: ctaSlot
						? (0, cloneWithProps.Y)(ctaSlot, props)
						: (0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: `${classNamePrefix}__wrapper__cta__subtotal`,
										'aria-atomic': 'false',
										'aria-live': 'polite',
										children: [
											ctaIcon
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
														className: `${classNamePrefix}__wrapper__cta__subtotal__icon__wrapper`,
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
															...subProps_icon,
															...('string' == typeof ctaIcon ? { icon: ctaIcon } : ctaIcon),
														}),
												  })
												: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {}),
											(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
												className: `${classNamePrefix}__wrapper__cta__subtotal__title`,
												...mergedLang.ctaSubtotalTitle?.all,
											}),
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: `${classNamePrefix}__wrapper__cta__subtotal__prices`,
												children: [
													cartStore.msrp && cartStore.msrp !== cartStore.price
														? (0, emotion_react_jsx_runtime_browser_esm.FD)('label', {
																className: `${classNamePrefix}__wrapper__cta__subtotal__strike`,
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
														className: `${classNamePrefix}__wrapper__cta__subtotal__price`,
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...subProps_subtotalPrice, value: cartStore.price }),
													}),
												],
											}),
										],
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Button.$, {
										...subProps_button,
										internalClassName: classnames_default()(`${classNamePrefix}__wrapper__cta__button`, {
											[`${classNamePrefix}__wrapper__cta__button--added`]: addedToCart,
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
			var useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				componentNameToClassName = __webpack_require__('./components/src/utilities/componentNameToClassName.ts');
			const defaultStyles = ({ vertical, separatorIcon, carousel, ctaInline, hasSeed, hideSeed, carouselEnabled, limit, alias: inherits }) => {
					let classNamePrefix = 'ss__recommendation-bundle';
					inherits && (classNamePrefix = `ss__${(0, componentNameToClassName.b)(inherits)}`);
					const slidesPerView = carousel?.slidesPerView;
					return (0, emotion_react_browser_esm.AH)({
						[`.${classNamePrefix}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
						[`.${classNamePrefix}__wrapper__selector--seed`]: {
							width: '' + (vertical ? '100%' : 'auto'),
							margin: '' + (separatorIcon ? 'initial' : 'auto !important'),
						},
						[`.${classNamePrefix}__wrapper__seed-container`]: { width: vertical ? '100%' : `calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)})` },
						[`.${classNamePrefix}__wrapper__cta`]: {
							width: vertical ? '100%' : '' + (ctaInline ? `calc(100% / ${(carouselEnabled ? slidesPerView : limit || 0) + 1})` : '100%'),
							textAlign: 'center',
							[`.${classNamePrefix}__wrapper__cta__subtotal__prices`]: { display: 'block' },
							[`.${classNamePrefix}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
						},
						[`.${classNamePrefix}__wrapper__carousel`]: {
							boxSizing: 'border-box',
							width: vertical
								? '100%'
								: `calc(calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)}) * ${slidesPerView - (hasSeed && !hideSeed ? 1 : 0)})`,
						},
						[`.${classNamePrefix}__wrapper--seed-in-carousel`]: {
							[`.${classNamePrefix}__wrapper__cta`]: { width: vertical ? '100%' : `calc(100% / ${carousel?.slidesPerView + (ctaInline ? 1 : 0)})` },
							[`.${classNamePrefix}__wrapper__carousel`]: {
								width: vertical ? '100%' : `calc(calc(100% / ${carousel?.slidesPerView + (ctaInline ? 1 : 0)}) * ${carousel?.slidesPerView})`,
								padding: '0',
							},
						},
						'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': {
							[`.${classNamePrefix}__wrapper__selector__icon`]: { display: 'none' },
						},
						'.swiper-slide-visible': { [`.${classNamePrefix}__wrapper__selector__icon`]: { display: 'block' } },
						[`.${classNamePrefix}__wrapper--vertical`]: { flexDirection: 'column' },
						[`.${classNamePrefix}__wrapper__selector`]: {
							alignItems: 'baseline',
							position: 'relative',
							[`&.${classNamePrefix}__wrapper__selector--last`]: { [`.${classNamePrefix}__wrapper__selector__icon`]: { display: 'none' } },
							[`.${classNamePrefix}__wrapper__selector__result-wrapper__seed-badge`]: { position: 'absolute', top: '0', left: '0', zIndex: '1' },
							[`.${classNamePrefix}__wrapper__selector__icon`]: { position: 'absolute', right: '-1em', top: '140px' },
							[`.${classNamePrefix}__wrapper__selector__result-wrapper`]: {
								alignItems: 'center',
								position: 'relative',
								margin: `0px ${5 + (Number(carousel?.spaceBetween) || 0)}px`,
							},
							[`.${classNamePrefix}__wrapper__selector__result-wrapper__checkbox`]: {
								position: 'absolute',
								top: '0',
								right: '0',
								zIndex: '101',
								cursor: 'pointer',
							},
						},
					});
				},
				RecommendationBundle = (0, es.PA)((properties) => {
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
							onAddToCart: (e, items) => controller?.addToCart && controller.addToCart(items),
							title: properties.controller?.store?.profile?.display?.templateParameters?.title,
							description: properties.controller?.store?.profile?.display?.templateParameters?.description,
						},
						_properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties };
					let displaySettings,
						props = (0, mergeProps.v6)(_properties.alias || 'recommendationBundle', globalTheme, defaultProps, _properties),
						classNamePrefix = 'ss__recommendation-bundle';
					if (
						(props.alias && (classNamePrefix = `ss__${(0, componentNameToClassName.b)(props.alias)}`),
						!properties.theme?.name &&
							!globalTheme.name &&
							((displaySettings = (0, useDisplaySettings.X)(props.breakpoints)), displaySettings && Object.keys(displaySettings).length))
					) {
						const theme = cjs_default()(props?.theme || {}, displaySettings?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
						props = { ...props, ...displaySettings, theme };
					}
					const {
							title,
							description,
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
							internalClassName,
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
						throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
					let resultsToRender = results || controller.store?.results;
					limit &&
						(resultsToRender = resultsToRender.slice(
							0,
							hideSeed && resultsToRender.filter((result) => 1 == result.bundleSeed).length ? limit + 1 : limit
						));
					const cartStore = controller.store.cart;
					if (!cartStore) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
					if (!((results && results.length) || controller.store?.results?.length))
						return (
							controller.log.error('<RecommendationBundle> Component has no results to render!'),
							(0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
						);
					const seed = results
							? results.filter((result) => 1 == result.bundleSeed).pop()
							: controller.store?.results?.filter((result) => 1 == result.bundleSeed).pop(),
						subProps_carousel = {
							loop,
							internalClassName: 'ss__recommendation__carousel',
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_result = {
							internalClassName: 'ss__recommendation__result',
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						hasSeed = Boolean(resultsToRender.filter((result) => 1 == result.bundleSeed).length);
					let slidesPerView = props.carousel?.slidesPerView || props.slidesPerView;
					slidesPerView ? resultsToRender.length < Number(slidesPerView) && (slidesPerView = resultsToRender.length) : (slidesPerView = 2);
					const styling = (0, mergeStyles.Z)(
							{ ...props, carousel: { ...mergedCarouselProps, slidesPerView }, hasSeed, carouselEnabled },
							defaultStyles
						),
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
					if (carouselEnabled) {
						const adjustSlides = (obj) => {
							const currentBreakpointSlidesPerView = obj?.slidesPerView || obj.slidesPerView || 2,
								currentBreakpointSlidesPerGroup = obj?.slidesPerGroup || obj.slidesPerGroup || 2;
							let newSlidesPerView = currentBreakpointSlidesPerView,
								newSlidesPerGroup = currentBreakpointSlidesPerGroup;
							const resultCount = !hasSeed || seedInCarousel ? resultsToRender.length : resultsToRender.length - 1;
							return (
								resultCount &&
									(resultCount >= currentBreakpointSlidesPerView
										? ((newSlidesPerView = currentBreakpointSlidesPerView - (!seedInCarousel && hasSeed ? 1 : 0)),
										  seedInCarousel || (newSlidesPerGroup = currentBreakpointSlidesPerGroup - 1 || 1))
										: ((newSlidesPerView = resultCount), (newSlidesPerGroup = resultCount))),
								{ slidesPerView: newSlidesPerView, slidesPerGroup: newSlidesPerGroup }
							);
						};
						if (properties.theme?.name || globalTheme.name) {
							const { slidesPerView: adjustedSlidesPerView, slidesPerGroup: adjustedSlidesPerGroup } = adjustSlides({
								...mergedCarouselProps,
								slidesPerView,
							});
							displaySettings = { ...mergedCarouselProps, slidesPerView: adjustedSlidesPerView, slidesPerGroup: adjustedSlidesPerGroup };
						} else
							Object.keys(props.breakpoints).forEach((breakpoint) => {
								const obj = props.breakpoints[breakpoint],
									{ slidesPerView: adjustedSlidesPerView, slidesPerGroup: adjustedSlidesPerGroup } = adjustSlides(obj);
								modifiedBreakpoints[breakpoint] = {
									...modifiedBreakpoints[breakpoint],
									slidesPerView: adjustedSlidesPerView,
									slidesPerGroup: adjustedSlidesPerGroup,
								};
							});
					}
					const onProductSelect = (product) => {
							if (product) {
								selectedItems.findIndex((result) => result.id == product.id) > -1
									? (cartStore.removeItems([product]), 0 == cartStore.items.length && seed && cartStore.items.push(seed))
									: cartStore.addItems([product]);
							}
						},
						addToCart = (e) => {
							controller.addToCart(selectedItems), onAddToCart && onAddToCart(e, selectedItems);
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
							ctaSubtotalTitle: { value: `Subtotal for ${cartStore.count} items` },
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						renderedResults = (0, hooks_module.Kr)(
							() =>
								resultsToRender.map((result, idx) => {
									const isSeed = Boolean(result.bundleSeed),
										selected = selectedItems.findIndex((item) => item.id == result.id) > -1;
									let attributes = {
										onCheck: (e) => {
											e.stopPropagation(), onProductSelect(result);
										},
										checked: selected,
										hideCheckboxes,
										theme: props.theme,
										icon: !separatorIconSeedOnly && separatorIcon,
										className: idx + 1 == resultsToRender.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
										classNamePrefix,
										treePath,
									};
									return (
										isSeed && (attributes = { ...attributes, seedText, seed: !0, icon: separatorIcon, lang: { seedText: lang.seedText } }),
										!isSeed || ((seedInCarousel || 0 == carousel?.enabled) && isSeed && !hideSeed)
											? (0, emotion_react_jsx_runtime_browser_esm.Y)(
													ResultTracker.o,
													{
														controller,
														result,
														track: { impression: Boolean(!isSeed) },
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
															...attributes,
															children: resultComponent
																? (0, cloneWithProps.Y)(resultComponent, { result, seed: isSeed, selected, onProductSelect })
																: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { ...subProps_result, controller, result }),
														}),
													},
													result.id
											  )
											: null
									);
								}),
							[
								resultsToRender,
								selectedItems,
								hideCheckboxes,
								separatorIconSeedOnly,
								separatorIcon,
								seedInCarousel,
								hideSeed,
								resultComponent,
								props.theme,
								seedText,
							]
						);
					return (
						hideSeedText && delete lang.seedText.value,
						resultsToRender?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										...styling,
										ref: recsRef,
										className: classnames_default()(classNamePrefix, { [`${classNamePrefix}--stacked`]: !ctaInline }, className, internalClassName),
										children: isVisible
											? (0, emotion_react_jsx_runtime_browser_esm.FD)(RecommendationProfileTracker.l, {
													controller,
													children: [
														title &&
															(0, emotion_react_jsx_runtime_browser_esm.Y)('h3', {
																className: `${classNamePrefix}__title`,
																children: (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { children: title }),
															}),
														description &&
															(0, emotion_react_jsx_runtime_browser_esm.Y)('h4', {
																className: 'ss__recommendation-bundle__description',
																children: (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { children: description }),
															}),
														(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
															className: classnames_default()(`${classNamePrefix}__wrapper`, {
																[`${classNamePrefix}__wrapper--seed-in-carousel`]: seedInCarousel,
																[`${classNamePrefix}__wrapper--vertical`]: vertical,
															}),
															children: [
																carouselEnabled
																	? (0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
																			children: [
																				!seedInCarousel &&
																					!hideSeed &&
																					seed &&
																					(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																						className: `${classNamePrefix}__wrapper__seed-container`,
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)(ResultTracker.o, {
																							controller,
																							result: seed,
																							track: { impression: !1 },
																							children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																								seedText,
																								seed: !0,
																								title: seed.display.mappings.core?.name,
																								onCheck: (e) => {
																									e.stopPropagation(), onProductSelect(seed);
																								},
																								checked: selectedItems.findIndex((item) => item.id == seed.id) > -1,
																								icon: separatorIcon,
																								hideCheckboxes,
																								theme: props.theme,
																								ref: seedRef,
																								treePath,
																								classNamePrefix,
																								lang: { seedText: lang.seedText },
																								children: (() => {
																									if (resultComponent && controller) {
																										const ResultComponent = resultComponent;
																										return (0, emotion_react_jsx_runtime_browser_esm.Y)(ResultComponent, {
																											controller,
																											seed: !0,
																											selected: selectedItems.findIndex((item) => item.id == seed.id) > -1,
																											onProductSelect,
																											result: seed,
																											treePath,
																										});
																									}
																									return (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
																										...subProps_result,
																										controller,
																										result: seed,
																									});
																								})(),
																							}),
																						}),
																					}),
																				(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: `${classNamePrefix}__wrapper__carousel`,
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
																											`.swiper-slide-visible .${classNamePrefix}__wrapper__selector`
																										),
																										width = visibleSlide?.offsetWidth;
																									seedElem && (seedElem.style.width = `${width}px`);
																								}
																							})(),
																						...subProps_carousel,
																						...additionalProps,
																						...displaySettings,
																						ref: carouselRef,
																						children: renderedResults,
																					}),
																				}),
																			],
																	  })
																	: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {
																			children: renderedResults,
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
																		classNamePrefix,
																		lang: {
																			ctaButtonSuccessText: lang.ctaButtonSuccessText,
																			ctaButtonText: lang.ctaButtonText,
																			ctaSubtotalTitle: lang.ctaSubtotalTitle,
																		},
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
																classNamePrefix,
																lang: {
																	ctaButtonSuccessText: lang.ctaButtonSuccessText,
																	ctaButtonText: lang.ctaButtonText,
																	ctaSubtotalTitle: lang.ctaSubtotalTitle,
																},
															}),
													],
											  })
											: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationProfileTracker.l, {
													controller,
													children: resultsToRender.map((result) =>
														(0, emotion_react_jsx_runtime_browser_esm.Y)(ResultTracker.o, {
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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				RecommendationProfileTracker = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const { children, className, internalClassName } = properties,
						childs = (0, preact__WEBPACK_IMPORTED_MODULE_0__.v2)(children),
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.Z)(properties, defaultStyles);
					return childs.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__recommendation-profile-tracker', className, internalClassName),
								...styling,
								children,
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
	},
]);
