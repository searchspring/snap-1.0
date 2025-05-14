'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1660],
	{
		'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { O: () => recommendationEmailThemeComponentProps, i: () => RecommendationEmail });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const recommendationEmailThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} },
				RecommendationEmail = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
						defaultProps = { resultWidth: '240px', name: properties.controller?.store?.profile?.tag?.toLowerCase() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)('recommendationEmail', globalTheme, defaultProps, properties),
						{ controller, results, resultComponent, resultProps, resultWidth, treePath, disableStyles } = props,
						subProps_result = {
							className: 'ss__recommendation-email__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_4__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						resultsToRender = results || controller?.store?.results || [];
					return resultsToRender.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
								children: resultsToRender.map((result, idx) =>
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(
										'div',
										{
											id: `ss-emailrec${idx}`,
											className: 'ss__recommendation-email__result-wrapper',
											style: { display: 'block', width: resultWidth },
											children: (() => {
												if (resultComponent) {
													const ResultComponent = resultComponent;
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(ResultComponent, {
														controller,
														result,
														...resultProps,
														email: !0,
														treePath,
													});
												}
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q, {
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
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK, {});
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
