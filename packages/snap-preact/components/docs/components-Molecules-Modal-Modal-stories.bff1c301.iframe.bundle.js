(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[495],
		{
			'./components/src/components/Molecules/Modal/Modal.stories.tsx'(b, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => _, ExternalState: () => d, JSXContent: () => m, __namedExportsOrder: () => o, default: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const n =
						"# Modal\n\nRenders a button and a modal. Clicking the button toggles modal visibility. By default any clicks outside of the modal will hide the content.\n\n## Sub-components\n- Overlay\n\n## Usage\n\n### content\nThe `content` prop specifies the modal contents. This can be a string or a JSX element. The Modal component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```jsx\n<Modal content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```jsx\n<Modal>Hello World!</Modal>\n```\n\n### button\nThe `button` prop specifies the Modal trigger button. This button toggles the visibility of the modal when clicked. This can be a string or a JSX element.\n\n```jsx\n<Modal button={'click me!'}>Hello World!</Modal>\n```\n\nor alternatively you can use the `buttonSelector` prop \n\n### buttonSelector\nThe `buttonSelector` prop allows you to define a selector that identifies an element to listen for click events, which will trigger the modal to open.\n\n```jsx\n<Modal buttonSelector={'#someExistingButton'}>Hello World!</Modal>\n```\n\n### open\nThe `open` prop sets the modal visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```jsx\n<Modal open={true}>Hello World!</Modal>\n```\n\n### startOpen\nThe `startOpen` prop sets the modal initial internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Modal startOpen>Hello World!</Modal>\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<Modal overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### onOverlayClick\nThe `onOverlayClick` prop specifies the a function to call on clicking of the overlay.\n\n```jsx\n<Modal onOverlayClick={clickfunc} />\n```\n\n### lockScroll\nThe `lockScroll` prop will lock the scroll on the body of the page while the modal is open. \n\n```jsx\n<Modal lockScroll={true}>Hello World!</Modal>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the modal content, as well as preventing the `onClick` callback from being invoked.\n\n```jsx\n<Modal disabled>Hello World!</Modal>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Modal disableA11y>Hello World!</Modal>\n```\n\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the modal if a click event was registered outside the modal content.\n\n```jsx\n<Modal disableClickOutside>Hello World!</Modal>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the modal button is clicked.\n\n```jsx\n<Modal onClick={(e)=>{console.log(e)}} >Hello World!</Modal>\n```\n",
					y = {
						title: 'Molecules/Modal',
						component: a.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: n }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							button: { description: 'Button content to toggle the modal', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							buttonSelector: {
								description: 'Button selector to toggle the modal',
								table: { type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Modal overlay color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							onOverlayClick: {
								description: 'Function to call when the overlay is clicked',
								table: { type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onOverlayClick',
							},
							content: { description: 'Content to be displayed in modal', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							children: { description: 'Content to be displayed in modal', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							disabled: {
								description: 'Disable modal - prevents all click events',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							lockScroll: {
								description: 'Lock the Scroll on the body when the modal is open',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							open: {
								description: 'Pass a value here to control the state externally',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
								control: { type: 'boolean' },
							},
							startOpen: {
								description: 'modal state is open on initial render - used with internal state only',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								description: 'Ignore clicks outside of element',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'modal click event handler',
								table: { type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...i.F,
						},
					},
					_ = (u) => (0, t.Y)(a.a, { ...u });
				_.args = { button: 'button text', content: 'content text' };
				const d = (u) => (0, t.Y)(a.a, { ...u });
				d.args = { button: 'button text', content: 'content text', open: !0 };
				const m = (u) => (0, t.Y)(a.a, { ...u });
				(m.args = {
					button: 'button text',
					content: (0, t.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				}),
					(_.parameters = {
						..._.parameters,
						docs: { ..._.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ..._.parameters?.docs?.source } },
					}),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...d.parameters?.docs?.source } },
					}),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...m.parameters?.docs?.source } },
					});
				const o = ['Default', 'ExternalState', 'JSXContent'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(b, s, e) {
				'use strict';
				e.d(s, { h: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					r = e.n(a),
					i = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/hooks/useA11y.tsx');
				const o = ({ transitionSpeed: h, color: f }) =>
					(0, l.AH)({
						transition: `background ${h} ease 0s, left 0s ease ${h}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${h} ease, left 0s ease`, background: f, left: '0' },
					});
				function u(h) {
					const f = (0, n.u)(),
						A = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, y.LU)() },
						C = (0, _.v6)('overlay', f, A, h),
						{ active: M, onClick: x, disableA11y: L, className: j, internalClassName: I } = C,
						S = (0, d.Z)(C, o);
					return (0, t.Y)(i._, {
						children: (0, t.Y)('div', {
							onClick: (v) => x && M && x(v),
							ref: (v) => (L ? null : (0, m.iy)(v, M ? 0 : -1)),
							className: r()('ss__overlay', { 'ss__overlay--active': M }, j, I),
							...S,
						}),
					});
				}
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(b, s, e) {
				'use strict';
				e.d(s, { a: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/hooks/useClickOutside.tsx'),
					o = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
					A = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					C = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js');
				const M = () =>
						(0, a.AH)({
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
					x = (0, n.PA)((L) => {
						const j = (0, _.u)(),
							S = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, d.LU)() },
							v = (0, h.v6)('modal', j, S, L),
							{
								button: R,
								content: U,
								buttonSelector: g,
								children: K,
								disabled: P,
								open: w,
								onClick: D,
								lockScroll: W,
								startOpen: V,
								disableClickOutside: X,
								disableA11y: Y,
								className: z,
								internalClassName: $,
								disableStyles: Z,
								overlayColor: G,
								onOverlayClick: N,
								treePath: k,
							} = v,
							Q = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (c) => {
										N && N(c), E();
									},
									...(0, u.s)({ disableStyles: Z, color: G }),
									theme: v?.theme,
									treePath: k,
								},
							};
						let p, O;
						const B = w === void 0;
						B ? ([p, O] = (0, l.J0)(V)) : (p = w);
						let H;
						X ||
							(H = (0, m.L)(() => {
								p && (P || (B && O && O(!1)));
							}));
						const E = () => {
								B && O && O((c) => !c);
							},
							q = (0, f.Z)(v, M);
						return (
							(0, l.vJ)(
								() => (
									p && W ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[p, W]
							),
							(0, l.vJ)(() => {
								const c = g ? (typeof g == 'string' ? document.querySelector(g) : g) : null,
									J = (0, C.s)(() => {
										setTimeout(() => {
											p && W ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									F = (ee) => {
										E(), D && D(ee);
									};
								return (
									c && (P || c.addEventListener('click', F)),
									window.addEventListener('resize', J),
									() => {
										window.removeEventListener('resize', J), c && c.removeEventListener('click', F);
									}
								);
							}, []),
							(0, t.Y)(y._, {
								children: (0, t.FD)('div', {
									...q,
									className: i()('ss__modal', { 'ss__modal--open': p }, { 'ss__modal--disabled': P }, z, $),
									ref: H,
									children: [
										!g &&
											R &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (c) => (Y ? null : (0, T.iy)(c)),
												'aria-expanded': p,
												role: 'button',
												onClick: (c) => {
													P || (E(), D && D(c));
												},
												children: (0, o.Y)(R, { open: p, toggleOpen: E, treePath: k }),
											}),
										(U || K) &&
											p &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (c) => (Y ? null : (0, T.iy)(c)),
												children: [(0, o.Y)(U, { open: p, toggleOpen: E, treePath: k }), (0, o.Y)(K, { open: p, toggleOpen: E, treePath: k })],
											}),
										(0, t.Y)(A.h, { ...Q.overlay, active: !!p }),
									],
								}),
							})
						);
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, s, e) {
				'use strict';
				e.d(s, { DH: () => r, aZ: () => a, iy: () => i });
				const t = 9,
					l = 27,
					a = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(n, y, _, d) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = m),
							(o.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					n &&
						!n.attributes?.[a] &&
						(n.setAttribute(a, !0),
						n.setAttribute('tabIndex', `${y || 0}`),
						n.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && n.click();
						}),
						_ &&
							n.addEventListener('keydown', function (o) {
								const u = n.querySelectorAll(r),
									h = u[0],
									f = u[u.length - 1];
								if (o.keyCode == l) {
									n.focus(), d && d(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === t) &&
									(o.shiftKey
										? document.activeElement === h && (f.focus(), o.preventDefault())
										: document.activeElement === f && (h.focus(), o.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(b, s, e) {
				'use strict';
				e.d(s, { L: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function l(a) {
					const r = (0, t.li)(),
						i = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							r.current = a;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', n), () => document.removeEventListener('click', n);
							function n(y) {
								i.current && r.current && !i.current.contains(y.target) && r.current(y);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(b, s, e) {
				'use strict';
				e.d(s, { F: () => t });
				const t = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
					theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
				};
			},
			'./components/src/utilities/defined.ts'(b, s, e) {
				'use strict';
				e.d(s, { s: () => t });
				function t(l) {
					const a = {};
					return (
						Object.keys(l).map((r) => {
							l[r] !== void 0 && (a[r] = l[r]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, s, e) {
				'use strict';
				e.d(s, { Z: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					r = (i) => {
						const n = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								n.current && i.className?.includes('lang-') && !i.className?.includes(a) && window?.Prism?.highlightElement(n.current);
							}, [i.className, i.children, n]),
							(0, t.Y)('code', { ...i, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (b.exports = s);
			},
		},
	]);
})();
