'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(ee, O, e) {
				e.d(O, { a: () => G });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					j = e('../../node_modules/classnames/index.js'),
					x = e.n(j),
					N = e('../../node_modules/mobx-react-lite/es/index.js'),
					F = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useClickOutside.tsx'),
					A = e('./components/src/utilities/cloneWithProps.tsx'),
					z = e('./components/src/utilities/defined.ts'),
					J = e('./components/src/utilities/mergeProps.ts'),
					H = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/hooks/useA11y.tsx'),
					k = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					Z = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const X = () =>
						(0, S.AH)({
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
					G = (0, N.PA)((_) => {
						const u = (0, Y.u)(),
							i = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, $.LU)() },
							M = (0, J.v6)('modal', u, i, _),
							{
								button: y,
								content: W,
								buttonSelector: h,
								children: n,
								disabled: m,
								open: I,
								onClick: E,
								lockScroll: v,
								startOpen: P,
								disableClickOutside: K,
								disableA11y: U,
								className: Q,
								internalClassName: V,
								disableStyles: b,
								overlayColor: f,
								onOverlayClick: L,
								treePath: a,
							} = M,
							g = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (o) => {
										L && L(o), p();
									},
									...(0, z.s)({ disableStyles: b, color: f }),
									theme: M?.theme,
									treePath: a,
								},
							};
						let l, c;
						const T = I === void 0;
						T ? ([l, c] = (0, d.J0)(P)) : (l = I);
						let R;
						K ||
							(R = (0, w.L)(() => {
								l && (m || (T && c && c(!1)));
							}));
						const p = () => {
								T && c && c((o) => !o);
							},
							q = (0, H.Z)(M, X);
						return (
							(0, d.vJ)(
								() => (
									l && v ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[l, v]
							),
							(0, d.vJ)(() => {
								const o = h ? (typeof h == 'string' ? document.querySelector(h) : h) : null,
									r = (0, Z.s)(() => {
										setTimeout(() => {
											l && v ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									s = (D) => {
										p(), E && E(D);
									};
								return (
									o && (m || o.addEventListener('click', s)),
									window.addEventListener('resize', r),
									() => {
										window.removeEventListener('resize', r), o && o.removeEventListener('click', s);
									}
								);
							}, []),
							(0, t.Y)(F._, {
								children: (0, t.FD)('div', {
									...q,
									className: x()('ss__modal', { 'ss__modal--open': l }, { 'ss__modal--disabled': m }, Q, V),
									ref: R,
									children: [
										!h &&
											y &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (o) => (U ? null : (0, B.iy)(o)),
												'aria-expanded': l,
												role: 'button',
												onClick: (o) => {
													m || (p(), E && E(o));
												},
												children: (0, A.Y)(y, { open: l, toggleOpen: p, treePath: a }),
											}),
										(W || n) &&
											l &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (o) => (U ? null : (0, B.iy)(o)),
												children: [(0, A.Y)(W, { open: l, toggleOpen: p, treePath: a }), (0, A.Y)(n, { open: l, toggleOpen: p, treePath: a })],
											}),
										(0, t.Y)(k.h, { ...g.overlay, active: !!l }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(ee, O, e) {
				e.d(O, { f: () => G });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/mobx-react-lite/es/index.js'),
					j = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = e('./components/src/utilities/defined.ts'),
					N = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/providers/cache.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					w = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					A = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					z = e('../../node_modules/classnames/index.js'),
					J = e.n(z),
					H = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					B = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					k = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/hooks/useAcRenderedInput.tsx');
				const X = ({ inputBounds: _, offset: u, renderInput: C, width: i }) =>
						(0, j.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${u?.left || 0}px)`,
								top: `calc(0px + ${C ? '0px' : `${_.height}px`} + ${u?.top || 0}px)`,
								width: `calc(100% + ${u?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								'.ss__search-input': { background: '#fff', width: `${_.width}px`, height: `${_.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: i,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${_.top || 0}px - ${C ? `${_.height}px` : '0px'} + ${u?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					G = (0, S.PA)((_) => {
						const u = (0, $.u)(),
							C = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							i = (0, N.v6)('autocompleteFixed', u, C, _),
							[M, y] = (0, d.J0)(!1),
							[W, h] = (0, d.J0)('query');
						let n = i.input,
							m = i.buttonSelector,
							I;
						if (n) {
							typeof n == 'string' && (n = document.querySelector(n));
							const s = n?.getAttribute('name');
							s && (h(s), i.renderInput && n.setAttribute('name', '')), (I = n?.getAttribute('placeholder'));
						}
						!m && n && (m = n);
						const {
								layout: E,
								disableStyles: v,
								controller: P,
								renderInput: K,
								overlayColor: U,
								className: Q,
								internalClassName: V,
								offset: b,
								treePath: f,
							} = i,
							L = (0, d.li)(null),
							a = () => {
								P.setFocused(), y(!1);
							},
							g = {
								autocompleteLayout: { layout: E, onReset: () => a(), ...(0, x.s)({ disableStyles: v }), theme: i?.theme, treePath: f },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: m,
									lockScroll: !1,
									onOverlayClick: a,
									open: M,
									...(0, x.s)({ overlayColor: U, disableStyles: v }),
									theme: i?.theme,
									treePath: f,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: I || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = P.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => a() },
									inputName: W,
									...(0, x.s)({ disableStyles: v }),
									theme: i?.theme,
									treePath: `${f} modal`,
								},
							},
							l = (s) => {
								if (s) {
									const D = s.getBoundingClientRect();
									return {
										top: D.top + window.scrollY + (b?.top || 0),
										left: D.left + window.scrollX + (b?.left || 0),
										width: D.width,
										height: D.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[c, T] = (0, d.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							R = () => {
								const s = l(n);
								(c.height !== s.height || c.left !== s.left || c.top !== s.top || c.width !== s.width) && T(s);
							};
						R();
						const p = (0, B.s)(() => {
							R();
						}, 10);
						(0, d.vJ)(() => {
							window.addEventListener('resize', p);
						}, []);
						const q = (0, F.Z)({ ...i, inputBounds: c }, X);
						let o;
						n && (o = (0, Z.x)({ input: n, controller: P, renderedInputRef: L, renderInput: !!K, buttonSelector: m, setActive: y }));
						const r = { ...i };
						return (
							delete r.width,
							delete r.className,
							delete r.internalClassName,
							delete r.style,
							delete r.styleScript,
							delete r.themeStyleScript,
							E?.length && M
								? (0, t.Y)(Y._, {
										children: (0, t.Y)('div', {
											...q,
											className: J()('ss__autocomplete-fixed', Q, V),
											children: (0, t.Y)(A.a, {
												...g.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (s) => (0, k.iy)(s, 0, !0, a),
													children: [
														K ? (0, t.Y)(H.D, { ...g.searchInput, value: P.store.state.input || '', inputRef: L }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, t.Y)(w.h, { ...r, ...g.autocompleteLayout, input: o, controller: P, treePath: `${f} modal` }),
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
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(ee, O, e) {
				e.r(O), e.d(O, { AutocompleteFixed: () => t.f });
				var t = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
