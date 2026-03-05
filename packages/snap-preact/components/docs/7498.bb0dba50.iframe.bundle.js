'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7498],
		{
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'(A, c, e) {
				e.d(c, { o: () => W });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					y = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					R = e('../../node_modules/classnames/index.js'),
					T = e.n(R),
					B = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					x = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/hooks/useAcRenderedInput.tsx');
				const U = ({}) =>
						(0, I.AH)({
							border: '1px solid #eee',
							'& .ss__autocomplete': { position: 'relative' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					W = (0, O.PA)((g) => {
						const N = (0, L.u)(),
							j = {
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							s = (0, v.v6)('autocompleteSlideout', N, j, g),
							[b, Y] = (0, r.J0)('query');
						let t = s.input,
							u = s.buttonSelector;
						if (t) {
							typeof t == 'string' && (t = document.querySelector(t));
							const m = t?.getAttribute('name');
							m && (Y(m), s.renderInput && t.setAttribute('name', ''));
						}
						!u && t && (u = t);
						const {
								layout: E,
								disableStyles: d,
								slideDirection: F,
								controller: l,
								overlayColor: J,
								renderInput: h,
								className: $,
								internalClassName: H,
								treePath: i,
								width: Z,
							} = s,
							P = (0, r.li)(null),
							a = () => {
								D(!1), l.setFocused();
							},
							p = {
								autocompleteLayout: { onReset: () => a(), layout: E, ...(0, _.s)({ disableStyles: d }), theme: s?.theme, treePath: i },
								slideout: {
									width: Z,
									rerender: !1,
									overlayColor: J,
									slideDirection: F,
									buttonSelector: u,
									...(0, _.s)({ disableStyles: d }),
									theme: s?.theme,
									treePath: i,
								},
								searchInput: {
									internalClassName: 'autocomplete-slideout__search-input  autocomplete__search-input',
									inputName: b,
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => a(), icon: 'angle-left' },
									...(0, _.s)({ disableStyles: d }),
									treePath: `${i} slideout`,
									theme: s?.theme,
								},
							},
							z = (0, S.Z)(s, U),
							[G, D] = (0, r.J0)(!1);
						let M;
						t &&
							((0, r.vJ)(() => {
								t.addEventListener('click', () => D(!0));
							}),
							(M = (0, K.x)({ input: t, controller: l, renderedInputRef: P, renderInput: !!h, buttonSelector: u })));
						const n = { ...s };
						return (
							delete n.width,
							delete n.className,
							delete n.internalClassName,
							delete n.style,
							delete n.styleScript,
							delete n.themeStyleScript,
							E?.length
								? (0, o.Y)(C._, {
										children: (0, o.Y)(y.S, {
											...z,
											...p.slideout,
											className: T()('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', $, H),
											active: G,
											children: (0, o.FD)('div', {
												className: 'ss__autocomplete-slideout__inner',
												ref: (m) => (0, x.iy)(m, 0, !0, a),
												children: [
													h ? (0, o.Y)(B.D, { ...p.searchInput, value: l.store.state.input || '', inputRef: P }) : (0, o.Y)(o.FK, {}),
													(0, o.Y)(f.h, { ...n, ...p.autocompleteLayout, input: M, controller: l, treePath: `${i} slideout` }),
												],
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteSlideout.ts'(A, c, e) {
				e.r(c), e.d(c, { AutocompleteSlideout: () => o.o });
				var o = e('./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx');
			},
		},
	]);
})();
