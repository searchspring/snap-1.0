(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[2165],
		{
			'../../node_modules/@mdx-js/react/lib/index.js'(p, o, n) {
				'use strict';
				n.d(o, { RP: () => s, xA: () => h });
				var i,
					r = n('../../node_modules/preact/compat/dist/compat.module.js');
				const l = r.default.createContext({});
				function u(t) {
					return a;
					function a(c) {
						const d = s(c.components);
						return i.createElement(t, { ...c, allComponents: d });
					}
				}
				function s(t) {
					const a = r.default.useContext(l);
					return r.default.useMemo(() => (typeof t == 'function' ? t(a) : { ...a, ...t }), [a, t]);
				}
				const e = {};
				function h({ components: t, children: a, disableParentContext: c }) {
					let d;
					return c ? (d = typeof t == 'function' ? t({}) : t || e) : (d = s(t)), r.default.createElement(l.Provider, { value: d }, a);
				}
			},
			'./components/src/documentation/Usage/Usage.stories.mdx'(p, o, n) {
				'use strict';
				n.r(o), n.d(o, { __namedExportsOrder: () => f, __page: () => a, default: () => d });
				var i = n('../../node_modules/preact/compat/dist/compat.module.js'),
					r = n('../../node_modules/@mdx-js/react/lib/index.js'),
					l = n('../../node_modules/@storybook/blocks/dist/index.mjs');
				const u =
					"Snap Preact components are designed to be used with the Snap MobX store package `@searchspring/snap-store-mobx` .\n\nSnap stores are a dependency for Snap controllers `@searchspring/snap-controller`. Snap controllers such as `SearchController` contain a reference to the `SearchStore` that was provided in the `ControllerServices` object named `searchControllerServices` below.\n\nMany component props are tied to the design of the store for ease of use:\n\nIn this example, the `store.pagination` property is provided to the `pagination` prop of the `<Pagination />` component.\n\n\n```js\nimport { SearchController } from '@searchspring/snap-controller';\n\nconst searchController = new SearchController(searchConfig, searchControllerServices);\n\nconsole.log(searchController.store)\n```\n\n```js\nimport { Pagination } from '@searchspring/snap-preact-components';\n```\n\n```jsx\n<Pagination pagination={searchController.store.pagination} />\n```\n\n<br/>\n\n**Usage examples for each component can be seen in each component's 'Docs'.**\n";
				var s = n('./components/src/utilities/storybook.tsx'),
					e = n('../../node_modules/preact/compat/jsx-runtime.mjs');
				function h(m) {
					const g = Object.assign({ hr: 'hr' }, (0, r.RP)(), m.components);
					return (0, e.FD)(e.FK, {
						children: [
							(0, e.Y)(l.W8, { title: 'Documentation/Usage' }),
							`
`,
							(0, e.Y)('style', {
								children: `
	  .header {
	  	display: flex;
	  	align-items: center;
	  }

	  .header .subtitle {
	  	text-transform: uppercase;
	  	color: #00cee1;
	  }

	  .header img {
	  	width: 300px;
	  	margin-right: 20px;
	  }
  `,
							}),
							`
`,
							(0, e.Y)('div', { class: 'header', children: (0, e.Y)('span', { class: 'subtitle', children: 'SNAP PREACT COMPONENETS' }) }),
							`
`,
							(0, e.Y)(g.hr, {}),
							`
`,
							(0, e.Y)(l.oz, { options: { overrides: { code: s.Z } }, children: u }),
						],
					});
				}
				function t(m = {}) {
					const { wrapper: g } = Object.assign({}, (0, r.RP)(), m.components);
					return g ? (0, e.Y)(g, { ...m, children: (0, e.Y)(h, { ...m }) }) : h(m);
				}
				const a = () => {
					throw new Error('Docs-only story');
				};
				a.parameters = { docsOnly: !0 };
				const c = { title: 'Documentation/Usage', tags: ['stories-mdx'], includeStories: ['__page'] };
				(c.parameters = c.parameters || {}), (c.parameters.docs = { ...(c.parameters.docs || {}), page: t });
				const d = c,
					f = ['__page'];
			},
			'./components/src/utilities/storybook.tsx'(p, o, n) {
				'use strict';
				n.d(o, { Z: () => u });
				var i = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					u = (s) => {
						const e = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								e.current && s.className?.includes('lang-') && !s.className?.includes(l) && window?.Prism?.highlightElement(e.current);
							}, [s.className, s.children, e]),
							(0, i.Y)('code', { ...s, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function o(n) {
					var i = new Error("Cannot find module '" + n + "'");
					throw ((i.code = 'MODULE_NOT_FOUND'), i);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (p.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=documentation-Usage-Usage-stories-mdx.02d5ae70.iframe.bundle.js.map
