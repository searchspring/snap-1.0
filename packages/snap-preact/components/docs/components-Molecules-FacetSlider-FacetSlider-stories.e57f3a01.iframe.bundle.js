/*! For license information please see components-Molecules-FacetSlider-FacetSlider-stories.e57f3a01.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[5019],
	{
		'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Price: () => Price,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetSlider_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetSlider = __webpack_require__('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const sliderFacetMock = {
					field: 'price',
					label: 'Price',
					type: 'range',
					display: 'slider',
					filtered: !1,
					collapsed: !1,
					range: { low: 0, high: 120 },
					active: { low: 0, high: 120 },
					step: 1,
					formatValue: '$%01.2f',
				},
				FacetSlider_stories = {
					title: 'Molecules/FacetSlider',
					component: FacetSlider.l,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Facet Slider\n\nRenders a slider to be used with any slider facet. Built using [react-ranger](https://github.com/tannerlinsley/react-ranger).\n\n## Usage\n\n### facet\nThe required `facet` prop specifies a reference to a facet within the facets store array. The facet must be a range facet (`display` type of `'slider'`).\n\n```jsx\n<FacetSlider facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} />\n```\n\n### showTicks\nThe `showTicks` prop will render reference ticks below the slider track.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tshowTicks={true}\n/>\n```\n\n### tickSize\nThe `tickSize` prop specifies the unit number between ticks. Must be used with `showTicks` prop.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tshowTicks={true}\n\ttickSize={20}\n/>\n```\n\n### tickTextColor\nThe `tickTextColor` prop specifies ticks text color. Must be used with `showTicks` prop.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tshowTicks={true}\n\ttickTextColor={'#cccccc'}\n/>\n```\n\n### handleColor\nThe `handleColor` prop specifies the handle color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\thandleColor={'#0000ff'}\n/>\n```\n\n### stickyHandleLabel\nThe `stickyHandleLabel` prop specifies if the handle value text should display above each handle.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tstickyHandleLabel={true}\n/>\n```\n\n### handleDraggingColor\nThe `handleDraggingColor` prop specifies the handle color while dragging.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\thandleDraggingColor={'0000ff'}\n/>\n```\n\n### valueTextColor\nThe `valueTextColor` prop specifies the value text color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tvalueTextColor={'#222222'}\n/>\n```\n\n### trackColor\nThe `trackColor` prop specifies the slider track (background) color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\ttrackColor={'#cccccc'}\n/>\n```\n\n### railColor\nThe `railColor` prop specifies the slider rail (foreground) color.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\trailColor={'#0000ff'}\n/>\n```\n\n### Events\n\n#### onChange\nThe `onChange` prop allows for a custom callback function for when a slider handle has been changed.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tonChange={(values)=>{ console.log(`low: ${values[0]} high: ${values[1]}`) }}\n/>\n```\n\n#### onDrag\nThe `onDrag` prop allows for a custom callback function for when a slider handle is being dragged.\n\n```jsx\n<FacetSlider \n\tfacet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} \n\tonDrag={(values)=>{ console.log(`low: ${values[0]} high: ${values[1]}`) }}\n/>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '300px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						facet: {
							description: 'Facet store reference',
							type: { required: !0 },
							table: { type: { summary: 'facet store object' } },
							control: { type: 'none' },
						},
						showTicks: {
							description: 'enables/disables ticks',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						tickSize: {
							defaultValue: 20,
							description: 'distance between ticks',
							table: { type: { summary: 'number' }, defaultValue: { summary: 20 } },
							control: { type: 'number' },
						},
						tickTextColor: { description: 'ticks color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						trackColor: { description: 'Slider track color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						railColor: { description: 'Slider rail Color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						valueTextColor: { description: 'Slider value Text Color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						handleColor: { description: 'Slider handle color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						stickyHandleLabel: {
							description: 'enables/disables sticky handle labels',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						handleDraggingColor: {
							description: 'Slider handle color when dragging',
							table: { type: { summary: 'string' } },
							control: { type: 'color' },
						},
						onDrag: {
							description: 'Slider onDrag event handler - fires as the slider is dragged (should not be used to trigger searches)',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onDrag',
						},
						onChange: {
							description: 'Slider onChange event handler - fires after touchEnd (used to trigger search)',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onChange',
						},
						...componentArgs.F,
					},
				},
				Price = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetSlider.l, { ...args, facet: sliderFacetMock });
			Price.parameters = {
				...Price.parameters,
				docs: {
					...Price.parameters?.docs,
					source: {
						originalSource: '(args: FacetSliderProps) => <FacetSlider {...args} facet={(sliderFacetMock as RangeFacet)} />',
						...Price.parameters?.docs?.source,
					},
				},
			};
			const __namedExportsOrder = ['Price'];
		},
		'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { l: () => FacetSlider });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				react_ranger = __webpack_require__('../../node_modules/react-ranger/dist/react-ranger.mjs'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts');
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
			const CSS_facetSlider = ({
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
				FacetSlider = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = { tickSize: properties.facet?.step ? 10 * properties.facet?.step : 20 },
						props = (0, mergeProps.v6)('facetSlider', globalTheme, defaultProps, properties),
						{ showTicks, facet, stickyHandleLabel, onChange, onDrag, disableStyles, className, style, styleScript } = props;
					let { tickSize } = props;
					tickSize =
						isNaN(Number(tickSize)) || Number(tickSize) <= 0 ? (properties.facet?.step ? 10 * properties.facet?.step : 20) : Number(tickSize);
					const [values, setValues] = (0, hooks_module.J0)([facet.active?.low, facet.active?.high]),
						[active, setActive] = (0, hooks_module.J0)([facet.active?.low, facet.active?.high]);
					(((facet.active?.low || 0 === facet.active?.low) && facet.active?.high && values[0] != facet.active?.low) ||
						values[1] != facet.active?.high) &&
						(setActive([facet.active?.low, facet.active?.high]), setValues([facet.active?.low, facet.active?.high]));
					const { getTrackProps, ticks, segments, handles } = (0, react_ranger.d)({
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
						styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_facetSlider(stylingProps), style]),
						facet.range && facet.active && facet.step
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: classnames_default()('ss__facet-slider', className),
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
																			'aria-label': `${facet.label} slider button`,
																			'aria-valuetext': `${facet.label} slider button, current value ${value}, ${
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
																ref: (e) => (0, useA11y.i)(e),
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
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
					);
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a: () => A11Y_ATTRIBUTE, i: () => useA11y });
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
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'](data))
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
		'./components/src/utilities/componentArgs.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { F: () => componentArgs });
			const componentArgs = {
				className: {
					description: 'Class name appended to root element of component',
					table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
					control: { type: 'text' },
				},
				disableStyles: {
					defaultValue: !1,
					description: 'Disable all default styling',
					table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
					control: { type: 'boolean' },
				},
				style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
				theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
			};
		},
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function mergeProps(componentType, globalTheme, defaultProps, props) {
				const theme = props.theme,
					componentName = props?.name;
				let treePath = props.treePath ?? '',
					mergedProps = { ...defaultProps };
				if (globalTheme?.name) {
					mergedProps = { ...mergedProps, ...props };
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps));
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps)),
						(treePath += `${treePath ? ' ' : ''}${componentType}` + (componentName?.match(/^[A-Z,a-z]+$/) ? `.${componentName}` : ''));
					const applicableSelectors = (function filterSelectors(themeComponents, treePath) {
						const selectors = Object.keys(themeComponents),
							paths = treePath.split(' '),
							componentTypeAndName = paths.splice(-1).pop() ?? '',
							[componentType, componentName] = componentTypeAndName.split('.'),
							mappedSplitTreePath = paths.map((path) => {
								const [type, name] = path.split('.');
								return { type, name, path };
							});
						return selectors
							.filter((key) => key.endsWith(componentType) || key.endsWith(`${componentType}.${componentName}`))
							.filter((selector) => {
								const split = selector.split(' ').slice(0, -1);
								if (0 == split.length) return !0;
								for (let s = 0; s < split.length; s++) {
									let prevIndex = -1;
									const value = split[s];
									for (let i = -1 == prevIndex ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
										const pathValue = mappedSplitTreePath[i];
										if (value === pathValue.path || value === pathValue.type) {
											prevIndex = s;
											break;
										}
									}
									if (-1 == prevIndex) return !1;
								}
								return !0;
							});
					})(globalTheme?.components || {}, treePath).sort(sortSelectors);
					applicableSelectors.forEach((selector) => {
						const componentProps = globalTheme.components?.[selector];
						componentProps && (mergedProps = mergeThemeProps(componentProps, mergedProps));
					}),
						(mergedProps = { ...mergedProps, theme: { ...mergedProps.theme, name: globalTheme.name }, treePath }),
						props.lang && (mergedProps.lang = props.lang),
						globalTheme.variables && (mergedProps.theme.variables = globalTheme.variables),
						globalTheme.layoutOptions && (mergedProps.theme.layoutOptions = globalTheme.layoutOptions);
				} else {
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps)), (mergedProps = { ...mergedProps, ...props });
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps));
				}
				return mergedProps;
			}
			function mergeThemeProps(componentThemeProps, mergedProps) {
				return componentThemeProps && (mergedProps = { ...mergedProps, ...componentThemeProps }), mergedProps;
			}
			function sortSelectors(a, b) {
				return (
					a
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0) -
					b
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0)
				);
			}
			__webpack_require__.d(__webpack_exports__, { v6: () => mergeProps });
		},
		'./components/src/utilities/storybook.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => highlightedCode });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const highlightedCode = (props) => {
				const elemRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						elemRef.current &&
							props.className?.includes('lang-') &&
							!props.className?.includes('prism-block') &&
							window?.Prism?.highlightElement(elemRef.current);
					}, [props.className, props.children, elemRef]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)('code', { ...props, ref: elemRef, 'data-prismjs-copy': 'Copy' })
				);
			};
		},
		'../../node_modules/classnames/index.js': (module, exports) => {
			var __WEBPACK_AMD_DEFINE_RESULT__;
			!(function () {
				'use strict';
				var hasOwn = {}.hasOwnProperty;
				function classNames() {
					for (var classes = '', i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						arg && (classes = appendClass(classes, parseValue(arg)));
					}
					return classes;
				}
				function parseValue(arg) {
					if ('string' == typeof arg || 'number' == typeof arg) return arg;
					if ('object' != typeof arg) return '';
					if (Array.isArray(arg)) return classNames.apply(null, arg);
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) return arg.toString();
					var classes = '';
					for (var key in arg) hasOwn.call(arg, key) && arg[key] && (classes = appendClass(classes, key));
					return classes;
				}
				function appendClass(value, newClass) {
					return newClass ? (value ? value + ' ' + newClass : value + newClass) : value;
				}
				module.exports
					? ((classNames.default = classNames), (module.exports = classNames))
					: void 0 ===
							(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
								return classNames;
							}.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
			})();
		},
		'../../node_modules/memoizerific sync recursive': (module) => {
			function webpackEmptyContext(req) {
				var e = new Error("Cannot find module '" + req + "'");
				throw ((e.code = 'MODULE_NOT_FOUND'), e);
			}
			(webpackEmptyContext.keys = () => []),
				(webpackEmptyContext.resolve = webpackEmptyContext),
				(webpackEmptyContext.id = '../../node_modules/memoizerific sync recursive'),
				(module.exports = webpackEmptyContext);
		},
		'../../node_modules/react-ranger/dist/react-ranger.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { d: () => useRanger });
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
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
			var getBoundingClientRect = function getBoundingClientRect(element) {
					var rect = element.getBoundingClientRect();
					return { left: Math.ceil(rect.left), width: Math.ceil(rect.width) };
				},
				sortNumList = function sortNumList(arr) {
					return [].concat(arr).sort(function (a, b) {
						return Number(a) - Number(b);
					});
				},
				useGetLatest = function useGetLatest(val) {
					var ref = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(val);
					return (
						(ref.current = val),
						react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(function () {
							return ref.current;
						}, [])
					);
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
					_React$useState = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(null),
					activeHandleIndex = _React$useState[0],
					setActiveHandleIndex = _React$useState[1],
					_React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(),
					tempValues = _React$useState2[0],
					setTempValues = _React$useState2[1],
					getLatest = useGetLatest({ activeHandleIndex, onChange, onDrag, values, tempValues }),
					trackElRef = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(),
					getValueForClientX = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (clientX) {
							var trackDims = getBoundingClientRect(trackElRef.current);
							return interpolator.getValueForClientX(clientX, trackDims, min, max);
						},
						[interpolator, max, min]
					),
					getNextStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
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
					roundToStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
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
					handleDrag = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
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
					handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
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
					handlePress = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
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
					getPercentageForValue = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							return interpolator.getPercentageForValue(val, min, max);
						},
						[interpolator, max, min]
					),
					ticks = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
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
					segments = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
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
					handles = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
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
		},
	},
]);
