(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7069],
		{
			'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx'(g, r, o) {
				'use strict';
				o.r(r), o.d(r, { Auto: () => p, Dark: () => m, Error: () => h, Light: () => _, __namedExportsOrder: () => y, default: () => v });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = o('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = o('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'),
					i = o('./components/src/utilities/storybook.tsx'),
					c = o('./components/src/utilities/componentArgs.ts');
				const d = `# BranchOverride

Renders a popup to show when a branch override is in place.
Executes \`onRemoveClick\` prop when the remove button is clicked.
Must have \`name\` and either \`details\` or \`error\` props to render.

## Components Used
- Icon

## Usage
\`\`\`jsx
import { BranchOverride } from '@searchspring/snap-preact-components';
\`\`\`

### name
The required \`name\` prop expects a string containing the name of the override branch.

\`\`\`jsx
<BranchOverride name="testing" />
\`\`\`

### details
The \`details\` prop expects an object containing strings for the \`url\` and \`lastModified\` date of the override branch bundle.

\`\`\`jsx
const details = {
	url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride name="testing" details={details} />
\`\`\`

### error
The \`error\` prop expects an object containing strings for the \`message\` and \`description\` of the error.

\`\`\`jsx
const error = {
	message: 'Branch not found!',
	description: 'Incorrect branch name or branch no longer exists.'
};

<BranchOverride name="next" error={error} />
\`\`\`

### onRemoveClick
The \`onRemoveClick\` prop is a function to be called when the 'remove' button is clicked

\`\`\`jsx
const whenRemoved = (e, name) => {
	console.log(\`remove clicked in the override for the '\${name}' branch\`);
};

<BranchOverride name="testing" onRemoveClick={whenRemoved} />
\`\`\`

### darkMode
The \`darkMode\` prop is used to set the component styling to prefer (or not to prefer) dark mode. By default the component will auto detect the browser preference.

\`\`\`jsx
const details = {
	url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride next="testing" details={details} darkMode={false} />
\`\`\``,
					v = {
						title: 'Organisms/BranchOverride',
						component: n.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(s.oz, { options: { overrides: { code: i.Z } }, children: d }), (0, e.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(a) => (0, e.Y)('div', { style: { maxWidth: '900px', position: 'relative' }, children: (0, e.Y)(a, {}) })],
						argTypes: {
							branch: {
								description: 'bundle branch name',
								type: { required: !0 },
								table: { type: { summary: 'string' } },
								control: { type: 'text' },
							},
							details: {
								description: 'Object containing details for branch override',
								type: { required: !1 },
								table: { type: { summary: '{ url: string; lastModified: string }' } },
								control: { type: 'object' },
							},
							error: {
								description: 'Object containing error message and description',
								type: { required: !1 },
								table: { type: { summary: '{ message: string; description: string }' } },
								control: { type: 'object' },
							},
							onRemoveClick: {
								description: 'optional function to run on remove button click',
								table: { type: { summary: '(e: Event, name: string) => void' } },
								control: { type: 'none' },
								action: 'onRemoveClick',
							},
							darkMode: {
								description: 'enable darkMode',
								type: { required: !1 },
								table: { type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							...c.F,
						},
					},
					p = (a) => (0, e.Y)(n.n, { ...a });
				p.args = { branch: 'next', details: { url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' } };
				const m = (a) => (0, e.Y)(n.n, { ...a });
				m.args = {
					branch: 'next',
					details: { url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
					darkMode: !0,
				};
				const h = (a) => (0, e.Y)(n.n, { ...a });
				h.args = { branch: 'testing', error: { message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' } };
				const _ = (a) => (0, e.Y)(n.n, { ...a });
				(_.args = {
					branch: 'next',
					details: { url: 'https://snapui.searchspring.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
					darkMode: !1,
				}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...p.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...h.parameters?.docs?.source },
						},
					}),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ..._.parameters?.docs?.source },
						},
					});
				const y = ['Auto', 'Dark', 'Error', 'Light'];
			},
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(g, r, o) {
				'use strict';
				o.d(r, { n: () => D });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = o('../../node_modules/preact/dist/preact.module.js'),
					n = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = o('../../node_modules/classnames/index.js'),
					c = o.n(i),
					d = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = o('./components/src/components/Atoms/Icon/Icon.tsx'),
					p = o('./components/src/utilities/defined.ts'),
					m = o('./components/src/utilities/mergeProps.ts'),
					h = o('./components/src/utilities/mergeStyles.ts'),
					_ = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = o('./components/src/providers/treePath.tsx');
				const a = ({ componentTheme: t }) =>
						(0, n.AH)({
							width: '360px',
							height: '120px',
							overflow: 'hidden',
							fontSize: '14px',
							position: 'fixed',
							zIndex: '9999',
							cursor: 'auto',
							bottom: '50px',
							right: 0,
							background: t.main.background,
							color: t.main.color,
							border: t.main.border,
							borderRight: 0,
							borderTopLeftRadius: '5px',
							borderBottomLeftRadius: '5px',
							boxShadow: t.main.boxShadow,
							transition: 'height ease 0.2s, right ease 0.5s 0.2s',
							'&.ss__branch-override--collapsed': {
								transition: 'height ease 0.5s 0.5s, right ease 0.5s',
								right: '-316px',
								height: '50px',
								cursor: 'pointer',
							},
							'.ss__branch-override__top': {
								padding: '10px',
								background: t.top.background,
								borderBottom: t.top.border,
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
									border: t.top.button.border,
									color: t.top.button.color,
									float: 'right',
									marginRight: '14px',
								},
							},
							'.ss__branch-override__bottom': {
								padding: '10px 15px',
								fontSize: '12px',
								'.ss__branch-override__bottom__left': {
									fontWeight: 'bold',
									fontStyle: t.bottom.branch.style,
									color: t.bottom.branch.color,
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
									color: t.bottom.additional.color,
									fontSize: '12px',
									lineHeight: '20px',
								},
								'.ss__branch-override__bottom__content': { marginTop: '10px' },
							},
						}),
					u = {
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
					D = (t) => {
						const j = (0, _.u)(),
							C = { treePath: (0, y.LU)() },
							O = (0, m.v6)('branchOverride', j, C, t),
							{
								branch: x,
								details: E,
								error: f,
								className: T,
								internalClassName: R,
								darkMode: M,
								disableStyles: I,
								onRemoveClick: P,
								treePath: A,
							} = O,
							k = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, p.s)({ disableStyles: I }),
									theme: O?.theme,
									treePath: A,
								},
							},
							S = typeof M == 'boolean' ? M : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[b, w] = (0, d.J0)(S ? 'darkTheme' : 'lightTheme'),
							[L, B] = (0, d.J0)(0);
						f && w('failureTheme');
						const N = (0, h.Z)({ ...O, componentTheme: u[b] }, a);
						return (E || f) && x
							? (0, e.FD)('div', {
									className: c()('ss__branch-override', u[b].class, { 'ss__branch-override--collapsed': L }, T, R),
									...N,
									onClick: (l) => {
										l.preventDefault(), l.stopPropagation(), B(0);
									},
									children: [
										(0, e.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, e.Y)('img', { className: 'ss__branch-override__top__logo', src: u[b].top.logo.src }),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (l) => {
														l.preventDefault(), l.stopPropagation(), B(1);
													},
													children: (0, e.Y)(v.I, { size: '18px', color: u[b].top.close.fill, ...k.icon, icon: 'close-thin' }),
												}),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (l) => {
														l.preventDefault(), l.stopPropagation(), P && P(l, x);
													},
													children: u[b].top.button.content,
												}),
											],
										}),
										(0, e.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, e.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: f
														? (0, e.FD)(e.FK, {
																children: [
																	(0, e.Y)(v.I, { size: '12px', color: u[b].bottom.branch.color, ...k.icon, icon: 'warn' }),
																	(0, e.Y)('span', { children: f.message }),
																],
														  })
														: x,
												}),
												(0, e.Y)('span', { className: 'ss__branch-override__bottom__right', children: f ? x : E?.lastModified }),
												(0, e.Y)('div', { className: 'ss__branch-override__bottom__content', children: f?.description || u[b].bottom.content }),
											],
										}),
									],
							  })
							: (0, e.Y)(s.FK, {});
					};
			},
			'./components/src/utilities/componentArgs.ts'(g, r, o) {
				'use strict';
				o.d(r, { F: () => e });
				const e = {
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
			'./components/src/utilities/defined.ts'(g, r, o) {
				'use strict';
				o.d(r, { s: () => e });
				function e(s) {
					const n = {};
					return (
						Object.keys(s).map((i) => {
							s[i] !== void 0 && (n[i] = s[i]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(g, r, o) {
				'use strict';
				o.d(r, { Z: () => i });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = o('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					i = (c) => {
						const d = (0, s.li)(null);
						return (
							(0, s.vJ)(() => {
								d.current && c.className?.includes('lang-') && !c.className?.includes(n) && window?.Prism?.highlightElement(d.current);
							}, [c.className, c.children, d]),
							(0, e.Y)('code', { ...c, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function r(o) {
					var e = new Error("Cannot find module '" + o + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (g.exports = r);
			},
		},
	]);
})();
