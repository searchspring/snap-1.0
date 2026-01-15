(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6634],
	{
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
		'./components/src/components/Atoms/Icon/Icon.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Custom: () => Custom,
					CustomPath: () => CustomPath,
					Default: () => Default,
					Gallery: () => Gallery,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Icon_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Icon_stories = {
					title: 'Atoms/Icon',
					component: Icon.I,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# Icon\n\nRenders an Icon either from our list of available icons or from a custom path. \n\n## Usage\n```jsx\nimport { Icon } from \'@searchspring/snap-preact-components\';\n```\n\n### icon\nThe `icon` prop specifies the name of the icon to display. \n\n```jsx\n<Icon icon=\'cogs\' />\n```\n\nif false is passed, no Icon will render. \n\n```jsx\n<Icon icon={false} />\n```\n\n\n### path\nThe `path` prop specifies the SVG path value for custom icons.\n\n```jsx\n<Icon color=\'#3a23ad\' size=\'120px\' style=\'padding: 20px;\' viewBox=\'0 0 70 70\' path=\'M12.9,13.8C12.9,13.8,12.9,13.8,12.9,13.8c-0.1,0.1-0.3,0.2-0.5,0.2C4.5,17.9,1.9,28.8,6.6,38.5l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C43.5,20.6,46.2,9.7,41.5,0L12.9,13.8zM8.6,42.1C8.6,42.1,8.6,42.1,8.6,42.1c-0.1,0.1-0.3,0.1-0.5,0.2C0.3,46.1-2.4,57,2.3,66.7l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L8.6,42.1z\' />\n```\n\nThe `path` prop can also contain an array of children svg elements to render.\n\n```jsx\n<Icon size={\'70\'} viewBox={\'0 0 70 70\'} path={[\n    {\n        type: \'line\', \n        attributes: { \n            x1: "1",\n            y1: "10",\n            x2: "69",\n            y2: "10",\n            stroke: "#000000",\n            \'stroke-width\': "3",\n            \'stroke-linecap\': "round",\n            \'stroke-linejoin\': "round",\n        }\n    },\n    {\n        type: \'line\', \n        attributes: { \n            x1: "1",\n            y1: "30",\n            x2: "69",\n            y2: "30",\n            stroke: "#000000",\n            \'stroke-width\': "3",\n            \'stroke-linecap\': "round",\n            \'stroke-linejoin\': "round",\n        }\n    },\n    {\n        type: \'circle\', \n        attributes: { \n            cx: "15",\n            cy: "10",\n            r: "6",\n            fill: "#000000",\n            stroke: "#000000",\n            \'stroke-width\': "3",\n        }\n    },\n    {\n        type: \'circle\', \n        attributes: { \n            cx: "55",\n            cy: "30",\n            r: "6",\n            fill: "#000000",\n            stroke: "#000000",\n            \'stroke-width\': "3",\n        }\n    },\n]} />\n```\n\n### children\nComponent children can be provided and will be rendered within the wrapping `svg` element.\n\n```jsx\n<Icon size={\'70\'} viewBox={\'0 0 70 70\'} >\n    <line x1="1" y1="10" x2="69" y2="10" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>\n\t<line x1="1" y1="30" x2="69" y2="30" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>\n\t<circle cx="15" cy="10" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>\n\t<circle cx="55" cy="30" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>\n</Icon>\n```\n\n### color\nThe `color` prop specifies the icon color.\n\n```jsx\n<Icon icon=\'cogs\' color="#ffff00" />\n```\n\n### title\nThe `title` prop specifies the title to render inside the svg.\n\n```jsx\n<Icon icon=\'cogs\' title={\'Settings\'} />\n```\n\n### size\nThe `size` prop specifies the custom icon size. This will be set to both the width and height.\n\n```jsx\n<Icon icon=\'cogs\' size={\'20px\'} />\n```\n\n### title\nThe `title` prop specifies the title to render inside the svg.\n\n```jsx\n<Icon icon=\'cogs\' title={\'Settings\'} />\n```\n\n### width & height\nThe `width` and `height` props specify custom icon dimensions and will overwrite the `size` prop.\n\n```jsx\n<Icon icon=\'cogs\' width={\'20px\'} height={\'25px\'} />\n```\n\n### viewBox\nThe `viewBox` prop specifies the SVG `viewBox` attribute. This defines the position and dimension, in user space, of an SVG viewport.\n\nFormat: `` `${min-x} ${min-y} ${width} ${height}` ``\n\n```jsx\n<Icon icon=\'cogs\' viewBox={\'0 0 20 20\'} />\n```\n',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
						actions: { disabled: !0 },
					},
					argTypes: {
						icon: {
							description: 'Icon name',
							table: { type: { summary: 'string' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						path: { description: 'SVG path', table: { type: { summary: 'string | SVGPathElement[]' } }, control: { type: 'text' } },
						title: { description: 'Title text to render inside the svg', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						children: {
							description: 'SVG elements to be contained within (using children)',
							table: { type: { summary: 'string, JSX' } },
							control: { type: 'none' },
						},
						color: {
							description: 'Icon color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
							control: { type: 'color' },
						},
						size: {
							defaultValue: '16px',
							description: 'Icon size',
							table: { type: { summary: 'string | number' }, defaultValue: { summary: '16px' } },
							control: { type: 'text' },
						},
						height: { description: 'Icon height. Overwrites size.', table: { type: { summary: 'string | number' } }, control: { type: 'text' } },
						width: { description: 'Icon width. Overwrites size.', table: { type: { summary: 'string | number' } }, control: { type: 'text' } },
						viewBox: {
							description: 'SVG view box',
							defaultValue: '0 0 56 56',
							table: { type: { summary: 'string' }, defaultValue: { summary: '0 0 56 56' } },
							control: { type: 'text' },
						},
						...componentArgs.F,
					},
				},
				Default = (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...props });
			Default.args = { icon: 'cogs' };
			const Custom = (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...props });
			Custom.args = { color: '#00cee1', icon: 'cog', size: '60px' };
			const CustomPath = (props) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...props });
			CustomPath.args = {
				path: 'M12.9,13.8C12.9,13.8,12.9,13.8,12.9,13.8c-0.1,0.1-0.3,0.2-0.5,0.2C4.5,17.9,1.9,28.8,6.6,38.5l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C43.5,20.6,46.2,9.7,41.5,0L12.9,13.8zM8.6,42.1C8.6,42.1,8.6,42.1,8.6,42.1c-0.1,0.1-0.3,0.1-0.5,0.2C0.3,46.1-2.4,57,2.3,66.7l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L8.6,42.1z',
				size: '70px',
				viewBox: '0 0 70 70',
			};
			const Gallery = () =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
					style: {
						display: 'flex',
						flexWrap: 'wrap',
						fontFamily:
							'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
						fontSize: '10px',
					},
					children: Object.keys(paths.c).map((icon) =>
						(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
							style: { marginBottom: '40px' },
							children: [
								(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { icon, size: '40px', style: { padding: '20px' } }),
								(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { style: { textAlign: 'center' }, children: icon }),
							],
						})
					),
				});
			(Gallery.parameters = { controls: { expanded: !1, disabled: !0 }, options: { showPanel: !1 } }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...Default.parameters?.docs?.source },
					},
				}),
				(Custom.parameters = {
					...Custom.parameters,
					docs: {
						...Custom.parameters?.docs,
						source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...Custom.parameters?.docs?.source },
					},
				}),
				(CustomPath.parameters = {
					...CustomPath.parameters,
					docs: {
						...CustomPath.parameters?.docs,
						source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...CustomPath.parameters?.docs?.source },
					},
				}),
				(Gallery.parameters = {
					...Gallery.parameters,
					docs: {
						...Gallery.parameters?.docs,
						source: {
							originalSource:
								"(): JSX.Element => {\n  return <div style={{\n    display: 'flex',\n    flexWrap: 'wrap',\n    fontFamily: '\"Nunito Sans\",-apple-system,\".SFNSText-Regular\",\"San Francisco\",BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n    fontSize: '10px'\n  }}>\n            {Object.keys(iconPaths).map(icon => {\n      return <div style={{\n        marginBottom: '40px'\n      }}>\n                        <Icon icon={icon as IconType} size=\"40px\" style={{\n          padding: '20px'\n        }} />\n                        <div style={{\n          textAlign: 'center'\n        }}>{icon}</div>\n                    </div>;\n    })}\n        </div>;\n}",
							...Gallery.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'Custom', 'CustomPath', 'Gallery'];
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
	},
]);
