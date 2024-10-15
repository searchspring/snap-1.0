'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8012],
	{
		'./components/src/components/Molecules/Grid/Grid.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { x: () => Grid });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx');
			const CSS = {
				Grid: ({ theme, columns, gapSize, disableOverflowAction }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							gap: gapSize,
							gridAutoRows: '1fr',
							'.ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
								margin: `0 ${gapSize} ${gapSize} 0`,
								'.ss__grid__option__label': { cursor: 'pointer' },
								[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
								'&.ss__grid__option--selected': { border: `2px solid ${theme?.variables?.colors?.primary || '#333'}` },
								'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
								'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
								'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: '50%',
									width: '90%',
									height: '1px',
									borderTop: '3px solid #eee',
									outline: '1px solid #ffff',
									transform: 'rotate(-45deg)',
								},
								'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						},
						'.ss__grid__show-more-wrapper': {
							'&:not(.ss__grid__option)': { margin: '8px' },
							'&:hover': { cursor: disableOverflowAction ? 'initial !important' : 'pointer !important' },
						},
					}),
			};
			function Grid(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('grid', globalTheme, { multiSelect: !1, columns: 4, gapSize: '8px' }, properties),
					{
						titleText,
						onSelect,
						hideLabels,
						disableOverflowAction,
						multiSelect,
						overflowButton,
						columns,
						rows,
						hideShowLess,
						overflowButtonInGrid,
						disabled,
						options,
						disableStyles,
						onOverflowButtonClick,
						className,
						style,
						styleScript,
						treePath,
					} = props,
					subProps_image = {
						className: 'ss__grid__image',
						...globalTheme?.components?.image,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					};
				let selected = props.selected;
				const styling = { 'ss-name': props.name },
					stylingProps = props;
				styleScript && !disableStyles
					? (styling.css = [styleScript(stylingProps), style])
					: disableStyles
					? style && (styling.css = [style])
					: (styling.css = [CSS.Grid(stylingProps), style]),
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
				const limit = rows && columns ? columns * rows : options.length,
					remainder = Math.max(0, options.length - (limit - (overflowButtonInGrid ? 1 : 0))),
					[limited, setLimited] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(!!remainder),
					OverflowButtonElem = () => {
						const showButton = !hideShowLess || limited,
							defaultLang = {
								showMoreText: { value: overflowButtonInGrid ? `+ ${remainder}` : 'Show More' },
								showLessText: { value: overflowButtonInGrid ? `- ${remainder}` : 'Show Less' },
							},
							lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
							mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { limited, remainder });
						return showButton && remainder > 0 && options.length !== limit
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									className: 'ss__grid__show-more-wrapper ' + (overflowButtonInGrid ? 'ss__grid__option' : ''),
									onClick: (e) => {
										!disableOverflowAction && setLimited(!limited), onOverflowButtonClick && onOverflowButtonClick(e, Boolean(limited), remainder);
									},
									...(limited ? mergedLang.showMoreText.attributes : mergedLang.showLessText.attributes),
									children: overflowButton
										? (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(overflowButton, { limited, remainder, treePath })
										: limited
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
												className: 'ss__grid__show-more',
												...mergedLang.showMoreText.value,
										  })
										: remainder
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
												className: 'ss__grid__show-less',
												...mergedLang.showLessText.value,
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					};
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__grid', disabled ? 'ss__grid--disabled' : '', className),
								children: [
									titleText &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h5', { className: 'ss__grid__title', children: titleText }),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__grid__options',
										children: [
											options.map((option, idx) => {
												const selected = selection.some((select) => select.value == option.value);
												if (!limited || options.length == limit || idx < limit - (overflowButtonInGrid ? 1 : 0))
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
															`ss__grid__option ss__grid__option-value--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_12__.p(
																option.value.toString()
															)}`,
															{
																'ss__grid__option--selected': selected,
																'ss__grid__option--disabled': option?.disabled,
																'ss__grid__option--unavailable': !1 === option?.available,
															}
														),
														style: { background: option.background ? option.background : option.backgroundImageUrl ? void 0 : option.value },
														onClick: (e) =>
															!disabled &&
															!option?.disabled &&
															((e, option) => {
																if (multiSelect) {
																	let newArray;
																	selection.find((select) => select.value === option.value)
																		? ((newArray = [...selection]),
																		  newArray.splice(
																				newArray.findIndex((select) => select.value === option.value),
																				1
																		  ))
																		: (newArray = [...selection, option]),
																		onSelect && onSelect(e, option, newArray),
																		setSelection(newArray);
																} else onSelect && onSelect(e, option, [option]), setSelection([option]);
															})(e, option),
														ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.i)(e),
														title: option.label || option.value.toString(),
														role: 'option',
														'aria-selected': selected,
														children: [
															!option.background && option.backgroundImageUrl
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_14__._, {
																		...subProps_image,
																		src: option.backgroundImageUrl,
																		alt: option.label || option.value.toString(),
																  })
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
															hideLabels
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('label', {
																		className: 'ss__grid__option__label',
																		children: option.label || option.value,
																  }),
														],
													});
											}),
											overflowButtonInGrid
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(OverflowButtonElem, {})
												: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
										],
									}),
									overflowButtonInGrid
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(OverflowButtonElem, {}),
								],
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Molecules/Swatches/Swatches.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Swatches });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/Carousel/Carousel.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/Grid/Grid.tsx'),
				_Atoms_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js');
			const CSS = {
				Swatches: ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						marginTop: '10px',
						'.ss__swatches__carousel__swatch': {
							boxSizing: 'content-box',
							cursor: 'pointer',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
							aspectRatio: '1/1',
							margin: 'auto',
							flexDirection: 'column',
							'&.ss__swatches__carousel__swatch--selected': { border: `2px solid ${theme?.variables?.colors?.primary || '#333'}` },
							'&.ss__swatches__carousel__swatch--disabled:before, &.ss__swatches__carousel__swatch--unavailable:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: '50%',
								width: '90%',
								height: '1px',
								borderTop: '3px solid #eee',
								outline: '1px solid #ffff',
								transform: 'rotate(-45deg)',
							},
							'&.ss__swatches__carousel__swatch--disabled': { position: 'relative', cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'&.ss__swatches__carousel__swatch--unavailable': { cursor: 'pointer', opacity: 0.5 },
						},
					}),
			};
			function Swatches(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
					theme = { ...globalTheme, ...properties.theme };
				let props = {
					type: 'carousel',
					hideLabels: !0,
					...globalTheme?.components?.swatches,
					...properties,
					...properties.theme?.components?.swatches,
				};
				const breakpoints =
						props.breakpoints ||
						('carousel' == props.type
							? {
									0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
									768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
									1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
							  }
							: {}),
					displaySettings = (0, _hooks__WEBPACK_IMPORTED_MODULE_6__.X)(breakpoints);
				if (displaySettings && Object.keys(displaySettings).length) {
					const theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
						arrayMerge: (destinationArray, sourceArray) => sourceArray,
					});
					props = { ...props, ...displaySettings, theme };
				}
				const { onSelect, disabled, options, hideLabels, disableStyles, className, style, type, carousel, grid, treePath } = props,
					subProps_carousel = {
						className: 'ss__swatches__carousel',
						loop: !1,
						...carousel,
						...globalTheme?.components?.carousel,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ breakpoints, disableStyles }),
						theme: props?.theme,
						treePath,
					},
					subProps_grid = {
						className: 'ss__swatches__grid',
						hideLabels,
						overflowButtonInGrid: !0,
						disableOverflowAction: !0,
						rows: 1,
						columns: 6,
						...grid,
						...globalTheme?.components?.grid,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					subProps_image = {
						className: 'ss__swatches__image',
						...globalTheme?.components?.image,
						...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
						theme: props?.theme,
						treePath,
					},
					selected = props.selected,
					styling = { 'ss-name': props.name };
				disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS.Swatches({ theme }), style]);
				const [selection, setSelection] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(selected || void 0),
					makeSelection = (e, option) => {
						onSelect && onSelect(e, option), setSelection(option);
					};
				return 'object' == typeof options && options?.length
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__swatches', className),
								children:
									'carousel' == type
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Carousel__WEBPACK_IMPORTED_MODULE_10__.FN, {
												...subProps_carousel,
												children: options.map((option) => {
													const label = option.label,
														selected = selection?.value == option.value;
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
															`ss__swatches__carousel__swatch ss__swatches__carousel__swatch--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_11__.p(
																option.value?.toString()
															)}`,
															{
																'ss__swatches__carousel__swatch--selected': selected,
																'ss__swatches__carousel__swatch--disabled': option?.disabled,
																'ss__swatches__carousel__swatch--unavailable': !1 === option?.available,
															}
														),
														title: label,
														style: { background: option.background ? option.background : option.backgroundImageUrl ? '' : option.value },
														onClick: (e) => !disabled && !option?.disabled && makeSelection(e, option),
														ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.i)(e),
														role: 'option',
														'aria-selected': selected,
														children: [
															!option.background && option.backgroundImageUrl
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Atoms_Image__WEBPACK_IMPORTED_MODULE_13__._, {
																		...subProps_image,
																		src: option.backgroundImageUrl,
																		alt: option.label || option.value?.toString(),
																  })
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {}),
															!hideLabels &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
																	className: 'ss__swatches__carousel__swatch__value',
																	children: label || option.value,
																}),
														],
													});
												}),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Grid__WEBPACK_IMPORTED_MODULE_14__.x, {
												...subProps_grid,
												options,
												onSelect: (e, option) => {
													!disabled && makeSelection(e, option);
												},
												selected,
										  }),
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { m: () => VariantSelection });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/List/List.tsx'),
				_Swatches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/components/Molecules/Swatches/Swatches.tsx'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const CSS_variantSelection = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						'.ss__variant-selection__dropdown': {
							'.ss__dropdown__button': {
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								'.ss__dropdown__button-wrapper': { display: 'flex', gap: '5px' },
							},
							'.ss__dropdown__content': {
								minWidth: 'auto',
								left: '0',
								right: '0',
								'.ss__variant-selection__option': { cursor: 'pointer', position: 'relative' },
								'.ss__variant-selection__option:hover': { fontWeight: 'bold' },
								'.ss__variant-selection__option--selected': { fontWeight: 'bold' },
								'.ss__variant-selection__option--disabled': { pointerEvents: 'none', cursor: 'initial' },
								'.ss__variant-selection__option--disabled, .ss__variant-selection__option--unavailable': {
									textDecoration: 'line-through',
									opacity: 0.5,
								},
							},
						},
					}),
				VariantSelection = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = {
							type: 'dropdown',
							...globalTheme?.components?.variantSelection,
							...properties,
							...properties.theme?.components?.variantSelection,
						},
						{ type, selection, disableStyles, className, style, treePath } = props,
						subProps_dropdown = {
							className: 'ss__variant-selection__dropdown',
							...globalTheme?.components?.dropdown,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__variant-selection__icon',
							size: '12px',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_list = {
							titleText: selection.field,
							className: 'ss__variant-selection__list',
							multiSelect: !1,
							hideOptionCheckboxes: !0,
							onSelect: (e, option) => selection.select(option.value),
							selected: selection.selected,
							...globalTheme?.components?.list,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_swatches = {
							className: 'ss__variant-selection__swatches',
							onSelect: (e, option) => selection.select(option.value),
							selected: selection.selected,
							...globalTheme?.components?.swatches,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name };
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_variantSelection(), style]),
						selection.values.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
											'ss__variant-selection',
											`ss__variant-selection--${type}`,
											`ss__variant-selection--${selection.field}`,
											className
										),
										children: (() => {
											switch (type) {
												case 'dropdown':
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_9__.m, {
															button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)((props) => {
																const { open } = props;
																return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
																	children: [
																		(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('span', {
																					className: 'ss__dropdown__button-wrapper__label',
																					children: selection.label,
																				}),
																				selection.selected
																					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', selection.selected.value, ')'],
																					  })
																					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(
																							preact__WEBPACK_IMPORTED_MODULE_0__.FK,
																							{}
																					  ),
																			],
																		}),
																		(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_8__.I, {
																			icon: open ? 'angle-up' : 'angle-down',
																			...subProps_icon,
																		}),
																	],
																});
															}, {}),
															...subProps_dropdown,
															children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
																className: 'ss__variant-selection__options',
																children: selection.values.map((val) => {
																	const selected = selection.selected?.value == val.value;
																	return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
																		className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__variant-selection__option', {
																			'ss__variant-selection__option--selected': selected,
																			'ss__variant-selection__option--disabled': val.disabled,
																			'ss__variant-selection__option--unavailable': !1 === val.available,
																		}),
																		onClick: () => !val.disabled && selection.select(val.value),
																		children: val.label,
																	});
																}),
															}),
														}),
													});
												case 'list':
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_List__WEBPACK_IMPORTED_MODULE_10__.B, {
															...subProps_list,
															options: selection.values,
														}),
													});
												case 'swatches':
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Swatches__WEBPACK_IMPORTED_MODULE_11__.l, {
															...subProps_swatches,
															options: selection.values,
														}),
													});
											}
										})(),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
	},
]);
