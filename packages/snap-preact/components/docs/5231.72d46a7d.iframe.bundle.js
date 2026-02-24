'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5231],
		{
			'../../node_modules/@mdx-js/react/index.js'(l, d, n) {
				n.d(d, { MDXProvider: () => r.xA });
				var r = n('../../node_modules/@mdx-js/react/lib/index.js');
			},
			'../../node_modules/@mdx-js/react/lib/index.js'(l, d, n) {
				n.d(d, { RP: () => a, xA: () => i });
				var r,
					u = n('../../node_modules/preact/compat/dist/compat.module.js');
				const c = u.default.createContext({});
				function m(e) {
					return t;
					function t(s) {
						const o = a(s.components);
						return r.createElement(e, { ...s, allComponents: o });
					}
				}
				function a(e) {
					const t = u.default.useContext(c);
					return u.default.useMemo(() => (typeof e == 'function' ? e(t) : { ...t, ...e }), [t, e]);
				}
				const _ = {};
				function i({ components: e, children: t, disableParentContext: s }) {
					let o;
					return s ? (o = typeof e == 'function' ? e({}) : e || _) : (o = a(e)), u.default.createElement(c.Provider, { value: o }, t);
				}
			},
		},
	]);
})();
