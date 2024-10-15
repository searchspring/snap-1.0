/*! For license information please see components-Molecules-CalloutBadge-CalloutBadge-stories.a8260774.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7191],
	{
		'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => CalloutBadge_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				CalloutBadge = __webpack_require__('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const CalloutBadge_stories = {
					title: 'Molecules/CalloutBadge',
					component: CalloutBadge.W,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# CalloutBadge\n\nRenders callout badges configured in the Searchspring Management Console and returned from the API. This component is intended to be used within a `Result` component to display callout badges.\n\n## Usage\n\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```jsx\n<CalloutBadge result={result} />\n```\n\n### componentMap\nThe `componentMap` prop allows for custom badge components. This functionallity requires the component and accompanying files to be synced to the Searchspring Management Console using Snapfu.\n\n```jsx\nimport { CustomOnSale } from './components/Badges/CustomOnSale';\n...\n<CalloutBadge \n    result={result} \n    componentMap={{\n        'customOnSaleBadge': () => CustomOnSale\n    }}\n/>\n```\n\nThe `componentMap` also supports async functions for dynamic importing of badges.\n\n```jsx\n<CalloutBadge \n    result={result} \n    componentMap={{\n        'customOnSaleBadge': () => {\n            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;\n        }\n    }}\n/>\n```\n\n### renderEmpty\nBy default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element `ss__callout-badge` to render.\n\n```jsx\n<CalloutBadge\n    renderEmpty\n    result={result} \n    componentMap={{\n        'customOnSaleBadge': () => CustomOnSale\n    }}\n/>\n```\n\n### limit\nThe callout badge slot will by default only render a single badge, but the limit can be increased to allow rendering multiple badges in the same location. This allows for \"stacking\" of the badges in the callout slot. The order of the stack is determined by the SMC badge configuration.\n\n```jsx\n<CalloutBadge\n    limit={3}\n    result={result} \n/>\n```\n\n### tag\nThe `tag` prop specifies the location name of this callout location, the default value is `callout`. \n\n```jsx\n<CalloutBadge tag={'callout'} result={result} />\n```\n",
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
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
									(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' },
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
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
						tag: {
							description: 'Callout location tag',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'callout' } },
							control: { type: 'text' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'CalloutBadge', globals: { siteId: '8uyt2m' } }),
				ObservableCalloutBadge = (0, mobxreact_esm.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(CalloutBadge.W, { ...args, result: controller?.store?.results[0] })
				),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableCalloutBadge, { args, controller });
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
											location: 'callout/callout',
											component: 'BadgeRectangle',
											priority: 1,
											enabled: !0,
											parameters: { color: '#3A23AD', colorText: '#FFFFFF' },
										},
										'last-one': {
											location: 'callout/callout',
											component: 'BadgePill',
											priority: 1,
											enabled: !0,
											parameters: { color: '#515151', colorText: '#FFFFFF' },
										},
										'inventory-remaining': {
											location: 'callout/callout',
											component: 'BadgePill',
											priority: 1,
											enabled: !0,
											parameters: { color: '#382F5A', colorText: '#FFFFFF' },
										},
										'on-sale': {
											location: 'left/left',
											component: 'BadgePill',
											priority: 1,
											enabled: !0,
											parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
										},
										'save-percent': {
											location: 'left/left',
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
				(Default.args = { tag: 'callout' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: CalloutBadgeProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <ObservableCalloutBadge args={args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
			'use strict';
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
			'use strict';
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
			'use strict';
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
		'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/hooks/useComponent.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/utilities/defaultBadgeComponentMap.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/utilities/snapify.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { p: () => Snapify });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-controller/dist/esm/Search/SearchController.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../snap-controller/dist/esm/Recommendation/RecommendationController.js'
				),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../snap-controller/dist/esm/Autocomplete/AutocompleteController.js'
				),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/SearchStore.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'
				),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				_searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				_searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			(0, mobx__WEBPACK_IMPORTED_MODULE_0__.jK)({ useProxies: 'never', isolateGlobalState: !0, enforceActions: 'never' });
			const controllers = {},
				client = { globals: { siteId: '8uyt2m' } };
			class Snapify {
				static recommendation(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createRecommendationController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(!0),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__.c(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.t(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static autocomplete(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createAutocompleteController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__.Z(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__.Y(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static search(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createSearchController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E({
									settings: { coreType: 'query', corePrefix: config.controller.id },
								}),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__.Tp(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.U(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
			}
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
	},
]);
