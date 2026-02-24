(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4578],
		{
			'./components/src/components/Atoms/Dropdown/Dropdown.stories.tsx'(g, a, e) {
				'use strict';
				e.r(a),
					e.d(a, {
						Default: () => f,
						ExternalState: () => h,
						Hoverable: () => m,
						JSXChildren: () => d,
						JSXContent: () => t,
						StringChildren: () => b,
						__namedExportsOrder: () => _,
						default: () => y,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const r =
						"# Dropdown\n\nRenders a button and content. Clicking the button toggles content visibility. Typically used as an alternative to a `<select>` dropdown or to collapse content. By default any clicks outside of the element will hide the content.\n\n## Usage\n```jsx\nimport { Dropdown } from '@searchspring/snap-preact-components';\n```\n\n### content\nThe `content` prop specifies the dropdown contents. This can be a string or a JSX element. The Dropdown component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```jsx\n<Dropdown content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```jsx\n<Dropdown>Hello World!</Dropdown>\n```\n\nNote you can only render either the content, or the children, if both are passed in, it will default to the content prop. \n\n\n### button\nThe `button` prop specifies the dropdown button. This button toggles the visibility of the content when clicked. This can be a string or a JSX element.\n\n```jsx\n<Dropdown button={'click me!'}>Hello World!</Dropdown>\n```\n\n### toggleOnHover\nThe `toggleOnHover` prop controls if hover events (onMouseEnter and onMouseLeave) will toggle the dropdown. This is disabled by default.\n\n```jsx\n<Dropdown button={'click me!'} toggleOnHover>Hello World!</Dropdown>\n```\n\n### open\nThe `open` prop sets the dropdown visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```jsx\n<Dropdown open={true}>Hello World!</Dropdown>\n```\n\n### startOpen\nThe `startOpen` prop sets the dropdown initial internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Dropdown startOpen>Hello World!</Dropdown>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the dropdown content, as well as preventing the `onClick` callback from being invoked.\n\n```jsx\n<Dropdown disabled>Hello World!</Dropdown>\n```\n\n### disableClick\nThe `disableClick` prop specifies a boolean which will disable the default click behavior; this is useful if you want to only allow for hovering to toggle the state. Be aware that this will cause the dropdown to not work as expected in mobile (where touch events are used).\n\n```jsx\n<Dropdown disableClick>Hello World!</Dropdown>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Dropdown disableA11y>Hello World!</Dropdown>\n```\n\n### focusTrapContent\nThe `focusTrapContent` prop specifies if the content should trap the user in a focus trap for a11y keyboard navigation.\n\n```jsx\n<Dropdown focusTrapContent={true} >Hello World!</Dropdown>\n```\n\n### disableOverlay\nThe `disableOverlay` prop will disable the dropdown contents from being rendered as an overlay. If set to `true`, dropdown contents will instead be rendered as a block and affect the height of its parent element. Typically used if Dropdown is intended to act as a header (ie. Facet)\n\n```jsx\n<Dropdown disableOverlay>Hello World!</Dropdown>\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Dropdown disableClickOutside>Hello World!</Dropdown>\n```\n\n### usePortal\nThe `usePortal` prop specifies if the dropdown content should be rendered in a portal. This will render the content directly on the body, and dynamically position itself. This is useful if the dropdown content is being cut off by a parent container with `overflow: hidden`.\n\n```jsx\n<Dropdown usePortal>Hello World!</Dropdown>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the dropdown button is clicked.\n\n```jsx\n<Dropdown onClick={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseEnter\nThe `onMouseEnter` prop allows for a custom callback function for when the dropdown has been hovered.\n\n```jsx\n<Dropdown onMouseEnter={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseLeave\nThe `onMouseLeave` prop allows for a custom callback function for when the dropdown has been un-hovered.\n\n```jsx\n<Dropdown onMouseLeave={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onToggle\nThe `onToggle` prop allows for a custom callback function for when the dropdown visibility is toggled. This only applies if using internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Dropdown onToggle={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n",
					y = {
						title: 'Atoms/Dropdown',
						component: s.m,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: p.Z } }, children: r }), (0, o.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						argTypes: {
							button: {
								description: 'Button content to toggle the dropdown',
								type: { required: !0 },
								table: { type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							content: { description: 'Content to be displayed in dropdown', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							children: {
								description: 'Content to be displayed in dropdown using children',
								table: { type: { summary: 'string, JSX' } },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable dropdown - prevents all click events',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableOverlay: {
								description: 'Disable dropdown overlay and renders as block',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							toggleOnHover: {
								description: 'open and close dropdown on hover',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							open: {
								description: 'Pass a value here to control the state externally',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
								control: { type: 'boolean' },
							},
							startOpen: {
								description: 'Dropdown state is open on initial render - used with internal state only',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								description: 'Ignore clicks outside of element',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Dropdown click event handler',
								table: { type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							onMouseEnter: {
								description: 'Dropdown mouse enter event handler',
								table: { type: { summary: 'function(e: Event)' } },
								action: 'onMouseEnter',
							},
							onMouseLeave: {
								description: 'Dropdown mouse leave event handler',
								table: { type: { summary: 'function(e: Event)' } },
								action: 'onMouseLeave',
							},
							usePortal: {
								description: 'boolean to specify if the dropdown content should be rendered in a portal.',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onToggle: {
								description: 'Executes when the internal state changes, gets passed the event and the internal state - used with internal state only',
								table: { type: { summary: 'function(e: Event, open: boolean)' } },
								control: { type: 'none' },
								action: 'onToggle',
							},
							focusTrapContent: {
								description: 'boolean to enable ally focustrap',
								disableClick: {
									description: 'boolean to disable clicking of the button',
									table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
									control: { type: 'boolean' },
								},
								disableA11y: {
									description: 'boolean to disable autoset ally properties',
									table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
									control: { type: 'boolean' },
								},
								...i.F,
							},
						},
					},
					f = (l) => (0, o.Y)(s.m, { ...l });
				f.args = { button: 'button text', content: 'content text' };
				const m = (l) => (0, o.Y)(s.m, { ...l });
				m.args = { button: 'hover over me', content: 'content text', toggleOnHover: !0 };
				const h = (l) => (0, o.Y)(s.m, { ...l });
				h.args = { button: 'button text', content: 'content text', open: !0 };
				const t = (l) => (0, o.Y)(s.m, { ...l });
				t.args = {
					button: 'button text',
					content: (0, o.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				};
				const d = (l) => (0, o.Y)(s.m, { button: l.button, children: l.content });
				d.args = {
					button: 'button text',
					content: (0, o.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				};
				const b = (l) => (0, o.Y)(s.m, { button: l.button, children: l.content });
				(b.args = { button: 'button text', content: 'string content - (note this component receieved the open state as a prop)' }),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...f.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...h.parameters?.docs?.source },
						},
					}),
					(t.parameters = {
						...t.parameters,
						docs: {
							...t.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...t.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
								...d.parameters?.docs?.source,
							},
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: {
								originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
								...b.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default', 'Hoverable', 'ExternalState', 'JSXContent', 'JSXChildren', 'StringChildren'];
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(g, a, e) {
				'use strict';
				e.d(a, { m: () => G });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/compat/dist/compat.module.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					r = e.n(i),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					t = e('./components/src/hooks/useClickOutside.tsx'),
					d = e('./components/src/utilities/cloneWithProps.tsx'),
					b = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					l = e('./components/src/hooks/useA11y.tsx');
				const Z = ({ disableOverlay: E }) =>
						(0, p.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: E ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${E ? 'default' : 'pointer'}` },
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
					G = (0, y.PA)((E) => {
						const Q = (0, m.u)(),
							q = { startOpen: !1, disableA11y: !1, treePath: (0, h.LU)() },
							R = (0, b.v6)('dropdown', Q, q, E),
							{
								button: ee,
								content: M,
								children: A,
								disabled: C,
								open: U,
								toggleOnHover: x,
								onMouseEnter: j,
								onMouseLeave: L,
								disableClick: oe,
								onClick: O,
								onToggle: T,
								focusTrapContent: te,
								startOpen: ne,
								disableClickOutside: se,
								disableA11y: Y,
								className: K,
								internalClassName: J,
								treePath: S,
								usePortal: k,
							} = R;
						let u, D;
						const P = U === void 0;
						P ? ([u, D] = (0, s.J0)(ne)) : (u = U);
						const [N, X] = (0, s.J0)(!1),
							W = (0, s.li)(null),
							H = (0, s.li)(null),
							[I, re] = (0, s.J0)({ top: 0, left: 0, width: 0 });
						let V;
						se ||
							(V = (0, t.L)((n) => {
								(k && H.current && H.current.contains(n.target)) || (u && (C || (P && D && D(!1), T && T(n, !1))));
							})),
							(0, s.vJ)(() => {
								if (k && u) {
									const n = () => {
										if (W.current) {
											const w = W.current.getBoundingClientRect();
											re({ top: w.bottom + window.scrollY, left: w.left + window.scrollX, width: w.width });
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
							}, [k, u]);
						const v = (n, w) => {
								P &&
									D &&
									D(($) => {
										const B = w ?? !$;
										return B != $ && T && T(n, B), B;
									});
							},
							F = (0, _.Z)(R, Z),
							ae = {
								onMouseEnter:
									(x || j) &&
									((n) => {
										N || (x && !C && v(n, !0), j && j(n));
									}),
								onMouseLeave:
									(x || L) &&
									((n) => {
										N || (x && !C && v(n, !1), L && L(n));
									}),
							},
							z = (0, o.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (n) => {
									(H.current = n),
										Y ||
											(0, l.iy)(n, 0, !!te, (w) => {
												P ? v(w) : O && O(w);
											});
								},
								children: [(0, d.Y)(M, { open: u, toggleOpen: v, treePath: S }), (0, d.Y)(A, { open: u, toggleOpen: v, treePath: S })],
							});
						return (0, o.Y)(f._, {
							children: (0, o.FD)('div', {
								...F,
								className: r()('ss__dropdown', { 'ss__dropdown--open': u }, K, J),
								ref: V,
								...ae,
								children: [
									(0, o.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (n) => {
											(W.current = n), Y || (0, l.iy)(n);
										},
										'aria-expanded': u,
										role: 'button',
										onTouchStart: () => {
											X(!0);
										},
										onClick: (n) => {
											!C && !oe && (v(n), O && O(n)),
												setTimeout(() => {
													X(!1);
												}, 300);
										},
										children: (0, d.Y)(ee, { open: u, toggleOpen: v, treePath: S }),
									}),
									k
										? u &&
										  (M || A) &&
										  (0, c.createPortal)(
												(0, o.Y)('div', {
													className: r()('ss__dropdown__portal', K, J, { 'ss__dropdown__portal--open': u }),
													css: F.css,
													style: { position: 'absolute', top: I.top, left: I.left, width: I.width, zIndex: 9999 },
													children: z,
												}),
												document.body
										  )
										: (M || A) && z,
								],
							}),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(g, a, e) {
				'use strict';
				e.d(a, { DH: () => p, aZ: () => s, iy: () => i });
				const o = 9,
					c = 27,
					s = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(r, y, f, m) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = h),
							(t.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					r &&
						!r.attributes?.[s] &&
						(r.setAttribute(s, !0),
						r.setAttribute('tabIndex', `${y || 0}`),
						r.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && r.click();
						}),
						f &&
							r.addEventListener('keydown', function (t) {
								const d = r.querySelectorAll(p),
									b = d[0],
									_ = d[d.length - 1];
								if (t.keyCode == c) {
									r.focus(), m && m(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === o) &&
									(t.shiftKey
										? document.activeElement === b && (_.focus(), t.preventDefault())
										: document.activeElement === _ && (b.focus(), t.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(g, a, e) {
				'use strict';
				e.d(a, { L: () => c });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function c(s) {
					const p = (0, o.li)(),
						i = (0, o.li)();
					return (
						(0, o.vJ)(() => {
							p.current = s;
						}),
						(0, o.vJ)(() => {
							return document.addEventListener('click', r), () => document.removeEventListener('click', r);
							function r(y) {
								i.current && p.current && !i.current.contains(y.target) && p.current(y);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(g, a, e) {
				'use strict';
				e.d(a, { F: () => o });
				const o = {
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
			'./components/src/utilities/storybook.tsx'(g, a, e) {
				'use strict';
				e.d(a, { Z: () => p });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					p = (i) => {
						const r = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								r.current && i.className?.includes('lang-') && !i.className?.includes(s) && window?.Prism?.highlightElement(r.current);
							}, [i.className, i.children, r]),
							(0, o.Y)('code', { ...i, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function a(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (g.exports = a);
			},
		},
	]);
})();
