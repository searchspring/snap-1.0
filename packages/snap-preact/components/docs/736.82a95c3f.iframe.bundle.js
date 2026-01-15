'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[736],
	{
		'./components/src/components/Molecules/Modal/Modal.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => Modal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						position: 'relative',
						'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
						'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
						'.ss__modal__button': { cursor: 'pointer' },
						'.ss__modal__content': {
							backgroundColor: '#fff',
							position: 'absolute',
							minWidth: '100%',
							visibility: 'hidden',
							opacity: 0,
							top: 'auto',
							left: 0,
							zIndex: 10004,
						},
					}),
				Modal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = {
							startOpen: !1,
							disableA11y: !1,
							lockScroll: !0,
							overlayColor: 'rgba(0,0,0,0.8)',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('modal', globalTheme, defaultProps, properties),
						{
							button,
							content,
							buttonSelector,
							children,
							disabled,
							open,
							onClick,
							lockScroll,
							startOpen,
							disableClickOutside,
							disableA11y,
							className,
							internalClassName,
							disableStyles,
							overlayColor,
							onOverlayClick,
							treePath,
						} = props,
						subProps_overlay = {
							internalClassName: 'ss__modal__overlay',
							onClick: (e) => {
								onOverlayClick && onOverlayClick(e), toggleShowContent();
							},
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles, color: overlayColor }),
							theme: props?.theme,
							treePath,
						};
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.L)(() => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1)));
							}));
					const toggleShowContent = () => {
							stateful && setShowContent && setShowContent((prev) => !prev);
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
					return (
						(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
							() => (
								(document.body.style.overflow = showContent && lockScroll ? 'hidden' : ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[showContent, lockScroll]
						),
						(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
							const existingButton = buttonSelector
									? 'string' == typeof buttonSelector
										? document.querySelector(buttonSelector)
										: buttonSelector
									: null,
								debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_10__.s)(() => {
									setTimeout(() => {
										document.body.style.overflow = showContent && lockScroll ? 'hidden' : '';
									}, 100);
								}, 10),
								clickListener = (e) => {
									toggleShowContent(), onClick && onClick(e);
								};
							return (
								existingButton && (disabled || existingButton.addEventListener('click', clickListener)),
								window.addEventListener('resize', debouncedHandleResize),
								() => {
									window.removeEventListener('resize', debouncedHandleResize),
										existingButton && existingButton.removeEventListener('click', clickListener);
								}
							);
						}, []),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__modal',
									{ 'ss__modal--open': showContent },
									{ 'ss__modal--disabled': disabled },
									className,
									internalClassName
								),
								ref: innerRef,
								children: [
									!buttonSelector &&
										button &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: 'ss__modal__button',
											ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
											'aria-expanded': showContent,
											role: 'button',
											onClick: (e) => {
												disabled || (toggleShowContent(), onClick && onClick(e));
											},
											children: (0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(button, {
												open: showContent,
												toggleOpen: toggleShowContent,
												treePath,
											}),
										}),
									(content || children) &&
										showContent &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
											className: 'ss__modal__content',
											ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
											children: [
												(0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
												(0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											],
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_15__.h, {
										...subProps_overlay,
										active: Boolean(showContent),
									}),
								],
							}),
						})
					);
				});
		},
		'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { f: () => AutocompleteFixed });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Organisms_AutocompleteLayout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'
				),
				_Molecules_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/Modal/Modal.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Molecules/SearchInput/SearchInput.tsx'
				),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks_useAcRenderedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useAcRenderedInput.tsx');
			const defaultStyles = ({ inputBounds, offset, renderInput, width }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						position: 'absolute',
						left: '0',
						width: '100%',
						height: '100%',
						right: '0',
						top: '0',
						zIndex: 1001,
						'.ss__autocomplete-fixed__inner': {
							position: 'absolute',
							left: `calc(0px + ${offset?.left || 0}px)`,
							top: `calc(0px + ${renderInput ? '0px' : `${inputBounds.height}px`} + ${offset?.top || 0}px)`,
							width: `calc(100% + ${offset?.width || 0}px)`,
							zIndex: 1001,
							maxWidth: '100vw',
							'.ss__search-input': { background: '#fff', width: `${inputBounds.width}px`, height: `${inputBounds.height}px`, border: '0px' },
						},
						'.ss__autocomplete-fixed__inner__layout-wrapper': {
							width,
							overflowY: 'scroll',
							maxHeight: `calc(90vh - ${inputBounds.top || 0}px - ${renderInput ? `${inputBounds.height}px` : '0px'} + ${offset?.top || 0}px)`,
						},
						'.ss__search-input__button--close-search-icon': { border: 'none' },
					}),
				AutocompleteFixed = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'autocompleteFixed',
							globalTheme,
							{ layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							properties
						),
						[active, setActive] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),
						[inputName, setInputName] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)('query');
					let inputPlaceholderText,
						input = props.input,
						buttonSelector = props.buttonSelector;
					if (input) {
						'string' == typeof input && (input = document.querySelector(input));
						const existingInputName = input?.getAttribute('name');
						existingInputName && (setInputName(existingInputName), props.renderInput && input.setAttribute('name', '')),
							(inputPlaceholderText = input?.getAttribute('placeholder'));
					}
					!buttonSelector && input && (buttonSelector = input);
					const { layout, disableStyles, controller, renderInput, overlayColor, className, internalClassName, offset, treePath } = props,
						renderedInputRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						reset = () => {
							controller.setFocused(), setActive(!1);
						},
						subProps_autocompleteLayout = {
							layout,
							onReset: () => reset(),
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_modal = {
							internalClassName: 'autocomplete-fixed__modal',
							buttonSelector,
							lockScroll: !1,
							onOverlayClick: reset,
							open: active,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ overlayColor, disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_searchInput = {
							internalClassName: 'autocomplete-fixed__search-input',
							placeholderText: inputPlaceholderText || void 0,
							submitSearchButton: {
								onClick: () => {
									window.location.href = controller.store.state.url.link.href;
								},
							},
							clearSearchButton: { icon: 'close-thin' },
							closeSearchButton: { onClick: () => reset() },
							inputName,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath: `${treePath} modal`,
						},
						[inputBounds, setInputBounds] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)({ top: 0, left: 0, width: 0, height: 0 }),
						checkForInputChange = () => {
							const currentInputBounds = ((inputElem) => {
								if (inputElem) {
									const elem = inputElem.getBoundingClientRect();
									return {
										top: elem.top + window.scrollY + (offset?.top || 0),
										left: elem.left + window.scrollX + (offset?.left || 0),
										width: elem.width,
										height: elem.height,
									};
								}
								return { top: 0, left: 0, width: 0, height: 0 };
							})(input);
							(inputBounds.height === currentInputBounds.height &&
								inputBounds.left === currentInputBounds.left &&
								inputBounds.top === currentInputBounds.top &&
								inputBounds.width === currentInputBounds.width) ||
								setInputBounds(currentInputBounds);
						};
					checkForInputChange();
					const debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_8__.s)(() => {
						checkForInputChange();
					}, 10);
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.vJ)(() => {
						window.addEventListener('resize', debouncedHandleResize);
					}, []);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)({ ...props, inputBounds }, defaultStyles);
					let _input;
					input &&
						(_input = (0, _hooks_useAcRenderedInput__WEBPACK_IMPORTED_MODULE_10__.x)({
							input,
							controller,
							renderedInputRef,
							renderInput: Boolean(renderInput),
							buttonSelector,
							setActive,
						}));
					const acProps = { ...props };
					return (
						delete acProps.width,
						delete acProps.className,
						delete acProps.internalClassName,
						delete acProps.style,
						delete acProps.styleScript,
						delete acProps.themeStyleScript,
						layout?.length && active
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete-fixed', className, internalClassName),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_Modal__WEBPACK_IMPORTED_MODULE_13__.a, {
											...subProps_modal,
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_14__.iy)(e, 0, !0, reset),
													children: [
														renderInput
															? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(
																	_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_15__.D,
																	{ ...subProps_searchInput, value: controller.store.state.input || '', inputRef: renderedInputRef }
															  )
															: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(
																	_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FK,
																	{}
															  ),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(
																_Organisms_AutocompleteLayout__WEBPACK_IMPORTED_MODULE_16__.h,
																{ ...acProps, ...subProps_autocompleteLayout, input: _input, controller, treePath: `${treePath} modal` }
															),
														}),
													],
												}),
											}),
										}),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/hooks/useAcRenderedInput.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { x: () => useAcRenderedInput });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useAcRenderedInput({ input, controller, renderInput, buttonSelector, renderedInputRef, setActive }) {
				const [_input, setInput] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(input),
					[renderedInputInitialized, setRenderedInputInitialized] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					onClick = () => {
						setActive && setActive(!0),
							setTimeout(async () => {
								renderedInputInitialized ||
									(setInput(renderedInputRef.current),
									(controller.config.selector = '.ss__search-input__input'),
									await controller.bind(),
									renderedInputRef?.current?.focus()),
									setRenderedInputInitialized(!0);
							});
					};
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						if (renderInput && buttonSelector) {
							let button;
							(button = 'string' == typeof buttonSelector ? document.querySelector(buttonSelector) : buttonSelector),
								button &&
									(button.addEventListener('click', (e) => {
										e.stopPropagation(), onClick();
									}),
									button.addEventListener('focus', () => onClick()),
									button.addEventListener('select', () => onClick()));
						} else
							setActive &&
								(input.addEventListener('click', (e) => {
									e.stopPropagation(), setActive(!0);
								}),
								input.addEventListener('focus', () => setActive(!0)),
								input.addEventListener('select', () => setActive(!0)));
					}, []),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						input !== _input &&
							_input?.addEventListener('input', () => {
								input.value = _input.value;
							});
					}, [_input]),
					_input
				);
			}
		},
		'./src/Templates/Stores/library/components/AutocompleteFixed.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					AutocompleteFixed: () => _components_src_components_Templates_AutocompleteFixed__WEBPACK_IMPORTED_MODULE_0__.f,
				});
			var _components_src_components_Templates_AutocompleteFixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'
			);
		},
	},
]);
