'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7643],
	{
		'./components/src/components/Trackers/ResultTracker/ResultTracker.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => ResultTracker_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				ResultTracker = __webpack_require__('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			var snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				Result = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx');
			const ResultTracker_stories = {
					title: 'Trackers/Result',
					component: ResultTracker.o,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# ResultTracker\n\nAdds impression, render and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\n## Usage\n```jsx\nimport { ResultTracker } from '@searchspring/snap-preact-components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```jsx\n<ResultTracker controller={controller} result={result}>\n\t<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```jsx\n<ResultTracker controller={controller} result={result}>\n\t<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```jsx\n<ResultTracker controller={controller} result={result}>\n\t<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `render`, `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```jsx\n<ResultTracker controller={controller} result={result} track={{ render: false, impression: false }}>\n\t<Result result={result}></Result>\n</ResultTracker>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '250px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: {
							description: 'Controller reference',
							type: { required: !0 },
							table: { type: { summary: 'Controller' } },
							control: { type: 'none' },
						},
						result: {
							description: 'Result store Product reference',
							type: { required: !0 },
							table: { type: { summary: 'result store Product object' } },
							control: { type: 'none' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } }),
				Default = (props, { loaded: { controller } }) => {
					const firstResult = controller?.store?.results[0];
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(ResultTracker.o, {
						...props,
						controller,
						result: firstResult,
						children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { result: firstResult }),
					});
				};
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(props: ResultTrackerProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  const firstResult = controller?.store?.results[0] as Product;\n  return <ResultTracker {...props} controller={controller} result={firstResult}>\n            <Result result={firstResult} />\n        </ResultTracker>;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { o: () => ResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts');
			const CSS_ResultTracker = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({}),
				ResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('resultTracker', globalTheme, {}, properties),
						{ children, result, track, controller, className, internalClassName, disableStyles, style } = props,
						mergedTrack = { render: !0, impression: !0, click: !0, ...track },
						{ ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Q)();
					inViewport && mergedTrack.impression && 'product' === result.type && controller?.track.product.impression(result);
					const styling = {};
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_ResultTracker(), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__result-tracker',
								`ss__${controller?.type}-result-tracker`,
								className,
								internalClassName
							),
							onClick: (e) => {
								'product' === result.type && mergedTrack.click && controller?.track.product.click(e, result);
							},
							ref,
							...styling,
							children,
						})
					);
				});
		},
		'./components/src/hooks/useIntersectionAdvanced.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersectionAdvanced });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersectionAdvanced = (ref, options = {}) => {
				const { rootMargin = '0px', fireOnce = !1, threshold = 0, minVisibleTime = 0, resetKey } = options,
					[isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					visibleTimerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					visibleStartRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					lastResetKeyRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(resetKey);
				return (
					resetKey !== lastResetKeyRef.current &&
						(setIntersecting(!1),
						visibleTimerRef.current && (window.clearTimeout(visibleTimerRef.current), (visibleTimerRef.current = null)),
						(visibleStartRef.current = null),
						(lastResetKeyRef.current = resetKey)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						setIntersecting(!1);
						let observer = null,
							pollInterval = null;
						if (!window.IntersectionObserver || !ref.current) return;
						const clearPoll = () => {
								pollInterval && (window.clearInterval(pollInterval), (pollInterval = null));
							},
							handleVisible = () => {
								minVisibleTime > 0
									? ((visibleStartRef.current = Date.now()),
									  visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									  (visibleTimerRef.current = window.setTimeout(() => {
											setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current);
									  }, minVisibleTime)))
									: (setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current));
							},
							handleHidden = () => {
								visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									(visibleTimerRef.current = null),
									(visibleStartRef.current = null),
									setIntersecting(!1);
							};
						return (
							(observer = new IntersectionObserver(
								([entry]) => {
									entry.isIntersecting
										? ref.current && elementIsVisible(ref.current)
											? (clearPoll(), handleVisible())
											: (handleHidden(),
											  pollInterval ||
													(pollInterval = window.setInterval(() => {
														ref.current ? elementIsVisible(ref.current) && (clearPoll(), handleVisible()) : clearPoll();
													}, 250)))
										: (clearPoll(), handleHidden());
								},
								{ rootMargin, threshold }
							)),
							ref.current && observer.observe(ref.current),
							() => {
								setIntersecting(!1),
									clearPoll(),
									visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									observer && ref.current && observer.unobserve(ref.current);
							}
						);
					}, [ref, resetKey]),
					isIntersecting
				);
			};
			function elementIsVisible(el) {
				return !el || !('checkVisibility' in el) || el.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 });
			}
		},
		'./components/src/utilities/createImpressionObserver.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => createImpressionObserver });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/hooks/useIntersectionAdvanced.tsx');
			const IMPRESSION_VISIBILITY_THRESHOLD = 0.7,
				IMPRESSION_MIN_VISIBLE_TIME = 1e3;
			function createImpressionObserver(options) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return {
					ref,
					inViewport: (0, _hooks__WEBPACK_IMPORTED_MODULE_1__.v)(ref, {
						...options,
						fireOnce: !0,
						threshold: IMPRESSION_VISIBILITY_THRESHOLD,
						minVisibleTime: IMPRESSION_MIN_VISIBLE_TIME,
					}),
				};
			}
		},
	},
]);
