'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3200],
	{
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = ({ native, color, backgroundColor, borderColor, theme }) => {
					const lightenedPrimaryColorObj = new (color__WEBPACK_IMPORTED_MODULE_4___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								gap: '5px',
								padding: '5px 10px',
								position: 'relative',
								color: color || theme?.variables?.colors?.primary,
								outline: 0,
								backgroundColor: backgroundColor || '#fff',
								border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
								'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: lightenedPrimaryColorObj.hex() || '#f8f8f8' },
								'&.ss__button--disabled': { opacity: 0.3, backgroundColor: 'initial', '&:hover': { cursor: 'default' } },
								'.ss__button__content': { width: '100%' },
								label: { cursor: 'pointer' },
						  });
				},
				Button = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('button', globalTheme, defaultProps, properties),
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
							lang,
							treePath,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							...additionalProps
						} = props,
						subProps_icon = {
							className: 'ss__button__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						elementProps = {
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__button',
								{ 'ss__button--native': native, 'ss__button--disabled': disabled },
								className
							),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
													className: 'ss__button__content',
													...mergedLang.button?.all,
													children: [
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
													],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												content || children || mergedLang.button.value
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__button__content',
															...mergedLang.button?.all,
															children: [
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
															],
													  })
													: void 0,
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/List/List.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { B: () => List });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const defaultStyles = ({ horizontal }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
					display: 'flex',
					flexDirection: horizontal ? 'row' : 'column',
					alignItems: horizontal ? 'center' : void 0,
					justifyItems: 'flex-start',
					gap: '5px',
					'.ss__list__options': {
						border: 'none',
						listStyle: 'none',
						padding: '0px',
						margin: '0px',
						display: 'flex',
						flexDirection: horizontal ? 'row' : 'column',
						alignItems: horizontal ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
					},
					'.ss__list__option': {
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						gap: '5px',
						'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
					},
					'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
					'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
					'.ss__list__option--selected': { fontWeight: 'bold' },
				});
			function List(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('list', globalTheme, defaultProps, properties),
					{
						titleText,
						onSelect,
						native,
						multiSelect,
						hideOptionLabels,
						hideOptionIcons,
						hideOptionCheckboxes,
						disabled,
						hideTitleText,
						options,
						requireSelection,
						disableStyles,
						className,
						treePath,
					} = props;
				let selected = props.selected;
				const subProps_checkbox = { native, ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props?.theme, treePath },
					subProps_icon = {
						className: 'ss__list__option__icon',
						size: '16px',
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
				selected && !Array.isArray(selected) && (selected = [selected]);
				const [selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || []),
					[originalSelected] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || []);
				try {
					if (selected) {
						const originalSelectedstr = JSON.stringify(originalSelected),
							selectedstr = JSON.stringify(selected),
							selectionstr = JSON.stringify(selection);
						originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
					}
				} catch (e) {}
				const lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, props.lang || {}),
					mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { options, selectedOptions: selection });
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
									'ss__list',
									{ 'ss__list--native': native, 'ss__list--disabled': disabled },
									className
								),
								children: [
									(titleText || lang?.title?.value) &&
										!hideTitleText &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('label', {
											className: 'ss__list__title',
											...mergedLang.title?.all,
											children: titleText,
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('ul', {
										className: 'ss__list__options',
										role: 'listbox',
										'aria-label': titleText,
										children: options.map((option) => {
											const selected = selection.some((select) => select.value == option.value);
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('li', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
													`ss__list__option ss__list__option--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_13__.p(
														option.value?.toString()
													)}`,
													{
														'ss__list__option--selected': selected,
														'ss__list__option--disabled': option?.disabled,
														'ss__list__option--unavailable': !1 === option?.available,
													}
												),
												ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_14__.i)(e),
												onClick: (e) =>
													!disabled &&
													!option?.disabled &&
													((e, option) => {
														let newArray;
														multiSelect
															? selection.find((select) => select.value === option.value)
																? ((newArray = [...selection]),
																  newArray.splice(
																		newArray.findIndex((select) => select.value === option.value),
																		1
																  ),
																  0 == newArray.length && requireSelection && (newArray = [option]))
																: (newArray = [...selection, option])
															: (newArray = !requireSelection && selection.find((select) => select.value === option.value) ? [] : [option]),
															onSelect && onSelect(e, option, newArray),
															setSelection(newArray);
													})(e, option),
												title: option.label,
												role: 'option',
												'aria-selected': selected,
												'aria-disabled': option.disabled || !1 === option?.available,
												children: [
													!hideOptionCheckboxes &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Checkbox__WEBPACK_IMPORTED_MODULE_15__.S, {
															...subProps_checkbox,
															checked: selected,
															disableA11y: !0,
														}),
													option.icon &&
														!hideOptionIcons &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
															...subProps_icon,
															...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
														}),
													!hideOptionLabels &&
														(option.label || !option.icon) &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('label', {
															className: 'ss__list__option__label',
															children: option.label || option.value,
														}),
												],
											});
										}),
									}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Molecules/PerPage/PerPage.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { F: () => PerPage });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Molecules/Select/Select.tsx'),
				_RadioList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/RadioList/RadioList.tsx'),
				_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
				PerPage = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { label: 'Per Page', type: 'dropdown', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('perPage', globalTheme, defaultProps, properties),
						{ pagination, type, controller, label, disableStyles, className, treePath } = props,
						store = pagination || controller?.store?.pagination,
						subProps_select = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_RadioList = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_List = {
							multiSelect: !1,
							hideOptionCheckboxes: !0,
							horizontal: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						selectedOption = store && store?.pageSizeOptions?.find((option) => option.value == store?.pageSize),
						defaultLang = { label: { value: label } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {});
					return store?.pageSize && 'object' == typeof store?.pageSizeOptions && store.pageSizeOptions?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: [
									'dropdown' == type?.toLowerCase() &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Select__WEBPACK_IMPORTED_MODULE_12__.l, {
											...styling,
											className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__per-page', 'ss__per-page__select', className),
											...subProps_select,
											label,
											options: store.pageSizeOptions,
											selected: selectedOption,
											onSelect: (e, option) => {
												store.setPageSize(+option.value);
											},
											lang: { buttonLabel: lang.label },
										}),
									'list' == type?.toLowerCase() &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_List__WEBPACK_IMPORTED_MODULE_13__.B, {
											...styling,
											className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__per-page', 'ss__per-page__list', className),
											...subProps_List,
											onSelect: (e, option) => {
												store.setPageSize(+option.value);
											},
											requireSelection: !0,
											options: store.pageSizeOptions,
											selected: store.pageSizeOption,
											titleText: label,
											lang: { title: lang.label },
										}),
									'radio' == type?.toLowerCase() &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_RadioList__WEBPACK_IMPORTED_MODULE_14__.q, {
											...styling,
											className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__per-page', 'ss__per-page__radioList', className),
											...subProps_RadioList,
											onSelect: (e, option) => {
												store.setPageSize(+option.value);
											},
											options: store.pageSizeOptions,
											selected: store.pageSizeOption,
											titleText: label,
											lang: { title: lang.label },
										}),
								],
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
							size,
							treePath,
						} = props,
						subProps_activeIcon = {
							name: 'active',
							className: 'ss__radio__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ size, color, disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_inactiveIcon = {
							name: 'inactive',
							className: 'ss__radio__icon',
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
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({ radio: {} }, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { disabled, checkedState });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__radio',
										'ss__radio--native',
										{ 'ss__radio--disabled': disabled },
										className
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
										className
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.i)(e)),
									...mergedLang.radio?.all,
									role: 'radio',
									'aria-checked': checkedState,
									'aria-disabled': disabled,
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
		'./components/src/components/Molecules/RadioList/RadioList.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { q: () => RadioList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				_Radio_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/Radio/Radio.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
					'& .ss__radio-list__options-wrapper': { border: 'none', listStyle: 'none', padding: '0px', margin: '0px' },
					'.ss__radio-list__title': { margin: '0px', padding: '5px' },
					'.ss__radio-list__option': {
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						padding: '5px',
						'& .ss__radio-list__option__label, .ss__radio-list__option__icon': { cursor: 'pointer', padding: '0px 0px 0px 5px' },
					},
					'&.ss__radio-list--disabled, .ss__radio-list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
					'.ss__radio-list__option--selected': { fontWeight: 'bold' },
				});
			function RadioList(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('radioList', globalTheme, defaultProps, properties),
					{
						titleText,
						onSelect,
						hideOptionRadios,
						hideOptionIcons,
						hideOptionLabels,
						hideTitleText,
						native,
						disabled,
						selected,
						options,
						disableStyles,
						className,
						treePath,
					} = props,
					subProps_Radio = {
						className: 'ss__radio-list__option__radio',
						native,
						disableA11y: !0,
						disabled,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					subProps_Icon = {
						className: 'ss__radio-list__option__icon',
						size: '16px',
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
					[selection, setSelection] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selected),
					[originalSelected] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selected);
				try {
					if (selected) {
						const originalSelectedstr = JSON.stringify(originalSelected),
							selectedstr = JSON.stringify(selected),
							selectionstr = JSON.stringify(selection);
						originalSelectedstr !== selectedstr && selectedstr !== selectionstr && setSelection(selected);
					}
				} catch (e) {}
				const lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, props.lang || {}),
					mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { options, selectedOptions: selection });
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__radio-list',
									{ 'ss__radio-list--native': native, 'ss__radio-list--disabled': disabled },
									className
								),
								children: [
									(titleText || lang?.title?.value) &&
										!hideTitleText &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h5', {
											className: 'ss__radio-list__title',
											...mergedLang.title?.all,
											children: titleText,
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('ul', {
										className: 'ss__radio-list__options-wrapper',
										role: 'listbox',
										'aria-label': titleText,
										children: options.map((option) => {
											const selected = selection && selection.value == option.value;
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('li', {
												className: `ss__radio-list__option ${selected ? 'ss__radio-list__option--selected' : ''} ${
													option.disabled ? 'ss__radio-list__option--disabled' : ''
												}`,
												ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.i)(e),
												onClick: (e) =>
													!disabled &&
													((e, option) => {
														onSelect && onSelect(e, option), setSelection(option);
													})(e, option),
												title: option.label,
												role: 'option',
												'aria-selected': selected,
												children: [
													!hideOptionRadios &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Radio_Radio__WEBPACK_IMPORTED_MODULE_14__.s, {
															...subProps_Radio,
															checked: selected,
															disableA11y: !0,
														}),
													option.icon &&
														!hideOptionIcons &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_15__.I, {
															...subProps_Icon,
															...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
														}),
													!hideOptionLabels &&
														(option.label || !option.icon) &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('label', {
															className: 'ss__radio-list__option__label',
															children: option.label || option.value,
														}),
												],
											});
										}),
									}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Molecules/Select/Select.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Select });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_5__);
			const defaultStyles = ({ color, backgroundColor, borderColor, theme, native }) => {
					const lightenedPrimary = new (color__WEBPACK_IMPORTED_MODULE_5___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({
								display: 'inline-flex',
								color,
								'&.ss__select--disabled': { opacity: 0.7 },
								'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
								'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
								'.ss__select__select': {
									position: 'relative',
									zIndex: '10000',
									backgroundColor: backgroundColor || '#fff',
									listStyle: 'none',
									padding: '0',
									marginTop: '-1px',
									border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
									'.ss__select__dropdown__button': { alignItems: 'center' },
									'.ss__select__select__option': {
										cursor: 'pointer',
										padding: '6px 8px',
										color: 'initial',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
										'&.ss__select__select__option--selected': { fontWeight: 'bold' },
										'&:hover': { backgroundColor: lightenedPrimary.hex() || '#f8f8f8' },
									},
								},
						  });
				},
				Select = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						defaultProps = {
							iconOpen: 'angle-down',
							iconClose: 'angle-up',
							separator: ': ',
							startOpen: !1,
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_8__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.v6)('select', globalTheme, defaultProps, properties),
						{
							backgroundColor,
							borderColor,
							color,
							clearSelection,
							disableClickOutside,
							disabled,
							hideLabel,
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
							treePath,
						} = props;
					let { options } = props;
					const subProps_dropdown = {
							className: 'ss__select__dropdown',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, disabled }),
							theme: props?.theme,
							treePath,
						},
						subProps_button = {
							className: 'ss__select__dropdown__button',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, disabled, color, backgroundColor, borderColor }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__select__dropdown__button__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles, color: iconColor || color, size: '12px' }),
							theme: props?.theme,
							treePath,
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
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Z)(props, defaultStyles),
						selectedOptions = options.filter((option) => selection?.value === option.value),
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
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { options, selectedOptions, label, open });
					return 'object' == typeof options && options?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
										'ss__select',
										{ 'ss__select--native': native },
										{ 'ss__select--disabled': disabled },
										className
									),
									children: native
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK, {
												children: [
													(label || lang.buttonLabel.value) &&
														!hideLabel &&
														!hideLabelOnSelection &&
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__select__label',
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('label', { ...mergedLang.buttonLabel?.all }),
																separator &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																		className: 'ss__select__label__separator',
																		children: separator,
																	}),
															],
														}),
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('select', {
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
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('option', {
																	className: 'ss__select__select__option',
																	selected: !0,
																	value: '',
																	children: clearSelection,
																}),
															options.map((option, index) =>
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('option', {
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
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_15__.m, {
												...subProps_dropdown,
												disableClickOutside,
												open,
												onToggle: (e, state) => setOpen((prev) => state ?? !prev),
												onClick: () => setOpen((prev) => !prev),
												disableA11y: !0,
												button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_16__.$, {
													...subProps_button,
													children: [
														(label || lang.buttonLabel.value) &&
															!hideLabelOnSelection &&
															!hideLabel &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
																className: 'ss__select__label',
																'aria-expanded': open,
																...mergedLang.buttonLabel.attributes,
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('label', { ...mergedLang.buttonLabel.value }),
																	separator &&
																		selection &&
																		(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																			className: 'ss__select__label__separator',
																			children: separator,
																		}),
																],
															}),
														selection &&
															!hideSelection &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)(
																_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FK,
																{
																	children: [
																		selection.icon &&
																			!hideOptionIcons &&
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__.I, {
																				...subProps_icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...('string' == typeof selection.icon ? { icon: selection.icon } : selection.icon),
																			}),
																		!hideOptionLabels &&
																			(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', {
																				className: 'ss__select__selection',
																				children: selection?.label,
																			}),
																	],
																}
															),
														!hideIcon &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__.I, {
																...subProps_icon,
																name: open ? 'open' : 'close',
																...(open
																	? { ...('string' == typeof iconClose ? { icon: iconClose } : iconClose) }
																	: { ...('string' == typeof iconOpen ? { icon: iconOpen } : iconOpen) }),
															}),
													],
												}),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('ul', {
													className: 'ss__select__select',
													role: 'listbox',
													'aria-label': 'string' == typeof label ? label : '',
													ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_18__.i)(e, -1, !0, () => setOpen(!1)),
													children: options.map((option) =>
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('li', {
															ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_18__.i)(e),
															'aria-disabled': option.disabled,
															title: option.label,
															className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__select__select__option', {
																'ss__select__select__option--selected': selection?.value === option.value,
															}),
															onClick: (e) => !disabled && makeSelection(e, option),
															role: 'option',
															'aria-selected': selection?.value === option.value,
															children: [
																option.icon &&
																	!hideOptionIcons &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_17__.I, {
																		...subProps_icon,
																		name: 'option',
																		className: 'ss__select__select__option__icon',
																		treePath: `${treePath} dropdown`,
																		...('string' == typeof option.icon ? { icon: option.icon } : option.icon),
																	}),
																!hideOptionLabels &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)('span', { children: option.label }),
															],
														})
													),
												}),
										  }),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
	},
]);
