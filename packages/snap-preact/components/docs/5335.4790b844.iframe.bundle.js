'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(te, M, e) {
				e.d(M, { a: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					j = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					N = e('../../node_modules/classnames/index.js'),
					A = e.n(N),
					F = e('../../node_modules/mobx-react-lite/es/index.js'),
					Y = e('./components/src/providers/cache.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					w = e('./components/src/providers/snap.tsx'),
					z = e('./components/src/providers/treePath.tsx'),
					J = e('./components/src/hooks/useClickOutside.tsx'),
					H = e('./components/src/hooks/useComponent.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					k = e('./components/src/utilities/defined.ts'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/hooks/useA11y.tsx'),
					G = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					Q = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const _ = () =>
						(0, j.AH)({
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
					m = (0, F.PA)((f) => {
						const c = (0, $.u)(),
							B = (0, w.uk)(),
							V = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, z.LU)() },
							D = (0, Z.v6)('modal', c, V, f),
							{
								button: n,
								content: h,
								buttonSelector: u,
								children: I,
								disabled: p,
								open: i,
								onClick: E,
								lockScroll: g,
								startOpen: q,
								disableClickOutside: ee,
								disableA11y: L,
								className: x,
								internalClassName: K,
								disableStyles: v,
								overlayColor: T,
								onOverlayClick: U,
								treePath: r,
								customComponent: b,
							} = D;
						if (b) {
							const o = (0, H.x)(B?.templates?.library.import.component.modal || {}, b);
							if (o) return (0, s.Y)(o, { ...D });
						}
						const S = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (o) => {
									U && U(o), t();
								},
								...(0, k.s)({ disableStyles: v, color: T }),
								theme: D?.theme,
								treePath: r,
							},
						};
						let l, P;
						const C = i === void 0;
						C ? ([l, P] = (0, a.J0)(q)) : (l = i);
						let d;
						ee ||
							(d = (0, J.L)(() => {
								l && (p || (C && P && P(!1)));
							}));
						const t = () => {
								C && P && P((o) => !o);
							},
							O = (0, X.Z)(D, _);
						return (
							(0, a.vJ)(
								() => (
									l && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[l, g]
							),
							(0, a.vJ)(() => {
								const o = u ? (typeof u == 'string' ? document.querySelector(u) : u) : null,
									oe = (0, Q.s)(() => {
										setTimeout(() => {
											l && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									se = (ne) => {
										t(), E && E(ne);
									};
								return (
									o && (p || o.addEventListener('click', se)),
									window.addEventListener('resize', oe),
									() => {
										window.removeEventListener('resize', oe), o && o.removeEventListener('click', se);
									}
								);
							}, []),
							(0, s.Y)(Y._, {
								children: (0, s.FD)('div', {
									...O,
									className: A()('ss__modal', { 'ss__modal--open': l }, { 'ss__modal--disabled': p }, x, K),
									ref: d,
									children: [
										!u &&
											n &&
											(0, s.Y)('div', {
												className: 'ss__modal__button',
												ref: (o) => (L ? null : (0, R.iy)(o)),
												'aria-expanded': l,
												role: 'button',
												onClick: (o) => {
													p || (t(), E && E(o));
												},
												children: (0, y.Y)(n, { open: l, toggleOpen: t, treePath: r }),
											}),
										(h || I) &&
											l &&
											(0, s.FD)('div', {
												className: 'ss__modal__content',
												ref: (o) => (L ? null : (0, R.iy)(o)),
												children: [(0, y.Y)(h, { open: l, toggleOpen: t, treePath: r }), (0, y.Y)(I, { open: l, toggleOpen: t, treePath: r })],
											}),
										(0, s.Y)(G.h, { ...S.overlay, active: !!l }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(te, M, e) {
				e.d(M, { f: () => Q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = e('./components/src/utilities/defined.ts'),
					F = e('./components/src/utilities/mergeProps.ts'),
					Y = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					J = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					H = e('../../node_modules/classnames/index.js'),
					y = e.n(H),
					k = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					Z = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					X = e('./components/src/hooks/useA11y.tsx'),
					R = e('./components/src/hooks/useAcRenderedInput.tsx');
				const G = ({ inputBounds: _, offset: m, renderInput: f, width: c }) =>
						(0, N.AH)({
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
								top: `calc(0px + ${f ? '0px' : `${_.height}px`} + ${m?.top || 0}px)`,
								width: `calc(100% + ${m?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${_.width}px`, height: `${_.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: c,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${_.top || 0}px - ${f ? `${_.height}px` : '0px'} + ${m?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					Q = (0, j.PA)((_) => {
						const m = (0, w.u)(),
							f = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							c = (0, F.v6)('autocompleteFixed', m, f, _),
							[B, W] = (0, a.J0)(!1),
							[V, D] = (0, a.J0)('query');
						let n = c.input,
							h = c.buttonSelector,
							u;
						if (n) {
							typeof n == 'string' && (n = document.querySelector(n));
							const t = n?.getAttribute('name');
							t && (D(t), c.renderInput && n.setAttribute('name', '')), (u = n?.getAttribute('placeholder'));
						}
						!h && n && (h = n);
						const {
								layout: I,
								disableStyles: p,
								controller: i,
								renderInput: E,
								overlayColor: g,
								className: q,
								internalClassName: ee,
								offset: L,
								treePath: x,
							} = c,
							K = (0, a.li)(null);
						(0, a.vJ)(() => {
							const t = (O, o) => {
								i.store.state.focusedInput || W(!1), o();
							};
							return (
								i.eventManager.on('focusChange', t),
								() => {
									i.eventManager.events.focusChange?.remove(t);
								}
							);
						}, []);
						const v = () => {
								i.setFocused(), W(!1);
							},
							T = {
								autocompleteLayout: { layout: I, onReset: () => v(), ...(0, A.s)({ disableStyles: p }), theme: c?.theme, treePath: x },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: h,
									lockScroll: !1,
									onOverlayClick: v,
									open: B,
									...(0, A.s)({ overlayColor: g, disableStyles: p }),
									theme: c?.theme,
									treePath: x,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: u || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = i.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => v() },
									inputName: V,
									...(0, A.s)({ disableStyles: p }),
									theme: c?.theme,
									treePath: `${x} modal`,
								},
							},
							U = (t) => {
								if (t) {
									const O = t.getBoundingClientRect();
									return {
										top: O.top + window.scrollY + (L?.top || 0),
										left: O.left + window.scrollX + (L?.left || 0),
										width: O.width,
										height: O.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[r, b] = (0, a.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							S = () => {
								const t = U(n);
								(r.height !== t.height || r.left !== t.left || r.top !== t.top || r.width !== t.width) && b(t);
							};
						S();
						const l = (0, Z.s)(() => {
							S();
						}, 10);
						(0, a.vJ)(() => {
							window.addEventListener('resize', l);
						}, []);
						const P = (0, Y.Z)({ ...c, inputBounds: r }, G);
						let C;
						n && (C = (0, R.x)({ input: n, controller: i, renderedInputRef: K, renderInput: !!E, buttonSelector: h, setActive: W }));
						const d = { ...c };
						return (
							delete d.width,
							delete d.className,
							delete d.internalClassName,
							delete d.style,
							delete d.styleScript,
							delete d.themeStyleScript,
							I?.length && B
								? (0, s.Y)($._, {
										children: (0, s.Y)('div', {
											...P,
											className: y()('ss__autocomplete-fixed', q, ee),
											children: (0, s.Y)(J.a, {
												...T.modal,
												children: (0, s.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (t) => (0, X.iy)(t, 0, !0, v),
													children: [
														E ? (0, s.Y)(k.D, { ...T.searchInput, value: i.store.state.input || '', inputRef: K }) : (0, s.Y)(s.FK, {}),
														(0, s.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, s.Y)(z.h, { ...d, ...T.autocompleteLayout, input: C, controller: i, treePath: `${x} modal` }),
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
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(te, M, e) {
				e.r(M), e.d(M, { AutocompleteFixed: () => s.f });
				var s = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
