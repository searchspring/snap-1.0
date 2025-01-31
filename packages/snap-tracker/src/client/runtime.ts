/* tslint:disable */
/* eslint-disable */
/**
 * beacon.searchspring.io
 * # Endpoint Details Each endpoint begins with `/{siteId}/` - this is a six digit alpha-numeric value ([a-z0-9]{6}) and is unique for each store. Each store\'s `siteId` can be found in the SMC (Searchspring Management Console).  Every endpoint accepts _application/json_ POST data.  ### List of Endpoints  [**Shopper**](/#tag/Shopper) - [/{siteId}/shopper/login](#tag/Shopper/operation/login)  [**Autocomplete**](/#tag/Autocomplete) - [/{siteId}/autocomplete/render](#tag/Autocomplete/operation/autocomplete-render) - [/{siteId}/autocomplete/impression](#tag/Autocomplete/operation/autocomplete-impression) - [/{siteId}/autocomplete/addtocart](#tag/Autocomplete/operation/autocomplete-addtocart) - [/{siteId}/autocomplete/clickthrough](#tag/Autocomplete/operation/autocomplete-clickthrough) - [/{siteId}/autocomplete/redirect](#tag/Autocomplete/operation/autocomplete-redirect)  [**Search**](#tag/Search) - [/{siteId}/search/render](#tag/Search/operation/search-render) - [/{siteId}/search/impression](#tag/Search/operation/search-impression) - [/{siteId}/search/addtocart](#tag/Search/operation/search-addtocart) - [/{siteId}/search/clickthrough](#tag/Search/operation/search-clickthrough) - [/{siteId}/search/redirect](#tag/Search/operation/search-redirect)  [**Category**](#tag/Category) - [/{siteId}/category/render](#tag/Category/operation/category-render) - [/{siteId}/category/impression](#tag/Category/operation/category-impression) - [/{siteId}/category/addtocart](#tag/Category/operation/category-addtocart) - [/{siteId}/category/clickthrough](#tag/Category/operation/category-clickthrough)  [**Recommendations**](#tag/Recommendations) - [/{siteId}/recommendations/render](#tag/Recommendations/operation/recommendations-render) - [/{siteId}/recommendations/impression](#tag/Recommendations/operation/recommendations-impression) - [/{siteId}/recommendations/addtocart](#tag/Recommendations/operation/recommendations-addtocart) - [/{siteId}/recommendations/clickthrough](#tag/Recommendations/operation/recommendations-clickthrough)  [**Product**](#tag/Product)   - [/{siteId}/product/pageview](#tag/Product/operation/product-pageview)   [**Cart**](#tag/Cart)   - [/{siteId}/cart/add](#tag/Cart/operation/cart-add) - [/{siteId}/cart/remove](#tag/Cart/operation/cart-remove) - [/{siteId}/cart/view](#tag/Cart/operation/cart-view)    [**Order**](#tag/Order)   - [/{siteId}/order/transaction](#tag/Order/operation/order-transaction)    [**Error Logs**](#tag/Error-Logs) - [/{siteId}/log/personalization](#tag/Error-Logs/operation/log-personalization) - [/{siteId}/log/shopifypixel](#tag/Error-Logs/operation/log-shopifypixel) - [/{siteId}/log/snap](#tag/Snap-Log)  [**Beacon 1.0 (deprecated)**](#tag/Beacon-1.0.0) [/beacon](#tag/Beacon-1.0.0)  # Payload Details ### Context Information Each beacon event must include a `context` object in the payload. It is important for reporting that certain properties have consistent values.  | property | description | type | required |  |---|---|:---:|:---:| | IP | This is the current shoppers IP address, accepts IPv4 and IPv6 formats. Recommended this is passed for accuracy. If not, will attempt to default to the \"x-forwarded-for\" or the Remote Address. | string |  | | userAgent | This is the current shoppers UserAgent. Recommended this is passed for accuracy. If not, will attempt to default to \"user-agent\" request header.  | string |  | | timestamp | RFC3339 formatted timestamp represents the time the event occurred. | string | ✔️ | | pageUrl | Current page window.location.href value. | string | ✔️ | | userId | This should be an unique identifier for each shopper, it is typically an auto-generted UUID that persists across page navigation and visits. This value must be consistent across all beacon events for reporting purposes. | string | ✔️ | | sessionId | This unique identifier is for the customer\'s current session, it is typically an auto-generted UUID and should expire after the store visit. | string | ✔️ | | pageLoadId | Unique identifier that represents a unique page load. Used to tie multiple events made on a single page together. | string | ✔️ | | shopperId | This unique identifier is for product personalization, it is typically a user id or email and should be consistently sent if the user is authenticated on the storefront. | string | | | initiator | Application identifier that initiated the event | string | ✔️ | | attribution | Provides attribution details on product landing pages - it is currently only used for email recommendations | object | | | attribution.type | This identifies the type of attribution. For email recommendations its value is \'email\' | string |  | | attribution.id | This unique identifier is for the attribution. It is typically the profile name. | string |  | | currency | Active currency type on the site | object | |  | currency.code | currency code in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html#:~:text=The%20first%20two%20letters%20of,and%20the%20D%20for%20dollar.) format  | string | |   ### Event Data Information Each beacon event must also include a `data` object in the payload. Every event has its own unique properties and values - see the specific events for those details.
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export const BASE_PATH = 'https://beacon.searchspring.io/beacon/v2'.replace(/\/+$/, '');

export interface ConfigurationParameters {
	basePath?: string; // override base path
	fetchApi?: FetchAPI; // override for fetch implementation
	middleware?: Middleware[]; // middleware to apply before/after fetch requests
	queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
	username?: string; // parameter for basic security
	password?: string; // parameter for basic security
	apiKey?: string | Promise<string> | ((name: string) => string | Promise<string>); // parameter for apiKey security
	accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
	headers?: HTTPHeaders; //header params we want to use on every request
	credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

export class Configuration {
	constructor(private configuration: ConfigurationParameters = {}) {}

	set config(configuration: Configuration) {
		this.configuration = configuration;
	}

	get basePath(): string {
		return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
	}

	get fetchApi(): FetchAPI | undefined {
		return this.configuration.fetchApi;
	}

	get middleware(): Middleware[] {
		return this.configuration.middleware || [];
	}

	get queryParamsStringify(): (params: HTTPQuery) => string {
		return this.configuration.queryParamsStringify || querystring;
	}

	get username(): string | undefined {
		return this.configuration.username;
	}

	get password(): string | undefined {
		return this.configuration.password;
	}

	get apiKey(): ((name: string) => string | Promise<string>) | undefined {
		const apiKey = this.configuration.apiKey;
		if (apiKey) {
			return typeof apiKey === 'function' ? apiKey : () => apiKey;
		}
		return undefined;
	}

	get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
		const accessToken = this.configuration.accessToken;
		if (accessToken) {
			return typeof accessToken === 'function' ? accessToken : async () => accessToken;
		}
		return undefined;
	}

	get headers(): HTTPHeaders | undefined {
		return this.configuration.headers;
	}

	get credentials(): RequestCredentials | undefined {
		return this.configuration.credentials;
	}
}

export const DefaultConfig = new Configuration();

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {
	private static readonly jsonRegex = new RegExp('^(:?application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$', 'i');
	private middleware: Middleware[];

	constructor(protected configuration = DefaultConfig) {
		this.middleware = configuration.middleware;
	}

	withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
		const next = this.clone<T>();
		next.middleware = next.middleware.concat(...middlewares);
		return next;
	}

	withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
		const middlewares = preMiddlewares.map((pre) => ({ pre }));
		return this.withMiddleware<T>(...middlewares);
	}

	withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
		const middlewares = postMiddlewares.map((post) => ({ post }));
		return this.withMiddleware<T>(...middlewares);
	}

	/**
	 * Check if the given MIME is a JSON MIME.
	 * JSON MIME examples:
	 *   application/json
	 *   application/json; charset=UTF8
	 *   APPLICATION/JSON
	 *   application/vnd.company+json
	 * @param mime - MIME (Multipurpose Internet Mail Extensions)
	 * @return True if the given MIME is JSON, false otherwise.
	 */
	protected isJsonMime(mime: string | null | undefined): boolean {
		if (!mime) {
			return false;
		}
		return BaseAPI.jsonRegex.test(mime);
	}

	protected async request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response> {
		const { url, init } = await this.createFetchParams(context, initOverrides);
		const response = await this.fetchApi(url, init);
		if (response && response.status >= 200 && response.status < 300) {
			return response;
		}
		throw new ResponseError(response, 'Response returned an error code');
	}

	private async createFetchParams(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction) {
		let url = this.configuration.basePath + context.path;
		if (context.query !== undefined && Object.keys(context.query).length !== 0) {
			// only add the querystring to the URL if there are query parameters.
			// this is done to avoid urls ending with a "?" character which buggy webservers
			// do not handle correctly sometimes.
			url += '?' + this.configuration.queryParamsStringify(context.query);
		}

		const headers = Object.assign({}, this.configuration.headers, context.headers);
		Object.keys(headers).forEach((key) => (headers[key] === undefined ? delete headers[key] : {}));

		const initOverrideFn = typeof initOverrides === 'function' ? initOverrides : async () => initOverrides;

		const initParams = {
			method: context.method,
			headers,
			body: context.body,
			credentials: this.configuration.credentials,
		};

		const overriddenInit: RequestInit = {
			...initParams,
			...(await initOverrideFn({
				init: initParams,
				context,
			})),
		};

		let body: any;
		if (isFormData(overriddenInit.body) || overriddenInit.body instanceof URLSearchParams || isBlob(overriddenInit.body)) {
			body = overriddenInit.body;
		} else if (this.isJsonMime(headers['Content-Type'])) {
			body = JSON.stringify(overriddenInit.body);
		} else {
			body = overriddenInit.body;
		}

		const init: RequestInit = {
			...overriddenInit,
			body,
		};

		return { url, init };
	}

	private fetchApi = async (url: string, init: RequestInit) => {
		let fetchParams = { url, init };
		for (const middleware of this.middleware) {
			if (middleware.pre) {
				fetchParams =
					(await middleware.pre({
						fetch: this.fetchApi,
						...fetchParams,
					})) || fetchParams;
			}
		}
		let response: Response | undefined = undefined;
		try {
			response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
		} catch (e) {
			for (const middleware of this.middleware) {
				if (middleware.onError) {
					response =
						(await middleware.onError({
							fetch: this.fetchApi,
							url: fetchParams.url,
							init: fetchParams.init,
							error: e,
							response: response ? response.clone() : undefined,
						})) || response;
				}
			}
			if (response === undefined) {
				if (e instanceof Error) {
					throw new FetchError(e, 'The request failed and the interceptors did not return an alternative response');
				} else {
					throw e;
				}
			}
		}
		for (const middleware of this.middleware) {
			if (middleware.post) {
				response =
					(await middleware.post({
						fetch: this.fetchApi,
						url: fetchParams.url,
						init: fetchParams.init,
						response: response.clone(),
					})) || response;
			}
		}
		return response;
	};

	/**
	 * Create a shallow clone of `this` by constructing a new instance
	 * and then shallow cloning data members.
	 */
	private clone<T extends BaseAPI>(this: T): T {
		const constructor = this.constructor as any;
		const next = new constructor(this.configuration);
		next.middleware = this.middleware.slice();
		return next;
	}
}

function isBlob(value: any): value is Blob {
	return typeof Blob !== 'undefined' && value instanceof Blob;
}

function isFormData(value: any): value is FormData {
	return typeof FormData !== 'undefined' && value instanceof FormData;
}

export class ResponseError extends Error {
	override name: 'ResponseError' = 'ResponseError';
	constructor(public response: Response, msg?: string) {
		super(msg);
	}
}

export class FetchError extends Error {
	override name: 'FetchError' = 'FetchError';
	constructor(public cause: Error, msg?: string) {
		super(msg);
	}
}

export class RequiredError extends Error {
	override name: 'RequiredError' = 'RequiredError';
	constructor(public field: string, msg?: string) {
		super(msg);
	}
}

export const COLLECTION_FORMATS = {
	csv: ',',
	ssv: ' ',
	tsv: '\t',
	pipes: '|',
};

export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = {
	[key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery;
};
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = { headers?: HTTPHeaders; method: HTTPMethod; credentials?: RequestCredentials; body?: HTTPBody };
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export type InitOverrideFunction = (requestContext: { init: HTTPRequestInit; context: RequestOpts }) => Promise<RequestInit>;

export interface FetchParams {
	url: string;
	init: RequestInit;
}

export interface RequestOpts {
	path: string;
	method: HTTPMethod;
	headers: HTTPHeaders;
	query?: HTTPQuery;
	body?: HTTPBody;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
	return Object.keys(params)
		.map((key) => querystringSingleKey(key, params[key], prefix))
		.filter((part) => part.length > 0)
		.join('&');
}

function querystringSingleKey(
	key: string,
	value: string | number | null | undefined | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery,
	keyPrefix: string = ''
): string {
	const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
	if (value instanceof Array) {
		const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
		return `${encodeURIComponent(fullKey)}=${multiValue}`;
	}
	if (value instanceof Set) {
		const valueAsArray = Array.from(value);
		return querystringSingleKey(key, valueAsArray, keyPrefix);
	}
	if (value instanceof Date) {
		return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
	}
	if (value instanceof Object) {
		return querystring(value as HTTPQuery, fullKey);
	}
	return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

export function mapValues(data: any, fn: (item: any) => any) {
	return Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: fn(data[key]) }), {});
}

export function canConsumeForm(consumes: Consume[]): boolean {
	for (const consume of consumes) {
		if ('multipart/form-data' === consume.contentType) {
			return true;
		}
	}
	return false;
}

export interface Consume {
	contentType: string;
}

export interface RequestContext {
	fetch: FetchAPI;
	url: string;
	init: RequestInit;
}

export interface ResponseContext {
	fetch: FetchAPI;
	url: string;
	init: RequestInit;
	response: Response;
}

export interface ErrorContext {
	fetch: FetchAPI;
	url: string;
	init: RequestInit;
	error: unknown;
	response?: Response;
}

export interface Middleware {
	pre?(context: RequestContext): Promise<FetchParams | void>;
	post?(context: ResponseContext): Promise<Response | void>;
	onError?(context: ErrorContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
	raw: Response;
	value(): Promise<T>;
}

export interface ResponseTransformer<T> {
	(json: any): T;
}

export class JSONApiResponse<T> {
	constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

	async value(): Promise<T> {
		return this.transformer(await this.raw.json());
	}
}

export class VoidApiResponse {
	constructor(public raw: Response) {}

	async value(): Promise<void> {
		return undefined;
	}
}

export class BlobApiResponse {
	constructor(public raw: Response) {}

	async value(): Promise<Blob> {
		return await this.raw.blob();
	}
}

export class TextApiResponse {
	constructor(public raw: Response) {}

	async value(): Promise<string> {
		return await this.raw.text();
	}
}
