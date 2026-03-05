'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(Q, x, s) {
				s.d(x, { x: () => ls });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = s('../../node_modules/classnames/index.js'),
					n = s.n(y),
					l = s('../../node_modules/deepmerge/dist/cjs.js'),
					c = s.n(l),
					v = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					_ = s('./components/src/providers/cache.tsx'),
					a = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = s('./components/src/providers/treePath.tsx'),
					M = s('./components/src/hooks/useA11y.tsx'),
					G = s('./components/src/hooks/useLang.tsx'),
					z = s('./components/src/components/Atoms/Image/Image.tsx'),
					U = s('./components/src/utilities/cloneWithProps.tsx'),
					q = s('./components/src/utilities/defined.ts'),
					ss = s('./components/src/utilities/mergeProps.ts'),
					es = s('./components/src/utilities/mergeStyles.ts'),
					ts = s('../../node_modules/color/index.js'),
					os = s.n(ts);
				const as = ({ gapSize: I, columns: m, theme: W, disableOverflowAction: S }) =>
					(0, C.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${m}, 1fr)`,
							gap: I,
							gridAutoRows: '1fr',
							'.ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${m} - ${2 * Math.round((m + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${W?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${m} - ${2 * Math.round((m + 2) / 2)}px)`,
								margin: `0 ${I} ${I} 0`,
								'.ss__grid__option__inner': {
									aspectRatio: '1/1',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									margin: 'auto',
									height: '100%',
									'.ss__image': { aspectRatio: '1/1' },
								},
								'.ss__grid__option__label': { cursor: 'pointer' },
								[`:nth-of-type(${m}n)`]: { marginRight: '0' },
								'&.ss__grid__option--selected': { border: `2px solid ${W?.variables?.colors?.primary || '#333'}` },
								'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
								'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
								'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: '50%',
									width: '90%',
									height: '1px',
									borderTop: '3px solid #eee',
									outline: '1px solid #ffff',
									transform: 'rotate(-45deg)',
								},
								'&.ss__grid__option--dark': { color: '#fff' },
								'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						},
						'.ss__grid__show-more-wrapper': {
							'&:not(.ss__grid__option)': { margin: '8px' },
							'&:hover': { cursor: S ? 'initial !important' : 'pointer !important' },
						},
					});
				function ls(I) {
					const m = (0, a.u)(),
						S = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, D.LU)() },
						L = (0, ss.v6)('grid', m, S, I),
						{
							titleText: J,
							onSelect: r,
							hideLabels: F,
							disableOverflowAction: A,
							multiSelect: H,
							overflowButton: K,
							columns: T,
							rows: j,
							hideShowLess: k,
							overflowButtonInGrid: O,
							disabled: V,
							options: f,
							disableStyles: ns,
							onOverflowButtonClick: X,
							className: N,
							internalClassName: Y,
							treePath: $,
							disableA11y: rs,
						} = L,
						_s = { image: { internalClassName: 'ss__grid__image', ...(0, q.s)({ disableStyles: ns }), theme: L?.theme, treePath: $ } };
					let g = L.selected;
					const Z = (0, es.Z)(L, as);
					g && !Array.isArray(g) && (g = [g]);
					const [w, e] = (0, u.J0)(g || []),
						[P] = (0, u.J0)(g || []);
					try {
						if (g) {
							const t = JSON.stringify(P),
								d = JSON.stringify(g),
								h = JSON.stringify(w);
							t !== d && d !== h && e(g);
						}
					} catch {}
					const R = (t, d) => {
							if (H) {
								let h;
								w.find((E) => E.value === d.value)
									? ((h = [...w]),
									  h.splice(
											h.findIndex((E) => E.value === d.value),
											1
									  ))
									: (h = [...w, d]),
									r && r(t, d, h),
									e(h);
							} else r && r(t, d, [d]), e([d]);
						},
						B = j && T ? T * j : f.length,
						i = Math.max(0, f.length - (B - (O ? 1 : 0))),
						[b, ds] = (0, u.J0)(!!i),
						is = () => {
							const t = k ? b : !0,
								d = { showMoreText: { value: O ? `+ ${i}` : 'Show More' }, showLessText: { value: O ? `- ${i}` : 'Show Less' } },
								h = c()(d, L.lang || {}),
								E = (0, G.u)(h, { limited: b, remainder: i });
							return t && i > 0 && f.length !== B
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${O ? 'ss__grid__option' : ''}`,
										onClick: (p) => {
											!A && ds(!b), X && X(p, !!b, i);
										},
										role: 'button',
										ref: (p) => (!rs && !A ? (0, M.iy)(p) : null),
										...(b ? E.showMoreText.attributes : E.showLessText.attributes),
										children: K
											? (0, U.Y)(K, { limited: b, remainder: i, treePath: $ })
											: b
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...E.showMoreText.value })
											: i
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...E.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof f == 'object' && f?.length
						? (0, o.Y)(_._, {
								children: (0, o.FD)('div', {
									...Z,
									className: n()('ss__grid', V ? 'ss__grid--disabled' : '', N, Y),
									children: [
										J && (0, o.Y)('h5', { className: 'ss__grid__title', children: J }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												f.map((t, d) => {
													const h = w.some((p) => p.value == t.value);
													let E = !1;
													try {
														E = new (os())(
															t.background ? t.background.toLowerCase() : t.backgroundImageUrl ? '' : t.value.toString().toLowerCase()
														).isDark();
													} catch {}
													if (!b || f.length == B || d < B - (O ? 1 : 0))
														return (0, o.Y)('div', {
															className: n()('ss__grid__option', {
																'ss__grid__option--selected': h,
																'ss__grid__option--disabled': t?.disabled,
																'ss__grid__option--unavailable': t?.available === !1,
																'ss__grid__option--dark': E,
															}),
															onClick: (p) => !V && !t?.disabled && R(p, t),
															ref: (p) => (0, M.iy)(p),
															title: t.label || t.value.toString(),
															role: 'option',
															'aria-selected': h,
															'aria-disabled': t.disabled,
															children: (0, o.FD)('div', {
																className: n()('ss__grid__option__inner', `ss__grid__option__inner--${v.p(t.value.toString())}`),
																style: { background: t.background ? t.background : t.backgroundImageUrl ? void 0 : t.value },
																children: [
																	!t.background && t.backgroundImageUrl
																		? (0, o.Y)(z._, { ..._s.image, src: t.backgroundImageUrl, alt: t.label || t.value.toString() })
																		: null,
																	F ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: t.label || t.value }),
																],
															}),
														});
												}),
												O ? (0, o.Y)(is, {}) : null,
											],
										}),
										O ? null : (0, o.Y)(is, {}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(Q, x, s) {
				s.d(x, { l: () => I });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = s('../../node_modules/classnames/index.js'),
					u = s.n(C),
					y = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = s('./components/src/providers/cache.tsx'),
					l = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = s('./components/src/providers/treePath.tsx'),
					v = s('./components/src/hooks/useDisplaySettings.tsx'),
					_ = s('./components/src/hooks/useA11y.tsx'),
					a = s('./components/src/utilities/defined.ts'),
					D = s('./components/src/utilities/mergeProps.ts'),
					M = s('./components/src/utilities/mergeStyles.ts'),
					G = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					z = s('./components/src/components/Atoms/Image/Image.tsx'),
					U = s('../../node_modules/deepmerge/dist/cjs.js'),
					q = s.n(U),
					ss = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					es = s('../../node_modules/color/index.js'),
					ts = s.n(es),
					os = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					as = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const ls = ({ theme: m }) =>
					(0, y.AH)({
						'.ss__swatches__slideshow__swatch': {
							boxSizing: 'content-box',
							cursor: 'pointer',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: `1px solid ${m?.variables?.colors?.primary || '#333'}`,
							aspectRatio: '1/1',
							flexDirection: 'column',
							'.ss__swatches__slideshow__swatch__inner': {
								aspectRatio: '1/1',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
							},
							'&.ss__swatches__slideshow__swatch--selected': { border: `2px solid ${m?.variables?.colors?.primary || '#333'}` },
							'&.ss__swatches__slideshow__swatch--disabled:before, &.ss__swatches__slideshow__swatch--unavailable:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: '50%',
								width: '90%',
								height: '1px',
								borderTop: '3px solid #eee',
								outline: '1px solid #ffff',
								transform: 'rotate(-45deg)',
							},
							'&.ss__swatches__slideshow__swatch--disabled': { position: 'relative', cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'&.ss__swatches__slideshow__swatch--unavailable': { cursor: 'pointer', opacity: 0.5 },
							'&.ss__swatches__slideshow__swatch--dark': { color: '#fff' },
						},
					});
				function I(m) {
					const W = (0, l.u)(),
						S = (0, c.LU)(),
						L = {
							0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
							768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
							1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
						},
						J = { type: 'slideshow', hideLabels: !0, treePath: S };
					let r = (0, D.v6)('swatches', W, J, m);
					const F = r.breakpoints || (r.type == 'slideshow' ? L : {}),
						A = (0, v.X)(F);
					if (A && Object.keys(A).length) {
						const e = q()(r?.theme || {}, A?.theme || {}, { arrayMerge: (P, R) => R });
						r = { ...r, ...A, theme: e };
					}
					const {
							onSelect: H,
							disabled: K,
							options: T,
							hideLabels: j,
							disableStyles: k,
							className: O,
							internalClassName: V,
							type: f,
							slideshow: ns,
							grid: X,
							treePath: N,
						} = r,
						Y = {
							slideshow: {
								internalClassName: 'ss__swatches__slideshow',
								loop: !1,
								slidesToShow: 6,
								slidesToMove: 1,
								gap: 8,
								showNavigation: !0,
								showPagination: !1,
								autoPlay: !1,
								...ns,
								...(0, a.s)({ breakpoints: F, disableStyles: k }),
								theme: r?.theme,
								treePath: N,
							},
							grid: {
								internalClassName: 'ss__swatches__grid',
								hideLabels: j,
								overflowButtonInGrid: !0,
								disableOverflowAction: !0,
								rows: 1,
								columns: 6,
								...X,
								...(0, a.s)({ disableStyles: k }),
								theme: r?.theme,
								treePath: N,
							},
							image: { internalClassName: 'ss__swatches__image', ...(0, a.s)({ disableStyles: k }), theme: r?.theme, treePath: N },
						},
						$ = r.selected,
						rs = (0, M.Z)(r, ls),
						[_s, g] = (0, as.J0)($ || void 0),
						Z = (e, P) => {
							H && H(e, P), g(P);
						},
						w = [];
					return (
						f == 'slideshow' &&
							T.forEach((e) => {
								const P = e.label,
									R = _s?.value == e.value;
								let B = !1;
								try {
									B = new (ts())(e.background ? e.background.toLowerCase() : e.backgroundImageUrl ? '' : e.value.toString().toLowerCase()).isDark();
								} catch {}
								w.push({
									onClick: (i) => !K && !e?.disabled && Z(i, e),
									content: (0, o.Y)('div', {
										className: u()('ss__swatches__slideshow__swatch', {
											'ss__swatches__slideshow__swatch--selected': R,
											'ss__swatches__slideshow__swatch--disabled': e?.disabled,
											'ss__swatches__slideshow__swatch--unavailable': e?.available === !1,
											'ss__swatches__slideshow__swatch--dark': B,
										}),
										title: P,
										ref: (i) => (0, _.iy)(i),
										'aria-disabled': e.disabled || e?.available === !1,
										role: 'option',
										'aria-selected': R,
										children: (0, o.FD)('div', {
											className: u()(
												'ss__swatches__slideshow__swatch__inner',
												`ss__swatches__slideshow__swatch__inner--${ss.p(e.value?.toString())}`
											),
											style: { background: e.background ? e.background : e.backgroundImageUrl ? '' : e.value },
											children: [
												!e.background && e.backgroundImageUrl
													? (0, o.Y)(z._, { ...Y.image, src: e.backgroundImageUrl, alt: e.label || e.value?.toString() })
													: null,
												!j && (0, o.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: P || e.value }),
											],
										}),
									}),
								});
							}),
						typeof T == 'object' && T?.length
							? (0, o.Y)(n._, {
									children: (0, o.Y)('div', {
										...rs,
										className: u()('ss__swatches', O, V),
										children:
											f == 'slideshow'
												? (0, o.Y)(os.b, { slides: w, ...Y.slideshow })
												: (0, o.Y)(G.x, {
														...Y.grid,
														options: T,
														onSelect: (e, P) => {
															!K && Z(e, P);
														},
														selected: $,
												  }),
									}),
							  })
							: null
					);
				}
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(Q, x, s) {
				s.d(x, { I: () => y, r: () => u });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					C = s('../../node_modules/dequal/dist/index.mjs');
				function u(n) {
					const l = (0, o.li)(n),
						c = (0, o.li)(0);
					return (0, C.j)(n, l.current) || ((l.current = n), (c.current += 1)), (0, o.Kr)(() => l.current, [c.current]);
				}
				function y(n, l) {
					return (0, o.vJ)(n, [u(l)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(Q, x, s) {
				s.d(x, { Q: () => n, X: () => y });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					C = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					u = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function y(l) {
					if (!l || !Object.keys(l).length) return;
					const [c, v] = (0, o.J0)(n(l));
					let _;
					const a = () => {
						function D() {
							v(n(l));
						}
						(_ = (0, C.s)(() => {
							D();
						}, 50)),
							window.addEventListener('resize', _);
					};
					return (
						(0, o.vJ)(() => (a(), () => window.removeEventListener('resize', _)), []),
						(0, u.I)(() => {
							v(n(l)), a();
						}, [l]),
						c
					);
				}
				const n = (l) => {
					let c;
					const v = window.innerWidth,
						_ = Object.keys(l)
							.map((a) => +a)
							.sort((a, D) => a - D)
							.map((a) => ({ [a]: l[a] }));
					if (_.length) {
						for (let a = 0; a < _.length; a++) {
							const D = _[a],
								M = parseInt(Object.keys(D)[0]);
							if (a + 1 === _.length || (a === 0 && v < M)) {
								c = _[a][M];
								break;
							} else {
								const U = parseInt(Object.keys(_[a + 1])[0]);
								if (v >= M && v < U) {
									c = _[a][M];
									break;
								}
							}
						}
						return c;
					}
					return c;
				};
			},
		},
	]);
})();
