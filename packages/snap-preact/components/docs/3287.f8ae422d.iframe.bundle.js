'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3287],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'(Se, ae, v) {
				v.d(ae, { l: () => ke });
				var w = v('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					q = v('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ne = v('../../node_modules/mobx-react-lite/es/index.js'),
					re = v('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					se = v('../../node_modules/classnames/index.js'),
					X = v.n(se),
					p = v('../../node_modules/preact/compat/dist/compat.module.js');
				function $() {
					return (
						($ =
							Object.assign ||
							function (s) {
								for (var o = 1; o < arguments.length; o++) {
									var e = arguments[o];
									for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (s[l] = e[l]);
								}
								return s;
							}),
						$.apply(this, arguments)
					);
				}
				function I(s, o) {
					if (s == null) return {};
					var e = {},
						l = Object.keys(s),
						h,
						a;
					for (a = 0; a < l.length; a++) (h = l[a]), !(o.indexOf(h) >= 0) && (e[h] = s[h]);
					return e;
				}
				var oe = function (o) {
						var e = o.getBoundingClientRect();
						return { left: Math.ceil(e.left), width: Math.ceil(e.width) };
					},
					U = function (o) {
						return [].concat(o).sort(function (e, l) {
							return Number(e) - Number(l);
						});
					},
					le = function (o) {
						var e = p.default.useRef(o);
						return (
							(e.current = o),
							p.default.useCallback(function () {
								return e.current;
							}, [])
						);
					},
					ie = {
						getPercentageForValue: function (o, e, l) {
							return Math.max(0, Math.min(100, ((o - e) / (l - e)) * 100));
						},
						getValueForClientX: function (o, e, l, h) {
							var a = e.left,
								t = e.width,
								d = (o - a) / t,
								k = (h - l) * d;
							return k + l;
						},
					};
				function ce(s) {
					var o = s.interpolator,
						e = o === void 0 ? ie : o,
						l = s.tickSize,
						h = l === void 0 ? 10 : l,
						a = s.values,
						t = s.min,
						d = s.max,
						k = s.ticks,
						_ = s.steps,
						K = s.onChange,
						W = s.onDrag,
						N = s.stepSize,
						V = p.default.useState(null),
						M = V[0],
						E = V[1],
						O = p.default.useState(),
						j = O[0],
						H = O[1],
						T = le({ activeHandleIndex: M, onChange: K, onDrag: W, values: a, tempValues: j }),
						B = p.default.useRef(),
						G = p.default.useCallback(
							function (n) {
								var r = oe(B.current);
								return e.getValueForClientX(n, r, t, d);
							},
							[e, d, t]
						),
						Y = p.default.useCallback(
							function (n, r) {
								if (_) {
									var u = _.indexOf(n),
										i = u + r;
									return i >= 0 && i < _.length ? _[i] : n;
								} else {
									var f = n + N * r;
									return f >= t && f <= d ? f : n;
								}
							},
							[d, t, N, _]
						),
						J = p.default.useCallback(
							function (n) {
								var r = t,
									u = d;
								if (_)
									_.forEach(function (i) {
										i <= n && i > r && (r = i), i >= n && i < u && (u = i);
									});
								else {
									for (; r < n && r + N < n; ) r += N;
									u = Math.min(r + N, d);
								}
								return n - r < u - n ? r : u;
							},
							[d, t, N, _]
						),
						c = p.default.useCallback(
							function (n) {
								var r = T(),
									u = r.activeHandleIndex,
									i = r.onDrag,
									f = n.type === 'touchmove' ? n.changedTouches[0].clientX : n.clientX,
									m = G(f),
									b = J(m),
									S = [].concat(a.slice(0, u), [b], a.slice(u + 1));
								i ? i(S) : H(S);
							},
							[T, G, J, a]
						),
						g = p.default.useCallback(
							function (n, r) {
								var u = T(),
									i = u.values,
									f = u.onChange,
									m = f === void 0 ? function () {} : f;
								if (n.keyCode === 37 || n.keyCode === 39) {
									E(r);
									var b = n.keyCode === 37 ? -1 : 1,
										S = Y(i[r], b),
										y = [].concat(i.slice(0, r), [S], i.slice(r + 1)),
										P = U(y);
									m(P);
								}
							},
							[T, Y]
						),
						D = p.default.useCallback(
							function (n, r) {
								E(r);
								var u = function i(f) {
									var m = T(),
										b = m.tempValues,
										S = m.values,
										y = m.onChange,
										P = y === void 0 ? function () {} : y,
										L = m.onDrag,
										F = L === void 0 ? function () {} : L;
									document.removeEventListener('mousemove', c),
										document.removeEventListener('touchmove', c),
										document.removeEventListener('mouseup', i),
										document.removeEventListener('touchend', i);
									var z = U(b || S);
									P(z), F(z), E(null), H();
								};
								document.addEventListener('mousemove', c),
									document.addEventListener('touchmove', c),
									document.addEventListener('mouseup', u),
									document.addEventListener('touchend', u);
							},
							[T, c]
						),
						x = p.default.useCallback(
							function (n) {
								return e.getPercentageForValue(n, t, d);
							},
							[e, d, t]
						),
						A = p.default.useMemo(
							function () {
								var n = k || _;
								if (!n) {
									for (n = [t]; n[n.length - 1] < d - h; ) n.push(n[n.length - 1] + h);
									n.push(d);
								}
								return n.map(function (r, u) {
									return {
										value: r,
										getTickProps: function (f) {
											var m = f === void 0 ? {} : f,
												b = m.key,
												S = b === void 0 ? u : b,
												y = m.style,
												P = y === void 0 ? {} : y,
												L = I(m, ['key', 'style']);
											return $({ key: S, style: $({ position: 'absolute', width: 0, left: x(r) + '%', transform: 'translateX(-50%)' }, P) }, L);
										},
									};
								});
							},
							[k, x, d, t, _, h]
						),
						R = p.default.useMemo(
							function () {
								var n = U(j || a);
								return [].concat(n, [d]).map(function (r, u) {
									return {
										value: r,
										getSegmentProps: function (f) {
											var m = f === void 0 ? {} : f,
												b = m.key,
												S = b === void 0 ? u : b,
												y = m.style,
												P = y === void 0 ? {} : y,
												L = I(m, ['key', 'style']),
												F = x(n[u - 1] ? n[u - 1] : t),
												z = x(r) - F;
											return $({ key: S, style: $({ position: 'absolute', left: F + '%', width: z + '%' }, P) }, L);
										},
									};
								});
							},
							[x, d, t, j, a]
						),
						Z = p.default.useMemo(
							function () {
								return (j || a).map(function (n, r) {
									return {
										value: n,
										active: r === M,
										getHandleProps: function (i) {
											var f = i === void 0 ? {} : i,
												m = f.key,
												b = m === void 0 ? r : m,
												S = f.ref,
												y = f.innerRef,
												P = f.onKeyDown,
												L = f.onMouseDown,
												F = f.onTouchStart,
												z = f.style,
												xe = z === void 0 ? {} : z,
												we = I(f, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return $(
												{
													key: b,
													onKeyDown: function (C) {
														C.persist(), g(C, r), P && P(C);
													},
													onMouseDown: function (C) {
														C.persist(), D(C, r), L && L(C);
													},
													onTouchStart: function (C) {
														C.persist(), D(C, r), F && F(C);
													},
													role: 'slider',
													'aria-valuemin': t,
													'aria-valuemax': d,
													'aria-valuenow': n,
													style: $(
														{ position: 'absolute', top: '50%', left: x(n) + '%', zIndex: r === M ? '1' : '0', transform: 'translate(-50%, -50%)' },
														xe
													),
												},
												we
											);
										},
									};
								});
							},
							[M, x, g, D, t, d, j, a]
						),
						Q = function (r) {
							var u = r === void 0 ? {} : r,
								i = u.style,
								f = i === void 0 ? {} : i,
								m = u.ref,
								b = I(u, ['style', 'ref']);
							return $(
								{
									ref: function (y) {
										(B.current = y), m && (typeof m == 'function' ? m(y) : (m.current = y));
									},
									style: $({ position: 'relative', userSelect: 'none' }, f),
								},
								b
							);
						};
					return { activeHandleIndex: M, getTrackProps: Q, ticks: A, segments: R, handles: Z };
				}
				var ue = v('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					de = v('./components/src/providers/treePath.tsx'),
					fe = v('./components/src/providers/cache.tsx'),
					ge = v('./components/src/utilities/mergeProps.ts'),
					me = v('./components/src/utilities/mergeStyles.ts');
				function he(s, o) {
					for (var e = []; o > 0; e[--o] = s);
					return e.join('');
				}
				function ee(...s) {
					for (var o = 0, e, l = s[o++], h = [], a, t, d, k; l; ) {
						if ((a = /^[^\x25]+/.exec(l))) h.push(a[0]);
						else if ((a = /^\x25{2}/.exec(l))) h.push('%');
						else if ((a = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(l))) {
							if ((e = s[a[1] || o++]) == null || e == null) throw 'Too few arguments.';
							if (/[^s]/.test(a[7]) && typeof e != 'number') throw 'Expecting number but found ' + typeof e;
							switch (a[7]) {
								case 'b':
									e = e.toString(2);
									break;
								case 'c':
									e = String.fromCharCode(e);
									break;
								case 'd':
									e = parseInt(e);
									break;
								case 'e':
									e = a[6] ? e.toExponential(a[6]) : e.toExponential();
									break;
								case 'f':
									e = a[6] ? parseFloat(e).toFixed(a[6]) : parseFloat(e);
									break;
								case 'o':
									e = e.toString(8);
									break;
								case 's':
									e = (e = String(e)) && a[6] ? e.substring(0, a[6]) : e;
									break;
								case 'u':
									e = Math.abs(e);
									break;
								case 'x':
									e = e.toString(16);
									break;
								case 'X':
									e = e.toString(16).toUpperCase();
									break;
							}
							(e = /[def]/.test(a[7]) && a[2] && e > 0 ? '+' + e : e),
								(d = a[3] ? (a[3] == '0' ? '0' : a[3].charAt(1)) : ' '),
								(k = a[5] - String(e).length),
								(t = a[5] ? he(d, k) : ''),
								h.push(a[4] ? e + t : t + e);
						} else throw 'Huh ?!';
						l = l.substring(a[0].length);
					}
					return h.join('');
				}
				var ve = v('./components/src/hooks/useLang.tsx'),
					pe = v('./components/src/hooks/useA11y.tsx'),
					_e = v('../../node_modules/deepmerge/dist/cjs.js'),
					be = v.n(_e);
				const ye = ({
						railColor: s,
						trackColor: o,
						handleColor: e,
						valueTextColor: l,
						handleDraggingColor: h,
						showTicks: a,
						stickyHandleLabel: t,
						tickTextColor: d,
						theme: k,
					}) =>
						(0, re.AH)({
							display: 'flex',
							flexDirection: 'column',
							marginTop: '5px',
							marginBottom: a && t ? '20px' : a || t ? '10px' : '5px',
							'& .ss__facet-slider__slider': {
								position: 'relative',
								display: 'inline-block',
								height: '8px',
								width: 'calc(100% - 2rem)',
								margin: t ? '1rem' : '0 1rem',
								top: '10px',
							},
							'& .ss__facet-slider__tick': {
								'&:before': {
									content: "''",
									position: 'absolute',
									left: '0',
									background: 'rgba(0, 0, 0, 0.2)',
									height: '5px',
									width: '2px',
									transform: 'translate(-50%, 0.7rem)',
								},
								'& .ss__facet-slider__tick__label': {
									position: 'absolute',
									fontSize: '0.6rem',
									color: d,
									top: '100%',
									transform: 'translate(-50%, 1.2rem)',
									whiteSpace: 'nowrap',
								},
							},
							'& .ss__facet-slider__rail': { background: s || k?.variables?.colors?.primary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: o || k?.variables?.colors?.secondary || '#ccc', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: e || k?.variables?.colors?.primary || '#333',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '1.6rem',
										height: '1.6rem',
										borderRadius: '100%',
										fontSize: '0.7rem',
										whiteSpace: 'nowrap',
										color: l || 'initial',
										fontWeight: 'normal',
										transform: 'translateY(0) scale(0.9)',
										transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
										position: 'relative',
										cursor: 'pointer',
										'&:after': {
											backgroundColor: '#ffffff',
											width: '30%',
											height: '30%',
											top: '0',
											bottom: '0',
											left: '0',
											content: '""',
											position: 'absolute',
											right: '0',
											borderRadius: '12px',
											margin: 'auto',
											cursor: 'pointer',
										},
										'&.ss__facet-slider__handle--active': {
											background: h || e || k?.variables?.colors?.primary || '#000',
											'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
										},
										'& label.ss__facet-slider__handle__label': {
											display: 'inline-block',
											marginTop: a && !t ? '35px' : '20px',
											'&.ss__facet-slider__handle__label--pinleft': { left: '0px' },
											'&.ss__facet-slider__handle__label--pinright': { right: '0px' },
											'&.ss__facet-slider__handle__label--sticky': {
												position: 'absolute',
												top: '-20px',
												fontFamily: 'Roboto, Helvetica, Arial',
												fontSize: '14px',
												marginTop: '0px',
											},
										},
									},
								},
							},
							'& .ss__facet-slider__labels': {
								textAlign: 'center',
								marginTop: a && !t ? '40px' : '20px',
								color: l,
								'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
							},
						}),
					ke = (0, ne.PA)((s) => {
						const o = (0, ue.u)(),
							e = (0, de.LU)(),
							l = { tickSize: s.facet?.step ? s.facet?.step * 10 : 20, treePath: e },
							h = (0, ge.v6)('facetSlider', o, l, s),
							{ showTicks: a, facet: t, stickyHandleLabel: d, separateHandles: k, onChange: _, onDrag: K, className: W, internalClassName: N } = h;
						let { tickSize: V } = h;
						isNaN(Number(V)) || Number(V) <= 0 ? (V = s.facet?.step ? s.facet?.step * 10 : 20) : (V = Number(V));
						const [M, E] = (0, q.J0)([t.active?.low, t.active?.high]),
							[O, j] = (0, q.J0)([t.active?.low, t.active?.high]),
							H = (c) => {
								if (!k || !t.step) return c;
								const [g, D] = c,
									x = t.range?.low,
									A = t.range?.high,
									R = t.step;
								return g === D ? (D + R <= A ? [g, D + R] : g - R >= x ? [g - R, D] : c) : c;
							};
						(((t.active?.low || t.active?.low === 0) && t.active?.high && M[0] != t.active?.low) || M[1] != t.active?.high) &&
							(j([t.active?.low, t.active?.high]), E([t.active?.low, t.active?.high]));
						const {
								getTrackProps: T,
								ticks: B,
								segments: G,
								handles: Y,
							} = ce({
								values: O,
								onChange: (c) => {
									const g = H(c);
									j(g),
										_ && _(g),
										t?.services?.urlManager &&
											(g[0] == t.range.low && g[1] == t.range.high
												? t.services.urlManager.remove('page').remove(`filter.${t.field}`).go()
												: t.services.urlManager.remove('page').set(`filter.${t.field}`, { low: g[0], high: g[1] }).go()),
										_ && _(c);
								},
								onDrag: (c) => {
									const g = H(c);
									j(g), K && K(g);
								},
								min: t.range?.low,
								max: t.range?.high,
								stepSize: t.step,
								tickSize: V,
							}),
							J = (0, me.Z)(h, ye);
						return t.range && t.active && t.step
							? (0, w.Y)(fe._, {
									children: (0, w.FD)('div', {
										className: X()('ss__facet-slider', W, N),
										...T(),
										...J,
										children: [
											(0, w.FD)('div', {
												className: 'ss__facet-slider__slider',
												children: [
													a &&
														B.map(({ value: c, getTickProps: g }) =>
															(0, w.Y)('div', {
																className: 'ss__facet-slider__tick',
																...g(),
																children: (0, w.Y)('div', { className: 'ss__facet-slider__tick__label', children: c }),
															})
														),
													G.map(({ getSegmentProps: c }, g) =>
														(0, w.Y)('div', { className: `${g === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...c() })
													),
													(0, w.Y)('div', {
														className: 'ss__facet-slider__handles',
														children: Y.map(({ value: c, active: g, getHandleProps: D }, x) => {
															const A = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${t.label} button, current value ${c}, ${t.range?.low ? `min value ${t.range?.low},` : ''} ${
																				t.range?.high ? `max value ${t.range?.high}` : ''
																			}`,
																		},
																	},
																},
																R = be()(A, h.lang || {}),
																Z = (0, ve.u)(R, { facet: t, value: c });
															return (0, w.Y)('button', {
																type: 'button',
																...D({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...Z.sliderHandle?.all,
																ref: (Q) => (0, pe.iy)(Q),
																children: (0, w.Y)('div', {
																	className: X()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': g }),
																	children:
																		d &&
																		(0, w.Y)('label', {
																			className: X()(
																				'ss__facet-slider__handle__label',
																				'ss__facet-slider__handle__label--sticky',
																				`ss__facet-slider__handle__label--${x}`,
																				{ 'ss__facet-slider__handle__label--pinleft': x == 0 && c == t?.range?.low },
																				{ 'ss__facet-slider__handle__label--pinright': x == 1 && c == t?.range?.high }
																			),
																			children: ee(t.formatValue, c),
																		}),
																}),
															});
														}),
													}),
												],
											}),
											!d &&
												(0, w.Y)('div', {
													className: 'ss__facet-slider__labels',
													children: Y.map(({ value: c }, g) =>
														(0, w.Y)('label', {
															className: X()('ss__facet-slider__label', `ss__facet-slider__label--${g}`),
															children: ee(t.formatValue, c),
														})
													),
												}),
										],
									}),
							  })
							: null;
					});
			},
		},
	]);
})();
