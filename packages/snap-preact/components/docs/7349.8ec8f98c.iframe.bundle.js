'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7349],
	{
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
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { m: () => Dropdown });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const CSS_dropdown = ({ disableOverlay, classId }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						position: 'relative',
						'&.ss__dropdown--open': {
							[`& .ss__dropdown__content--${classId}`]: { position: disableOverlay ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
						},
						'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
						'.ss__dropdown__content': { position: 'absolute', minWidth: '100%', visibility: 'hidden', opacity: 0, top: 'auto', left: 0 },
					}),
				Dropdown = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('dropdown', globalTheme, { startOpen: !1, disableA11y: !1 }, properties),
						{
							button,
							content,
							children,
							disabled,
							open,
							onClick,
							onToggle,
							startOpen,
							disableClickOutside,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props;
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_6__.L)((e) => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1), onToggle && onToggle(e, !1)));
							}));
					const toggleShowContent = (e) => {
							stateful && setShowContent && setShowContent((prev) => (onToggle && onToggle(e, !prev), !prev));
						},
						styling = { 'ss-name': props.name },
						[classId] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)((Math.random() + 1).toString(36).substring(7)),
						stylingProps = { ...props, classId };
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_dropdown(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__dropdown', { 'ss__dropdown--open': showContent }, className),
								ref: innerRef,
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__.i)(e)),
										'aria-expanded': showContent,
										role: 'button',
										onClick: (e) => {
											disabled || (toggleShowContent(e), onClick && onClick(e));
										},
										children: (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(button, { open: showContent, toggleOpen: toggleShowContent, treePath }),
									}),
									(content || children) &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
											className: `ss__dropdown__content ss__dropdown__content--${classId}`,
											children: [
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											],
										}),
								],
							}),
						})
					);
				});
		},
		'./components/src/components/Molecules/Select/Select.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Select });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_select = ({ color, backgroundColor, borderColor, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'inline-flex',
						color,
						'&.ss__select--disabled': { opacity: 0.7 },
						'& .ss__select__dropdown__button__icon': { margin: 'auto 0 auto 5px' },
						'& .ss__select__label': { marginRight: '5px' },
						'& .ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
						'& .ss__select__select': {
							position: 'relative',
							zIndex: '10000',
							backgroundColor: backgroundColor || '#fff',
							listStyle: 'none',
							padding: '0',
							marginTop: '-1px',
							border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
							'.ss__select__dropdown__button': { alignItems: 'center' },
							'& .ss__select__select__option': {
								cursor: 'pointer',
								padding: '6px 8px',
								color: 'initial',
								display: 'flex',
								alignItems: 'center',
								'& .ss__select__select__option__icon': { margin: '0px 5px 0px 0px' },
								'&.ss__select__select__option--selected': { fontWeight: 'bold' },
								'&:hover': { backgroundColor: theme?.variables?.colors?.hover?.background || '#f8f8f8' },
							},
						},
					}),
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				Select = (0, mobx_react__WEBPACK_IMPORTED_MODULE_5__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)(
							'select',
							globalTheme,
							{ iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1 },
							properties
						),
						{
							backgroundColor,
							borderColor,
							color,
							clearSelection,
							disableClickOutside,
							disabled,
							hideLabelOnSelection,
							iconColor,
							iconClose,
							iconOpen,
							label,
							native,
							onSelect,
							selected,
							separator,
							startOpen,
							hideIcon,
							hideOptionIcons,
							hideOptionLabels,
							hideSelection,
							stayOpenOnSelection,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props;
					let { options } = props;
					const subProps_dropdown = {
							className: 'ss__select__dropdown',
							...globalTheme?.components?.dropdown,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, disabled }),
							theme: props?.theme,
							treePath,
						},
						subProps_button = {
							className: 'ss__select__dropdown__button',
							...globalTheme?.components?.button,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, disabled, color, backgroundColor, borderColor }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__select__dropdown__button__icon',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, color: iconColor || color, size: '14px' }),
							theme: props?.theme,
						},
						[open, setOpen] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(Boolean(startOpen)),
						[selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected),
						[originalSelected] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected);
					try {
						if (selected) {
							const originalSelectedstr = JSON.stringify(originalSelected),
								selectedstr = JSON.stringify(selected),
								selectionstr = JSON.stringify(selection);
							originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
						}
					} catch (e) {}
					selection && clearSelection && (options = [{ label: clearSelection, value: '' }, ...options]);
					const makeSelection = (e, option) => {
							option != selection && onSelect && onSelect(e, option), setSelection(option), !stayOpenOnSelection && setOpen(!1);
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_select(stylingProps), style]);
					const selectedOptions = options.filter((option) => selection?.value === option.value),
						defaultLang = {
							buttonLabel: {
								value: label,
								attributes: {
									'aria-label': `${label} dropdown, ${options.length} options ${
										selectedOptions.length ? `, Currently selected option is ${selectedOptions[0].label}` : ''
									}`,
								},
							},
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.u)(lang, { options, selectedOptions, label, open });
					return 'object' == typeof options && options?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__select', { 'ss__select--disabled': disabled }, className),
									children: native
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK, {
												children: [
													(label || lang.buttonLabel.value) &&
														!hideLabelOnSelection &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
															className: 'ss__select__label',
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('label', { ...mergedLang.buttonLabel?.all }),
																separator &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																		className: 'ss__select__label__separator',
																		children: separator,
																	}),
															],
														}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('select', {
														className: 'ss__select__select',
														disabled: disabled || void 0,
														onChange: (e) => {
															const selectElement = e.target,
																selectedOptionElement = selectElement.options[selectElement.selectedIndex],
																selectedOption = options
																	.filter(
																		(option, index) =>
																			option.label == selectedOptionElement.text &&
																			(option.value == selectedOptionElement.value || option.value == index)
																	)
																	.pop();
															!disabled && makeSelection(e, selectedOption);
														},
														children: [
															!selection &&
																clearSelection &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('option', {
																	className: 'ss__select__select__option',
																	selected: !0,
																	value: '',
																	children: clearSelection,
																}),
															options.map((option, index) =>
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('option', {
																	className: 'ss__select__select__option',
																	selected: selection?.value === option.value,
																	value: option.value ?? index,
																	children: option.label,
																})
															),
														],
													}),
												],
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_12__.m, {
												...subProps_dropdown,
												disableClickOutside,
												open,
												onToggle: (e, state) => setOpen((prev) => state ?? !prev),
												onClick: () => setOpen((prev) => !prev),
												disableA11y: !0,
												button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
													...subProps_button,
													disableA11y: !0,
													children: [
														(label || lang.buttonLabel.value) &&
															!hideLabelOnSelection &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
																className: 'ss__select__label',
																ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_14__.i)(e),
																'aria-expanded': open,
																role: 'button',
																...mergedLang.buttonLabel.attributes,
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('label', { ...mergedLang.buttonLabel.value }),
																	separator &&
																		selection &&
																		(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																			className: 'ss__select__label__separator',
																			children: separator,
																		}),
																],
															}),
														selection &&
															!hideSelection &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(
																_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,
																{
																	children: [
																		selection.icon &&
																			!hideOptionIcons &&
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																				...subProps_icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...('string' == typeof selection.icon ? { icon: selection.icon } : selection.icon),
																			}),
																		!hideOptionLabels &&
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																				className: 'ss__select__selection',
																				children: selection?.label,
																			}),
																	],
																}
															),
														!hideIcon &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																...subProps_icon,
																name: open ? 'open' : 'close',
																...(open
																	? { ...('string' == typeof iconClose ? { icon: iconClose } : iconClose) }
																	: { ...('string' == typeof iconOpen ? { icon: iconOpen } : iconOpen) }),
															}),
													],
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('ul', {
													className: 'ss__select__select',
													role: 'listbox',
													'aria-label': 'string' == typeof label ? label : '',
													children: options.map((option) =>
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('li', {
															ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_14__.i)(e),
															'aria-disabled': option.disabled,
															title: option.label,
															className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__select__select__option', {
																'ss__select__select__option--selected': selection?.value === option.value,
															}),
															onClick: (e) => !disabled && makeSelection(e, option),
															role: 'option',
															'aria-selected': selection?.value === option.value,
															children: [
																option.icon &&
																	!hideOptionIcons &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
																		...subProps_icon,
																		name: 'option',
																		className: 'ss__select__select__option__icon',
																		...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
																	}),
																!hideOptionLabels &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', { children: option.label }),
															],
														})
													),
												}),
										  }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
		'./components/src/hooks/useClickOutside.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { L: () => useClickOutside });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useClickOutside(callback) {
				const callbackRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(),
					innerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)();
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						callbackRef.current = callback;
					}),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						return document.addEventListener('click', handleClick), () => document.removeEventListener('click', handleClick);
						function handleClick(e) {
							innerRef.current && callbackRef.current && !innerRef.current.contains(e.target) && callbackRef.current(e);
						}
					}, []),
					innerRef
				);
			}
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
