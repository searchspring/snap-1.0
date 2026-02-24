(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8595],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx'(T, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => h, NoResults: () => g, __namedExportsOrder: () => M, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/snapify.ts'),
					r = e('./components/src/components/Templates/Search/readme.md'),
					o = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
				const c = {
						title: 'Templates/SearchHorizontal',
						component: o.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(m.oz, { options: { overrides: { code: n.Z } }, children: r }), (0, s.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						argTypes: {
							controller: {
								description: 'Search Controller Reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							hideTopToolbar: {
								defaultValue: !1,
								description: 'prevents the top Toolbar component from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideMiddleToolbar: {
								defaultValue: !1,
								description: 'prevents the middle Toolbar component from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideBottomToolbar: {
								defaultValue: !1,
								description: 'prevents the bottom Toolbar component from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							...u.F,
						},
					},
					O = t.p.search({ id: 'search', globals: { siteId: 'atkzs2' } }),
					b = t.p.search({ id: 'noresults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					h = (f, { loaded: { controller: y } }) => (0, s.Y)(o.j, { ...f, controller: y });
				h.loaders = [async () => (await O.search(), { controller: O })];
				const g = (f, { loaded: { controller: y } }) => (0, s.Y)(o.j, { ...f, controller: y });
				(g.loaders = [async () => (await b.search(), { controller: b })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: SearchHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHorizontal {...args} controller={controller} />;
}`,
								...h.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: SearchHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHorizontal {...args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default', 'NoResults'];
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(T, a, e) {
				'use strict';
				e.d(a, { j: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					n = e('./components/src/components/Templates/Search/Search.tsx');
				const t = (0, m.PA)((r) => (0, s.Y)(u._, { children: (0, s.Y)(n.v, { ...r, alias: 'searchHorizontal' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(T, a, e) {
				'use strict';
				e.d(a, { o: () => b });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const O = { ResultTracker: () => (0, m.AH)({}) },
					b = (0, u.PA)((h) => {
						const g = (0, r.u)(),
							M = (0, o.v6)('resultTracker', g, {}, h),
							f = { impression: !0, click: !0 },
							{ children: y, result: E, track: P, controller: D, className: C, internalClassName: v, disableStyles: j, style: l } = M,
							i = { ...f, ...P },
							{ ref: p, inViewport: _ } = (0, c.Q)();
						_ && i.impression && D?.track.product.impression(E);
						const d = {};
						return (
							j ? l && (d.css = [l]) : (d.css = [O.ResultTracker(), l]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${D?.type}-result-tracker`, C, v),
								onClick: (S) => {
									i.click && D?.track.product.click(S, E);
								},
								ref: p,
								...d,
								children: y,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(T, a, e) {
				'use strict';
				e.d(a, { F: () => s });
				const s = {
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
			'./components/src/utilities/componentNameToClassName.ts'(T, a, e) {
				'use strict';
				e.d(a, { b: () => s });
				const s = (m) => m.replace(/([A-Z])/g, (u) => '-' + u.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(T, a, e) {
				'use strict';
				e.d(a, { p: () => D });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const E = {},
					P = { globals: { siteId: '8uyt2m' } };
				class D {
					static recommendation(i) {
						const p = i.id;
						if (E[p]) return E[p];
						const _ = (E[p] = v({ client: P, controller: i }));
						return (
							_.on('afterStore', async ({ controller: d }, S) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await S();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(i) {
						const p = i.id;
						if (E[p]) return E[p];
						const _ = (E[p] = j({ client: P, controller: i }));
						return (
							_.on('afterStore', async ({ controller: d }, S) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await S();
							}),
							_.init(),
							_
						);
					}
					static search(i) {
						const p = i.id;
						if (E[p]) return E[p];
						const _ = (E[p] = C({ client: P, controller: i }));
						return (
							_.on('afterStore', async ({ controller: d }, S) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await S();
							}),
							_.init(),
							_
						);
					}
				}
				function C(l) {
					const i = new O.V(new h.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), b.X);
					return new m.Tp(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new o.U(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new f.V(),
						tracker: new y.J(l.client.globals),
					});
				}
				function v(l) {
					const i = new O.V(new h.E(), b.X).detach(!0);
					return new n.c(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new c.t(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new f.V(),
						tracker: new y.J(l.client.globals),
					});
				}
				function j(l) {
					const i = new O.V(new h.E(), b.X).detach();
					return new u.Z(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new f.V(),
						tracker: new y.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, a, e) {
				'use strict';
				e.d(a, { Z: () => n });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					n = (t) => {
						const r = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(u) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, s.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(T, a, e) {
				'use strict';
				e.d(a, { j: () => u });
				var s = Object.prototype.hasOwnProperty;
				function m(n, t, r) {
					for (r of n.keys()) if (u(r, t)) return r;
				}
				function u(n, t) {
					var r, o, c;
					if (n === t) return !0;
					if (n && t && (r = n.constructor) === t.constructor) {
						if (r === Date) return n.getTime() === t.getTime();
						if (r === RegExp) return n.toString() === t.toString();
						if (r === Array) {
							if ((o = n.length) === t.length) for (; o-- && u(n[o], t[o]); );
							return o === -1;
						}
						if (r === Set) {
							if (n.size !== t.size) return !1;
							for (o of n) if (((c = o), (c && typeof c == 'object' && ((c = m(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (r === Map) {
							if (n.size !== t.size) return !1;
							for (o of n) if (((c = o[0]), (c && typeof c == 'object' && ((c = m(t, c)), !c)) || !u(o[1], t.get(c)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((o = n.byteLength) === t.byteLength) for (; o-- && n.getInt8(o) === t.getInt8(o); );
							return o === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((o = n.byteLength) === t.byteLength) for (; o-- && n[o] === t[o]; );
							return o === -1;
						}
						if (!r || typeof n == 'object') {
							o = 0;
							for (r in n) if ((s.call(n, r) && ++o && !s.call(t, r)) || !(r in t) || !u(n[r], t[r])) return !1;
							return Object.keys(t).length === o;
						}
					}
					return n !== n && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (T.exports = a);
			},
			'./components/src/components/Templates/Search/readme.md'(T) {
				'use strict';
				T.exports = `# Search Template

Renders a Search Results Page.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required \`controller\` prop specifies a reference to the search controller.

\`\`\`jsx
<Search controller={controller} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`jsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Search controller={controller} resultComponent={CustomResult} />
\`\`\`

### mobileDisplayAt
The \`mobileDisplayAt\` prop specifies a CSS media query for when the MobileSidebar component will render. By default, the component will render at "991px".

\`\`\`jsx
<Search controller={controller} mobileDisplayAt={'400px'} />
\`\`\`

### hideSidebar
The \`hideSidebar\` prop specifies if the Sidebar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideSidebar={true} />
\`\`\`

### hideTopToolbar
The \`hideTopToolbar\` prop specifies if the top ToolBar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideTopToolbar={true} />
\`\`\`

### hideMiddleToolbar
The \`hideMiddleToolbar\` prop specifies if the middle ToolBar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideMiddleToolbar={true} />
\`\`\`

### hideBottomToolbar
The \`hideBottomToolbar\` prop specifies if the bottom ToolBar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideBottomToolbar={true} />
\`\`\`

### toggleSidebarButtonText
The \`toggleSidebarButtonText\` prop specifies the inner text of the Sidebar toggle button. If left undefined, no button will render. 

\`\`\`jsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
\`\`\`

### toggleSidebarStartClosed
The \`toggleSidebarStartClosed\` prop specifies if the sidebar toggle should start closed.

\`\`\`jsx
<Search controller={controller} toggleSidebarStartClosed={true} />
\`\`\`

### hideToggleSidebarButton
The \`hideToggleSidebarButton\` prop hides the Sidebar toggle button.

\`\`\`jsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
\`\`\`

### layoutOptions
The \`layoutOptions\` prop allows you to customize the layout of the Search component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




\`\`\`jsx

type ListOption = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    default?: boolean;
    icon?: IconType | Partial<IconProps>;
    overrides?: ThemeMinimal;
    url?: UrlManager;
    available?: boolean;
}

const layoutOptions: ListOption[] = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'search results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'search results': {
					columns: 2,
				},
			},
		},
	},
]

<Search controller={controller} layoutOptions={layoutOptions} />
\`\`\``;
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-SearchHorizontal-SearchHorizontal-stories.17d29d0a.iframe.bundle.js.map
