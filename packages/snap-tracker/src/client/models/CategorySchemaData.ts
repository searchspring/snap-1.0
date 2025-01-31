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
import type { CategorySchemaDataMerchandising } from './CategorySchemaDataMerchandising';
import {
	CategorySchemaDataMerchandisingFromJSON,
	CategorySchemaDataMerchandisingFromJSONTyped,
	CategorySchemaDataMerchandisingToJSON,
	CategorySchemaDataMerchandisingToJSONTyped,
} from './CategorySchemaDataMerchandising';
import type { AutocompleteSchemaDataSortInner } from './AutocompleteSchemaDataSortInner';
import {
	AutocompleteSchemaDataSortInnerFromJSON,
	AutocompleteSchemaDataSortInnerFromJSONTyped,
	AutocompleteSchemaDataSortInnerToJSON,
	AutocompleteSchemaDataSortInnerToJSONTyped,
} from './AutocompleteSchemaDataSortInner';
import type { SearchSchemaDataPagination } from './SearchSchemaDataPagination';
import {
	SearchSchemaDataPaginationFromJSON,
	SearchSchemaDataPaginationFromJSONTyped,
	SearchSchemaDataPaginationToJSON,
	SearchSchemaDataPaginationToJSONTyped,
} from './SearchSchemaDataPagination';
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
 * @interface CategorySchemaData
 */
export interface CategorySchemaData {
	/**
	 * Refined query passed as the `rq` query string parameter to the Search API. This should be omitted if search within search results is not implemented.
	 * @type {string}
	 * @memberof CategorySchemaData
	 */
	rq?: string;
	/**
	 * List of active background filters passed to the Search API
	 * @type {Array<AutocompleteSchemaDataBgfilterInner>}
	 * @memberof CategorySchemaData
	 */
	bgfilter?: Array<AutocompleteSchemaDataBgfilterInner>;
	/**
	 * List of active filters passed to the Search API
	 * @type {Array<AutocompleteSchemaDataFilterInner>}
	 * @memberof CategorySchemaData
	 */
	filter?: Array<AutocompleteSchemaDataFilterInner>;
	/**
	 * List of active sorts passed to the Autocomplete API
	 * @type {Array<AutocompleteSchemaDataSortInner>}
	 * @memberof CategorySchemaData
	 */
	sort?: Array<AutocompleteSchemaDataSortInner>;
	/**
	 *
	 * @type {SearchSchemaDataPagination}
	 * @memberof CategorySchemaData
	 */
	pagination: SearchSchemaDataPagination;
	/**
	 *
	 * @type {CategorySchemaDataMerchandising}
	 * @memberof CategorySchemaData
	 */
	merchandising?: CategorySchemaDataMerchandising;
	/**
	 * List of tracked Searchspring result(s). An empty array will indicate zero results were returned in the API response.
	 * @type {Array<Item>}
	 * @memberof CategorySchemaData
	 */
	results: Array<Item>;
}

/**
 * Check if a given object implements the CategorySchemaData interface.
 */
export function instanceOfCategorySchemaData(value: object): value is CategorySchemaData {
	if (!('pagination' in value) || value['pagination'] === undefined) return false;
	if (!('results' in value) || value['results'] === undefined) return false;
	return true;
}

export function CategorySchemaDataFromJSON(json: any): CategorySchemaData {
	return CategorySchemaDataFromJSONTyped(json, false);
}

export function CategorySchemaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategorySchemaData {
	if (json == null) {
		return json;
	}
	return {
		rq: json['rq'] == null ? undefined : json['rq'],
		bgfilter: json['bgfilter'] == null ? undefined : (json['bgfilter'] as Array<any>).map(AutocompleteSchemaDataBgfilterInnerFromJSON),
		filter: json['filter'] == null ? undefined : (json['filter'] as Array<any>).map(AutocompleteSchemaDataFilterInnerFromJSON),
		sort: json['sort'] == null ? undefined : (json['sort'] as Array<any>).map(AutocompleteSchemaDataSortInnerFromJSON),
		pagination: SearchSchemaDataPaginationFromJSON(json['pagination']),
		merchandising: json['merchandising'] == null ? undefined : CategorySchemaDataMerchandisingFromJSON(json['merchandising']),
		results: (json['results'] as Array<any>).map(ItemFromJSON),
	};
}

export function CategorySchemaDataToJSON(json: any): CategorySchemaData {
	return CategorySchemaDataToJSONTyped(json, false);
}

export function CategorySchemaDataToJSONTyped(value?: CategorySchemaData | null, ignoreDiscriminator: boolean = false): any {
	if (value == null) {
		return value;
	}

	return {
		rq: value['rq'],
		bgfilter: value['bgfilter'] == null ? undefined : (value['bgfilter'] as Array<any>).map(AutocompleteSchemaDataBgfilterInnerToJSON),
		filter: value['filter'] == null ? undefined : (value['filter'] as Array<any>).map(AutocompleteSchemaDataFilterInnerToJSON),
		sort: value['sort'] == null ? undefined : (value['sort'] as Array<any>).map(AutocompleteSchemaDataSortInnerToJSON),
		pagination: SearchSchemaDataPaginationToJSON(value['pagination']),
		merchandising: CategorySchemaDataMerchandisingToJSON(value['merchandising']),
		results: (value['results'] as Array<any>).map(ItemToJSON),
	};
}
