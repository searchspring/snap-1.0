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

import { mapValues } from '../runtime';
import type { ContextCurrency } from './ContextCurrency';
import { ContextCurrencyFromJSON, ContextCurrencyFromJSONTyped, ContextCurrencyToJSON, ContextCurrencyToJSONTyped } from './ContextCurrency';
import type { ContextAttributionInner } from './ContextAttributionInner';
import {
	ContextAttributionInnerFromJSON,
	ContextAttributionInnerFromJSONTyped,
	ContextAttributionInnerToJSON,
	ContextAttributionInnerToJSONTyped,
} from './ContextAttributionInner';

/**
 * Contextual data about the event
 * @export
 * @interface Context
 */
export interface Context {
	/**
	 * Shoppers IP address. Accepts IPv4 and IPv6 formats. Recommended this is passed for accuracy. If not, will attempt to default to the "x-forwarded-for" or the Remote Address.
	 * @type {string}
	 * @memberof Context
	 */
	iP?: string;
	/**
	 * Shoppers UserAgent. Recommended this is passed for accuracy. If not, will attempt to default to "user-agent" request header.
	 * @type {string}
	 * @memberof Context
	 */
	userAgent?: string;
	/**
	 * RFC3339 formatted timestamp represents time of event
	 * @type {string}
	 * @memberof Context
	 */
	timestamp: string;
	/**
	 * Current page `window.location.href` value
	 * @type {string}
	 * @memberof Context
	 */
	pageUrl: string;
	/**
	 * Unique identifier for the customer (usually a UUID)
	 * @type {string}
	 * @memberof Context
	 */
	userId: string;
	/**
	 * Unique identifier for the customer's current session - should expire after store visit (usually a UUID)
	 * @type {string}
	 * @memberof Context
	 */
	sessionId: string;
	/**
	 * Unique identifier that represents a unique page load. Used to tie multiple events made on a single page together.
	 * @type {string}
	 * @memberof Context
	 */
	pageLoadId: string;
	/**
	 * Unique identifier for the customer's product personalization - it is typically a user id or email and should be sent if the user is authenticated on the storefront. If the shopper has already logged in this is required.
	 * @type {string}
	 * @memberof Context
	 */
	shopperId?: string;
	/**
	 * Application identifier that initiated the event
	 * @type {string}
	 * @memberof Context
	 */
	initiator: string;
	/**
	 * Provides attribution details on product landing pages - it is currently only used for email recommendations
	 * @type {Array<ContextAttributionInner>}
	 * @memberof Context
	 */
	attribution?: Array<ContextAttributionInner>;
	/**
	 *
	 * @type {ContextCurrency}
	 * @memberof Context
	 */
	currency?: ContextCurrency;
}

/**
 * Check if a given object implements the Context interface.
 */
export function instanceOfContext(value: object): value is Context {
	if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
	if (!('pageUrl' in value) || value['pageUrl'] === undefined) return false;
	if (!('userId' in value) || value['userId'] === undefined) return false;
	if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
	if (!('pageLoadId' in value) || value['pageLoadId'] === undefined) return false;
	if (!('initiator' in value) || value['initiator'] === undefined) return false;
	return true;
}

export function ContextFromJSON(json: any): Context {
	return ContextFromJSONTyped(json, false);
}

export function ContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Context {
	if (json == null) {
		return json;
	}
	return {
		iP: json['IP'] == null ? undefined : json['IP'],
		userAgent: json['userAgent'] == null ? undefined : json['userAgent'],
		timestamp: json['timestamp'],
		pageUrl: json['pageUrl'],
		userId: json['userId'],
		sessionId: json['sessionId'],
		pageLoadId: json['pageLoadId'],
		shopperId: json['shopperId'] == null ? undefined : json['shopperId'],
		initiator: json['initiator'],
		attribution: json['attribution'] == null ? undefined : (json['attribution'] as Array<any>).map(ContextAttributionInnerFromJSON),
		currency: json['currency'] == null ? undefined : ContextCurrencyFromJSON(json['currency']),
	};
}

export function ContextToJSON(json: any): Context {
	return ContextToJSONTyped(json, false);
}

export function ContextToJSONTyped(value?: Context | null, ignoreDiscriminator: boolean = false): any {
	if (value == null) {
		return value;
	}

	return {
		IP: value['iP'],
		userAgent: value['userAgent'],
		timestamp: value['timestamp'],
		pageUrl: value['pageUrl'],
		userId: value['userId'],
		sessionId: value['sessionId'],
		pageLoadId: value['pageLoadId'],
		shopperId: value['shopperId'],
		initiator: value['initiator'],
		attribution: value['attribution'] == null ? undefined : (value['attribution'] as Array<any>).map(ContextAttributionInnerToJSON),
		currency: ContextCurrencyToJSON(value['currency']),
	};
}
