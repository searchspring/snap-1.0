'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[5287],
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
		'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { c: () => AutocompleteModal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Organisms_AutocompleteLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'
				),
				_Molecules_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/Modal/Modal.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/src/components/Molecules/SearchInput/SearchInput.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks_useAcRenderedInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useAcRenderedInput.tsx');
			const defaultStyles = ({ width, height, theme }) => {
					const variables = theme?.variables;
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						position: 'fixed',
						left: '0',
						width: '100%',
						height: '100%',
						right: '0',
						top: '0',
						zIndex: 1001,
						'& .ss__autocomplete-modal__inner': {
							position: 'absolute',
							left: 0,
							right: 0,
							top: '10vh',
							maxHeight: '80vh',
							overflow: 'scroll',
							marginLeft: 'auto',
							marginRight: 'auto',
							background: '#fff',
							zIndex: 1001,
							width,
							height,
							maxWidth: '100vw',
						},
						'& .ss__overlay': { zIndex: 1e3 },
						'& .ss__autocomplete': { position: 'relative' },
						'& .ss__search-input': { margin: '1px' },
						'& .input_wrapper input': { background: '#eee' },
						'& .ss__search-input__button--close-search-icon': { border: 'none' },
						[`@media (max-width: ${variables?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
					});
				},
				AutocompleteModal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'autocompleteModal',
							globalTheme,
							{ layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							properties
						),
						[active, setActive] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),
						[inputName, setInputName] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)('query');
					let input = props.input,
						buttonSelector = props.buttonSelector;
					if (input) {
						'string' == typeof input && (input = document.querySelector(input));
						const existingInputName = input?.getAttribute('name');
						existingInputName && (setInputName(existingInputName), props.renderInput && input.setAttribute('name', ''));
					}
					!buttonSelector && input && (buttonSelector = input);
					const { layout, disableStyles, overlayColor, controller, renderInput, className, internalClassName, treePath } = props,
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
							internalClassName: 'autocomplete-modal__modal',
							buttonSelector,
							onOverlayClick: () => reset(),
							overlayColor,
							open: active,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_searchInput = {
							internalClassName: 'autocomplete-modal__search-input',
							submitSearchButton: {
								onClick: () => {
									window.location.href = controller.store.state.url.link.href;
								},
							},
							clearSearchButton: { icon: 'close-thin' },
							closeSearchButton: { onClick: () => reset(), icon: 'angle-left' },
							inputName,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath: `${treePath} modal`,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles);
					let _input;
					input &&
						(_input = (0, _hooks_useAcRenderedInput__WEBPACK_IMPORTED_MODULE_9__.x)({
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
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__autocomplete-modal', className, internalClassName),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Molecules_Modal__WEBPACK_IMPORTED_MODULE_12__.a, {
											...subProps_modal,
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.iy)(e, 0, !0, reset),
													children: [
														renderInput
															? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																	_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_14__.D,
																	{ ...subProps_searchInput, value: controller.store.state.input || '', inputRef: renderedInputRef }
															  )
															: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
																	_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
																	{}
															  ),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
															_Organisms_AutocompleteLayout__WEBPACK_IMPORTED_MODULE_15__.h,
															{ ...acProps, ...subProps_autocompleteLayout, input: _input, controller, treePath: `${treePath} modal` }
														),
													],
												}),
											}),
										}),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
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
		'./src/Templates/Stores/library/components/AutocompleteModal.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					AutocompleteModal: () => _components_src_components_Templates_AutocompleteModal__WEBPACK_IMPORTED_MODULE_0__.c,
				});
			var _components_src_components_Templates_AutocompleteModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'
			);
		},
	},
]);
