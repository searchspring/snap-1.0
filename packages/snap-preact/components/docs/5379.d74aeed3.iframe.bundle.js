'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5379],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(S, d, t) {
				t.d(d, { P: () => s });
				const s = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(S, d, t) {
				t.d(d, { p: () => s });
				function s(a) {
					if (typeof a != 'string') return a;
					let o = a.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'./components/src/components/Atoms/Button/Button.tsx'(S, d, t) {
				t.d(d, { $: () => R });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = t('../../node_modules/classnames/index.js'),
					l = t.n(o),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = t('./components/src/providers/treePath.tsx'),
					I = t('./components/src/hooks/useA11y.tsx'),
					b = t('./components/src/utilities/cloneWithProps.tsx'),
					r = t('./components/src/utilities/defined.ts'),
					M = t('./components/src/utilities/mergeProps.ts'),
					B = t('./components/src/utilities/mergeStyles.ts'),
					O = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					H = t('./components/src/hooks/useLang.tsx'),
					J = t('../../node_modules/deepmerge/dist/cjs.js'),
					w = t.n(J),
					A = t('../../node_modules/color/index.js'),
					F = t.n(A);
				const D = ({ native: L, color: P, backgroundColor: f, borderColor: C, theme: E }) => {
						const u = new (F())(f || P || E?.variables?.colors?.primary || void 0).lightness(95);
						return L
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: P || E?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: f || '#fff',
									border: `1px solid ${C || P || E?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: u.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					R = (0, c.PA)((L) => {
						const P = (0, i.u)(),
							C = { disableA11y: !1, treePath: (0, N.LU)() },
							E = (0, M.v6)('button', P, C, L),
							{
								content: u,
								children: p,
								disabled: g,
								native: y,
								onClick: U,
								disableA11y: K,
								disableStyles: T,
								className: Z,
								internalClassName: $,
								icon: m,
								lang: W,
								treePath: _,
								style: et,
								styleScript: Q,
								themeStyleScript: q,
								...v
							} = E,
							Y = { icon: { internalClassName: 'ss__button__icon', ...(0, r.s)({ disableStyles: T }), theme: E?.theme, treePath: _ } },
							G = {
								...(0, B.Z)(E, D),
								className: l()('ss__button', { 'ss__button--native': y, 'ss__button--disabled': g }, Z, $),
								disabled: g,
								onClick: (z) => !g && U && U(z),
								...v,
							},
							V = { ref: (z) => (0, I.iy)(z) },
							X = {},
							h = w()(X, W || {}),
							x = (0, H.u)(h, {});
						return u || p || m || W?.button?.value
							? (0, s.Y)(e._, {
									children: y
										? (0, s.FD)('button', {
												...G,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...x.button?.all,
														children: [(0, b.Y)(u, { treePath: _ }), (0, b.Y)(p, { treePath: _ })],
													}),
													m && (0, s.Y)(O.I, { ...Y.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  })
										: (0, s.FD)('div', {
												...(K ? {} : V),
												role: 'button',
												'aria-disabled': g,
												...G,
												...x.button?.attributes,
												children: [
													u || p || x.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...x.button?.value,
																children: [(0, b.Y)(u, { treePath: _ }), (0, b.Y)(p, { treePath: _ })],
														  })
														: void 0,
													m && (0, s.Y)(O.I, { ...Y.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(S, d, t) {
				t.d(d, { m: () => w });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/compat/dist/compat.module.js'),
					o = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					e = t.n(c),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					N = t('./components/src/providers/cache.tsx'),
					I = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = t('./components/src/providers/treePath.tsx'),
					r = t('./components/src/hooks/useClickOutside.tsx'),
					M = t('./components/src/utilities/cloneWithProps.tsx'),
					B = t('./components/src/utilities/mergeProps.ts'),
					O = t('./components/src/utilities/mergeStyles.ts'),
					H = t('./components/src/hooks/useA11y.tsx');
				const J = ({ disableOverlay: A }) =>
						(0, l.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: A ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${A ? 'default' : 'pointer'}` },
							'.ss__dropdown__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
					w = (0, i.PA)((A) => {
						const F = (0, I.u)(),
							R = { startOpen: !1, disableA11y: !1, treePath: (0, b.LU)() },
							L = (0, B.v6)('dropdown', F, R, A),
							{
								button: P,
								content: f,
								children: C,
								disabled: E,
								open: u,
								toggleOnHover: p,
								onMouseEnter: g,
								onMouseLeave: y,
								disableClick: U,
								onClick: K,
								onToggle: T,
								focusTrapContent: Z,
								startOpen: $,
								disableClickOutside: m,
								disableA11y: W,
								className: _,
								internalClassName: et,
								treePath: Q,
								usePortal: q,
							} = L;
						let v, Y;
						const tt = u === void 0;
						tt ? ([v, Y] = (0, o.J0)($)) : (v = u);
						const [G, V] = (0, o.J0)(!1),
							X = (0, o.li)(null),
							h = (0, o.li)(null),
							[x, z] = (0, o.J0)({ top: 0, left: 0, width: 0 });
						let st;
						m ||
							(st = (0, r.L)((n) => {
								(q && h.current && h.current.contains(n.target)) || (v && (E || (tt && Y && Y(!1), T && T(n, !1))));
							})),
							(0, o.vJ)(() => {
								if (q && v) {
									const n = () => {
										if (X.current) {
											const k = X.current.getBoundingClientRect();
											z({ top: k.bottom + window.scrollY, left: k.left + window.scrollX, width: k.width });
										}
									};
									return (
										n(),
										window.addEventListener('resize', n),
										window.addEventListener('scroll', n, !0),
										() => {
											window.removeEventListener('resize', n), window.removeEventListener('scroll', n, !0);
										}
									);
								}
							}, [q, v]);
						const j = (n, k) => {
								tt &&
									Y &&
									Y((rt) => {
										const at = k ?? !rt;
										return at != rt && T && T(n, at), at;
									});
							},
							ot = (0, O.Z)(L, J),
							it = {
								onMouseEnter:
									(p || g) &&
									((n) => {
										G || (p && !E && j(n, !0), g && g(n));
									}),
								onMouseLeave:
									(p || y) &&
									((n) => {
										G || (p && !E && j(n, !1), y && y(n));
									}),
							},
							nt = (0, s.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (n) => {
									(h.current = n),
										W ||
											(0, H.iy)(n, 0, !!Z, (k) => {
												tt ? j(k) : K && K(k);
											});
								},
								children: [(0, M.Y)(f, { open: v, toggleOpen: j, treePath: Q }), (0, M.Y)(C, { open: v, toggleOpen: j, treePath: Q })],
							});
						return (0, s.Y)(N._, {
							children: (0, s.FD)('div', {
								...ot,
								className: e()('ss__dropdown', { 'ss__dropdown--open': v }, _, et),
								ref: st,
								...it,
								children: [
									(0, s.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (n) => {
											(X.current = n), W || (0, H.iy)(n);
										},
										'aria-expanded': v,
										role: 'button',
										onTouchStart: () => {
											V(!0);
										},
										onClick: (n) => {
											!E && !U && (j(n), K && K(n)),
												setTimeout(() => {
													V(!1);
												}, 300);
										},
										children: (0, M.Y)(P, { open: v, toggleOpen: j, treePath: Q }),
									}),
									q
										? v &&
										  (f || C) &&
										  (0, a.createPortal)(
												(0, s.Y)('div', {
													className: e()('ss__dropdown__portal', _, et, { 'ss__dropdown__portal--open': v }),
													css: ot.css,
													style: { position: 'absolute', top: x.top, left: x.left, width: x.width, zIndex: 9999 },
													children: nt,
												}),
												document.body
										  )
										: (f || C) && nt,
								],
							}),
						});
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(S, d, t) {
				t.d(d, { _: () => B, t: () => r });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = t('./components/src/providers/treePath.tsx'),
					I = t('./components/src/utilities/mergeProps.ts'),
					b = t('./components/src/utilities/mergeStyles.ts');
				const r = '//cdn.athoscommerce.net/snap/images/fallback.png',
					M = ({ height: O }) =>
						(0, o.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: O || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function B(O) {
					const H = (0, i.u)(),
						J = (0, N.LU)(),
						w = { fallback: r, lazy: !0, treePath: J },
						A = (0, I.v6)('image', H, w, O),
						{
							alt: F,
							src: D,
							fallback: R,
							title: L,
							hoverSrc: P,
							lazy: f,
							onMouseOver: C,
							onMouseOut: E,
							onError: u,
							onLoad: p,
							onClick: g,
							className: y,
							internalClassName: U,
						} = A,
						[K, T] = (0, a.J0)(!1),
						[Z, $] = (0, a.J0)(!1),
						m = (0, a.li)('');
					(0, a.vJ)(() => {
						m.current = D;
					}),
						m.current && m.current != D && T(!1);
					const W = (0, b.Z)(A, M);
					return (0, s.Y)(e._, {
						children: (0, s.Y)('div', {
							...W,
							className: c()('ss__image', { 'ss__image--hidden': !K }, y, U),
							children: (0, s.Y)('img', {
								src: (Z ? P : D) || R,
								alt: F,
								title: L || F,
								loading: f ? 'lazy' : void 0,
								onLoad: (_) => {
									T(!0), p && p(_);
								},
								onClick: (_) => g && g(_),
								onError: (_) => {
									(_.target.src = R || ''), u && u(_);
								},
								onMouseOver: (_) => {
									P && $(!0), C && C(_);
								},
								onMouseOut: (_) => {
									P && $(!1), E && E(_);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(S, d, t) {
				t.d(d, { S: () => F });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/utilities/defined.ts'),
					N = t('./components/src/utilities/mergeProps.ts'),
					I = t('./components/src/utilities/mergeStyles.ts'),
					b = t('./components/src/providers/cache.tsx'),
					r = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = t('./components/src/providers/treePath.tsx'),
					B = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = t('./components/src/hooks/useA11y.tsx'),
					H = t('./components/src/hooks/useLang.tsx'),
					J = t('../../node_modules/deepmerge/dist/cjs.js'),
					w = t.n(J);
				const A = ({ size: D, color: R, theme: L, native: P }) => {
						const f = isNaN(Number(D)) ? D : `${D}px`;
						return P
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: f,
									width: f,
									border: `1px solid ${R || L?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${D} - 30%)`, height: `calc(${D} - 30%)` },
							  });
					},
					F = (0, e.PA)((D) => {
						const R = (0, r.u)(),
							P = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, M.LU)() },
							f = (0, N.v6)('checkbox', R, P, D),
							{
								checked: C,
								color: E,
								disabled: u,
								icon: p,
								iconColor: g,
								onClick: y,
								size: U,
								startChecked: K,
								native: T,
								disableA11y: Z,
								disableStyles: $,
								className: m,
								internalClassName: W,
								theme: _,
								treePath: et,
								lang: Q,
								style: q,
								styleScript: v,
								themeStyleScript: Y,
								name: tt,
								...G
							} = f,
							V = isNaN(Number(U)) ? U : `${U}px`,
							X = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: g || E || _?.variables?.colors?.primary, disableStyles: $, icon: p, size: V && `calc(${V} - 30%)` }),
									theme: f.theme,
									treePath: et,
								},
							};
						let h, x;
						const z = C === void 0;
						z ? ([h, x] = (0, a.J0)(K)) : (h = C);
						const st = (n) => {
								u || (z && x && x((k) => !k), y && y(n));
							},
							j = (0, I.Z)(f, A),
							ot = { checkbox: {} },
							it = w()(ot, Q || {}),
							nt = (0, H.u)(it, { checkedState: h, disabled: u });
						return (0, s.Y)(b._, {
							children: T
								? (0, s.Y)('input', {
										...j,
										className: c()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': h }, m, W),
										type: 'checkbox',
										'aria-checked': h,
										onClick: (n) => st(n),
										disabled: u,
										checked: h,
								  })
								: (0, s.Y)('span', {
										...j,
										className: c()('ss__checkbox', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': h }, m, W),
										onClick: (n) => st(n),
										ref: (n) => (Z ? null : (0, O.iy)(n)),
										'aria-disabled': u,
										role: 'checkbox',
										'aria-checked': h,
										...G,
										...nt.checkbox.all,
										children: h
											? (0, s.Y)(B.I, { ...X.icon, ...(typeof p == 'string' ? { icon: p } : p) })
											: (0, s.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(S, d, t) {
				t.d(d, { DH: () => l, aZ: () => o, iy: () => c });
				const s = 9,
					a = 27,
					o = 'ss-a11y',
					l =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(e, i, N, I) {
					const b = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${b}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = b),
							(r.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(r);
					}
					e &&
						!e.attributes?.[o] &&
						(e.setAttribute(o, !0),
						e.setAttribute('tabIndex', `${i || 0}`),
						e.addEventListener('keydown', (r) => {
							(r.code === 'Space' || r.code === 'Enter') && e.click();
						}),
						N &&
							e.addEventListener('keydown', function (r) {
								const M = e.querySelectorAll(l),
									B = M[0],
									O = M[M.length - 1];
								if (r.keyCode == a) {
									e.focus(), I && I(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === s) &&
									(r.shiftKey
										? document.activeElement === B && (O.focus(), r.preventDefault())
										: document.activeElement === O && (B.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(S, d, t) {
				t.d(d, { L: () => a });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(o) {
					const l = (0, s.li)(),
						c = (0, s.li)();
					return (
						(0, s.vJ)(() => {
							l.current = o;
						}),
						(0, s.vJ)(() => {
							return document.addEventListener('click', e), () => document.removeEventListener('click', e);
							function e(i) {
								c.current && l.current && !c.current.contains(i.target) && l.current(i);
							}
						}, []),
						c
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(S, d, t) {
				t.d(d, { u: () => s });
				const s = (a, o) => {
					const l = {};
					return (
						Object.keys(a).forEach((c) => {
							const e = a && a[c],
								i = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: e.value(o) } })
										: (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((i.attributes = { 'ss-lang': c }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = e.attributes['aria-label'](o))
											: (i.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](o))
											: (i.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (i.attributes.title = e.attributes.title(o))
											: (i.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (i.attributes.alt = e.attributes.alt(o)) : (i.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = e.attributes.placeholder(o))
											: (i.attributes.placeholder = e.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': c })),
								(l[c] = i);
						}),
						l
					);
				};
			},
			'./components/src/utilities/defined.ts'(S, d, t) {
				t.d(d, { s: () => s });
				function s(a) {
					const o = {};
					return (
						Object.keys(a).map((l) => {
							a[l] !== void 0 && (o[l] = a[l]);
						}),
						o
					);
				}
			},
		},
	]);
})();
