/*! For license information please see components-Organisms-NoResults-NoResults-stories.79858a16.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3471],
	{
		'./components/src/components/Organisms/NoResults/NoResults.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithRecommendations: () => WithRecommendations,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => NoResults_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				NoResults = __webpack_require__('./components/src/components/Organisms/NoResults/NoResults.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const NoResults_stories = {
					title: 'Organisms/NoResults',
					component: NoResults.a,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# NoResults\n\nRenders no results verbiage. Props that accept strings in this component will render HTML contained within them.\n\n## Usage\n\n### contentSlot\nThe `contentSlot` prop provides a slot to provide custom content. This can be JSX, string, or stringified HTML. \n\n```jsx\nconst slot = <div>Nothing found..</div>\n\n<NoResults contentSlot={slot} />\n```\n\n### hideSuggestions\nThe `hideSuggestions` prop will prevent the suggestions list and title from rendering.\n\n```jsx\n<NoResults hideSuggestions={true} />\n```\n\n### hideContactsTitleText\nThe `hideContactsTitleText` prop allows you to hide the contacts title.\n\n```jsx\n<NoResults hideContactsTitleText={true} />\n```\n\n### suggestionsTitleText\nThe `suggestionsTitleText` prop allows you to set the inner text of the suggestions title.\n\n```jsx\n<NoResults suggestionsTitleText={\'suggestions\'} />\n```\n\n### hideSuggestionsTitleText\nThe `hideSuggestionsTitleText` prop allows you to hide the suggestions title.\n\n```jsx\n<NoResults hideSuggestionsTitleText={true} />\n```\n\n### suggestionsList\nThe `suggestionsList` prop takes an array of strings to render as suggestions \n\n```jsx\nconst list = [\n\t`Check for misspellings.`,\n\t`Remove possible redundant keywords (ie. "products").`,\n\t`Use other words to describe what you are searching for.`,\n],\n\n<NoResults suggestionsList={list} />\n```\n\n### hideContact\nThe `hideContact` prop will prevent the contact list and title from rendering.\n\n```jsx\n<NoResults hideContact={true} />\n```\n\n### contactsTitleText\nThe `contactsTitleText` prop allows you to set the inner text contacts title.\n\n```jsx\n<NoResults contactsTitleText={\'contacts\'} />\n```\n\n### contactsList\nThe `contactsList` prop takes an array of contact objects to render in the contact section. each object takes a title, and content.\n\n```jsx\nconst list = [\n\t\t\t{\n\t\t\t\ttitle: `Address`,\n\t\t\t\tcontent: `123 Street Address<br />City, State, Zipcode`,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: `Hours`,\n\t\t\t\tcontent: `Monday - Saturday, 00:00am - 00:00pm<br />Sunday, 00:00am - 00:00pm`,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: `Phone`,\n\t\t\t\tcontent: `<a href="tel:1234567890">123-456-7890</a>`,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: `Email`,\n\t\t\t\tcontent: `<a href="mailto:email@site.com">email@site.com</a>`,\n\t\t\t},\n\t\t],\n\n<NoResults contactsList={list} />\n```\n',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						contentSlot: { description: 'Slot for adding custom content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						hideSuggestions: {
							description: 'Hide suggestions',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						suggestionsTitleText: {
							description: 'Suggestions title',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Suggestions' } },
							control: { type: 'text' },
						},
						suggestionsList: {
							description: 'list of suggestions to display',
							table: { type: { summary: 'string[]' } },
							control: { type: 'object', defaultValue: [] },
						},
						hideContact: {
							description: 'Hide contact section',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideContactsTitleText: {
							description: 'Hide contact section title',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideSuggestionsTitleText: {
							description: 'Hide suggestions section title',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						contactsTitleText: {
							description: 'contact section title',
							table: {
								type: { summary: 'string' },
								defaultValue: { summary: 'Still can\'t find what you\'re looking for? <a href="/contact-us">Contact us</a>.' },
							},
							control: { type: 'text' },
						},
						contactsList: {
							description: 'list of contact lines to display',
							table: { type: { summary: '{ title, content }[]' } },
							control: { type: 'object' },
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(NoResults.a, { ...args }),
				WithRecommendations = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(NoResults.a, { ...args });
			(WithRecommendations.args = { templates: { recommendation: { enabled: !0 } } }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(WithRecommendations.parameters = {
					...WithRecommendations.parameters,
					docs: {
						...WithRecommendations.parameters?.docs,
						source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...WithRecommendations.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default', 'WithRecommendations'];
		},
		'./components/src/components/Organisms/NoResults/NoResults.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a: () => NoResults });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				_hooks_useComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				_hooks_useCreateController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx');
			const CSS_noResults = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				NoResults = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = {
							suggestionsTitleText: 'Suggestions',
							suggestionsList: [
								'Check for misspellings.',
								'Remove possible redundant keywords (ie. "products").',
								'Use other words to describe what you are searching for.',
							],
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('noResults', globalTheme, defaultProps, properties),
						{
							contentSlot,
							suggestionsTitleText,
							hideSuggestionsTitleText,
							hideContactsTitleText,
							suggestionsList,
							hideContact,
							contactsTitleText,
							hideSuggestions,
							contactsList,
							controller,
							templates,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_noResults(), style]);
					const suggestionsExist = suggestionsList && Array.isArray(suggestionsList) && 0 !== suggestionsList.length,
						contactsExist = contactsList && Array.isArray(contactsList) && 0 !== contactsList.length;
					let recommendationTemplateComponent, recommendationTemplateResultComponent, recsController;
					if (templates?.recommendation?.enabled) {
						const componentName = templates?.recommendation?.component || 'Recommendation',
							snap = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.uk)();
						if (snap?.templates) {
							const themeName = properties.theme?.name;
							let defaultResultComponentFromTheme;
							themeName && (defaultResultComponentFromTheme = snap?.templates?.config.themes[themeName]?.resultComponent);
							const resultComponentName = templates?.recommendation?.resultComponent || defaultResultComponentFromTheme,
								mergedConfig = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, templates.recommendation.config);
							(mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`),
								(recsController = (0, _hooks_useCreateController__WEBPACK_IMPORTED_MODULE_7__.i)(snap, 'recommendation', mergedConfig)),
								recsController?.store?.loaded ||
									recsController?.store?.loading ||
									'error' === recsController?.store.error?.type ||
									recsController?.search(),
								resultComponentName &&
									snap?.templates?.library.import.component.result &&
									(recommendationTemplateResultComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_8__.x)(
										snap?.templates?.library.import.component.result,
										resultComponentName
									)),
								componentName &&
									snap?.templates?.library.import.component.recommendation.default &&
									(recommendationTemplateComponent = (0, _hooks_useComponent__WEBPACK_IMPORTED_MODULE_8__.x)(
										snap?.templates?.library.import.component.recommendation.default,
										componentName
									));
						}
					}
					const RecommendationTemplateComponent = recommendationTemplateComponent,
						RecommendationTemplateResultComponent = recommendationTemplateResultComponent,
						defaultLang = {
							suggestionsTitleText: { value: suggestionsTitleText },
							suggestionsList: {
								value: `${
									suggestionsList
										? suggestionsList.map((suggestion) => `<li class="ss__no-results__suggestions__list__option">${suggestion}</li>`).join('')
										: void 0
								}\n\t\t\t`,
							},
							contactsTitleText: { value: contactsTitleText },
							contactsList: {
								value: `${
									contactsList
										? contactsList
												.map(
													(contact) =>
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_9__.p(
															contact.title
														)}'><h4 class="ss__no-results__contact__detail__title">${
															contact.title
														}</h4><p class="ss__no-results__contact__detail__content">${contact.content}</p></div>`
												)
												.join('')
										: void 0
								}`,
							},
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { controller });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__no-results', className),
						...styling,
						children: [
							contentSlot &&
								('string' == typeof contentSlot
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: 'ss__no-results__slot',
											dangerouslySetInnerHTML: { __html: contentSlot },
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: 'ss__no-results__slot',
											children: (0, _utilities__WEBPACK_IMPORTED_MODULE_12__.Y)(contentSlot, { controller, treePath }),
									  })),
							!hideSuggestions &&
								(suggestionsTitleText || suggestionsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: 'ss__no-results__suggestions',
									children: [
										suggestionsTitleText &&
											!hideSuggestionsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h3', {
												className: 'ss__no-results__suggestions__title',
												...mergedLang.suggestionsTitleText?.all,
											}),
										suggestionsExist &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('ul', {
												className: 'ss__no-results__suggestions__list',
												...mergedLang.suggestionsList?.all,
											}),
									],
								}),
							!hideContact &&
								(contactsTitleText || contactsExist) &&
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
									className: 'ss__no-results__contact',
									children: [
										contactsTitleText &&
											!hideContactsTitleText &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('h3', {
												className: 'ss__no-results__contact__title',
												...mergedLang.contactsTitleText?.all,
											}),
										contactsExist && (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', { ...mergedLang.contactsList?.all }),
									],
								}),
							RecommendationTemplateComponent && recsController?.store?.loaded
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
										className: 'ss__no-results__recommendations',
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(RecommendationTemplateComponent, {
											controller: recsController,
											title: recsController.store?.profile?.display?.templateParameters?.title,
											resultComponent: RecommendationTemplateResultComponent,
											name: 'noResultsRecommendations',
										}),
								  })
								: null,
						],
					});
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
		'./components/src/hooks/useCreateController.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { i: () => useCreateController });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useCreateController = (snap, type, config) => {
				const [controller, setController] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(void 0);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						snap
							.getController(config.id)
							.then((controller) => {
								setController(controller);
							})
							.catch(() => {
								snap.createController(type, config).then((controller) => {
									setController(controller);
								});
							});
					}, []),
					controller
				);
			};
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
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'function' == typeof input
						? input(props)
						: 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
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
		'../snap-toolbox/dist/esm/filters/handleize.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function handleize(input) {
				if ('string' != typeof input) return input;
				let handleized = input.toLowerCase();
				return (handleized = handleized.replace(/[^\w\s]/g, '').trim()), (handleized = handleized.replace(/\s/g, '-')), handleized;
			}
			__webpack_require__.d(__webpack_exports__, { p: () => handleize });
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
