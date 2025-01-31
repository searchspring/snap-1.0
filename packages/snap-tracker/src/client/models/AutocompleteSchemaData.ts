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
import type { Item } from './Item';
import { ItemFromJSON, ItemFromJSONTyped, ItemToJSON, ItemToJSONTyped } from './Item';
import type { AutocompleteSchemaDataFilterInner } from './AutocompleteSchemaDataFilterInner';
import {
	AutocompleteSchemaDataFilterInnerFromJSON,
	AutocompleteSchemaDataFilterInnerFromJSONTyped,
	AutocompleteSchemaDataFilterInnerToJSON,
	AutocompleteSchemaDataFilterInnerToJSONTyped,
} from './AutocompleteSchemaDataFilterInner';
import type { AutocompleteSchemaDataPagination } from './AutocompleteSchemaDataPagination';
import {
	AutocompleteSchemaDataPaginationFromJSON,
	AutocompleteSchemaDataPaginationFromJSONTyped,
	AutocompleteSchemaDataPaginationToJSON,
	AutocompleteSchemaDataPaginationToJSONTyped,
} from './AutocompleteSchemaDataPagination';
import type { AutocompleteSchemaDataMerchandising } from './AutocompleteSchemaDataMerchandising';
import {
	AutocompleteSchemaDataMerchandisingFromJSON,
	AutocompleteSchemaDataMerchandisingFromJSONTyped,
	AutocompleteSchemaDataMerchandisingToJSON,
	AutocompleteSchemaDataMerchandisingToJSONTyped,
} from './AutocompleteSchemaDataMerchandising';
import type { AutocompleteSchemaDataSortInner } from './AutocompleteSchemaDataSortInner';
import {
	AutocompleteSchemaDataSortInnerFromJSON,
	AutocompleteSchemaDataSortInnerFromJSONTyped,
	AutocompleteSchemaDataSortInnerToJSON,
	AutocompleteSchemaDataSortInnerToJSONTyped,
} from './AutocompleteSchemaDataSortInner';
import type { AutocompleteSchemaDataBgfilterInner } from './AutocompleteSchemaDataBgfilterInner';
import {
	AutocompleteSchemaDataBgfilterInnerFromJSON,
	AutocompleteSchemaDataBgfilterInnerFromJSONTyped,
	AutocompleteSchemaDataBgfilterInnerToJSON,
	AutocompleteSchemaDataBgfilterInnerToJSONTyped,
} from './AutocompleteSchemaDataBgfilterInner';

/**
 * Event details
 * @export
 * @interface AutocompleteSchemaData
 */
export interface AutocompleteSchemaData {
	/**
	 * Search query passed as the `q` query string parameter to the Autocomplete API
	 * @type {string}
	 * @memberof AutocompleteSchemaData
	 */
	q: string;
	/**
	 * If spell correction occurs, value will be `query.correctedQuery` from the Autocomplete API
	 * @type {string}
	 * @memberof AutocompleteSchemaData
	 */
	correctedQuery?: string;
	/**
	 * Refined query passed as the `rq` query string parameter to the Autocomplete API. This should be omitted if search within search results is not implemented.
	 * @type {string}
	 * @memberof AutocompleteSchemaData
	 */
	rq?: string;
	/**
	 * Indicates the type of search matching that was required for this search, returned as `query.matchType` from Autocomplete API
	 * @type {string}
	 * @memberof AutocompleteSchemaData
	 */
	matchType?: string;
	/**
	 * List of active background filters passed to the Autocomplete API
	 * @type {Array<AutocompleteSchemaDataBgfilterInner>}
	 * @memberof AutocompleteSchemaData
	 */
	bgfilter?: Array<AutocompleteSchemaDataBgfilterInner>;
	/**
	 * List of active filters passed to the Autocomplete API
	 * @type {Array<AutocompleteSchemaDataFilterInner>}
	 * @memberof AutocompleteSchemaData
	 */
	filter?: Array<AutocompleteSchemaDataFilterInner>;
	/**
	 * List of active sorts passed to the Autocomplete API
	 * @type {Array<AutocompleteSchemaDataSortInner>}
	 * @memberof AutocompleteSchemaData
	 */
	sort?: Array<AutocompleteSchemaDataSortInner>;
	/**
	 *
	 * @type {AutocompleteSchemaDataPagination}
	 * @memberof AutocompleteSchemaData
	 */
	pagination: AutocompleteSchemaDataPagination;
	/**
	 *
	 * @type {AutocompleteSchemaDataMerchandising}
	 * @memberof AutocompleteSchemaData
	 */
	merchandising?: AutocompleteSchemaDataMerchandising;
	/**
	 * List of tracked Searchspring result(s). An empty array will indicate zero results were returned in the API response.
	 * @type {Array<Item>}
	 * @memberof AutocompleteSchemaData
	 */
	results: Array<Item>;
}

/**
 * Check if a given object implements the AutocompleteSchemaData interface.
 */
export function instanceOfAutocompleteSchemaData(value: object): value is AutocompleteSchemaData {
	if (!('q' in value) || value['q'] === undefined) return false;
	if (!('pagination' in value) || value['pagination'] === undefined) return false;
	if (!('results' in value) || value['results'] === undefined) return false;
	return true;
}

export function AutocompleteSchemaDataFromJSON(json: any): AutocompleteSchemaData {
	return AutocompleteSchemaDataFromJSONTyped(json, false);
}

export function AutocompleteSchemaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteSchemaData {
	if (json == null) {
		return json;
	}
	return {
		q: json['q'],
		correctedQuery: json['correctedQuery'] == null ? undefined : json['correctedQuery'],
		rq: json['rq'] == null ? undefined : json['rq'],
		matchType: json['matchType'] == null ? undefined : json['matchType'],
		bgfilter: json['bgfilter'] == null ? undefined : (json['bgfilter'] as Array<any>).map(AutocompleteSchemaDataBgfilterInnerFromJSON),
		filter: json['filter'] == null ? undefined : (json['filter'] as Array<any>).map(AutocompleteSchemaDataFilterInnerFromJSON),
		sort: json['sort'] == null ? undefined : (json['sort'] as Array<any>).map(AutocompleteSchemaDataSortInnerFromJSON),
		pagination: AutocompleteSchemaDataPaginationFromJSON(json['pagination']),
		merchandising: json['merchandising'] == null ? undefined : AutocompleteSchemaDataMerchandisingFromJSON(json['merchandising']),
		results: (json['results'] as Array<any>).map(ItemFromJSON),
	};
}

export function AutocompleteSchemaDataToJSON(json: any): AutocompleteSchemaData {
	return AutocompleteSchemaDataToJSONTyped(json, false);
}

export function AutocompleteSchemaDataToJSONTyped(value?: AutocompleteSchemaData | null, ignoreDiscriminator: boolean = false): any {
	if (value == null) {
		return value;
	}

	return {
		q: value['q'],
		correctedQuery: value['correctedQuery'],
		rq: value['rq'],
		matchType: value['matchType'],
		bgfilter: value['bgfilter'] == null ? undefined : (value['bgfilter'] as Array<any>).map(AutocompleteSchemaDataBgfilterInnerToJSON),
		filter: value['filter'] == null ? undefined : (value['filter'] as Array<any>).map(AutocompleteSchemaDataFilterInnerToJSON),
		sort: value['sort'] == null ? undefined : (value['sort'] as Array<any>).map(AutocompleteSchemaDataSortInnerToJSON),
		pagination: AutocompleteSchemaDataPaginationToJSON(value['pagination']),
		merchandising: AutocompleteSchemaDataMerchandisingToJSON(value['merchandising']),
		results: (value['results'] as Array<any>).map(ItemToJSON),
	};
}
