'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3783],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(m, o, r) {
				r.d(o, { x: () => e });
				var l = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = r('../../node_modules/mobx-react-lite/es/index.js'),
					i = r('./components/src/providers/cache.tsx'),
					t = r('./components/src/components/Templates/Search/Search.tsx');
				const e = (0, a.PA)((n) => (0, l.Y)(i._, { children: (0, l.Y)(t.v, { ...n, alias: 'searchCollapsible' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(m, o, r) {
				r.d(o, { o: () => h });
				var l = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = r('../../node_modules/mobx-react-lite/es/index.js'),
					t = r('../../node_modules/classnames/index.js'),
					e = r.n(t),
					n = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = r('./components/src/utilities/mergeProps.ts'),
					c = r('./components/src/utilities/createImpressionObserver.ts');
				const f = { ResultTracker: () => (0, a.AH)({}) },
					h = (0, i.PA)((T) => {
						const C = (0, n.u)(),
							O = (0, s.v6)('resultTracker', C, {}, T),
							P = { impression: !0, click: !0 },
							{ children: D, result: p, track: M, controller: _, className: v, internalClassName: A, disableStyles: x, style: u } = O,
							E = { ...P, ...M },
							{ ref: g, inViewport: j } = (0, c.Q)();
						j && E.impression && _?.track.product.impression(p);
						const d = {};
						return (
							x ? u && (d.css = [u]) : (d.css = [f.ResultTracker(), u]),
							(0, l.Y)('div', {
								className: e()('ss__result-tracker', `ss__${_?.type}-result-tracker`, v, A),
								onClick: (y) => {
									E.click && _?.track.product.click(y, p);
								},
								ref: g,
								...d,
								children: D,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(m, o, r) {
				r.d(o, { b: () => l });
				const l = (a) => a.replace(/([A-Z])/g, (i) => '-' + i.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchCollapsible.ts'(m, o, r) {
				r.r(o), r.d(o, { SearchCollapsible: () => l.x });
				var l = r('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(m, o, r) {
				r.d(o, { j: () => i });
				var l = Object.prototype.hasOwnProperty;
				function a(t, e, n) {
					for (n of t.keys()) if (i(n, e)) return n;
				}
				function i(t, e) {
					var n, s, c;
					if (t === e) return !0;
					if (t && e && (n = t.constructor) === e.constructor) {
						if (n === Date) return t.getTime() === e.getTime();
						if (n === RegExp) return t.toString() === e.toString();
						if (n === Array) {
							if ((s = t.length) === e.length) for (; s-- && i(t[s], e[s]); );
							return s === -1;
						}
						if (n === Set) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((c = s), (c && typeof c == 'object' && ((c = a(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (n === Map) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((c = s[0]), (c && typeof c == 'object' && ((c = a(e, c)), !c)) || !i(s[1], e.get(c)))) return !1;
							return !0;
						}
						if (n === ArrayBuffer) (t = new Uint8Array(t)), (e = new Uint8Array(e));
						else if (n === DataView) {
							if ((s = t.byteLength) === e.byteLength) for (; s-- && t.getInt8(s) === e.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((s = t.byteLength) === e.byteLength) for (; s-- && t[s] === e[s]; );
							return s === -1;
						}
						if (!n || typeof t == 'object') {
							s = 0;
							for (n in t) if ((l.call(t, n) && ++s && !l.call(e, n)) || !(n in e) || !i(t[n], e[n])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
