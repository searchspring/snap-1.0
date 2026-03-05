'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6664],
		{
			'../../node_modules/dequal/dist/index.mjs'(Je, Ie, Se) {
				Se.d(Ie, { j: () => V });
				var Q = Object.prototype.hasOwnProperty;
				function k(le, de, ue) {
					for (ue of le.keys()) if (V(ue, de)) return ue;
				}
				function V(le, de) {
					var ue, te, ce;
					if (le === de) return !0;
					if (le && de && (ue = le.constructor) === de.constructor) {
						if (ue === Date) return le.getTime() === de.getTime();
						if (ue === RegExp) return le.toString() === de.toString();
						if (ue === Array) {
							if ((te = le.length) === de.length) for (; te-- && V(le[te], de[te]); );
							return te === -1;
						}
						if (ue === Set) {
							if (le.size !== de.size) return !1;
							for (te of le) if (((ce = te), (ce && typeof ce == 'object' && ((ce = k(de, ce)), !ce)) || !de.has(ce))) return !1;
							return !0;
						}
						if (ue === Map) {
							if (le.size !== de.size) return !1;
							for (te of le) if (((ce = te[0]), (ce && typeof ce == 'object' && ((ce = k(de, ce)), !ce)) || !V(te[1], de.get(ce)))) return !1;
							return !0;
						}
						if (ue === ArrayBuffer) (le = new Uint8Array(le)), (de = new Uint8Array(de));
						else if (ue === DataView) {
							if ((te = le.byteLength) === de.byteLength) for (; te-- && le.getInt8(te) === de.getInt8(te); );
							return te === -1;
						}
						if (ArrayBuffer.isView(le)) {
							if ((te = le.byteLength) === de.byteLength) for (; te-- && le[te] === de[te]; );
							return te === -1;
						}
						if (!ue || typeof le == 'object') {
							te = 0;
							for (ue in le) if ((Q.call(le, ue) && ++te && !Q.call(de, ue)) || !(ue in de) || !V(le[ue], de[ue])) return !1;
							return Object.keys(de).length === te;
						}
					}
					return le !== le && de !== de;
				}
			},
			'../../node_modules/swiper/modules/index.mjs'(Je, Ie, Se) {
				Se.d(Ie, { Jq: () => fe, Vx: () => Ye, dK: () => Fe, Ze: () => We });
				var Q = Se('../../node_modules/swiper/shared/ssr-window.esm.mjs'),
					k = Se('../../node_modules/swiper/shared/utils.mjs'),
					V,
					le,
					de,
					ue;
				function te(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					K({
						virtual: {
							enabled: !1,
							slides: [],
							cache: !0,
							renderSlide: null,
							renderExternal: null,
							renderExternalUpdate: !0,
							addSlidesBefore: 0,
							addSlidesAfter: 0,
						},
					});
					let D;
					const H = V();
					e.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] };
					const O = H.createElement('div');
					function T(w, x) {
						const b = e.params.virtual;
						if (b.cache && e.virtual.cache[x]) return e.virtual.cache[x];
						let m;
						return (
							b.renderSlide
								? ((m = b.renderSlide.call(e, w, x)), typeof m == 'string' && ((O.innerHTML = m), (m = O.children[0])))
								: e.isElement
								? (m = le('swiper-slide'))
								: (m = le('div', e.params.slideClass)),
							m.setAttribute('data-swiper-slide-index', x),
							b.renderSlide || (m.innerHTML = w),
							b.cache && (e.virtual.cache[x] = m),
							m
						);
					}
					function y(w) {
						const { slidesPerView: x, slidesPerGroup: b, centeredSlides: m, loop: v } = e.params,
							{ addSlidesBefore: S, addSlidesAfter: I } = e.params.virtual,
							{ from: W, to: R, slides: Y, slidesGrid: $, offset: s } = e.virtual;
						e.params.cssMode || e.updateActiveIndex();
						const t = e.activeIndex || 0;
						let i;
						e.rtlTranslate ? (i = 'right') : (i = e.isHorizontal() ? 'left' : 'top');
						let r, a;
						m ? ((r = Math.floor(x / 2) + b + I), (a = Math.floor(x / 2) + b + S)) : ((r = x + (b - 1) + I), (a = (v ? x : b) + S));
						let n = t - a,
							l = t + r;
						v || ((n = Math.max(n, 0)), (l = Math.min(l, Y.length - 1)));
						let d = (e.slidesGrid[n] || 0) - (e.slidesGrid[0] || 0);
						v && t >= a ? ((n -= a), m || (d += e.slidesGrid[0])) : v && t < a && ((n = -a), m && (d += e.slidesGrid[0])),
							Object.assign(e.virtual, { from: n, to: l, offset: d, slidesGrid: e.slidesGrid, slidesBefore: a, slidesAfter: r });
						function o() {
							e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), _('virtualUpdate');
						}
						if (W === n && R === l && !w) {
							e.slidesGrid !== $ &&
								d !== s &&
								e.slides.forEach((P) => {
									P.style[i] = `${d - Math.abs(e.cssOverflowAdjustment())}px`;
								}),
								e.updateProgress(),
								_('virtualUpdate');
							return;
						}
						if (e.params.virtual.renderExternal) {
							e.params.virtual.renderExternal.call(e, {
								offset: d,
								from: n,
								to: l,
								slides: (function () {
									const A = [];
									for (let X = n; X <= l; X += 1) A.push(Y[X]);
									return A;
								})(),
							}),
								e.params.virtual.renderExternalUpdate ? o() : _('virtualUpdate');
							return;
						}
						const f = [],
							c = [],
							h = (P) => {
								let A = P;
								return P < 0 ? (A = Y.length + P) : A >= Y.length && (A = A - Y.length), A;
							};
						if (w)
							e.slides
								.filter((P) => P.matches(`.${e.params.slideClass}, swiper-slide`))
								.forEach((P) => {
									P.remove();
								});
						else
							for (let P = W; P <= R; P += 1)
								if (P < n || P > l) {
									const A = h(P);
									e.slides
										.filter((X) => X.matches(`.${e.params.slideClass}[data-swiper-slide-index="${A}"], swiper-slide[data-swiper-slide-index="${A}"]`))
										.forEach((X) => {
											X.remove();
										});
								}
						const M = v ? -Y.length : 0,
							C = v ? Y.length * 2 : Y.length;
						for (let P = M; P < C; P += 1)
							if (P >= n && P <= l) {
								const A = h(P);
								typeof R > 'u' || w ? c.push(A) : (P > R && c.push(A), P < W && f.push(A));
							}
						if (
							(c.forEach((P) => {
								e.slidesEl.append(T(Y[P], P));
							}),
							v)
						)
							for (let P = f.length - 1; P >= 0; P -= 1) {
								const A = f[P];
								e.slidesEl.prepend(T(Y[A], A));
							}
						else
							f.sort((P, A) => A - P),
								f.forEach((P) => {
									e.slidesEl.prepend(T(Y[P], P));
								});
						de(e.slidesEl, '.swiper-slide, swiper-slide').forEach((P) => {
							P.style[i] = `${d - Math.abs(e.cssOverflowAdjustment())}px`;
						}),
							o();
					}
					function g(w) {
						if (typeof w == 'object' && 'length' in w) for (let x = 0; x < w.length; x += 1) w[x] && e.virtual.slides.push(w[x]);
						else e.virtual.slides.push(w);
						y(!0);
					}
					function u(w) {
						const x = e.activeIndex;
						let b = x + 1,
							m = 1;
						if (Array.isArray(w)) {
							for (let v = 0; v < w.length; v += 1) w[v] && e.virtual.slides.unshift(w[v]);
							(b = x + w.length), (m = w.length);
						} else e.virtual.slides.unshift(w);
						if (e.params.virtual.cache) {
							const v = e.virtual.cache,
								S = {};
							Object.keys(v).forEach((I) => {
								const W = v[I],
									R = W.getAttribute('data-swiper-slide-index');
								R && W.setAttribute('data-swiper-slide-index', parseInt(R, 10) + m), (S[parseInt(I, 10) + m] = W);
							}),
								(e.virtual.cache = S);
						}
						y(!0), e.slideTo(b, 0);
					}
					function p(w) {
						if (typeof w > 'u' || w === null) return;
						let x = e.activeIndex;
						if (Array.isArray(w))
							for (let b = w.length - 1; b >= 0; b -= 1)
								e.params.virtual.cache &&
									(delete e.virtual.cache[w[b]],
									Object.keys(e.virtual.cache).forEach((m) => {
										m > w &&
											((e.virtual.cache[m - 1] = e.virtual.cache[m]),
											e.virtual.cache[m - 1].setAttribute('data-swiper-slide-index', m - 1),
											delete e.virtual.cache[m]);
									})),
									e.virtual.slides.splice(w[b], 1),
									w[b] < x && (x -= 1),
									(x = Math.max(x, 0));
						else
							e.params.virtual.cache &&
								(delete e.virtual.cache[w],
								Object.keys(e.virtual.cache).forEach((b) => {
									b > w &&
										((e.virtual.cache[b - 1] = e.virtual.cache[b]),
										e.virtual.cache[b - 1].setAttribute('data-swiper-slide-index', b - 1),
										delete e.virtual.cache[b]);
								})),
								e.virtual.slides.splice(w, 1),
								w < x && (x -= 1),
								(x = Math.max(x, 0));
						y(!0), e.slideTo(x, 0);
					}
					function E() {
						(e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), y(!0), e.slideTo(0, 0);
					}
					L('beforeInit', () => {
						if (!e.params.virtual.enabled) return;
						let w;
						if (typeof e.passedParams.virtual.slides > 'u') {
							const x = [...e.slidesEl.children].filter((b) => b.matches(`.${e.params.slideClass}, swiper-slide`));
							x &&
								x.length &&
								((e.virtual.slides = [...x]),
								(w = !0),
								x.forEach((b, m) => {
									b.setAttribute('data-swiper-slide-index', m), (e.virtual.cache[m] = b), b.remove();
								}));
						}
						w || (e.virtual.slides = e.params.virtual.slides),
							e.classNames.push(`${e.params.containerModifierClass}virtual`),
							(e.params.watchSlidesProgress = !0),
							(e.originalParams.watchSlidesProgress = !0),
							y();
					}),
						L('setTranslate', () => {
							e.params.virtual.enabled &&
								(e.params.cssMode && !e._immediateVirtual
									? (clearTimeout(D),
									  (D = setTimeout(() => {
											y();
									  }, 100)))
									: y());
						}),
						L('init update resize', () => {
							e.params.virtual.enabled && e.params.cssMode && ue(e.wrapperEl, '--swiper-virtual-size', `${e.virtualSize}px`);
						}),
						Object.assign(e.virtual, { appendSlide: g, prependSlide: u, removeSlide: p, removeAllSlides: E, update: y });
				}
				var ce, Ee, Le, Xe;
				function et(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					const D = ce(),
						H = Ee();
					(e.keyboard = { enabled: !1 }), K({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
					function O(g) {
						if (!e.enabled) return;
						const { rtlTranslate: u } = e;
						let p = g;
						p.originalEvent && (p = p.originalEvent);
						const E = p.keyCode || p.charCode,
							w = e.params.keyboard.pageUpDown,
							x = w && E === 33,
							b = w && E === 34,
							m = E === 37,
							v = E === 39,
							S = E === 38,
							I = E === 40;
						if (
							(!e.allowSlideNext && ((e.isHorizontal() && v) || (e.isVertical() && I) || b)) ||
							(!e.allowSlidePrev && ((e.isHorizontal() && m) || (e.isVertical() && S) || x))
						)
							return !1;
						if (
							!(p.shiftKey || p.altKey || p.ctrlKey || p.metaKey) &&
							!(
								D.activeElement &&
								D.activeElement.nodeName &&
								(D.activeElement.nodeName.toLowerCase() === 'input' || D.activeElement.nodeName.toLowerCase() === 'textarea')
							)
						) {
							if (e.params.keyboard.onlyInViewport && (x || b || m || v || S || I)) {
								let W = !1;
								if (Le(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && Le(e.el, `.${e.params.slideActiveClass}`).length === 0) return;
								const R = e.el,
									Y = R.clientWidth,
									$ = R.clientHeight,
									s = H.innerWidth,
									t = H.innerHeight,
									i = Xe(R);
								u && (i.left -= R.scrollLeft);
								const r = [
									[i.left, i.top],
									[i.left + Y, i.top],
									[i.left, i.top + $],
									[i.left + Y, i.top + $],
								];
								for (let a = 0; a < r.length; a += 1) {
									const n = r[a];
									if (n[0] >= 0 && n[0] <= s && n[1] >= 0 && n[1] <= t) {
										if (n[0] === 0 && n[1] === 0) continue;
										W = !0;
									}
								}
								if (!W) return;
							}
							e.isHorizontal()
								? ((x || b || m || v) && (p.preventDefault ? p.preventDefault() : (p.returnValue = !1)),
								  (((b || v) && !u) || ((x || m) && u)) && e.slideNext(),
								  (((x || m) && !u) || ((b || v) && u)) && e.slidePrev())
								: ((x || b || S || I) && (p.preventDefault ? p.preventDefault() : (p.returnValue = !1)),
								  (b || I) && e.slideNext(),
								  (x || S) && e.slidePrev()),
								_('keyPress', E);
						}
					}
					function T() {
						e.keyboard.enabled || (D.addEventListener('keydown', O), (e.keyboard.enabled = !0));
					}
					function y() {
						e.keyboard.enabled && (D.removeEventListener('keydown', O), (e.keyboard.enabled = !1));
					}
					L('init', () => {
						e.params.keyboard.enabled && T();
					}),
						L('destroy', () => {
							e.keyboard.enabled && y();
						}),
						Object.assign(e.keyboard, { enable: T, disable: y });
				}
				var tt, ze, Re;
				function st(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					const D = tt();
					K({
						mousewheel: {
							enabled: !1,
							releaseOnEdges: !1,
							invert: !1,
							forceToAxis: !1,
							sensitivity: 1,
							eventsTarget: 'container',
							thresholdDelta: null,
							thresholdTime: null,
							noMousewheelClass: 'swiper-no-mousewheel',
						},
					}),
						(e.mousewheel = { enabled: !1 });
					let H,
						O = ze(),
						T;
					const y = [];
					function g(S) {
						let Y = 0,
							$ = 0,
							s = 0,
							t = 0;
						return (
							'detail' in S && ($ = S.detail),
							'wheelDelta' in S && ($ = -S.wheelDelta / 120),
							'wheelDeltaY' in S && ($ = -S.wheelDeltaY / 120),
							'wheelDeltaX' in S && (Y = -S.wheelDeltaX / 120),
							'axis' in S && S.axis === S.HORIZONTAL_AXIS && ((Y = $), ($ = 0)),
							(s = Y * 10),
							(t = $ * 10),
							'deltaY' in S && (t = S.deltaY),
							'deltaX' in S && (s = S.deltaX),
							S.shiftKey && !s && ((s = t), (t = 0)),
							(s || t) && S.deltaMode && (S.deltaMode === 1 ? ((s *= 40), (t *= 40)) : ((s *= 800), (t *= 800))),
							s && !Y && (Y = s < 1 ? -1 : 1),
							t && !$ && ($ = t < 1 ? -1 : 1),
							{ spinX: Y, spinY: $, pixelX: s, pixelY: t }
						);
					}
					function u() {
						e.enabled && (e.mouseEntered = !0);
					}
					function p() {
						e.enabled && (e.mouseEntered = !1);
					}
					function E(S) {
						return (e.params.mousewheel.thresholdDelta && S.delta < e.params.mousewheel.thresholdDelta) ||
							(e.params.mousewheel.thresholdTime && ze() - O < e.params.mousewheel.thresholdTime)
							? !1
							: S.delta >= 6 && ze() - O < 60
							? !0
							: (S.direction < 0
									? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), _('scroll', S.raw))
									: (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), _('scroll', S.raw)),
							  (O = new D.Date().getTime()),
							  !1);
					}
					function w(S) {
						const I = e.params.mousewheel;
						if (S.direction < 0) {
							if (e.isEnd && !e.params.loop && I.releaseOnEdges) return !0;
						} else if (e.isBeginning && !e.params.loop && I.releaseOnEdges) return !0;
						return !1;
					}
					function x(S) {
						let I = S,
							W = !0;
						if (!e.enabled || S.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
						const R = e.params.mousewheel;
						e.params.cssMode && I.preventDefault();
						let Y = e.el;
						e.params.mousewheel.eventsTarget !== 'container' && (Y = document.querySelector(e.params.mousewheel.eventsTarget));
						const $ = Y && Y.contains(I.target);
						if (!e.mouseEntered && !$ && !R.releaseOnEdges) return !0;
						I.originalEvent && (I = I.originalEvent);
						let s = 0;
						const t = e.rtlTranslate ? -1 : 1,
							i = g(I);
						if (R.forceToAxis)
							if (e.isHorizontal())
								if (Math.abs(i.pixelX) > Math.abs(i.pixelY)) s = -i.pixelX * t;
								else return !0;
							else if (Math.abs(i.pixelY) > Math.abs(i.pixelX)) s = -i.pixelY;
							else return !0;
						else s = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * t : -i.pixelY;
						if (s === 0) return !0;
						R.invert && (s = -s);
						let r = e.getTranslate() + s * R.sensitivity;
						if (
							(r >= e.minTranslate() && (r = e.minTranslate()),
							r <= e.maxTranslate() && (r = e.maxTranslate()),
							(W = e.params.loop ? !0 : !(r === e.minTranslate() || r === e.maxTranslate())),
							W && e.params.nested && I.stopPropagation(),
							!e.params.freeMode || !e.params.freeMode.enabled)
						) {
							const a = { time: ze(), delta: Math.abs(s), direction: Math.sign(s), raw: S };
							y.length >= 2 && y.shift();
							const n = y.length ? y[y.length - 1] : void 0;
							if ((y.push(a), n ? (a.direction !== n.direction || a.delta > n.delta || a.time > n.time + 150) && E(a) : E(a), w(a))) return !0;
						} else {
							const a = { time: ze(), delta: Math.abs(s), direction: Math.sign(s) },
								n = T && a.time < T.time + 500 && a.delta <= T.delta && a.direction === T.direction;
							if (!n) {
								T = void 0;
								let l = e.getTranslate() + s * R.sensitivity;
								const d = e.isBeginning,
									o = e.isEnd;
								if (
									(l >= e.minTranslate() && (l = e.minTranslate()),
									l <= e.maxTranslate() && (l = e.maxTranslate()),
									e.setTransition(0),
									e.setTranslate(l),
									e.updateProgress(),
									e.updateActiveIndex(),
									e.updateSlidesClasses(),
									((!d && e.isBeginning) || (!o && e.isEnd)) && e.updateSlidesClasses(),
									e.params.loop && e.loopFix({ direction: a.direction < 0 ? 'next' : 'prev', byMousewheel: !0 }),
									e.params.freeMode.sticky)
								) {
									clearTimeout(H), (H = void 0), y.length >= 15 && y.shift();
									const f = y.length ? y[y.length - 1] : void 0,
										c = y[0];
									if ((y.push(a), f && (a.delta > f.delta || a.direction !== f.direction))) y.splice(0);
									else if (y.length >= 15 && a.time - c.time < 500 && c.delta - a.delta >= 1 && a.delta <= 6) {
										const h = s > 0 ? 0.8 : 0.2;
										(T = a),
											y.splice(0),
											(H = Re(() => {
												e.slideToClosest(e.params.speed, !0, void 0, h);
											}, 0));
									}
									H ||
										(H = Re(() => {
											(T = a), y.splice(0), e.slideToClosest(e.params.speed, !0, void 0, 0.5);
										}, 500));
								}
								if (
									(n || _('scroll', I),
									e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
									R.releaseOnEdges && (l === e.minTranslate() || l === e.maxTranslate()))
								)
									return !0;
							}
						}
						return I.preventDefault ? I.preventDefault() : (I.returnValue = !1), !1;
					}
					function b(S) {
						let I = e.el;
						e.params.mousewheel.eventsTarget !== 'container' && (I = document.querySelector(e.params.mousewheel.eventsTarget)),
							I[S]('mouseenter', u),
							I[S]('mouseleave', p),
							I[S]('wheel', x);
					}
					function m() {
						return e.params.cssMode
							? (e.wrapperEl.removeEventListener('wheel', x), !0)
							: e.mousewheel.enabled
							? !1
							: (b('addEventListener'), (e.mousewheel.enabled = !0), !0);
					}
					function v() {
						return e.params.cssMode
							? (e.wrapperEl.addEventListener(event, x), !0)
							: e.mousewheel.enabled
							? (b('removeEventListener'), (e.mousewheel.enabled = !1), !0)
							: !1;
					}
					L('init', () => {
						!e.params.mousewheel.enabled && e.params.cssMode && v(), e.params.mousewheel.enabled && m();
					}),
						L('destroy', () => {
							e.params.cssMode && m(), e.mousewheel.enabled && v();
						}),
						Object.assign(e.mousewheel, { enable: m, disable: v });
				}
				function $e(q, e, K, L) {
					return (
						q.params.createElements &&
							Object.keys(L).forEach((_) => {
								if (!K[_] && K.auto === !0) {
									let D = (0, k.e)(q.el, `.${L[_]}`)[0];
									D || ((D = (0, k.c)('div', L[_])), (D.className = L[_]), q.el.append(D)), (K[_] = D), (e[_] = D);
								}
							}),
						K
					);
				}
				function Ye(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					K({
						navigation: {
							nextEl: null,
							prevEl: null,
							hideOnClick: !1,
							disabledClass: 'swiper-button-disabled',
							hiddenClass: 'swiper-button-hidden',
							lockClass: 'swiper-button-lock',
							navigationDisabledClass: 'swiper-navigation-disabled',
						},
					}),
						(e.navigation = { nextEl: null, prevEl: null });
					function D(w) {
						let x;
						return w && typeof w == 'string' && e.isElement && ((x = e.el.querySelector(w)), x)
							? x
							: (w &&
									(typeof w == 'string' && (x = [...document.querySelectorAll(w)]),
									e.params.uniqueNavElements &&
										typeof w == 'string' &&
										x.length > 1 &&
										e.el.querySelectorAll(w).length === 1 &&
										(x = e.el.querySelector(w))),
							  w && !x ? w : x);
					}
					function H(w, x) {
						const b = e.params.navigation;
						(w = (0, k.m)(w)),
							w.forEach((m) => {
								m &&
									(m.classList[x ? 'add' : 'remove'](...b.disabledClass.split(' ')),
									m.tagName === 'BUTTON' && (m.disabled = x),
									e.params.watchOverflow && e.enabled && m.classList[e.isLocked ? 'add' : 'remove'](b.lockClass));
							});
					}
					function O() {
						const { nextEl: w, prevEl: x } = e.navigation;
						if (e.params.loop) {
							H(x, !1), H(w, !1);
							return;
						}
						H(x, e.isBeginning && !e.params.rewind), H(w, e.isEnd && !e.params.rewind);
					}
					function T(w) {
						w.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), _('navigationPrev'));
					}
					function y(w) {
						w.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), _('navigationNext'));
					}
					function g() {
						const w = e.params.navigation;
						if (
							((e.params.navigation = $e(e, e.originalParams.navigation, e.params.navigation, {
								nextEl: 'swiper-button-next',
								prevEl: 'swiper-button-prev',
							})),
							!(w.nextEl || w.prevEl))
						)
							return;
						let x = D(w.nextEl),
							b = D(w.prevEl);
						Object.assign(e.navigation, { nextEl: x, prevEl: b }), (x = (0, k.m)(x)), (b = (0, k.m)(b));
						const m = (v, S) => {
							v && v.addEventListener('click', S === 'next' ? y : T), !e.enabled && v && v.classList.add(...w.lockClass.split(' '));
						};
						x.forEach((v) => m(v, 'next')), b.forEach((v) => m(v, 'prev'));
					}
					function u() {
						let { nextEl: w, prevEl: x } = e.navigation;
						(w = (0, k.m)(w)), (x = (0, k.m)(x));
						const b = (m, v) => {
							m.removeEventListener('click', v === 'next' ? y : T), m.classList.remove(...e.params.navigation.disabledClass.split(' '));
						};
						w.forEach((m) => b(m, 'next')), x.forEach((m) => b(m, 'prev'));
					}
					L('init', () => {
						e.params.navigation.enabled === !1 ? E() : (g(), O());
					}),
						L('toEdge fromEdge lock unlock', () => {
							O();
						}),
						L('destroy', () => {
							u();
						}),
						L('enable disable', () => {
							let { nextEl: w, prevEl: x } = e.navigation;
							if (((w = (0, k.m)(w)), (x = (0, k.m)(x)), e.enabled)) {
								O();
								return;
							}
							[...w, ...x].filter((b) => !!b).forEach((b) => b.classList.add(e.params.navigation.lockClass));
						}),
						L('click', (w, x) => {
							let { nextEl: b, prevEl: m } = e.navigation;
							(b = (0, k.m)(b)), (m = (0, k.m)(m));
							const v = x.target;
							if (e.params.navigation.hideOnClick && !m.includes(v) && !b.includes(v)) {
								if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === v || e.pagination.el.contains(v)))
									return;
								let S;
								b.length
									? (S = b[0].classList.contains(e.params.navigation.hiddenClass))
									: m.length && (S = m[0].classList.contains(e.params.navigation.hiddenClass)),
									_(S === !0 ? 'navigationShow' : 'navigationHide'),
									[...b, ...m].filter((I) => !!I).forEach((I) => I.classList.toggle(e.params.navigation.hiddenClass));
							}
						});
					const p = () => {
							e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), g(), O();
						},
						E = () => {
							e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), u();
						};
					Object.assign(e.navigation, { enable: p, disable: E, update: O, init: g, destroy: u });
				}
				function Te(q) {
					return (
						q === void 0 && (q = ''),
						`.${q
							.trim()
							.replace(/([\.:!+\/])/g, '\\$1')
							.replace(/ /g, '.')}`
					);
				}
				function Fe(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					const D = 'swiper-pagination';
					K({
						pagination: {
							el: null,
							bulletElement: 'span',
							clickable: !1,
							hideOnClick: !1,
							renderBullet: null,
							renderProgressbar: null,
							renderFraction: null,
							renderCustom: null,
							progressbarOpposite: !1,
							type: 'bullets',
							dynamicBullets: !1,
							dynamicMainBullets: 1,
							formatFractionCurrent: (m) => m,
							formatFractionTotal: (m) => m,
							bulletClass: `${D}-bullet`,
							bulletActiveClass: `${D}-bullet-active`,
							modifierClass: `${D}-`,
							currentClass: `${D}-current`,
							totalClass: `${D}-total`,
							hiddenClass: `${D}-hidden`,
							progressbarFillClass: `${D}-progressbar-fill`,
							progressbarOppositeClass: `${D}-progressbar-opposite`,
							clickableClass: `${D}-clickable`,
							lockClass: `${D}-lock`,
							horizontalClass: `${D}-horizontal`,
							verticalClass: `${D}-vertical`,
							paginationDisabledClass: `${D}-disabled`,
						},
					}),
						(e.pagination = { el: null, bullets: [] });
					let H,
						O = 0;
					function T() {
						return !e.params.pagination.el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0);
					}
					function y(m, v) {
						const { bulletActiveClass: S } = e.params.pagination;
						m &&
							((m = m[`${v === 'prev' ? 'previous' : 'next'}ElementSibling`]),
							m &&
								(m.classList.add(`${S}-${v}`),
								(m = m[`${v === 'prev' ? 'previous' : 'next'}ElementSibling`]),
								m && m.classList.add(`${S}-${v}-${v}`)));
					}
					function g(m) {
						const v = m.target.closest(Te(e.params.pagination.bulletClass));
						if (!v) return;
						m.preventDefault();
						const S = (0, k.h)(v) * e.params.slidesPerGroup;
						if (e.params.loop) {
							if (e.realIndex === S) return;
							e.slideToLoop(S);
						} else e.slideTo(S);
					}
					function u() {
						const m = e.rtl,
							v = e.params.pagination;
						if (T()) return;
						let S = e.pagination.el;
						S = (0, k.m)(S);
						let I, W;
						const R = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
							Y = e.params.loop ? Math.ceil(R / e.params.slidesPerGroup) : e.snapGrid.length;
						if (
							(e.params.loop
								? ((W = e.previousRealIndex || 0),
								  (I = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex))
								: typeof e.snapIndex < 'u'
								? ((I = e.snapIndex), (W = e.previousSnapIndex))
								: ((W = e.previousIndex || 0), (I = e.activeIndex || 0)),
							v.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
						) {
							const $ = e.pagination.bullets;
							let s, t, i;
							if (
								(v.dynamicBullets &&
									((H = (0, k.f)($[0], e.isHorizontal() ? 'width' : 'height', !0)),
									S.forEach((r) => {
										r.style[e.isHorizontal() ? 'width' : 'height'] = `${H * (v.dynamicMainBullets + 4)}px`;
									}),
									v.dynamicMainBullets > 1 &&
										W !== void 0 &&
										((O += I - (W || 0)), O > v.dynamicMainBullets - 1 ? (O = v.dynamicMainBullets - 1) : O < 0 && (O = 0)),
									(s = Math.max(I - O, 0)),
									(t = s + (Math.min($.length, v.dynamicMainBullets) - 1)),
									(i = (t + s) / 2)),
								$.forEach((r) => {
									const a = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((n) => `${v.bulletActiveClass}${n}`)]
										.map((n) => (typeof n == 'string' && n.includes(' ') ? n.split(' ') : n))
										.flat();
									r.classList.remove(...a);
								}),
								S.length > 1)
							)
								$.forEach((r) => {
									const a = (0, k.h)(r);
									a === I ? r.classList.add(...v.bulletActiveClass.split(' ')) : e.isElement && r.setAttribute('part', 'bullet'),
										v.dynamicBullets &&
											(a >= s && a <= t && r.classList.add(...`${v.bulletActiveClass}-main`.split(' ')),
											a === s && y(r, 'prev'),
											a === t && y(r, 'next'));
								});
							else {
								const r = $[I];
								if (
									(r && r.classList.add(...v.bulletActiveClass.split(' ')),
									e.isElement &&
										$.forEach((a, n) => {
											a.setAttribute('part', n === I ? 'bullet-active' : 'bullet');
										}),
									v.dynamicBullets)
								) {
									const a = $[s],
										n = $[t];
									for (let l = s; l <= t; l += 1) $[l] && $[l].classList.add(...`${v.bulletActiveClass}-main`.split(' '));
									y(a, 'prev'), y(n, 'next');
								}
							}
							if (v.dynamicBullets) {
								const r = Math.min($.length, v.dynamicMainBullets + 4),
									a = (H * r - H) / 2 - i * H,
									n = m ? 'right' : 'left';
								$.forEach((l) => {
									l.style[e.isHorizontal() ? n : 'top'] = `${a}px`;
								});
							}
						}
						S.forEach(($, s) => {
							if (
								(v.type === 'fraction' &&
									($.querySelectorAll(Te(v.currentClass)).forEach((t) => {
										t.textContent = v.formatFractionCurrent(I + 1);
									}),
									$.querySelectorAll(Te(v.totalClass)).forEach((t) => {
										t.textContent = v.formatFractionTotal(Y);
									})),
								v.type === 'progressbar')
							) {
								let t;
								v.progressbarOpposite ? (t = e.isHorizontal() ? 'vertical' : 'horizontal') : (t = e.isHorizontal() ? 'horizontal' : 'vertical');
								const i = (I + 1) / Y;
								let r = 1,
									a = 1;
								t === 'horizontal' ? (r = i) : (a = i),
									$.querySelectorAll(Te(v.progressbarFillClass)).forEach((n) => {
										(n.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${a})`), (n.style.transitionDuration = `${e.params.speed}ms`);
									});
							}
							v.type === 'custom' && v.renderCustom
								? (($.innerHTML = v.renderCustom(e, I + 1, Y)), s === 0 && _('paginationRender', $))
								: (s === 0 && _('paginationRender', $), _('paginationUpdate', $)),
								e.params.watchOverflow && e.enabled && $.classList[e.isLocked ? 'add' : 'remove'](v.lockClass);
						});
					}
					function p() {
						const m = e.params.pagination;
						if (T()) return;
						const v =
							e.virtual && e.params.virtual.enabled
								? e.virtual.slides.length
								: e.grid && e.params.grid.rows > 1
								? e.slides.length / Math.ceil(e.params.grid.rows)
								: e.slides.length;
						let S = e.pagination.el;
						S = (0, k.m)(S);
						let I = '';
						if (m.type === 'bullets') {
							let W = e.params.loop ? Math.ceil(v / e.params.slidesPerGroup) : e.snapGrid.length;
							e.params.freeMode && e.params.freeMode.enabled && W > v && (W = v);
							for (let R = 0; R < W; R += 1)
								m.renderBullet
									? (I += m.renderBullet.call(e, R, m.bulletClass))
									: (I += `<${m.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${m.bulletClass}"></${m.bulletElement}>`);
						}
						m.type === 'fraction' &&
							(m.renderFraction
								? (I = m.renderFraction.call(e, m.currentClass, m.totalClass))
								: (I = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
							m.type === 'progressbar' &&
								(m.renderProgressbar
									? (I = m.renderProgressbar.call(e, m.progressbarFillClass))
									: (I = `<span class="${m.progressbarFillClass}"></span>`)),
							(e.pagination.bullets = []),
							S.forEach((W) => {
								m.type !== 'custom' && (W.innerHTML = I || ''),
									m.type === 'bullets' && e.pagination.bullets.push(...W.querySelectorAll(Te(m.bulletClass)));
							}),
							m.type !== 'custom' && _('paginationRender', S[0]);
					}
					function E() {
						e.params.pagination = $e(e, e.originalParams.pagination, e.params.pagination, { el: 'swiper-pagination' });
						const m = e.params.pagination;
						if (!m.el) return;
						let v;
						typeof m.el == 'string' && e.isElement && (v = e.el.querySelector(m.el)),
							!v && typeof m.el == 'string' && (v = [...document.querySelectorAll(m.el)]),
							v || (v = m.el),
							!(!v || v.length === 0) &&
								(e.params.uniqueNavElements &&
									typeof m.el == 'string' &&
									Array.isArray(v) &&
									v.length > 1 &&
									((v = [...e.el.querySelectorAll(m.el)]), v.length > 1 && (v = v.filter((S) => (0, k.a)(S, '.swiper')[0] === e.el)[0])),
								Array.isArray(v) && v.length === 1 && (v = v[0]),
								Object.assign(e.pagination, { el: v }),
								(v = (0, k.m)(v)),
								v.forEach((S) => {
									m.type === 'bullets' && m.clickable && S.classList.add(...(m.clickableClass || '').split(' ')),
										S.classList.add(m.modifierClass + m.type),
										S.classList.add(e.isHorizontal() ? m.horizontalClass : m.verticalClass),
										m.type === 'bullets' &&
											m.dynamicBullets &&
											(S.classList.add(`${m.modifierClass}${m.type}-dynamic`), (O = 0), m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
										m.type === 'progressbar' && m.progressbarOpposite && S.classList.add(m.progressbarOppositeClass),
										m.clickable && S.addEventListener('click', g),
										e.enabled || S.classList.add(m.lockClass);
								}));
					}
					function w() {
						const m = e.params.pagination;
						if (T()) return;
						let v = e.pagination.el;
						v &&
							((v = (0, k.m)(v)),
							v.forEach((S) => {
								S.classList.remove(m.hiddenClass),
									S.classList.remove(m.modifierClass + m.type),
									S.classList.remove(e.isHorizontal() ? m.horizontalClass : m.verticalClass),
									m.clickable && (S.classList.remove(...(m.clickableClass || '').split(' ')), S.removeEventListener('click', g));
							})),
							e.pagination.bullets && e.pagination.bullets.forEach((S) => S.classList.remove(...m.bulletActiveClass.split(' ')));
					}
					L('changeDirection', () => {
						if (!e.pagination || !e.pagination.el) return;
						const m = e.params.pagination;
						let { el: v } = e.pagination;
						(v = (0, k.m)(v)),
							v.forEach((S) => {
								S.classList.remove(m.horizontalClass, m.verticalClass), S.classList.add(e.isHorizontal() ? m.horizontalClass : m.verticalClass);
							});
					}),
						L('init', () => {
							e.params.pagination.enabled === !1 ? b() : (E(), p(), u());
						}),
						L('activeIndexChange', () => {
							typeof e.snapIndex > 'u' && u();
						}),
						L('snapIndexChange', () => {
							u();
						}),
						L('snapGridLengthChange', () => {
							p(), u();
						}),
						L('destroy', () => {
							w();
						}),
						L('enable disable', () => {
							let { el: m } = e.pagination;
							m && ((m = (0, k.m)(m)), m.forEach((v) => v.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)));
						}),
						L('lock unlock', () => {
							u();
						}),
						L('click', (m, v) => {
							const S = v.target,
								I = (0, k.m)(e.pagination.el);
							if (
								e.params.pagination.el &&
								e.params.pagination.hideOnClick &&
								I &&
								I.length > 0 &&
								!S.classList.contains(e.params.pagination.bulletClass)
							) {
								if (e.navigation && ((e.navigation.nextEl && S === e.navigation.nextEl) || (e.navigation.prevEl && S === e.navigation.prevEl)))
									return;
								const W = I[0].classList.contains(e.params.pagination.hiddenClass);
								_(W === !0 ? 'paginationShow' : 'paginationHide'), I.forEach((R) => R.classList.toggle(e.params.pagination.hiddenClass));
							}
						});
					const x = () => {
							e.el.classList.remove(e.params.pagination.paginationDisabledClass);
							let { el: m } = e.pagination;
							m && ((m = (0, k.m)(m)), m.forEach((v) => v.classList.remove(e.params.pagination.paginationDisabledClass))), E(), p(), u();
						},
						b = () => {
							e.el.classList.add(e.params.pagination.paginationDisabledClass);
							let { el: m } = e.pagination;
							m && ((m = (0, k.m)(m)), m.forEach((v) => v.classList.add(e.params.pagination.paginationDisabledClass))), w();
						};
					Object.assign(e.pagination, { enable: x, disable: b, render: p, update: u, init: E, destroy: w });
				}
				function We(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					const D = (0, Q.g)();
					let H = !1,
						O = null,
						T = null,
						y,
						g,
						u,
						p;
					K({
						scrollbar: {
							el: null,
							dragSize: 'auto',
							hide: !1,
							draggable: !1,
							snapOnRelease: !0,
							lockClass: 'swiper-scrollbar-lock',
							dragClass: 'swiper-scrollbar-drag',
							scrollbarDisabledClass: 'swiper-scrollbar-disabled',
							horizontalClass: 'swiper-scrollbar-horizontal',
							verticalClass: 'swiper-scrollbar-vertical',
						},
					}),
						(e.scrollbar = { el: null, dragEl: null });
					function E() {
						if (!e.params.scrollbar.el || !e.scrollbar.el) return;
						const { scrollbar: r, rtlTranslate: a } = e,
							{ dragEl: n, el: l } = r,
							d = e.params.scrollbar,
							o = e.params.loop ? e.progressLoop : e.progress;
						let f = g,
							c = (u - g) * o;
						a ? ((c = -c), c > 0 ? ((f = g - c), (c = 0)) : -c + g > u && (f = u + c)) : c < 0 ? ((f = g + c), (c = 0)) : c + g > u && (f = u - c),
							e.isHorizontal()
								? ((n.style.transform = `translate3d(${c}px, 0, 0)`), (n.style.width = `${f}px`))
								: ((n.style.transform = `translate3d(0px, ${c}px, 0)`), (n.style.height = `${f}px`)),
							d.hide &&
								(clearTimeout(O),
								(l.style.opacity = 1),
								(O = setTimeout(() => {
									(l.style.opacity = 0), (l.style.transitionDuration = '400ms');
								}, 1e3)));
					}
					function w(r) {
						!e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${r}ms`);
					}
					function x() {
						if (!e.params.scrollbar.el || !e.scrollbar.el) return;
						const { scrollbar: r } = e,
							{ dragEl: a, el: n } = r;
						(a.style.width = ''),
							(a.style.height = ''),
							(u = e.isHorizontal() ? n.offsetWidth : n.offsetHeight),
							(p = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0))),
							e.params.scrollbar.dragSize === 'auto' ? (g = u * p) : (g = parseInt(e.params.scrollbar.dragSize, 10)),
							e.isHorizontal() ? (a.style.width = `${g}px`) : (a.style.height = `${g}px`),
							p >= 1 ? (n.style.display = 'none') : (n.style.display = ''),
							e.params.scrollbar.hide && (n.style.opacity = 0),
							e.params.watchOverflow && e.enabled && r.el.classList[e.isLocked ? 'add' : 'remove'](e.params.scrollbar.lockClass);
					}
					function b(r) {
						return e.isHorizontal() ? r.clientX : r.clientY;
					}
					function m(r) {
						const { scrollbar: a, rtlTranslate: n } = e,
							{ el: l } = a;
						let d;
						(d = (b(r) - (0, k.b)(l)[e.isHorizontal() ? 'left' : 'top'] - (y !== null ? y : g / 2)) / (u - g)),
							(d = Math.max(Math.min(d, 1), 0)),
							n && (d = 1 - d);
						const o = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * d;
						e.updateProgress(o), e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
					}
					function v(r) {
						const a = e.params.scrollbar,
							{ scrollbar: n, wrapperEl: l } = e,
							{ el: d, dragEl: o } = n;
						(H = !0),
							(y = r.target === o ? b(r) - r.target.getBoundingClientRect()[e.isHorizontal() ? 'left' : 'top'] : null),
							r.preventDefault(),
							r.stopPropagation(),
							(l.style.transitionDuration = '100ms'),
							(o.style.transitionDuration = '100ms'),
							m(r),
							clearTimeout(T),
							(d.style.transitionDuration = '0ms'),
							a.hide && (d.style.opacity = 1),
							e.params.cssMode && (e.wrapperEl.style['scroll-snap-type'] = 'none'),
							_('scrollbarDragStart', r);
					}
					function S(r) {
						const { scrollbar: a, wrapperEl: n } = e,
							{ el: l, dragEl: d } = a;
						H &&
							(r.preventDefault ? r.preventDefault() : (r.returnValue = !1),
							m(r),
							(n.style.transitionDuration = '0ms'),
							(l.style.transitionDuration = '0ms'),
							(d.style.transitionDuration = '0ms'),
							_('scrollbarDragMove', r));
					}
					function I(r) {
						const a = e.params.scrollbar,
							{ scrollbar: n, wrapperEl: l } = e,
							{ el: d } = n;
						H &&
							((H = !1),
							e.params.cssMode && ((e.wrapperEl.style['scroll-snap-type'] = ''), (l.style.transitionDuration = '')),
							a.hide &&
								(clearTimeout(T),
								(T = (0, k.n)(() => {
									(d.style.opacity = 0), (d.style.transitionDuration = '400ms');
								}, 1e3))),
							_('scrollbarDragEnd', r),
							a.snapOnRelease && e.slideToClosest());
					}
					function W(r) {
						const { scrollbar: a, params: n } = e,
							l = a.el;
						if (!l) return;
						const d = l,
							o = n.passiveListeners ? { passive: !1, capture: !1 } : !1,
							f = n.passiveListeners ? { passive: !0, capture: !1 } : !1;
						if (!d) return;
						const c = r === 'on' ? 'addEventListener' : 'removeEventListener';
						d[c]('pointerdown', v, o), D[c]('pointermove', S, o), D[c]('pointerup', I, f);
					}
					function R() {
						!e.params.scrollbar.el || !e.scrollbar.el || W('on');
					}
					function Y() {
						!e.params.scrollbar.el || !e.scrollbar.el || W('off');
					}
					function $() {
						const { scrollbar: r, el: a } = e;
						e.params.scrollbar = $e(e, e.originalParams.scrollbar, e.params.scrollbar, { el: 'swiper-scrollbar' });
						const n = e.params.scrollbar;
						if (!n.el) return;
						let l;
						if ((typeof n.el == 'string' && e.isElement && (l = e.el.querySelector(n.el)), !l && typeof n.el == 'string')) {
							if (((l = D.querySelectorAll(n.el)), !l.length)) return;
						} else l || (l = n.el);
						e.params.uniqueNavElements &&
							typeof n.el == 'string' &&
							l.length > 1 &&
							a.querySelectorAll(n.el).length === 1 &&
							(l = a.querySelector(n.el)),
							l.length > 0 && (l = l[0]),
							l.classList.add(e.isHorizontal() ? n.horizontalClass : n.verticalClass);
						let d;
						l && ((d = l.querySelector(Te(e.params.scrollbar.dragClass))), d || ((d = (0, k.c)('div', e.params.scrollbar.dragClass)), l.append(d))),
							Object.assign(r, { el: l, dragEl: d }),
							n.draggable && R(),
							l && l.classList[e.enabled ? 'remove' : 'add'](...(0, k.i)(e.params.scrollbar.lockClass));
					}
					function s() {
						const r = e.params.scrollbar,
							a = e.scrollbar.el;
						a && a.classList.remove(...(0, k.i)(e.isHorizontal() ? r.horizontalClass : r.verticalClass)), Y();
					}
					L('changeDirection', () => {
						if (!e.scrollbar || !e.scrollbar.el) return;
						const r = e.params.scrollbar;
						let { el: a } = e.scrollbar;
						(a = (0, k.m)(a)),
							a.forEach((n) => {
								n.classList.remove(r.horizontalClass, r.verticalClass), n.classList.add(e.isHorizontal() ? r.horizontalClass : r.verticalClass);
							});
					}),
						L('init', () => {
							e.params.scrollbar.enabled === !1 ? i() : ($(), x(), E());
						}),
						L('update resize observerUpdate lock unlock changeDirection', () => {
							x();
						}),
						L('setTranslate', () => {
							E();
						}),
						L('setTransition', (r, a) => {
							w(a);
						}),
						L('enable disable', () => {
							const { el: r } = e.scrollbar;
							r && r.classList[e.enabled ? 'remove' : 'add'](...(0, k.i)(e.params.scrollbar.lockClass));
						}),
						L('destroy', () => {
							s();
						});
					const t = () => {
							e.el.classList.remove(...(0, k.i)(e.params.scrollbar.scrollbarDisabledClass)),
								e.scrollbar.el && e.scrollbar.el.classList.remove(...(0, k.i)(e.params.scrollbar.scrollbarDisabledClass)),
								$(),
								x(),
								E();
						},
						i = () => {
							e.el.classList.add(...(0, k.i)(e.params.scrollbar.scrollbarDisabledClass)),
								e.scrollbar.el && e.scrollbar.el.classList.add(...(0, k.i)(e.params.scrollbar.scrollbarDisabledClass)),
								s();
						};
					Object.assign(e.scrollbar, { enable: t, disable: i, updateSize: x, setTranslate: E, init: $, destroy: s });
				}
				var Be;
				function ke(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ parallax: { enabled: !1 } });
					const _ =
							'[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
						D = (T, y) => {
							const { rtl: g } = e,
								u = g ? -1 : 1,
								p = T.getAttribute('data-swiper-parallax') || '0';
							let E = T.getAttribute('data-swiper-parallax-x'),
								w = T.getAttribute('data-swiper-parallax-y');
							const x = T.getAttribute('data-swiper-parallax-scale'),
								b = T.getAttribute('data-swiper-parallax-opacity'),
								m = T.getAttribute('data-swiper-parallax-rotate');
							if (
								(E || w ? ((E = E || '0'), (w = w || '0')) : e.isHorizontal() ? ((E = p), (w = '0')) : ((w = p), (E = '0')),
								E.indexOf('%') >= 0 ? (E = `${parseInt(E, 10) * y * u}%`) : (E = `${E * y * u}px`),
								w.indexOf('%') >= 0 ? (w = `${parseInt(w, 10) * y}%`) : (w = `${w * y}px`),
								typeof b < 'u' && b !== null)
							) {
								const S = b - (b - 1) * (1 - Math.abs(y));
								T.style.opacity = S;
							}
							let v = `translate3d(${E}, ${w}, 0px)`;
							if (typeof x < 'u' && x !== null) {
								const S = x - (x - 1) * (1 - Math.abs(y));
								v += ` scale(${S})`;
							}
							if (m && typeof m < 'u' && m !== null) {
								const S = m * y * -1;
								v += ` rotate(${S}deg)`;
							}
							T.style.transform = v;
						},
						H = () => {
							const { el: T, slides: y, progress: g, snapGrid: u, isElement: p } = e,
								E = Be(T, _);
							e.isElement && E.push(...Be(e.hostEl, _)),
								E.forEach((w) => {
									D(w, g);
								}),
								y.forEach((w, x) => {
									let b = w.progress;
									e.params.slidesPerGroup > 1 && e.params.slidesPerView !== 'auto' && (b += Math.ceil(x / 2) - g * (u.length - 1)),
										(b = Math.min(Math.max(b, -1), 1)),
										w.querySelectorAll(`${_}, [data-swiper-parallax-rotate]`).forEach((m) => {
											D(m, b);
										});
								});
						},
						O = function (T) {
							T === void 0 && (T = e.params.speed);
							const { el: y, hostEl: g } = e,
								u = [...y.querySelectorAll(_)];
							e.isElement && u.push(...g.querySelectorAll(_)),
								u.forEach((p) => {
									let E = parseInt(p.getAttribute('data-swiper-parallax-duration'), 10) || T;
									T === 0 && (E = 0), (p.style.transitionDuration = `${E}ms`);
								});
						};
					L('beforeInit', () => {
						e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
					}),
						L('init', () => {
							e.params.parallax.enabled && H();
						}),
						L('setTranslate', () => {
							e.params.parallax.enabled && H();
						}),
						L('setTransition', (T, y) => {
							e.params.parallax.enabled && O(y);
						});
				}
				var De, Ae, G, B, j;
				function ee(q) {
					let { swiper: e, extendParams: K, on: L, emit: _ } = q;
					const D = De();
					K({
						zoom: {
							enabled: !1,
							limitToOriginalSize: !1,
							maxRatio: 3,
							minRatio: 1,
							toggle: !0,
							containerClass: 'swiper-zoom-container',
							zoomedSlideClass: 'swiper-slide-zoomed',
						},
					}),
						(e.zoom = { enabled: !1 });
					let H = 1,
						O = !1,
						T,
						y;
					const g = [],
						u = {
							originX: 0,
							originY: 0,
							slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							imageEl: void 0,
							imageWrapEl: void 0,
							maxRatio: 3,
						},
						p = {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {},
						},
						E = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
					let w = 1;
					Object.defineProperty(e.zoom, 'scale', {
						get() {
							return w;
						},
						set(f) {
							if (w !== f) {
								const c = u.imageEl,
									h = u.slideEl;
								_('zoomChange', f, c, h);
							}
							w = f;
						},
					});
					function x() {
						if (g.length < 2) return 1;
						const f = g[0].pageX,
							c = g[0].pageY,
							h = g[1].pageX,
							M = g[1].pageY;
						return Math.sqrt((h - f) ** 2 + (M - c) ** 2);
					}
					function b() {
						const f = e.params.zoom,
							c = u.imageWrapEl.getAttribute('data-swiper-zoom') || f.maxRatio;
						if (f.limitToOriginalSize && u.imageEl && u.imageEl.naturalWidth) {
							const h = u.imageEl.naturalWidth / u.imageEl.offsetWidth;
							return Math.min(h, c);
						}
						return c;
					}
					function m() {
						if (g.length < 2) return { x: null, y: null };
						const f = u.imageEl.getBoundingClientRect();
						return [
							(g[0].pageX + (g[1].pageX - g[0].pageX) / 2 - f.x - D.scrollX) / H,
							(g[0].pageY + (g[1].pageY - g[0].pageY) / 2 - f.y - D.scrollY) / H,
						];
					}
					function v() {
						return e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`;
					}
					function S(f) {
						const c = v();
						return !!(f.target.matches(c) || e.slides.filter((h) => h.contains(f.target)).length > 0);
					}
					function I(f) {
						const c = `.${e.params.zoom.containerClass}`;
						return !!(f.target.matches(c) || [...e.hostEl.querySelectorAll(c)].filter((h) => h.contains(f.target)).length > 0);
					}
					function W(f) {
						if ((f.pointerType === 'mouse' && g.splice(0, g.length), !S(f))) return;
						const c = e.params.zoom;
						if (((T = !1), (y = !1), g.push(f), !(g.length < 2))) {
							if (((T = !0), (u.scaleStart = x()), !u.slideEl)) {
								(u.slideEl = f.target.closest(`.${e.params.slideClass}, swiper-slide`)), u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
								let h = u.slideEl.querySelector(`.${c.containerClass}`);
								if (
									(h && (h = h.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
									(u.imageEl = h),
									h ? (u.imageWrapEl = Ae(u.imageEl, `.${c.containerClass}`)[0]) : (u.imageWrapEl = void 0),
									!u.imageWrapEl)
								) {
									u.imageEl = void 0;
									return;
								}
								u.maxRatio = b();
							}
							if (u.imageEl) {
								const [h, M] = m();
								(u.originX = h), (u.originY = M), (u.imageEl.style.transitionDuration = '0ms');
							}
							O = !0;
						}
					}
					function R(f) {
						if (!S(f)) return;
						const c = e.params.zoom,
							h = e.zoom,
							M = g.findIndex((C) => C.pointerId === f.pointerId);
						M >= 0 && (g[M] = f),
							!(g.length < 2) &&
								((y = !0),
								(u.scaleMove = x()),
								u.imageEl &&
									((h.scale = (u.scaleMove / u.scaleStart) * H),
									h.scale > u.maxRatio && (h.scale = u.maxRatio - 1 + (h.scale - u.maxRatio + 1) ** 0.5),
									h.scale < c.minRatio && (h.scale = c.minRatio + 1 - (c.minRatio - h.scale + 1) ** 0.5),
									(u.imageEl.style.transform = `translate3d(0,0,0) scale(${h.scale})`)));
					}
					function Y(f) {
						if (!S(f) || (f.pointerType === 'mouse' && f.type === 'pointerout')) return;
						const c = e.params.zoom,
							h = e.zoom,
							M = g.findIndex((C) => C.pointerId === f.pointerId);
						M >= 0 && g.splice(M, 1),
							!(!T || !y) &&
								((T = !1),
								(y = !1),
								u.imageEl &&
									((h.scale = Math.max(Math.min(h.scale, u.maxRatio), c.minRatio)),
									(u.imageEl.style.transitionDuration = `${e.params.speed}ms`),
									(u.imageEl.style.transform = `translate3d(0,0,0) scale(${h.scale})`),
									(H = h.scale),
									(O = !1),
									h.scale > 1 && u.slideEl
										? u.slideEl.classList.add(`${c.zoomedSlideClass}`)
										: h.scale <= 1 && u.slideEl && u.slideEl.classList.remove(`${c.zoomedSlideClass}`),
									h.scale === 1 && ((u.originX = 0), (u.originY = 0), (u.slideEl = void 0))));
					}
					function $(f) {
						const c = e.device;
						if (!u.imageEl || p.isTouched) return;
						c.android && f.cancelable && f.preventDefault(), (p.isTouched = !0);
						const h = g.length > 0 ? g[0] : f;
						(p.touchesStart.x = h.pageX), (p.touchesStart.y = h.pageY);
					}
					function s(f) {
						if (!S(f) || !I(f)) return;
						const c = e.zoom;
						if (!u.imageEl || !p.isTouched || !u.slideEl) return;
						p.isMoved ||
							((p.width = u.imageEl.offsetWidth),
							(p.height = u.imageEl.offsetHeight),
							(p.startX = G(u.imageWrapEl, 'x') || 0),
							(p.startY = G(u.imageWrapEl, 'y') || 0),
							(u.slideWidth = u.slideEl.offsetWidth),
							(u.slideHeight = u.slideEl.offsetHeight),
							(u.imageWrapEl.style.transitionDuration = '0ms'));
						const h = p.width * c.scale,
							M = p.height * c.scale;
						if (h < u.slideWidth && M < u.slideHeight) return;
						if (
							((p.minX = Math.min(u.slideWidth / 2 - h / 2, 0)),
							(p.maxX = -p.minX),
							(p.minY = Math.min(u.slideHeight / 2 - M / 2, 0)),
							(p.maxY = -p.minY),
							(p.touchesCurrent.x = g.length > 0 ? g[0].pageX : f.pageX),
							(p.touchesCurrent.y = g.length > 0 ? g[0].pageY : f.pageY),
							Math.max(Math.abs(p.touchesCurrent.x - p.touchesStart.x), Math.abs(p.touchesCurrent.y - p.touchesStart.y)) > 5 && (e.allowClick = !1),
							!p.isMoved && !O)
						) {
							if (
								e.isHorizontal() &&
								((Math.floor(p.minX) === Math.floor(p.startX) && p.touchesCurrent.x < p.touchesStart.x) ||
									(Math.floor(p.maxX) === Math.floor(p.startX) && p.touchesCurrent.x > p.touchesStart.x))
							) {
								p.isTouched = !1;
								return;
							}
							if (
								!e.isHorizontal() &&
								((Math.floor(p.minY) === Math.floor(p.startY) && p.touchesCurrent.y < p.touchesStart.y) ||
									(Math.floor(p.maxY) === Math.floor(p.startY) && p.touchesCurrent.y > p.touchesStart.y))
							) {
								p.isTouched = !1;
								return;
							}
						}
						f.cancelable && f.preventDefault(), f.stopPropagation(), (p.isMoved = !0);
						const P = (c.scale - H) / (u.maxRatio - e.params.zoom.minRatio),
							{ originX: A, originY: X } = u;
						(p.currentX = p.touchesCurrent.x - p.touchesStart.x + p.startX + P * (p.width - A * 2)),
							(p.currentY = p.touchesCurrent.y - p.touchesStart.y + p.startY + P * (p.height - X * 2)),
							p.currentX < p.minX && (p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** 0.8),
							p.currentX > p.maxX && (p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** 0.8),
							p.currentY < p.minY && (p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** 0.8),
							p.currentY > p.maxY && (p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** 0.8),
							E.prevPositionX || (E.prevPositionX = p.touchesCurrent.x),
							E.prevPositionY || (E.prevPositionY = p.touchesCurrent.y),
							E.prevTime || (E.prevTime = Date.now()),
							(E.x = (p.touchesCurrent.x - E.prevPositionX) / (Date.now() - E.prevTime) / 2),
							(E.y = (p.touchesCurrent.y - E.prevPositionY) / (Date.now() - E.prevTime) / 2),
							Math.abs(p.touchesCurrent.x - E.prevPositionX) < 2 && (E.x = 0),
							Math.abs(p.touchesCurrent.y - E.prevPositionY) < 2 && (E.y = 0),
							(E.prevPositionX = p.touchesCurrent.x),
							(E.prevPositionY = p.touchesCurrent.y),
							(E.prevTime = Date.now()),
							(u.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
					}
					function t() {
						const f = e.zoom;
						if (!u.imageEl) return;
						if (!p.isTouched || !p.isMoved) {
							(p.isTouched = !1), (p.isMoved = !1);
							return;
						}
						(p.isTouched = !1), (p.isMoved = !1);
						let c = 300,
							h = 300;
						const M = E.x * c,
							C = p.currentX + M,
							P = E.y * h,
							A = p.currentY + P;
						E.x !== 0 && (c = Math.abs((C - p.currentX) / E.x)), E.y !== 0 && (h = Math.abs((A - p.currentY) / E.y));
						const X = Math.max(c, h);
						(p.currentX = C), (p.currentY = A);
						const z = p.width * f.scale,
							U = p.height * f.scale;
						(p.minX = Math.min(u.slideWidth / 2 - z / 2, 0)),
							(p.maxX = -p.minX),
							(p.minY = Math.min(u.slideHeight / 2 - U / 2, 0)),
							(p.maxY = -p.minY),
							(p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX)),
							(p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY)),
							(u.imageWrapEl.style.transitionDuration = `${X}ms`),
							(u.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
					}
					function i() {
						const f = e.zoom;
						u.slideEl &&
							e.activeIndex !== e.slides.indexOf(u.slideEl) &&
							(u.imageEl && (u.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
							u.imageWrapEl && (u.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
							u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
							(f.scale = 1),
							(H = 1),
							(u.slideEl = void 0),
							(u.imageEl = void 0),
							(u.imageWrapEl = void 0),
							(u.originX = 0),
							(u.originY = 0));
					}
					function r(f) {
						const c = e.zoom,
							h = e.params.zoom;
						if (!u.slideEl) {
							f && f.target && (u.slideEl = f.target.closest(`.${e.params.slideClass}, swiper-slide`)),
								u.slideEl ||
									(e.params.virtual && e.params.virtual.enabled && e.virtual
										? (u.slideEl = B(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
										: (u.slideEl = e.slides[e.activeIndex]));
							let ye = u.slideEl.querySelector(`.${h.containerClass}`);
							ye && (ye = ye.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
								(u.imageEl = ye),
								ye ? (u.imageWrapEl = Ae(u.imageEl, `.${h.containerClass}`)[0]) : (u.imageWrapEl = void 0);
						}
						if (!u.imageEl || !u.imageWrapEl) return;
						e.params.cssMode && ((e.wrapperEl.style.overflow = 'hidden'), (e.wrapperEl.style.touchAction = 'none')),
							u.slideEl.classList.add(`${h.zoomedSlideClass}`);
						let M, C, P, A, X, z, U, N, Z, J, oe, we, ne, re, F, se, ae, ie;
						typeof p.touchesStart.x > 'u' && f ? ((M = f.pageX), (C = f.pageY)) : ((M = p.touchesStart.x), (C = p.touchesStart.y));
						const me = typeof f == 'number' ? f : null;
						H === 1 && me && ((M = void 0), (C = void 0));
						const ge = b();
						(c.scale = me || ge),
							(H = me || ge),
							f && !(H === 1 && me)
								? ((ae = u.slideEl.offsetWidth),
								  (ie = u.slideEl.offsetHeight),
								  (P = j(u.slideEl).left + D.scrollX),
								  (A = j(u.slideEl).top + D.scrollY),
								  (X = P + ae / 2 - M),
								  (z = A + ie / 2 - C),
								  (Z = u.imageEl.offsetWidth),
								  (J = u.imageEl.offsetHeight),
								  (oe = Z * c.scale),
								  (we = J * c.scale),
								  (ne = Math.min(ae / 2 - oe / 2, 0)),
								  (re = Math.min(ie / 2 - we / 2, 0)),
								  (F = -ne),
								  (se = -re),
								  (U = X * c.scale),
								  (N = z * c.scale),
								  U < ne && (U = ne),
								  U > F && (U = F),
								  N < re && (N = re),
								  N > se && (N = se))
								: ((U = 0), (N = 0)),
							me && c.scale === 1 && ((u.originX = 0), (u.originY = 0)),
							(u.imageWrapEl.style.transitionDuration = '300ms'),
							(u.imageWrapEl.style.transform = `translate3d(${U}px, ${N}px,0)`),
							(u.imageEl.style.transitionDuration = '300ms'),
							(u.imageEl.style.transform = `translate3d(0,0,0) scale(${c.scale})`);
					}
					function a() {
						const f = e.zoom,
							c = e.params.zoom;
						if (!u.slideEl) {
							e.params.virtual && e.params.virtual.enabled && e.virtual
								? (u.slideEl = B(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
								: (u.slideEl = e.slides[e.activeIndex]);
							let h = u.slideEl.querySelector(`.${c.containerClass}`);
							h && (h = h.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
								(u.imageEl = h),
								h ? (u.imageWrapEl = Ae(u.imageEl, `.${c.containerClass}`)[0]) : (u.imageWrapEl = void 0);
						}
						!u.imageEl ||
							!u.imageWrapEl ||
							(e.params.cssMode && ((e.wrapperEl.style.overflow = ''), (e.wrapperEl.style.touchAction = '')),
							(f.scale = 1),
							(H = 1),
							(u.imageWrapEl.style.transitionDuration = '300ms'),
							(u.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
							(u.imageEl.style.transitionDuration = '300ms'),
							(u.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
							u.slideEl.classList.remove(`${c.zoomedSlideClass}`),
							(u.slideEl = void 0),
							(u.originX = 0),
							(u.originY = 0));
					}
					function n(f) {
						const c = e.zoom;
						c.scale && c.scale !== 1 ? a() : r(f);
					}
					function l() {
						const f = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
							c = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
						return { passiveListener: f, activeListenerWithCapture: c };
					}
					function d() {
						const f = e.zoom;
						if (f.enabled) return;
						f.enabled = !0;
						const { passiveListener: c, activeListenerWithCapture: h } = l();
						e.wrapperEl.addEventListener('pointerdown', W, c),
							e.wrapperEl.addEventListener('pointermove', R, h),
							['pointerup', 'pointercancel', 'pointerout'].forEach((M) => {
								e.wrapperEl.addEventListener(M, Y, c);
							}),
							e.wrapperEl.addEventListener('pointermove', s, h);
					}
					function o() {
						const f = e.zoom;
						if (!f.enabled) return;
						f.enabled = !1;
						const { passiveListener: c, activeListenerWithCapture: h } = l();
						e.wrapperEl.removeEventListener('pointerdown', W, c),
							e.wrapperEl.removeEventListener('pointermove', R, h),
							['pointerup', 'pointercancel', 'pointerout'].forEach((M) => {
								e.wrapperEl.removeEventListener(M, Y, c);
							}),
							e.wrapperEl.removeEventListener('pointermove', s, h);
					}
					L('init', () => {
						e.params.zoom.enabled && d();
					}),
						L('destroy', () => {
							o();
						}),
						L('touchStart', (f, c) => {
							e.zoom.enabled && $(c);
						}),
						L('touchEnd', (f, c) => {
							e.zoom.enabled && t();
						}),
						L('doubleTap', (f, c) => {
							!e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && n(c);
						}),
						L('transitionEnd', () => {
							e.zoom.enabled && e.params.zoom.enabled && i();
						}),
						L('slideChange', () => {
							e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && i();
						}),
						Object.assign(e.zoom, { enable: d, disable: o, in: r, out: a, toggle: n });
				}
				var pe, he;
				function ve(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ controller: { control: void 0, inverse: !1, by: 'slide' } }), (e.controller = { control: void 0 });
					function _(y, g) {
						const u = (function () {
							let x, b, m;
							return (v, S) => {
								for (b = -1, x = v.length; x - b > 1; ) (m = (x + b) >> 1), v[m] <= S ? (b = m) : (x = m);
								return x;
							};
						})();
						(this.x = y), (this.y = g), (this.lastIndex = y.length - 1);
						let p, E;
						return (
							(this.interpolate = function (x) {
								return x ? ((E = u(this.x, x)), (p = E - 1), ((x - this.x[p]) * (this.y[E] - this.y[p])) / (this.x[E] - this.x[p]) + this.y[p]) : 0;
							}),
							this
						);
					}
					function D(y) {
						e.controller.spline = e.params.loop ? new _(e.slidesGrid, y.slidesGrid) : new _(e.snapGrid, y.snapGrid);
					}
					function H(y, g) {
						const u = e.controller.control;
						let p, E;
						const w = e.constructor;
						function x(b) {
							if (b.destroyed) return;
							const m = e.rtlTranslate ? -e.translate : e.translate;
							e.params.controller.by === 'slide' && (D(b), (E = -e.controller.spline.interpolate(-m))),
								(!E || e.params.controller.by === 'container') &&
									((p = (b.maxTranslate() - b.minTranslate()) / (e.maxTranslate() - e.minTranslate())),
									(Number.isNaN(p) || !Number.isFinite(p)) && (p = 1),
									(E = (m - e.minTranslate()) * p + b.minTranslate())),
								e.params.controller.inverse && (E = b.maxTranslate() - E),
								b.updateProgress(E),
								b.setTranslate(E, e),
								b.updateActiveIndex(),
								b.updateSlidesClasses();
						}
						if (Array.isArray(u)) for (let b = 0; b < u.length; b += 1) u[b] !== g && u[b] instanceof w && x(u[b]);
						else u instanceof w && g !== u && x(u);
					}
					function O(y, g) {
						const u = e.constructor,
							p = e.controller.control;
						let E;
						function w(x) {
							x.destroyed ||
								(x.setTransition(y, e),
								y !== 0 &&
									(x.transitionStart(),
									x.params.autoHeight &&
										pe(() => {
											x.updateAutoHeight();
										}),
									he(x.wrapperEl, () => {
										p && x.transitionEnd();
									})));
						}
						if (Array.isArray(p)) for (E = 0; E < p.length; E += 1) p[E] !== g && p[E] instanceof u && w(p[E]);
						else p instanceof u && g !== p && w(p);
					}
					function T() {
						e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
					}
					L('beforeInit', () => {
						if (typeof window < 'u' && (typeof e.params.controller.control == 'string' || e.params.controller.control instanceof HTMLElement)) {
							const y = document.querySelector(e.params.controller.control);
							if (y && y.swiper) e.controller.control = y.swiper;
							else if (y) {
								const g = (u) => {
									(e.controller.control = u.detail[0]), e.update(), y.removeEventListener('init', g);
								};
								y.addEventListener('init', g);
							}
							return;
						}
						e.controller.control = e.params.controller.control;
					}),
						L('update', () => {
							T();
						}),
						L('resize', () => {
							T();
						}),
						L('observerUpdate', () => {
							T();
						}),
						L('setTranslate', (y, g, u) => {
							!e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(g, u);
						}),
						L('setTransition', (y, g, u) => {
							!e.controller.control || e.controller.control.destroyed || e.controller.setTransition(g, u);
						}),
						Object.assign(e.controller, { setTranslate: H, setTransition: O });
				}
				function fe(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({
						a11y: {
							enabled: !0,
							notificationClass: 'swiper-notification',
							prevSlideMessage: 'Previous slide',
							nextSlideMessage: 'Next slide',
							firstSlideMessage: 'This is the first slide',
							lastSlideMessage: 'This is the last slide',
							paginationBulletMessage: 'Go to slide {{index}}',
							slideLabelMessage: '{{index}} / {{slidesLength}}',
							containerMessage: null,
							containerRoleDescriptionMessage: null,
							itemRoleDescriptionMessage: null,
							slideRole: 'group',
							id: null,
						},
					}),
						(e.a11y = { clicked: !1 });
					let _ = null;
					function D(a) {
						const n = _;
						n.length !== 0 && ((n.innerHTML = ''), (n.innerHTML = a));
					}
					function H(a) {
						a === void 0 && (a = 16);
						const n = () => Math.round(16 * Math.random()).toString(16);
						return 'x'.repeat(a).replace(/x/g, n);
					}
					function O(a) {
						(a = (0, k.m)(a)),
							a.forEach((n) => {
								n.setAttribute('tabIndex', '0');
							});
					}
					function T(a) {
						(a = (0, k.m)(a)),
							a.forEach((n) => {
								n.setAttribute('tabIndex', '-1');
							});
					}
					function y(a, n) {
						(a = (0, k.m)(a)),
							a.forEach((l) => {
								l.setAttribute('role', n);
							});
					}
					function g(a, n) {
						(a = (0, k.m)(a)),
							a.forEach((l) => {
								l.setAttribute('aria-roledescription', n);
							});
					}
					function u(a, n) {
						(a = (0, k.m)(a)),
							a.forEach((l) => {
								l.setAttribute('aria-controls', n);
							});
					}
					function p(a, n) {
						(a = (0, k.m)(a)),
							a.forEach((l) => {
								l.setAttribute('aria-label', n);
							});
					}
					function E(a, n) {
						(a = (0, k.m)(a)),
							a.forEach((l) => {
								l.setAttribute('id', n);
							});
					}
					function w(a, n) {
						(a = (0, k.m)(a)),
							a.forEach((l) => {
								l.setAttribute('aria-live', n);
							});
					}
					function x(a) {
						(a = (0, k.m)(a)),
							a.forEach((n) => {
								n.setAttribute('aria-disabled', !0);
							});
					}
					function b(a) {
						(a = (0, k.m)(a)),
							a.forEach((n) => {
								n.setAttribute('aria-disabled', !1);
							});
					}
					function m(a) {
						if (a.keyCode !== 13 && a.keyCode !== 32) return;
						const n = e.params.a11y,
							l = a.target;
						(e.pagination &&
							e.pagination.el &&
							(l === e.pagination.el || e.pagination.el.contains(a.target)) &&
							!a.target.matches(Te(e.params.pagination.bulletClass))) ||
							(e.navigation &&
								e.navigation.nextEl &&
								l === e.navigation.nextEl &&
								((e.isEnd && !e.params.loop) || e.slideNext(), e.isEnd ? D(n.lastSlideMessage) : D(n.nextSlideMessage)),
							e.navigation &&
								e.navigation.prevEl &&
								l === e.navigation.prevEl &&
								((e.isBeginning && !e.params.loop) || e.slidePrev(), e.isBeginning ? D(n.firstSlideMessage) : D(n.prevSlideMessage)),
							e.pagination && l.matches(Te(e.params.pagination.bulletClass)) && l.click());
					}
					function v() {
						if (e.params.loop || e.params.rewind || !e.navigation) return;
						const { nextEl: a, prevEl: n } = e.navigation;
						n && (e.isBeginning ? (x(n), T(n)) : (b(n), O(n))), a && (e.isEnd ? (x(a), T(a)) : (b(a), O(a)));
					}
					function S() {
						return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
					}
					function I() {
						return S() && e.params.pagination.clickable;
					}
					function W() {
						const a = e.params.a11y;
						S() &&
							e.pagination.bullets.forEach((n) => {
								e.params.pagination.clickable &&
									(O(n),
									e.params.pagination.renderBullet || (y(n, 'button'), p(n, a.paginationBulletMessage.replace(/\{\{index\}\}/, (0, k.h)(n) + 1)))),
									n.matches(Te(e.params.pagination.bulletActiveClass)) ? n.setAttribute('aria-current', 'true') : n.removeAttribute('aria-current');
							});
					}
					const R = (a, n, l) => {
							O(a), a.tagName !== 'BUTTON' && (y(a, 'button'), a.addEventListener('keydown', m)), p(a, l), u(a, n);
						},
						Y = () => {
							e.a11y.clicked = !0;
						},
						$ = () => {
							requestAnimationFrame(() => {
								requestAnimationFrame(() => {
									e.destroyed || (e.a11y.clicked = !1);
								});
							});
						},
						s = (a) => {
							if (e.a11y.clicked) return;
							const n = a.target.closest(`.${e.params.slideClass}, swiper-slide`);
							if (!n || !e.slides.includes(n)) return;
							const l = e.slides.indexOf(n) === e.activeIndex,
								d = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(n);
							l ||
								d ||
								(a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents) ||
								(e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0), e.slideTo(e.slides.indexOf(n), 0));
						},
						t = () => {
							const a = e.params.a11y;
							a.itemRoleDescriptionMessage && g(e.slides, a.itemRoleDescriptionMessage), a.slideRole && y(e.slides, a.slideRole);
							const n = e.slides.length;
							a.slideLabelMessage &&
								e.slides.forEach((l, d) => {
									const o = e.params.loop ? parseInt(l.getAttribute('data-swiper-slide-index'), 10) : d,
										f = a.slideLabelMessage.replace(/\{\{index\}\}/, o + 1).replace(/\{\{slidesLength\}\}/, n);
									p(l, f);
								});
						},
						i = () => {
							const a = e.params.a11y;
							e.el.append(_);
							const n = e.el;
							a.containerRoleDescriptionMessage && g(n, a.containerRoleDescriptionMessage), a.containerMessage && p(n, a.containerMessage);
							const l = e.wrapperEl,
								d = a.id || l.getAttribute('id') || `swiper-wrapper-${H(16)}`,
								o = e.params.autoplay && e.params.autoplay.enabled ? 'off' : 'polite';
							E(l, d), w(l, o), t();
							let { nextEl: f, prevEl: c } = e.navigation ? e.navigation : {};
							(f = (0, k.m)(f)),
								(c = (0, k.m)(c)),
								f && f.forEach((h) => R(h, d, a.nextSlideMessage)),
								c && c.forEach((h) => R(h, d, a.prevSlideMessage)),
								I() &&
									(0, k.m)(e.pagination.el).forEach((M) => {
										M.addEventListener('keydown', m);
									}),
								e.el.addEventListener('focus', s, !0),
								e.el.addEventListener('pointerdown', Y, !0),
								e.el.addEventListener('pointerup', $, !0);
						};
					function r() {
						_ && _.remove();
						let { nextEl: a, prevEl: n } = e.navigation ? e.navigation : {};
						(a = (0, k.m)(a)),
							(n = (0, k.m)(n)),
							a && a.forEach((l) => l.removeEventListener('keydown', m)),
							n && n.forEach((l) => l.removeEventListener('keydown', m)),
							I() &&
								(0, k.m)(e.pagination.el).forEach((d) => {
									d.removeEventListener('keydown', m);
								}),
							e.el.removeEventListener('focus', s, !0),
							e.el.removeEventListener('pointerdown', Y, !0),
							e.el.removeEventListener('pointerup', $, !0);
					}
					L('beforeInit', () => {
						(_ = (0, k.c)('span', e.params.a11y.notificationClass)), _.setAttribute('aria-live', 'assertive'), _.setAttribute('aria-atomic', 'true');
					}),
						L('afterInit', () => {
							e.params.a11y.enabled && i();
						}),
						L('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
							e.params.a11y.enabled && t();
						}),
						L('fromEdge toEdge afterInit lock unlock', () => {
							e.params.a11y.enabled && v();
						}),
						L('paginationUpdate', () => {
							e.params.a11y.enabled && W();
						}),
						L('destroy', () => {
							e.params.a11y.enabled && r();
						});
				}
				var Me;
				function je(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ history: { enabled: !1, root: '', replaceState: !1, key: 'slides', keepQuery: !1 } });
					let _ = !1,
						D = {};
					const H = (E) =>
							E.toString()
								.replace(/\s+/g, '-')
								.replace(/[^\w-]+/g, '')
								.replace(/--+/g, '-')
								.replace(/^-+/, '')
								.replace(/-+$/, ''),
						O = (E) => {
							const w = Me();
							let x;
							E ? (x = new URL(E)) : (x = w.location);
							const b = x.pathname
									.slice(1)
									.split('/')
									.filter((I) => I !== ''),
								m = b.length,
								v = b[m - 2],
								S = b[m - 1];
							return { key: v, value: S };
						},
						T = (E, w) => {
							const x = Me();
							if (!_ || !e.params.history.enabled) return;
							let b;
							e.params.url ? (b = new URL(e.params.url)) : (b = x.location);
							const m = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${w}"]`) : e.slides[w];
							let v = H(m.getAttribute('data-history'));
							if (e.params.history.root.length > 0) {
								let I = e.params.history.root;
								I[I.length - 1] === '/' && (I = I.slice(0, I.length - 1)), (v = `${I}/${E ? `${E}/` : ''}${v}`);
							} else b.pathname.includes(E) || (v = `${E ? `${E}/` : ''}${v}`);
							e.params.history.keepQuery && (v += b.search);
							const S = x.history.state;
							(S && S.value === v) ||
								(e.params.history.replaceState ? x.history.replaceState({ value: v }, null, v) : x.history.pushState({ value: v }, null, v));
						},
						y = (E, w, x) => {
							if (w)
								for (let b = 0, m = e.slides.length; b < m; b += 1) {
									const v = e.slides[b];
									if (H(v.getAttribute('data-history')) === w) {
										const I = e.getSlideIndex(v);
										e.slideTo(I, E, x);
									}
								}
							else e.slideTo(0, E, x);
						},
						g = () => {
							(D = O(e.params.url)), y(e.params.speed, D.value, !1);
						},
						u = () => {
							const E = Me();
							if (e.params.history) {
								if (!E.history || !E.history.pushState) {
									(e.params.history.enabled = !1), (e.params.hashNavigation.enabled = !0);
									return;
								}
								if (((_ = !0), (D = O(e.params.url)), !D.key && !D.value)) {
									e.params.history.replaceState || E.addEventListener('popstate', g);
									return;
								}
								y(0, D.value, e.params.runCallbacksOnInit), e.params.history.replaceState || E.addEventListener('popstate', g);
							}
						},
						p = () => {
							const E = Me();
							e.params.history.replaceState || E.removeEventListener('popstate', g);
						};
					L('init', () => {
						e.params.history.enabled && u();
					}),
						L('destroy', () => {
							e.params.history.enabled && p();
						}),
						L('transitionEnd _freeModeNoMomentumRelease', () => {
							_ && T(e.params.history.key, e.activeIndex);
						}),
						L('slideChange', () => {
							_ && e.params.cssMode && T(e.params.history.key, e.activeIndex);
						});
				}
				var Ne, Ge, Oe;
				function He(q) {
					let { swiper: e, extendParams: K, emit: L, on: _ } = q,
						D = !1;
					const H = Ne(),
						O = Ge();
					K({
						hashNavigation: {
							enabled: !1,
							replaceState: !1,
							watchState: !1,
							getSlideIndex(p, E) {
								if (e.virtual && e.params.virtual.enabled) {
									const w = e.slides.filter((b) => b.getAttribute('data-hash') === E)[0];
									return w ? parseInt(w.getAttribute('data-swiper-slide-index'), 10) : 0;
								}
								return e.getSlideIndex(Oe(e.slidesEl, `.${e.params.slideClass}[data-hash="${E}"], swiper-slide[data-hash="${E}"]`)[0]);
							},
						},
					});
					const T = () => {
							L('hashChange');
							const p = H.location.hash.replace('#', ''),
								E =
									e.virtual && e.params.virtual.enabled
										? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`)
										: e.slides[e.activeIndex],
								w = E ? E.getAttribute('data-hash') : '';
							if (p !== w) {
								const x = e.params.hashNavigation.getSlideIndex(e, p);
								if (typeof x > 'u' || Number.isNaN(x)) return;
								e.slideTo(x);
							}
						},
						y = () => {
							if (!D || !e.params.hashNavigation.enabled) return;
							const p =
									e.virtual && e.params.virtual.enabled
										? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`)
										: e.slides[e.activeIndex],
								E = p ? p.getAttribute('data-hash') || p.getAttribute('data-history') : '';
							e.params.hashNavigation.replaceState && O.history && O.history.replaceState
								? (O.history.replaceState(null, null, `#${E}` || ''), L('hashSet'))
								: ((H.location.hash = E || ''), L('hashSet'));
						},
						g = () => {
							if (!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled)) return;
							D = !0;
							const p = H.location.hash.replace('#', '');
							if (p) {
								const w = e.params.hashNavigation.getSlideIndex(e, p);
								e.slideTo(w || 0, 0, e.params.runCallbacksOnInit, !0);
							}
							e.params.hashNavigation.watchState && O.addEventListener('hashchange', T);
						},
						u = () => {
							e.params.hashNavigation.watchState && O.removeEventListener('hashchange', T);
						};
					_('init', () => {
						e.params.hashNavigation.enabled && g();
					}),
						_('destroy', () => {
							e.params.hashNavigation.enabled && u();
						}),
						_('transitionEnd _freeModeNoMomentumRelease', () => {
							D && y();
						}),
						_('slideChange', () => {
							D && e.params.cssMode && y();
						});
				}
				var Ce;
				function $t(q) {
					let { swiper: e, extendParams: K, on: L, emit: _, params: D } = q;
					(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
						K({
							autoplay: {
								enabled: !1,
								delay: 3e3,
								waitForTransition: !0,
								disableOnInteraction: !1,
								stopOnLastSlide: !1,
								reverseDirection: !1,
								pauseOnMouseEnter: !1,
							},
						});
					let H,
						O,
						T = D && D.autoplay ? D.autoplay.delay : 3e3,
						y = D && D.autoplay ? D.autoplay.delay : 3e3,
						g,
						u = new Date().getTime(),
						p,
						E,
						w,
						x,
						b,
						m,
						v;
					function S(f) {
						!e || e.destroyed || !e.wrapperEl || (f.target === e.wrapperEl && (e.wrapperEl.removeEventListener('transitionend', S), !v && t()));
					}
					const I = () => {
							if (e.destroyed || !e.autoplay.running) return;
							e.autoplay.paused ? (p = !0) : p && ((y = g), (p = !1));
							const f = e.autoplay.paused ? g : u + y - new Date().getTime();
							(e.autoplay.timeLeft = f),
								_('autoplayTimeLeft', f, f / T),
								(O = requestAnimationFrame(() => {
									I();
								}));
						},
						W = () => {
							let f;
							return (
								e.virtual && e.params.virtual.enabled
									? (f = e.slides.filter((h) => h.classList.contains('swiper-slide-active'))[0])
									: (f = e.slides[e.activeIndex]),
								f ? parseInt(f.getAttribute('data-swiper-autoplay'), 10) : void 0
							);
						},
						R = (f) => {
							if (e.destroyed || !e.autoplay.running) return;
							cancelAnimationFrame(O), I();
							let c = typeof f > 'u' ? e.params.autoplay.delay : f;
							(T = e.params.autoplay.delay), (y = e.params.autoplay.delay);
							const h = W();
							!Number.isNaN(h) && h > 0 && typeof f > 'u' && ((c = h), (T = h), (y = h)), (g = c);
							const M = e.params.speed,
								C = () => {
									!e ||
										e.destroyed ||
										(e.params.autoplay.reverseDirection
											? !e.isBeginning || e.params.loop || e.params.rewind
												? (e.slidePrev(M, !0, !0), _('autoplay'))
												: e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, M, !0, !0), _('autoplay'))
											: !e.isEnd || e.params.loop || e.params.rewind
											? (e.slideNext(M, !0, !0), _('autoplay'))
											: e.params.autoplay.stopOnLastSlide || (e.slideTo(0, M, !0, !0), _('autoplay')),
										e.params.cssMode &&
											((u = new Date().getTime()),
											requestAnimationFrame(() => {
												R();
											})));
								};
							return (
								c > 0
									? (clearTimeout(H),
									  (H = setTimeout(() => {
											C();
									  }, c)))
									: requestAnimationFrame(() => {
											C();
									  }),
								c
							);
						},
						Y = () => {
							(u = new Date().getTime()), (e.autoplay.running = !0), R(), _('autoplayStart');
						},
						$ = () => {
							(e.autoplay.running = !1), clearTimeout(H), cancelAnimationFrame(O), _('autoplayStop');
						},
						s = (f, c) => {
							if (e.destroyed || !e.autoplay.running) return;
							clearTimeout(H), f || (m = !0);
							const h = () => {
								_('autoplayPause'), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener('transitionend', S) : t();
							};
							if (((e.autoplay.paused = !0), c)) {
								b && (g = e.params.autoplay.delay), (b = !1), h();
								return;
							}
							(g = (g || e.params.autoplay.delay) - (new Date().getTime() - u)), !(e.isEnd && g < 0 && !e.params.loop) && (g < 0 && (g = 0), h());
						},
						t = () => {
							(e.isEnd && g < 0 && !e.params.loop) ||
								e.destroyed ||
								!e.autoplay.running ||
								((u = new Date().getTime()), m ? ((m = !1), R(g)) : R(), (e.autoplay.paused = !1), _('autoplayResume'));
						},
						i = () => {
							if (e.destroyed || !e.autoplay.running) return;
							const f = Ce();
							f.visibilityState === 'hidden' && ((m = !0), s(!0)), f.visibilityState === 'visible' && t();
						},
						r = (f) => {
							f.pointerType === 'mouse' && ((m = !0), (v = !0), !(e.animating || e.autoplay.paused) && s(!0));
						},
						a = (f) => {
							f.pointerType === 'mouse' && ((v = !1), e.autoplay.paused && t());
						},
						n = () => {
							e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener('pointerenter', r), e.el.addEventListener('pointerleave', a));
						},
						l = () => {
							e.el.removeEventListener('pointerenter', r), e.el.removeEventListener('pointerleave', a);
						},
						d = () => {
							Ce().addEventListener('visibilitychange', i);
						},
						o = () => {
							Ce().removeEventListener('visibilitychange', i);
						};
					L('init', () => {
						e.params.autoplay.enabled && (n(), d(), Y());
					}),
						L('destroy', () => {
							l(), o(), e.autoplay.running && $();
						}),
						L('_freeModeStaticRelease', () => {
							(w || m) && t();
						}),
						L('_freeModeNoMomentumRelease', () => {
							e.params.autoplay.disableOnInteraction ? $() : s(!0, !0);
						}),
						L('beforeTransitionStart', (f, c, h) => {
							e.destroyed || !e.autoplay.running || (h || !e.params.autoplay.disableOnInteraction ? s(!0, !0) : $());
						}),
						L('sliderFirstMove', () => {
							if (!(e.destroyed || !e.autoplay.running)) {
								if (e.params.autoplay.disableOnInteraction) {
									$();
									return;
								}
								(E = !0),
									(w = !1),
									(m = !1),
									(x = setTimeout(() => {
										(m = !0), (w = !0), s(!0);
									}, 200));
							}
						}),
						L('touchEnd', () => {
							if (!(e.destroyed || !e.autoplay.running || !E)) {
								if ((clearTimeout(x), clearTimeout(H), e.params.autoplay.disableOnInteraction)) {
									(w = !1), (E = !1);
									return;
								}
								w && e.params.cssMode && t(), (w = !1), (E = !1);
							}
						}),
						L('slideChange', () => {
							e.destroyed || !e.autoplay.running || (b = !0);
						}),
						Object.assign(e.autoplay, { start: Y, stop: $, pause: s, resume: t });
				}
				var dt, ct, ft;
				function Dt(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({
						thumbs: {
							swiper: null,
							multipleActiveThumbs: !0,
							autoScrollOffset: 0,
							slideThumbActiveClass: 'swiper-slide-thumb-active',
							thumbsContainerClass: 'swiper-thumbs',
						},
					});
					let _ = !1,
						D = !1;
					e.thumbs = { swiper: null };
					function H() {
						const y = e.thumbs.swiper;
						if (!y || y.destroyed) return;
						const g = y.clickedIndex,
							u = y.clickedSlide;
						if ((u && u.classList.contains(e.params.thumbs.slideThumbActiveClass)) || typeof g > 'u' || g === null) return;
						let p;
						y.params.loop ? (p = parseInt(y.clickedSlide.getAttribute('data-swiper-slide-index'), 10)) : (p = g),
							e.params.loop ? e.slideToLoop(p) : e.slideTo(p);
					}
					function O() {
						const { thumbs: y } = e.params;
						if (_) return !1;
						_ = !0;
						const g = e.constructor;
						if (y.swiper instanceof g)
							(e.thumbs.swiper = y.swiper),
								Object.assign(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
								Object.assign(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
								e.thumbs.swiper.update();
						else if (ct(y.swiper)) {
							const u = Object.assign({}, y.swiper);
							Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (e.thumbs.swiper = new g(u)), (D = !0);
						}
						return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on('tap', H), !0;
					}
					function T(y) {
						const g = e.thumbs.swiper;
						if (!g || g.destroyed) return;
						const u = g.params.slidesPerView === 'auto' ? g.slidesPerViewDynamic() : g.params.slidesPerView;
						let p = 1;
						const E = e.params.thumbs.slideThumbActiveClass;
						if (
							(e.params.slidesPerView > 1 && !e.params.centeredSlides && (p = e.params.slidesPerView),
							e.params.thumbs.multipleActiveThumbs || (p = 1),
							(p = Math.floor(p)),
							g.slides.forEach((b) => b.classList.remove(E)),
							g.params.loop || (g.params.virtual && g.params.virtual.enabled))
						)
							for (let b = 0; b < p; b += 1)
								ft(g.slidesEl, `[data-swiper-slide-index="${e.realIndex + b}"]`).forEach((m) => {
									m.classList.add(E);
								});
						else for (let b = 0; b < p; b += 1) g.slides[e.realIndex + b] && g.slides[e.realIndex + b].classList.add(E);
						const w = e.params.thumbs.autoScrollOffset,
							x = w && !g.params.loop;
						if (e.realIndex !== g.realIndex || x) {
							const b = g.activeIndex;
							let m, v;
							if (g.params.loop) {
								const S = g.slides.filter((I) => I.getAttribute('data-swiper-slide-index') === `${e.realIndex}`)[0];
								(m = g.slides.indexOf(S)), (v = e.activeIndex > e.previousIndex ? 'next' : 'prev');
							} else (m = e.realIndex), (v = m > e.previousIndex ? 'next' : 'prev');
							x && (m += v === 'next' ? w : -1 * w),
								g.visibleSlidesIndexes &&
									g.visibleSlidesIndexes.indexOf(m) < 0 &&
									(g.params.centeredSlides
										? m > b
											? (m = m - Math.floor(u / 2) + 1)
											: (m = m + Math.floor(u / 2) - 1)
										: m > b && g.params.slidesPerGroup,
									g.slideTo(m, y ? 0 : void 0));
						}
					}
					L('beforeInit', () => {
						const { thumbs: y } = e.params;
						if (!(!y || !y.swiper))
							if (typeof y.swiper == 'string' || y.swiper instanceof HTMLElement) {
								const g = dt(),
									u = () => {
										const E = typeof y.swiper == 'string' ? g.querySelector(y.swiper) : y.swiper;
										if (E && E.swiper) (y.swiper = E.swiper), O(), T(!0);
										else if (E) {
											const w = (x) => {
												(y.swiper = x.detail[0]), E.removeEventListener('init', w), O(), T(!0), y.swiper.update(), e.update();
											};
											E.addEventListener('init', w);
										}
										return E;
									},
									p = () => {
										if (e.destroyed) return;
										u() || requestAnimationFrame(p);
									};
								requestAnimationFrame(p);
							} else O(), T(!0);
					}),
						L('slideChange update resize observerUpdate', () => {
							T();
						}),
						L('setTransition', (y, g) => {
							const u = e.thumbs.swiper;
							!u || u.destroyed || u.setTransition(g);
						}),
						L('beforeDestroy', () => {
							const y = e.thumbs.swiper;
							!y || y.destroyed || (D && y.destroy());
						}),
						Object.assign(e.thumbs, { init: O, update: T });
				}
				var qe, Ue;
				function Gt(q) {
					let { swiper: e, extendParams: K, emit: L, once: _ } = q;
					K({
						freeMode: {
							enabled: !1,
							momentum: !0,
							momentumRatio: 1,
							momentumBounce: !0,
							momentumBounceRatio: 1,
							momentumVelocityRatio: 1,
							sticky: !1,
							minimumVelocity: 0.02,
						},
					});
					function D() {
						if (e.params.cssMode) return;
						const T = e.getTranslate();
						e.setTranslate(T),
							e.setTransition(0),
							(e.touchEventsData.velocities.length = 0),
							e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
					}
					function H() {
						if (e.params.cssMode) return;
						const { touchEventsData: T, touches: y } = e;
						T.velocities.length === 0 && T.velocities.push({ position: y[e.isHorizontal() ? 'startX' : 'startY'], time: T.touchStartTime }),
							T.velocities.push({ position: y[e.isHorizontal() ? 'currentX' : 'currentY'], time: qe() });
					}
					function O(T) {
						let { currentPos: y } = T;
						if (e.params.cssMode) return;
						const { params: g, wrapperEl: u, rtlTranslate: p, snapGrid: E, touchEventsData: w } = e,
							b = qe() - w.touchStartTime;
						if (y < -e.minTranslate()) {
							e.slideTo(e.activeIndex);
							return;
						}
						if (y > -e.maxTranslate()) {
							e.slides.length < E.length ? e.slideTo(E.length - 1) : e.slideTo(e.slides.length - 1);
							return;
						}
						if (g.freeMode.momentum) {
							if (w.velocities.length > 1) {
								const $ = w.velocities.pop(),
									s = w.velocities.pop(),
									t = $.position - s.position,
									i = $.time - s.time;
								(e.velocity = t / i),
									(e.velocity /= 2),
									Math.abs(e.velocity) < g.freeMode.minimumVelocity && (e.velocity = 0),
									(i > 150 || qe() - $.time > 300) && (e.velocity = 0);
							} else e.velocity = 0;
							(e.velocity *= g.freeMode.momentumVelocityRatio), (w.velocities.length = 0);
							let m = 1e3 * g.freeMode.momentumRatio;
							const v = e.velocity * m;
							let S = e.translate + v;
							p && (S = -S);
							let I = !1,
								W;
							const R = Math.abs(e.velocity) * 20 * g.freeMode.momentumBounceRatio;
							let Y;
							if (S < e.maxTranslate())
								g.freeMode.momentumBounce
									? (S + e.maxTranslate() < -R && (S = e.maxTranslate() - R), (W = e.maxTranslate()), (I = !0), (w.allowMomentumBounce = !0))
									: (S = e.maxTranslate()),
									g.loop && g.centeredSlides && (Y = !0);
							else if (S > e.minTranslate())
								g.freeMode.momentumBounce
									? (S - e.minTranslate() > R && (S = e.minTranslate() + R), (W = e.minTranslate()), (I = !0), (w.allowMomentumBounce = !0))
									: (S = e.minTranslate()),
									g.loop && g.centeredSlides && (Y = !0);
							else if (g.freeMode.sticky) {
								let $;
								for (let s = 0; s < E.length; s += 1)
									if (E[s] > -S) {
										$ = s;
										break;
									}
								Math.abs(E[$] - S) < Math.abs(E[$ - 1] - S) || e.swipeDirection === 'next' ? (S = E[$]) : (S = E[$ - 1]), (S = -S);
							}
							if (
								(Y &&
									_('transitionEnd', () => {
										e.loopFix();
									}),
								e.velocity !== 0)
							) {
								if ((p ? (m = Math.abs((-S - e.translate) / e.velocity)) : (m = Math.abs((S - e.translate) / e.velocity)), g.freeMode.sticky)) {
									const $ = Math.abs((p ? -S : S) - e.translate),
										s = e.slidesSizesGrid[e.activeIndex];
									$ < s ? (m = g.speed) : $ < 2 * s ? (m = g.speed * 1.5) : (m = g.speed * 2.5);
								}
							} else if (g.freeMode.sticky) {
								e.slideToClosest();
								return;
							}
							g.freeMode.momentumBounce && I
								? (e.updateProgress(W),
								  e.setTransition(m),
								  e.setTranslate(S),
								  e.transitionStart(!0, e.swipeDirection),
								  (e.animating = !0),
								  Ue(u, () => {
										!e ||
											e.destroyed ||
											!w.allowMomentumBounce ||
											(L('momentumBounce'),
											e.setTransition(g.speed),
											setTimeout(() => {
												e.setTranslate(W),
													Ue(u, () => {
														!e || e.destroyed || e.transitionEnd();
													});
											}, 0));
								  }))
								: e.velocity
								? (L('_freeModeNoMomentumRelease'),
								  e.updateProgress(S),
								  e.setTransition(m),
								  e.setTranslate(S),
								  e.transitionStart(!0, e.swipeDirection),
								  e.animating ||
										((e.animating = !0),
										Ue(u, () => {
											!e || e.destroyed || e.transitionEnd();
										})))
								: e.updateProgress(S),
								e.updateActiveIndex(),
								e.updateSlidesClasses();
						} else if (g.freeMode.sticky) {
							e.slideToClosest();
							return;
						} else g.freeMode && L('_freeModeNoMomentumRelease');
						(!g.freeMode.momentum || b >= g.longSwipesMs) &&
							(L('_freeModeStaticRelease'), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
					}
					Object.assign(e, { freeMode: { onTouchStart: D, onTouchMove: H, onTouchEnd: O } });
				}
				var ut;
				function Ht(q, e) {
					const K = ut(e);
					return K !== e && ((K.style.backfaceVisibility = 'hidden'), (K.style['-webkit-backface-visibility'] = 'hidden')), K;
				}
				var pt;
				function Rt(q) {
					let { swiper: e, duration: K, transformElements: L, allSlides: _ } = q;
					const { activeIndex: D } = e,
						H = (O) => (O.parentElement ? O.parentElement : e.slides.filter((y) => y.shadowRoot && y.shadowRoot === O.parentNode)[0]);
					if (e.params.virtualTranslate && K !== 0) {
						let O = !1,
							T;
						_
							? (T = L)
							: (T = L.filter((y) => {
									const g = y.classList.contains('swiper-slide-transform') ? H(y) : y;
									return e.getSlideIndex(g) === D;
							  })),
							T.forEach((y) => {
								pt(y, () => {
									if (O || !e || e.destroyed) return;
									(O = !0), (e.animating = !1);
									const g = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
									e.wrapperEl.dispatchEvent(g);
								});
							});
					}
				}
				var mt, ht, gt, vt;
				function wt(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ fadeEffect: { crossFade: !1 } }),
						mt({
							effect: 'fade',
							swiper: e,
							on: L,
							setTranslate: () => {
								const { slides: H } = e,
									O = e.params.fadeEffect;
								for (let T = 0; T < H.length; T += 1) {
									const y = e.slides[T];
									let u = -y.swiperSlideOffset;
									e.params.virtualTranslate || (u -= e.translate);
									let p = 0;
									e.isHorizontal() || ((p = u), (u = 0));
									const E = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(y.progress), 0) : 1 + Math.min(Math.max(y.progress, -1), 0),
										w = ht(O, y);
									(w.style.opacity = E), (w.style.transform = `translate3d(${u}px, ${p}px, 0px)`);
								}
							},
							setTransition: (H) => {
								const O = e.slides.map((T) => vt(T));
								O.forEach((T) => {
									T.style.transitionDuration = `${H}ms`;
								}),
									gt({ swiper: e, duration: H, transformElements: O, allSlides: !0 });
							},
							overwriteParams: () => ({
								slidesPerView: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !e.params.cssMode,
							}),
						});
				}
				var bt, Ve;
				function Bt(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
					const _ = (T, y, g) => {
						let u = g ? T.querySelector('.swiper-slide-shadow-left') : T.querySelector('.swiper-slide-shadow-top'),
							p = g ? T.querySelector('.swiper-slide-shadow-right') : T.querySelector('.swiper-slide-shadow-bottom');
						u || ((u = Ve('div', `swiper-slide-shadow-cube swiper-slide-shadow-${g ? 'left' : 'top'}`.split(' '))), T.append(u)),
							p || ((p = Ve('div', `swiper-slide-shadow-cube swiper-slide-shadow-${g ? 'right' : 'bottom'}`.split(' '))), T.append(p)),
							u && (u.style.opacity = Math.max(-y, 0)),
							p && (p.style.opacity = Math.max(y, 0));
					};
					bt({
						effect: 'cube',
						swiper: e,
						on: L,
						setTranslate: () => {
							const { el: T, wrapperEl: y, slides: g, width: u, height: p, rtlTranslate: E, size: w, browser: x } = e,
								b = e.params.cubeEffect,
								m = e.isHorizontal(),
								v = e.virtual && e.params.virtual.enabled;
							let S = 0,
								I;
							b.shadow &&
								(m
									? ((I = e.wrapperEl.querySelector('.swiper-cube-shadow')),
									  I || ((I = Ve('div', 'swiper-cube-shadow')), e.wrapperEl.append(I)),
									  (I.style.height = `${u}px`))
									: ((I = T.querySelector('.swiper-cube-shadow')), I || ((I = Ve('div', 'swiper-cube-shadow')), T.append(I))));
							for (let R = 0; R < g.length; R += 1) {
								const Y = g[R];
								let $ = R;
								v && ($ = parseInt(Y.getAttribute('data-swiper-slide-index'), 10));
								let s = $ * 90,
									t = Math.floor(s / 360);
								E && ((s = -s), (t = Math.floor(-s / 360)));
								const i = Math.max(Math.min(Y.progress, 1), -1);
								let r = 0,
									a = 0,
									n = 0;
								$ % 4 === 0
									? ((r = -t * 4 * w), (n = 0))
									: ($ - 1) % 4 === 0
									? ((r = 0), (n = -t * 4 * w))
									: ($ - 2) % 4 === 0
									? ((r = w + t * 4 * w), (n = w))
									: ($ - 3) % 4 === 0 && ((r = -w), (n = 3 * w + w * 4 * t)),
									E && (r = -r),
									m || ((a = r), (r = 0));
								const l = `rotateX(${m ? 0 : -s}deg) rotateY(${m ? s : 0}deg) translate3d(${r}px, ${a}px, ${n}px)`;
								i <= 1 &&
									i > -1 &&
									((S = $ * 90 + i * 90),
									E && (S = -$ * 90 - i * 90),
									e.browser && e.browser.need3dFix && (Math.abs(S) / 90) % 2 === 1 && (S += 0.001)),
									(Y.style.transform = l),
									b.slideShadows && _(Y, i, m);
							}
							if (((y.style.transformOrigin = `50% 50% -${w / 2}px`), (y.style['-webkit-transform-origin'] = `50% 50% -${w / 2}px`), b.shadow))
								if (m)
									I.style.transform = `translate3d(0px, ${u / 2 + b.shadowOffset}px, ${-u / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
										b.shadowScale
									})`;
								else {
									const R = Math.abs(S) - Math.floor(Math.abs(S) / 90) * 90,
										Y = 1.5 - (Math.sin((R * 2 * Math.PI) / 360) / 2 + Math.cos((R * 2 * Math.PI) / 360) / 2),
										$ = b.shadowScale,
										s = b.shadowScale / Y,
										t = b.shadowOffset;
									I.style.transform = `scale3d(${$}, 1, ${s}) translate3d(0px, ${p / 2 + t}px, ${-p / 2 / s}px) rotateX(-89.99deg)`;
								}
							const W = (x.isSafari || x.isWebView) && x.needPerspectiveFix ? -w / 2 : 0;
							(y.style.transform = `translate3d(0px,0,${W}px) rotateX(${e.isHorizontal() ? 0 : S}deg) rotateY(${e.isHorizontal() ? -S : 0}deg)`),
								y.style.setProperty('--swiper-cube-translate-z', `${W}px`);
						},
						setTransition: (T) => {
							const { el: y, slides: g } = e;
							if (
								(g.forEach((u) => {
									(u.style.transitionDuration = `${T}ms`),
										u
											.querySelectorAll(
												'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
											)
											.forEach((p) => {
												p.style.transitionDuration = `${T}ms`;
											});
								}),
								e.params.cubeEffect.shadow && !e.isHorizontal())
							) {
								const u = y.querySelector('.swiper-cube-shadow');
								u && (u.style.transitionDuration = `${T}ms`);
							}
						},
						recreateShadows: () => {
							const T = e.isHorizontal();
							e.slides.forEach((y) => {
								const g = Math.max(Math.min(y.progress, 1), -1);
								_(y, g, T);
							});
						},
						getEffectParams: () => e.params.cubeEffect,
						perspective: () => !0,
						overwriteParams: () => ({
							slidesPerView: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0,
						}),
					});
				}
				var it, yt;
				function kt(q, e, K) {
					const L = `swiper-slide-shadow${K ? `-${K}` : ''}${q ? ` swiper-slide-shadow-${q}` : ''}`,
						_ = it(e);
					let D = _.querySelector(`.${L.split(' ').join('.')}`);
					return D || ((D = yt('div', L.split(' '))), _.append(D)), D;
				}
				var rt, St, at, Et, xt;
				function Nt(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
					const _ = (T, y) => {
						let g = e.isHorizontal() ? T.querySelector('.swiper-slide-shadow-left') : T.querySelector('.swiper-slide-shadow-top'),
							u = e.isHorizontal() ? T.querySelector('.swiper-slide-shadow-right') : T.querySelector('.swiper-slide-shadow-bottom');
						g || (g = rt('flip', T, e.isHorizontal() ? 'left' : 'top')),
							u || (u = rt('flip', T, e.isHorizontal() ? 'right' : 'bottom')),
							g && (g.style.opacity = Math.max(-y, 0)),
							u && (u.style.opacity = Math.max(y, 0));
					};
					St({
						effect: 'flip',
						swiper: e,
						on: L,
						setTranslate: () => {
							const { slides: T, rtlTranslate: y } = e,
								g = e.params.flipEffect;
							for (let u = 0; u < T.length; u += 1) {
								const p = T[u];
								let E = p.progress;
								e.params.flipEffect.limitRotation && (E = Math.max(Math.min(p.progress, 1), -1));
								const w = p.swiperSlideOffset;
								let b = -180 * E,
									m = 0,
									v = e.params.cssMode ? -w - e.translate : -w,
									S = 0;
								e.isHorizontal() ? y && (b = -b) : ((S = v), (v = 0), (m = -b), (b = 0)),
									e.browser && e.browser.need3dFix && ((Math.abs(b) / 90) % 2 === 1 && (b += 0.001), (Math.abs(m) / 90) % 2 === 1 && (m += 0.001)),
									(p.style.zIndex = -Math.abs(Math.round(E)) + T.length),
									g.slideShadows && _(p, E);
								const I = `translate3d(${v}px, ${S}px, 0px) rotateX(${m}deg) rotateY(${b}deg)`,
									W = at(g, p);
								W.style.transform = I;
							}
						},
						setTransition: (T) => {
							const y = e.slides.map((g) => xt(g));
							y.forEach((g) => {
								(g.style.transitionDuration = `${T}ms`),
									g
										.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
										.forEach((u) => {
											u.style.transitionDuration = `${T}ms`;
										});
							}),
								Et({ swiper: e, duration: T, transformElements: y });
						},
						recreateShadows: () => {
							e.params.flipEffect,
								e.slides.forEach((T) => {
									let y = T.progress;
									e.params.flipEffect.limitRotation && (y = Math.max(Math.min(T.progress, 1), -1)), _(T, y);
								});
						},
						getEffectParams: () => e.params.flipEffect,
						perspective: () => !0,
						overwriteParams: () => ({
							slidesPerView: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !e.params.cssMode,
						}),
					});
				}
				var Ke, Tt, Mt, Ct;
				function Vt(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } }),
						Tt({
							effect: 'coverflow',
							swiper: e,
							on: L,
							setTranslate: () => {
								const { width: H, height: O, slides: T, slidesSizesGrid: y } = e,
									g = e.params.coverflowEffect,
									u = e.isHorizontal(),
									p = e.translate,
									E = u ? -p + H / 2 : -p + O / 2,
									w = u ? g.rotate : -g.rotate,
									x = g.depth;
								for (let b = 0, m = T.length; b < m; b += 1) {
									const v = T[b],
										S = y[b],
										I = v.swiperSlideOffset,
										W = (E - I - S / 2) / S,
										R = typeof g.modifier == 'function' ? g.modifier(W) : W * g.modifier;
									let Y = u ? w * R : 0,
										$ = u ? 0 : w * R,
										s = -x * Math.abs(R),
										t = g.stretch;
									typeof t == 'string' && t.indexOf('%') !== -1 && (t = (parseFloat(g.stretch) / 100) * S);
									let i = u ? 0 : t * R,
										r = u ? t * R : 0,
										a = 1 - (1 - g.scale) * Math.abs(R);
									Math.abs(r) < 0.001 && (r = 0),
										Math.abs(i) < 0.001 && (i = 0),
										Math.abs(s) < 0.001 && (s = 0),
										Math.abs(Y) < 0.001 && (Y = 0),
										Math.abs($) < 0.001 && ($ = 0),
										Math.abs(a) < 0.001 && (a = 0),
										e.browser && e.browser.need3dFix && ((Math.abs(Y) / 90) % 2 === 1 && (Y += 0.001), (Math.abs($) / 90) % 2 === 1 && ($ += 0.001));
									const n = `translate3d(${r}px,${i}px,${s}px)  rotateX(${$}deg) rotateY(${Y}deg) scale(${a})`,
										l = Mt(g, v);
									if (((l.style.transform = n), (v.style.zIndex = -Math.abs(Math.round(R)) + 1), g.slideShadows)) {
										let d = u ? v.querySelector('.swiper-slide-shadow-left') : v.querySelector('.swiper-slide-shadow-top'),
											o = u ? v.querySelector('.swiper-slide-shadow-right') : v.querySelector('.swiper-slide-shadow-bottom');
										d || (d = Ke('coverflow', v, u ? 'left' : 'top')),
											o || (o = Ke('coverflow', v, u ? 'right' : 'bottom')),
											d && (d.style.opacity = R > 0 ? R : 0),
											o && (o.style.opacity = -R > 0 ? -R : 0);
									}
								}
							},
							setTransition: (H) => {
								e.slides
									.map((T) => Ct(T))
									.forEach((T) => {
										(T.style.transitionDuration = `${H}ms`),
											T.querySelectorAll(
												'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
											).forEach((y) => {
												y.style.transitionDuration = `${H}ms`;
											});
									});
							},
							perspective: () => !0,
							overwriteParams: () => ({ watchSlidesProgress: !0 }),
						});
				}
				var Pt, Lt, It, zt, At;
				function nt(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({
						creativeEffect: {
							limitProgress: 1,
							shadowPerProgress: !1,
							progressMultiplier: 1,
							perspective: !0,
							prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
							next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
						},
					});
					const _ = (O) => (typeof O == 'string' ? O : `${O}px`);
					Lt({
						effect: 'creative',
						swiper: e,
						on: L,
						setTranslate: () => {
							const { slides: O, wrapperEl: T, slidesSizesGrid: y } = e,
								g = e.params.creativeEffect,
								{ progressMultiplier: u } = g,
								p = e.params.centeredSlides;
							if (p) {
								const E = y[0] / 2 - e.params.slidesOffsetBefore || 0;
								T.style.transform = `translateX(calc(50% - ${E}px))`;
							}
							for (let E = 0; E < O.length; E += 1) {
								const w = O[E],
									x = w.progress,
									b = Math.min(Math.max(w.progress, -g.limitProgress), g.limitProgress);
								let m = b;
								p || (m = Math.min(Math.max(w.originalProgress, -g.limitProgress), g.limitProgress));
								const v = w.swiperSlideOffset,
									S = [e.params.cssMode ? -v - e.translate : -v, 0, 0],
									I = [0, 0, 0];
								let W = !1;
								e.isHorizontal() || ((S[1] = S[0]), (S[0] = 0));
								let R = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
								b < 0 ? ((R = g.next), (W = !0)) : b > 0 && ((R = g.prev), (W = !0)),
									S.forEach((a, n) => {
										S[n] = `calc(${a}px + (${_(R.translate[n])} * ${Math.abs(b * u)}))`;
									}),
									I.forEach((a, n) => {
										let l = R.rotate[n] * Math.abs(b * u);
										e.browser && e.browser.need3dFix && (Math.abs(l) / 90) % 2 === 1 && (l += 0.001), (I[n] = l);
									}),
									(w.style.zIndex = -Math.abs(Math.round(x)) + O.length);
								const Y = S.join(', '),
									$ = `rotateX(${I[0]}deg) rotateY(${I[1]}deg) rotateZ(${I[2]}deg)`,
									s = m < 0 ? `scale(${1 + (1 - R.scale) * m * u})` : `scale(${1 - (1 - R.scale) * m * u})`,
									t = m < 0 ? 1 + (1 - R.opacity) * m * u : 1 - (1 - R.opacity) * m * u,
									i = `translate3d(${Y}) ${$} ${s}`;
								if ((W && R.shadow) || !W) {
									let a = w.querySelector('.swiper-slide-shadow');
									if ((!a && R.shadow && (a = Pt('creative', w)), a)) {
										const n = g.shadowPerProgress ? b * (1 / g.limitProgress) : b;
										a.style.opacity = Math.min(Math.max(Math.abs(n), 0), 1);
									}
								}
								const r = It(g, w);
								(r.style.transform = i), (r.style.opacity = t), R.origin && (r.style.transformOrigin = R.origin);
							}
						},
						setTransition: (O) => {
							const T = e.slides.map((y) => At(y));
							T.forEach((y) => {
								(y.style.transitionDuration = `${O}ms`),
									y.querySelectorAll('.swiper-slide-shadow').forEach((g) => {
										g.style.transitionDuration = `${O}ms`;
									});
							}),
								zt({ swiper: e, duration: O, transformElements: T, allSlides: !0 });
						},
						perspective: () => e.params.creativeEffect.perspective,
						overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }),
					});
				}
				var Ot, Ze, Qe, xe, lt;
				function _e(q) {
					let { swiper: e, extendParams: K, on: L } = q;
					K({ cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
						Ze({
							effect: 'cards',
							swiper: e,
							on: L,
							setTranslate: () => {
								const { slides: H, activeIndex: O, rtlTranslate: T } = e,
									y = e.params.cardsEffect,
									{ startTranslate: g, isTouched: u } = e.touchEventsData,
									p = T ? -e.translate : e.translate;
								for (let E = 0; E < H.length; E += 1) {
									const w = H[E],
										x = w.progress,
										b = Math.min(Math.max(x, -4), 4);
									let m = w.swiperSlideOffset;
									e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
										e.params.centeredSlides && e.params.cssMode && (m -= H[0].swiperSlideOffset);
									let v = e.params.cssMode ? -m - e.translate : -m,
										S = 0;
									const I = -100 * Math.abs(b);
									let W = 1,
										R = -y.perSlideRotate * b,
										Y = y.perSlideOffset - Math.abs(b) * 0.75;
									const $ = e.virtual && e.params.virtual.enabled ? e.virtual.from + E : E,
										s = ($ === O || $ === O - 1) && b > 0 && b < 1 && (u || e.params.cssMode) && p < g,
										t = ($ === O || $ === O + 1) && b < 0 && b > -1 && (u || e.params.cssMode) && p > g;
									if (s || t) {
										const n = (1 - Math.abs((Math.abs(b) - 0.5) / 0.5)) ** 0.5;
										(R += -28 * b * n), (W += -0.5 * n), (Y += 96 * n), (S = `${-25 * n * Math.abs(b)}%`);
									}
									if (
										(b < 0
											? (v = `calc(${v}px ${T ? '-' : '+'} (${Y * Math.abs(b)}%))`)
											: b > 0
											? (v = `calc(${v}px ${T ? '-' : '+'} (-${Y * Math.abs(b)}%))`)
											: (v = `${v}px`),
										!e.isHorizontal())
									) {
										const n = S;
										(S = v), (v = n);
									}
									const i = b < 0 ? `${1 + (1 - W) * b}` : `${1 - (1 - W) * b}`,
										r = `
        translate3d(${v}, ${S}, ${I}px)
        rotateZ(${y.rotate ? (T ? -R : R) : 0}deg)
        scale(${i})
      `;
									if (y.slideShadows) {
										let n = w.querySelector('.swiper-slide-shadow');
										n || (n = Ot('cards', w)), n && (n.style.opacity = Math.min(Math.max((Math.abs(b) - 0.5) / 0.5, 0), 1));
									}
									w.style.zIndex = -Math.abs(Math.round(x)) + H.length;
									const a = Qe(y, w);
									a.style.transform = r;
								}
							},
							setTransition: (H) => {
								const O = e.slides.map((T) => lt(T));
								O.forEach((T) => {
									(T.style.transitionDuration = `${H}ms`),
										T.querySelectorAll('.swiper-slide-shadow').forEach((y) => {
											y.style.transitionDuration = `${H}ms`;
										});
								}),
									xe({ swiper: e, duration: H, transformElements: O });
							},
							perspective: () => !0,
							overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }),
						});
				}
			},
			'../../node_modules/swiper/shared/ssr-window.esm.mjs'(Je, Ie, Se) {
				Se.d(Ie, { a: () => ue, g: () => le });
				function Q(te) {
					return te !== null && typeof te == 'object' && 'constructor' in te && te.constructor === Object;
				}
				function k(te, ce) {
					te === void 0 && (te = {}),
						ce === void 0 && (ce = {}),
						Object.keys(ce).forEach((Ee) => {
							typeof te[Ee] > 'u' ? (te[Ee] = ce[Ee]) : Q(ce[Ee]) && Q(te[Ee]) && Object.keys(ce[Ee]).length > 0 && k(te[Ee], ce[Ee]);
						});
				}
				const V = {
					body: {},
					addEventListener() {},
					removeEventListener() {},
					activeElement: { blur() {}, nodeName: '' },
					querySelector() {
						return null;
					},
					querySelectorAll() {
						return [];
					},
					getElementById() {
						return null;
					},
					createEvent() {
						return { initEvent() {} };
					},
					createElement() {
						return {
							children: [],
							childNodes: [],
							style: {},
							setAttribute() {},
							getElementsByTagName() {
								return [];
							},
						};
					},
					createElementNS() {
						return {};
					},
					importNode() {
						return null;
					},
					location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
				};
				function le() {
					const te = typeof document < 'u' ? document : {};
					return k(te, V), te;
				}
				const de = {
					document: V,
					navigator: { userAgent: '' },
					location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
					history: { replaceState() {}, pushState() {}, go() {}, back() {} },
					CustomEvent: function () {
						return this;
					},
					addEventListener() {},
					removeEventListener() {},
					getComputedStyle() {
						return {
							getPropertyValue() {
								return '';
							},
						};
					},
					Image() {},
					Date() {},
					screen: {},
					setTimeout() {},
					clearTimeout() {},
					matchMedia() {
						return {};
					},
					requestAnimationFrame(te) {
						return typeof setTimeout > 'u' ? (te(), null) : setTimeout(te, 0);
					},
					cancelAnimationFrame(te) {
						typeof setTimeout > 'u' || clearTimeout(te);
					},
				};
				function ue() {
					const te = typeof window < 'u' ? window : {};
					return k(te, de), te;
				}
			},
			'../../node_modules/swiper/shared/utils.mjs'(Je, Ie, Se) {
				Se.d(Ie, {
					a: () => Be,
					b: () => $e,
					c: () => st,
					d: () => de,
					e: () => ze,
					f: () => De,
					h: () => We,
					i: () => k,
					j: () => te,
					m: () => Ae,
					n: () => le,
					o: () => Fe,
					p: () => Te,
					q: () => Ye,
					r: () => et,
					s: () => Xe,
					t: () => Re,
					u: () => Le,
					v: () => V,
				});
				var Q = Se('../../node_modules/swiper/shared/ssr-window.esm.mjs');
				function k(G) {
					return (
						G === void 0 && (G = ''),
						G.trim()
							.split(' ')
							.filter((B) => !!B.trim())
					);
				}
				function V(G) {
					const B = G;
					Object.keys(B).forEach((j) => {
						try {
							B[j] = null;
						} catch {}
						try {
							delete B[j];
						} catch {}
					});
				}
				function le(G, B) {
					return B === void 0 && (B = 0), setTimeout(G, B);
				}
				function de() {
					return Date.now();
				}
				function ue(G) {
					const B = (0, Q.a)();
					let j;
					return B.getComputedStyle && (j = B.getComputedStyle(G, null)), !j && G.currentStyle && (j = G.currentStyle), j || (j = G.style), j;
				}
				function te(G, B) {
					B === void 0 && (B = 'x');
					const j = (0, Q.a)();
					let ee, pe, he;
					const ve = ue(G);
					return (
						j.WebKitCSSMatrix
							? ((pe = ve.transform || ve.webkitTransform),
							  pe.split(',').length > 6 &&
									(pe = pe
										.split(', ')
										.map((fe) => fe.replace(',', '.'))
										.join(', ')),
							  (he = new j.WebKitCSSMatrix(pe === 'none' ? '' : pe)))
							: ((he =
									ve.MozTransform ||
									ve.OTransform ||
									ve.MsTransform ||
									ve.msTransform ||
									ve.transform ||
									ve.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
							  (ee = he.toString().split(','))),
						B === 'x' && (j.WebKitCSSMatrix ? (pe = he.m41) : ee.length === 16 ? (pe = parseFloat(ee[12])) : (pe = parseFloat(ee[4]))),
						B === 'y' && (j.WebKitCSSMatrix ? (pe = he.m42) : ee.length === 16 ? (pe = parseFloat(ee[13])) : (pe = parseFloat(ee[5]))),
						pe || 0
					);
				}
				function ce(G) {
					return typeof G == 'object' && G !== null && G.constructor && Object.prototype.toString.call(G).slice(8, -1) === 'Object';
				}
				function Ee(G) {
					return typeof window < 'u' && typeof window.HTMLElement < 'u' ? G instanceof HTMLElement : G && (G.nodeType === 1 || G.nodeType === 11);
				}
				function Le() {
					const G = Object(arguments.length <= 0 ? void 0 : arguments[0]),
						B = ['__proto__', 'constructor', 'prototype'];
					for (let j = 1; j < arguments.length; j += 1) {
						const ee = j < 0 || arguments.length <= j ? void 0 : arguments[j];
						if (ee != null && !Ee(ee)) {
							const pe = Object.keys(Object(ee)).filter((he) => B.indexOf(he) < 0);
							for (let he = 0, ve = pe.length; he < ve; he += 1) {
								const fe = pe[he],
									Me = Object.getOwnPropertyDescriptor(ee, fe);
								Me !== void 0 &&
									Me.enumerable &&
									(ce(G[fe]) && ce(ee[fe])
										? ee[fe].__swiper__
											? (G[fe] = ee[fe])
											: Le(G[fe], ee[fe])
										: !ce(G[fe]) && ce(ee[fe])
										? ((G[fe] = {}), ee[fe].__swiper__ ? (G[fe] = ee[fe]) : Le(G[fe], ee[fe]))
										: (G[fe] = ee[fe]));
							}
						}
					}
					return G;
				}
				function Xe(G, B, j) {
					G.style.setProperty(B, j);
				}
				function et(G) {
					let { swiper: B, targetPosition: j, side: ee } = G;
					const pe = (0, Q.a)(),
						he = -B.translate;
					let ve = null,
						fe;
					const Me = B.params.speed;
					(B.wrapperEl.style.scrollSnapType = 'none'), pe.cancelAnimationFrame(B.cssModeFrameID);
					const je = j > he ? 'next' : 'prev',
						Ne = (Oe, He) => (je === 'next' && Oe >= He) || (je === 'prev' && Oe <= He),
						Ge = () => {
							(fe = new Date().getTime()), ve === null && (ve = fe);
							const Oe = Math.max(Math.min((fe - ve) / Me, 1), 0),
								He = 0.5 - Math.cos(Oe * Math.PI) / 2;
							let Ce = he + He * (j - he);
							if ((Ne(Ce, j) && (Ce = j), B.wrapperEl.scrollTo({ [ee]: Ce }), Ne(Ce, j))) {
								(B.wrapperEl.style.overflow = 'hidden'),
									(B.wrapperEl.style.scrollSnapType = ''),
									setTimeout(() => {
										(B.wrapperEl.style.overflow = ''), B.wrapperEl.scrollTo({ [ee]: Ce });
									}),
									pe.cancelAnimationFrame(B.cssModeFrameID);
								return;
							}
							B.cssModeFrameID = pe.requestAnimationFrame(Ge);
						};
					Ge();
				}
				function tt(G) {
					return G.querySelector('.swiper-slide-transform') || (G.shadowRoot && G.shadowRoot.querySelector('.swiper-slide-transform')) || G;
				}
				function ze(G, B) {
					return B === void 0 && (B = ''), [...G.children].filter((j) => j.matches(B));
				}
				function Re(G) {
					try {
						console.warn(G);
						return;
					} catch {}
				}
				function st(G, B) {
					B === void 0 && (B = []);
					const j = document.createElement(G);
					return j.classList.add(...(Array.isArray(B) ? B : k(B))), j;
				}
				function $e(G) {
					const B = (0, Q.a)(),
						j = (0, Q.g)(),
						ee = G.getBoundingClientRect(),
						pe = j.body,
						he = G.clientTop || pe.clientTop || 0,
						ve = G.clientLeft || pe.clientLeft || 0,
						fe = G === B ? B.scrollY : G.scrollTop,
						Me = G === B ? B.scrollX : G.scrollLeft;
					return { top: ee.top + fe - he, left: ee.left + Me - ve };
				}
				function Ye(G, B) {
					const j = [];
					for (; G.previousElementSibling; ) {
						const ee = G.previousElementSibling;
						B ? ee.matches(B) && j.push(ee) : j.push(ee), (G = ee);
					}
					return j;
				}
				function Te(G, B) {
					const j = [];
					for (; G.nextElementSibling; ) {
						const ee = G.nextElementSibling;
						B ? ee.matches(B) && j.push(ee) : j.push(ee), (G = ee);
					}
					return j;
				}
				function Fe(G, B) {
					return (0, Q.a)().getComputedStyle(G, null).getPropertyValue(B);
				}
				function We(G) {
					let B = G,
						j;
					if (B) {
						for (j = 0; (B = B.previousSibling) !== null; ) B.nodeType === 1 && (j += 1);
						return j;
					}
				}
				function Be(G, B) {
					const j = [];
					let ee = G.parentElement;
					for (; ee; ) B ? ee.matches(B) && j.push(ee) : j.push(ee), (ee = ee.parentElement);
					return j;
				}
				function ke(G, B) {
					function j(ee) {
						ee.target === G && (B.call(G, ee), G.removeEventListener('transitionend', j));
					}
					B && G.addEventListener('transitionend', j);
				}
				function De(G, B, j) {
					const ee = (0, Q.a)();
					return j
						? G[B === 'width' ? 'offsetWidth' : 'offsetHeight'] +
								parseFloat(ee.getComputedStyle(G, null).getPropertyValue(B === 'width' ? 'margin-right' : 'margin-top')) +
								parseFloat(ee.getComputedStyle(G, null).getPropertyValue(B === 'width' ? 'margin-left' : 'margin-bottom'))
						: G.offsetWidth;
				}
				function Ae(G) {
					return (Array.isArray(G) ? G : [G]).filter((B) => !!B);
				}
			},
			'../../node_modules/swiper/swiper-react.mjs'(Je, Ie, Se) {
				Se.d(Ie, { RC: () => Y, qr: () => $ });
				var Q = Se('../../node_modules/preact/compat/dist/compat.module.js'),
					k = Se('../../node_modules/swiper/shared/ssr-window.esm.mjs'),
					V = Se('../../node_modules/swiper/shared/utils.mjs');
				let le;
				function de() {
					const s = (0, k.a)(),
						t = (0, k.g)();
					return {
						smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
						touch: !!('ontouchstart' in s || (s.DocumentTouch && t instanceof s.DocumentTouch)),
					};
				}
				function ue() {
					return le || (le = de()), le;
				}
				let te;
				function ce(s) {
					let { userAgent: t } = s === void 0 ? {} : s;
					const i = ue(),
						r = (0, k.a)(),
						a = r.navigator.platform,
						n = t || r.navigator.userAgent,
						l = { ios: !1, android: !1 },
						d = r.screen.width,
						o = r.screen.height,
						f = n.match(/(Android);?[\s\/]+([\d.]+)?/);
					let c = n.match(/(iPad).*OS\s([\d_]+)/);
					const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
						M = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						C = a === 'Win32';
					let P = a === 'MacIntel';
					const A = [
						'1024x1366',
						'1366x1024',
						'834x1194',
						'1194x834',
						'834x1112',
						'1112x834',
						'768x1024',
						'1024x768',
						'820x1180',
						'1180x820',
						'810x1080',
						'1080x810',
					];
					return (
						!c && P && i.touch && A.indexOf(`${d}x${o}`) >= 0 && ((c = n.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (P = !1)),
						f && !C && ((l.os = 'android'), (l.android = !0)),
						(c || M || h) && ((l.os = 'ios'), (l.ios = !0)),
						l
					);
				}
				function Ee(s) {
					return s === void 0 && (s = {}), te || (te = ce(s)), te;
				}
				let Le;
				function Xe() {
					const s = (0, k.a)(),
						t = Ee();
					let i = !1;
					function r() {
						const d = s.navigator.userAgent.toLowerCase();
						return d.indexOf('safari') >= 0 && d.indexOf('chrome') < 0 && d.indexOf('android') < 0;
					}
					if (r()) {
						const d = String(s.navigator.userAgent);
						if (d.includes('Version/')) {
							const [o, f] = d
								.split('Version/')[1]
								.split(' ')[0]
								.split('.')
								.map((c) => Number(c));
							i = o < 16 || (o === 16 && f < 2);
						}
					}
					const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
						n = r(),
						l = n || (a && t.ios);
					return { isSafari: i || n, needPerspectiveFix: i, need3dFix: l, isWebView: a };
				}
				function et() {
					return Le || (Le = Xe()), Le;
				}
				function tt(s) {
					let { swiper: t, on: i, emit: r } = s;
					const a = (0, k.a)();
					let n = null,
						l = null;
					const d = () => {
							!t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'));
						},
						o = () => {
							!t ||
								t.destroyed ||
								!t.initialized ||
								((n = new ResizeObserver((h) => {
									l = a.requestAnimationFrame(() => {
										const { width: M, height: C } = t;
										let P = M,
											A = C;
										h.forEach((X) => {
											let { contentBoxSize: z, contentRect: U, target: N } = X;
											(N && N !== t.el) || ((P = U ? U.width : (z[0] || z).inlineSize), (A = U ? U.height : (z[0] || z).blockSize));
										}),
											(P !== M || A !== C) && d();
									});
								})),
								n.observe(t.el));
						},
						f = () => {
							l && a.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
						},
						c = () => {
							!t || t.destroyed || !t.initialized || r('orientationchange');
						};
					i('init', () => {
						if (t.params.resizeObserver && typeof a.ResizeObserver < 'u') {
							o();
							return;
						}
						a.addEventListener('resize', d), a.addEventListener('orientationchange', c);
					}),
						i('destroy', () => {
							f(), a.removeEventListener('resize', d), a.removeEventListener('orientationchange', c);
						});
				}
				function ze(s) {
					let { swiper: t, extendParams: i, on: r, emit: a } = s;
					const n = [],
						l = (0, k.a)(),
						d = function (c, h) {
							h === void 0 && (h = {});
							const M = l.MutationObserver || l.WebkitMutationObserver,
								C = new M((P) => {
									if (t.__preventObserver__) return;
									if (P.length === 1) {
										a('observerUpdate', P[0]);
										return;
									}
									const A = function () {
										a('observerUpdate', P[0]);
									};
									l.requestAnimationFrame ? l.requestAnimationFrame(A) : l.setTimeout(A, 0);
								});
							C.observe(c, {
								attributes: typeof h.attributes > 'u' ? !0 : h.attributes,
								childList: typeof h.childList > 'u' ? !0 : h.childList,
								characterData: typeof h.characterData > 'u' ? !0 : h.characterData,
							}),
								n.push(C);
						},
						o = () => {
							if (t.params.observer) {
								if (t.params.observeParents) {
									const c = (0, V.a)(t.hostEl);
									for (let h = 0; h < c.length; h += 1) d(c[h]);
								}
								d(t.hostEl, { childList: t.params.observeSlideChildren }), d(t.wrapperEl, { attributes: !1 });
							}
						},
						f = () => {
							n.forEach((c) => {
								c.disconnect();
							}),
								n.splice(0, n.length);
						};
					i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r('init', o), r('destroy', f);
				}
				var Re = {
					on(s, t, i) {
						const r = this;
						if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
						const a = i ? 'unshift' : 'push';
						return (
							s.split(' ').forEach((n) => {
								r.eventsListeners[n] || (r.eventsListeners[n] = []), r.eventsListeners[n][a](t);
							}),
							r
						);
					},
					once(s, t, i) {
						const r = this;
						if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
						function a() {
							r.off(s, a), a.__emitterProxy && delete a.__emitterProxy;
							for (var n = arguments.length, l = new Array(n), d = 0; d < n; d++) l[d] = arguments[d];
							t.apply(r, l);
						}
						return (a.__emitterProxy = t), r.on(s, a, i);
					},
					onAny(s, t) {
						const i = this;
						if (!i.eventsListeners || i.destroyed || typeof s != 'function') return i;
						const r = t ? 'unshift' : 'push';
						return i.eventsAnyListeners.indexOf(s) < 0 && i.eventsAnyListeners[r](s), i;
					},
					offAny(s) {
						const t = this;
						if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
						const i = t.eventsAnyListeners.indexOf(s);
						return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
					},
					off(s, t) {
						const i = this;
						return (
							!i.eventsListeners ||
								i.destroyed ||
								!i.eventsListeners ||
								s.split(' ').forEach((r) => {
									typeof t > 'u'
										? (i.eventsListeners[r] = [])
										: i.eventsListeners[r] &&
										  i.eventsListeners[r].forEach((a, n) => {
												(a === t || (a.__emitterProxy && a.__emitterProxy === t)) && i.eventsListeners[r].splice(n, 1);
										  });
								}),
							i
						);
					},
					emit() {
						const s = this;
						if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
						let t, i, r;
						for (var a = arguments.length, n = new Array(a), l = 0; l < a; l++) n[l] = arguments[l];
						return (
							typeof n[0] == 'string' || Array.isArray(n[0])
								? ((t = n[0]), (i = n.slice(1, n.length)), (r = s))
								: ((t = n[0].events), (i = n[0].data), (r = n[0].context || s)),
							i.unshift(r),
							(Array.isArray(t) ? t : t.split(' ')).forEach((o) => {
								s.eventsAnyListeners &&
									s.eventsAnyListeners.length &&
									s.eventsAnyListeners.forEach((f) => {
										f.apply(r, [o, ...i]);
									}),
									s.eventsListeners &&
										s.eventsListeners[o] &&
										s.eventsListeners[o].forEach((f) => {
											f.apply(r, i);
										});
							}),
							s
						);
					},
				};
				function st() {
					const s = this;
					let t, i;
					const r = s.el;
					typeof s.params.width < 'u' && s.params.width !== null ? (t = s.params.width) : (t = r.clientWidth),
						typeof s.params.height < 'u' && s.params.height !== null ? (i = s.params.height) : (i = r.clientHeight),
						!((t === 0 && s.isHorizontal()) || (i === 0 && s.isVertical())) &&
							((t = t - parseInt((0, V.o)(r, 'padding-left') || 0, 10) - parseInt((0, V.o)(r, 'padding-right') || 0, 10)),
							(i = i - parseInt((0, V.o)(r, 'padding-top') || 0, 10) - parseInt((0, V.o)(r, 'padding-bottom') || 0, 10)),
							Number.isNaN(t) && (t = 0),
							Number.isNaN(i) && (i = 0),
							Object.assign(s, { width: t, height: i, size: s.isHorizontal() ? t : i }));
				}
				function $e() {
					const s = this;
					function t(F, se) {
						return parseFloat(F.getPropertyValue(s.getDirectionLabel(se)) || 0);
					}
					const i = s.params,
						{ wrapperEl: r, slidesEl: a, size: n, rtlTranslate: l, wrongRTL: d } = s,
						o = s.virtual && i.virtual.enabled,
						f = o ? s.virtual.slides.length : s.slides.length,
						c = (0, V.e)(a, `.${s.params.slideClass}, swiper-slide`),
						h = o ? s.virtual.slides.length : c.length;
					let M = [];
					const C = [],
						P = [];
					let A = i.slidesOffsetBefore;
					typeof A == 'function' && (A = i.slidesOffsetBefore.call(s));
					let X = i.slidesOffsetAfter;
					typeof X == 'function' && (X = i.slidesOffsetAfter.call(s));
					const z = s.snapGrid.length,
						U = s.slidesGrid.length;
					let N = i.spaceBetween,
						Z = -A,
						J = 0,
						oe = 0;
					if (typeof n > 'u') return;
					typeof N == 'string' && N.indexOf('%') >= 0
						? (N = (parseFloat(N.replace('%', '')) / 100) * n)
						: typeof N == 'string' && (N = parseFloat(N)),
						(s.virtualSize = -N),
						c.forEach((F) => {
							l ? (F.style.marginLeft = '') : (F.style.marginRight = ''), (F.style.marginBottom = ''), (F.style.marginTop = '');
						}),
						i.centeredSlides && i.cssMode && ((0, V.s)(r, '--swiper-centered-offset-before', ''), (0, V.s)(r, '--swiper-centered-offset-after', ''));
					const we = i.grid && i.grid.rows > 1 && s.grid;
					we ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
					let ne;
					const re =
						i.slidesPerView === 'auto' &&
						i.breakpoints &&
						Object.keys(i.breakpoints).filter((F) => typeof i.breakpoints[F].slidesPerView < 'u').length > 0;
					for (let F = 0; F < h; F += 1) {
						ne = 0;
						let se;
						if ((c[F] && (se = c[F]), we && s.grid.updateSlide(F, se, c), !(c[F] && (0, V.o)(se, 'display') === 'none'))) {
							if (i.slidesPerView === 'auto') {
								re && (c[F].style[s.getDirectionLabel('width')] = '');
								const ae = getComputedStyle(se),
									ie = se.style.transform,
									me = se.style.webkitTransform;
								if ((ie && (se.style.transform = 'none'), me && (se.style.webkitTransform = 'none'), i.roundLengths))
									ne = s.isHorizontal() ? (0, V.f)(se, 'width', !0) : (0, V.f)(se, 'height', !0);
								else {
									const ge = t(ae, 'width'),
										ye = t(ae, 'padding-left'),
										_t = t(ae, 'padding-right'),
										ot = t(ae, 'margin-left'),
										be = t(ae, 'margin-right'),
										Pe = ae.getPropertyValue('box-sizing');
									if (Pe && Pe === 'border-box') ne = ge + ot + be;
									else {
										const { clientWidth: Xt, offsetWidth: Yt } = se;
										ne = ge + ye + _t + ot + be + (Yt - Xt);
									}
								}
								ie && (se.style.transform = ie), me && (se.style.webkitTransform = me), i.roundLengths && (ne = Math.floor(ne));
							} else
								(ne = (n - (i.slidesPerView - 1) * N) / i.slidesPerView),
									i.roundLengths && (ne = Math.floor(ne)),
									c[F] && (c[F].style[s.getDirectionLabel('width')] = `${ne}px`);
							c[F] && (c[F].swiperSlideSize = ne),
								P.push(ne),
								i.centeredSlides
									? ((Z = Z + ne / 2 + J / 2 + N),
									  J === 0 && F !== 0 && (Z = Z - n / 2 - N),
									  F === 0 && (Z = Z - n / 2 - N),
									  Math.abs(Z) < 1 / 1e3 && (Z = 0),
									  i.roundLengths && (Z = Math.floor(Z)),
									  oe % i.slidesPerGroup === 0 && M.push(Z),
									  C.push(Z))
									: (i.roundLengths && (Z = Math.floor(Z)),
									  (oe - Math.min(s.params.slidesPerGroupSkip, oe)) % s.params.slidesPerGroup === 0 && M.push(Z),
									  C.push(Z),
									  (Z = Z + ne + N)),
								(s.virtualSize += ne + N),
								(J = ne),
								(oe += 1);
						}
					}
					if (
						((s.virtualSize = Math.max(s.virtualSize, n) + X),
						l && d && (i.effect === 'slide' || i.effect === 'coverflow') && (r.style.width = `${s.virtualSize + N}px`),
						i.setWrapperSize && (r.style[s.getDirectionLabel('width')] = `${s.virtualSize + N}px`),
						we && s.grid.updateWrapperSize(ne, M),
						!i.centeredSlides)
					) {
						const F = [];
						for (let se = 0; se < M.length; se += 1) {
							let ae = M[se];
							i.roundLengths && (ae = Math.floor(ae)), M[se] <= s.virtualSize - n && F.push(ae);
						}
						(M = F), Math.floor(s.virtualSize - n) - Math.floor(M[M.length - 1]) > 1 && M.push(s.virtualSize - n);
					}
					if (o && i.loop) {
						const F = P[0] + N;
						if (i.slidesPerGroup > 1) {
							const se = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / i.slidesPerGroup),
								ae = F * i.slidesPerGroup;
							for (let ie = 0; ie < se; ie += 1) M.push(M[M.length - 1] + ae);
						}
						for (let se = 0; se < s.virtual.slidesBefore + s.virtual.slidesAfter; se += 1)
							i.slidesPerGroup === 1 && M.push(M[M.length - 1] + F), C.push(C[C.length - 1] + F), (s.virtualSize += F);
					}
					if ((M.length === 0 && (M = [0]), N !== 0)) {
						const F = s.isHorizontal() && l ? 'marginLeft' : s.getDirectionLabel('marginRight');
						c.filter((se, ae) => (!i.cssMode || i.loop ? !0 : ae !== c.length - 1)).forEach((se) => {
							se.style[F] = `${N}px`;
						});
					}
					if (i.centeredSlides && i.centeredSlidesBounds) {
						let F = 0;
						P.forEach((ae) => {
							F += ae + (N || 0);
						}),
							(F -= N);
						const se = F - n;
						M = M.map((ae) => (ae <= 0 ? -A : ae > se ? se + X : ae));
					}
					if (i.centerInsufficientSlides) {
						let F = 0;
						if (
							(P.forEach((se) => {
								F += se + (N || 0);
							}),
							(F -= N),
							F < n)
						) {
							const se = (n - F) / 2;
							M.forEach((ae, ie) => {
								M[ie] = ae - se;
							}),
								C.forEach((ae, ie) => {
									C[ie] = ae + se;
								});
						}
					}
					if (
						(Object.assign(s, { slides: c, snapGrid: M, slidesGrid: C, slidesSizesGrid: P }),
						i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
					) {
						(0, V.s)(r, '--swiper-centered-offset-before', `${-M[0]}px`),
							(0, V.s)(r, '--swiper-centered-offset-after', `${s.size / 2 - P[P.length - 1] / 2}px`);
						const F = -s.snapGrid[0],
							se = -s.slidesGrid[0];
						(s.snapGrid = s.snapGrid.map((ae) => ae + F)), (s.slidesGrid = s.slidesGrid.map((ae) => ae + se));
					}
					if (
						(h !== f && s.emit('slidesLengthChange'),
						M.length !== z && (s.params.watchOverflow && s.checkOverflow(), s.emit('snapGridLengthChange')),
						C.length !== U && s.emit('slidesGridLengthChange'),
						i.watchSlidesProgress && s.updateSlidesOffset(),
						s.emit('slidesUpdated'),
						!o && !i.cssMode && (i.effect === 'slide' || i.effect === 'fade'))
					) {
						const F = `${i.containerModifierClass}backface-hidden`,
							se = s.el.classList.contains(F);
						h <= i.maxBackfaceHiddenSlides ? se || s.el.classList.add(F) : se && s.el.classList.remove(F);
					}
				}
				function Ye(s) {
					const t = this,
						i = [],
						r = t.virtual && t.params.virtual.enabled;
					let a = 0,
						n;
					typeof s == 'number' ? t.setTransition(s) : s === !0 && t.setTransition(t.params.speed);
					const l = (d) => (r ? t.slides[t.getSlideIndexByData(d)] : t.slides[d]);
					if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
						if (t.params.centeredSlides)
							(t.visibleSlides || []).forEach((d) => {
								i.push(d);
							});
						else
							for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
								const d = t.activeIndex + n;
								if (d > t.slides.length && !r) break;
								i.push(l(d));
							}
					else i.push(l(t.activeIndex));
					for (n = 0; n < i.length; n += 1)
						if (typeof i[n] < 'u') {
							const d = i[n].offsetHeight;
							a = d > a ? d : a;
						}
					(a || a === 0) && (t.wrapperEl.style.height = `${a}px`);
				}
				function Te() {
					const s = this,
						t = s.slides,
						i = s.isElement ? (s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop) : 0;
					for (let r = 0; r < t.length; r += 1)
						t[r].swiperSlideOffset = (s.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - i - s.cssOverflowAdjustment();
				}
				function Fe(s) {
					s === void 0 && (s = (this && this.translate) || 0);
					const t = this,
						i = t.params,
						{ slides: r, rtlTranslate: a, snapGrid: n } = t;
					if (r.length === 0) return;
					typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
					let l = -s;
					a && (l = s),
						r.forEach((o) => {
							o.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass);
						}),
						(t.visibleSlidesIndexes = []),
						(t.visibleSlides = []);
					let d = i.spaceBetween;
					typeof d == 'string' && d.indexOf('%') >= 0
						? (d = (parseFloat(d.replace('%', '')) / 100) * t.size)
						: typeof d == 'string' && (d = parseFloat(d));
					for (let o = 0; o < r.length; o += 1) {
						const f = r[o];
						let c = f.swiperSlideOffset;
						i.cssMode && i.centeredSlides && (c -= r[0].swiperSlideOffset);
						const h = (l + (i.centeredSlides ? t.minTranslate() : 0) - c) / (f.swiperSlideSize + d),
							M = (l - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) / (f.swiperSlideSize + d),
							C = -(l - c),
							P = C + t.slidesSizesGrid[o],
							A = C >= 0 && C <= t.size - t.slidesSizesGrid[o];
						((C >= 0 && C < t.size - 1) || (P > 1 && P <= t.size) || (C <= 0 && P >= t.size)) &&
							(t.visibleSlides.push(f), t.visibleSlidesIndexes.push(o), r[o].classList.add(i.slideVisibleClass)),
							A && r[o].classList.add(i.slideFullyVisibleClass),
							(f.progress = a ? -h : h),
							(f.originalProgress = a ? -M : M);
					}
				}
				function We(s) {
					const t = this;
					if (typeof s > 'u') {
						const c = t.rtlTranslate ? -1 : 1;
						s = (t && t.translate && t.translate * c) || 0;
					}
					const i = t.params,
						r = t.maxTranslate() - t.minTranslate();
					let { progress: a, isBeginning: n, isEnd: l, progressLoop: d } = t;
					const o = n,
						f = l;
					if (r === 0) (a = 0), (n = !0), (l = !0);
					else {
						a = (s - t.minTranslate()) / r;
						const c = Math.abs(s - t.minTranslate()) < 1,
							h = Math.abs(s - t.maxTranslate()) < 1;
						(n = c || a <= 0), (l = h || a >= 1), c && (a = 0), h && (a = 1);
					}
					if (i.loop) {
						const c = t.getSlideIndexByData(0),
							h = t.getSlideIndexByData(t.slides.length - 1),
							M = t.slidesGrid[c],
							C = t.slidesGrid[h],
							P = t.slidesGrid[t.slidesGrid.length - 1],
							A = Math.abs(s);
						A >= M ? (d = (A - M) / P) : (d = (A + P - C) / P), d > 1 && (d -= 1);
					}
					Object.assign(t, { progress: a, progressLoop: d, isBeginning: n, isEnd: l }),
						(i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && t.updateSlidesProgress(s),
						n && !o && t.emit('reachBeginning toEdge'),
						l && !f && t.emit('reachEnd toEdge'),
						((o && !n) || (f && !l)) && t.emit('fromEdge'),
						t.emit('progress', a);
				}
				function Be() {
					const s = this,
						{ slides: t, params: i, slidesEl: r, activeIndex: a } = s,
						n = s.virtual && i.virtual.enabled,
						l = s.grid && i.grid && i.grid.rows > 1,
						d = (h) => (0, V.e)(r, `.${i.slideClass}${h}, swiper-slide${h}`)[0];
					t.forEach((h) => {
						h.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
					});
					let o, f, c;
					if (n)
						if (i.loop) {
							let h = a - s.virtual.slidesBefore;
							h < 0 && (h = s.virtual.slides.length + h),
								h >= s.virtual.slides.length && (h -= s.virtual.slides.length),
								(o = d(`[data-swiper-slide-index="${h}"]`));
						} else o = d(`[data-swiper-slide-index="${a}"]`);
					else
						l
							? ((o = t.filter((h) => h.column === a)[0]), (c = t.filter((h) => h.column === a + 1)[0]), (f = t.filter((h) => h.column === a - 1)[0]))
							: (o = t[a]);
					o &&
						(o.classList.add(i.slideActiveClass),
						l
							? (c && c.classList.add(i.slideNextClass), f && f.classList.add(i.slidePrevClass))
							: ((c = (0, V.p)(o, `.${i.slideClass}, swiper-slide`)[0]),
							  i.loop && !c && (c = t[0]),
							  c && c.classList.add(i.slideNextClass),
							  (f = (0, V.q)(o, `.${i.slideClass}, swiper-slide`)[0]),
							  i.loop && !f === 0 && (f = t[t.length - 1]),
							  f && f.classList.add(i.slidePrevClass))),
						s.emitSlidesClasses();
				}
				const ke = (s, t) => {
						if (!s || s.destroyed || !s.params) return;
						const i = () => (s.isElement ? 'swiper-slide' : `.${s.params.slideClass}`),
							r = t.closest(i());
						if (r) {
							let a = r.querySelector(`.${s.params.lazyPreloaderClass}`);
							!a &&
								s.isElement &&
								(r.shadowRoot
									? (a = r.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
									: requestAnimationFrame(() => {
											r.shadowRoot && ((a = r.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`)), a && a.remove());
									  })),
								a && a.remove();
						}
					},
					De = (s, t) => {
						if (!s.slides[t]) return;
						const i = s.slides[t].querySelector('[loading="lazy"]');
						i && i.removeAttribute('loading');
					},
					Ae = (s) => {
						if (!s || s.destroyed || !s.params) return;
						let t = s.params.lazyPreloadPrevNext;
						const i = s.slides.length;
						if (!i || !t || t < 0) return;
						t = Math.min(t, i);
						const r = s.params.slidesPerView === 'auto' ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView),
							a = s.activeIndex;
						if (s.params.grid && s.params.grid.rows > 1) {
							const l = a,
								d = [l - t];
							d.push(...Array.from({ length: t }).map((o, f) => l + r + f)),
								s.slides.forEach((o, f) => {
									d.includes(o.column) && De(s, f);
								});
							return;
						}
						const n = a + r - 1;
						if (s.params.rewind || s.params.loop)
							for (let l = a - t; l <= n + t; l += 1) {
								const d = ((l % i) + i) % i;
								(d < a || d > n) && De(s, d);
							}
						else for (let l = Math.max(a - t, 0); l <= Math.min(n + t, i - 1); l += 1) l !== a && (l > n || l < a) && De(s, l);
					};
				function G(s) {
					const { slidesGrid: t, params: i } = s,
						r = s.rtlTranslate ? s.translate : -s.translate;
					let a;
					for (let n = 0; n < t.length; n += 1)
						typeof t[n + 1] < 'u'
							? r >= t[n] && r < t[n + 1] - (t[n + 1] - t[n]) / 2
								? (a = n)
								: r >= t[n] && r < t[n + 1] && (a = n + 1)
							: r >= t[n] && (a = n);
					return i.normalizeSlideIndex && (a < 0 || typeof a > 'u') && (a = 0), a;
				}
				function B(s) {
					const t = this,
						i = t.rtlTranslate ? t.translate : -t.translate,
						{ snapGrid: r, params: a, activeIndex: n, realIndex: l, snapIndex: d } = t;
					let o = s,
						f;
					const c = (C) => {
						let P = C - t.virtual.slidesBefore;
						return P < 0 && (P = t.virtual.slides.length + P), P >= t.virtual.slides.length && (P -= t.virtual.slides.length), P;
					};
					if ((typeof o > 'u' && (o = G(t)), r.indexOf(i) >= 0)) f = r.indexOf(i);
					else {
						const C = Math.min(a.slidesPerGroupSkip, o);
						f = C + Math.floor((o - C) / a.slidesPerGroup);
					}
					if ((f >= r.length && (f = r.length - 1), o === n && !t.params.loop)) {
						f !== d && ((t.snapIndex = f), t.emit('snapIndexChange'));
						return;
					}
					if (o === n && t.params.loop && t.virtual && t.params.virtual.enabled) {
						t.realIndex = c(o);
						return;
					}
					const h = t.grid && a.grid && a.grid.rows > 1;
					let M;
					if (t.virtual && a.virtual.enabled && a.loop) M = c(o);
					else if (h) {
						const C = t.slides.filter((A) => A.column === o)[0];
						let P = parseInt(C.getAttribute('data-swiper-slide-index'), 10);
						Number.isNaN(P) && (P = Math.max(t.slides.indexOf(C), 0)), (M = Math.floor(P / a.grid.rows));
					} else if (t.slides[o]) {
						const C = t.slides[o].getAttribute('data-swiper-slide-index');
						C ? (M = parseInt(C, 10)) : (M = o);
					} else M = o;
					Object.assign(t, { previousSnapIndex: d, snapIndex: f, previousRealIndex: l, realIndex: M, previousIndex: n, activeIndex: o }),
						t.initialized && Ae(t),
						t.emit('activeIndexChange'),
						t.emit('snapIndexChange'),
						(t.initialized || t.params.runCallbacksOnInit) && (l !== M && t.emit('realIndexChange'), t.emit('slideChange'));
				}
				function j(s, t) {
					const i = this,
						r = i.params;
					let a = s.closest(`.${r.slideClass}, swiper-slide`);
					!a &&
						i.isElement &&
						t &&
						t.length > 1 &&
						t.includes(s) &&
						[...t.slice(t.indexOf(s) + 1, t.length)].forEach((d) => {
							!a && d.matches && d.matches(`.${r.slideClass}, swiper-slide`) && (a = d);
						});
					let n = !1,
						l;
					if (a) {
						for (let d = 0; d < i.slides.length; d += 1)
							if (i.slides[d] === a) {
								(n = !0), (l = d);
								break;
							}
					}
					if (a && n)
						(i.clickedSlide = a),
							i.virtual && i.params.virtual.enabled
								? (i.clickedIndex = parseInt(a.getAttribute('data-swiper-slide-index'), 10))
								: (i.clickedIndex = l);
					else {
						(i.clickedSlide = void 0), (i.clickedIndex = void 0);
						return;
					}
					r.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
				}
				var ee = {
					updateSize: st,
					updateSlides: $e,
					updateAutoHeight: Ye,
					updateSlidesOffset: Te,
					updateSlidesProgress: Fe,
					updateProgress: We,
					updateSlidesClasses: Be,
					updateActiveIndex: B,
					updateClickedSlide: j,
				};
				function pe(s) {
					s === void 0 && (s = this.isHorizontal() ? 'x' : 'y');
					const t = this,
						{ params: i, rtlTranslate: r, translate: a, wrapperEl: n } = t;
					if (i.virtualTranslate) return r ? -a : a;
					if (i.cssMode) return a;
					let l = (0, V.j)(n, s);
					return (l += t.cssOverflowAdjustment()), r && (l = -l), l || 0;
				}
				function he(s, t) {
					const i = this,
						{ rtlTranslate: r, params: a, wrapperEl: n, progress: l } = i;
					let d = 0,
						o = 0;
					const f = 0;
					i.isHorizontal() ? (d = r ? -s : s) : (o = s),
						a.roundLengths && ((d = Math.floor(d)), (o = Math.floor(o))),
						(i.previousTranslate = i.translate),
						(i.translate = i.isHorizontal() ? d : o),
						a.cssMode
							? (n[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -d : -o)
							: a.virtualTranslate ||
							  (i.isHorizontal() ? (d -= i.cssOverflowAdjustment()) : (o -= i.cssOverflowAdjustment()),
							  (n.style.transform = `translate3d(${d}px, ${o}px, ${f}px)`));
					let c;
					const h = i.maxTranslate() - i.minTranslate();
					h === 0 ? (c = 0) : (c = (s - i.minTranslate()) / h), c !== l && i.updateProgress(s), i.emit('setTranslate', i.translate, t);
				}
				function ve() {
					return -this.snapGrid[0];
				}
				function fe() {
					return -this.snapGrid[this.snapGrid.length - 1];
				}
				function Me(s, t, i, r, a) {
					s === void 0 && (s = 0), t === void 0 && (t = this.params.speed), i === void 0 && (i = !0), r === void 0 && (r = !0);
					const n = this,
						{ params: l, wrapperEl: d } = n;
					if (n.animating && l.preventInteractionOnTransition) return !1;
					const o = n.minTranslate(),
						f = n.maxTranslate();
					let c;
					if ((r && s > o ? (c = o) : r && s < f ? (c = f) : (c = s), n.updateProgress(c), l.cssMode)) {
						const h = n.isHorizontal();
						if (t === 0) d[h ? 'scrollLeft' : 'scrollTop'] = -c;
						else {
							if (!n.support.smoothScroll) return (0, V.r)({ swiper: n, targetPosition: -c, side: h ? 'left' : 'top' }), !0;
							d.scrollTo({ [h ? 'left' : 'top']: -c, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						t === 0
							? (n.setTransition(0), n.setTranslate(c), i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionEnd')))
							: (n.setTransition(t),
							  n.setTranslate(c),
							  i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionStart')),
							  n.animating ||
									((n.animating = !0),
									n.onTranslateToWrapperTransitionEnd ||
										(n.onTranslateToWrapperTransitionEnd = function (M) {
											!n ||
												n.destroyed ||
												(M.target === this &&
													(n.wrapperEl.removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
													(n.onTranslateToWrapperTransitionEnd = null),
													delete n.onTranslateToWrapperTransitionEnd,
													i && n.emit('transitionEnd')));
										}),
									n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
						!0
					);
				}
				var je = { getTranslate: pe, setTranslate: he, minTranslate: ve, maxTranslate: fe, translateTo: Me };
				function Ne(s, t) {
					const i = this;
					i.params.cssMode || ((i.wrapperEl.style.transitionDuration = `${s}ms`), (i.wrapperEl.style.transitionDelay = s === 0 ? '0ms' : '')),
						i.emit('setTransition', s, t);
				}
				function Ge(s) {
					let { swiper: t, runCallbacks: i, direction: r, step: a } = s;
					const { activeIndex: n, previousIndex: l } = t;
					let d = r;
					if ((d || (n > l ? (d = 'next') : n < l ? (d = 'prev') : (d = 'reset')), t.emit(`transition${a}`), i && n !== l)) {
						if (d === 'reset') {
							t.emit(`slideResetTransition${a}`);
							return;
						}
						t.emit(`slideChangeTransition${a}`), d === 'next' ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`);
					}
				}
				function Oe(s, t) {
					s === void 0 && (s = !0);
					const i = this,
						{ params: r } = i;
					r.cssMode || (r.autoHeight && i.updateAutoHeight(), Ge({ swiper: i, runCallbacks: s, direction: t, step: 'Start' }));
				}
				function He(s, t) {
					s === void 0 && (s = !0);
					const i = this,
						{ params: r } = i;
					(i.animating = !1), !r.cssMode && (i.setTransition(0), Ge({ swiper: i, runCallbacks: s, direction: t, step: 'End' }));
				}
				var Ce = { setTransition: Ne, transitionStart: Oe, transitionEnd: He };
				function $t(s, t, i, r, a) {
					s === void 0 && (s = 0), t === void 0 && (t = this.params.speed), i === void 0 && (i = !0), typeof s == 'string' && (s = parseInt(s, 10));
					const n = this;
					let l = s;
					l < 0 && (l = 0);
					const { params: d, snapGrid: o, slidesGrid: f, previousIndex: c, activeIndex: h, rtlTranslate: M, wrapperEl: C, enabled: P } = n;
					if ((n.animating && d.preventInteractionOnTransition) || (!P && !r && !a) || n.destroyed) return !1;
					const A = Math.min(n.params.slidesPerGroupSkip, l);
					let X = A + Math.floor((l - A) / n.params.slidesPerGroup);
					X >= o.length && (X = o.length - 1);
					const z = -o[X];
					if (d.normalizeSlideIndex)
						for (let N = 0; N < f.length; N += 1) {
							const Z = -Math.floor(z * 100),
								J = Math.floor(f[N] * 100),
								oe = Math.floor(f[N + 1] * 100);
							typeof f[N + 1] < 'u' ? (Z >= J && Z < oe - (oe - J) / 2 ? (l = N) : Z >= J && Z < oe && (l = N + 1)) : Z >= J && (l = N);
						}
					if (
						n.initialized &&
						l !== h &&
						((!n.allowSlideNext && (M ? z > n.translate && z > n.minTranslate() : z < n.translate && z < n.minTranslate())) ||
							(!n.allowSlidePrev && z > n.translate && z > n.maxTranslate() && (h || 0) !== l))
					)
						return !1;
					l !== (c || 0) && i && n.emit('beforeSlideChangeStart'), n.updateProgress(z);
					let U;
					if ((l > h ? (U = 'next') : l < h ? (U = 'prev') : (U = 'reset'), (M && -z === n.translate) || (!M && z === n.translate)))
						return (
							n.updateActiveIndex(l),
							d.autoHeight && n.updateAutoHeight(),
							n.updateSlidesClasses(),
							d.effect !== 'slide' && n.setTranslate(z),
							U !== 'reset' && (n.transitionStart(i, U), n.transitionEnd(i, U)),
							!1
						);
					if (d.cssMode) {
						const N = n.isHorizontal(),
							Z = M ? z : -z;
						if (t === 0) {
							const J = n.virtual && n.params.virtual.enabled;
							J && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
								J && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
									? ((n._cssModeVirtualInitialSet = !0),
									  requestAnimationFrame(() => {
											C[N ? 'scrollLeft' : 'scrollTop'] = Z;
									  }))
									: (C[N ? 'scrollLeft' : 'scrollTop'] = Z),
								J &&
									requestAnimationFrame(() => {
										(n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1);
									});
						} else {
							if (!n.support.smoothScroll) return (0, V.r)({ swiper: n, targetPosition: Z, side: N ? 'left' : 'top' }), !0;
							C.scrollTo({ [N ? 'left' : 'top']: Z, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						n.setTransition(t),
						n.setTranslate(z),
						n.updateActiveIndex(l),
						n.updateSlidesClasses(),
						n.emit('beforeTransitionStart', t, r),
						n.transitionStart(i, U),
						t === 0
							? n.transitionEnd(i, U)
							: n.animating ||
							  ((n.animating = !0),
							  n.onSlideToWrapperTransitionEnd ||
									(n.onSlideToWrapperTransitionEnd = function (Z) {
										!n ||
											n.destroyed ||
											(Z.target === this &&
												(n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
												(n.onSlideToWrapperTransitionEnd = null),
												delete n.onSlideToWrapperTransitionEnd,
												n.transitionEnd(i, U)));
									}),
							  n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
						!0
					);
				}
				function dt(s, t, i, r) {
					s === void 0 && (s = 0), t === void 0 && (t = this.params.speed), i === void 0 && (i = !0), typeof s == 'string' && (s = parseInt(s, 10));
					const a = this;
					if (a.destroyed) return;
					const n = a.grid && a.params.grid && a.params.grid.rows > 1;
					let l = s;
					if (a.params.loop)
						if (a.virtual && a.params.virtual.enabled) l = l + a.virtual.slidesBefore;
						else {
							let d;
							if (n) {
								const M = l * a.params.grid.rows;
								d = a.slides.filter((C) => C.getAttribute('data-swiper-slide-index') * 1 === M)[0].column;
							} else d = a.getSlideIndexByData(l);
							const o = n ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
								{ centeredSlides: f } = a.params;
							let c = a.params.slidesPerView;
							c === 'auto'
								? (c = a.slidesPerViewDynamic())
								: ((c = Math.ceil(parseFloat(a.params.slidesPerView, 10))), f && c % 2 === 0 && (c = c + 1));
							let h = o - d < c;
							if ((f && (h = h || d < Math.ceil(c / 2)), h)) {
								const M = f ? (d < a.activeIndex ? 'prev' : 'next') : d - a.activeIndex - 1 < a.params.slidesPerView ? 'next' : 'prev';
								a.loopFix({
									direction: M,
									slideTo: !0,
									activeSlideIndex: M === 'next' ? d + 1 : d - o + 1,
									slideRealIndex: M === 'next' ? a.realIndex : void 0,
								});
							}
							if (n) {
								const M = l * a.params.grid.rows;
								l = a.slides.filter((C) => C.getAttribute('data-swiper-slide-index') * 1 === M)[0].column;
							} else l = a.getSlideIndexByData(l);
						}
					return (
						requestAnimationFrame(() => {
							a.slideTo(l, t, i, r);
						}),
						a
					);
				}
				function ct(s, t, i) {
					s === void 0 && (s = this.params.speed), t === void 0 && (t = !0);
					const r = this,
						{ enabled: a, params: n, animating: l } = r;
					if (!a || r.destroyed) return r;
					let d = n.slidesPerGroup;
					n.slidesPerView === 'auto' && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (d = Math.max(r.slidesPerViewDynamic('current', !0), 1));
					const o = r.activeIndex < n.slidesPerGroupSkip ? 1 : d,
						f = r.virtual && n.virtual.enabled;
					if (n.loop) {
						if (l && !f && n.loopPreventsSliding) return !1;
						if ((r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft), r.activeIndex === r.slides.length - 1 && n.cssMode))
							return (
								requestAnimationFrame(() => {
									r.slideTo(r.activeIndex + o, s, t, i);
								}),
								!0
							);
					}
					return n.rewind && r.isEnd ? r.slideTo(0, s, t, i) : r.slideTo(r.activeIndex + o, s, t, i);
				}
				function ft(s, t, i) {
					s === void 0 && (s = this.params.speed), t === void 0 && (t = !0);
					const r = this,
						{ params: a, snapGrid: n, slidesGrid: l, rtlTranslate: d, enabled: o, animating: f } = r;
					if (!o || r.destroyed) return r;
					const c = r.virtual && a.virtual.enabled;
					if (a.loop) {
						if (f && !c && a.loopPreventsSliding) return !1;
						r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
					}
					const h = d ? r.translate : -r.translate;
					function M(z) {
						return z < 0 ? -Math.floor(Math.abs(z)) : Math.floor(z);
					}
					const C = M(h),
						P = n.map((z) => M(z));
					let A = n[P.indexOf(C) - 1];
					if (typeof A > 'u' && a.cssMode) {
						let z;
						n.forEach((U, N) => {
							C >= U && (z = N);
						}),
							typeof z < 'u' && (A = n[z > 0 ? z - 1 : z]);
					}
					let X = 0;
					if (
						(typeof A < 'u' &&
							((X = l.indexOf(A)),
							X < 0 && (X = r.activeIndex - 1),
							a.slidesPerView === 'auto' &&
								a.slidesPerGroup === 1 &&
								a.slidesPerGroupAuto &&
								((X = X - r.slidesPerViewDynamic('previous', !0) + 1), (X = Math.max(X, 0)))),
						a.rewind && r.isBeginning)
					) {
						const z = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
						return r.slideTo(z, s, t, i);
					} else if (a.loop && r.activeIndex === 0 && a.cssMode)
						return (
							requestAnimationFrame(() => {
								r.slideTo(X, s, t, i);
							}),
							!0
						);
					return r.slideTo(X, s, t, i);
				}
				function Dt(s, t, i) {
					s === void 0 && (s = this.params.speed), t === void 0 && (t = !0);
					const r = this;
					if (!r.destroyed) return r.slideTo(r.activeIndex, s, t, i);
				}
				function qe(s, t, i, r) {
					s === void 0 && (s = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5);
					const a = this;
					if (a.destroyed) return;
					let n = a.activeIndex;
					const l = Math.min(a.params.slidesPerGroupSkip, n),
						d = l + Math.floor((n - l) / a.params.slidesPerGroup),
						o = a.rtlTranslate ? a.translate : -a.translate;
					if (o >= a.snapGrid[d]) {
						const f = a.snapGrid[d],
							c = a.snapGrid[d + 1];
						o - f > (c - f) * r && (n += a.params.slidesPerGroup);
					} else {
						const f = a.snapGrid[d - 1],
							c = a.snapGrid[d];
						o - f <= (c - f) * r && (n -= a.params.slidesPerGroup);
					}
					return (n = Math.max(n, 0)), (n = Math.min(n, a.slidesGrid.length - 1)), a.slideTo(n, s, t, i);
				}
				function Ue() {
					const s = this;
					if (s.destroyed) return;
					const { params: t, slidesEl: i } = s,
						r = t.slidesPerView === 'auto' ? s.slidesPerViewDynamic() : t.slidesPerView;
					let a = s.clickedIndex,
						n;
					const l = s.isElement ? 'swiper-slide' : `.${t.slideClass}`;
					if (t.loop) {
						if (s.animating) return;
						(n = parseInt(s.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
							t.centeredSlides
								? a < s.loopedSlides - r / 2 || a > s.slides.length - s.loopedSlides + r / 2
									? (s.loopFix(),
									  (a = s.getSlideIndex((0, V.e)(i, `${l}[data-swiper-slide-index="${n}"]`)[0])),
									  (0, V.n)(() => {
											s.slideTo(a);
									  }))
									: s.slideTo(a)
								: a > s.slides.length - r
								? (s.loopFix(),
								  (a = s.getSlideIndex((0, V.e)(i, `${l}[data-swiper-slide-index="${n}"]`)[0])),
								  (0, V.n)(() => {
										s.slideTo(a);
								  }))
								: s.slideTo(a);
					} else s.slideTo(a);
				}
				var Gt = { slideTo: $t, slideToLoop: dt, slideNext: ct, slidePrev: ft, slideReset: Dt, slideToClosest: qe, slideToClickedSlide: Ue };
				function ut(s) {
					const t = this,
						{ params: i, slidesEl: r } = t;
					if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
					const a = () => {
							(0, V.e)(r, `.${i.slideClass}, swiper-slide`).forEach((h, M) => {
								h.setAttribute('data-swiper-slide-index', M);
							});
						},
						n = t.grid && i.grid && i.grid.rows > 1,
						l = i.slidesPerGroup * (n ? i.grid.rows : 1),
						d = t.slides.length % l !== 0,
						o = n && t.slides.length % i.grid.rows !== 0,
						f = (c) => {
							for (let h = 0; h < c; h += 1) {
								const M = t.isElement ? (0, V.c)('swiper-slide', [i.slideBlankClass]) : (0, V.c)('div', [i.slideClass, i.slideBlankClass]);
								t.slidesEl.append(M);
							}
						};
					if (d) {
						if (i.loopAddBlankSlides) {
							const c = l - (t.slides.length % l);
							f(c), t.recalcSlides(), t.updateSlides();
						} else
							(0, V.t)(
								'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
							);
						a();
					} else if (o) {
						if (i.loopAddBlankSlides) {
							const c = i.grid.rows - (t.slides.length % i.grid.rows);
							f(c), t.recalcSlides(), t.updateSlides();
						} else
							(0, V.t)(
								'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
							);
						a();
					} else a();
					t.loopFix({ slideRealIndex: s, direction: i.centeredSlides ? void 0 : 'next' });
				}
				function Ht(s) {
					let {
						slideRealIndex: t,
						slideTo: i = !0,
						direction: r,
						setTranslate: a,
						activeSlideIndex: n,
						byController: l,
						byMousewheel: d,
					} = s === void 0 ? {} : s;
					const o = this;
					if (!o.params.loop) return;
					o.emit('beforeLoopFix');
					const { slides: f, allowSlidePrev: c, allowSlideNext: h, slidesEl: M, params: C } = o,
						{ centeredSlides: P } = C;
					if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && C.virtual.enabled)) {
						i &&
							(!C.centeredSlides && o.snapIndex === 0
								? o.slideTo(o.virtual.slides.length, 0, !1, !0)
								: C.centeredSlides && o.snapIndex < C.slidesPerView
								? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
								: o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
							(o.allowSlidePrev = c),
							(o.allowSlideNext = h),
							o.emit('loopFix');
						return;
					}
					let A = C.slidesPerView;
					A === 'auto' ? (A = o.slidesPerViewDynamic()) : ((A = Math.ceil(parseFloat(C.slidesPerView, 10))), P && A % 2 === 0 && (A = A + 1));
					const X = C.slidesPerGroupAuto ? A : C.slidesPerGroup;
					let z = X;
					z % X !== 0 && (z += X - (z % X)), (z += C.loopAdditionalSlides), (o.loopedSlides = z);
					const U = o.grid && C.grid && C.grid.rows > 1;
					f.length < A + z
						? (0, V.t)(
								'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
						  )
						: U && C.grid.fill === 'row' && (0, V.t)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
					const N = [],
						Z = [];
					let J = o.activeIndex;
					typeof n > 'u' ? (n = o.getSlideIndex(f.filter((ie) => ie.classList.contains(C.slideActiveClass))[0])) : (J = n);
					const oe = r === 'next' || !r,
						we = r === 'prev' || !r;
					let ne = 0,
						re = 0;
					const F = U ? Math.ceil(f.length / C.grid.rows) : f.length,
						ae = (U ? f[n].column : n) + (P && typeof a > 'u' ? -A / 2 + 0.5 : 0);
					if (ae < z) {
						ne = Math.max(z - ae, X);
						for (let ie = 0; ie < z - ae; ie += 1) {
							const me = ie - Math.floor(ie / F) * F;
							if (U) {
								const ge = F - me - 1;
								for (let ye = f.length - 1; ye >= 0; ye -= 1) f[ye].column === ge && N.push(ye);
							} else N.push(F - me - 1);
						}
					} else if (ae + A > F - z) {
						re = Math.max(ae - (F - z * 2), X);
						for (let ie = 0; ie < re; ie += 1) {
							const me = ie - Math.floor(ie / F) * F;
							U
								? f.forEach((ge, ye) => {
										ge.column === me && Z.push(ye);
								  })
								: Z.push(me);
						}
					}
					if (
						((o.__preventObserver__ = !0),
						requestAnimationFrame(() => {
							o.__preventObserver__ = !1;
						}),
						we &&
							N.forEach((ie) => {
								(f[ie].swiperLoopMoveDOM = !0), M.prepend(f[ie]), (f[ie].swiperLoopMoveDOM = !1);
							}),
						oe &&
							Z.forEach((ie) => {
								(f[ie].swiperLoopMoveDOM = !0), M.append(f[ie]), (f[ie].swiperLoopMoveDOM = !1);
							}),
						o.recalcSlides(),
						C.slidesPerView === 'auto'
							? o.updateSlides()
							: U &&
							  ((N.length > 0 && we) || (Z.length > 0 && oe)) &&
							  o.slides.forEach((ie, me) => {
									o.grid.updateSlide(me, ie, o.slides);
							  }),
						C.watchSlidesProgress && o.updateSlidesOffset(),
						i)
					) {
						if (N.length > 0 && we) {
							if (typeof t > 'u') {
								const ie = o.slidesGrid[J],
									ge = o.slidesGrid[J + ne] - ie;
								d
									? o.setTranslate(o.translate - ge)
									: (o.slideTo(J + Math.ceil(ne), 0, !1, !0),
									  a &&
											((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - ge),
											(o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - ge)));
							} else if (a) {
								const ie = U ? N.length / C.grid.rows : N.length;
								o.slideTo(o.activeIndex + ie, 0, !1, !0), (o.touchEventsData.currentTranslate = o.translate);
							}
						} else if (Z.length > 0 && oe)
							if (typeof t > 'u') {
								const ie = o.slidesGrid[J],
									ge = o.slidesGrid[J - re] - ie;
								d
									? o.setTranslate(o.translate - ge)
									: (o.slideTo(J - re, 0, !1, !0),
									  a &&
											((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - ge),
											(o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - ge)));
							} else {
								const ie = U ? Z.length / C.grid.rows : Z.length;
								o.slideTo(o.activeIndex - ie, 0, !1, !0);
							}
					}
					if (((o.allowSlidePrev = c), (o.allowSlideNext = h), o.controller && o.controller.control && !l)) {
						const ie = { slideRealIndex: t, direction: r, setTranslate: a, activeSlideIndex: n, byController: !0 };
						Array.isArray(o.controller.control)
							? o.controller.control.forEach((me) => {
									!me.destroyed && me.params.loop && me.loopFix({ ...ie, slideTo: me.params.slidesPerView === C.slidesPerView ? i : !1 });
							  })
							: o.controller.control instanceof o.constructor &&
							  o.controller.control.params.loop &&
							  o.controller.control.loopFix({ ...ie, slideTo: o.controller.control.params.slidesPerView === C.slidesPerView ? i : !1 });
					}
					o.emit('loopFix');
				}
				function pt() {
					const s = this,
						{ params: t, slidesEl: i } = s;
					if (!t.loop || (s.virtual && s.params.virtual.enabled)) return;
					s.recalcSlides();
					const r = [];
					s.slides.forEach((a) => {
						const n = typeof a.swiperSlideIndex > 'u' ? a.getAttribute('data-swiper-slide-index') * 1 : a.swiperSlideIndex;
						r[n] = a;
					}),
						s.slides.forEach((a) => {
							a.removeAttribute('data-swiper-slide-index');
						}),
						r.forEach((a) => {
							i.append(a);
						}),
						s.recalcSlides(),
						s.slideTo(s.realIndex, 0);
				}
				var Rt = { loopCreate: ut, loopFix: Ht, loopDestroy: pt };
				function mt(s) {
					const t = this;
					if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
					const i = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
					t.isElement && (t.__preventObserver__ = !0),
						(i.style.cursor = 'move'),
						(i.style.cursor = s ? 'grabbing' : 'grab'),
						t.isElement &&
							requestAnimationFrame(() => {
								t.__preventObserver__ = !1;
							});
				}
				function ht() {
					const s = this;
					(s.params.watchOverflow && s.isLocked) ||
						s.params.cssMode ||
						(s.isElement && (s.__preventObserver__ = !0),
						(s[s.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
						s.isElement &&
							requestAnimationFrame(() => {
								s.__preventObserver__ = !1;
							}));
				}
				var gt = { setGrabCursor: mt, unsetGrabCursor: ht };
				function vt(s, t) {
					t === void 0 && (t = this);
					function i(r) {
						if (!r || r === (0, k.g)() || r === (0, k.a)()) return null;
						r.assignedSlot && (r = r.assignedSlot);
						const a = r.closest(s);
						return !a && !r.getRootNode ? null : a || i(r.getRootNode().host);
					}
					return i(t);
				}
				function wt(s, t, i) {
					const r = (0, k.a)(),
						{ params: a } = s,
						n = a.edgeSwipeDetection,
						l = a.edgeSwipeThreshold;
					return n && (i <= l || i >= r.innerWidth - l) ? (n === 'prevent' ? (t.preventDefault(), !0) : !1) : !0;
				}
				function bt(s) {
					const t = this,
						i = (0, k.g)();
					let r = s;
					r.originalEvent && (r = r.originalEvent);
					const a = t.touchEventsData;
					if (r.type === 'pointerdown') {
						if (a.pointerId !== null && a.pointerId !== r.pointerId) return;
						a.pointerId = r.pointerId;
					} else r.type === 'touchstart' && r.targetTouches.length === 1 && (a.touchId = r.targetTouches[0].identifier);
					if (r.type === 'touchstart') {
						wt(t, r, r.targetTouches[0].pageX);
						return;
					}
					const { params: n, touches: l, enabled: d } = t;
					if (!d || (!n.simulateTouch && r.pointerType === 'mouse') || (t.animating && n.preventInteractionOnTransition)) return;
					!t.animating && n.cssMode && n.loop && t.loopFix();
					let o = r.target;
					if (
						(n.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(o)) ||
						('which' in r && r.which === 3) ||
						('button' in r && r.button > 0) ||
						(a.isTouched && a.isMoved)
					)
						return;
					const f = !!n.noSwipingClass && n.noSwipingClass !== '',
						c = r.composedPath ? r.composedPath() : r.path;
					f && r.target && r.target.shadowRoot && c && (o = c[0]);
					const h = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
						M = !!(r.target && r.target.shadowRoot);
					if (n.noSwiping && (M ? vt(h, o) : o.closest(h))) {
						t.allowClick = !0;
						return;
					}
					if (n.swipeHandler && !o.closest(n.swipeHandler)) return;
					(l.currentX = r.pageX), (l.currentY = r.pageY);
					const C = l.currentX,
						P = l.currentY;
					if (!wt(t, r, C)) return;
					Object.assign(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
						(l.startX = C),
						(l.startY = P),
						(a.touchStartTime = (0, V.d)()),
						(t.allowClick = !0),
						t.updateSize(),
						(t.swipeDirection = void 0),
						n.threshold > 0 && (a.allowThresholdMove = !1);
					let A = !0;
					o.matches(a.focusableElements) && ((A = !1), o.nodeName === 'SELECT' && (a.isTouched = !1)),
						i.activeElement && i.activeElement.matches(a.focusableElements) && i.activeElement !== o && i.activeElement.blur();
					const X = A && t.allowTouchMove && n.touchStartPreventDefault;
					(n.touchStartForcePreventDefault || X) && !o.isContentEditable && r.preventDefault(),
						n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(),
						t.emit('touchStart', r);
				}
				function Ve(s) {
					const t = (0, k.g)(),
						i = this,
						r = i.touchEventsData,
						{ params: a, touches: n, rtlTranslate: l, enabled: d } = i;
					if (!d || (!a.simulateTouch && s.pointerType === 'mouse')) return;
					let o = s;
					if ((o.originalEvent && (o = o.originalEvent), o.type === 'pointermove' && (r.touchId !== null || o.pointerId !== r.pointerId))) return;
					let f;
					if (o.type === 'touchmove') {
						if (((f = [...o.changedTouches].filter((oe) => oe.identifier === r.touchId)[0]), !f || f.identifier !== r.touchId)) return;
					} else f = o;
					if (!r.isTouched) {
						r.startMoving && r.isScrolling && i.emit('touchMoveOpposite', o);
						return;
					}
					const c = f.pageX,
						h = f.pageY;
					if (o.preventedByNestedSwiper) {
						(n.startX = c), (n.startY = h);
						return;
					}
					if (!i.allowTouchMove) {
						o.target.matches(r.focusableElements) || (i.allowClick = !1),
							r.isTouched && (Object.assign(n, { startX: c, startY: h, currentX: c, currentY: h }), (r.touchStartTime = (0, V.d)()));
						return;
					}
					if (a.touchReleaseOnEdges && !a.loop) {
						if (i.isVertical()) {
							if ((h < n.startY && i.translate <= i.maxTranslate()) || (h > n.startY && i.translate >= i.minTranslate())) {
								(r.isTouched = !1), (r.isMoved = !1);
								return;
							}
						} else if ((c < n.startX && i.translate <= i.maxTranslate()) || (c > n.startX && i.translate >= i.minTranslate())) return;
					}
					if (t.activeElement && o.target === t.activeElement && o.target.matches(r.focusableElements)) {
						(r.isMoved = !0), (i.allowClick = !1);
						return;
					}
					r.allowTouchCallbacks && i.emit('touchMove', o), (n.previousX = n.currentX), (n.previousY = n.currentY), (n.currentX = c), (n.currentY = h);
					const M = n.currentX - n.startX,
						C = n.currentY - n.startY;
					if (i.params.threshold && Math.sqrt(M ** 2 + C ** 2) < i.params.threshold) return;
					if (typeof r.isScrolling > 'u') {
						let oe;
						(i.isHorizontal() && n.currentY === n.startY) || (i.isVertical() && n.currentX === n.startX)
							? (r.isScrolling = !1)
							: M * M + C * C >= 25 &&
							  ((oe = (Math.atan2(Math.abs(C), Math.abs(M)) * 180) / Math.PI),
							  (r.isScrolling = i.isHorizontal() ? oe > a.touchAngle : 90 - oe > a.touchAngle));
					}
					if (
						(r.isScrolling && i.emit('touchMoveOpposite', o),
						typeof r.startMoving > 'u' && (n.currentX !== n.startX || n.currentY !== n.startY) && (r.startMoving = !0),
						r.isScrolling)
					) {
						r.isTouched = !1;
						return;
					}
					if (!r.startMoving) return;
					(i.allowClick = !1), !a.cssMode && o.cancelable && o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
					let P = i.isHorizontal() ? M : C,
						A = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
					a.oneWayMovement && ((P = Math.abs(P) * (l ? 1 : -1)), (A = Math.abs(A) * (l ? 1 : -1))),
						(n.diff = P),
						(P *= a.touchRatio),
						l && ((P = -P), (A = -A));
					const X = i.touchesDirection;
					(i.swipeDirection = P > 0 ? 'prev' : 'next'), (i.touchesDirection = A > 0 ? 'prev' : 'next');
					const z = i.params.loop && !a.cssMode,
						U = (i.touchesDirection === 'next' && i.allowSlideNext) || (i.touchesDirection === 'prev' && i.allowSlidePrev);
					if (!r.isMoved) {
						if ((z && U && i.loopFix({ direction: i.swipeDirection }), (r.startTranslate = i.getTranslate()), i.setTransition(0), i.animating)) {
							const oe = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
							i.wrapperEl.dispatchEvent(oe);
						}
						(r.allowMomentumBounce = !1),
							a.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
							i.emit('sliderFirstMove', o);
					}
					let N;
					if ((new Date().getTime(), r.isMoved && r.allowThresholdMove && X !== i.touchesDirection && z && U && Math.abs(P) >= 1)) {
						Object.assign(n, { startX: c, startY: h, currentX: c, currentY: h, startTranslate: r.currentTranslate }),
							(r.loopSwapReset = !0),
							(r.startTranslate = r.currentTranslate);
						return;
					}
					i.emit('sliderMove', o), (r.isMoved = !0), (r.currentTranslate = P + r.startTranslate);
					let Z = !0,
						J = a.resistanceRatio;
					if (
						(a.touchReleaseOnEdges && (J = 0),
						P > 0
							? (z &&
									U &&
									!N &&
									r.allowThresholdMove &&
									r.currentTranslate > (a.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) &&
									i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
							  r.currentTranslate > i.minTranslate() &&
									((Z = !1), a.resistance && (r.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + r.startTranslate + P) ** J)))
							: P < 0 &&
							  (z &&
									U &&
									!N &&
									r.allowThresholdMove &&
									r.currentTranslate < (a.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) &&
									i.loopFix({
										direction: 'next',
										setTranslate: !0,
										activeSlideIndex:
											i.slides.length - (a.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10))),
									}),
							  r.currentTranslate < i.maxTranslate() &&
									((Z = !1), a.resistance && (r.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - r.startTranslate - P) ** J))),
						Z && (o.preventedByNestedSwiper = !0),
						!i.allowSlideNext && i.swipeDirection === 'next' && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
						!i.allowSlidePrev && i.swipeDirection === 'prev' && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
						!i.allowSlidePrev && !i.allowSlideNext && (r.currentTranslate = r.startTranslate),
						a.threshold > 0)
					)
						if (Math.abs(P) > a.threshold || r.allowThresholdMove) {
							if (!r.allowThresholdMove) {
								(r.allowThresholdMove = !0),
									(n.startX = n.currentX),
									(n.startY = n.currentY),
									(r.currentTranslate = r.startTranslate),
									(n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
								return;
							}
						} else {
							r.currentTranslate = r.startTranslate;
							return;
						}
					!a.followFinger ||
						a.cssMode ||
						(((a.freeMode && a.freeMode.enabled && i.freeMode) || a.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()),
						a.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
						i.updateProgress(r.currentTranslate),
						i.setTranslate(r.currentTranslate));
				}
				function Bt(s) {
					const t = this,
						i = t.touchEventsData;
					let r = s;
					r.originalEvent && (r = r.originalEvent);
					let a;
					if (r.type === 'touchend' || r.type === 'touchcancel') {
						if (((a = [...r.changedTouches].filter((J) => J.identifier === i.touchId)[0]), !a || a.identifier !== i.touchId)) return;
					} else {
						if (i.touchId !== null || r.pointerId !== i.pointerId) return;
						a = r;
					}
					if (
						['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(r.type) &&
						!(['pointercancel', 'contextmenu'].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))
					)
						return;
					(i.pointerId = null), (i.touchId = null);
					const { params: l, touches: d, rtlTranslate: o, slidesGrid: f, enabled: c } = t;
					if (!c || (!l.simulateTouch && r.pointerType === 'mouse')) return;
					if ((i.allowTouchCallbacks && t.emit('touchEnd', r), (i.allowTouchCallbacks = !1), !i.isTouched)) {
						i.isMoved && l.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1);
						return;
					}
					l.grabCursor && i.isMoved && i.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
					const h = (0, V.d)(),
						M = h - i.touchStartTime;
					if (t.allowClick) {
						const J = r.path || (r.composedPath && r.composedPath());
						t.updateClickedSlide((J && J[0]) || r.target, J),
							t.emit('tap click', r),
							M < 300 && h - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', r);
					}
					if (
						((i.lastClickTime = (0, V.d)()),
						(0, V.n)(() => {
							t.destroyed || (t.allowClick = !0);
						}),
						!i.isTouched ||
							!i.isMoved ||
							!t.swipeDirection ||
							(d.diff === 0 && !i.loopSwapReset) ||
							(i.currentTranslate === i.startTranslate && !i.loopSwapReset))
					) {
						(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
						return;
					}
					(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
					let C;
					if ((l.followFinger ? (C = o ? t.translate : -t.translate) : (C = -i.currentTranslate), l.cssMode)) return;
					if (l.freeMode && l.freeMode.enabled) {
						t.freeMode.onTouchEnd({ currentPos: C });
						return;
					}
					const P = C >= -t.maxTranslate() && !t.params.loop;
					let A = 0,
						X = t.slidesSizesGrid[0];
					for (let J = 0; J < f.length; J += J < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
						const oe = J < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
						typeof f[J + oe] < 'u'
							? (P || (C >= f[J] && C < f[J + oe])) && ((A = J), (X = f[J + oe] - f[J]))
							: (P || C >= f[J]) && ((A = J), (X = f[f.length - 1] - f[f.length - 2]));
					}
					let z = null,
						U = null;
					l.rewind &&
						(t.isBeginning
							? (U = l.virtual && l.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1)
							: t.isEnd && (z = 0));
					const N = (C - f[A]) / X,
						Z = A < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
					if (M > l.longSwipesMs) {
						if (!l.longSwipes) {
							t.slideTo(t.activeIndex);
							return;
						}
						t.swipeDirection === 'next' && (N >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? z : A + Z) : t.slideTo(A)),
							t.swipeDirection === 'prev' &&
								(N > 1 - l.longSwipesRatio ? t.slideTo(A + Z) : U !== null && N < 0 && Math.abs(N) > l.longSwipesRatio ? t.slideTo(U) : t.slideTo(A));
					} else {
						if (!l.shortSwipes) {
							t.slideTo(t.activeIndex);
							return;
						}
						t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
							? r.target === t.navigation.nextEl
								? t.slideTo(A + Z)
								: t.slideTo(A)
							: (t.swipeDirection === 'next' && t.slideTo(z !== null ? z : A + Z), t.swipeDirection === 'prev' && t.slideTo(U !== null ? U : A));
					}
				}
				function it() {
					const s = this,
						{ params: t, el: i } = s;
					if (i && i.offsetWidth === 0) return;
					t.breakpoints && s.setBreakpoint();
					const { allowSlideNext: r, allowSlidePrev: a, snapGrid: n } = s,
						l = s.virtual && s.params.virtual.enabled;
					(s.allowSlideNext = !0), (s.allowSlidePrev = !0), s.updateSize(), s.updateSlides(), s.updateSlidesClasses();
					const d = l && t.loop;
					(t.slidesPerView === 'auto' || t.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !d
						? s.slideTo(s.slides.length - 1, 0, !1, !0)
						: s.params.loop && !l
						? s.slideToLoop(s.realIndex, 0, !1, !0)
						: s.slideTo(s.activeIndex, 0, !1, !0),
						s.autoplay &&
							s.autoplay.running &&
							s.autoplay.paused &&
							(clearTimeout(s.autoplay.resizeTimeout),
							(s.autoplay.resizeTimeout = setTimeout(() => {
								s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume();
							}, 500))),
						(s.allowSlidePrev = a),
						(s.allowSlideNext = r),
						s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
				}
				function yt(s) {
					const t = this;
					t.enabled &&
						(t.allowClick ||
							(t.params.preventClicks && s.preventDefault(),
							t.params.preventClicksPropagation && t.animating && (s.stopPropagation(), s.stopImmediatePropagation())));
				}
				function kt() {
					const s = this,
						{ wrapperEl: t, rtlTranslate: i, enabled: r } = s;
					if (!r) return;
					(s.previousTranslate = s.translate),
						s.isHorizontal() ? (s.translate = -t.scrollLeft) : (s.translate = -t.scrollTop),
						s.translate === 0 && (s.translate = 0),
						s.updateActiveIndex(),
						s.updateSlidesClasses();
					let a;
					const n = s.maxTranslate() - s.minTranslate();
					n === 0 ? (a = 0) : (a = (s.translate - s.minTranslate()) / n),
						a !== s.progress && s.updateProgress(i ? -s.translate : s.translate),
						s.emit('setTranslate', s.translate, !1);
				}
				function rt(s) {
					const t = this;
					ke(t, s.target), !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) && t.update();
				}
				function St() {
					const s = this;
					s.documentTouchHandlerProceeded ||
						((s.documentTouchHandlerProceeded = !0), s.params.touchReleaseOnEdges && (s.el.style.touchAction = 'auto'));
				}
				const at = (s, t) => {
					const i = (0, k.g)(),
						{ params: r, el: a, wrapperEl: n, device: l } = s,
						d = !!r.nested,
						o = t === 'on' ? 'addEventListener' : 'removeEventListener',
						f = t;
					i[o]('touchstart', s.onDocumentTouchStart, { passive: !1, capture: d }),
						a[o]('touchstart', s.onTouchStart, { passive: !1 }),
						a[o]('pointerdown', s.onTouchStart, { passive: !1 }),
						i[o]('touchmove', s.onTouchMove, { passive: !1, capture: d }),
						i[o]('pointermove', s.onTouchMove, { passive: !1, capture: d }),
						i[o]('touchend', s.onTouchEnd, { passive: !0 }),
						i[o]('pointerup', s.onTouchEnd, { passive: !0 }),
						i[o]('pointercancel', s.onTouchEnd, { passive: !0 }),
						i[o]('touchcancel', s.onTouchEnd, { passive: !0 }),
						i[o]('pointerout', s.onTouchEnd, { passive: !0 }),
						i[o]('pointerleave', s.onTouchEnd, { passive: !0 }),
						i[o]('contextmenu', s.onTouchEnd, { passive: !0 }),
						(r.preventClicks || r.preventClicksPropagation) && a[o]('click', s.onClick, !0),
						r.cssMode && n[o]('scroll', s.onScroll),
						r.updateOnWindowResize
							? s[f](l.ios || l.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', it, !0)
							: s[f]('observerUpdate', it, !0),
						a[o]('load', s.onLoad, { capture: !0 });
				};
				function Et() {
					const s = this,
						{ params: t } = s;
					(s.onTouchStart = bt.bind(s)),
						(s.onTouchMove = Ve.bind(s)),
						(s.onTouchEnd = Bt.bind(s)),
						(s.onDocumentTouchStart = St.bind(s)),
						t.cssMode && (s.onScroll = kt.bind(s)),
						(s.onClick = yt.bind(s)),
						(s.onLoad = rt.bind(s)),
						at(s, 'on');
				}
				function xt() {
					at(this, 'off');
				}
				var Nt = { attachEvents: Et, detachEvents: xt };
				const Ke = (s, t) => s.grid && t.grid && t.grid.rows > 1;
				function Tt() {
					const s = this,
						{ realIndex: t, initialized: i, params: r, el: a } = s,
						n = r.breakpoints;
					if (!n || (n && Object.keys(n).length === 0)) return;
					const l = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
					if (!l || s.currentBreakpoint === l) return;
					const o = (l in n ? n[l] : void 0) || s.originalParams,
						f = Ke(s, r),
						c = Ke(s, o),
						h = r.enabled;
					f && !c
						? (a.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), s.emitContainerClasses())
						: !f &&
						  c &&
						  (a.classList.add(`${r.containerModifierClass}grid`),
						  ((o.grid.fill && o.grid.fill === 'column') || (!o.grid.fill && r.grid.fill === 'column')) &&
								a.classList.add(`${r.containerModifierClass}grid-column`),
						  s.emitContainerClasses()),
						['navigation', 'pagination', 'scrollbar'].forEach((z) => {
							if (typeof o[z] > 'u') return;
							const U = r[z] && r[z].enabled,
								N = o[z] && o[z].enabled;
							U && !N && s[z].disable(), !U && N && s[z].enable();
						});
					const M = o.direction && o.direction !== r.direction,
						C = r.loop && (o.slidesPerView !== r.slidesPerView || M),
						P = r.loop;
					M && i && s.changeDirection(), (0, V.u)(s.params, o);
					const A = s.params.enabled,
						X = s.params.loop;
					Object.assign(s, {
						allowTouchMove: s.params.allowTouchMove,
						allowSlideNext: s.params.allowSlideNext,
						allowSlidePrev: s.params.allowSlidePrev,
					}),
						h && !A ? s.disable() : !h && A && s.enable(),
						(s.currentBreakpoint = l),
						s.emit('_beforeBreakpoint', o),
						i &&
							(C ? (s.loopDestroy(), s.loopCreate(t), s.updateSlides()) : !P && X ? (s.loopCreate(t), s.updateSlides()) : P && !X && s.loopDestroy()),
						s.emit('breakpoint', o);
				}
				function Mt(s, t, i) {
					if ((t === void 0 && (t = 'window'), !s || (t === 'container' && !i))) return;
					let r = !1;
					const a = (0, k.a)(),
						n = t === 'window' ? a.innerHeight : i.clientHeight,
						l = Object.keys(s).map((d) => {
							if (typeof d == 'string' && d.indexOf('@') === 0) {
								const o = parseFloat(d.substr(1));
								return { value: n * o, point: d };
							}
							return { value: d, point: d };
						});
					l.sort((d, o) => parseInt(d.value, 10) - parseInt(o.value, 10));
					for (let d = 0; d < l.length; d += 1) {
						const { point: o, value: f } = l[d];
						t === 'window' ? a.matchMedia(`(min-width: ${f}px)`).matches && (r = o) : f <= i.clientWidth && (r = o);
					}
					return r || 'max';
				}
				var Ct = { setBreakpoint: Tt, getBreakpoint: Mt };
				function Vt(s, t) {
					const i = [];
					return (
						s.forEach((r) => {
							typeof r == 'object'
								? Object.keys(r).forEach((a) => {
										r[a] && i.push(t + a);
								  })
								: typeof r == 'string' && i.push(t + r);
						}),
						i
					);
				}
				function Pt() {
					const s = this,
						{ classNames: t, params: i, rtl: r, el: a, device: n } = s,
						l = Vt(
							[
								'initialized',
								i.direction,
								{ 'free-mode': s.params.freeMode && i.freeMode.enabled },
								{ autoheight: i.autoHeight },
								{ rtl: r },
								{ grid: i.grid && i.grid.rows > 1 },
								{ 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
								{ android: n.android },
								{ ios: n.ios },
								{ 'css-mode': i.cssMode },
								{ centered: i.cssMode && i.centeredSlides },
								{ 'watch-progress': i.watchSlidesProgress },
							],
							i.containerModifierClass
						);
					t.push(...l), a.classList.add(...t), s.emitContainerClasses();
				}
				function Lt() {
					const s = this,
						{ el: t, classNames: i } = s;
					t.classList.remove(...i), s.emitContainerClasses();
				}
				var It = { addClasses: Pt, removeClasses: Lt };
				function zt() {
					const s = this,
						{ isLocked: t, params: i } = s,
						{ slidesOffsetBefore: r } = i;
					if (r) {
						const a = s.slides.length - 1,
							n = s.slidesGrid[a] + s.slidesSizesGrid[a] + r * 2;
						s.isLocked = s.size > n;
					} else s.isLocked = s.snapGrid.length === 1;
					i.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
						i.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
						t && t !== s.isLocked && (s.isEnd = !1),
						t !== s.isLocked && s.emit(s.isLocked ? 'lock' : 'unlock');
				}
				var At = { checkOverflow: zt },
					nt = {
						init: !0,
						direction: 'horizontal',
						oneWayMovement: !1,
						swiperElementNodeName: 'SWIPER-CONTAINER',
						touchEventsTarget: 'wrapper',
						initialSlide: 0,
						speed: 300,
						cssMode: !1,
						updateOnWindowResize: !0,
						resizeObserver: !0,
						nested: !1,
						createElements: !1,
						eventsPrefix: 'swiper',
						enabled: !0,
						focusableElements: 'input, select, option, textarea, button, video, label',
						width: null,
						height: null,
						preventInteractionOnTransition: !1,
						userAgent: null,
						url: null,
						edgeSwipeDetection: !1,
						edgeSwipeThreshold: 20,
						autoHeight: !1,
						setWrapperSize: !1,
						virtualTranslate: !1,
						effect: 'slide',
						breakpoints: void 0,
						breakpointsBase: 'window',
						spaceBetween: 0,
						slidesPerView: 1,
						slidesPerGroup: 1,
						slidesPerGroupSkip: 0,
						slidesPerGroupAuto: !1,
						centeredSlides: !1,
						centeredSlidesBounds: !1,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
						normalizeSlideIndex: !0,
						centerInsufficientSlides: !1,
						watchOverflow: !0,
						roundLengths: !1,
						touchRatio: 1,
						touchAngle: 45,
						simulateTouch: !0,
						shortSwipes: !0,
						longSwipes: !0,
						longSwipesRatio: 0.5,
						longSwipesMs: 300,
						followFinger: !0,
						allowTouchMove: !0,
						threshold: 5,
						touchMoveStopPropagation: !1,
						touchStartPreventDefault: !0,
						touchStartForcePreventDefault: !1,
						touchReleaseOnEdges: !1,
						uniqueNavElements: !0,
						resistance: !0,
						resistanceRatio: 0.85,
						watchSlidesProgress: !1,
						grabCursor: !1,
						preventClicks: !0,
						preventClicksPropagation: !0,
						slideToClickedSlide: !1,
						loop: !1,
						loopAddBlankSlides: !0,
						loopAdditionalSlides: 0,
						loopPreventsSliding: !0,
						rewind: !1,
						allowSlidePrev: !0,
						allowSlideNext: !0,
						swipeHandler: null,
						noSwiping: !0,
						noSwipingClass: 'swiper-no-swiping',
						noSwipingSelector: null,
						passiveListeners: !0,
						maxBackfaceHiddenSlides: 10,
						containerModifierClass: 'swiper-',
						slideClass: 'swiper-slide',
						slideBlankClass: 'swiper-slide-blank',
						slideActiveClass: 'swiper-slide-active',
						slideVisibleClass: 'swiper-slide-visible',
						slideFullyVisibleClass: 'swiper-slide-fully-visible',
						slideNextClass: 'swiper-slide-next',
						slidePrevClass: 'swiper-slide-prev',
						wrapperClass: 'swiper-wrapper',
						lazyPreloaderClass: 'swiper-lazy-preloader',
						lazyPreloadPrevNext: 0,
						runCallbacksOnInit: !0,
						_emitClasses: !1,
					};
				function Ot(s, t) {
					return function (r) {
						r === void 0 && (r = {});
						const a = Object.keys(r)[0],
							n = r[a];
						if (typeof n != 'object' || n === null) {
							(0, V.u)(t, r);
							return;
						}
						if (
							(s[a] === !0 && (s[a] = { enabled: !0 }),
							a === 'navigation' && s[a] && s[a].enabled && !s[a].prevEl && !s[a].nextEl && (s[a].auto = !0),
							['pagination', 'scrollbar'].indexOf(a) >= 0 && s[a] && s[a].enabled && !s[a].el && (s[a].auto = !0),
							!(a in s && 'enabled' in n))
						) {
							(0, V.u)(t, r);
							return;
						}
						typeof s[a] == 'object' && !('enabled' in s[a]) && (s[a].enabled = !0), s[a] || (s[a] = { enabled: !1 }), (0, V.u)(t, r);
					};
				}
				const Ze = {
						eventsEmitter: Re,
						update: ee,
						translate: je,
						transition: Ce,
						slide: Gt,
						loop: Rt,
						grabCursor: gt,
						events: Nt,
						breakpoints: Ct,
						checkOverflow: At,
						classes: It,
					},
					Qe = {};
				class xe {
					constructor() {
						let t, i;
						for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
						a.length === 1 && a[0].constructor && Object.prototype.toString.call(a[0]).slice(8, -1) === 'Object' ? (i = a[0]) : ([t, i] = a),
							i || (i = {}),
							(i = (0, V.u)({}, i)),
							t && !i.el && (i.el = t);
						const l = (0, k.g)();
						if (i.el && typeof i.el == 'string' && l.querySelectorAll(i.el).length > 1) {
							const c = [];
							return (
								l.querySelectorAll(i.el).forEach((h) => {
									const M = (0, V.u)({}, i, { el: h });
									c.push(new xe(M));
								}),
								c
							);
						}
						const d = this;
						(d.__swiper__ = !0),
							(d.support = ue()),
							(d.device = Ee({ userAgent: i.userAgent })),
							(d.browser = et()),
							(d.eventsListeners = {}),
							(d.eventsAnyListeners = []),
							(d.modules = [...d.__modules__]),
							i.modules && Array.isArray(i.modules) && d.modules.push(...i.modules);
						const o = {};
						d.modules.forEach((c) => {
							c({ params: i, swiper: d, extendParams: Ot(i, o), on: d.on.bind(d), once: d.once.bind(d), off: d.off.bind(d), emit: d.emit.bind(d) });
						});
						const f = (0, V.u)({}, nt, o);
						return (
							(d.params = (0, V.u)({}, f, Qe, i)),
							(d.originalParams = (0, V.u)({}, d.params)),
							(d.passedParams = (0, V.u)({}, i)),
							d.params &&
								d.params.on &&
								Object.keys(d.params.on).forEach((c) => {
									d.on(c, d.params.on[c]);
								}),
							d.params && d.params.onAny && d.onAny(d.params.onAny),
							Object.assign(d, {
								enabled: d.params.enabled,
								el: t,
								classNames: [],
								slides: [],
								slidesGrid: [],
								snapGrid: [],
								slidesSizesGrid: [],
								isHorizontal() {
									return d.params.direction === 'horizontal';
								},
								isVertical() {
									return d.params.direction === 'vertical';
								},
								activeIndex: 0,
								realIndex: 0,
								isBeginning: !0,
								isEnd: !1,
								translate: 0,
								previousTranslate: 0,
								progress: 0,
								velocity: 0,
								animating: !1,
								cssOverflowAdjustment() {
									return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
								},
								allowSlideNext: d.params.allowSlideNext,
								allowSlidePrev: d.params.allowSlidePrev,
								touchEventsData: {
									isTouched: void 0,
									isMoved: void 0,
									allowTouchCallbacks: void 0,
									touchStartTime: void 0,
									isScrolling: void 0,
									currentTranslate: void 0,
									startTranslate: void 0,
									allowThresholdMove: void 0,
									focusableElements: d.params.focusableElements,
									lastClickTime: 0,
									clickTimeout: void 0,
									velocities: [],
									allowMomentumBounce: void 0,
									startMoving: void 0,
									pointerId: null,
									touchId: null,
								},
								allowClick: !0,
								allowTouchMove: d.params.allowTouchMove,
								touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
								imagesToLoad: [],
								imagesLoaded: 0,
							}),
							d.emit('_swiper'),
							d.params.init && d.init(),
							d
						);
					}
					getDirectionLabel(t) {
						return this.isHorizontal()
							? t
							: {
									width: 'height',
									'margin-top': 'margin-left',
									'margin-bottom ': 'margin-right',
									'margin-left': 'margin-top',
									'margin-right': 'margin-bottom',
									'padding-left': 'padding-top',
									'padding-right': 'padding-bottom',
									marginRight: 'marginBottom',
							  }[t];
					}
					getSlideIndex(t) {
						const { slidesEl: i, params: r } = this,
							a = (0, V.e)(i, `.${r.slideClass}, swiper-slide`),
							n = (0, V.h)(a[0]);
						return (0, V.h)(t) - n;
					}
					getSlideIndexByData(t) {
						return this.getSlideIndex(this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === t)[0]);
					}
					recalcSlides() {
						const t = this,
							{ slidesEl: i, params: r } = t;
						t.slides = (0, V.e)(i, `.${r.slideClass}, swiper-slide`);
					}
					enable() {
						const t = this;
						t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'));
					}
					disable() {
						const t = this;
						t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'));
					}
					setProgress(t, i) {
						const r = this;
						t = Math.min(Math.max(t, 0), 1);
						const a = r.minTranslate(),
							l = (r.maxTranslate() - a) * t + a;
						r.translateTo(l, typeof i > 'u' ? 0 : i), r.updateActiveIndex(), r.updateSlidesClasses();
					}
					emitContainerClasses() {
						const t = this;
						if (!t.params._emitClasses || !t.el) return;
						const i = t.el.className.split(' ').filter((r) => r.indexOf('swiper') === 0 || r.indexOf(t.params.containerModifierClass) === 0);
						t.emit('_containerClasses', i.join(' '));
					}
					getSlideClasses(t) {
						const i = this;
						return i.destroyed
							? ''
							: t.className
									.split(' ')
									.filter((r) => r.indexOf('swiper-slide') === 0 || r.indexOf(i.params.slideClass) === 0)
									.join(' ');
					}
					emitSlidesClasses() {
						const t = this;
						if (!t.params._emitClasses || !t.el) return;
						const i = [];
						t.slides.forEach((r) => {
							const a = t.getSlideClasses(r);
							i.push({ slideEl: r, classNames: a }), t.emit('_slideClass', r, a);
						}),
							t.emit('_slideClasses', i);
					}
					slidesPerViewDynamic(t, i) {
						t === void 0 && (t = 'current'), i === void 0 && (i = !1);
						const r = this,
							{ params: a, slides: n, slidesGrid: l, slidesSizesGrid: d, size: o, activeIndex: f } = r;
						let c = 1;
						if (typeof a.slidesPerView == 'number') return a.slidesPerView;
						if (a.centeredSlides) {
							let h = n[f] ? Math.ceil(n[f].swiperSlideSize) : 0,
								M;
							for (let C = f + 1; C < n.length; C += 1) n[C] && !M && ((h += Math.ceil(n[C].swiperSlideSize)), (c += 1), h > o && (M = !0));
							for (let C = f - 1; C >= 0; C -= 1) n[C] && !M && ((h += n[C].swiperSlideSize), (c += 1), h > o && (M = !0));
						} else if (t === 'current') for (let h = f + 1; h < n.length; h += 1) (i ? l[h] + d[h] - l[f] < o : l[h] - l[f] < o) && (c += 1);
						else for (let h = f - 1; h >= 0; h -= 1) l[f] - l[h] < o && (c += 1);
						return c;
					}
					update() {
						const t = this;
						if (!t || t.destroyed) return;
						const { snapGrid: i, params: r } = t;
						r.breakpoints && t.setBreakpoint(),
							[...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
								l.complete && ke(t, l);
							}),
							t.updateSize(),
							t.updateSlides(),
							t.updateProgress(),
							t.updateSlidesClasses();
						function a() {
							const l = t.rtlTranslate ? t.translate * -1 : t.translate,
								d = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
							t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
						}
						let n;
						if (r.freeMode && r.freeMode.enabled && !r.cssMode) a(), r.autoHeight && t.updateAutoHeight();
						else {
							if ((r.slidesPerView === 'auto' || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
								const l = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
								n = t.slideTo(l.length - 1, 0, !1, !0);
							} else n = t.slideTo(t.activeIndex, 0, !1, !0);
							n || a();
						}
						r.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit('update');
					}
					changeDirection(t, i) {
						i === void 0 && (i = !0);
						const r = this,
							a = r.params.direction;
						return (
							t || (t = a === 'horizontal' ? 'vertical' : 'horizontal'),
							t === a ||
								(t !== 'horizontal' && t !== 'vertical') ||
								(r.el.classList.remove(`${r.params.containerModifierClass}${a}`),
								r.el.classList.add(`${r.params.containerModifierClass}${t}`),
								r.emitContainerClasses(),
								(r.params.direction = t),
								r.slides.forEach((n) => {
									t === 'vertical' ? (n.style.width = '') : (n.style.height = '');
								}),
								r.emit('changeDirection'),
								i && r.update()),
							r
						);
					}
					changeLanguageDirection(t) {
						const i = this;
						(i.rtl && t === 'rtl') ||
							(!i.rtl && t === 'ltr') ||
							((i.rtl = t === 'rtl'),
							(i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
							i.rtl
								? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
								: (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
							i.update());
					}
					mount(t) {
						const i = this;
						if (i.mounted) return !0;
						let r = t || i.params.el;
						if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1;
						(r.swiper = i),
							r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
						const a = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`;
						let l = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(a()) : (0, V.e)(r, a())[0];
						return (
							!l &&
								i.params.createElements &&
								((l = (0, V.c)('div', i.params.wrapperClass)),
								r.append(l),
								(0, V.e)(r, `.${i.params.slideClass}`).forEach((d) => {
									l.append(d);
								})),
							Object.assign(i, {
								el: r,
								wrapperEl: l,
								slidesEl: i.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
								hostEl: i.isElement ? r.parentNode.host : r,
								mounted: !0,
								rtl: r.dir.toLowerCase() === 'rtl' || (0, V.o)(r, 'direction') === 'rtl',
								rtlTranslate: i.params.direction === 'horizontal' && (r.dir.toLowerCase() === 'rtl' || (0, V.o)(r, 'direction') === 'rtl'),
								wrongRTL: (0, V.o)(l, 'display') === '-webkit-box',
							}),
							!0
						);
					}
					init(t) {
						const i = this;
						if (i.initialized || i.mount(t) === !1) return i;
						i.emit('beforeInit'),
							i.params.breakpoints && i.setBreakpoint(),
							i.addClasses(),
							i.updateSize(),
							i.updateSlides(),
							i.params.watchOverflow && i.checkOverflow(),
							i.params.grabCursor && i.enabled && i.setGrabCursor(),
							i.params.loop && i.virtual && i.params.virtual.enabled
								? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0)
								: i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
							i.params.loop && i.loopCreate(),
							i.attachEvents();
						const a = [...i.el.querySelectorAll('[loading="lazy"]')];
						return (
							i.isElement && a.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
							a.forEach((n) => {
								n.complete
									? ke(i, n)
									: n.addEventListener('load', (l) => {
											ke(i, l.target);
									  });
							}),
							Ae(i),
							(i.initialized = !0),
							Ae(i),
							i.emit('init'),
							i.emit('afterInit'),
							i
						);
					}
					destroy(t, i) {
						t === void 0 && (t = !0), i === void 0 && (i = !0);
						const r = this,
							{ params: a, el: n, wrapperEl: l, slides: d } = r;
						return (
							typeof r.params > 'u' ||
								r.destroyed ||
								(r.emit('beforeDestroy'),
								(r.initialized = !1),
								r.detachEvents(),
								a.loop && r.loopDestroy(),
								i &&
									(r.removeClasses(),
									n.removeAttribute('style'),
									l.removeAttribute('style'),
									d &&
										d.length &&
										d.forEach((o) => {
											o.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
												o.removeAttribute('style'),
												o.removeAttribute('data-swiper-slide-index');
										})),
								r.emit('destroy'),
								Object.keys(r.eventsListeners).forEach((o) => {
									r.off(o);
								}),
								t !== !1 && ((r.el.swiper = null), (0, V.v)(r)),
								(r.destroyed = !0)),
							null
						);
					}
					static extendDefaults(t) {
						(0, V.u)(Qe, t);
					}
					static get extendedDefaults() {
						return Qe;
					}
					static get defaults() {
						return nt;
					}
					static installModule(t) {
						xe.prototype.__modules__ || (xe.prototype.__modules__ = []);
						const i = xe.prototype.__modules__;
						typeof t == 'function' && i.indexOf(t) < 0 && i.push(t);
					}
					static use(t) {
						return Array.isArray(t) ? (t.forEach((i) => xe.installModule(i)), xe) : (xe.installModule(t), xe);
					}
				}
				Object.keys(Ze).forEach((s) => {
					Object.keys(Ze[s]).forEach((t) => {
						xe.prototype[t] = Ze[s][t];
					});
				}),
					xe.use([tt, ze]);
				const lt = [
					'eventsPrefix',
					'injectStyles',
					'injectStylesUrls',
					'modules',
					'init',
					'_direction',
					'oneWayMovement',
					'swiperElementNodeName',
					'touchEventsTarget',
					'initialSlide',
					'_speed',
					'cssMode',
					'updateOnWindowResize',
					'resizeObserver',
					'nested',
					'focusableElements',
					'_enabled',
					'_width',
					'_height',
					'preventInteractionOnTransition',
					'userAgent',
					'url',
					'_edgeSwipeDetection',
					'_edgeSwipeThreshold',
					'_freeMode',
					'_autoHeight',
					'setWrapperSize',
					'virtualTranslate',
					'_effect',
					'breakpoints',
					'breakpointsBase',
					'_spaceBetween',
					'_slidesPerView',
					'maxBackfaceHiddenSlides',
					'_grid',
					'_slidesPerGroup',
					'_slidesPerGroupSkip',
					'_slidesPerGroupAuto',
					'_centeredSlides',
					'_centeredSlidesBounds',
					'_slidesOffsetBefore',
					'_slidesOffsetAfter',
					'normalizeSlideIndex',
					'_centerInsufficientSlides',
					'_watchOverflow',
					'roundLengths',
					'touchRatio',
					'touchAngle',
					'simulateTouch',
					'_shortSwipes',
					'_longSwipes',
					'longSwipesRatio',
					'longSwipesMs',
					'_followFinger',
					'allowTouchMove',
					'_threshold',
					'touchMoveStopPropagation',
					'touchStartPreventDefault',
					'touchStartForcePreventDefault',
					'touchReleaseOnEdges',
					'uniqueNavElements',
					'_resistance',
					'_resistanceRatio',
					'_watchSlidesProgress',
					'_grabCursor',
					'preventClicks',
					'preventClicksPropagation',
					'_slideToClickedSlide',
					'_loop',
					'loopAdditionalSlides',
					'loopAddBlankSlides',
					'loopPreventsSliding',
					'_rewind',
					'_allowSlidePrev',
					'_allowSlideNext',
					'_swipeHandler',
					'_noSwiping',
					'noSwipingClass',
					'noSwipingSelector',
					'passiveListeners',
					'containerModifierClass',
					'slideClass',
					'slideActiveClass',
					'slideVisibleClass',
					'slideFullyVisibleClass',
					'slideNextClass',
					'slidePrevClass',
					'slideBlankClass',
					'wrapperClass',
					'lazyPreloaderClass',
					'lazyPreloadPrevNext',
					'runCallbacksOnInit',
					'observer',
					'observeParents',
					'observeSlideChildren',
					'a11y',
					'_autoplay',
					'_controller',
					'coverflowEffect',
					'cubeEffect',
					'fadeEffect',
					'flipEffect',
					'creativeEffect',
					'cardsEffect',
					'hashNavigation',
					'history',
					'keyboard',
					'mousewheel',
					'_navigation',
					'_pagination',
					'parallax',
					'_scrollbar',
					'_thumbs',
					'virtual',
					'zoom',
					'control',
				];
				function _e(s) {
					return typeof s == 'object' && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === 'Object' && !s.__swiper__;
				}
				function q(s, t) {
					const i = ['__proto__', 'constructor', 'prototype'];
					Object.keys(t)
						.filter((r) => i.indexOf(r) < 0)
						.forEach((r) => {
							typeof s[r] > 'u'
								? (s[r] = t[r])
								: _e(t[r]) && _e(s[r]) && Object.keys(t[r]).length > 0
								? t[r].__swiper__
									? (s[r] = t[r])
									: q(s[r], t[r])
								: (s[r] = t[r]);
						});
				}
				function e(s) {
					return s === void 0 && (s = {}), s.navigation && typeof s.navigation.nextEl > 'u' && typeof s.navigation.prevEl > 'u';
				}
				function K(s) {
					return s === void 0 && (s = {}), s.pagination && typeof s.pagination.el > 'u';
				}
				function L(s) {
					return s === void 0 && (s = {}), s.scrollbar && typeof s.scrollbar.el > 'u';
				}
				function _(s) {
					s === void 0 && (s = '');
					const t = s
							.split(' ')
							.map((r) => r.trim())
							.filter((r) => !!r),
						i = [];
					return (
						t.forEach((r) => {
							i.indexOf(r) < 0 && i.push(r);
						}),
						i.join(' ')
					);
				}
				function D(s) {
					return s === void 0 && (s = ''), s.replace(/-[a-z]/g, (t) => t.toUpperCase().replace('-', ''));
				}
				function H(s) {
					return s === void 0 && (s = ''), s ? (s.includes('swiper-wrapper') ? s : `swiper-wrapper ${s}`) : 'swiper-wrapper';
				}
				function O(s) {
					let { swiper: t, slides: i, passedParams: r, changedParams: a, nextEl: n, prevEl: l, scrollbarEl: d, paginationEl: o } = s;
					const f = a.filter((re) => re !== 'children' && re !== 'direction' && re !== 'wrapperClass'),
						{ params: c, pagination: h, navigation: M, scrollbar: C, virtual: P, thumbs: A } = t;
					let X, z, U, N, Z, J, oe, we;
					a.includes('thumbs') && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (X = !0),
						a.includes('controller') && r.controller && r.controller.control && c.controller && !c.controller.control && (z = !0),
						a.includes('pagination') && r.pagination && (r.pagination.el || o) && (c.pagination || c.pagination === !1) && h && !h.el && (U = !0),
						a.includes('scrollbar') && r.scrollbar && (r.scrollbar.el || d) && (c.scrollbar || c.scrollbar === !1) && C && !C.el && (N = !0),
						a.includes('navigation') &&
							r.navigation &&
							(r.navigation.prevEl || l) &&
							(r.navigation.nextEl || n) &&
							(c.navigation || c.navigation === !1) &&
							M &&
							!M.prevEl &&
							!M.nextEl &&
							(Z = !0);
					const ne = (re) => {
						t[re] &&
							(t[re].destroy(),
							re === 'navigation'
								? (t.isElement && (t[re].prevEl.remove(), t[re].nextEl.remove()),
								  (c[re].prevEl = void 0),
								  (c[re].nextEl = void 0),
								  (t[re].prevEl = void 0),
								  (t[re].nextEl = void 0))
								: (t.isElement && t[re].el.remove(), (c[re].el = void 0), (t[re].el = void 0)));
					};
					a.includes('loop') && t.isElement && (c.loop && !r.loop ? (J = !0) : !c.loop && r.loop ? (oe = !0) : (we = !0)),
						f.forEach((re) => {
							if (_e(c[re]) && _e(r[re]))
								Object.assign(c[re], r[re]),
									(re === 'navigation' || re === 'pagination' || re === 'scrollbar') && 'enabled' in r[re] && !r[re].enabled && ne(re);
							else {
								const F = r[re];
								(F === !0 || F === !1) && (re === 'navigation' || re === 'pagination' || re === 'scrollbar') ? F === !1 && ne(re) : (c[re] = r[re]);
							}
						}),
						f.includes('controller') &&
							!z &&
							t.controller &&
							t.controller.control &&
							c.controller &&
							c.controller.control &&
							(t.controller.control = c.controller.control),
						a.includes('children') && i && P && c.virtual.enabled
							? ((P.slides = i), P.update(!0))
							: a.includes('virtual') && P && c.virtual.enabled && (i && (P.slides = i), P.update(!0)),
						a.includes('children') && i && c.loop && (we = !0),
						X && A.init() && A.update(!0),
						z && (t.controller.control = c.controller.control),
						U &&
							(t.isElement &&
								(!o || typeof o == 'string') &&
								((o = document.createElement('div')), o.classList.add('swiper-pagination'), o.part.add('pagination'), t.el.appendChild(o)),
							o && (c.pagination.el = o),
							h.init(),
							h.render(),
							h.update()),
						N &&
							(t.isElement &&
								(!d || typeof d == 'string') &&
								((d = document.createElement('div')), d.classList.add('swiper-scrollbar'), d.part.add('scrollbar'), t.el.appendChild(d)),
							d && (c.scrollbar.el = d),
							C.init(),
							C.updateSize(),
							C.setTranslate()),
						Z &&
							(t.isElement &&
								((!n || typeof n == 'string') &&
									((n = document.createElement('div')),
									n.classList.add('swiper-button-next'),
									(n.innerHTML = t.hostEl.constructor.nextButtonSvg),
									n.part.add('button-next'),
									t.el.appendChild(n)),
								(!l || typeof l == 'string') &&
									((l = document.createElement('div')),
									l.classList.add('swiper-button-prev'),
									(l.innerHTML = t.hostEl.constructor.prevButtonSvg),
									l.part.add('button-prev'),
									t.el.appendChild(l))),
							n && (c.navigation.nextEl = n),
							l && (c.navigation.prevEl = l),
							M.init(),
							M.update()),
						a.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
						a.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
						a.includes('direction') && t.changeDirection(r.direction, !1),
						(J || we) && t.loopDestroy(),
						(oe || we) && t.loopCreate(),
						t.update();
				}
				function T(s, t) {
					s === void 0 && (s = {}), t === void 0 && (t = !0);
					const i = { on: {} },
						r = {},
						a = {};
					q(i, nt), (i._emitClasses = !0), (i.init = !1);
					const n = {},
						l = lt.map((o) => o.replace(/_/, '')),
						d = Object.assign({}, s);
					return (
						Object.keys(d).forEach((o) => {
							typeof s[o] > 'u' ||
								(l.indexOf(o) >= 0
									? _e(s[o])
										? ((i[o] = {}), (a[o] = {}), q(i[o], s[o]), q(a[o], s[o]))
										: ((i[o] = s[o]), (a[o] = s[o]))
									: o.search(/on[A-Z]/) === 0 && typeof s[o] == 'function'
									? t
										? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = s[o])
										: (i.on[`${o[2].toLowerCase()}${o.substr(3)}`] = s[o])
									: (n[o] = s[o]));
						}),
						['navigation', 'pagination', 'scrollbar'].forEach((o) => {
							i[o] === !0 && (i[o] = {}), i[o] === !1 && delete i[o];
						}),
						{ params: i, passedParams: a, rest: n, events: r }
					);
				}
				function y(s, t) {
					let { el: i, nextEl: r, prevEl: a, paginationEl: n, scrollbarEl: l, swiper: d } = s;
					e(t) &&
						r &&
						a &&
						((d.params.navigation.nextEl = r),
						(d.originalParams.navigation.nextEl = r),
						(d.params.navigation.prevEl = a),
						(d.originalParams.navigation.prevEl = a)),
						K(t) && n && ((d.params.pagination.el = n), (d.originalParams.pagination.el = n)),
						L(t) && l && ((d.params.scrollbar.el = l), (d.originalParams.scrollbar.el = l)),
						d.init(i);
				}
				function g(s, t, i, r, a) {
					const n = [];
					if (!t) return n;
					const l = (o) => {
						n.indexOf(o) < 0 && n.push(o);
					};
					if (i && r) {
						const o = r.map(a),
							f = i.map(a);
						o.join('') !== f.join('') && l('children'), r.length !== i.length && l('children');
					}
					return (
						lt
							.filter((o) => o[0] === '_')
							.map((o) => o.replace(/_/, ''))
							.forEach((o) => {
								if (o in s && o in t)
									if (_e(s[o]) && _e(t[o])) {
										const f = Object.keys(s[o]),
											c = Object.keys(t[o]);
										f.length !== c.length
											? l(o)
											: (f.forEach((h) => {
													s[o][h] !== t[o][h] && l(o);
											  }),
											  c.forEach((h) => {
													s[o][h] !== t[o][h] && l(o);
											  }));
									} else s[o] !== t[o] && l(o);
							}),
						n
					);
				}
				const u = (s) => {
					!s ||
						s.destroyed ||
						!s.params.virtual ||
						(s.params.virtual && !s.params.virtual.enabled) ||
						(s.updateSlides(),
						s.updateProgress(),
						s.updateSlidesClasses(),
						s.parallax && s.params.parallax && s.params.parallax.enabled && s.parallax.setTranslate());
				};
				var p;
				function E() {
					return (
						(E = Object.assign
							? Object.assign.bind()
							: function (s) {
									for (var t = 1; t < arguments.length; t++) {
										var i = arguments[t];
										for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (s[r] = i[r]);
									}
									return s;
							  }),
						E.apply(this, arguments)
					);
				}
				function w(s) {
					return s.type && s.type.displayName && s.type.displayName.includes('SwiperSlide');
				}
				function x(s) {
					const t = [];
					return (
						Q.default.Children.toArray(s).forEach((i) => {
							w(i) ? t.push(i) : i.props && i.props.children && x(i.props.children).forEach((r) => t.push(r));
						}),
						t
					);
				}
				function b(s) {
					const t = [],
						i = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
					return (
						Q.default.Children.toArray(s).forEach((r) => {
							if (w(r)) t.push(r);
							else if (r.props && r.props.slot && i[r.props.slot]) i[r.props.slot].push(r);
							else if (r.props && r.props.children) {
								const a = x(r.props.children);
								a.length > 0 ? a.forEach((n) => t.push(n)) : i['container-end'].push(r);
							} else i['container-end'].push(r);
						}),
						{ slides: t, slots: i }
					);
				}
				function m(s, t, i) {
					if (!i) return null;
					const r = (c) => {
							let h = c;
							return c < 0 ? (h = t.length + c) : h >= t.length && (h = h - t.length), h;
						},
						a = s.isHorizontal() ? { [s.rtlTranslate ? 'right' : 'left']: `${i.offset}px` } : { top: `${i.offset}px` },
						{ from: n, to: l } = i,
						d = s.params.loop ? -t.length : 0,
						o = s.params.loop ? t.length * 2 : t.length,
						f = [];
					for (let c = d; c < o; c += 1) c >= n && c <= l && f.push(t[r(c)]);
					return f.map((c, h) => Q.default.cloneElement(c, { swiper: s, style: a, key: c.props.virtualIndex || c.key || `slide-${h}` }));
				}
				function v(s, t) {
					return typeof window > 'u' ? (0, Q.useEffect)(s, t) : (0, Q.useLayoutEffect)(s, t);
				}
				const S = (0, Q.createContext)(null),
					I = () => p(S),
					W = (0, Q.createContext)(null),
					R = () => p(W),
					Y = (0, Q.forwardRef)(function (s, t) {
						let { className: i, tag: r = 'div', wrapperTag: a = 'div', children: n, onSwiper: l, ...d } = s === void 0 ? {} : s,
							o = !1;
						const [f, c] = (0, Q.useState)('swiper'),
							[h, M] = (0, Q.useState)(null),
							[C, P] = (0, Q.useState)(!1),
							A = (0, Q.useRef)(!1),
							X = (0, Q.useRef)(null),
							z = (0, Q.useRef)(null),
							U = (0, Q.useRef)(null),
							N = (0, Q.useRef)(null),
							Z = (0, Q.useRef)(null),
							J = (0, Q.useRef)(null),
							oe = (0, Q.useRef)(null),
							we = (0, Q.useRef)(null),
							{ params: ne, passedParams: re, rest: F, events: se } = T(d),
							{ slides: ae, slots: ie } = b(n),
							me = () => {
								P(!C);
							};
						Object.assign(ne.on, {
							_containerClasses(be, Pe) {
								c(Pe);
							},
						});
						const ge = () => {
							Object.assign(ne.on, se), (o = !0);
							const be = { ...ne };
							if ((delete be.wrapperClass, (z.current = new xe(be)), z.current.virtual && z.current.params.virtual.enabled)) {
								z.current.virtual.slides = ae;
								const Pe = { cache: !1, slides: ae, renderExternal: M, renderExternalUpdate: !1 };
								q(z.current.params.virtual, Pe), q(z.current.originalParams.virtual, Pe);
							}
						};
						X.current || ge(), z.current && z.current.on('_beforeBreakpoint', me);
						const ye = () => {
								o ||
									!se ||
									!z.current ||
									Object.keys(se).forEach((be) => {
										z.current.on(be, se[be]);
									});
							},
							_t = () => {
								!se ||
									!z.current ||
									Object.keys(se).forEach((be) => {
										z.current.off(be, se[be]);
									});
							};
						(0, Q.useEffect)(() => () => {
							z.current && z.current.off('_beforeBreakpoint', me);
						}),
							(0, Q.useEffect)(() => {
								!A.current && z.current && (z.current.emitSlidesClasses(), (A.current = !0));
							}),
							v(() => {
								if ((t && (t.current = X.current), !!X.current))
									return (
										z.current.destroyed && ge(),
										y(
											{ el: X.current, nextEl: Z.current, prevEl: J.current, paginationEl: oe.current, scrollbarEl: we.current, swiper: z.current },
											ne
										),
										l && !z.current.destroyed && l(z.current),
										() => {
											z.current && !z.current.destroyed && z.current.destroy(!0, !1);
										}
									);
							}, []),
							v(() => {
								ye();
								const be = g(re, U.current, ae, N.current, (Pe) => Pe.key);
								return (
									(U.current = re),
									(N.current = ae),
									be.length &&
										z.current &&
										!z.current.destroyed &&
										O({
											swiper: z.current,
											slides: ae,
											passedParams: re,
											changedParams: be,
											nextEl: Z.current,
											prevEl: J.current,
											scrollbarEl: we.current,
											paginationEl: oe.current,
										}),
									() => {
										_t();
									}
								);
							}),
							v(() => {
								u(z.current);
							}, [h]);
						function ot() {
							return ne.virtual ? m(z.current, ae, h) : ae.map((be, Pe) => Q.default.cloneElement(be, { swiper: z.current, swiperSlideIndex: Pe }));
						}
						return Q.default.createElement(
							r,
							E({ ref: X, className: _(`${f}${i ? ` ${i}` : ''}`) }, F),
							Q.default.createElement(
								W.Provider,
								{ value: z.current },
								ie['container-start'],
								Q.default.createElement(a, { className: H(ne.wrapperClass) }, ie['wrapper-start'], ot(), ie['wrapper-end']),
								e(ne) &&
									Q.default.createElement(
										Q.default.Fragment,
										null,
										Q.default.createElement('div', { ref: J, className: 'swiper-button-prev' }),
										Q.default.createElement('div', { ref: Z, className: 'swiper-button-next' })
									),
								L(ne) && Q.default.createElement('div', { ref: we, className: 'swiper-scrollbar' }),
								K(ne) && Q.default.createElement('div', { ref: oe, className: 'swiper-pagination' }),
								ie['container-end']
							)
						);
					});
				Y.displayName = 'Swiper';
				const $ = (0, Q.forwardRef)(function (s, t) {
					let {
						tag: i = 'div',
						children: r,
						className: a = '',
						swiper: n,
						zoom: l,
						lazy: d,
						virtualIndex: o,
						swiperSlideIndex: f,
						...c
					} = s === void 0 ? {} : s;
					const h = (0, Q.useRef)(null),
						[M, C] = (0, Q.useState)('swiper-slide'),
						[P, A] = (0, Q.useState)(!1);
					function X(Z, J, oe) {
						J === h.current && C(oe);
					}
					v(() => {
						if ((typeof f < 'u' && (h.current.swiperSlideIndex = f), t && (t.current = h.current), !(!h.current || !n))) {
							if (n.destroyed) {
								M !== 'swiper-slide' && C('swiper-slide');
								return;
							}
							return (
								n.on('_slideClass', X),
								() => {
									n && n.off('_slideClass', X);
								}
							);
						}
					}),
						v(() => {
							n && h.current && !n.destroyed && C(n.getSlideClasses(h.current));
						}, [n]);
					const z = {
							isActive: M.indexOf('swiper-slide-active') >= 0,
							isVisible: M.indexOf('swiper-slide-visible') >= 0,
							isPrev: M.indexOf('swiper-slide-prev') >= 0,
							isNext: M.indexOf('swiper-slide-next') >= 0,
						},
						U = () => (typeof r == 'function' ? r(z) : r),
						N = () => {
							A(!0);
						};
					return Q.default.createElement(
						i,
						E({ ref: h, className: _(`${M}${a ? ` ${a}` : ''}`), 'data-swiper-slide-index': o, onLoad: N }, c),
						l &&
							Q.default.createElement(
								S.Provider,
								{ value: z },
								Q.default.createElement(
									'div',
									{ className: 'swiper-zoom-container', 'data-swiper-zoom': typeof l == 'number' ? l : void 0 },
									U(),
									d && !P && Q.default.createElement('div', { className: 'swiper-lazy-preloader' })
								)
							),
						!l &&
							Q.default.createElement(
								S.Provider,
								{ value: z },
								U(),
								d && !P && Q.default.createElement('div', { className: 'swiper-lazy-preloader' })
							)
					);
				});
				$.displayName = 'SwiperSlide';
			},
		},
	]);
})();

//# sourceMappingURL=6664.d67a5e0d.iframe.bundle.js.map
