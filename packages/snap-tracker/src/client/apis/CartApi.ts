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

import * as runtime from '../runtime';
import type { CartSchema, CartviewSchema, Model400Response, Model404Response } from '../models/index';
import {
	CartSchemaFromJSON,
	CartSchemaToJSON,
	CartviewSchemaFromJSON,
	CartviewSchemaToJSON,
	Model400ResponseFromJSON,
	Model400ResponseToJSON,
	Model404ResponseFromJSON,
	Model404ResponseToJSON,
} from '../models/index';

export interface CartAddRequest {
	siteId: string;
	cartSchema: CartSchema;
}

export interface CartRemoveRequest {
	siteId: string;
	cartSchema: CartSchema;
}

export interface CartViewRequest {
	siteId: string;
	cartviewSchema: CartviewSchema;
}

/**
 *
 */
export class CartApi extends runtime.BaseAPI {
	/**
	 * Shopper adds additional item quantities to an item in the cart via the cart page or a slideout cart.
	 * /beacon/v2/{siteId}/cart/add
	 */
	async cartAddRaw(
		requestParameters: CartAddRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<object>> {
		if (requestParameters['siteId'] == null) {
			throw new runtime.RequiredError('siteId', 'Required parameter "siteId" was null or undefined when calling cartAdd().');
		}

		if (requestParameters['cartSchema'] == null) {
			throw new runtime.RequiredError('cartSchema', 'Required parameter "cartSchema" was null or undefined when calling cartAdd().');
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request(
			{
				path: `/{siteId}/cart/add`.replace(`{${'siteId'}}`, encodeURIComponent(String(requestParameters['siteId']))),
				method: 'POST',
				headers: headerParameters,
				query: queryParameters,
				body: CartSchemaToJSON(requestParameters['cartSchema']),
			},
			initOverrides
		);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 * Shopper adds additional item quantities to an item in the cart via the cart page or a slideout cart.
	 * /beacon/v2/{siteId}/cart/add
	 */
	async cartAdd(requestParameters: CartAddRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
		const response = await this.cartAddRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Shopper removes an item or reduces an items quantity in the cart via the cart page or a slideout cart.
	 * /beacon/v2/{siteId}/cart/remove
	 */
	async cartRemoveRaw(
		requestParameters: CartRemoveRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<object>> {
		if (requestParameters['siteId'] == null) {
			throw new runtime.RequiredError('siteId', 'Required parameter "siteId" was null or undefined when calling cartRemove().');
		}

		if (requestParameters['cartSchema'] == null) {
			throw new runtime.RequiredError('cartSchema', 'Required parameter "cartSchema" was null or undefined when calling cartRemove().');
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request(
			{
				path: `/{siteId}/cart/remove`.replace(`{${'siteId'}}`, encodeURIComponent(String(requestParameters['siteId']))),
				method: 'POST',
				headers: headerParameters,
				query: queryParameters,
				body: CartSchemaToJSON(requestParameters['cartSchema']),
			},
			initOverrides
		);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 * Shopper removes an item or reduces an items quantity in the cart via the cart page or a slideout cart.
	 * /beacon/v2/{siteId}/cart/remove
	 */
	async cartRemove(requestParameters: CartRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
		const response = await this.cartRemoveRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Shopper views the cart contents. **Usage of this endpoint MUST be omitted.**
	 * /beacon/v2/{siteId}/cart/view
	 * @deprecated
	 */
	async cartViewRaw(
		requestParameters: CartViewRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<object>> {
		if (requestParameters['siteId'] == null) {
			throw new runtime.RequiredError('siteId', 'Required parameter "siteId" was null or undefined when calling cartView().');
		}

		if (requestParameters['cartviewSchema'] == null) {
			throw new runtime.RequiredError('cartviewSchema', 'Required parameter "cartviewSchema" was null or undefined when calling cartView().');
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request(
			{
				path: `/{siteId}/cart/view`.replace(`{${'siteId'}}`, encodeURIComponent(String(requestParameters['siteId']))),
				method: 'POST',
				headers: headerParameters,
				query: queryParameters,
				body: CartviewSchemaToJSON(requestParameters['cartviewSchema']),
			},
			initOverrides
		);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 * Shopper views the cart contents. **Usage of this endpoint MUST be omitted.**
	 * /beacon/v2/{siteId}/cart/view
	 * @deprecated
	 */
	async cartView(requestParameters: CartViewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
		const response = await this.cartViewRaw(requestParameters, initOverrides);
		return await response.value();
	}
}
