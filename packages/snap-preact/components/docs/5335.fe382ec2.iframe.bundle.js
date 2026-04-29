'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(te, O, e) {
				e.d(O, { a: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					S = e('../../node_modules/classnames/index.js'),
					C = e.n(S),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					F = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/providers/snap.tsx'),
					$ = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useClickOutside.tsx'),
					z = e('./components/src/hooks/useComponent.tsx'),
					A = e('./components/src/utilities/cloneWithProps.tsx'),
					J = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					X = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const d = () =>
						(0, b.AH)({
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
					m = (0, j.PA)((M) => {
						const i = (0, N.u)(),
							B = (0, Y.uk)(),
							G = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, $.LU)() },
							n = (0, H.v6)('modal', i, G, M),
							{
								button: E,
								content: y,
								buttonSelector: u,
								children: f,
								disabled: c,
								open: I,
								onClick: D,
								lockScroll: g,
								startOpen: Q,
								disableClickOutside: K,
								disableA11y: v,
								className: U,
								internalClassName: P,
								disableStyles: L,
								overlayColor: V,
								onOverlayClick: p,
								treePath: x,
								customComponent: T,
							} = n;
						if (T) {
							const o = (0, z.x)(B?.templates?.library.import.component.modal || {}, T);
							if (o) return (0, t.Y)(o, { ...n });
						}
						const q = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (o) => {
									p && p(o), a();
								},
								...(0, J.s)({ disableStyles: L, color: V }),
								theme: n?.theme,
								treePath: x,
							},
						};
						let l, h;
						const r = I === void 0;
						r ? ([l, h] = (0, _.J0)(Q)) : (l = I);
						let s;
						K ||
							(s = (0, w.L)(() => {
								l && (c || (r && h && h(!1)));
							}));
						const a = () => {
								r && h && h((o) => !o);
							},
							ee = (0, k.Z)(n, d);
						return (
							(0, _.vJ)(
								() => (
									l && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[l, g]
							),
							(0, _.vJ)(() => {
								const o = u ? (typeof u == 'string' ? document.querySelector(u) : u) : null,
									oe = (0, X.s)(() => {
										setTimeout(() => {
											l && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									se = (ne) => {
										a(), D && D(ne);
									};
								return (
									o && (c || o.addEventListener('click', se)),
									window.addEventListener('resize', oe),
									() => {
										window.removeEventListener('resize', oe), o && o.removeEventListener('click', se);
									}
								);
							}, []),
							(0, t.Y)(F._, {
								children: (0, t.FD)('div', {
									...ee,
									className: C()('ss__modal', { 'ss__modal--open': l }, { 'ss__modal--disabled': c }, U, P),
									ref: s,
									children: [
										!u &&
											E &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (o) => (v ? null : (0, R.iy)(o)),
												'aria-expanded': l,
												role: 'button',
												onClick: (o) => {
													c || (a(), D && D(o));
												},
												children: (0, A.Y)(E, { open: l, toggleOpen: a, treePath: x }),
											}),
										(y || f) &&
											l &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (o) => (v ? null : (0, R.iy)(o)),
												children: [(0, A.Y)(y, { open: l, toggleOpen: a, treePath: x }), (0, A.Y)(f, { open: l, toggleOpen: a, treePath: x })],
											}),
										(0, t.Y)(Z.h, { ...q.overlay, active: !!l }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(te, O, e) {
				e.d(O, { f: () => X });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/mergeStyles.ts'),
					N = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					w = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					z = e('../../node_modules/classnames/index.js'),
					A = e.n(z),
					J = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					H = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					k = e('./components/src/hooks/useA11y.tsx'),
					R = e('./components/src/hooks/useAcRenderedInput.tsx');
				const Z = ({ inputBounds: d, offset: m, renderInput: M, width: i }) =>
						(0, S.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							pointerEvents: 'none',
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${m?.left || 0}px)`,
								top: `calc(0px + ${M ? '0px' : `${d.height}px`} + ${m?.top || 0}px)`,
								width: `calc(100% + ${m?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${d.width}px`, height: `${d.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: i,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${d.top || 0}px - ${M ? `${d.height}px` : '0px'} + ${m?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					X = (0, b.PA)((d) => {
						const m = (0, Y.u)(),
							M = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							i = (0, j.v6)('autocompleteFixed', m, M, d),
							[B, W] = (0, _.J0)(!1),
							G = '';
						let n = i.input,
							E = i.buttonSelector,
							y;
						n && (typeof n == 'string' && (n = document.querySelector(n)), (y = n?.getAttribute('placeholder'))), !E && n && (E = n);
						const {
								layout: u,
								disableStyles: f,
								controller: c,
								renderInput: I,
								overlayColor: D,
								className: g,
								internalClassName: Q,
								offset: K,
								treePath: v,
							} = i,
							U = (0, _.li)(null);
						(0, _.vJ)(() => {
							const s = (a, ee) => {
								c.store.state.focusedInput || W(!1), ee();
							};
							return (
								c.eventManager.on('focusChange', s),
								() => {
									c.eventManager.events.focusChange?.remove(s);
								}
							);
						}, []);
						const P = () => {
								c.setFocused(), W(!1);
							},
							L = {
								autocompleteLayout: { layout: u, onReset: () => P(), ...(0, C.s)({ disableStyles: f }), theme: i?.theme, treePath: v },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: E,
									lockScroll: !1,
									onOverlayClick: P,
									open: B,
									...(0, C.s)({ overlayColor: D, disableStyles: f }),
									theme: i?.theme,
									treePath: v,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: y || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = c.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => P() },
									inputName: G,
									...(0, C.s)({ disableStyles: f }),
									theme: i?.theme,
									treePath: `${v} modal`,
								},
							},
							V = (s) => {
								if (s) {
									const a = s.getBoundingClientRect();
									return {
										top: a.top + window.scrollY + (K?.top || 0),
										left: a.left + window.scrollX + (K?.left || 0),
										width: a.width,
										height: a.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[p, x] = (0, _.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							T = () => {
								const s = V(n);
								(p.height !== s.height || p.left !== s.left || p.top !== s.top || p.width !== s.width) && x(s);
							};
						T();
						const q = (0, H.s)(() => {
							T();
						}, 10);
						(0, _.vJ)(() => {
							window.addEventListener('resize', q);
						}, []);
						const l = (0, F.Z)({ ...i, inputBounds: p }, Z);
						let h;
						n && (h = (0, R.x)({ input: n, controller: c, renderedInputRef: U, renderInput: !!I, buttonSelector: E, setActive: W }));
						const r = { ...i };
						return (
							delete r.width,
							delete r.className,
							delete r.internalClassName,
							delete r.style,
							delete r.styleScript,
							delete r.themeStyleScript,
							u?.length && B
								? (0, t.Y)(N._, {
										children: (0, t.Y)('div', {
											...l,
											className: A()('ss__autocomplete-fixed', g, Q),
											children: (0, t.Y)(w.a, {
												...L.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (s) => (0, k.iy)(s, 0, !0, P),
													children: [
														I ? (0, t.Y)(J.D, { ...L.searchInput, value: c.store.state.input || '', inputRef: U }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, t.Y)($.h, { ...r, ...L.autocompleteLayout, input: h, controller: c, treePath: `${v} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(te, O, e) {
				e.r(O), e.d(O, { AutocompleteFixed: () => t.f });
				var t = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
