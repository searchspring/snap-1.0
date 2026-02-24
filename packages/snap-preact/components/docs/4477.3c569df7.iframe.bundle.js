'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4477],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(m, a, r) {
				r.d(a, { j: () => e });
				var i = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = r('../../node_modules/mobx-react-lite/es/index.js'),
					o = r('./components/src/providers/cache.tsx'),
					t = r('./components/src/components/Templates/Search/Search.tsx');
				const e = (0, l.PA)((n) => (0, i.Y)(o._, { children: (0, i.Y)(t.v, { ...n, alias: 'searchHorizontal' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(m, a, r) {
				r.d(a, { o: () => h });
				var i = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = r('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					t = r('../../node_modules/classnames/index.js'),
					e = r.n(t),
					n = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = r('./components/src/utilities/mergeProps.ts'),
					c = r('./components/src/utilities/createImpressionObserver.ts');
				const f = { ResultTracker: () => (0, l.AH)({}) },
					h = (0, o.PA)((T) => {
						const O = (0, n.u)(),
							P = (0, s.v6)('resultTracker', O, {}, T),
							D = { impression: !0, click: !0 },
							{ children: M, result: p, track: g, controller: _, className: j, internalClassName: v, disableStyles: A, style: u } = P,
							E = { ...D, ...g },
							{ ref: C, inViewport: x } = (0, c.Q)();
						x && E.impression && _?.track.product.impression(p);
						const d = {};
						return (
							A ? u && (d.css = [u]) : (d.css = [f.ResultTracker(), u]),
							(0, i.Y)('div', {
								className: e()('ss__result-tracker', `ss__${_?.type}-result-tracker`, j, v),
								onClick: (y) => {
									E.click && _?.track.product.click(y, p);
								},
								ref: C,
								...d,
								children: M,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(m, a, r) {
				r.d(a, { b: () => i });
				const i = (l) => l.replace(/([A-Z])/g, (o) => '-' + o.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchHorizontal.ts'(m, a, r) {
				r.r(a), r.d(a, { SearchHorizontal: () => i.j });
				var i = r('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(m, a, r) {
				r.d(a, { j: () => o });
				var i = Object.prototype.hasOwnProperty;
				function l(t, e, n) {
					for (n of t.keys()) if (o(n, e)) return n;
				}
				function o(t, e) {
					var n, s, c;
					if (t === e) return !0;
					if (t && e && (n = t.constructor) === e.constructor) {
						if (n === Date) return t.getTime() === e.getTime();
						if (n === RegExp) return t.toString() === e.toString();
						if (n === Array) {
							if ((s = t.length) === e.length) for (; s-- && o(t[s], e[s]); );
							return s === -1;
						}
						if (n === Set) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((c = s), (c && typeof c == 'object' && ((c = l(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (n === Map) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((c = s[0]), (c && typeof c == 'object' && ((c = l(e, c)), !c)) || !o(s[1], e.get(c)))) return !1;
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
							for (n in t) if ((i.call(t, n) && ++s && !i.call(e, n)) || !(n in e) || !o(t[n], e[n])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
