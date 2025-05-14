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
							.filter((k) => !('badges' == k && Array.isArray(rawResult[k]) && 'object' == typeof rawResult[k]?.[0]))
							.reduce((attributes, key) => ({ ...attributes, [key]: decodeProperty(rawResult[key] || '') }), {}),
						children =
							rawResult?.children?.map((child) => ({
								attributes: { ...Object.keys(child).reduce((attributes, key) => ({ ...attributes, [key]: decodeProperty(child[key]) }), {}) },
							})) || [];
					return new Result({
						id: rawResult.uid,
						mappings: { core: coreFieldValues },
						attributes,
						badges: Array.isArray(rawResult.badges) && 'object' == typeof rawResult.badges[0] ? rawResult.badges : [],
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
											const lastRequest = this.storage.get('lastStringyParams');
											if (lastRequest) {
												const storableRequestParams = getStorableRequestParams(JSON.parse(lastRequest));
												scrollMap[JSON.stringify(storableRequestParams)] = { domRect, href: storedHref, selector };
											}
										} catch (err) {
											this.log.warn('Failed to save srcollMap!', err);
										}
									this.storage.set('scrollMap', scrollMap);
									const { intellisuggestData, intellisuggestSignature } = result.attributes,
										event = this.tracker.track.product.click({ intellisuggestData, intellisuggestSignature, href: elemHref || resultHref });
									return this.eventManager.fire('track.product.click', { controller: this, event: e, result, trackEvent: event }), event;
								},
							},
						}),
						(this.search = async () => {
							try {
								this.initialized || (await this.init());
								const params = this.params;
								this.params.search?.query?.string &&
									this.params.search?.query?.string.length &&
									this.store.history.save(this.params.search.query.string),
									(this.store.loading = !0);
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
									if (this.config.settings?.infinite.backfill && !this.store.loaded) {
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
										(meta = infiniteResponse.meta), (search = infiniteResponse.search);
									}
								} else {
									this.previousResults = [];
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
									this.config.settings?.infinite && (this.previousResults = JSON.parse(JSON.stringify(response.search.results))),
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
								if (err)
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
							} finally {
								this.store.loading = !1;
							}
						}),
						(this.addToCart = async (products) => {
							const eventContext = { controller: this, products };
							this.eventManager.fire('addToCart', eventContext);
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
								this.eventManager.fire('restorePosition', { controller: this, element: elementPosition });
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
											await new Promise((resolve) => setTimeout(resolve, 60));
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
						globalContext = (0, getContext.S)(['shopper', 'config', 'custom', 'merchandising', 'siteId', 'currency', 'pageType']);
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
							branchOverride = urlParams?.params?.query['searchspring-preview'] || cookies.U.get('ssBranch'),
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
						this.tracker = services?.tracker || new Tracker.JD(trackerGlobals, trackerConfig);
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
											await __webpack_require__
												.e(3464)
												.then(__webpack_require__.bind(__webpack_require__, './components/src/components/Organisms/BranchOverride/index.ts'))
										).BranchOverride;
										(0, preact_module.XX)(
											(0, emotion_react_jsx_runtime_browser_esm.Y)(BranchOverride, {
												...props,
												branch: branchOverride,
												onRemoveClick: () => {
													cookies.U.unset('ssBranch', cookieDomain);
													const urlState = url(window.location.href);
													delete urlState?.params.query['searchspring-preview'];
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
						(window.searchspring.build = window.searchspring.build || 'modern'),
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
												const contextPage = this.context.pageType && `${this.context.pageType}`.toLowerCase().trim();
												(target.prefetch || ['search', 'category'].includes(contextPage)) && (runSearch(), target.component()),
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
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts');
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
							theme: mobx_esm.EW,
						}),
						style)
					) {
						const GlobalStyle = (0, es.PA)((props) => {
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
						themeOverrides = mergeThemeLayers({ ...this.overrides }, overrideBreakpoint, { variables: (0, mobx_esm.HO)(this.variables) });
					let theme = mergeThemeLayers(base, baseBreakpoint, this.currency, this.language, this.languageOverrides, themeOverrides);
					for (const componentName in theme.components) {
						const component = theme.components[componentName],
							themeComponents = component?.theme?.components;
						if (themeComponents)
							for (const themeComponentName in themeComponents) {
								(0, mergeProps.D0)(themeOverrides.components || {}, `${componentName} ${themeComponentName}`)
									.sort(mergeProps.fX)
									.forEach((selector) => {
										const themeComponentPropsOverrides = themeOverrides.components[selector];
										if (themeComponentPropsOverrides) {
											const themeComponentProps = themeComponents[themeComponentName];
											themeComponents[themeComponentName] = { ...themeComponentProps, ...themeComponentPropsOverrides };
										}
									});
							}
					}
					return this.stored && (theme = mergeThemeLayers(theme, this.stored)), (theme.name = this.name), theme;
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
				if (width && Number.isInteger(width) && theme.responsive && breakpoints) {
					const breakpoint = Object.keys(breakpoints).find((breakpoint) => width <= breakpoints[breakpoint]);
					breakpoint && (overrides = (theme.responsive && theme.responsive[breakpoint]) || {});
				}
				return { components: overrides };
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
			const pluginShopifyBackgroundFilters = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					if ('search' != cntrlr.type) return;
					const backgroundFilters = [];
					if (cntrlr.context.collection?.handle) {
						const collectionName = cntrlr.context.collection.name?.replace(/\&\#39\;/, "'");
						'vendors' == cntrlr.context.collection.handle
							? backgroundFilters.push({ type: 'value', field: config?.fieldNames?.vendor || 'vendor', value: collectionName, background: !0 })
							: 'types' == cntrlr.context.collection.handle
							? backgroundFilters.push({ type: 'value', field: config?.fieldNames?.type || 'product_type', value: collectionName, background: !0 })
							: backgroundFilters.push({
									type: 'value',
									field: config?.fieldNames?.collection || 'collection_handle',
									value: cntrlr.context.collection.handle,
									background: !0,
							  }),
							cntrlr.context.tags &&
								Array.isArray(cntrlr.context.tags) &&
								cntrlr.context.tags.forEach((tag) => {
									backgroundFilters.push({ type: 'value', field: config?.fieldNames?.tags || 'tags', value: tag, background: !0 });
								});
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
				pluginShopifyMutateResults = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					const collectionHandle = cntrlr.context.collection?.handle;
					if (!1 !== config?.mutations?.collectionInUrl?.enabled && collectionHandle) {
						if (!window.Shopify) return void cntrlr.log.warn('shopify/pluginMutateResults: window.Shopify not found!');
						cntrlr.on('afterStore', async ({ controller }, next) => {
							const { results } = controller.store;
							results.forEach((result) => {
								const resultHandle = result.attributes.handle;
								if ('banner' != result.type && resultHandle) {
									const routeShopify = window?.Shopify?.routes?.root || '/',
										routeCollection = `collections/${collectionHandle}/`;
									result.mappings.core.url = `${routeShopify}${routeCollection}products/${resultHandle}`;
								}
							}),
								await next();
						});
					}
				},
				pluginShopifyAddToCart = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					cntrlr.on('addToCart', async ({ products }, next) => {
						await (async (data, config) => {
							if (!window.Shopify) return void console.error("shopify/addToCart: Cannot proceed, 'window.Shopify' not found!");
							if (!data) return void console.error('shopify/addToCart: No products to add!');
							const formData = { items: [] };
							data.map((item) => {
								let id = Number(item?.display?.mappings.core?.uid);
								if (config?.idFieldName) {
									let level = item;
									config.idFieldName.split('.').map((field) => {
										level && level[field]
											? (level = level[field])
											: console.error("shopify/addToCart: Could not find column in item data. Please verify 'idFieldName' in the config.");
									}),
										level && level !== item && (id = level);
								}
								if ((id?.toString().match(/^[0-9]+$/) && (id = +id), id && item.quantity)) {
									const obj = { id, quantity: item.quantity };
									formData.items.push(obj);
								}
							});
							try {
								const response = await fetch(window?.Shopify?.routes?.root + 'cart/add.js', {
									method: 'POST',
									headers: { 'Content-Type': 'application/json' },
									body: JSON.stringify(formData),
								});
								if (200 !== response.status) throw new Error(`API rejected addToCart: ${response.status}`);
								!1 !== config?.redirect &&
									setTimeout(() => (window.location.href = 'string' == typeof config?.redirect ? config?.redirect : '/cart'));
							} catch (err) {
								console.error('shopify/addToCart: Encountered an error!'), console.error(err);
							}
						})(products, config),
							await next();
					});
				},
				addToCart_addToCart = async (items, config) => {
					if (!items) return void console.error('bigcommerce/addToCart: No products to add!');
					const lineItems = [];
					if (
						(items.map((item) => {
							let id = item?.display?.mappings?.core?.uid;
							if (config?.idFieldName) {
								let level = item;
								config.idFieldName.split('.').map((field) => {
									if (!level || !level[field])
										return (
											console.error("bigcommerce/addToCart: Could not find column in item data. Please verify 'idFieldName' in the config."),
											(level = void 0),
											void (id = void 0)
										);
									level = level[field];
								}),
									level && level !== item && (id = level);
							}
							if (id && item.quantity) {
								const productDetails = { product_id: id, quantity: item.quantity },
									options = item.variants?.active?.options;
								options &&
									((productDetails.optionSelections = []),
									Object.keys(options).forEach((option) => {
										const optionId = options[option].optionId,
											optionValue = options[option].optionValue;
										optionId && optionValue && productDetails.optionSelections?.push({ optionId, optionValue });
									})),
									lineItems.push(productDetails);
							}
						}),
						lineItems.length)
					) {
						const addToCartResponse = await (async function addLineItemsToCart(lineItems) {
							try {
								const cartId = await (async function getExistingCartId() {
									try {
										const response = await fetch('/api/storefront/carts', {
												method: 'GET',
												headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
											}),
											responseData = await response.json();
										if (Array.isArray(responseData) && responseData.length) return responseData[0].id;
									} catch (err) {}
								})();
								let addToCartUrl = '/api/storefront/carts';
								cartId && (addToCartUrl = `/api/storefront/carts/${cartId}/items`);
								const body = JSON.stringify({ lineItems }),
									response = await fetch(addToCartUrl, {
										method: 'POST',
										headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
										body,
									});
								if (200 !== response.status) throw new Error(`API rejected addToCart: ${response.status}`);
								const responseData = await response.json();
								if (responseData?.id) return responseData;
							} catch (err) {
								console.error('bigcommerce/addToCart: Encountered an error!'), console.error(err);
							}
						})(lineItems);
						return (
							!1 !== config?.redirect &&
								setTimeout(() => (window.location.href = 'string' == typeof config?.redirect ? config?.redirect : '/cart.php')),
							addToCartResponse
						);
					}
				};
			const pluginBigcommerceAddToCart = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					cntrlr.on('addToCart', async ({ products }, next) => {
						await addToCart_addToCart(products, config), await next();
					});
				},
				src_addToCart_addToCart = async (data, config) => {
					if (!data) return void console.error('magento2/addToCart: No products to add!');
					const form_key = config?.formKey || (cookies.U.get('form_key') ? cookies.U.get('form_key') : ''),
						uenc = config?.uenc || ('function' == typeof btoa ? btoa(window?.location?.href) : ''),
						lineItems = [];
					if (
						(data.map(async (item) => {
							let sku = item?.display?.mappings.core?.uid;
							if (config?.idFieldName) {
								let level = item;
								config.idFieldName.split('.').map((field) => {
									level[field]
										? (level = level[field])
										: console.error("magento2/addToCart: Could not find column in item data. Please verify 'idFieldName' in the config.");
								}),
									level && level !== item && (sku = level);
							}
							if (sku && item.quantity) {
								const attributes = [],
									options = item.variants?.active?.options;
								options &&
									Object.keys(options).forEach((option) => {
										const attributeObj = { name: options[option].attributeId, val: options[option].optionId };
										attributes.push(attributeObj);
									}),
									lineItems.push({ product_id: sku, quantity: item.quantity, attributes });
							}
						}),
						lineItems.length)
					) {
						for (let i = 0; i < lineItems.length; i++) {
							const itemData = lineItems[i],
								quantity = itemData.quantity || 1,
								form = new FormData();
							form.append('product', itemData.product_id),
								form.append('form_key', form_key || ''),
								form.append('uenc', uenc || ''),
								form.append('qty', quantity.toString()),
								itemData.attributes.forEach((att) => {
									form.append(`super_attribute[${att.name}]`, att.val);
								});
							try {
								const response = await fetch(
									window.location.origin + '/checkout/cart/add/uenc/' + uenc + '/product/' + itemData.product_id + '/addon_product/1/',
									{ method: 'POST', body: form }
								);
								if (200 !== response.status) throw new Error(`API rejected addToCart: ${response.status}`);
							} catch (err) {
								console.error('magento2/addToCart: Encountered an error!'), console.error(err);
							}
						}
						!1 !== config?.redirect &&
							setTimeout(() => (window.location.href = 'string' == typeof config?.redirect ? config?.redirect : '/checkout/cart/'));
					}
				},
				pluginMagento2AddToCart = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					cntrlr.on('addToCart', async ({ products }, next) => {
						await src_addToCart_addToCart(products, config), await next();
					});
				},
				pluginAddToCart = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					cntrlr.on('addToCart', async ({ controller, products }, next) => {
						config?.function
							? await (config?.function && config.function(products, controller))
							: cntrlr.log.error('common/addToCart: Error - No function provided in config!'),
							await next();
					});
				},
				pluginBigcommerceBackgroundFilters = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					if ('search' != cntrlr.type) return;
					const backgroundFilters = [];
					if (cntrlr.context?.category?.path) {
						const categoryPath = replaceCharacters(cntrlr.context.category.path);
						backgroundFilters.push({
							type: 'value',
							field: config?.fieldNames?.category || 'categories_hierarchy',
							value: categoryPath,
							background: !0,
						});
					} else if (cntrlr.context?.brand?.name) {
						const brandName = replaceCharacters(cntrlr.context.brand.name);
						backgroundFilters.push({ type: 'value', field: config?.fieldNames?.brand || 'brand', value: brandName, background: !0 });
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
			const pluginMagento2BackgroundFilters = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					if (!['search', 'autocomplete'].includes(cntrlr.type)) return;
					const backgroundFilters = [],
						visibilityFilter = { type: 'value', field: config?.fieldNames?.visibility || 'visibility', value: 'Search', background: !0 };
					'search' == cntrlr.type &&
						cntrlr.context?.category?.path &&
						(backgroundFilters.push({
							type: 'value',
							field: config?.fieldNames?.category || 'category_hierarchy',
							value: cntrlr.context.category.path.replace(/\&quot\;/g, '"'),
							background: !0,
						}),
						(visibilityFilter.value = 'Catalog')),
						backgroundFilters.push(visibilityFilter),
						backgroundFilters.length &&
							cntrlr.on('init', async ({ controller }, next) => {
								(controller.config = controller.config || {}),
									(controller.config.globals = controller.config.globals || {}),
									(controller.config.globals.filters = controller.config.globals.filters || []),
									(controller.config.globals.filters = controller.config.globals.filters.concat(backgroundFilters)),
									await next();
							});
				},
				pluginBackgroundFilters = (cntrlr, config) => {
					if (!1 === config?.enabled) return;
					const backgroundFilters = [];
					let contextBackgroundFilters = [];
					Array.isArray(cntrlr.context?.backgroundFilters)
						? (contextBackgroundFilters = contextBackgroundFilters.concat(cntrlr.context.backgroundFilters))
						: cntrlr.context?.backgroundFilters && cntrlr.log.warn('Context supplied backgroundFilters must be an array!');
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
						} else cntrlr.log.error('Invalid filter in backgroundFilters: ', filter);
					}),
						cntrlr.on('init', async ({ controller }, next) => {
							backgroundFilters.length &&
								((controller.config = controller.config || {}),
								(controller.config.globals = controller.config.globals || {}),
								(controller.config.globals.filters = controller.config.globals.filters || []),
								(controller.config.globals.filters = controller.config.globals.filters.concat(
									(function removeDuplicateFilters(filters) {
										const seen = new Set();
										return filters.filter((filter) => {
											const filterValue = 'range' === filter.type ? `${filter.value?.low}:${filter.value?.high}` : filter.value,
												key = `${filter.type}:${filter.field}:${filterValue}`;
											return !seen.has(key) && (seen.add(key), !0);
										});
									})(backgroundFilters)
								))),
								await next();
						});
				};
			const pluginScrollToTop = (cntrlr, config) => {
					!1 !== config?.enabled &&
						'search' == cntrlr.type &&
						cntrlr.on('restorePosition', async ({ element }, next) => {
							if (!element) {
								const options = Object.assign({ top: 0, left: 0, behavior: 'smooth' }, config?.options || {});
								if (config?.selector) {
									const element = document.querySelector(config.selector);
									if (element) {
										const { top } = element.getBoundingClientRect();
										options.top += top;
									}
								}
								setTimeout(() => {
									window.scroll(options);
								});
							}
							await next();
						});
				},
				pluginLogger = (cntrlr, config) => {
					!1 !== config?.enabled &&
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('store', controller.store.toJSON()), await next();
						});
				};
			var mergeStyles = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				cloneWithProps = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				treePath = __webpack_require__('./components/src/providers/treePath.tsx');
			const defaultStyles = () => (0, emotion_react_browser_esm.AH)({}),
				CustomComponentWrapper = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						globalTreePath = (0, treePath.LU)(),
						componentType = properties.type.charAt(0).toUpperCase() + properties.type.slice(1).toLowerCase(),
						defaultProps = { treePath: properties.children.props.treePath || globalTreePath || void 0 },
						props = (0, mergeProps.v6)(`customComponent-${componentType}`, globalTheme, defaultProps, properties),
						{ children } = props,
						styling = (0, mergeStyles.Z)(props, defaultStyles),
						path = styling['ss-path'];
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
							...styling,
							children: (0, cloneWithProps.Y)(children, { treePath: path, theme: globalTheme }),
						}),
					});
				}),
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
								snappy: async () =>
									this.themes.snappy ||
									(this.themes.snappy = (
										await __webpack_require__
											.e(2856)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/themes/snappy.ts'))
									).snappy),
								snapnco: async () =>
									this.themes.snapnco ||
									(this.themes.snapnco = (
										await __webpack_require__
											.e(4819)
											.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/themes/snapnco.ts'))
									).snapnco),
							},
							plugins: {
								shopify: {
									backgroundFilters: pluginShopifyBackgroundFilters,
									mutateResults: pluginShopifyMutateResults,
									addToCart: pluginShopifyAddToCart,
								},
								bigcommerce: { backgroundFilters: pluginBigcommerceBackgroundFilters, addToCart: pluginBigcommerceAddToCart },
								magento2: { backgroundFilters: pluginMagento2BackgroundFilters, addToCart: pluginMagento2AddToCart },
								common: {
									backgroundFilters: pluginBackgroundFilters,
									scrollToTop: pluginScrollToTop,
									logger: pluginLogger,
									addToCart: pluginAddToCart,
								},
							},
							component: {
								autocomplete: {
									AutocompleteTemplate: async () =>
										this.components.autocomplete.AutocompleteTemplate ||
										(this.components.autocomplete.AutocompleteTemplate = (
											await Promise.all([
												__webpack_require__.e(2980),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(3200),
												__webpack_require__.e(8220),
												__webpack_require__.e(4253),
												__webpack_require__.e(4827),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/AutocompleteTemplate.ts'))
										).AutocompleteTemplate),
								},
								search: {
									SearchBoca: async () =>
										this.components.search.SearchBoca ||
										(this.components.search.SearchBoca = (
											await Promise.all([
												__webpack_require__.e(2980),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(3200),
												__webpack_require__.e(8220),
												__webpack_require__.e(7053),
												__webpack_require__.e(5572),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/SearchBoca.ts'))
										).SearchBoca),
									SearchSnapnco: async () =>
										this.components.search.SearchSnapnco ||
										(this.components.search.SearchSnapnco = (
											await Promise.all([
												__webpack_require__.e(2980),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(3200),
												__webpack_require__.e(8220),
												__webpack_require__.e(7053),
												__webpack_require__.e(849),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/SearchSnapnco.ts'))
										).SearchSnapnco),
									SearchSnappy: async () =>
										this.components.search.SearchSnappy ||
										(this.components.search.SearchSnappy = (
											await Promise.all([
												__webpack_require__.e(2980),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(3200),
												__webpack_require__.e(8220),
												__webpack_require__.e(7053),
												__webpack_require__.e(2392),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/SearchSnappy.ts'))
										).SearchSnappy),
									Search: async () =>
										this.components.search.Search ||
										(this.components.search.Search = (
											await Promise.all([
												__webpack_require__.e(2980),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(3200),
												__webpack_require__.e(8220),
												__webpack_require__.e(7053),
												__webpack_require__.e(2985),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/Search.ts'))
										).Search),
									SearchHorizontal: async () =>
										this.components.search.SearchHorizontal ||
										(this.components.search.SearchHorizontal = (
											await Promise.all([
												__webpack_require__.e(2980),
												__webpack_require__.e(4522),
												__webpack_require__.e(6316),
												__webpack_require__.e(3200),
												__webpack_require__.e(8220),
												__webpack_require__.e(7053),
												__webpack_require__.e(6697),
											]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/SearchHorizontal.ts'))
										).SearchHorizontal),
								},
								recommendation: {
									bundle: {
										RecommendationBundle: async () =>
											this.components.recommendation.bundle.RecommendationBundle ||
											(this.components.recommendation.bundle.RecommendationBundle = (
												await Promise.all([
													__webpack_require__.e(2980),
													__webpack_require__.e(6664),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(5005),
												]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundle.ts'))
											).RecommendationBundle),
										RecommendationBundleEasyAdd: async () =>
											this.components.recommendation.bundle.RecommendationBundleEasyAdd ||
											(this.components.recommendation.bundle.RecommendationBundleEasyAdd = (
												await Promise.all([
													__webpack_require__.e(2980),
													__webpack_require__.e(6664),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(7400),
												]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts')
												)
											).RecommendationBundleEasyAdd),
										RecommendationBundleList: async () =>
											this.components.recommendation.bundle.RecommendationBundleList ||
											(this.components.recommendation.bundle.RecommendationBundleList = (
												await Promise.all([
													__webpack_require__.e(2980),
													__webpack_require__.e(6664),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(4213),
												]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationBundleList.ts')
												)
											).RecommendationBundleList),
										RecommendationBundleVertical: async () =>
											this.components.recommendation.bundle.RecommendationBundleVertical ||
											(this.components.recommendation.bundle.RecommendationBundleVertical = (
												await Promise.all([
													__webpack_require__.e(2980),
													__webpack_require__.e(6664),
													__webpack_require__.e(4522),
													__webpack_require__.e(4208),
													__webpack_require__.e(8655),
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
													__webpack_require__.e(2980),
													__webpack_require__.e(6664),
													__webpack_require__.e(4522),
													__webpack_require__.e(3870),
												]).then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/Recommendation.ts'))
											).Recommendation),
										RecommendationGrid: async () =>
											this.components.recommendation.default.RecommendationGrid ||
											(this.components.recommendation.default.RecommendationGrid = (
												await Promise.all([__webpack_require__.e(2980), __webpack_require__.e(4522), __webpack_require__.e(8210)]).then(
													__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/components/RecommendationGrid.ts')
												)
											).RecommendationGrid),
									},
									email: {
										RecommendationEmail: async () =>
											this.components.recommendation.email.RecommendationEmail ||
											(this.components.recommendation.email.RecommendationEmail = (
												await Promise.all([__webpack_require__.e(2980), __webpack_require__.e(4522), __webpack_require__.e(1660)]).then(
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
											await Promise.all([__webpack_require__.e(2980), __webpack_require__.e(4522), __webpack_require__.e(828)]).then(
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
								es: async () =>
									this.locales.languages.es ||
									(this.locales.languages.es = transformTranslationsToTheme(
										(
											await __webpack_require__
												.e(8274)
												.then(__webpack_require__.bind(__webpack_require__, './src/Templates/Stores/library/languages/es.ts'))
										).es
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
						(this.import.component[type][name] = async () =>
							this.components[type][name] ||
							(this.components[type][name] = await (async (props) => {
								const { type, name, componentFn } = props,
									Component = await componentFn();
								return (props) =>
									(0, emotion_react_jsx_runtime_browser_esm.Y)(CustomComponentWrapper, {
										type,
										name,
										children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Component, { ...props }),
									});
							})({ type, name, componentFn })));
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
					const targetId = templatesStore.addTarget('autocomplete', target),
						targeter = {
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
							props: { type: 'autocomplete', templatesStore, targetId },
							hideTarget: !0,
						};
					return target.inputSelector && (targeter.props.input = target.inputSelector), targeter;
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
			function createPlugins(templateConfig, templatesStore, controllerType) {
				const plugins = [];
				let controllerConfig;
				switch (
					(controllerType && (controllerConfig = templateConfig[controllerType] || {}),
					plugins.push([
						templatesStore.library.import.plugins.common.backgroundFilters,
						cjs_default()(templateConfig.plugins?.common?.backgroundFilters || {}, controllerConfig?.plugins?.common?.backgroundFilters || {}),
					]),
					plugins.push([
						templatesStore.library.import.plugins.common.scrollToTop,
						cjs_default()(templateConfig.plugins?.common?.scrollToTop || {}, controllerConfig?.plugins?.common?.scrollToTop || {}),
					]),
					plugins.push([
						templatesStore.library.import.plugins.common.logger,
						cjs_default()(templateConfig.plugins?.common?.logger || {}, controllerConfig?.plugins?.common?.logger || {}),
					]),
					templatesStore.platform)
				) {
					case 'shopify':
						plugins.push([
							templatesStore.library.import.plugins.shopify.backgroundFilters,
							cjs_default()(templateConfig.plugins?.shopify?.backgroundFilters || {}, controllerConfig?.plugins?.shopify?.backgroundFilters || {}),
						]),
							plugins.push([
								templatesStore.library.import.plugins.shopify.mutateResults,
								cjs_default()(templateConfig.plugins?.shopify?.mutateResults || {}, controllerConfig?.plugins?.shopify?.mutateResults || {}),
							]),
							plugins.push([
								templatesStore.library.import.plugins.shopify.addToCart,
								cjs_default()(templateConfig.plugins?.shopify?.addToCart || {}, controllerConfig?.plugins?.shopify?.addToCart || {}),
							]);
						break;
					case 'bigCommerce':
						plugins.push([
							templatesStore.library.import.plugins.bigcommerce.backgroundFilters,
							cjs_default()(
								templateConfig.plugins?.bigCommerce?.backgroundFilters || {},
								controllerConfig?.plugins?.bigCommerce?.backgroundFilters || {}
							),
						]),
							plugins.push([
								templatesStore.library.import.plugins.bigcommerce.addToCart,
								cjs_default()(templateConfig.plugins?.bigCommerce?.addToCart || {}, controllerConfig?.plugins?.bigCommerce?.addToCart || {}),
							]);
						break;
					case 'magento2':
						plugins.push([
							templatesStore.library.import.plugins.magento2.backgroundFilters,
							cjs_default()(templateConfig.plugins?.magento2?.backgroundFilters || {}, controllerConfig?.plugins?.magento2?.backgroundFilters || {}),
						]),
							plugins.push([
								templatesStore.library.import.plugins.magento2.addToCart,
								cjs_default()(templateConfig.plugins?.magento2?.addToCart || {}, controllerConfig?.plugins?.magento2?.addToCart || {}),
							]);
						break;
					case 'other':
						plugins.push([
							templatesStore.library.import.plugins.common.addToCart,
							cjs_default()(templateConfig.plugins?.common?.addToCart || {}, controllerConfig?.plugins?.common?.addToCart || {}),
						]);
				}
				return plugins;
			}
			var snappy = __webpack_require__('./components/src/themes/snappy/snappy.ts'),
				bocachica = __webpack_require__('./components/src/themes/bocachica/bocachica.ts'),
				snapnco = __webpack_require__('./components/src/themes/snapnco/snapnco.ts'),
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
									config: {
										id: 'search',
										plugins: createPlugins(templateConfig, templatesStore, 'search'),
										settings: templateConfig.search.settings || {},
									},
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
											plugins: createPlugins(templateConfig, templatesStore, 'autocomplete'),
											selector: templateConfig.autocomplete.targets.map((target) => target.inputSelector || target.selector).join(', '),
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
									config: { plugins: createPlugins(templateConfig, templatesStore, 'recommendation'), ...templateConfig.recommendation?.settings },
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
													__webpack_require__.e(2980),
													__webpack_require__.e(6664),
													__webpack_require__.e(4661),
													__webpack_require__.e(4522),
													__webpack_require__.e(6316),
													__webpack_require__.e(3200),
													__webpack_require__.e(8220),
													__webpack_require__.e(7053),
													__webpack_require__.e(4208),
													__webpack_require__.e(3570),
													__webpack_require__.e(8012),
													__webpack_require__.e(8072),
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
			addTheme(snapTemplates, 'snappy', snappy.m),
				addTheme(snapTemplates, 'bocachica', bocachica.S),
				addTheme(snapTemplates, 'snapnco', snapnco.N),
				addTheme(snapTemplates, 'base', base.E);
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
								snapnco: templateStory
									? snapTemplates.templates.themes.library.snapnco.theme
									: snapTemplates.templates.themes.local.snapncoSimple.theme,
								snappy: templateStory ? snapTemplates.templates.themes.library.snappy.theme : snapTemplates.templates.themes.local.snappySimple.theme,
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
					simpleTheme.components[componentName] = { styleScript: componentProps?.styleScript, themeStyleScript: componentProps?.themeStyleScript };
				}
				return simpleTheme;
			}
		},
		'./components/src/components/Atoms/Icon/Icon.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { I: () => Icon });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = ({ color, theme, width, height, size }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
					fill: color || theme?.variables?.colors?.primary || '#333',
					stroke: color || theme?.variables?.colors?.primary || '#333',
					width: isNaN(Number(width || size)) ? width || size : `${width || size}px`,
					height: isNaN(Number(height || size)) ? height || size : `${height || size}px`,
					position: 'relative',
				});
			function Icon(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = { size: '16px', viewBox: '0 0 56 56', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('icon', globalTheme, defaultProps, properties),
					{
						color,
						icon,
						path,
						children,
						size,
						width,
						height,
						viewBox,
						disableStyles,
						className,
						style: _,
						styleScript: __,
						themeStyleScript: ___,
						name: ____,
						treePath: _____,
						...otherProps
					} = props,
					iconPath = _paths__WEBPACK_IMPORTED_MODULE_6__.c[icon] || path,
					pathType = typeof iconPath,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return children || (iconPath && ('string' === pathType || ('object' === pathType && Array.isArray(iconPath))))
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('svg', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__icon', icon ? `ss__icon--${icon}` : null, className),
								viewBox,
								xmlns: 'http://www.w3.org/2000/svg',
								width: disableStyles ? width || size : void 0,
								height: disableStyles ? height || size : void 0,
								...otherProps,
								children:
									children ||
									('string' === pathType
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('path', { fill: disableStyles ? color : void 0, d: iconPath })
										: iconPath && 'object' === pathType && Array.isArray(iconPath)
										? iconPath.map((p, i) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(p.type, { ...p.attributes }, i))
										: void 0),
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Atoms/Icon/paths.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { c: () => iconPaths });
			const iconPaths = {
				'angle-up':
					'M56 39.671c0 0.449-0.224 0.954-0.561 1.291l-2.806 2.806c-0.337 0.337-0.786 0.561-1.291 0.561-0.449 0-0.954-0.224-1.291-0.561l-22.052-22.052-22.052 22.052c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-2.806-2.806c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l26.148-26.148c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l26.148 26.148c0.337 0.337 0.561 0.842 0.561 1.291z',
				'angle-down':
					'M56 16.329c0 0.449-0.224 0.954-0.561 1.291l-26.148 26.148c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-26.148-26.148c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l2.806-2.806c0.337-0.337 0.786-0.561 1.291-0.561 0.449 0 0.954 0.224 1.291 0.561l22.052 22.052 22.052-22.052c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l2.806 2.806c0.337 0.337 0.561 0.842 0.561 1.291z',
				'angle-left':
					'M44.329 4.657c0 0.449-0.224 0.954-0.561 1.291l-22.052 22.052 22.052 22.052c0.337 0.337 0.561 0.842 0.561 1.291s-0.224 0.954-0.561 1.291l-2.806 2.806c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-26.148-26.148c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l26.148-26.148c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l2.806 2.806c0.337 0.337 0.561 0.786 0.561 1.291z',
				'angle-right':
					'M44.329 28c0 0.449-0.224 0.954-0.561 1.291l-26.148 26.148c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-2.806-2.806c-0.337-0.337-0.561-0.786-0.561-1.291 0-0.449 0.224-0.954 0.561-1.291l22.052-22.052-22.052-22.052c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l2.806-2.806c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l26.148 26.148c0.337 0.337 0.561 0.842 0.561 1.291z',
				bag: 'M46.5435 18.6657C46.142 15.4166 43.9379 13.1711 40.4449 13.1711H37.3295C36.8838 5.75827 35.1521 0 28.4228 0C21.5677 0 19.8993 5.75827 19.4922 13.1711H16.1019C12.6083 13.1711 10.3416 15.5058 10.0027 18.6657L6.01336 49.5651L6 49.7409C6 53.1533 8.79407 56 12.1 56H44.4455C47.7521 56 50.5455 53.1407 50.5455 49.729L46.5435 18.6657ZM28.4228 3.29383C32.3475 3.29383 33.6011 6.58138 33.9913 13.1704H22.8164C23.1574 6.58138 24.3442 3.29383 28.4228 3.29383ZM44.4455 52.7055H12.1C10.6488 52.7055 9.372 51.4045 9.32279 49.8448L13.3226 18.7676C13.5301 17.0614 14.8195 16.4643 16.1019 16.4643H19.3833C19.3608 17.2881 19.3601 19.3249 19.3601 20.7598C19.3601 21.6694 20.1032 22.4311 21.02 22.4311C21.9369 22.4311 22.6807 21.6589 22.6807 20.7486C22.6807 19.2391 22.6871 17.2888 22.7096 16.4643H34.1242C34.1544 17.2881 34.1656 19.2635 34.1656 20.7598C34.1656 21.6694 34.9081 22.4311 35.8256 22.4311C36.7418 22.4311 37.4856 21.6589 37.4856 20.7486C37.4856 19.3465 37.4842 18.1119 37.4575 16.4643H40.4449C41.7266 16.4643 42.995 17.0397 43.2235 18.7787L47.2234 49.8218C47.1742 51.3808 45.8981 52.7055 44.4455 52.7055Z',
				ban: 'M47.769 27.982c0-3.961-1.163-7.631-3.162-10.72l-27.4 27.364c3.125 2.035 6.832 3.234 10.793 3.234 10.902 0 19.769-8.903 19.769-19.878zM11.465 38.848l27.437-27.4c-3.125-2.108-6.868-3.307-10.902-3.307-10.902 0-19.769 8.903-19.769 19.842 0 4.034 1.199 7.74 3.234 10.866zM55.909 27.982c0 15.481-12.501 28.018-27.909 28.018s-27.909-12.537-27.909-28.018c0-15.445 12.501-27.982 27.909-27.982s27.909 12.537 27.909 27.982z',
				check:
					'M56 14.921c0 0.903-0.361 1.806-1.012 2.457l-31.071 31.071c-0.65 0.65-1.554 1.012-2.457 1.012s-1.806-0.361-2.457-1.012l-17.992-17.992c-0.65-0.65-1.012-1.554-1.012-2.457s0.361-1.806 1.012-2.457l4.914-4.914c0.65-0.65 1.554-1.012 2.457-1.012s1.806 0.361 2.457 1.012l10.622 10.658 23.701-23.737c0.65-0.65 1.554-1.012 2.457-1.012s1.806 0.361 2.457 1.012l4.914 4.914c0.65 0.65 1.012 1.554 1.012 2.457z',
				'check-thin': 'M17.771 40.395l33.749-33.749 4.48 4.48-38.229 38.229-17.771-17.771 4.48-4.48z',
				'chevron-up':
					'M55.349 39.589l-5.769 5.734c-0.869 0.869-2.259 0.869-3.128 0l-18.452-18.452-18.452 18.452c-0.869 0.869-2.259 0.869-3.128 0l-5.769-5.734c-0.869-0.869-0.869-2.293 0-3.162l25.785-25.75c0.869-0.869 2.259-0.869 3.128 0l25.785 25.75c0.869 0.869 0.869 2.293 0 3.162z',
				'chevron-down':
					'M55.348 19.573l-25.785 25.75c-0.869 0.869-2.259 0.869-3.128 0l-25.785-25.75c-0.869-0.869-0.869-2.293 0-3.162l5.768-5.734c0.869-0.869 2.259-0.869 3.128 0l18.452 18.452 18.452-18.452c0.869-0.869 2.259-0.869 3.128 0l5.768 5.734c0.869 0.869 0.869 2.293 0 3.162z',
				'chevron-left':
					'M45.34 9.548l-18.452 18.452 18.452 18.452c0.869 0.869 0.869 2.259 0 3.128l-5.769 5.769c-0.869 0.869-2.259 0.869-3.128 0l-25.785-25.785c-0.869-0.869-0.869-2.259 0-3.128l25.785-25.785c0.869-0.869 2.259-0.869 3.128 0l5.769 5.769c0.869 0.869 0.869 2.259 0 3.128z',
				'chevron-right':
					'M45.34 29.564l-25.785 25.785c-0.869 0.869-2.259 0.869-3.128 0l-5.768-5.768c-0.869-0.869-0.869-2.259 0-3.128l18.452-18.452-18.452-18.452c-0.869-0.869-0.869-2.259 0-3.128l5.768-5.768c0.869-0.869 2.259-0.869 3.128 0l25.785 25.785c0.869 0.869 0.869 2.259 0 3.128z',
				circle: 'M56 28c0 15.458-12.542 28-28 28s-28-12.542-28-28 12.542-28 28-28 28 12.542 28 28z',
				close:
					'M56 45.064c0 1.178-0.471 2.357-1.32 3.205l-6.411 6.411c-0.849 0.849-2.027 1.32-3.205 1.32s-2.357-0.471-3.205-1.32l-13.859-13.859-13.859 13.859c-0.849 0.849-2.027 1.32-3.205 1.32s-2.357-0.471-3.205-1.32l-6.411-6.411c-0.849-0.849-1.32-2.027-1.32-3.205s0.471-2.357 1.32-3.205l13.859-13.859-13.859-13.859c-0.849-0.849-1.32-2.027-1.32-3.205s0.471-2.357 1.32-3.205l6.411-6.411c0.849-0.849 2.027-1.32 3.205-1.32s2.357 0.471 3.205 1.32l13.859 13.859 13.859-13.859c0.849-0.849 2.027-1.32 3.205-1.32s2.357 0.471 3.205 1.32l6.411 6.411c0.849 0.849 1.32 2.027 1.32 3.205s-0.471 2.357-1.32 3.205l-13.859 13.859 13.859 13.859c0.849 0.849 1.32 2.027 1.32 3.205z',
				'close-thin':
					'M56 5.638l-22.362 22.362 22.362 22.362-5.638 5.638-22.362-22.362-22.362 22.362-5.638-5.638 22.362-22.362-22.362-22.362 5.638-5.638 22.362 22.362 22.362-22.362z',
				cog: 'M37.333 28c0-5.141-4.193-9.333-9.333-9.333s-9.333 4.193-9.333 9.333 4.193 9.333 9.333 9.333 9.333-4.193 9.333-9.333zM56 24.026v8.094c0 0.547-0.438 1.203-1.021 1.312l-6.745 1.021c-0.401 1.167-0.839 2.26-1.422 3.318 1.24 1.786 2.552 3.391 3.901 5.031 0.219 0.255 0.365 0.583 0.365 0.911s-0.109 0.583-0.328 0.839c-0.875 1.167-5.797 6.526-7.036 6.526-0.328 0-0.656-0.146-0.948-0.328l-5.031-3.938c-1.057 0.547-2.188 1.021-3.318 1.385-0.255 2.224-0.474 4.594-1.057 6.781-0.146 0.583-0.656 1.021-1.312 1.021h-8.094c-0.656 0-1.24-0.474-1.312-1.094l-1.021-6.708c-1.13-0.365-2.224-0.802-3.281-1.349l-5.141 3.901c-0.255 0.219-0.583 0.328-0.911 0.328s-0.656-0.146-0.911-0.401c-1.932-1.75-4.484-4.010-6.016-6.125-0.182-0.255-0.255-0.547-0.255-0.839 0-0.328 0.109-0.583 0.292-0.839 1.24-1.677 2.589-3.281 3.828-4.995-0.62-1.167-1.13-2.37-1.495-3.609l-6.672-0.984c-0.62-0.109-1.057-0.693-1.057-1.312v-8.094c0-0.547 0.438-1.203 0.984-1.312l6.781-1.021c0.365-1.167 0.839-2.26 1.422-3.354-1.24-1.75-2.552-3.391-3.901-5.031-0.219-0.255-0.365-0.547-0.365-0.875s0.146-0.583 0.328-0.839c0.875-1.203 5.797-6.526 7.036-6.526 0.328 0 0.656 0.146 0.948 0.365l5.031 3.901c1.057-0.547 2.188-1.021 3.318-1.385 0.255-2.224 0.474-4.594 1.057-6.781 0.146-0.583 0.656-1.021 1.312-1.021h8.094c0.656 0 1.24 0.474 1.312 1.094l1.021 6.708c1.13 0.365 2.224 0.802 3.281 1.349l5.177-3.901c0.219-0.219 0.547-0.328 0.875-0.328s0.656 0.146 0.911 0.365c1.932 1.786 4.484 4.047 6.016 6.198 0.182 0.219 0.255 0.51 0.255 0.802 0 0.328-0.109 0.583-0.292 0.839-1.24 1.677-2.589 3.281-3.828 4.995 0.62 1.167 1.13 2.37 1.495 3.573l6.672 1.021c0.62 0.109 1.057 0.693 1.057 1.312z',
				cogs: 'M26.133 27.985c0-4.113-3.354-7.467-7.467-7.467s-7.467 3.354-7.467 7.467 3.354 7.467 7.467 7.467 7.467-3.354 7.467-7.467zM48.533 42.919c0-2.042-1.692-3.733-3.733-3.733s-3.733 1.692-3.733 3.733c0 2.071 1.692 3.733 3.733 3.733 2.071 0 3.733-1.692 3.733-3.733zM48.533 13.052c0-2.042-1.692-3.733-3.733-3.733s-3.733 1.692-3.733 3.733c0 2.071 1.692 3.733 3.733 3.733 2.071 0 3.733-1.692 3.733-3.733zM37.333 25.331v5.396c0 0.379-0.292 0.817-0.671 0.875l-4.521 0.7c-0.233 0.758-0.554 1.487-0.933 2.217 0.817 1.167 1.692 2.246 2.625 3.354 0.117 0.175 0.204 0.35 0.204 0.583 0 0.204-0.058 0.408-0.204 0.554-0.583 0.787-3.85 4.346-4.696 4.346-0.233 0-0.438-0.088-0.613-0.204l-3.354-2.625c-0.729 0.379-1.458 0.671-2.246 0.904-0.146 1.487-0.292 3.092-0.671 4.521-0.117 0.408-0.467 0.7-0.875 0.7h-5.425c-0.408 0-0.817-0.321-0.875-0.729l-0.671-4.462c-0.758-0.233-1.488-0.554-2.188-0.904l-3.442 2.596c-0.146 0.146-0.379 0.204-0.583 0.204-0.233 0-0.438-0.087-0.612-0.233-0.758-0.7-4.2-3.821-4.2-4.667 0-0.204 0.087-0.379 0.204-0.554 0.846-1.108 1.721-2.188 2.567-3.325-0.408-0.788-0.758-1.575-1.021-2.392l-4.433-0.7c-0.408-0.058-0.7-0.438-0.7-0.846v-5.396c0-0.379 0.292-0.817 0.671-0.875l4.521-0.7c0.233-0.758 0.554-1.488 0.933-2.217-0.817-1.167-1.692-2.246-2.625-3.354-0.117-0.175-0.204-0.379-0.204-0.583s0.058-0.408 0.204-0.583c0.583-0.787 3.85-4.317 4.696-4.317 0.233 0 0.438 0.087 0.612 0.204l3.354 2.625c0.729-0.379 1.458-0.671 2.246-0.933 0.146-1.458 0.292-3.063 0.671-4.492 0.117-0.408 0.467-0.7 0.875-0.7h5.425c0.408 0 0.817 0.321 0.875 0.729l0.671 4.463c0.758 0.233 1.488 0.554 2.188 0.904l3.442-2.596c0.175-0.146 0.379-0.204 0.583-0.204 0.233 0 0.438 0.088 0.613 0.233 0.758 0.7 4.2 3.85 4.2 4.667 0 0.204-0.087 0.379-0.204 0.554-0.846 1.138-1.721 2.188-2.537 3.325 0.379 0.787 0.729 1.575 0.992 2.392l4.433 0.671c0.408 0.087 0.7 0.467 0.7 0.875zM56 40.877v4.083c0 0.438-3.762 0.846-4.346 0.904-0.233 0.554-0.525 1.050-0.875 1.517 0.263 0.583 1.488 3.5 1.488 4.025 0 0.087-0.029 0.146-0.117 0.204-0.35 0.204-3.471 2.071-3.617 2.071-0.379 0-2.567-2.917-2.858-3.354-0.292 0.029-0.583 0.058-0.875 0.058s-0.583-0.029-0.875-0.058c-0.292 0.438-2.479 3.354-2.858 3.354-0.146 0-3.267-1.867-3.617-2.071-0.087-0.058-0.117-0.146-0.117-0.204 0-0.496 1.225-3.442 1.488-4.025-0.35-0.467-0.642-0.963-0.875-1.517-0.583-0.058-4.346-0.467-4.346-0.904v-4.083c0-0.438 3.762-0.846 4.346-0.904 0.233-0.525 0.525-1.050 0.875-1.517-0.262-0.583-1.488-3.529-1.488-4.025 0-0.058 0.029-0.146 0.117-0.204 0.35-0.175 3.471-2.042 3.617-2.042 0.379 0 2.567 2.887 2.858 3.325 0.292-0.029 0.583-0.058 0.875-0.058s0.583 0.029 0.875 0.058c0.817-1.137 1.692-2.275 2.683-3.267l0.175-0.058c0.146 0 3.267 1.837 3.617 2.042 0.087 0.058 0.117 0.146 0.117 0.204 0 0.525-1.225 3.442-1.488 4.025 0.35 0.467 0.642 0.992 0.875 1.517 0.583 0.058 4.346 0.467 4.346 0.904zM56 11.010v4.083c0 0.438-3.762 0.846-4.346 0.904-0.233 0.554-0.525 1.050-0.875 1.517 0.263 0.583 1.488 3.5 1.488 4.025 0 0.088-0.029 0.146-0.117 0.204-0.35 0.204-3.471 2.071-3.617 2.071-0.379 0-2.567-2.917-2.858-3.354-0.292 0.029-0.583 0.058-0.875 0.058s-0.583-0.029-0.875-0.058c-0.292 0.438-2.479 3.354-2.858 3.354-0.146 0-3.267-1.867-3.617-2.071-0.087-0.058-0.117-0.146-0.117-0.204 0-0.496 1.225-3.442 1.488-4.025-0.35-0.467-0.642-0.963-0.875-1.517-0.583-0.058-4.346-0.467-4.346-0.904v-4.083c0-0.438 3.762-0.846 4.346-0.904 0.233-0.525 0.525-1.050 0.875-1.517-0.262-0.583-1.488-3.529-1.488-4.025 0-0.058 0.029-0.146 0.117-0.204 0.35-0.175 3.471-2.042 3.617-2.042 0.379 0 2.567 2.888 2.858 3.325 0.292-0.029 0.583-0.058 0.875-0.058s0.583 0.029 0.875 0.058c0.817-1.138 1.692-2.275 2.683-3.267l0.175-0.058c0.146 0 3.267 1.837 3.617 2.042 0.087 0.058 0.117 0.146 0.117 0.204 0 0.525-1.225 3.442-1.488 4.025 0.35 0.467 0.642 0.992 0.875 1.517 0.583 0.058 4.346 0.467 4.346 0.904z',
				dollar:
					'M42.565 37.031c0 6.375-4.563 11.406-11.187 12.5v5.469c0 0.563-0.438 1-1 1h-4.219c-0.531 0-1-0.438-1-1v-5.469c-7.312-1.031-11.312-5.406-11.469-5.594-0.312-0.375-0.344-0.906-0.063-1.281l3.219-4.219c0.156-0.219 0.438-0.344 0.719-0.375s0.563 0.063 0.75 0.281c0.063 0.031 4.438 4.219 9.969 4.219 3.063 0 6.375-1.625 6.375-5.156 0-3-3.688-4.469-7.906-6.156-5.625-2.219-12.625-5.031-12.625-12.875 0-5.75 4.5-10.5 11.031-11.75v-5.625c0-0.563 0.469-1 1-1h4.219c0.563 0 1 0.438 1 1v5.5c6.344 0.719 9.719 4.156 9.844 4.281 0.312 0.344 0.375 0.812 0.156 1.187l-2.531 4.563c-0.156 0.281-0.406 0.469-0.719 0.5-0.312 0.063-0.594-0.031-0.844-0.219-0.031-0.031-3.812-3.375-8.5-3.375-3.969 0-6.719 1.969-6.719 4.812 0 3.312 3.812 4.781 8.25 6.5 5.75 2.219 12.25 4.75 12.25 12.281z',
				envelope:
					'M56 20.188v24.812c0 2.75-2.25 5-5 5h-46c-2.75 0-5-2.25-5-5v-24.812c0.938 1.031 2 1.938 3.156 2.719 5.187 3.531 10.437 7.063 15.531 10.781 2.625 1.938 5.875 4.312 9.281 4.312h0.063c3.406 0 6.656-2.375 9.281-4.312 5.094-3.688 10.344-7.25 15.562-10.781 1.125-0.781 2.188-1.687 3.125-2.719zM56 11c0 3.5-2.594 6.656-5.344 8.562-4.875 3.375-9.781 6.75-14.625 10.156-2.031 1.406-5.469 4.281-8 4.281h-0.063c-2.531 0-5.969-2.875-8-4.281-4.844-3.406-9.75-6.781-14.594-10.156-2.219-1.5-5.375-5.031-5.375-7.875 0-3.063 1.656-5.688 5-5.688h46c2.719 0 5 2.25 5 5z',
				error:
					'M28 0c15.458 0 28 12.542 28 28s-12.542 28-28 28-28-12.542-28-28 12.542-28 28-28zM32.667 45.464v-6.927c0-0.656-0.51-1.203-1.13-1.203h-7c-0.656 0-1.203 0.547-1.203 1.203v6.927c0 0.656 0.547 1.203 1.203 1.203h7c0.62 0 1.13-0.547 1.13-1.203zM32.594 32.922l0.656-22.641c0-0.255-0.109-0.51-0.365-0.656-0.219-0.182-0.547-0.292-0.875-0.292h-8.021c-0.328 0-0.656 0.109-0.875 0.292-0.255 0.146-0.365 0.401-0.365 0.656l0.62 22.641c0 0.51 0.547 0.911 1.24 0.911h6.745c0.656 0 1.203-0.401 1.24-0.911z',
				eye: 'M28 20.374q3.098 0 5.362 2.264t2.264 5.362-2.264 5.362-5.362 2.264-5.362-2.264-2.264-5.362 2.264-5.362 5.362-2.264zM28 40.749q5.243 0 8.996-3.753t3.753-8.996-3.753-8.996-8.996-3.753-8.996 3.753-3.753 8.996 3.753 8.996 8.996 3.753zM28 8.936q9.413 0 17.038 5.243t10.962 13.821q-3.336 8.579-10.962 13.821t-17.038 5.243-17.038-5.243-10.962-13.821q3.336-8.579 10.962-13.821t17.038-5.243z',
				'eye-thin':
					'M52 28c-2.969-4.594-7.031-8.531-11.906-11.031 1.25 2.125 1.906 4.563 1.906 7.031 0 7.719-6.281 14-14 14s-14-6.281-14-14c0-2.469 0.656-4.906 1.906-7.031-4.875 2.5-8.938 6.437-11.906 11.031 5.344 8.25 13.969 14 24 14s18.656-5.75 24-14zM29.5 16c0-0.812-0.687-1.5-1.5-1.5-5.219 0-9.5 4.281-9.5 9.5 0 0.812 0.687 1.5 1.5 1.5s1.5-0.687 1.5-1.5c0-3.563 2.937-6.5 6.5-6.5 0.812 0 1.5-0.687 1.5-1.5zM56 28c0 0.781-0.25 1.5-0.625 2.156-5.75 9.469-16.281 15.844-27.375 15.844s-21.625-6.406-27.375-15.844c-0.375-0.656-0.625-1.375-0.625-2.156s0.25-1.5 0.625-2.156c5.75-9.437 16.281-15.844 27.375-15.844s21.625 6.406 27.375 15.844c0.375 0.656 0.625 1.375 0.625 2.156z',
				filter:
					'M25.519 21.889c0 0-0.241-4.089-0.241-4.089s0-13.471 0-13.471c0.002-1.162-0.005-2.636 0.825-3.553 1.104-1.224 3.156-0.929 4.022 0.435 0.498 0.787 0.443 1.744 0.445 2.636 0 0 0 25.258 0 25.258s-5.052 0-5.052 0c0 0 0-7.217 0-7.217zM42.358 3.848c0.019-1.576 0.281-3.476 2.165-3.794 2.798-0.471 3.125 2.24 3.127 4.275 0 0 0 11.546 0 11.546s-2.646-0.233-2.646-0.233c0 0-2.646 0.233-2.646 0.233s0-12.028 0-12.028zM8.44 3.848c0.014-1.181 0.147-2.442 1.229-3.163 1.484-0.986 3.286-0.156 3.825 1.479 0.322 0.984 0.238 2.545 0.238 3.608 0 0 0 6.014 0 6.014s-2.646-0.197-2.646-0.197c0 0-2.646 0.197-2.646 0.197s0-7.938 0-7.938zM13.010 13.556c5.509 1.855 5.477 10.377-1.203 11.551-5.121 0.902-8.455-5.015-5.867-9.23 0.907-1.475 2.314-2.151 3.943-2.535 1.176-0.166 1.985-0.171 3.127 0.214zM46.207 28.993c-5.564 1.051-8.874-4.833-6.348-9.028 1.046-1.737 2.533-2.357 4.424-2.774 7.57-0.883 9.36 10.399 1.924 11.802zM13.732 26.46c0 0 0 24.536 0 24.536-0.002 1.215-0.067 3.079-0.844 4.063-1.066 1.352-3.094 1.222-3.984-0.226-0.496-0.808-0.462-1.958-0.464-2.875 0 0 0-25.499 0-25.499s5.292 0 5.292 0zM33.219 33.436c1.936 3.286-0.019 8.15-3.851 8.821-1.169 0.207-3.019 0.135-4.089-0.402-4.71-2.355-4.39-9.803 1.443-11.193 2.673-0.375 5.056 0.33 6.497 2.774zM45.004 30.77c0 0 2.646-0.221 2.646-0.221s0 21.409 0 21.409c-0.002 1.034 0.034 2.215-0.649 3.074-0.977 1.224-3.017 1.224-3.993 0-0.637-0.799-0.645-1.867-0.649-2.834 0 0 0-21.65 0-21.65s2.646 0.221 2.646 0.221zM27.684 43.998c0 0 2.887-0.219 2.887-0.219s0 8.66 0 8.66c-0.022 1.758-0.654 3.861-2.887 3.517-1.912-0.296-2.384-2.114-2.406-3.757 0 0 0-8.419 0-8.419s2.406 0.219 2.406 0.219z',
				filters: [
					{
						type: 'line',
						attributes: { x1: '1', y1: '17', x2: '55', y2: '17', 'stroke-width': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
					},
					{
						type: 'line',
						attributes: { x1: '1', y1: '39', x2: '55', y2: '39', 'stroke-width': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
					},
					{ type: 'circle', attributes: { cx: '18', cy: '17', r: '8', fill: 'white', 'stroke-width': '4' } },
					{ type: 'circle', attributes: { cx: '38', cy: '39', r: '8', fill: 'white', 'stroke-width': '4' } },
				],
				bullet: [
					{ type: 'circle', attributes: { cx: '28', cy: '28', r: '20', 'stroke-width': '3', fill: 'white' } },
					{ type: 'circle', attributes: { cx: '28', cy: '28', r: '13', 'stroke-width': '0' } },
				],
				'bullet-o': [{ type: 'circle', attributes: { cx: '28', cy: '28', r: '20', 'stroke-width': '3', fill: 'white' } }],
				heart:
					'M28 52c-0.5 0-1-0.188-1.375-0.563l-19.5-18.813c-0.25-0.219-7.125-6.5-7.125-14 0-9.156 5.594-14.625 14.938-14.625 5.469 0 10.594 4.312 13.062 6.75 2.469-2.437 7.594-6.75 13.062-6.75 9.344 0 14.938 5.469 14.938 14.625 0 7.5-6.875 13.781-7.156 14.063l-19.469 18.75c-0.375 0.375-0.875 0.563-1.375 0.563z',
				'heart-o':
					'M52 18.625c0-8.781-5.937-10.625-10.938-10.625-4.656 0-9.906 5.031-11.531 6.969-0.75 0.906-2.313 0.906-3.063 0-1.625-1.938-6.875-6.969-11.531-6.969-5 0-10.938 1.844-10.938 10.625 0 5.719 5.781 11.031 5.844 11.094l18.156 17.5 18.125-17.469c0.094-0.094 5.875-5.406 5.875-11.125zM56 18.625c0 7.5-6.875 13.781-7.156 14.063l-19.469 18.75c-0.375 0.375-0.875 0.563-1.375 0.563s-1-0.188-1.375-0.563l-19.5-18.813c-0.25-0.219-7.125-6.5-7.125-14 0-9.156 5.594-14.625 14.938-14.625 5.469 0 10.594 4.312 13.062 6.75 2.469-2.437 7.594-6.75 13.062-6.75 9.344 0 14.938 5.469 14.938 14.625z',
				info: 'M56.1425 28.2143C56.1425 43.6783 43.6065 56.2143 28.1425 56.2143C12.6786 56.2143 0.142578 43.6783 0.142578 28.2143C0.142578 12.7504 12.6786 0.214325 28.1425 0.214325C43.6065 0.214325 56.1425 12.7504 56.1425 28.2143ZM32.2543 16.7406C33.1441 15.8361 33.587 14.7358 33.587 13.4469C33.587 12.1603 33.1441 11.0578 32.2543 10.1417C31.3665 9.22792 30.2961 8.76988 29.0452 8.76988C27.7901 8.76988 26.7156 9.22562 25.8194 10.1417C24.9232 11.0578 24.4741 12.1603 24.4741 13.4469C24.4741 14.7358 24.9232 15.8361 25.8194 16.7406C26.7177 17.6498 27.7901 18.1032 29.0452 18.1032C30.2961 18.1032 31.3665 17.6498 32.2543 16.7406ZM29.9419 45.5994C30.7373 45.2628 31.8057 44.7746 33.1417 44.1326C33.1417 44.1326 32.9859 42.1999 32.4746 42.3716C31.9633 42.5432 31.5033 42.6302 31.0983 42.6302C30.237 42.6302 29.6304 42.4585 29.2785 42.113C28.9285 41.7675 28.7544 41.1188 28.7544 40.1669C28.7544 39.7902 28.8076 39.2285 28.9175 38.4928C29.0238 37.7527 29.1466 37.0951 29.2822 36.52L30.9462 29.3555C31.1093 28.6979 31.2211 27.9756 31.2816 27.1865C31.342 26.3996 31.3714 25.849 31.3714 25.5369C31.3714 24.0255 30.9352 22.7995 30.0647 21.8543C29.1942 20.9091 27.9536 20.4365 26.3464 20.4365C25.4521 20.4365 24.5065 20.6305 23.5059 21.0161C22.5053 21.4018 21.4588 21.8654 20.3648 22.4071C20.3648 22.4071 20.6323 24.3198 21.0868 24.157C21.5395 23.9943 21.983 23.9096 22.4155 23.9096C23.2969 23.9096 23.8907 24.0924 24.2022 24.4535C24.5138 24.8146 24.6695 25.4566 24.6695 26.3751C24.6695 26.8833 24.6201 27.4473 24.5174 28.0603C24.4167 28.6778 24.2902 29.3309 24.1418 30.0198L22.4704 37.2111C22.322 37.9667 22.2139 38.6444 22.1461 39.2441C22.0783 39.8437 22.0453 40.4322 22.0453 41.0051C22.0453 42.483 22.4943 43.7024 23.3922 44.6632C24.2902 45.6217 25.5492 46.1032 27.1674 46.1032C28.2211 46.1032 29.1466 45.936 29.9419 45.5994Z',
				'layout-grid':
					'M16 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM16 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM36 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM16 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM36 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM36 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3z',
				'layout-large':
					'M25.846 34.461v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308zM25.846 8.615v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308zM56 34.461v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308zM56 8.615v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308z',
				'layout-list':
					'M16 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM16 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 41v6c0 1.656-1.344 3-3 3h-30c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h30c1.656 0 3 1.344 3 3zM16 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 25v6c0 1.656-1.344 3-3 3h-30c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h30c1.656 0 3 1.344 3 3zM56 9v6c0 1.656-1.344 3-3 3h-30c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h30c1.656 0 3 1.344 3 3z',
				minus:
					'M56 24.182v7.636c0 2.108-1.71 3.818-3.818 3.818h-48.364c-2.108 0-3.818-1.71-3.818-3.818v-7.636c0-2.108 1.71-3.818 3.818-3.818h48.364c2.108 0 3.818 1.71 3.818 3.818z',
				'minus-thin': 'M0 23.297h56v9.406h-56v-9.406z',
				plus: 'M56 24.182v7.636c0 2.108-1.71 3.818-3.818 3.818h-16.545v16.545c0 2.108-1.71 3.818-3.818 3.818h-7.636c-2.108 0-3.818-1.71-3.818-3.818v-16.545h-16.545c-2.108 0-3.818-1.71-3.818-3.818v-7.636c0-2.108 1.71-3.818 3.818-3.818h16.545v-16.545c0-2.108 1.71-3.818 3.818-3.818h7.636c2.108 0 3.818 1.71 3.818 3.818v16.545h16.545c2.108 0 3.818 1.71 3.818 3.818z',
				'plus-thin': 'M56 31.946h-24.054v24.054h-7.893v-24.054h-24.054v-7.893h24.054v-24.054h7.893v24.054h24.054v7.893z',
				'rotate-left':
					'M56 28c0 15.422-12.578 28-28 28-8.349 0-16.224-3.682-21.547-10.099-0.365-0.474-0.328-1.167 0.073-1.568l4.995-5.031c0.255-0.219 0.583-0.328 0.911-0.328 0.328 0.036 0.656 0.182 0.839 0.438 3.573 4.63 8.932 7.255 14.729 7.255 10.281 0 18.667-8.385 18.667-18.667s-8.385-18.667-18.667-18.667c-4.776 0-9.297 1.823-12.687 4.995l4.995 5.031c0.693 0.656 0.875 1.677 0.51 2.516-0.365 0.875-1.203 1.458-2.151 1.458h-16.333c-1.276 0-2.333-1.057-2.333-2.333v-16.333c0-0.948 0.583-1.786 1.458-2.151 0.839-0.365 1.859-0.182 2.516 0.51l4.74 4.703c5.141-4.849 12.104-7.729 19.286-7.729 15.422 0 28 12.578 28 28z',
				'rotate-right':
					'M56 4.667v16.333c0 1.276-1.057 2.333-2.333 2.333h-16.333c-0.948 0-1.786-0.583-2.151-1.458-0.365-0.839-0.182-1.859 0.51-2.516l5.031-5.031c-3.427-3.172-7.948-4.995-12.724-4.995-10.281 0-18.667 8.385-18.667 18.667s8.385 18.667 18.667 18.667c5.797 0 11.156-2.625 14.729-7.255 0.182-0.255 0.51-0.401 0.839-0.438 0.328 0 0.656 0.109 0.911 0.328l4.995 5.031c0.438 0.401 0.438 1.094 0.073 1.568-5.323 6.417-13.198 10.099-21.547 10.099-15.422 0-28-12.578-28-28s12.578-28 28-28c7.182 0 14.146 2.88 19.286 7.729l4.74-4.703c0.656-0.693 1.677-0.875 2.552-0.51 0.839 0.365 1.422 1.203 1.422 2.151z',
				search:
					'M38.769 23.692c0-8.313-6.764-15.077-15.077-15.077s-15.077 6.764-15.077 15.077 6.764 15.077 15.077 15.077 15.077-6.764 15.077-15.077zM56 51.692c0 2.356-1.952 4.308-4.308 4.308-1.144 0-2.255-0.471-3.029-1.279l-11.543-11.51c-3.937 2.726-8.649 4.173-13.428 4.173-13.091 0-23.692-10.601-23.692-23.692s10.601-23.692 23.692-23.692 23.692 10.601 23.692 23.692c0 4.779-1.447 9.49-4.173 13.428l11.543 11.543c0.774 0.774 1.245 1.885 1.245 3.029z',
				sort: 'M48.364 35.636c0 0.676-0.278 1.312-0.756 1.79l-17.818 17.818c-0.477 0.477-1.114 0.756-1.79 0.756s-1.312-0.278-1.79-0.756l-17.818-17.818c-0.477-0.477-0.756-1.114-0.756-1.79 0-1.392 1.153-2.545 2.545-2.545h35.636c1.392 0 2.545 1.153 2.545 2.545zM48.364 20.364c0 1.392-1.153 2.545-2.545 2.545h-35.636c-1.392 0-2.545-1.153-2.545-2.545 0-0.676 0.278-1.312 0.756-1.79l17.818-17.818c0.477-0.477 1.114-0.756 1.79-0.756s1.312 0.278 1.79 0.756l17.818 17.818c0.477 0.477 0.756 1.114 0.756 1.79z',
				spinner:
					'M16.009 45.176c0 2.268-1.847 4.148-4.148 4.148-2.268 0-4.148-1.88-4.148-4.148 0-2.301 1.88-4.148 4.148-4.148 2.301 0 4.148 1.847 4.148 4.148zM32.148 51.852c0 2.301-1.847 4.148-4.148 4.148s-4.148-1.847-4.148-4.148 1.847-4.148 4.148-4.148 4.148 1.847 4.148 4.148zM9.333 29.037c0 2.301-1.847 4.148-4.148 4.148s-4.148-1.847-4.148-4.148 1.847-4.148 4.148-4.148 4.148 1.847 4.148 4.148zM48.287 45.176c0 2.268-1.88 4.148-4.148 4.148-2.301 0-4.148-1.88-4.148-4.148 0-2.301 1.847-4.148 4.148-4.148 2.268 0 4.148 1.847 4.148 4.148zM17.046 12.898c0 2.852-2.333 5.185-5.185 5.185s-5.185-2.333-5.185-5.185 2.333-5.185 5.185-5.185 5.185 2.333 5.185 5.185zM54.963 29.037c0 2.301-1.847 4.148-4.148 4.148s-4.148-1.847-4.148-4.148 1.847-4.148 4.148-4.148 4.148 1.847 4.148 4.148zM34.222 6.222c0 3.435-2.787 6.222-6.222 6.222s-6.222-2.787-6.222-6.222 2.787-6.222 6.222-6.222 6.222 2.787 6.222 6.222zM51.398 12.898c0 4.018-3.273 7.259-7.259 7.259-4.018 0-7.259-3.241-7.259-7.259 0-3.986 3.241-7.259 7.259-7.259 3.986 0 7.259 3.273 7.259 7.259z',
				square: 'M0 0h56v56h-56z',
				star: 'M56 21.993c0 0.606-0.438 1.178-0.875 1.615l-12.216 11.913 2.894 16.827c0.034 0.236 0.034 0.438 0.034 0.673 0 0.875-0.404 1.683-1.38 1.683-0.471 0-0.942-0.168-1.346-0.404l-15.111-7.942-15.111 7.942c-0.438 0.236-0.875 0.404-1.346 0.404-0.976 0-1.413-0.808-1.413-1.683 0-0.236 0.034-0.438 0.067-0.673l2.894-16.827-12.25-11.913c-0.404-0.438-0.841-1.010-0.841-1.615 0-1.010 1.043-1.413 1.885-1.548l16.894-2.457 7.572-15.312c0.303-0.639 0.875-1.38 1.649-1.38s1.346 0.74 1.649 1.38l7.572 15.312 16.894 2.457c0.808 0.135 1.885 0.538 1.885 1.548z',
				'star-half':
					'M39.919 32.426l8.651-8.415-14.205-2.087-1.010-2.020-5.352-10.839v32.415l1.986 1.043 10.704 5.655-2.020-11.949-0.404-2.222zM55.134 23.607l-12.219 11.916 2.895 16.83c0.236 1.481-0.303 2.356-1.346 2.356-0.37 0-0.842-0.135-1.346-0.404l-15.113-7.944-15.113 7.944c-0.505 0.269-0.976 0.404-1.346 0.404-1.043 0-1.582-0.875-1.346-2.356l2.895-16.83-12.252-11.916c-1.447-1.447-0.976-2.861 1.043-3.164l16.897-2.457 7.574-15.315c0.438-0.909 1.043-1.38 1.649-1.38v0c0.606 0 1.178 0.471 1.649 1.38l7.574 15.315 16.897 2.457c2.020 0.303 2.491 1.717 1.010 3.164z',
				'star-o':
					'M38.264 34.007l10.298-9.995-14.202-2.087-6.361-12.856-6.361 12.856-14.202 2.087 10.298 9.995-2.457 14.168 12.721-6.697 12.688 6.697zM56 21.993c0 0.606-0.438 1.178-0.875 1.615l-12.216 11.913 2.894 16.827c0.034 0.236 0.034 0.438 0.034 0.673 0 0.909-0.404 1.683-1.38 1.683-0.471 0-0.942-0.168-1.346-0.404l-15.111-7.942-15.111 7.942c-0.438 0.236-0.875 0.404-1.346 0.404-0.976 0-1.413-0.808-1.413-1.683 0-0.236 0.034-0.438 0.067-0.673l2.894-16.827-12.25-11.913c-0.404-0.438-0.841-1.010-0.841-1.615 0-1.010 1.043-1.413 1.885-1.548l16.894-2.457 7.572-15.312c0.303-0.639 0.875-1.38 1.649-1.38s1.346 0.74 1.649 1.38l7.572 15.312 16.894 2.457c0.808 0.135 1.885 0.538 1.885 1.548z',
				'video-camera':
					'M56 11v34c0 0.812-0.5 1.531-1.219 1.844-0.25 0.094-0.531 0.156-0.781 0.156-0.531 0-1.031-0.188-1.406-0.594l-12.594-12.594v5.187c0 4.969-4.031 9-9 9h-22c-4.969 0-9-4.031-9-9v-22c0-4.969 4.031-9 9-9h22c4.969 0 9 4.031 9 9v5.156l12.594-12.562c0.375-0.406 0.875-0.594 1.406-0.594 0.25 0 0.531 0.063 0.781 0.156 0.719 0.312 1.219 1.031 1.219 1.844z',
				warn: 'M31.2981 5.28228C29.8323 2.74341 26.1677 2.74341 24.7019 5.28228L0.515899 47.1737C-0.94992 49.7126 0.88235 52.8861 3.81399 52.8861H52.186C55.1176 52.8861 56.9499 49.7126 55.4841 47.1737L31.2981 5.28228ZM25.2229 35.0037L24.8264 18.837C24.8264 18.655 24.8923 18.4729 25.047 18.3686C25.1794 18.2387 25.3776 18.1601 25.5759 18.1601H30.4241C30.6223 18.1601 30.8206 18.238 30.953 18.3686C31.1071 18.4729 31.1736 18.655 31.1736 18.837L30.7988 35.0037C30.7988 35.3679 30.4682 35.6542 30.0493 35.6542H25.9724C25.5759 35.6542 25.2453 35.3679 25.2229 35.0037ZM25.1788 43.9593V39.0131C25.1788 38.5447 25.487 38.1541 25.8618 38.1541H30.0929C30.4894 38.1541 30.82 38.5447 30.82 39.0131V43.9593C30.82 44.4277 30.4894 44.8183 30.0929 44.8183H25.8618C25.487 44.8183 25.1788 44.4277 25.1788 43.9593Z',
				wrench:
					'M12.407 45.809c0-1.193-0.988-2.181-2.181-2.181s-2.181 0.988-2.181 2.181 0.988 2.181 2.181 2.181 2.181-0.988 2.181-2.181zM34.357 31.494l-23.245 23.245c-0.784 0.784-1.909 1.261-3.068 1.261s-2.284-0.477-3.102-1.261l-3.613-3.681c-0.818-0.784-1.295-1.909-1.295-3.068s0.477-2.284 1.295-3.102l23.211-23.211c1.772 4.465 5.351 8.044 9.816 9.816zM55.966 16.667c0 1.125-0.409 2.522-0.784 3.613-2.147 6.067-7.976 10.259-14.418 10.259-8.419 0-15.27-6.851-15.27-15.27s6.851-15.27 15.27-15.27c2.488 0 5.726 0.75 7.805 2.147 0.341 0.239 0.545 0.545 0.545 0.954 0 0.375-0.239 0.75-0.545 0.954l-9.987 5.76v7.635l6.578 3.647c1.125-0.648 9.032-5.624 9.714-5.624s1.091 0.511 1.091 1.193z',
			};
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
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/controller.tsx');
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
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_providers__WEBPACK_IMPORTED_MODULE_5__.e2, {
										controller,
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)('div', {
											className: `ss__template-select ss__theme__${theme.name}`,
											children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Component, {
												controller,
												...componentProp,
												...otherProps,
											}),
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
		'./components/src/providers/controller.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Bk: () => withController, as: () => useController, e2: () => ControllerProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const ControllerContext = (0, preact__WEBPACK_IMPORTED_MODULE_0__.q6)(null),
				ControllerProvider = ({ children, controller }) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(ControllerContext.Provider, { value: controller, children }),
				useController = () => (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.NT)(ControllerContext);
			function withController(Component) {
				return (props) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Component, { controller: useController(), ...props });
			}
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
		'./components/src/providers/treePath.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { LU: () => useTreePath, QE: () => withTreePath, p3: () => TreePathProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const TreePathContext = (0, preact__WEBPACK_IMPORTED_MODULE_0__.q6)(null),
				TreePathProvider = ({ children, path }) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(TreePathContext.Provider, { value: path, children }),
				useTreePath = () => (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.NT)(TreePathContext) || void 0;
			function withTreePath(Component) {
				return (props) => {
					const treePath = useTreePath();
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Component, { treePath, ...props });
				};
			}
		},
		'./components/src/themes/base/base.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { E: () => base });
			const atoms_default = {},
				atoms_mobile = {},
				atoms_tablet = {},
				atoms_desktop = {},
				molecules_default = {},
				molecules_mobile = {},
				molecules_tablet = {},
				molecules_desktop = {},
				organisms_default = {},
				organisms_mobile = {},
				organisms_tablet = {},
				organisms_desktop = {};
			var transformThemeComponent = __webpack_require__('./components/src/themes/utils/transformThemeComponent.ts'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				autocompleteTemplate = __webpack_require__('./components/src/themes/themeComponents/autocompleteTemplate.ts');
			const autocompleteTemplate_autocompleteTemplate = {
				default: {
					props: { ...autocompleteTemplate.n.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: autocompleteTemplate.n.default?.components,
				},
				mobile: autocompleteTemplate.n.mobile,
				desktop: autocompleteTemplate.n.desktop,
				tablet: autocompleteTemplate.n.tablet,
			};
			var recommendation = __webpack_require__('./components/src/themes/themeComponents/recommendation.ts');
			const recommendation_recommendation = {
				default: {
					props: {
						...recommendation.C.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({ margin: '20px 0', '& .ss__recommendation__title': { color: variables?.colors?.primary } });
						},
					},
					components: recommendation.C.default?.components,
				},
				mobile: recommendation.C.mobile,
				desktop: recommendation.C.desktop,
				tablet: recommendation.C.tablet,
			};
			const recommendationBundle_recommendationBundle = __webpack_require__('./components/src/themes/themeComponents/recommendationBundle.ts')._;
			const recommendationBundleEasyAdd_recommendationBundleEasyAdd = __webpack_require__(
				'./components/src/themes/themeComponents/recommendationBundleEasyAdd.ts'
			).j;
			const recommendationBundleList_recommendationBundleList = __webpack_require__(
				'./components/src/themes/themeComponents/recommendationBundleList.ts'
			).e;
			const recommendationBundleVertical_recommendationBundleVertical = __webpack_require__(
				'./components/src/themes/themeComponents/recommendationBundleVertical.ts'
			).W;
			const recommendationGrid_recommendationGrid = __webpack_require__('./components/src/themes/themeComponents/recommendationGrid.ts').W;
			const recommendationEmail_recommendationEmail = __webpack_require__('./components/src/themes/themeComponents/recommendationEmail.ts').O;
			const search_search = __webpack_require__('./components/src/themes/themeComponents/search.ts').D;
			const searchHorizontal_searchHorizontal = __webpack_require__('./components/src/themes/themeComponents/searchHorizontal.ts').X;
			var searchBoca = __webpack_require__('./components/src/themes/themeComponents/searchBoca.ts');
			const searchBoca_searchBoca = {
				default: {
					props: {
						...searchBoca.k.default?.props,
						themeStyleScript: ({ theme }) =>
							(0, emotion_react_browser_esm.AH)({
								'.ss__toolbar .ss__button--sidebar-toggle-button-wrapper': { marginRight: 'inherit', width: 'calc(270px + 1.5em)' },
							}),
					},
					components: searchBoca.k.default?.components,
				},
				mobile: searchBoca.k.mobile,
				desktop: searchBoca.k.desktop,
				tablet: searchBoca.k.tablet,
			};
			const searchSnapnco_searchSnapnco = __webpack_require__('./components/src/themes/themeComponents/searchSnapnco.ts').x;
			const searchSnappy_searchSnappy = __webpack_require__('./components/src/themes/themeComponents/searchSnappy.ts').e,
				base = {
					name: 'bocachica',
					variables: {
						breakpoints: { mobile: 767, tablet: 1024, desktop: 1400 },
						colors: { text: '#333333', primary: '#3A23AD', secondary: '#4c3ce2', accent: '#00cee1' },
					},
					components: {
						...atoms_default,
						...molecules_default,
						...organisms_default,
						...{
							...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.default),
							...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.default),
							...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.default),
							...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.default),
							...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.default),
							...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.default),
							...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.default),
							...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.default),
							...(0, transformThemeComponent.Z)('search', search_search.default),
							...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.default),
							...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.default),
							...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.default),
							...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.default),
						},
					},
					responsive: {
						mobile: {
							...atoms_mobile,
							...molecules_mobile,
							...organisms_mobile,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.mobile),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.mobile),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.mobile),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.mobile),
								...(0, transformThemeComponent.Z)('search', search_search.mobile),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.mobile),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.mobile),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.mobile),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.mobile),
							},
						},
						tablet: {
							...atoms_tablet,
							...molecules_tablet,
							...organisms_tablet,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.tablet),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.tablet),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.tablet),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.tablet),
								...(0, transformThemeComponent.Z)('search', search_search.tablet),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.tablet),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.tablet),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.tablet),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.tablet),
							},
						},
						desktop: {
							...atoms_desktop,
							...molecules_desktop,
							...organisms_desktop,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.desktop),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.desktop),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.desktop),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.desktop),
								...(0, transformThemeComponent.Z)('search', search_search.desktop),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.desktop),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.desktop),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.desktop),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.desktop),
							},
						},
					},
				};
		},
		'./components/src/themes/bocachica/bocachica.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { S: () => bocachica });
			var transformThemeComponent = __webpack_require__('./components/src/themes/utils/transformThemeComponent.ts'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				node_modules_color = __webpack_require__('../../node_modules/color/index.js'),
				color_default = __webpack_require__.n(node_modules_color);
			const button_button = {
					default: {
						props: {
							themeStyleScript: ({ backgroundColor, theme }) => {
								const variables = theme?.variables,
									hoverBackgroundColorObj = new (color_default())(backgroundColor || variables?.colors.primary),
									hoverColorObj = hoverBackgroundColorObj.isDark() ? color_default()('#fff') : color_default()('#000');
								return (0, emotion_react_browser_esm.AH)({
									backgroundColor: backgroundColor || '#fff',
									borderRadius: '3px',
									'&:not(.ss__button--disabled):hover': {
										backgroundColor: hoverBackgroundColorObj.hex(),
										color: hoverColorObj.hex(),
										'.ss__icon': { fill: hoverColorObj.hex(), stroke: hoverColorObj.hex() },
									},
								});
							},
						},
					},
				},
				dropdown = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									position: 'relative',
									'&.ss__dropdown--open': { '& .ss__dropdown__content': { transition: 'opacity .5s ease' } },
								}),
						},
					},
				},
				icon = {
					default: {
						props: {
							themeStyleScript: ({ color, height, width, size, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									fill: color || variables?.colors?.accent,
									stroke: color || variables?.colors?.accent,
									width: width || size,
									height: height || size,
								});
							},
						},
					},
				},
				image_image = {
					default: { props: { themeStyleScript: ({ visibility, theme }) => (0, emotion_react_browser_esm.AH)({ '& img': { visibility } }) } },
				},
				loadingBar = {
					default: {
						props: {
							themeStyleScript: ({ color, backgroundColor, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									background: backgroundColor || '#f8f8f8',
									'& .ss__loading-bar__bar': { background: `${color || variables?.colors?.accent || '#ccc'}` },
								});
							},
						},
					},
				},
				price = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									margin: '0 0.5rem 0 0',
									'&.ss__price--strike': { color: variables?.colors?.secondary || 'inherit', opacity: 0.5 },
								});
							},
						},
					},
				},
				searchHeader = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									paddingBottom: '10px',
									textAlign: 'center',
									'.ss__search-header__title': { color: variables?.colors?.primary, marginBottom: '5px' },
									'.ss__search-header__title--corrected': { color: variables?.colors?.secondary },
								});
							},
							titleText: (data) => 'Search Results' + (data.search?.query?.string ? ` for "${data.search.query.string}"` : ''),
						},
					},
				},
				skeleton = { default: { props: {} } },
				atoms_default = {
					...(0, transformThemeComponent.Z)('button', button_button.default),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.default),
					...(0, transformThemeComponent.Z)('icon', icon.default),
					...(0, transformThemeComponent.Z)('image', image_image.default),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.default),
					...(0, transformThemeComponent.Z)('price', price.default),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.default),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.default),
				},
				atoms_mobile = {
					...(0, transformThemeComponent.Z)('button', button_button.mobile),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.mobile),
					...(0, transformThemeComponent.Z)('icon', icon.mobile),
					...(0, transformThemeComponent.Z)('image', image_image.mobile),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.mobile),
					...(0, transformThemeComponent.Z)('price', price.mobile),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.mobile),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.mobile),
				},
				atoms_tablet = {
					...(0, transformThemeComponent.Z)('dropdown', dropdown.tablet),
					...(0, transformThemeComponent.Z)('icon', icon.tablet),
					...(0, transformThemeComponent.Z)('image', image_image.tablet),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.tablet),
					...(0, transformThemeComponent.Z)('price', price.tablet),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.tablet),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.tablet),
				},
				atoms_desktop = {
					...(0, transformThemeComponent.Z)('button', button_button.desktop),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.desktop),
					...(0, transformThemeComponent.Z)('icon', icon.desktop),
					...(0, transformThemeComponent.Z)('image', image_image.desktop),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.desktop),
					...(0, transformThemeComponent.Z)('price', price.desktop),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.desktop),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.desktop),
				},
				carousel = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.swiper-pagination-bullet': {
										background: '#ccc',
										opacity: '.5',
										'&.swiper-pagination-bullet-active': { opacity: '1', background: variables?.colors?.accent || '#3A23AD' },
									},
								});
							},
						},
					},
				},
				checkbox_checkbox = {
					default: {
						props: {
							themeStyleScript: ({ color, theme }) => {
								const variables = theme?.variables,
									backgroundColorObj = new (color_default())(color || variables?.colors.primary),
									backgroundTextColorObj = backgroundColorObj.isDark() ? new (color_default())('#fff') : new (color_default())('#000');
								return (0, emotion_react_browser_esm.AH)({
									border: `1px solid ${backgroundColorObj.hex()}`,
									borderRadius: '3px',
									'&.ss__checkbox--active': {
										backgroundColor: backgroundColorObj.hex(),
										'.ss__icon': { fill: backgroundTextColorObj.hex(), stroke: backgroundTextColorObj.hex() },
									},
									'&.ss__checkbox--disabled': { opacity: 0.3 },
								});
							},
							size: '18px',
						},
					},
				},
				errorHandler = { default: { props: {} } },
				facetGridOptions = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables,
									backgroundColorObj = new (color_default())(variables?.colors.primary),
									colorObj = backgroundColorObj.isDark() ? new (color_default())('#fff') : new (color_default())('#000');
								return (0, emotion_react_browser_esm.AH)({
									a: { color: theme?.variables?.colors?.text },
									'& .ss__facet-grid-options__option': {
										border: `1px solid ${backgroundColorObj.hex()}`,
										borderRadius: '3px',
										'&.ss__facet-grid-options__option--filtered': { background: backgroundColorObj.hex(), color: colorObj.hex() },
										'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer' },
									},
								});
							},
							gapSize: '5px',
							columns: 5,
						},
					},
				},
				facetHierarchyOptions = {
					default: {
						props: {
							themeStyleScript: ({ horizontal, theme }) => {
								const variables = theme?.variables;
								return horizontal
									? (0, emotion_react_browser_esm.AH)({
											'.ss__facet-hierarchy-options__option': {
												color: variables?.colors?.secondary,
												border: `1px solid ${variables?.colors?.secondary || '#333'}`,
												padding: '0.5em 0.5em',
												'&.ss__facet-hierarchy-options__option--filtered': {
													fontWeight: 'bold',
													color: theme?.variables?.colors?.primary,
													marginRight: '2em',
												},
												'&.ss__facet-hierarchy-options__option--return': { '&:before': { color: variables?.colors?.accent } },
											},
									  })
									: (0, emotion_react_browser_esm.AH)({
											'.ss__facet-hierarchy-options__option': {
												color: variables?.colors?.secondary,
												'&.ss__facet-hierarchy-options__option--return': { '&:before': { color: variables?.colors?.accent } },
											},
									  });
							},
						},
					},
				},
				facetListOptions = {
					default: {
						props: {
							themeStyleScript: ({ horizontal, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__facet-list-options__option': {
										margin: horizontal ? '0 5px 5px 0' : '0 0 5px 0',
										color: variables?.colors?.secondary,
										border: horizontal ? `1px solid ${variables?.colors?.secondary || '#333'}` : void 0,
										padding: horizontal ? '0.5em 0.5em' : void 0,
										textDecoration: 'none',
										'&:hover': { cursor: 'pointer' },
									},
								});
							},
						},
					},
				},
				facetPaletteOptions = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									a: { color: theme?.variables?.colors?.text },
									'.ss__facet-palette-options__option': {
										'&:hover': { cursor: 'pointer', '.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent !important' } },
										'.ss__facet-palette-options__option__wrapper': { borderRadius: '3px', padding: '0px' },
										'.ss__facet-palette-options__option__palette': { borderRadius: '3px' },
									},
								}),
							gapSize: '0px',
							columns: 5,
						},
					},
				},
				facetSlider = {
					default: {
						props: {
							themeStyleScript: ({
								railColor,
								trackColor,
								handleColor,
								valueTextColor,
								handleDraggingColor,
								showTicks,
								stickyHandleLabel,
								theme,
							}) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									marginBottom: showTicks && stickyHandleLabel ? '22px' : showTicks || stickyHandleLabel ? '10px' : '5px',
									color: variables?.colors?.secondary,
									'& .ss__facet-slider__rail': { background: railColor || variables?.colors?.secondary || '#333' },
									'& .ss__facet-slider__segment': { background: trackColor || '#f2f2f2', borderRadius: '3px' },
									'& .ss__facet-slider__handles': {
										'& button': {
											'& .ss__facet-slider__handle': {
												background: handleColor || variables?.colors?.secondary || '#333',
												color: valueTextColor || variables?.colors?.secondary || 'initial',
												'&.ss__facet-slider__handle--active': {
													background: handleDraggingColor || handleColor || variables?.colors?.secondary || '#000',
												},
											},
										},
									},
									'& .ss__facet-slider__labels': { color: variables?.colors?.secondary || valueTextColor },
								});
							},
						},
					},
				},
				filter = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables,
									backgroundColor = new (color_default())(variables?.colors.primary),
									backgroundTextColor = backgroundColor.isDark() ? '#fff' : '#000';
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__filter__button': {
										backgroundColor: backgroundColor.hex(),
										color: backgroundTextColor,
										'& .ss__filter__button__icon': { fill: backgroundTextColor, stroke: backgroundTextColor },
									},
								});
							},
						},
					},
				},
				grid = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__grid__options': {
										'.ss__grid__option': {
											'&.ss__grid__option--selected': { border: `3px solid ${theme?.variables?.colors?.primary || '#333'}`, fontWeight: 'bold' },
										},
									},
								}),
							hideShowLess: !0,
							overflowButtonInGrid: !0,
						},
					},
				},
				layoutSelector = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.ss__button__content': { gap: '7px' },
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
							hideLabel: !0,
						},
					},
				},
				list = {
					default: {
						props: { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ gap: '8px', '& .ss__list__options': { gap: '10px' } }) },
						components: { '*list icon': { size: '24px' } },
					},
				},
				loadMore = {
					default: {
						props: {
							themeStyleScript: ({ color, backgroundColor, theme }) => {
								const variables = theme?.variables,
									barColour = new (color_default())(color || variables?.colors.accent),
									backgroundColour = backgroundColor ? new (color_default())(backgroundColor) : barColour.lightness(90);
								return (0, emotion_react_browser_esm.AH)({
									'.ss__button': { '.ss__button__content': { display: 'inline-flex', alignItems: 'center', gap: '5px' } },
									'.ss__load-more__progress': {
										'.ss__load-more__progress__indicator': {
											background: backgroundColour.hex(),
											'.ss__load-more__progress__indicator__bar': { background: barColour.hex() },
										},
									},
								});
							},
						},
					},
				},
				overlayBadge = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ '.ss__overlay-badge__grid-wrapper': { padding: '0.5rem' } }),
						},
					},
				},
				pagination = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__pagination__page': {
										color: variables?.colors?.secondary,
										'&.ss__pagination__page--active': { textDecoration: 'underline' },
									},
								});
							},
						},
					},
				},
				radio_radio = {
					default: {
						props: {
							themeStyleScript: ({ size, native, color, theme }) => {
								const variables = theme?.variables;
								return native
									? (0, emotion_react_browser_esm.AH)({
											width: size,
											height: size,
											display: 'flex',
											justifyContent: 'center',
											'.ss__radio__input': { height: `calc(${size} - 30%)`, width: `calc(${size} - 30%)`, margin: 'auto' },
									  })
									: (0, emotion_react_browser_esm.AH)({
											'.ss__icon': { fill: color || variables?.colors.primary, stroke: color || variables?.colors.primary },
									  });
							},
						},
					},
				},
				radioList = { default: { props: {} } },
				result = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__result__details': { '& .ss__result__details__pricing': { '& .ss__result__price': { color: variables?.colors.secondary } } },
								});
							},
						},
					},
				},
				searchInput = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({ border: `1px solid ${variables?.colors?.secondary || '#ccc'}` });
							},
						},
					},
				},
				select_select = {
					default: {
						props: {
							themeStyleScript: ({ backgroundColor, theme }) => {
								const variables = theme?.variables,
									transparentSecondary = new (color_default())(theme?.variables?.colors?.secondary).opaquer(0.2);
								return (0, emotion_react_browser_esm.AH)({
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
												borderTopLeftRadius: '3px',
												borderTopRightRadius: '3px',
												'.ss__select__dropdown__button__icon': { transform: 'rotate(180deg)' },
											},
											'.ss__dropdown__content': {
												backgroundColor: backgroundColor || '#fff',
												boxShadow: '0 6px 12px 1px #0000001f',
												borderBottomLeftRadius: '3px',
												borderBottomRightRadius: '3px',
												zIndex: '10000',
											},
										},
									},
									'.ss__button__content': { gap: '7px' },
									'.ss__select__select': {
										border: '0px',
										marginBottom: '0px',
										'.ss__select__select__option': {
											listStyle: 'none',
											padding: '6px 30px',
											gap: '6px',
											color: variables?.colors?.secondary,
											'&.ss__select__select__option--selected': {
												backgroundColor: `${transparentSecondary.rgb().lightness(95)}` || 'rgba(109,113,117,.06)',
											},
											'&:hover': { backgroundColor: `${transparentSecondary.rgb().lightness(95)}` || 'rgba(109,113,117,.06)' },
										},
									},
								});
							},
							iconClose: 'angle-down',
							iconOpen: 'angle-down',
						},
					},
				},
				slideout = {
					default: {
						props: {
							themeStyleScript: ({ isActive, width, slideDirection, theme }) =>
								(0, emotion_react_browser_esm.AH)({
									left: 'left' == slideDirection ? (isActive ? '0' : `-${width}`) : 'right' != slideDirection ? '0' : 'initial',
									right: 'right' == slideDirection ? (isActive ? '0' : `-${width}`) : 'initial',
									bottom: 'bottom' == slideDirection ? (isActive ? '0' : '-100vh') : 'initial',
									top: 'top' == slideDirection ? (isActive ? '0' : '-100vh') : 'bottom' == slideDirection ? 'initial' : '0',
									background: '#fff',
								}),
						},
					},
				},
				perPage = {
					default: {
						props: { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ '.ss__button__content': { gap: '7px' } }) },
						components: { '*perPage icon': { size: '12px' } },
					},
				},
				rating = { default: { props: {} } },
				sortBy = {
					default: {
						props: { themeStyleScript: () => (0, emotion_react_browser_esm.AH)({ '.ss__button__content': { gap: '7px' } }) },
						components: { '*sortBy icon': { size: '12px' } },
					},
				},
				swatches = { default: { props: {} } },
				variantSelection = { default: { props: {} } },
				terms = { default: { props: { styleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) } } },
				molecules_default = {
					...(0, transformThemeComponent.Z)('carousel', carousel.default),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.default),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.default),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.default),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.default),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.default),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.default),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.default),
					...(0, transformThemeComponent.Z)('filter', filter.default),
					...(0, transformThemeComponent.Z)('grid', grid.default),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.default),
					...(0, transformThemeComponent.Z)('list', list.default),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.default),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.default),
					...(0, transformThemeComponent.Z)('pagination', pagination.default),
					...(0, transformThemeComponent.Z)('radio', radio_radio.default),
					...(0, transformThemeComponent.Z)('radioList', radioList.default),
					...(0, transformThemeComponent.Z)('result', result.default),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.default),
					...(0, transformThemeComponent.Z)('select', select_select.default),
					...(0, transformThemeComponent.Z)('slideout', slideout.default),
					...(0, transformThemeComponent.Z)('perPage', perPage.default),
					...(0, transformThemeComponent.Z)('rating', rating.default),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.default),
					...(0, transformThemeComponent.Z)('swatches', swatches.default),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.default),
					...(0, transformThemeComponent.Z)('terms', terms.default),
				},
				molecules_mobile = {
					...(0, transformThemeComponent.Z)('carousel', carousel.mobile),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.mobile),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.mobile),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.mobile),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.mobile),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.mobile),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.mobile),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.mobile),
					...(0, transformThemeComponent.Z)('filter', filter.mobile),
					...(0, transformThemeComponent.Z)('grid', grid.mobile),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.mobile),
					...(0, transformThemeComponent.Z)('list', list.mobile),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.mobile),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.mobile),
					...(0, transformThemeComponent.Z)('pagination', pagination.mobile),
					...(0, transformThemeComponent.Z)('radio', radio_radio.mobile),
					...(0, transformThemeComponent.Z)('radioList', radioList.mobile),
					...(0, transformThemeComponent.Z)('result', result.mobile),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.mobile),
					...(0, transformThemeComponent.Z)('select', select_select.mobile),
					...(0, transformThemeComponent.Z)('slideout', slideout.mobile),
					...(0, transformThemeComponent.Z)('perPage', perPage.mobile),
					...(0, transformThemeComponent.Z)('rating', rating.mobile),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.mobile),
					...(0, transformThemeComponent.Z)('swatches', swatches.mobile),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.mobile),
					...(0, transformThemeComponent.Z)('terms', terms.mobile),
				},
				molecules_tablet = {
					...(0, transformThemeComponent.Z)('carousel', carousel.tablet),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.tablet),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.tablet),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.tablet),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.tablet),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.tablet),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.tablet),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.tablet),
					...(0, transformThemeComponent.Z)('filter', filter.tablet),
					...(0, transformThemeComponent.Z)('grid', grid.tablet),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.tablet),
					...(0, transformThemeComponent.Z)('list', list.tablet),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.tablet),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.tablet),
					...(0, transformThemeComponent.Z)('pagination', pagination.tablet),
					...(0, transformThemeComponent.Z)('radio', radio_radio.tablet),
					...(0, transformThemeComponent.Z)('radioList', radioList.tablet),
					...(0, transformThemeComponent.Z)('result', result.tablet),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.tablet),
					...(0, transformThemeComponent.Z)('select', select_select.tablet),
					...(0, transformThemeComponent.Z)('slideout', slideout.tablet),
					...(0, transformThemeComponent.Z)('perPage', perPage.tablet),
					...(0, transformThemeComponent.Z)('rating', rating.tablet),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.tablet),
					...(0, transformThemeComponent.Z)('swatches', swatches.tablet),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.tablet),
					...(0, transformThemeComponent.Z)('terms', terms.tablet),
				},
				molecules_desktop = {
					...(0, transformThemeComponent.Z)('carousel', carousel.desktop),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.desktop),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.desktop),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.desktop),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.desktop),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.desktop),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.desktop),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.desktop),
					...(0, transformThemeComponent.Z)('filter', filter.desktop),
					...(0, transformThemeComponent.Z)('grid', grid.desktop),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.desktop),
					...(0, transformThemeComponent.Z)('list', list.desktop),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.desktop),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.desktop),
					...(0, transformThemeComponent.Z)('pagination', pagination.desktop),
					...(0, transformThemeComponent.Z)('radio', radio_radio.desktop),
					...(0, transformThemeComponent.Z)('radioList', radioList.desktop),
					...(0, transformThemeComponent.Z)('result', result.desktop),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.desktop),
					...(0, transformThemeComponent.Z)('select', select_select.desktop),
					...(0, transformThemeComponent.Z)('slideout', slideout.desktop),
					...(0, transformThemeComponent.Z)('perPage', perPage.desktop),
					...(0, transformThemeComponent.Z)('rating', rating.desktop),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.desktop),
					...(0, transformThemeComponent.Z)('swatches', swatches.desktop),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.desktop),
					...(0, transformThemeComponent.Z)('terms', terms.desktop),
				},
				facet = {
					default: {
						props: {
							themeStyleScript: ({ color, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__facet__dropdown': {
										'& .ss__facet__dropdown__icon': { transition: 'transform ease .5s' },
										'&.ss__dropdown--open': { '& .ss__facet__dropdown__icon': { transition: 'transform ease .5s', transform: 'rotate(180deg)' } },
									},
									'& .ss__facet__header': { fontWeight: 'bold', borderBottom: '0px' },
									'& .ss__facet__options': {
										maxHeight: '400px',
										'&::-webkit-scrollbar': { width: '8px' },
										'&::-webkit-scrollbar-track': { background: '#f2f2f2' },
										'&::-webkit-scrollbar-thumb': { background: variables?.colors?.secondary || '#ccc' },
									},
									'& .ss__facet__show-more-less': { margin: '8px 5px', color: color || variables?.colors?.secondary },
								});
							},
							iconCollapse: 'angle-down',
							iconExpand: 'angle-down',
							iconOverflowMore: 'plus-thin',
							iconOverflowLess: 'minus',
						},
					},
				},
				facetsHorizontal = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									paddingBottom: '10px',
									'& .ss__facets-horizontal__header': {
										'& .ss__facets-horizontal__header__dropdown': {
											margin: '0',
											'& .ss__icon': { transition: 'transform ease .5s' },
											'& .ss__dropdown__button__heading': { color: variables?.colors?.secondary, fontWeight: 'bold' },
											'&.ss__dropdown--open': { '& .ss__dropdown__button__heading': { '& .ss__icon': { transform: 'rotate(180deg)' } } },
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
								});
							},
							iconCollapse: 'angle-down',
							limit: 9,
						},
					},
					mobile: { props: { limit: 0 } },
					tablet: { props: { limit: 5 } },
					desktop: { props: { limit: 7 } },
				},
				filterSummary = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									margin: '0 0 20px',
									'.ss__filter-summary__title': { fontWeight: 'bold', color: variables?.colors?.primary, fontSize: 'inherit' },
								});
							},
							title: 'Applied Filters',
						},
					},
				},
				mobileSidebar = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.ss__mobile-sidebar__footer': {
										gap: '6px',
										padding: '10px',
										borderTop: '1px solid black',
										'.ss__button': { width: '100%', '.ss__button__content': { textAlign: 'center' } },
									},
									'.ss__mobile-sidebar__slideout.ss__slideout--active': { width: '80%', maxWidth: '320px' },
									'.ss__mobile-sidebar__header__close-button': { lineHeight: 1, padding: '5px' },
									[`@media (max-width: ${variables?.breakpoints?.desktop}px)`]: {
										'.ss__mobile-sidebar__body': { height: 'calc(100vh - 100px)', overflow: 'scroll' },
										'.ss__per-page, .ss__sortby': {
											fontSize: '10px',
											'.ss__dropdown': {
												'.ss__select__select .ss__select__select__option': { padding: '5px' },
												'.ss__select__dropdown__button': { padding: '0px' },
											},
										},
									},
								});
							},
						},
						components: { '*mobileSidebar button.slideout': { icon: 'filters' } },
					},
				},
				noResults = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									color: variables?.colors?.secondary,
									' .ss__title': { color: variables?.colors?.secondary },
								});
							},
						},
					},
				},
				sidebar = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									boxSizing: 'border-box',
									width: '100%',
									margin: '0 1em 0 0',
									'& .ss__sidebar__title': { color: variables?.colors?.primary },
								});
							},
						},
					},
				},
				termsList = { default: { props: { styleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) } } },
				toolbar = { default: { props: { themeStyleScript: () => (0, emotion_react_browser_esm.AH)({}) } } },
				organisms_default = {
					...(0, transformThemeComponent.Z)('facet', facet.default),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.default),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.default),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.default),
					...(0, transformThemeComponent.Z)('noResults', noResults.default),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.default),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.default),
					...(0, transformThemeComponent.Z)('termsList', termsList.default),
				},
				organisms_mobile = {
					...(0, transformThemeComponent.Z)('facet', facet.mobile),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.mobile),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.mobile),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.mobile),
					...(0, transformThemeComponent.Z)('noResults', noResults.mobile),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.mobile),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.mobile),
					...(0, transformThemeComponent.Z)('termsList', termsList.mobile),
				},
				organisms_tablet = {
					...(0, transformThemeComponent.Z)('facet', facet.tablet),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.tablet),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.tablet),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.tablet),
					...(0, transformThemeComponent.Z)('noResults', noResults.tablet),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.tablet),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.tablet),
					...(0, transformThemeComponent.Z)('termsList', termsList.tablet),
				},
				organisms_desktop = {
					...(0, transformThemeComponent.Z)('facet', facet.desktop),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.desktop),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.desktop),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.desktop),
					...(0, transformThemeComponent.Z)('noResults', noResults.desktop),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.desktop),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.desktop),
					...(0, transformThemeComponent.Z)('termsList', termsList.desktop),
				};
			var autocompleteTemplate = __webpack_require__('./components/src/themes/themeComponents/autocompleteTemplate.ts');
			const autocompleteTemplate_autocompleteTemplate = {
				default: {
					props: { ...autocompleteTemplate.n.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: autocompleteTemplate.n.default?.components,
				},
				mobile: autocompleteTemplate.n.mobile,
				desktop: autocompleteTemplate.n.desktop,
				tablet: autocompleteTemplate.n.tablet,
			};
			var recommendation = __webpack_require__('./components/src/themes/themeComponents/recommendation.ts');
			const recommendation_recommendation = {
				default: {
					props: {
						...recommendation.C.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({ margin: '20px 0', '& .ss__recommendation__title': { color: variables?.colors?.primary } });
						},
					},
					components: recommendation.C.default?.components,
				},
				mobile: recommendation.C.mobile,
				desktop: recommendation.C.desktop,
				tablet: recommendation.C.tablet,
			};
			var recommendationBundle = __webpack_require__('./components/src/themes/themeComponents/recommendationBundle.ts');
			const recommendationBundle_recommendationBundle = {
				default: {
					props: {
						...recommendationBundle._.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({
								margin: '20px 0',
								'.ss__recommendation-bundle__wrapper__selector': {
									'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
										backgroundColor: variables?.colors.accent,
										color: '#fff',
									},
								},
							});
						},
					},
					components: recommendationBundle._.default?.components,
				},
				mobile: recommendationBundle._.mobile,
				desktop: recommendationBundle._.desktop,
				tablet: recommendationBundle._.tablet,
			};
			var recommendationBundleEasyAdd = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleEasyAdd.ts');
			const recommendationBundleEasyAdd_recommendationBundleEasyAdd = {
				default: {
					props: { ...recommendationBundleEasyAdd.j.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleEasyAdd.j.default?.components,
				},
				mobile: recommendationBundleEasyAdd.j.mobile,
				desktop: recommendationBundleEasyAdd.j.desktop,
				tablet: recommendationBundleEasyAdd.j.tablet,
			};
			var recommendationBundleList = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleList.ts');
			const recommendationBundleList_recommendationBundleList = {
				default: { props: { ...recommendationBundleList.e.default?.props }, components: recommendationBundleList.e.default?.components },
				mobile: recommendationBundleList.e.mobile,
				desktop: recommendationBundleList.e.desktop,
				tablet: recommendationBundleList.e.tablet,
			};
			var recommendationBundleVertical = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleVertical.ts');
			const recommendationBundleVertical_recommendationBundleVertical = {
				default: {
					props: { ...recommendationBundleVertical.W.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleVertical.W.default?.components,
				},
				mobile: recommendationBundleVertical.W.mobile,
				desktop: recommendationBundleVertical.W.desktop,
				tablet: recommendationBundleVertical.W.tablet,
			};
			var recommendationGrid = __webpack_require__('./components/src/themes/themeComponents/recommendationGrid.ts');
			const recommendationGrid_recommendationGrid = {
				default: {
					props: { ...recommendationGrid.W.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationGrid.W.default?.components,
				},
				mobile: recommendationGrid.W.mobile,
				desktop: recommendationGrid.W.desktop,
				tablet: recommendationGrid.W.tablet,
			};
			const recommendationEmail_recommendationEmail = __webpack_require__('./components/src/themes/themeComponents/recommendationEmail.ts').O;
			var search = __webpack_require__('./components/src/themes/themeComponents/search.ts');
			const search_search = {
				default: {
					props: { ...search.D.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: search.D.default?.components,
				},
				mobile: search.D.mobile,
				desktop: search.D.desktop,
				tablet: search.D.tablet,
			};
			var searchHorizontal = __webpack_require__('./components/src/themes/themeComponents/searchHorizontal.ts');
			const searchHorizontal_searchHorizontal = {
				default: {
					props: { ...searchHorizontal.X.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: searchHorizontal.X.default?.components,
				},
				mobile: searchHorizontal.X.mobile,
				desktop: searchHorizontal.X.desktop,
				tablet: searchHorizontal.X.tablet,
			};
			var searchBoca = __webpack_require__('./components/src/themes/themeComponents/searchBoca.ts');
			const searchBoca_searchBoca = {
				default: {
					props: {
						...searchBoca.k.default?.props,
						themeStyleScript: ({ theme }) =>
							(0, emotion_react_browser_esm.AH)({
								'.ss__toolbar .ss__button--sidebar-toggle-button-wrapper': { marginRight: 'inherit', width: 'calc(270px + 1.5em)' },
							}),
					},
					components: searchBoca.k.default?.components,
				},
				mobile: searchBoca.k.mobile,
				desktop: searchBoca.k.desktop,
				tablet: searchBoca.k.tablet,
			};
			var searchSnapnco = __webpack_require__('./components/src/themes/themeComponents/searchSnapnco.ts');
			const searchSnapnco_searchSnapnco = {
				default: {
					props: { ...searchSnapnco.x.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: searchSnapnco.x.default?.components,
				},
				mobile: searchSnapnco.x.mobile,
				desktop: searchSnapnco.x.desktop,
				tablet: searchSnapnco.x.tablet,
			};
			var searchSnappy = __webpack_require__('./components/src/themes/themeComponents/searchSnappy.ts');
			const searchSnappy_searchSnappy = {
					default: {
						props: { ...searchSnappy.e.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
						components: searchSnappy.e.default?.components,
					},
					mobile: searchSnappy.e.mobile,
					desktop: searchSnappy.e.desktop,
					tablet: searchSnappy.e.tablet,
				},
				bocachica = {
					name: 'bocachica',
					variables: {
						breakpoints: { mobile: 767, tablet: 991, desktop: 1299 },
						colors: { text: '#222222', primary: '#202223', secondary: '#6d7175', accent: '#3a23ad' },
					},
					components: {
						...atoms_default,
						...molecules_default,
						...organisms_default,
						...{
							...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.default),
							...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.default),
							...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.default),
							...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.default),
							...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.default),
							...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.default),
							...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.default),
							...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.default),
							...(0, transformThemeComponent.Z)('search', search_search.default),
							...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.default),
							...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.default),
							...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.default),
							...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.default),
						},
					},
					responsive: {
						mobile: {
							...atoms_mobile,
							...molecules_mobile,
							...organisms_mobile,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.mobile),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.mobile),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.mobile),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.mobile),
								...(0, transformThemeComponent.Z)('search', search_search.mobile),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.mobile),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.mobile),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.mobile),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.mobile),
							},
						},
						tablet: {
							...atoms_tablet,
							...molecules_tablet,
							...organisms_tablet,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.tablet),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.tablet),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.tablet),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.tablet),
								...(0, transformThemeComponent.Z)('search', search_search.tablet),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.tablet),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.tablet),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.tablet),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.tablet),
							},
						},
						desktop: {
							...atoms_desktop,
							...molecules_desktop,
							...organisms_desktop,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.desktop),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.desktop),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.desktop),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.desktop),
								...(0, transformThemeComponent.Z)('search', search_search.desktop),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.desktop),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.desktop),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.desktop),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.desktop),
							},
						},
					},
				};
		},
		'./components/src/themes/snapnco/snapnco.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { N: () => snapnco });
			var transformThemeComponent = __webpack_require__('./components/src/themes/utils/transformThemeComponent.ts'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js');
			const button_button = {
					default: {
						props: {
							themeStyleScript: ({}) =>
								(0, emotion_react_browser_esm.AH)({
									backgroundColor: '#fff',
									borderRadius: '.5em',
									padding: '13px 15px',
									color: '#5c5c5c',
									border: '1px solid #e6e6e6',
									'.ss__icon': { fill: '#5C5C5C', stroke: '#5C5C5C' },
									'&:not(.ss__button--disabled):hover': {
										opacity: 0.7,
										backgroundColor: '#fff',
										'.ss__icon': { fill: '#5C5C5C', stroke: '#5C5C5C' },
									},
								}),
						},
					},
				},
				dropdown = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									position: 'relative',
									'&.ss__dropdown--open': { '& .ss__dropdown__content': { transition: 'opacity .5s ease' } },
								}),
						},
					},
				},
				icon = {
					default: {
						props: {
							themeStyleScript: ({ color, height, width, size, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									fill: color || variables?.colors?.accent,
									stroke: color || variables?.colors?.accent,
									width: width || size,
									height: height || size,
								});
							},
						},
					},
				},
				image_image = {
					default: {
						props: {
							themeStyleScript: ({ visibility, theme }) =>
								(0, emotion_react_browser_esm.AH)({ borderRadius: '20px', overflow: 'hidden', '& img': { visibility } }),
						},
					},
				},
				loadingBar = {
					default: {
						props: {
							themeStyleScript: ({ color, backgroundColor, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									background: backgroundColor || '#f8f8f8',
									'& .ss__loading-bar__bar': { background: `${color || variables?.colors?.accent || '#ccc'}` },
								});
							},
						},
					},
				},
				paginationInfo = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ color: '#666666' }),
							infoText: (data) => `Showing ${data.pagination?.begin}-${data.pagination?.end} of ${data.pagination?.totalResults} Products`,
						},
					},
				},
				price = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									margin: '0',
									'&.ss__price--strike': { color: variables?.colors?.secondary || 'inherit', opacity: 0.5 },
								});
							},
							decimalPlaces: 0,
						},
					},
				},
				searchHeader = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									paddingBottom: '10px',
									'.ss__search-header__title': {
										color: variables?.colors?.primary,
										marginBottom: '0px',
										marginTop: '0px',
										fontWeight: 'initial',
										fontSize: '25px',
									},
									'.ss__search-header__title--corrected': { color: variables?.colors?.secondary },
								});
							},
							titleText: (data) => 'Search Results' + (data.search?.query?.string ? ` for ${data.search?.query?.string}` : ''),
						},
					},
				},
				skeleton = { default: { props: {} } },
				atoms_default = {
					...(0, transformThemeComponent.Z)('button', button_button.default),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.default),
					...(0, transformThemeComponent.Z)('icon', icon.default),
					...(0, transformThemeComponent.Z)('image', image_image.default),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.default),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.default),
					...(0, transformThemeComponent.Z)('price', price.default),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.default),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.default),
				},
				atoms_mobile = {
					...(0, transformThemeComponent.Z)('button', button_button.mobile),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.mobile),
					...(0, transformThemeComponent.Z)('icon', icon.mobile),
					...(0, transformThemeComponent.Z)('image', image_image.mobile),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.mobile),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.mobile),
					...(0, transformThemeComponent.Z)('price', price.mobile),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.mobile),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.mobile),
				},
				atoms_tablet = {
					...(0, transformThemeComponent.Z)('dropdown', dropdown.tablet),
					...(0, transformThemeComponent.Z)('icon', icon.tablet),
					...(0, transformThemeComponent.Z)('image', image_image.tablet),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.tablet),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.tablet),
					...(0, transformThemeComponent.Z)('price', price.tablet),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.tablet),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.tablet),
				},
				atoms_desktop = {
					...(0, transformThemeComponent.Z)('button', button_button.desktop),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.desktop),
					...(0, transformThemeComponent.Z)('icon', icon.desktop),
					...(0, transformThemeComponent.Z)('image', image_image.desktop),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.desktop),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.desktop),
					...(0, transformThemeComponent.Z)('price', price.desktop),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.desktop),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.desktop),
				},
				carousel = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.swiper-pagination-bullet': {
										background: '#ccc',
										opacity: '.5',
										'&.swiper-pagination-bullet-active': { opacity: '1', background: variables?.colors?.accent || '#3A23AD' },
									},
								});
							},
						},
					},
				};
			var node_modules_color = __webpack_require__('../../node_modules/color/index.js'),
				color_default = __webpack_require__.n(node_modules_color);
			const checkbox_checkbox = {
					default: {
						props: {
							themeStyleScript: ({ color, theme }) => {
								const variables = theme?.variables,
									backgroundColorObj = new (color_default())(color || variables?.colors.primary),
									backgroundTextColorObj = backgroundColorObj.isDark() ? new (color_default())('#fff') : new (color_default())('#000');
								return (0, emotion_react_browser_esm.AH)({
									border: `2px solid ${backgroundColorObj.hex()}`,
									borderRadius: '3px',
									'&.ss__checkbox--active': {
										backgroundColor: backgroundColorObj.hex(),
										'.ss__icon': { fill: backgroundTextColorObj.hex(), stroke: backgroundTextColorObj.hex() },
									},
									'&.ss__checkbox--disabled': { opacity: 0.3 },
								});
							},
							size: '18px',
						},
					},
				},
				errorHandler = { default: { props: {} } },
				facetGridOptions = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables,
									backgroundColorObj = new (color_default())(variables?.colors.primary),
									colorObj = backgroundColorObj.isDark() ? new (color_default())('#fff') : new (color_default())('#000');
								return (0, emotion_react_browser_esm.AH)({
									a: { color: theme?.variables?.colors?.text },
									'& .ss__facet-grid-options__option': {
										border: `1px solid ${backgroundColorObj.hex()}`,
										borderRadius: '3px',
										'&.ss__facet-grid-options__option--filtered': { background: backgroundColorObj.hex(), color: colorObj.hex() },
										'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer' },
									},
								});
							},
							gapSize: '5px',
							columns: 5,
						},
					},
				},
				facetHierarchyOptions = {
					default: {
						props: {
							themeStyleScript: ({ horizontal, theme }) => {
								const variables = theme?.variables;
								return horizontal
									? (0, emotion_react_browser_esm.AH)({
											'.ss__facet-hierarchy-options__option': {
												color: variables?.colors?.secondary,
												border: `1px solid ${variables?.colors?.secondary || '#333'}`,
												padding: '0.5em 0.5em',
												'&.ss__facet-hierarchy-options__option--filtered': {
													fontWeight: 'bold',
													color: theme?.variables?.colors?.primary,
													marginRight: '2em',
												},
												'&.ss__facet-hierarchy-options__option--return': { '&:before': { color: variables?.colors?.accent } },
											},
									  })
									: (0, emotion_react_browser_esm.AH)({
											'.ss__facet-hierarchy-options__option': {
												color: variables?.colors?.secondary,
												'&.ss__facet-hierarchy-options__option--return': { '&:before': { color: variables?.colors?.accent } },
											},
									  });
							},
						},
					},
				},
				facetListOptions = {
					default: {
						props: {
							themeStyleScript: ({ horizontal, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__facet-list-options__option': {
										margin: horizontal ? '0 5px 5px 0' : '0 0 5px 0',
										color: variables?.colors?.secondary,
										border: horizontal ? `1px solid ${variables?.colors?.secondary || '#333'}` : void 0,
										padding: horizontal ? '0.5em 0.5em' : void 0,
										textDecoration: 'none',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-list-options__option--filtered': { fontWeight: 'initial', color: variables?.colors?.secondary },
										'& .ss__facet-list-options__option__value': {
											'& .ss__facet-list-options__option__value__count': { fontSize: 'inherit', marginLeft: '5px' },
										},
									},
								});
							},
						},
					},
				},
				facetPaletteOptions = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									a: { color: theme?.variables?.colors?.text },
									'.ss__facet-palette-options__option': {
										'&:hover': {
											cursor: 'pointer',
											'.ss__facet-palette-options__option__palette': { opacity: 0.7 },
											'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent !important' },
										},
										'.ss__facet-palette-options__option__wrapper': { borderRadius: '50%', overflow: 'hidden', padding: '0px' },
										'.ss__facet-palette-options__option__palette': {
											border: '1px solid #d6d6d6',
											'.ss__facet-palette-options__icon': { opacity: 1, stroke: 'gray', strokeWidth: '2px' },
										},
									},
									'&.ss__facet-palette-options--grid': {
										'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__wrapper': { border: '0px' } },
									},
								}),
							gapSize: '8px',
							hideLabel: !0,
							columns: 5,
							hideIcon: !1,
						},
						components: { '*facetPaletteOptions icon': { size: '50%', icon: 'check-thin' } },
					},
				},
				facetSlider = {
					default: {
						props: {
							themeStyleScript: ({
								railColor,
								trackColor,
								handleColor,
								valueTextColor,
								handleDraggingColor,
								showTicks,
								stickyHandleLabel,
								theme,
							}) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									marginBottom: showTicks && stickyHandleLabel ? '22px' : showTicks || stickyHandleLabel ? '10px' : '5px',
									color: variables?.colors?.secondary,
									'& .ss__facet-slider__slider': { height: '5px', top: '0px', bottom: '10px', marginBottom: '30px' },
									'& .ss__facet-slider__rail': { background: railColor || variables?.colors?.secondary || '#333' },
									'& .ss__facet-slider__segment': { background: trackColor || '#f2f2f2', borderRadius: '3px' },
									'& .ss__facet-slider__handles': {
										'& button': {
											'& .ss__facet-slider__handle': {
												background: handleColor || variables?.colors?.secondary || '#333',
												color: valueTextColor || variables?.colors?.secondary || 'initial',
												'&.ss__facet-slider__handle--active': {
													background: handleDraggingColor || handleColor || variables?.colors?.secondary || '#000',
												},
											},
											'& .ss__facet-slider__handle:after': { background: 'none' },
											'label.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': { top: 'initial !important', bottom: '-20px' },
										},
									},
									'& .ss__facet-slider__labels': { color: variables?.colors?.secondary || valueTextColor },
								});
							},
							handleColor: 'black',
							handleDraggingColor: 'black',
							railColor: 'black',
							stickyHandleLabel: !0,
						},
					},
				},
				filter = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'& .ss__filter__button': {
										backgroundColor: 'white',
										color: '#959595',
										border: '2px solid #e6e6e6',
										'& .ss__filter__button__icon': { fill: '#5C5C5C', stroke: '#5C5C5C', margin: '0 10px 0 0' },
										'&:hover': {
											backgroundColor: 'white',
											color: '#959595',
											border: '2px solid #e6e6e6',
											opacity: 0.7,
											'& .ss__filter__button__icon': { fill: '#5C5C5C', stroke: '#5C5C5C' },
										},
									},
								}),
							hideFacetLabel: !0,
						},
					},
				},
				grid = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__grid__options': {
										'.ss__grid__option': {
											'&.ss__grid__option--selected': { border: `3px solid ${theme?.variables?.colors?.primary || '#333'}`, fontWeight: 'bold' },
										},
									},
								}),
							hideShowLess: !0,
							overflowButtonInGrid: !0,
						},
					},
				},
				layoutSelector = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__button__content': { gap: '7px' },
									'.ss__list__option': {
										color: '#e6e6e6',
										border: '2px solid #e6e6e6',
										padding: '10px',
										borderRadius: '50%',
										'.ss__icon': { fill: '#e6e6e6', stroke: '#e6e6e6' },
										'&:hover': { color: 'black', border: '2px solid black', opacity: 0.7, '.ss__icon': { fill: 'black', stroke: 'black' } },
									},
									'.ss__list__option--selected': { color: 'black', border: '2px solid black', '.ss__icon': { fill: 'black', stroke: 'black' } },
								}),
							type: 'list',
							hideLabel: !0,
						},
						components: { '*layoutSelector icon': { size: '5px' } },
					},
				},
				list = {
					default: {
						props: { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ gap: '8px', '& .ss__list__options': { gap: '10px' } }) },
						components: { '*list icon': { size: '24px' } },
					},
				},
				loadMore = {
					default: {
						props: {
							themeStyleScript: ({ color, backgroundColor, theme }) => {
								const variables = theme?.variables,
									barColour = new (color_default())(color || variables?.colors.accent),
									backgroundColour = backgroundColor ? new (color_default())(backgroundColor) : barColour.lightness(90);
								return (0, emotion_react_browser_esm.AH)({
									'.ss__button': { '.ss__button__content': { display: 'inline-flex', alignItems: 'center', gap: '5px' } },
									'.ss__load-more__progress': {
										'.ss__load-more__progress__indicator': {
											background: backgroundColour.hex(),
											'.ss__load-more__progress__indicator__bar': { background: barColour.hex() },
										},
									},
								});
							},
						},
					},
				},
				overlayBadge = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ '.ss__overlay-badge__grid-wrapper': { padding: '0.5rem' } }),
						},
					},
				},
				pagination = { default: { props: {} } },
				radio_radio = {
					default: {
						props: {
							themeStyleScript: ({ size, native, color, theme }) => {
								const variables = theme?.variables;
								return native
									? (0, emotion_react_browser_esm.AH)({
											width: size,
											height: size,
											display: 'flex',
											justifyContent: 'center',
											'.ss__radio__input': { height: `calc(${size} - 30%)`, width: `calc(${size} - 30%)`, margin: 'auto' },
									  })
									: (0, emotion_react_browser_esm.AH)({
											'.ss__icon': { fill: color || variables?.colors.primary, stroke: color || variables?.colors.primary },
									  });
							},
						},
					},
				},
				radioList = { default: { props: {} } },
				result = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__result__details': {
										textAlign: 'left',
										fontWeight: 'bold',
										'& .ss__result__details__pricing': {
											display: 'flex',
											'& .ss__result__price': { fontSize: '1.2em' },
											'& .ss__price--strike': { fontSize: '1.2em', order: 2, padding: '0px 8px' },
										},
									},
								}),
						},
					},
				},
				searchInput = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({ border: `1px solid ${variables?.colors?.secondary || '#ccc'}` });
							},
						},
					},
				},
				select_select = {
					default: {
						props: {
							themeStyleScript: ({ backgroundColor, theme }) => {
								const variables = theme?.variables,
									transparentSecondary = new (color_default())(theme?.variables?.colors?.secondary).opaquer(0.2);
								return (0, emotion_react_browser_esm.AH)({
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
												borderTopLeftRadius: '3px',
												borderTopRightRadius: '3px',
												'.ss__select__dropdown__button__icon': { transform: 'rotate(180deg)' },
											},
											'.ss__dropdown__content': {
												backgroundColor: backgroundColor || '#fff',
												boxShadow: '0 6px 12px 1px #0000001f',
												borderBottomLeftRadius: '3px',
												borderBottomRightRadius: '3px',
												zIndex: '10000',
											},
										},
									},
									'.ss__button__content': { gap: '7px' },
									'.ss__select__select': {
										border: '0px',
										marginBottom: '0px',
										'.ss__select__select__option': {
											listStyle: 'none',
											padding: '6px 30px',
											gap: '6px',
											color: variables?.colors?.secondary,
											'&.ss__select__select__option--selected': {
												backgroundColor: `${transparentSecondary.rgb().lightness(95)}` || 'rgba(109,113,117,.06)',
											},
											'&:hover': { backgroundColor: `${transparentSecondary.rgb().lightness(95)}` || 'rgba(109,113,117,.06)' },
										},
									},
								});
							},
							iconClose: 'angle-down',
							iconOpen: 'angle-down',
						},
					},
				},
				slideout = {
					default: {
						props: {
							themeStyleScript: ({ isActive, width, slideDirection, theme }) =>
								(0, emotion_react_browser_esm.AH)({
									left: 'left' == slideDirection ? (isActive ? '0' : `-${width}`) : 'right' != slideDirection ? '0' : 'initial',
									right: 'right' == slideDirection ? (isActive ? '0' : `-${width}`) : 'initial',
									bottom: 'bottom' == slideDirection ? (isActive ? '0' : '-100vh') : 'initial',
									top: 'top' == slideDirection ? (isActive ? '0' : '-100vh') : 'bottom' == slideDirection ? 'initial' : '0',
									background: '#fff',
								}),
						},
					},
				},
				perPage = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'& .ss__dropdown .ss__select__dropdown__button': {
										fontWeight: 'normal',
										color: '#666666',
										'.ss__select__selection': { color: 'black' },
									},
								}),
						},
						components: { '*perPage icon': { size: '12px', icon: 'angle-down' } },
					},
					mobile: { components: { '*perPage select': { hideSelection: !0 } } },
				},
				rating = { default: { props: {} } },
				sortBy = {
					default: {
						props: {
							themeStyleScript: () =>
								(0, emotion_react_browser_esm.AH)({
									'& .ss__dropdown .ss__select__dropdown__button': {
										fontWeight: 'normal',
										color: '#666666',
										'.ss__select__selection': { color: 'black' },
									},
								}),
						},
						components: { '*sortBy icon': { size: '12px', icon: 'angle-down' } },
					},
					mobile: { components: { '*sortBy select': { hideSelection: !0 } } },
				},
				swatches = { default: { props: {} } },
				variantSelection = { default: { props: {} } },
				terms = { default: { props: { styleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) } } },
				molecules_default = {
					...(0, transformThemeComponent.Z)('carousel', carousel.default),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.default),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.default),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.default),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.default),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.default),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.default),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.default),
					...(0, transformThemeComponent.Z)('filter', filter.default),
					...(0, transformThemeComponent.Z)('grid', grid.default),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.default),
					...(0, transformThemeComponent.Z)('list', list.default),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.default),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.default),
					...(0, transformThemeComponent.Z)('pagination', pagination.default),
					...(0, transformThemeComponent.Z)('radio', radio_radio.default),
					...(0, transformThemeComponent.Z)('radioList', radioList.default),
					...(0, transformThemeComponent.Z)('result', result.default),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.default),
					...(0, transformThemeComponent.Z)('select', select_select.default),
					...(0, transformThemeComponent.Z)('slideout', slideout.default),
					...(0, transformThemeComponent.Z)('perPage', perPage.default),
					...(0, transformThemeComponent.Z)('rating', rating.default),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.default),
					...(0, transformThemeComponent.Z)('swatches', swatches.default),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.default),
					...(0, transformThemeComponent.Z)('terms', terms.default),
				},
				molecules_mobile = {
					...(0, transformThemeComponent.Z)('carousel', carousel.mobile),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.mobile),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.mobile),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.mobile),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.mobile),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.mobile),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.mobile),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.mobile),
					...(0, transformThemeComponent.Z)('filter', filter.mobile),
					...(0, transformThemeComponent.Z)('grid', grid.mobile),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.mobile),
					...(0, transformThemeComponent.Z)('list', list.mobile),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.mobile),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.mobile),
					...(0, transformThemeComponent.Z)('pagination', pagination.mobile),
					...(0, transformThemeComponent.Z)('radio', radio_radio.mobile),
					...(0, transformThemeComponent.Z)('radioList', radioList.mobile),
					...(0, transformThemeComponent.Z)('result', result.mobile),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.mobile),
					...(0, transformThemeComponent.Z)('select', select_select.mobile),
					...(0, transformThemeComponent.Z)('slideout', slideout.mobile),
					...(0, transformThemeComponent.Z)('perPage', perPage.mobile),
					...(0, transformThemeComponent.Z)('rating', rating.mobile),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.mobile),
					...(0, transformThemeComponent.Z)('swatches', swatches.mobile),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.mobile),
					...(0, transformThemeComponent.Z)('terms', terms.mobile),
				},
				molecules_tablet = {
					...(0, transformThemeComponent.Z)('carousel', carousel.tablet),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.tablet),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.tablet),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.tablet),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.tablet),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.tablet),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.tablet),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.tablet),
					...(0, transformThemeComponent.Z)('filter', filter.tablet),
					...(0, transformThemeComponent.Z)('grid', grid.tablet),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.tablet),
					...(0, transformThemeComponent.Z)('list', list.tablet),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.tablet),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.tablet),
					...(0, transformThemeComponent.Z)('pagination', pagination.tablet),
					...(0, transformThemeComponent.Z)('radio', radio_radio.tablet),
					...(0, transformThemeComponent.Z)('radioList', radioList.tablet),
					...(0, transformThemeComponent.Z)('result', result.tablet),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.tablet),
					...(0, transformThemeComponent.Z)('select', select_select.tablet),
					...(0, transformThemeComponent.Z)('slideout', slideout.tablet),
					...(0, transformThemeComponent.Z)('perPage', perPage.tablet),
					...(0, transformThemeComponent.Z)('rating', rating.tablet),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.tablet),
					...(0, transformThemeComponent.Z)('swatches', swatches.tablet),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.tablet),
					...(0, transformThemeComponent.Z)('terms', terms.tablet),
				},
				molecules_desktop = {
					...(0, transformThemeComponent.Z)('carousel', carousel.desktop),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.desktop),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.desktop),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.desktop),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.desktop),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.desktop),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.desktop),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.desktop),
					...(0, transformThemeComponent.Z)('filter', filter.desktop),
					...(0, transformThemeComponent.Z)('grid', grid.desktop),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.desktop),
					...(0, transformThemeComponent.Z)('list', list.desktop),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.desktop),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.desktop),
					...(0, transformThemeComponent.Z)('pagination', pagination.desktop),
					...(0, transformThemeComponent.Z)('radio', radio_radio.desktop),
					...(0, transformThemeComponent.Z)('radioList', radioList.desktop),
					...(0, transformThemeComponent.Z)('result', result.desktop),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.desktop),
					...(0, transformThemeComponent.Z)('select', select_select.desktop),
					...(0, transformThemeComponent.Z)('slideout', slideout.desktop),
					...(0, transformThemeComponent.Z)('perPage', perPage.desktop),
					...(0, transformThemeComponent.Z)('rating', rating.desktop),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.desktop),
					...(0, transformThemeComponent.Z)('swatches', swatches.desktop),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.desktop),
					...(0, transformThemeComponent.Z)('terms', terms.desktop),
				},
				facet = {
					default: {
						props: {
							themeStyleScript: ({ color, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__facet__dropdown': {
										'& .ss__facet__dropdown__icon': { transition: 'transform ease .5s' },
										'&.ss__dropdown--open': { '& .ss__facet__dropdown__icon': { transition: 'transform ease .5s', transform: 'rotate(180deg)' } },
									},
									'&.ss__facet--collapsed': {
										marginBottom: '10px',
										'& .ss__facet__header': { fontWeight: 'initial', fontSize: '12px', borderBottom: '0px' },
									},
									'&:not(.ss__facet--collapsed):first-of-type': { paddingTop: '0px', '& .ss__facet__header': { borderTop: '0px' } },
									'&:not(.ss__facet--collapsed)': {
										paddingTop: '10px',
										'& .ss__facet__header': {
											fontWeight: 'bold',
											fontSize: '20px',
											borderBottom: '0px',
											borderTop: '1px solid #d6d6d6',
											paddingTop: '20px',
										},
										'& .ss__facet__options': {
											maxHeight: '400px',
											'&::-webkit-scrollbar': { width: '8px' },
											'&::-webkit-scrollbar-track': { background: '#f2f2f2' },
											'&::-webkit-scrollbar-thumb': { background: variables?.colors?.secondary || '#ccc' },
										},
										'& .ss__facet__show-more-less': {
											margin: '8px 5px',
											textAlign: 'center',
											color: color || variables?.colors?.secondary,
											span: { borderBottom: '1px solid #d6d6d6' },
										},
									},
								});
							},
							iconCollapse: 'angle-down',
							iconExpand: 'angle-right',
							iconOverflowMore: void 0,
							iconOverflowLess: void 0,
							showMoreText: 'View More',
							showLessText: 'View Less',
						},
					},
				},
				facetsHorizontal = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									paddingBottom: '10px',
									'& .ss__facets-horizontal__header': {
										alignItems: 'center',
										'& .ss__facets-horizontal__header__dropdown': {
											margin: '0',
											'& .ss__icon': { transition: 'transform ease .5s' },
											'& .ss__dropdown__button__heading': { color: variables?.colors?.secondary, fontWeight: 'bold' },
											'&.ss__dropdown--open': { '& .ss__dropdown__button__heading': { '& .ss__icon': { transform: 'rotate(180deg)' } } },
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
								});
							},
							iconCollapse: 'angle-down',
							limit: 9,
						},
					},
					mobile: { props: { limit: 0 } },
					tablet: { props: { limit: 5 } },
					desktop: { props: { limit: 7 } },
				},
				filterSummary = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									flexWrap: 'wrap',
									'& .ss__filter-summary__title': { fontWeight: 'bold', color: variables?.colors?.secondary },
								});
							},
							hideFacetLabel: !0,
							hideClearAll: !0,
							hideTitle: !0,
						},
					},
				},
				mobileSidebar = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__sidebar': { border: '0px', width: '100%' },
									'.ss__mobile-sidebar__footer': {
										gap: '6px',
										padding: '10px',
										borderTop: '1px solid black',
										'.ss__button': { width: '100%', '.ss__button__content': { textAlign: 'center' } },
									},
									'.ss__mobile-sidebar__slideout.ss__slideout--active': { width: '80%', maxWidth: '320px' },
									'.ss__mobile-sidebar__header__close-button': { lineHeight: 1, padding: '5px' },
									[`@media (max-width: ${variables?.breakpoints.desktop}px)`]: {
										'.ss__mobile-sidebar__body': { height: 'calc(100vh - 140px)', overflow: 'scroll' },
										'.ss__per-page, .ss__sortby': {
											margin: '10px 10px 10px 0px',
											'.ss__dropdown': {
												'.ss__select__select .ss__select__select__option': { padding: '5px' },
												'.ss__select__dropdown__button': { padding: '0px' },
											},
										},
									},
								});
							},
							openButtonIcon: 'filters',
						},
					},
					mobile: { props: { hideOpenButtonText: !0, layout: [['filterSummary'], ['facets'], ['banner.left']] } },
				},
				noResults = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									color: variables?.colors?.secondary,
									' .ss__title': { color: variables?.colors?.secondary },
								});
							},
						},
					},
				},
				sidebar = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									boxSizing: 'border-box',
									width: '100%',
									margin: '0 40px 0 0',
									border: '1px solid #d6d6d6',
									borderRadius: '1.5em',
									padding: '15px',
									'& .ss__sidebar__title': {
										color: variables?.colors?.primary,
										borderBottom: '1px solid #d6d6d6',
										margin: '0px',
										fontSize: '20px',
										paddingBottom: '20px',
										marginBottom: '20px',
									},
									'.ss__layout': { margin: '0px', padding: '0px', border: '0px' },
								});
							},
						},
					},
				},
				termsList = { default: { props: { styleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) } } },
				toolbar = { default: { props: { themeStyleScript: () => (0, emotion_react_browser_esm.AH)({ paddingBottom: '10px' }) } } },
				organisms_default = {
					...(0, transformThemeComponent.Z)('facet', facet.default),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.default),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.default),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.default),
					...(0, transformThemeComponent.Z)('noResults', noResults.default),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.default),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.default),
					...(0, transformThemeComponent.Z)('termsList', termsList.default),
				},
				organisms_mobile = {
					...(0, transformThemeComponent.Z)('facet', facet.mobile),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.mobile),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.mobile),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.mobile),
					...(0, transformThemeComponent.Z)('noResults', noResults.mobile),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.mobile),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.mobile),
					...(0, transformThemeComponent.Z)('termsList', termsList.mobile),
				},
				organisms_tablet = {
					...(0, transformThemeComponent.Z)('facet', facet.tablet),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.tablet),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.tablet),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.tablet),
					...(0, transformThemeComponent.Z)('noResults', noResults.tablet),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.tablet),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.tablet),
					...(0, transformThemeComponent.Z)('termsList', termsList.tablet),
				},
				organisms_desktop = {
					...(0, transformThemeComponent.Z)('facet', facet.desktop),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.desktop),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.desktop),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.desktop),
					...(0, transformThemeComponent.Z)('noResults', noResults.desktop),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.desktop),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.desktop),
					...(0, transformThemeComponent.Z)('termsList', termsList.desktop),
				};
			var autocompleteTemplate = __webpack_require__('./components/src/themes/themeComponents/autocompleteTemplate.ts');
			const autocompleteTemplate_autocompleteTemplate = {
				default: {
					props: { ...autocompleteTemplate.n.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: autocompleteTemplate.n.default?.components,
				},
				mobile: autocompleteTemplate.n.mobile,
				desktop: autocompleteTemplate.n.desktop,
				tablet: autocompleteTemplate.n.tablet,
			};
			var recommendation = __webpack_require__('./components/src/themes/themeComponents/recommendation.ts');
			const recommendation_recommendation = {
				default: {
					props: {
						...recommendation.C.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({ margin: '20px 0', '& .ss__recommendation__title': { color: variables?.colors?.primary } });
						},
					},
					components: recommendation.C.default?.components,
				},
				mobile: recommendation.C.mobile,
				desktop: recommendation.C.desktop,
				tablet: recommendation.C.tablet,
			};
			var recommendationBundle = __webpack_require__('./components/src/themes/themeComponents/recommendationBundle.ts');
			const recommendationBundle_recommendationBundle = {
				default: {
					props: {
						...recommendationBundle._.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({
								margin: '20px 0',
								'.ss__recommendation-bundle__wrapper__selector': {
									'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
										backgroundColor: variables?.colors.accent,
										color: '#fff',
									},
								},
							});
						},
					},
					components: recommendationBundle._.default?.components,
				},
				mobile: recommendationBundle._.mobile,
				desktop: recommendationBundle._.desktop,
				tablet: recommendationBundle._.tablet,
			};
			var recommendationBundleEasyAdd = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleEasyAdd.ts');
			const recommendationBundleEasyAdd_recommendationBundleEasyAdd = {
				default: {
					props: { ...recommendationBundleEasyAdd.j.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleEasyAdd.j.default?.components,
				},
				mobile: recommendationBundleEasyAdd.j.mobile,
				desktop: recommendationBundleEasyAdd.j.desktop,
				tablet: recommendationBundleEasyAdd.j.tablet,
			};
			var recommendationBundleList = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleList.ts');
			const recommendationBundleList_recommendationBundleList = {
				default: {
					props: { ...recommendationBundleList.e.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleList.e.default?.components,
				},
				mobile: recommendationBundleList.e.mobile,
				desktop: recommendationBundleList.e.desktop,
				tablet: recommendationBundleList.e.tablet,
			};
			var recommendationBundleVertical = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleVertical.ts');
			const recommendationBundleVertical_recommendationBundleVertical = {
				default: {
					props: { ...recommendationBundleVertical.W.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleVertical.W.default?.components,
				},
				mobile: recommendationBundleVertical.W.mobile,
				desktop: recommendationBundleVertical.W.desktop,
				tablet: recommendationBundleVertical.W.tablet,
			};
			var recommendationGrid = __webpack_require__('./components/src/themes/themeComponents/recommendationGrid.ts');
			const recommendationGrid_recommendationGrid = {
				default: {
					props: { ...recommendationGrid.W.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationGrid.W.default?.components,
				},
				mobile: recommendationGrid.W.mobile,
				desktop: recommendationGrid.W.desktop,
				tablet: recommendationGrid.W.tablet,
			};
			const recommendationEmail_recommendationEmail = __webpack_require__('./components/src/themes/themeComponents/recommendationEmail.ts').O;
			var search = __webpack_require__('./components/src/themes/themeComponents/search.ts');
			const search_search = {
				default: {
					props: { ...search.D.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: search.D.default?.components,
				},
				mobile: search.D.mobile,
				desktop: search.D.desktop,
				tablet: search.D.tablet,
			};
			var searchHorizontal = __webpack_require__('./components/src/themes/themeComponents/searchHorizontal.ts');
			const searchHorizontal_searchHorizontal = {
				default: {
					props: { ...searchHorizontal.X.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: searchHorizontal.X.default?.components,
				},
				mobile: searchHorizontal.X.mobile,
				desktop: searchHorizontal.X.desktop,
				tablet: searchHorizontal.X.tablet,
			};
			var searchBoca = __webpack_require__('./components/src/themes/themeComponents/searchBoca.ts');
			const searchBoca_searchBoca = {
				default: {
					props: {
						...searchBoca.k.default?.props,
						themeStyleScript: ({ theme }) =>
							(0, emotion_react_browser_esm.AH)({
								'.ss__toolbar .ss__button--sidebar-toggle-button-wrapper': { marginRight: 'inherit', width: 'calc(270px + 1.5em)' },
							}),
					},
					components: searchBoca.k.default?.components,
				},
				mobile: searchBoca.k.mobile,
				desktop: searchBoca.k.desktop,
				tablet: searchBoca.k.tablet,
			};
			var searchSnapnco = __webpack_require__('./components/src/themes/themeComponents/searchSnapnco.ts');
			const searchSnapnco_searchSnapnco = {
				default: {
					props: { ...searchSnapnco.x.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: searchSnapnco.x.default?.components,
				},
				mobile: searchSnapnco.x.mobile,
				desktop: searchSnapnco.x.desktop,
				tablet: searchSnapnco.x.tablet,
			};
			var searchSnappy = __webpack_require__('./components/src/themes/themeComponents/searchSnappy.ts');
			const searchSnappy_searchSnappy = {
					default: {
						props: { ...searchSnappy.e.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
						components: searchSnappy.e.default?.components,
					},
					mobile: searchSnappy.e.mobile,
					desktop: searchSnappy.e.desktop,
					tablet: searchSnappy.e.tablet,
				},
				snapnco = {
					name: 'snapnco',
					variables: {
						breakpoints: { mobile: 767, tablet: 991, desktop: 1299 },
						colors: { text: '#222222', primary: '#202223', secondary: '#6d7175', accent: '#3a23ad' },
					},
					components: {
						...atoms_default,
						...molecules_default,
						...organisms_default,
						...{
							...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.default),
							...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.default),
							...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.default),
							...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.default),
							...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.default),
							...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.default),
							...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.default),
							...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.default),
							...(0, transformThemeComponent.Z)('search', search_search.default),
							...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.default),
							...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.default),
							...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.default),
							...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.default),
						},
					},
					responsive: {
						mobile: {
							...atoms_mobile,
							...molecules_mobile,
							...organisms_mobile,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.mobile),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.mobile),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.mobile),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.mobile),
								...(0, transformThemeComponent.Z)('search', search_search.mobile),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.mobile),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.mobile),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.mobile),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.mobile),
							},
						},
						tablet: {
							...atoms_tablet,
							...molecules_tablet,
							...organisms_tablet,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.tablet),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.tablet),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.tablet),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.tablet),
								...(0, transformThemeComponent.Z)('search', search_search.tablet),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.tablet),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.tablet),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.tablet),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.tablet),
							},
						},
						desktop: {
							...atoms_desktop,
							...molecules_desktop,
							...organisms_desktop,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.desktop),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.desktop),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.desktop),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.desktop),
								...(0, transformThemeComponent.Z)('search', search_search.desktop),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.desktop),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.desktop),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.desktop),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.desktop),
							},
						},
					},
				};
		},
		'./components/src/themes/snappy/snappy.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { m: () => snappy });
			var transformThemeComponent = __webpack_require__('./components/src/themes/utils/transformThemeComponent.ts'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js');
			const button_button = {
					default: {
						props: {
							themeStyleScript: ({}) =>
								(0, emotion_react_browser_esm.AH)({
									backgroundColor: '#fff',
									borderRadius: '2em',
									padding: '10px 15px',
									color: '#959595',
									border: '2px solid #e6e6e6',
									'.ss__icon': { fill: '#5C5C5C', stroke: '#5C5C5C' },
									'&:not(.ss__button--disabled):hover': {
										opacity: 0.7,
										backgroundColor: '#fff',
										'.ss__icon': { fill: '#5C5C5C', stroke: '#5C5C5C' },
									},
								}),
						},
					},
				},
				dropdown = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									position: 'relative',
									'&.ss__dropdown--open': { '& .ss__dropdown__content': { transition: 'opacity .5s ease' } },
								}),
						},
					},
				},
				icon = {
					default: {
						props: {
							themeStyleScript: ({ color, height, width, size, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									fill: color || variables?.colors?.accent,
									stroke: color || variables?.colors?.accent,
									width: width || size,
									height: height || size,
								});
							},
						},
					},
				},
				image_image = {
					default: {
						props: {
							themeStyleScript: ({ visibility, theme }) =>
								(0, emotion_react_browser_esm.AH)({ borderRadius: '20px', overflow: 'hidden', '& img': { visibility } }),
						},
					},
				},
				loadingBar = {
					default: {
						props: {
							themeStyleScript: ({ color, backgroundColor, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									background: backgroundColor || '#f8f8f8',
									'& .ss__loading-bar__bar': { background: `${color || variables?.colors?.accent || '#ccc'}` },
								});
							},
						},
					},
				},
				paginationInfo = { default: { props: {} } },
				price = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									margin: '0',
									'&.ss__price--strike': { color: variables?.colors?.secondary || 'inherit', opacity: 0.5 },
								});
							},
						},
					},
				},
				searchHeader = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.ss__search-header__title': { color: variables?.colors?.primary, marginBottom: 0, fontWeight: 'initial', fontSize: '25px' },
									'.ss__search-header__title--corrected': { color: variables?.colors?.secondary },
								});
							},
							titleText: (data) => 'Search Results' + (data.search?.query?.string ? ` for ${data.search?.query?.string}` : ''),
						},
					},
				},
				skeleton = { default: { props: {} } },
				atoms_default = {
					...(0, transformThemeComponent.Z)('button', button_button.default),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.default),
					...(0, transformThemeComponent.Z)('icon', icon.default),
					...(0, transformThemeComponent.Z)('image', image_image.default),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.default),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.default),
					...(0, transformThemeComponent.Z)('price', price.default),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.default),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.default),
				},
				atoms_mobile = {
					...(0, transformThemeComponent.Z)('button', button_button.mobile),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.mobile),
					...(0, transformThemeComponent.Z)('icon', icon.mobile),
					...(0, transformThemeComponent.Z)('image', image_image.mobile),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.mobile),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.mobile),
					...(0, transformThemeComponent.Z)('price', price.mobile),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.mobile),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.mobile),
				},
				atoms_tablet = {
					...(0, transformThemeComponent.Z)('dropdown', dropdown.tablet),
					...(0, transformThemeComponent.Z)('icon', icon.tablet),
					...(0, transformThemeComponent.Z)('image', image_image.tablet),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.tablet),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.tablet),
					...(0, transformThemeComponent.Z)('price', price.tablet),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.tablet),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.tablet),
				},
				atoms_desktop = {
					...(0, transformThemeComponent.Z)('button', button_button.desktop),
					...(0, transformThemeComponent.Z)('dropdown', dropdown.desktop),
					...(0, transformThemeComponent.Z)('icon', icon.desktop),
					...(0, transformThemeComponent.Z)('image', image_image.desktop),
					...(0, transformThemeComponent.Z)('loadingBar', loadingBar.desktop),
					...(0, transformThemeComponent.Z)('paginationInfo', paginationInfo.desktop),
					...(0, transformThemeComponent.Z)('price', price.desktop),
					...(0, transformThemeComponent.Z)('searchHeader', searchHeader.desktop),
					...(0, transformThemeComponent.Z)('skeleton', skeleton.desktop),
				},
				carousel = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.swiper-pagination-bullet': {
										background: '#ccc',
										opacity: '.5',
										'&.swiper-pagination-bullet-active': { opacity: '1', background: variables?.colors?.accent || '#3A23AD' },
									},
								});
							},
						},
					},
				};
			var node_modules_color = __webpack_require__('../../node_modules/color/index.js'),
				color_default = __webpack_require__.n(node_modules_color);
			const checkbox_checkbox = {
					default: {
						props: {
							themeStyleScript: ({ color, theme }) => {
								const variables = theme?.variables,
									backgroundColorObj = new (color_default())(color || variables?.colors.primary),
									backgroundTextColorObj = backgroundColorObj.isDark() ? new (color_default())('#fff') : new (color_default())('#000');
								return (0, emotion_react_browser_esm.AH)({
									border: `2px solid ${backgroundColorObj.hex()}`,
									borderRadius: '3px',
									'&.ss__checkbox--active': {
										backgroundColor: backgroundColorObj.hex(),
										'.ss__icon': { fill: backgroundTextColorObj.hex(), stroke: backgroundTextColorObj.hex() },
									},
									'&.ss__checkbox--disabled': { opacity: 0.3 },
								});
							},
							size: '18px',
						},
					},
				},
				errorHandler = { default: { props: {} } },
				facetGridOptions = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables,
									backgroundColorObj = new (color_default())(variables?.colors.primary),
									colorObj = backgroundColorObj.isDark() ? new (color_default())('#fff') : new (color_default())('#000');
								return (0, emotion_react_browser_esm.AH)({
									a: { color: theme?.variables?.colors?.text },
									'& .ss__facet-grid-options__option': {
										border: `1px solid ${backgroundColorObj.hex()}`,
										borderRadius: '3px',
										'&.ss__facet-grid-options__option--filtered': { background: backgroundColorObj.hex(), color: colorObj.hex() },
										'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer' },
									},
								});
							},
							gapSize: '5px',
							columns: 5,
						},
					},
				},
				facetHierarchyOptions = {
					default: {
						props: {
							themeStyleScript: ({ horizontal, theme }) => {
								const variables = theme?.variables;
								return horizontal
									? (0, emotion_react_browser_esm.AH)({
											'.ss__facet-hierarchy-options__option': {
												color: variables?.colors?.secondary,
												border: `1px solid ${variables?.colors?.secondary || '#333'}`,
												padding: '0.5em 0.5em',
												'&.ss__facet-hierarchy-options__option--filtered': {
													fontWeight: 'bold',
													color: theme?.variables?.colors?.primary,
													marginRight: '2em',
												},
												'&.ss__facet-hierarchy-options__option--return': { '&:before': { color: variables?.colors?.accent } },
											},
									  })
									: (0, emotion_react_browser_esm.AH)({
											'.ss__facet-hierarchy-options__option': {
												color: variables?.colors?.secondary,
												'&.ss__facet-hierarchy-options__option--return': { '&:before': { color: variables?.colors?.accent } },
											},
									  });
							},
						},
					},
				},
				facetListOptions = {
					default: {
						props: {
							themeStyleScript: ({ horizontal, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__facet-list-options__option': {
										margin: horizontal ? '0 5px 5px 0' : '0 0 5px 0',
										color: variables?.colors?.secondary,
										border: horizontal ? `1px solid ${variables?.colors?.secondary || '#333'}` : void 0,
										padding: horizontal ? '0.5em 0.5em' : void 0,
										textDecoration: 'none',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-list-options__option--filtered': { fontWeight: 'initial', color: variables?.colors?.secondary },
										'& .ss__facet-list-options__option__value': {
											'& .ss__facet-list-options__option__value__count': { fontSize: 'inherit', marginLeft: '5px' },
										},
									},
								});
							},
						},
					},
				},
				facetPaletteOptions = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									a: { color: theme?.variables?.colors?.text },
									'.ss__facet-palette-options__option': {
										'&:hover': {
											cursor: 'pointer',
											'.ss__facet-palette-options__option__palette': { opacity: 0.7 },
											'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent !important' },
										},
										'.ss__facet-palette-options__option__wrapper': { borderRadius: '50%', overflow: 'hidden', padding: '0px' },
										'.ss__facet-palette-options__option__palette': {
											border: '2px solid #e6e6e6',
											'.ss__facet-palette-options__icon': { opacity: 1, stroke: 'gray', strokeWidth: '2px' },
										},
									},
									'&.ss__facet-palette-options--grid': {
										'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__wrapper': { border: '0px' } },
									},
								}),
							gapSize: '3px',
							hideLabel: !0,
							columns: 5,
							hideIcon: !1,
						},
						components: { '*facetPaletteOptions icon': { size: '50%', icon: 'check-thin' } },
					},
				},
				facetSlider = {
					default: {
						props: {
							themeStyleScript: ({
								railColor,
								trackColor,
								handleColor,
								valueTextColor,
								handleDraggingColor,
								showTicks,
								stickyHandleLabel,
								theme,
							}) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									marginBottom: showTicks && stickyHandleLabel ? '22px' : showTicks || stickyHandleLabel ? '10px' : '5px',
									color: variables?.colors?.secondary,
									'& .ss__facet-slider__slider': { height: '5px' },
									'& .ss__facet-slider__rail': { background: railColor || variables?.colors?.secondary || '#333' },
									'& .ss__facet-slider__segment': { background: trackColor || '#f2f2f2', borderRadius: '3px' },
									'& .ss__facet-slider__handles': {
										'& button': {
											'& .ss__facet-slider__handle': {
												background: handleColor || variables?.colors?.secondary || '#333',
												color: valueTextColor || variables?.colors?.secondary || 'initial',
												'&.ss__facet-slider__handle--active': {
													background: handleDraggingColor || handleColor || variables?.colors?.secondary || '#000',
												},
											},
											'& .ss__facet-slider__handle:after': { background: 'none' },
										},
									},
									'& .ss__facet-slider__labels': { color: variables?.colors?.secondary || valueTextColor },
								});
							},
							handleColor: 'black',
							handleDraggingColor: 'black',
						},
					},
				},
				filter = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'& .ss__filter__button': {
										backgroundColor: 'white',
										color: '#959595',
										border: '2px solid #e6e6e6',
										'& .ss__filter__button__icon': { fill: '#5C5C5C', stroke: '#5C5C5C', margin: '0 10px 0 0' },
										'&:hover': {
											backgroundColor: 'white',
											color: '#959595',
											border: '2px solid #e6e6e6',
											opacity: 0.7,
											'& .ss__filter__button__icon': { fill: '#5C5C5C', stroke: '#5C5C5C' },
										},
									},
								}),
							hideFacetLabel: !0,
						},
					},
				},
				grid = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__grid__options': {
										'.ss__grid__option': {
											'&.ss__grid__option--selected': { border: `3px solid ${theme?.variables?.colors?.primary || '#333'}`, fontWeight: 'bold' },
										},
									},
								}),
							hideShowLess: !0,
							overflowButtonInGrid: !0,
						},
					},
				},
				layoutSelector = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__button__content': { gap: '7px' },
									'.ss__list__option': {
										color: '#e6e6e6',
										border: '2px solid #e6e6e6',
										padding: '10px',
										borderRadius: '50%',
										'.ss__icon': { fill: '#e6e6e6', stroke: '#e6e6e6' },
										'&:hover': { color: 'black', border: '2px solid black', opacity: 0.7, '.ss__icon': { fill: 'black', stroke: 'black' } },
									},
									'.ss__list__option--selected': { color: 'black', border: '2px solid black', '.ss__icon': { fill: 'black', stroke: 'black' } },
								}),
							type: 'list',
							hideLabel: !0,
						},
						components: { '*layoutSelector icon': { size: '5px' } },
					},
				},
				list = {
					default: {
						props: { themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ gap: '8px', '& .ss__list__options': { gap: '10px' } }) },
						components: { '*list icon': { size: '24px' } },
					},
				},
				loadMore = {
					default: {
						props: {
							themeStyleScript: ({ color, backgroundColor, theme }) => {
								const variables = theme?.variables,
									barColour = new (color_default())(color || variables?.colors.accent),
									backgroundColour = backgroundColor ? new (color_default())(backgroundColor) : barColour.lightness(90);
								return (0, emotion_react_browser_esm.AH)({
									'.ss__button': { '.ss__button__content': { display: 'inline-flex', alignItems: 'center', gap: '5px' } },
									'.ss__load-more__progress': {
										'.ss__load-more__progress__indicator': {
											background: backgroundColour.hex(),
											'.ss__load-more__progress__indicator__bar': { background: barColour.hex() },
										},
									},
								});
							},
						},
					},
				},
				overlayBadge = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({ '.ss__overlay-badge__grid-wrapper': { padding: '0.5rem' } }),
						},
					},
				};
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const pagination = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__pagination__page': {
										display: 'none',
										color: variables?.colors?.secondary,
										border: '1px solid black',
										borderRadius: '10px',
										background: 'white',
										padding: '5px 10px',
										margin: '0px 5px',
										'&:hover': { opacity: 0.7 },
									},
									'& .ss__pagination__page--previous, & .ss__pagination__page--next': { display: 'inline-block' },
									'& .ss__pagination__prev, & .ss__pagination__next': { display: 'inline-flex', alignItems: 'center', verticalAlign: 'top' },
									'& .ss__pagination__prev .ss__icon': { marginRight: '10px' },
									'& .ss__pagination__next .ss__icon': { marginLeft: '10px' },
								});
							},
							hideFirst: !0,
							hideLast: !0,
							hideEllipsis: !0,
							pages: 0,
							prevButton: (0, emotion_react_jsx_runtime_browser_esm.Y)(
								() =>
									(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: 'ss__pagination__prev',
										children: [(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { icon: 'angle-left' }), 'Previous'],
									}),
								{}
							),
							nextButton: (0, emotion_react_jsx_runtime_browser_esm.Y)(
								() =>
									(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: 'ss__pagination__next',
										children: ['Next', (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { icon: 'angle-right' })],
									}),
								{}
							),
						},
					},
				},
				radio_radio = {
					default: {
						props: {
							themeStyleScript: ({ size, native, color, theme }) => {
								const variables = theme?.variables;
								return native
									? (0, emotion_react_browser_esm.AH)({
											width: size,
											height: size,
											display: 'flex',
											justifyContent: 'center',
											'.ss__radio__input': { height: `calc(${size} - 30%)`, width: `calc(${size} - 30%)`, margin: 'auto' },
									  })
									: (0, emotion_react_browser_esm.AH)({
											'.ss__icon': { fill: color || variables?.colors.primary, stroke: color || variables?.colors.primary },
									  });
							},
						},
					},
				},
				radioList = { default: { props: {} } },
				result = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'&.ss__result--list': {
										border: '1px solid #e6e6e6',
										borderRadius: '20px',
										overflow: 'hidden',
										'& .ss__result__details': {
											flexDirection: 'row',
											display: 'flex',
											justifyContent: 'space-between',
											padding: '10px',
											marginLeft: '0px',
											position: 'relative',
											'.ss__result__details__pricing': {
												marginBottom: '0px',
												display: 'flex',
												alignItems: 'center',
												'.ss__result__price': { fontSize: '2em' },
												'.ss__price--strike': { fontSize: '1.2em' },
											},
											'& .ss__callout-badge': { position: 'absolute', bottom: '0px' },
										},
										'.ss__result__image-wrapper': { flex: '0 0 6%', '.ss__result__image': { borderRadius: '0px' } },
									},
									'&.ss__result--grid': {
										position: 'relative',
										'& .ss__result__details': {
											width: '100%',
											boxSizing: 'border-box',
											height: '-webkit-fill-available',
											textAlign: 'left',
											background: ' linear-gradient(to bottom,  rgba(0,0,0,0) 51%,rgba(0,0,0,0.65) 100%)',
											cursor: 'pointer',
											position: 'absolute',
											borderRadius: '20px',
											color: 'white',
											alignItems: 'baseline',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'flex-end',
											'& .ss__result__details__title': { a: { color: 'inherit', textDecoration: 'none' } },
											'& .ss__result__details__pricing': {
												'& .ss__result__price': { color: 'white', fontSize: '1.5em' },
												'& .ss__price--strike': { fontSize: '1.2em', opacity: 0.7 },
											},
										},
									},
									[`@media (max-width: ${variables?.breakpoints.mobile}px)`]: {
										'&.ss__result--list': {
											'.ss__result__image-wrapper': { flex: '0 0 20%' },
											'& .ss__result__details': {
												'.ss__result__details__pricing': { '.ss__result__price': { fontSize: '1.3em' }, '.ss__price--strike': { fontSize: '.9em' } },
											},
										},
									},
								});
							},
						},
					},
				},
				searchInput = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({ border: `1px solid ${variables?.colors?.secondary || '#ccc'}` });
							},
						},
					},
				},
				select_select = {
					default: {
						props: {
							themeStyleScript: ({ backgroundColor, theme }) => {
								const variables = theme?.variables,
									transparentSecondary = new (color_default())(theme?.variables?.colors?.secondary).opaquer(0.2);
								return (0, emotion_react_browser_esm.AH)({
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
												borderTopLeftRadius: '3px',
												borderTopRightRadius: '3px',
												'.ss__select__dropdown__button__icon': { transform: 'rotate(180deg)' },
											},
											'.ss__dropdown__content': {
												backgroundColor: backgroundColor || '#fff',
												boxShadow: '0 6px 12px 1px #0000001f',
												borderBottomLeftRadius: '3px',
												borderBottomRightRadius: '3px',
												zIndex: '10000',
											},
										},
									},
									'.ss__button__content': { gap: '7px' },
									'.ss__select__select': {
										border: '0px',
										marginBottom: '0px',
										'.ss__select__select__option': {
											listStyle: 'none',
											padding: '6px 30px',
											gap: '6px',
											color: variables?.colors?.secondary,
											'&.ss__select__select__option--selected': {
												backgroundColor: `${transparentSecondary.rgb().lightness(95)}` || 'rgba(109,113,117,.06)',
											},
											'&:hover': { backgroundColor: `${transparentSecondary.rgb().lightness(95)}` || 'rgba(109,113,117,.06)' },
										},
									},
								});
							},
							iconClose: 'angle-down',
							iconOpen: 'angle-down',
						},
					},
				},
				slideout = {
					default: {
						props: {
							themeStyleScript: ({ isActive, width, slideDirection, theme }) =>
								(0, emotion_react_browser_esm.AH)({
									left: 'left' == slideDirection ? (isActive ? '0' : `-${width}`) : 'right' != slideDirection ? '0' : 'initial',
									right: 'right' == slideDirection ? (isActive ? '0' : `-${width}`) : 'initial',
									bottom: 'bottom' == slideDirection ? (isActive ? '0' : '-100vh') : 'initial',
									top: 'top' == slideDirection ? (isActive ? '0' : '-100vh') : 'bottom' == slideDirection ? 'initial' : '0',
									background: '#fff',
								}),
						},
					},
				},
				perPage = {
					default: {
						props: {
							themeStyleScript: ({ theme }) =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__button__content': { gap: '7px' },
									'.ss__dropdown .ss__select__dropdown__button': { fontWeight: 'initial' },
								}),
							label: '',
						},
						components: { '*perPage icon': { size: '12px' } },
					},
					mobile: { components: { '*perPage select': { separator: '' } } },
				},
				rating = { default: { props: {} } },
				sortBy = {
					default: {
						props: {
							themeStyleScript: () =>
								(0, emotion_react_browser_esm.AH)({
									'.ss__button__content': { gap: '7px' },
									'.ss__dropdown.ss__dropdown--open': { '.ss__dropdown__button': { boxShadow: 'none' } },
									'.ss__dropdown': {
										'.ss__dropdown__content': { width: 'max-content' },
										'.ss__select__dropdown__button': {
											background: '#e6e6e6',
											borderRadius: '25px',
											fontWeight: 'initial',
											padding: '10px 5px 10px 15px',
											boxShadow: 'none',
											'&:hover': { background: '#e6e6e6' },
											'.ss__select__dropdown__button__icon': { background: 'white', padding: '5px', borderRadius: '50%', marginLeft: '15px' },
										},
									},
								}),
						},
						components: { '*sortBy icon': { size: '12px', icon: 'angle-down' } },
					},
					mobile: { components: { '*sortBy select': { hideSelection: !0, separator: '' } } },
				},
				swatches = { default: { props: {} } },
				variantSelection = { default: { props: {} } },
				terms = { default: { props: { styleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) } } },
				molecules_default = {
					...(0, transformThemeComponent.Z)('carousel', carousel.default),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.default),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.default),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.default),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.default),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.default),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.default),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.default),
					...(0, transformThemeComponent.Z)('filter', filter.default),
					...(0, transformThemeComponent.Z)('grid', grid.default),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.default),
					...(0, transformThemeComponent.Z)('list', list.default),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.default),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.default),
					...(0, transformThemeComponent.Z)('pagination', pagination.default),
					...(0, transformThemeComponent.Z)('radio', radio_radio.default),
					...(0, transformThemeComponent.Z)('radioList', radioList.default),
					...(0, transformThemeComponent.Z)('result', result.default),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.default),
					...(0, transformThemeComponent.Z)('select', select_select.default),
					...(0, transformThemeComponent.Z)('slideout', slideout.default),
					...(0, transformThemeComponent.Z)('perPage', perPage.default),
					...(0, transformThemeComponent.Z)('rating', rating.default),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.default),
					...(0, transformThemeComponent.Z)('swatches', swatches.default),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.default),
					...(0, transformThemeComponent.Z)('terms', terms.default),
				},
				molecules_mobile = {
					...(0, transformThemeComponent.Z)('carousel', carousel.mobile),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.mobile),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.mobile),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.mobile),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.mobile),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.mobile),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.mobile),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.mobile),
					...(0, transformThemeComponent.Z)('filter', filter.mobile),
					...(0, transformThemeComponent.Z)('grid', grid.mobile),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.mobile),
					...(0, transformThemeComponent.Z)('list', list.mobile),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.mobile),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.mobile),
					...(0, transformThemeComponent.Z)('pagination', pagination.mobile),
					...(0, transformThemeComponent.Z)('radio', radio_radio.mobile),
					...(0, transformThemeComponent.Z)('radioList', radioList.mobile),
					...(0, transformThemeComponent.Z)('result', result.mobile),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.mobile),
					...(0, transformThemeComponent.Z)('select', select_select.mobile),
					...(0, transformThemeComponent.Z)('slideout', slideout.mobile),
					...(0, transformThemeComponent.Z)('perPage', perPage.mobile),
					...(0, transformThemeComponent.Z)('rating', rating.mobile),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.mobile),
					...(0, transformThemeComponent.Z)('swatches', swatches.mobile),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.mobile),
					...(0, transformThemeComponent.Z)('terms', terms.mobile),
				},
				molecules_tablet = {
					...(0, transformThemeComponent.Z)('carousel', carousel.tablet),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.tablet),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.tablet),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.tablet),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.tablet),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.tablet),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.tablet),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.tablet),
					...(0, transformThemeComponent.Z)('filter', filter.tablet),
					...(0, transformThemeComponent.Z)('grid', grid.tablet),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.tablet),
					...(0, transformThemeComponent.Z)('list', list.tablet),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.tablet),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.tablet),
					...(0, transformThemeComponent.Z)('pagination', pagination.tablet),
					...(0, transformThemeComponent.Z)('radio', radio_radio.tablet),
					...(0, transformThemeComponent.Z)('radioList', radioList.tablet),
					...(0, transformThemeComponent.Z)('result', result.tablet),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.tablet),
					...(0, transformThemeComponent.Z)('select', select_select.tablet),
					...(0, transformThemeComponent.Z)('slideout', slideout.tablet),
					...(0, transformThemeComponent.Z)('perPage', perPage.tablet),
					...(0, transformThemeComponent.Z)('rating', rating.tablet),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.tablet),
					...(0, transformThemeComponent.Z)('swatches', swatches.tablet),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.tablet),
					...(0, transformThemeComponent.Z)('terms', terms.tablet),
				},
				molecules_desktop = {
					...(0, transformThemeComponent.Z)('carousel', carousel.desktop),
					...(0, transformThemeComponent.Z)('checkbox', checkbox_checkbox.desktop),
					...(0, transformThemeComponent.Z)('errorHandler', errorHandler.desktop),
					...(0, transformThemeComponent.Z)('facetGridOptions', facetGridOptions.desktop),
					...(0, transformThemeComponent.Z)('facetHierarchyOptions', facetHierarchyOptions.desktop),
					...(0, transformThemeComponent.Z)('facetListOptions', facetListOptions.desktop),
					...(0, transformThemeComponent.Z)('facetPaletteOptions', facetPaletteOptions.desktop),
					...(0, transformThemeComponent.Z)('facetSlider', facetSlider.desktop),
					...(0, transformThemeComponent.Z)('filter', filter.desktop),
					...(0, transformThemeComponent.Z)('grid', grid.desktop),
					...(0, transformThemeComponent.Z)('layoutSelector', layoutSelector.desktop),
					...(0, transformThemeComponent.Z)('list', list.desktop),
					...(0, transformThemeComponent.Z)('loadMore', loadMore.desktop),
					...(0, transformThemeComponent.Z)('overlayBadge', overlayBadge.desktop),
					...(0, transformThemeComponent.Z)('pagination', pagination.desktop),
					...(0, transformThemeComponent.Z)('radio', radio_radio.desktop),
					...(0, transformThemeComponent.Z)('radioList', radioList.desktop),
					...(0, transformThemeComponent.Z)('result', result.desktop),
					...(0, transformThemeComponent.Z)('searchInput', searchInput.desktop),
					...(0, transformThemeComponent.Z)('select', select_select.desktop),
					...(0, transformThemeComponent.Z)('slideout', slideout.desktop),
					...(0, transformThemeComponent.Z)('perPage', perPage.desktop),
					...(0, transformThemeComponent.Z)('rating', rating.desktop),
					...(0, transformThemeComponent.Z)('sortBy', sortBy.desktop),
					...(0, transformThemeComponent.Z)('swatches', swatches.desktop),
					...(0, transformThemeComponent.Z)('variantSelection', variantSelection.desktop),
					...(0, transformThemeComponent.Z)('terms', terms.desktop),
				},
				facet = {
					default: {
						props: {
							themeStyleScript: ({ color, theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'& .ss__facet__dropdown': {
										background: ' #f8f8f8',
										padding: '20px',
										borderRadius: '30px',
										'& .ss__facet__dropdown__icon': { transition: 'transform ease .5s' },
										'&.ss__dropdown--open': { '& .ss__facet__dropdown__icon': { transition: 'transform ease .5s', transform: 'rotate(180deg)' } },
										'.ss__dropdown__content': { background: '#f8f8f8' },
									},
									'& .ss__facet__header': { fontWeight: 'initial', borderBottom: '0px' },
									'& .ss__facet__options': {
										maxHeight: '400px',
										'&::-webkit-scrollbar': { width: '8px' },
										'&::-webkit-scrollbar-track': { background: '#f2f2f2' },
										'&::-webkit-scrollbar-thumb': { background: variables?.colors?.secondary || '#ccc' },
									},
									'& .ss__facet__show-more-less': {
										margin: '8px 5px',
										textAlign: 'center',
										color: color || variables?.colors?.secondary,
										span: { borderBottom: '1px solid #ccc' },
									},
								});
							},
							iconCollapse: 'angle-down',
							iconExpand: 'angle-down',
							iconOverflowMore: void 0,
							iconOverflowLess: void 0,
							showMoreText: 'View More',
							showLessText: 'View Less',
						},
					},
				},
				facetsHorizontal = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									paddingBottom: '10px',
									'& .ss__facets-horizontal__header': {
										alignItems: 'center',
										'& .ss__facets-horizontal__header__dropdown': {
											margin: '0',
											'& .ss__icon': { transition: 'transform ease .5s' },
											'& .ss__dropdown__button__heading': { color: variables?.colors?.secondary, fontWeight: 'bold' },
											'&.ss__dropdown--open': { '& .ss__dropdown__button__heading': { '& .ss__icon': { transform: 'rotate(180deg)' } } },
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
								});
							},
							iconCollapse: 'angle-down',
							limit: 9,
						},
					},
					mobile: { props: { limit: 0 } },
					tablet: { props: { limit: 5 } },
					desktop: { props: { limit: 7 } },
				},
				filterSummary = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									flexWrap: 'wrap',
									'& .ss__filter-summary__title': { fontWeight: 'bold', color: variables?.colors?.secondary },
								});
							},
							hideFacetLabel: !0,
							hideClearAll: !0,
							hideTitle: !0,
						},
					},
				},
				mobileSidebar = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									'.ss__mobile-sidebar__footer': {
										gap: '6px',
										padding: '10px',
										borderTop: '1px solid black',
										'.ss__button': { width: '100%', '.ss__button__content': { textAlign: 'center' } },
									},
									'.ss__mobile-sidebar__slideout.ss__slideout--active': { width: '80%', maxWidth: '320px' },
									'.ss__mobile-sidebar__header__close-button': { lineHeight: 1, padding: '5px' },
									[`@media (max-width: ${variables?.breakpoints.desktop}px)`]: {
										'.ss__mobile-sidebar__body': { height: 'calc(100vh - 140px)', overflow: 'scroll' },
										'.ss__per-page, .ss__sortby': {
											margin: '10px 10px 10px 0px',
											'.ss__dropdown': {
												'.ss__select__select .ss__select__select__option': { padding: '5px' },
												'.ss__select__dropdown__button': { padding: '0px' },
											},
										},
									},
								});
							},
							layout: ['perPage', 'facets', 'banner.left'],
							hideOpenButtonText: !0,
							openButtonIcon: 'filters',
						},
					},
				},
				noResults = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									color: variables?.colors?.secondary,
									' .ss__title': { color: variables?.colors?.secondary },
								});
							},
						},
					},
				},
				sidebar = {
					default: {
						props: {
							themeStyleScript: ({ theme }) => {
								const variables = theme?.variables;
								return (0, emotion_react_browser_esm.AH)({
									boxSizing: 'border-box',
									width: '100%',
									margin: '0 40px 0 0',
									'& .ss__sidebar__title': { color: variables?.colors?.primary },
								});
							},
							hideTitleText: !0,
						},
					},
				},
				termsList = { default: { props: { styleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) } } },
				toolbar = { default: { props: { themeStyleScript: () => (0, emotion_react_browser_esm.AH)({}) } } },
				organisms_default = {
					...(0, transformThemeComponent.Z)('facet', facet.default),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.default),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.default),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.default),
					...(0, transformThemeComponent.Z)('noResults', noResults.default),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.default),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.default),
					...(0, transformThemeComponent.Z)('termsList', termsList.default),
				},
				organisms_mobile = {
					...(0, transformThemeComponent.Z)('facet', facet.mobile),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.mobile),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.mobile),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.mobile),
					...(0, transformThemeComponent.Z)('noResults', noResults.mobile),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.mobile),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.mobile),
					...(0, transformThemeComponent.Z)('termsList', termsList.mobile),
				},
				organisms_tablet = {
					...(0, transformThemeComponent.Z)('facet', facet.tablet),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.tablet),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.tablet),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.tablet),
					...(0, transformThemeComponent.Z)('noResults', noResults.tablet),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.tablet),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.tablet),
					...(0, transformThemeComponent.Z)('termsList', termsList.tablet),
				},
				organisms_desktop = {
					...(0, transformThemeComponent.Z)('facet', facet.desktop),
					...(0, transformThemeComponent.Z)('facetsHorizontal', facetsHorizontal.desktop),
					...(0, transformThemeComponent.Z)('filterSummary', filterSummary.desktop),
					...(0, transformThemeComponent.Z)('mobileSidebar', mobileSidebar.desktop),
					...(0, transformThemeComponent.Z)('noResults', noResults.desktop),
					...(0, transformThemeComponent.Z)('sidebar', sidebar.desktop),
					...(0, transformThemeComponent.Z)('toolbar', toolbar.desktop),
					...(0, transformThemeComponent.Z)('termsList', termsList.desktop),
				};
			var autocompleteTemplate = __webpack_require__('./components/src/themes/themeComponents/autocompleteTemplate.ts');
			const autocompleteTemplate_autocompleteTemplate = {
				default: {
					props: { ...autocompleteTemplate.n.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: autocompleteTemplate.n.default?.components,
				},
				mobile: autocompleteTemplate.n.mobile,
				desktop: autocompleteTemplate.n.desktop,
				tablet: autocompleteTemplate.n.tablet,
			};
			var recommendation = __webpack_require__('./components/src/themes/themeComponents/recommendation.ts');
			const recommendation_recommendation = {
				default: {
					props: {
						...recommendation.C.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({ margin: '20px 0', '& .ss__recommendation__title': { color: variables?.colors?.primary } });
						},
					},
					components: recommendation.C.default?.components,
				},
				mobile: recommendation.C.mobile,
				desktop: recommendation.C.desktop,
				tablet: recommendation.C.tablet,
			};
			var recommendationBundle = __webpack_require__('./components/src/themes/themeComponents/recommendationBundle.ts');
			const recommendationBundle_recommendationBundle = {
				default: {
					props: {
						...recommendationBundle._.default?.props,
						themeStyleScript: ({ theme }) => {
							const variables = theme?.variables;
							return (0, emotion_react_browser_esm.AH)({
								margin: '20px 0',
								'.ss__recommendation-bundle__wrapper__selector': {
									'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
										backgroundColor: variables?.colors.accent,
										color: '#fff',
									},
								},
							});
						},
					},
					components: recommendationBundle._.default?.components,
				},
				mobile: recommendationBundle._.mobile,
				desktop: recommendationBundle._.desktop,
				tablet: recommendationBundle._.tablet,
			};
			var recommendationBundleEasyAdd = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleEasyAdd.ts');
			const recommendationBundleEasyAdd_recommendationBundleEasyAdd = {
				default: {
					props: { ...recommendationBundleEasyAdd.j.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleEasyAdd.j.default?.components,
				},
				mobile: recommendationBundleEasyAdd.j.mobile,
				desktop: recommendationBundleEasyAdd.j.desktop,
				tablet: recommendationBundleEasyAdd.j.tablet,
			};
			var recommendationBundleList = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleList.ts');
			const recommendationBundleList_recommendationBundleList = {
				default: {
					props: { ...recommendationBundleList.e.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleList.e.default?.components,
				},
				mobile: recommendationBundleList.e.mobile,
				desktop: recommendationBundleList.e.desktop,
				tablet: recommendationBundleList.e.tablet,
			};
			var recommendationBundleVertical = __webpack_require__('./components/src/themes/themeComponents/recommendationBundleVertical.ts');
			const recommendationBundleVertical_recommendationBundleVertical = {
				default: {
					props: { ...recommendationBundleVertical.W.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationBundleVertical.W.default?.components,
				},
				mobile: recommendationBundleVertical.W.mobile,
				desktop: recommendationBundleVertical.W.desktop,
				tablet: recommendationBundleVertical.W.tablet,
			};
			var recommendationGrid = __webpack_require__('./components/src/themes/themeComponents/recommendationGrid.ts');
			const recommendationGrid_recommendationGrid = {
				default: {
					props: { ...recommendationGrid.W.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: recommendationGrid.W.default?.components,
				},
				mobile: recommendationGrid.W.mobile,
				desktop: recommendationGrid.W.desktop,
				tablet: recommendationGrid.W.tablet,
			};
			const recommendationEmail_recommendationEmail = __webpack_require__('./components/src/themes/themeComponents/recommendationEmail.ts').O;
			var search = __webpack_require__('./components/src/themes/themeComponents/search.ts');
			const search_search = {
				default: {
					props: { ...search.D.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: search.D.default?.components,
				},
				mobile: search.D.mobile,
				desktop: search.D.desktop,
				tablet: search.D.tablet,
			};
			var searchHorizontal = __webpack_require__('./components/src/themes/themeComponents/searchHorizontal.ts');
			const searchHorizontal_searchHorizontal = {
				default: {
					props: { ...searchHorizontal.X.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: searchHorizontal.X.default?.components,
				},
				mobile: searchHorizontal.X.mobile,
				desktop: searchHorizontal.X.desktop,
				tablet: searchHorizontal.X.tablet,
			};
			var searchBoca = __webpack_require__('./components/src/themes/themeComponents/searchBoca.ts');
			const searchBoca_searchBoca = {
				default: {
					props: {
						...searchBoca.k.default?.props,
						themeStyleScript: ({ theme }) =>
							(0, emotion_react_browser_esm.AH)({
								'.ss__toolbar .ss__button--sidebar-toggle-button-wrapper': { marginRight: 'inherit', width: 'calc(270px + 1.5em)' },
							}),
					},
					components: searchBoca.k.default?.components,
				},
				mobile: searchBoca.k.mobile,
				desktop: searchBoca.k.desktop,
				tablet: searchBoca.k.tablet,
			};
			var searchSnapnco = __webpack_require__('./components/src/themes/themeComponents/searchSnapnco.ts');
			const searchSnapnco_searchSnapnco = {
				default: {
					props: { ...searchSnapnco.x.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
					components: searchSnapnco.x.default?.components,
				},
				mobile: searchSnapnco.x.mobile,
				desktop: searchSnapnco.x.desktop,
				tablet: searchSnapnco.x.tablet,
			};
			var searchSnappy = __webpack_require__('./components/src/themes/themeComponents/searchSnappy.ts');
			const searchSnappy_searchSnappy = {
					default: {
						props: { ...searchSnappy.e.default?.props, themeStyleScript: ({ theme }) => (0, emotion_react_browser_esm.AH)({}) },
						components: searchSnappy.e.default?.components,
					},
					mobile: searchSnappy.e.mobile,
					desktop: searchSnappy.e.desktop,
					tablet: searchSnappy.e.tablet,
				},
				snappy = {
					name: 'snappy',
					variables: {
						breakpoints: { mobile: 767, tablet: 991, desktop: 1299 },
						colors: { text: '#222222', primary: '#202223', secondary: '#6d7175', accent: '#3a23ad' },
					},
					components: {
						...atoms_default,
						...molecules_default,
						...organisms_default,
						...{
							...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.default),
							...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.default),
							...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.default),
							...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.default),
							...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.default),
							...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.default),
							...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.default),
							...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.default),
							...(0, transformThemeComponent.Z)('search', search_search.default),
							...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.default),
							...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.default),
							...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.default),
							...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.default),
						},
					},
					responsive: {
						mobile: {
							...atoms_mobile,
							...molecules_mobile,
							...organisms_mobile,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.mobile),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.mobile),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.mobile),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.mobile),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.mobile),
								...(0, transformThemeComponent.Z)('search', search_search.mobile),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.mobile),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.mobile),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.mobile),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.mobile),
							},
						},
						tablet: {
							...atoms_tablet,
							...molecules_tablet,
							...organisms_tablet,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.tablet),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.tablet),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.tablet),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.tablet),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.tablet),
								...(0, transformThemeComponent.Z)('search', search_search.tablet),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.tablet),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.tablet),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.tablet),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.tablet),
							},
						},
						desktop: {
							...atoms_desktop,
							...molecules_desktop,
							...organisms_desktop,
							...{
								...(0, transformThemeComponent.Z)('autocompleteTemplate', autocompleteTemplate_autocompleteTemplate.desktop),
								...(0, transformThemeComponent.Z)('recommendation', recommendation_recommendation.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundle', recommendationBundle_recommendationBundle.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleEasyAdd', recommendationBundleEasyAdd_recommendationBundleEasyAdd.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleList', recommendationBundleList_recommendationBundleList.desktop),
								...(0, transformThemeComponent.Z)('recommendationBundleVertical', recommendationBundleVertical_recommendationBundleVertical.desktop),
								...(0, transformThemeComponent.Z)('recommendationGrid', recommendationGrid_recommendationGrid.desktop),
								...(0, transformThemeComponent.Z)('recommendationEmail', recommendationEmail_recommendationEmail.desktop),
								...(0, transformThemeComponent.Z)('search', search_search.desktop),
								...(0, transformThemeComponent.Z)('searchBoca', searchBoca_searchBoca.desktop),
								...(0, transformThemeComponent.Z)('searchSnapnco', searchSnapnco_searchSnapnco.desktop),
								...(0, transformThemeComponent.Z)('searchSnappy', searchSnappy_searchSnappy.desktop),
								...(0, transformThemeComponent.Z)('searchHorizontal', searchHorizontal_searchHorizontal.desktop),
							},
						},
					},
				};
		},
		'./components/src/themes/themeComponents/autocompleteTemplate.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { n: () => autocompleteThemeComponentProps });
			const autocompleteThemeComponentProps = {
				default: {
					props: {},
					components: {
						'*autocompleteTemplate facet': { previewOnFocus: !0, limit: 6, disableOverflow: !0, disableCollapse: !0 },
						'*autocompleteTemplate facetGridOptions': { columns: 3 },
						'*autocompleteTemplate facetHierarchyOptions': { hideCount: !0 },
						'*autocompleteTemplate facetListOptions': { hideCheckbox: !0, hideCount: !0 },
						'*autocompleteTemplate facetPaletteOptions': { hideLabel: !0, columns: 3 },
						'*autocompleteTemplate result': { hideBadge: !0 },
						'*autocompleteTemplate recommendationGrid': { columns: 4, rows: 2 },
					},
				},
				mobile: {
					props: { layout: [['c1']], column1: { layout: [['termsList'], ['content'], ['_', 'button.see-more']], width: '100%' } },
					components: {
						'*autocompleteTemplate results': { columns: 2, rows: 1 },
						'*autocompleteTemplate recommendationGrid': { columns: 2, rows: 1 },
					},
				},
				tablet: {
					props: { layout: [['c1', 'c3']] },
					components: {
						'*autocompleteTemplate results': { columns: 3, rows: 1 },
						'*autocompleteTemplate recommendationGrid': { columns: 3, rows: 1 },
					},
				},
				desktop: {
					props: {},
					components: {
						'*autocompleteTemplate results': { columns: 2, rows: 2 },
						'*autocompleteTemplate recommendationGrid': { columns: 3, rows: 2 },
					},
				},
			};
		},
		'./components/src/themes/themeComponents/recommendation.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { C: () => recommendationThemeComponentProps });
			const recommendationThemeComponentProps = {
				default: { props: { slidesPerView: 5, slidesPerGroup: 5 } },
				mobile: { props: { slidesPerView: 2, slidesPerGroup: 2 } },
				tablet: { props: { slidesPerView: 3, slidesPerGroup: 3 } },
				desktop: { props: { slidesPerView: 4, slidesPerGroup: 4 } },
			};
		},
		'./components/src/themes/themeComponents/recommendationBundle.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => recommendationBundleThemeComponentProps });
			const recommendationBundleThemeComponentProps = {
				default: { props: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } } },
				mobile: { props: { carousel: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 }, ctaInline: !1 } },
				tablet: { props: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } } },
				desktop: { props: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } } },
			};
		},
		'./components/src/themes/themeComponents/recommendationBundleEasyAdd.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { j: () => recommendationBundleEasyAddThemeComponentProps });
			const recommendationBundleEasyAddThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} };
		},
		'./components/src/themes/themeComponents/recommendationBundleList.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { e: () => recommendationBundleListThemeComponentProps });
			const recommendationBundleListThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} };
		},
		'./components/src/themes/themeComponents/recommendationBundleVertical.ts': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { W: () => recommendationBundleVerticalThemeComponentProps });
			const recommendationBundleVerticalThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} };
		},
		'./components/src/themes/themeComponents/recommendationEmail.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { O: () => recommendationEmailThemeComponentProps });
			const recommendationEmailThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} };
		},
		'./components/src/themes/themeComponents/recommendationGrid.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { W: () => recommendationGridThemeComponentProps });
			const recommendationGridThemeComponentProps = { default: {}, mobile: {}, tablet: {}, desktop: {} };
		},
		'./components/src/themes/themeComponents/search.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { D: () => searchThemeComponentProps });
			const searchThemeComponentProps = {
				default: { components: { '*search results': { columns: 4 } } },
				mobile: { components: { '*search results': { columns: 2 } } },
				tablet: { components: { '*search results': { columns: 3 } } },
				desktop: {},
			};
		},
		'./components/src/themes/themeComponents/searchBoca.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { k: () => searchBocaThemeComponentProps });
			const searchBocaThemeComponentProps = {
				default: {
					props: {
						layoutOptions: [
							{ value: 1, label: '', icon: 'square', overrides: { components: { '*searchBoca results': { columns: 1 } } } },
							{ value: 2, label: '', default: !0, icon: 'layout-large', overrides: { components: { '*searchBoca results': { columns: 2 } } } },
						],
						hideToggleSidebarButton: !1,
						toggleSidebarStartClosed: !0,
					},
					components: {
						'*searchBoca button.sidebar-toggle': { icon: 'filters' },
						'*searchBoca toolbar.top': {
							layout: [
								['banner.header'],
								['_', 'searchHeader', '_'],
								['banner.banner'],
								['button.sidebar-toggle', 'paginationInfo', '_', 'perPage', 'sortBy'],
							],
						},
						'*searchBoca toolbar.middle': { layout: [] },
						'*searchBoca toolbar.bottom': { layout: [['banner.footer'], ['_', 'pagination', '_']] },
						'*searchBoca results': { columns: 4 },
					},
				},
				mobile: {
					components: {
						'*searchBoca toolbar.top': {
							layout: [
								['banner.header'],
								['_', 'searchHeader', '_'],
								['banner.banner'],
								['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector'],
							],
						},
						'*searchBoca results': { columns: 2 },
					},
				},
				tablet: {
					components: {
						'*searchBoca toolbar.top': {
							layout: [
								['_', 'searchHeader', '_'],
								['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector'],
							],
						},
						'*searchBoca results': { columns: 3 },
					},
				},
				desktop: {},
			};
		},
		'./components/src/themes/themeComponents/searchHorizontal.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { X: () => searchHorizontalThemeComponentProps });
			const searchHorizontalThemeComponentProps = {
				default: {
					props: { hideSidebar: !0, className: 'ss__search-horizontal' },
					components: {
						'*searchHorizontal toolbar.top': {
							layout: [['banner.header'], ['searchHeader'], ['banner.banner'], ['filterSummary'], ['paginationInfo', '_', 'sortBy', 'perPage']],
						},
						'*searchHorizontal toolbar.middle': { layout: ['facetsHorizontal'] },
						'*searchHorizontal toolbar.bottom': { layout: [['banner.footer'], ['_', 'pagination']] },
						'*searchHorizontal facetsHorizontal': { limit: 9 },
					},
				},
				mobile: {
					components: {
						'*searchHorizontal toolbar.top': {
							layout: [
								['banner.header'],
								['searchHeader'],
								['banner.banner'],
								['filterSummary'],
								['paginationInfo', '_'],
								['sortBy', '_', 'perPage'],
							],
						},
						'*searchHorizontal facetsHorizontal': { limit: 4 },
					},
				},
				tablet: { components: { '*searchHorizontal facetsHorizontal': { limit: 5 } } },
				desktop: { components: { '*searchHorizontal facetsHorizontal': { limit: 7 } } },
			};
		},
		'./components/src/themes/themeComponents/searchSnapnco.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { x: () => searchSnapncoThemeComponentProps });
			const searchSnapncoThemeComponentProps = {
				default: {
					props: { lang: { toggleSidebarButtonText: { value: ({ sidebarOpenState }) => (sidebarOpenState ? 'Close Filters' : 'Show Filters') } } },
					components: {
						'*searchSnapnco filterSummary': { hideTitle: !0 },
						'*searchSnapnco sidebar': { layout: [['filterSummary'], ['facets'], ['banner.left']] },
						'*searchSnapnco button.sidebar-toggle': { icon: 'close-thin' },
						'*searchSnapnco toolbar.top': { layout: ['banner.header'] },
						'*searchSnapnco toolbar.middle': { layout: [['banner.banner'], ['searchHeader', '_', 'paginationInfo', 'sortBy']] },
						'*searchSnapnco toolbar.bottom': { layout: [['banner.footer'], ['_', 'pagination', '_']] },
						'*searchSnapnco results': { columns: 4 },
					},
				},
				mobile: {
					components: {
						'*searchSnapnco mobileSidebar': { openButtonText: 'Filters', hideOpenButtonText: !1 },
						'*searchSnapnco toolbar.top': { layout: [['banner.header'], ['searchHeader'], ['paginationInfo'], ['banner.banner']] },
						'*searchSnapnco toolbar.middle': { layout: [['mobileSidebar', '_', 'sortBy']] },
						'*searchSnapnco results': { columns: 2 },
					},
				},
				tablet: {
					components: {
						'*searchSnapnco toolbar.top': { layout: [['banner.header'], ['searchHeader']] },
						'*searchSnapnco toolbar.middle': { layout: [['banner.banner'], ['paginationInfo', '_', 'mobileSidebar'], ['filterSummary']] },
						'*searchSnapnco sidebar': { layout: [['facets'], ['banner.left']] },
						'*searchSnapnco results': { columns: 3 },
					},
				},
				desktop: {},
			};
		},
		'./components/src/themes/themeComponents/searchSnappy.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { e: () => searchSnappyThemeComponentProps });
			const searchSnappyThemeComponentProps = {
				default: {
					props: {
						layoutOptions: [
							{ value: 1, label: '', default: !0, icon: 'layout-large' },
							{
								value: 2,
								label: '',
								icon: 'layout-list',
								overrides: {
									components: {
										'*searchSnappy searchHorizontal result': { layout: 'list' },
										'*searchSnappy search result': { layout: 'list' },
										'*searchSnappy searchHorizontal results': { columns: 1 },
										'*searchSnappy search results': { columns: 1 },
									},
								},
							},
						],
						hideToggleSidebarButton: !1,
						lang: { toggleSidebarButtonText: { value: ({ sidebarOpenState }) => (sidebarOpenState ? 'Close Filters' : 'Show Filters') } },
					},
					components: {
						'*searchSnappy filterSummary': { hideTitle: !0 },
						'*searchSnappy sidebar': { layout: ['facets', 'banner.left'] },
						'*searchSnappy button.sidebar-toggle': { icon: 'close-thin' },
						'*searchSnappy toolbar.top': {
							layout: [
								['banner.header'],
								['searchHeader'],
								['banner.banner'],
								['button.sidebar-toggle', 'filterSummary', '_', 'sortBy', 'layoutSelector'],
							],
						},
						'*searchSnappy toolbar.middle': { layout: [] },
						'*searchSnappy toolbar.bottom': { layout: [['banner.footer'], ['_', 'perPage', 'paginationInfo', 'pagination', '_']] },
						'*searchSnappy mobileSidebar filterSummary': { hideTitle: !1 },
						'*searchSnappy results': { columns: 4 },
					},
				},
				mobile: {
					components: {
						'*searchSnappy results': { columns: 2 },
						'*searchSnappy toolbar.top': { layout: [['banner.header'], ['searchHeader', '_', 'mobileSidebar'], ['banner.banner']] },
						'*searchSnappy toolbar.middle': { layout: [['filterSummary'], ['sortBy', '_', 'layoutSelector']] },
					},
				},
				tablet: {
					components: {
						'*searchSnappy results': { columns: 3 },
						'*searchSnappy toolbar.top': { layout: [['banner.header'], ['searchHeader', '_', 'mobileSidebar'], ['banner.banner']] },
						'*searchSnappy toolbar.middle': { layout: [['filterSummary'], ['sortBy', '_', 'layoutSelector']] },
					},
				},
				desktop: {},
			};
		},
		'./components/src/themes/utils/transformThemeComponent.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => transformThemeComponent });
			const transformThemeComponent = (componentName, themeTemplate) => {
				const themeSelectors = { ...(themeTemplate?.components || {}) };
				return themeTemplate?.props && (themeSelectors[`*${componentName}`] = themeTemplate.props), themeSelectors;
			};
		},
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'function' == typeof input
						? input(props)
						: 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: 'string' == typeof input?.type
						? input
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props, input.props?.children && cloneWithProps(input.props.children, props));
			};
		},
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function mergeProps(componentType, globalTheme, defaultProps, props) {
				const theme = props.theme,
					componentName = props?.name;
				let treePath = props.treePath || defaultProps.treePath || '';
				'layout' !== componentType && (treePath += `${treePath ? ' ' : ''}${componentType}`);
				let mergedProps = { ...defaultProps };
				if (globalTheme?.name) {
					(mergedProps = { ...mergedProps, ...props }), (treePath += componentName?.match(/^[A-Z,a-z,-]+$/) ? `.${componentName}` : '');
					filterSelectors(globalTheme?.components || {}, treePath)
						.sort(sortSelectors)
						.forEach((selector) => {
							const componentProps = globalTheme.components?.[selector];
							componentProps && (mergedProps = mergeThemeProps(componentProps, mergedProps));
						});
					filterSelectors(theme?.components || {}, treePath)
						.sort(sortSelectors)
						.forEach((selector) => {
							const componentProps = theme?.components?.[selector];
							componentProps && (mergedProps = mergeThemeProps(componentProps, mergedProps));
						}),
						(mergedProps = { ...mergedProps, theme: { ...mergedProps.theme, name: globalTheme.name }, treePath }),
						props.lang && (mergedProps.lang = props.lang),
						globalTheme.variables && (mergedProps.theme.variables = globalTheme.variables),
						treePath && treePath.indexOf('customComponent') > -1 && (mergedProps = { ...mergedProps, ...props });
				} else {
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps)), (mergedProps = { ...mergedProps, ...props, treePath });
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps));
				}
				return mergedProps;
			}
			function mergeThemeProps(componentThemeProps, mergedProps) {
				return componentThemeProps && (mergedProps = { ...mergedProps, ...componentThemeProps }), mergedProps;
			}
			function sortSelectors(a, b) {
				return (
					a
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, a.includes('*') ? 0 : 1e3) -
					b
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, b.includes('*') ? 0 : 1e3)
				);
			}
			function filterSelectors(themeComponents, treePath) {
				let selectors = Object.keys(themeComponents);
				const paths = treePath.split(' '),
					componentTypeAndName = paths.splice(-1).pop() ?? '',
					[componentType, componentName] = componentTypeAndName.split('.'),
					mappedSplitTreePath = paths.map((path) => {
						const [type, name] = path.split('.');
						return { type, name, path };
					});
				return (
					(selectors = componentName
						? selectors.filter((key) => {
								const keys = key.split(' '),
									lastkey = keys[keys.length - 1].replace(/\*/g, '');
								if (lastkey == componentType || lastkey == `${componentType}.${componentName}`) return !0;
						  })
						: selectors.filter((key) => key.endsWith(componentType))),
					selectors.filter((selector) => {
						const split = selector.replace(/\*/g, '').split(' ').slice(0, -1);
						if (0 == split.length) return !0;
						for (let s = 0; s < split.length; s++) {
							let prevIndex = -1;
							const value = split[s];
							for (let i = -1 == prevIndex ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
								const pathValue = mappedSplitTreePath[i];
								if (value === pathValue.path || value === pathValue.type) {
									prevIndex = s;
									break;
								}
							}
							if (-1 == prevIndex) return !1;
						}
						return !0;
					})
				);
			}
			__webpack_require__.d(__webpack_exports__, { D0: () => filterSelectors, fX: () => sortSelectors, v6: () => mergeProps });
		},
		'./components/src/utilities/mergeStyles.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function mergeStyles(stylingProps, defaultStyles) {
				const { name, treePath, style, styleScript, themeStyleScript, disableStyles } = stylingProps,
					styling = { 'ss-name': name, 'ss-path': treePath, css: [] };
				return (
					disableStyles || styling.css.push(defaultStyles(stylingProps)),
					themeStyleScript && styling.css.push(themeStyleScript(stylingProps)),
					styleScript && styling.css.push(styleScript(stylingProps)),
					style && styling.css.push(style),
					0 == styling.css?.length && delete styling.css,
					styling
				);
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => mergeStyles });
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
						tracker: services?.tracker || new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_9__.JD(config.client.globals),
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
							stores: { previousResults: this.results },
							data: { previousSearch: this.previousSearch, search, meta: this.meta.data },
						})),
						(this.pagination = new _Stores__WEBPACK_IMPORTED_MODULE_10__.a3({
							config: this.config,
							services: this.services,
							data: { search, meta: this.meta.data },
						})),
						(this.sorting = new _Stores__WEBPACK_IMPORTED_MODULE_11__.q({ services: this.services, data: { search, meta: this.meta.data } })),
						(this.error = void 0),
						(this.loaded = Boolean(search?.pagination)),
						(this.previousSearch = search);
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
					const { config, data, state, stores } = params || {},
						{ search, meta, previousSearch } = data || {},
						{ results, merchandising, pagination } = search || {},
						{ previousResults } = stores || {},
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
					if (
						(config?.settings?.infinite &&
							previousResults &&
							pagination?.page &&
							previousSearch?.pagination?.page &&
							pagination.page == previousSearch.pagination.page + 1 &&
							(resultsArr = (previousResults || []).concat(resultsArr)),
						pagination && merchandising?.content?.inline)
					) {
						const banners = merchandising.content.inline
							.sort(function (a, b) {
								return a.config.position.index - b.config.position.index;
							})
							.map((banner) => new Banner({ data: { banner } }));
						banners &&
							pagination.totalResults &&
							(resultsArr = (function addBannersToResults(config, results, allBanners, paginationData) {
								const bannersAndResults = [...results];
								let paginationBegin = paginationData.pageSize * (paginationData.page - 1) + 1,
									paginationEnd = paginationData.pageSize * paginationData.page;
								config?.settings?.infinite && (paginationBegin = 1);
								paginationData.pageSize * paginationData.page > paginationData.totalResults && (paginationEnd = paginationData.totalResults);
								const bannersNotInResults = allBanners.filter((banner) => !bannersAndResults.some((result) => result.id == banner.id)),
									bannersToInject = bannersNotInResults.filter((banner) => {
										const index = banner.config.position.index;
										return index >= paginationBegin - 1 && index <= paginationEnd - 1;
									}),
									bannersToInjectAtEnd = bannersNotInResults.filter((banner) => banner.config.position.index > paginationData.totalResults);
								return (
									bannersToInject.forEach((banner) => {
										const adjustedIndex = banner.config.position.index - (paginationBegin - 1);
										bannersAndResults.splice(adjustedIndex, 0, banner);
									}),
									bannersToInjectAtEnd.forEach((banner, index) => {
										const resultIndex = paginationData.totalResults - (bannersToInjectAtEnd.length - index);
										resultIndex >= paginationBegin - 1 && resultIndex <= paginationEnd - 1 && bannersAndResults.splice(resultIndex, 0, banner);
									}),
									bannersAndResults
								);
							})(config, resultsArr, banners, pagination));
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
							mappings: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							attributes: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							custom: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
							quantity: mobx__WEBPACK_IMPORTED_MODULE_1__.sH,
						});
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
			__webpack_require__.d(__webpack_exports__, { S: () => getContext });
			const JAVASCRIPT_KEYWORDS = new Set([
				'break',
				'case',
				'catch',
				'class',
				'const',
				'continue',
				'debugger',
				'default',
				'delete',
				'do',
				'else',
				'export',
				'extends',
				'finally',
				'for',
				'function',
				'if',
				'import',
				'in',
				'instanceof',
				'new',
				'return',
				'super',
				'switch',
				'this',
				'throw',
				'try',
				'typeof',
				'var',
				'void',
				'while',
				'with',
				'yield',
				'let',
				'static',
				'enum',
				'await',
				'implements',
				'package',
				'protected',
				'interface',
				'private',
				'public',
			]);
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
				const scriptVariables = {},
					scriptInnerHTML = scriptElem.innerHTML,
					scriptInnerVars = scriptInnerHTML
						.replace(/`(?:\\[\s\S]|[^`\\])*`|'(?:\\[\s\S]|[^'\\])*'|"(?:\\[\s\S]|[^"\\])*"/g, '')
						.match(/([a-zA-Z_$][a-zA-Z_$0-9]*)\s*=/g)
						?.map((match) => match.replace(/[\s=]/g, '')),
					combinedVars = evaluate.concat(scriptInnerVars || []),
					evaluateVars = combinedVars.filter((item, index) => {
						const isKeyword = JAVASCRIPT_KEYWORDS.has(item);
						return (
							isKeyword && console.error(`getContext: JavaScript keyword found: '${item}'! Please use a different variable name.`),
							combinedVars.indexOf(item) === index && !isKeyword
						);
					});
				evaluate?.forEach((name) => {
					try {
						const fn = new Function(`\n\t\t\t\tvar ${evaluateVars.join(', ')};\n\t\t\t\t${scriptInnerHTML}\n\t\t\t\treturn ${name};\n\t\t\t`);
						scriptVariables[name] = fn();
					} catch (err) {
						JAVASCRIPT_KEYWORDS.has(name) || (console.error(`getContext: error evaluating '${name}'`), console.error(err)),
							(scriptVariables[name] = void 0);
					}
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
			const { version } = { version: '1.6.1' };
		},
		'../snap-tracker/dist/esm/Tracker.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { JD: () => Tracker });
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
												uniqueCartItems = Array.from(new Set([sku, ...lastViewedProducts])).map((item) => `${item}`.trim());
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
							try {
								const [key, value] = kvPair.split('=').map((v) => decodeURIComponent(v.replace(/\+/g, ' ')));
								return { key: key.split('.'), value, type: ParamLocationType.query };
							} catch (err) {
								return (
									console.warn('Snap UrlTranslator: URI malformed - ignoring parameter', kvPair),
									{ key: ['ss__delete'], value: 'ss__delete', type: ParamLocationType.query }
								);
							}
						})
						.filter((param) => {
							const isCoreField = this.reverseMapping[param.key[0]];
							return 'ss__delete' !== param.value ? !isCoreField || (isCoreField && param.value) : '';
						});
				}
				parseHashString(hashString) {
					const params = [];
					return (
						(hashString.split('#').pop() || '')
							.split('/')
							.filter((v) => v)
							.map((hashEntries) => {
								try {
									return hashEntries.split(':').map((v) =>
										(function decodeHashComponent(string) {
											'string' == typeof string &&
												((string = (string = string.replace(/%2425/g, '$$25')).replace(/\$25/g, '%')), (string = decodeURIComponent(string)));
											return string;
										})(v)
									);
								} catch (err) {
									return console.warn('Snap UrlTranslator: URI malformed - ignoring parameter', hashEntries), [];
								}
							})
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
					'./components/Atoms/BadgePill/BadgePill.stories': [
						'./components/src/components/Atoms/BadgePill/BadgePill.stories.tsx',
						1874,
						6384,
						2980,
						7698,
					],
					'./components/Atoms/BadgePill/BadgePill.stories.tsx': [
						'./components/src/components/Atoms/BadgePill/BadgePill.stories.tsx',
						1874,
						6384,
						2980,
						7698,
					],
					'./components/Atoms/BadgeRectangle/BadgeRectangle.stories': [
						'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx',
						1874,
						6384,
						2980,
						9440,
					],
					'./components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx': [
						'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx',
						1874,
						6384,
						2980,
						9440,
					],
					'./components/Atoms/BadgeText/BadgeText.stories': [
						'./components/src/components/Atoms/BadgeText/BadgeText.stories.tsx',
						1874,
						6384,
						2980,
						5114,
					],
					'./components/Atoms/BadgeText/BadgeText.stories.tsx': [
						'./components/src/components/Atoms/BadgeText/BadgeText.stories.tsx',
						1874,
						6384,
						2980,
						5114,
					],
					'./components/Atoms/Breadcrumbs/Breadcrumbs.stories': [
						'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx',
						1874,
						6384,
						2980,
						8826,
					],
					'./components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx': [
						'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx',
						1874,
						6384,
						2980,
						8826,
					],
					'./components/Atoms/Button/Button.stories': ['./components/src/components/Atoms/Button/Button.stories.tsx', 1874, 6384, 1840],
					'./components/Atoms/Button/Button.stories.tsx': ['./components/src/components/Atoms/Button/Button.stories.tsx', 1874, 6384, 1840],
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
					'./components/Atoms/Icon/Icon.stories': ['./components/src/components/Atoms/Icon/Icon.stories.tsx', 1874, 6384, 6634],
					'./components/Atoms/Icon/Icon.stories.tsx': ['./components/src/components/Atoms/Icon/Icon.stories.tsx', 1874, 6384, 6634],
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
					'./components/Atoms/PaginationInfo/PaginationInfo.stories': [
						'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9800,
					],
					'./components/Atoms/PaginationInfo/PaginationInfo.stories.tsx': [
						'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9800,
					],
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
						2980,
						9754,
						9849,
						7191,
					],
					'./components/Molecules/CalloutBadge/CalloutBadge.stories.tsx': [
						'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						7191,
					],
					'./components/Molecules/Carousel/Carousel.stories': [
						'./components/src/components/Molecules/Carousel/Carousel.stories.tsx',
						1874,
						6384,
						6664,
						3049,
					],
					'./components/Molecules/Carousel/Carousel.stories.tsx': [
						'./components/src/components/Molecules/Carousel/Carousel.stories.tsx',
						1874,
						6384,
						6664,
						3049,
					],
					'./components/Molecules/Checkbox/Checkbox.stories': [
						'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx',
						1874,
						6384,
						9143,
					],
					'./components/Molecules/Checkbox/Checkbox.stories.tsx': [
						'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx',
						1874,
						6384,
						9143,
					],
					'./components/Molecules/ErrorHandler/ErrorHandler.stories': [
						'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx',
						1874,
						6384,
						9753,
					],
					'./components/Molecules/ErrorHandler/ErrorHandler.stories.tsx': [
						'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx',
						1874,
						6384,
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
						9754,
						9849,
						3,
					],
					'./components/Molecules/FacetListOptions/FacetListOptions.stories.tsx': [
						'./components/src/components/Molecules/FacetListOptions/FacetListOptions.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						3,
					],
					'./components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories': [
						'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6691,
					],
					'./components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx': [
						'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx',
						1874,
						6384,
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
						9754,
						9849,
						909,
					],
					'./components/Molecules/Filter/Filter.stories.tsx': [
						'./components/src/components/Molecules/Filter/Filter.stories.tsx',
						1874,
						6384,
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
						9179,
					],
					'./components/Molecules/LayoutSelector/LayoutSelector.stories.tsx': [
						'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx',
						1874,
						6384,
						9179,
					],
					'./components/Molecules/List/List.stories': ['./components/src/components/Molecules/List/List.stories.tsx', 1874, 6384, 9754, 9849, 3893],
					'./components/Molecules/List/List.stories.tsx': [
						'./components/src/components/Molecules/List/List.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						3893,
					],
					'./components/Molecules/LoadMore/LoadMore.stories': [
						'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9983,
					],
					'./components/Molecules/LoadMore/LoadMore.stories.tsx': [
						'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9983,
					],
					'./components/Molecules/OverlayBadge/OverlayBadge.stories': [
						'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						9907,
					],
					'./components/Molecules/OverlayBadge/OverlayBadge.stories.tsx': [
						'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						9907,
					],
					'./components/Molecules/Pagination/Pagination.stories': [
						'./components/src/components/Molecules/Pagination/Pagination.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4401,
					],
					'./components/Molecules/Pagination/Pagination.stories.tsx': [
						'./components/src/components/Molecules/Pagination/Pagination.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						4401,
					],
					'./components/Molecules/PerPage/PerPage.stories': [
						'./components/src/components/Molecules/PerPage/PerPage.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						3200,
						4451,
					],
					'./components/Molecules/PerPage/PerPage.stories.tsx': [
						'./components/src/components/Molecules/PerPage/PerPage.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						3200,
						4451,
					],
					'./components/Molecules/Radio/Radio.stories': ['./components/src/components/Molecules/Radio/Radio.stories.tsx', 1874, 6384, 1075],
					'./components/Molecules/Radio/Radio.stories.tsx': ['./components/src/components/Molecules/Radio/Radio.stories.tsx', 1874, 6384, 1075],
					'./components/Molecules/RadioList/RadioList.stories': [
						'./components/src/components/Molecules/RadioList/RadioList.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						5919,
					],
					'./components/Molecules/RadioList/RadioList.stories.tsx': [
						'./components/src/components/Molecules/RadioList/RadioList.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						5919,
					],
					'./components/Molecules/Rating/Rating.stories': ['./components/src/components/Molecules/Rating/Rating.stories.tsx', 1874, 6384, 9263],
					'./components/Molecules/Rating/Rating.stories.tsx': ['./components/src/components/Molecules/Rating/Rating.stories.tsx', 1874, 6384, 9263],
					'./components/Molecules/Result/Result.stories': [
						'./components/src/components/Molecules/Result/Result.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						4055,
					],
					'./components/Molecules/Result/Result.stories.tsx': [
						'./components/src/components/Molecules/Result/Result.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						4055,
					],
					'./components/Molecules/SearchInput/SearchInput.stories': [
						'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx',
						1874,
						6384,
						2407,
					],
					'./components/Molecules/SearchInput/SearchInput.stories.tsx': [
						'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx',
						1874,
						6384,
						2407,
					],
					'./components/Molecules/Select/Select.stories': [
						'./components/src/components/Molecules/Select/Select.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						7421,
					],
					'./components/Molecules/Select/Select.stories.tsx': [
						'./components/src/components/Molecules/Select/Select.stories.tsx',
						1874,
						6384,
						9754,
						9849,
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
						9754,
						9849,
						8055,
					],
					'./components/Molecules/SortBy/SortBy.stories.tsx': [
						'./components/src/components/Molecules/SortBy/SortBy.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						8055,
					],
					'./components/Molecules/Swatches/Swatches.stories': [
						'./components/src/components/Molecules/Swatches/Swatches.stories.tsx',
						1874,
						6384,
						6664,
						7861,
					],
					'./components/Molecules/Swatches/Swatches.stories.tsx': [
						'./components/src/components/Molecules/Swatches/Swatches.stories.tsx',
						1874,
						6384,
						6664,
						7861,
					],
					'./components/Molecules/Terms/Terms.stories': [
						'./components/src/components/Molecules/Terms/Terms.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9235,
					],
					'./components/Molecules/Terms/Terms.stories.tsx': [
						'./components/src/components/Molecules/Terms/Terms.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9235,
					],
					'./components/Molecules/VariantSelection/VariantSelection.stories': [
						'./components/src/components/Molecules/VariantSelection/VariantSelection.stories.tsx',
						1874,
						6384,
						6664,
						9754,
						9849,
						8012,
						2271,
					],
					'./components/Molecules/VariantSelection/VariantSelection.stories.tsx': [
						'./components/src/components/Molecules/VariantSelection/VariantSelection.stories.tsx',
						1874,
						6384,
						6664,
						9754,
						9849,
						8012,
						2271,
					],
					'./components/Organisms/Autocomplete/Autocomplete.stories': [
						'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3570,
						9885,
					],
					'./components/Organisms/Autocomplete/Autocomplete.stories.tsx': [
						'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3570,
						9885,
					],
					'./components/Organisms/BranchOverride/BranchOverride.stories': [
						'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx',
						1874,
						6384,
						7069,
					],
					'./components/Organisms/BranchOverride/BranchOverride.stories.tsx': [
						'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx',
						1874,
						6384,
						7069,
					],
					'./components/Organisms/Facet/Facet.stories': [
						'./components/src/components/Organisms/Facet/Facet.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						1555,
					],
					'./components/Organisms/Facet/Facet.stories.tsx': [
						'./components/src/components/Organisms/Facet/Facet.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						1555,
					],
					'./components/Organisms/Facets/Facets.stories': [
						'./components/src/components/Organisms/Facets/Facets.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						6721,
					],
					'./components/Organisms/Facets/Facets.stories.tsx': [
						'./components/src/components/Organisms/Facets/Facets.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						6721,
					],
					'./components/Organisms/FacetsHorizontal/FacetsHorizontal.stories': [
						'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						1249,
					],
					'./components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx': [
						'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						1249,
					],
					'./components/Organisms/FilterSummary/FilterSummary.stories': [
						'./components/src/components/Organisms/FilterSummary/FilterSummary.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6175,
					],
					'./components/Organisms/FilterSummary/FilterSummary.stories.tsx': [
						'./components/src/components/Organisms/FilterSummary/FilterSummary.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6175,
					],
					'./components/Organisms/MobileSidebar/MobileSidebar.stories': [
						'./components/src/components/Organisms/MobileSidebar/MobileSidebar.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						6631,
					],
					'./components/Organisms/MobileSidebar/MobileSidebar.stories.tsx': [
						'./components/src/components/Organisms/MobileSidebar/MobileSidebar.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
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
						2980,
						9754,
						9849,
						4522,
						3715,
					],
					'./components/Organisms/Results/Results.stories.tsx': [
						'./components/src/components/Organisms/Results/Results.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						3715,
					],
					'./components/Organisms/Sidebar/Sidebar.stories': [
						'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						7583,
					],
					'./components/Organisms/Sidebar/Sidebar.stories.tsx': [
						'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						7583,
					],
					'./components/Organisms/TermsList/TermsList.stories': [
						'./components/src/components/Organisms/TermsList/TermsList.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9671,
					],
					'./components/Organisms/TermsList/TermsList.stories.tsx': [
						'./components/src/components/Organisms/TermsList/TermsList.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						9671,
					],
					'./components/Organisms/Toolbar/Toolbar.stories': [
						'./components/src/components/Organisms/Toolbar/Toolbar.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						6299,
					],
					'./components/Organisms/Toolbar/Toolbar.stories.tsx': [
						'./components/src/components/Organisms/Toolbar/Toolbar.stories.tsx',
						1874,
						6384,
						9754,
						9849,
						6316,
						3200,
						8220,
						6299,
					],
					'./components/Templates/AutocompleteTemplate/AutocompleteTemplate.stories': [
						'./components/src/components/Templates/AutocompleteTemplate/AutocompleteTemplate.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						4253,
						1799,
					],
					'./components/Templates/AutocompleteTemplate/AutocompleteTemplate.stories.tsx': [
						'./components/src/components/Templates/AutocompleteTemplate/AutocompleteTemplate.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						4253,
						1799,
					],
					'./components/Templates/Recommendation/Recommendation.stories': [
						'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx',
						1874,
						6384,
						2980,
						6664,
						9754,
						9849,
						4522,
						1921,
					],
					'./components/Templates/Recommendation/Recommendation.stories.tsx': [
						'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx',
						1874,
						6384,
						2980,
						6664,
						9754,
						9849,
						4522,
						1921,
					],
					'./components/Templates/RecommendationBundle/RecommendationBundle.stories': [
						'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx',
						1874,
						6384,
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						6664,
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
						2980,
						9754,
						9849,
						4522,
						8241,
					],
					'./components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx': [
						'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						8241,
					],
					'./components/Templates/RecommendationGrid/RecommendationGrid.stories': [
						'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						401,
					],
					'./components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx': [
						'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						401,
					],
					'./components/Templates/Search/Search.stories': [
						'./components/src/components/Templates/Search/Search.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						8907,
					],
					'./components/Templates/Search/Search.stories.tsx': [
						'./components/src/components/Templates/Search/Search.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						8907,
					],
					'./components/Templates/SearchBoca/SearchBoca.stories': [
						'./components/src/components/Templates/SearchBoca/SearchBoca.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						7529,
					],
					'./components/Templates/SearchBoca/SearchBoca.stories.tsx': [
						'./components/src/components/Templates/SearchBoca/SearchBoca.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						7529,
					],
					'./components/Templates/SearchHorizontal/SearchHorizontal.stories': [
						'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						8595,
					],
					'./components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx': [
						'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						8595,
					],
					'./components/Templates/SearchSnapnco/SearchSnapco.stories': [
						'./components/src/components/Templates/SearchSnapnco/SearchSnapco.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						1257,
					],
					'./components/Templates/SearchSnapnco/SearchSnapco.stories.tsx': [
						'./components/src/components/Templates/SearchSnapnco/SearchSnapco.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						1257,
					],
					'./components/Templates/SearchSnappy/SearchSnappy.stories': [
						'./components/src/components/Templates/SearchSnappy/SearchSnappy.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						9397,
					],
					'./components/Templates/SearchSnappy/SearchSnappy.stories.tsx': [
						'./components/src/components/Templates/SearchSnappy/SearchSnappy.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						6316,
						3200,
						8220,
						7053,
						6818,
						9397,
					],
					'./components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories': [
						'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories.tsx',
						1874,
						6384,
						2980,
						6664,
						9754,
						9849,
						4522,
						1216,
					],
					'./components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories.tsx': [
						'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.stories.tsx',
						1874,
						6384,
						2980,
						6664,
						9754,
						9849,
						4522,
						1216,
					],
					'./components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories': [
						'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						3242,
					],
					'./components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories.tsx': [
						'./components/src/components/Trackers/Recommendation/ResultTracker/RecommendationResultTracker.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						3242,
					],
					'./components/Trackers/SearchResultTracker/SearchResultTracker.stories': [
						'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.stories.tsx',
						1874,
						6384,
						2980,
						9754,
						9849,
						4522,
						4503,
					],
					'./components/Trackers/SearchResultTracker/SearchResultTracker.stories.tsx': [
						'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.stories.tsx',
						1874,
						6384,
						2980,
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
		__webpack_require__.O(0, [5541], () => {
			return (moduleId = './storybook-config-entry.js'), __webpack_require__((__webpack_require__.s = moduleId));
			var moduleId;
		});
		__webpack_require__.O();
	},
]);
