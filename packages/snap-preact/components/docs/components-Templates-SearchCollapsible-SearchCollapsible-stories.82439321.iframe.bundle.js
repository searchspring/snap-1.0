(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5497],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.stories.tsx'(f, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => h, NoResults: () => g, __namedExportsOrder: () => O, default: () => i });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/snapify.ts'),
					r = e('./components/src/components/Templates/Search/readme.md'),
					o = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
				const i = {
						title: 'Templates/SearchCollapsible',
						component: o.x,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(m.oz, { options: { overrides: { code: n.Z } }, children: r }), (0, s.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, s.Y)(y, {})],
						argTypes: {
							controller: {
								description: 'Search Controller Reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							toggleSidebarButtonText: {
								description: 'Text to render in the toggle Sidebar button.',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							toggleSidebarStartClosed: {
								defaultValue: !1,
								description: 'determines if the sidebar toggle should start closed',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideToggleSidebarButton: {
								defaultValue: !1,
								description: 'hide the toggle Sidebar button',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							mobileDisplayAt: {
								defaultValue: '',
								description: 'Media query for when to render the mobileSidebar',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							hideSidebar: {
								defaultValue: !1,
								description: 'prevents the sidebar component from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
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
					T = t.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					S = t.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					h = (y, { loaded: { controller: E } }) => (0, s.Y)(o.x, { ...y, controller: E });
				h.loaders = [async () => (await T.search(), { controller: T })];
				const g = (y, { loaded: { controller: E } }) => (0, s.Y)(o.x, { ...y, controller: E });
				(g.loaders = [async () => (await S.search(), { controller: S })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: SearchCollapsibleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchCollapsible {...args} controller={controller} />;
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
								originalSource: `(args: SearchCollapsibleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchCollapsible {...args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default', 'NoResults'];
			},
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(f, a, e) {
				'use strict';
				e.d(a, { x: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					n = e('./components/src/components/Templates/Search/Search.tsx');
				const t = (0, m.PA)((r) => (0, s.Y)(u._, { children: (0, s.Y)(n.v, { ...r, alias: 'searchCollapsible' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(f, a, e) {
				'use strict';
				e.d(a, { o: () => S });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const T = { ResultTracker: () => (0, m.AH)({}) },
					S = (0, u.PA)((h) => {
						const g = (0, r.u)(),
							O = (0, o.v6)('resultTracker', g, {}, h),
							y = { impression: !0, click: !0 },
							{ children: E, result: b, track: C, controller: P, className: D, internalClassName: v, disableStyles: x, style: l } = O,
							c = { ...y, ...C },
							{ ref: p, inViewport: _ } = (0, i.Q)();
						_ && c.impression && P?.track.product.impression(b);
						const d = {};
						return (
							x ? l && (d.css = [l]) : (d.css = [T.ResultTracker(), l]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${P?.type}-result-tracker`, D, v),
								onClick: (M) => {
									c.click && P?.track.product.click(M, b);
								},
								ref: p,
								...d,
								children: E,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(f, a, e) {
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
			'./components/src/utilities/componentNameToClassName.ts'(f, a, e) {
				'use strict';
				e.d(a, { b: () => s });
				const s = (m) => m.replace(/([A-Z])/g, (u) => '-' + u.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(f, a, e) {
				'use strict';
				e.d(a, { p: () => P });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					S = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const b = {},
					C = { globals: { siteId: '8uyt2m' } };
				class P {
					static recommendation(c) {
						const p = c.id;
						if (b[p]) return b[p];
						const _ = (b[p] = v({ client: C, controller: c }));
						return (
							_.on('afterStore', async ({ controller: d }, M) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(c) {
						const p = c.id;
						if (b[p]) return b[p];
						const _ = (b[p] = x({ client: C, controller: c }));
						return (
							_.on('afterStore', async ({ controller: d }, M) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static search(c) {
						const p = c.id;
						if (b[p]) return b[p];
						const _ = (b[p] = D({ client: C, controller: c }));
						return (
							_.on('afterStore', async ({ controller: d }, M) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
				}
				function D(l) {
					const c = new T.V(new h.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), S.X);
					return new m.Tp(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new o.U(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new y.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function v(l) {
					const c = new T.V(new h.E(), S.X).detach(!0);
					return new n.c(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new i.t(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new y.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function x(l) {
					const c = new T.V(new h.E(), S.X).detach();
					return new u.Z(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new y.V(),
						tracker: new E.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(f, a, e) {
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
			'../../node_modules/dequal/dist/index.mjs'(f, a, e) {
				'use strict';
				e.d(a, { j: () => u });
				var s = Object.prototype.hasOwnProperty;
				function m(n, t, r) {
					for (r of n.keys()) if (u(r, t)) return r;
				}
				function u(n, t) {
					var r, o, i;
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
							for (o of n) if (((i = o), (i && typeof i == 'object' && ((i = m(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (n.size !== t.size) return !1;
							for (o of n) if (((i = o[0]), (i && typeof i == 'object' && ((i = m(t, i)), !i)) || !u(o[1], t.get(i)))) return !1;
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
			'../../node_modules/memoizerific sync recursive'(f) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (f.exports = a);
			},
			'./components/src/components/Templates/Search/readme.md'(f) {
				'use strict';
				f.exports = `# Search Template

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

//# sourceMappingURL=components-Templates-SearchCollapsible-SearchCollapsible-stories.82439321.iframe.bundle.js.map
