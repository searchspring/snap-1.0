(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[2813],
		{
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.stories.tsx'(b, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => m, Slim: () => i, __namedExportsOrder: () => _, default: () => v });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					f = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					w = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts');
				const A =
						"# AutocompleteLayout\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteLayout component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteLayout components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- Banner\n- Results\n- Icon\n- TermsList\n- Terms\n- Button\n- Facets\n- FacetsHorizontal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `C1`, `C2`, `C3`, `C4`, & `_` \n\nAll of the `Cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `C1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`\n\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} layout={[['C1','C2','C3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `C1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['terms.history', 'terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `C2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `C3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['content', ['_', 'button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `C4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['facets']\n}}/>\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n",
					v = {
						title: 'Organisms/AutocompleteLayout',
						component: f.h,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(h.oz, { options: { overrides: { code: w.Z } }, children: A }), (0, n.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						decorators: [
							(d) =>
								(0, n.FD)('div', {
									style: { maxWidth: '960px', position: 'relative' },
									children: [
										(0, n.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
										}),
										(0, n.Y)(d, {}),
									],
								}),
						],
						argTypes: {
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
											"['c1' | 'c2' | 'c3' | 'c4' | 'termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']",
									},
									defaultValue: { summary: "[['c1','c2', 'c3']]" },
								},
								control: 'array',
							},
							column1: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
								table: {
									type: {
										summary:
											"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['termsList'],
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
											"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['facets'],
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
											"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: [['content'], ['_', 'button.see-more']],
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
											"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
									},
								},
								control: 'array',
							},
							width: {
								defaultValue: '100%',
								description: 'Change width of the component',
								table: { type: { summary: 'string' }, defaultValue: { summary: '100%' } },
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
							viewportMaxHeight: {
								defaultValue: !1,
								description: 'Autocomplete fully visible in viewport',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...l.F,
						},
					},
					g = y.p.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
					m = (d, { loaded: { controller: c } }) => (
						setTimeout(() => {
							c.bind();
						}),
						(0, n.Y)(f.h, { ...d, controller: c, input: c?.config.selector })
					);
				m.loaders = [async () => ({ controller: await g })];
				const i = (d, { loaded: { controller: c } }) => (
					setTimeout(() => {
						c.bind();
					}),
					(0, n.Y)(f.h, { ...d, controller: c, input: c?.config.selector })
				);
				(i.loaders = [async () => ({ controller: await g })]),
					(i.args = {
						layout: [['termsList'], ['content'], ['_', 'button.see-more', '_']],
						width: '400px',
						theme: { components: { results: { columns: 2, rows: 1 } } },
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteLayoutProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  // bind after input exists
  setTimeout(() => {
    controller.bind();
  });
  return <AutocompleteLayout {...args} controller={controller} input={controller?.config.selector} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteLayoutProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  // bind after input exists
  setTimeout(() => {
    controller.bind();
  });
  return <AutocompleteLayout {...args} controller={controller} input={controller?.config.selector} />;
}`,
								...i.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default', 'Slim'];
			},
			'./components/src/utilities/componentArgs.ts'(b, r, e) {
				'use strict';
				e.d(r, { F: () => n });
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
			'./components/src/utilities/snapify.ts'(b, r, e) {
				'use strict';
				e.d(r, { p: () => C });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					h = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					f = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					w = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					A = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					v = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					m = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					i = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					c = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					T = { globals: { siteId: '8uyt2m' } };
				class C {
					static recommendation(o) {
						const s = o.id;
						if (p[s]) return p[s];
						const u = (p[s] = j({ client: T, controller: o }));
						return (
							u.on('afterStore', async ({ controller: a }, x) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(o) {
						const s = o.id;
						if (p[s]) return p[s];
						const u = (p[s] = M({ client: T, controller: o }));
						return (
							u.on('afterStore', async ({ controller: a }, x) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
					static search(o) {
						const s = o.id;
						if (p[s]) return p[s];
						const u = (p[s] = L({ client: T, controller: o }));
						return (
							u.on('afterStore', async ({ controller: a }, x) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
				}
				function L(t) {
					const o = new g.V(new i.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), m.X);
					return new h.Tp(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new A.U(t.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new _.E(),
						profiler: new d.U(),
						logger: new c.V(),
						tracker: new E.J(t.client.globals),
					});
				}
				function j(t) {
					const o = new g.V(new i.E(), m.X).detach(!0);
					return new w.c(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new v.t(t.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new _.E(),
						profiler: new d.U(),
						logger: new c.V(),
						tracker: new E.J(t.client.globals),
					});
				}
				function M(t) {
					const o = new g.V(new i.E(), m.X).detach();
					return new f.Z(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new y.Y(t.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new _.E(),
						profiler: new d.U(),
						logger: new c.V(),
						tracker: new E.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, r, e) {
				'use strict';
				e.d(r, { Z: () => w });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const f = 'prism-block',
					w = (l) => {
						const y = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								y.current && l.className?.includes('lang-') && !l.className?.includes(f) && window?.Prism?.highlightElement(y.current);
							}, [l.className, l.children, y]),
							(0, n.Y)('code', { ...l, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function r(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (b.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-AutocompleteLayout-AutocompleteLayout-stories.005aedbd.iframe.bundle.js.map
