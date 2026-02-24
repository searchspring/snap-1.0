'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(Q, y, s) {
				s.d(y, { x: () => ns });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/preact/dist/preact.module.js'),
					w = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = s('../../node_modules/classnames/index.js'),
					r = s.n(i),
					m = s('../../node_modules/deepmerge/dist/cjs.js'),
					f = s.n(m),
					l = s('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					a = s('./components/src/providers/cache.tsx'),
					E = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = s('./components/src/providers/treePath.tsx'),
					K = s('./components/src/hooks/useA11y.tsx'),
					G = s('./components/src/hooks/useLang.tsx'),
					U = s('./components/src/components/Atoms/Image/Image.tsx'),
					q = s('./components/src/utilities/cloneWithProps.tsx'),
					ss = s('./components/src/utilities/defined.ts'),
					es = s('./components/src/utilities/mergeProps.ts'),
					ts = s('./components/src/utilities/mergeStyles.ts'),
					os = s('../../node_modules/color/index.js'),
					as = s.n(os);
				const rs = ({ gapSize: I, columns: h, theme: W, disableOverflowAction: S }) =>
					(0, w.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${h}, 1fr)`,
							gap: I,
							gridAutoRows: '1fr',
							'.ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${h} - ${2 * Math.round((h + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${W?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${h} - ${2 * Math.round((h + 2) / 2)}px)`,
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
								[`:nth-of-type(${h}n)`]: { marginRight: '0' },
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
				function ns(I) {
					const h = (0, E.u)(),
						S = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, b.LU)() },
						L = (0, es.v6)('grid', h, S, I),
						{
							titleText: z,
							onSelect: n,
							hideLabels: J,
							disableOverflowAction: A,
							multiSelect: H,
							overflowButton: j,
							columns: T,
							rows: k,
							hideShowLess: Y,
							overflowButtonInGrid: O,
							disabled: V,
							options: D,
							disableStyles: ls,
							onOverflowButtonClick: X,
							className: N,
							internalClassName: $,
							treePath: F,
							disableA11y: _s,
						} = L,
						is = { image: { internalClassName: 'ss__grid__image', ...(0, ss.s)({ disableStyles: ls }), theme: L?.theme, treePath: F } };
					let p = L.selected;
					const Z = (0, ts.Z)(L, rs);
					p && !Array.isArray(p) && (p = [p]);
					const [C, t] = (0, g.J0)(p || []),
						[M] = (0, g.J0)(p || []);
					try {
						if (p) {
							const o = JSON.stringify(M),
								c = JSON.stringify(p),
								u = JSON.stringify(C);
							o !== c && c !== u && t(p);
						}
					} catch {}
					const R = (o, c) => {
							if (H) {
								let u;
								C.find((v) => v.value === c.value)
									? ((u = [...C]),
									  u.splice(
											u.findIndex((v) => v.value === c.value),
											1
									  ))
									: (u = [...C, c]),
									n && n(o, c, u),
									t(u);
							} else n && n(o, c, [c]), t([c]);
						},
						B = k && T ? T * k : D.length,
						d = Math.max(0, D.length - (B - (O ? 1 : 0))),
						[x, cs] = (0, g.J0)(!!d),
						ds = () => {
							const o = Y ? x : !0,
								c = { showMoreText: { value: O ? `+ ${d}` : 'Show More' }, showLessText: { value: O ? `- ${d}` : 'Show Less' } },
								u = f()(c, L.lang || {}),
								v = (0, G.u)(u, { limited: x, remainder: d });
							return o && d > 0 && D.length !== B
								? (0, e.Y)('div', {
										className: `ss__grid__show-more-wrapper ${O ? 'ss__grid__option' : ''}`,
										onClick: (P) => {
											!A && cs(!x), X && X(P, !!x, d);
										},
										role: 'button',
										ref: (P) => (!_s && !A ? (0, K.iy)(P) : null),
										...(x ? v.showMoreText.attributes : v.showLessText.attributes),
										children: j
											? (0, q.Y)(j, { limited: x, remainder: d, treePath: F })
											: x
											? (0, e.Y)('span', { className: 'ss__grid__show-more', ...v.showMoreText.value })
											: d
											? (0, e.Y)('span', { className: 'ss__grid__show-less', ...v.showLessText.value })
											: (0, e.Y)(_.FK, {}),
								  })
								: (0, e.Y)(_.FK, {});
						};
					return typeof D == 'object' && D?.length
						? (0, e.Y)(a._, {
								children: (0, e.FD)('div', {
									...Z,
									className: r()('ss__grid', V ? 'ss__grid--disabled' : '', N, $),
									children: [
										z && (0, e.Y)('h5', { className: 'ss__grid__title', children: z }),
										(0, e.FD)('div', {
											className: 'ss__grid__options',
											children: [
												D.map((o, c) => {
													const u = C.some((P) => P.value == o.value);
													let v = !1;
													try {
														v = new (as())(
															o.background ? o.background.toLowerCase() : o.backgroundImageUrl ? '' : o.value.toString().toLowerCase()
														).isDark();
													} catch {}
													if (!x || D.length == B || c < B - (O ? 1 : 0))
														return (0, e.Y)('div', {
															className: r()('ss__grid__option', {
																'ss__grid__option--selected': u,
																'ss__grid__option--disabled': o?.disabled,
																'ss__grid__option--unavailable': o?.available === !1,
																'ss__grid__option--dark': v,
															}),
															style: { background: o.background ? o.background : o.backgroundImageUrl ? void 0 : o.value },
															onClick: (P) => !V && !o?.disabled && R(P, o),
															ref: (P) => (0, K.iy)(P),
															title: o.label || o.value.toString(),
															role: 'option',
															'aria-selected': u,
															'aria-disabled': o.disabled,
															children: (0, e.FD)('div', {
																className: r()('ss__grid__option__inner', `ss__grid__option__inner--${l.p(o.value.toString())}`),
																children: [
																	!o.background && o.backgroundImageUrl
																		? (0, e.Y)(U._, { ...is.image, src: o.backgroundImageUrl, alt: o.label || o.value.toString() })
																		: (0, e.Y)(_.FK, {}),
																	J ? (0, e.Y)(_.FK, {}) : (0, e.Y)('label', { className: 'ss__grid__option__label', children: o.label || o.value }),
																],
															}),
														});
												}),
												O ? (0, e.Y)(ds, {}) : (0, e.Y)(_.FK, {}),
											],
										}),
										O ? (0, e.Y)(_.FK, {}) : (0, e.Y)(ds, {}),
									],
								}),
						  })
						: (0, e.Y)(_.FK, {});
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(Q, y, s) {
				s.d(y, { l: () => I });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/preact/dist/preact.module.js'),
					w = s('../../node_modules/classnames/index.js'),
					g = s.n(w),
					i = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = s('./components/src/providers/cache.tsx'),
					m = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = s('./components/src/providers/treePath.tsx'),
					l = s('./components/src/hooks/useDisplaySettings.tsx'),
					a = s('./components/src/hooks/useA11y.tsx'),
					E = s('./components/src/utilities/defined.ts'),
					b = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					G = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					U = s('./components/src/components/Atoms/Image/Image.tsx'),
					q = s('../../node_modules/deepmerge/dist/cjs.js'),
					ss = s.n(q),
					es = s('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					ts = s('../../node_modules/color/index.js'),
					os = s.n(ts),
					as = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					rs = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const ns = ({ theme: h }) =>
					(0, i.AH)({
						'.ss__swatches__slideshow__swatch': {
							boxSizing: 'content-box',
							cursor: 'pointer',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: `1px solid ${h?.variables?.colors?.primary || '#333'}`,
							aspectRatio: '1/1',
							flexDirection: 'column',
							'.ss__swatches__slideshow__swatch__inner': {
								aspectRatio: '1/1',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
							},
							'&.ss__swatches__slideshow__swatch--selected': { border: `2px solid ${h?.variables?.colors?.primary || '#333'}` },
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
				function I(h) {
					const W = (0, m.u)(),
						S = (0, f.LU)(),
						L = {
							0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
							768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
							1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
						},
						z = { type: 'slideshow', hideLabels: !0, treePath: S };
					let n = (0, b.v6)('swatches', W, z, h);
					const J = n.breakpoints || (n.type == 'slideshow' ? L : {}),
						A = (0, l.X)(J);
					if (A && Object.keys(A).length) {
						const t = ss()(n?.theme || {}, A?.theme || {}, { arrayMerge: (M, R) => R });
						n = { ...n, ...A, theme: t };
					}
					const {
							onSelect: H,
							disabled: j,
							options: T,
							hideLabels: k,
							disableStyles: Y,
							className: O,
							internalClassName: V,
							type: D,
							slideshow: ls,
							grid: X,
							treePath: N,
						} = n,
						$ = {
							slideshow: {
								internalClassName: 'ss__swatches__slideshow',
								loop: !1,
								slidesToShow: 6,
								slidesToMove: 1,
								gap: 8,
								showNavigation: !0,
								showPagination: !1,
								autoPlay: !1,
								...ls,
								...(0, E.s)({ breakpoints: J, disableStyles: Y }),
								theme: n?.theme,
								treePath: N,
							},
							grid: {
								internalClassName: 'ss__swatches__grid',
								hideLabels: k,
								overflowButtonInGrid: !0,
								disableOverflowAction: !0,
								rows: 1,
								columns: 6,
								...X,
								...(0, E.s)({ disableStyles: Y }),
								theme: n?.theme,
								treePath: N,
							},
							image: { internalClassName: 'ss__swatches__image', ...(0, E.s)({ disableStyles: Y }), theme: n?.theme, treePath: N },
						},
						F = n.selected,
						_s = (0, K.Z)(n, ns),
						[is, p] = (0, rs.J0)(F || void 0),
						Z = (t, M) => {
							H && H(t, M), p(M);
						},
						C = [];
					return (
						D == 'slideshow' &&
							T.forEach((t) => {
								const M = t.label,
									R = is?.value == t.value;
								let B = !1;
								try {
									B = new (os())(t.background ? t.background.toLowerCase() : t.backgroundImageUrl ? '' : t.value.toString().toLowerCase()).isDark();
								} catch {}
								C.push({
									onClick: (d) => !j && !t?.disabled && Z(d, t),
									content: (0, e.Y)('div', {
										className: g()('ss__swatches__slideshow__swatch', {
											'ss__swatches__slideshow__swatch--selected': R,
											'ss__swatches__slideshow__swatch--disabled': t?.disabled,
											'ss__swatches__slideshow__swatch--unavailable': t?.available === !1,
											'ss__swatches__slideshow__swatch--dark': B,
										}),
										title: M,
										ref: (d) => (0, a.iy)(d),
										'aria-disabled': t.disabled || t?.available === !1,
										role: 'option',
										'aria-selected': R,
										children: (0, e.FD)('div', {
											className: g()(
												'ss__swatches__slideshow__swatch__inner',
												`ss__swatches__slideshow__swatch__inner--${es.p(t.value?.toString())}`
											),
											style: { background: t.background ? t.background : t.backgroundImageUrl ? '' : t.value },
											children: [
												!t.background && t.backgroundImageUrl
													? (0, e.Y)(U._, { ...$.image, src: t.backgroundImageUrl, alt: t.label || t.value?.toString() })
													: (0, e.Y)(_.FK, {}),
												!k && (0, e.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: M || t.value }),
											],
										}),
									}),
								});
							}),
						typeof T == 'object' && T?.length
							? (0, e.Y)(r._, {
									children: (0, e.Y)('div', {
										..._s,
										className: g()('ss__swatches', O, V),
										children:
											D == 'slideshow'
												? (0, e.Y)(as.b, { slides: C, ...$.slideshow })
												: (0, e.Y)(G.x, {
														...$.grid,
														options: T,
														onSelect: (t, M) => {
															!j && Z(t, M);
														},
														selected: F,
												  }),
									}),
							  })
							: (0, e.Y)(_.FK, {})
					);
				}
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(Q, y, s) {
				s.d(y, { I: () => g, r: () => w });
				var e = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = s('../../node_modules/dequal/dist/index.mjs');
				function w(i) {
					const r = (0, e.li)(i),
						m = (0, e.li)(0);
					return (0, _.j)(i, r.current) || ((r.current = i), (m.current += 1)), (0, e.Kr)(() => r.current, [m.current]);
				}
				function g(i, r) {
					return (0, e.vJ)(i, [w(r)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(Q, y, s) {
				s.d(y, { Q: () => i, X: () => g });
				var e = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = s('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js'),
					w = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function g(r) {
					if (!r || !Object.keys(r).length) return;
					const [m, f] = (0, e.J0)(i(r));
					let l;
					const a = () => {
						function E() {
							f(i(r));
						}
						(l = (0, _.s)(() => {
							E();
						}, 50)),
							window.addEventListener('resize', l);
					};
					return (
						(0, e.vJ)(() => (a(), () => window.removeEventListener('resize', l)), []),
						(0, w.I)(() => {
							f(i(r)), a();
						}, [r]),
						m
					);
				}
				const i = (r) => {
					let m;
					const f = window.innerWidth,
						l = Object.keys(r)
							.map((a) => +a)
							.sort((a, E) => a - E)
							.map((a) => ({ [a]: r[a] }));
					if (l.length) {
						for (let a = 0; a < l.length; a++) {
							const E = l[a],
								b = parseInt(Object.keys(E)[0]);
							if (a + 1 === l.length || (a === 0 && f < b)) {
								m = l[a][b];
								break;
							} else {
								const U = parseInt(Object.keys(l[a + 1])[0]);
								if (f >= b && f < U) {
									m = l[a][b];
									break;
								}
							}
						}
						return m;
					}
					return m;
				};
			},
		},
	]);
})();
