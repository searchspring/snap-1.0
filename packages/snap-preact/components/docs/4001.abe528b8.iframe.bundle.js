'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4001],
		{
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(u, l, n) {
				n.d(l, { o: () => T });
				var o = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = n('../../node_modules/mobx-react-lite/es/index.js'),
					t = n('../../node_modules/classnames/index.js'),
					e = n.n(t),
					r = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = n('./components/src/utilities/mergeProps.ts'),
					i = n('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, a.AH)({}) },
					T = (0, c.PA)((h) => {
						const O = (0, r.u)(),
							P = (0, s.v6)('resultTracker', O, {}, h),
							g = { impression: !0, click: !0 },
							{ children: D, result: f, track: y, controller: m, className: M, internalClassName: A, disableStyles: C, style: _ } = P,
							p = { ...g, ...y },
							{ ref: v, inViewport: j } = (0, i.Q)();
						j && p.impression && m?.track.product.impression(f);
						const d = {};
						return (
							C ? _ && (d.css = [_]) : (d.css = [E.ResultTracker(), _]),
							(0, o.Y)('div', {
								className: e()('ss__result-tracker', `ss__${m?.type}-result-tracker`, M, A),
								onClick: (k) => {
									p.click && m?.track.product.click(k, f);
								},
								ref: v,
								...d,
								children: D,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(u, l, n) {
				n.d(l, { b: () => o });
				const o = (a) => a.replace(/([A-Z])/g, (c) => '-' + c.toLowerCase());
			},
			'./src/Templates/Stores/library/components/Search.ts'(u, l, n) {
				n.r(l), n.d(l, { Search: () => o.v });
				var o = n('./components/src/components/Templates/Search/Search.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(u, l, n) {
				n.d(l, { j: () => c });
				var o = Object.prototype.hasOwnProperty;
				function a(t, e, r) {
					for (r of t.keys()) if (c(r, e)) return r;
				}
				function c(t, e) {
					var r, s, i;
					if (t === e) return !0;
					if (t && e && (r = t.constructor) === e.constructor) {
						if (r === Date) return t.getTime() === e.getTime();
						if (r === RegExp) return t.toString() === e.toString();
						if (r === Array) {
							if ((s = t.length) === e.length) for (; s-- && c(t[s], e[s]); );
							return s === -1;
						}
						if (r === Set) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((i = s), (i && typeof i == 'object' && ((i = a(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((i = s[0]), (i && typeof i == 'object' && ((i = a(e, i)), !i)) || !c(s[1], e.get(i)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (t = new Uint8Array(t)), (e = new Uint8Array(e));
						else if (r === DataView) {
							if ((s = t.byteLength) === e.byteLength) for (; s-- && t.getInt8(s) === e.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((s = t.byteLength) === e.byteLength) for (; s-- && t[s] === e[s]; );
							return s === -1;
						}
						if (!r || typeof t == 'object') {
							s = 0;
							for (r in t) if ((o.call(t, r) && ++s && !o.call(e, r)) || !(r in e) || !c(t[r], e[r])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
