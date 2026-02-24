'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4693],
		{
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(u, o, i) {
				i.d(o, { O: () => R, i: () => y });
				var l = i('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = i('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = i('../../node_modules/mobx-react-lite/es/index.js'),
					t = i('../../node_modules/classnames/index.js'),
					e = i.n(t),
					n = i('./components/src/components/Molecules/Result/Result.tsx'),
					s = i('./components/src/utilities/defined.ts'),
					r = i('./components/src/utilities/mergeProps.ts'),
					g = i('./components/src/utilities/mergeStyles.ts'),
					M = i('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
				const R = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					D = () => (0, a.AH)({}),
					y = (0, m.PA)((_) => {
						const T = (0, M.u)(),
							C = { resultWidth: '240px', name: _.controller?.store?.profile?.tag?.toLowerCase() },
							c = (0, r.v6)('recommendationEmail', T, C, _),
							{
								controller: d,
								results: A,
								resultComponent: E,
								resultProps: p,
								resultWidth: v,
								treePath: f,
								disableStyles: L,
								internalClassName: j,
								className: B,
							} = c,
							I = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, s.s)({ disableStyles: L }), theme: c?.theme, treePath: f },
							},
							U = (0, g.Z)(c, D),
							h = A || d?.store?.results || [];
						return h.length > 0
							? (0, l.Y)('div', {
									className: e()('ss__recommendation-email', B, j),
									...U,
									children: h.map((P, O) =>
										(0, l.Y)(
											'div',
											{
												id: `ss-emailrec${O}`,
												className: e()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: v },
												children: (() => {
													if (E) {
														const W = E;
														return (0, l.Y)(W, { controller: d, result: P, ...p, email: !0, treePath: f });
													} else
														return (0, l.Y)(n.Q, { result: P, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...I.result, ...p });
												})(),
											},
											O
										)
									),
							  })
							: (0, l.Y)(l.FK, {});
					});
			},
			'./src/Templates/Stores/library/components/RecommendationEmail.ts'(u, o, i) {
				i.r(o), i.d(o, { RecommendationEmail: () => l.i });
				var l = i('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(u, o, i) {
				i.d(o, { j: () => m });
				var l = Object.prototype.hasOwnProperty;
				function a(t, e, n) {
					for (n of t.keys()) if (m(n, e)) return n;
				}
				function m(t, e) {
					var n, s, r;
					if (t === e) return !0;
					if (t && e && (n = t.constructor) === e.constructor) {
						if (n === Date) return t.getTime() === e.getTime();
						if (n === RegExp) return t.toString() === e.toString();
						if (n === Array) {
							if ((s = t.length) === e.length) for (; s-- && m(t[s], e[s]); );
							return s === -1;
						}
						if (n === Set) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((r = s), (r && typeof r == 'object' && ((r = a(e, r)), !r)) || !e.has(r))) return !1;
							return !0;
						}
						if (n === Map) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((r = s[0]), (r && typeof r == 'object' && ((r = a(e, r)), !r)) || !m(s[1], e.get(r)))) return !1;
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
							for (n in t) if ((l.call(t, n) && ++s && !l.call(e, n)) || !(n in e) || !m(t[n], e[n])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
