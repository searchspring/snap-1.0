'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6740],
	{
		'./src/create/createAutocompleteController.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../snap-controller/dist/esm/Autocomplete/AutocompleteController.js'
				),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				_searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				_searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			const __WEBPACK_DEFAULT_EXPORT__ = (config, services) => {
				const urlManager = (
					services?.urlManager ||
					new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_0__.V(
						new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.E(config.url),
						_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.X
					)
				).detach();
				config.mode && config.client && ((config.client.config = config.client.config || {}), (config.client.config.mode = config.mode));
				return new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_3__.Z(
					config.controller,
					{
						client: services?.client || new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_4__.K(config.client.globals, config.client.config),
						store: services?.store || new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.Y(config.controller, { urlManager }),
						urlManager,
						eventManager: services?.eventManager || new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_6__.E(),
						profiler: services?.profiler || new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_7__.U(),
						logger: services?.logger || new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_8__.V({ mode: config.mode }),
						tracker: services?.tracker || new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_9__.JD(config.client.globals),
					},
					config.context
				);
			};
		},
	},
]);
