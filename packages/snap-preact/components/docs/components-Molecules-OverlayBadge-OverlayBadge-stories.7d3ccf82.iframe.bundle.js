'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9907],
	{
		'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { z: () => BadgeImage });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({ maxHeight: '100%', maxWidth: '100%' }),
				BadgeImage = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('badgeImage', globalTheme, defaultProps, properties),
						{ label, url, tag, className, internalClassName } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return url
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('img', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__badge-image',
										`ss__badge-image--${tag}`,
										className,
										internalClassName
									),
									alt: label || `${tag} badge`,
									src: url,
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Atoms/BadgePill/BadgePill.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { L: () => BadgePill });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ color, colorText }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						background: color,
						color: colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
						borderRadius: '1em',
					}),
				BadgePill = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('badgePill', globalTheme, defaultProps, properties),
						{ value, tag, className, internalClassName } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__badge-pill',
										`ss__badge-pill--${tag}`,
										className,
										internalClassName
									),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
										className: 'ss__badge-pill__value',
										children: value,
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Z: () => BadgeRectangle });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ color, colorText }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						background: color,
						color: colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
					}),
				BadgeRectangle = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('badgeRectangle', globalTheme, defaultProps, properties),
						{ value, tag, className, internalClassName } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__badge-rectangle',
										`ss__badge-rectangle--${tag}`,
										className,
										internalClassName
									),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
										className: 'ss__badge-rectangle__value',
										children: value,
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Atoms/BadgeText/BadgeText.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { p: () => BadgeText });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ colorText }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						color: colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
					}),
				BadgeText = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { colorText: '#000000', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('badgeText', globalTheme, defaultProps, properties),
						{ value, tag, className, internalClassName } = props,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__badge-text',
										`ss__badge-text--${tag}`,
										className,
										internalClassName
									),
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('span', {
										className: 'ss__badge-text__value',
										children: value,
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => OverlayBadge_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				OverlayBadge = __webpack_require__('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const OverlayBadge_stories = {
					title: 'Molecules/OverlayBadge',
					component: OverlayBadge.Q,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# OverlayBadge\n\nRenders overlay badges configured in the Searchspring Management Console and returned from the API. This component is intended to be used within a `Result` component to wrap elements (children) that should have overlay badges.\n\n## Usage\n\n### children\nThe required children provided to the component will be wrapped and rendered in a relative div to allow badges to be positioned absolutely. \n\n```jsx\n<OverlayBadge controller={controller} result={result}>\n    <div>\n        <img src="/images/example.png"/>\n    </div>\n</OverlayBadge>\n```\n\n### controller\nThe required `controller` prop specifies a reference to the controller.\n\n```jsx\n<OverlayBadge controller={controller} result={result}>\n    <div>\n        <img src="/images/example.png"/>\n    </div>\n</OverlayBadge>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```jsx\n<OverlayBadge controller={controller} result={result}>\n    <div>\n        <img src="/images/example.png"/>\n    </div>\n</OverlayBadge>\n```\n\n### componentMap\nThe `componentMap` prop allows for custom badge components. This functionallity requires the component and accompanying files to be synced to the Searchspring Management Console using Snapfu.\n\n```jsx\nimport { CustomOnSale } from \'./components/Badges/CustomOnSale\';\n...\n<OverlayBadge \n    controller={controller} \n    result={result}\n    componentMap={{\n        \'customOnSaleBadge\': () => CustomOnSale\n    }}\n>\n    <div>\n        <img src="/images/example.png"/>\n    </div>\n</OverlayBadge>\n```\n\nThe `componentMap` also supports async functions for dynamic importing of badges.\n\n```jsx\n<OverlayBadge \n    controller={controller} \n    result={result}\n    componentMap={{\n        \'customOnSaleBadge\': () => {\n            return (await import(\'./components/Badges/CustomOnSale\')).CustomOnSale;\n        }\n    }}\n>\n    <div>\n        <img src="/images/example.png"/>\n    </div>\n</OverlayBadge>\n```\n\n### renderEmpty\nBy default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element `ss__overlay-badge` to render.\n\n```jsx\n<OverlayBadge\n    renderEmpty\n    controller={controller}\n    result={result}\n    componentMap={{\n        \'customOnSaleBadge\': () => CustomOnSale\n    }}\n>\n    <div>\n        <img src="/images/example.png"/>\n    </div>\n</OverlayBadge>\n```\n\n### limit\nThe overlay badge will by default only render a single badge per overlay slot (left and right by default), but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the overlay slots. The order of the stack is determined by the SMC badge configuration.\n\n```jsx\n<OverlayBadge\n    limit={3}\n    controller={controller}\n    result={result}\n/>\n```\n',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' },
									}),
								],
							}),
					],
					argTypes: {
						result: {
							description: 'Result store Product reference',
							type: { required: !0 },
							table: { type: { summary: 'result store Product object' } },
							control: { type: 'none' },
						},
						controller: {
							description: 'Controller reference',
							type: { required: !0 },
							table: { type: { summary: 'Controller' } },
							control: { type: 'none' },
						},
						children: { description: 'Overlay content to be displayed', type: { required: !0 }, table: { type: { summary: 'string, JSX' } } },
						componentMap: {
							description: 'Component map containing custom badge component',
							table: { type: { summary: 'object' } },
							control: { type: 'object' },
						},
						renderEmpty: {
							description: 'Render wrapper element even when there are no badges',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						limit: {
							description: 'Number of badges per slot',
							table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
							control: { type: 'number' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'OverlayBadge', globals: { siteId: '8uyt2m' } }),
				ObservableOverlayBadge = (0, es.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(OverlayBadge.Q, {
						...args,
						controller,
						result: controller?.store?.results[0],
						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
					})
				),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableOverlayBadge, { args, controller });
			(Default.loaders = [
				async () => (
					snapInstance.on('afterSearch', ({ response }) => {
						(response.search.results[0].badges = [
							{ tag: 'free-shipping', value: 'Free Shipping' },
							{ tag: 'last-one', value: 'Last One!' },
							{ tag: 'on-sale', value: 'On Sale' },
							{ tag: 'save-percent', value: 'Save 30%' },
							{ tag: 'inventory-remaining', value: '1 in stock' },
						]),
							(response.meta = {
								...response.meta,
								badges: {
									locations: {
										left: [{ tag: 'left', name: 'Left' }],
										right: [{ tag: 'right', name: 'Right' }],
										callout: [{ tag: 'callout', name: 'Callout' }],
									},
									tags: {
										'free-shipping': {
											location: 'left/left',
											component: 'BadgeRectangle',
											priority: 1,
											enabled: !0,
											parameters: { color: '#3A23AD', colorText: '#FFFFFF' },
										},
										'last-one': {
											location: 'left/left',
											component: 'BadgePill',
											priority: 1,
											enabled: !0,
											parameters: { color: '#515151', colorText: '#FFFFFF' },
										},
										'inventory-remaining': {
											location: 'left/left',
											component: 'BadgePill',
											priority: 1,
											enabled: !0,
											parameters: { color: '#382F5A', colorText: '#FFFFFF' },
										},
										'on-sale': {
											location: 'right/right',
											component: 'BadgePill',
											priority: 1,
											enabled: !0,
											parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
										},
										'save-percent': {
											location: 'right/right',
											component: 'BadgeRectangle',
											priority: 1,
											enabled: !0,
											parameters: { color: '#8F6CF6', colorText: '#FFFFFF' },
										},
									},
								},
							});
					}),
					await snapInstance.search(),
					{ controller: snapInstance }
				),
			]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: OverlayBadgeProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservableOverlayBadge args={args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => OverlayBadge });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defaultBadgeComponentMap.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const defaultStyles = ({ controller }) => {
					const grid = controller?.store?.meta?.badges?.groups?.overlay?.grid;
					let gridProperties = {};
					if (grid?.length && grid[0]?.length) {
						const gridTemplateAreas = grid.map((row) => `"${row.join(' ')}"`).join(' ');
						gridProperties = {
							gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))`,
							gridTemplateRows: `repeat(${grid.length}, minmax(0, 1fr))`,
							gridTemplateAreas,
						};
					}
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						position: 'relative',
						'& .ss__overlay-badge__grid-wrapper': {
							pointerEvents: 'none',
							display: 'grid',
							position: 'absolute',
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							...gridProperties,
						},
					});
				},
				OverlayBadge = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						snap = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.uk)(),
						defaultProps = { limit: 1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('overlayBadge', globalTheme, defaultProps, properties),
						{ result, children, controller, renderEmpty, limit, className, internalClassName, treePath } = props;
					if (!children)
						return (
							controller?.log?.warn('OverlayBadge component must have children'),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const meta = controller?.store?.meta;
					if (!meta)
						return (
							controller?.log?.warn('Controller must have a meta store'),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children })
						);
					const badgeComponentMap = {
							..._utilities__WEBPACK_IMPORTED_MODULE_9__.q,
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
							.filter((location) => location.slots?.length),
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles);
					return renderEmpty || locations?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__overlay-badge', className, internalClassName),
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
											className: 'ss__overlay-badge__grid-wrapper',
											children: locations.map((location, index) =>
												location.slots?.map((slot) => {
													const badgeStyles = (({ section, top, bottom, index, tag }) =>
														(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
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
														}))({ ...props, tag: slot.tag, section: location.section, index, top: slot.top, bottom: slot.bottom });
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
														className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
															'ss__overlay-badge__grid-wrapper__slot',
															`ss__overlay-badge__grid-wrapper__slot--${slot.tag}`
														),
														css: [badgeStyles],
														children: slot.badges.map((badge) => {
															const BadgeComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.x)(badgeComponentMap, badge.component);
															return BadgeComponent
																? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(BadgeComponent, {
																		...badge,
																		...badge.parameters,
																		treePath,
																  })
																: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
														}),
													});
												})
											),
										}),
										children,
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children });
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
	},
]);
