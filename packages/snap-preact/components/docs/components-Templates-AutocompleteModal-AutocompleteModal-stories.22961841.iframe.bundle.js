(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9769],
		{
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.stories.tsx'(C, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => u, __namedExportsOrder: () => P, default: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'),
					x = e('./components/src/utilities/storybook.tsx'),
					p = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const O =
					"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n";
				var _ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const y = {
						title: 'Templates/AutocompleteModal',
						component: l.c,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: x.Z } }, children: O }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [
							(f) =>
								(0, t.FD)('div', {
									style: { maxWidth: '960px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
										}),
										(0, t.FD)('span', {
											style: { margin: '15px', textAlign: 'center', display: 'block' },
											children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
										}),
										(0, t.Y)(f, {}),
									],
								}),
						],
						argTypes: {
							buttonSelector: {
								description: 'Modal button selector. (defaults to input)',
								table: { type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							renderInput: {
								defaultValue: !0,
								description: 'render a second input inside autocomplete window that gets auto focused on open.',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							controller: {
								description: 'Autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Autocomplete controller object' } },
								control: { type: 'none' },
							},
							input: {
								description: 'input element reference',
								type: { required: !0 },
								table: { type: { summary: 'Element or String as CSS Selector' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'array of modules to render in specified layout',
								table: {
									type: {
										summary:
											"['c1' | 'c2' | 'c3' | 'c4' | 'Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']",
									},
									defaultValue: { summary: "[['button.see-more'],['termsList'], ['content']]" },
								},
								control: 'array',
							},
							column1: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
								table: {
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Terms'],
                    width: '150px'
                }`,
									},
								},
								control: 'array',
							},
							column2: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
								table: {
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Facets'],
                    width: '150px'
                }`,
									},
								},
								control: 'array',
							},
							column3: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
								table: {
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: [['Content'], ['_', 'SeeMore']],
                    width: 'auto'
                }`,
									},
								},
								control: 'array',
							},
							column4: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
								table: {
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
								},
								control: 'array',
							},
							width: {
								defaultValue: '500px',
								description: 'Change width of the component',
								table: { type: { summary: 'string' }, defaultValue: { summary: '500px' } },
								control: { type: 'text' },
							},
							height: { description: 'set the height of the component', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							excludeBanners: {
								defaultValue: !1,
								description: 'automatically add merchandising banners',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							facetsTitle: {
								defaultValue: '',
								description: 'Change facets header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							contentTitle: {
								defaultValue: '',
								description: 'Change content header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							overlayColor: {
								description: 'specifies the color of the overlay',
								defaultValue: 'rgba(0, 0, 0, 0.8)',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0, 0, 0, 0.8)' } },
								control: { type: 'text' },
							},
							...p.F,
						},
					},
					b = i.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					u = (f, { loaded: { controller: c } }) => {
						const [T, g] = (0, _.J0)(!1);
						return (
							(0, _.vJ)(() => {
								document.querySelector('#searchInput') && g(!0);
							}, []),
							T ? (0, t.Y)(l.c, { ...f, controller: c, input: c?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(u.loaders = [async () => ({ controller: await b })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteModalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  const [inputFound, setInputFound] = useState(false);
  useEffect(() => {
    if (document.querySelector('#searchInput')) {
      setInputFound(true);
    }
  }, []);
  return inputFound ? <AutocompleteModal {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(C, a, e) {
				'use strict';
				e.d(a, { a: () => N });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = e('../../node_modules/classnames/index.js'),
					p = e.n(x),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useClickOutside.tsx'),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
					g = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					w = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js');
				const F = () =>
						(0, l.AH)({
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
					N = (0, i.PA)((B) => {
						const L = (0, _.u)(),
							o = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, y.LU)() },
							s = (0, f.v6)('modal', L, o, B),
							{
								button: h,
								content: d,
								buttonSelector: v,
								children: M,
								disabled: D,
								open: V,
								onClick: I,
								lockScroll: k,
								startOpen: j,
								disableClickOutside: Y,
								disableA11y: z,
								className: Z,
								internalClassName: R,
								disableStyles: J,
								overlayColor: S,
								onOverlayClick: U,
								treePath: K,
							} = s,
							H = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (E) => {
										U && U(E), W();
									},
									...(0, P.s)({ disableStyles: J, color: S }),
									theme: s?.theme,
									treePath: K,
								},
							};
						let r, A;
						const $ = V === void 0;
						$ ? ([r, A] = (0, m.J0)(j)) : (r = V);
						let X;
						Y ||
							(X = (0, b.L)(() => {
								r && (D || ($ && A && A(!1)));
							}));
						const W = () => {
								$ && A && A((E) => !E);
							},
							q = (0, c.Z)(s, F);
						return (
							(0, m.vJ)(
								() => (
									r && k ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[r, k]
							),
							(0, m.vJ)(() => {
								const E = v ? (typeof v == 'string' ? document.querySelector(v) : v) : null,
									G = (0, w.s)(() => {
										setTimeout(() => {
											r && k ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									Q = (ee) => {
										W(), I && I(ee);
									};
								return (
									E && (D || E.addEventListener('click', Q)),
									window.addEventListener('resize', G),
									() => {
										window.removeEventListener('resize', G), E && E.removeEventListener('click', Q);
									}
								);
							}, []),
							(0, t.Y)(O._, {
								children: (0, t.FD)('div', {
									...q,
									className: p()('ss__modal', { 'ss__modal--open': r }, { 'ss__modal--disabled': D }, Z, R),
									ref: X,
									children: [
										!v &&
											h &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (E) => (z ? null : (0, T.iy)(E)),
												'aria-expanded': r,
												role: 'button',
												onClick: (E) => {
													D || (W(), I && I(E));
												},
												children: (0, u.Y)(h, { open: r, toggleOpen: W, treePath: K }),
											}),
										(d || M) &&
											r &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (E) => (z ? null : (0, T.iy)(E)),
												children: [(0, u.Y)(d, { open: r, toggleOpen: W, treePath: K }), (0, u.Y)(M, { open: r, toggleOpen: W, treePath: K })],
											}),
										(0, t.Y)(g.h, { ...H.overlay, active: !!r }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(C, a, e) {
				'use strict';
				e.d(a, { c: () => N });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					P = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					f = e('../../node_modules/classnames/index.js'),
					c = e.n(f),
					T = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					g = e('./components/src/hooks/useA11y.tsx'),
					w = e('./components/src/hooks/useAcRenderedInput.tsx');
				const F = ({ width: B, height: L, theme: n }) => {
						const o = n?.variables;
						return (0, p.AH)({
							position: 'fixed',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'& .ss__autocomplete-modal__inner': {
								position: 'absolute',
								left: 0,
								right: 0,
								top: '10vh',
								maxHeight: '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: B,
								height: L,
								maxWidth: '100vw',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${o?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					N = (0, x.PA)((B) => {
						const L = (0, b.u)(),
							n = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							o = (0, O.v6)('autocompleteModal', L, n, B),
							[s, h] = (0, l.J0)(!1),
							[d, v] = (0, l.J0)('query');
						let M = o.input,
							D = o.buttonSelector;
						if (M) {
							typeof M == 'string' && (M = document.querySelector(M));
							const A = M?.getAttribute('name');
							A && (v(A), o.renderInput && M.setAttribute('name', ''));
						}
						!D && M && (D = M);
						const {
								layout: V,
								disableStyles: I,
								overlayColor: k,
								controller: j,
								renderInput: Y,
								className: z,
								internalClassName: Z,
								treePath: R,
							} = o,
							J = (0, l.li)(null),
							S = () => {
								j.setFocused(), h(!1);
							},
							U = {
								autocompleteLayout: { layout: V, onReset: () => S(), ...(0, i.s)({ disableStyles: I }), theme: o?.theme, treePath: R },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: D,
									onOverlayClick: () => S(),
									overlayColor: k,
									open: s,
									...(0, i.s)({ disableStyles: I }),
									theme: o?.theme,
									treePath: R,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = j.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => S(), icon: 'angle-left' },
									inputName: d,
									...(0, i.s)({ disableStyles: I }),
									theme: o?.theme,
									treePath: `${R} modal`,
								},
							},
							K = (0, _.Z)(o, F);
						let H;
						M && (H = (0, w.x)({ input: M, controller: j, renderedInputRef: J, renderInput: !!Y, buttonSelector: D, setActive: h }));
						const r = { ...o };
						return (
							delete r.width,
							delete r.className,
							delete r.internalClassName,
							delete r.style,
							delete r.styleScript,
							delete r.themeStyleScript,
							V?.length && s
								? (0, t.Y)(y._, {
										children: (0, t.Y)('div', {
											...K,
											className: c()('ss__autocomplete-modal', z, Z),
											children: (0, t.Y)(P.a, {
												...U.modal,
												children: (0, t.Y)(m.FK, {
													children: (0, t.FD)('div', {
														className: 'ss__autocomplete-modal__inner',
														ref: (A) => (0, g.iy)(A, 0, !0, S),
														children: [
															Y ? (0, t.Y)(T.D, { ...U.searchInput, value: j.store.state.input || '', inputRef: J }) : (0, t.Y)(t.FK, {}),
															(0, t.Y)(u.h, { ...r, ...U.autocompleteLayout, input: H, controller: j, treePath: `${R} modal` }),
														],
													}),
												}),
											}),
										}),
								  })
								: (0, t.Y)(m.FK, {})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(C, a, e) {
				'use strict';
				e.d(a, { x: () => m });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function m({ input: l, controller: x, renderInput: p, buttonSelector: i, renderedInputRef: O, setActive: _ }) {
					const [y, b] = (0, t.J0)(l),
						[u, P] = (0, t.J0)(!1),
						f = () => {
							_ && _(!0),
								setTimeout(async () => {
									u || (b(O.current), (x.config.selector = '.ss__search-input__input'), await x.bind(), O?.current?.focus()), P(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (p && i) {
								let c;
								typeof i == 'string' ? (c = document.querySelector(i)) : (c = i),
									c &&
										(c.addEventListener('click', (T) => {
											T.stopPropagation(), f();
										}),
										c.addEventListener('focus', () => f()),
										c.addEventListener('select', () => f()));
							} else
								_ &&
									(l.addEventListener('click', (c) => {
										c.stopPropagation(), _(!0);
									}),
									l.addEventListener('focus', () => _(!0)),
									l.addEventListener('select', () => _(!0)));
						}, []),
						(0, t.vJ)(() => {
							l !== y &&
								y?.addEventListener('input', () => {
									l.value = y.value;
								});
						}, [y]),
						y
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(C, a, e) {
				'use strict';
				e.d(a, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(C, a, e) {
				'use strict';
				e.d(a, { p: () => F });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					x = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					p = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					O = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					_ = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					u = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					P = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					c = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					w = { globals: { siteId: '8uyt2m' } };
				class F {
					static recommendation(o) {
						const s = o.id;
						if (g[s]) return g[s];
						const h = (g[s] = B({ client: w, controller: o }));
						return (
							h.on('afterStore', async ({ controller: d }, v) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await v();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(o) {
						const s = o.id;
						if (g[s]) return g[s];
						const h = (g[s] = L({ client: w, controller: o }));
						return (
							h.on('afterStore', async ({ controller: d }, v) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await v();
							}),
							h.init(),
							h
						);
					}
					static search(o) {
						const s = o.id;
						if (g[s]) return g[s];
						const h = (g[s] = N({ client: w, controller: o }));
						return (
							h.on('afterStore', async ({ controller: d }, v) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await v();
							}),
							h.init(),
							h
						);
					}
				}
				function N(n) {
					const o = new y.V(new u.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), b.X);
					return new m.Tp(n.controller, {
						client: new p.K(n.client.globals, n.client.config),
						store: new O.U(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new P.E(),
						profiler: new f.U(),
						logger: new c.V(),
						tracker: new T.J(n.client.globals),
					});
				}
				function B(n) {
					const o = new y.V(new u.E(), b.X).detach(!0);
					return new x.c(n.controller, {
						client: new p.K(n.client.globals, n.client.config),
						store: new _.t(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new P.E(),
						profiler: new f.U(),
						logger: new c.V(),
						tracker: new T.J(n.client.globals),
					});
				}
				function L(n) {
					const o = new y.V(new u.E(), b.X).detach();
					return new l.Z(n.controller, {
						client: new p.K(n.client.globals, n.client.config),
						store: new i.Y(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new P.E(),
						profiler: new f.U(),
						logger: new c.V(),
						tracker: new T.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, a, e) {
				'use strict';
				e.d(a, { Z: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					x = (p) => {
						const i = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								i.current && p.className?.includes('lang-') && !p.className?.includes(l) && window?.Prism?.highlightElement(i.current);
							}, [p.className, p.children, i]),
							(0, t.Y)('code', { ...p, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (C.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteModal-AutocompleteModal-stories.22961841.iframe.bundle.js.map
