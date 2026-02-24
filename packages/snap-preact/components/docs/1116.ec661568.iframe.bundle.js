'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1116],
		{
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(h, i, o) {
				o.d(i, { n: () => R });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = o('../../node_modules/preact/dist/preact.module.js'),
					d = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = o('../../node_modules/classnames/index.js'),
					E = o.n(l),
					m = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = o('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = o('./components/src/utilities/defined.ts'),
					O = o('./components/src/utilities/mergeProps.ts'),
					D = o('./components/src/utilities/mergeStyles.ts'),
					M = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = o('./components/src/providers/treePath.tsx');
				const B = ({ componentTheme: r }) =>
						(0, d.AH)({
							width: '360px',
							height: '120px',
							overflow: 'hidden',
							fontSize: '14px',
							position: 'fixed',
							zIndex: '9999',
							cursor: 'auto',
							bottom: '50px',
							right: 0,
							background: r.main.background,
							color: r.main.color,
							border: r.main.border,
							borderRight: 0,
							borderTopLeftRadius: '5px',
							borderBottomLeftRadius: '5px',
							boxShadow: r.main.boxShadow,
							transition: 'height ease 0.2s, right ease 0.5s 0.2s',
							'&.ss__branch-override--collapsed': {
								transition: 'height ease 0.5s 0.5s, right ease 0.5s',
								right: '-316px',
								height: '50px',
								cursor: 'pointer',
							},
							'.ss__branch-override__top': {
								padding: '10px',
								background: r.top.background,
								borderBottom: r.top.border,
								'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
								'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', padding: '5px', cursor: 'pointer' },
								'.ss__branch-override__top__button': {
									borderRadius: '5px',
									padding: '6px',
									height: '100%',
									lineHeight: '14px',
									textAlign: 'center',
									cursor: 'pointer',
									fontSize: '10px',
									border: r.top.button.border,
									color: r.top.button.color,
									float: 'right',
									marginRight: '14px',
								},
							},
							'.ss__branch-override__bottom': {
								padding: '10px 15px',
								fontSize: '12px',
								'.ss__branch-override__bottom__left': {
									fontWeight: 'bold',
									fontStyle: r.bottom.branch.style,
									color: r.bottom.branch.color,
									fontSize: '14px',
									lineHeight: '20px',
									display: 'inline-flex',
									alignItems: 'center',
									maxWidth: '180px',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									svg: { marginRight: '10px' },
								},
								'.ss__branch-override__bottom__right': {
									float: 'right',
									fontStyle: 'italic',
									color: r.bottom.additional.color,
									fontSize: '12px',
									lineHeight: '20px',
								},
								'.ss__branch-override__bottom__content': { marginTop: '10px' },
							},
						}),
					s = {
						darkTheme: {
							class: 'ss__branch-override--dark',
							main: { border: '0', background: 'rgba(59, 35, 173, 0.9)', color: '#fff', boxShadow: '#4c3ce2 1px 1px 3px 0px' },
							top: {
								background: 'rgba(59, 35, 173, 0.3)',
								border: '1px solid #4c3de1',
								logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#03cee1', style: 'italic' },
								additional: { color: '#03cee1' },
							},
						},
						lightTheme: {
							class: 'ss__branch-override--light',
							main: {
								border: '1px solid #ccc',
								background: 'rgba(255, 255, 255, 0.95)',
								color: '#515151',
								boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
							},
							top: {
								border: '1px solid #ccc',
								logo: { src: 'https://snapui.searchspring.io/searchspring.svg' },
								button: { border: '1px solid #515151', color: '#515151', content: 'STOP PREVIEW' },
								close: { fill: '#515151' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#3a23ad', style: 'italic' },
								additional: { color: '#3a23ad' },
							},
						},
						failureTheme: {
							class: 'ss__branch-override--error',
							main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: 'rgba(130, 6, 6, 0.4) 1px 1px 3px 0px' },
							top: {
								background: 'rgba(130, 6, 6, 0.3)',
								border: '1px solid #760000',
								logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Incorrect branch name or branch no longer exists.',
								branch: { color: '#be9628', style: 'italic' },
								additional: { color: '#be9628' },
							},
						},
					},
					R = (r) => {
						const C = (0, M.u)(),
							T = { treePath: (0, I.LU)() },
							p = (0, O.v6)('branchOverride', C, T, r),
							{
								branch: _,
								details: g,
								error: a,
								className: A,
								internalClassName: S,
								darkMode: f,
								disableStyles: y,
								onRemoveClick: v,
								treePath: W,
							} = p,
							x = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, P.s)({ disableStyles: y }),
									theme: p?.theme,
									treePath: W,
								},
							},
							k = typeof f == 'boolean' ? f : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[n, L] = (0, m.J0)(k ? 'darkTheme' : 'lightTheme'),
							[K, u] = (0, m.J0)(0);
						a && L('failureTheme');
						const N = (0, D.Z)({ ...p, componentTheme: s[n] }, B);
						return (g || a) && _
							? (0, e.FD)('div', {
									className: E()('ss__branch-override', s[n].class, { 'ss__branch-override--collapsed': K }, A, S),
									...N,
									onClick: (t) => {
										t.preventDefault(), t.stopPropagation(), u(0);
									},
									children: [
										(0, e.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, e.Y)('img', { className: 'ss__branch-override__top__logo', src: s[n].top.logo.src }),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (t) => {
														t.preventDefault(), t.stopPropagation(), u(1);
													},
													children: (0, e.Y)(b.I, { size: '18px', color: s[n].top.close.fill, ...x.icon, icon: 'close-thin' }),
												}),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (t) => {
														t.preventDefault(), t.stopPropagation(), v && v(t, _);
													},
													children: s[n].top.button.content,
												}),
											],
										}),
										(0, e.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, e.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: a
														? (0, e.FD)(e.FK, {
																children: [
																	(0, e.Y)(b.I, { size: '12px', color: s[n].bottom.branch.color, ...x.icon, icon: 'warn' }),
																	(0, e.Y)('span', { children: a.message }),
																],
														  })
														: _,
												}),
												(0, e.Y)('span', { className: 'ss__branch-override__bottom__right', children: a ? _ : g?.lastModified }),
												(0, e.Y)('div', { className: 'ss__branch-override__bottom__content', children: a?.description || s[n].bottom.content }),
											],
										}),
									],
							  })
							: (0, e.Y)(c.FK, {});
					};
			},
			'./components/src/components/Organisms/BranchOverride/index.ts'(h, i, o) {
				o.r(i), o.d(i, { BranchOverride: () => e.n });
				var e = o('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx');
			},
			'./components/src/utilities/defined.ts'(h, i, o) {
				o.d(i, { s: () => e });
				function e(c) {
					const d = {};
					return (
						Object.keys(c).map((l) => {
							c[l] !== void 0 && (d[l] = c[l]);
						}),
						d
					);
				}
			},
		},
	]);
})();
