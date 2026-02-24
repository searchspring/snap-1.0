'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(k, E, e) {
				e.d(E, { a: () => G });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					L = e('../../node_modules/classnames/index.js'),
					W = e.n(L),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/providers/cache.tsx'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/treePath.tsx'),
					U = e('./components/src/hooks/useClickOutside.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/hooks/useA11y.tsx'),
					H = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					Z = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js');
				const X = () =>
						(0, r.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					G = (0, c.PA)((Q) => {
						const u = (0, d.u)(),
							B = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, m.LU)() },
							l = (0, f.v6)('modal', u, B, Q),
							{
								button: S,
								content: j,
								buttonSelector: M,
								children: $,
								disabled: o,
								open: D,
								onClick: x,
								lockScroll: K,
								startOpen: N,
								disableClickOutside: C,
								disableA11y: F,
								className: V,
								internalClassName: q,
								disableStyles: ee,
								overlayColor: J,
								onOverlayClick: y,
								treePath: I,
							} = l,
							A = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (n) => {
										y && y(n), h();
									},
									...(0, b.s)({ disableStyles: ee, color: J }),
									theme: l?.theme,
									treePath: I,
								},
							};
						let s, g;
						const p = D === void 0;
						p ? ([s, g] = (0, v.J0)(N)) : (s = D);
						let w;
						C ||
							(w = (0, U.L)(() => {
								s && (o || (p && g && g(!1)));
							}));
						const h = () => {
								p && g && g((n) => !n);
							},
							te = (0, a.Z)(l, X);
						return (
							(0, v.vJ)(
								() => (
									s && K ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[s, K]
							),
							(0, v.vJ)(() => {
								const n = M ? (typeof M == 'string' ? document.querySelector(M) : M) : null,
									Y = (0, Z.s)(() => {
										setTimeout(() => {
											s && K ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									_ = (i) => {
										h(), x && x(i);
									};
								return (
									n && (o || n.addEventListener('click', _)),
									window.addEventListener('resize', Y),
									() => {
										window.removeEventListener('resize', Y), n && n.removeEventListener('click', _);
									}
								);
							}, []),
							(0, t.Y)(T._, {
								children: (0, t.FD)('div', {
									...te,
									className: W()('ss__modal', { 'ss__modal--open': s }, { 'ss__modal--disabled': o }, V, q),
									ref: w,
									children: [
										!M &&
											S &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (n) => (F ? null : (0, R.iy)(n)),
												'aria-expanded': s,
												role: 'button',
												onClick: (n) => {
													o || (h(), x && x(n));
												},
												children: (0, P.Y)(S, { open: s, toggleOpen: h, treePath: I }),
											}),
										(j || $) &&
											s &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (n) => (F ? null : (0, R.iy)(n)),
												children: [(0, P.Y)(j, { open: s, toggleOpen: h, treePath: I }), (0, P.Y)($, { open: s, toggleOpen: h, treePath: I })],
											}),
										(0, t.Y)(H.h, { ...A.overlay, active: !!s }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(k, E, e) {
				e.d(E, { f: () => Q });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/dist/preact.module.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					b = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					f = e('../../node_modules/classnames/index.js'),
					a = e.n(f),
					R = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					H = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js'),
					Z = e('./components/src/hooks/useA11y.tsx'),
					X = e('./components/src/hooks/useAcRenderedInput.tsx');
				const G = ({ inputBounds: u, offset: O, renderInput: B, width: l }) =>
						(0, W.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${O?.left || 0}px)`,
								top: `calc(0px + ${B ? '0px' : `${u.height}px`} + ${O?.top || 0}px)`,
								width: `calc(100% + ${O?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								'.ss__search-input': { background: '#fff', width: `${u.width}px`, height: `${u.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: l,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${u.top || 0}px - ${B ? `${u.height}px` : '0px'} + ${O?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					Q = (0, L.PA)((u) => {
						const O = (0, U.u)(),
							B = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							l = (0, T.v6)('autocompleteFixed', O, B, u),
							[S, j] = (0, r.J0)(!1),
							[M, $] = (0, r.J0)('query');
						let o = l.input,
							D = l.buttonSelector,
							x;
						if (o) {
							typeof o == 'string' && (o = document.querySelector(o));
							const i = o?.getAttribute('name');
							i && ($(i), l.renderInput && o.setAttribute('name', '')), (x = o?.getAttribute('placeholder'));
						}
						!D && o && (D = o);
						const {
								layout: K,
								disableStyles: N,
								controller: C,
								renderInput: F,
								overlayColor: V,
								className: q,
								internalClassName: ee,
								offset: J,
								treePath: y,
							} = l,
							I = (0, r.li)(null),
							A = () => {
								C.setFocused(), j(!1);
							},
							s = {
								autocompleteLayout: { layout: K, onReset: () => A(), ...(0, c.s)({ disableStyles: N }), theme: l?.theme, treePath: y },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: D,
									lockScroll: !1,
									onOverlayClick: A,
									open: S,
									...(0, c.s)({ overlayColor: V, disableStyles: N }),
									theme: l?.theme,
									treePath: y,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input',
									placeholderText: x || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = C.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => A() },
									inputName: M,
									...(0, c.s)({ disableStyles: N }),
									theme: l?.theme,
									treePath: `${y} modal`,
								},
							},
							g = (i) => {
								if (i) {
									const z = i.getBoundingClientRect();
									return {
										top: z.top + window.scrollY + (J?.top || 0),
										left: z.left + window.scrollX + (J?.left || 0),
										width: z.width,
										height: z.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[p, w] = (0, r.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							h = () => {
								const i = g(o);
								(p.height !== i.height || p.left !== i.left || p.top !== i.top || p.width !== i.width) && w(i);
							};
						h();
						const te = (0, H.s)(() => {
							h();
						}, 10);
						(0, r.vJ)(() => {
							window.addEventListener('resize', te);
						}, []);
						const n = (0, d.Z)({ ...l, inputBounds: p }, G);
						let Y;
						o && (Y = (0, X.x)({ input: o, controller: C, renderedInputRef: I, renderInput: !!F, buttonSelector: D, setActive: j }));
						const _ = { ...l };
						return (
							delete _.width,
							delete _.className,
							delete _.internalClassName,
							delete _.style,
							delete _.styleScript,
							delete _.themeStyleScript,
							K?.length && S
								? (0, t.Y)(m._, {
										children: (0, t.Y)('div', {
											...n,
											className: a()('ss__autocomplete-fixed', q, ee),
											children: (0, t.Y)(b.a, {
												...s.modal,
												children: (0, t.Y)(v.FK, {
													children: (0, t.FD)('div', {
														className: 'ss__autocomplete-fixed__inner',
														ref: (i) => (0, Z.iy)(i, 0, !0, A),
														children: [
															F ? (0, t.Y)(R.D, { ...s.searchInput, value: C.store.state.input || '', inputRef: I }) : (0, t.Y)(t.FK, {}),
															(0, t.Y)('div', {
																className: 'ss__autocomplete-fixed__inner__layout-wrapper',
																children: (0, t.Y)(P.h, { ..._, ...s.autocompleteLayout, input: Y, controller: C, treePath: `${y} modal` }),
															}),
														],
													}),
												}),
											}),
										}),
								  })
								: (0, t.Y)(v.FK, {})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(k, E, e) {
				e.d(E, { x: () => v });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function v({ input: r, controller: L, renderInput: W, buttonSelector: c, renderedInputRef: T, setActive: d }) {
					const [m, U] = (0, t.J0)(r),
						[P, b] = (0, t.J0)(!1),
						f = () => {
							d && d(!0),
								setTimeout(async () => {
									P || (U(T.current), (L.config.selector = '.ss__search-input__input'), await L.bind(), T?.current?.focus()), b(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (W && c) {
								let a;
								typeof c == 'string' ? (a = document.querySelector(c)) : (a = c),
									a &&
										(a.addEventListener('click', (R) => {
											R.stopPropagation(), f();
										}),
										a.addEventListener('focus', () => f()),
										a.addEventListener('select', () => f()));
							} else
								d &&
									(r.addEventListener('click', (a) => {
										a.stopPropagation(), d(!0);
									}),
									r.addEventListener('focus', () => d(!0)),
									r.addEventListener('select', () => d(!0)));
						}, []),
						(0, t.vJ)(() => {
							r !== m &&
								m?.addEventListener('input', () => {
									r.value = m.value;
								});
						}, [m]),
						m
					);
				}
			},
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(k, E, e) {
				e.r(E), e.d(E, { AutocompleteFixed: () => t.f });
				var t = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
