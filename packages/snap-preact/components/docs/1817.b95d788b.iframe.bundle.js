'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1817],
	{
		'../snap-toolbox/dist/esm/filters/handleize.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function handleize(input) {
				if ('string' != typeof input) return input;
				let handleized = input.toLowerCase();
				return (handleized = handleized.replace(/[^\w\s]/g, '').trim()), (handleized = handleized.replace(/\s/g, '-')), handleized;
			}
			__webpack_require__.d(__webpack_exports__, { p: () => handleize });
		},
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { m: () => Dropdown });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const defaultStyles = ({ disableOverlay }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						position: 'relative',
						'&.ss__dropdown--open': {
							'& .ss__dropdown__content': { position: disableOverlay ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
						},
						'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
						'.ss__dropdown__content': {
							backgroundColor: '#fff',
							position: 'absolute',
							minWidth: '100%',
							visibility: 'hidden',
							opacity: 0,
							top: 'auto',
							left: 0,
						},
					}),
				Dropdown = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { startOpen: !1, disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('dropdown', globalTheme, defaultProps, properties),
						{
							button,
							content,
							children,
							disabled,
							open,
							toggleOnHover,
							onMouseEnter,
							onMouseLeave,
							disableClick,
							onClick,
							onToggle,
							focusTrapContent,
							startOpen,
							disableClickOutside,
							disableA11y,
							className,
							internalClassName,
							treePath,
						} = props;
					let dropdownOpen, setDropdownOpen;
					const stateful = void 0 === open;
					stateful ? ([dropdownOpen, setDropdownOpen] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (dropdownOpen = open);
					const [isTouchInteraction, setIsTouchInteraction] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1);
					let innerRef;
					disableClickOutside ||
						(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__.L)((e) => {
							dropdownOpen && (disabled || (stateful && setDropdownOpen && setDropdownOpen(!1), onToggle && onToggle(e, !1)));
						}));
					const toggleOpenDropdown = (e, state) => {
							stateful &&
								setDropdownOpen &&
								setDropdownOpen((prev) => {
									const newState = state ?? !prev;
									return newState != prev && onToggle && onToggle(e, newState), newState;
								});
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						hoverProps = {
							onMouseEnter:
								(toggleOnHover || onMouseEnter) &&
								((e) => {
									isTouchInteraction || (toggleOnHover && !disabled && toggleOpenDropdown(e, !0), onMouseEnter && onMouseEnter(e));
								}),
							onMouseLeave:
								(toggleOnHover || onMouseLeave) &&
								((e) => {
									isTouchInteraction || (toggleOnHover && !disabled && toggleOpenDropdown(e, !1), onMouseLeave && onMouseLeave(e));
								}),
						};
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__dropdown',
								{ 'ss__dropdown--open': dropdownOpen },
								className,
								internalClassName
							),
							ref: innerRef,
							...hoverProps,
							children: [
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									className: 'ss__dropdown__button',
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.iy)(e)),
									'aria-expanded': dropdownOpen,
									role: 'button',
									onTouchStart: () => {
										setIsTouchInteraction(!0);
									},
									onClick: (e) => {
										disabled || disableClick || (toggleOpenDropdown(e), onClick && onClick(e)),
											setTimeout(() => {
												setIsTouchInteraction(!1);
											}, 300);
									},
									children: (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(button, { open: dropdownOpen, toggleOpen: toggleOpenDropdown, treePath }),
								}),
								(content || children) &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__dropdown__content',
										ref: (e) =>
											disableA11y
												? null
												: (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.iy)(e, 0, Boolean(focusTrapContent), (e) => {
														stateful ? toggleOpenDropdown(e) : onClick && onClick(e);
												  }),
										children: [
											(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(content, { open: dropdownOpen, toggleOpen: toggleOpenDropdown, treePath }),
											(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(children, { open: dropdownOpen, toggleOpen: toggleOpenDropdown, treePath }),
										],
									}),
							],
						}),
					});
				});
		},
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
		'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { S: () => FacetGridOptions });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_toolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = ({ columns, gapSize, gridSize, theme }) => {
					const variables = theme?.variables,
						backgroundColor = new (color__WEBPACK_IMPORTED_MODULE_4___default())(variables?.colors.primary),
						color = backgroundColor.isDark() ? '#fff' : '#000';
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						display: 'flex',
						flexFlow: 'row wrap',
						gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
						gap: gapSize,
						gridAutoRows: '1fr',
						'& .ss__facet-grid-options__option': {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flex: '0 1 auto',
							border: `1px solid ${backgroundColor.hex() || '#333'}`,
							textAlign: 'center',
							wordBreak: 'break-all',
							boxSizing: 'border-box',
							padding: '1em 0',
							width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
							margin: `0 ${gapSize} ${gapSize} 0`,
							[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
							'&.ss__facet-grid-options__option--filtered': { background: backgroundColor.hex() || '#ccc', color: color || '#333' },
							'&:hover:not(.ss__facet-grid-options__option--filtered)': {
								cursor: 'pointer',
								background: backgroundColor.hex() || '#f8f8f8',
								color: color || '#333',
							},
							'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
						},
						'@supports (display: grid)': {
							display: 'grid',
							'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
							'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
							'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
						},
					});
				},
				FacetGridOptions = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('facetGridOptions', globalTheme, defaultProps, properties),
						{ values, onClick, previewOnFocus, valueProps, facet, horizontal, className, internalClassName } = props;
					horizontal && (props.columns = 0);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						facetValues = values || facet?.refinedValues;
					return facetValues?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-grid-options', className, internalClassName),
									children: facetValues.map((value) => {
										const defaultLang = {
												gridOption: {
													attributes: {
														'aria-label':
															'' +
															(value.filtered
																? `remove selected filter ${facet?.label || ''} - ${value.label}`
																: facet?.label
																? `filter by ${facet?.label} - ${value.label}`
																: `filter by ${value.label}`),
													},
												},
											},
											lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
											mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet, value });
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('a', {
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-grid-options__option', {
												'ss__facet-grid-options__option--filtered': value.filtered,
											}),
											href: value.url?.link?.href,
											...valueProps,
											onClick: (e) => {
												value.url?.link?.onClick(e), onClick && onClick(e);
											},
											...(previewOnFocus ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_13__.l)(() => value?.preview && value.preview()) : {}),
											...mergedLang.gridOption?.all,
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
												className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-grid-options__option__value', {
													'ss__facet-grid-options__option__value--smaller': value.label.length > 3,
												}),
												children: value.label,
											}),
										});
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { T: () => FacetHierarchyOptions });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_toolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const defaultStyles = ({ theme, horizontal, returnIcon }) =>
					horizontal
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'flex',
								flexWrap: 'wrap',
								'& .ss__facet-hierarchy-options__option': {
									margin: '0 5px 5px 0',
									padding: '6px',
									textDecoration: 'none',
									flex: '0 1 auto',
									'&:hover': { cursor: 'pointer' },
									'&.ss__facet-hierarchy-options__option--filtered': {
										fontWeight: 'bold',
										color: theme?.variables?.colors?.primary,
										marginRight: '2em',
										'&:hover': { cursor: 'default', background: 'unset' },
									},
									'&.ss__facet-hierarchy-options__option--return': {
										'.ss__icon': { padding: '0 0 0 2px' },
										[returnIcon ? '' : '&:before']: {
											content: '' + (returnIcon ? '""' : "'\\0000ab'"),
											padding: '0 2px 0 0',
											color: theme?.variables?.colors?.primary,
										},
									},
									'& .ss__facet-hierarchy-options__option__value': {
										'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
									},
								},
						  })
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								'& .ss__facet-hierarchy-options__option': {
									display: 'flex',
									padding: '6px 0',
									textDecoration: 'none',
									alignItems: 'center',
									'&:hover': { cursor: 'pointer' },
									'&.ss__facet-hierarchy-options__option--filtered': {
										fontWeight: 'bold',
										color: theme?.variables?.colors?.primary,
										'&:hover': { cursor: 'default', background: 'unset' },
										'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
									},
									'&.ss__facet-hierarchy-options__option--return': {
										'.ss__icon': { padding: '0 0 0 2px' },
										[returnIcon ? '' : '&:before']: {
											content: '' + (returnIcon ? '""' : "'\\0000ab'"),
											padding: '0 2px 0 0',
											color: theme?.variables?.colors?.primary,
										},
									},
									'& .ss__facet-hierarchy-options__option__value': {
										marginLeft: '8px',
										'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
									},
								},
						  }),
				FacetHierarchyOptions = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetHierarchyOptions', globalTheme, defaultProps, properties),
						{
							values,
							hideCount,
							returnIcon,
							onClick,
							previewOnFocus,
							horizontal,
							valueProps,
							facet,
							disableStyles,
							treePath,
							className,
							internalClassName,
						} = props,
						subProps_icon = {
							internalClassName: 'ss__facet-hierarchy-options__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						facetValues = values || facet?.refinedValues;
					return facetValues?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__facet-hierarchy-options',
										{ 'ss__facet-hierarchy-options--horizontal': horizontal },
										className,
										internalClassName
									),
									children: facetValues.map((value) => {
										const defaultLang = {
												hierarchyOption: {
													attributes: {
														'aria-label':
															'' +
															(value.filtered
																? `selected ${value.label}`
																: facet?.label
																? `filter by ${facet?.label} - ${value.label}`
																: `filter by ${value.label}`),
													},
												},
											},
											lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
											mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet, value });
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('a', {
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
												'ss__facet-hierarchy-options__option',
												{ 'ss__facet-hierarchy-options__option--filtered': value.filtered },
												{ 'ss__facet-hierarchy-options__option--return': value.history && !value.filtered }
											),
											href: value.url?.link?.href,
											...valueProps,
											onClick: (e) => {
												value.url?.link?.onClick(e), onClick && onClick(e);
											},
											...(previewOnFocus ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_13__.l)(() => value?.preview && value.preview()) : {}),
											...mergedLang.hierarchyOption?.all,
											children: [
												returnIcon &&
													value.history &&
													!value.filtered &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
														...subProps_icon,
														...('string' == typeof returnIcon ? { icon: returnIcon } : returnIcon),
													}),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													className: 'ss__facet-hierarchy-options__option__value',
													children: [
														value.label,
														!hideCount &&
															value?.count > 0 &&
															!value.filtered &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
																className: 'ss__facet-hierarchy-options__option__value__count',
																children: ['(', value.count, ')'],
															}),
													],
												}),
											],
										});
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { C: () => FacetListOptions });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/Radio/Radio.tsx');
			const defaultStyles = ({ horizontal, theme, hideCheckbox }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: horizontal ? 'flex' : void 0,
						flexWrap: horizontal ? 'wrap' : void 0,
						'& .ss__facet-list-options__option': {
							display: horizontal ? void 0 : 'flex',
							alignItems: horizontal ? void 0 : 'center',
							flex: horizontal ? '0 1 auto' : void 0,
							padding: '6px',
							textDecoration: 'none',
							'&:hover': { cursor: 'pointer' },
							'&.ss__facet-list-options__option--filtered': { fontWeight: 'bold', color: theme?.variables?.colors?.primary },
							'& .ss__facet-list-options__option__value': {
								marginLeft: hideCheckbox ? '' : '8px',
								'& .ss__facet-list-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
							},
						},
					}),
				FacetListOptions = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = { hideCheckbox: !!properties.horizontal, treePath: globalTreePath },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetListOptions', globalTheme, defaultProps, properties),
						{
							values,
							hideCheckbox,
							hideCount,
							onClick,
							previewOnFocus,
							hideCountParenthesis,
							respectSingleSelect,
							valueProps,
							facet,
							disableStyles,
							className,
							internalClassName,
							treePath,
						} = props;
					let renderRadios = !1;
					respectSingleSelect && 'single' == facet?.multiple && (renderRadios = !0);
					const subProps_checkbox = {
							internalClassName: 'ss__facet-list-options__checkbox',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_radio = {
							internalClassName: 'ss__facet-list-options__radio',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						facetValues = values || facet?.refinedValues;
					return facetValues?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-list-options', className, internalClassName),
									children: facetValues.map((value) => {
										const defaultLang = {
												listOption: {
													attributes: {
														'aria-label':
															'' +
															(value.filtered
																? `remove selected filter ${facet?.label || ''} - ${value.label}`
																: facet?.label
																? `filter by ${facet?.label} - ${value.label}`
																: `filter by ${value.label}`),
													},
												},
											},
											lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
											mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet, value });
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('a', {
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facet-list-options__option', {
												'ss__facet-list-options__option--filtered': value.filtered,
											}),
											href: value.url?.link?.href,
											...valueProps,
											onClick: (e) => {
												value.url?.link?.onClick(e), onClick && onClick(e);
											},
											...(previewOnFocus ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_13__.l)(() => value?.preview && value.preview()) : {}),
											...mergedLang.listOption?.all,
											children: [
												renderRadios
													? !hideCheckbox &&
													  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Radio__WEBPACK_IMPORTED_MODULE_14__.s, {
															...subProps_radio,
															checked: value.filtered,
															disableA11y: !0,
															...mergedLang.listOption.attributes,
													  })
													: !hideCheckbox &&
													  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_15__.S, {
															...subProps_checkbox,
															checked: value.filtered,
															disableA11y: !0,
															...mergedLang.listOption.attributes,
													  }),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													className: 'ss__facet-list-options__option__value',
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
															className: 'ss__facet-list-options__option__value__label',
															children: value.label,
														}),
														!hideCount &&
															value?.count > 0 &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																className: 'ss__facet-list-options__option__value__count',
																children: hideCountParenthesis ? `${value.count}` : `(${value.count})`,
															}),
													],
												}),
											],
										});
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { P: () => FacetPaletteOptions });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_13__);
			const defaultStyles = ({ columns, gridSize, gapSize, horizontal, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						flexFlow: 'row wrap',
						gridTemplateColumns: columns
							? `repeat(${columns}, calc((100% - (${columns - 1} * ${gapSize}))/ ${columns}))`
							: `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
						gap: gapSize,
						'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
						'.ss__facet-palette-options__option': {
							width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px )`,
							marginRight: gapSize,
							marginBottom: gapSize,
							[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
							'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '100%', padding: '2px' },
							'.ss__facet-palette-options__option__palette': {
								paddingTop: 'calc(100% - 2px)',
								border: '1px solid #EBEBEB',
								borderRadius: '100%',
								position: 'relative',
								'.ss__facet-palette-options__icon': {
									position: 'absolute',
									top: 0,
									right: 0,
									left: 0,
									margin: 'auto',
									bottom: 0,
									textAlign: 'center',
									stroke: 'black',
									strokeWidth: '3px',
									strokeLinejoin: 'round',
									opacity: 0,
								},
							},
							'.ss__facet-palette-options__option__value': {
								display: 'block',
								textAlign: 'center',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							},
						},
						'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
						'&.ss__facet-palette-options--list': {
							display: 'flex',
							flexDirection: horizontal ? 'row' : 'column',
							'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
							'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
							'.ss__facet-palette-options__option--list': { alignItems: 'center' },
							'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
							'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
						},
						'&.ss__facet-palette-options--grid': {
							'.ss__facet-palette-options__checkbox': {
								display: 'flex',
								textAlign: 'center',
								overflow: 'hidden',
								margin: 'auto',
								marginBottom: '5px',
							},
							'.ss__facet-palette-options__option--filtered': {
								'.ss__facet-palette-options__option__wrapper': {
									borderColor: theme?.variables?.colors?.primary || '#333 !important',
									padding: '0px',
									borderWidth: '4px',
								},
							},
							'.ss__facet-palette-options__option': {
								'&:hover': {
									cursor: 'pointer',
									'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
									'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
								},
							},
						},
						'.ss__facet-palette-options__option__value__count': {
							fontSize: '0.8em',
							display: 'block',
							textAlign: 'center',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						},
					}),
				FacetPaletteOptions = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = {
							columns: 4,
							layout: 'grid',
							gridSize: '45px',
							gapSize: 'list' == properties.layout ? '2px' : '8px',
							hideCount: !0,
							hideCheckbox: !0,
							treePath: globalTreePath,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetPaletteOptions', globalTheme, defaultProps, properties),
						{
							values,
							hideLabel,
							layout,
							hideCount,
							hideCheckbox,
							colorMapping,
							hideIcon,
							onClick,
							previewOnFocus,
							valueProps,
							facet,
							horizontal,
							disableStyles,
							className,
							internalClassName,
							treePath,
						} = props;
					horizontal && (props.columns = 0);
					const subProps_icon = {
							internalClassName: 'ss__facet-palette-options__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, icon: 'close-thin', color: 'white', size: '40%' }),
							theme: props?.theme,
							treePath,
						},
						subProps_checkbox = {
							internalClassName: 'ss__facet-palette-options__checkbox',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						facetValues = values || facet?.values;
					return facetValues?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__facet-palette-options',
										`ss__facet-palette-options--${layout?.toLowerCase()}`,
										className,
										internalClassName
									),
									children: facetValues.map((value) => {
										const defaultLang = {
												paletteOption: {
													attributes: {
														'aria-label':
															'' +
															(value.filtered
																? `remove selected filter ${facet?.label || ''} - ${value.label}`
																: facet?.label
																? `filter by ${facet?.label} - ${value.label}`
																: `filter by ${value.label}`),
													},
												},
											},
											lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
											mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet, value });
										let lowerCaseColorMapping;
										colorMapping &&
											(lowerCaseColorMapping = Object.fromEntries(Object.entries(colorMapping).map(([key, value]) => [key.toLowerCase(), value])));
										const background =
											lowerCaseColorMapping &&
											lowerCaseColorMapping[value.label.toLowerCase()] &&
											lowerCaseColorMapping[value.label.toLowerCase()].background
												? lowerCaseColorMapping[value.label.toLowerCase()].background
												: value.value;
										let isDark = !1;
										if (background)
											try {
												isDark = new (color__WEBPACK_IMPORTED_MODULE_13___default())(background.toLowerCase()).isDark();
											} catch (err) {}
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(
											'a',
											{
												className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
													'ss__facet-palette-options__option',
													{ 'ss__facet-palette-options__option--filtered': value.filtered },
													{ 'ss__facet-palette-options__option--dark': isDark },
													`ss__facet-palette-options__option--${layout?.toLowerCase()}`
												),
												href: value.url?.link?.href,
												...(hideLabel ? { title: value.label } : {}),
												...valueProps,
												onClick: (e) => {
													value.url?.link?.onClick(e), onClick && onClick(e);
												},
												'aria-atomic': 'false',
												...(previewOnFocus ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_14__.l)(() => value?.preview && value.preview()) : {}),
												...mergedLang.paletteOption?.all,
												children: [
													!hideCheckbox &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Checkbox__WEBPACK_IMPORTED_MODULE_15__.S, {
															...subProps_checkbox,
															checked: value.filtered,
															disableA11y: !0,
															...mergedLang.paletteOption.attributes,
														}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
														className: 'ss__facet-palette-options__option__wrapper',
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
															className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
																'ss__facet-palette-options__option__palette',
																`ss__facet-palette-options__option__palette--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_16__.p(
																	value.value
																)}`
															),
															style: { background },
															children:
																!hideIcon &&
																value.filtered &&
																'grid' == layout?.toLowerCase() &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__.I, {
																	...subProps_icon,
																}),
														}),
													}),
													!hideLabel &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
															className: 'ss__facet-palette-options__option__value',
															children: lowerCaseColorMapping?.[value.label.toLowerCase()]?.label ?? value.label,
														}),
													!hideCount &&
														value?.count > 0 &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
															className: 'ss__facet-palette-options__option__value__count',
															children: ['(', value.count, ')'],
														}),
												],
											},
											value.value
										);
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/Radio/Radio.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { s: () => Radio });
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
			const defaultStyles = ({ size, native }) =>
					native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: size,
								width: size,
								cursor: 'pointer',
								'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
						  }),
				Radio = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							size: '20px',
							startChecked: !1,
							disableA11y: !1,
							checkedIcon: 'bullet',
							unCheckedIcon: 'bullet-o',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('radio', globalTheme, defaultProps, properties),
						{
							checked,
							color,
							disabled,
							checkedIcon,
							unCheckedIcon,
							onClick,
							startChecked,
							native,
							disableA11y,
							disableStyles,
							className,
							internalClassName,
							size,
							treePath,
							lang,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							name: ____,
							...additionalProps
						} = props,
						subProps_activeIcon = {
							name: 'active',
							internalClassName: 'ss__radio__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ size, color, disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_inactiveIcon = {
							name: 'inactive',
							internalClassName: 'ss__radio__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ size, color, disableStyles }),
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
						_lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({ radio: {} }, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(_lang, { disabled, checkedState });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__radio',
										'ss__radio--native',
										{ 'ss__radio--disabled': disabled },
										className,
										internalClassName
									),
									...styling,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__radio__input'),
										'aria-checked': checkedState,
										type: 'radio',
										onClick: (e) => clickFunc(e),
										disabled,
										checked: checkedState,
										tabIndex: disableA11y ? -1 : 0,
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__radio',
										{ 'ss__radio--disabled': disabled, 'ss__radio--active': checkedState },
										className,
										internalClassName
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
									...mergedLang.radio?.all,
									role: 'radio',
									'aria-checked': checkedState,
									'aria-disabled': disabled,
									...additionalProps,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_activeIcon,
												...('string' == typeof checkedIcon ? { icon: checkedIcon } : checkedIcon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_inactiveIcon,
												...('string' == typeof unCheckedIcon ? { icon: unCheckedIcon } : unCheckedIcon),
										  }),
							  }),
					});
				});
		},
		'./components/src/components/Molecules/SearchInput/SearchInput.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { D: () => SearchInput });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_hooks_useLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const defaultStyles = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						border: `1px solid ${theme?.variables?.colors?.primary || '#ccc'}`,
						'& .ss__icon': { padding: '5px' },
						'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
						'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
						'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
					}),
				SearchInput = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							placeholderText: 'Search',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
							submitSearchButton: { icon: 'search' },
							clearSearchButton: { icon: 'close-thin' },
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('searchInput', globalTheme, defaultProps, properties);
					(props.submitSearchButton = { ...defaultProps.submitSearchButton, ...props.submitSearchButton, ...properties?.submitSearchButton }),
						(props.clearSearchButton = { ...defaultProps.clearSearchButton, ...props.clearSearchButton, ...properties?.clearSearchButton }),
						(props.closeSearchButton = { ...defaultProps.closeSearchButton, ...props.closeSearchButton, ...properties?.closeSearchButton });
					const {
						placeholderText,
						value,
						submitSearchButton,
						closeSearchButton,
						clearSearchButton,
						inputRef,
						inputName,
						onChange,
						onClick,
						onKeyDown,
						onKeyUp,
						disabled,
						disableStyles,
						className,
						internalClassName,
						treePath,
					} = props;
					let inputValue, setInputValue;
					void 0 === value ? ([inputValue, setInputValue] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)('')) : (inputValue = value);
					const subProps_submitSearchButton = {
							...submitSearchButton,
							internalClassName: 'ss__search-input__button--submit-search-button',
							name: 'submit-search',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_clearSearchButton = {
							...clearSearchButton,
							internalClassName: 'ss__search-input__button--clear-search-button',
							name: 'clear-search',
							onClick: () => {
								inputRef?.current && (((inputRef?.current).value = ''), (inputRef?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
									setInputValue && setInputValue(''),
									clearSearchButton?.onClick && clearSearchButton.onClick();
							},
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_closeSearchButton = {
							...closeSearchButton,
							internalClassName: 'ss__search-input__button--close-search-button',
							name: 'close-search',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = {
							placeholderText: { attributes: { placeholder: placeholderText } },
							closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
							clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
							submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks_useLang__WEBPACK_IMPORTED_MODULE_10__.u)(lang, {});
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__search-input',
								{ 'ss__input--disabled': disabled },
								className,
								internalClassName
							),
							onClick: (e) => !disabled && onClick && onClick(e),
							children: [
								closeSearchButton &&
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
										...subProps_closeSearchButton,
										...mergedLang.closeSearchButton.all,
									}),
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
									type: 'text',
									className: 'ss__search-input__input',
									...mergedLang.placeholderText.attributes,
									value: inputValue,
									name: inputName,
									ref: inputRef,
									onKeyDown: (e) => onKeyDown && onKeyDown(e),
									onKeyUp: (e) => onKeyUp && onKeyUp(e),
									onChange: (e) => {
										setInputValue && setInputValue(e.target.value || ''), onChange && onChange(e);
									},
									disabled,
								}),
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: 'ss__search-input__icons',
									children: [
										clearSearchButton && inputValue?.length
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
													...subProps_clearSearchButton,
													...mergedLang.clearSearchButton.all,
											  })
											: null,
										submitSearchButton &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
												...subProps_submitSearchButton,
												...mergedLang.submitSearchButton.all,
											}),
									],
								}),
							],
						}),
					});
				});
		},
		'./components/src/components/Organisms/Facet/Facet.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { s: () => Facet });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Molecules_FacetListOptions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
					'./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'
				),
				_Molecules_FacetGridOptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'
				),
				_Molecules_FacetPaletteOptions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'
				),
				_Molecules_FacetHierarchyOptions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'
				),
				_Molecules_FacetSlider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'
				),
				_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/src/components/Molecules/SearchInput/SearchInput.tsx'
				),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx');
			const defaultStyles = ({ disableCollapse, color, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						width: '100%',
						margin: '0 0 20px 0',
						'& .ss__facet__header': {
							cursor: disableCollapse ? void 0 : 'pointer',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							color: color || theme?.variables?.colors?.primary,
							border: 'none',
							borderBottom: `2px solid ${theme?.variables?.colors?.secondary || '#ccc'}`,
							padding: '6px 0',
							'& .ss__facet__header__inner': { display: 'flex' },
						},
						'& .ss__facet__header__clear-all': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							marginLeft: '10px',
							border: 'none',
							padding: '0',
							color: color || theme?.variables?.colors?.primary,
							'&:hover': { textDecoration: 'underline' },
							'& .ss__icon': { marginLeft: '5px' },
						},
						'& .ss__facet__options': { marginTop: '8px', maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' },
						'& .ss__facet__show-more-less': { display: 'block', margin: '8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
						'& .ss__search-input': { margin: '16px 0 0 0' },
						'& .ss__facet__header__selected-count': { margin: '0px 5px' },
						'.ss__facet__range-inputs': { display: 'flex', flexDirection: 'column', '.ss__facet__range-inputs__separator': { margin: '5px' } },
						'.ss__facet__range-inputs__row': {
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							'&.ss__facet__range-inputs__row--button-wrapper': {
								justifyContent: 'center',
								'.ss__facet__range-input__button--submit': { margin: '10px' },
							},
						},
						'.ss__facet__range-input': {
							flexDirection: 'row',
							display: 'flex',
							border: `1px solid ${theme?.variables?.colors?.secondary || '#ccc'}`,
							backgroundColor: 'white',
							alignItems: 'center',
							'.ss__facet__range-input__prefix': { padding: '0 5px' },
							'.ss__facet__range-input__input': { width: '100%', border: 'none', minHeight: '35px' },
						},
					}),
				Facet = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = {
							limit: 12,
							disableOverflow: !1,
							iconCollapse: 'angle-up',
							iconExpand: 'angle-down',
							showMoreText: 'Show More',
							showLessText: 'Show Less',
							iconOverflowMore: 'plus',
							iconOverflowLess: 'minus',
							clearAllText: 'Clear All',
							rangeInputSubmitButtonText: 'Submit',
							rangeInputSeparatorText: ' - ',
							searchable: !1,
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)(),
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('facet', globalTheme, defaultProps, properties);
					props.display && props.display[props.facet?.display] && (props = { ...props, ...props.display[props.facet?.display] }),
						props.fields && props.fields[props.facet?.field] && (props = { ...props, ...props.fields[props.facet?.field] });
					const {
							disableCollapse,
							facet,
							iconCollapse,
							iconExpand,
							limit,
							disableOverflow,
							iconColor,
							color,
							previewOnFocus,
							valueProps,
							showSelectedCount,
							hideSelectedCountParenthesis,
							clearAllIcon,
							showClearAllText,
							justContent,
							horizontal,
							disableStyles,
							className,
							internalClassName,
							treePath,
						} = props,
						subProps = {
							dropdown: {
								internalClassName: 'ss__facet__dropdown',
								disableClickOutside: !0,
								disableOverlay: !0,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							icon: {
								internalClassName: 'ss__facet__dropdown__icon',
								size: '12px',
								color: iconColor || color,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							button: { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }), theme: props?.theme, treePath },
							showMoreLessIcon: {
								internalClassName: 'ss__facet__show-more-less__icon',
								size: '10px',
								color: iconColor || color,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							facetHierarchyOptions: {
								internalClassName: 'ss__facet__facet-hierarchy-options',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles, previewOnFocus, valueProps, horizontal }),
								theme: props?.theme,
								treePath,
							},
							facetListOptions: {
								internalClassName: 'ss__facet__facet-list-options',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles, previewOnFocus, valueProps, horizontal }),
								theme: props?.theme,
								treePath,
							},
							facetGridOptions: {
								internalClassName: 'ss__facet__facet-grid-options',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles, previewOnFocus, valueProps, horizontal }),
								theme: props?.theme,
								treePath,
							},
							facetPaletteOptions: {
								internalClassName: 'ss__facet__facet-palette-options',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles, previewOnFocus, valueProps, horizontal }),
								theme: props?.theme,
								treePath,
							},
							facetSlider: {
								internalClassName: 'ss__facet__facet-slider',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							searchInput: {
								internalClassName: 'ss__facet__search-input',
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
						};
					let limitedValues;
					facet?.overflow && limit && Number.isInteger(limit) && !disableOverflow
						? (facet.overflow?.setLimit(limit), (limitedValues = facet?.refinedValues))
						: (limitedValues = facet?.overflow && Number.isInteger(limit) ? facet?.values.slice(0, limit) : facet?.values);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
						searchableFacet = {
							allowableTypes: ['list', 'grid', 'palette'],
							searchFilter: (e) => {
								facet?.search && (facet.search.input = e.target.value);
							},
						};
					let renderFacet = !0;
					facet.display == _types__WEBPACK_IMPORTED_MODULE_11__.Q.TOGGLE && facet && 1 !== facet?.values.length && (renderFacet = !1);
					const facetContentProps = { limitedValues, searchableFacet, subProps, className, internalClassName, ...props },
						defaultLang = {
							showMoreText: { value: facetContentProps.showMoreText },
							showLessText: { value: facetContentProps.showLessText },
							dropdownButton: {
								attributes: {
									'aria-label': `currently ${facet?.collapsed ? 'collapsed' : 'open'} ${facet.label} facet dropdown ${
										facet.values?.length ? facet.values?.length + ' options' : ''
									}`,
								},
							},
							clearAllText: { value: facetContentProps.clearAllText },
							submitRangeButton: { value: facetContentProps.rangeInputSubmitButtonText },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { facet }),
						selectedCount = facet?.values?.filter((value) => value?.filtered).length;
					return facet && renderFacet
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__facet',
										`ss__facet--${facet.field}`,
										'' + (facet.collapsed ? 'ss__facet--collapsed' : ''),
										className,
										internalClassName,
										'' + (facet.display ? `ss__facet--${facet.display}` : ''),
										(facet?.overflow?.remaining || 0) > 0 || 'slider' == facet?.display ? '' : 'ss__facet--showing-all'
									),
									children: justContent
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(FacetContent, { ...facetContentProps, mergedLang })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_15__.m, {
												...subProps.dropdown,
												open: disableCollapse || !facet?.collapsed,
												onClick: () => !disableCollapse && facet.toggleCollapse && facet?.toggleCollapse(),
												disableA11y: !0,
												button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
													className: 'ss__facet__header',
													ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_16__.iy)(e, disableCollapse ? -1 : 0),
													role: 'heading',
													'aria-level': 3,
													...mergedLang.dropdownButton.attributes,
													children: [
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
															className: 'ss__facet__header__inner',
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																	...mergedLang.dropdownButton.value,
																	children: facet?.label,
																}),
																showSelectedCount && selectedCount
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																			className: 'ss__facet__header__selected-count',
																			children: hideSelectedCountParenthesis ? selectedCount : `(${selectedCount})`,
																	  })
																	: null,
																(mergedLang.clearAllText.value || clearAllIcon) && selectedCount
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__.$, {
																			...subProps.button,
																			internalClassName: 'ss__facet__header__clear-all',
																			name: 'reset-facet',
																			onClick: (e) => {
																				e.stopPropagation(), facet?.clear.url.link.onClick();
																			},
																			icon: clearAllIcon || void 0,
																			children:
																				mergedLang.clearAllText.value && showClearAllText
																					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('label', {
																							...mergedLang.clearAllText.all,
																					  })
																					: null,
																	  })
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
																			_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK,
																			{}
																	  ),
															],
														}),
														!disableCollapse &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_18__.I, {
																...subProps.icon,
																...(facet?.collapsed
																	? { ...('string' == typeof iconExpand ? { icon: iconExpand } : iconExpand) }
																	: { ...('string' == typeof iconCollapse ? { icon: iconCollapse } : iconCollapse) }),
																name: facet?.collapsed ? 'expand' : 'collapse',
																treePath: props.treePath,
															}),
													],
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(FacetContent, { ...facetContentProps, mergedLang }),
										  }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				}),
				FacetContent = (props) => {
					const {
							searchableFacet,
							subProps,
							className,
							internalClassName,
							limitedValues,
							facet,
							limit,
							overflowSlot,
							optionsSlot,
							searchable,
							iconOverflowMore,
							iconOverflowLess,
							disableOverflow,
							previewOnFocus,
							rangeInputs,
							rangeInputsPrefix,
							rangeInputSeparatorText,
							justContent,
							valueProps,
							hideShowMoreLessText,
							treePath,
							mergedLang,
						} = props,
						[low, setLow] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(),
						[high, setHigh] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(),
						onDragcb = (vals) => {
							setLow(vals[0]), setHigh(vals[1]);
						},
						onKeyUp = (e) => {
							'Enter' === e.key && 'number' == typeof low && 'number' == typeof high && submitButtonRef.current?.base?.click();
						},
						submitButtonRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)();
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
						children: [
							searchable &&
								searchableFacet.allowableTypes.includes(facet.display) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Molecules_SearchInput__WEBPACK_IMPORTED_MODULE_19__.D, {
									...subProps.searchInput,
									onChange: searchableFacet.searchFilter,
									placeholderText: `Search ${facet.label}`,
									treePath,
								}),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
									'ss__facet__options',
									justContent ? className : '',
									justContent ? internalClassName : ''
								),
								children: (() => {
									if (optionsSlot)
										return (0, _utilities__WEBPACK_IMPORTED_MODULE_20__.Y)(optionsSlot, { facet, valueProps, limit, previewOnFocus, treePath });
									switch (facet?.display) {
										case _types__WEBPACK_IMPORTED_MODULE_11__.Q.SLIDER:
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Molecules_FacetSlider__WEBPACK_IMPORTED_MODULE_21__.l, {
												...subProps.facetSlider,
												onChange: onDragcb,
												facet,
												treePath,
											});
										case _types__WEBPACK_IMPORTED_MODULE_11__.Q.GRID:
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
												_Molecules_FacetGridOptions__WEBPACK_IMPORTED_MODULE_22__.S,
												{ ...subProps.facetGridOptions, values: limitedValues, facet, treePath }
											);
										case _types__WEBPACK_IMPORTED_MODULE_11__.Q.PALETTE:
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
												_Molecules_FacetPaletteOptions__WEBPACK_IMPORTED_MODULE_23__.P,
												{ ...subProps.facetPaletteOptions, values: limitedValues, facet, treePath }
											);
										case _types__WEBPACK_IMPORTED_MODULE_11__.Q.HIERARCHY:
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
												_Molecules_FacetHierarchyOptions__WEBPACK_IMPORTED_MODULE_24__.T,
												{ ...subProps.facetHierarchyOptions, values: limitedValues, facet, treePath }
											);
										default:
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(
												_Molecules_FacetListOptions__WEBPACK_IMPORTED_MODULE_25__.C,
												{ ...subProps.facetListOptions, values: limitedValues, facet, treePath }
											);
									}
								})(),
							}),
							rangeInputs &&
								('range' === facet.type || 'range-buckets' === facet.type) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
									className: 'ss__facet__range-inputs',
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
											className: 'ss__facet__range-inputs__row',
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
													className: 'ss__facet__range-input ss__facet__range-input--low',
													children: [
														rangeInputsPrefix &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																className: 'ss__facet__range-input__prefix',
																children: rangeInputsPrefix,
															}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('input', {
															type: 'number',
															className: 'ss__facet__range-input__input',
															value: low,
															onInput: (e) => setLow(Number(e.currentTarget.value) || 0),
															onKeyUp,
														}),
													],
												}),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
													className: 'ss__facet__range-inputs__separator',
													children: rangeInputSeparatorText,
												}),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
													className: 'ss__facet__range-input ss__facet__range-input--high',
													children: [
														rangeInputsPrefix &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																className: 'ss__facet__range-input__prefix',
																children: rangeInputsPrefix,
															}),
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('input', {
															type: 'number',
															className: 'ss__facet__range-input__input',
															value: high,
															onInput: (e) => setHigh(Number(e.currentTarget.value) || 0),
															onKeyUp,
														}),
													],
												}),
											],
										}),
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
											className: 'ss__facet__range-inputs__row ss__facet__range-inputs__row--button-wrapper',
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_17__.$, {
												internalClassName: 'ss__facet__range-input__button--submit',
												ref: submitButtonRef,
												onClick: () => {
													if (facet?.services?.urlManager && 'number' == typeof low && 'number' == typeof high) {
														let currentLow = low,
															currentHigh = high;
														currentHigh < currentLow && ((currentLow = high), (currentHigh = low), setLow(currentLow), setHigh(currentHigh)),
															void 0 !== facet?.range?.low &&
																currentLow < facet?.range?.low &&
																((currentLow = facet?.range?.low), setLow(currentLow)),
															void 0 !== facet?.range?.high &&
																currentLow > facet?.range?.high &&
																((currentLow = facet?.range?.high), setLow(currentLow)),
															void 0 !== facet?.range?.low &&
																currentHigh < facet?.range?.low &&
																((currentHigh = facet?.range?.low), setHigh(currentHigh)),
															void 0 !== facet?.range?.high &&
																currentHigh > facet?.range?.high &&
																((currentHigh = facet?.range?.high), setHigh(currentHigh)),
															facet.services.urlManager.remove('page').set(`filter.${facet.field}`, { low: currentLow, high: currentHigh }).go();
													}
												},
												children: mergedLang.submitRangeButton.value
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('label', { ...mergedLang.submitRangeButton.all })
													: null,
											}),
										}),
									],
								}),
							!disableOverflow &&
								facet?.overflow?.enabled &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
									className: 'ss__facet__show-more-less',
									'aria-live': 'polite',
									onClick: () => facet.overflow?.toggle(),
									ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_16__.iy)(e),
									children: overflowSlot
										? (0, _utilities__WEBPACK_IMPORTED_MODULE_20__.Y)(overflowSlot, { facet, treePath })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
												children: [
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_18__.I, {
														...subProps.showMoreLessIcon,
														treePath,
														...((facet.overflow?.remaining || 0) > 0
															? { ...('string' == typeof iconOverflowMore ? { icon: iconOverflowMore } : iconOverflowMore) }
															: { ...('string' == typeof iconOverflowLess ? { icon: iconOverflowLess } : iconOverflowLess) }),
													}),
													!hideShowMoreLessText &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
															...((facet?.overflow?.remaining || 0) > 0 ? mergedLang.showMoreText?.all : mergedLang.showLessText?.all),
														}),
												],
										  }),
								}),
						],
					});
				};
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
		'./components/src/toolbox/createHoverProps/createHoverProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => createHoverProps });
			const createHoverProps = (callback, options = { delay: 333, focusElem: !0 }) => {
				let delayTimeout;
				return {
					onMouseEnter: (e) => {
						clearTimeout(delayTimeout),
							(delayTimeout = window.setTimeout(() => {
								options.focusElem && e.target.focus(), callback && callback();
							}, options.delay || 333));
					},
					onMouseLeave: () => {
						clearTimeout(delayTimeout);
					},
				};
			};
		},
	},
]);
