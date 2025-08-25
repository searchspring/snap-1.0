'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8902],
	{
		'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => FacetSlider });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			function _extends() {
				return (
					(_extends =
						Object.assign ||
						function (target) {
							for (var i = 1; i < arguments.length; i++) {
								var source = arguments[i];
								for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
							}
							return target;
						}),
					_extends.apply(this, arguments)
				);
			}
			function _objectWithoutPropertiesLoose(source, excluded) {
				if (null == source) return {};
				var key,
					i,
					target = {},
					sourceKeys = Object.keys(source);
				for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
				return target;
			}
			var sortNumList = function sortNumList(arr) {
					return [].concat(arr).sort(function (a, b) {
						return Number(a) - Number(b);
					});
				},
				linearInterpolator = {
					getPercentageForValue: function getPercentageForValue(val, min, max) {
						return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
					},
					getValueForClientX: function getValueForClientX(clientX, trackDims, min, max) {
						return (max - min) * ((clientX - trackDims.left) / trackDims.width) + min;
					},
				};
			function useRanger(_ref) {
				var _ref$interpolator = _ref.interpolator,
					interpolator = void 0 === _ref$interpolator ? linearInterpolator : _ref$interpolator,
					_ref$tickSize = _ref.tickSize,
					tickSize = void 0 === _ref$tickSize ? 10 : _ref$tickSize,
					values = _ref.values,
					min = _ref.min,
					max = _ref.max,
					controlledTicks = _ref.ticks,
					steps = _ref.steps,
					onChange = _ref.onChange,
					onDrag = _ref.onDrag,
					stepSize = _ref.stepSize,
					_React$useState = compat_module.default.useState(null),
					activeHandleIndex = _React$useState[0],
					setActiveHandleIndex = _React$useState[1],
					_React$useState2 = compat_module.default.useState(),
					tempValues = _React$useState2[0],
					setTempValues = _React$useState2[1],
					getLatest = (function useGetLatest(val) {
						var ref = compat_module.default.useRef(val);
						return (
							(ref.current = val),
							compat_module.default.useCallback(function () {
								return ref.current;
							}, [])
						);
					})({ activeHandleIndex, onChange, onDrag, values, tempValues }),
					trackElRef = compat_module.default.useRef(),
					getValueForClientX = compat_module.default.useCallback(
						function (clientX) {
							var trackDims = (function getBoundingClientRect(element) {
								var rect = element.getBoundingClientRect();
								return { left: Math.ceil(rect.left), width: Math.ceil(rect.width) };
							})(trackElRef.current);
							return interpolator.getValueForClientX(clientX, trackDims, min, max);
						},
						[interpolator, max, min]
					),
					getNextStep = compat_module.default.useCallback(
						function (val, direction) {
							if (steps) {
								var nextIndex = steps.indexOf(val) + direction;
								return nextIndex >= 0 && nextIndex < steps.length ? steps[nextIndex] : val;
							}
							var nextVal = val + stepSize * direction;
							return nextVal >= min && nextVal <= max ? nextVal : val;
						},
						[max, min, stepSize, steps]
					),
					roundToStep = compat_module.default.useCallback(
						function (val) {
							var left = min,
								right = max;
							if (steps)
								steps.forEach(function (step) {
									step <= val && step > left && (left = step), step >= val && step < right && (right = step);
								});
							else {
								for (0; left < val && left + stepSize < val; ) left += stepSize;
								right = Math.min(left + stepSize, max);
							}
							return val - left < right - val ? left : right;
						},
						[max, min, stepSize, steps]
					),
					handleDrag = compat_module.default.useCallback(
						function (e) {
							var _getLatest = getLatest(),
								activeHandleIndex = _getLatest.activeHandleIndex,
								onDrag = _getLatest.onDrag,
								clientX = 'touchmove' === e.type ? e.changedTouches[0].clientX : e.clientX,
								newValue = getValueForClientX(clientX),
								newRoundedValue = roundToStep(newValue),
								newValues = [].concat(values.slice(0, activeHandleIndex), [newRoundedValue], values.slice(activeHandleIndex + 1));
							onDrag ? onDrag(newValues) : setTempValues(newValues);
						},
						[getLatest, getValueForClientX, roundToStep, values]
					),
					handleKeyDown = compat_module.default.useCallback(
						function (e, i) {
							var _getLatest2 = getLatest(),
								values = _getLatest2.values,
								_getLatest2$onChange = _getLatest2.onChange,
								onChange = void 0 === _getLatest2$onChange ? function () {} : _getLatest2$onChange;
							if (37 === e.keyCode || 39 === e.keyCode) {
								setActiveHandleIndex(i);
								var direction = 37 === e.keyCode ? -1 : 1,
									newValue = getNextStep(values[i], direction),
									newValues = [].concat(values.slice(0, i), [newValue], values.slice(i + 1));
								onChange(sortNumList(newValues));
							}
						},
						[getLatest, getNextStep]
					),
					handlePress = compat_module.default.useCallback(
						function (e, i) {
							setActiveHandleIndex(i);
							var handleRelease = function handleRelease(e) {
								var _getLatest3 = getLatest(),
									tempValues = _getLatest3.tempValues,
									values = _getLatest3.values,
									_getLatest3$onChange = _getLatest3.onChange,
									onChange = void 0 === _getLatest3$onChange ? function () {} : _getLatest3$onChange,
									_getLatest3$onDrag = _getLatest3.onDrag,
									onDrag = void 0 === _getLatest3$onDrag ? function () {} : _getLatest3$onDrag;
								document.removeEventListener('mousemove', handleDrag),
									document.removeEventListener('touchmove', handleDrag),
									document.removeEventListener('mouseup', handleRelease),
									document.removeEventListener('touchend', handleRelease);
								var sortedValues = sortNumList(tempValues || values);
								onChange(sortedValues), onDrag(sortedValues), setActiveHandleIndex(null), setTempValues();
							};
							document.addEventListener('mousemove', handleDrag),
								document.addEventListener('touchmove', handleDrag),
								document.addEventListener('mouseup', handleRelease),
								document.addEventListener('touchend', handleRelease);
						},
						[getLatest, handleDrag]
					),
					getPercentageForValue = compat_module.default.useCallback(
						function (val) {
							return interpolator.getPercentageForValue(val, min, max);
						},
						[interpolator, max, min]
					),
					ticks = compat_module.default.useMemo(
						function () {
							var ticks = controlledTicks || steps;
							if (!ticks) {
								for (ticks = [min]; ticks[ticks.length - 1] < max - tickSize; ) ticks.push(ticks[ticks.length - 1] + tickSize);
								ticks.push(max);
							}
							return ticks.map(function (value, i) {
								return {
									value,
									getTickProps: function getTickProps(_temp) {
										var _ref2 = void 0 === _temp ? {} : _temp,
											_ref2$key = _ref2.key,
											key = void 0 === _ref2$key ? i : _ref2$key,
											_ref2$style = _ref2.style,
											style = void 0 === _ref2$style ? {} : _ref2$style,
											rest = _objectWithoutPropertiesLoose(_ref2, ['key', 'style']);
										return _extends(
											{
												key,
												style: _extends(
													{ position: 'absolute', width: 0, left: getPercentageForValue(value) + '%', transform: 'translateX(-50%)' },
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[controlledTicks, getPercentageForValue, max, min, steps, tickSize]
					),
					segments = compat_module.default.useMemo(
						function () {
							var sortedValues = sortNumList(tempValues || values);
							return [].concat(sortedValues, [max]).map(function (value, i) {
								return {
									value,
									getSegmentProps: function getSegmentProps(_temp2) {
										var _ref3 = void 0 === _temp2 ? {} : _temp2,
											_ref3$key = _ref3.key,
											key = void 0 === _ref3$key ? i : _ref3$key,
											_ref3$style = _ref3.style,
											style = void 0 === _ref3$style ? {} : _ref3$style,
											rest = _objectWithoutPropertiesLoose(_ref3, ['key', 'style']),
											left = getPercentageForValue(sortedValues[i - 1] ? sortedValues[i - 1] : min);
										return _extends(
											{ key, style: _extends({ position: 'absolute', left: left + '%', width: getPercentageForValue(value) - left + '%' }, style) },
											rest
										);
									},
								};
							});
						},
						[getPercentageForValue, max, min, tempValues, values]
					),
					handles = compat_module.default.useMemo(
						function () {
							return (tempValues || values).map(function (value, i) {
								return {
									value,
									active: i === activeHandleIndex,
									getHandleProps: function getHandleProps(_temp3) {
										var _ref4 = void 0 === _temp3 ? {} : _temp3,
											_ref4$key = _ref4.key,
											key = void 0 === _ref4$key ? i : _ref4$key,
											_onKeyDown = (_ref4.ref, _ref4.innerRef, _ref4.onKeyDown),
											_onMouseDown = _ref4.onMouseDown,
											_onTouchStart = _ref4.onTouchStart,
											_ref4$style = _ref4.style,
											style = void 0 === _ref4$style ? {} : _ref4$style,
											rest = _objectWithoutPropertiesLoose(_ref4, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
										return _extends(
											{
												key,
												onKeyDown: function onKeyDown(e) {
													e.persist(), handleKeyDown(e, i), _onKeyDown && _onKeyDown(e);
												},
												onMouseDown: function onMouseDown(e) {
													e.persist(), handlePress(e, i), _onMouseDown && _onMouseDown(e);
												},
												onTouchStart: function onTouchStart(e) {
													e.persist(), handlePress(e, i), _onTouchStart && _onTouchStart(e);
												},
												role: 'slider',
												'aria-valuemin': min,
												'aria-valuemax': max,
												'aria-valuenow': value,
												style: _extends(
													{
														position: 'absolute',
														top: '50%',
														left: getPercentageForValue(value) + '%',
														zIndex: i === activeHandleIndex ? '1' : '0',
														transform: 'translate(-50%, -50%)',
													},
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[activeHandleIndex, getPercentageForValue, handleKeyDown, handlePress, min, max, tempValues, values]
					);
				return {
					activeHandleIndex,
					getTrackProps: function getTrackProps(_temp4) {
						var _ref5 = void 0 === _temp4 ? {} : _temp4,
							_ref5$style = _ref5.style,
							style = void 0 === _ref5$style ? {} : _ref5$style,
							_ref6 = _ref5.ref,
							rest = _objectWithoutPropertiesLoose(_ref5, ['style', 'ref']);
						return _extends(
							{
								ref: function ref(el) {
									(trackElRef.current = el), _ref6 && ('function' == typeof _ref6 ? _ref6(el) : (_ref6.current = el));
								},
								style: _extends({ position: 'relative', userSelect: 'none' }, style),
							},
							rest
						);
					},
					ticks,
					segments,
					handles,
				};
			}
			var emotion_element_5486c51c_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				treePath = __webpack_require__('./components/src/providers/treePath.tsx'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				mergeStyles = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			function str_repeat(i, m) {
				for (var o = []; m > 0; o[--m] = i);
				return o.join('');
			}
			function sprintf(...args) {
				for (var a, m, p, c, x, i = 0, f = args[i++], o = []; f; ) {
					if ((m = /^[^\x25]+/.exec(f))) o.push(m[0]);
					else if ((m = /^\x25{2}/.exec(f))) o.push('%');
					else {
						if (!(m = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(f))) throw 'Huh ?!';
						if (null == (a = args[m[1] || i++]) || null == a) throw 'Too few arguments.';
						if (/[^s]/.test(m[7]) && 'number' != typeof a) throw 'Expecting number but found ' + typeof a;
						switch (m[7]) {
							case 'b':
								a = a.toString(2);
								break;
							case 'c':
								a = String.fromCharCode(a);
								break;
							case 'd':
								a = parseInt(a);
								break;
							case 'e':
								a = m[6] ? a.toExponential(m[6]) : a.toExponential();
								break;
							case 'f':
								a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a);
								break;
							case 'o':
								a = a.toString(8);
								break;
							case 's':
								a = (a = String(a)) && m[6] ? a.substring(0, m[6]) : a;
								break;
							case 'u':
								a = Math.abs(a);
								break;
							case 'x':
								a = a.toString(16);
								break;
							case 'X':
								a = a.toString(16).toUpperCase();
						}
						(a = /[def]/.test(m[7]) && m[2] && a > 0 ? '+' + a : a),
							(c = m[3] ? ('0' == m[3] ? '0' : m[3].charAt(1)) : ' '),
							(x = m[5] - String(a).length),
							(p = m[5] ? str_repeat(c, x) : ''),
							o.push(m[4] ? a + p : p + a);
					}
					f = f.substring(m[0].length);
				}
				return o.join('');
			}
			var useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const defaultStyles = ({
					railColor,
					trackColor,
					handleColor,
					valueTextColor,
					handleDraggingColor,
					showTicks,
					stickyHandleLabel,
					tickTextColor,
					theme,
				}) =>
					(0, emotion_react_browser_esm.AH)({
						display: 'flex',
						flexDirection: 'column',
						marginTop: '5px',
						marginBottom: showTicks && stickyHandleLabel ? '20px' : showTicks || stickyHandleLabel ? '10px' : '5px',
						'& .ss__facet-slider__slider': {
							position: 'relative',
							display: 'inline-block',
							height: '8px',
							width: 'calc(100% - 2rem)',
							margin: stickyHandleLabel ? '1rem' : '0 1rem',
							top: '10px',
						},
						'& .ss__facet-slider__tick': {
							'&:before': {
								content: "''",
								position: 'absolute',
								left: '0',
								background: 'rgba(0, 0, 0, 0.2)',
								height: '5px',
								width: '2px',
								transform: 'translate(-50%, 0.7rem)',
							},
							'& .ss__facet-slider__tick__label': {
								position: 'absolute',
								fontSize: '0.6rem',
								color: tickTextColor,
								top: '100%',
								transform: 'translate(-50%, 1.2rem)',
								whiteSpace: 'nowrap',
							},
						},
						'& .ss__facet-slider__rail': { background: railColor || theme?.variables?.colors?.primary || '#333', height: '100%' },
						'& .ss__facet-slider__segment': { background: trackColor || theme?.variables?.colors?.secondary || '#ccc', height: '100%' },
						'& .ss__facet-slider__handles': {
							textAlign: 'center',
							'& button': {
								'& .ss__facet-slider__handle': {
									background: handleColor || theme?.variables?.colors?.primary || '#333',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '1.6rem',
									height: '1.6rem',
									borderRadius: '100%',
									fontSize: '0.7rem',
									whiteSpace: 'nowrap',
									color: valueTextColor || 'initial',
									fontWeight: 'normal',
									transform: 'translateY(0) scale(0.9)',
									transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
									position: 'relative',
									cursor: 'pointer',
									'&:after': {
										backgroundColor: '#ffffff',
										width: '30%',
										height: '30%',
										top: '0',
										bottom: '0',
										left: '0',
										content: '""',
										position: 'absolute',
										right: '0',
										borderRadius: '12px',
										margin: 'auto',
										cursor: 'pointer',
									},
									'&.ss__facet-slider__handle--active': {
										background: handleDraggingColor || handleColor || theme?.variables?.colors?.primary || '#000',
										'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
									},
									'& label.ss__facet-slider__handle__label': {
										display: 'inline-block',
										marginTop: showTicks && !stickyHandleLabel ? '35px' : '20px',
										'&.ss__facet-slider__handle__label--pinleft': { left: '0px' },
										'&.ss__facet-slider__handle__label--pinright': { right: '0px' },
										'&.ss__facet-slider__handle__label--sticky': {
											position: 'absolute',
											top: '-20px',
											fontFamily: 'Roboto, Helvetica, Arial',
											fontSize: '14px',
											marginTop: '0px',
										},
									},
								},
							},
						},
						'& .ss__facet-slider__labels': {
							textAlign: 'center',
							marginTop: showTicks && !stickyHandleLabel ? '40px' : '20px',
							color: valueTextColor,
							'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
						},
					}),
				FacetSlider = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						globalTreePath = (0, treePath.LU)(),
						defaultProps = { tickSize: properties.facet?.step ? 10 * properties.facet?.step : 20, treePath: globalTreePath },
						props = (0, mergeProps.v6)('facetSlider', globalTheme, defaultProps, properties),
						{ showTicks, facet, stickyHandleLabel, onChange, onDrag, className, internalClassName } = props;
					let { tickSize } = props;
					tickSize =
						isNaN(Number(tickSize)) || Number(tickSize) <= 0 ? (properties.facet?.step ? 10 * properties.facet?.step : 20) : Number(tickSize);
					const [values, setValues] = (0, hooks_module.J0)([facet.active?.low, facet.active?.high]),
						[active, setActive] = (0, hooks_module.J0)([facet.active?.low, facet.active?.high]);
					(((facet.active?.low || 0 === facet.active?.low) && facet.active?.high && values[0] != facet.active?.low) ||
						values[1] != facet.active?.high) &&
						(setActive([facet.active?.low, facet.active?.high]), setValues([facet.active?.low, facet.active?.high]));
					const { getTrackProps, ticks, segments, handles } = useRanger({
							values: active,
							onChange: (val) => {
								setActive(val),
									facet?.services?.urlManager &&
										(val[0] == facet.range.low && val[1] == facet.range.high
											? facet.services.urlManager.remove('page').remove(`filter.${facet.field}`).go()
											: facet.services.urlManager.remove('page').set(`filter.${facet.field}`, { low: val[0], high: val[1] }).go()),
									onChange && onChange(val);
							},
							onDrag: (val) => {
								setActive(val), onDrag && onDrag(val);
							},
							min: facet.range?.low,
							max: facet.range?.high,
							stepSize: facet.step,
							tickSize,
						}),
						styling = (0, mergeStyles.Z)(props, defaultStyles);
					return facet.range && facet.active && facet.step
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: classnames_default()('ss__facet-slider', className, internalClassName),
									...getTrackProps(),
									...styling,
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
											className: 'ss__facet-slider__slider',
											children: [
												showTicks &&
													ticks.map(({ value, getTickProps }) =>
														(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
															className: 'ss__facet-slider__tick',
															...getTickProps(),
															children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																className: 'ss__facet-slider__tick__label',
																children: value,
															}),
														})
													),
												segments.map(({ getSegmentProps }, idx) =>
													(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
														className: '' + (1 === idx ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'),
														...getSegmentProps(),
													})
												),
												(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
													className: 'ss__facet-slider__handles',
													children: handles.map(({ value, active, getHandleProps }, idx) => {
														const defaultLang = {
																sliderHandle: {
																	attributes: {
																		'aria-label': `${facet.label} button, current value ${value}, ${
																			facet.range?.low ? `min value ${facet.range?.low},` : ''
																		} ${facet.range?.high ? `max value ${facet.range?.high}` : ''}`,
																	},
																},
															},
															lang = cjs_default()(defaultLang, props.lang || {}),
															mergedLang = (0, useLang.u)(lang, { facet, value });
														return (0, emotion_react_jsx_runtime_browser_esm.Y)('button', {
															type: 'button',
															...getHandleProps({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
															...mergedLang.sliderHandle?.all,
															ref: (e) => (0, useA11y.iy)(e),
															children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																className: classnames_default()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': active }),
																children:
																	stickyHandleLabel &&
																	(0, emotion_react_jsx_runtime_browser_esm.Y)('label', {
																		className: classnames_default()(
																			'ss__facet-slider__handle__label',
																			'ss__facet-slider__handle__label--sticky',
																			`ss__facet-slider__handle__label--${idx}`,
																			{ 'ss__facet-slider__handle__label--pinleft': 0 == idx && value == facet?.range?.low },
																			{ 'ss__facet-slider__handle__label--pinright': 1 == idx && value == facet?.range?.high }
																		),
																		children: sprintf(facet.formatValue, value),
																	}),
															}),
														});
													}),
												}),
											],
										}),
										!stickyHandleLabel &&
											(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
												className: 'ss__facet-slider__labels',
												children: handles.map(({ value }, idx) =>
													(0, emotion_react_jsx_runtime_browser_esm.Y)('label', {
														className: classnames_default()('ss__facet-slider__label', `ss__facet-slider__label--${idx}`),
														children: sprintf(facet.formatValue, value),
													})
												),
											}),
									],
								}),
						  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				});
		},
	},
]);
