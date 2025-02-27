'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8220],
	{
		'./components/src/components/Atoms/Overlay/Overlay.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { h: () => Overlay });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const defaultStyles = ({ transitionSpeed, color }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
					transition: `background ${transitionSpeed} ease 0s, left 0s ease ${transitionSpeed}`,
					position: 'fixed',
					zIndex: '10003',
					height: '100%',
					width: '100%',
					top: '0',
					left: '-100%',
					'&.ss__overlay--active': { transition: `background ${transitionSpeed} ease, left 0s ease`, background: color, left: '0' },
				});
			function Overlay(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
					defaultProps = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_3__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('overlay', globalTheme, defaultProps, properties),
					{ active, onClick, disableA11y, className } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
				return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
						onClick: (e) => onClick && active && onClick(e),
						ref: (e) => (disableA11y ? null : (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.i)(e)),
						className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__overlay', { 'ss__overlay--active': active }, className),
						...styling,
					}),
				});
			}
		},
		'./components/src/components/Molecules/Filter/Filter.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => Filter });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						textDecoration: 'none',
						display: 'inline-flex',
						'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
						'& .ss__filter__label': { marginRight: '5px', fontWeight: 'bold' },
					}),
				Filter = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('filter', globalTheme, defaultProps, properties),
						{ filter, facetLabel, valueLabel, url, hideFacetLabel, onClick, icon, separator, disableStyles, className, treePath } = props,
						link = filter?.url?.link || url?.link,
						value = filter?.value.label || valueLabel,
						label = filter?.facet.label || facetLabel,
						subProps_button = {
							className: 'ss__filter__button',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							icon: 'close-thin',
							className: 'ss__filter__button__icon',
							size: '10px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, icon }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = { filter: { attributes: { 'aria-label': label ? `remove selected ${label} filter ${value}` : value } } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { label, value });
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__filter', className),
									onClick: (e) => {
										link?.onClick && link.onClick(e), onClick && onClick(e);
									},
									href: link?.href,
									...mergedLang.filter?.all,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
										...subProps_button,
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
											}),
											!hideFacetLabel &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('span', {
													className: 'ss__filter__label',
													children: [
														label,
														separator &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
																className: 'ss__filter__label__separator',
																children: separator,
															}),
													],
												}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { className: 'ss__filter__value', children: value }),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/Slideout/Slideout.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { S: () => Slideout });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx');
			const defaultStyles = ({ slideDirection, transitionSpeed, width }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'block',
						position: 'fixed',
						transition: `${slideDirection || 'left'} ${transitionSpeed}`,
						left: 'left' == slideDirection ? `-${width}` : 'right' != slideDirection ? '0' : 'initial',
						right: 'right' == slideDirection ? `-${width}` : 'initial',
						bottom: 'bottom' == slideDirection ? '-100vh' : 'initial',
						top: 'top' == slideDirection ? '-100vh' : 'bottom' == slideDirection ? 'initial' : '0',
						height: '100%',
						zIndex: '10004',
						width: width?.endsWith('%') && parseInt(width.split('%')[0]) > 90 ? width : '90%',
						maxWidth: width,
						padding: '10px',
						background: '#fff',
						boxSizing: 'border-box',
						overflowY: 'auto',
						'&.ss__slideout--active': {
							left: 'left' == slideDirection || 'right' != slideDirection ? '0' : 'initial',
							right: 'right' == slideDirection ? '0' : 'initial',
							bottom: 'bottom' == slideDirection ? '0' : 'initial',
							top: 'top' == slideDirection ? '0' : 'bottom' == slideDirection ? 'initial' : '0',
						},
					}),
				Slideout = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							active: !1,
							displayAt: '',
							slideDirection: 'left',
							width: '300px',
							overlayColor: 'rgba(0,0,0,0.8)',
							transitionSpeed: '0.25s',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('slideout', globalTheme, defaultProps, properties),
						{ children, active, buttonContent, noButtonWrapper, displayAt, transitionSpeed, overlayColor, disableStyles, className, treePath } =
							props,
						subProps_overlay = {
							className: 'ss__slideout__overlay',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, color: overlayColor, transitionSpeed }),
							theme: props?.theme,
							treePath,
						},
						[isActive, setActive] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(Boolean(active)),
						[renderContent, setRenderContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(Boolean(active)),
						toggleActive = () => {
							isActive
								? setTimeout(() => {
										setRenderContent(!renderContent);
								  }, 250)
								: setRenderContent(!isActive),
								setActive(!isActive),
								(document.body.style.overflow = isActive ? 'hidden' : '');
						},
						isVisible = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.U)(displayAt, () => {
							document.body.style.overflow = '';
						});
					document.body.style.overflow = isVisible && isActive ? 'hidden' : '';
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles);
					return isVisible
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: [
									buttonContent &&
										(noButtonWrapper
											? (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(buttonContent, { toggleActive, active: isActive, treePath })
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
													className: 'ss__slideout__button',
													onClick: () => toggleActive(),
													children: (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(buttonContent, { active: isActive, treePath }),
											  })),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__slideout', className, { 'ss__slideout--active': isActive }),
										...styling,
										children:
											renderContent && (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(children, { toggleActive, active: isActive, treePath }),
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_14__.h, {
										...subProps_overlay,
										active: isActive,
										onClick: toggleActive,
									}),
								],
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/SortBy/SortBy.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { g: () => SortBy });
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
				SortBy = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { label: 'Sort By', type: 'dropdown', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('sortBy', globalTheme, defaultProps, properties),
						{ sorting, type, controller, hideLabel, disableStyles, className, treePath } = props;
					let label = props.label;
					const store = sorting || controller?.store?.sorting,
						subProps_Select = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }), theme: props?.theme, treePath },
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
						defaultLang = { label: { value: label } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {});
					return (
						hideLabel && (delete lang.label.value, (label = void 0)),
						store?.current && 'object' == typeof store?.options && store.options?.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
									children: [
										'dropdown' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Select__WEBPACK_IMPORTED_MODULE_12__.l, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__sortby', 'ss__sortby__select', className),
												...subProps_Select,
												label,
												options: store.options,
												selected: store.current,
												onSelect: (e, selection) => {
													selection?.url?.go();
												},
												lang: { buttonLabel: lang.label },
											}),
										'list' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_List__WEBPACK_IMPORTED_MODULE_13__.B, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__sortby', 'ss__sortby__list', className),
												...subProps_List,
												options: store.options,
												selected: store.current,
												titleText: label,
												onSelect: (e, selection) => {
													selection?.url?.go();
												},
												lang: { title: lang.label },
											}),
										'radio' == type?.toLowerCase() &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_RadioList__WEBPACK_IMPORTED_MODULE_14__.q, {
												...styling,
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__sortby', 'ss__sortby__radioList', className),
												...subProps_RadioList,
												options: store.options,
												selected: store.current,
												titleText: label,
												onSelect: (e, selection) => {
													selection?.url?.go();
												},
												lang: { title: lang.label },
											}),
									],
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Organisms/Facets/Facets.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { J: () => Facets });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Facet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				Facets = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = { facets: properties.controller?.store?.facets, treePath: globalTreePath };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facets', globalTheme, defaultProps, properties);
					const { limit, onFacetOptionClick, disableStyles, className, controller, treePath } = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e), controller?.setFocused && controller?.setFocused();
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(themeDefaults, props?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					props = { ...props, theme };
					let { facets } = props;
					limit && facets && limit > 0 && (facets = facets.slice(0, +limit));
					const subProps_facet = {
							className: 'ss__facets__facet',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
					return facets && facets?.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facets', className),
									...styling,
									children: facets.map((facet) =>
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
											_Facet__WEBPACK_IMPORTED_MODULE_12__.s,
											{ ...subProps_facet, facet },
											facet.field
										)
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { r: () => FilterSummary });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Molecules_Filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Molecules/Filter/Filter.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						gap: '0.5em',
						'& .ss__filter-summary__title': { fontSize: '1.2em' },
					}),
				FilterSummary = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = {
							title: 'Current Filters',
							clearAllLabel: 'Clear All',
							clearAllIcon: 'close-thin',
							filterIcon: 'close-thin',
							filters: properties.controller?.store?.filters,
							onClearAllClick: () => properties.controller?.urlManager.remove('filter').remove('page').go(),
							separator: ':',
							treePath: globalTreePath,
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('filterSummary', globalTheme, defaultProps, properties),
						{
							filters,
							title,
							filterIcon,
							clearAllIcon,
							separator,
							hideFacetLabel,
							hideTitle,
							clearAllLabel,
							hideClearAll,
							onClick,
							onClearAllClick,
							disableStyles,
							className,
							treePath,
						} = props,
						subProps_filter = {
							name: 'filter',
							className: 'ss__filter-summary__filter',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, separator, hideFacetLabel, icon: filterIcon }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = { title: { value: title }, clearAllLabel: { value: clearAllLabel } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { filters });
					return filters?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__filter-summary', className),
									children: [
										!hideTitle &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
												className: 'ss__filter-summary__title',
												...mergedLang.title?.all,
											}),
										filters.map((filter) =>
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_Filter__WEBPACK_IMPORTED_MODULE_13__.d, {
												...subProps_filter,
												filter,
												onClick: (e) => onClick && onClick(e, filter),
											})
										),
										!hideClearAll &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_Filter__WEBPACK_IMPORTED_MODULE_13__.d, {
												...subProps_filter,
												name: 'clear-all',
												icon: clearAllIcon,
												className: `${subProps_filter?.className} ss__filter-summary__clear-all`,
												hideFacetLabel: !0,
												valueLabel: clearAllLabel,
												onClick: (e) => onClearAllClick && onClearAllClick(e),
												lang: { filter: { attributes: { 'aria-label': clearAllLabel } } },
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { R: () => MobileSidebar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Molecules_Slideout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Molecules/Slideout/Slideout.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'& .ss__mobile-sidebar__header': {
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'baseline',
							'& .ss__mobile-sidebar__header__close-button': { cursor: 'pointer' },
						},
						'& .ss__mobile-sidebar__title': {
							justifyContent: 'space-between',
							flexDirection: 'row',
							display: 'flex',
							'& .ss__icon': { cursor: 'pointer' },
						},
						'& .ss__mobile-sidebar__slideout__button': { cursor: 'pointer' },
						'& .ss__mobile-sidebar__footer': { display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'row' },
					}),
				MobileSidebar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							openButtonText: 'Filters',
							clearButtonText: 'Clear All',
							applyButtonText: 'Apply',
							titleText: 'Filter Options',
							displayAt: '',
							closeButtonIcon: 'close-thin',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('mobileSidebar', globalTheme, defaultProps, properties),
						{
							controller,
							hideFacets,
							hideFilterSummary,
							hidePerPage,
							hideHeader,
							hideFooter,
							hideSortBy,
							hideApplyButton,
							clearButtonIcon,
							hideCloseButton,
							closeButtonText,
							openButtonText,
							clearButtonText,
							applyButtonIcon,
							applyButtonText,
							closeButtonIcon,
							openButtonIcon,
							titleText,
							hideTitleText,
							hideCloseButtonText,
							hideOpenButtonText,
							hideClearButtonText,
							hideApplyButtonText,
							displayAt,
							hideClearButton,
							disableStyles,
							className,
							treePath,
						} = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						subProps_slideout = {
							controller,
							displayAt: (displayAt && `(max-width: ${displayAt})`) || '',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_button = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_sidebar = {
							hideTitle: !0,
							hideFacets,
							hidePerPage,
							hideSortBy,
							hideFilterSummary,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						closeButtonRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.li)(),
						openButtonRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.li)(),
						defaultLang = {
							openButtonText: { value: openButtonText },
							clearButtonText: { value: clearButtonText },
							applyButtonText: { value: applyButtonText },
							titleText: { value: titleText },
							closeButtonText: { value: closeButtonText, attributes: { 'aria-label': closeButtonText || `close ${openButtonText}` } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {});
					hideOpenButtonText && delete lang.openButtonText.value,
						hideClearButtonText && delete lang.clearButtonText.value,
						hideCloseButtonText && delete lang.closeButtonText.value,
						hideApplyButtonText && delete lang.applyButtonText.value;
					const mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { controller }),
						contentRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.li)();
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_15__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__mobile-sidebar', className),
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_Slideout__WEBPACK_IMPORTED_MODULE_16__.S, {
								className: 'ss__mobile-sidebar__slideout',
								buttonContent: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
									className: 'ss__mobile-sidebar__slideout__button',
									icon: openButtonIcon,
									ref: openButtonRef,
									onClick: () => {
										setTimeout(() => {
											contentRef.current?.base?.focus();
										});
									},
									...subProps_button,
									name: 'slideout',
									lang: { button: lang.openButtonText },
								}),
								...subProps_slideout,
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(
									(props) => {
										const { toggleActive } = props;
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
											className: 'ss__mobile-sidebar__content',
											ref: (e) =>
												(0, _hooks__WEBPACK_IMPORTED_MODULE_12__.i)(e, 0, !0, () => {
													closeButtonRef.current?.base?.focus(), closeButtonRef.current?.base?.click(), openButtonRef.current.base.focus();
												}),
											children: [
												!hideHeader &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
														className: 'ss__mobile-sidebar__header',
														children: [
															!hideTitleText &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h4', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__mobile-sidebar__header__title',
																	...mergedLang.titleText?.all,
																}),
															!hideCloseButton &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
																	className: 'ss__mobile-sidebar__header__close-button',
																	disableStyles: !0,
																	onClick: () => toggleActive(),
																	ref: (e) => {
																		e && (closeButtonRef.current = e);
																	},
																	icon: closeButtonIcon,
																	lang: { button: lang.closeButtonText },
																	...subProps_button,
																	name: 'close',
																}),
														],
													}),
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Sidebar__WEBPACK_IMPORTED_MODULE_14__.B, {
													className: 'ss__mobile-sidebar__body',
													controller,
													...subProps_sidebar,
												}),
												!hideFooter &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
														className: 'ss__mobile-sidebar__footer',
														children: [
															!hideApplyButton &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
																	className: 'ss__mobile-sidebar__footer__apply-button',
																	icon: applyButtonIcon,
																	onClick: () => toggleActive(),
																	lang: { button: lang.applyButtonText },
																	...subProps_button,
																	name: 'apply',
																}),
															!hideClearButton &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
																	className: 'ss__mobile-sidebar__footer__clear-button',
																	icon: clearButtonIcon,
																	onClick: () => {
																		controller?.urlManager.remove('filter').remove('page').go(), toggleActive();
																	},
																	lang: { button: lang.clearButtonText },
																	...subProps_button,
																	name: 'clear',
																}),
														],
													}),
											],
										});
									},
									{ ref: contentRef }
								),
							}),
						}),
					});
				});
		},
		'./components/src/components/Organisms/Sidebar/Sidebar.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { B: () => Sidebar });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_FilterSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
				_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Molecules/SortBy/SortBy.tsx'),
				_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Molecules/PerPage/PerPage.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Facets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				Sidebar = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { titleText: 'Filters', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('sidebar', globalTheme, defaultProps, properties),
						{ controller, hideTitle, titleText, hideFacets, hidePerPage, hideSortBy, hideFilterSummary, disableStyles, className, treePath } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)(props, defaultStyles),
						subProps_filterSummary = {
							controller,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_facets = { controller, ...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_sortBy = { controller, ...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }), theme: props?.theme, treePath },
						subProps_perPage = { controller, ...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }), theme: props?.theme, treePath },
						defaultLang = { titleText: { value: titleText } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { controller });
					return controller?.store?.loaded && controller?.store?.pagination?.totalResults > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__sidebar', className),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__sidebar__inner'),
										children: [
											!hideTitle &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h4', {
													className: 'ss__sidebar__title',
													...mergedLang.titleText?.all,
												}),
											!hideFilterSummary &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_FilterSummary__WEBPACK_IMPORTED_MODULE_13__.r, {
													...subProps_filterSummary,
												}),
											!hideSortBy &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_SortBy__WEBPACK_IMPORTED_MODULE_14__.g, {
													...subProps_sortBy,
												}),
											!hidePerPage &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Molecules_PerPage__WEBPACK_IMPORTED_MODULE_15__.F, {
													...subProps_perPage,
												}),
											!hideFacets &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Facets__WEBPACK_IMPORTED_MODULE_16__.J, {
													...subProps_facets,
												}),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/hooks/useMediaQuery.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { U: () => useMediaQuery });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useMediaQuery(query, runOnCleanup) {
				if ('undefined' == typeof window || void 0 === window.matchMedia) return !1;
				const mediaQuery = window.matchMedia(query),
					[match, setMatch] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!!mediaQuery.matches);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const handler = () => setMatch(!!mediaQuery.matches);
						return (
							mediaQuery.addListener(handler),
							() => {
								runOnCleanup instanceof Function && runOnCleanup(), mediaQuery.removeListener(handler);
							}
						);
					}, []),
					match
				);
			}
		},
	},
]);
