'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1918],
	{
		'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { z: () => BadgeImage });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx');
			const CSS_BadgeImage = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({ maxHeight: '100%', maxWidth: '100%' }),
				BadgeImage = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = { ...globalTheme?.components?.badgeImage, ...properties, ...properties.theme?.components?.badgeImage },
						{ label, url, tag, disableStyles, className, style } = props,
						styling = { 'ss-name': props.name };
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_BadgeImage(), style]),
						url
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('img', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__badge-image', `ss__badge-image--${tag}`, className),
										alt: label || `${tag} badge`,
										src: url,
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/BadgePill/BadgePill.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { L: () => BadgePill });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx');
			const CSS_BadgePill = (props) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						background: props.color,
						color: props.colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
						borderRadius: '1em',
					}),
				BadgePill = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = {
							color: 'rgba(58, 35, 173, 1)',
							colorText: '#fff',
							...globalTheme?.components?.badgePill,
							...properties,
							...properties.theme?.components?.badgePill,
						},
						{ value, disableStyles, tag, className, style } = props,
						styling = { 'ss-name': props.name };
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_BadgePill(props), style]),
						value
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__badge-pill', `ss__badge-pill--${tag}`, className),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('span', {
											className: 'ss__badge-pill__value',
											children: value,
										}),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Z: () => BadgeRectangle });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx');
			const CSS_BadgeRectangle = (props) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						background: props.color,
						color: props.colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
					}),
				BadgeRectangle = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = {
							color: 'rgba(58, 35, 173, 1)',
							colorText: '#fff',
							...globalTheme?.components?.badgeRectangle,
							...properties,
							...properties.theme?.components?.badgeRectangle,
						},
						{ value, disableStyles, tag, className, style } = props,
						styling = { 'ss-name': props.name };
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_BadgeRectangle(props), style]),
						value
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__badge-rectangle', `ss__badge-rectangle--${tag}`, className),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('span', {
											className: 'ss__badge-rectangle__value',
											children: value,
										}),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/BadgeText/BadgeText.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { p: () => BadgeText });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx');
			const CSS_BadgeText = (props) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						color: props.colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
					}),
				BadgeText = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = { colorText: '#000000', ...globalTheme?.components?.badgeText, ...properties, ...properties.theme?.components?.badgeText },
						{ value, disableStyles, tag, className, style } = props,
						styling = { 'ss-name': props.name };
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_BadgeText(props), style]),
						value
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__badge-text', `ss__badge-text--${tag}`, className),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('span', {
											className: 'ss__badge-text__value',
											children: value,
										}),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/Image/Image.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { _: () => Image, t: () => FALLBACK_IMAGE_URL });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const FALLBACK_IMAGE_URL = '//cdn.searchspring.net/ajax_search/img/default_image.png',
				CSS = {
					image: ({ visibility }) =>
						(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: 'auto',
							'& img': { visibility, flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
						}),
				};
			function Image(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = { fallback: FALLBACK_IMAGE_URL, lazy: !0 },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('image', globalTheme, defaultProps, properties),
					{ alt, src, fallback, hoverSrc, lazy, onMouseOver, onMouseOut, onError, onLoad, onClick, disableStyles, className, style, styleScript } =
						props,
					[visibility, setVisibility] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)('hidden'),
					[isHovering, setHover] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					prevSrcRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)('');
				(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
					prevSrcRef.current = src;
				}),
					prevSrcRef.current && prevSrcRef.current != src && setVisibility('hidden');
				const styling = { 'ss-name': props.name },
					stylingProps = { ...props, visibility };
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.image(stylingProps), style]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__image', className),
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('img', {
								src: (isHovering ? hoverSrc : src) || fallback,
								alt,
								title: alt,
								loading: lazy ? 'lazy' : void 0,
								onLoad: (e) => {
									setVisibility('visible'), onLoad && onLoad(e);
								},
								onClick: (e) => onClick && onClick(e),
								onError: (e) => {
									(e.target.src = fallback || ''), onError && onError(e);
								},
								onMouseOver: (e) => {
									hoverSrc && setHover(!0), onMouseOver && onMouseOver(e);
								},
								onMouseOut: (e) => {
									hoverSrc && setHover(!1), onMouseOut && onMouseOut(e);
								},
							}),
						}),
					})
				);
			}
		},
		'./components/src/components/Atoms/Price/Price.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { g: () => Price });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				formatNumber = __webpack_require__('../snap-toolbox/dist/esm/filters/formatNumber.js');
			var emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
				price: ({ theme }) =>
					(0, emotion_react_browser_esm.AH)({
						color: theme?.variables?.colors?.primary,
						'&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' },
					}),
			};
			function Price(properties) {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = (0, mergeProps.v6)(
						'price',
						globalTheme,
						{ symbol: '$', decimalPlaces: 2, padDecimalPlaces: !0, thousandsSeparator: ',', decimalSeparator: '.', symbolAfter: !1, lineThrough: !1 },
						properties
					),
					{
						lineThrough,
						value,
						symbol,
						decimalPlaces,
						padDecimalPlaces,
						thousandsSeparator,
						decimalSeparator,
						symbolAfter,
						raw,
						disableStyles,
						className,
						style,
						styleScript,
					} = props;
				let formattedPrice;
				value &&
					(formattedPrice = (function currency(input, opts) {
						const defaultOptions = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...opts };
						return (0, formatNumber.Z)(input, defaultOptions);
					})(value, { symbol: '', decimalPlaces, padDecimalPlaces, thousandsSeparator, decimalSeparator }));
				const styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.price(stylingProps), style]),
					formattedPrice
						? raw
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, { children: formattedPrice })
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.FD)('span', {
										...styling,
										className: classnames_default()('ss__price', { 'ss__price--strike': lineThrough }, className),
										children: [
											symbol && !symbolAfter
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { className: 'ss__price__symbol', children: symbol })
												: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
											(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { className: 'ss__price__value', children: formattedPrice }),
											symbol && symbolAfter
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('span', { className: 'ss__price__symbol', children: symbol })
												: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
										],
									}),
							  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
				);
			}
		},
		'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { W: () => CalloutBadge });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defaultBadgeComponentMap.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const CSS_CalloutBadge = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
				CalloutBadge = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						snap = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.uk)(),
						props = {
							tag: 'callout',
							limit: 1,
							...globalTheme?.components?.calloutBadge,
							...properties,
							...properties.theme?.components?.calloutBadge,
						},
						{ result, tag, renderEmpty, limit, disableStyles, className, style } = props,
						styling = { 'ss-name': props.name },
						badgeComponentMap = {
							..._utilities__WEBPACK_IMPORTED_MODULE_6__.q,
							...(snap?.templates?.library.import.component.badge || {}),
							...props.componentMap,
						};
					disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_CalloutBadge(props), style]);
					const badges = result?.badges?.atLocation(tag).slice(0, limit);
					return renderEmpty || badges?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__callout-badge',
										`ss__callout-badge--${tag?.replace('/', '-')}`,
										className
									),
									children: badges.map((badge) => {
										const BadgeComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.x)(badgeComponentMap, badge.component);
										return BadgeComponent
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(BadgeComponent, { ...badge, ...badge.parameters })
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => OverlayBadge });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defaultBadgeComponentMap.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const CSS_OverlayBadge = ({ grid }) => {
					let gridProperties = {};
					if (grid?.length && grid[0]?.length) {
						const gridTemplateAreas = grid.map((row) => `"${row.join(' ')}"`).join(' ');
						gridProperties = {
							gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))`,
							gridTemplateRows: `repeat(${grid.length}, minmax(0, 1fr))`,
							gridTemplateAreas,
						};
					}
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						position: 'relative',
						'& .ss__overlay-badge__grid-wrapper': { display: 'grid', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, ...gridProperties },
					});
				},
				CSS_BadgePositioning = ({ index, top, bottom, section, tag }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						position: 'relative',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'right' == section ? 'flex-end' : 'flex-start',
						justifyContent: top || bottom ? (bottom && !top ? 'flex-end' : 'flex-start') : 'center',
						gap: '0.5em',
						gridArea: tag,
						boxSizing: 'border-box',
						zIndex: Math.max(100 - index, 1),
						width: '100%',
						height: '100%',
					}),
				OverlayBadge = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						snap = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.uk)(),
						props = { limit: 1, ...globalTheme?.components?.overlayBadge, ...properties, ...properties.theme?.components?.overlayBadge },
						{ result, children, controller, renderEmpty, limit, disableStyles, className, style } = props,
						styling = { 'ss-name': props.name };
					if (!children)
						return (
							controller?.log?.warn('OverlayBadge component must have children'),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const meta = controller?.store?.meta;
					if (!meta)
						return (
							controller?.log?.warn('Controller must have a meta store'),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children })
						);
					const grid = meta?.badges?.groups?.overlay?.grid,
						badgeComponentMap = {
							..._utilities__WEBPACK_IMPORTED_MODULE_7__.q,
							...(snap?.templates?.library.import.component.badge || {}),
							...props.componentMap,
						},
						sections = meta?.badges?.groups?.overlay?.sections,
						locations = sections
							?.map((section) => {
								const sectionSlots = meta?.data?.badges?.locations[section],
									slots = sectionSlots
										?.map((slot, index) => ({
											tag: slot.tag,
											name: slot.name,
											top: 0 == index,
											bottom: index == sectionSlots.length - 1,
											badges: result?.badges?.atLocation(`${section}/${slot.tag}`).slice(0, limit),
										}))
										.filter((slot) => slot.badges.length);
								return { section, slots };
							})
							.filter((location) => location.slots?.length);
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_OverlayBadge({ ...props, grid }), style]),
						renderEmpty || locations?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__overlay-badge', className),
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: locations.map((location, index) =>
													location.slots?.map((slot) =>
														(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
															className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
																'ss__overlay-badge__grid-wrapper__slot',
																`ss__overlay-badge__grid-wrapper__slot--${slot.tag}`
															),
															css: [CSS_BadgePositioning({ tag: slot.tag, section: location.section, index, top: slot.top, bottom: slot.bottom })],
															children: slot.badges.map((badge) => {
																const BadgeComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.x)(badgeComponentMap, badge.component);
																return BadgeComponent
																	? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(BadgeComponent, { ...badge, ...badge.parameters })
																	: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
															}),
														})
													)
												),
											}),
											children,
										],
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children })
					);
				});
		},
		'./components/src/components/Molecules/Result/Result.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => Result });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				Image = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				Price = __webpack_require__('./components/src/components/Atoms/Price/Price.tsx'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				cloneWithProps = __webpack_require__('./components/src/utilities/cloneWithProps.tsx');
			var types = __webpack_require__('./components/src/types.ts'),
				CalloutBadge = __webpack_require__('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
				OverlayBadge = __webpack_require__('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx');
			const CSS_result = ({}) =>
					(0, emotion_react_browser_esm.AH)({
						'&.ss__result--grid': {
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
						},
						'&.ss__result--list': {
							display: 'flex',
							flexDirection: 'row',
							'& .ss__result__image-wrapper': { flex: '0 0 33%' },
							'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
						},
						'& .ss__result__image-wrapper': {
							position: 'relative',
							'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
						},
						'& .ss__result__details': {
							padding: '10px',
							textAlign: 'center',
							'& .ss__result__details__title': { marginBottom: '10px' },
							'& .ss__result__details__pricing': {
								marginBottom: '10px',
								'& .ss__result__price': { fontSize: '1.2em' },
								'& .ss__price--strike': { fontSize: '80%' },
							},
							'& .ss__result__details__button': { marginBottom: '10px' },
						},
					}),
				Result = (0, mobxreact_esm.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = { layout: types.VT.grid },
						props = (0, mergeProps.v6)('result', globalTheme, defaultProps, properties),
						{
							result,
							hideBadge,
							hideTitle,
							hidePricing,
							hideImage,
							detailSlot,
							fallback,
							disableStyles,
							className,
							layout,
							onClick,
							style,
							styleScript,
							controller,
							treePath,
						} = props,
						core = result?.display?.mappings.core || result?.mappings?.core,
						subProps_price = {
							className: 'ss__result__price',
							...globalTheme?.components?.price,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_calloutBadge = {
							className: 'ss__result__callout-badge',
							result,
							...globalTheme?.components?.calloutBadge,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_overlayBadge = {
							className: 'ss__result__overlay-badge',
							result,
							controller,
							...globalTheme?.components?.overlayBadge,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_image = {
							className: 'ss__result__image',
							alt: core?.name || '',
							src: core?.imageUrl || '',
							...globalTheme?.components?.image,
							...(0, defined.s)({ disableStyles, fallback }),
							theme: props.theme,
							treePath,
						};
					let displayName = core?.name;
					props.truncateTitle &&
						(displayName = (function truncate(input, limit, append) {
							if ('string' != typeof input || input.length <= limit) return input;
							const lastSpace = input.lastIndexOf(' ', limit),
								trimIndex = -1 != lastSpace ? lastSpace : limit - 1;
							return input.substr(0, trimIndex) + (append || '');
						})(core?.name || '', props.truncateTitle.limit, props.truncateTitle.append));
					const styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_result(stylingProps), style]),
						core
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.FD)('article', {
										...styling,
										className: classnames_default()('ss__result', `ss__result--${layout}`, className),
										children: [
											(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
												className: 'ss__result__image-wrapper',
												children: (0, emotion_react_jsx_runtime_browser_esm.Y)('a', {
													href: core.url,
													onClick: (e) => {
														onClick && onClick(e), controller?.track?.product?.click(e, result);
													},
													children:
														!hideImage &&
														(hideBadge
															? (0, emotion_react_jsx_runtime_browser_esm.Y)(Image._, { ...subProps_image })
															: (0, emotion_react_jsx_runtime_browser_esm.Y)(OverlayBadge.Q, {
																	...subProps_overlayBadge,
																	controller,
																	children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Image._, { ...subProps_image }),
															  })),
												}),
											}),
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: 'ss__result__details',
												children: [
													!hideBadge && (0, emotion_react_jsx_runtime_browser_esm.Y)(CalloutBadge.W, { ...subProps_calloutBadge, controller }),
													!hideTitle &&
														(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, emotion_react_jsx_runtime_browser_esm.Y)('a', {
																href: core.url,
																onClick: (e) => {
																	onClick && onClick(e), controller?.track?.product?.click(e, result);
																},
																dangerouslySetInnerHTML: { __html: displayName || '' },
															}),
														}),
													!hidePricing &&
														(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
															className: 'ss__result__details__pricing',
															children:
																core.msrp && core.price && core.price < core.msrp
																	? (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
																			children: [
																				(0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, {
																					...subProps_price,
																					value: core.msrp,
																					lineThrough: !0,
																					name: 'price--msrp',
																				}),
																				' ',
																				(0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...subProps_price, value: core.price }),
																			],
																	  })
																	: (0, emotion_react_jsx_runtime_browser_esm.Y)(Price.g, { ...subProps_price, value: core.price }),
														}),
													(0, cloneWithProps.Y)(detailSlot, { result, treePath }),
												],
											}),
										],
									}),
							  })
							: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
					);
				});
		},
		'./components/src/hooks/useComponent.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { x: () => useComponent });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useComponent = (map, name) => {
				const [importedComponent, setImportedComponent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(void 0);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const importFn = map[name];
						if (importFn && 'function' == typeof importFn) {
							const componentFn = importFn();
							componentFn instanceof Promise
								? componentFn.then((component) => {
										setImportedComponent(() => component);
								  })
								: setImportedComponent(() => componentFn);
						}
					}, []),
					importedComponent
				);
			};
		},
		'./components/src/providers/snap.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { uk: () => useSnap });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const SnapContext = (0, preact__WEBPACK_IMPORTED_MODULE_0__.q6)(void 0),
				useSnap = () => (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.NT)(SnapContext);
		},
		'./components/src/types.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			var ResultsLayout, FacetType, FacetDisplay;
			__webpack_require__.d(__webpack_exports__, { Cw: () => FacetType, QK: () => FacetDisplay, VT: () => ResultsLayout }),
				(function (ResultsLayout) {
					(ResultsLayout.grid = 'grid'), (ResultsLayout.list = 'list');
				})(ResultsLayout || (ResultsLayout = {})),
				(function (FacetType) {
					(FacetType.VALUE = 'value'), (FacetType.RANGE = 'range'), (FacetType.RANGE_BUCKETS = 'range-buckets');
				})(FacetType || (FacetType = {})),
				(function (FacetDisplay) {
					(FacetDisplay.GRID = 'grid'),
						(FacetDisplay.PALETTE = 'palette'),
						(FacetDisplay.LIST = 'list'),
						(FacetDisplay.SLIDER = 'slider'),
						(FacetDisplay.HIERARCHY = 'hierarchy'),
						(FacetDisplay.TOGGLE = 'toggle');
				})(FacetDisplay || (FacetDisplay = {}));
		},
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
			};
		},
		'./components/src/utilities/defaultBadgeComponentMap.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { q: () => defaultBadgeComponentMap });
			var _components_Atoms_BadgeText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
				_components_Atoms_BadgePill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
				_components_Atoms_BadgeRectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'
				),
				_components_Atoms_BadgeImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'
				);
			const defaultBadgeComponentMap = {
				BadgeText: () => _components_Atoms_BadgeText__WEBPACK_IMPORTED_MODULE_0__.p,
				BadgePill: () => _components_Atoms_BadgePill__WEBPACK_IMPORTED_MODULE_1__.L,
				BadgeRectangle: () => _components_Atoms_BadgeRectangle__WEBPACK_IMPORTED_MODULE_2__.Z,
				BadgeImage: () => _components_Atoms_BadgeImage__WEBPACK_IMPORTED_MODULE_3__.z,
			};
		},
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			__webpack_require__.d(__webpack_exports__, { s: () => defined });
		},
		'../snap-toolbox/dist/esm/filters/formatNumber.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function formatNumber(input, opts) {
				const options = {
					symbol: '',
					decimalPlaces: 3,
					padDecimalPlaces: !0,
					thousandsSeparator: '',
					decimalSeparator: '.',
					symbolAfter: !1,
					...opts,
				};
				if ('number' != typeof input || Number.isNaN(input)) return;
				const split = (function truncateDecimals(input, digits) {
					const numString = input.toString(),
						decimalPosition = numString.indexOf('.'),
						substrLength = -1 == decimalPosition ? numString.length : 1 + decimalPosition + (digits || -1);
					return numString.substr(0, substrLength);
				})(input, options.decimalPlaces).split('.');
				(split[0] = split[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + options.thousandsSeparator)),
					options.decimalPlaces > 0 && options.padDecimalPlaces && (split[1] = (split[1] || '').padEnd(options.decimalPlaces, '0'));
				let output = split.join(options.decimalSeparator);
				return options.symbolAfter ? (output += options.symbol) : (output = options.symbol + output), output;
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => formatNumber });
		},
	},
]);
