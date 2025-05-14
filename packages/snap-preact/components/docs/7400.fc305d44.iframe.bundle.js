'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7400],
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
							theme,
							treePath,
						} = props,
						pixelSize = isNaN(Number(size)) ? size : `${size}px`,
						subProps_icon = {
							className: 'ss__checkbox__icon',
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
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({ checkbox: {} }, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { checkedState, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										'ss__checkbox--native',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className
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
										className
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.i)(e)),
									'aria-disabled': disabled,
									role: 'checkbox',
									'aria-checked': checkedState,
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
		'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { F: () => RecommendationBundleEasyAdd });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_RecommendationBundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
				RecommendationBundleEasyAdd = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const _properties = { name: properties.controller?.store?.profile?.tag?.toLowerCase(), ...properties },
						{ treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties,
						subProps_recommendationBundle = {
							hideCheckboxes: !0,
							seedText: '',
							ctaButtonText: 'Add Both',
							ctaInline: !1,
							hideSeed: !0,
							alias: 'recommendationBundleEasyAdd',
							limit: 1,
							carousel: { enabled: !1 },
							separatorIcon: !1,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_2__.s)({ disableStyles }),
							theme: _properties?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.Z)(_properties, defaultStyles);
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_RecommendationBundle__WEBPACK_IMPORTED_MODULE_5__.g, {
						controller,
						...styling,
						...subProps_recommendationBundle,
						...additionalProps,
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
		'./components/src/utilities/componentNameToClassName.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { b: () => componentNameToClassName });
			const componentNameToClassName = (name) => name.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase());
		},
		'./src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					RecommendationBundleEasyAdd: () => _components_src_components_Templates_RecommendationBundleEasyAdd__WEBPACK_IMPORTED_MODULE_0__.F,
				});
			var _components_src_components_Templates_RecommendationBundleEasyAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'
			);
		},
	},
]);
