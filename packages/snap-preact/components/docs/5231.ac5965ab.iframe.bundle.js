'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5231],
		{
			'../../node_modules/@mdx-js/react/index.js'(l, s, n) {
				n.d(s, { MDXProvider: () => a.xA });
				var a = n('../../node_modules/@mdx-js/react/lib/index.js');
			},
			'../../node_modules/@mdx-js/react/lib/index.js'(l, s, n) {
				n.d(s, { RP: () => r, xA: () => m });
				var a,
					u = n('../../node_modules/preact/compat/dist/compat.module.js');
				const c = u.default.createContext({});
				function i(e) {
					return t;
					function t(d) {
						const o = r(d.components);
						return a.createElement(e, { ...d, allComponents: o });
					}
				}
				function r(e) {
					const t = u.default.useContext(c);
					return u.default.useMemo(() => (typeof e == 'function' ? e(t) : { ...t, ...e }), [t, e]);
				}
				const _ = {};
				function m({ components: e, children: t, disableParentContext: d }) {
					let o;
					return d ? (o = typeof e == 'function' ? e({}) : e || _) : (o = r(e)), u.default.createElement(c.Provider, { value: o }, t);
				}
			},
		},
	]);
})();
