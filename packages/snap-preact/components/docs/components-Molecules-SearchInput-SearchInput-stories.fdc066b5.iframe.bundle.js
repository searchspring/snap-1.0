(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[2407],
		{
			'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx'(y, r, t) {
				'use strict';
				t.r(r), t.d(r, { Default: () => p, __namedExportsOrder: () => v, default: () => s });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = t('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					i = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const e = `# SearchInput

Renders an input element

## Sub-components
- Button

## Usage
\`\`\`jsx
import { SearchInput } from '@searchspring/snap-preact-components';
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
					s = {
						title: 'Molecules/SearchInput',
						component: o.D,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(c.oz, { options: { overrides: { code: i.Z } }, children: e }), (0, n.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, n.Y)('div', { style: { maxWidth: '900px', height: '300px' }, children: (0, n.Y)(h, {}) })],
						argTypes: {
							value: {
								defaultValue: '',
								type: { required: !0 },
								description: 'sets the value for the input',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onChange: { description: 'OnChange Callback', table: { type: { summary: 'function' } }, control: { type: 'none' }, action: 'onChange' },
							onKeyUp: { description: 'OnKeyUp Callback', table: { type: { summary: 'function' } }, control: { type: 'none' }, action: 'onKeyUp' },
							onKeyDown: {
								description: 'OnKeyDown Callback',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onKeyDown',
							},
							onClick: { description: 'OnClick Callback', table: { type: { summary: 'function' } }, control: { type: 'none' }, action: 'onClick' },
							submitSearchButton: {
								description: 'Button component props for submit search button',
								table: { type: { summary: "{ icon: 'search' }" } },
								control: { type: 'object' },
							},
							clearSearchButton: {
								description: 'Button component props for clear search button',
								table: { type: { summary: "{ icon: 'close-thin' }" } },
								control: { type: 'object' },
							},
							closeSearchButton: {
								description: 'Button component props for close search button',
								table: { type: { summary: '{}' } },
								control: { type: 'object' },
							},
							placeholderText: {
								defaultValue: 'Search',
								description: 'Display placeholder text',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Search' } },
								control: { type: 'text' },
							},
							inputName: { description: 'sets the name attribute for the input', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							disabled: {
								description: 'boolean to set disabled attribute',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							...l.F,
						},
					},
					p = (h) => (0, n.Y)(o.D, { ...h });
				(p.args = { submitSearchButton: { icon: 'search' }, clearSearchButton: { icon: 'close-thin' } }),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...p.parameters?.docs?.source },
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(y, r, t) {
				'use strict';
				t.d(r, { $: () => B });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/preact/dist/preact.module.js'),
					o = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = t('../../node_modules/classnames/index.js'),
					l = t.n(i),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('./components/src/providers/cache.tsx'),
					p = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = t('./components/src/providers/treePath.tsx'),
					h = t('./components/src/hooks/useA11y.tsx'),
					a = t('./components/src/utilities/cloneWithProps.tsx'),
					g = t('./components/src/utilities/defined.ts'),
					x = t('./components/src/utilities/mergeProps.ts'),
					S = t('./components/src/utilities/mergeStyles.ts'),
					W = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					H = t('./components/src/hooks/useLang.tsx'),
					Z = t('../../node_modules/deepmerge/dist/cjs.js'),
					z = t.n(Z),
					P = t('../../node_modules/color/index.js'),
					J = t.n(P);
				const Q = ({ native: u, color: D, backgroundColor: C, borderColor: O, theme: _ }) => {
						const d = new (J())(C || D || _?.variables?.colors?.primary).lightness(95);
						return u
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: D || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: C || '#fff',
									border: `1px solid ${O || D || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: d.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					B = (0, e.PA)((u) => {
						const D = (0, p.u)(),
							O = { disableA11y: !1, treePath: (0, v.LU)() },
							_ = (0, x.v6)('button', D, O, u),
							{
								content: d,
								children: f,
								disabled: M,
								native: A,
								onClick: j,
								disableA11y: N,
								disableStyles: k,
								className: K,
								internalClassName: L,
								icon: m,
								lang: Y,
								treePath: E,
								style: U,
								styleScript: I,
								themeStyleScript: w,
								...R
							} = _,
							F = { icon: { internalClassName: 'ss__button__icon', ...(0, g.s)({ disableStyles: k }), theme: _?.theme, treePath: E } },
							V = {
								...(0, S.Z)(_, Q),
								className: l()('ss__button', { 'ss__button--native': A, 'ss__button--disabled': M }, K, L),
								disabled: M,
								onClick: (G) => !M && j && j(G),
								...R,
							},
							T = { ref: (G) => (0, h.iy)(G) },
							b = {},
							q = z()(b, Y || {}),
							$ = (0, H.u)(q, {});
						return d || f || m || Y?.button?.value
							? (0, n.Y)(s._, {
									children: A
										? (0, n.FD)('button', {
												...V,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...$.button?.all,
														children: [(0, a.Y)(d, { treePath: E }), (0, a.Y)(f, { treePath: E })],
													}),
													m && (0, n.Y)(W.I, { ...F.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  })
										: (0, n.FD)('div', {
												...(N ? {} : T),
												role: 'button',
												'aria-disabled': M,
												...V,
												...$.button?.attributes,
												children: [
													d || f || $.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...$.button?.value,
																children: [(0, a.Y)(d, { treePath: E }), (0, a.Y)(f, { treePath: E })],
														  })
														: void 0,
													m && (0, n.Y)(W.I, { ...F.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  }),
							  })
							: (0, n.Y)(c.FK, {});
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(y, r, t) {
				'use strict';
				t.d(r, { D: () => z });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = t('../../node_modules/classnames/index.js'),
					i = t.n(o),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					s = t('./components/src/utilities/mergeProps.ts'),
					p = t('./components/src/utilities/mergeStyles.ts'),
					v = t('./components/src/providers/cache.tsx'),
					h = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = t('./components/src/providers/treePath.tsx'),
					g = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = t('./components/src/components/Atoms/Button/Button.tsx'),
					S = t('../../node_modules/deepmerge/dist/cjs.js'),
					W = t.n(S),
					H = t('./components/src/hooks/useLang.tsx');
				const Z = ({ theme: P }) =>
						(0, c.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${P?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					z = (0, l.PA)((P) => {
						const J = (0, h.u)(),
							B = {
								placeholderText: 'Search',
								treePath: (0, a.LU)(),
								submitSearchButton: { icon: 'search' },
								clearSearchButton: { icon: 'close-thin' },
							},
							u = (0, s.v6)('searchInput', J, B, P);
						(u.submitSearchButton = { ...B.submitSearchButton, ...u.submitSearchButton, ...P?.submitSearchButton }),
							(u.clearSearchButton = { ...B.clearSearchButton, ...u.clearSearchButton, ...P?.clearSearchButton }),
							(u.closeSearchButton = { ...B.closeSearchButton, ...u.closeSearchButton, ...P?.closeSearchButton });
						const {
							placeholderText: D,
							value: C,
							submitSearchButton: O,
							closeSearchButton: _,
							clearSearchButton: d,
							inputRef: f,
							inputName: M,
							onChange: A,
							onClick: j,
							onKeyDown: N,
							onKeyUp: k,
							disabled: K,
							disableStyles: L,
							className: m,
							internalClassName: Y,
							treePath: E,
						} = u;
						let U, I;
						C === void 0 ? ([U, I] = (0, g.J0)('')) : (U = C);
						const R = {
								submitSearchButton: {
									...O,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, e.s)({ disableStyles: L }),
									theme: u?.theme,
									treePath: E,
								},
								clearSearchButton: {
									...d,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: () => {
										f?.current && (((f?.current).value = ''), (f?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											I && I(''),
											d?.onClick && d.onClick();
									},
									...(0, e.s)({ disableStyles: L }),
									theme: u?.theme,
									treePath: E,
								},
								closeSearchButton: {
									..._,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, e.s)({ disableStyles: L }),
									theme: u?.theme,
									treePath: E,
								},
							},
							F = (0, p.Z)(u, Z),
							X = {
								placeholderText: { attributes: { placeholder: D } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							V = W()(X, u.lang || {}),
							T = (0, H.u)(V, {});
						return (0, n.Y)(v._, {
							children: (0, n.FD)('div', {
								...F,
								className: i()('ss__search-input', { 'ss__input--disabled': K }, m, Y),
								onClick: (b) => !K && j && j(b),
								children: [
									_ && (0, n.Y)(x.$, { ...R.closeSearchButton, ...T.closeSearchButton.all }),
									(0, n.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...T.placeholderText.attributes,
										value: U,
										name: M,
										ref: f,
										onKeyDown: (b) => N && N(b),
										onKeyUp: (b) => k && k(b),
										onChange: (b) => {
											I && I(b.target.value || ''), A && A(b);
										},
										disabled: K,
									}),
									(0, n.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											d && U?.length ? (0, n.Y)(x.$, { ...R.clearSearchButton, ...T.clearSearchButton.all }) : null,
											O && (0, n.Y)(x.$, { ...R.submitSearchButton, ...T.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(y, r, t) {
				'use strict';
				t.d(r, { DH: () => i, aZ: () => o, iy: () => l });
				const n = 9,
					c = 27,
					o = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, s, p, v) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = h),
							(a.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					e &&
						!e.attributes?.[o] &&
						(e.setAttribute(o, !0),
						e.setAttribute('tabIndex', `${s || 0}`),
						e.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && e.click();
						}),
						p &&
							e.addEventListener('keydown', function (a) {
								const g = e.querySelectorAll(i),
									x = g[0],
									S = g[g.length - 1];
								if (a.keyCode == c) {
									e.focus(), v && v(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === n) &&
									(a.shiftKey
										? document.activeElement === x && (S.focus(), a.preventDefault())
										: document.activeElement === S && (x.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(y, r, t) {
				'use strict';
				t.d(r, { u: () => n });
				const n = (c, o) => {
					const i = {};
					return (
						Object.keys(c).forEach((l) => {
							const e = c && c[l],
								s = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (s.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value(o) } })
										: (s.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((s.attributes = { 'ss-lang': l }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = e.attributes['aria-label'](o))
											: (s.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](o))
											: (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (s.attributes.title = e.attributes.title(o))
											: (s.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (s.attributes.alt = e.attributes.alt(o)) : (s.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = e.attributes.placeholder(o))
											: (s.attributes.placeholder = e.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': l })),
								(i[l] = s);
						}),
						i
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, r, t) {
				'use strict';
				t.d(r, { F: () => n });
				const n = {
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
			'./components/src/utilities/defined.ts'(y, r, t) {
				'use strict';
				t.d(r, { s: () => n });
				function n(c) {
					const o = {};
					return (
						Object.keys(c).map((i) => {
							c[i] !== void 0 && (o[i] = c[i]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(y, r, t) {
				'use strict';
				t.d(r, { Z: () => i });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					i = (l) => {
						const e = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(o) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, n.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function r(t) {
					var n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (y.exports = r);
			},
		},
	]);
})();
