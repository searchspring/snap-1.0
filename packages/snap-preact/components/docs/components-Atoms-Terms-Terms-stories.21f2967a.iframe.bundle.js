'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8538],
	{
		'./components/src/components/Atoms/Terms/Terms.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Terms_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				createHoverProps = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const CSS_Terms = ({}) => (0, emotion_react_browser_esm.AH)({}),
				emIfyTerm = (term, search) => {
					if (term && search) {
						const match = term.match(((string = search), string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
						if (search && term && match && 'number' == typeof match.index) {
							const beforeMatch = term.slice(0, match.index),
								afterMatch = term.slice(match.index + search.length, term.length);
							return `${beforeMatch ? `<em>${beforeMatch}</em>` : ''}${search}${afterMatch ? `<em>${afterMatch}</em>` : ''}`;
						}
					}
					var string;
					return `<em>${term}</em>`;
				},
				Terms = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						props = (0, mergeProps.v6)('terms', globalTheme, {}, properties),
						{ title, onTermClick, limit, previewOnHover, emIfy, disableStyles, style, className, controller, styleScript } = props,
						currentInput = controller?.store?.state?.input,
						terms = props.terms || controller?.store.terms,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_Terms(stylingProps), style]);
					const termsToShow = limit ? terms?.slice(0, limit) : terms;
					return termsToShow?.length
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									...styling,
									className: classnames_default()('ss__terms', className),
									children: [
										title
											? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
													className: 'ss__terms__title',
													children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { children: title }),
											  })
											: null,
										(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'ss__terms__options',
											role: 'list',
											'aria-label': title,
											children: termsToShow?.map((term, idx) => {
												const defaultLang = {
														term: {
															value: `${emIfy ? emIfyTerm(term.value, currentInput || '') : term.value}`,
															attributes: { 'aria-label': `item ${idx + 1} of ${termsToShow.length}, ${term.value}` },
														},
													},
													lang = cjs_default()(defaultLang, props.lang || {}),
													mergedLang = (0, useLang.u)(lang, { index: idx, numberOfTerms: termsToShow.length, term });
												return (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
													className: classnames_default()('ss__terms__option', { 'ss__terms__option--active': term.active }),
													children: (0, emotion_react_jsx_runtime_browser_esm.Y)('a', {
														onClick: (e) =>
															((e, term) => {
																onTermClick && onTermClick(e, term), controller?.setFocused && controller?.setFocused();
															})(e, term),
														href: term.url.href,
														...(previewOnHover ? (0, createHoverProps.l)(term.preview) : {}),
														role: 'link',
														...mergedLang.term?.all,
													}),
												});
											}),
										}),
									],
								}),
						  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				});
			var snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Terms_stories = {
					title: 'Atoms/Terms',
					component: Terms,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Terms\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<Terms controller={controller} />\n```\n\n### Terms\n\nThe `terms` prop specifies a reference to an autocomplete term store, if terms are not provided, the terms in the controller store will be used. \n\n```jsx\n<Terms controller={controller} terms={terms}/>\n```\n\n### title\n\nThe `title` prop is will display the given text above the terms area. The default value is blank. \n\n```jsx\n<Terms controller={controller} title={'Suggestions'}/>\n```\n\n### limit\n\nThe `limit` prop is used for number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  \n\n```jsx\n<Terms controller={controller} limit={4}/>\n```\n\n### previewOnHover\n\nThe `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.\n\n```jsx\n<Terms controller={controller} previewOnHover={true}/>\n```\n\n### emify\n\nThe `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. \n\n```jsx\n<Terms controller={controller} emify={true}/>\n```\n\n### onTermClick\n\nThe `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. \n\n```jsx\n<Terms controller={controller} onTermClick={(e, term)=>{console.log(e, term)}}/>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { maxWidth: '900px', position: 'relative' },
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
										type: 'text',
										id: 'searchInput',
										placeholder: 'try me!',
										autoComplete: 'off',
										style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
								],
							}),
					],
					argTypes: {
						controller: {
							description: 'autocomplete controller reference',
							type: { required: !1 },
							table: { type: { summary: 'autocomplete controller object' } },
							control: { type: 'none' },
						},
						terms: {
							description: 'autocomplete term store reference',
							type: { required: !1 },
							table: { type: { summary: 'autocomplete term store object' } },
							control: { type: 'none' },
						},
						title: { description: 'terms title', type: { required: !1 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
						limit: {
							description: 'adjust the number of terms to show',
							type: { required: !1 },
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						previewOnHover: { description: 'invoke term preview upon focus', table: { type: { summary: 'boolean' } }, control: { type: 'boolean' } },
						emIfy: {
							description: 'highlight the query matched section of the term',
							table: { type: { summary: 'boolean' } },
							control: { type: 'boolean' },
						},
						onTermClick: {
							description: 'custom onClick event handler for Terms',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onTermClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.autocomplete({
					id: 'Autocomplete',
					selector: '#searchInput',
					globals: { siteId: '8uyt2m' },
					settings: { trending: { limit: 5 } },
				}),
				Default = (args, { loaded: { controller } }) => (
					setTimeout(() => {
						controller.bind();
					}),
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Terms, { ...args, controller })
				);
			(Default.loaders = [async () => ({ controller: await snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: TermsProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  setTimeout(() => {\n    controller.bind();\n  });\n  return <Terms {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label']({ data }))
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
		'./components/src/toolbox/createHoverProps/createHoverProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => createHoverProps });
			const createHoverProps = (callback, options = { delay: 333, focusElem: !0 }) => {
				let delayTimeout;
				return {
					onMouseEnter: (e) => {
						clearTimeout(delayTimeout),
							(delayTimeout = window.setTimeout(() => {
								options.focusElem && e.target.focus(), callback && callback();
							}, options.delay || 333));
					},
					onMouseLeave: () => {
						clearTimeout(delayTimeout);
					},
				};
			};
		},
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
	},
]);
