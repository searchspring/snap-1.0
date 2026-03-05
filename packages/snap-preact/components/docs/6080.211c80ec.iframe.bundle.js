'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6080],
		{
			'./src/create/createAutocompleteController.ts'(P, a, o) {
				o.r(a), o.d(a, { default: () => p });
				var s = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = o('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					n = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					_ = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					c = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = o('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = o('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					h = o('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const p = (e, t) => {
					const r = (t?.urlManager || new l.V(new c.E(e.url), _.X)).detach();
					return (
						e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
						new s.Z(
							e.controller,
							{
								client: t?.client || new m.K(e.client.globals, e.client.config),
								store: t?.store || new n.Y(e.controller, { urlManager: r }),
								urlManager: r,
								eventManager: t?.eventManager || new d.E(),
								profiler: t?.profiler || new E.U(),
								logger: t?.logger || new M.V({ mode: e.mode }),
								tracker: t?.tracker || new h.J(e.client.globals),
							},
							e.context
						)
					);
				};
			},
		},
	]);
})();
