'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4477],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(m, a, r) {
				r.d(a, { j: () => e });
				var c = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = r('../../node_modules/mobx-react-lite/es/index.js'),
					i = r('./components/src/providers/cache.tsx'),
					t = r('./components/src/components/Templates/Search/Search.tsx');
				const e = (0, l.PA)((n) =>
					(0, c.Y)(i._, { children: (0, c.Y)(t.v, { ...n, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(m, a, r) {
				r.d(a, { o: () => f });
				var c = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = r('../../node_modules/mobx-react-lite/es/index.js'),
					t = r('../../node_modules/classnames/index.js'),
					e = r.n(t),
					n = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = r('./components/src/utilities/mergeProps.ts'),
					o = r('./components/src/utilities/createImpressionObserver.ts');
				const h = { ResultTracker: () => (0, l.AH)({}) },
					f = (0, i.PA)((T) => {
						const O = (0, n.u)(),
							P = (0, s.v6)('resultTracker', O, {}, T),
							D = { impression: !0, click: !0 },
							{ children: M, result: p, track: j, controller: _, className: v, internalClassName: A, disableStyles: C, style: u } = P,
							E = { ...D, ...j },
							{ ref: g, inViewport: x } = (0, o.Q)();
						x && E.impression && _?.track.product.impression(p);
						const d = {};
						return (
							C ? u && (d.css = [u]) : (d.css = [h.ResultTracker(), u]),
							(0, c.Y)('div', {
								className: e()('ss__result-tracker', `ss__${_?.type}-result-tracker`, v, A),
								onClick: (y) => {
									E.click && _?.track.product.click(y, p);
								},
								ref: g,
								...d,
								children: M,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(m, a, r) {
				r.d(a, { b: () => c });
				const c = (l) => l.replace(/([A-Z])/g, (i) => '-' + i.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchHorizontal.ts'(m, a, r) {
				r.r(a), r.d(a, { SearchHorizontal: () => c.j });
				var c = r('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(m, a, r) {
				r.d(a, { j: () => i });
				var c = Object.prototype.hasOwnProperty;
				function l(t, e, n) {
					for (n of t.keys()) if (i(n, e)) return n;
				}
				function i(t, e) {
					var n, s, o;
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
							for (s of t) if (((o = s), (o && typeof o == 'object' && ((o = l(e, o)), !o)) || !e.has(o))) return !1;
							return !0;
						}
						if (n === Map) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((o = s[0]), (o && typeof o == 'object' && ((o = l(e, o)), !o)) || !i(s[1], e.get(o)))) return !1;
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
							for (n in t) if ((c.call(t, n) && ++s && !c.call(e, n)) || !(n in e) || !i(t[n], e[n])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
