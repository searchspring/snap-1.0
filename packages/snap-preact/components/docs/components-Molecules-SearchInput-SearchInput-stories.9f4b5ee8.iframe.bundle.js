(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2407],
		{
			'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx'(b, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => m, __namedExportsOrder: () => g, default: () => o });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = t('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					u = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const e = `# SearchInput

Renders an input element

## Sub-components
- Button

## Usage
\`\`\`jsx
import { SearchInput } from '@athoscommerce/snap-preact-components';
\`\`\`
\`\`\`jsx
<SearchInput onChange={handleChange} placeholderText={"placeholder text"}/>
\`\`\`

### value
The \`value\` prop sets the input value if externally managed.

\`\`\`jsx
<SearchInput value={'dress'} placeholderText={"placeholder text"} />
\`\`\`

### placeholderText
The \`placeholderText\` prop sets the input placeholder text. 

\`\`\`jsx
<SearchInput placeholderText={"placeholder text"} />
\`\`\`

### inputName
The \`inputName\` prop sets the input name attribute value. 

\`\`\`jsx
<SearchInput inputName={"query"} />
\`\`\`

### onChange
The \`onChange\` prop is invoked when the input's value has been changed. 

\`\`\`jsx
<SearchInput onChange={handleChange} />
\`\`\`

### onKeyUp
The \`onKeyUp\` prop is invoked on keyUp on the input. 

\`\`\`jsx
<SearchInput onKeyUp={handleChange} />
\`\`\`

### onKeyDown
The \`onKeyDown\` prop is invoked keyDown on the input

\`\`\`jsx
<SearchInput onKeyDown={handleChange} />
\`\`\`

### onClick
The \`onClick\` prop is invoked on click of anything in the component. Wrapper, input or icon. 

\`\`\`jsx
<SearchInput onClick={handleChange} />
\`\`\`

### submitSearchButton
The \`submitSearchButton\` prop specifies props to pass to the submit search button component. Takes any \`Button\` component props. 

\`\`\`jsx

const buttonProps = {
    icon: 'search',
    onClick: () => func
};

<SearchInput submitSearchButton={buttonProps} />
\`\`\`

### clearSearchButton
The \`clearSearchButton\` prop specifies props to pass to the clear search button component. Takes any \`Button\` component props. Note this button only renders if there is a value to clear. 

\`\`\`jsx

const buttonProps = {
    icon: 'close-thin',
    onClick: () => func
};

<SearchInput clearSearchButton={buttonProps} />
\`\`\`

### closeSearchButton
The \`closeSearchButton\` prop specifies props to pass to the close search button component. Takes any \`Button\` component props. 

\`\`\`jsx

const buttonProps = {
    icon: 'angle-left',
    onClick: () => func
};

<SearchInput closeSearchButton={buttonProps} />
\`\`\`

### inputRef
The \`inputRef\` prop specifies a ref to set on the input element. To be accessed in a parent component.

\`\`\`jsx
const renderedInputRef = useRef(null);
useEffect(() => {
    console.log(renderedInputRef)
},[])

<SearchInput inputRef={renderedInputRef} />
\`\`\`
`,
					o = {
						title: 'Molecules/SearchInput',
						component: s.D,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(r.oz, { options: { overrides: { code: u.Z } }, children: e }), (0, n.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, n.Y)('div', { style: { maxWidth: '900px', height: '300px' }, children: (0, n.Y)(p, {}) })],
						argTypes: {
							value: {
								defaultValue: '',
								type: { required: !0 },
								description: 'sets the value for the input',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onChange: {
								description: 'OnChange Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onChange',
							},
							onKeyUp: {
								description: 'OnKeyUp Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onKeyUp',
							},
							onKeyDown: {
								description: 'OnKeyDown Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onKeyDown',
							},
							onClick: {
								description: 'OnClick Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							submitSearchButton: {
								description: 'Button component props for submit search button',
								table: { category: 'Templates Legal', type: { summary: "{ icon: 'search-thin' }" } },
								control: { type: 'object' },
							},
							clearSearchButton: {
								description: 'Button component props for clear search button',
								table: { category: 'Templates Legal', type: { summary: "{ icon: 'close-thin' }" } },
								control: { type: 'object' },
							},
							closeSearchButton: {
								description: 'Button component props for close search button',
								table: { category: 'Templates Legal', type: { summary: '{}' } },
								control: { type: 'object' },
							},
							placeholderText: {
								defaultValue: 'Search',
								description: 'Display placeholder text',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Search' } },
								control: { type: 'text' },
							},
							inputName: {
								description: 'sets the name attribute for the input',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							disabled: {
								description: 'boolean to set disabled attribute',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							...l.F,
						},
					},
					m = (p) => (0, n.Y)(s.D, { ...p });
				(m.args = { submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...m.parameters?.docs?.source },
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(b, a, t) {
				'use strict';
				t.d(a, { $: () => Q });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/classnames/index.js'),
					u = t.n(s),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = t('./components/src/providers/treePath.tsx'),
					g = t('./components/src/hooks/useA11y.tsx'),
					p = t('./components/src/utilities/cloneWithProps.tsx'),
					c = t('./components/src/utilities/defined.ts'),
					D = t('./components/src/utilities/mergeProps.ts'),
					v = t('./components/src/utilities/mergeStyles.ts'),
					S = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					V = t('./components/src/hooks/useLang.tsx'),
					$ = t('../../node_modules/deepmerge/dist/cjs.js'),
					H = t.n($),
					Z = t('../../node_modules/color/index.js'),
					P = t.n(Z);
				const z = ({ native: x, color: i, backgroundColor: I, borderColor: C, theme: _ }) => {
						const y = new (P())(I || i || _?.variables?.colors?.primary || void 0).lightness(95);
						return x
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: i || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: I || '#fff',
									border: `1px solid ${C || i || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: y.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					Q = (0, l.PA)((x) => {
						const i = (0, o.u)(),
							C = { disableA11y: !1, treePath: (0, m.LU)() },
							_ = (0, D.v6)('button', i, C, x),
							{
								content: y,
								children: f,
								disabled: E,
								native: K,
								onClick: L,
								disableA11y: U,
								disableStyles: R,
								className: W,
								internalClassName: A,
								icon: d,
								lang: N,
								treePath: B,
								style: k,
								styleScript: j,
								themeStyleScript: O,
								...X
							} = _,
							T = { icon: { internalClassName: 'ss__button__icon', ...(0, c.s)({ disableStyles: R }), theme: _?.theme, treePath: B } },
							Y = {
								...(0, v.Z)(_, z),
								className: u()('ss__button', { 'ss__button--native': K, 'ss__button--disabled': E }, W, A),
								disabled: E,
								onClick: (G) => !E && L && L(G),
								...X,
							},
							J = { ref: (G) => (0, g.iy)(G) },
							M = {},
							h = H()(M, N || {}),
							F = (0, V.u)(h, {});
						return y || f || d || N?.button?.value
							? (0, n.Y)(e._, {
									children: K
										? (0, n.FD)('button', {
												...Y,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...F.button?.all,
														children: [(0, p.Y)(y, { treePath: B }), (0, p.Y)(f, { treePath: B })],
													}),
													d && (0, n.Y)(S.I, { ...T.icon, ...(typeof d == 'string' ? { icon: d } : d) }),
												],
										  })
										: (0, n.FD)('div', {
												...(U ? {} : J),
												role: 'button',
												'aria-disabled': E,
												...Y,
												...F.button?.attributes,
												children: [
													y || f || F.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...F.button?.value,
																children: [(0, p.Y)(y, { treePath: B }), (0, p.Y)(f, { treePath: B })],
														  })
														: void 0,
													d && (0, n.Y)(S.I, { ...T.icon, ...(typeof d == 'string' ? { icon: d } : d) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(b, a, t) {
				'use strict';
				t.d(a, { D: () => Z });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/classnames/index.js'),
					u = t.n(s),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					o = t('./components/src/utilities/mergeProps.ts'),
					m = t('./components/src/utilities/mergeStyles.ts'),
					g = t('./components/src/providers/cache.tsx'),
					p = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = t('./components/src/providers/treePath.tsx'),
					D = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = t('./components/src/components/Atoms/Button/Button.tsx'),
					S = t('../../node_modules/deepmerge/dist/cjs.js'),
					V = t.n(S),
					$ = t('./components/src/hooks/useLang.tsx');
				const H = ({ theme: P }) =>
						(0, r.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${P?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					Z = (0, l.PA)((P) => {
						const z = (0, p.u)(),
							x = {
								placeholderText: 'Search',
								treePath: (0, c.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							i = (0, o.v6)('searchInput', z, x, P);
						(i.submitSearchButton = { ...x.submitSearchButton, ...i.submitSearchButton, ...P?.submitSearchButton }),
							(i.clearSearchButton = { ...x.clearSearchButton, ...i.clearSearchButton, ...P?.clearSearchButton }),
							(i.closeSearchButton = { ...x.closeSearchButton, ...i.closeSearchButton, ...P?.closeSearchButton });
						const {
							placeholderText: I,
							value: C,
							submitSearchButton: _,
							closeSearchButton: y,
							clearSearchButton: f,
							inputRef: E,
							inputName: K,
							onChange: L,
							onClick: U,
							onKeyDown: R,
							onKeyUp: W,
							disabled: A,
							disableStyles: d,
							className: N,
							internalClassName: B,
							treePath: k,
						} = i;
						let j, O;
						C === void 0 ? ([j, O] = (0, D.J0)('')) : (j = C);
						const T = {
								submitSearchButton: {
									..._,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, e.s)({ disableStyles: d }),
									theme: i?.theme,
									treePath: k,
								},
								clearSearchButton: {
									...f,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (h) => {
										E?.current && (((E?.current).value = ''), (E?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											O && O(''),
											f?.onClick && f.onClick(h);
									},
									...(0, e.s)({ disableStyles: d }),
									theme: i?.theme,
									treePath: k,
								},
								closeSearchButton: {
									...y,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, e.s)({ disableStyles: d }),
									theme: i?.theme,
									treePath: k,
								},
							},
							w = (0, m.Z)(i, H),
							Y = {
								placeholderText: { attributes: { placeholder: I } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							J = V()(Y, i.lang || {}),
							M = (0, $.u)(J, {});
						return (0, n.Y)(g._, {
							children: (0, n.FD)('div', {
								...w,
								className: u()('ss__search-input', { 'ss__input--disabled': A }, N, B),
								onClick: (h) => !A && U && U(h),
								children: [
									y && (0, n.Y)(v.$, { ...T.closeSearchButton, ...M.closeSearchButton.all }),
									(0, n.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...M.placeholderText.attributes,
										value: j,
										name: K,
										ref: E,
										onKeyDown: (h) => R && R(h),
										onKeyUp: (h) => W && W(h),
										onChange: (h) => {
											O && O(h.target.value || ''), L && L(h);
										},
										disabled: A,
									}),
									(0, n.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											f && j?.length ? (0, n.Y)(v.$, { ...T.clearSearchButton, ...M.clearSearchButton.all }) : null,
											_ && (0, n.Y)(v.$, { ...T.submitSearchButton, ...M.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, a, t) {
				'use strict';
				t.d(a, { DH: () => u, aZ: () => s, iy: () => l });
				const n = 9,
					r = 27,
					s = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, o, m, g) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = p),
							(c.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					e &&
						!e.attributes?.[s] &&
						(e.setAttribute(s, !0),
						e.setAttribute('tabIndex', `${o || 0}`),
						e.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && e.click();
						}),
						m &&
							e.addEventListener('keydown', function (c) {
								const D = e.querySelectorAll(u),
									v = D[0],
									S = D[D.length - 1];
								if (c.keyCode == r) {
									e.focus(), g && g(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === n) &&
									(c.shiftKey
										? document.activeElement === v && (S.focus(), c.preventDefault())
										: document.activeElement === S && (v.focus(), c.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(b, a, t) {
				'use strict';
				t.d(a, { u: () => n });
				const n = (r, s) => {
					const u = {};
					return (
						Object.keys(r).forEach((l) => {
							const e = r && r[l],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value(s) } })
										: (o.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': l }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](s))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](s))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(s))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(s)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(s))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': l })),
								(u[l] = o);
						}),
						u
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, a, t) {
				'use strict';
				t.d(a, { F: () => n });
				const n = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/defined.ts'(b, a, t) {
				'use strict';
				t.d(a, { s: () => n });
				function n(r) {
					const s = {};
					return (
						Object.keys(r).map((u) => {
							r[u] !== void 0 && (s[u] = r[u]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, a, t) {
				'use strict';
				t.d(a, { Z: () => u });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					u = (l) => {
						const e = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(s) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, n.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function a(t) {
					var n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (b.exports = a);
			},
		},
	]);
})();
