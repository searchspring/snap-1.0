'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4123],
	{
		'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { O: () => recommendationEmailThemeComponentProps, i: () => RecommendationEmail });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const recommendationEmailThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} },
				defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({}),
				RecommendationEmail = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						defaultProps = { resultWidth: '240px', name: properties.controller?.store?.profile?.tag?.toLowerCase() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('recommendationEmail', globalTheme, defaultProps, properties),
						{ controller, results, resultComponent, resultProps, resultWidth, treePath, disableStyles, internalClassName, className } = props,
						subProps_result = {
							internalClassName: 'ss__recommendation-email__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_5__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles),
						resultsToRender = results || controller?.store?.results || [];
					return resultsToRender.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-email', className, internalClassName),
								...styling,
								children: resultsToRender.map((result, idx) =>
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(
										'div',
										{
											id: `ss-emailrec${idx}`,
											className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__recommendation-email__result-wrapper'),
											style: { display: 'block', width: resultWidth },
											children: (() => {
												if (resultComponent) {
													const ResultComponent = resultComponent;
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(ResultComponent, {
														controller,
														result,
														...resultProps,
														email: !0,
														treePath,
													});
												}
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_8__.Q, {
													result,
													hideBadge: !0,
													theme: { components: { image: { lazy: !1 } } },
													...subProps_result,
													...resultProps,
												});
											})(),
										},
										idx
									)
								),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FK, {});
				});
		},
		'./src/Templates/Stores/library/components/RecommendationEmail.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					RecommendationEmail: () => _components_src_components_Templates_RecommendationEmail__WEBPACK_IMPORTED_MODULE_0__.i,
				});
			var _components_src_components_Templates_RecommendationEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'
			);
		},
	},
]);
