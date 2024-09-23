'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6225],
	{
		'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => RecommendationBundle_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
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
			const CSS_bundleSelector = ({}) => (0, emotion_react_browser_esm.AH)({}),
				BundleSelector = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						props = (0, mergeProps.v6)('bundleSelector', globalTheme, { hideCheckboxes: !1 }, properties),
						{ children, checked, icon, seedText, seed, hideCheckboxes, onCheck, disableStyles, className, style, styleScript, treePath } = props,
						subProps_icon = {
							className: 'ss__recommendation-bundle__wrapper__selector__icon',
							size: 15,
							...globalTheme?.components?.icon,
							theme: props?.theme,
							treePath,
						},
						subProps_checkbox = {
							className: 'ss__recommendation-bundle__wrapper__selector__result-wrapper__checkbox',
							checked,
							size: 18,
							onClick: onCheck,
							...globalTheme?.components?.checkbox,
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_bundleSelector(stylingProps), style]);
					const lang = cjs_default()({}, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, {});
					return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
						...styling,
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
						className: 'ss__recommendation-bundle__wrapper__cta__icon',
						size: 50,
						...globalTheme?.components?.icon,
						theme: props?.theme,
						treePath,
					},
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
																children: ['Was ', (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { lineThrough: !0, value: cartStore.msrp })],
														  })
														: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {}),
													(0, emotion_react_jsx_runtime_browser_esm.Y)('label', {
														className: 'ss__recommendation-bundle__wrapper__cta__subtotal__price',
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { value: cartStore.price }),
													}),
												],
											}),
										],
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Button.$, {
										className: classnames_default()('ss__recommendation-bundle__wrapper__cta__button', {
											addedToCart: 'ss__recommendation-bundle__wrapper__cta__button--added',
										}),
										onClick: (e) => onAddToCart(e),
										disabled: addedToCart,
										...(addedToCart ? mergedLang.ctaButtonSuccessText?.all : mergedLang.ctaButtonText?.all),
										children: addedToCart ? ctaButtonSuccessText : ctaButtonText,
									}),
								],
						  }),
				});
			});
			var useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx');
			const RecommendationBundle_CSS_recommendationBundle = ({ slidesPerView, spaceBetween, ctaInline, vertical, separatorIcon }) =>
					(0, emotion_react_browser_esm.AH)({
						'.ss__recommendation-bundle__wrapper': { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
						'.ss__recommendation-bundle__wrapper__selector--seed': {
							width: '' + (vertical ? '100%' : 'auto'),
							margin: '' + (separatorIcon ? 'initial' : 'auto !important'),
						},
						'.ss__recommendation-bundle__wrapper__seed-container': {
							width: vertical ? '100%' : `calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)})`,
						},
						'.ss__recommendation-bundle__wrapper__cta': {
							width: vertical ? '100%' : '' + (ctaInline ? `calc(100% / ${slidesPerView + 1})` : '100%'),
							textAlign: 'center',
							'& .ss__recommendation-bundle__wrapper__cta__subtotal__prices': { display: 'block' },
						},
						'.ss__recommendation-bundle__wrapper__carousel': {
							boxSizing: 'border-box',
							width: vertical ? '100%' : `calc(calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)}) * ${slidesPerView - 1})`,
						},
						'.ss__recommendation-bundle__wrapper--seed-in-carousel': {
							'.ss__recommendation-bundle__wrapper__cta': { width: vertical ? '100%' : `calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)})` },
							'.ss__recommendation-bundle__wrapper__carousel': {
								width: vertical ? '100%' : `calc(calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)}) * ${slidesPerView})`,
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
								margin: `0px ${5 + (spaceBetween || 0)}px`,
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
							style,
							lazyRender,
							className,
							styleScript,
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
					const styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [
								RecommendationBundle_CSS_recommendationBundle({ slidesPerView, spaceBetween, ctaInline, vertical, separatorIcon }),
								style,
						  ]);
					const _preSelectedCount = 'number' == typeof preselectedCount ? preselectedCount : carouselEnabled ? slidesPerView : resultsToRender.length;
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
					const lang = cjs_default()(
						{ seedText: { value: 'This Product' }, ctaButtonText: { value: 'Add All To Cart' }, ctaButtonSuccessText: { value: 'Bundle Added!' } },
						props.lang || {}
					);
					return resultsToRender?.length
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
																							onCheck: () => onProductSelect(seed),
																							checked: selectedItems.findIndex((item) => item.id == seed.id) > -1,
																							icon: separatorIcon,
																							hideCheckboxes,
																							theme: props.theme,
																							ref: seedRef,
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
																													onCheck: () => onProductSelect(result),
																													checked: selected,
																													hideCheckboxes,
																													theme: props.theme,
																													className:
																														idx + 1 == resultsToRender.length
																															? 'ss__recommendation-bundle__wrapper__selector--last'
																															: '',
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
																													icon: separatorIcon,
																													onCheck: () => onProductSelect(result),
																													checked: selected,
																													hideCheckboxes,
																													theme: props.theme,
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
																											onCheck: () => onProductSelect(result),
																											checked: selected,
																											hideCheckboxes,
																											theme: props.theme,
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
																							onCheck: () => onProductSelect(result),
																							checked: selected,
																							hideCheckboxes,
																							theme: props.theme,
																							className:
																								idx + 1 == resultsToRender.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
																							children: resultComponent
																								? (0, cloneWithProps.Y)(resultComponent, { result, seed: !1, selected, onProductSelect })
																								: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { ...subProps_result, controller, result }),
																						}),
																				  })
																				: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationResultTracker.x, {
																						controller,
																						result,
																						track: { impression: !1 },
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)(BundleSelector, {
																							seedText,
																							seed: !0,
																							icon: separatorIcon,
																							onCheck: () => onProductSelect(result),
																							checked: selected,
																							hideCheckboxes,
																							theme: props.theme,
																							lang: { seedText: lang.seedText },
																							children: resultComponent
																								? (0, cloneWithProps.Y)(resultComponent, { result, seed: !0, selected, onProductSelect })
																								: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { ...subProps_result, controller, result }),
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
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				});
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			var paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx');
			const RecommendationBundle_stories = {
					title: 'Templates/RecommendationBundle',
					component: RecommendationBundle,
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# RecommendationBundle\n\nRenders a recommended bundle of products with seed, carousel of recommendations and add to cart display.\n\n## Sub-components\n- Carousel\n- Result (default)\n\n## Usage\n\nAdditional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.\nAdditional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe required `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### carousel \nThe `carousel` prop specifies an object of carousel settings. These settings will be merged with the default settings (listed below). All valid Carousel component props (and any non-documented SwiperJS props) can be used here. The below example uses the `prevButton`, `nextButton` and `loop` props from the Carousel:\n\n```jsx\ntype BundleCarouselProps = {\n\tenabled: boolean;\n\tseedInCarousel?: boolean;\n} & CarouselProps\n\nconst customCarouselProps = {\n\tenabled: true,\n\tloop: false,\n\tprevButton: 'Previous',\n\tnextButton: 'Next'\n}\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ customCarouselProps } />\n```\n\n### enabled\nThe `enabled` prop is a sub prop under the `carousel` prop. It specifies weather the bundle should render as a carousel or not.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ enabled:false } />\n```\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### seedInCarousel\nThe `seedInCarousel` prop is a sub prop under the `carousel` prop. It specifies if the seed product should be included in the carousel or not.  \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ seedInCarousel:true } />\n```\n\n### pagination\nThe `pagination` prop is a sub prop under the `carousel` prop. It specifies if the carousel should display pagination dots. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ pagination:true } />\n```\n\n### hideButtons\nThe `hideButtons` is a sub prop under the `carousel` prop. It specifies if the carousel should hide prev/next buttons.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ hideButtons:true }><Recommendation/>\n```\n\n### prevButton\nThe `prevButton` prop is a sub prop under the `carousel` prop. It specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ prevButton: '<' } />\n```\n\n### nextButton\nThe `nextButton` prop  is a sub prop under the `carousel` prop. It specifies the next button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ nextButton: '>' } />\n```\n\n### title\nThe `title` prop specifies the carousel title\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n\t{ \n\t\tresult: Product, \n\t\tseed: boolean, \n\t\tselected: boolean, \n\t\tonProductSelect: (result:Product) => void\n\t}\n```\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaInline\nThe `ctaInline` prop specifies if the add to cart display should be block or inline witht the carousel.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx\t\n\t{ \n\t\tcartStore: CartStore;\n\t\tonclick: (e:any) => void\n\t}\n```\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the bundle checkboxes should be rendered. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />\n```\n\n### modules\nThe `modules` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include `Navigation` and `Pagination` modules by default.\n\n```jsx\nimport { Scrollbar } from 'swiper';\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n\tenabled: true,\n\toffset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundle controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nThe object key specified the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any BundleRecommendation props`**, or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. \n\n`slidesPerView` - number of products to display per page\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```typescript\nconst defaultRecommendationBreakpoints = {\n\t0: {\n\t\tcarousel: {\n\t\t\tenabled: false,\n\t\t},\n\t\tlimit: 2\n\t},\n\t768: {\n\t\tslidesPerView: 3,\n\t\tslidesPerGroup: 3,\n\t\tspaceBetween: 10,\n\t},\n\t1024: {\n\t\tslidesPerView: 3,\n\t\tslidesPerGroup: 3,\n\t\tspaceBetween: 10,\n\t},\n\t1200: {\n\t\tslidesPerView: 4,\n\t\tslidesPerGroup: 4,\n\t\tspaceBetween: 10,\n\t},\n};\n```\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={defaultRecommendationBreakpoints} />\n```\n\n",
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
						results: {
							description: 'Results store reference, overrides controller.store.results',
							type: { required: !1 },
							table: { type: { summary: 'Results store object' } },
							control: { type: 'none' },
						},
						resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
						title: {
							description: 'recommendation title',
							table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						onAddToCart: {
							description: 'onClick event handler for add bundle to cart button in CTA',
							type: { required: !0 },
							table: { type: { summary: 'function' } },
							action: 'onAddToCart',
						},
						limit: { description: 'limit the number of results rendered', table: { type: { summary: 'number' } }, control: { type: 'number' } },
						carousel: {
							description: 'Carousel settings object',
							defaultValue: { enabled: !0, loop: !1 },
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Carousel settings object' } },
							control: { type: 'object' },
						},
						preselectedCount: {
							description: 'Number of results to have selected by default. (seed included)',
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						hideCheckboxes: {
							defaultValue: !1,
							description: 'Hide/show bundle checkboxes in results',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						seedText: {
							description: 'Text to render in seed product badge',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
							control: { type: 'text' },
						},
						hideSeed: {
							description: 'Hide/show seed result',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						vertical: {
							description: 'set the recommendation to render vertically',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						separatorIconSeedOnly: {
							description: 'boolean to only have seperator Icon for the seed product',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						separatorIcon: {
							defaultValue: 'plus',
							description: 'Icon to render between results',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
							control: { type: 'select', options: [...Object.keys(paths.c)] },
						},
						ctaButtonText: {
							description: 'text to render in add to cart button',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
							control: { type: 'text' },
						},
						ctaIcon: {
							desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
							control: { type: 'select', options: [...Object.keys(paths.c)] },
						},
						ctaButtonSuccessText: {
							description: 'text to temporarily render in the add to cart button after it is clicked',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
							control: { type: 'text' },
						},
						ctaButtonSuccessTimeout: {
							description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
							defaultValue: 2e3,
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						ctaInline: {
							description: 'boolean to enable the stacked add to cart button display',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						ctaSlot: { description: 'Slot for custom add to cart component', table: { type: { summary: 'component' } } },
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
							control: { type: 'object' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.recommendation({
					id: 'RecommendationBundle',
					tag: 'bundle',
					globals: { siteId: '8uyt2m', products: ['C-AD-W1-1869P'] },
				}),
				Default = (props, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationBundle, { ...props, controller, results: controller.store.results.reverse() });
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
								'(props: RecommendationBundleProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: RecommendationController;\n  };\n}) => {\n  return <RecommendationBundle {...props} controller={controller} results={controller.store.results.reverse()} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_button = ({ color, backgroundColor, borderColor, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'inline-flex',
						padding: '5px 10px',
						position: 'relative',
						color: color || theme?.variables?.colors?.primary,
						outline: 0,
						backgroundColor: backgroundColor || '#fff',
						border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
						'&:hover': { cursor: 'pointer', backgroundColor: theme?.variables?.colors?.hover?.background || '#f8f8f8' },
						'&.ss__button--disabled': {
							opacity: 0.7,
							borderColor: 'rgba(51,51,51,0.7)',
							backgroundColor: 'initial',
							'&:hover': { cursor: 'default' },
						},
					}),
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Button = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('button', globalTheme, { disableA11y: !1 }, properties),
						{
							content,
							children,
							disabled,
							native,
							onClick,
							disableA11y,
							disableStyles,
							className,
							icon,
							style,
							styleScript,
							lang,
							treePath,
							...additionalProps
						} = props,
						subProps_icon = {
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_button(stylingProps), style]);
					const elementProps = {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__button', { 'ss__button--disabled': disabled }, className),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_8__.i)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
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
		'./components/src/components/Molecules/Checkbox/Checkbox.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { S: () => Checkbox });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_checkbox = ({ size, color, theme }) => {
					const pixelSize = isNaN(Number(size)) ? size : `${size}px`;
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: pixelSize,
						width: pixelSize,
						border: `1px solid ${color || theme?.variables?.colors?.primary || '#333'}`,
						'&.ss__checkbox--disabled': { opacity: 0.7 },
						'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${pixelSize} - 30%)`, height: `calc(${pixelSize} - 30%)` },
					});
				},
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Checkbox = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'checkbox',
							globalTheme,
							{ size: '12px', startChecked: !1, disableA11y: !1 },
							properties
						),
						{
							checked,
							color,
							disabled,
							icon,
							iconColor,
							onClick,
							size,
							startChecked,
							native,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							theme,
							treePath,
						} = props,
						pixelSize = isNaN(Number(size)) ? size : `${size}px`,
						subProps_icon = {
							className: 'ss__checkbox__icon',
							icon: 'check-thin',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({
								color: iconColor || color || theme?.variables?.colors?.primary,
								disableStyles,
								icon,
								size: size && `calc(${pixelSize} - 30%)`,
							}),
							theme: props.theme,
							treePath,
						};
					let checkedState, setCheckedState;
					const stateful = void 0 === checked;
					stateful ? ([checkedState, setCheckedState] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startChecked)) : (checkedState = checked);
					const clickFunc = (e) => {
							disabled || (stateful && setCheckedState && setCheckedState((prev) => !prev), onClick && onClick(e));
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_checkbox(stylingProps), style]);
					const defaultLang = {
							checkbox: { attributes: { 'aria-label': `${disabled ? 'disabled' : ''} ${checkedState ? 'checked' : 'unchecked'} checkbox` } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { checkedState, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('input', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__checkbox', { 'ss__checkbox--disabled': disabled }, className),
									type: 'checkbox',
									'aria-checked': checkedState,
									onClick: (e) => clickFunc(e),
									disabled,
									checked: checkedState,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__checkbox', { 'ss__checkbox--disabled': disabled }, className),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e)),
									role: 'checkbox',
									'aria-checked': checkedState,
									...mergedLang.checkbox?.all,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { className: 'ss__checkbox__empty' }),
							  }),
					});
				});
		},
		'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
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
	},
]);
