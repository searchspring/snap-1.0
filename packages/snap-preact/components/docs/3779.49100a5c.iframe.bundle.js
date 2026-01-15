'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3779],
	{
		'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { o: () => AutocompleteSlideout });
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
				_Molecules_Slideout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/Slideout/Slideout.tsx'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/src/components/Molecules/SearchInput/SearchInput.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks_useAcRenderedInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useAcRenderedInput.tsx');
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						border: '1px solid #eee',
						'& .ss__autocomplete': { position: 'relative' },
						'& .input_wrapper input': { background: '#eee' },
						'& .ss__search-input__button--close-search-icon': { border: 'none' },
					}),
				AutocompleteSlideout = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'autocompleteSlideout',
							globalTheme,
							{
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							properties
						),
						[inputName, setInputName] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)('query');
					let input = props.input,
						buttonSelector = props.buttonSelector;
					if (input) {
						'string' == typeof input && (input = document.querySelector(input));
						const existingInputName = input?.getAttribute('name');
						existingInputName && (setInputName(existingInputName), props.renderInput && input.setAttribute('name', ''));
					}
					!buttonSelector && input && (buttonSelector = input);
					const { layout, disableStyles, slideDirection, controller, overlayColor, renderInput, className, internalClassName, treePath, width } =
							props,
						renderedInputRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						reset = () => {
							setActive(!1), controller.setFocused();
						},
						subProps_autocompleteLayout = {
							onReset: () => reset(),
							layout,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_slideout = {
							width,
							rerender: !1,
							overlayColor,
							slideDirection,
							buttonSelector,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_searchInput = {
							internalClassName: 'autocomplete-slideout__search-input',
							inputName,
							submitSearchButton: {
								onClick: () => {
									window.location.href = controller.store.state.url.link.href;
								},
							},
							clearSearchButton: { icon: 'close-thin' },
							closeSearchButton: { onClick: () => reset(), icon: 'angle-left' },
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							treePath: `${treePath} slideout`,
							theme: props?.theme,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						[active, setActive] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);
					let _input;
					input &&
						((0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.vJ)(() => {
							input.addEventListener('click', () => setActive(!0));
						}),
						(_input = (0, _hooks_useAcRenderedInput__WEBPACK_IMPORTED_MODULE_9__.x)({
							input,
							controller,
							renderedInputRef,
							renderInput: Boolean(renderInput),
							buttonSelector,
						})));
					const acProps = { ...props };
					return (
						delete acProps.width,
						delete acProps.className,
						delete acProps.internalClassName,
						delete acProps.style,
						delete acProps.styleScript,
						delete acProps.themeStyleScript,
						layout?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Molecules_Slideout__WEBPACK_IMPORTED_MODULE_12__.S, {
										...styling,
										...subProps_slideout,
										className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
											'ss__autocomplete-slideout',
											'ss__autocomplete-slideout__slideout',
											className,
											internalClassName
										),
										active,
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.iy)(e, 0, !0, reset),
											children: [
												renderInput
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_14__.D, {
															...subProps_searchInput,
															value: controller.store.state.input || '',
															inputRef: renderedInputRef,
													  })
													: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
															_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
															{}
													  ),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
													_Organisms_AutocompleteLayout__WEBPACK_IMPORTED_MODULE_15__.h,
													{ ...acProps, ...subProps_autocompleteLayout, input: _input, controller, treePath: `${treePath} slideout` }
												),
											],
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
		'./src/Templates/Stores/library/components/AutocompleteSlideout.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					AutocompleteSlideout: () => _components_src_components_Templates_AutocompleteSlideout__WEBPACK_IMPORTED_MODULE_0__.o,
				});
			var _components_src_components_Templates_AutocompleteSlideout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'
			);
		},
	},
]);
