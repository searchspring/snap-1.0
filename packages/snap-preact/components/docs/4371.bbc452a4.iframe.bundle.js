(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4371],
	{
		'../../node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { DocsRenderer: () => DocsRenderer });
			var compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				defaultComponents = { code: dist.XA, a: dist.zE, ...dist.Sw },
				ErrorBoundary = class extends compat_module.Component {
					constructor() {
						super(...arguments), (this.state = { hasError: !1 });
					}
					static getDerivedStateFromError() {
						return { hasError: !0 };
					}
					componentDidCatch(err) {
						let { showException } = this.props;
						showException(err);
					}
					render() {
						let { hasError } = this.state,
							{ children } = this.props;
						return hasError ? null : compat_module.default.createElement(compat_module.default.Fragment, null, children);
					}
				},
				DocsRenderer = class {
					constructor() {
						(this.render = async (context, docsParameter, element) => {
							let components = { ...defaultComponents, ...docsParameter?.components },
								TDocs = dist.kQ;
							return new Promise((resolve, reject) => {
								__webpack_require__
									.e(814)
									.then(__webpack_require__.bind(__webpack_require__, '../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js'))
									.then(({ MDXProvider }) =>
										(async (node, el) =>
											new Promise((resolve) => {
												compat_module.default.render(node, el, () => resolve(null));
											}))(
											compat_module.default.createElement(
												ErrorBoundary,
												{ showException: reject, key: Math.random() },
												compat_module.default.createElement(
													MDXProvider,
													{ components },
													compat_module.default.createElement(TDocs, { context, docsParameter })
												)
											),
											element
										)
									)
									.then(() => resolve());
							});
						}),
							(this.unmount = (element) => {
								var el;
								(el = element), compat_module.default.unmountComponentAtNode(el);
							});
					}
				};
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
