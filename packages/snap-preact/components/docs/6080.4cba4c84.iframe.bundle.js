'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6080],
		{
			'./src/create/createAutocompleteController.ts'(M, n, s) {
				s.r(n), s.d(n, { default: () => i });
				var l = s('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					t = s('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					_ = s('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = s('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					p = s('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					m = s('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = s('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					g = s('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					c = s('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					E = s('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				const i = (r, e) => {
					const a = (e?.urlManager || new o.V(new m.E(r.url), p.X)).detach();
					return (
						r.mode && r.client && ((r.client.config = r.client.config || {}), (r.client.config.mode = r.mode)),
						new l.Z(
							r.controller,
							{
								client: e?.client || new t.K(r.client.globals, r.client.config),
								store: e?.store || new _.Y(r.controller, { urlManager: a }),
								urlManager: a,
								eventManager: e?.eventManager || new d.E(),
								profiler: e?.profiler || new g.U(),
								logger: e?.logger || new c.V({ mode: r.mode }),
								tracker: e?.tracker || new E.J(r.client.globals),
							},
							r.context
						)
					);
				};
			},
		},
	]);
})();
