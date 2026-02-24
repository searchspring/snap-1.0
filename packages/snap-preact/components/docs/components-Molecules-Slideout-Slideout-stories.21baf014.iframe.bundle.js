(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9487],
		{
			'./components/src/components/Molecules/Slideout/Slideout.stories.tsx'(m, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => c, __namedExportsOrder: () => y, default: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const n = `# Slideout

Renders a slideout with a background overlay. Typically used for a mobile menu slideout. 

## Sub-components
- Overlay

## Usage
\`\`\`jsx
import { Slideout } from '@searchspring/snap-preact-components';
\`\`\`

### buttonContent
The \`buttonContent\` prop accepts a string or JSX element to render a clickable button that toggles the slideout visibility. 

When using the \`buttonContent\` prop, render the component where you want the button to render. The slideout content position is fixed, therefore, the location of the component is only for the render location of the button itself. 

\`\`\`jsx
<Slideout buttonContent={'click me'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### children
The children provided to the component will be displayed within the slideout - the slideout content. When using a component here, it will be passed additional props (\`active\` and \`toggleActive\`) from the slideout component which can be used for referencing and toggling of the \`active\` state.

\`\`\`jsx
<Slideout buttonContent={'click me'}>
	<span>slideout content (children)</span>
</Slideout>
\`\`\`

\`\`\`jsx
const SlideoutContent = (props) => {
	return (
		<div>
			<button onClick={() => props.toggleActive()}>close slideout</button>
			<div>the slideout is { props.active ? 'open' : 'closed' }</div>
		</div>
	)
}

<Slideout buttonContent={'click me'}>
	<SlideoutContent />
</Slideout>
\`\`\`

### width
The \`width\` prop is the width of the slideout.

\`\`\`jsx
<Slideout width={'300px'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### displayAt
The \`displayAt\` prop specifies a CSS media query for when the component will render. By default, the component will always render. 

\`\`\`jsx
<Slideout displayAt={'(max-width: 600px)'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### transitionSpeed
The \`transitionSpeed\` prop changes the CSS transition speed animation for the slideout and overlay.

\`\`\`jsx
<Slideout transitionSpeed={'0.5s'}>
	<div>slideout content</div>
</Slideout>
\`\`\`


### overlayColor
The \`overlayColor\` prop sets the overlay color.

\`\`\`jsx
<Slideout overlayColor={'rgba(0,0,0,0.7)'}>
	<div>slideout content</div>
</Slideout>
\`\`\`


### slideDirection
The \`slideDirection\` prop sets the direction that the overlay slides in. Defaults to \`left\`. Available values are \`left\`, \`right\`, \`top\`, & \`bottom\`.

\`\`\`jsx
<Slideout slideDirection={'right'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### noButtonWrapper
The \`noButtonWrapper\` prop prevents the button wrapper div with className of \`ss__slideout__button\` from rendering. This element normally wraps \`buttonContent\` and handles toggling the \`active\` state via an onClick handler. By utilizing this prop, toggling of the \`active\` state must instead happen within the component passed into \`buttonContent\`. The \`buttonContent\` component will be passed additional props (\`active\` and \`toggleActive\`) from the slideout component which can be used for referencing and toggling of the \`active\` state.

\`\`\`jsx

const ButtonComponent = (props) => {
	return (
		<div onClick={() => props.toggleActive()}>
			Button to Toggle the Slideout
		</div>
	)
}

<Slideout buttonContent={<ButtonComponent/>} noButtonWrapper>
	<div>slideout content</div>
</Slideout>
\`\`\`

### active
The \`active\` prop is an optional way to specify the initial state of the slideout when rendered. It is recommended to let the component manage its own state internally by not using this prop.

\`\`\`jsx
<Slideout active={true}>
	<div>Hello World</div>
</Slideout>
\`\`\`

### rerender
The \`rerender\` prop determines whether the slideout content should be re-rendered each time the slideout is closed and reopened. By default, this behavior is enabled to ensure better accessibility compliance by avoiding rendering content when the slideout is closed.  

\`\`\`jsx
<Slideout rerender={true}>
	<div>Hello World</div>
</Slideout>
\`\`\`

### buttonSelector
The \`buttonSelector\` prop specifies a selector of an element to query for, to listen for clicks, to trigger the slideout. This is primarily used if you want to have an external element trigger the slide out. 

\`\`\`jsx

<button value={'click me to open'} id="my-button">
<Slideout buttonSelector={'#my-button'}>
	<div>Hello World</div>
</Slideout>
\`\`\``,
					p = {
						title: 'Molecules/Slideout',
						component: s.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(r.oz, { options: { overrides: { code: d.Z } }, children: n }), (0, t.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						argTypes: {
							active: {
								description: 'Initial state of the slideout.',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							slideDirection: {
								defaultValue: 'left',
								description: 'Slideout slide direction',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'left' } },
								control: { type: 'text' },
							},
							width: {
								defaultValue: '300px',
								description: 'Slideout width',
								table: { type: { summary: 'string' }, defaultValue: { summary: '300px' } },
								control: { type: 'text' },
							},
							displayAt: {
								defaultValue: '',
								description: 'Media query for when to render this component',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							buttonContent: {
								description: 'Slideout button content (children), appended to buttonText',
								type: { required: !0 },
								table: { type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							transitionSpeed: {
								defaultValue: '0.25s',
								description: 'Overlay opening/closing transition speed',
								table: { type: { summary: 'string' }, defaultValue: { summary: '0.25s' } },
								control: { type: 'text' },
							},
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Slideout overlay color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
								control: { type: 'color' },
							},
							noButtonWrapper: {
								description: 'Prevent the wrapper element from rendering (this element has the onClick handler to toggle the state)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							rerender: {
								description: 'determine if the content should be re-rendered when the slideout is closed and re-opened',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							buttonSelector: {
								description: 'external Slideout button selector',
								table: { type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							...a.F,
						},
					},
					c = (_) => (0, t.Y)(s.S, { ..._, children: (0, t.Y)('div', { children: 'props.children will be rendered here' }) });
				(c.args = { active: !0, buttonContent: 'Click Me' }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: SlideoutProps) => <Slideout {...args}>
        <div>props.children will be rendered here</div>
    </Slideout>`,
								...c.parameters?.docs?.source,
							},
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(m, o, e) {
				'use strict';
				e.d(o, { h: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					d = e.n(s),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useA11y.tsx');
				const i = ({ transitionSpeed: u, color: f }) =>
					(0, r.AH)({
						transition: `background ${u} ease 0s, left 0s ease ${u}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${u} ease, left 0s ease`, background: f, left: '0' },
					});
				function b(u) {
					const f = (0, n.u)(),
						T = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, p.LU)() },
						O = (0, c.v6)('overlay', f, T, u),
						{ active: E, onClick: l, disableA11y: x, className: h, internalClassName: j } = O,
						S = (0, y.Z)(O, i);
					return (0, t.Y)(a._, {
						children: (0, t.Y)('div', {
							onClick: (C) => l && E && l(C),
							ref: (C) => (x ? null : (0, _.iy)(C, E ? 0 : -1)),
							className: d()('ss__overlay', { 'ss__overlay--active': E }, h, j),
							...S,
						}),
					});
				}
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(m, o, e) {
				'use strict';
				e.d(o, { S: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/dist/preact.module.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					p = e.n(n),
					c = e('./components/src/utilities/cloneWithProps.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useMediaQuery.tsx'),
					T = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const O = ({ slideDirection: l, transitionSpeed: x, width: h }) =>
						(0, a.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${l || 'left'} ${x}`,
							left: l == 'left' ? `-${h}` : l != 'right' ? '0' : 'initial',
							right: l == 'right' ? `-${h}` : 'initial',
							bottom: l == 'bottom' ? '-100vh' : 'initial',
							top: l == 'top' ? '-100vh' : l == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: h?.endsWith('%') && parseInt(h.split('%')[0]) > 90 ? h : '90%',
							maxWidth: h,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: l == 'left' || l != 'right' ? '0' : 'initial',
								right: l == 'right' ? '0' : 'initial',
								bottom: l == 'bottom' ? '0' : 'initial',
								top: l == 'top' ? '0' : l == 'bottom' ? 'initial' : '0',
							},
						}),
					E = (0, d.PA)((l) => {
						const x = (0, u.u)(),
							j = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, f.LU)(),
								rerender: !0,
							},
							S = (0, _.v6)('slideout', x, j, l),
							{
								children: C,
								active: g,
								rerender: B,
								buttonContent: W,
								buttonSelector: M,
								noButtonWrapper: K,
								displayAt: R,
								transitionSpeed: k,
								overlayColor: Y,
								disableStyles: N,
								className: V,
								internalClassName: F,
								treePath: A,
							} = S,
							$ = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, y.s)({ disableStyles: N, color: Y, transitionSpeed: k }),
									theme: S?.theme,
									treePath: A,
								},
							},
							[v, L] = (0, s.J0)(!!g),
							[J, I] = (0, s.J0)(!!g),
							P = () => {
								v
									? (L(!1),
									  B &&
											setTimeout(() => {
												I(!1);
											}, 250))
									: (L(!0), I(!0)),
									(document.body.style.overflow = v ? 'hidden' : '');
							};
						(0, s.vJ)(() => {
							I(!!g), v !== g && L(!!g);
						}, [g]);
						const U = (0, w.U)(R, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = U && v ? 'hidden' : '';
						const z = (0, i.Z)(S, O);
						return (
							(0, s.vJ)(() => {
								if (M) {
									let D;
									typeof M == 'string' ? (D = document.querySelector(M)) : (D = M), D && D.addEventListener('click', () => P());
								}
							}, []),
							U || !B
								? (0, t.FD)(b._, {
										children: [
											W &&
												(K
													? (0, c.Y)(W, { toggleActive: P, active: v, treePath: A })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => P(),
															children: (0, c.Y)(W, { active: v, treePath: A }),
													  })),
											(0, t.Y)('div', {
												className: p()('ss__slideout', V, F, { 'ss__slideout--active': v }),
												style: { visibility: B || U ? 'visible' : 'hidden' },
												...z,
												children: J && (0, c.Y)(C, { toggleActive: P, active: v, treePath: A }),
											}),
											(0, t.Y)(T.h, { ...$.overlay, active: v, onClick: P }),
										],
								  })
								: (0, t.Y)(r.FK, {})
						);
					});
			},
			'./components/src/hooks/useA11y.tsx'(m, o, e) {
				'use strict';
				e.d(o, { DH: () => d, aZ: () => s, iy: () => a });
				const t = 9,
					r = 27,
					s = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(n, p, c, y) {
					const _ = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${_}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = _),
							(i.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					n &&
						!n.attributes?.[s] &&
						(n.setAttribute(s, !0),
						n.setAttribute('tabIndex', `${p || 0}`),
						n.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && n.click();
						}),
						c &&
							n.addEventListener('keydown', function (i) {
								const b = n.querySelectorAll(d),
									u = b[0],
									f = b[b.length - 1];
								if (i.keyCode == r) {
									n.focus(), y && y(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === t) &&
									(i.shiftKey
										? document.activeElement === u && (f.focus(), i.preventDefault())
										: document.activeElement === f && (u.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useMediaQuery.tsx'(m, o, e) {
				'use strict';
				e.d(o, { U: () => r });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function r(s, d) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const a = window.matchMedia(s),
						[n, p] = (0, t.J0)(!!a.matches);
					return (
						(0, t.vJ)(() => {
							const c = () => p(!!a.matches);
							return (
								a.addListener(c),
								() => {
									d instanceof Function && d(), a.removeListener(c);
								}
							);
						}, []),
						n
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(m, o, e) {
				'use strict';
				e.d(o, { F: () => t });
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
			'./components/src/utilities/defined.ts'(m, o, e) {
				'use strict';
				e.d(o, { s: () => t });
				function t(r) {
					const s = {};
					return (
						Object.keys(r).map((d) => {
							r[d] !== void 0 && (s[d] = r[d]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(m, o, e) {
				'use strict';
				e.d(o, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					d = (a) => {
						const n = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								n.current && a.className?.includes('lang-') && !a.className?.includes(s) && window?.Prism?.highlightElement(n.current);
							}, [a.className, a.children, n]),
							(0, t.Y)('code', { ...a, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(m) {
				function o(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (m.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Slideout-Slideout-stories.21baf014.iframe.bundle.js.map
