'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[3783],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(m, o, r) {
				r.d(o, { x: () => e });
				var i = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = r('../../node_modules/mobx-react-lite/es/index.js'),
					l = r('./components/src/providers/cache.tsx'),
					s = r('./components/src/components/Templates/Search/Search.tsx');
				const e = (0, a.PA)((n) => (0, i.Y)(l._, { children: (0, i.Y)(s.v, { ...n, alias: 'searchCollapsible' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(m, o, r) {
				r.d(o, { o: () => h });
				var i = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = r('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					s = r('../../node_modules/classnames/index.js'),
					e = r.n(s),
					n = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = r('./components/src/utilities/mergeProps.ts'),
					c = r('./components/src/utilities/createImpressionObserver.ts');
				const f = { ResultTracker: () => (0, a.AH)({}) },
					h = (0, l.PA)((T) => {
						const C = (0, n.u)(),
							O = (0, t.v6)('resultTracker', C, {}, T),
							P = { impression: !0, click: !0 },
							{ children: D, result: p, track: M, controller: _, className: g, internalClassName: v, disableStyles: A, style: u } = O,
							E = { ...P, ...M },
							{ ref: x, inViewport: j } = (0, c.Q)();
						j && E.impression && _?.track.product.impression(p);
						const d = {};
						return (
							A ? u && (d.css = [u]) : (d.css = [f.ResultTracker(), u]),
							(0, i.Y)('div', {
								className: e()('ss__result-tracker', `ss__${_?.type}-result-tracker`, g, v),
								onClick: (y) => {
									E.click && _?.track.product.click(y, p);
								},
								ref: x,
								...d,
								children: D,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(m, o, r) {
				r.d(o, { b: () => i });
				const i = (a) => a.replace(/([A-Z])/g, (l) => '-' + l.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchCollapsible.ts'(m, o, r) {
				r.r(o), r.d(o, { SearchCollapsible: () => i.x });
				var i = r('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(m, o, r) {
				r.d(o, { j: () => l });
				var i = Object.prototype.hasOwnProperty;
				function a(s, e, n) {
					for (n of s.keys()) if (l(n, e)) return n;
				}
				function l(s, e) {
					var n, t, c;
					if (s === e) return !0;
					if (s && e && (n = s.constructor) === e.constructor) {
						if (n === Date) return s.getTime() === e.getTime();
						if (n === RegExp) return s.toString() === e.toString();
						if (n === Array) {
							if ((t = s.length) === e.length) for (; t-- && l(s[t], e[t]); );
							return t === -1;
						}
						if (n === Set) {
							if (s.size !== e.size) return !1;
							for (t of s) if (((c = t), (c && typeof c == 'object' && ((c = a(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (n === Map) {
							if (s.size !== e.size) return !1;
							for (t of s) if (((c = t[0]), (c && typeof c == 'object' && ((c = a(e, c)), !c)) || !l(t[1], e.get(c)))) return !1;
							return !0;
						}
						if (n === ArrayBuffer) (s = new Uint8Array(s)), (e = new Uint8Array(e));
						else if (n === DataView) {
							if ((t = s.byteLength) === e.byteLength) for (; t-- && s.getInt8(t) === e.getInt8(t); );
							return t === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((t = s.byteLength) === e.byteLength) for (; t-- && s[t] === e[t]; );
							return t === -1;
						}
						if (!n || typeof s == 'object') {
							t = 0;
							for (n in s) if ((i.call(s, n) && ++t && !i.call(e, n)) || !(n in e) || !l(s[n], e[n])) return !1;
							return Object.keys(e).length === t;
						}
					}
					return s !== s && e !== e;
				}
			},
		},
	]);
})();
