(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7845],
		{
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.stories.tsx'(v, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => d, __namedExportsOrder: () => b, default: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'),
					g = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const w =
					"# AutocompleteSlideout\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteSlideout component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteSlideout components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- Slideout\n- SearchInput\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### slideDirection\nThe `slideDirection` prop sets the direction that the slideout slides in. Defaults to `left`. Available values are `left`, `right`, `top`, & `bottom`.\n\n```jsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} slideDirection={'right'} />\n```\n";
				var m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = {
						title: 'Templates/AutocompleteSlideout',
						component: l.o,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(f.oz, { options: { overrides: { code: g.Z } }, children: w }), (0, t.Y)(f.uY, { story: f.h1 })],
									}),
							},
						},
						decorators: [
							(h) =>
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
										(0, t.Y)(h, {}),
									],
								}),
						],
						argTypes: {
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.0)',
								description: 'Slideout overlay color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							slideDirection: {
								defaultValue: 'left',
								description: 'Slideout slide direction',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'left' } },
								control: { type: 'text' },
							},
							buttonSelector: {
								description: 'Slideout button selector. (defaults to input)',
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
							...u.F,
						},
					},
					T = a.p.autocomplete({
						id: 'AutocompleteSlideout',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					d = (h, { loaded: { controller: i } }) => {
						const [x, y] = (0, m.J0)(!1);
						return (
							(0, m.vJ)(() => {
								document.querySelector('#searchInput') && y(!0);
							}, []),
							x ? (0, t.Y)(l.o, { ...h, controller: i, input: i?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(d.loaders = [async () => ({ controller: await T })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteSlideoutProps, {
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
  return inputFound ? <AutocompleteSlideout {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const b = ['Default'];
			},
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'(v, s, e) {
				'use strict';
				e.d(s, { o: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/preact/dist/preact.module.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('./components/src/utilities/defined.ts'),
					w = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					b = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					h = e('../../node_modules/classnames/index.js'),
					i = e.n(h),
					x = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					y = e('./components/src/hooks/useA11y.tsx'),
					A = e('./components/src/hooks/useAcRenderedInput.tsx');
				const C = ({}) =>
						(0, u.AH)({
							border: '1px solid #eee',
							'& .ss__autocomplete': { position: 'relative' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					O = (0, g.PA)((B) => {
						const j = (0, T.u)(),
							r = {
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							o = (0, w.v6)('autocompleteSlideout', j, r, B),
							[c, _] = (0, l.J0)('query');
						let n = o.input,
							E = o.buttonSelector;
						if (n) {
							typeof n == 'string' && (n = document.querySelector(n));
							const P = n?.getAttribute('name');
							P && (_(P), o.renderInput && n.setAttribute('name', ''));
						}
						!E && n && (E = n);
						const {
								layout: U,
								disableStyles: L,
								slideDirection: k,
								controller: D,
								overlayColor: N,
								renderInput: K,
								className: J,
								internalClassName: Y,
								treePath: I,
								width: z,
							} = o,
							W = (0, l.li)(null),
							M = () => {
								F(!1), D.setFocused();
							},
							R = {
								autocompleteLayout: { onReset: () => M(), layout: U, ...(0, a.s)({ disableStyles: L }), theme: o?.theme, treePath: I },
								slideout: {
									width: z,
									rerender: !1,
									overlayColor: N,
									slideDirection: k,
									buttonSelector: E,
									...(0, a.s)({ disableStyles: L }),
									theme: o?.theme,
									treePath: I,
								},
								searchInput: {
									internalClassName: 'autocomplete-slideout__search-input',
									inputName: c,
									submitSearchButton: {
										onClick: () => {
											window.location.href = D.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => M(), icon: 'angle-left' },
									...(0, a.s)({ disableStyles: L }),
									treePath: `${I} slideout`,
									theme: o?.theme,
								},
							},
							H = (0, m.Z)(o, C),
							[Z, F] = (0, l.J0)(!1);
						let V;
						n &&
							((0, l.vJ)(() => {
								n.addEventListener('click', () => F(!0));
							}),
							(V = (0, A.x)({ input: n, controller: D, renderedInputRef: W, renderInput: !!K, buttonSelector: E })));
						const S = { ...o };
						return (
							delete S.width,
							delete S.className,
							delete S.internalClassName,
							delete S.style,
							delete S.styleScript,
							delete S.themeStyleScript,
							U?.length
								? (0, t.Y)(p._, {
										children: (0, t.Y)(b.S, {
											...H,
											...R.slideout,
											className: i()('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', J, Y),
											active: Z,
											children: (0, t.FD)('div', {
												ref: (P) => (0, y.iy)(P, 0, !0, M),
												children: [
													K ? (0, t.Y)(x.D, { ...R.searchInput, value: D.store.state.input || '', inputRef: W }) : (0, t.Y)(t.FK, {}),
													(0, t.Y)(d.h, { ...S, ...R.autocompleteLayout, input: V, controller: D, treePath: `${I} slideout` }),
												],
											}),
										}),
								  })
								: (0, t.Y)(f.FK, {})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(v, s, e) {
				'use strict';
				e.d(s, { x: () => f });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function f({ input: l, controller: g, renderInput: u, buttonSelector: a, renderedInputRef: w, setActive: m }) {
					const [p, T] = (0, t.J0)(l),
						[d, b] = (0, t.J0)(!1),
						h = () => {
							m && m(!0),
								setTimeout(async () => {
									d || (T(w.current), (g.config.selector = '.ss__search-input__input'), await g.bind(), w?.current?.focus()), b(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (u && a) {
								let i;
								typeof a == 'string' ? (i = document.querySelector(a)) : (i = a),
									i &&
										(i.addEventListener('click', (x) => {
											x.stopPropagation(), h();
										}),
										i.addEventListener('focus', () => h()),
										i.addEventListener('select', () => h()));
							} else
								m &&
									(l.addEventListener('click', (i) => {
										i.stopPropagation(), m(!0);
									}),
									l.addEventListener('focus', () => m(!0)),
									l.addEventListener('select', () => m(!0)));
						}, []),
						(0, t.vJ)(() => {
							l !== p &&
								p?.addEventListener('input', () => {
									l.value = p.value;
								});
						}, [p]),
						p
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(v, s, e) {
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
			'./components/src/utilities/snapify.ts'(v, s, e) {
				'use strict';
				e.d(s, { p: () => C });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					f = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					u = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					a = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					w = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					m = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					p = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					i = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					A = { globals: { siteId: '8uyt2m' } };
				class C {
					static recommendation(o) {
						const c = o.id;
						if (y[c]) return y[c];
						const _ = (y[c] = B({ client: A, controller: o }));
						return (
							_.on('afterStore', async ({ controller: n }, E) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await E();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(o) {
						const c = o.id;
						if (y[c]) return y[c];
						const _ = (y[c] = j({ client: A, controller: o }));
						return (
							_.on('afterStore', async ({ controller: n }, E) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await E();
							}),
							_.init(),
							_
						);
					}
					static search(o) {
						const c = o.id;
						if (y[c]) return y[c];
						const _ = (y[c] = O({ client: A, controller: o }));
						return (
							_.on('afterStore', async ({ controller: n }, E) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await E();
							}),
							_.init(),
							_
						);
					}
				}
				function O(r) {
					const o = new p.V(new d.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), T.X);
					return new f.Tp(r.controller, {
						client: new u.K(r.client.globals, r.client.config),
						store: new w.U(r.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new b.E(),
						profiler: new h.U(),
						logger: new i.V(),
						tracker: new x.J(r.client.globals),
					});
				}
				function B(r) {
					const o = new p.V(new d.E(), T.X).detach(!0);
					return new g.c(r.controller, {
						client: new u.K(r.client.globals, r.client.config),
						store: new m.t(r.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new b.E(),
						profiler: new h.U(),
						logger: new i.V(),
						tracker: new x.J(r.client.globals),
					});
				}
				function j(r) {
					const o = new p.V(new d.E(), T.X).detach();
					return new l.Z(r.controller, {
						client: new u.K(r.client.globals, r.client.config),
						store: new a.Y(r.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new b.E(),
						profiler: new h.U(),
						logger: new i.V(),
						tracker: new x.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, s, e) {
				'use strict';
				e.d(s, { Z: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					g = (u) => {
						const a = (0, f.li)(null);
						return (
							(0, f.vJ)(() => {
								a.current && u.className?.includes('lang-') && !u.className?.includes(l) && window?.Prism?.highlightElement(a.current);
							}, [u.className, u.children, a]),
							(0, t.Y)('code', { ...u, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (v.exports = s);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteSlideout-AutocompleteSlideout-stories.a6fb4bb6.iframe.bundle.js.map
