(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[936],
		{
			'../../node_modules/@storybook/blocks/dist/Color-6VNJS4EI.mjs'($, T, m) {
				'use strict';
				m.r(T), m.d(T, { ColorControl: () => Ie, default: () => xt });
				var k = m('../../node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs'),
					o = m('../../node_modules/preact/compat/dist/compat.module.js'),
					E,
					I,
					S,
					z;
				function h() {
					return (h =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
							}
							return e;
						}).apply(this, arguments);
				}
				function H(e, t) {
					if (e == null) return {};
					var r,
						n,
						l = {},
						a = Object.keys(e);
					for (n = 0; n < a.length; n++) t.indexOf((r = a[n])) >= 0 || (l[r] = e[r]);
					return l;
				}
				function C(e) {
					var t = (0, o.useRef)(e),
						r = (0, o.useRef)(function (n) {
							t.current && t.current(n);
						});
					return (t.current = e), r.current;
				}
				var d = function (e, t, r) {
						return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e;
					},
					_ = function (e) {
						return 'touches' in e;
					},
					j = function (e) {
						return (e && e.ownerDocument.defaultView) || self;
					},
					G = function (e, t, r) {
						var n = e.getBoundingClientRect(),
							l = _(t)
								? (function (a, s) {
										for (var u = 0; u < a.length; u++) if (a[u].identifier === s) return a[u];
										return a[0];
								  })(t.touches, r)
								: t;
						return { left: d((l.pageX - (n.left + j(e).pageXOffset)) / n.width), top: d((l.pageY - (n.top + j(e).pageYOffset)) / n.height) };
					},
					L = function (e) {
						!_(e) && e.preventDefault();
					},
					w = o.default.memo(function (e) {
						var t = e.onMove,
							r = e.onKey,
							n = H(e, ['onMove', 'onKey']),
							l = (0, o.useRef)(null),
							a = C(t),
							s = C(r),
							u = (0, o.useRef)(null),
							i = (0, o.useRef)(!1),
							c = (0, o.useMemo)(
								function () {
									var P = function (y) {
											L(y), (_(y) ? y.touches.length > 0 : y.buttons > 0) && l.current ? a(G(l.current, y, u.current)) : F(!1);
										},
										Y = function () {
											return F(!1);
										};
									function F(y) {
										var f = i.current,
											M = j(l.current),
											ue = y ? M.addEventListener : M.removeEventListener;
										ue(f ? 'touchmove' : 'mousemove', P), ue(f ? 'touchend' : 'mouseup', Y);
									}
									return [
										function (y) {
											var f = y.nativeEvent,
												M = l.current;
											if (
												M &&
												(L(f),
												!(function (Et, Ct) {
													return Ct && !_(Et);
												})(f, i.current) && M)
											) {
												if (_(f)) {
													i.current = !0;
													var ue = f.changedTouches || [];
													ue.length && (u.current = ue[0].identifier);
												}
												M.focus(), a(G(M, f, u.current)), F(!0);
											}
										},
										function (y) {
											var f = y.which || y.keyCode;
											f < 37 ||
												f > 40 ||
												(y.preventDefault(), s({ left: f === 39 ? 0.05 : f === 37 ? -0.05 : 0, top: f === 40 ? 0.05 : f === 38 ? -0.05 : 0 }));
										},
										F,
									];
								},
								[s, a]
							),
							v = c[0],
							g = c[1],
							p = c[2];
						return (
							(0, o.useEffect)(
								function () {
									return p;
								},
								[p]
							),
							o.default.createElement(
								'div',
								h({}, n, {
									onTouchStart: v,
									onMouseDown: v,
									className: 'react-colorful__interactive',
									ref: l,
									onKeyDown: g,
									tabIndex: 0,
									role: 'slider',
								})
							)
						);
					}),
					N = function (e) {
						return e.filter(Boolean).join(' ');
					},
					B = function (e) {
						var t = e.color,
							r = e.left,
							n = e.top,
							l = n === void 0 ? 0.5 : n,
							a = N(['react-colorful__pointer', e.className]);
						return o.default.createElement(
							'div',
							{ className: a, style: { top: 100 * l + '%', left: 100 * r + '%' } },
							o.default.createElement('div', { className: 'react-colorful__pointer-fill', style: { backgroundColor: t } })
						);
					},
					b = function (e, t, r) {
						return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r;
					},
					K = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
					Z = function (e) {
						return fe(D(e));
					},
					D = function (e) {
						return (
							e[0] === '#' && (e = e.substring(1)),
							e.length < 6
								? {
										r: parseInt(e[0] + e[0], 16),
										g: parseInt(e[1] + e[1], 16),
										b: parseInt(e[2] + e[2], 16),
										a: e.length === 4 ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
								  }
								: {
										r: parseInt(e.substring(0, 2), 16),
										g: parseInt(e.substring(2, 4), 16),
										b: parseInt(e.substring(4, 6), 16),
										a: e.length === 8 ? b(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
								  }
						);
					},
					se = function (e, t) {
						return t === void 0 && (t = 'deg'), Number(e) * (K[t] || 1);
					},
					ie = function (e) {
						var t = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
							e
						);
						return t
							? W({ h: se(t[1], t[2]), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					ce = ie,
					W = function (e) {
						var t = e.s,
							r = e.l;
						return { h: e.h, s: (t *= (r < 50 ? r : 100 - r) / 100) > 0 ? ((2 * t) / (r + t)) * 100 : 0, v: r + t, a: e.a };
					},
					ne = function (e) {
						return $e(x(e));
					},
					Q = function (e) {
						var t = e.s,
							r = e.v,
							n = e.a,
							l = ((200 - t) * r) / 100;
						return { h: b(e.h), s: b(l > 0 && l < 200 ? ((t * r) / 100 / (l <= 100 ? l : 200 - l)) * 100 : 0), l: b(l / 2), a: b(n, 2) };
					},
					ee = function (e) {
						var t = Q(e);
						return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
					},
					A = function (e) {
						var t = Q(e);
						return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')';
					},
					x = function (e) {
						var t = e.h,
							r = e.s,
							n = e.v,
							l = e.a;
						(t = (t / 360) * 6), (r /= 100), (n /= 100);
						var a = Math.floor(t),
							s = n * (1 - r),
							u = n * (1 - (t - a) * r),
							i = n * (1 - (1 - t + a) * r),
							c = a % 6;
						return { r: b(255 * [n, u, s, s, i, n][c]), g: b(255 * [i, n, n, u, s, s][c]), b: b(255 * [s, s, i, n, n, u][c]), a: b(l, 2) };
					},
					O = function (e) {
						var t = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
							e
						);
						return t
							? ae({ h: se(t[1], t[2]), s: Number(t[3]), v: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					U = O,
					oe = function (e) {
						var t = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
						return t
							? fe({
									r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
									g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
									b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
									a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
							  })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					Ne = oe,
					de = function (e) {
						var t = e.toString(16);
						return t.length < 2 ? '0' + t : t;
					},
					$e = function (e) {
						var t = e.r,
							r = e.g,
							n = e.b,
							l = e.a,
							a = l < 1 ? de(b(255 * l)) : '';
						return '#' + de(t) + de(r) + de(n) + a;
					},
					fe = function (e) {
						var t = e.r,
							r = e.g,
							n = e.b,
							l = e.a,
							a = Math.max(t, r, n),
							s = a - Math.min(t, r, n),
							u = s ? (a === t ? (r - n) / s : a === r ? 2 + (n - t) / s : 4 + (t - r) / s) : 0;
						return { h: b(60 * (u < 0 ? u + 6 : u)), s: b(a ? (s / a) * 100 : 0), v: b((a / 255) * 100), a: l };
					},
					ae = function (e) {
						return { h: b(e.h), s: b(e.s), v: b(e.v), a: b(e.a, 2) };
					},
					pe = o.default.memo(function (e) {
						var t = e.hue,
							r = e.onChange,
							n = N(['react-colorful__hue', e.className]);
						return o.default.createElement(
							'div',
							{ className: n },
							o.default.createElement(
								w,
								{
									onMove: function (l) {
										r({ h: 360 * l.left });
									},
									onKey: function (l) {
										r({ h: d(t + 360 * l.left, 0, 360) });
									},
									'aria-label': 'Hue',
									'aria-valuenow': b(t),
									'aria-valuemax': '360',
									'aria-valuemin': '0',
								},
								o.default.createElement(B, { className: 'react-colorful__hue-pointer', left: t / 360, color: ee({ h: t, s: 100, v: 100, a: 1 }) })
							)
						);
					}),
					be = o.default.memo(function (e) {
						var t = e.hsva,
							r = e.onChange,
							n = { backgroundColor: ee({ h: t.h, s: 100, v: 100, a: 1 }) };
						return o.default.createElement(
							'div',
							{ className: 'react-colorful__saturation', style: n },
							o.default.createElement(
								w,
								{
									onMove: function (l) {
										r({ s: 100 * l.left, v: 100 - 100 * l.top });
									},
									onKey: function (l) {
										r({ s: d(t.s + 100 * l.left, 0, 100), v: d(t.v - 100 * l.top, 0, 100) });
									},
									'aria-label': 'Color',
									'aria-valuetext': 'Saturation ' + b(t.s) + '%, Brightness ' + b(t.v) + '%',
								},
								o.default.createElement(B, { className: 'react-colorful__saturation-pointer', top: 1 - t.v / 100, left: t.s / 100, color: ee(t) })
							)
						);
					}),
					X = function (e, t) {
						if (e === t) return !0;
						for (var r in e) if (e[r] !== t[r]) return !1;
						return !0;
					},
					te = function (e, t) {
						return e.replace(/\s/g, '') === t.replace(/\s/g, '');
					},
					xe = function (e, t) {
						return e.toLowerCase() === t.toLowerCase() || X(D(e), D(t));
					};
				function Ee(e, t, r) {
					var n = C(r),
						l = (0, o.useState)(function () {
							return e.toHsva(t);
						}),
						a = l[0],
						s = l[1],
						u = (0, o.useRef)({ color: t, hsva: a });
					(0, o.useEffect)(
						function () {
							if (!e.equal(t, u.current.color)) {
								var c = e.toHsva(t);
								(u.current = { hsva: c, color: t }), s(c);
							}
						},
						[t, e]
					),
						(0, o.useEffect)(
							function () {
								var c;
								X(a, u.current.hsva) || e.equal((c = e.fromHsva(a)), u.current.color) || ((u.current = { hsva: a, color: c }), n(c));
							},
							[a, e, n]
						);
					var i = (0, o.useCallback)(function (c) {
						s(function (v) {
							return Object.assign({}, v, c);
						});
					}, []);
					return [a, i];
				}
				var Ce,
					je = typeof window < 'u' ? o.useLayoutEffect : o.useEffect,
					Re = function () {
						return Ce || m.nc;
					},
					yt = function (e) {
						Ce = e;
					},
					ye = new Map(),
					_e = function (e) {
						je(function () {
							var t = e.current ? e.current.ownerDocument : document;
							if (t !== void 0 && !ye.has(t)) {
								var r = t.createElement('style');
								(r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
									ye.set(t, r);
								var n = Re();
								n && r.setAttribute('nonce', n), t.head.appendChild(r);
							}
						}, []);
					},
					J = function (e) {
						var t = e.className,
							r = e.colorModel,
							n = e.color,
							l = n === void 0 ? r.defaultColor : n,
							a = e.onChange,
							s = H(e, ['className', 'colorModel', 'color', 'onChange']),
							u = (0, o.useRef)(null);
						_e(u);
						var i = Ee(r, l, a),
							c = i[0],
							v = i[1],
							g = N(['react-colorful', t]);
						return o.default.createElement(
							'div',
							h({}, s, { ref: u, className: g }),
							o.default.createElement(be, { hsva: c, onChange: v }),
							o.default.createElement(pe, { hue: c.h, onChange: v, className: 'react-colorful__last-control' })
						);
					},
					Se = {
						defaultColor: '000',
						toHsva: Z,
						fromHsva: function (e) {
							return ne({ h: e.h, s: e.s, v: e.v, a: 1 });
						},
						equal: xe,
					},
					Oe = function (e) {
						return o.default.createElement(J, h({}, e, { colorModel: Se }));
					},
					Te = function (e) {
						var t = e.className,
							r = e.hsva,
							n = e.onChange,
							l = { backgroundImage: 'linear-gradient(90deg, ' + A(Object.assign({}, r, { a: 0 })) + ', ' + A(Object.assign({}, r, { a: 1 })) + ')' },
							a = N(['react-colorful__alpha', t]),
							s = b(100 * r.a);
						return o.default.createElement(
							'div',
							{ className: a },
							o.default.createElement('div', { className: 'react-colorful__alpha-gradient', style: l }),
							o.default.createElement(
								w,
								{
									onMove: function (u) {
										n({ a: u.left });
									},
									onKey: function (u) {
										n({ a: d(r.a + u.left) });
									},
									'aria-label': 'Alpha',
									'aria-valuetext': s + '%',
									'aria-valuenow': s,
									'aria-valuemin': '0',
									'aria-valuemax': '100',
								},
								o.default.createElement(B, { className: 'react-colorful__alpha-pointer', left: r.a, color: A(r) })
							)
						);
					},
					q = function (e) {
						var t = e.className,
							r = e.colorModel,
							n = e.color,
							l = n === void 0 ? r.defaultColor : n,
							a = e.onChange,
							s = H(e, ['className', 'colorModel', 'color', 'onChange']),
							u = (0, o.useRef)(null);
						_e(u);
						var i = Ee(r, l, a),
							c = i[0],
							v = i[1],
							g = N(['react-colorful', t]);
						return o.default.createElement(
							'div',
							h({}, s, { ref: u, className: g }),
							o.default.createElement(be, { hsva: c, onChange: v }),
							o.default.createElement(pe, { hue: c.h, onChange: v }),
							o.default.createElement(Te, { hsva: c, onChange: v, className: 'react-colorful__last-control' })
						);
					},
					Le = { defaultColor: '0001', toHsva: Z, fromHsva: ne, equal: xe },
					_t = function (e) {
						return E.createElement(q, h({}, e, { colorModel: Le }));
					},
					Be = { defaultColor: { h: 0, s: 0, l: 0, a: 1 }, toHsva: W, fromHsva: Q, equal: X },
					wt = function (e) {
						return E.createElement(q, h({}, e, { colorModel: Be }));
					},
					Pe = { defaultColor: 'hsla(0, 0%, 0%, 1)', toHsva: ie, fromHsva: A, equal: te },
					ze = function (e) {
						return o.default.createElement(q, h({}, e, { colorModel: Pe }));
					},
					We = {
						defaultColor: { h: 0, s: 0, l: 0 },
						toHsva: function (e) {
							return W({ h: e.h, s: e.s, l: e.l, a: 1 });
						},
						fromHsva: function (e) {
							return { h: (t = Q(e)).h, s: t.s, l: t.l };
							var t;
						},
						equal: X,
					},
					kt = function (e) {
						return E.createElement(J, h({}, e, { colorModel: We }));
					},
					Ae = { defaultColor: 'hsl(0, 0%, 0%)', toHsva: ce, fromHsva: ee, equal: te },
					Ht = function (e) {
						return E.createElement(J, h({}, e, { colorModel: Ae }));
					},
					Xe = {
						defaultColor: { h: 0, s: 0, v: 0, a: 1 },
						toHsva: function (e) {
							return e;
						},
						fromHsva: ae,
						equal: X,
					},
					Mt = function (e) {
						return E.createElement(q, h({}, e, { colorModel: Xe }));
					},
					Ve = {
						defaultColor: 'hsva(0, 0%, 0%, 1)',
						toHsva: O,
						fromHsva: function (e) {
							var t = ae(e);
							return 'hsva(' + t.h + ', ' + t.s + '%, ' + t.v + '%, ' + t.a + ')';
						},
						equal: te,
					},
					It = function (e) {
						return E.createElement(q, h({}, e, { colorModel: Ve }));
					},
					Fe = {
						defaultColor: { h: 0, s: 0, v: 0 },
						toHsva: function (e) {
							return { h: e.h, s: e.s, v: e.v, a: 1 };
						},
						fromHsva: function (e) {
							var t = ae(e);
							return { h: t.h, s: t.s, v: t.v };
						},
						equal: X,
					},
					Nt = function (e) {
						return E.createElement(J, h({}, e, { colorModel: Fe }));
					},
					Ge = {
						defaultColor: 'hsv(0, 0%, 0%)',
						toHsva: U,
						fromHsva: function (e) {
							var t = ae(e);
							return 'hsv(' + t.h + ', ' + t.s + '%, ' + t.v + '%)';
						},
						equal: te,
					},
					$t = function (e) {
						return E.createElement(J, h({}, e, { colorModel: Ge }));
					},
					Ke = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: fe, fromHsva: x, equal: X },
					jt = function (e) {
						return E.createElement(q, h({}, e, { colorModel: Ke }));
					},
					De = {
						defaultColor: 'rgba(0, 0, 0, 1)',
						toHsva: oe,
						fromHsva: function (e) {
							var t = x(e);
							return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')';
						},
						equal: te,
					},
					Ue = function (e) {
						return o.default.createElement(q, h({}, e, { colorModel: De }));
					},
					Je = {
						defaultColor: { r: 0, g: 0, b: 0 },
						toHsva: function (e) {
							return fe({ r: e.r, g: e.g, b: e.b, a: 1 });
						},
						fromHsva: function (e) {
							return { r: (t = x(e)).r, g: t.g, b: t.b };
							var t;
						},
						equal: X,
					},
					Rt = function (e) {
						return E.createElement(J, h({}, e, { colorModel: Je }));
					},
					qe = {
						defaultColor: 'rgb(0, 0, 0)',
						toHsva: Ne,
						fromHsva: function (e) {
							var t = x(e);
							return 'rgb(' + t.r + ', ' + t.g + ', ' + t.b + ')';
						},
						equal: te,
					},
					St = function (e) {
						return E.createElement(J, h({}, e, { colorModel: qe }));
					},
					Ye = /^#?([0-9A-F]{3,8})$/i,
					Ze = function (e) {
						var t = e.color,
							r = t === void 0 ? '' : t,
							n = e.onChange,
							l = e.onBlur,
							a = e.escape,
							s = e.validate,
							u = e.format,
							i = e.process,
							c = H(e, ['color', 'onChange', 'onBlur', 'escape', 'validate', 'format', 'process']),
							v = I(function () {
								return a(r);
							}),
							g = v[0],
							p = v[1],
							P = C(n),
							Y = C(l),
							F = S(
								function (f) {
									var M = a(f.target.value);
									p(M), s(M) && P(i ? i(M) : M);
								},
								[a, i, s, P]
							),
							y = S(
								function (f) {
									s(f.target.value) || p(a(r)), Y(f);
								},
								[r, a, s, Y]
							);
						return (
							z(
								function () {
									p(a(r));
								},
								[r, a]
							),
							E.createElement('input', h({}, c, { value: u ? u(g) : g, spellCheck: 'false', onChange: F, onBlur: y }))
						);
					},
					we = function (e) {
						return '#' + e;
					},
					Ot = function (e) {
						var t = e.prefixed,
							r = e.alpha,
							n = H(e, ['prefixed', 'alpha']),
							l = S(
								function (s) {
									return s.replace(/([^0-9A-F]+)/gi, '').substring(0, r ? 8 : 6);
								},
								[r]
							),
							a = S(
								function (s) {
									return (function (u, i) {
										var c = Ye.exec(u),
											v = c ? c[1].length : 0;
										return v === 3 || v === 6 || (!!i && v === 4) || (!!i && v === 8);
									})(s, r);
								},
								[r]
							);
						return E.createElement(Ze, h({}, n, { escape: l, format: t ? we : void 0, process: we, validate: a }));
					},
					Qe = m('../../node_modules/color-convert/index.js'),
					R = m.n(Qe),
					et = m('../../node_modules/lodash/throttle.js'),
					tt = m.n(et),
					V = m('../../node_modules/@storybook/theming/dist/index.mjs'),
					le = m('../../node_modules/@storybook/components/dist/index.mjs'),
					rt = V.I4.div({ position: 'relative', maxWidth: 250 }),
					nt = (0, V.I4)(le.kR)({ position: 'absolute', zIndex: 1, top: 4, left: 4 }),
					ot = V.I4.div({
						width: 200,
						margin: 5,
						'.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
						'.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
						'.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
					}),
					at = (0, V.I4)(le._)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
					lt = V.I4.div({ display: 'grid', gridTemplateColumns: 'repeat(9, 16px)', gap: 6, padding: 3, marginTop: 5, width: 200 }),
					ut = V.I4.div(({ theme: e, active: t }) => ({
						width: 16,
						height: 16,
						boxShadow: t ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px` : `${e.appBorderColor} 0 0 0 1px inset`,
						borderRadius: e.appBorderRadius,
					})),
					st = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
					ke = ({ value: e, active: t, onClick: r, style: n, ...l }) => {
						let a = `linear-gradient(${e}, ${e}), ${st}, linear-gradient(#fff, #fff)`;
						return o.default.createElement(ut, { ...l, active: t, onClick: r, style: { ...n, backgroundImage: a } });
					},
					it = (0, V.I4)(le.lV.Input)(({ theme: e }) => ({
						width: '100%',
						paddingLeft: 30,
						paddingRight: 30,
						boxSizing: 'border-box',
						fontFamily: e.typography.fonts.base,
					})),
					ct = (0, V.I4)(le.FI)(({ theme: e }) => ({
						position: 'absolute',
						zIndex: 1,
						top: 6,
						right: 7,
						width: 20,
						height: 20,
						padding: 4,
						boxSizing: 'border-box',
						cursor: 'pointer',
						color: e.input.color,
					})),
					He = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(He || {}),
					he = Object.values(He),
					dt = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
					ft = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
					ht = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
					ge = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
					vt = /^\s*#?([0-9a-f]{3})\s*$/i,
					mt = { hex: Oe, rgb: Ue, hsl: ze },
					ve = { hex: 'transparent', rgb: 'rgba(0, 0, 0, 0)', hsl: 'hsla(0, 0%, 0%, 0)' },
					Me = (e) => {
						let t = e?.match(dt);
						if (!t) return [0, 0, 0, 1];
						let [, r, n, l, a = 1] = t;
						return [r, n, l, a].map(Number);
					},
					re = (e) => {
						if (!e) return;
						let t = !0;
						if (ft.test(e)) {
							let [s, u, i, c] = Me(e),
								[v, g, p] = R().rgb.hsl([s, u, i]) || [0, 0, 0];
							return {
								valid: t,
								value: e,
								keyword: R().rgb.keyword([s, u, i]),
								colorSpace: 'rgb',
								rgb: e,
								hsl: `hsla(${v}, ${g}%, ${p}%, ${c})`,
								hex: `#${R().rgb.hex([s, u, i]).toLowerCase()}`,
							};
						}
						if (ht.test(e)) {
							let [s, u, i, c] = Me(e),
								[v, g, p] = R().hsl.rgb([s, u, i]) || [0, 0, 0];
							return {
								valid: t,
								value: e,
								keyword: R().hsl.keyword([s, u, i]),
								colorSpace: 'hsl',
								rgb: `rgba(${v}, ${g}, ${p}, ${c})`,
								hsl: e,
								hex: `#${R().hsl.hex([s, u, i]).toLowerCase()}`,
							};
						}
						let r = e.replace('#', ''),
							n = R().keyword.rgb(r) || R().hex.rgb(r),
							l = R().rgb.hsl(n),
							a = e;
						if ((/[^#a-f0-9]/i.test(e) ? (a = r) : ge.test(e) && (a = `#${r}`), a.startsWith('#'))) t = ge.test(a);
						else
							try {
								R().keyword.hex(a);
							} catch {
								t = !1;
							}
						return {
							valid: t,
							value: a,
							keyword: R().rgb.keyword(n),
							colorSpace: 'hex',
							rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
							hsl: `hsla(${l[0]}, ${l[1]}%, ${l[2]}%, 1)`,
							hex: a,
						};
					},
					gt = (e, t, r) => {
						if (!e || !t?.valid) return ve[r];
						if (r !== 'hex') return t?.[r] || ve[r];
						if (!t.hex.startsWith('#'))
							try {
								return `#${R().keyword.hex(t.hex)}`;
							} catch {
								return ve.hex;
							}
						let n = t.hex.match(vt);
						if (!n) return ge.test(t.hex) ? t.hex : ve.hex;
						let [l, a, s] = n[1].split('');
						return `#${l}${l}${a}${a}${s}${s}`;
					},
					pt = (e, t) => {
						let [r, n] = (0, o.useState)(e || ''),
							[l, a] = (0, o.useState)(() => re(r)),
							[s, u] = (0, o.useState)(l?.colorSpace || 'hex');
						(0, o.useEffect)(() => {
							let g = e || '',
								p = re(g);
							n(g), a(p), u(p?.colorSpace || 'hex');
						}, [e]);
						let i = (0, o.useMemo)(() => gt(r, l, s).toLowerCase(), [r, l, s]),
							c = (0, o.useCallback)(
								(g) => {
									let p = re(g),
										P = p?.value || g || '';
									n(P), P === '' && (a(void 0), t(void 0)), p && (a(p), u(p.colorSpace), t(p.value));
								},
								[t]
							),
							v = (0, o.useCallback)(() => {
								let g = he.indexOf(s) + 1;
								g >= he.length && (g = 0), u(he[g]);
								let p = l?.[he[g]] || '';
								n(p), t(p);
							}, [l, s, t]);
						return { value: r, realValue: i, updateValue: c, color: l, colorSpace: s, cycleColorSpace: v };
					},
					me = (e) => e.replace(/\s*/, '').toLowerCase(),
					bt = (e, t, r) => {
						let [n, l] = (0, o.useState)(t?.valid ? [t] : []);
						(0, o.useEffect)(() => {
							t === void 0 && l([]);
						}, [t]);
						let a = (0, o.useMemo)(
								() =>
									(e || [])
										.map((u) => (typeof u == 'string' ? re(u) : u.title ? { ...re(u.color), keyword: u.title } : re(u.color)))
										.concat(n)
										.filter(Boolean)
										.slice(-27),
								[e, n]
							),
							s = (0, o.useCallback)(
								(u) => {
									u?.valid && (a.some((i) => me(i[r]) === me(u[r])) || l((i) => i.concat(u)));
								},
								[r, a]
							);
						return { presets: a, addPreset: s };
					},
					Ie = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: l, presetColors: a, startOpen: s = !1 }) => {
						let u = (0, o.useCallback)(tt()(r, 200), [r]),
							{ value: i, realValue: c, updateValue: v, color: g, colorSpace: p, cycleColorSpace: P } = pt(t, u),
							{ presets: Y, addPreset: F } = bt(a, g, p),
							y = mt[p];
						return o.default.createElement(
							rt,
							null,
							o.default.createElement(
								nt,
								{
									startOpen: s,
									closeOnOutsideClick: !0,
									onVisibleChange: () => F(g),
									tooltip: o.default.createElement(
										ot,
										null,
										o.default.createElement(y, { color: c === 'transparent' ? '#000000' : c, onChange: v, onFocus: n, onBlur: l }),
										Y.length > 0 &&
											o.default.createElement(
												lt,
												null,
												Y.map((f, M) =>
													o.default.createElement(
														le.kR,
														{ key: `${f.value}-${M}`, hasChrome: !1, tooltip: o.default.createElement(at, { note: f.keyword || f.value }) },
														o.default.createElement(ke, { value: f[p], active: g && me(f[p]) === me(g[p]), onClick: () => v(f.value) })
													)
												)
											)
									),
								},
								o.default.createElement(ke, { value: c, style: { margin: 4 } })
							),
							o.default.createElement(it, {
								id: (0, k.Z)(e),
								value: i,
								onChange: (f) => v(f.target.value),
								onFocus: (f) => f.target.select(),
								placeholder: 'Choose color...',
							}),
							i ? o.default.createElement(ct, { icon: 'markup', onClick: P }) : null
						);
					},
					xt = Ie;
			},
			'../../node_modules/lodash/_baseTrim.js'($, T, m) {
				var k = m('../../node_modules/lodash/_trimmedEndIndex.js'),
					o = /^\s+/;
				function E(I) {
					return I && I.slice(0, k(I) + 1).replace(o, '');
				}
				$.exports = E;
			},
			'../../node_modules/lodash/_trimmedEndIndex.js'($) {
				var T = /\s/;
				function m(k) {
					for (var o = k.length; o-- && T.test(k.charAt(o)); );
					return o;
				}
				$.exports = m;
			},
			'../../node_modules/lodash/debounce.js'($, T, m) {
				var k = m('../../node_modules/lodash/isObject.js'),
					o = m('../../node_modules/lodash/now.js'),
					E = m('../../node_modules/lodash/toNumber.js'),
					I = 'Expected a function',
					S = Math.max,
					z = Math.min;
				function h(H, C, d) {
					var _,
						j,
						G,
						L,
						w,
						N,
						B = 0,
						b = !1,
						K = !1,
						Z = !0;
					if (typeof H != 'function') throw new TypeError(I);
					(C = E(C) || 0),
						k(d) && ((b = !!d.leading), (K = 'maxWait' in d), (G = K ? S(E(d.maxWait) || 0, C) : G), (Z = 'trailing' in d ? !!d.trailing : Z));
					function D(x) {
						var O = _,
							U = j;
						return (_ = j = void 0), (B = x), (L = H.apply(U, O)), L;
					}
					function se(x) {
						return (B = x), (w = setTimeout(W, C)), b ? D(x) : L;
					}
					function ie(x) {
						var O = x - N,
							U = x - B,
							oe = C - O;
						return K ? z(oe, G - U) : oe;
					}
					function ce(x) {
						var O = x - N,
							U = x - B;
						return N === void 0 || O >= C || O < 0 || (K && U >= G);
					}
					function W() {
						var x = o();
						if (ce(x)) return ne(x);
						w = setTimeout(W, ie(x));
					}
					function ne(x) {
						return (w = void 0), Z && _ ? D(x) : ((_ = j = void 0), L);
					}
					function Q() {
						w !== void 0 && clearTimeout(w), (B = 0), (_ = N = j = w = void 0);
					}
					function ee() {
						return w === void 0 ? L : ne(o());
					}
					function A() {
						var x = o(),
							O = ce(x);
						if (((_ = arguments), (j = this), (N = x), O)) {
							if (w === void 0) return se(N);
							if (K) return clearTimeout(w), (w = setTimeout(W, C)), D(N);
						}
						return w === void 0 && (w = setTimeout(W, C)), L;
					}
					return (A.cancel = Q), (A.flush = ee), A;
				}
				$.exports = h;
			},
			'../../node_modules/lodash/now.js'($, T, m) {
				var k = m('../../node_modules/lodash/_root.js'),
					o = function () {
						return k.Date.now();
					};
				$.exports = o;
			},
			'../../node_modules/lodash/throttle.js'($, T, m) {
				var k = m('../../node_modules/lodash/debounce.js'),
					o = m('../../node_modules/lodash/isObject.js'),
					E = 'Expected a function';
				function I(S, z, h) {
					var H = !0,
						C = !0;
					if (typeof S != 'function') throw new TypeError(E);
					return (
						o(h) && ((H = 'leading' in h ? !!h.leading : H), (C = 'trailing' in h ? !!h.trailing : C)),
						k(S, z, { leading: H, maxWait: z, trailing: C })
					);
				}
				$.exports = I;
			},
			'../../node_modules/lodash/toNumber.js'($, T, m) {
				var k = m('../../node_modules/lodash/_baseTrim.js'),
					o = m('../../node_modules/lodash/isObject.js'),
					E = m('../../node_modules/lodash/isSymbol.js'),
					I = NaN,
					S = /^[-+]0x[0-9a-f]+$/i,
					z = /^0b[01]+$/i,
					h = /^0o[0-7]+$/i,
					H = parseInt;
				function C(d) {
					if (typeof d == 'number') return d;
					if (E(d)) return I;
					if (o(d)) {
						var _ = typeof d.valueOf == 'function' ? d.valueOf() : d;
						d = o(_) ? _ + '' : _;
					}
					if (typeof d != 'string') return d === 0 ? d : +d;
					d = k(d);
					var j = z.test(d);
					return j || h.test(d) ? H(d.slice(2), j ? 2 : 8) : S.test(d) ? I : +d;
				}
				$.exports = C;
			},
		},
	]);
})();
