(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8907],
		{
			'./components/src/components/Templates/Search/Search.stories.tsx'(b, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => h, NoResults: () => g, __namedExportsOrder: () => O, default: () => i });
				var l = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/snapify.ts'),
					o = e('./components/src/components/Templates/Search/readme.md'),
					r = e('./components/src/components/Templates/Search/Search.tsx');
				const i = {
						title: 'Templates/Search',
						component: r.v,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, l.FD)('div', {
										children: [(0, l.Y)(m.oz, { options: { overrides: { code: n.Z } }, children: o }), (0, l.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, l.Y)(y, {})],
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
							...p.F,
						},
					},
					T = t.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					S = t.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					h = (y, { loaded: { controller: E } }) => (0, l.Y)(r.v, { ...y, controller: E });
				h.loaders = [async () => (await T.search(), { controller: T })];
				const g = (y, { loaded: { controller: E } }) => (0, l.Y)(r.v, { ...y, controller: E });
				(g.loaders = [async () => (await S.search(), { controller: S })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
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
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default', 'NoResults'];
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(b, a, e) {
				'use strict';
				e.d(a, { o: () => S });
				var l = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const T = { ResultTracker: () => (0, m.AH)({}) },
					S = (0, p.PA)((h) => {
						const g = (0, o.u)(),
							O = (0, r.v6)('resultTracker', g, {}, h),
							y = { impression: !0, click: !0 },
							{ children: E, result: f, track: D, controller: P, className: C, internalClassName: v, disableStyles: x, style: s } = O,
							c = { ...y, ...D },
							{ ref: u, inViewport: _ } = (0, i.Q)();
						_ && c.impression && P?.track.product.impression(f);
						const d = {};
						return (
							x ? s && (d.css = [s]) : (d.css = [T.ResultTracker(), s]),
							(0, l.Y)('div', {
								className: t()('ss__result-tracker', `ss__${P?.type}-result-tracker`, C, v),
								onClick: (M) => {
									c.click && P?.track.product.click(M, f);
								},
								ref: u,
								...d,
								children: E,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(b, a, e) {
				'use strict';
				e.d(a, { F: () => l });
				const l = {
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
			'./components/src/utilities/componentNameToClassName.ts'(b, a, e) {
				'use strict';
				e.d(a, { b: () => l });
				const l = (m) => m.replace(/([A-Z])/g, (p) => '-' + p.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(b, a, e) {
				'use strict';
				e.d(a, { p: () => P });
				var l = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					S = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, l.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					D = { globals: { siteId: '8uyt2m' } };
				class P {
					static recommendation(c) {
						const u = c.id;
						if (f[u]) return f[u];
						const _ = (f[u] = v({ client: D, controller: c }));
						return (
							_.on('afterStore', async ({ controller: d }, M) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(c) {
						const u = c.id;
						if (f[u]) return f[u];
						const _ = (f[u] = x({ client: D, controller: c }));
						return (
							_.on('afterStore', async ({ controller: d }, M) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static search(c) {
						const u = c.id;
						if (f[u]) return f[u];
						const _ = (f[u] = C({ client: D, controller: c }));
						return (
							_.on('afterStore', async ({ controller: d }, M) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
				}
				function C(s) {
					const c = new T.V(new h.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), S.X);
					return new m.Tp(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new r.U(s.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new y.V(),
						tracker: new E.J(s.client.globals),
					});
				}
				function v(s) {
					const c = new T.V(new h.E(), S.X).detach(!0);
					return new n.c(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new i.t(s.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new y.V(),
						tracker: new E.J(s.client.globals),
					});
				}
				function x(s) {
					const c = new T.V(new h.E(), S.X).detach();
					return new p.Z(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new o.Y(s.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new y.V(),
						tracker: new E.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, a, e) {
				'use strict';
				e.d(a, { Z: () => n });
				var l = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'prism-block',
					n = (t) => {
						const o = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								o.current && t.className?.includes('lang-') && !t.className?.includes(p) && window?.Prism?.highlightElement(o.current);
							}, [t.className, t.children, o]),
							(0, l.Y)('code', { ...t, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(b, a, e) {
				'use strict';
				e.d(a, { j: () => p });
				var l = Object.prototype.hasOwnProperty;
				function m(n, t, o) {
					for (o of n.keys()) if (p(o, t)) return o;
				}
				function p(n, t) {
					var o, r, i;
					if (n === t) return !0;
					if (n && t && (o = n.constructor) === t.constructor) {
						if (o === Date) return n.getTime() === t.getTime();
						if (o === RegExp) return n.toString() === t.toString();
						if (o === Array) {
							if ((r = n.length) === t.length) for (; r-- && p(n[r], t[r]); );
							return r === -1;
						}
						if (o === Set) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((i = r), (i && typeof i == 'object' && ((i = m(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((i = r[0]), (i && typeof i == 'object' && ((i = m(t, i)), !i)) || !p(r[1], t.get(i)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (o === DataView) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n[r] === t[r]; );
							return r === -1;
						}
						if (!o || typeof n == 'object') {
							r = 0;
							for (o in n) if ((l.call(n, o) && ++r && !l.call(t, o)) || !(o in t) || !p(n[o], t[o])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return n !== n && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function a(e) {
					var l = new Error("Cannot find module '" + e + "'");
					throw ((l.code = 'MODULE_NOT_FOUND'), l);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (b.exports = a);
			},
			'./components/src/components/Templates/Search/readme.md'(b) {
				'use strict';
				b.exports = `# Search Template

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

//# sourceMappingURL=components-Templates-Search-Search-stories.5aed6a44.iframe.bundle.js.map
