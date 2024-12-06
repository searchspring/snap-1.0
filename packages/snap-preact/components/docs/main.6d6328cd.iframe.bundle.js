(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8792],
	{
		'../snap-client/dist/esm/Client/Client.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { K: () => Client });
			var types = __webpack_require__('../snap-toolbox/dist/esm/types.js'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const defaultConfig = { enabled: !0, ttl: 3e5, maxSize: 200, purgeable: !0 };
			class NetworkCache {
				constructor(config) {
					(this.memoryCache = {}),
						(this.config = cjs_default()(defaultConfig, config || {})),
						this.config?.entries &&
							Object.keys(this.config.entries).map((key) => {
								this.config.entries && this.config.entries[key] && this.set(key, this.config.entries[key]);
							});
				}
				get(key) {
					if (this.config.enabled)
						try {
							if (this.memoryCache[key] && Date.now() < this.memoryCache[key].expires) return cjs_default()({}, this.memoryCache[key].value);
							if ('undefined' != typeof window && window?.sessionStorage) {
								const stored = window.sessionStorage.getItem('ss-networkcache'),
									localData = stored && JSON.parse(stored);
								if (localData && key && localData[key]) {
									if (!(Date.now() >= localData[key].expires)) return localData[key].value;
									{
										const newStored = { ...localData };
										delete newStored[key], window.sessionStorage.setItem('ss-networkcache', JSON.stringify(newStored));
									}
								}
							}
						} catch (err) {
							console.warn('something went wrong, browser might not have cookies enabled');
						}
				}
				set(key, value) {
					if (this.config.enabled)
						try {
							const cacheObject = { value, expires: Date.now() + this.config.ttl, purgeable: this.config.purgeable };
							if (((this.memoryCache[key] = cacheObject), 'undefined' != typeof window && window?.sessionStorage)) {
								const stored = window.sessionStorage.getItem('ss-networkcache'),
									newStored = { ...(stored && JSON.parse(stored)) };
								newStored[key] = cacheObject;
								let size = new Blob([JSON.stringify(newStored)], { endings: 'native' }).size / 1024;
								for (; size > this.config.maxSize; ) {
									const oldestKey = Object.keys(newStored)
										.filter((key) => newStored[key].purgeable)
										.sort((a, b) => newStored[a].expires - newStored[b].expires)[0];
									if (!oldestKey) break;
									delete newStored[oldestKey], (size = new Blob([JSON.stringify(newStored)], { endings: 'native' }).size / 1024);
								}
								size < this.config.maxSize && window.sessionStorage.setItem('ss-networkcache', JSON.stringify(newStored));
							}
						} catch (err) {
							console.warn('something went wrong, browser might not have cookies enabled');
						}
				}
				clear() {
					try {
						(this.memoryCache = {}), 'undefined' != typeof window && window?.sessionStorage && window.sessionStorage.setItem('ss-networkcache', '');
					} catch (err) {
						console.warn('something went wrong, browser might not have cookies enabled');
					}
				}
			}
			class API {
				constructor(configuration) {
					(this.configuration = configuration),
						(this.retryDelay = 1e3),
						(this.retryCount = 0),
						(this.cache = new NetworkCache(this.configuration.cache));
				}
				get mode() {
					return this.configuration.mode;
				}
				async request(context, cacheKey) {
					const { url, init } = this.createFetchParams(context);
					if (cacheKey) {
						const cachedResponse = this.cache.get(`${context.path}/${cacheKey}`) || this.cache.get(`${context.path}/*`);
						if (cachedResponse) return (this.retryCount = 0), (this.retryDelay = 1e3), cachedResponse;
					}
					let response, responseJSON;
					try {
						if (
							((response = await this.fetchApi(url, init)), (responseJSON = await response?.json()), response.status >= 200 && response.status < 300)
						)
							return (
								(this.retryCount = 0), (this.retryDelay = 1e3), cacheKey && this.cache.set(`${context.path}/${cacheKey}`, responseJSON), responseJSON
							);
						if (429 == response.status)
							throw this.retryCount < this.configuration.maxRetry
								? (await new Promise((resolve) => setTimeout(resolve, this.retryDelay)),
								  (this.retryDelay =
										1e3 *
										((num) => {
											let temp,
												a = 1,
												b = 0;
											for (; num >= 0; ) (temp = a), (a += b), (b = temp), num--;
											return b;
										})(this.retryCount)),
								  this.retryCount++,
								  new Error('Rate limited.'))
								: new Error('Retry rate limit exceeded.');
						if (404 == response.status && 'Profile is currently paused' == responseJSON?.message)
							throw new Error(`${responseJSON.message}: ${context.query?.tag}`);
						throw new Error('Unexpected Response Status.');
					} catch (err) {
						if ('Rate limited.' == err.message) return await this.request(context, cacheKey);
						throw { err, fetchDetails: { status: response?.status, message: response?.statusText || 'FAILED', url, ...init } };
					}
				}
				createFetchParams(context) {
					const siteId = context?.body?.siteId || context?.query?.siteId;
					if (!siteId) throw new Error('Request failed. Missing "siteId" parameter.');
					const siteIdHost = `https://${siteId}.a.searchspring.io`;
					let url = `${(this.configuration.origin || siteIdHost).replace(/\/$/, '')}/${context.path.replace(/^\//, '')}`;
					const combinedQuery = cjs_default()(context.query || {}, this.configuration.globals);
					0 !== Object.keys(combinedQuery).length && (url += '?' + this.configuration.queryParamsStringify(combinedQuery));
					const body =
						('undefined' != typeof FormData && context.body instanceof FormData) ||
						context.body instanceof URLSearchParams ||
						((value = context.body), 'undefined' != typeof Blob && value instanceof Blob)
							? context.body
							: JSON.stringify(context.body ? cjs_default()(context.body, this.configuration.globals) : context.body);
					var value;
					const headers = { ...this.configuration.headers, ...context.headers };
					return { url, init: { method: context.method, headers, body } };
				}
				async fetchApi(url, init) {
					return await this.configuration.fetchApi(url, init);
				}
			}
			class ApiConfiguration {
				constructor(config = {}) {
					(this.config = config),
						config.maxRetry || (this.config.maxRetry = 8),
						(this.config.cache = this.config.cache || {}),
						(this.config.mode = this.config.mode || types.$.production),
						this.config.mode == types.$.development && (this.config.cache.enabled = !1);
				}
				get cache() {
					return this.config?.cache || {};
				}
				get maxRetry() {
					return this.config.maxRetry || 8;
				}
				get origin() {
					return this.config.origin || '';
				}
				get fetchApi() {
					return this.config.fetchApi || ('undefined' != typeof window ? window.fetch?.bind(window) : fetch);
				}
				get queryParamsStringify() {
					return this.config.queryParamsStringify || querystring;
				}
				get headers() {
					return this.config.headers || {};
				}
				set headers(newHeaders) {
					this.config.headers = newHeaders;
				}
				get globals() {
					return this.config.globals || {};
				}
				set globals(newGlobals) {
					this.config.globals = newGlobals;
				}
				get mode() {
					return this.config.mode;
				}
			}
			function querystring(params, prefix = '') {
				return Object.keys(params)
					.map((key) => {
						const fullKey = prefix + (prefix.length ? `[${key}]` : key),
							value = params[key];
						if (value instanceof Array) {
							const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
							return `${encodeURIComponent(fullKey)}=${multiValue}`;
						}
						return value instanceof Date
							? `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`
							: value instanceof Object
							? querystring(value, fullKey)
							: `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
					})
					.filter((part) => part.length > 0)
					.join('&');
			}
			class LegacyAPI extends API {
				async getEndpoint(queryParameters, path = '/api/search/search.json') {
					queryParameters.resultsFormat = 'native';
					const cacheParameters = { ...queryParameters };
					delete cacheParameters.pageLoadId, delete cacheParameters.domain;
					return await this.request({ path, method: 'GET', headers: {}, query: queryParameters }, JSON.stringify(cacheParameters));
				}
				async postMeta(requestParameters) {
					const headerParameters = { 'Content-Type': 'application/json' };
					return await this.request(
						{ path: '/api/meta/meta.json', method: 'POST', headers: headerParameters, body: requestParameters },
						JSON.stringify(requestParameters)
					);
				}
				async getMeta(queryParameters) {
					return await this.request(
						{ path: '/api/meta/meta.json', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async getSearch(queryParameters) {
					return (queryParameters.ajaxCatalog = 'Snap'), this.getEndpoint(queryParameters, '/api/search/search.json');
				}
				async getAutocomplete(queryParameters) {
					return (queryParameters.ajaxCatalog = 'Snap'), this.getEndpoint(queryParameters, '/api/search/autocomplete.json');
				}
				async getFinder(queryParameters) {
					return (queryParameters.ajaxCatalog = 'Snap'), this.getEndpoint(queryParameters, '/api/search/finder.json');
				}
			}
			class SuggestAPI extends API {
				async getSuggest(queryParameters) {
					return await this.request(
						{ path: '/api/suggest/query', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async postSuggest(requestParameters) {
					const headerParameters = { 'Content-Type': 'application/json' };
					return await this.request(
						{ path: '/api/suggest/query', method: 'POST', headers: headerParameters, body: requestParameters },
						JSON.stringify(requestParameters)
					);
				}
				async getTrending(queryParameters) {
					return await this.request(
						{ path: '/api/suggest/trending', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async postTrending(requestParameters) {
					const headerParameters = { 'Content-Type': 'application/json' };
					return await this.request(
						{ path: '/api/suggest/trending', method: 'POST', headers: headerParameters, body: requestParameters },
						JSON.stringify(requestParameters)
					);
				}
			}
			function transformSearchRequest(request) {
				return (function mergeParams(...args) {
					const ret = {};
					return (
						args.reverse().forEach((params) => {
							Object.keys(params).forEach((key) => {
								const values = params[key] instanceof Array ? params[key] : [params[key]];
								ret[key] = (ret[key] || []).concat(values);
							});
						}),
						ret
					);
				})(
					transformSearchRequest.sorts(request),
					transformSearchRequest.search(request),
					transformSearchRequest.filters(request),
					transformSearchRequest.merchandising(request),
					transformSearchRequest.pagination(request),
					transformSearchRequest.siteId(request),
					transformSearchRequest.facets(request),
					transformSearchRequest.tracking(request),
					transformSearchRequest.personalization(request)
				);
			}
			function unescapeHTML(value) {
				return value
					.replace(/&gt;/g, '>')
					.replace(/&lt;/g, '<')
					.replace(/&#0?39;/g, "'")
					.replace(/&apos;/g, "'")
					.replace(/&#0?34;/g, '"')
					.replace(/&quot;/g, '"')
					.replace(/&amp;/g, '&');
			}
			(transformSearchRequest.sorts = (request = {}) =>
				(request.sorts || []).reduce(
					(acc, sort) =>
						!sort.field || !sort.direction || ('asc' != sort.direction && 'desc' != sort.direction)
							? acc
							: { ...acc, ['sort.' + sort.field]: (acc[sort.field] || []).concat([sort.direction]) },
					{}
				)),
				(transformSearchRequest.search = (request = {}) => {
					const reqSearch = request.search || {},
						search = {};
					return (
						reqSearch.query && reqSearch.query.string && (search.q = reqSearch.query.string),
						reqSearch.subQuery && (search.rq = reqSearch.subQuery.trim()),
						reqSearch.originalQuery && (search.originalQuery = reqSearch.originalQuery.trim()),
						reqSearch.fallbackQuery && (search.fallbackQuery = reqSearch.fallbackQuery.trim()),
						reqSearch.redirectResponse && (search.redirectResponse = reqSearch.redirectResponse),
						search
					);
				}),
				(transformSearchRequest.filters = (request = {}) =>
					(request.filters || []).reduce((acc, filter) => {
						const baseKey = filter.background ? 'bgfilter' : 'filter';
						if ('value' == filter.type) {
							const key = baseKey + '.' + filter.field;
							return { ...acc, [key]: (acc[key] || []).concat([filter.value]) };
						}
						if ('range' == filter.type) {
							const keyLow = baseKey + '.' + filter.field + '.low',
								keyHigh = baseKey + '.' + filter.field + '.high',
								low = filter?.value?.low ?? '*',
								high = filter?.value?.high ?? '*';
							return { ...acc, [keyLow]: (acc[keyLow] || []).concat([low]), [keyHigh]: (acc[keyHigh] || []).concat([high]) };
						}
						return acc;
					}, {})),
				(transformSearchRequest.merchandising = (request = {}) => {
					const reqMerch = request.merchandising || {},
						merch = reqMerch.disabled ? { disableMerchandising: !0 } : {};
					return (
						reqMerch.landingPage && (merch['landing-page'] = reqMerch.landingPage),
						reqMerch.segments instanceof Array &&
							reqMerch.segments.length &&
							(merch.tag = reqMerch.segments.map((segment) => `merch.segment/${segment}`)),
						'boolean' == typeof reqMerch.intellisuggest && (merch.intellisuggest = reqMerch.intellisuggest),
						reqMerch.disableInlineBanners && (merch.disableInlineBanners = reqMerch.disableInlineBanners),
						merch
					);
				}),
				(transformSearchRequest.pagination = (request = {}) => {
					const pagination = request.pagination || {},
						params = {};
					return (
						pagination.page && (params.page = pagination.page),
						(pagination.pageSize || 0 === pagination.pageSize) && (params.resultsPerPage = pagination.pageSize),
						params
					);
				}),
				(transformSearchRequest.siteId = (request = {}) => (request.siteId ? { siteId: request.siteId } : {})),
				(transformSearchRequest.facets = (request = {}) => {
					const facets = request.facets || {},
						params = {};
					if (facets.include && facets.include.length && facets.exclude && facets.exclude.length)
						throw 'cannot use facet include and exclude at the same time';
					return (
						facets.include?.length && (params.includedFacets = facets.include),
						facets.exclude?.length && (params.excludedFacets = facets.exclude),
						!1 === facets.autoDrillDown && (params.disableFacetDrillDown = !0),
						params
					);
				}),
				(transformSearchRequest.tracking = (request = {}) => {
					const reqTracking = request.tracking || {},
						params = {};
					return (
						reqTracking.userId && (params.userId = reqTracking.userId),
						reqTracking.domain && (params.domain = reqTracking.domain),
						reqTracking.sessionId && (params.sessionId = reqTracking.sessionId),
						reqTracking.pageLoadId && (params.pageLoadId = reqTracking.pageLoadId),
						params
					);
				}),
				(transformSearchRequest.personalization = (request = {}) => {
					const personalization = request.personalization || {},
						params = {};
					return (
						personalization.disabled && (params.skipPersonalization = personalization.disabled),
						personalization.cart && (params.cart = personalization.cart),
						personalization.lastViewed && (params.lastViewed = personalization.lastViewed),
						personalization.shopper && (params.shopper = personalization.shopper),
						params
					);
				});
			const CORE_FIELDS = [
				'uid',
				'sku',
				'name',
				'url',
				'addToCartUrl',
				'price',
				'msrp',
				'imageUrl',
				'secureImageUrl',
				'thumbnailImageUrl',
				'secureThumbnailImageUrl',
				'rating',
				'ratingCount',
				'description',
				'stockMessage',
				'brand',
				'popularity',
				'caption',
			];
			class Result {
				constructor(result) {
					Object.assign(this, result);
				}
			}
			function transformSearchResponse(response, request) {
				return {
					...transformSearchResponse.pagination(response),
					...transformSearchResponse.results(response),
					...transformSearchResponse.filters(response),
					...transformSearchResponse.facets(response, request),
					...transformSearchResponse.sorting(response),
					...transformSearchResponse.merchandising(response),
					...transformSearchResponse.search(response, request),
				};
			}
			function decodeProperty(encoded) {
				return Array.isArray(encoded)
					? encoded.map((item) => ('string' == typeof item ? unescapeHTML(String(item)) : item))
					: unescapeHTML(String(encoded));
			}
			function transformSuggestResponse(response) {
				return {
					...transformSuggestResponse.query(response),
					...transformSuggestResponse.correctedQuery(response),
					...transformSuggestResponse.suggested(response),
					...transformSuggestResponse.alternatives(response),
				};
			}
			(transformSearchResponse.pagination = (response) => {
				const pagination = response?.pagination;
				return {
					pagination: {
						totalResults: pagination?.totalResults,
						page: pagination?.currentPage,
						pageSize: pagination?.perPage,
						totalPages: pagination?.totalPages,
					},
				};
			}),
				(transformSearchResponse.results = (response) => ({ results: (response?.results || []).map(transformSearchResponse.result) })),
				(transformSearchResponse.result = (rawResult) => {
					const coreFieldValues = CORE_FIELDS.reduce(
						(coreFields, key) => (void 0 !== rawResult[key] ? { ...coreFields, [key]: decodeProperty(rawResult[key] || '') } : coreFields),
						{}
					);
					coreFieldValues.price && (coreFieldValues.price = +coreFieldValues.price),
						coreFieldValues.msrp && (coreFieldValues.msrp = +coreFieldValues.msrp);
					const attributes = Object.keys(rawResult)
							.filter((k) => -1 == CORE_FIELDS.indexOf(k))
							.filter((k) => !('badges' == k && 'object' == typeof rawResult[k]))
							.reduce((attributes, key) => ({ ...attributes, [key]: decodeProperty(rawResult[key] || '') }), {}),
						children =
							rawResult?.children?.map((child) => ({
								attributes: { ...Object.keys(child).reduce((attributes, key) => ({ ...attributes, [key]: decodeProperty(child[key]) }), {}) },
							})) || [];
					return new Result({
						id: rawResult.uid,
						mappings: { core: coreFieldValues },
						attributes,
						badges: 'object' == typeof rawResult.badges ? rawResult.badges : [],
						children,
					});
				}),
				(transformSearchResponse.filters = (response) => ({
					filters: (response?.filterSummary || []).map((filter) => {
						let value = filter.value,
							type = 'value';
						return (
							'object' == typeof filter.value &&
								filter &&
								filter.value &&
								filter.value.rangeHigh &&
								filter.value.rangeLow &&
								((type = 'range'), (value = { low: +filter.value.rangeLow, high: +filter.value.rangeHigh })),
							{ type, field: filter.field, label: filter.filterValue, value }
						);
					}),
				})),
				(transformSearchResponse.facets = (response, request = {}) => {
					const filters = request.filters || [],
						facets = response?.facets || [],
						limit = request?.facets?.limit,
						valueLimit = request?.facets?.valueLimit;
					let transformedFacets = facets.map((facet) => {
						let transformedFacet = { field: facet.field, type: 'value', filtered: Boolean(facet.facet_active) };
						if (facet.step)
							facet.range &&
								(transformedFacet = {
									...transformedFacet,
									type: 'range',
									step: facet.step,
									range: { low: '*' == facet.range[0] ? void 0 : +facet.range[0], high: '*' == facet.range[1] ? void 0 : +facet.range[1] },
								}),
								facet.active &&
									'boolean' != typeof facet.active &&
									facet.active.length > 1 &&
									(transformedFacet.active = {
										low: '*' == facet.active[0] ? void 0 : +facet.active[0],
										high: '*' == facet.active[1] ? void 0 : +facet.active[1],
									});
						else if (facet.values instanceof Array)
							if ('hierarchy' == facet.type) {
								(transformedFacet.type = 'value'),
									(transformedFacet.values = (facet.values || []).map((value) => ({
										filtered: Boolean(value.active),
										value: value.value,
										label: value.label,
										count: value.count,
									})));
								const filterSelected = filters.find((f) => f.field == facet.field),
									newValues = [];
								if (filterSelected && !filterSelected.background) {
									const valueLevels = filterSelected.value?.split(facet.hierarchyDelimiter || '>');
									if (valueLevels)
										for (let i = valueLevels.length - 1; i >= 0; i--) {
											const valueSplit = valueLevels.slice(0, i + 1),
												value = valueSplit.join(facet.hierarchyDelimiter);
											newValues.unshift({ value, filtered: value == filterSelected.value, label: valueSplit[valueSplit.length - 1] });
										}
									newValues.unshift({ value: null, filtered: !1, label: 'View All' });
								}
								transformedFacet.values = newValues.concat(transformedFacet.values);
							} else
								'value' == facet.values[0].type
									? ((transformedFacet.type = 'value'),
									  (transformedFacet.values = facet.values.map((value) => ({
											filtered: value.active,
											value: value.value,
											label: value.label,
											count: value.count,
									  }))))
									: 'range' == facet.values[0].type &&
									  ((transformedFacet.type = 'range-buckets'),
									  (transformedFacet.values = facet.values.map((value) => ({
											filtered: value.active,
											low: '*' == value.low ? null : value.low ? +value.low : null,
											high: '*' == value.high ? null : value.high ? +value.high : null,
											label: value.label,
											count: value.count,
									  }))));
						return transformedFacet;
					});
					return (
						limit && (transformedFacets = transformedFacets.slice(0, limit)),
						valueLimit &&
							(transformedFacets = transformedFacets.map((facet) => (facet.values && (facet.values = facet.values.slice(0, valueLimit)), facet))),
						{ facets: transformedFacets }
					);
				}),
				(transformSearchResponse.sorting = (response) => ({
					sorting: (response?.sorting?.options || []).filter((sort) => sort.active).map((sort) => ({ field: sort.field, direction: sort.direction })),
				})),
				(transformSearchResponse.merchandising = (response) => {
					const merchandising = response?.merchandising;
					merchandising?.content && Array.isArray(merchandising.content) && !merchandising.content.length && (merchandising.content = {});
					return {
						merchandising: {
							redirect: merchandising?.redirect || '',
							content: merchandising?.content || {},
							campaigns: merchandising?.triggeredCampaigns || [],
							personalized: merchandising?.personalized,
						},
					};
				}),
				(transformSearchResponse.search = (response, request) => {
					const searchObj = {
						search: { query: request?.search?.query?.string, didYouMean: response?.didYouMean?.query, matchType: response?.query?.matchType },
					};
					return (
						response?.query?.corrected && response?.query.original
							? ((searchObj.search.query = response?.query?.corrected), (searchObj.search.originalQuery = response?.query?.original))
							: request?.search?.originalQuery && (searchObj.search.originalQuery = request?.search?.originalQuery),
						searchObj
					);
				}),
				(transformSuggestResponse.query = (response) => (response?.query ? { query: response.query } : {})),
				(transformSuggestResponse.correctedQuery = (response) =>
					'object' == typeof response && response['corrected-query'] ? { correctedQuery: response['corrected-query'] } : {}),
				(transformSuggestResponse.suggested = (response) =>
					'object' == typeof response && response.suggested && 'object' == typeof response.suggested
						? { suggested: { text: response.suggested?.text, type: response.suggested?.type, source: response.suggested?.source } }
						: {}),
				(transformSuggestResponse.alternatives = (response) => ({
					alternatives: (response?.alternatives || []).map((alternative) => ({ text: alternative.text })),
				}));
			class HybridAPI extends API {
				constructor(configuration, requesterConfigurations) {
					super(configuration);
					const legacyConfig = cjs_default()(
						{
							mode: this.configuration.mode,
							origin: this.configuration.origin,
							cache: this.configuration.cache,
							fetchApi: this.configuration.fetchApi,
						},
						requesterConfigurations?.legacy || {}
					);
					configuration.mode == types.$.development && (legacyConfig.headers = { ...legacyConfig.headers, 'searchspring-no-beacon': '' });
					const suggestConfig = cjs_default()(
							{
								mode: this.configuration.mode,
								origin: this.configuration.origin,
								cache: this.configuration.cache,
								fetchApi: this.configuration.fetchApi,
							},
							requesterConfigurations?.suggest || {}
						),
						legacyConfiguration = new ApiConfiguration(legacyConfig),
						suggestConfiguration = new ApiConfiguration(suggestConfig);
					this.requesters = { legacy: new LegacyAPI(legacyConfiguration), suggest: new SuggestAPI(suggestConfiguration) };
				}
				async getMeta(requestParameters) {
					const legacyRequestParameters = requestParameters;
					return this.requesters.legacy.getMeta(legacyRequestParameters);
				}
				async getSearch(requestParameters) {
					const legacyRequestParameters = transformSearchRequest(requestParameters);
					return transformSearchResponse(await this.requesters.legacy.getSearch(legacyRequestParameters), requestParameters);
				}
				async getFinder(requestParameters) {
					const legacyRequestParameters = transformSearchRequest(requestParameters);
					return transformSearchResponse(await this.requesters.legacy.getFinder(legacyRequestParameters), requestParameters);
				}
				async getAutocomplete(requestParameters) {
					const legacyRequestParameters = transformSearchRequest(requestParameters),
						suggestParams = {
							siteId: legacyRequestParameters.siteId,
							language: 'en',
							query: legacyRequestParameters.q,
							suggestionCount: (requestParameters.suggestions || {}).count || 5,
						};
					((requestParameters.search || {}).query || {}).spellCorrection || (suggestParams.disableSpellCorrect = !0);
					const transformedSuggestResults = transformSuggestResponse(await this.requesters.suggest.getSuggest(suggestParams));
					let q = (transformedSuggestResults.suggested || {}).text || transformedSuggestResults.correctedQuery || transformedSuggestResults.query;
					this.requesters.suggest.configuration?.globals?.integratedSpellCorrection &&
						(q = (transformedSuggestResults.suggested || {}).text || transformedSuggestResults.query || transformedSuggestResults.correctedQuery);
					const queryParameters = { ...legacyRequestParameters, redirectResponse: 'full', q };
					requestParameters.search?.query?.string && (requestParameters.search.query.string = q);
					return {
						...transformSearchResponse(await this.requesters.legacy.getAutocomplete(queryParameters), requestParameters),
						autocomplete: transformedSuggestResults,
					};
				}
			}
			const transformRecommendationFiltersPost = (filters) => {
				if (!filters) return;
				const filterArray = [];
				return (
					filters.map((filter) => {
						if ('value' == filter.type) {
							const i = filterArray.findIndex((_filter) => _filter.field == filter.field);
							if (i > -1) filterArray[i].values.push(filter.value);
							else {
								const val = { field: filter.field, type: '=', values: [filter.value] };
								filterArray.push(val);
							}
						} else if ('range' == filter.type) {
							if ('number' == typeof filter.value.low) {
								const low = { field: filter.field, type: '>=', values: [filter.value.low] },
									i = filterArray.findIndex((_filter) => _filter.field == filter.field && '>=' == _filter.type);
								i > -1 ? (filterArray[i] = low) : filterArray.push(low);
							}
							if ('number' == typeof filter.value.high) {
								const high = { field: filter.field, type: '<=', values: [filter.value.high] },
									i = filterArray.findIndex((_filter) => _filter.field == filter.field && '<=' == _filter.type);
								i > -1 ? (filterArray[i] = high) : filterArray.push(high);
							}
						}
					}),
					filterArray
				);
			};
			class Deferred {
				constructor() {
					this.promise = new Promise((resolve, reject) => {
						(this.reject = reject), (this.resolve = resolve);
					});
				}
			}
			class RecommendAPI extends API {
				constructor(config) {
					super(config), (this.batches = {});
				}
				async getProfile(queryParameters) {
					return await this.request(
						{ path: '/api/personalized-recommendations/profile.json', method: 'GET', headers: {}, query: queryParameters },
						JSON.stringify(queryParameters)
					);
				}
				async batchRecommendations(parameters) {
					const batchId = parameters.batchId || 1,
						key = parameters.batched ? `${parameters.profile?.siteId || parameters.siteId}:${batchId}` : `${Math.random()}:${batchId}`,
						batch = (this.batches[key] = this.batches[key] || { timeout: null, request: { profiles: [] }, entries: [] }),
						deferred = new Deferred();
					batch.entries.push({ request: parameters, deferred });
					const timeoutClear = 'undefined' != typeof window ? window.clearTimeout : clearTimeout,
						timeoutSet = 'undefined' != typeof window ? window.setTimeout : setTimeout;
					return (
						timeoutClear && timeoutClear(batch.timeout),
						(batch.timeout = timeoutSet(async () => {
							delete this.batches[key],
								batch.entries.sort(sortBatchEntries),
								batch.entries.map((entry) => {
									if (
										(entry.request.product &&
											(Array.isArray(entry.request.products) && -1 == entry.request.products.indexOf(entry.request.product)
												? (entry.request.products = entry.request.products.concat(entry.request.product))
												: (entry.request.products = [entry.request.product])),
										entry.request.profile)
									) {
										const {
												tag,
												profile: { categories, brands, blockedItems, limit, query, filters, dedupe },
											} = entry.request,
											profile = {
												tag,
												...defined({
													categories,
													brands,
													blockedItems,
													limit,
													searchTerm: query,
													filters: transformRecommendationFiltersPost(filters),
													dedupe,
												}),
											};
										batch.request.profiles?.push(profile);
									} else {
										const { tag, categories, brands, limit, query, dedupe } = entry.request,
											profile = { tag, ...defined({ categories, brands, limit, searchTerm: query, dedupe }) };
										batch.request.profiles?.push(profile);
									}
									const { products, blockedItems, filters, test, cart, lastViewed, shopper } = entry.request,
										dedupedProducts = Array.from(new Set((batch.request.products || []).concat(products || []))),
										dedupedBlockedItems = Array.from(new Set((batch.request.blockedItems || []).concat(blockedItems || []))),
										dedupedFilters = Array.from(
											new Set(
												(batch.request.filters || [])
													.concat(transformRecommendationFiltersPost(filters) || [])
													.map((filter) => JSON.stringify(filter))
											)
										).map((stringyFilter) => JSON.parse(stringyFilter));
									batch.request = {
										...batch.request,
										...defined({
											siteId: entry.request.profile?.siteId || entry.request.siteId,
											products: dedupedProducts.length ? dedupedProducts : void 0,
											blockedItems: dedupedBlockedItems.length ? dedupedBlockedItems : void 0,
											filters: dedupedFilters.length ? dedupedFilters : void 0,
											test,
											cart,
											lastViewed,
											shopper,
										}),
									};
								});
							try {
								this.configuration.mode == types.$.development && (batch.request.test = !0);
								const response = await this.postRecommendations(batch.request);
								batch.entries?.forEach((entry, index) => {
									entry.deferred.resolve(response[index]);
								});
							} catch (err) {
								batch.entries?.forEach((entry) => {
									entry.deferred.reject(err);
								});
							}
						}, 150)),
						deferred.promise
					);
				}
				async postRecommendations(requestParameters) {
					const headerParameters = { 'Content-Type': 'text/plain' },
						path = `/boost/${requestParameters.siteId}/recommend`;
					return await this.request({ path, method: 'POST', headers: headerParameters, body: requestParameters }, JSON.stringify(requestParameters));
				}
			}
			function sortBatchEntries(a, b) {
				const one = a.request,
					two = b.request;
				return null == one.order && null == two.order
					? 0
					: null == one.order && null != two.order
					? 1
					: (null == two.order && null != one.order) || one.order < two.order
					? -1
					: one.order > two.order
					? 1
					: 0;
			}
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			const Client_defaultConfig = {
				mode: types.$.production,
				meta: { cache: { purgeable: !1 } },
				search: {},
				autocomplete: {},
				recommend: {},
				finder: {},
				suggest: {},
			};
			class Client {
				constructor(globals, config = {}) {
					if (((this.mode = types.$.production), !globals?.siteId)) throw 'no siteId specified!';
					(this.globals = globals),
						(this.config = cjs_default()(Client_defaultConfig, config)),
						Object.values(types.$).includes(this.config.mode) && (this.mode = this.config.mode),
						(this.requesters = {
							autocomplete: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.autocomplete?.origin,
									headers: this.config.autocomplete?.headers,
									cache: this.config.autocomplete?.cache,
									globals: this.config.autocomplete?.globals,
								}),
								this.config.autocomplete?.requesters
							),
							meta: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.meta?.origin,
									headers: this.config.meta?.headers,
									cache: this.config.meta?.cache,
									globals: this.config.meta?.globals,
								})
							),
							recommend: new RecommendAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.recommend?.origin,
									headers: this.config.recommend?.headers,
									cache: this.config.recommend?.cache,
									globals: this.config.recommend?.globals,
								})
							),
							search: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.search?.origin,
									headers: this.config.search?.headers,
									cache: this.config.search?.cache,
									globals: this.config.search?.globals,
								})
							),
							finder: new HybridAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.finder?.origin,
									headers: this.config.finder?.headers,
									cache: this.config.finder?.cache,
									globals: this.config.finder?.globals,
								})
							),
							suggest: new SuggestAPI(
								new ApiConfiguration({
									fetchApi: this.config.fetchApi,
									mode: this.mode,
									origin: this.config.suggest?.origin,
									headers: this.config.suggest?.headers,
									cache: this.config.suggest?.cache,
									globals: this.config.suggest?.globals,
								})
							),
						});
				}
				async meta(params) {
					const defaultParams = { siteId: this.globals.siteId };
					return (params = cjs_default()(defaultParams, params || {})), this.requesters.meta.getMeta(params);
				}
				async autocomplete(params = {}) {
					if (!params.search?.query?.string) throw 'query string parameter is required';
					params = cjs_default()(this.globals, params);
					const [meta, search] = await Promise.all([
						this.meta({ siteId: params.siteId || '' }),
						this.requesters.autocomplete.getAutocomplete(params),
					]);
					return { meta, search };
				}
				async search(params = {}) {
					params = cjs_default()(this.globals, params);
					const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.search.getSearch(params)]);
					return { meta, search };
				}
				async finder(params = {}) {
					params = cjs_default()(this.globals, params);
					const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.finder.getFinder(params)]);
					return { meta, search };
				}
				async trending(params) {
					return (params = cjs_default()({ siteId: this.globals.siteId }, params || {})), this.requesters.suggest.getTrending(params);
				}
				async recommend(params) {
					const { tag, ...otherParams } = params;
					if (!tag) throw 'tag parameter is required';
					const profileParams = { tag, siteId: params.siteId || this.globals.siteId };
					otherParams.branch && ((profileParams.branch = otherParams.branch), delete otherParams.branch);
					const recommendParams = { tag, ...otherParams, siteId: params.siteId || this.globals.siteId },
						[meta, profile, recommend] = await Promise.all([
							this.meta(params.siteId ? { siteId: params.siteId } : void 0),
							this.requesters.recommend.getProfile(profileParams),
							this.requesters.recommend.batchRecommendations(recommendParams),
						]);
					return { meta, profile, recommend };
				}
			}
		},
		'../snap-controller/dist/esm/Abstract/AbstractController.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { r: () => AbstractController });
			var _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../snap-toolbox/dist/esm/DomTargeter/DomTargeter.js');
			class AbstractController {
				get initialized() {
					return this._initialized;
				}
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context = {}) {
					if (
						((this.type = 'abstract'),
						(this.targeters = {}),
						(this._initialized = !1),
						(this.handleError = (err, details) => {
							let event;
							if (err instanceof ErrorEvent) event = err;
							else if (err instanceof Error) event = new ErrorEvent('error', { error: err, message: err.message });
							else if ('string' == typeof err || 'number' == typeof err) event = new ErrorEvent('error', { error: new Error(err.toString()) });
							else if ('object' == typeof err && Object.keys(err).length)
								try {
									event = new ErrorEvent('error', { error: new Error(JSON.stringify(err)) });
								} catch (e) {}
							if (event) {
								const {
										filename,
										colno,
										lineno,
										error: { stack },
										message,
										timeStamp,
									} = event,
									beaconPayload = {
										filename,
										stack,
										message,
										colno,
										lineno,
										errortimestamp: timeStamp,
										details,
										context: { controller: { id: this.id, type: this.type } },
									};
								this.tracker.track.error(beaconPayload), this.eventManager.fire('error', { controller: this, error: err });
							}
						}),
						'object' != typeof config || 'string' != typeof config.id || !config.id.match(/^[a-zA-Z0-9_-]*$/))
					)
						throw new Error('Invalid config passed to controller. The "id" attribute must be an alphanumeric string.');
					if ('object' != typeof client || 'function' != typeof client.search)
						throw new Error('Invalid service \'client\' passed to controller. Missing "search" function.');
					if ('object' != typeof store || 'function' != typeof store.update)
						throw new Error('Invalid service \'store\' passed to controller. Missing "update" function.');
					if ('object' != typeof urlManager || 'function' != typeof urlManager.subscribe)
						throw new Error('Invalid service \'urlManager\' passed to controller. Missing "subscribe" function.');
					if ('object' != typeof eventManager || 'function' != typeof eventManager.on)
						throw new Error('Invalid service \'eventManager\' passed to controller. Missing "on" function.');
					if ('object' != typeof eventManager || 'function' != typeof eventManager.fire)
						throw new Error('Invalid service \'eventManager\' passed to controller. Missing "fire" function.');
					if ('object' != typeof profiler || 'function' != typeof profiler.setNamespace)
						throw new Error('Invalid service \'profiler\' passed to controller. Missing "setNamespace" function.');
					if ('object' != typeof profiler || 'function' != typeof profiler.create)
						throw new Error('Invalid service \'profiler\' passed to controller. Missing "create" function.');
					if ('object' != typeof logger || 'function' != typeof logger.dev)
						throw new Error('Invalid service \'logger\' passed to controller. Missing "dev" function.');
					if ('object' != typeof tracker || 'object' != typeof tracker.track)
						throw new Error('Invalid service \'tracker\' passed to controller. Missing "track" object.');
					(this.id = config.id),
						(this.config = config),
						(this.client = client),
						(this.store = store),
						(this.urlManager = urlManager),
						(this.eventManager = eventManager),
						(this.profiler = profiler),
						(this.log = logger),
						(this.tracker = tracker),
						(this.context = context),
						this.log.setNamespace(this.config.id),
						this.profiler.setNamespace(this.config.id);
				}
				createTargeter(target, onTarget, document) {
					return this.addTargeter(new _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_0__.b([target], onTarget, document));
				}
				addTargeter(target) {
					const firstTarget = target.getTargets()[0],
						targetName = firstTarget?.name ?? firstTarget?.selector;
					if (targetName && !this.targeters[targetName]) return (this.targeters[targetName] = target), target;
				}
				async init() {
					this._initialized && this.log.warn("'init' middleware recalled");
					const initProfile = this.profiler.create({ type: 'event', name: 'init', context: this.config }).start();
					try {
						try {
							await this.eventManager.fire('init', { controller: this });
						} catch (err) {
							if ('cancelled' != err?.message) throw (this.log.error("error in 'init' middleware"), err);
							this.log.warn("'init' middleware cancelled");
						}
					} catch (err) {
						err && (console.error(err), this.handleError(err));
					}
					this._initialized ||
						(this.urlManager.subscribe((prev, next) => {
							try {
								const prevString = JSON.stringify(prev);
								prevString !== JSON.stringify(next) && this.search();
							} catch (err) {
								this.log.error('URL state is invalid', err);
							}
						}),
						(this._initialized = !0)),
						initProfile.stop(),
						this.log.profile(initProfile);
				}
				retarget() {
					Object.keys(this.targeters).forEach((target) => {
						this.targeters[target].retarget();
					});
				}
				async plugin(func, ...args) {
					await func(this, ...args);
				}
				on(event, ...func) {
					this.eventManager.on(event, ...func);
				}
				use(attachments) {
					if (attachments?.plugins)
						try {
							if (!Array.isArray(attachments?.plugins)) throw 'invalid format';
							attachments?.plugins.forEach((plugin) => {
								if (!Array.isArray(plugin)) throw 'invalid format';
								const [func, ...args] = plugin;
								this.plugin(func, ...args);
							});
						} catch (err) {
							this.log.warn('plugins not attached - use format [func, ...args?][]');
						}
					attachments?.middleware &&
						Object.keys(attachments.middleware).forEach((eventName) => {
							const eventMiddleware = attachments.middleware[eventName];
							let middlewareArray;
							(middlewareArray = Array.isArray(eventMiddleware) ? eventMiddleware : [eventMiddleware]),
								middlewareArray.forEach((middleware) => {
									this.on(eventName, middleware);
								});
						});
				}
			}
		},
		'../snap-controller/dist/esm/Search/SearchController.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Tp: () => SearchController });
			var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),
				css_escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/css.escape/css.escape.js'),
				css_escape__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(css_escape__WEBPACK_IMPORTED_MODULE_1__),
				_Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-controller/dist/esm/Abstract/AbstractController.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-store-mobx/dist/esm/types.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				_utils_getParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-controller/dist/esm/utils/getParams.js'),
				_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-controller/dist/esm/types.js');
			const defaultConfig = {
				id: 'search',
				globals: {},
				settings: { redirects: { merchandising: !0, singleResult: !0 }, facets: { trim: !0, pinFiltered: !0, storeRange: !0, autoOpenActive: !0 } },
			};
			class SearchController extends _Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_2__.r {
				constructor(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context) {
					super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context),
						(this.type = _types__WEBPACK_IMPORTED_MODULE_3__.k.search),
						(this.previousResults = []),
						(this.track = {
							product: {
								click: (e, result) => {
									const target = e.target,
										resultHref = result.display?.mappings.core?.url || result.mappings.core?.url,
										elemHref = target?.getAttribute('href'),
										storedHref = -1 != elemHref?.indexOf(resultHref) ? resultHref : elemHref || resultHref,
										scrollMap = {},
										selector = (function generateHrefSelector(element, href, levels = 7) {
											let level = 0,
												elem = element;
											for (; elem && level <= levels; ) {
												const innerHrefElem = elem.querySelector(`[href*="${href}"]`);
												if (innerHrefElem) {
													let selector = '',
														parentElem = innerHrefElem;
													for (; parentElem && parentElem != elem.parentElement; ) {
														const escapedClassSelector = parentElem.classList.value
															.trim()
															.split(' ')
															.reduce(
																(classes, classname) =>
																	classname.trim() ? `${classes}.${css_escape__WEBPACK_IMPORTED_MODULE_1___default()(classname.trim())}` : classes,
																''
															);
														(selector = `${parentElem.tagName}${escapedClassSelector}${selector ? ` ${selector}` : ''}`),
															(parentElem = parentElem.parentElement);
													}
													return `${selector}[href*="${href}"]`;
												}
												(elem = elem.parentElement), level++;
											}
											return;
										})(target, storedHref),
										domRect = selector ? document?.querySelector(selector)?.getBoundingClientRect() : void 0;
									if (selector || storedHref || domRect)
										try {
											const storableRequestParams = getStorableRequestParams(JSON.parse(this.storage.get('lastStringyParams')));
											scrollMap[JSON.stringify(storableRequestParams)] = { domRect, href: storedHref, selector };
										} catch (err) {
											this.log.warn('Failed to save scollMap!', err);
										}
									this.storage.set('scrollMap', scrollMap);
									const { intellisuggestData, intellisuggestSignature } = result.attributes,
										event = this.tracker.track.product.click({ intellisuggestData, intellisuggestSignature, href: elemHref || resultHref });
									return this.eventManager.fire('track.product.click', { controller: this, event: e, result, trackEvent: event }), event;
								},
							},
						}),
						(this.search = async () => {
							this.initialized || (await this.init());
							const params = this.params;
							this.params.search?.query?.string &&
								this.params.search?.query?.string.length &&
								this.store.history.save(this.params.search.query.string);
							try {
								try {
									await this.eventManager.fire('beforeSearch', { controller: this, request: params });
								} catch (err) {
									if ('cancelled' == err?.message) return void this.log.warn("'beforeSearch' middleware cancelled");
									throw (this.log.error("error in 'beforeSearch' middleware"), err);
								}
								const stringyParams = JSON.stringify(params);
								if (stringyParams == this.storage.get('lastStringyParams')) return;
								const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();
								let meta = {},
									search = {};
								if (this.config.settings?.infinite && params.pagination?.page && params.pagination.page > 1) {
									const preventBackfill =
											this.config.settings.infinite?.backfill &&
											!this.store.results.length &&
											params.pagination.page > this.config.settings.infinite.backfill,
										dontBackfill = !this.config.settings.infinite?.backfill && !this.store.results.length;
									if (preventBackfill || dontBackfill) return this.storage.set('scrollMap', {}), void this.urlManager.set('page', 1).go();
									if (this.config.settings?.infinite.backfill && !this.previousResults.length) {
										const backfillRequests = Array(params.pagination.page)
												.fill('backfill')
												.map((v, i) => {
													const backfillParams = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(
														{ ...params },
														{ pagination: { page: i + 1 }, search: { redirectResponse: 'full' } }
													);
													return (
														i + 1 == 1 &&
															(delete backfillParams?.pagination?.page,
															this.config.settings?.redirects?.merchandising && delete backfillParams?.search?.redirectResponse),
														this.client.search(backfillParams)
													);
												}),
											backfillResponses = await Promise.all(backfillRequests);
										(meta = backfillResponses[0].meta), (search = backfillResponses[0].search);
										const backfillResults = backfillResponses.reduce((results, response) => results.concat(...response.search.results), []);
										(search.pagination.totalPages = Math.ceil(search.pagination.totalResults / search.pagination.pageSize)),
											(search.pagination.page = params.pagination?.page),
											(search.results = backfillResults);
									} else {
										const infiniteResponse = await this.client.search(params);
										(meta = infiniteResponse.meta),
											(search = infiniteResponse.search),
											(search.results = [...this.previousResults, ...(search.results || [])]);
									}
								} else {
									const searchResponse = await this.client.search(params);
									(meta = searchResponse.meta), (search = searchResponse.search);
								}
								const response = { meta, search };
								searchProfile.stop(), this.log.profile(searchProfile);
								const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();
								try {
									await this.eventManager.fire('afterSearch', { controller: this, request: params, response });
								} catch (err) {
									if ('cancelled' == err?.message) return this.log.warn("'afterSearch' middleware cancelled"), void afterSearchProfile.stop();
									throw (this.log.error("error in 'afterSearch' middleware"), err);
								}
								afterSearchProfile.stop(),
									this.log.profile(afterSearchProfile),
									this.config.settings?.infinite && (this.previousResults = JSON.parse(JSON.stringify(search.results))),
									this.store.update(response);
								const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();
								try {
									await this.eventManager.fire('afterStore', { controller: this, request: params, response });
								} catch (err) {
									if ('cancelled' == err?.message) return this.log.warn("'afterStore' middleware cancelled"), void afterStoreProfile.stop();
									throw (this.log.error("error in 'afterStore' middleware"), err);
								}
								afterStoreProfile.stop(), this.log.profile(afterStoreProfile);
							} catch (err) {
								if (err) {
									if (err.err && err.fetchDetails) {
										switch (err.fetchDetails.status) {
											case 429:
												this.store.error = {
													code: 429,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.WARNING,
													message: 'Too many requests try again later',
												};
												break;
											case 500:
												this.store.error = {
													code: 500,
													type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.ERROR,
													message: 'Invalid Search Request or Service Unavailable',
												};
												break;
											default:
												this.store.error = { type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.ERROR, message: err.err.message };
										}
										this.log.error(this.store.error), this.handleError(err.err, err.fetchDetails);
									} else
										(this.store.error = {
											type: _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_4__.B.ERROR,
											message: `Something went wrong... - ${err}`,
										}),
											this.log.error(err),
											this.handleError(err);
									this.store.loading = !1;
								}
							}
						}),
						(this.config = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(defaultConfig, this.config)),
						this.config.settings?.infinite &&
							void 0 === this.config.settings.restorePosition &&
							(this.config.settings.restorePosition = { enabled: !0 }),
						this.store.setConfig(this.config),
						(this.storage = new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.t({
							type: 'session',
							key: `ss-controller-${this.config.id}`,
						})),
						this.storage.set('lastStringyParams', void 0),
						this.eventManager.on('beforeSearch', async (search, next) => {
							(search.controller.store.loading = !0), await next();
						}),
						this.eventManager.on('afterSearch', async (search, next) => {
							const config = search.controller.config,
								redirectURL = search.response?.search?.merchandising?.redirect,
								searchStore = search.controller.store;
							if (redirectURL && config?.settings?.redirects?.merchandising && !search?.response?.search?.filters?.length && !searchStore.loaded)
								return window.location.replace(redirectURL), !1;
							const nonBackgroundFilters = search?.request?.filters?.filter((filter) => !filter.background);
							if (
								config?.settings?.redirects?.singleResult &&
								search?.response?.search?.search?.query &&
								1 === search?.response?.search?.pagination?.totalResults &&
								!nonBackgroundFilters?.length &&
								!search.controller.previousResults.length &&
								search?.response?.search?.results?.[0]?.mappings?.core?.url
							)
								return window.location.replace(search.response.search.results[0].mappings.core.url), !1;
							await next();
						}),
						this.eventManager.on('afterStore', async (search, next) => {
							await next(), this.storage.set('lastStringyParams', JSON.stringify(search.request));
							const storableRequestParams = getStorableRequestParams(search.request),
								stringyParams = JSON.stringify(storableRequestParams),
								elementPosition = (this.storage.get('scrollMap') || {})[stringyParams];
							elementPosition || this.storage.set('scrollMap', {}),
								await this.eventManager.fire('restorePosition', { controller: this, element: elementPosition }),
								(search.controller.store.loading = !1);
						}),
						this.config.settings?.restorePosition?.enabled &&
							(this.eventManager.on('restorePosition', async ({ controller, element }, next) => {
								if (!element?.selector) {
									const lastRequest = this.storage.get('lastStringyParams');
									if (lastRequest) {
										const storableRequestParams = getStorableRequestParams(JSON.parse(lastRequest)),
											stringyParams = JSON.stringify(storableRequestParams),
											scrollMap = this.storage.get('scrollMap') || {};
										element = scrollMap[stringyParams];
									}
								}
								element &&
									(await new Promise(async (resolve) => {
										const maxScrolls = Math.ceil(10),
											maxCheckCount = maxScrolls + 2;
										let scrolledElem,
											scrollBackCount = 0,
											checkCount = 0;
										const checkAndScroll = () => {
											let offset = element?.domRect?.top || 0,
												elem = document.querySelector(element?.selector);
											for (; elem && !elem.getBoundingClientRect().height; ) (elem = elem.parentElement), (offset = 0);
											if (elem) {
												const { y } = elem.getBoundingClientRect();
												scrollBackCount++, y > offset + 1 || y < offset - 1 ? window.scrollBy(0, y - offset) : (scrolledElem = elem);
											} else checkCount++;
											return !0;
										};
										for (; checkAndScroll() && scrollBackCount <= maxScrolls && checkCount <= maxCheckCount; )
											await new Promise((resolve) => setTimeout(resolve, 50));
										scrolledElem
											? controller.log.debug('restored position to: ', scrolledElem)
											: controller.log.debug('attempted to scroll back to element with selector: ', element?.selector),
											resolve();
									})),
									await next();
							}),
							this.config.settings?.restorePosition?.onPageShow &&
								window.addEventListener('pageshow', () => {
									this.eventManager.fire('restorePosition', { controller: this, element: {} });
								})),
						this.use(this.config);
				}
				get params() {
					const params = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(
						{ ...(0, _utils_getParams__WEBPACK_IMPORTED_MODULE_6__.j)(this.urlManager.state) },
						this.config.globals || {}
					);
					(this.config.settings?.redirects?.merchandising && !this.store.loaded) ||
						((params.search = params.search || {}), (params.search.redirectResponse = 'full')),
						(params.tracking = params.tracking || {}),
						(params.tracking.domain = window.location.href);
					const userId = this.tracker.getUserId();
					userId && (params.tracking.userId = userId);
					const sessionId = this.tracker.getContext().sessionId;
					sessionId && (params.tracking.sessionId = sessionId);
					const pageId = this.tracker.getContext().pageLoadId;
					if ((pageId && (params.tracking.pageLoadId = pageId), !this.config.globals?.personalization?.disabled)) {
						const cartItems = this.tracker.cookies.cart.get();
						cartItems.length && ((params.personalization = params.personalization || {}), (params.personalization.cart = cartItems.join(',')));
						const lastViewedItems = this.tracker.cookies.viewed.get();
						lastViewedItems.length &&
							((params.personalization = params.personalization || {}), (params.personalization.lastViewed = lastViewedItems.join(',')));
						const shopperId = this.tracker.getShopperId();
						shopperId && ((params.personalization = params.personalization || {}), (params.personalization.shopper = shopperId));
					}
					return params;
				}
			}
			function getStorableRequestParams(request) {
				return {
					siteId: request.siteId,
					sorts: request.sorts,
					search: { query: { string: request?.search?.query?.string || '' }, subQuery: request?.search?.subQuery || '' },
					filters: request.filters,
					pagination: request.pagination,
					facets: request.facets,
					merchandising: { landingPage: request.merchandising?.landingPage || '' },
				};
			}
		},
		'../snap-controller/dist/esm/types.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ControllerTypes;
			__webpack_require__.d(__webpack_exports__, { k: () => ControllerTypes }),
				(function (ControllerTypes) {
					(ControllerTypes.search = 'search'),
						(ControllerTypes.autocomplete = 'autocomplete'),
						(ControllerTypes.finder = 'finder'),
						(ControllerTypes.recommendation = 'recommendation');
				})(ControllerTypes || (ControllerTypes = {}));
		},
		'../snap-controller/dist/esm/utils/getParams.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function getSearchParams(state) {
				const params = {};
				if (
					(state.tag && ((params.merchandising = params.merchandising || {}), (params.merchandising.landingPage = state.tag)),
					state.query &&
						((params.search = params.search || {}), (params.search.query = params.search.query || {}), (params.search.query.string = state.query)),
					state.rq && ((params.search = params.search || {}), (params.search.subQuery = state.rq)),
					state.oq && ((params.search = params.search || {}), (params.search.originalQuery = state.oq)),
					state.fallbackQuery && ((params.search = params.search || {}), (params.search.fallbackQuery = state.fallbackQuery)),
					state.page && ((params.pagination = params.pagination || {}), (params.pagination.page = state.page)),
					state.pageSize && ((params.pagination = params.pagination || {}), (params.pagination.pageSize = state.pageSize)),
					state.sort)
				) {
					params.sorts = params.sorts || [];
					const sort = (Array.isArray(state.sort) ? state.sort : [state.sort])[0];
					sort && sort.field && sort.direction && params.sorts.push({ field: sort.field, direction: sort.direction });
				}
				return (
					state.filter &&
						((params.filters = params.filters || []),
						Object.keys(state.filter).forEach((field) => {
							if ('string' != typeof field) return;
							const filter = state.filter[field];
							(Array.isArray(filter) ? filter : [filter]).forEach((value) => {
								'object' != typeof value
									? params.filters.push({ type: 'value', field, value })
									: void 0 !== value.low && void 0 !== value.high && params.filters.push({ type: 'range', field, value });
							});
						})),
					params
				);
			}
			__webpack_require__.d(__webpack_exports__, { j: () => getSearchParams });
		},
		'../snap-event-manager/dist/esm/EventManager.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { E: () => EventManager });
			class MiddlewareManager {
				constructor() {
					this.functions = [];
				}
				use(...func) {
					this.functions.push(...func);
				}
				remove(func) {
					const stringyFunc = func.toString();
					this.functions = this.functions.filter((fn) => func.name !== fn.name || fn.toString() != stringyFunc);
				}
				clear() {
					this.functions = [];
				}
				async dispatch(context) {
					const cancelling = await (async function runFunctionsWithAbortWrapper(context, functions) {
						let cancelled = !1;
						return (
							await runFunctions(context, functions, (proceed) => {
								!1 === proceed && (cancelled = !0);
							}),
							cancelled
						);
					})(context || {}, this.functions);
					if (1 == cancelling) throw new Error('cancelled');
				}
			}
			async function runFunctions(context, functions, callback) {
				if (!functions.length) return;
				const func = functions[0],
					proceed = await func(context, async () => {
						await runFunctions(context, functions.slice(1), callback);
					});
				callback(proceed);
			}
			class EventManager {
				constructor() {
					this.events = {};
				}
				async fire(event, context) {
					return this.events[event] && (await this.events[event].dispatch(context)), Promise.resolve();
				}
				on(event, ...func) {
					this.events[event] || (this.events[event] = new MiddlewareManager()), this.events[event].use(...func);
				}
			}
		},
		'../snap-logger/dist/esm/Logger.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { V: () => Logger });
			var types = __webpack_require__('../snap-toolbox/dist/esm/types.js');
			const colors = {
					blue: '#3379c1',
					bluelight: '#688BA3',
					bluedark: '#1B3141',
					bluegreen: '#318495',
					grey: '#61717B',
					green: '#507B43',
					greendark: '#63715F',
					greenblue: '#46927D',
					indigo: '#4c3ce2',
					orange: '#ecaa15',
					orangelight: '#ff6600',
					orangedark: '#c59600',
					red: '#cc1212',
					redlight: '#f30707',
					reddark: '#8E111C',
					yellow: '#d1d432',
				},
				emoji = {
					bang: String.fromCodePoint(8252),
					bright: String.fromCodePoint(128262),
					check: String.fromCodePoint(10004),
					clock: String.fromCodePoint(128342),
					cloud: String.fromCodePoint(9729),
					dim: String.fromCodePoint(128261),
					gear: String.fromCodePoint(9881),
					interobang: String.fromCodePoint(8265),
					lightning: String.fromCodePoint(9889),
					magic: String.fromCodePoint(10024),
					rocket: String.fromCodePoint(128640),
					search: String.fromCodePoint(128269),
					snap: String.fromCodePoint(128165),
					ufo: String.fromCodePoint(128760),
					vortex: String.fromCodePoint(127744),
					warning: String.fromCodePoint(9888),
				};
			class Logger {
				constructor(config) {
					(this.mode = types.$.production),
						(this.emoji = emoji),
						(this.colors = colors),
						(this.prefix = ''),
						(this.prefix = config?.prefix || ''),
						(this.mode = config?.mode || types.$.production);
				}
				setNamespace(group) {
					this.prefix = ` [${group}] :: `;
				}
				error(...params) {
					let text = '',
						rest = params;
					params.length && 'string' == typeof params[0] && ([text, ...rest] = params),
						console.log(
							`%c ${emoji.bang} %c${this.prefix}${text}`,
							`color: ${colors.red}; font-weight: bold; font-size: 14px; line-height: 12px;`,
							`color: ${colors.red}; font-weight: bold;`,
							...rest
						);
				}
				warn(...params) {
					let text = '',
						rest = params;
					params.length && 'string' == typeof params[0] && ([text, ...rest] = params),
						console.log(
							`%c ${emoji.warning} %c${this.prefix}%c${text}`,
							`color: ${colors.yellow}; font-weight: bold; font-size: 14px; line-height: 12px;`,
							`color: ${colors.yellow}; font-weight: normal;`,
							`color: ${colors.yellow}; font-weight: bold;`,
							...rest
						);
				}
				image({ url, width, height }, ...params) {
					const styles_size = `font-size: 1px; padding: ${height || width} ${width || height};`,
						styles_background = `background: url("${url}") no-repeat; background-size: contain;`;
					this.dev('%c...', `${styles_size} ${styles_background}`, ...params);
				}
				imageText({ url, text = '', style }, ...params) {
					const styles_background = `margin-left: 6px; background: url("${url}") no-repeat; background-size: contain;`,
						styles_custom = style;
					let imgText = text,
						rest = params;
					!imgText && params?.length && ([imgText, ...rest] = params),
						this.dev(`%c ${'  ' + this.prefix}${imgText}`, `${styles_background} ${styles_custom}`, ...rest);
				}
				debug(...params) {
					let text = '',
						rest = params;
					params.length && 'string' == typeof params[0] && ([text, ...rest] = params),
						this.dev(
							`%c ${emoji.interobang} %c${this.prefix}${text}`,
							`color: ${colors.orangelight}; font-weight: bold; font-size: 14px; line-height: 12px;`,
							`color: ${colors.orangelight}; font-weight: bold;`,
							...rest
						);
				}
				profile(profile, ...params) {
					this.dev(
						`%c ${emoji.gear} %c${this.prefix}%c${profile.type}  %c~  ${profile.name}  ::  %c${profile.status.toUpperCase()}${
							'finished' == profile.status ? '  ::  %c' + profile.time.run + 'ms' : ''
						}`,
						`color: ${colors.orange}; font-size: 14px; line-height: 12px;`,
						`color: ${colors.orange};`,
						`color: ${colors.orange}; font-style: italic;`,
						`color: ${colors.orange};`,
						`color: ${colors.orange}; font-weight: bold;`,
						`color: ${colors.grey};`,
						...params
					);
				}
				dev(...params) {
					this.mode === types.$.development && console.log(...params);
				}
			}
		},
		'./components/.storybook/preview.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, { decorators: () => decorators, parameters: () => parameters });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/addon-themes/dist/index.mjs'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				is_plain_object = __webpack_require__('../../node_modules/is-plain-object/dist/is-plain-object.mjs'),
				mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				Client = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				Logger = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				Tracker = __webpack_require__('../snap-tracker/dist/esm/Tracker.js'),
				types = __webpack_require__('../snap-toolbox/dist/esm/types.js'),
				getContext = __webpack_require__('../snap-toolbox/dist/esm/getContext/getContext.js');
			const url = (href) => {
				if (!href) return;
				const [urlWithoutHash, hash] = href.split('#'),
					[base, queryParams] = urlWithoutHash.split('?'),
					params = { query: {}, hash };
				queryParams?.split('&').forEach((entry) => {
					const [key, value] = entry.split('=');
					params.query[key] = value;
				});
				return {
					base,
					params,
					url: () => {
						const queryString = Object.keys(params.query)
							.map((key) => `${key}=${params.query[key]}`)
							.join('&');
						return `${base}${queryString ? '?' + queryString : ''}${params.hash ? '#' + params.hash : ''}`;
					},
				};
			};
			var cookies = __webpack_require__('../snap-toolbox/dist/esm/cookies/cookies.js'),
				version = __webpack_require__('../snap-toolbox/dist/esm/version/version.js'),
				featureFlags = __webpack_require__('../snap-toolbox/dist/esm/featureFlags/featureFlags.js'),
				DomTargeter = __webpack_require__('../snap-toolbox/dist/esm/DomTargeter/DomTargeter.js'),
				esm_types = __webpack_require__('../snap-controller/dist/esm/types.js');
			const VALID_ACTIONS = ['merge', 'set'],
				DEFAULT_IGNORE_PARAMETERS = ['query', 'tag', 'oq', 'fallbackQuery'];
			var createSearchController = __webpack_require__('./src/create/createSearchController.ts'),
				dist_esm_types = __webpack_require__('../snap-tracker/dist/esm/types.js');
			const SHOPIFY_WEBPIXEL_STORAGE_KEY = 'ssWebPixel';
			function configureSnapFeatures(config) {
				!(function configureIntegratedSpellCorrection(config) {
					config.features?.integratedSpellCorrection?.enabled &&
						(config.client &&
							(config.client.config = cjs_default()(
								{ autocomplete: { requesters: { suggest: { globals: { integratedSpellCorrection: !0 } } } } },
								config.client.config || {}
							)),
						Object.keys(config?.controllers || {}).forEach((type) => {
							if ('autocomplete' === type)
								config.controllers[type].forEach((controller) => {
									void 0 === controller.config?.settings?.integratedSpellCorrection &&
										(controller.config.settings = cjs_default()({ integratedSpellCorrection: !0 }, controller.config.settings || {})),
										controller.config?.settings?.integratedSpellCorrection &&
											(controller.config.globals = cjs_default()({ search: { query: { spellCorrection: !0 } } }, controller.config.globals || {}));
								});
						}));
				})(config),
					(function configureTracking(config) {
						const webPixel = window.sessionStorage?.getItem(SHOPIFY_WEBPIXEL_STORAGE_KEY);
						if (webPixel)
							try {
								const webPixelData = JSON.parse(webPixel);
								if (webPixelData?.enabled) {
									const doNotTrack = [
										{ type: dist_esm_types.Tz.PRODUCT, category: dist_esm_types.fx.PAGEVIEW },
										{ type: dist_esm_types.Tz.CART, category: dist_esm_types.fx.CARTVIEW },
										{ type: dist_esm_types.Tz.ORDER, category: dist_esm_types.fx.ORDERVIEW },
									];
									(config.tracker = config.tracker || {}),
										(config.tracker.config = config.tracker.config || {}),
										(config.tracker.config.doNotTrack = (config.tracker.config.doNotTrack || []).concat(doNotTrack));
								}
							} catch (e) {}
					})(config);
			}
			var EventManager = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js');
			const matchControllers = (matchIds) =>
				Object.keys(window.searchspring.controller || {}).reduce((arr, id) => {
					const controller = window.searchspring.controller[id];
					return matchIds
						? (Array.isArray(matchIds) &&
								matchIds.forEach((idToFind) => {
									if (idToFind instanceof RegExp) {
										if (id.match(idToFind)?.length) return arr.push(controller), arr;
									} else if (id == idToFind) return arr.push(controller), arr;
								}),
						  'string' == typeof matchIds && matchIds === id ? (arr.push(controller), arr) : arr)
						: (arr.push(controller), arr);
				}, []);
			(0, mobx_esm.jK)({ useProxies: 'never', isolateGlobalState: !0, enforceActions: 'never' });
			const COMPONENT_ERROR =
				"Uncaught Error - Invalid value passed as the component.\nThis usually happens when you pass a JSX Element, and not a function that returns the component, in the snap config. \n\t\t\n\t\tinstead of - \n\n\ttargeters: [\n\t\t{\n\t\t\tselector: '#searchspring-content',\n\t\t\thideTarget: true,\n\t\t\tcomponent: <Content/>,\n\t\t},\n\t]\n\n\t\tor - \n\n\ttargeters: [\n\t\t{\n\t\t\tselector: '#searchspring-content',\n\t\t\thideTarget: true,\n\t\t\tcomponent: Content,\n\t\t},\n\t]\n\n\t\tplease try - \n\n\ttargeters: [\n\t\t{\n\t\t\tselector: '#searchspring-content',\n\t\t\thideTarget: true,\n\t\t\tcomponent: () => Content\n\t\t},\n\t]\n\nThe error above happened in the following targeter in the Snap Config";
			class Snap {
				constructor(config, services) {
					(this.mode = types.$.production),
						(this._instantiatorPromises = {}),
						(this._controllerPromises = {}),
						(this.controllers = {}),
						(this.getInstantiator = (id) =>
							this._instantiatorPromises[id] || Promise.reject(`getInstantiator could not find instantiator with id: ${id}`)),
						(this.getController = (id) => this._controllerPromises[id] || Promise.reject(`getController could not find controller with id: ${id}`)),
						(this.getControllers = (...controllerIds) => {
							const getControllerPromises = [];
							return controllerIds.forEach((id) => getControllerPromises.push(this.getController(id))), Promise.all(getControllerPromises);
						}),
						(this.createController = async (type, config, services, urlConfig, context, callback) => {
							if (void 0 !== this._controllerPromises[config.id]) throw new Error(`Controller with id '${config.id}' is already defined`);
							return (
								(this._controllerPromises[config.id] = new Promise((resolve) =>
									this._createController(type, config, services, urlConfig, context, async (cntrlr) => {
										'function' == typeof callback && (await callback(cntrlr)), resolve(cntrlr);
									})
								)),
								this._controllerPromises[config.id]
							);
						}),
						(this._createController = async (type, config, services, urlConfig, context, callback) => {
							let importPromise;
							switch (type) {
								case esm_types.k.autocomplete:
									importPromise = Promise.all([__webpack_require__.e(9754), __webpack_require__.e(6740)]).then(
										__webpack_require__.bind(__webpack_require__, './src/create/createAutocompleteController.ts')
									);
									break;
								case esm_types.k.finder:
									importPromise = __webpack_require__
										.e(7401)
										.then(__webpack_require__.bind(__webpack_require__, './src/create/createFinderController.ts'));
									break;
								case esm_types.k.recommendation:
									importPromise = Promise.all([__webpack_require__.e(9849), __webpack_require__.e(9107)]).then(
										__webpack_require__.bind(__webpack_require__, './src/create/createRecommendationController.ts')
									);
									break;
								case esm_types.k.search:
								default:
									importPromise = Promise.resolve().then(__webpack_require__.bind(__webpack_require__, './src/create/createSearchController.ts'));
							}
							const creationFunc = (await importPromise).default;
							return (
								this.controllers[config.id] ||
									((window.searchspring.controller = window.searchspring.controller || {}),
									(window.searchspring.controller[config.id] = this.controllers[config.id] =
										creationFunc(
											{
												mode: this.mode,
												url: cjs_default()(this.config.url || {}, urlConfig || {}),
												controller: config,
												context: cjs_default()(this.context || {}, context || {}),
											},
											{
												client: services?.client || this.client,
												store: services?.store,
												urlManager: services?.urlManager,
												eventManager: services?.eventManager,
												profiler: services?.profiler,
												logger: services?.logger,
												tracker: services?.tracker || this.tracker,
											}
										))),
								callback && (await callback(this.controllers[config.id])),
								this.controllers[config.id]
							);
						}),
						(this.handlers = {
							attributes: (event) => {
								const trackerId = this.tracker.config.id,
									attributeList = [
										`ss-${trackerId}-cart-add`,
										`ss-${trackerId}-cart-remove`,
										`ss-${trackerId}-cart-clear`,
										`ss-${trackerId}-cart-view`,
										`ss-${trackerId}-intellisuggest`,
										`ss-${trackerId}-intellisuggest-signature`,
										'href',
									],
									attributes = {};
								let levels = 0,
									elem = null;
								for (elem = event && event.target; 0 == Object.keys(attributes).length && null !== elem && levels <= 3; )
									Object.values(elem.attributes).forEach((attr) => {
										const attrName = attr.nodeName;
										-1 != attributeList.indexOf(attrName) && (attributes[attrName] = elem && elem.getAttribute(attrName));
									}),
										(elem = elem.parentElement),
										levels++;
								if (attributes[`ss-${trackerId}-cart-add`]) {
									const skus = attributes[`ss-${trackerId}-cart-add`].split(',');
									this.tracker.cookies.cart.add(skus), this.eventManager.fire('controller/recommendation/update');
								} else if (attributes[`ss-${trackerId}-cart-remove`]) {
									const skus = attributes[`ss-${trackerId}-cart-remove`].split(',');
									this.tracker.cookies.cart.remove(skus), this.eventManager.fire('controller/recommendation/update');
								} else if (`ss-${trackerId}-cart-clear` in attributes)
									this.tracker.cookies.cart.clear(), this.eventManager.fire('controller/recommendation/update');
								else if (`ss-${trackerId}-cart-view` in attributes) this.eventManager.fire('controller/recommendation/update');
								else if (attributes[`ss-${trackerId}-intellisuggest`] && attributes[`ss-${trackerId}-intellisuggest-signature`]) {
									const intellisuggestData = attributes[`ss-${trackerId}-intellisuggest`],
										intellisuggestSignature = attributes[`ss-${trackerId}-intellisuggest-signature`],
										href = attributes.href;
									this.tracker.track.product.click({ intellisuggestData, intellisuggestSignature, href });
								}
							},
							error: (event) => {
								try {
									const { filename } = event;
									if (filename.includes('snapui.searchspring.io') && filename.endsWith('.js') && this.tracker.track.error) {
										const {
												colno,
												lineno,
												error: { stack },
												message,
												timeStamp,
											} = event,
											beaconPayload = { href: window.location.href, filename, stack, message, colno, lineno, errortimestamp: timeStamp };
										this.tracker.track.error(beaconPayload);
									}
								} catch (e) {}
							},
						}),
						window.removeEventListener('error', this.handlers.error),
						window.addEventListener('error', this.handlers.error),
						document.removeEventListener('click', this.handlers.attributes),
						document.addEventListener('click', this.handlers.attributes),
						(this.config = config);
					let globalContext = {};
					try {
						globalContext = (0, getContext.S)(['shopper', 'config', 'custom', 'merchandising', 'siteId', 'currency']);
					} catch (err) {
						console.error('Snap failed to find global context');
					}
					if (
						((this.config = cjs_default()(this.config || {}, globalContext.config || {}, { isMergeableObject: is_plain_object.Q })),
						(this.context = cjs_default()(this.config.context || {}, globalContext || {}, { isMergeableObject: is_plain_object.Q })),
						!this.config?.client?.globals?.siteId && this.context.siteId)
					) {
						const defaultClientConfig = { globals: { siteId: this.context.siteId } };
						this.config.client = cjs_default()(this.config.client || {}, defaultClientConfig);
					}
					if (!((services?.client && services?.tracker) || this.config?.client?.globals?.siteId))
						throw new Error('Snap: config provided must contain a valid config.client.globals.siteId value');
					this.config.client?.globals &&
						this.context.merchandising?.segments &&
						(this.config.client.globals?.merchandising
							? (this.config.client.globals.merchandising.segments = cjs_default()(
									this.config.client.globals.merchandising.segments,
									this.context.merchandising.segments
							  ))
							: (this.config.client.globals.merchandising = { segments: this.context.merchandising.segments })),
						services?.templatesStore && (this.templates = services.templatesStore);
					try {
						const urlParams = url(window.location.href),
							branchOverride = urlParams?.params?.query?.branch || cookies.U.get('ssBranch'),
							cookieDomain =
								('undefined' != typeof window && window.location.hostname && '.' + window.location.hostname.replace(/^www\./, '')) || void 0;
						Object.values(types.$).includes('production') && (this.mode = 'production'),
							this.config.mode && Object.values(types.$).includes(this.config.mode) && (this.mode = this.config.mode),
							((urlParams?.params?.query && 'dev' in urlParams.params.query) || cookies.U.get('ssDev')) &&
								('false' == urlParams?.params.query?.dev || '0' == urlParams?.params.query?.dev
									? (cookies.U.unset('ssDev', cookieDomain), (this.mode = types.$.production))
									: (cookies.U.set('ssDev', '1', 'Lax', 0, cookieDomain), (this.mode = types.$.development))),
							this.config.client &&
								((this.config.client.config = this.config.client.config || {}),
								(this.config.client.config.mode = this.config.client.config.mode || this.mode)),
							configureSnapFeatures(this.config),
							(this.client = services?.client || new Client.K(this.config.client.globals, this.config.client.config)),
							(this.logger = services?.logger || new Logger.V({ prefix: 'Snap Preact ', mode: this.mode }));
						let trackerGlobals = this.config.tracker?.globals || this.config.client.globals;
						this.context.currency?.code && (trackerGlobals = cjs_default()(trackerGlobals || {}, { currency: this.context.currency }));
						const trackerConfig = cjs_default()(this.config.tracker?.config || {}, { framework: 'preact', mode: this.mode });
						this.tracker = services?.tracker || new Tracker.J(trackerGlobals, trackerConfig);
						const sessionAttribution = window.sessionStorage?.getItem('ssAttribution');
						if (urlParams?.params?.query?.ss_attribution) {
							const attribution = urlParams.params.query.ss_attribution.split(':'),
								[type, id] = attribution;
							type && id && this.tracker.updateContext('attribution', { type, id }),
								window.sessionStorage?.setItem('ssAttribution', urlParams.params.query.ss_attribution);
						} else if (sessionAttribution) {
							const [type, id] = sessionAttribution.split(':');
							type && id && this.tracker.updateContext('attribution', { type, id });
						}
						if (
							(this.logger.imageText({
								url: 'https://snapui.searchspring.io/favicon.svg',
								text: `[${version.r}]`,
								style: `color: ${this.logger.colors.indigo}; font-weight: bold;`,
							}),
							branchOverride && !document.querySelector('script[ssBranch]'))
						) {
							this.logger.warn(`:: loading branch override ~ '${branchOverride}' ...`),
								featureFlags.o.cookies
									? cookies.U.set('ssBranch', branchOverride, 'Lax', 36e5, cookieDomain)
									: this.logger.warn('Cookies are not supported/enabled by this browser, branch overrides will not persist!');
							let path = `https://snapui.searchspring.io/${this.config.client?.globals?.siteId}/`;
							const script = document.querySelector('script[src*="//snapui.searchspring.io"]');
							if (script) {
								const scriptRoot = script.getAttribute('src').match(/\/\/snapui.searchspring.io\/[a-zA-Z0-9]{6}\//);
								scriptRoot && (path = scriptRoot.toString());
							}
							const branchScript = document.createElement('script'),
								src = `${path}${branchOverride}/bundle.js`;
							throw (
								((branchScript.src = src),
								branchScript.setAttribute('ssBranch', branchOverride),
								new DomTargeter.b(
									[
										{
											selector: 'body',
											inject: {
												action: 'append',
												element: () => {
													const branchContainer = document.createElement('div');
													return (branchContainer.id = 'searchspring-branch-override'), branchContainer;
												},
											},
										},
									],
									async (target, elem) => {
										const props = {};
										try {
											const getBundleDetails = (
												await __webpack_require__
													.e(3176)
													.then(__webpack_require__.bind(__webpack_require__, './src/getBundleDetails/getBundleDetails.ts'))
											).getBundleDetails;
											props.details = await getBundleDetails(src);
										} catch (err) {
											props.error = err;
										}
										const BranchOverride = (
											await Promise.all([
												__webpack_require__.e(1874),
												__webpack_require__.e(731),
												__webpack_require__.e(4661),
												__webpack_require__.e(8261),
												__webpack_require__.e(4522),
												__webpack_require__.e(486),
												__webpack_require__.e(6316),
												__webpack_require__.e(4208),
												__webpack_require__.e(8896),
												__webpack_require__.e(3524),
												__webpack_require__.e(6906),
												__webpack_require__.e(8372),
												__webpack_require__.e(8012),
												__webpack_require__.e(957),
											]).then(__webpack_require__.bind(__webpack_require__, './components/src/index.ts'))
										).BranchOverride;
										(0, preact_module.XX)(
											(0, emotion_react_jsx_runtime_browser_esm.Y)(BranchOverride, {
												...props,
												branch: branchOverride,
												onRemoveClick: () => {
													cookies.U.unset('ssBranch', cookieDomain);
													const urlState = url(window.location.href);
													delete urlState?.params.query.branch;
													const newUrl = urlState?.url();
													newUrl && newUrl != window.location.href ? (window.location.href = newUrl) : window.location.reload();
												},
											}),
											elem
										);
										try {
											delete window.searchspring;
										} catch (e) {
											window.searchspring = void 0;
										}
										document.head.appendChild(branchScript);
									}
								),
								document.querySelectorAll('.ss-snap-bundle-styles').forEach((el) => el.remove()),
								'branch override')
							);
						}
					} catch (e) {
						if ('branch override' == e) throw `${this.logger.emoji.bang} Snap instantiation halted - using branch override.`;
						this.logger.error(e);
					}
					if (
						((window.searchspring = window.searchspring || {}),
						(window.searchspring.context = this.context),
						this.client && (window.searchspring.client = this.client),
						services?.templatesStore && (window.searchspring.templates = this.templates),
						(this.eventManager = (() => {
							const eventManager = new EventManager.E();
							return (
								eventManager.on('controller/selectVariantOptions', async (data, next) => {
									const { options, controllerIds } = data;
									matchControllers(controllerIds).map((controller) => {
										controller.store?.results &&
											controller.store?.results.forEach((result) => {
												'product' == result.type && result.variants?.makeSelections(options);
											});
									}),
										await next();
								}),
								eventManager.on('controller/recommendation/update', async (data, next) => {
									const { controllerIds } = data || {};
									matchControllers(controllerIds)
										.filter((controller) => Boolean('recommendation' === controller.type && controller.config?.realtime))
										.map((controller) => {
											controller.search();
										}),
										await next();
								}),
								eventManager
							);
						})()),
						this.eventManager &&
							((window.searchspring.on = (event, ...func) => {
								this.eventManager.on(event, ...func);
							}),
							(window.searchspring.fire = (event, ...func) => {
								this.eventManager.fire(event, ...func);
							})),
						this.context?.shopper?.id && this.tracker.track.shopper.login({ id: this.context.shopper.id }),
						this.context?.shopper?.cart)
					) {
						const cart = this.context.shopper.cart;
						if (Array.isArray(cart)) {
							const cartItems = cart.filter((item) => item?.sku || item?.childSku).map((item) => (item?.sku || item?.childSku || '').trim());
							this.tracker.cookies.cart.set(cartItems);
						}
					}
					if (
						(Object.keys(this.config?.controllers || {}).forEach((type) => {
							switch (type) {
								case 'search':
									this.config.controllers[type].forEach((controller, index) => {
										try {
											if (void 0 !== this._controllerPromises[controller.config.id])
												return void this.logger.error(`Controller with id '${controller.config.id}' is already defined`);
											const cntrlr = (0, createSearchController.default)(
												{
													mode: this.mode,
													url: cjs_default()(this.config.url || {}, controller.url || {}),
													controller: controller.config,
													context: cjs_default()(this.context || {}, controller.context || {}),
												},
												{
													client: controller.services?.client || this.client,
													store: controller.services?.store,
													urlManager: controller.services?.urlManager,
													eventManager: controller.services?.eventManager,
													profiler: controller.services?.profiler,
													logger: controller.services?.logger,
													tracker: controller.services?.tracker || this.tracker,
												}
											);
											(window.searchspring.controller = window.searchspring.controller || {}),
												(window.searchspring.controller[cntrlr.config.id] = this.controllers[cntrlr.config.id] = cntrlr),
												(this._controllerPromises[cntrlr.config.id] = new Promise((resolve) => resolve(cntrlr)));
											let searchPromise = null;
											const runSearch = async () => (
													searchPromise ||
														(controller.url?.initial &&
															((intitialStateConfig, urlManager) => {
																const { parameters } = intitialStateConfig,
																	useDefaultIgnoreParameters = intitialStateConfig.settings?.useDefaultIgnoreParameters ?? !0;
																let globalIgnoreParameters = intitialStateConfig?.settings?.ignoreParameters || [];
																globalIgnoreParameters = useDefaultIgnoreParameters
																	? globalIgnoreParameters.concat(DEFAULT_IGNORE_PARAMETERS)
																	: globalIgnoreParameters;
																const initialUrlState = urlManager;
																let newUrlState = urlManager.merge({});
																return (
																	Object.keys(parameters).forEach((param) => {
																		const action = parameters[param].action || 'merge',
																			{ state } = parameters[param],
																			ignoreParameters = parameters[param].ignoreParameters || [],
																			specificIgnoreParameters =
																				parameters[param].useGlobalIgnoreParameters ?? 1
																					? globalIgnoreParameters.concat(ignoreParameters)
																					: ignoreParameters,
																			applyState = Boolean(
																				0 == Object.keys(initialUrlState.state).filter((key) => !specificIgnoreParameters.includes(key)).length
																			);
																		state && applyState && VALID_ACTIONS.includes(action) && (newUrlState = newUrlState[action](param, state));
																	}),
																	newUrlState
																);
															})(controller.url.initial, cntrlr.urlManager).go({ history: 'replace' }),
														(searchPromise = this.controllers[controller.config.id].search())),
													searchPromise
												),
												targetFunction = async (target, elem, originalElem) => {
													const targetFunctionPromises = [];
													target.renderAfterSearch
														? targetFunctionPromises.push(runSearch())
														: (targetFunctionPromises.push(Promise.resolve()), runSearch());
													const onTarget = target.onTarget;
													onTarget && (await onTarget(target, elem, originalElem));
													try {
														targetFunctionPromises.push(target.component());
														const [_, Component] = await Promise.all(targetFunctionPromises);
														setTimeout(() => {
															(0, preact_module.XX)(
																(0, emotion_react_jsx_runtime_browser_esm.Y)(Component, {
																	controller: this.controllers[controller.config.id],
																	snap: this,
																	...target.props,
																}),
																elem
															);
														});
													} catch (err) {
														this.logger.error(err), this.logger.error(COMPONENT_ERROR, target);
													}
												};
											controller?.targeters?.forEach((target, target_index) => {
												if (!target.selector) throw new Error(`Targets at index ${target_index} missing selector value (string).`);
												if (!target.component) throw new Error(`Targets at index ${target_index} missing component value (Component).`);
												target.prefetch && runSearch(),
													cntrlr.createTargeter({ controller: cntrlr, ...target }, async (target, elem, originalElem) => {
														if (target && target.skeleton && elem) {
															const Skeleton = await target.skeleton();
															setTimeout(() => {
																(0, preact_module.XX)((0, emotion_react_jsx_runtime_browser_esm.Y)(Skeleton, {}), elem);
															});
														}
														await targetFunction(target, elem, originalElem);
													});
											});
										} catch (err) {
											this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
										}
									});
									break;
								case 'autocomplete':
									this.config.controllers[type].forEach((controller, index) => {
										void 0 === this._controllerPromises[controller.config.id]
											? (this._controllerPromises[controller.config.id] = new Promise(async (resolve) => {
													try {
														let bound = !1;
														const runBind = () => {
																bound ||
																	((bound = !0),
																	setTimeout(() => {
																		this.controllers[controller.config.id].bind();
																	}));
															},
															targetFunction = async (target, elem, originalElem) => {
																const onTarget = target.onTarget;
																onTarget && (await onTarget(target, elem, originalElem));
																try {
																	const importPromises = [];
																	importPromises.push(target.component());
																	const Component = (await Promise.all(importPromises))[0];
																	setTimeout(() => {
																		(0, preact_module.XX)(
																			(0, emotion_react_jsx_runtime_browser_esm.Y)(Component, {
																				controller: this.controllers[controller.config.id],
																				input: originalElem,
																				snap: this,
																				...target.props,
																			}),
																			elem
																		);
																	});
																} catch (err) {
																	this.logger.error(err), this.logger.error(COMPONENT_ERROR, target);
																}
															};
														(controller?.targeters && 0 !== controller?.targeters.length) ||
															(await this._createController(
																esm_types.k.autocomplete,
																controller.config,
																controller.services,
																controller.url,
																controller.context,
																(cntrlr) => {
																	cntrlr && resolve(cntrlr);
																}
															),
															runBind()),
															controller?.targeters?.forEach((target, target_index) => {
																if (!target.selector) throw new Error(`Targets at index ${target_index} missing selector value (string).`);
																if (!target.component) throw new Error(`Targets at index ${target_index} missing component value (Component).`);
																const targeter = new DomTargeter.b(
																	[
																		{
																			inject: {
																				action: 'after',
																				element: () => {
																					const acContainer = document.createElement('div');
																					return (
																						(acContainer.className = 'ss__autocomplete--target'),
																						acContainer.addEventListener('click', (e) => {
																							e.stopPropagation();
																						}),
																						acContainer
																					);
																				},
																			},
																			...target,
																		},
																	],
																	async (target, elem, originalElem) => {
																		const cntrlr = await this._createController(
																			esm_types.k.autocomplete,
																			controller.config,
																			controller.services,
																			controller.url,
																			controller.context,
																			(cntrlr) => {
																				cntrlr && resolve(cntrlr);
																			}
																		);
																		runBind(), targetFunction({ controller: cntrlr, ...target }, elem, originalElem), cntrlr.addTargeter(targeter);
																	}
																);
															});
													} catch (err) {
														this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
													}
											  }))
											: this.logger.error(`Controller with id '${controller.config.id}' is already defined`);
									});
									break;
								case 'finder':
									this.config.controllers[type].forEach((controller, index) => {
										void 0 === this._controllerPromises[controller.config.id]
											? (this._controllerPromises[controller.config.id] = new Promise((resolve) => {
													try {
														let searched = !1;
														const runSearch = () => {
																searched || (this.controllers[controller.config.id].search(), (searched = !0));
															},
															targetFunction = async (target, elem, originalElem) => {
																const onTarget = target.onTarget;
																onTarget && (await onTarget(target, elem, originalElem));
																try {
																	const Component = await target.component();
																	setTimeout(() => {
																		(0, preact_module.XX)(
																			(0, emotion_react_jsx_runtime_browser_esm.Y)(Component, {
																				controller: this.controllers[controller.config.id],
																				snap: this,
																				...target.props,
																			}),
																			elem
																		);
																	});
																} catch (err) {
																	this.logger.error(err), this.logger.error(COMPONENT_ERROR, target);
																}
															};
														(controller?.targeters && 0 !== controller?.targeters.length) ||
															this._createController(
																esm_types.k.finder,
																controller.config,
																controller.services,
																controller.url,
																controller.context,
																(cntrlr) => {
																	cntrlr && resolve(cntrlr);
																}
															),
															controller?.targeters?.forEach((target, target_index) => {
																if (!target.selector) throw new Error(`Targets at index ${target_index} missing selector value (string).`);
																if (!target.component) throw new Error(`Targets at index ${target_index} missing component value (Component).`);
																const targeter = new DomTargeter.b([{ ...target }], async (target, elem, originalElem) => {
																	const cntrlr = await this._createController(
																		esm_types.k.finder,
																		controller.config,
																		controller.services,
																		controller.url,
																		controller.context,
																		(cntrlr) => {
																			cntrlr && resolve(cntrlr);
																		}
																	);
																	runSearch(), targetFunction({ controller: cntrlr, ...target }, elem, originalElem), cntrlr.addTargeter(targeter);
																});
															});
													} catch (err) {
														this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
													}
											  }))
											: this.logger.error(`Controller with id '${controller.config.id}' is already defined`);
									});
									break;
								case 'recommendation':
									this.config.controllers[type].forEach((controller, index) => {
										void 0 === this._controllerPromises[controller.config.id]
											? (this._controllerPromises[controller.config.id] = new Promise((resolve) => {
													try {
														let searched = !1;
														const runSearch = () => {
																searched || (this.controllers[controller.config.id].search(), (searched = !0));
															},
															targetFunction = async (target, elem, originalElem) => {
																const onTarget = target.onTarget;
																onTarget && (await onTarget(target, elem, originalElem));
																try {
																	const Component = await target.component();
																	setTimeout(() => {
																		(0, preact_module.XX)(
																			(0, emotion_react_jsx_runtime_browser_esm.Y)(Component, {
																				controller: this.controllers[controller.config.id],
																				snap: this,
																				...target.props,
																			}),
																			elem
																		);
																	});
																} catch (err) {
																	this.logger.error(err), this.logger.error(COMPONENT_ERROR, target);
																}
															};
														(controller?.targeters && 0 !== controller?.targeters.length) ||
															this._createController(
																esm_types.k.recommendation,
																controller.config,
																controller.services,
																controller.url,
																controller.context,
																(cntrlr) => {
																	cntrlr && resolve(cntrlr);
																}
															),
															controller?.targeters?.forEach((target, target_index) => {
																if (!target.selector) throw new Error(`Targets at index ${target_index} missing selector value (string).`);
																if (!target.component) throw new Error(`Targets at index ${target_index} missing component value (Component).`);
																const targeter = new DomTargeter.b([{ ...target }], async (target, elem, originalElem) => {
																	const cntrlr = await this._createController(
																		esm_types.k.recommendation,
																		controller.config,
																		controller.services,
																		controller.url,
																		controller.context,
																		(cntrlr) => {
																			cntrlr && resolve(cntrlr);
																		}
																	);
																	runSearch(), targetFunction({ controller: cntrlr, ...target }, elem, originalElem), cntrlr.addTargeter(targeter);
																});
															});
													} catch (err) {
														this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
													}
											  }))
											: this.logger.error(`Controller with id '${controller.config.id}' is already defined`);
									});
							}
						}),
						this.config?.instantiators?.recommendation)
					)
						try {
							this._instantiatorPromises.recommendation = __webpack_require__
								.e(1164)
								.then(__webpack_require__.bind(__webpack_require__, './src/Instantiators/RecommendationInstantiator.tsx'))
								.then(
									({ RecommendationInstantiator }) => (
										(this.config.instantiators.recommendation.mode = this.config.instantiators.recommendation.mode || this.mode),
										new RecommendationInstantiator(
											this.config.instantiators.recommendation,
											{ client: this.client, tracker: this.tracker, logger: this.logger, snap: this },
											this.context
										)
									)
								);
						} catch (err) {
							this.logger.error('Failed to create Recommendations Instantiator.', err);
						}
				}
			}
			var TemplateSelect = __webpack_require__('./components/src/components/Atoms/TemplateSelect/TemplateSelect.tsx'),
				StorageStore = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js');
			class SelectedLayout {
				select(layout) {
					(this.selected = layout), this.storage.set(`themes.${this.type}.${this.name}.layout`, this.selected);
				}
				constructor(storageStore, name, type) {
					(this.storage = storageStore),
						(this.name = name),
						(this.type = type),
						(this.selected = this.storage.get(`themes.${this.type}.${this.name}.layout`)),
						(0, mobx_esm.Gn)(this, { selected: mobx_esm.sH });
				}
			}
			class ThemeStore {
				constructor(params) {
					const { config, dependencies, settings } = params;
					this.dependencies = dependencies;
					const { name, style, type, base, overrides, variables, currency, language, languageOverrides, innerWidth } = config;
					if (
						((this.name = name),
						(this.type = type),
						(this.base = base),
						(this.layout = new SelectedLayout(this.dependencies.storage, this.name, this.type)),
						(this.overrides = overrides || {}),
						(this.variables = variables || {}),
						(this.currency = currency),
						(this.language = language),
						(this.languageOverrides = languageOverrides),
						(this.stored = (settings.editMode && this.dependencies.storage.get(`themes.${this.type}.${this.name}.variables`)) || {}),
						(this.innerWidth = innerWidth),
						(0, mobx_esm.Gn)(this, {
							name: mobx_esm.sH,
							variables: mobx_esm.sH,
							currency: mobx_esm.sH,
							language: mobx_esm.sH,
							stored: mobx_esm.sH,
							innerWidth: mobx_esm.sH,
						}),
						style)
					) {
						const GlobalStyle = (0, mobxreact_esm.PA)((props) => {
								const { self } = props,
									theme = self.theme,
									styles = (0, emotion_react_browser_esm.AH)({
										[`.ss__theme__${theme.name}`]: style({ name: theme.name, variables: theme.variables }),
									});
								return (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_browser_esm.mL, { styles }),
								});
							}),
							styleElem = document.createElement('style');
						(styleElem.innerHTML = `\x3c!-- searchspring style injection point for "${this.name}" theme --\x3e`),
							document.head.appendChild(styleElem),
							(0, preact_module.XX)(
								(0, emotion_react_jsx_runtime_browser_esm.Y)(GlobalStyle, { theme: this.theme, self: this, themeName: this.name }),
								styleElem
							);
					}
				}
				get theme() {
					const breakpoints = this.variables.breakpoints || this.base.variables?.breakpoints,
						baseBreakpoint = getOverridesAtWidth(this.innerWidth, breakpoints, this.base),
						overrideBreakpoint = getOverridesAtWidth(this.innerWidth, breakpoints, this.overrides),
						base = { ...this.base },
						overrides = { ...this.overrides };
					this.overrides.layoutOptions?.length && (base.layoutOptions = []),
						overrideBreakpoint.layoutOptions?.length && ((base.layoutOptions = []), (overrides.layoutOptions = []));
					let theme = mergeThemeLayers(base, baseBreakpoint, this.currency, this.language, this.languageOverrides, overrides, overrideBreakpoint, {
						variables: (0, mobx_esm.HO)(this.variables),
					});
					const layoutOptions = theme.layoutOptions,
						selectedOption =
							layoutOptions?.find((option) => option?.value === this.layout.selected?.value) ||
							layoutOptions?.find((option) => option?.default) ||
							(Array.isArray(layoutOptions) ? layoutOptions[0] : void 0);
					return (
						selectedOption?.overrides &&
							((theme = mergeThemeLayers(theme, selectedOption.overrides)),
							(!this?.layout?.selected ||
								(this?.layout?.selected &&
									selectedOption.value !== this.layout.selected.value &&
									selectedOption.label !== this.layout.selected.label)) &&
								this.layout.select(selectedOption)),
						this.stored && (theme = mergeThemeLayers(theme, this.stored)),
						(theme.name = this.name),
						theme
					);
				}
				setInnerWidth(innerWidth) {
					this.innerWidth = innerWidth;
				}
				setCurrency(currency) {
					this.currency = currency;
				}
				setLanguage(language) {
					this.language = language;
				}
				setOverride(obj) {
					const { path, rootEditingKey, value } = obj,
						overrides = { [rootEditingKey]: path.reverse().reduce((res, key) => (0 === path.indexOf(key) ? { [key]: value } : { [key]: res }), {}) };
					(this.stored = mergeThemeLayers(this.stored, overrides)),
						this.dependencies.storage.set(`themes.${this.type}.${this.name}.variables`, this.stored);
				}
			}
			function mergeThemeLayers(...layers) {
				return cjs_default().all(layers, { arrayMerge });
			}
			function getOverridesAtWidth(width, breakpoints, theme) {
				let overrides = {};
				if (width && Number.isInteger(width) && theme.responsive) {
					const breakpoint = breakpoints.find((breakpoint) => width <= breakpoint);
					if (breakpoint) {
						const breakpointIndex = breakpoints.indexOf(breakpoint);
						overrides = (theme.responsive && theme.responsive[breakpointIndex]) || {};
					} else width > breakpoints[breakpoints.length - 1] && (overrides = {});
				}
				return overrides;
			}
			const arrayMerge = (target, source, options) => {
				const destination = target.slice(0, source.length);
				return (
					source.forEach((item, index) => {
						void 0 === destination[index]
							? (destination[index] = options.cloneUnlessOtherwiseSpecified(item, options))
							: (0, is_plain_object.Q)(item)
							? (destination[index] = cjs_default()(target[index], item, options))
							: (destination[index] = item);
					}),
					destination
				);
			};
			var TargetStore = __webpack_require__('./src/Templates/Stores/TargetStore.ts');
			const pluginBackgroundFiltersShopify = (cntrlr) => {
					if ('search' != cntrlr.type) return;
					const backgroundFilters = [];
					if (cntrlr.context.collection?.handle) {
						const collectionName = cntrlr.context.collection.name?.replace(/\&\#39\;/, "'");
						if (
							('vendors' == cntrlr.context.collection.handle
								? backgroundFilters.push({ type: 'value', field: 'vendor', value: collectionName, background: !0 })
								: 'types' == cntrlr.context.collection.handle
								? backgroundFilters.push({ type: 'value', field: 'product_type', value: collectionName, background: !0 })
								: backgroundFilters.push({ type: 'value', field: 'collection_handle', value: cntrlr.context.collection.handle, background: !0 }),
							cntrlr.context.tags)
						) {
							cntrlr.context.tags
								.toLowerCase()
								.replace(/\&quot\;/g, '"')
								.replace(/-/g, '')
								.replace(/ +/g, '')
								.split('|')
								.forEach((tag) => {
									backgroundFilters.push({ type: 'value', field: 'ss_tags', value: tag, background: !0 });
								});
						}
					}
					backgroundFilters.length &&
						cntrlr.on('init', async ({ controller }, next) => {
							(controller.config = controller.config || {}),
								(controller.config.globals = controller.config.globals || {}),
								(controller.config.globals.filters = controller.config.globals.filters || []),
								(controller.config.globals.filters = controller.config.globals.filters.concat(backgroundFilters)),
								await next();
						});
				},
				pluginMutateResultsShopify = (cntrlr, config) => {
					if (config?.collectionInUrl?.enabled && cntrlr.context.collection?.handle) {
						if (!window.Shopify) return void cntrlr.log.warn('shopify/plugins/mutateResults: window.Shopify not found');
						const collectionName = cntrlr.context.collection.name.replace(/\&\#39\;/, "'"),
							page = { id: cntrlr.context.collection.handle, title: collectionName, type: 'collection' },
							updateUrlFn = (handle) => {
								if (handle) {
									return `${window?.Shopify?.routes?.root || '/'}${'collection' == page.type ? `collections/${page.id}/` : ''}products/${handle}`;
								}
							};
						'search' == cntrlr.type &&
							cntrlr.on('afterStore', async ({ controller }, next) => {
								const { results } = controller.store;
								'collection' == page.type &&
									results &&
									0 !== results.length &&
									results.forEach((result) => {
										if ('banner' != result.type) {
											const updatedUrl = updateUrlFn(result.attributes.handle);
											updatedUrl && updatedUrl !== result.mappings.core?.url && (result.mappings.core.url = updatedUrl);
										}
									}),
									await next();
							});
					}
				},
				pluginBackgroundFiltersBigcommerce = (cntrlr) => {
					if ('search' != cntrlr.type) return;
					const backgroundFilters = [];
					if (cntrlr.context?.category?.path) {
						const categoryPath = replaceCharacters(cntrlr.context.category.path);
						backgroundFilters.push({ type: 'value', field: 'categories_hierarchy', value: categoryPath, background: !0 });
					} else if (cntrlr.context?.brand) {
						const brandName = replaceCharacters(cntrlr.context.brand);
						backgroundFilters.push({ type: 'value', field: 'brand', value: brandName, background: !0 });
					}
					backgroundFilters.length &&
						cntrlr.on('init', async ({ controller }, next) => {
							(controller.config = controller.config || {}),
								(controller.config.globals = controller.config.globals || {}),
								(controller.config.globals.filters = controller.config.globals.filters || []),
								(controller.config.globals.filters = controller.config.globals.filters.concat(backgroundFilters)),
								await next();
						});
				};
			function replaceCharacters(value) {
				return value
					? value
							.replace(/\&amp\;/g, '&')
							.replace(/\&lt\;/g, '<')
							.replace(/\&gt\;/g, '>')
							.replace(/\&quot\;/g, '"')
							.replace(/\&#039\;/g, "'")
							.replace(/\&#x27\;/g, "'")
							.trim()
					: '';
			}
			const pluginBackgroundFiltersMagento2 = (cntrlr) => {
					if ('search' != cntrlr.type) return;
					const backgroundFilters = [];
					cntrlr.context?.category?.path
						? (backgroundFilters.push({
								type: 'value',
								field: 'category_hierarchy',
								value: cntrlr.context.category.path.replace(/\&quot\;/g, '"'),
								background: !0,
						  }),
						  backgroundFilters.push({ type: 'value', field: 'visibility', value: 'Catalog', background: !0 }))
						: backgroundFilters.push({ type: 'value', field: 'visibility', value: 'Search', background: !0 }),
						cntrlr.on('init', async ({ controller }, next) => {
							(controller.config = controller.config || {}),
								(controller.config.globals = controller.config.globals || {}),
								(controller.config.globals.filters = controller.config.globals.filters || []),
								(controller.config.globals.filters = controller.config.globals.filters.concat(backgroundFilters)),
								await next();
						});
				},
				pluginBackgroundFilters = (cntrlr, config) => {
					const backgroundFilters = [];
					let contextBackgroundFilters = [];
					Array.isArray(cntrlr.context?.backgroundFilters)
						? (contextBackgroundFilters = contextBackgroundFilters.concat(cntrlr.context.backgroundFilters))
						: cntrlr.context?.backgroundFilters && cntrlr.log.warn('context supplied backgroundFilters must be an array!');
					const configBackgroundFilters = [...(config?.filters?.length ? config.filters : [])];
					contextBackgroundFilters.concat(configBackgroundFilters).forEach((filter) => {
						if (
							filter.field &&
							filter.value &&
							filter.type &&
							(('value' === filter.type && ('string' == typeof filter.value || 'number' == typeof filter.value)) ||
								('range' === filter.type && 'object' == typeof filter.value))
						) {
							if (Array.isArray(filter.controllerTypes) && !filter.controllerTypes.includes(cntrlr.type)) return;
							if (
								Array.isArray(filter.controllerIds) &&
								!filter.controllerIds.includes(cntrlr.id) &&
								!filter.controllerIds.some((id) => id instanceof RegExp && cntrlr.id.match(id))
							)
								return;
							backgroundFilters.push({ type: filter.type, field: filter.field, value: filter.value, background: !0 });
						} else cntrlr.log.error('Invalid filter in backgroundFilters', filter);
					}),
						cntrlr.on('init', async ({ controller }, next) => {
							backgroundFilters.length &&
								((controller.config = controller.config || {}),
								(controller.config.globals = controller.config.globals || {}),
								(controller.config.globals.filters = controller.config.globals.filters || []),
								(controller.config.globals.filters = controller.config.globals.filters.concat(backgroundFilters))),
								await next();
						});
				},
				pluginScrollToTop = (cntrlr, config) => {
					config?.enabled &&
						'search' === cntrlr.type &&
						cntrlr.on('afterStore', async (_, next) => {
							const options = Object.assign({ top: 0, left: 0, behavior: 'smooth' }, config.options || {});
							if (config.selector) {
								const element = document.querySelector(config.selector);
								if (element) {
									const { top } = element.getBoundingClientRect();
									options.top += top;
								}
							}
							setTimeout(() => {
								window.scroll(options);
							}),
								await next();
						});
				},
				pluginLogger = (cntrlr) => {
					cntrlr.on('afterStore', async ({ controller }, next) => {
						controller.log.debug('store', controller.store.toJSON()), await next();
					});
				},
				ALLOWED_CUSTOM_COMPONENT_TYPES = ['result', 'badge'];
			class LibraryStore {
				constructor(params) {
					(this.themes = {}),
						(this.components = { search: {}, autocomplete: {}, recommendation: { bundle: {}, default: {}, email: {} }, badge: {}, result: {} }),
						(this.locales = { currencies: {}, languages: {} }),
						(this.import = {
							theme: {
								base: async () =>
									this.themes.base ||
									(this.themes.base = (
										await __webpack_require__
											.e(1062)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/themes/base.ts'))
									).base),
								bocachica: async () =>
									this.themes.bocachica ||
									(this.themes.bocachica = (
										await __webpack_require__
											.e(3572)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/themes/bocachica.ts'))
									).bocachica),
							},
							plugins: {
								shopify: { backgroundFilters: pluginBackgroundFiltersShopify, mutateResults: pluginMutateResultsShopify },
								bigcommerce: { backgroundFilters: pluginBackgroundFiltersBigcommerce },
								magento2: { backgroundFilters: pluginBackgroundFiltersMagento2 },
								common: { backgroundFilters: pluginBackgroundFilters, scrollToTop: pluginScrollToTop, logger: pluginLogger },
							},
							component: {
								autocomplete: {
									Autocomplete: async () =>
										this.components.autocomplete.Autocomplete ||
										(this.components.autocomplete.Autocomplete = (
											await Promise.all([
												__webpack_require__.e(8261),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(8372),
												__webpack_require__.e(1740),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/Autocomplete.ts'))
										).Autocomplete),
								},
								search: {
									Search: async () =>
										this.components.search.Search ||
										(this.components.search.Search = (
											await Promise.all([
												__webpack_require__.e(8261),
												__webpack_require__.e(4522),
												__webpack_require__.e(486),
												__webpack_require__.e(6316),
												__webpack_require__.e(8896),
												__webpack_require__.e(3524),
												__webpack_require__.e(1080),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/Search.ts'))
										).Search),
									SearchHorizontal: async () =>
										this.components.search.SearchHorizontal ||
										(this.components.search.SearchHorizontal = (
											await Promise.all([
												__webpack_require__.e(8261),
												__webpack_require__.e(4522),
												__webpack_require__.e(486),
												__webpack_require__.e(6316),
												__webpack_require__.e(8896),
												__webpack_require__.e(3524),
												__webpack_require__.e(6906),
												__webpack_require__.e(8684),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/SearchHorizontal.ts'))
										).SearchHorizontal),
								},
								recommendation: {
									bundle: {
										RecommendationBundle: async () =>
											this.components.recommendation.bundle.RecommendationBundle ||
											(this.components.recommendation.bundle.RecommendationBundle = (
												await Promise.all([
													__webpack_require__.e(731),
													__webpack_require__.e(8261),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(859),
												]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundle.ts'))
											).RecommendationBundle),
										RecommendationBundleEasyAdd: async () =>
											this.components.recommendation.bundle.RecommendationBundleEasyAdd ||
											(this.components.recommendation.bundle.RecommendationBundleEasyAdd = (
												await Promise.all([
													__webpack_require__.e(731),
													__webpack_require__.e(8261),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(2414),
												]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts')
												)
											).RecommendationBundleEasyAdd),
										RecommendationBundleList: async () =>
											this.components.recommendation.bundle.RecommendationBundleList ||
											(this.components.recommendation.bundle.RecommendationBundleList = (
												await Promise.all([
													__webpack_require__.e(731),
													__webpack_require__.e(8261),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(3061),
												]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundleList.ts')
												)
											).RecommendationBundleList),
										RecommendationBundleVertical: async () =>
											this.components.recommendation.bundle.RecommendationBundleVertical ||
											(this.components.recommendation.bundle.RecommendationBundleVertical = (
												await Promise.all([
													__webpack_require__.e(731),
													__webpack_require__.e(8261),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(7065),
												]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundleVertical.ts')
												)
											).RecommendationBundleVertical),
									},
									default: {
										Recommendation: async () =>
											this.components.recommendation.default.Recommendation ||
											(this.components.recommendation.default.Recommendation = (
												await Promise.all([
													__webpack_require__.e(731),
													__webpack_require__.e(8261),
													__webpack_require__.e(4522),
													__webpack_require__.e(3870),
												]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/Recommendation.ts'))
											).Recommendation),
										RecommendationGrid: async () =>
											this.components.recommendation.default.RecommendationGrid ||
											(this.components.recommendation.default.RecommendationGrid = (
												await Promise.all([__webpack_require__.e(4522), __webpack_require__.e(8210)]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationGrid.ts')
												)
											).RecommendationGrid),
									},
									email: {
										RecommendationEmail: async () =>
											this.components.recommendation.email.RecommendationEmail ||
											(this.components.recommendation.email.RecommendationEmail = (
												await Promise.all([__webpack_require__.e(4522), __webpack_require__.e(5717)]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationEmail.ts')
												)
											).RecommendationEmail),
									},
								},
								badge: {},
								result: {
									Result: async () =>
										this.components.result.Result ||
										(this.components.result.Result = (
											await Promise.all([__webpack_require__.e(4522), __webpack_require__.e(1865)]).then(
												__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/Result.ts')
											)
										).Result),
								},
							},
							language: {
								en: async () =>
									this.locales.languages.en ||
									(this.locales.languages.en = transformTranslationsToTheme(
										(
											await __webpack_require__
												.e(7565)
												.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/languages/en.ts'))
										).en
									)),
								fr: async () =>
									this.locales.languages.fr ||
									(this.locales.languages.fr = transformTranslationsToTheme(
										(
											await __webpack_require__
												.e(1622)
												.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/languages/fr.ts'))
										).fr
									)),
							},
							currency: {
								usd: async () =>
									this.locales.currencies.usd ||
									(this.locales.currencies.usd = (
										await __webpack_require__
											.e(4950)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/currencies/usd.ts'))
									).usd),
								eur: async () =>
									this.locales.currencies.eur ||
									(this.locales.currencies.eur = (
										await __webpack_require__
											.e(2470)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/currencies/eur.ts'))
									).eur),
								aud: async () =>
									this.locales.currencies.aud ||
									(this.locales.currencies.aud = (
										await __webpack_require__
											.e(7948)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/currencies/aud.ts'))
									).aud),
							},
						});
					const { components } = params || {};
					components &&
						Object.keys(components).forEach((type) => {
							const componentsOfType = components[type];
							componentsOfType &&
								Object.keys(componentsOfType).forEach((component) => {
									this.addComponentImport(type, component, componentsOfType[component]);
								});
						});
				}
				getComponent(type, name) {
					const paths = type.split('/');
					paths.push(name);
					let importPath = this.components;
					for (let i = 0; i < paths.length; i++) {
						if (!importPath[paths[i]]) return;
						importPath = importPath[paths[i]];
					}
					return importPath;
				}
				async addComponentImport(type, name, componentFn) {
					ALLOWED_CUSTOM_COMPONENT_TYPES.includes(type) &&
						this.components[type] &&
						(this.import.component[type][name] = async () => this.components[type][name] || (this.components[type][name] = await componentFn()));
				}
				async preLoad() {
					const loadPromises = [];
					return (
						Object.keys(this.import).forEach((importGroup) => {
							const importList = this.import[importGroup];
							Object.keys(importList).forEach((importName) => {
								if ('component' === importGroup)
									if ('recommendation' === importName) {
										const componentSubType = importList.recommendation;
										Object.keys(componentSubType).forEach((type) => {
											const componentGroup = componentSubType[type];
											Object.keys(componentGroup).forEach((componentName) => {
												loadPromises.push(componentGroup[componentName]());
											});
										});
									} else {
										const componentGroup = importList[importName];
										Object.keys(componentGroup).forEach((componentName) => {
											loadPromises.push(componentGroup[componentName]());
										});
									}
								else if ('language' === importGroup || 'currency' === importGroup) {
									const importer = importList[importName];
									loadPromises.push(importer());
								} else if ('theme' === importGroup) {
									const importer = importList[importName];
									loadPromises.push(importer());
								}
							});
						}),
						Promise.all(loadPromises)
					);
				}
			}
			var debounce = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js');
			class TemplatesStore {
				constructor(params) {
					(this.loading = !1), (this.window = { innerWidth: 0 });
					const { config, settings } = params || {};
					(this.config = config),
						(this.platform = config.config.platform || 'other'),
						(this.storage = new StorageStore.t({ type: StorageStore.e.local, key: 'ss-templates' })),
						(this.dependencies = { storage: this.storage }),
						(this.settings = settings || { editMode: !1 }),
						(this.targets = { search: {}, autocomplete: {}, recommendation: { bundle: {}, default: {}, email: {} } }),
						(this.themes = { local: {}, library: {} }),
						(this.library = new LibraryStore({ components: config.components })),
						(this.language =
							(this.settings.editMode && this.storage.get('language')) ||
							(this.config.config?.language && this.config.config.language in this.library.import.language && this.config.config.language) ||
							'en'),
						(this.currency =
							(this.settings.editMode && this.storage.get('currency')) ||
							(this.config.config?.currency && this.config.config.currency in this.library.import.currency && this.config.config.currency) ||
							'usd');
					const importCurrency = this.library.import.currency[this.currency](),
						importLanguage = this.library.import.language[this.language]();
					if (window) {
						this.setInnerWidth(window.innerWidth);
						const debouncedHandleResize = (0, debounce.s)(() => {
							this.setInnerWidth(window.innerWidth);
						}, 100);
						window.addEventListener('resize', debouncedHandleResize);
					}
					this.loading = !0;
					const themePromises = [];
					Object.keys(config.themes).map((themeKey) => {
						const themeConfig = config.themes[themeKey],
							themeDefer = new Deferred();
						themePromises.push(themeDefer.promise),
							themeConfig.resultComponent &&
								this.library.import.component.result[themeConfig.resultComponent] &&
								this.library.import.component.result[themeConfig.resultComponent]();
						const themeImports = [importCurrency, importLanguage, this.library.import.theme[themeConfig.extends]()];
						Promise.all(themeImports).then(() => {
							const base = this.library.themes[themeConfig.extends],
								overrides = themeConfig.overrides || {},
								variables = themeConfig.variables || {},
								currency = this.library.locales.currencies[this.currency] || {},
								language = this.library.locales.languages[this.language] || {},
								languageOverrides = transformTranslationsToTheme((this.config.translations && this.config.translations[this.language]) || {});
							this.addTheme({
								name: themeKey,
								style: themeConfig.style,
								type: 'local',
								base,
								overrides,
								variables,
								currency,
								language,
								languageOverrides,
								innerWidth: this.window.innerWidth,
							}),
								themeDefer.resolve();
						});
					}),
						Promise.all(themePromises).then(() => {
							this.loading = !1;
						}),
						(0, mobx_esm.Gn)(this, { loading: mobx_esm.sH, targets: mobx_esm.sH, themes: mobx_esm.sH });
				}
				addTarget(type, target) {
					const targetId = target.selector || target.component;
					if (targetId) {
						const path = type.split('/');
						let targetPath = this.targets;
						for (let index = 0; index < path.length; index++) {
							if (!targetPath[path[index]]) return;
							targetPath = targetPath[path[index]];
						}
						return (
							(targetPath[targetId] = new TargetStore.t({ target, dependencies: this.dependencies, settings: this.settings })),
							this.settings.editMode && (this.targets = { ...this.targets }),
							targetId
						);
					}
				}
				getTarget(type, targetId) {
					const path = type.split('/');
					path.push(targetId);
					let targetPath = this.targets;
					for (let index = 0; index < path.length; index++) {
						if (!targetPath[path[index]]) return;
						targetPath = targetPath[path[index]];
					}
					return targetPath;
				}
				addTheme(config) {
					const theme = new ThemeStore({ config, dependencies: this.dependencies, settings: this.settings });
					(this.themes[config.type] || {})[config.name] = theme;
				}
				setInnerWidth(innerWidth) {
					if (this.window.innerWidth !== innerWidth) {
						this.window.innerWidth = innerWidth;
						for (const themeName in this.themes.local) {
							this.themes.local[themeName].setInnerWidth(this.window.innerWidth);
						}
						for (const themeName in this.themes.library) {
							this.themes.library[themeName].setInnerWidth(this.window.innerWidth);
						}
					}
				}
				getThemeStore(themeName) {
					if (themeName) return this.themes.local[themeName] || this.themes.library[themeName];
				}
				async setCurrency(currencyCode) {
					if (currencyCode in this.library.import.currency) {
						await this.library.import.currency[currencyCode]();
						const currency = this.library.locales.currencies[currencyCode];
						if (currency) {
							(this.currency = currencyCode), this.storage.set('currency', this.currency);
							for (const themeName in this.themes.local) {
								this.themes.local[themeName].setCurrency(currency);
							}
							for (const themeName in this.themes.library) {
								this.themes.library[themeName].setCurrency(currency);
							}
						}
					}
				}
				async setLanguage(languageCode) {
					if (languageCode in this.library.import.language) {
						await this.library.import.language[languageCode]();
						const language = this.library.locales.languages[languageCode];
						if (language) {
							(this.language = languageCode), this.storage.set('language', this.language);
							for (const themeName in this.themes.local) {
								this.themes.local[themeName].setLanguage(language);
							}
							for (const themeName in this.themes.library) {
								this.themes.library[themeName].setLanguage(language);
							}
						}
					}
				}
				async preLoad() {
					(this.loading = !0), await this.library.preLoad(), (this.themes.library = {});
					for (const themeName in this.library.themes) {
						const theme = this.library.themes[themeName];
						this.addTheme({
							name: themeName,
							type: 'library',
							base: theme,
							language: this.library.locales.languages[this.language] || {},
							languageOverrides: transformTranslationsToTheme((this.config.translations && this.config.translations[this.language]) || {}),
							currency: this.library.locales.currencies[this.currency] || {},
							innerWidth: this.window.innerWidth,
						});
					}
					this.loading = !1;
				}
			}
			function transformTranslationsToTheme(translations) {
				const components = {};
				return (
					Object.keys(translations).forEach((component) => {
						components[component] = { lang: translations[component] };
					}),
					{ components }
				);
			}
			class Deferred {
				constructor() {
					this.promise = new Promise((resolve, reject) => {
						(this.reject = reject), (this.resolve = resolve);
					});
				}
			}
			const DEFAULT_FEATURES = { integratedSpellCorrection: { enabled: !0 } },
				DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS = { trending: { limit: 5 } };
			const createSearchTargeters = (templateConfig, templatesStore) =>
				(templateConfig.search?.targets || []).map((target) => {
					!target.resultComponent &&
						templateConfig.themes[target.theme || TargetStore.m].resultComponent &&
						(target.resultComponent = templateConfig.themes[target.theme || TargetStore.m].resultComponent);
					const targetId = templatesStore.addTarget('search', target);
					return {
						selector: target.selector,
						hideTarget: !0,
						component: async () => {
							const componentImportPromises = [];
							return (
								componentImportPromises.push(templatesStore.library.import.component.search[target.component]()),
								target.resultComponent &&
									templatesStore.library.import.component.result[target.resultComponent] &&
									componentImportPromises.push(templatesStore.library.import.component.result[target.resultComponent]()),
								await Promise.all(componentImportPromises),
								TemplateSelect.F
							);
						},
						props: { type: 'search', templatesStore, targetId },
					};
				});
			function createAutocompleteTargeters(templateConfig, templatesStore) {
				return (templateConfig.autocomplete?.targets || []).map((target) => {
					!target.resultComponent &&
						templateConfig.themes[target.theme || TargetStore.m].resultComponent &&
						(target.resultComponent = templateConfig.themes[target.theme || TargetStore.m].resultComponent);
					const targetId = templatesStore.addTarget('autocomplete', target);
					return {
						selector: target.selector,
						component: async () => {
							const componentImportPromises = [];
							return (
								componentImportPromises.push(templatesStore.library.import.component.autocomplete[target.component]()),
								target.resultComponent &&
									templatesStore.library.import.component.result[target.resultComponent] &&
									componentImportPromises.push(templatesStore.library.import.component.result[target.resultComponent]()),
								await Promise.all(componentImportPromises),
								TemplateSelect.F
							);
						},
						props: { type: 'autocomplete', templatesStore, targetId, input: templateConfig.autocomplete?.inputSelector },
						hideTarget: !0,
					};
				});
			}
			function createRecommendationComponentMapping(templateConfig, templatesStore) {
				return Object.keys(templateConfig.recommendation || {})
					.filter((key) => ['default', 'email', 'bundle'].includes(key))
					.reduce((mapping, type) => {
						const recsType = type;
						return (
							Object.keys(templateConfig.recommendation[recsType] || {}).forEach((targetName) => {
								const type = `recommendation/${recsType}`,
									target = templateConfig.recommendation[recsType][targetName];
								!target.resultComponent &&
									templateConfig.themes[target.theme || TargetStore.m].resultComponent &&
									(target.resultComponent = templateConfig.themes[target.theme || TargetStore.m].resultComponent);
								const mappedConfig = {
									component: async () => {
										const componentImportPromises = [];
										switch (recsType) {
											case 'default': {
												const importLocation = templatesStore.library.import.component.recommendation.default;
												componentImportPromises.push(importLocation[target.component]());
												break;
											}
											case 'bundle': {
												const importLocation = templatesStore.library.import.component.recommendation.bundle;
												componentImportPromises.push(importLocation[target.component]());
												break;
											}
											case 'email': {
												const importLocation = templatesStore.library.import.component.recommendation.email;
												componentImportPromises.push(importLocation[target.component]());
												break;
											}
										}
										return (
											target.resultComponent &&
												templatesStore.library.import.component.result[target.resultComponent] &&
												componentImportPromises.push(templatesStore.library.import.component.result[target.resultComponent]()),
											await Promise.all(componentImportPromises),
											TemplateSelect.F
										);
									},
									props: { type, templatesStore },
									onTarget: function (domTarget, elem, injectedElem, controller) {
										target.selector = `#${controller.id}`;
										const targetId = templatesStore.addTarget(type, target);
										(this.props = this.props || {}), (this.props.targetId = targetId);
									},
								};
								mapping[targetName] = mappedConfig;
							}),
							mapping
						);
					}, {});
			}
			function createPlugins(templateConfig, templatesStore) {
				const plugins = [];
				switch (
					(plugins.push([
						templatesStore.library.import.plugins.common.backgroundFilters,
						templateConfig.plugins?.common?.backgroundFilters || { filters: [] },
					]),
					plugins.push([templatesStore.library.import.plugins.common.scrollToTop, templateConfig.plugins?.common?.scrollToTop || { enabled: !0 }]),
					plugins.push([templatesStore.library.import.plugins.common.logger]),
					templatesStore.platform)
				) {
					case 'shopify':
						plugins.push([templatesStore.library.import.plugins.shopify.backgroundFilters]),
							plugins.push([
								templatesStore.library.import.plugins.shopify.mutateResults,
								templateConfig.plugins?.shopify?.mutateResults || { collectionInUrl: { enabled: !0 } },
							]);
						break;
					case 'bigCommerce':
						plugins.push([templatesStore.library.import.plugins.bigcommerce.backgroundFilters]);
						break;
					case 'magento2':
						plugins.push([templatesStore.library.import.plugins.magento2.backgroundFilters]);
				}
				return plugins;
			}
			var emotion_element_5486c51c_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				bocachica = __webpack_require__('./components/src/themes/bocachica/bocachica.ts'),
				base = __webpack_require__('./components/src/themes/base/base.ts'),
				injectStylesIntoStyleTag = __webpack_require__('../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
				injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
				styleDomAPI = __webpack_require__('../../node_modules/style-loader/dist/runtime/styleDomAPI.js'),
				styleDomAPI_default = __webpack_require__.n(styleDomAPI),
				insertBySelector = __webpack_require__('../../node_modules/style-loader/dist/runtime/insertBySelector.js'),
				insertBySelector_default = __webpack_require__.n(insertBySelector),
				setAttributesWithoutAttributes = __webpack_require__('../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
				setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
				insertStyleElement = __webpack_require__('../../node_modules/style-loader/dist/runtime/insertStyleElement.js'),
				insertStyleElement_default = __webpack_require__.n(insertStyleElement),
				styleTagTransform = __webpack_require__('../../node_modules/style-loader/dist/runtime/styleTagTransform.js'),
				styleTagTransform_default = __webpack_require__.n(styleTagTransform),
				styles = __webpack_require__(
					'../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./components/.storybook/styles.scss'
				),
				options = {};
			(options.styleTagTransform = styleTagTransform_default()),
				(options.setAttributes = setAttributesWithoutAttributes_default()),
				(options.insert = insertBySelector_default().bind(null, 'head')),
				(options.domAPI = styleDomAPI_default()),
				(options.insertStyleElement = insertStyleElement_default());
			injectStylesIntoStyleTag_default()(styles.A, options);
			styles.A && styles.A.locals && styles.A.locals;
			var snap = __webpack_require__('./components/src/providers/snap.tsx');
			const snapTemplates = new (class SnapTemplates extends Snap {
				constructor(config) {
					const urlParams = url(window.location.href),
						editMode = Boolean(urlParams?.params?.query?.theme || cookies.U.get('ssThemeEdit')),
						templatesStore = new TemplatesStore({ config, settings: { editMode } }),
						snapConfig = (function createSnapConfig(templateConfig, templatesStore) {
							const snapConfig = {
								features: templateConfig.features || DEFAULT_FEATURES,
								client: { globals: { siteId: templateConfig.config?.siteId } },
								instantiators: {},
								controllers: {},
							};
							templateConfig.url && (snapConfig.url = templateConfig.url);
							if (templateConfig.search && snapConfig.controllers) {
								const searchControllerConfig = {
									config: { id: 'search', plugins: createPlugins(templateConfig, templatesStore), settings: templateConfig.search.settings || {} },
									targeters: createSearchTargeters(templateConfig, templatesStore),
								};
								snapConfig.controllers.search = [searchControllerConfig];
							}
							if (templateConfig.autocomplete && snapConfig.controllers) {
								const autocompleteControllerSettings = cjs_default()(
										DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS,
										templateConfig.autocomplete.settings || {}
									),
									autocompleteControllerConfig = {
										config: {
											id: 'autocomplete',
											plugins: createPlugins(templateConfig, templatesStore),
											selector: templateConfig.autocomplete.inputSelector,
											settings: autocompleteControllerSettings,
										},
										targeters: createAutocompleteTargeters(templateConfig, templatesStore),
									};
								snapConfig.controllers.autocomplete = [autocompleteControllerConfig];
							}
							const originalRecsConfig = templateConfig.recommendation || {};
							if (
								((templateConfig.recommendation = cjs_default()(
									{
										settings: { branch: 'production' },
										bundle: {
											Bundle: { component: 'RecommendationBundle' },
											BundleEasyAdd: { component: 'RecommendationBundleEasyAdd' },
											BundleList: { component: 'RecommendationBundleList' },
											BundleVertical: { component: 'RecommendationBundleVertical' },
										},
										default: { Default: { component: 'Recommendation' } },
										email: { Email: { component: 'RecommendationEmail' } },
									},
									originalRecsConfig
								)),
								templateConfig.recommendation && snapConfig.instantiators)
							) {
								const recommendationInstantiatorConfig = {
									components: createRecommendationComponentMapping(templateConfig, templatesStore),
									config: { plugins: createPlugins(templateConfig, templatesStore), ...templateConfig.recommendation?.settings },
								};
								snapConfig.instantiators.recommendation = recommendationInstantiatorConfig;
							}
							return snapConfig;
						})(config, templatesStore);
					let contextParams = ['backgroundFilters'];
					switch (templatesStore.platform) {
						case 'shopify':
							contextParams = contextParams.concat(['collection', 'tags']);
							break;
						case 'bigCommerce':
							contextParams = contextParams.concat(['category', 'brand']);
							break;
						case 'magento2':
							contextParams = contextParams.concat(['category']);
					}
					(snapConfig.context = (0, getContext.S)(contextParams)),
						super(snapConfig, { templatesStore }),
						(this.templates = templatesStore),
						editMode &&
							setTimeout(async () => {
								await templatesStore.preLoad(),
									new DomTargeter.b(
										[
											{
												selector: 'body',
												inject: {
													action: 'append',
													element: () => {
														const themeEditContainer = document.createElement('div');
														return (themeEditContainer.id = 'searchspring-template-editor'), themeEditContainer;
													},
												},
											},
										],
										async (target, elem) => {
											const TemplateEditor = (
												await Promise.all([
													__webpack_require__.e(1874),
													__webpack_require__.e(731),
													__webpack_require__.e(4661),
													__webpack_require__.e(8261),
													__webpack_require__.e(4522),
													__webpack_require__.e(486),
													__webpack_require__.e(6316),
													__webpack_require__.e(4208),
													__webpack_require__.e(8896),
													__webpack_require__.e(3524),
													__webpack_require__.e(6906),
													__webpack_require__.e(8372),
													__webpack_require__.e(8012),
													__webpack_require__.e(957),
												]).then(__webpack_require__.bind(__webpack_require__, './components/src/index.ts'))
											).TemplatesEditor;
											(0, preact_module.XX)(
												(0, emotion_react_jsx_runtime_browser_esm.Y)(TemplateEditor, {
													templatesStore,
													onRemoveClick: () => {
														cookies.U.unset('ssThemeEdit');
														const urlState = url(window.location.href);
														delete urlState?.params.query.theme;
														const newUrl = urlState?.url();
														newUrl && newUrl != window.location.href ? (window.location.href = newUrl) : window.location.reload();
													},
												}),
												elem
											);
										}
									);
							});
				}
			})({ config: { siteId: '8uyt2m', platform: 'other' }, themes: { global: { extends: 'bocachica' } } });
			addTheme(snapTemplates, 'bocachica', bocachica.S), addTheme(snapTemplates, 'base', base.E);
			const Providers = (0, es.PA)(({ templateStore, children, themeName }) => {
					const themeLocation = templateStore.themes.library[themeName],
						mergedTheme = themeLocation?.theme || {};
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(snap.Mz, {
						snap: snapTemplates,
						children: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_element_5486c51c_browser_esm.a, { theme: mergedTheme, children }),
					});
				}),
				CustomThemeProvider = ({ theme, children }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Providers, { templateStore: snapTemplates.templates, themeName: theme.name, children }),
				decorators = [
					(Story, context) => {
						const templateStory = context.kind.match(/^Template/);
						return (0, dist.gW)({
							themes: {
								bocachica: templateStory
									? snapTemplates.templates.themes.library.bocachica.theme
									: snapTemplates.templates.themes.local.bocachicaSimple.theme,
								base: templateStory ? snapTemplates.templates.themes.library.base.theme : snapTemplates.templates.themes.local.baseSimple.theme,
							},
							defaultTheme: 'base',
							Provider: templateStory ? CustomThemeProvider : emotion_element_5486c51c_browser_esm.a,
						})(Story, context);
					},
				],
				parameters = {
					actions: { argTypesRegex: '^on[A-Z].*', disabled: !1 },
					controls: { expanded: !0, disabled: !1 },
					options: { showPanel: !0, storySort: { order: ['Documentation', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Trackers'] } },
				};
			function addTheme(snapTemplates, themeName, theme) {
				snapTemplates.templates.addTheme({
					name: themeName,
					type: 'library',
					base: theme,
					language: {},
					languageOverrides: {},
					currency: {},
					innerWidth: window.innerWidth,
				}),
					snapTemplates.templates.addTheme({
						name: `${themeName}Simple`,
						type: 'local',
						base: generateSimpleTheme(theme),
						language: {},
						languageOverrides: {},
						currency: {},
						innerWidth: window.innerWidth,
					});
			}
			function generateSimpleTheme(theme) {
				const simpleTheme = { name: theme.name, variables: theme.variables, components: {} };
				for (const componentName in theme.components) {
					const componentProps = theme.components[componentName];
					simpleTheme.components[componentName] = { styleScript: componentProps?.styleScript };
				}
				return simpleTheme;
			}
		},
		'./components/src/components/Atoms/TemplateSelect/TemplateSelect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { F: () => TemplateSelect });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const TemplateSelect = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
				const { snap, templatesStore, targetId, type, controller, ...otherProps } = properties,
					{ loading } = templatesStore,
					targeter = templatesStore.getTarget(type, targetId);
				if (!targeter)
					return (
						controller.log.error(`Target "${targetId}" not found in store for type "${type}"`),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				const Component = templatesStore.library.getComponent(type, targeter.component);
				let ResultComponent;
				if (
					targeter.resultComponent &&
					((ResultComponent = templatesStore.library.components.result[targeter.resultComponent]), !loading && !ResultComponent)
				) {
					const error = `Result component "${targeter.resultComponent}" not found in library for target "${targetId}"`;
					throw (controller.log.error(error), error);
				}
				const themeLocation = templatesStore?.themes?.[targeter.theme.location],
					themeStore = themeLocation && themeLocation[targeter.theme.name],
					theme = themeStore?.theme;
				if (!loading && !theme) {
					const error = `Theme "${targeter.theme.name}" not found in library for target "${targetId}"`;
					throw (controller.log.error(error), error);
				}
				let componentProp = {};
				return (
					targeter.resultComponent && ResultComponent && (componentProp = { resultComponent: ResultComponent }),
					!loading && theme && Component
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_providers__WEBPACK_IMPORTED_MODULE_3__.Mz, {
								snap,
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_providers__WEBPACK_IMPORTED_MODULE_4__.a, {
									theme,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('div', {
										className: `ss__template-select ss__theme__${theme.name}`,
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Component, {
											controller,
											...componentProp,
											...otherProps,
										}),
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
				);
			});
		},
		'./components/src/providers/cache.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => CacheProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const emotionCache = (0, __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js').A)({
					key: 'ss',
					prepend: !0,
				}),
				CacheProvider = (props) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.C, {
						value: props.cache || emotionCache,
						children: props.children,
					});
		},
		'./components/src/providers/snap.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Mz: () => SnapProvider, b$: () => withSnap, uk: () => useSnap });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const SnapContext = (0, preact__WEBPACK_IMPORTED_MODULE_0__.q6)(void 0),
				SnapProvider = ({ children, snap }) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(SnapContext.Provider, { value: snap, children }),
				useSnap = () => (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.NT)(SnapContext);
			function withSnap(Component) {
				return (props) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Component, { snap: useSnap(), ...props });
			}
		},
		'./components/src/themes/base/base.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { E: () => base });
			const base = {
				name: 'bocachica',
				variables: { breakpoints: [767, 1024, 1400], colors: { text: '#333333', primary: '#3A23AD', secondary: '#4c3ce2', accent: '#00cee1' } },
			};
		},
		'./components/src/themes/bocachica/bocachica.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { S: () => bocachica });
			var atoms_namespaceObject = {};
			__webpack_require__.r(atoms_namespaceObject),
				__webpack_require__.d(atoms_namespaceObject, {
					badgeImage: () => badgeImage,
					badgePill: () => badgePill,
					badgeRectangle: () => badgeRectangle,
					badgeText: () => badgeText,
					banner: () => banner,
					breadcrumbs: () => breadcrumbs,
					button: () => button_button,
					dropdown: () => dropdown,
					formattedNumber: () => formattedNumber,
					icon: () => icon,
					image: () => image_image,
					inlineBanner: () => inlineBanner,
					loadingBar: () => loadingBar,
					overlay: () => overlay,
					price: () => price,
					searchHeader: () => searchHeader,
					skeleton: () => skeleton,
				});
			var molecules_namespaceObject = {};
			__webpack_require__.r(molecules_namespaceObject),
				__webpack_require__.d(molecules_namespaceObject, {
					calloutBadge: () => calloutBadge,
					carousel: () => carousel,
					checkbox: () => checkbox_checkbox,
					errorHandler: () => errorHandler,
					facetGridOptions: () => facetGridOptions,
					facetHierarchyOptions: () => facetHierarchyOptions,
					facetListOptions: () => facetListOptions,
					facetPaletteOptions: () => facetPaletteOptions,
					facetSlider: () => facetSlider,
					filter: () => filter,
					grid: () => grid,
					layoutSelector: () => layoutSelector,
					list: () => list,
					loadMore: () => loadMore,
					overlayBadge: () => overlayBadge,
					pagination: () => pagination,
					perPage: () => perPage,
					radio: () => radio_radio,
					radioList: () => radioList,
					rating: () => rating,
					result: () => result,
					searchInput: () => searchInput,
					select: () => select_select,
					slideout: () => slideout,
					sortBy: () => sortBy,
					swatches: () => swatches,
					variantSelection: () => variantSelection,
				});
			var organisms_namespaceObject = {};
			__webpack_require__.r(organisms_namespaceObject),
				__webpack_require__.d(organisms_namespaceObject, {
					branchOverride: () => branchOverride,
					facet: () => facet,
					facets: () => facets,
					facetsHorizontal: () => facetsHorizontal,
					filterSummary: () => filterSummary,
					mobileSidebar: () => mobileSidebar,
					noResults: () => noResults,
					results: () => results,
					sidebar: () => sidebar,
					toolbar: () => toolbar,
				});
			var templates_namespaceObject = {};
			__webpack_require__.r(templates_namespaceObject),
				__webpack_require__.d(templates_namespaceObject, {
					autocomplete: () => autocomplete,
					recommendation: () => recommendation,
					recommendationBundle: () => recommendationBundle,
					recommendationBundleEasyAdd: () => recommendationBundleEasyAdd,
					recommendationBundleList: () => recommendationBundleList,
					recommendationBundleVertical: () => recommendationBundleVertical,
					recommendationEmail: () => recommendationEmail,
					recommendationGrid: () => recommendationGrid,
					search: () => search,
					searchHorizontal: () => searchHorizontal,
				});
			var emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js');
			const badgeImage = { themeStyleScript: () => (0, emotion_react_browser_esm.AH)({ maxHeight: '100%', maxWidth: '100%' }) },
				badgePill = {
					themeStyleScript: ({ color, colorText, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: color,
							color: colorText,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
				},
				badgeRectangle = {
					themeStyleScript: ({ color, colorText, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: color,
							color: colorText,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
				},
				badgeText = {
					themeStyleScript: ({ colorText, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: colorText,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
				},
				banner = { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ '& iframe, img': { maxWidth: '100%', height: 'auto' } }) },
				breadcrumbs = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
				};
			var node_modules_color = __webpack_require__('../../node_modules/color/index.js'),
				color_default = __webpack_require__.n(node_modules_color);
			const button_button = {
					themeStyleScript: ({ color, backgroundColor, borderColor, theme }) => {
						const variables = theme?.variables,
							borderColour = new (color_default())(borderColor || color || variables?.colors.primary),
							colour = new (color_default())(color || variables?.colors.primary),
							hoverBackgroundColour = new (color_default())(backgroundColor || color || variables?.colors.primary),
							hoverColour = hoverBackgroundColour.isDark() ? '#fff' : '#000';
						return (0, emotion_react_browser_esm.AH)({
							display: 'inline-flex',
							alignItems: 'center',
							gap: '5px',
							padding: '5px 10px',
							position: 'relative',
							color: colour.hex(),
							outline: 0,
							backgroundColor: '#fff',
							border: `1px solid ${borderColour.hex()}`,
							borderRadius: '3px',
							'&:not(.ss__button--disabled):hover': {
								cursor: 'pointer',
								backgroundColor: hoverBackgroundColour.hex(),
								color: hoverColour,
								'.ss__icon': { fill: hoverColour, stroke: hoverColour },
							},
							'&.ss__button--disabled': { opacity: 0.3, backgroundColor: 'initial', '&:hover': { cursor: 'default' } },
							'.ss__button__content': { width: '100%' },
							label: { cursor: 'pointer' },
						});
					},
				},
				dropdown = {
					themeStyleScript: ({ disableOverlay, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							position: 'relative',
							'&.ss__dropdown--open': {
								'& .ss__dropdown__content': {
									transition: 'opacity .5s ease',
									position: disableOverlay ? 'relative' : void 0,
									visibility: 'visible',
									opacity: 1,
								},
							},
							'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
							'.ss__dropdown__content': {
								boxSizing: 'border-box',
								background: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
				},
				formattedNumber = { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
				icon = {
					themeStyleScript: ({ color, height, width, size, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							fill: color || variables?.colors?.accent,
							stroke: color || variables?.colors?.accent,
							width: width || size,
							height: height || size,
							position: 'relative',
						});
					},
				},
				image_image = {
					themeStyleScript: ({ visibility, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: 'auto',
							'& img': { visibility, flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
						}),
				},
				inlineBanner = {
					themeStyleScript: ({ width, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
				},
				loadingBar = {
					themeStyleScript: ({ color, height, backgroundColor, theme }) => {
						const variables = theme?.variables,
							animation = (0, emotion_react_browser_esm.i7)({
								from: { left: '-200px', width: '30%' },
								'50%': { width: '30%' },
								'70%': { width: '70%' },
								'80%': { left: '50%' },
								'95%': { left: '120%' },
								to: { left: '100%' },
							});
						return (0, emotion_react_browser_esm.AH)({
							height,
							position: 'fixed',
							top: '0',
							left: '0',
							right: '0',
							margin: 'auto',
							transition: 'opacity 0.3s ease',
							opacity: '1',
							visibility: 'visible',
							zIndex: '10000',
							background: backgroundColor || '#f8f8f8',
							'& .ss__loading-bar__bar': {
								position: 'absolute',
								top: '0',
								left: '-200px',
								height: '100%',
								background: `${color || variables?.colors?.accent || '#ccc'}`,
								animation: `${animation} 2s linear infinite`,
							},
						});
					},
				},
				overlay = {
					themeStyleScript: ({ color, transitionSpeed, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							transition: `background ${transitionSpeed} ease 0s, left 0s ease ${transitionSpeed}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${transitionSpeed} ease, left 0s ease`, background: color, left: '0' },
						}),
				},
				price = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							color: variables?.colors?.secondary,
							margin: '0 0.5rem 0 0',
							'&.ss__price--strike': { textDecoration: 'line-through', color: variables?.colors?.secondary || 'inherit', opacity: 0.5 },
						});
					},
				},
				searchHeader = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							paddingBottom: '10px',
							textAlign: 'center',
							'.ss__search-header__title': { color: variables?.colors?.primary, marginBottom: '5px' },
							'.ss__search-header__title--corrected': { color: variables?.colors?.secondary },
						});
					},
				},
				skeleton = {
					themeStyleScript: ({ width, height, round, backgroundColor, animatedColor, theme }) => {
						const animation = (0, emotion_react_browser_esm.i7)({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
						return (0, emotion_react_browser_esm.AH)({
							width,
							height,
							borderRadius: round ? width : '0.25rem',
							backgroundColor,
							display: 'inline-flex',
							lineHeight: '1',
							position: 'relative',
							overflow: 'hidden',
							zIndex: '1',
							'&:after': {
								content: '""',
								display: 'block',
								position: 'absolute',
								left: '0',
								right: '0',
								height: '100%',
								backgroundRepeat: 'no-repeat',
								backgroundImage: `linear-gradient(90deg, ${backgroundColor}, ${animatedColor}, ${backgroundColor})`,
								transform: 'translateX(-100%)',
								animation: `${animation} 1.5s linear infinite`,
								animationTimingFunction: 'ease-in-out',
							},
						});
					},
				},
				calloutBadge = {},
				carousel = {
					themeStyleScript: ({ vertical, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: vertical ? '100%' : void 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
							'&.ss__carousel-vertical': {
								flexDirection: 'column',
								'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
								'.swiper-container': { flexDirection: 'row' },
								'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
								'.swiper-pagination-bullet': { margin: '4px' },
							},
							'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
							},
							'.ss__carousel__next, .ss__carousel__prev': {
								padding: '5px',
								cursor: 'pointer',
								lineHeight: 0,
								'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
							},
							'.swiper-container': {
								display: 'flex',
								flexDirection: 'column',
								marginLeft: 'auto',
								marginRight: 'auto',
								position: 'relative',
								overflow: 'hidden',
								listStyle: 'none',
								padding: 0,
								zIndex: '1',
							},
							'.swiper-container-vertical': { '.swiper-wrapper': { flexDirection: 'column' } },
							'.swiper-wrapper': {
								order: 0,
								position: 'relative',
								width: '100%',
								height: '100%',
								zIndex: '1',
								display: 'flex',
								transitionProperty: 'transform',
								boxSizing: 'content-box',
							},
							'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
							'.swiper-pagination': {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
								width: '100%',
								order: 1,
								transition: '.3s opacity',
							},
							'.swiper-pagination-bullet': {
								width: '8px',
								height: '8px',
								display: 'inline-block',
								borderRadius: '50%',
								background: '#ccc',
								opacity: '.5',
								cursor: 'pointer',
								margin: '0 4px',
								'&.swiper-pagination-bullet-active': { opacity: '1', background: variables?.colors?.accent || '#3A23AD' },
							},
							'.swiper-container-pointer-events': { touchAction: 'pan-y', '&.swiper-container-vertical': { touchAction: 'pan-x' } },
							'.swiper-slide-invisible-blank': { visibility: 'hidden' },
						});
					},
				},
				checkbox_checkbox = {
					themeStyleScript: ({ size, color, theme }) => {
						const variables = theme?.variables,
							backgroundColor = new (color_default())(color || variables?.colors.primary),
							backgroundTextColor = backgroundColor.isDark() ? '#fff' : '#000';
						return (0, emotion_react_browser_esm.AH)({
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: size,
							width: size,
							border: `1px solid ${backgroundColor.hex()}`,
							borderRadius: '3px',
							'&.ss__checkbox--active': {
								backgroundColor: backgroundColor.hex(),
								'.ss__icon': { fill: backgroundTextColor, stroke: backgroundTextColor },
							},
							'&.ss__checkbox--disabled': { opacity: 0.3 },
							'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${size} - 30%)`, height: `calc(${size} - 30%)` },
						});
					},
					size: '18px',
				},
				errorHandler = {},
				facetGridOptions = {
					themeStyleScript: ({ columns, gapSize, gridSize, theme }) => {
						const variables = theme?.variables,
							backgroundColor = new (color_default())(variables?.colors.primary),
							color = backgroundColor.isDark() ? '#fff' : '#000';
						return (0, emotion_react_browser_esm.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
							color: variables?.colors?.secondary,
							gap: gapSize,
							gridAutoRows: '1fr',
							a: { color: theme?.variables?.colors?.text },
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${backgroundColor.hex()}`,
								borderRadius: '3px',
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
								margin: `0 ${gapSize} ${gapSize} 0`,
								[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: backgroundColor.hex(), color },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer' },
								'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						});
					},
					gapSize: '5px',
					columns: 5,
				},
				facetHierarchyOptions = {
					themeStyleScript: ({ horizontal, theme }) => {
						const variables = theme?.variables;
						return horizontal
							? (0, emotion_react_browser_esm.AH)({
									display: 'flex',
									flexWrap: 'wrap',
									'.ss__facet-hierarchy-options__option': {
										margin: '0 5px 5px 0',
										color: variables?.colors?.secondary,
										flex: '0 1 auto',
										border: `1px solid ${variables?.colors?.secondary || '#333'}`,
										padding: '0.5em 0.5em',
										textDecoration: 'none',
										'&.ss__facet-hierarchy-options__option--filtered': { fontWeight: 'bold', marginRight: '2em', '&:hover': { cursor: 'default' } },
										'&.ss__facet-hierarchy-options__option--return': {
											'&:before': { content: "'\\0000ab'", padding: '0 2px 0 0', color: variables?.colors?.accent },
										},
										'.ss__facet-hierarchy-options__option__value': {
											'.ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, emotion_react_browser_esm.AH)({
									'.ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										color: variables?.colors?.secondary,
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											'&:hover': { cursor: 'default' },
											'~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'&:before': { content: "'\\0000ab'", padding: '0 2px 0 0', color: variables?.colors?.accent },
										},
										'.ss__facet-hierarchy-options__option__value': {
											'.ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  });
					},
				},
				facetListOptions = {
					themeStyleScript: ({ hideCheckbox, horizontal, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							display: horizontal ? 'flex' : void 0,
							flexWrap: horizontal ? 'wrap' : void 0,
							'& .ss__facet-list-options__option': {
								display: horizontal ? void 0 : 'flex',
								alignItems: horizontal ? void 0 : 'center',
								margin: horizontal ? '0 5px 5px 0' : '0 0 5px 0',
								color: variables?.colors?.secondary,
								flex: horizontal ? '0 1 auto' : void 0,
								border: horizontal ? `1px solid ${variables?.colors?.secondary || '#333'}` : void 0,
								padding: horizontal ? '0.5em 0.5em' : void 0,
								textDecoration: 'none',
								'&:hover': { cursor: 'pointer' },
								'&.ss__facet-list-options__option--filtered': { fontWeight: 'bold' },
								'& .ss__facet-list-options__option__value': {
									marginLeft: hideCheckbox ? '' : '8px',
									'& .ss__facet-list-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
								},
							},
						});
					},
				},
				facetPaletteOptions = {
					themeStyleScript: ({ columns, horizontal, gapSize, gridSize, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: columns
								? `repeat(${columns}, calc((100% - (${columns - 1} * ${gapSize}))/ ${columns}))`
								: `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
							gap: gapSize,
							a: { color: theme?.variables?.colors?.text },
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px )`,
								marginRight: gapSize,
								marginBottom: gapSize,
								[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
								'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '3px', padding: '2px' },
								'.ss__facet-palette-options__option__palette': {
									paddingTop: 'calc(100% - 2px)',
									border: '1px solid #EBEBEB',
									borderRadius: '3px',
									position: 'relative',
									'.ss__facet-palette-options__icon': {
										position: 'absolute',
										top: 0,
										right: 0,
										left: 0,
										margin: 'auto',
										bottom: 0,
										textAlign: 'center',
										stroke: 'black',
										strokeWidth: '3px',
										strokeLinejoin: 'round',
										opacity: 0,
									},
								},
								'.ss__facet-palette-options__option__value': {
									display: 'block',
									textAlign: 'center',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								},
							},
							'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
							'&.ss__facet-palette-options--list': {
								display: 'flex',
								flexDirection: horizontal ? 'row' : 'column',
								'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
								'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
								'.ss__facet-palette-options__option--list': { alignItems: 'center' },
								'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
								'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
							},
							'&.ss__facet-palette-options--grid': {
								'.ss__facet-palette-options__checkbox': {
									display: 'flex',
									textAlign: 'center',
									overflow: 'hidden',
									margin: 'auto',
									marginBottom: '5px',
								},
								'.ss__facet-palette-options__option--filtered': {
									'.ss__facet-palette-options__option__wrapper': {
										borderColor: theme?.variables?.colors?.primary || '#333 !important',
										padding: '0px',
										borderWidth: '4px',
									},
								},
								'.ss__facet-palette-options__option': {
									'&:hover': {
										cursor: 'pointer',
										'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
										'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
									},
								},
							},
							'.ss__facet-palette-options__option__value__count': {
								fontSize: '0.8em',
								display: 'block',
								textAlign: 'center',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							},
						}),
					gapSize: '3px',
					columns: 5,
				},
				facetSlider = {
					themeStyleScript: ({
						railColor,
						trackColor,
						handleColor,
						valueTextColor,
						handleDraggingColor,
						showTicks,
						stickyHandleLabel,
						tickTextColor,
						theme,
					}) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							display: 'flex',
							flexDirection: 'column',
							marginTop: '5px',
							marginBottom: showTicks && stickyHandleLabel ? '22px' : showTicks || stickyHandleLabel ? '10px' : '5px',
							color: variables?.colors?.secondary,
							'& .ss__facet-slider__slider': {
								position: 'relative',
								display: 'inline-block',
								height: '8px',
								width: 'calc(100% - 2rem)',
								margin: stickyHandleLabel ? '1rem' : '0 1rem',
								top: '10px',
							},
							'& .ss__facet-slider__tick': {
								'&:before': {
									content: "''",
									position: 'absolute',
									left: '0',
									background: 'rgba(0, 0, 0, 0.2)',
									height: '5px',
									width: '2px',
									transform: 'translate(-50%, 0.7rem)',
								},
								'& .ss__facet-slider__tick__label': {
									position: 'absolute',
									fontSize: '0.6rem',
									color: tickTextColor,
									top: '100%',
									transform: 'translate(-50%, 1.2rem)',
									whiteSpace: 'nowrap',
								},
							},
							'& .ss__facet-slider__rail': { background: railColor || variables?.colors?.secondary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: trackColor || '#f2f2f2', borderRadius: '3px', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: handleColor || variables?.colors?.secondary || '#333',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '1.6rem',
										height: '1.6rem',
										borderRadius: '100%',
										fontSize: '0.7rem',
										whiteSpace: 'nowrap',
										color: valueTextColor || variables?.colors?.secondary || 'initial',
										fontWeight: 'normal',
										transform: 'translateY(0) scale(0.9)',
										transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
										position: 'relative',
										cursor: 'pointer',
										'&.ss__facet-slider__handle--active': {
											background: handleDraggingColor || handleColor || variables?.colors?.secondary || '#000',
											'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
										},
										'& label.ss__facet-slider__handle__label': {
											display: 'inline-block',
											marginTop: showTicks && !stickyHandleLabel ? '35px' : '20px',
											'&.ss__facet-slider__handle__label--pinleft': { left: '0px' },
											'&.ss__facet-slider__handle__label--pinright': { right: '0px' },
											'&.ss__facet-slider__handle__label--sticky': {
												position: 'absolute',
												top: '-20px',
												fontFamily: 'Roboto, Helvetica, Arial',
												fontSize: '14px',
												marginTop: '0px',
											},
										},
									},
								},
							},
							'& .ss__facet-slider__labels': {
								textAlign: 'center',
								marginTop: showTicks && !stickyHandleLabel ? '40px' : '20px',
								color: variables?.colors?.secondary || valueTextColor,
								'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
							},
						});
					},
				},
				filter = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables,
							backgroundColor = new (color_default())(variables?.colors.primary),
							backgroundTextColor = backgroundColor.isDark() ? '#fff' : '#000';
						return (0, emotion_react_browser_esm.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': {
								alignItems: 'center',
								backgroundColor: backgroundColor.hex(),
								color: backgroundTextColor,
								'& .ss__filter__button__icon': { fill: backgroundTextColor, stroke: backgroundTextColor, margin: '0 5px 0 0' },
							},
							'& .ss__filter__label': { marginRight: '5px', fontWeight: 'bold' },
						});
					},
				},
				grid = {
					themeStyleScript: ({ theme, columns, gapSize, disableOverflowAction }) =>
						(0, emotion_react_browser_esm.AH)({
							'.ss__grid__options': {
								display: 'flex',
								flexFlow: 'row wrap',
								gridTemplateColumns: `repeat(${columns}, 1fr)`,
								gap: gapSize,
								gridAutoRows: '1fr',
								'.ss__grid__option': {
									display: 'flex',
									flexDirection: 'column',
									boxSizing: 'content-box',
									backgroundRepeat: 'no-repeat',
									backgroundSize: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
									backgroundPosition: 'center !important',
									justifyContent: 'center',
									alignItems: 'center',
									flex: '0 1 auto',
									border: `1px solid ${theme?.variables?.colors?.primary}`,
									borderRadius: '3px',
									textAlign: 'center',
									wordBreak: 'break-all',
									padding: '1em 0',
									width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
									margin: `0 ${gapSize} ${gapSize} 0`,
									'.ss__grid__option__label': { cursor: 'pointer' },
									[`:nth-of-type(${columns}n)`]: { marginRight: '0' },
									'&.ss__grid__option--selected': { border: `3px solid ${theme?.variables?.colors?.primary || '#333'}`, fontWeight: 'bold' },
									'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
									'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
									'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: '50%',
										width: '90%',
										height: '1px',
										borderTop: '3px solid #eee',
										outline: '1px solid #ffff',
										transform: 'rotate(-45deg)',
									},
									'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
								},
								'@supports (display: grid)': {
									display: 'grid',
									'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
									'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
									'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
								},
							},
							'.ss__grid__show-more-wrapper': {
								'&:not(.ss__grid__option)': { margin: '8px' },
								'&:hover': { cursor: disableOverflowAction ? 'initial !important' : 'pointer !important' },
							},
						}),
					hideShowLess: !0,
					overflowButtonInGrid: !0,
				},
				layoutSelector = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '7px' },
							'.ss__list__option': {
								color: 'rgba(109,113,117,.2)',
								'.ss__icon': { fill: 'rgba(109,113,117,.2)', stroke: 'rgba(109,113,117,.2)' },
								'&.ss__list__option--selected': {
									color: variables?.colors.accent,
									'.ss__icon': { fill: variables?.colors.accent, stroke: variables?.colors.accent },
								},
							},
						});
					},
					type: 'list',
					label: '',
				},
				list = {
					themeStyleScript: ({ horizontal, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'flex',
							flexDirection: horizontal ? 'row' : 'column',
							alignItems: horizontal ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '8px',
							'& .ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: horizontal ? 'row' : 'column',
								alignItems: horizontal ? 'center' : void 0,
								justifyItems: 'flex-start',
								gap: '8px',
							},
							'.ss__list__option': {
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								gap: '5px',
								'& .ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
							},
							'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
							'.ss__list__option--selected': { fontWeight: 'bold' },
						}),
					theme: { components: { icon: { size: '24px' } } },
				},
				loadMore = {
					themeStyleScript: ({
						pagination,
						hideProgressIndicator,
						hideProgressText,
						progressIndicatorWidth,
						progressIndicatorSize,
						color,
						backgroundColor,
						theme,
					}) => {
						const variables = theme?.variables,
							radialAngle = Math.max(3.6, (3.6 * Math.floor((pagination.end / pagination.totalResults) * 100)) / 2),
							radialAnimation = (0, emotion_react_browser_esm.i7)({
								'0%': { transform: 'rotate(0deg)' },
								'100%': { transform: `rotate(${radialAngle}deg)` },
							}),
							iconRotateAnimation = (0, emotion_react_browser_esm.i7)({
								'0%': { transform: 'rotate(0deg)' },
								'100%': { transform: 'rotate(360deg)' },
							});
						return (0, emotion_react_browser_esm.AH)({
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__icon--spinner': { marginLeft: '5px', animation: `${iconRotateAnimation} linear 1s infinite` },
							'&.ss__load-more--bar': {
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '20px',
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: progressIndicatorWidth,
										background: backgroundColor || variables?.colors?.secondary || '#f8f8f8',
										borderRadius: progressIndicatorSize,
										'& .ss__load-more__progress__indicator__bar': {
											width: pagination ? (pagination.end / pagination.totalResults) * 100 + '%' : '',
											background: color || variables?.colors?.primary || '#ccc',
											borderRadius: progressIndicatorSize,
											height: progressIndicatorSize,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
							'&.ss__load-more--radial': {
								display: 'flex',
								alignItems: 'center',
								gap: '10px',
								'& .ss__load-more__button': { height: 'fit-content' },
								'& .ss__load-more__progress': {
									height: !hideProgressText && hideProgressIndicator ? void 0 : progressIndicatorWidth,
									'& .ss__load-more__progress__indicator': {
										'& .ss__load-more__progress__indicator__radial': {
											background: backgroundColor || variables?.colors?.secondary || '#f8f8f8',
											height: progressIndicatorWidth,
											width: progressIndicatorWidth,
											borderRadius: '50%',
											'& .ss__load-more__progress__indicator__radial__mask, .ss__load-more__progress__indicator__radial__mask__fill': {
												width: progressIndicatorWidth,
												height: progressIndicatorWidth,
												position: 'absolute',
												borderRadius: '50%',
											},
											'& .ss__load-more__progress__indicator__radial__mask': { clipPath: `inset(0px 0px 0px calc(${progressIndicatorWidth}/2))` },
											'& .ss__load-more__progress__indicator__radial__mask__fill': {
												animation: `${radialAnimation} ease-in-out 1s`,
												transform: `rotate(${radialAngle}deg)`,
											},
										},
										'& .ss__load-more__progress__text': {
											width: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
											height: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
											borderRadius: '50%',
											background: '#fff',
											lineHeight: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
											textAlign: 'center',
											marginTop: `calc(${progressIndicatorSize} / 2)`,
											marginLeft: `calc(${progressIndicatorSize} / 2)`,
											position: 'absolute',
											fontSize: `calc(${progressIndicatorWidth} / ${Math.max(1, `${pagination.end}`.length + `${pagination.totalResults}`.length)})`,
										},
										'& .ss__load-more__progress__indicator__radial__mask': {
											'& .ss__load-more__progress__indicator__radial__mask__fill': {
												clipPath: `inset(0px calc((${progressIndicatorWidth} / 2)) 0px 0px)`,
												backgroundColor: color || variables?.colors?.primary || '#ccc',
											},
											'&.ss__load-more__progress__indicator__radial__mask--full': {
												animation: `${radialAnimation} ease-in-out 1s`,
												transform: `rotate(${radialAngle}deg)`,
											},
										},
									},
								},
							},
						});
					},
					progressIndicator: 'radial',
				},
				overlayBadge = {},
				pagination = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							'& .ss__pagination__page': {
								padding: '5px',
								display: 'inline-block',
								minHeight: '1em',
								minWidth: '1em',
								textAlign: 'center',
								color: variables?.colors?.secondary,
								'&.ss__pagination__page--active': { textDecoration: 'underline' },
							},
						});
					},
				},
				radio_radio = {
					themeStyleScript: ({ size, native, theme }) =>
						native
							? (0, emotion_react_browser_esm.AH)({
									width: size,
									height: size,
									display: 'flex',
									justifyContent: 'center',
									'.ss__radio__input': { height: `calc(${size} - 30%)`, width: `calc(${size} - 30%)`, margin: 'auto' },
							  })
							: (0, emotion_react_browser_esm.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: size,
									width: size,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.5, cursor: 'none' },
							  }),
				},
				radioList = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({
							'& .ss__radio-list__options-wrapper': { border: 'none', listStyle: 'none', padding: '0px', margin: '0px' },
							'.ss__radio-list__title': { margin: '0px', padding: '5px' },
							'.ss__radio-list__option': {
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								padding: '5px',
								'& .ss__radio-list__option__label, .ss__radio-list__option__icon': { cursor: 'pointer', padding: '0px 0px 0px 5px' },
							},
							'&.ss__radio-list--disabled, .ss__radio-list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'.ss__radio-list__option--selected': { fontWeight: 'bold' },
						}),
				},
				result = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em', color: variables?.colors.secondary },
									'& .ss__price--strike': { fontSize: '80%' },
								},
								'& .ss__result__details__button': { marginBottom: '10px' },
							},
						});
					},
				},
				searchInput = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${variables?.colors?.secondary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
						});
					},
				},
				select_select = {
					themeStyleScript: ({ color, backgroundColor, borderColor, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							display: 'inline-flex',
							color,
							'&.ss__select--disabled': { opacity: 0.7 },
							'.ss__dropdown': {
								'.ss__select__dropdown__button': {
									border: 'none',
									padding: '6px 30px',
									fontWeight: 'bold',
									'&:hover': {
										backgroundColor: 'initial',
										color: variables?.colors?.primary,
										'.ss__icon': { fill: variables?.colors?.accent, stroke: variables?.colors?.accent },
									},
									'.ss__select__dropdown__button__icon': { marginLeft: '5px', transition: 'transform 0.25s ease 0s' },
								},
								'&.ss__dropdown--open': {
									'.ss__dropdown__button': {
										boxShadow: '0 6px 12px 1px #0000001f',
										'.ss__select__dropdown__button__icon': { transform: 'rotate(180deg)' },
									},
									'.ss__dropdown__content': { backgroundColor: backgroundColor || '#fff', boxShadow: '0 6px 12px 1px #0000001f', zIndex: '10000' },
								},
							},
							'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '7px' },
							'.ss__select__select': {
								position: 'relative',
								padding: '0',
								margin: '-1px 0 0 0',
								border: borderColor ? `1px solid ${borderColor || color}` : '',
								'.ss__select__select__option': {
									listStyle: 'none',
									cursor: 'pointer',
									padding: '6px 30px',
									color: variables?.colors?.secondary,
									'&.ss__select__select__option--selected': { background: 'rgba(109,113,117,.06)' },
									'&:hover': { background: 'rgba(109,113,117,.06)' },
								},
							},
						});
					},
					iconClose: 'angle-down',
					iconOpen: 'angle-down',
				},
				slideout = {
					themeStyleScript: ({ isActive, width, transitionSpeed, slideDirection, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${slideDirection || 'left'} ${transitionSpeed}`,
							left: 'left' == slideDirection ? (isActive ? '0' : `-${width}`) : 'right' != slideDirection ? '0' : 'initial',
							right: 'right' == slideDirection ? (isActive ? '0' : `-${width}`) : 'initial',
							bottom: 'bottom' == slideDirection ? (isActive ? '0' : '-100vh') : 'initial',
							top: 'top' == slideDirection ? (isActive ? '0' : '-100vh') : 'bottom' == slideDirection ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: width?.endsWith('%') && parseInt(width.split('%')[0]) > 90 ? width : '90%',
							maxWidth: width,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
						}),
				},
				perPage = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center', gap: '7px' } }),
					theme: { components: { icon: { size: '12px' } } },
				},
				rating = {
					themeStyleScript: ({ emptyRatingSrc, fullRatingSrc, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							textAlign: 'left',
							height: '24px',
							margin: '10px auto',
							'& .emptyRatingBox': {
								width: '129px',
								height: '24px',
								float: 'left',
								backgroundRepeat: 'no-repeat',
								background: `url(${emptyRatingSrc || '//4tcdn.blob.core.windows.net/4tjs1/images/allwallstarsempty.png'}) no-repeat`,
								textAlign: 'center',
								border: '0px !important',
							},
							'& .fullRatings': {
								background: `url(${fullRatingSrc || '//4tcdn.blob.core.windows.net/4tjs1/images/allwallstarsfull.png'}) no-repeat`,
								height: '24px',
								textAlign: 'left',
								backgroundRepeat: 'no-repeat',
								border: '0px !important',
								float: 'left',
							},
						}),
				},
				sortBy = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center', gap: '7px' } }),
					theme: { components: { icon: { size: '12px' } } },
				},
				swatches = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({
							marginTop: '10px',
							'.ss__swatches__carousel__swatch': {
								boxSizing: 'content-box',
								cursor: 'pointer',
								backgroundRepeat: 'no-repeat',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
								aspectRatio: '1/1',
								margin: 'auto',
								flexDirection: 'column',
								'&.ss__swatches__carousel__swatch--selected': { border: `2px solid ${theme?.variables?.colors?.primary || '#333'}` },
								'&.ss__swatches__carousel__swatch--disabled:before, &.ss__swatches__carousel__swatch--unavailable:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: '50%',
									width: '90%',
									height: '1px',
									borderTop: '3px solid #eee',
									outline: '1px solid #ffff',
									transform: 'rotate(-45deg)',
								},
								'&.ss__swatches__carousel__swatch--disabled': { position: 'relative', cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
								'&.ss__swatches__carousel__swatch--unavailable': { cursor: 'pointer', opacity: 0.5 },
							},
						}),
				},
				variantSelection = {},
				branchOverride = {},
				facet = {
					themeStyleScript: ({ color, disableCollapse, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							width: '100%',
							margin: '0 0 20px 0',
							'& .ss__facet__dropdown': {
								'& .ss__facet__dropdown__icon': { transition: 'transform ease .5s' },
								'&.ss__dropdown--open': { '& .ss__facet__dropdown__icon': { transform: 'rotate(180deg)' } },
							},
							'& .ss__facet__header': {
								cursor: disableCollapse ? void 0 : 'pointer',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								color: color || variables?.colors?.primary,
								fontWeight: 'bold',
							},
							'& .ss__facet__options': {
								marginTop: '8px',
								maxHeight: '400px',
								overflowY: 'auto',
								overflowX: 'hidden',
								'&::-webkit-scrollbar': { width: '8px' },
								'&::-webkit-scrollbar-track': { background: '#f2f2f2' },
								'&::-webkit-scrollbar-thumb': { background: variables?.colors?.secondary || '#ccc' },
							},
							'& .ss__facet__show-more-less': {
								display: 'block',
								margin: '8px 5px',
								cursor: 'pointer',
								color: color || variables?.colors?.secondary,
								'& .ss__icon': { marginRight: '8px' },
							},
							'& .ss__search-input': { margin: '16px 0 0 0' },
						});
					},
					iconCollapse: 'angle-down',
					iconExpand: 'angle-down',
					iconOverflowMore: 'plus-thin',
					iconOverflowLess: 'minus',
				},
				facets = { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
				facetsHorizontal = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							'& .ss__facets-horizontal__header': {
								display: 'flex',
								flexWrap: 'wrap',
								gap: '10px',
								'& .ss__facets-horizontal__header__dropdown': {
									flex: '0 0 0%',
									margin: '0',
									boxSizing: 'border-box',
									minWidth: '100px',
									'& .ss__icon': { transition: 'transform ease .5s' },
									'& .ss__dropdown__button__heading': {
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										padding: '5px 10px',
										color: variables?.colors?.secondary,
										fontWeight: 'bold',
									},
									'&.ss__dropdown--open': {
										'& .ss__dropdown__button__heading': { '& .ss__icon': { transform: 'rotate(180deg)' } },
										'& .ss__dropdown__content': {
											padding: '10px',
											minWidth: '160px',
											width: 'max-content',
											maxHeight: '500px',
											overflowY: 'auto',
											zIndex: 1,
										},
									},
								},
							},
							'&.ss__facets-horizontal--overlay': {
								'& .ss__facets-horizontal__header__dropdown': {
									'&.ss__dropdown--open': {
										'& .ss__dropdown__button': { boxShadow: '0 6px 12px 1px #0000001f' },
										'& .ss__dropdown__content': { boxShadow: '0 6px 12px 1px #0000001f' },
									},
								},
							},
							'& .ss__facet__show-more-less': { display: 'block', margin: '8px 8px 0 8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
						});
					},
					iconCollapse: 'angle-down',
				},
				filterSummary = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							margin: '10px 0 30px 0',
							'& .ss__filter-summary__filter': { margin: '5px 10px 5px 0' },
							'& .ss__filter-summary__title': { fontWeight: 'bold', color: variables?.colors?.secondary },
						});
					},
					title: 'Applied Filters',
				},
				mobileSidebar = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({
							'.ss__mobile-sidebar__header': {
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								'& .ss__mobile-sidebar__header__close-button': { cursor: 'pointer' },
							},
							'.ss__mobile-sidebar__title': {
								justifyContent: 'space-between',
								flexDirection: 'row',
								display: 'flex',
								'& .ss__icon': { cursor: 'pointer' },
							},
							'.ss__mobile-sidebar__slideout__button': { cursor: 'pointer' },
							'.ss__mobile-sidebar__footer': {
								display: 'flex',
								gap: '6px',
								justifyContent: 'center',
								flexDirection: 'row',
								'.ss__button': { width: '100%', '.ss__button__content': { textAlign: 'center' } },
							},
						}),
				},
				noResults = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({ color: variables?.colors?.secondary, ' .ss__title': { color: variables?.colors?.secondary } });
					},
				},
				results = {
					themeStyleScript: ({ columns, gapSize, theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: gapSize,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / columns}% - (${columns - 1} * ${gapSize} / ${columns} ) )`,
								marginRight: gapSize,
								marginBottom: gapSize,
								[`&:nth-of-type(${columns}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${columns})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
				},
				sidebar = {
					themeStyleScript: ({ theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							boxSizing: 'border-box',
							width: '300px',
							paddingRight: '40px',
							'& .ss__sidebar__title': { color: variables?.colors?.primary },
						});
					},
				},
				toolbar = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: '10px',
							'&.ss__search__content__toolbar--top-toolbar': { alignItems: 'flex-end', justifyContent: 'flex-end' },
							'&.ss__search__content__toolbar--bottom-toolbar, &.ss__search-horizontal__content__toolbar--bottom-toolbar': {
								justifyContent: 'center',
							},
						}),
				},
				autocomplete = {
					themeStyleScript: ({
						inputViewportOffsetBottom,
						hideFacets,
						horizontalTerms,
						noResults,
						contentSlotExists,
						viewportMaxHeight,
						vertical,
						width,
						theme,
					}) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							display: 'flex',
							flexDirection: vertical ? 'column' : 'row',
							flexWrap: horizontalTerms && !vertical ? 'wrap' : void 0,
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							width,
							maxWidth: '100vw',
							maxHeight: viewportMaxHeight && inputViewportOffsetBottom ? `calc(100vh - ${inputViewportOffsetBottom + 10}px)` : void 0,
							overflowY: viewportMaxHeight && horizontalTerms && !vertical ? 'scroll' : void 0,
							'&.ss__autocomplete--only-terms': { width: `${vertical || horizontalTerms || contentSlotExists ? width : '150px'}` },
							'.ss__autocomplete__title--trending, .ss__autocomplete__title--history, .ss__autocomplete__title--terms': {
								fontWeight: 'normal',
								margin: 0,
								color: variables?.colors?.secondary || '#c5c5c5',
								textTransform: 'uppercase',
								padding: '10px',
								h5: { margin: 0 },
							},
							'.ss__autocomplete__title--facets': { order: vertical ? 2 : void 0 },
							'.ss__autocomplete__terms': {
								display: 'flex',
								flexDirection: 'column',
								flex: '1 1 auto',
								maxWidth: '' + (vertical || horizontalTerms ? 'auto' : '150px'),
								minWidth: '150px',
								order: 1,
								background: '#fff',
								borderBottom: vertical ? `1px solid ${variables?.colors?.primary || '#333'}` : void 0,
								'.ss__autocomplete__terms__options': {
									display: vertical || horizontalTerms ? 'flex' : void 0,
									flexWrap: 'wrap',
									'.ss__autocomplete__terms__option': {
										textAlign: vertical || horizontalTerms ? 'center' : void 0,
										wordBreak: 'break-all',
										a: { display: 'block', padding: '5px 10px', color: variables?.colors?.secondary, em: { fontStyle: 'normal' } },
										'&.ss__autocomplete__terms__option--active': { a: { fontWeight: 'bold' } },
									},
								},
							},
							'.ss__facet__header, h5': {
								color: variables?.colors?.primary,
								textTransform: 'uppercase',
								margin: '0 0 20px 0',
								lineHeight: 1.2,
								fontSize: '14px',
							},
							'.ss__autocomplete__facets': {
								display: 'flex',
								flex: '0 0 150px',
								flexDirection: vertical ? 'row' : 'column',
								columnGap: '20px',
								order: 2,
								padding: vertical ? '10px 20px' : '10px',
								overflowY: vertical ? void 0 : 'auto',
								'.ss__facets': { display: 'flex', flexDirection: vertical ? 'row' : 'column', columnGap: '20px' },
								'.ss__facet': { margin: vertical ? '0 20px 0 0' : void 0, flex: vertical ? '0 1 150px' : void 0 },
								'.ss__facet-palette-options, .ss__facet-grid-options': { gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))' },
								'.ss__facet__options': { maxHeight: '250px' },
								'.ss__facet-list-options__option__value': { textAlign: 'left' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: '1 1 ' + (hideFacets ? 'auto' : '0%'),
								flexDirection: 'column',
								justifyContent: 'space-between',
								order: 3,
								overflowY: 'auto',
								margin: noResults ? '0 auto' : void 0,
								padding: vertical ? '10px 20px' : '10px',
								'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
								'.ss__banner.ss__banner--footer': { margin: '10px 0' },
								'.ss__autocomplete__content__results': { minHeight: '0%' },
								'.ss__autocomplete__content__info': {
									padding: '10px',
									textAlign: noResults ? 'center' : 'right',
									a: { fontWeight: 'bold', textTransform: 'uppercase', color: variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
								},
							},
						});
					},
					trendingTitle: 'Popular',
					theme: {
						components: {
							facet: { limit: 6, disableOverflow: !0, disableCollapse: !0 },
							facets: { limit: 2 },
							facetGridOptions: { columns: 3 },
							facetHierarchyOptions: { hideCount: !0 },
							facetListOptions: { hideCheckbox: !0, hideCount: !0 },
							facetPaletteOptions: { hideLabel: !0, columns: 3 },
							results: { columns: 2, rows: 1 },
							result: { hideBadge: !0 },
						},
					},
				},
				recommendation = {
					themeStyleScript: ({ vertical, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							margin: '20px 0',
							height: vertical ? '100%' : void 0,
							'& .ss__recommendation__title': { color: variables?.colors?.primary },
							'.ss__result__image-wrapper': { height: vertical ? '85%' : void 0 },
						});
					},
				},
				recommendationBundle = {
					themeStyleScript: ({ slidesPerView, spaceBetween, ctaInline, vertical, separatorIcon, theme }) => {
						const variables = theme?.variables;
						return (0, emotion_react_browser_esm.AH)({
							margin: '20px 0',
							'.ss__recommendation-bundle__wrapper': { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							'.ss__recommendation-bundle__wrapper__selector--seed': {
								width: '' + (vertical ? '100%' : 'auto'),
								margin: '' + (separatorIcon ? 'initial' : 'auto !important'),
							},
							'.ss__recommendation-bundle__wrapper__seed-container': {
								width: vertical ? '100%' : `calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)})`,
							},
							'.ss__recommendation-bundle__wrapper__cta': {
								width: vertical ? '100%' : '' + (ctaInline ? `calc(100% / ${slidesPerView + 1})` : '100%'),
								textAlign: 'center',
								'& .ss__recommendation-bundle__wrapper__cta__subtotal__prices': { display: 'block' },
							},
							'.ss__recommendation-bundle__wrapper__carousel': {
								boxSizing: 'border-box',
								width: vertical ? '100%' : `calc(calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)}) * ${slidesPerView - 1})`,
							},
							'.ss__recommendation-bundle__wrapper--seed-in-carousel': {
								'.ss__recommendation-bundle__wrapper__cta': { width: vertical ? '100%' : `calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)})` },
								'.ss__recommendation-bundle__wrapper__carousel': {
									width: vertical ? '100%' : `calc(calc(100% / ${slidesPerView + (ctaInline ? 1 : 0)}) * ${slidesPerView})`,
									padding: '0',
								},
							},
							'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': {
								'.ss__recommendation-bundle__wrapper__selector__icon': { display: 'none' },
							},
							'.swiper-slide-visible': { '.ss__recommendation-bundle__wrapper__selector__icon': { display: 'block' } },
							'.ss__recommendation-bundle__wrapper--vertical': { flexDirection: 'column' },
							'.ss__recommendation-bundle__wrapper__selector': {
								alignItems: 'baseline',
								position: 'relative',
								'&.ss__recommendation-bundle__wrapper__selector--last': {
									'& .ss__recommendation-bundle__wrapper__selector__icon': { display: 'none' },
								},
								'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
									position: 'absolute',
									top: '0',
									left: '0',
									zIndex: '1',
									backgroundColor: variables?.colors.accent,
									color: '#fff',
								},
								'& .ss__recommendation-bundle__wrapper__selector__icon': { position: 'absolute', right: '-1em', top: '140px' },
								'& .ss__recommendation-bundle__wrapper__selector__result-wrapper': {
									alignItems: 'center',
									position: 'relative',
									margin: `0px ${5 + (spaceBetween || 0)}px`,
								},
								'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__checkbox': {
									position: 'absolute',
									top: '0',
									right: '0',
									zIndex: '1',
									cursor: 'pointer',
								},
							},
						});
					},
				},
				recommendationBundleEasyAdd = { themeStyleScript: ({}) => (0, emotion_react_browser_esm.AH)({}) },
				recommendationBundleList = { themeStyleScript: ({}) => (0, emotion_react_browser_esm.AH)({}) },
				recommendationBundleVertical = { themeStyleScript: ({}) => (0, emotion_react_browser_esm.AH)({}) },
				recommendationGrid = {
					themeStyleScript: ({ columns, gapSize }) =>
						(0, emotion_react_browser_esm.AH)({
							overflow: 'auto',
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: gapSize,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${columns}, 1fr)`,
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
				},
				recommendationEmail = { themeStyleScript: () => (0, emotion_react_browser_esm.AH)() },
				search = {
					themeStyleScript: ({ theme }) =>
						(0, emotion_react_browser_esm.AH)({
							display: 'flex',
							minHeight: '600px',
							'.ss__sidebar': { flex: '0 1 auto', width: '300px' },
							'.ss__search__content': { flex: '1 1 0%', padding: '0px 10px', width: '100%', boxSizing: 'border-box' },
						}),
				},
				searchHorizontal = { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ '.ss__filter-summary': { margin: '10px 0' } }) },
				bocachica = {
					name: 'bocachica',
					variables: { breakpoints: [767, 991, 1299], colors: { text: '#222222', primary: '#202223', secondary: '#6d7175', accent: '#3a23ad' } },
					components: { ...atoms_namespaceObject, ...molecules_namespaceObject, ...organisms_namespaceObject, ...templates_namespaceObject },
					layoutOptions: [],
					responsive: [
						{
							layoutOptions: [
								{ value: 1, icon: 'square', overrides: { components: { search: { theme: { components: { results: { columns: 1 } } } } } } },
								{
									value: 2,
									default: !0,
									icon: 'layout-large',
									overrides: { components: { search: { theme: { components: { results: { columns: 2 } } } } } },
								},
							],
							components: {
								search: { theme: { components: { results: { columns: 2 } } } },
								facetsHorizontal: { limit: 0 },
								mobileSidebar: { hideSortBy: !1 },
								searchHorizontal: { theme: { components: { 'toolbar.middle': { hidePerPage: !0, hideSortBy: !0 } } } },
								sortBy: { type: 'radio' },
								toolbar: { hideSortBy: !0, hidePerPage: !0 },
								autocomplete: { hideFacets: !0, vertical: !0, horizontalTerms: !0, theme: { components: { results: { rows: 1, columns: 2 } } } },
							},
						},
						{
							layoutOptions: [],
							components: {
								search: { theme: { components: { results: { columns: 3 } } } },
								facetsHorizontal: { limit: 3 },
								autocomplete: { hideFacets: !0, vertical: !0, horizontalTerms: !0, theme: { components: { results: { rows: 1, columns: 3 } } } },
							},
						},
						{
							layoutOptions: [],
							components: {
								search: { theme: { components: { results: { columns: 3 } } } },
								facetsHorizontal: { limit: 5 },
								autocomplete: { vertical: !0, horizontalTerms: !0, theme: { components: { results: { rows: 1, columns: 3 }, facet: { limit: 4 } } } },
							},
						},
					],
				};
		},
		'./src/Templates/Stores/TargetStore.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { m: () => GLOBAL_THEME_NAME, t: () => TargetStore });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			const GLOBAL_THEME_NAME = 'global';
			class TargetStore {
				constructor(params) {
					const { target, dependencies, settings } = params;
					(this.dependencies = dependencies),
						(this.selector = target.selector || ''),
						(this.component = (settings.editMode && this.dependencies.storage.get(`templates.${this.selector}.component`)) || target.component),
						(this.resultComponent =
							(settings.editMode && this.dependencies.storage.get(`templates.${this.selector}.resultComponent`)) || target.resultComponent),
						(this.theme = (settings.editMode && this.dependencies.storage.get(`templates.${this.selector}.theme`)) || {
							location: 'local',
							name: target.theme || GLOBAL_THEME_NAME,
						}),
						(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
							component: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							resultComponent: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							selector: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							theme: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
						});
				}
				setComponent(componentName) {
					(this.component = componentName), this.dependencies.storage.set(`templates.${this.selector}.component`, this.component);
				}
				setResultComponent(resultComponentName) {
					(this.resultComponent = resultComponentName),
						this.dependencies.storage.set(`templates.${this.selector}.resultComponent`, this.resultComponent);
				}
				setTheme(themeName, location) {
					(this.theme = { location, name: themeName }), this.dependencies.storage.set(`templates.${this.selector}.theme`, this.theme);
				}
			}
		},
		'./src/create/createSearchController.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-controller/dist/esm/Search/SearchController.js'),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/SearchStore.js'),
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
				const urlManager =
					services?.urlManager ||
					new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_0__.V(
						new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.E(config.url),
						_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.X
					);
				config.mode && config.client && ((config.client.config = config.client.config || {}), (config.client.config.mode = config.mode));
				return new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_3__.Tp(
					config.controller,
					{
						client: services?.client || new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_4__.K(config.client.globals, config.client.config),
						store: services?.store || new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_5__.U(config.controller, { urlManager }),
						urlManager,
						eventManager: services?.eventManager || new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_6__.E(),
						profiler: services?.profiler || new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_7__.U(),
						logger: services?.logger || new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_8__.V({ mode: config.mode }),
						tracker: services?.tracker || new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_9__.J(config.client.globals),
					},
					config.context
				);
			};
		},
		'../snap-profiler/dist/esm/Profiler.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { U: () => Profiler });
			class Profiler {
				constructor(namespace) {
					(this.namespace = namespace || ''), (this.profiles = []);
				}
				setNamespace(namespace) {
					this.namespace || (this.namespace = namespace);
				}
				create({ type, name, context }) {
					if (!name) throw new Error('Profile name is required.');
					const profile = new Profile(this.namespace, { type, name, context });
					return this.profiles.push(profile), profile;
				}
			}
			class Profile {
				constructor(namespace, { type, name, context }) {
					(this.status = 'pending'),
						(this.time = { date: 0, begin: 0, end: 0, run: 0 }),
						(this.namespace = namespace),
						(this.type = type),
						(this.name = name),
						(this.context = context);
				}
				start() {
					return this.time.begin || ((this.time.date = Date.now()), (this.time.begin = window.performance.now()), (this.status = 'started')), this;
				}
				stop() {
					return (
						!this.time.end &&
							this.time.begin &&
							((this.time.date = Date.now()),
							(this.time.end = window.performance.now()),
							(this.time.run = +(this.time.end - this.time.begin).toFixed(3)),
							(this.status = 'finished')),
						this
					);
				}
			}
		},
		'../snap-store-mobx/dist/esm/Abstract/AbstractStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { K: () => AbstractStore });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			class AbstractStore {
				constructor(config) {
					(this.custom = {}),
						(this.loading = !1),
						(this.loaded = !1),
						(this.config = config),
						(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
							custom: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							loading: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							loaded: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
						});
				}
				setConfig(newConfig) {
					this.config = newConfig;
				}
				toJSON(thing = this) {
					return (0, mobx__WEBPACK_IMPORTED_MODULE_0__.HO)(thing);
				}
			}
		},
		'../snap-store-mobx/dist/esm/Meta/MetaStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { l: () => MetaStore });
			class MetaStore {
				constructor(params) {
					const { meta } = params?.data || {};
					(this.data = meta ?? {}), (this.badges = new MetaBadges(this.data));
				}
			}
			class MetaBadges {
				constructor(metaData) {
					this.groups = {};
					const groups = { overlay: { sections: ['left', 'right'] } };
					Object.keys(groups).map((name) => {
						const group = groups[name],
							sections = group.sections.map((section) => ({
								areas: metaData?.badges?.locations?.[section]?.map((area) => area.tag) || [],
								grid: [],
							})),
							lcmSections = sections.map((section) => section.areas.length).reduce(lcm);
						sections.forEach((section) => {
							section.grid = Array.from({ length: lcmSections }).map(
								(_, index) => section.areas[Math.floor(index / (lcmSections / section.areas.length))]
							);
						});
						const grid = Array.from({ length: lcmSections }).map((_, i) => sections.map((section) => section.grid[i]));
						this.groups[name] = { sections: group.sections, grid };
					});
				}
			}
			function gcd(a, b) {
				return b ? gcd(b, a % b) : a;
			}
			function lcm(a, b) {
				return (a * b) / gcd(a, b);
			}
		},
		'../snap-store-mobx/dist/esm/Search/SearchStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { U: () => SearchStore });
			var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchQueryStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
				_Stores__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js'),
				_Abstract_AbstractStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
				_Storage_StorageStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				_Meta_MetaStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-store-mobx/dist/esm/Meta/MetaStore.js');
			class SearchStore extends _Abstract_AbstractStore__WEBPACK_IMPORTED_MODULE_0__.K {
				constructor(config, services) {
					if ((super(config), 'object' != typeof services || 'function' != typeof services.urlManager?.subscribe))
						throw new Error('Invalid service \'urlManager\' passed to SearchStore. Missing "subscribe" function.');
					(this.services = services),
						(this.storage = new _Storage_StorageStore__WEBPACK_IMPORTED_MODULE_1__.t()),
						(this.history = new _Stores__WEBPACK_IMPORTED_MODULE_2__.E({ services: this.services, config: this.config })),
						this.update({ search: {}, meta: {} }),
						(0, mobx__WEBPACK_IMPORTED_MODULE_3__.Gn)(this, {
							search: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
							merchandising: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
							facets: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
							filters: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
							results: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
							pagination: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
							sorting: mobx__WEBPACK_IMPORTED_MODULE_3__.sH,
						});
				}
				reset() {
					this.update({ search: {}, meta: {} });
				}
				update(data) {
					const { search, meta } = data || {};
					(this.meta = new _Meta_MetaStore__WEBPACK_IMPORTED_MODULE_4__.l({ data: { meta } })),
						(this.merchandising = new _Stores__WEBPACK_IMPORTED_MODULE_5__.W({ data: { search } })),
						(this.search = new _Stores__WEBPACK_IMPORTED_MODULE_6__.O({ services: this.services, data: { search } })),
						(this.facets = new _Stores__WEBPACK_IMPORTED_MODULE_7__.pC({
							config: this.config,
							services: this.services,
							stores: { storage: this.storage },
							data: { search, meta: this.meta.data },
						})),
						(this.filters = new _Stores__WEBPACK_IMPORTED_MODULE_8__.Al({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.results = new _Stores__WEBPACK_IMPORTED_MODULE_9__.vP({
							config: this.config,
							state: { loaded: this.loaded },
							data: { search, meta: this.meta.data },
						})),
						(this.pagination = new _Stores__WEBPACK_IMPORTED_MODULE_10__.a3({
							config: this.config,
							services: this.services,
							data: { search, meta: this.meta.data },
						})),
						(this.sorting = new _Stores__WEBPACK_IMPORTED_MODULE_11__.q({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.error = void 0),
						(this.loaded = Boolean(search?.pagination));
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { pC: () => SearchFacetStore });
			var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),
				mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			class SearchFacetStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const config = params?.config || {},
						{ services, stores, data } = params || {},
						{ search, meta } = data || {},
						{ facets, merchandising, pagination } = search || {},
						{ storage } = stores || {};
					super(
						...(facets
							?.filter((facet) => {
								const facetMeta = facet.field && meta.facets && meta.facets[facet.field];
								if (!facetMeta) return !1;
								if (('slider' == facetMeta.display && 'range' !== facet.type) || ('range' == facet.type && 'slider' !== facetMeta.display)) return !1;
								const facetConfig = config.settings?.facets?.fields && facet.field && config.settings?.facets?.fields[facet.field];
								if ('boolean' == typeof facetConfig?.trim ? facetConfig?.trim : config.settings?.facets?.trim) {
									if ('range' === facet.type && facet?.range?.low == facet?.range?.high) return !1;
									if (0 == facet.values?.length) return !1;
									if (!facet.filtered && 1 == facet.values?.length)
										return merchandising?.content?.inline
											? facet.values[0].count + merchandising.content?.inline.length != pagination.totalResults
											: facet.values[0].count != pagination.totalResults;
								}
								return !0;
							})
							.map((facet) => {
								const facetMeta = facet.field && meta.facets && meta.facets[facet.field],
									facetConfig = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(
										{ ...config.settings?.facets, fields: void 0 },
										(config.settings?.facets?.fields && facet.field && config.settings?.facets?.fields[facet.field]) || {}
									);
								return (
									delete facetConfig.fields,
									'range' === facet.type
										? new RangeFacet(services, storage, facet, facetMeta || {}, facetConfig)
										: new ValueFacet(services, storage, facet, facetMeta || {}, facetConfig)
								);
							}) || [])
					);
				}
			}
			class Facet {
				constructor(services, storage, facet, facetMeta, config) {
					(this.filtered = !1),
						(this.custom = {}),
						(this.collapsed = !1),
						(this.display = ''),
						(this.label = ''),
						(this.services = services),
						(this.storage = storage),
						Object.assign(this, facetMeta, facet),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							type: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							field: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							filtered: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							custom: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							collapsed: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							display: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							label: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							clear: mobx__WEBPACK_IMPORTED_MODULE_1__.EW,
							toggleCollapse: mobx__WEBPACK_IMPORTED_MODULE_1__.XI,
						});
					const collapseData = this.storage.get(`facets.${this.field}.collapsed`);
					(this.collapsed = collapseData ?? this.collapsed),
						this.filtered && this.collapsed && void 0 === collapseData && config.autoOpenActive && this.toggleCollapse();
				}
				get clear() {
					return { url: this.services.urlManager.remove('page').remove(`filter.${this.field}`) };
				}
				toggleCollapse() {
					(this.collapsed = !this.collapsed), this.storage.set(`facets.${this.field}.collapsed`, this.collapsed);
				}
			}
			class RangeFacet extends Facet {
				constructor(services, storage, facet, facetMeta, config) {
					super(services, storage, facet, facetMeta, config),
						(this.range = { low: 0, high: 0 }),
						(this.active = { low: 0, high: 0 }),
						(this.step = facet?.step);
					const storedRange = config.storeRange && this.storage.get(`facets.${this.field}.range`);
					storedRange && facet.filtered && (facet.range?.low > storedRange.low || facet.range?.high < storedRange.high)
						? (this.range = this.storage.get(`facets.${this.field}.range`))
						: (this.storage.set(`facets.${this.field}.range`, facet.range), (this.range = facet.range)),
						(this.active = facet.active || facet.range),
						(this.formatSeparator = facetMeta?.formatSeparator || '-'),
						(this.formatValue = facetMeta?.formatValue || '%01.2f'),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							step: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							range: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							active: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							formatSeparator: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							formatValue: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
				}
				get filteredCount() {
					return Number(this.filtered);
				}
			}
			class ValueFacet extends Facet {
				constructor(services, storage, facet, facetMeta, config) {
					super(services, storage, facet, facetMeta, config),
						(this.values = []),
						(this.search = { input: '' }),
						(this.overflow = {
							enabled: !1,
							limited: !0,
							limit: 0,
							remaining: void 0,
							setLimit: function (limit) {
								limit != this.limit && ((this.enabled = !0), (this.limit = limit), this.calculate());
							},
							toggle: (val) => {
								(this.overflow.limited = void 0 !== val ? val : !this.overflow.limited),
									this.storage.set(`facets.${this.field}.overflow.limited`, this.overflow.limited),
									this.overflow.calculate();
							},
							calculate: () => {
								if (this.overflow.limit > 0) {
									const remaining = this.values.length - this.overflow.limit;
									remaining > 0 && !this.search.input
										? ((this.overflow.enabled = !0), this.overflow.limited ? (this.overflow.remaining = remaining) : (this.overflow.remaining = 0))
										: (this.overflow.enabled = !1);
								}
							},
						}),
						(this.multiple = this.multiple),
						(this.values =
							(facet.values &&
								facet.values.map((value) => {
									switch (facet.type) {
										case 'value':
											if ('hierarchy' === facetMeta.display) {
												const filteredValues = facet?.values?.filter((value) => value.filtered) || [];
												return new FacetHierarchyValue(services, this, value, filteredValues);
											}
											return (value.value = value?.value?.toString()), new FacetValue(services, this, value);
										case 'range-buckets':
											return new FacetRangeValue(services, this, value);
									}
								})) ||
							[]),
						config.pinFiltered && 'hierarchy' !== facetMeta.display && this.values.sort((a, b) => Number(b.filtered) - Number(a.filtered));
					const overflowLimitedState = this.storage.get(`facets.${this.field}.overflow.limited`);
					void 0 !== overflowLimitedState && this.overflow.toggle(overflowLimitedState),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							values: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							search: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							multiple: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							overflow: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							refinedValues: mobx__WEBPACK_IMPORTED_MODULE_1__.EW,
						}),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.mJ)(
							() => this.search.input,
							() => {
								this.overflow.calculate();
							}
						);
				}
				get filteredCount() {
					return this.values.filter((value) => value?.filtered).length;
				}
				get refinedValues() {
					let values = this.values || [];
					if (this.search.input) {
						const search = new RegExp(
							(function escapeRegExp(string) {
								return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
							})(this.search.input),
							'i'
						);
						values = this.values.filter((value) => String(value?.label || '').match(search));
					}
					return this.overflow.enabled && this.overflow.limited && (values = values.slice(0, this.overflow.limit)), values;
				}
			}
			class FacetValue {
				constructor(services, facet, value) {
					if ((Object.assign(this, value), this.filtered)) this.url = services.urlManager.remove('page').remove(`filter.${facet.field}`, value.value);
					else {
						let valueUrl = services.urlManager.remove('page');
						'single' == facet.multiple && (valueUrl = valueUrl?.remove(`filter.${facet.field}`)),
							(this.url = valueUrl?.merge(`filter.${facet.field}`, value.value));
					}
				}
			}
			class FacetHierarchyValue extends FacetValue {
				constructor(services, facet, value, filteredValues) {
					if (
						(super(services, facet, value),
						(this.level = 0),
						(this.history = !1),
						value.value && facet.hierarchyDelimiter && (this.level = value.value.split(facet.hierarchyDelimiter).length),
						facet.filtered && filteredValues?.length)
					) {
						const filteredLevel = facet?.hierarchyDelimiter && filteredValues[0].value?.split(facet.hierarchyDelimiter).length;
						filteredLevel && this.level <= filteredLevel && (this.history = !0);
					}
					value.value
						? (this.url = services.urlManager.remove('page').set(`filter.${facet.field}`, value.value))
						: (this.url = services.urlManager.remove('page').remove(`filter.${facet.field}`));
				}
			}
			class FacetRangeValue {
				constructor(services, facet, value) {
					if ((Object.assign(this, value), this.filtered))
						this.url = services.urlManager.remove('page').remove(`filter.${facet.field}`, [{ low: this.low, high: this.high }]);
					else {
						let valueUrl = services.urlManager.remove('page');
						'single' == facet.multiple && (valueUrl = valueUrl?.remove(`filter.${facet.field}`)),
							(this.url = valueUrl?.merge(`filter.${facet.field}`, [{ low: this.low, high: this.high }]));
					}
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Al: () => SearchFilterStore });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			class SearchFilterStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { services, data } = params || {},
						{ search, meta } = data || {},
						{ filters } = search || {};
					super(
						...(filters?.map((filter) => {
							const field = filter.field,
								facetMeta = meta.facets && meta.facets[field];
							if ('range' === filter.type) {
								return new RangeFilter(services, filter, facetMeta);
							}
							return new Filter(services, filter, facetMeta);
						}) || [])
					);
				}
			}
			class Filter {
				constructor(services, filter, meta) {
					(this.facet = { field: filter.field, label: meta?.label || filter.field }),
						(this.value = { value: filter.value, label: filter.label }),
						(this.label = `${this.facet.label}: ${this.value.label}`),
						(this.url = services?.urlManager?.remove('page').remove(`filter.${this.facet.field}`, this.value.value)),
						(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
							facet: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							value: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							label: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
						});
				}
			}
			class RangeFilter {
				constructor(services, filter, meta) {
					(this.facet = { field: filter.field, label: meta?.label || filter.field }),
						(this.value = {
							low: filter?.value?.low,
							high: filter?.value?.high,
							label: filter.label || `${filter?.value?.low} - ${filter?.value?.high}`,
						}),
						(this.label = `${this.facet.label}: ${this.value.label}`),
						(this.url = services?.urlManager?.remove('page').remove(`filter.${this.facet.field}`, { low: this.value.low, high: this.value.high })),
						(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
							facet: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							value: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							label: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
						});
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { E: () => SearchHistoryStore });
			var _Storage_StorageStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				_SearchQueryStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchQueryStore.js');
			class SearchHistoryStore {
				constructor(params) {
					const { services, config } = params || {};
					(this.config = config),
						(this.services = services),
						(this.max = this.config.settings?.history?.max ?? 25),
						this.config.settings?.history?.url &&
							(this.services.urlManager = this.services.urlManager.withConfig((translatorConfig) => ({
								...translatorConfig,
								urlRoot: this.config.settings?.history?.url,
							}))),
						(this.storage = new _Storage_StorageStore__WEBPACK_IMPORTED_MODULE_0__.t({
							type: 'local',
							key: 'ss-history' + (this.config.globals?.siteId ? `-${this.config.globals?.siteId}` : ''),
						})),
						0 === this.max && this.reset(),
						this.queries.length > this.max &&
							this.getStoredData().forEach((term, index) => {
								index > this.max - 1 && this.remove(term);
							});
				}
				get queries() {
					return this.getStoredData().map((query) => new _SearchQueryStore__WEBPACK_IMPORTED_MODULE_1__.X(this.services, query));
				}
				save(term) {
					if (this.max) {
						const history = this.getStoredData(),
							index = history.indexOf(term);
						-1 != index && history.splice(index, 1),
							history.unshift(term),
							history.length > this.max && history.pop(),
							this.storage.set('history', JSON.stringify(history));
					}
				}
				remove(term) {
					const history = this.getStoredData(),
						index = history.indexOf(term);
					-1 != index && (history.splice(index, 1), this.storage.set('history', JSON.stringify(history)));
				}
				reset() {
					this.storage.clear();
				}
				getStoredData(limit) {
					const storedHistory = this.storage.get('history');
					if (storedHistory)
						try {
							const history = JSON.parse(storedHistory);
							if (Array.isArray(history)) return limit && Number.isInteger(limit) ? history.slice(0, limit) : history;
						} catch (err) {
							this.reset();
						}
					return [];
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ContentType;
			__webpack_require__.d(__webpack_exports__, { W: () => SearchMerchandisingStore, c: () => ContentType }),
				(function (ContentType) {
					(ContentType.HEADER = 'header'),
						(ContentType.BANNER = 'banner'),
						(ContentType.FOOTER = 'footer'),
						(ContentType.LEFT = 'left'),
						(ContentType.INLINE = 'inline');
				})(ContentType || (ContentType = {}));
			class SearchMerchandisingStore {
				constructor(params) {
					(this.redirect = ''), (this.content = {}), (this.campaigns = []);
					const { merchandising } = params?.data?.search || {};
					merchandising &&
						((this.redirect = merchandising.redirect || ''),
						merchandising.content &&
							Object.values(ContentType).forEach((type) => {
								merchandising.content && merchandising.content[type] && (this.content[type] = new Content(merchandising.content[type]));
							}),
						merchandising.campaigns &&
							((this.campaigns = merchandising.campaigns),
							merchandising.campaigns.forEach((campaign) => {
								'landing-page' == campaign.type && (this.landingPage = campaign);
							})),
						merchandising.personalized && (this.personalized = merchandising.personalized));
				}
			}
			class Content extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(content) {
					super(...content);
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a3: () => SearchPaginationStore });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			class SearchPaginationStore {
				constructor(params) {
					const { services, data, config } = params || {},
						{ search, meta } = data || {},
						{ pagination } = search || {},
						paginationSettings = config?.settings?.pagination;
					(this.services = services),
						(this.controllerConfig = config),
						(this.page = pagination?.page),
						(this.pageSize = pagination?.pageSize),
						(this.totalResults = pagination?.totalResults),
						(this.defaultPageSize = meta?.pagination?.defaultPageSize),
						(this.totalPages = pagination?.totalPages);
					const pageSizeOptions = paginationSettings?.pageSizeOptions || [
						{ label: `Show ${this.defaultPageSize}`, value: this.defaultPageSize },
						{ label: 'Show ' + 2 * this.defaultPageSize, value: 2 * this.defaultPageSize },
						{ label: 'Show ' + 3 * this.defaultPageSize, value: 3 * this.defaultPageSize },
					];
					(this.pageSizeOptions = pageSizeOptions
						.filter((option) => option.value <= 100)
						.map((pageOption) => new PageSizeOption(this.services, this.pageSize, { label: pageOption.label, value: pageOption.value }))),
						(this.pageSizeOption = this.pageSizeOptions.find((option) => option.active)),
						(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
							page: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							pageSize: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							totalResults: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							totalPages: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							begin: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							end: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							multiplePages: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							current: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							first: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							last: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							next: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							previous: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							getPages: mobx__WEBPACK_IMPORTED_MODULE_0__.XI,
							setPageSize: mobx__WEBPACK_IMPORTED_MODULE_0__.XI,
						});
				}
				get begin() {
					return this.controllerConfig?.settings?.infinite ? 1 : this.pageSize * (this.page - 1) + 1;
				}
				get end() {
					return this.pageSize * this.page > this.totalResults ? this.totalResults : this.pageSize * this.page;
				}
				get multiplePages() {
					return this.pageSize < this.totalResults;
				}
				get current() {
					return new Page(this.services, { number: this.page, active: !0 });
				}
				get first() {
					return new Page(this.services, { number: 1, active: 1 == this.page });
				}
				get last() {
					return new Page(this.services, { number: this.totalPages, active: this.totalPages == this.page });
				}
				get next() {
					if (this.page < this.totalPages) return new Page(this.services, { number: this.page + 1 });
				}
				get previous() {
					if (this.page > 1) return new Page(this.services, { number: this.page - 1 });
				}
				getPages(min = 5, max) {
					if (!Number.isInteger(min)) return [];
					if (void 0 !== max && Number.isInteger(max)) (min = -Math.abs(min)), (max = Math.abs(max));
					else {
						const surrounding = min - 1;
						let from = this.page,
							to = this.page,
							last = to - from;
						do {
							if (((last = to - from), to < this.totalPages && to++, to - from >= surrounding)) break;
							from > 1 && from--;
						} while (last != to - from && to - from < surrounding);
						(min = from - this.page), (max = to - this.page);
					}
					const pages = [];
					for (let i = this.page + min; i <= this.page + max; i++)
						i > 0 && i <= this.totalPages && pages.push(new Page(this.services, { number: i, active: i == this.page }));
					return pages;
				}
				setPageSize(num) {
					num && this.services.urlManager.remove('page').set('pageSize', num).go();
				}
			}
			class PageSizeOption {
				constructor(services, currentPageSize, option) {
					(this.services = services),
						(this.value = option.value),
						(this.label = option.label),
						(this.url = this.services?.urlManager.remove('page').set('pageSize', option.value)),
						(this.active = Boolean(currentPageSize == option.value));
				}
			}
			class Page {
				constructor(services, page) {
					(this.services = services),
						(this.number = page.number),
						(this.active = page.active || !1),
						(this.url = this.services?.urlManager?.set('page', this.number)),
						(this.key = this.url.href);
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchQueryStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { X: () => Query, O: () => SearchQueryStore });
			var mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			class SearchQueryStore {
				constructor(params) {
					const { services, data } = params || {},
						{ search } = data.search || {},
						observables = {};
					search?.query && ((this.query = new Query(services, search.query)), (observables.query = mobx_esm.sH)),
						search?.didYouMean && ((this.didYouMean = new Query(services, search.didYouMean)), (observables.didYouMean = mobx_esm.sH)),
						search?.originalQuery && ((this.originalQuery = new Query(services, search.originalQuery)), (observables.originalQuery = mobx_esm.sH)),
						search?.matchType && ((this.matchType = search.matchType), (observables.matchType = mobx_esm.sH)),
						(0, mobx_esm.Gn)(this, observables);
				}
			}
			class Query {
				constructor(services, query) {
					(this.string = (function escapeHTML(unsafe) {
						if ('string' != typeof unsafe) throw new Error('parameter must be a string');
						if (window?.document) {
							const textAreaDiv = window.document.createElement('textarea');
							return (textAreaDiv.textContent = unsafe), textAreaDiv.innerHTML;
						}
						return unsafe.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;');
					})(query)),
						(this.url = services?.urlManager?.remove('page').remove('filter').set('query', this.string)),
						(0, mobx_esm.Gn)(this, { string: mobx_esm.sH });
				}
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { vP: () => SearchResultStore });
			var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),
				is_plain_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/is-plain-object/dist/is-plain-object.mjs');
			class SearchResultStore extends Array {
				static get [Symbol.species]() {
					return Array;
				}
				constructor(params) {
					const { config, data, state } = params || {},
						{ search, meta } = data || {},
						{ results, merchandising, pagination } = search || {},
						{ loaded } = state || {};
					let resultsArr = (results || []).map((result) => new Product({ config, data: { result, meta } }));
					const variantConfig = config?.settings?.variants;
					if (
						variantConfig?.realtime?.enabled &&
						(!loaded &&
							resultsArr.length &&
							document.querySelectorAll('[ss-variant-option]').forEach((elem) => {
								variantConfig?.field &&
									!1 == !variantConfig?.realtime?.enabled &&
									elem.addEventListener('click', () =>
										(function variantOptionClick(elem, variantConfig, results) {
											const options = {},
												attr = elem.getAttribute('ss-variant-option');
											if (attr) {
												const [option, value] = attr.split(':');
												(options[option.toLowerCase()] = [value.toLowerCase()]), makeVariantSelections(variantConfig, options, results);
											}
										})(elem, variantConfig, resultsArr)
									);
							}),
						resultsArr.length && variantConfig?.field && !1 == !variantConfig?.realtime?.enabled)
					) {
						const options = {};
						document.querySelectorAll('[ss-variant-option-selected]').forEach((elem) => {
							const attr = elem.getAttribute('ss-variant-option');
							if (attr) {
								const [option, value] = attr.split(':');
								option && value && (options[option.toLowerCase()] = [value.toLowerCase()]);
							}
						}),
							makeVariantSelections(variantConfig, options, resultsArr);
					}
					if (merchandising?.content?.inline) {
						const banners = merchandising.content.inline
							.sort(function (a, b) {
								return a.config.position.index - b.config.position.index;
							})
							.map((banner) => new Banner({ data: { banner } }));
						banners &&
							pagination?.totalResults &&
							(resultsArr = (function addBannersToResults(params, results, banners) {
								const { config, data } = params || {},
									{ search } = data || {},
									{ pagination } = search || {},
									productCount = results.length;
								let minIndex = pagination?.pageSize * (pagination?.page - 1);
								const maxIndex = minIndex + pagination?.pageSize;
								config?.settings?.infinite && (minIndex = 0);
								return (
									banners
										.reduce((adding, banner) => {
											const resultCount = productCount + adding.length;
											return (
												banner.config.position.index >= minIndex &&
													(banner.config.position.index < maxIndex || resultCount < pagination?.pageSize) &&
													adding.push(banner),
												adding
											);
										}, [])
										.forEach((banner) => {
											const adjustedIndex = banner.config.position.index - minIndex;
											results.splice(adjustedIndex, 0, banner);
										}),
									results
								);
							})(params, resultsArr, banners));
					}
					super(...resultsArr);
				}
			}
			class Banner {
				constructor(bannerData) {
					(this.type = 'banner'), (this.attributes = {}), (this.mappings = { core: {} }), (this.custom = {});
					const { banner } = bannerData?.data || {};
					(this.id = 'ss-ib-' + banner.config.position.index),
						(this.config = banner.config),
						(this.value = banner.value),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							id: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							mappings: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							attributes: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
				}
			}
			class Product {
				constructor(productData) {
					(this.type = 'product'),
						(this.attributes = {}),
						(this.mappings = { core: {} }),
						(this.custom = {}),
						(this.children = []),
						(this.quantity = 1),
						(this.mask = new ProductMask());
					const { config } = productData || {},
						{ result, meta } = productData?.data || {};
					(this.id = result.id),
						(this.attributes = result.attributes),
						(this.mappings = result.mappings),
						(this.badges = new Badges({ data: { meta, result } }));
					const variantsField = config?.settings?.variants?.field;
					if (config && variantsField && this.attributes && this.attributes[variantsField])
						try {
							const parsedVariants = JSON.parse(this.attributes[variantsField]);
							this.variants = new Variants({ config: config.settings?.variants, data: { mask: this.mask, variants: parsedVariants } });
						} catch (err) {
							console.error(err, `Invalid variant JSON for product id: ${result.id}`);
						}
					result.children?.length &&
						(this.children = result.children.map((variant, index) => new Child({ data: { result: { id: `${result.id}-${index}`, ...variant } } }))),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							id: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							display: mobx__WEBPACK_IMPORTED_MODULE_1__.EW,
							attributes: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							custom: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							quantity: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
					const coreObservables = Object.keys(this.mappings.core).reduce((map, key) => ({ ...map, [key]: mobx__WEBPACK_IMPORTED_MODULE_1__.sH }), {});
					(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this.mappings.core, coreObservables);
				}
				get display() {
					return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(
						{ id: this.id, mappings: this.mappings, attributes: this.attributes },
						this.mask.data,
						{ isMergeableObject: is_plain_object__WEBPACK_IMPORTED_MODULE_2__.Q }
					);
				}
			}
			class Badges {
				constructor(badgesData) {
					this.all = [];
					const { data } = badgesData || {},
						{ meta, result } = data || {};
					(this.all = (result.badges || [])
						.filter((badge) => !!(badge?.tag && meta.badges?.tags && meta.badges?.tags[badge.tag] && meta.badges?.tags[badge.tag].enabled))
						.map((badge) => {
							const metaBadgeData = meta.badges?.tags?.[badge.tag];
							return { ...badge, ...metaBadgeData };
						})
						.sort((a, b) => a.priority - b.priority)),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							all: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							tags: mobx__WEBPACK_IMPORTED_MODULE_1__.EW,
							locations: mobx__WEBPACK_IMPORTED_MODULE_1__.EW,
						});
				}
				atLocation(location) {
					const locations = Array.isArray(location) ? location : [location];
					return this.all.filter((badge) => locations.some((location) => badge.location.startsWith(`${location}/`) || badge.location == location));
				}
				get tags() {
					return this.all.reduce((badgeMap, badge) => ((badgeMap[badge.tag] = badge), badgeMap), {});
				}
				get locations() {
					return this.all.reduce((locationMap, badge) => {
						const [section, tag] = badge.location.split('/');
						return (
							(locationMap[section] = locationMap[section] || {}),
							(locationMap[section][tag] = (locationMap[section][tag] || []).concat(badge)),
							locationMap
						);
					}, {});
				}
			}
			class ProductMask {
				constructor() {
					(this.data = {}), (0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, { data: mobx__WEBPACK_IMPORTED_MODULE_1__.sH });
				}
				merge(mask) {
					JSON.stringify(deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(this.data, mask)) != JSON.stringify(this.data) &&
						(this.data = deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(this.data, mask));
				}
				set(mask) {
					JSON.stringify(mask) != JSON.stringify(this.data) && (this.data = mask);
				}
				reset() {
					this.data = {};
				}
			}
			class Variants {
				constructor(variantData) {
					(this.data = []), (this.selections = []);
					const { config, data } = variantData || {},
						{ variants, mask } = data || {};
					(this.setActive = (variant) => {
						(this.active = variant), mask.set({ mappings: this.active.mappings, attributes: this.active.attributes });
					}),
						config && (this.config = config),
						this.update(variants, config);
				}
				update(variantData, config = this.config) {
					try {
						const options = [];
						(this.data = variantData
							.filter((variant) => !1 !== variant.attributes.available)
							.map(
								(variant) => (
									variant.mappings.core?.price && (variant.mappings.core.price = Number(variant.mappings.core?.price)),
									variant.mappings.core?.msrp && (variant.mappings.core.msrp = Number(variant.mappings.core?.msrp)),
									variant
								)
							)
							.map(
								(variant) => (
									Object.keys(variant.options).forEach((variantOption) => {
										options.includes(variantOption) || options.push(variantOption);
									}),
									new Variant({ data: { variant } })
								)
							)),
							(this.selections = []),
							options.map((option) => {
								const variantOptionConfig = this.config?.options && this.config.options[option];
								this.selections.push(new VariantSelection({ config: variantOptionConfig, data: { variants: this, selectorField: option } }));
							});
						const preselectedOptions = {};
						config?.options &&
							Object.keys(config?.options).forEach((option) => {
								config.options[option].preSelected && (preselectedOptions[option] = config.options[option].preSelected);
							}),
							this.makeSelections(preselectedOptions);
					} catch (err) {
						console.error(err, `Invalid variant JSON for: ${variantData}`);
					}
				}
				makeSelections(options) {
					options && Object.keys(options).length
						? this.selections.forEach((selection, idx) => {
								const availableOptions = selection.values.filter((value) => 0 == idx || value.available),
									preferedOptions = options[selection.field];
								let preferencedOption = selection.selected || availableOptions[0];
								if (preferedOptions) {
									const checkIfAvailable = (preference) => {
										const availablePreferedOptions = availableOptions.find(
											(value) => value.value.toString().toLowerCase() == preference?.toString().toLowerCase()
										);
										availablePreferedOptions && (preferencedOption = availablePreferedOptions);
									};
									Array.isArray(preferedOptions)
										? preferedOptions.forEach((preference) => {
												checkIfAvailable(preference);
										  })
										: checkIfAvailable(preferedOptions);
								}
								preferencedOption && selection.select(preferencedOption.value, !0);
						  })
						: this.selections.forEach((selection) => {
								const firstAvailableOption = selection.values.find((value) => value.available);
								firstAvailableOption && selection.select(firstAvailableOption.value, !0);
						  });
				}
				refineSelections(fromSelection) {
					const orderedSelections = [...this.selections];
					orderedSelections.sort((a) => (a.field == fromSelection.field ? 1 : -1)),
						orderedSelections.forEach((selection) => selection.refineValues(this));
					const selectedSelections = this.selections.filter((selection) => selection.selected?.value?.length);
					if (selectedSelections.length) {
						let availableVariants = this.data;
						for (const selectedSelection of selectedSelections)
							availableVariants = availableVariants.filter(
								(variant) => selectedSelection.selected?.value == variant.options[selectedSelection.field].value && variant.available
							);
						1 == availableVariants.length && this.setActive(availableVariants[0]);
					}
				}
			}
			class VariantSelection {
				constructor(variantSelectionData) {
					(this.selected = void 0), (this.previouslySelected = void 0), (this.values = []);
					const { data, config } = variantSelectionData || {},
						{ variants, selectorField } = data || {};
					(this.field = selectorField),
						(this.label = config?.label || selectorField),
						(this.config = config || {}),
						(this.variantsUpdate = () => variants.refineSelections(this)),
						this.refineValues(variants),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							selected: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							values: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
				}
				refineValues(variants) {
					const selectedSelections = variants.selections.filter((selection) => selection.field != this.field && selection.selected);
					let availableVariants = variants.data.filter((variant) => variant.available);
					for (const selectedSelection of selectedSelections)
						availableVariants = availableVariants.filter(
							(variant) => selectedSelection.selected?.value == variant.options[selectedSelection.field].value && variant.available
						);
					const newValues = variants.data
						.filter((variant) => variant.options[this.field])
						.reduce((values, variant) => {
							if (!values.some((val) => variant.options[this.field].value == val.value)) {
								const value = variant.options[this.field].value,
									thumbnailImageUrl = variant.mappings.core?.thumbnailImageUrl,
									mappedValue = {
										value,
										label: value,
										thumbnailImageUrl,
										available: Boolean(
											availableVariants.some((availableVariant) => availableVariant.options[this.field].value == variant.options[this.field].value)
										),
									};
								if (
									(this.config.thumbnailBackgroundImages
										? (mappedValue.backgroundImageUrl = thumbnailImageUrl)
										: variant.options[this.field].backgroundImageUrl &&
										  (mappedValue.backgroundImageUrl = variant.options[this.field].backgroundImageUrl),
									variant.options[this.field].background && (mappedValue.background = variant.options[this.field].background),
									this.config.mappings && this.config.mappings && this.config.mappings[value.toString().toLowerCase()])
								) {
									const mapping = this.config.mappings[value.toString().toLowerCase()];
									mapping.label && (mappedValue.label = mapping.label),
										mapping.background && (mappedValue.background = mapping.background),
										mapping.backgroundImageUrl && (mappedValue.backgroundImageUrl = mapping.backgroundImageUrl);
								}
								values.push(mappedValue);
							}
							return values;
						}, []);
					if (this.selected && !newValues.some((val) => val.value == this.selected?.value && val.available))
						if (
							this.selected !== this.previouslySelected &&
							this.previouslySelected &&
							newValues.some((val) => val.value == this.previouslySelected?.value && val.available)
						)
							this.select(this.previouslySelected.value, !0);
						else {
							const availableValues = newValues.filter((val) => val.available);
							if (newValues.length && availableValues.length) {
								const nextAvailableValue = availableValues[0].value;
								this.selected.value !== nextAvailableValue && this.select(nextAvailableValue, !0);
							}
						}
					this.values = newValues;
				}
				reset() {
					(this.selected = void 0), this.values.forEach((val) => (val.available = !1));
				}
				select(value, internalSelection = !1) {
					const valueExist = this.values.find((val) => val.value == value);
					valueExist && (internalSelection || (this.previouslySelected = this.selected), (this.selected = valueExist), this.variantsUpdate());
				}
			}
			class Variant {
				constructor(variantData) {
					(this.type = 'variant'), (this.attributes = {}), (this.mappings = { core: {} }), (this.custom = {});
					const { data } = variantData || {},
						{ variant } = data || {};
					(this.attributes = variant.attributes),
						(this.mappings = variant.mappings),
						(this.options = variant.options),
						(this.available = this.attributes.available || !1),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							attributes: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							mappings: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							custom: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							available: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
				}
			}
			class Child {
				constructor(childData) {
					(this.type = 'child'), (this.attributes = {}), (this.custom = {});
					const { result } = childData?.data || {};
					(this.id = result.id),
						(this.attributes = result.attributes),
						(0, mobx__WEBPACK_IMPORTED_MODULE_1__.Gn)(this, {
							id: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							attributes: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							custom: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
				}
			}
			function makeVariantSelections(variantConfig, options, results) {
				let filteredResults = results;
				variantConfig.realtime?.filters?.forEach((filter) => {
					'first' == filter && (filteredResults = [filteredResults[0]]),
						'unaltered' == filter &&
							(filteredResults = filteredResults.filter((result) => !result.variants?.selections.some((selection) => selection.previouslySelected)));
				}),
					filteredResults.forEach((result) => {
						'product' == result.type && result.variants?.makeSelections(options);
					});
			}
		},
		'../snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { q: () => SearchSortingStore });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js');
			class SearchSortingStore {
				constructor(params) {
					this.options = [];
					const { services, data } = params || {},
						{ meta } = data || {},
						{ sorting, search } = data?.search || {};
					if (services && meta.sortOptions) {
						const activeSort = sorting?.length && sorting[0],
							options = (meta.sortOptions || [])
								.filter((option) => (search?.query ? option : 'field' == option.type))
								.map((option, index) => {
									(option.active = !1),
										activeSort && activeSort.field == option.field && String(activeSort.direction) == String(option.direction)
											? (option.active = !0)
											: activeSort || 0 !== index || (option.active = !0),
										(option.default = !1),
										0 === index && (option.default = !0);
									return new Option(services, option, index);
								});
						(this.options = options),
							(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
								options: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
								current: mobx__WEBPACK_IMPORTED_MODULE_0__.EW,
							});
					}
				}
				get current() {
					return this.options.filter((option) => option.active).pop();
				}
			}
			class Option {
				constructor(services, option, index) {
					(this.active = option.active),
						(this.default = option.default),
						(this.field = option.field),
						(this.label = option.label),
						(this.direction = option.direction),
						(this.type = option.type),
						(this.value = `${option.label}:${option.field}:${option.direction}:${index}`),
						this.default
							? (this.url = services.urlManager.remove('page').remove('sort'))
							: (this.url = services.urlManager.remove('page').set('sort', [{ field: this.field, direction: this.direction }])),
						(0, mobx__WEBPACK_IMPORTED_MODULE_0__.Gn)(this, {
							field: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							label: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							direction: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							type: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
							value: mobx__WEBPACK_IMPORTED_MODULE_0__.sH,
						});
				}
			}
		},
		'../snap-store-mobx/dist/esm/Storage/StorageStore.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { e: () => StorageType, t: () => StorageStore });
			var _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../snap-toolbox/dist/esm/cookies/cookies.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-toolbox/dist/esm/featureFlags/featureFlags.js');
			const utils = { cookies: _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_0__.U };
			class StorageStore {
				constructor(config) {
					if (
						((this.type = null),
						(this.expiration = 31536e6),
						(this.sameSite = 'Lax'),
						(this.key = 'ss-storage'),
						(this.cookieDomain =
							('undefined' != typeof window && window.location.hostname && '.' + window.location.hostname.replace(/^www\./, '')) || void 0),
						(this.state = {}),
						config)
					)
						switch (
							('' !== config.key.trim() && (this.key = config.key.trim()),
							config?.cookie?.expiration && (this.expiration = config.cookie.expiration),
							config?.cookie?.sameSite && (this.sameSite = config.cookie.sameSite),
							config.type)
						) {
							case StorageType.session:
								(this.type = _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.o.storage ? config.type : null),
									this.type &&
										((this.state = JSON.parse(window.sessionStorage.getItem(this.key) || '{}')),
										window.sessionStorage.setItem(this.key, JSON.stringify(this.state)));
								break;
							case StorageType.local:
								(this.type = _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.o.storage ? config.type : null),
									this.type &&
										((this.state = JSON.parse(window.localStorage.getItem(this.key) || '{}')),
										window.localStorage.setItem(this.key, JSON.stringify(this.state)));
								break;
							case StorageType.cookie:
								if (_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.o.cookies) {
									this.type = config.type;
									const data = utils.cookies.get(this.key);
									data && (this.state = JSON.parse(data));
								}
								break;
							default:
								this.type = StorageType.memory;
						}
				}
				set(path, value) {
					const paths = path?.split('.');
					let location = this.state;
					switch (
						(paths?.forEach((p, i) => {
							i == paths.length - 1 ? (location[p] = value) : (location = location[p] = location[p] || {});
						}),
						this.type)
					) {
						case StorageType.session:
							window.sessionStorage.setItem(this.key, JSON.stringify(this.state));
							break;
						case StorageType.local:
							window.localStorage.setItem(this.key, JSON.stringify(this.state));
							break;
						case StorageType.cookie:
							utils.cookies.set(this.key, JSON.stringify(this.state), this.sameSite, this.expiration, this.cookieDomain);
					}
				}
				get(path) {
					switch (this.type) {
						case StorageType.session:
							const sessionData = window.sessionStorage.getItem(this.key);
							this.state = sessionData ? JSON.parse(sessionData) : {};
							break;
						case StorageType.local:
							const localData = window.localStorage.getItem(this.key);
							this.state = localData ? JSON.parse(localData) : {};
							break;
						case StorageType.cookie:
							const data = utils.cookies.get(this.key);
							data && (this.state = JSON.parse(data) || {});
					}
					const paths = path?.split('.');
					if (!paths?.length) return;
					let value = this.state;
					for (const p of paths) {
						if (!value || void 0 === value[p]) return void (value = {});
						value = value[p];
					}
					return value;
				}
				clear() {
					switch (this.type) {
						case StorageType.session:
							window.sessionStorage.removeItem(this.key);
							break;
						case StorageType.local:
							window.localStorage.removeItem(this.key);
							break;
						case StorageType.cookie:
							utils.cookies.unset(this.key, this.cookieDomain);
					}
					this.state = {};
				}
			}
			var StorageType;
			!(function (StorageType) {
				(StorageType.session = 'session'), (StorageType.local = 'local'), (StorageType.cookie = 'cookie'), (StorageType.memory = 'memory');
			})(StorageType || (StorageType = {}));
		},
		'../snap-store-mobx/dist/esm/types.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ErrorType;
			__webpack_require__.d(__webpack_exports__, { B: () => ErrorType }),
				(function (ErrorType) {
					(ErrorType.WARNING = 'warning'), (ErrorType.INFO = 'info'), (ErrorType.ERROR = 'error');
				})(ErrorType || (ErrorType = {}));
		},
		'../snap-toolbox/dist/esm/DomTargeter/DomTargeter.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { b: () => DomTargeter });
			let globallyTargetedElems = [];
			class DomTargeter {
				constructor(targets, onTarget, document) {
					(this.targets = []),
						(this.styleBlockRefs = {}),
						(this.targetedElems = []),
						(this.unhideTarget = (selector) => {
							if (this.styleBlockRefs[selector])
								try {
									this.document.head.removeChild(this.styleBlockRefs[selector]), delete this.styleBlockRefs[selector];
								} catch (err) {}
						}),
						(this.hideTarget = (selector) => {
							if (this.styleBlockRefs[selector]) return;
							const styles = `${selector} { visibility: hidden !important }`,
								styleBlock = this.document.createElement('style');
							styleBlock.setAttribute('type', 'text/css'),
								styleBlock.appendChild(this.document.createTextNode(styles)),
								this.document.head.appendChild(styleBlock),
								(this.styleBlockRefs[selector] = styleBlock);
						}),
						(this.document = document || window.document),
						(this.targets = targets),
						(this.onTarget = onTarget),
						this.retarget(),
						this.targets.forEach((target) => {
							let timeoutTime = 100;
							const checker = () => {
								timeoutTime < 2e3
									? ((timeoutTime += 200), this.retarget(), setTimeout(checker, timeoutTime))
									: target.hideTarget && this.unhideTarget(target.selector);
							};
							if (target.clickRetarget) {
								let clickElems = [];
								'boolean' == typeof target.clickRetarget
									? clickElems.push(this.document)
									: (clickElems = Array.from(this.document.querySelectorAll(target.clickRetarget))),
									clickElems.map((elem) => {
										elem.addEventListener('click', () => {
											(timeoutTime = 100), checker();
										});
									});
							}
							target.autoRetarget
								? checker()
								: /complete|interactive|loaded/.test(this.document.readyState)
								? target.hideTarget && this.unhideTarget(target.selector)
								: this.document.addEventListener('DOMContentLoaded', () => {
										this.retarget(), target.hideTarget && this.unhideTarget(target.selector);
								  });
						});
				}
				getTargets() {
					return this.targets;
				}
				retarget() {
					const targetElemPairs = this.targets.flatMap((target) => {
							target.hideTarget && this.hideTarget(target.selector);
							const elems = this.domQuery(target.selector).filter((elem) => {
								if (!globallyTargetedElems.find((e) => e == elem) && !this.targetedElems.find((e) => e == elem)) return !0;
								target.hideTarget && this.unhideTarget(target.selector);
							});
							return target.inject?.element || (globallyTargetedElems = globallyTargetedElems.concat(elems)), elems.map((elem) => ({ target, elem }));
						}),
						errors = [];
					if (
						(targetElemPairs.forEach(async ({ target, elem }) => {
							if (target.inject)
								try {
									const injectedElem = this.inject(elem, target);
									(this.targetedElems = this.targetedElems.concat(elem)), await this.onTarget(target, injectedElem, elem);
								} catch (e) {
									errors.push(String(e));
								}
							else {
								if (((target.emptyTarget = target.emptyTarget ?? !0), target.emptyTarget))
									for (; elem.firstChild && elem.removeChild(elem.firstChild); );
								await this.onTarget(target, elem);
							}
							target.hideTarget && this.unhideTarget(target.selector),
								(target.unsetTargetMinHeight = target.unsetTargetMinHeight ?? !0),
								target.unsetTargetMinHeight && elem.style.minHeight && (elem.style.minHeight = '');
						}),
						errors.length)
					)
						throw new Error(errors.reduce((acc, err) => acc + (err + '\n'), '\n'));
				}
				domQuery(selector) {
					return Array.from(this.document.querySelectorAll(selector));
				}
				inject(elem, target) {
					if (!target || !target.inject) throw new Error('DomTargeter::inject: Injected element unspecified');
					const injectedElem = target.inject.element instanceof Function ? target.inject.element(target, elem) : target.inject.element;
					if (!injectedElem) throw new Error('DomTargeter::inject: Injected element unspecified');
					if (!elem.parentNode) throw new Error('DomTargeter::inject: Provided element has no parent element');
					switch (target?.inject?.action) {
						case 'before':
							elem.parentNode.insertBefore(injectedElem, elem);
							break;
						case 'after':
							elem.nextSibling ? elem.parentNode.insertBefore(injectedElem, elem.nextSibling) : elem.parentNode.appendChild(injectedElem);
							break;
						case 'append':
							elem.appendChild(injectedElem);
							break;
						case 'prepend':
							elem.firstChild ? elem.insertBefore(injectedElem, elem.firstChild) : elem.appendChild(injectedElem);
							break;
						case 'replace':
							elem.parentNode.replaceChild(injectedElem, elem);
					}
					return injectedElem;
				}
			}
		},
		'../snap-toolbox/dist/esm/cookies/cookies.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { U: () => cookies });
			const cookies = {
				set: (name, val, sameSite, expires, domain) => {
					sameSite = sameSite || 'Lax';
					let cookie = name + '=' + encodeURIComponent(val) + ';SameSite=' + sameSite + ';path=/;';
					if (('https:' == window.location.protocol && (cookie += 'Secure;'), expires)) {
						const d = new Date();
						d.setTime(d.getTime() + expires), (cookie += 'expires=' + d.toUTCString() + ';');
					}
					domain && (cookie += 'domain=' + domain + ';'), (window.document.cookie = cookie);
				},
				get: (name) => {
					name += '=';
					const ca = window.document.cookie.split(';');
					for (let i = 0; i < ca.length; i++) {
						let c = ca[i];
						for (; ' ' == c.charAt(0); ) c = c.substring(1);
						if (0 == c.indexOf(name)) return decodeURIComponent(c.substring(name.length, c.length));
					}
					return '';
				},
				unset: (name, domain) => {
					let cookie = name + '=; path=/; Max-Age=-99999999;';
					domain && (cookie += 'domain=' + domain + ';'), (window.document.cookie = cookie);
				},
			};
		},
		'../snap-toolbox/dist/esm/debounce/debounce.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { s: () => debounce });
			const debounce = (func, timeout = 200) => {
				let timer;
				return (...args) => {
					clearTimeout(timer),
						(timer = window.setTimeout(() => {
							func.apply(void 0, args);
						}, timeout));
				};
			};
		},
		'../snap-toolbox/dist/esm/featureFlags/featureFlags.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function getFlags(userAgent = '') {
				userAgent = (userAgent || ('undefined' == typeof window ? {} : window?.navigator).userAgent || '').toLowerCase();
				const isIE = (function () {
					let ieVersion;
					return function isIE() {
						if (void 0 === ieVersion) {
							const version = (userAgent.match(/(msie|trident\/7.0; rv:) ?([0-9]{1,2})\./) || [])[2];
							ieVersion = !!version && Number(version);
						}
						return ieVersion;
					};
				})();
				return {
					cors: function () {
						return !isIE() || Number(isIE()) >= 10;
					},
					cookies: function () {
						return 'undefined' != typeof window && window?.navigator?.cookieEnabled;
					},
					storage: function () {
						try {
							return window?.localStorage.setItem('ss-test', 'ss-test'), window?.localStorage.removeItem('ss-test'), !0;
						} catch (e) {
							return !1;
						}
					},
				};
			}
			__webpack_require__.d(__webpack_exports__, { Q: () => getFlags, o: () => featureFlags });
			const flags = getFlags(),
				featureFlags = { cors: flags.cors(), cookies: flags.cookies(), storage: flags.storage() };
		},
		'../snap-toolbox/dist/esm/getContext/getContext.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function getContext(evaluate = [], script) {
				if (!script || 'string' == typeof script) {
					script = Array.from(document.querySelectorAll(script || 'script[id^=searchspring], script[src*="snapui.searchspring.io"]'))
						.sort((a, b) => a.innerHTML.length - b.innerHTML.length)
						.pop();
				}
				if (!script || 'object' != typeof script || 'SCRIPT' !== script.tagName) throw new Error('getContext: did not find a script tag');
				const scriptElem = script;
				if (
					!scriptElem.getAttribute('type')?.match(/^searchspring/i) &&
					!scriptElem.id?.match(/^searchspring/i) &&
					!scriptElem.src?.match(/\/\/snapui.searchspring.io/i)
				)
					throw new Error('getContext: did not find a script from Snap CDN or with attribute (type, id) starting with "searchspring"');
				if ((evaluate && !Array.isArray(evaluate)) || (evaluate && !evaluate.reduce((accu, name) => accu && 'string' == typeof name, !0)))
					throw new Error('getContext: first parameter must be an array of strings');
				const attributeVariables = {};
				Object.values(scriptElem.attributes).map((attr) => {
					const name = attr.nodeName;
					evaluate.includes(name) && (attributeVariables[name] = scriptElem.getAttribute(name));
				});
				const scriptVariables = {};
				evaluate?.forEach((name) => {
					const fn = new Function(`\n\t\t\tvar ${evaluate.join(', ')};\n\t\t\t${scriptElem.innerHTML}\n\t\t\treturn ${name};\n\t\t`);
					scriptVariables[name] = fn();
				});
				const variables = { ...removeUndefined(attributeVariables), ...removeUndefined(scriptVariables) };
				if (evaluate.includes('siteId') && !variables.siteId) {
					const siteId = script.getAttribute('src')?.match(/.*snapui.searchspring.io\/([a-zA-Z0-9]{6})\//);
					siteId && siteId.length > 1 && (variables.siteId = siteId[1]);
				}
				return variables;
			}
			function removeUndefined(variables) {
				return (
					Object.keys(variables).forEach((key) => {
						void 0 === variables[key] && delete variables[key];
					}),
					variables
				);
			}
			__webpack_require__.d(__webpack_exports__, { S: () => getContext });
		},
		'../snap-toolbox/dist/esm/types.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var AppMode;
			__webpack_require__.d(__webpack_exports__, { $: () => AppMode }),
				(function (AppMode) {
					(AppMode.production = 'production'), (AppMode.development = 'development');
				})(AppMode || (AppMode = {}));
		},
		'../snap-toolbox/dist/esm/version/version.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { r: () => version });
			const { version } = { version: '1.3.0' };
		},
		'../snap-tracker/dist/esm/Tracker.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { J: () => Tracker });
			var cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				v4 = __webpack_require__('../../node_modules/uuid/dist/esm-browser/v4.js'),
				StorageStore = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				featureFlags = __webpack_require__('../snap-toolbox/dist/esm/featureFlags/featureFlags.js'),
				cookies = __webpack_require__('../snap-toolbox/dist/esm/cookies/cookies.js');
			function charsParams(params) {
				if ('object' != typeof params) throw new Error('function requires an object');
				return Object.keys(params).reduce((count, key) => {
					const keyLength = key.length,
						value = params[key];
					return Array.isArray(value)
						? count + value.reduce((length, val) => length + keyLength + 1 + ('' + val).length, 0)
						: 'object' == typeof value
						? count + keyLength + 1 + charsParams(value)
						: 'string' == typeof value || 'number' == typeof value
						? count + keyLength + 1 + ('' + value).length
						: count + keyLength;
				}, 1);
			}
			var version = __webpack_require__('../snap-toolbox/dist/esm/version/version.js'),
				DomTargeter = __webpack_require__('../snap-toolbox/dist/esm/DomTargeter/DomTargeter.js'),
				getContext = __webpack_require__('../snap-toolbox/dist/esm/getContext/getContext.js'),
				types = __webpack_require__('../snap-toolbox/dist/esm/types.js');
			class TrackEvent {
				constructor(payload) {
					if (((payload.event = payload.event), !payload.context || !payload.event))
						throw 'TrackEvent: object parameter required a valid `context` BeaconContext and `event` ProductClickEvent objects';
					if (!payload.event?.intellisuggestData || !payload.event?.intellisuggestSignature)
						throw 'TrackEvent: object parameter `event` ProductClickEvent object requires valid intellisuggestData and intellisuggestSignature values. These are the corresponding attributes in the Searchspring API response.';
					(this.intellisuggestData = payload.event.intellisuggestData),
						(this.intellisuggestSignature = payload.event.intellisuggestSignature),
						(this.href = payload.event?.href || ''),
						(this.endpoint = `https://${payload.context.website.trackingCode}.a.searchspring.io/api/track/track.json`),
						(this.src =
							this.endpoint +
							`?d=${encodeURIComponent(this.intellisuggestData)}` +
							`&s=${encodeURIComponent(this.intellisuggestSignature)}` +
							`&u=${encodeURIComponent(this.href || '')}`),
						window.document.referrer && (this.src += `&r=${encodeURIComponent(window.document.referrer)}`),
						(this.img = new Image(1, 1)),
						(this.img.src = this.src);
				}
			}
			var esm_types = __webpack_require__('../snap-tracker/dist/esm/types.js');
			class PixelEvent {
				constructor(payload) {
					switch (
						((this.endpoint = 'https://d3cgm8py10hi0z.cloudfront.net/is.gif'),
						(this.src =
							this.endpoint +
							`?s=${encodeURIComponent(payload?.context?.website?.trackingCode || '')}` +
							`&u=${encodeURIComponent(payload?.context?.userId || '')}&ce=` +
							(featureFlags.o.cookies ? '1' : '0') +
							`&pt=${encodeURIComponent(document.title)}&v=1` +
							`&x=${Math.floor(2147483647 * Math.random())}` +
							(window.document.referrer ? `&r=${encodeURIComponent(window.document.referrer)}` : '')),
						payload?.context?.currency?.code && (this.src += `&currencyCode=${encodeURIComponent(payload?.context?.currency?.code)}`),
						payload.category)
					) {
						case esm_types.fx.PAGEVIEW:
							(this.event = payload.event), (this.src += '&a=viewItem'), this.event.sku && (this.src += `&sku=${encodeURIComponent(this.event.sku)}`);
							break;
						case esm_types.fx.CARTVIEW:
							(this.event = payload.event),
								(this.src += '&a=basket'),
								this.event.items.forEach((item) => {
									item?.sku &&
										(this.src += `&item=${encodeURIComponent(item.sku)};${encodeURIComponent(item?.qty || '')};${encodeURIComponent(
											item?.price || ''
										)};`);
								});
							break;
						case esm_types.fx.ORDERVIEW:
							const { orderId, total, transactionTotal, city, state, country, items } = (this.event = payload.event);
							(this.src += '&a=sale'),
								orderId && (this.src += `&orderId=${encodeURIComponent(orderId)}`),
								total && (this.src += `&total=${encodeURIComponent(total)}`),
								transactionTotal && (this.src += `&transactionTotal=${encodeURIComponent(transactionTotal)}`),
								city && (this.src += `&city=${encodeURIComponent(city)}`),
								state && (this.src += `&state=${encodeURIComponent(state)}`),
								country && (this.src += `&country=${encodeURIComponent(country)}`),
								items.forEach((item) => {
									item?.sku &&
										(this.src += `&item=${encodeURIComponent(item.sku)};${encodeURIComponent(item?.qty || '')};${encodeURIComponent(
											item?.price || ''
										)};`);
								});
					}
					this.src.includes('&a=') && ((this.img = new Image(1, 1)), (this.img.src = this.src));
				}
			}
			class BeaconEvent {
				constructor(payload, config) {
					(this.type = payload.type),
						(this.category = payload.category),
						(this.context = payload.context),
						(this.meta = payload.meta),
						(this.event = payload.event),
						(this.id = payload.id),
						(this.pid = payload.pid),
						(this.meta = { initiator: { lib: 'searchspring/snap', 'lib.version': version.r, 'lib.framework': config.framework } }),
						(this.id = (0, v4.A)());
				}
			}
			const COOKIE_DOMAIN =
					('undefined' != typeof window && window.location.hostname && '.' + window.location.hostname.replace(/^www\./, '')) || void 0,
				defaultConfig = { id: 'track', framework: 'snap', mode: types.$.production };
			class Tracker {
				constructor(globals, config) {
					if (
						((this.mode = types.$.production),
						(this.targeters = []),
						(this.track = {
							event: (payload) => {
								const event = {
									type: payload?.type || esm_types.Tz.CUSTOM,
									category: payload?.category || esm_types.fx.CUSTOM,
									context: payload?.context ? cjs_default()(this.context, payload.context) : this.context,
									event: payload.event,
									pid: payload?.pid || void 0,
								};
								if (this.doNotTrack.find((entry) => entry.type === event.type && entry.category === event.category)) return;
								const beaconEvent = new BeaconEvent(event, this.config);
								return this.sendEvents([beaconEvent]), beaconEvent;
							},
							error: (data, siteId) => {
								if (!data?.stack && !data?.message) return;
								let context = this.context;
								siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
								const { href, filename, stack, message, colno, lineno, errortimestamp, details } = data,
									payload = {
										type: esm_types.Tz.ERROR,
										category: esm_types.fx.RUNTIME,
										context,
										event: {
											href: href || window.location.href,
											filename,
											stack,
											message,
											colno,
											lineno,
											errortimestamp,
											details,
											context: data.context,
										},
									};
								return payload.event.message?.includes('Profile is currently paused') ||
									!payload.event.href ||
									payload.event.href.includes('//localhost') ||
									payload.event.href.includes('//snapui.searchspring.io/')
									? void 0
									: this.track.event(payload);
							},
							shopper: {
								login: (data, siteId) => {
									if (!(0, featureFlags.Q)().cookies()) return;
									if (!data.id)
										return void console.error(
											'tracker.shopper.login event: requires a valid shopper ID parameter. Example: tracker.shopper.login({ id: "1234" })'
										);
									data.id = `${data.id}`;
									let context = this.context;
									siteId && ((context = cjs_default()(context, { context: { website: { trackingCode: siteId } } })), (context.shopperId = data.id));
									if (this.getShopperId() != data.id) {
										cookies.U.set('ssShopperId', data.id, 'Lax', 31536e6, COOKIE_DOMAIN), (this.context.shopperId = data.id), this.sendPreflight();
										const payload = {
											type: esm_types.Tz.LOGIN,
											category: esm_types.fx.PERSONALIZATION,
											context,
											event: { userId: this.context.userId, shopperId: data.id },
										};
										return this.track.event(payload);
									}
								},
							},
							product: {
								view: (data, siteId) => {
									if (!(data?.uid || data?.sku || data?.childUid || data?.childSku))
										return void console.error(
											'track.product.view event: requires a valid uid, sku and/or childUid, childSku. \nExample: track.product.view({ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a" })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const payload = {
											type: esm_types.Tz.PRODUCT,
											category: esm_types.fx.PAGEVIEW,
											context,
											event: {
												uid: data?.uid ? `${data.uid}` : void 0,
												sku: data?.sku ? `${data.sku}` : void 0,
												childUid: data?.childUid ? `${data.childUid}` : void 0,
												childSku: data?.childSku ? `${data.childSku}` : void 0,
											},
										},
										event = this.track.event(payload);
									if (event) {
										const sku = data?.childSku || data?.childUid || data?.sku || data?.uid;
										if (sku) {
											const lastViewedProducts = this.cookies.viewed.get(),
												uniqueCartItems = Array.from(new Set([...lastViewedProducts, sku])).map((item) => `${item}`.trim());
											cookies.U.set('ssViewedProducts', uniqueCartItems.slice(0, 20).join(','), 'Lax', 220752e6, COOKIE_DOMAIN),
												lastViewedProducts.includes(sku) || this.sendPreflight();
										}
										return data?.sku && new PixelEvent({ ...payload, event: { sku: data.sku, id: data.uid } }), event;
									}
								},
								click: (data, siteId) => {
									if (!data?.intellisuggestData || !data?.intellisuggestSignature)
										return void console.error(
											'track.product.click event: object parameter requires a valid intellisuggestData and intellisuggestSignature. \nExample: track.click.product({ intellisuggestData: "eJwrTs4tNM9jYCjKTM8oYXDWdQ3TDTfUDbIwMDVjMARCYwMQSi_KTAEA9IQKWA", intellisuggestSignature: "9e46f9fd3253c267fefc298704e39084a6f8b8e47abefdee57277996b77d8e70" })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const payload = {
										type: esm_types.Tz.CLICK,
										category: esm_types.fx.INTERACTION,
										context,
										event: {
											intellisuggestData: data.intellisuggestData,
											intellisuggestSignature: data.intellisuggestSignature,
											href: data?.href ? `${data.href}` : void 0,
										},
									};
									return new TrackEvent(payload), this.track.event(payload);
								},
							},
							cart: {
								view: (data, siteId) => {
									if (!Array.isArray(data?.items) || !data?.items.length)
										return void console.error(
											'track.view.cart event: parameter must be an array of cart items. \nExample: track.view.cart({ items: [{ id: "123", sku: "product123", childSku: "product123_a", qty: "1", price: "9.99" }] })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const items = data.items.map((item, index) => {
											if (!(item?.qty && item?.price && (item?.uid || item?.sku || item?.childUid || item?.childSku)))
												return void console.error(
													`track.view.cart event: item at index ${index} requires a valid qty, price, and (uid and/or sku and/or childUid and/or childSku.) \nExample: track.view.cart({ items: [{ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a", qty: "1", price: "9.99" }] })`
												);
											const product = { qty: `${item.qty}`, price: `${item.price}` };
											return (
												item?.uid && (product.uid = `${item.uid}`),
												item?.sku && (product.sku = `${item.sku}`),
												item?.childUid && (product.childUid = `${item.childUid}`),
												item?.childSku && (product.childSku = `${item.childSku}`),
												product
											);
										}),
										payload = { type: esm_types.Tz.CART, category: esm_types.fx.CARTVIEW, context, event: { items } },
										event = this.track.event(payload);
									if (event) {
										if (items.length) {
											const products = items.map((item) => item?.childSku || item?.childUid || item?.sku || item?.uid || '').filter((sku) => sku);
											this.cookies.cart.add(products);
										}
										return new PixelEvent(payload), event;
									}
								},
							},
							order: {
								transaction: (data, siteId) => {
									if (!data?.items || !Array.isArray(data.items) || !data.items.length)
										return void console.error(
											'track.order.transaction event: object parameter must contain `items` array of cart items. \nExample: order.transaction({ order: { id: "1001", total: "10.71", transactionTotal: "9.99", city: "Los Angeles", state: "CA", country: "US" }, items: [{ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a", qty: "1", price: "9.99" }] })'
										);
									let context = this.context;
									siteId && (context = cjs_default()(context, { context: { website: { trackingCode: siteId } } }));
									const items = data.items.map((item, index) => {
											if (!(item?.qty && item?.price && (item?.uid || item?.sku || item?.childUid || item?.childSku)))
												return void console.error(
													`track.order.transaction event: object parameter \`items\`: item at index ${index} requires a valid qty, price, and (id or sku and/or childSku.) \nExample: order.view({ items: [{ uid: "123", sku: "product123", childUid: "123_a", childSku: "product123_a", qty: "1", price: "9.99" }] })`
												);
											const product = { qty: `${item.qty}`, price: `${item.price}` };
											return (
												item?.uid && (product.uid = `${item.uid}`),
												item?.sku && (product.sku = `${item.sku}`),
												item?.childUid && (product.childUid = `${item.childUid}`),
												item?.childSku && (product.childSku = `${item.childSku}`),
												product
											);
										}),
										eventPayload = {
											orderId: data?.order?.id ? `${data.order.id}` : void 0,
											total: data?.order?.total ? `${data.order.total}` : void 0,
											transactionTotal: data?.order?.transactionTotal ? `${data.order.transactionTotal}` : void 0,
											city: data?.order?.city ? `${data.order.city}` : void 0,
											state: data?.order?.state ? `${data.order.state}` : void 0,
											country: data?.order?.country ? `${data.order.country}` : void 0,
											items,
										},
										payload = { type: esm_types.Tz.ORDER, category: esm_types.fx.ORDERVIEW, context, event: eventPayload },
										event = this.track.event(payload);
									return event ? (this.cookies.cart.clear(), new PixelEvent(payload), event) : void 0;
								},
							},
						}),
						(this.updateContext = (key, value) => {
							value && (this.context[key] = value);
						}),
						(this.setCurrency = (currency) => {
							currency?.code && (this.context.currency = currency);
						}),
						(this.getUserId = () => {
							let userId;
							try {
								if ((0, featureFlags.Q)().cookies())
									(userId = cookies.U.get('_isuid') || cookies.U.get('ssUserId') || (0, v4.A)()),
										cookies.U.set('ssUserId', userId, 'Lax', 31536e6, COOKIE_DOMAIN),
										cookies.U.set('_isuid', userId, 'Lax', 31536e6, COOKIE_DOMAIN);
								else {
									if (!(0, featureFlags.Q)().storage()) throw 'unsupported features';
									(userId = window.localStorage.getItem('ssUserId') || (0, v4.A)()), window.localStorage.setItem('ssUserId', userId);
								}
							} catch (e) {
								console.error('Failed to persist user id to cookie or local storage:', e);
							}
							return userId;
						}),
						(this.getSessionId = () => {
							let sessionId;
							if ((0, featureFlags.Q)().storage())
								try {
									(sessionId = window.sessionStorage.getItem('ssSessionIdNamespace') || (0, v4.A)()),
										window.sessionStorage.setItem('ssSessionIdNamespace', sessionId),
										(0, featureFlags.Q)().cookies() && cookies.U.set('ssSessionIdNamespace', sessionId, 'Lax', 0, COOKIE_DOMAIN);
								} catch (e) {
									console.error('Failed to persist session id to session storage:', e);
								}
							else
								(0, featureFlags.Q)().cookies() &&
									((sessionId = cookies.U.get('ssSessionIdNamespace')),
									sessionId || ((sessionId = (0, v4.A)()), cookies.U.set('ssSessionIdNamespace', sessionId, 'Lax', 0, COOKIE_DOMAIN)));
							return sessionId;
						}),
						(this.getShopperId = () => {
							const shopperId = cookies.U.get('ssShopperId');
							if (shopperId) return shopperId;
						}),
						(this.sendPreflight = () => {
							const userId = this.getUserId(),
								siteId = this.context.website.trackingCode,
								shopper = this.getShopperId(),
								cart = this.cookies.cart.get(),
								lastViewed = this.cookies.viewed.get();
							if (userId && 'string' == typeof userId && siteId && (shopper || cart.length || lastViewed.length)) {
								const preflightParams = { userId, siteId };
								let queryStringParams = `?userId=${encodeURIComponent(userId)}&siteId=${encodeURIComponent(siteId)}`;
								shopper && ((preflightParams.shopper = shopper), (queryStringParams += `&shopper=${encodeURIComponent(shopper)}`)),
									cart.length &&
										((preflightParams.cart = cart), (queryStringParams += cart.map((item) => `&cart=${encodeURIComponent(item)}`).join(''))),
									lastViewed.length &&
										((preflightParams.lastViewed = lastViewed),
										(queryStringParams += lastViewed.map((item) => `&lastViewed=${encodeURIComponent(item)}`).join('')));
								const endpoint = `${
										this.config.requesters?.personalization?.origin || `https://${siteId}.a.searchspring.io`
									}/api/personalization/preflightCache`,
									xhr = new XMLHttpRequest();
								charsParams(preflightParams) > 1024
									? (xhr.open('POST', endpoint), xhr.setRequestHeader('Content-Type', 'application/json'), xhr.send(JSON.stringify(preflightParams)))
									: (xhr.open('GET', endpoint + queryStringParams), xhr.send());
							}
						}),
						(this.cookies = {
							cart: {
								get: () => {
									const items = cookies.U.get('ssCartProducts');
									return items ? items.split(',') : [];
								},
								set: (items) => {
									if (items.length) {
										const cartItems = items.map((item) => `${item}`.trim()),
											uniqueCartItems = Array.from(new Set(cartItems));
										cookies.U.set('ssCartProducts', uniqueCartItems.join(','), 'Lax', 0, COOKIE_DOMAIN);
										cartItems.filter((item) => items.includes(item)).length !== items.length && this.sendPreflight();
									}
								},
								add: (items) => {
									if (items.length) {
										const currentCartItems = this.cookies.cart.get(),
											itemsToAdd = items.map((item) => `${item}`.trim()),
											uniqueCartItems = Array.from(new Set([...currentCartItems, ...itemsToAdd]));
										cookies.U.set('ssCartProducts', uniqueCartItems.join(','), 'Lax', 0, COOKIE_DOMAIN);
										currentCartItems.filter((item) => itemsToAdd.includes(item)).length !== itemsToAdd.length && this.sendPreflight();
									}
								},
								remove: (items) => {
									if (items.length) {
										const currentCartItems = this.cookies.cart.get(),
											itemsToRemove = items.map((item) => `${item}`.trim()),
											updatedItems = currentCartItems.filter((item) => !itemsToRemove.includes(item));
										cookies.U.set('ssCartProducts', updatedItems.join(','), 'Lax', 0, COOKIE_DOMAIN);
										currentCartItems.length !== updatedItems.length && this.sendPreflight();
									}
								},
								clear: () => {
									this.cookies.cart.get().length && (cookies.U.unset('ssCartProducts', COOKIE_DOMAIN), this.sendPreflight());
								},
							},
							viewed: {
								get: () => {
									const items = cookies.U.get('ssViewedProducts');
									return items ? items.split(',') : [];
								},
							},
						}),
						(this.sendEvents = (eventsToSend) => {
							if (this.mode !== types.$.production) return;
							const savedEvents = JSON.parse(this.localStorage.get('ssBeaconPool') || '[]');
							if (eventsToSend) {
								const eventsClone = [];
								savedEvents.forEach((_event, idx) => {
									eventsClone.push(Object.assign({}, _event)), delete eventsClone[idx].id, delete eventsClone[idx].pid;
								});
								const stringyEventsClone = JSON.stringify(eventsClone);
								eventsToSend.forEach((event, idx) => {
									const newEvent = Object.assign({}, event);
									delete newEvent.id,
										delete newEvent.pid,
										-1 == stringyEventsClone.indexOf(JSON.stringify(newEvent)) && savedEvents.push({ ...eventsToSend[idx] });
								}),
									this.localStorage.set('ssBeaconPool', JSON.stringify(savedEvents));
							}
							clearTimeout(this.isSending),
								(this.isSending = window.setTimeout(() => {
									if (savedEvents.length) {
										const xhr = new XMLHttpRequest(),
											origin = this.config.requesters?.beacon?.origin || 'https://beacon.searchspring.io';
										xhr.open('POST', `${origin}/beacon`),
											xhr.setRequestHeader('Content-Type', 'application/json'),
											xhr.send(JSON.stringify(1 == savedEvents.length ? savedEvents[0] : savedEvents));
									}
									this.localStorage.set('ssBeaconPool', JSON.stringify([]));
								}, 200));
						}),
						'object' != typeof globals || 'string' != typeof globals.siteId)
					)
						throw new Error('Invalid config passed to tracker. The "siteId" attribute must be provided.');
					(this.config = cjs_default()(defaultConfig, config || {})),
						(this.doNotTrack = this.config.doNotTrack || []),
						Object.values(types.$).includes(this.config.mode) && (this.mode = this.config.mode),
						(this.globals = globals),
						(this.localStorage = new StorageStore.t({ type: 'local', key: `ss-${this.config.id}` })),
						this.localStorage.set('siteId', this.globals.siteId),
						(this.context = {
							userId: this.getUserId() || '',
							sessionId: this.getSessionId(),
							shopperId: this.getShopperId(),
							pageLoadId: (0, v4.A)(),
							website: { trackingCode: this.globals.siteId },
						}),
						this.globals.currency?.code && (this.context.currency = this.globals.currency),
						window.searchspring?.tracker ||
							((window.searchspring = window.searchspring || {}), (window.searchspring.tracker = this), (window.searchspring.version = version.r)),
						setTimeout(() => {
							this.targeters.push(
								new DomTargeter.b([{ selector: 'script[type^="searchspring/track/"]', emptyTarget: !1 }], (target, elem) => {
									const { item, items, siteId, shopper, order, type, currency } = (0, getContext.S)(
										['item', 'items', 'siteId', 'shopper', 'order', 'type', 'currency'],
										elem
									);
									switch ((this.setCurrency(currency), type)) {
										case 'searchspring/track/shopper/login':
											this.track.shopper.login(shopper, siteId);
											break;
										case 'searchspring/track/product/view':
											this.track.product.view(item, siteId);
											break;
										case 'searchspring/track/cart/view':
											this.track.cart.view({ items }, siteId);
											break;
										case 'searchspring/track/order/transaction':
											this.track.order.transaction({ order, items }, siteId);
											break;
										default:
											console.error(`event '${type}' is not supported`);
									}
								})
							);
						}),
						this.sendEvents();
				}
				getGlobals() {
					return JSON.parse(JSON.stringify(this.globals));
				}
				getContext() {
					return JSON.parse(JSON.stringify(this.context));
				}
				retarget() {
					this.targeters.forEach((target) => {
						target.retarget();
					});
				}
			}
		},
		'../snap-tracker/dist/esm/types.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var BeaconType, BeaconCategory, ProfilePlacement;
			__webpack_require__.d(__webpack_exports__, { Tz: () => BeaconType, VQ: () => ProfilePlacement, fx: () => BeaconCategory }),
				(function (BeaconType) {
					(BeaconType.PRODUCT = 'product'),
						(BeaconType.CART = 'cart'),
						(BeaconType.ORDER = 'transaction'),
						(BeaconType.LOGIN = 'login'),
						(BeaconType.CLICK = 'click'),
						(BeaconType.ERROR = 'error'),
						(BeaconType.CUSTOM = 'custom'),
						(BeaconType.PROFILE_RENDER = 'profile.render'),
						(BeaconType.PROFILE_IMPRESSION = 'profile.impression'),
						(BeaconType.PROFILE_CLICK = 'profile.click'),
						(BeaconType.PROFILE_ADDBUNDLE = 'profile.addBundle'),
						(BeaconType.PROFILE_PRODUCT_RENDER = 'profile.product.render'),
						(BeaconType.PROFILE_PRODUCT_IMPRESSION = 'profile.product.impression'),
						(BeaconType.PROFILE_PRODUCT_CLICK = 'profile.product.click'),
						(BeaconType.PROFILE_PRODUCT_ADDEDTOBUNDLE = 'profile.product.addedToBundle'),
						(BeaconType.PROFILE_PRODUCT_REMOVEDFROMBUNDLE = 'profile.product.removedFromBundle');
				})(BeaconType || (BeaconType = {})),
				(function (BeaconCategory) {
					(BeaconCategory.PAGEVIEW = 'searchspring.page.view'),
						(BeaconCategory.CARTVIEW = 'searchspring.shop.cart'),
						(BeaconCategory.ORDERVIEW = 'searchspring.shop.transaction'),
						(BeaconCategory.PERSONALIZATION = 'searchspring.personalization'),
						(BeaconCategory.RECOMMENDATIONS = 'searchspring.recommendations.user-interactions'),
						(BeaconCategory.INTERACTION = 'searchspring.user-interactions'),
						(BeaconCategory.RUNTIME = 'searchspring.js.runtime'),
						(BeaconCategory.CUSTOM = 'custom');
				})(BeaconCategory || (BeaconCategory = {})),
				(function (ProfilePlacement) {
					(ProfilePlacement.BASKETPAGE = 'basket-page'),
						(ProfilePlacement.CONFIRMATIONPAGE = 'confirmation-page'),
						(ProfilePlacement.PRODUCTPAGE = 'product-page'),
						(ProfilePlacement.NORESULTSPAGE = 'no-results-page'),
						(ProfilePlacement.HOMEPAGE = 'home-page'),
						(ProfilePlacement.OTHER = 'other');
				})(ProfilePlacement || (ProfilePlacement = {}));
		},
		'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { E: () => UrlTranslator });
			var RangeValueProperties,
				ParamLocationType,
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			!(function (RangeValueProperties) {
				(RangeValueProperties.LOW = 'low'), (RangeValueProperties.HIGH = 'high');
			})(RangeValueProperties || (RangeValueProperties = {})),
				(function (ParamLocationType) {
					(ParamLocationType.hash = 'hash'), (ParamLocationType.query = 'query');
				})(ParamLocationType || (ParamLocationType = {}));
			const defaultConfig = {
					urlRoot: '',
					settings: { corePrefix: '', customType: ParamLocationType.query, serializeUrlRoot: !0 },
					parameters: {
						core: {
							query: { name: 'q', type: ParamLocationType.query },
							oq: { name: 'oq', type: ParamLocationType.query },
							rq: { name: 'rq', type: ParamLocationType.query },
							tag: { name: 'tag', type: ParamLocationType.query },
							page: { name: 'page', type: ParamLocationType.query },
							pageSize: { name: 'pageSize', type: ParamLocationType.hash },
							sort: { name: 'sort', type: ParamLocationType.hash },
							filter: { name: 'filter', type: ParamLocationType.hash },
							fallbackQuery: { name: 'fallbackQuery', type: ParamLocationType.query },
						},
						custom: {},
					},
				},
				CORE_FIELDS = ['query', 'oq', 'fallbackQuery', 'rq', 'tag', 'page', 'pageSize', 'sort', 'filter'];
			class UrlTranslator {
				constructor(config) {
					(this.reverseMapping = {}),
						(this.config = cjs_default()(defaultConfig, config || {})),
						Object.keys(this.config.parameters.core).forEach((param) => {
							const coreParam = this.config.parameters.core[param];
							this.config.settings.corePrefix && (coreParam.name = this.config.settings.corePrefix + coreParam.name);
							const paramType = this.config.settings?.coreType;
							paramType &&
								Object.values(ParamLocationType).includes(paramType) &&
								(config?.parameters?.core && config.parameters?.core[param]?.type
									? (coreParam.type = config.parameters?.core[param]?.type)
									: (coreParam.type = paramType)),
								(this.reverseMapping[coreParam.name] = param);
						});
					const implicit = this.config.settings?.customType;
					implicit && !Object.values(ParamLocationType).includes(implicit) && (this.config.settings.customType = ParamLocationType.hash);
				}
				bindExternalEvents(update) {
					window.addEventListener('popstate', update);
				}
				getCurrentUrl() {
					return window.location.search + window.location.hash;
				}
				getConfig() {
					return cjs_default()({}, this.config);
				}
				deserialize(url) {
					const params = this.parseUrlParams(url);
					return this.paramsToState(params);
				}
				parseUrlParams(url) {
					const queryString = (url.includes('?') && (url.split('?').pop() || '').split('#').shift()) || '',
						hashString = (url.includes('#') && url.substring(url.indexOf('#') + 1)) || '';
					return [...this.parseHashString(hashString), ...this.parseQueryString(queryString)];
				}
				parseQueryString(queryString) {
					return (queryString.split('?').pop() || '')
						.split('&')
						.filter((v) => v)
						.map((kvPair) => {
							const [key, value] = kvPair.split('=').map((v) => decodeURIComponent(v.replace(/\+/g, ' ')));
							return { key: key.split('.'), value, type: ParamLocationType.query };
						})
						.filter((param) => {
							const isCoreField = this.reverseMapping[param.key[0]];
							return !isCoreField || (isCoreField && param.value);
						});
				}
				parseHashString(hashString) {
					const params = [];
					return (
						(hashString.split('#').join('/') || '')
							.split('/')
							.filter((v) => v)
							.map((hashEntries) =>
								hashEntries.split(':').map((v) =>
									(function decodeHashComponent(string) {
										'string' == typeof string &&
											((string = (string = string.replace(/%2425/g, '$$25')).replace(/\$25/g, '%')), (string = decodeURIComponent(string)));
										return string;
									})(v)
								)
							)
							.filter((param) => {
								const [key, value] = param,
									isCoreField = this.reverseMapping[key];
								return !isCoreField || (isCoreField && value);
							})
							.forEach((decodedHashEntries) => {
								if (1 == decodedHashEntries.length) params.push({ key: [decodedHashEntries[0]], value: '', type: ParamLocationType.hash });
								else if (decodedHashEntries.length && decodedHashEntries.length >= 2) {
									const isCoreField = this.reverseMapping[decodedHashEntries[0]];
									if (isCoreField && 'filter' == isCoreField && 4 == decodedHashEntries.length) {
										const [path0, path1, low, high] = decodedHashEntries;
										params.push({ key: [path0, path1, 'low'], value: low, type: ParamLocationType.hash }),
											params.push({ key: [path0, path1, 'high'], value: high, type: ParamLocationType.hash });
									} else {
										const [value, ...keys] = decodedHashEntries.reverse();
										params.push({ key: keys.reverse(), value, type: ParamLocationType.hash });
									}
								}
							}),
						params
					);
				}
				paramsToState(params) {
					const coreOtherParams = [],
						coreFilterParams = [],
						coreSortParams = [],
						otherParams = [];
					return (
						params?.forEach((param) => {
							const coreStateKey = this.reverseMapping[param.key[0]],
								coreConfig = this.config.parameters.core[coreStateKey],
								customStateKey = this.config.parameters.custom[param.key[0]];
							if (coreStateKey)
								switch (coreStateKey) {
									case 'filter':
										coreConfig.type == param.type && coreFilterParams.push(param);
										break;
									case 'sort':
										coreConfig.type == param.type && coreSortParams.push(param);
										break;
									default:
										coreConfig.type == param.type && coreOtherParams.push(param);
								}
							else
								CORE_FIELDS.includes(param.key[0]) ||
									(customStateKey || (this.config.parameters.custom[param.key[0]] = { type: param.type || this.config.settings.customType }),
									otherParams.push(param));
						}),
						{
							...this.parseCoreOther(coreOtherParams),
							...this.parseCoreFilter(coreFilterParams),
							...this.parseCoreSort(coreSortParams),
							...this.parseOther(otherParams),
						}
					);
				}
				parseCoreOther(otherParams) {
					const state = {},
						numberTypeParams = ['page', 'pageSize'];
					return otherParams
						? (otherParams.forEach((param) => {
								const coreKey = this.reverseMapping[param.key[0]];
								if (numberTypeParams.includes(coreKey)) {
									const numValue = Number(param.value);
									(('page' == coreKey && numValue > 1) || 'page' != coreKey) && (state[coreKey] = numValue);
								} else state[coreKey] = param.value;
						  }),
						  state)
						: {};
				}
				parseCoreFilter(filterParams) {
					const valueFilterParams = filterParams.filter((p) => 2 == p.key.length),
						rangeFilterParams = filterParams.filter((p) => 3 == p.key.length),
						valueFilters = valueFilterParams.reduce((state, param) => {
							const currentValue = (state.filter || {})[param.key[1]] || [];
							return { filter: { ...state.filter, [param.key[1]]: [...(Array.isArray(currentValue) ? currentValue : [currentValue]), param.value] } };
						}, {}),
						rangeFilters = rangeFilterParams.reduce((state, param, index) => {
							let newState = state;
							const nextRangeParam = rangeFilterParams[index + 1];
							if (
								index % 2 == 0 &&
								nextRangeParam &&
								nextRangeParam.key[1] == param.key[1] &&
								param.key[2] == RangeValueProperties.LOW &&
								nextRangeParam.key[2] == RangeValueProperties.HIGH
							) {
								const currentValue = (state.filter || {})[param.key[1]] || [];
								newState = {
									filter: {
										...state.filter,
										[param.key[1]]: [
											...(Array.isArray(currentValue) ? currentValue : [currentValue]),
											{
												[RangeValueProperties.LOW]: isNaN(+param.value) ? null : +param.value,
												[RangeValueProperties.HIGH]: isNaN(+nextRangeParam.value) ? null : +nextRangeParam.value,
											},
										],
									},
								};
							}
							return newState;
						}, {});
					return { ...(valueFilters.filter || rangeFilters.filter ? { filter: { ...valueFilters.filter, ...rangeFilters.filter } } : {}) };
				}
				parseCoreSort(sortParams) {
					return sortParams.length ? { sort: sortParams.map((param) => ({ field: param.key[1], direction: param.value })) } : {};
				}
				parseOther(otherParams) {
					const state = {};
					return (
						otherParams.forEach((param) => {
							let node = state;
							param.key.forEach((key, i) => {
								i == param.key.length - 1
									? ((node[key] = node[key] || []), param.value && node[key].push(param.value))
									: ((node[key] = node[key] || {}), (node = node[key]));
							});
						}),
						state
					);
				}
				serialize(state) {
					const root = this.config.urlRoot.includes('?')
							? this.config.urlRoot.split('?')[0]
							: this.config.urlRoot.includes('#')
							? this.config.urlRoot.split('#')[0]
							: this.config.urlRoot || window.location.pathname,
						params = this.stateToParams(state),
						queryParams = params.filter((p) => p.type == ParamLocationType.query),
						hashParams = params.filter((p) => p.type == ParamLocationType.hash);
					return `${root}${
						queryParams.length
							? '?' +
							  queryParams
									.map((param) => encodeURIComponent(param.key.join('.')) + (param.value ? '=' + encodeURIComponent(param.value) : ''))
									.join('&')
							: ''
					}${
						hashParams.length
							? '#/' +
							  hashParams
									.map(
										(param) => param.key.map((k) => encodeHashComponent(k)).join(':') + (param.value ? ':' + encodeHashComponent(param.value) : '')
									)
									.join('/')
							: ''
					}`;
				}
				stateToParams(state) {
					return [
						...this.encodeOther(state),
						...this.encodeCoreOther(state, ['filter', 'sort']),
						...this.encodeCoreFilters(state),
						...this.encodeCoreSorts(state),
					];
				}
				encodeCoreFilters(state) {
					const filterConfig = this.config.parameters.core.filter;
					return state.filter && filterConfig
						? Object.keys(state.filter).flatMap((key) => {
								if (!state.filter || !state.filter[key]) return [];
								const filter = state.filter[key];
								return (filter instanceof Array ? filter : [filter]).flatMap((value) => {
									if ('string' == typeof value || 'number' == typeof value || 'boolean' == typeof value)
										return [{ key: [filterConfig.name, key], value: '' + value, type: filterConfig.type }];
									if ('object' == typeof value && void 0 !== value[RangeValueProperties.LOW] && void 0 !== value[RangeValueProperties.HIGH]) {
										if (filterConfig.type == ParamLocationType.query)
											return [
												{
													key: [filterConfig.name, key, RangeValueProperties.LOW],
													value: '' + (value[RangeValueProperties.LOW] ?? '*'),
													type: filterConfig.type,
												},
												{
													key: [filterConfig.name, key, RangeValueProperties.HIGH],
													value: '' + (value[RangeValueProperties.HIGH] ?? '*'),
													type: filterConfig.type,
												},
											];
										if (filterConfig.type == ParamLocationType.hash)
											return [
												{
													key: [filterConfig.name, key, '' + (value[RangeValueProperties.LOW] ?? '*')],
													value: '' + (value[RangeValueProperties.HIGH] ?? '*'),
													type: filterConfig.type,
												},
											];
									}
									return [];
								});
						  })
						: [];
				}
				encodeCoreSorts(state) {
					const sortConfig = this.config.parameters.core.sort;
					return state.sort && sortConfig
						? (state.sort instanceof Array ? state.sort : [state.sort]).map((sort) => ({
								key: [sortConfig.name, sort.field],
								value: sort.direction,
								type: sortConfig.type,
						  }))
						: [];
				}
				encodeCoreOther(state, except) {
					const params = [];
					return (
						Object.keys(state)
							.sort(function (a, b) {
								return CORE_FIELDS.indexOf(a) - CORE_FIELDS.indexOf(b);
							})
							.map((param) => {
								if (CORE_FIELDS.includes(param) && !except.includes(param)) {
									const paramConfig = this.config.parameters.core[param];
									('page' == param && 1 == state[param]) ||
										params.push({ key: [paramConfig.name], value: '' + state[param], type: paramConfig.type });
								}
							}),
						params
					);
				}
				encodeOther(state) {
					let params = [];
					const addRecursive = (obj, currentPath) => {
						Object.keys(obj).forEach((key) => {
							if (0 == currentPath.length && CORE_FIELDS.includes(key)) return;
							const value = obj[key];
							if (value instanceof Array) {
								const customConfig = this.config.parameters.custom[currentPath[0] || key],
									type = customConfig?.type || this.config.settings.customType;
								params = value.length
									? params.concat(value.map((v) => ({ key: [...currentPath, key], value: v, type })))
									: params.concat({ key: [...currentPath, key], value: '', type });
							} else if ('object' == typeof value && Object.keys(value || {}).length) addRecursive(value, [...currentPath, key]);
							else {
								const customConfig = this.config.parameters.custom[currentPath[0] || key],
									type = customConfig?.type || this.config.settings.customType,
									stringValue = 'object' == typeof value ? void 0 : value;
								params = params.concat([{ key: [...currentPath, key], value: stringValue, type }]);
							}
						});
					};
					return addRecursive(state, []), params;
				}
				go(url, config) {
					url != this.getCurrentUrl() && ('replace' == config?.history ? history.replaceState(null, '', url) : history.pushState(null, '', url));
				}
			}
			function encodeHashComponent(string) {
				return 'string' == typeof string && (string = (string = encodeURIComponent(string)).replace(/%/g, '$$25')), string;
			}
		},
		'../snap-url-manager/dist/esm/UrlManager/UrlManager.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { V: () => UrlManager });
			var seamless_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'../../node_modules/seamless-immutable/seamless-immutable.development.js'
				),
				seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_0__);
			class WatcherPool {
				constructor() {
					this.callbacks = [];
				}
				subscribe(cb) {
					return this.callbacks.push(cb), () => (this.callbacks = this.callbacks.filter((_cb) => _cb != cb));
				}
				notify() {
					this.callbacks.forEach((cb) => cb());
				}
			}
			class UrlManager {
				constructor(translator, linker, globalState, localState, watcherPool, omissions = [], detached) {
					(this.linker = linker),
						(this.omissions = omissions),
						(this.detached = detached),
						(this.urlState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()({})),
						(this.globalState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()({})),
						(this.localState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()({})),
						(this.mergedState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()({})),
						(this.localState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()(localState || {})),
						(this.globalState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()(globalState || {})),
						(this.translator = translator);
					const translatorConfig = this.getTranslatorConfig();
					translatorConfig.urlRoot &&
						translatorConfig.settings?.serializeUrlRoot &&
						(this.globalState = this.globalState.merge(
							seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()(this.translator.deserialize(translatorConfig.urlRoot)),
							{ deep: !0, merger: arrayConcatMerger }
						)),
						watcherPool
							? (this.watcherPool = watcherPool)
							: ((this.watcherPool = new WatcherPool()),
							  this.translator.bindExternalEvents instanceof Function && this.translator.bindExternalEvents(() => this.watcherPool.notify())),
						this.subscribe(() => {
							this.refresh();
						}),
						this.refresh();
				}
				without(obj, fullPath, values) {
					const path = fullPath.slice(0, -1),
						lastKey = fullPath[fullPath.length - 1];
					return path.length
						? obj.getIn(path)
							? obj.updateIn(path, (node) => updateNode(lastKey, node))
							: obj
						: values?.length
						? updateNode(lastKey, obj)
						: obj.without(lastKey);
					function updateNode(key, node) {
						return void 0 === node[lastKey]
							? node
							: node[lastKey] instanceof Array
							? values && values.length
								? node.set(
										lastKey,
										node[lastKey].filter((value) => !values.some((removeValue) => compareObjects(value, removeValue)))
								  )
								: node.without(lastKey)
							: 'object' == typeof node
							? node.without(lastKey)
							: node;
					}
				}
				getTranslatorUrl() {
					return this.detached ? this.detached.url : this.translator.getCurrentUrl();
				}
				refresh() {
					(this.prevState = this.mergedState),
						(this.urlState = this.omissions.reduce(
							(state, om) => this.without(state, om.path, om.values),
							seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()(this.translator.deserialize(this.getTranslatorUrl()))
						)),
						(this.mergedState = this.globalState.merge(this.urlState, { deep: !0, merger: arrayConcatMerger })),
						(this.mergedState = this.mergedState.merge(this.localState, { deep: !0, merger: arrayConcatMerger }));
				}
				get state() {
					return this.mergedState;
				}
				unpackPathAndState(stateOrPath, _state) {
					return {
						path: stateOrPath instanceof Array ? stateOrPath : 'string' == typeof stateOrPath ? stateOrPath.split('.') : [],
						state: stateOrPath instanceof Array || 'object' != typeof stateOrPath ? (void 0 === _state ? {} : _state) : stateOrPath,
					};
				}
				set(...args) {
					const { path, state } = this.unpackPathAndState(args[0], args[1]),
						newState = path.length ? this.localState.setIn(path, removeArrayDuplicates(state)) : removeArrayDuplicates(state),
						omissions = removeArrayDuplicates(
							this.omissions.concat(path.length ? { path } : Object.keys(this.urlState).map((key) => ({ path: [key] })))
						);
					return new UrlManager(this.translator, this.linker, this.globalState, newState, this.watcherPool, omissions, this.detached);
				}
				merge(...args) {
					const { path, state } = this.unpackPathAndState(args[0], args[1]),
						newState = path.length
							? this.localState.updateIn(path, (oldState) => {
									if (oldState instanceof Array) {
										const newValues = Array.isArray(state) ? state : [state];
										return removeArrayDuplicates(oldState.concat(newValues));
									}
									if ('object' == typeof oldState)
										return Array.isArray(state)
											? state.length
												? removeArrayDuplicates([oldState].concat(state))
												: oldState
											: oldState.merge(state, { deep: !0, merger: arrayConcatMerger });
									if (void 0 !== oldState) {
										const newValues = (Array.isArray(state) ? state : [state]).filter((value) => !compareObjects(value, oldState));
										return newValues.length ? removeArrayDuplicates([oldState].concat(newValues)) : oldState;
									}
									if (void 0 === oldState) {
										if (this.urlState.getIn(path) instanceof Array && !Array.isArray(state)) return [state];
									}
									return state;
							  })
							: this.localState.merge(state, { deep: !0, merger: arrayConcatMerger });
					return new UrlManager(this.translator, this.linker, this.globalState, newState, this.watcherPool, this.omissions, this.detached);
				}
				remove(_path, values) {
					const { path } = this.unpackPathAndState(_path, {});
					values = void 0 !== values ? (values instanceof Array ? values : [values]) : [];
					const without = this.without(this.localState, path, values),
						omissions = removeArrayDuplicates(this.omissions.concat({ path, values }));
					return new UrlManager(this.translator, this.linker, this.globalState, without, this.watcherPool, omissions, this.detached);
				}
				reset() {
					return (
						this.detached && (this.detached.url = ''),
						new UrlManager(
							this.translator,
							this.linker,
							this.globalState,
							{},
							this.watcherPool,
							Object.keys(this.urlState).map((k) => ({ path: [k] })),
							this.detached
						)
					);
				}
				withConfig(config) {
					return (
						config instanceof Function && (config = config(this.translator.getConfig())),
						new UrlManager(
							new (Object.getPrototypeOf(this.translator).constructor)(config),
							this.linker,
							this.globalState,
							this.localState,
							this.watcherPool,
							this.omissions,
							this.detached
						)
					);
				}
				withGlobals(globals) {
					return (
						(this.globalState = this.globalState.merge(seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()(globals), {
							deep: !0,
							merger: arrayConcatMerger,
						})),
						new UrlManager(this.translator, this.linker, this.globalState, this.localState, this.watcherPool, this.omissions, this.detached)
					);
				}
				getTranslatorConfig() {
					return this.translator.getConfig();
				}
				get href() {
					return this.translator.serialize(this.state);
				}
				go(config) {
					this.detached ? (this.detached.url = this.href) : this.translator.go(this.href, config), this.watcherPool.notify();
				}
				detach(reset = !1) {
					return new UrlManager(this.translator, this.linker, this.globalState, this.localState, new WatcherPool(), this.omissions, {
						url: reset ? '' : this.getTranslatorUrl(),
					});
				}
				get link() {
					return this.linker ? this.linker(this) : {};
				}
				subscribe(cb) {
					return this.watcherPool.subscribe(() => {
						const prevState = this.prevState,
							state = this.mergedState;
						cb(prevState, state);
					});
				}
			}
			function removeArrayDuplicates(array) {
				return Array.isArray(array) && array.length
					? array.reduce((accu, item) => (accu.some((keep) => compareObjects(keep, item)) || accu.push(item), accu), [array[0]])
					: array;
			}
			function arrayConcatMerger(current, other) {
				if (current instanceof Array && other instanceof Array) return removeArrayDuplicates([...current, ...other]);
			}
			function compareObjects(obj1, obj2) {
				if (!obj1 && !obj2) return !0;
				if ((!obj1 && obj2) || (obj1 && !obj2)) return !1;
				const typeA = typeof obj1;
				if (typeA !== typeof obj2) return !1;
				if (['string', 'number', 'boolean', 'undefined'].includes(typeA)) return obj1 === obj2;
				const isArrayA = Array.isArray(obj1);
				if (isArrayA !== Array.isArray(obj2)) return !1;
				if (!isArrayA) {
					if (!compareObjects(Object.keys(obj1).sort(), Object.keys(obj2).sort())) return !1;
					let result = !0;
					return (
						Object.keys(obj1).forEach((key) => {
							compareObjects(obj1[key], obj2[key]) || (result = !1);
						}),
						result
					);
				}
				if (obj1.length != obj2.length) return !1;
				for (let i = 0; i < obj1.length; i++) if (!compareObjects(obj1[i], obj2[i])) return !1;
				return !0;
			}
		},
		'../snap-url-manager/dist/esm/linkers/react/react.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function reactLinker(urlManager) {
				return {
					href: urlManager.href,
					onClick: (ev) => {
						urlManager?.detached || ev?.preventDefault(), urlManager.go();
					},
				};
			}
			__webpack_require__.d(__webpack_exports__, { X: () => reactLinker });
		},
		'../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./components/.storybook/styles.scss': (
			module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'../../node_modules/css-loader/dist/runtime/sourceMaps.js'
				),
				_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
				),
				_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/css-loader/dist/runtime/api.js'
				),
				___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
					_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
				);
			___CSS_LOADER_EXPORT___.push([
				module.id,
				'.docblock-argstable-head tr th:nth-child(1),.docblock-argstable-body tr td:nth-child(1){width:20% !important}.docblock-argstable-head tr th:nth-child(2),.docblock-argstable-body tr td:nth-child(2){width:60% !important}.docblock-argstable-head tr th:nth-child(3),.docblock-argstable-body tr td:nth-child(3){width:20% !important}.docblock-argstable-head tr th:nth-child(4),.docblock-argstable-body tr td:nth-child(4){display:none !important;width:0 !important}a{color:inherit;text-decoration:none}body.sb-show-main{overflow:auto !important}#storybook-docs .code-toolbar{position:relative;border:1px solid rgba(0,0,0,.1);border-radius:4px;box-shadow:rgba(0,0,0,.1) 0px 1px 3px 0px;margin:0 0 20px 0;white-space:pre-wrap;color:inherit;font-size:13px;line-height:19px}#storybook-docs .code-toolbar pre{padding:20px}#storybook-docs .code-toolbar .toolbar{position:absolute;bottom:0px;right:0px;max-width:100%;display:flex;background:#fff;z-index:1}#storybook-docs .code-toolbar .toolbar .toolbar-item button{margin:0px 0px 0px -1px;border-width:1px 0px 0px 1px;border-style:solid none none solid;border-right-color:initial;border-bottom-color:initial;border-image:initial;padding:4px 10px;cursor:pointer;display:flex;-webkit-box-align:center;align-items:center;color:#333;background:#fff;font-size:10px;line-height:16px;font-family:"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;border-top-color:rgba(0,0,0,.1);border-left-color:rgba(0,0,0,.1);border-radius:4px 0px 0px}#storybook-docs .code-toolbar .toolbar .toolbar-item button span{font-size:10px}',
				'',
				{
					version: 3,
					sources: ['webpack://./components/.storybook/styles.scss'],
					names: [],
					mappings:
						'AAGA,wFAEI,oBAAA,CAEJ,wFAEI,oBAAA,CAEJ,wFAEI,oBAAA,CAEJ,wFAEI,uBAAA,CACA,kBAAA,CAGJ,EAAA,aAAA,CAAA,oBAAA,CAGA,kBACI,wBAAA,CAKH,8BACC,iBAAA,CACA,+BAAA,CACA,iBAAA,CACA,yCAAA,CACA,iBAAA,CACA,oBAAA,CACA,aAAA,CACA,cAAA,CACA,gBAAA,CAEA,kCACC,YAAA,CAGD,uCACC,iBAAA,CACA,UAAA,CACA,SAAA,CACA,cAAA,CACA,YAAA,CACA,eAAA,CACA,SAAA,CAGC,4DACC,uBAAA,CACA,4BAAA,CACA,kCAAA,CACA,0BAAA,CACA,2BAAA,CACA,oBAAA,CACA,gBAAA,CACA,cAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,UAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,qJAAA,CACA,eAAA,CACA,+BAAA,CACA,gCAAA,CACA,yBAAA,CAEA,iEACC,cAAA',
					sourcesContent: [
						'/* custom styling */\n\n/* hides \'control\' column in ArgsTable on docs tab  */\n.docblock-argstable-head tr th:nth-child(1),\n.docblock-argstable-body tr td:nth-child(1) {\n    width: 20%!important;\n}\n.docblock-argstable-head tr th:nth-child(2),\n.docblock-argstable-body tr td:nth-child(2) {\n    width: 60%!important;\n}\n.docblock-argstable-head tr th:nth-child(3),\n.docblock-argstable-body tr td:nth-child(3) {\n    width: 20%!important;\n}\n.docblock-argstable-head tr th:nth-child(4),\n.docblock-argstable-body tr td:nth-child(4) {\n    display: none!important;\n    width: 0!important;\n}\n\na { color: inherit; text-decoration: none; }\n\n/* Slideout component adds overflow to body and breaks storybook scrolling */\nbody.sb-show-main {\n    overflow: auto!important;\n}\n\n/* Prism code block syntax highlighting */\n#storybook-docs {\n\t.code-toolbar {\n\t\tposition: relative;\n\t\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 4px;\n\t\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;\n\t\tmargin: 0 0 20px 0;\n\t\twhite-space: pre-wrap;\n\t\tcolor: inherit;\n\t\tfont-size: 13px;\n\t\tline-height: 19px;\n\n\t\tpre {\n\t\t\tpadding: 20px;\n\t\t}\n\n\t\t.toolbar {\n\t\t\tposition: absolute;\n\t\t\tbottom: 0px;\n\t\t\tright: 0px;\n\t\t\tmax-width: 100%;\n\t\t\tdisplay: flex;\n\t\t\tbackground: rgb(255, 255, 255);\n\t\t\tz-index: 1;\n\n\t\t\t.toolbar-item {\n\t\t\t\tbutton {\n\t\t\t\t\tmargin: 0px 0px 0px -1px;\n\t\t\t\t\tborder-width: 1px 0px 0px 1px;\n\t\t\t\t\tborder-style: solid none none solid;\n\t\t\t\t\tborder-right-color: initial;\n\t\t\t\t\tborder-bottom-color: initial;\n\t\t\t\t\tborder-image: initial;\n\t\t\t\t\tpadding: 4px 10px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t-webkit-box-align: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tcolor: rgb(51, 51, 51);\n\t\t\t\t\tbackground: rgb(255, 255, 255);\n\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\tline-height: 16px;\n\t\t\t\t\tfont-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tborder-top-color: rgba(0, 0, 0, 0.1);\n\t\t\t\t\tborder-left-color: rgba(0, 0, 0, 0.1);\n\t\t\t\t\tborder-radius: 4px 0px 0px;\n\n\t\t\t\t\tspan {\n\t\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\t\n}',
					],
					sourceRoot: '',
				},
			]);
			const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
		},
		'./components/src lazy recursive ^\\.\\/.*$ include: (?:\\/components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = {
					'./documentation/About/About.stories.mdx': ['./components/src/documentation/About/About.stories.mdx', 1874, 6384, 3433],
					'./documentation/Theme/Theme.stories.mdx': ['./components/src/documentation/Theme/Theme.stories.mdx', 1874, 6384, 7241],
					'./documentation/Usage/Usage.stories.mdx': ['./components/src/documentation/Usage/Usage.stories.mdx', 1874, 6384, 2165],
				};
				function webpackAsyncContext(req) {
					if (!__webpack_require__.o(map, req))
						return Promise.resolve().then(() => {
							var e = new Error("Cannot find module '" + req + "'");
							throw ((e.code = 'MODULE_NOT_FOUND'), e);
						});
					var ids = map[req],
						id = ids[0];
					return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => __webpack_require__(id));
				}
				(webpackAsyncContext.keys = () => Object.keys(map)),
					(webpackAsyncContext.id =
						'./components/src lazy recursive ^\\.\\/.*$ include: (?:\\/components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$'),
					(module.exports = webpackAsyncContext);
			},
		'./components/src lazy recursive ^\\.\\/.*$ include: (?:\\/components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = {
					'./components/Atoms/BadgeImage/BadgeImage.stories': [
						'./components/src/components/Atoms/BadgeImage/BadgeImage.stories.tsx',
						1874,
						6384,
						8536,
					],
					'./components/Atoms/BadgeImage/BadgeImage.stories.tsx': [
						'./components/src/components/Atoms/BadgeImage/BadgeImage.stories.tsx',
						1874,
						6384,
						8536,
					],
					'./components/Atoms/BadgePill/BadgePill.stories': ['./components/src/components/Atoms/BadgePill/BadgePill.stories.tsx', 1874, 6384, 7698],
					'./components/Atoms/BadgePill/BadgePill.stories.tsx': [
						'./components/src/components/Atoms/BadgePill/BadgePill.stories.tsx',
						1874,
						6384,
						7698,
					],
					'./components/Atoms/BadgeRectangle/BadgeRectangle.stories': [
						'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx',
						1874,
						6384,
						9440,
					],
					'./components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx': [
						'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx',
						1874,
						6384,
						9440,
					],
					'./components/Atoms/BadgeText/BadgeText.stories': ['./components/src/components/Atoms/BadgeText/BadgeText.stories.tsx', 1874, 6384, 5114],
					'./components/Atoms/BadgeText/BadgeText.stories.tsx': [
						'./components/src/components/Atoms/BadgeText/BadgeText.stories.tsx',
						1874,
						6384,
						5114,
					],
					'./components/Atoms/Breadcrumbs/Breadcrumbs.stories': [
						'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx',
						1874,
						6384,
						8826,
					],
					'./components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx': [
						'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx',
						1874,
						6384,
						8826,
					],
					'./components/Atoms/Button/Button.stories': ['./components/src/components/Atoms/Button/Button.stories.tsx', 1874, 6384, 8261, 1840],
					'./components/Atoms/Button/Button.stories.tsx': ['./components/src/components/Atoms/Button/Button.stories.tsx', 1874, 6384, 8261, 1840],
					'./components/Atoms/Dropdown/Dropdown.stories': ['./components/src/components/Atoms/Dropdown/Dropdown.stories.tsx', 1874, 6384, 4578],
					'./components/Atoms/Dropdown/Dropdown.stories.tsx': ['./components/src/components/Atoms/Dropdown/Dropdown.stories.tsx', 1874, 6384, 4578],
					'./components/Atoms/FormattedNumber/FormattedNumber.stories': [
						'./components/src/components/Atoms/FormattedNumber/FormattedNumber.stories.tsx',
						1874,
						6384,
						8422,
					],
					'./components/Atoms/FormattedNumber/FormattedNumber.stories.tsx': [
						'./components/src/components/Atoms/FormattedNumber/FormattedNumber.stories.tsx',
						1874,
						6384,
						8422,
					],
					'./components/Atoms/Icon/Icon.stories': ['./components/src/components/Atoms/Icon/Icon.stories.tsx', 1874, 6384, 8261, 6634],
					'./components/Atoms/Icon/Icon.stories.tsx': ['./components/src/components/Atoms/Icon/Icon.stories.tsx', 1874, 6384, 8261, 6634],
					'./components/Atoms/Image/Image.stories': ['./components/src/components/Atoms/Image/Image.stories.tsx', 1874, 6384, 5126],
					'./components/Atoms/Image/Image.stories.tsx': ['./components/src/components/Atoms/Image/Image.stories.tsx', 1874, 6384, 5126],
					'./components/Atoms/Loading/LoadingBar.stories': ['./components/src/components/Atoms/Loading/LoadingBar.stories.tsx', 1874, 6384, 7573],
					'./components/Atoms/Loading/LoadingBar.stories.tsx': ['./components/src/components/Atoms/Loading/LoadingBar.stories.tsx', 1874, 6384, 7573],
					'./components/Atoms/Merchandising/Banner/Banner.stories': [
						'./components/src/components/Atoms/Merchandising/Banner/Banner.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4143,
					],
					'./components/Atoms/Merchandising/Banner/Banner.stories.tsx': [
						'./components/src/components/Atoms/Merchandising/Banner/Banner.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4143,
					],
					'./components/Atoms/Merchandising/InlineBanner/InlineBanner.stories': [
						'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7517,
					],
					'./components/Atoms/Merchandising/InlineBanner/InlineBanner.stories.tsx': [
						'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7517,
					],
					'./components/Atoms/Overlay/Overlay.stories': ['./components/src/components/Atoms/Overlay/Overlay.stories.tsx', 1874, 6384, 8982],
					'./components/Atoms/Overlay/Overlay.stories.tsx': ['./components/src/components/Atoms/Overlay/Overlay.stories.tsx', 1874, 6384, 8982],
					'./components/Atoms/Price/Price.stories': ['./components/src/components/Atoms/Price/Price.stories.tsx', 1874, 6384, 774],
					'./components/Atoms/Price/Price.stories.tsx': ['./components/src/components/Atoms/Price/Price.stories.tsx', 1874, 6384, 774],
					'./components/Atoms/SearchHeader/SearchHeader.stories': [
						'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						2134,
					],
					'./components/Atoms/SearchHeader/SearchHeader.stories.tsx': [
						'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						2134,
					],
					'./components/Atoms/Skeleton/Skeleton.stories': ['./components/src/components/Atoms/Skeleton/Skeleton.stories.tsx', 1874, 6384, 6974],
					'./components/Atoms/Skeleton/Skeleton.stories.tsx': ['./components/src/components/Atoms/Skeleton/Skeleton.stories.tsx', 1874, 6384, 6974],
					'./components/Molecules/CalloutBadge/CalloutBadge.stories': [
						'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7191,
					],
					'./components/Molecules/CalloutBadge/CalloutBadge.stories.tsx': [
						'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7191,
					],
					'./components/Molecules/Carousel/Carousel.stories': [
						'./components/src/components/Molecules/Carousel/Carousel.stories.tsx',
						1874,
						6384,
						731,
						8261,
						3049,
					],
					'./components/Molecules/Carousel/Carousel.stories.tsx': [
						'./components/src/components/Molecules/Carousel/Carousel.stories.tsx',
						1874,
						6384,
						731,
						8261,
						3049,
					],
					'./components/Molecules/Checkbox/Checkbox.stories': [
						'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx',
						1874,
						6384,
						8261,
						9143,
					],
					'./components/Molecules/Checkbox/Checkbox.stories.tsx': [
						'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx',
						1874,
						6384,
						8261,
						9143,
					],
					'./components/Molecules/ErrorHandler/ErrorHandler.stories': [
						'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx',
						1874,
						6384,
						8261,
						9753,
					],
					'./components/Molecules/ErrorHandler/ErrorHandler.stories.tsx': [
						'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx',
						1874,
						6384,
						8261,
						9753,
					],
					'./components/Molecules/FacetGridOptions/FacetGridOptions.stories': [
						'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7383,
					],
					'./components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx': [
						'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7383,
					],
					'./components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories': [
						'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6719,
					],
					'./components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx': [
						'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6719,
					],
					'./components/Molecules/FacetListOptions/FacetListOptions.stories': [
						'./components/src/components/Molecules/FacetListOptions/FacetListOptions.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						3,
					],
					'./components/Molecules/FacetListOptions/FacetListOptions.stories.tsx': [
						'./components/src/components/Molecules/FacetListOptions/FacetListOptions.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						3,
					],
					'./components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories': [
						'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6691,
					],
					'./components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx': [
						'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6691,
					],
					'./components/Molecules/FacetSlider/FacetSlider.stories': [
						'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx',
						1874,
						6384,
						5019,
					],
					'./components/Molecules/FacetSlider/FacetSlider.stories.tsx': [
						'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx',
						1874,
						6384,
						5019,
					],
					'./components/Molecules/Filter/Filter.stories': [
						'./components/src/components/Molecules/Filter/Filter.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						909,
					],
					'./components/Molecules/Filter/Filter.stories.tsx': [
						'./components/src/components/Molecules/Filter/Filter.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						909,
					],
					'./components/Molecules/Grid/Grid.stories': ['./components/src/components/Molecules/Grid/Grid.stories.tsx', 1874, 6384, 4081],
					'./components/Molecules/Grid/Grid.stories.tsx': ['./components/src/components/Molecules/Grid/Grid.stories.tsx', 1874, 6384, 4081],
					'./components/Molecules/LayoutSelector/LayoutSelector.stories': [
						'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx',
						1874,
						6384,
						8261,
						486,
						9179,
					],
					'./components/Molecules/LayoutSelector/LayoutSelector.stories.tsx': [
						'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx',
						1874,
						6384,
						8261,
						486,
						9179,
					],
					'./components/Molecules/List/List.stories': [
						'./components/src/components/Molecules/List/List.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						3893,
					],
					'./components/Molecules/List/List.stories.tsx': [
						'./components/src/components/Molecules/List/List.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						3893,
					],
					'./components/Molecules/LoadMore/LoadMore.stories': [
						'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						9983,
					],
					'./components/Molecules/LoadMore/LoadMore.stories.tsx': [
						'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						9983,
					],
					'./components/Molecules/OverlayBadge/OverlayBadge.stories': [
						'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9907,
					],
					'./components/Molecules/OverlayBadge/OverlayBadge.stories.tsx': [
						'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9907,
					],
					'./components/Molecules/Pagination/Pagination.stories': [
						'./components/src/components/Molecules/Pagination/Pagination.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4401,
					],
					'./components/Molecules/Pagination/Pagination.stories.tsx': [
						'./components/src/components/Molecules/Pagination/Pagination.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4401,
					],
					'./components/Molecules/PerPage/PerPage.stories': [
						'./components/src/components/Molecules/PerPage/PerPage.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						4451,
					],
					'./components/Molecules/PerPage/PerPage.stories.tsx': [
						'./components/src/components/Molecules/PerPage/PerPage.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						4451,
					],
					'./components/Molecules/Radio/Radio.stories': ['./components/src/components/Molecules/Radio/Radio.stories.tsx', 1874, 6384, 8261, 1075],
					'./components/Molecules/Radio/Radio.stories.tsx': ['./components/src/components/Molecules/Radio/Radio.stories.tsx', 1874, 6384, 8261, 1075],
					'./components/Molecules/RadioList/RadioList.stories': [
						'./components/src/components/Molecules/RadioList/RadioList.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						5919,
					],
					'./components/Molecules/RadioList/RadioList.stories.tsx': [
						'./components/src/components/Molecules/RadioList/RadioList.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						5919,
					],
					'./components/Molecules/Rating/Rating.stories': ['./components/src/components/Molecules/Rating/Rating.stories.tsx', 1874, 6384, 8261, 9263],
					'./components/Molecules/Rating/Rating.stories.tsx': [
						'./components/src/components/Molecules/Rating/Rating.stories.tsx',
						1874,
						6384,
						8261,
						9263,
					],
					'./components/Molecules/Result/Result.stories': [
						'./components/src/components/Molecules/Result/Result.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						4055,
					],
					'./components/Molecules/Result/Result.stories.tsx': [
						'./components/src/components/Molecules/Result/Result.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						4055,
					],
					'./components/Molecules/SearchInput/SearchInput.stories': [
						'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx',
						1874,
						6384,
						8261,
						2407,
					],
					'./components/Molecules/SearchInput/SearchInput.stories.tsx': [
						'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx',
						1874,
						6384,
						8261,
						2407,
					],
					'./components/Molecules/Select/Select.stories': [
						'./components/src/components/Molecules/Select/Select.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						7421,
					],
					'./components/Molecules/Select/Select.stories.tsx': [
						'./components/src/components/Molecules/Select/Select.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						7421,
					],
					'./components/Molecules/Slideout/Slideout.stories': [
						'./components/src/components/Molecules/Slideout/Slideout.stories.tsx',
						1874,
						6384,
						9487,
					],
					'./components/Molecules/Slideout/Slideout.stories.tsx': [
						'./components/src/components/Molecules/Slideout/Slideout.stories.tsx',
						1874,
						6384,
						9487,
					],
					'./components/Molecules/SortBy/SortBy.stories': [
						'./components/src/components/Molecules/SortBy/SortBy.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						8055,
					],
					'./components/Molecules/SortBy/SortBy.stories.tsx': [
						'./components/src/components/Molecules/SortBy/SortBy.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						8055,
					],
					'./components/Molecules/Swatches/Swatches.stories': [
						'./components/src/components/Molecules/Swatches/Swatches.stories.tsx',
						1874,
						6384,
						731,
						8261,
						7861,
					],
					'./components/Molecules/Swatches/Swatches.stories.tsx': [
						'./components/src/components/Molecules/Swatches/Swatches.stories.tsx',
						1874,
						6384,
						731,
						8261,
						7861,
					],
					'./components/Molecules/VariantSelection/VariantSelection.stories': [
						'./components/src/components/Molecules/VariantSelection/VariantSelection.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						8012,
						2271,
					],
					'./components/Molecules/VariantSelection/VariantSelection.stories.tsx': [
						'./components/src/components/Molecules/VariantSelection/VariantSelection.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						8012,
						2271,
					],
					'./components/Organisms/BranchOverride/BranchOverride.stories': [
						'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx',
						1874,
						6384,
						8261,
						7069,
					],
					'./components/Organisms/BranchOverride/BranchOverride.stories.tsx': [
						'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx',
						1874,
						6384,
						8261,
						7069,
					],
					'./components/Organisms/Facet/Facet.stories': [
						'./components/src/components/Organisms/Facet/Facet.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6316,
						1555,
					],
					'./components/Organisms/Facet/Facet.stories.tsx': [
						'./components/src/components/Organisms/Facet/Facet.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6316,
						1555,
					],
					'./components/Organisms/Facets/Facets.stories': [
						'./components/src/components/Organisms/Facets/Facets.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6316,
						6721,
					],
					'./components/Organisms/Facets/Facets.stories.tsx': [
						'./components/src/components/Organisms/Facets/Facets.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6316,
						6721,
					],
					'./components/Organisms/FacetsHorizontal/FacetsHorizontal.stories': [
						'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						6316,
						8896,
						6906,
						1249,
					],
					'./components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx': [
						'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						6316,
						8896,
						6906,
						1249,
					],
					'./components/Organisms/FilterSummary/FilterSummary.stories': [
						'./components/src/components/Organisms/FilterSummary/FilterSummary.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6175,
					],
					'./components/Organisms/FilterSummary/FilterSummary.stories.tsx': [
						'./components/src/components/Organisms/FilterSummary/FilterSummary.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						6175,
					],
					'./components/Organisms/MobileSidebar/MobileSidebar.stories': [
						'./components/src/components/Organisms/MobileSidebar/MobileSidebar.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						6316,
						8896,
						6631,
					],
					'./components/Organisms/MobileSidebar/MobileSidebar.stories.tsx': [
						'./components/src/components/Organisms/MobileSidebar/MobileSidebar.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						6316,
						8896,
						6631,
					],
					'./components/Organisms/NoResults/NoResults.stories': [
						'./components/src/components/Organisms/NoResults/NoResults.stories.tsx',
						1874,
						6384,
						3471,
					],
					'./components/Organisms/NoResults/NoResults.stories.tsx': [
						'./components/src/components/Organisms/NoResults/NoResults.stories.tsx',
						1874,
						6384,
						3471,
					],
					'./components/Organisms/Results/Results.stories': [
						'./components/src/components/Organisms/Results/Results.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						3715,
					],
					'./components/Organisms/Results/Results.stories.tsx': [
						'./components/src/components/Organisms/Results/Results.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						3715,
					],
					'./components/Organisms/Sidebar/Sidebar.stories': [
						'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						6316,
						8896,
						7583,
					],
					'./components/Organisms/Sidebar/Sidebar.stories.tsx': [
						'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						6316,
						8896,
						7583,
					],
					'./components/Organisms/Toolbar/Toolbar.stories': [
						'./components/src/components/Organisms/Toolbar/Toolbar.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						3524,
						6299,
					],
					'./components/Organisms/Toolbar/Toolbar.stories.tsx': [
						'./components/src/components/Organisms/Toolbar/Toolbar.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						486,
						3524,
						6299,
					],
					'./components/Templates/Autocomplete/Autocomplete.stories': [
						'./components/src/components/Templates/Autocomplete/Autocomplete.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4522,
						6316,
						8372,
						8999,
					],
					'./components/Templates/Autocomplete/Autocomplete.stories.tsx': [
						'./components/src/components/Templates/Autocomplete/Autocomplete.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4522,
						6316,
						8372,
						8999,
					],
					'./components/Templates/Recommendation/Recommendation.stories': [
						'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						1921,
					],
					'./components/Templates/Recommendation/Recommendation.stories.tsx': [
						'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						1921,
					],
					'./components/Templates/RecommendationBundle/RecommendationBundle.stories': [
						'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						6225,
					],
					'./components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx': [
						'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						6225,
					],
					'./components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories': [
						'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						4901,
					],
					'./components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx': [
						'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						4901,
					],
					'./components/Templates/RecommendationBundleList/RecommendationBundleList.stories': [
						'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						9797,
					],
					'./components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx': [
						'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						9797,
					],
					'./components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories': [
						'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						6969,
					],
					'./components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories.tsx': [
						'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						4208,
						6969,
					],
					'./components/Templates/RecommendationEmail/RecommendationEmail.stories': [
						'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						8241,
					],
					'./components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx': [
						'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						8241,
					],
					'./components/Templates/RecommendationGrid/RecommendationGrid.stories': [
						'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						401,
					],
					'./components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx': [
						'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						401,
					],
					'./components/Templates/Search/Search.stories': [
						'./components/src/components/Templates/Search/Search.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4522,
						486,
						6316,
						8896,
						3524,
						8907,
					],
					'./components/Templates/Search/Search.stories.tsx': [
						'./components/src/components/Templates/Search/Search.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4522,
						486,
						6316,
						8896,
						3524,
						8907,
					],
					'./components/Templates/SearchHorizontal/SearchHorizontal.stories': [
						'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4522,
						486,
						6316,
						8896,
						3524,
						6906,
						8595,
					],
					'./components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx': [
						'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx',
						1874,
						6384,
						8261,
						9754,
						9849,
						4522,
						486,
						6316,
						8896,
						3524,
						6906,
						8595,
					],
					'./components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories': [
						'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						1216,
					],
					'./components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories.tsx': [
						'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories.tsx',
						1874,
						6384,
						731,
						8261,
						9754,
						9849,
						4522,
						1216,
					],
					'./components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories': [
						'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						3242,
					],
					'./components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories.tsx': [
						'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						3242,
					],
					'./components/Trackers/SearchResultTracker/SearchResultTracker.stories': [
						'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						4503,
					],
					'./components/Trackers/SearchResultTracker/SearchResultTracker.stories.tsx': [
						'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4522,
						4503,
					],
				};
				function webpackAsyncContext(req) {
					if (!__webpack_require__.o(map, req))
						return Promise.resolve().then(() => {
							var e = new Error("Cannot find module '" + req + "'");
							throw ((e.code = 'MODULE_NOT_FOUND'), e);
						});
					var ids = map[req],
						id = ids[0];
					return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => __webpack_require__(id));
				}
				(webpackAsyncContext.keys = () => Object.keys(map)),
					(webpackAsyncContext.id =
						'./components/src lazy recursive ^\\.\\/.*$ include: (?:\\/components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'),
					(module.exports = webpackAsyncContext);
			},
		'./storybook-config-entry.js': (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
			'use strict';
			var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__('@storybook/global'),
				external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__('@storybook/preview-api'),
				external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__('@storybook/channels');
			const importers = [
				async (path) => {
					if (!/^\.[\\/](?:components\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) return;
					const pathRemainder = path.substring(17);
					return __webpack_require__(
						'./components/src lazy recursive ^\\.\\/.*$ include: (?:\\/components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$'
					)('./' + pathRemainder);
				},
				async (path) => {
					if (!/^\.[\\/](?:components\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))
						return;
					const pathRemainder = path.substring(17);
					return __webpack_require__(
						'./components/src lazy recursive ^\\.\\/.*$ include: (?:\\/components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
					)('./' + pathRemainder);
				},
			];
			const channel = (0, external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({ page: 'preview' });
			external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
				'DEVELOPMENT' === external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE && (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
			const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb();
			(window.__STORYBOOK_PREVIEW__ = preview),
				(window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
				(window.__STORYBOOK_ADDONS_CHANNEL__ = channel),
				(window.__STORYBOOK_CLIENT_API__ = new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({ storyStore: preview.storyStore })),
				preview.initialize({
					importFn: async function importFn(path) {
						for (let i = 0; i < importers.length; i++) {
							const moduleExports = await ((x = () => importers[i](path)), x());
							if (moduleExports) return moduleExports;
						}
						var x;
					},
					getProjectAnnotations: () =>
						(0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
							__webpack_require__('../../node_modules/@storybook/preact-webpack5/node_modules/@storybook/preact/dist/entry-preview.mjs'),
							__webpack_require__('../../node_modules/@storybook/preact-webpack5/node_modules/@storybook/preact/dist/entry-preview-docs.mjs'),
							__webpack_require__('../../node_modules/@storybook/addon-docs/dist/preview.mjs'),
							__webpack_require__('./node_modules/@storybook/addon-actions/dist/preview.js'),
							__webpack_require__('./node_modules/@storybook/addon-links/dist/preview.js'),
							__webpack_require__('../../node_modules/@storybook/addon-themes/dist/preview.js'),
							__webpack_require__('./components/.storybook/preview.tsx'),
						]),
				});
		},
		'@storybook/channels': (module) => {
			'use strict';
			module.exports = __STORYBOOK_MODULE_CHANNELS__;
		},
		'@storybook/client-logger': (module) => {
			'use strict';
			module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
		},
		'@storybook/core-events': (module) => {
			'use strict';
			module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
		},
		'@storybook/global': (module) => {
			'use strict';
			module.exports = __STORYBOOK_MODULE_GLOBAL__;
		},
		'@storybook/preview-api': (module) => {
			'use strict';
			module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
		},
	},
	(__webpack_require__) => {
		__webpack_require__.O(0, [1831], () => {
			return (moduleId = './storybook-config-entry.js'), __webpack_require__((__webpack_require__.s = moduleId));
			var moduleId;
		});
		__webpack_require__.O();
	},
]);
