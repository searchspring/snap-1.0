'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6107],
	{
		'./components/src/components/Molecules/Checkbox/Checkbox.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { S: () => Checkbox });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({ size, color, theme, native }) => {
					const pixelSize = isNaN(Number(size)) ? size : `${size}px`;
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: pixelSize,
								width: pixelSize,
								border: `1px solid ${color || theme?.variables?.colors?.primary || '#333'}`,
								'&.ss__checkbox--disabled': { opacity: 0.7 },
								'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${size} - 30%)`, height: `calc(${size} - 30%)` },
						  });
				},
				Checkbox = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('checkbox', globalTheme, defaultProps, properties),
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
							internalClassName,
							theme,
							treePath,
							lang,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							name: ____,
							...additionalProps
						} = props,
						pixelSize = isNaN(Number(size)) ? size : `${size}px`,
						subProps_icon = {
							internalClassName: 'ss__checkbox__icon',
							icon: 'check-thin',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({
								color: iconColor || color || theme?.variables?.colors?.primary,
								disableStyles,
								icon,
								size: pixelSize && `calc(${pixelSize} - 30%)`,
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
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						_lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({ checkbox: {} }, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(_lang, { checkedState, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										'ss__checkbox--native',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className,
										internalClassName
									),
									type: 'checkbox',
									'aria-checked': checkedState,
									onClick: (e) => clickFunc(e),
									disabled,
									checked: checkedState,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className,
										internalClassName
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
									'aria-disabled': disabled,
									role: 'checkbox',
									'aria-checked': checkedState,
									...additionalProps,
									...mergedLang.checkbox.all,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { className: 'ss__checkbox__empty' }),
							  }),
					});
				});
		},
		'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { X: () => CTASlot, a: () => RecommendationBundleList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				),
				_Atoms_Price__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities_componentNameToClassName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./components/src/utilities/componentNameToClassName.ts'
				),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
							display: 'flex',
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
							'.ss__result__details': { textAlign: 'left' },
						},
						'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
						'.ss__recommendation-bundle-list__wrapper': { order: '3' },
						'.ss__recommendation-bundle-list__wrapper__cta': {
							order: '2',
							'.ss__button': { cursor: 'pointer', border: '1px solid black' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': { top: '50%', position: 'absolute', right: '-0.5em' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
							'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
						},
					}),
				alias = 'recommendationBundleList',
				RecommendationBundleList = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const _properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties },
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties,
						subProps_recommendationBundle = {
							seedText: '',
							ctaInline: !1,
							limit: 5,
							preselectedCount: 2,
							carousel: { enabled: !1, seedInCarousel: !0 },
							ctaSlot: (props) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(CTASlot, { ...props }),
							resultComponent: (props) =>
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q, {
									hideImage: !0,
									hideBadge: !0,
									...props,
								}),
							vertical: !0,
							separatorIcon: !1,
							alias,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: _properties?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(_properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_9__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
					});
				}),
				CTASlot = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((props) => {
					const cartStore = props.cartStore,
						classNamePrefix = `ss__${(0, _utilities_componentNameToClassName__WEBPACK_IMPORTED_MODULE_10__.b)(alias)}`;
					props.onAddToCart = (e) => {
						setAddedToCart(!0), props.onAddToCart(e), setTimeout(() => setAddedToCart(!1), props.ctaButtonSuccessTimeout);
					};
					const [addedToCart, setAddedToCart] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(!1);
					props.addedToCart = addedToCart;
					props.treePath;
					const subProps_separatorIcon = {
							name: 'bundle-cart-separator',
							className: `${classNamePrefix}__wrapper__cta__icon--separator`,
							icon: 'plus',
							size: 12,
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_icon = {
							name: 'bundle-cart',
							className: `${classNamePrefix}__wrapper__cta__icon`,
							size: 50,
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_subtotalStrike = {
							name: 'bundle-msrp',
							className: `${classNamePrefix}__wrapper__cta__price--strike`,
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_subtotalPrice = {
							className: `${classNamePrefix}__wrapper__cta__price`,
							name: 'bundle-price',
							theme: props?.theme,
							treePath: props.treePath,
						},
						subProps_button = { className: `${classNamePrefix}__wrapper__cta__button`, theme: props?.theme, treePath: props.treePath },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.u)(lang, {});
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
						className: `${classNamePrefix}__wrapper__cta`,
						children: [
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
								className: `${classNamePrefix}__wrapper__cta__inner`,
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
										className: `${classNamePrefix}__wrapper__cta__inner__images`,
										children: cartStore.items.map((item) => {
											const core = item.display.mappings.core;
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
												className: `${classNamePrefix}__wrapper__cta__inner__image-wrapper`,
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('a', {
														href: core.url,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_12__._, {
															src: core.thumbnailImageUrl,
															alt: core.name,
															lazy: !1,
														}),
													}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__.I, {
														...subProps_separatorIcon,
													}),
												],
											});
										}),
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
										className: `${classNamePrefix}__wrapper__cta__subtotal`,
										'aria-atomic': 'false',
										'aria-live': 'polite',
										children: [
											props.ctaIcon
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
														className: `${classNamePrefix}__wrapper__cta__subtotal__icon__wrapper`,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_13__.I, {
															...subProps_icon,
															...('string' == typeof props.ctaIcon ? { icon: props.ctaIcon } : props.ctaIcon),
														}),
												  })
												: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK,
														{}
												  ),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('span', {
												className: `${classNamePrefix}__wrapper__cta__subtotal__title`,
												children: `Subtotal for ${cartStore.count} items`,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('div', {
												className: `${classNamePrefix}__wrapper__cta__subtotal__prices`,
												children: [
													cartStore.msrp && cartStore.msrp !== cartStore.price
														? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)('label', {
																className: `${classNamePrefix}__wrapper__cta__subtotal__strike`,
																children: [
																	'Was ',
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_14__.g, {
																		...subProps_subtotalStrike,
																		lineThrough: !0,
																		value: cartStore.msrp,
																	}),
																],
														  })
														: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(
																_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK,
																{}
														  ),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('label', {
														className: `${classNamePrefix}__wrapper__cta__subtotal__price`,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Price__WEBPACK_IMPORTED_MODULE_14__.g, {
															...subProps_subtotalPrice,
															value: cartStore.price,
														}),
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_15__.$, {
									...subProps_button,
									disabled: 0 == cartStore.items.length,
									disableStyles: !0,
									internalClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${classNamePrefix}__wrapper__cta__button`, {
										[`${classNamePrefix}__wrapper__cta__button--added`]: addedToCart,
									}),
									'aria-live': addedToCart,
									onClick: (e) => props.onAddToCart(e),
									...(addedToCart ? mergedLang.ctaButtonSuccessText?.all : mergedLang.ctaButtonText?.all),
									children: props.addedToCart ? props.ctaButtonSuccessText : props.ctaButtonText,
								}),
							}),
						],
					});
				});
		},
		'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { o: () => ResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts');
			const CSS_ResultTracker = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({}),
				ResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('resultTracker', globalTheme, {}, properties),
						{ children, result, track, controller, className, internalClassName, disableStyles, style } = props,
						mergedTrack = { render: !0, impression: !0, click: !0, ...track },
						{ ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Q)();
					inViewport && mergedTrack.impression && 'product' === result.type && controller?.track.product.impression(result);
					const styling = {};
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_ResultTracker(), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__result-tracker',
								`ss__${controller?.type}-result-tracker`,
								className,
								internalClassName
							),
							onClick: (e) => {
								'product' === result.type && mergedTrack.click && controller?.track.product.click(e, result);
							},
							ref,
							...styling,
							children,
						})
					);
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
		'./components/src/hooks/useIntersectionAdvanced.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersectionAdvanced });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersectionAdvanced = (ref, options = {}) => {
				const { rootMargin = '0px', fireOnce = !1, threshold = 0, minVisibleTime = 0, resetKey } = options,
					[isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					visibleTimerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					visibleStartRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					lastResetKeyRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(resetKey);
				return (
					resetKey !== lastResetKeyRef.current &&
						(setIntersecting(!1),
						visibleTimerRef.current && (window.clearTimeout(visibleTimerRef.current), (visibleTimerRef.current = null)),
						(visibleStartRef.current = null),
						(lastResetKeyRef.current = resetKey)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						setIntersecting(!1);
						let observer = null,
							pollInterval = null;
						if (!window.IntersectionObserver || !ref.current) return;
						const clearPoll = () => {
								pollInterval && (window.clearInterval(pollInterval), (pollInterval = null));
							},
							handleVisible = () => {
								minVisibleTime > 0
									? ((visibleStartRef.current = Date.now()),
									  visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									  (visibleTimerRef.current = window.setTimeout(() => {
											setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current);
									  }, minVisibleTime)))
									: (setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current));
							},
							handleHidden = () => {
								visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									(visibleTimerRef.current = null),
									(visibleStartRef.current = null),
									setIntersecting(!1);
							};
						return (
							(observer = new IntersectionObserver(
								([entry]) => {
									entry.isIntersecting
										? ref.current && elementIsVisible(ref.current)
											? (clearPoll(), handleVisible())
											: (handleHidden(),
											  pollInterval ||
													(pollInterval = window.setInterval(() => {
														ref.current ? elementIsVisible(ref.current) && (clearPoll(), handleVisible()) : clearPoll();
													}, 250)))
										: (clearPoll(), handleHidden());
								},
								{ rootMargin, threshold }
							)),
							ref.current && observer.observe(ref.current),
							() => {
								setIntersecting(!1),
									clearPoll(),
									visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									observer && ref.current && observer.unobserve(ref.current);
							}
						);
					}, [ref, resetKey]),
					isIntersecting
				);
			};
			function elementIsVisible(el) {
				return !el || !('checkVisibility' in el) || el.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 });
			}
		},
		'./components/src/utilities/componentNameToClassName.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { b: () => componentNameToClassName });
			const componentNameToClassName = (name) => name.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase());
		},
		'./components/src/utilities/createImpressionObserver.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => createImpressionObserver });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/hooks/useIntersectionAdvanced.tsx');
			const IMPRESSION_VISIBILITY_THRESHOLD = 0.7,
				IMPRESSION_MIN_VISIBLE_TIME = 1e3;
			function createImpressionObserver(options) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return {
					ref,
					inViewport: (0, _hooks__WEBPACK_IMPORTED_MODULE_1__.v)(ref, {
						...options,
						fireOnce: !0,
						threshold: IMPRESSION_VISIBILITY_THRESHOLD,
						minVisibleTime: IMPRESSION_MIN_VISIBLE_TIME,
					}),
				};
			}
		},
		'./src/Templates/Stores/library/components/RecommendationBundleList.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					RecommendationBundleList: () => _components_src_components_Templates_RecommendationBundleList__WEBPACK_IMPORTED_MODULE_0__.a,
				});
			var _components_src_components_Templates_RecommendationBundleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'
			);
		},
	},
]);
