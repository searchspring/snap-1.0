(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7069],
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
		'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Auto: () => Auto,
					Dark: () => Dark,
					Error: () => Error,
					Light: () => Light,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => BranchOverride_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				BranchOverride = __webpack_require__('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const BranchOverride_stories = {
					title: 'Organisms/BranchOverride',
					component: BranchOverride.n,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# BranchOverride\n\nRenders a popup to show when a branch override is in place.\nExecutes `onRemoveClick` prop when the remove button is clicked.\nMust have `name` and either `details` or `error` props to render.\n\n## Components Used\n- Icon\n\n## Usage\n```jsx\nimport { BranchOverride } from '@searchspring/snap-preact-components';\n```\n\n### name\nThe required `name` prop expects a string containing the name of the override branch.\n\n```jsx\n<BranchOverride name=\"testing\" />\n```\n\n### details\nThe `details` prop expects an object containing strings for the `url` and `lastModified` date of the override branch bundle.\n\n```jsx\nconst details = {\n\turl: 'https://snapui.searchspring.io/y56s6x/next/bundle.js',\n\tlastModified: '1 Feb 2022 1:02:03 GMT'\n};\n\n<BranchOverride name=\"testing\" details={details} />\n```\n\n### error\nThe `error` prop expects an object containing strings for the `message` and `description` of the error.\n\n```jsx\nconst error = {\n\tmessage: 'Branch not found!',\n\tdescription: 'Incorrect branch name or branch no longer exists.'\n};\n\n<BranchOverride name=\"next\" error={error} />\n```\n\n### onRemoveClick\nThe `onRemoveClick` prop is a function to be called when the 'remove' button is clicked\n\n```jsx\nconst whenRemoved = (e, name) => {\n\tconsole.log(`remove clicked in the override for the '${name}' branch`);\n};\n\n<BranchOverride name=\"testing\" onRemoveClick={whenRemoved} />\n```\n\n### darkMode\nThe `darkMode` prop is used to set the component styling to prefer (or not to prefer) dark mode. By default the component will auto detect the browser preference.\n\n```jsx\nconst details = {\n\turl: 'https://snapui.searchspring.io/y56s6x/next/bundle.js',\n\tlastModified: '1 Feb 2022 1:02:03 GMT'\n};\n\n<BranchOverride next=\"testing\" details={details} darkMode={false} />\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px', position: 'relative' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						branch: { description: 'bundle branch name', type: { required: !0 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
						details: {
							description: 'Object containing details for branch override',
							type: { required: !1 },
							table: { type: { summary: '{ url: string; lastModified: string }' } },
							control: { type: 'object' },
						},
						error: {
							description: 'Object containing error message and description',
							type: { required: !1 },
							table: { type: { summary: '{ message: string; description: string }' } },
							control: { type: 'object' },
						},
						onRemoveClick: {
							description: 'optional function to run on remove button click',
							table: { type: { summary: '(e: Event, name: string) => void' } },
							control: { type: 'none' },
							action: 'onRemoveClick',
						},
						darkMode: {
							description: 'enable darkMode',
							type: { required: !1 },
							table: { type: { summary: 'boolean' } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				Auto = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(BranchOverride.n, { ...args });
			Auto.args = {
				branch: 'next',
				details: { url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
			};
			const Dark = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(BranchOverride.n, { ...args });
			Dark.args = {
				branch: 'next',
				details: { url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
				darkMode: !0,
			};
			const Error = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(BranchOverride.n, { ...args });
			Error.args = { branch: 'testing', error: { message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' } };
			const Light = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(BranchOverride.n, { ...args });
			(Light.args = {
				branch: 'next',
				details: { url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
				darkMode: !1,
			}),
				(Auto.parameters = {
					...Auto.parameters,
					docs: {
						...Auto.parameters?.docs,
						source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...Auto.parameters?.docs?.source },
					},
				}),
				(Dark.parameters = {
					...Dark.parameters,
					docs: {
						...Dark.parameters?.docs,
						source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...Dark.parameters?.docs?.source },
					},
				}),
				(Error.parameters = {
					...Error.parameters,
					docs: {
						...Error.parameters?.docs,
						source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...Error.parameters?.docs?.source },
					},
				}),
				(Light.parameters = {
					...Light.parameters,
					docs: {
						...Light.parameters?.docs,
						source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...Light.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Auto', 'Dark', 'Error', 'Light'];
		},
		'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { n: () => BranchOverride });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx');
			const defaultStyles = ({ componentTheme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						width: '360px',
						height: '120px',
						overflow: 'hidden',
						fontSize: '14px',
						position: 'fixed',
						zIndex: '9999',
						cursor: 'auto',
						bottom: '50px',
						right: 0,
						background: componentTheme.main.background,
						color: componentTheme.main.color,
						border: componentTheme.main.border,
						borderRight: 0,
						borderTopLeftRadius: '5px',
						borderBottomLeftRadius: '5px',
						boxShadow: componentTheme.main.boxShadow,
						transition: 'height ease 0.2s, right ease 0.5s 0.2s',
						'&.ss__branch-override--collapsed': {
							transition: 'height ease 0.5s 0.5s, right ease 0.5s',
							right: '-316px',
							height: '50px',
							cursor: 'pointer',
						},
						'.ss__branch-override__top': {
							padding: '10px',
							background: componentTheme.top.background,
							borderBottom: componentTheme.top.border,
							'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
							'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', padding: '5px', cursor: 'pointer' },
							'.ss__branch-override__top__button': {
								borderRadius: '5px',
								padding: '6px',
								height: '100%',
								lineHeight: '14px',
								textAlign: 'center',
								cursor: 'pointer',
								fontSize: '10px',
								border: componentTheme.top.button.border,
								color: componentTheme.top.button.color,
								float: 'right',
								marginRight: '14px',
							},
						},
						'.ss__branch-override__bottom': {
							padding: '10px 15px',
							fontSize: '12px',
							'.ss__branch-override__bottom__left': {
								fontWeight: 'bold',
								fontStyle: componentTheme.bottom.branch.style,
								color: componentTheme.bottom.branch.color,
								fontSize: '14px',
								lineHeight: '20px',
								display: 'inline-flex',
								alignItems: 'center',
								maxWidth: '180px',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								svg: { marginRight: '10px' },
							},
							'.ss__branch-override__bottom__right': {
								float: 'right',
								fontStyle: 'italic',
								color: componentTheme.bottom.additional.color,
								fontSize: '12px',
								lineHeight: '20px',
							},
							'.ss__branch-override__bottom__content': { marginTop: '10px' },
						},
					}),
				componentThemes = {
					darkTheme: {
						class: 'ss__branch-override--dark',
						main: { border: '0', background: 'rgba(59, 35, 173, 0.9)', color: '#fff', boxShadow: '#4c3ce2 1px 1px 3px 0px' },
						top: {
							background: 'rgba(59, 35, 173, 0.3)',
							border: '1px solid #4c3de1',
							logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
							button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
							close: { fill: '#fff' },
						},
						bottom: {
							content: 'Preview functionality may differ from production.',
							branch: { color: '#03cee1', style: 'italic' },
							additional: { color: '#03cee1' },
						},
					},
					lightTheme: {
						class: 'ss__branch-override--light',
						main: {
							border: '1px solid #ccc',
							background: 'rgba(255, 255, 255, 0.95)',
							color: '#515151',
							boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
						},
						top: {
							border: '1px solid #ccc',
							logo: { src: 'https://snapui.searchspring.io/searchspring.svg' },
							button: { border: '1px solid #515151', color: '#515151', content: 'STOP PREVIEW' },
							close: { fill: '#515151' },
						},
						bottom: {
							content: 'Preview functionality may differ from production.',
							branch: { color: '#3a23ad', style: 'italic' },
							additional: { color: '#3a23ad' },
						},
					},
					failureTheme: {
						class: 'ss__branch-override--error',
						main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: 'rgba(130, 6, 6, 0.4) 1px 1px 3px 0px' },
						top: {
							background: 'rgba(130, 6, 6, 0.3)',
							border: '1px solid #760000',
							logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
							button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
							close: { fill: '#fff' },
						},
						bottom: {
							content: 'Incorrect branch name or branch no longer exists.',
							branch: { color: '#be9628', style: 'italic' },
							additional: { color: '#be9628' },
						},
					},
				},
				BranchOverride = (properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('branchOverride', globalTheme, defaultProps, properties),
						{ branch, details, error, className, internalClassName, darkMode, disableStyles, onRemoveClick, treePath } = props,
						subProps_icon = {
							internalClassName: 'ss__branch-override__bottom__left__icon',
							size: '12px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						prefersDark = 'boolean' == typeof darkMode ? darkMode : !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
						[themeName, setThemeName] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(prefersDark ? 'darkTheme' : 'lightTheme'),
						[collapsed, setCollapsed] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_2__.J0)(0);
					error && setThemeName('failureTheme');
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.Z)({ ...props, componentTheme: componentThemes[themeName] }, defaultStyles);
					return (details || error) && branch
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__branch-override',
									componentThemes[themeName].class,
									{ 'ss__branch-override--collapsed': collapsed },
									className,
									internalClassName
								),
								...styling,
								onClick: (e) => {
									e.preventDefault(), e.stopPropagation(), setCollapsed(0);
								},
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__branch-override__top',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('img', {
												className: 'ss__branch-override__top__logo',
												src: componentThemes[themeName].top.logo.src,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: 'ss__branch-override__top__collapse',
												onClick: (e) => {
													e.preventDefault(), e.stopPropagation(), setCollapsed(1);
												},
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.I, {
													size: '18px',
													color: componentThemes[themeName].top.close.fill,
													...subProps_icon,
													icon: 'close-thin',
												}),
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: 'ss__branch-override__top__button',
												onClick: (e) => {
													e.preventDefault(), e.stopPropagation(), onRemoveClick && onRemoveClick(e, branch);
												},
												children: componentThemes[themeName].top.button.content,
											}),
										],
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
										className: 'ss__branch-override__bottom',
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
												className: 'ss__branch-override__bottom__left',
												children: error
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(
															_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FK,
															{
																children: [
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.I, {
																		size: '12px',
																		color: componentThemes[themeName].bottom.branch.color,
																		...subProps_icon,
																		icon: 'warn',
																	}),
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { children: error.message }),
																],
															}
													  )
													: branch,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
												className: 'ss__branch-override__bottom__right',
												children: error ? branch : details?.lastModified,
											}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
												className: 'ss__branch-override__bottom__content',
												children: error?.description || componentThemes[themeName].bottom.content,
											}),
										],
									}),
								],
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
