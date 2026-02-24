'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[3287],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'(Ce, ae, h) {
				h.d(ae, { l: () => ke });
				var k = h('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					ne = h('../../node_modules/preact/dist/preact.module.js'),
					q = h('../../node_modules/preact/hooks/dist/hooks.module.js'),
					re = h('../../node_modules/mobx-react-lite/es/index.js'),
					se = h('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					oe = h('../../node_modules/classnames/index.js'),
					X = h.n(oe),
					p = h('../../node_modules/preact/compat/dist/compat.module.js');
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
						v,
						a;
					for (a = 0; a < l.length; a++) (v = l[a]), !(o.indexOf(v) >= 0) && (e[v] = s[v]);
					return e;
				}
				var le = function (o) {
						var e = o.getBoundingClientRect();
						return { left: Math.ceil(e.left), width: Math.ceil(e.width) };
					},
					U = function (o) {
						return [].concat(o).sort(function (e, l) {
							return Number(e) - Number(l);
						});
					},
					ie = function (o) {
						var e = p.default.useRef(o);
						return (
							(e.current = o),
							p.default.useCallback(function () {
								return e.current;
							}, [])
						);
					},
					ce = {
						getPercentageForValue: function (o, e, l) {
							return Math.max(0, Math.min(100, ((o - e) / (l - e)) * 100));
						},
						getValueForClientX: function (o, e, l, v) {
							var a = e.left,
								t = e.width,
								d = (o - a) / t,
								x = (v - l) * d;
							return x + l;
						},
					};
				function ue(s) {
					var o = s.interpolator,
						e = o === void 0 ? ce : o,
						l = s.tickSize,
						v = l === void 0 ? 10 : l,
						a = s.values,
						t = s.min,
						d = s.max,
						x = s.ticks,
						_ = s.steps,
						K = s.onChange,
						W = s.onDrag,
						N = s.stepSize,
						V = p.default.useState(null),
						M = V[0],
						E = V[1],
						O = p.default.useState(),
						j = O[0],
						Y = O[1],
						T = ie({ activeHandleIndex: M, onChange: K, onDrag: W, values: a, tempValues: j }),
						B = p.default.useRef(),
						G = p.default.useCallback(
							function (n) {
								var r = le(B.current);
								return e.getValueForClientX(n, r, t, d);
							},
							[e, d, t]
						),
						H = p.default.useCallback(
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
								i ? i(S) : Y(S);
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
										S = H(i[r], b),
										y = [].concat(i.slice(0, r), [S], i.slice(r + 1)),
										P = U(y);
									m(P);
								}
							},
							[T, H]
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
										R = L === void 0 ? function () {} : L;
									document.removeEventListener('mousemove', c),
										document.removeEventListener('touchmove', c),
										document.removeEventListener('mouseup', i),
										document.removeEventListener('touchend', i);
									var z = U(b || S);
									P(z), R(z), E(null), Y();
								};
								document.addEventListener('mousemove', c),
									document.addEventListener('touchmove', c),
									document.addEventListener('mouseup', u),
									document.addEventListener('touchend', u);
							},
							[T, c]
						),
						w = p.default.useCallback(
							function (n) {
								return e.getPercentageForValue(n, t, d);
							},
							[e, d, t]
						),
						A = p.default.useMemo(
							function () {
								var n = x || _;
								if (!n) {
									for (n = [t]; n[n.length - 1] < d - v; ) n.push(n[n.length - 1] + v);
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
											return $({ key: S, style: $({ position: 'absolute', width: 0, left: w(r) + '%', transform: 'translateX(-50%)' }, P) }, L);
										},
									};
								});
							},
							[x, w, d, t, _, v]
						),
						F = p.default.useMemo(
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
												R = w(n[u - 1] ? n[u - 1] : t),
												z = w(r) - R;
											return $({ key: S, style: $({ position: 'absolute', left: R + '%', width: z + '%' }, P) }, L);
										},
									};
								});
							},
							[w, d, t, j, a]
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
												R = f.onTouchStart,
												z = f.style,
												we = z === void 0 ? {} : z,
												Se = I(f, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
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
														C.persist(), D(C, r), R && R(C);
													},
													role: 'slider',
													'aria-valuemin': t,
													'aria-valuemax': d,
													'aria-valuenow': n,
													style: $(
														{ position: 'absolute', top: '50%', left: w(n) + '%', zIndex: r === M ? '1' : '0', transform: 'translate(-50%, -50%)' },
														we
													),
												},
												Se
											);
										},
									};
								});
							},
							[M, w, g, D, t, d, j, a]
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
					return { activeHandleIndex: M, getTrackProps: Q, ticks: A, segments: F, handles: Z };
				}
				var de = h('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					fe = h('./components/src/providers/treePath.tsx'),
					ge = h('./components/src/providers/cache.tsx'),
					me = h('./components/src/utilities/mergeProps.ts'),
					ve = h('./components/src/utilities/mergeStyles.ts');
				function he(s, o) {
					for (var e = []; o > 0; e[--o] = s);
					return e.join('');
				}
				function ee(...s) {
					for (var o = 0, e, l = s[o++], v = [], a, t, d, x; l; ) {
						if ((a = /^[^\x25]+/.exec(l))) v.push(a[0]);
						else if ((a = /^\x25{2}/.exec(l))) v.push('%');
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
								(x = a[5] - String(e).length),
								(t = a[5] ? he(d, x) : ''),
								v.push(a[4] ? e + t : t + e);
						} else throw 'Huh ?!';
						l = l.substring(a[0].length);
					}
					return v.join('');
				}
				var pe = h('./components/src/hooks/useLang.tsx'),
					_e = h('./components/src/hooks/useA11y.tsx'),
					be = h('../../node_modules/deepmerge/dist/cjs.js'),
					ye = h.n(be);
				const xe = ({
						railColor: s,
						trackColor: o,
						handleColor: e,
						valueTextColor: l,
						handleDraggingColor: v,
						showTicks: a,
						stickyHandleLabel: t,
						tickTextColor: d,
						theme: x,
					}) =>
						(0, se.AH)({
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
							'& .ss__facet-slider__rail': { background: s || x?.variables?.colors?.primary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: o || x?.variables?.colors?.secondary || '#ccc', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: e || x?.variables?.colors?.primary || '#333',
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
											background: v || e || x?.variables?.colors?.primary || '#000',
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
					ke = (0, re.PA)((s) => {
						const o = (0, de.u)(),
							e = (0, fe.LU)(),
							l = { tickSize: s.facet?.step ? s.facet?.step * 10 : 20, treePath: e },
							v = (0, me.v6)('facetSlider', o, l, s),
							{ showTicks: a, facet: t, stickyHandleLabel: d, separateHandles: x, onChange: _, onDrag: K, className: W, internalClassName: N } = v;
						let { tickSize: V } = v;
						isNaN(Number(V)) || Number(V) <= 0 ? (V = s.facet?.step ? s.facet?.step * 10 : 20) : (V = Number(V));
						const [M, E] = (0, q.J0)([t.active?.low, t.active?.high]),
							[O, j] = (0, q.J0)([t.active?.low, t.active?.high]),
							Y = (c) => {
								if (!x || !t.step) return c;
								const [g, D] = c,
									w = t.range?.low,
									A = t.range?.high,
									F = t.step;
								return g === D ? (D + F <= A ? [g, D + F] : g - F >= w ? [g - F, D] : c) : c;
							};
						(((t.active?.low || t.active?.low === 0) && t.active?.high && M[0] != t.active?.low) || M[1] != t.active?.high) &&
							(j([t.active?.low, t.active?.high]), E([t.active?.low, t.active?.high]));
						const {
								getTrackProps: T,
								ticks: B,
								segments: G,
								handles: H,
							} = ue({
								values: O,
								onChange: (c) => {
									const g = Y(c);
									j(g),
										_ && _(g),
										t?.services?.urlManager &&
											(g[0] == t.range.low && g[1] == t.range.high
												? t.services.urlManager.remove('page').remove(`filter.${t.field}`).go()
												: t.services.urlManager.remove('page').set(`filter.${t.field}`, { low: g[0], high: g[1] }).go()),
										_ && _(c);
								},
								onDrag: (c) => {
									const g = Y(c);
									j(g), K && K(g);
								},
								min: t.range?.low,
								max: t.range?.high,
								stepSize: t.step,
								tickSize: V,
							}),
							J = (0, ve.Z)(v, xe);
						return t.range && t.active && t.step
							? (0, k.Y)(ge._, {
									children: (0, k.FD)('div', {
										className: X()('ss__facet-slider', W, N),
										...T(),
										...J,
										children: [
											(0, k.FD)('div', {
												className: 'ss__facet-slider__slider',
												children: [
													a &&
														B.map(({ value: c, getTickProps: g }) =>
															(0, k.Y)('div', {
																className: 'ss__facet-slider__tick',
																...g(),
																children: (0, k.Y)('div', { className: 'ss__facet-slider__tick__label', children: c }),
															})
														),
													G.map(({ getSegmentProps: c }, g) =>
														(0, k.Y)('div', { className: `${g === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...c() })
													),
													(0, k.Y)('div', {
														className: 'ss__facet-slider__handles',
														children: H.map(({ value: c, active: g, getHandleProps: D }, w) => {
															const A = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${t.label} button, current value ${c}, ${t.range?.low ? `min value ${t.range?.low},` : ''} ${
																				t.range?.high ? `max value ${t.range?.high}` : ''
																			}`,
																		},
																	},
																},
																F = ye()(A, v.lang || {}),
																Z = (0, pe.u)(F, { facet: t, value: c });
															return (0, k.Y)('button', {
																type: 'button',
																...D({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...Z.sliderHandle?.all,
																ref: (Q) => (0, _e.iy)(Q),
																children: (0, k.Y)('div', {
																	className: X()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': g }),
																	children:
																		d &&
																		(0, k.Y)('label', {
																			className: X()(
																				'ss__facet-slider__handle__label',
																				'ss__facet-slider__handle__label--sticky',
																				`ss__facet-slider__handle__label--${w}`,
																				{ 'ss__facet-slider__handle__label--pinleft': w == 0 && c == t?.range?.low },
																				{ 'ss__facet-slider__handle__label--pinright': w == 1 && c == t?.range?.high }
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
												(0, k.Y)('div', {
													className: 'ss__facet-slider__labels',
													children: H.map(({ value: c }, g) =>
														(0, k.Y)('label', {
															className: X()('ss__facet-slider__label', `ss__facet-slider__label--${g}`),
															children: ee(t.formatValue, c),
														})
													),
												}),
										],
									}),
							  })
							: (0, k.Y)(ne.FK, {});
					});
			},
		},
	]);
})();
