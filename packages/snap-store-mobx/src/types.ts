import type { UrlManager } from '@searchspring/snap-url-manager';
import type { SearchResponseModelFacetValueAllOfValues, AutocompleteRequestModel, SearchRequestModel } from '@searchspring/snapi-types';
// Abstract
export type StoreConfig = {
	id: string;
	[any: string]: unknown;
};

// Search Config
export type SearchStoreConfig = StoreConfig & {
	globals?: Partial<SearchRequestModel>;
	settings?: {
		redirects?: {
			merchandising?: boolean;
			singleResult?: boolean;
		};
		facets?: FacetStoreConfig & {
			fields?: {
				[field: string]: FacetStoreConfig;
			};
		};
		infinite?: {
			backfill?: number;
		};
		restorePosition?: {
			enabled: boolean;
			offset?: number;
		};
		history?: {
			url?: string;
			max?: number;
		};
	};
};

export type FacetStoreConfig = {
	trim?: boolean;
	pinFiltered?: boolean;
	storeRange?: boolean;
	autoOpenActive?: boolean;
};

// Finder Config
export type FinderStoreConfig = StoreConfig & {
	globals?: any;
	url?: string;
	fields: FinderFieldConfig[];
	persist?: {
		enabled: boolean;
		lockSelections?: boolean;
		expiration?: number;
	};
};

export type FinderFieldConfig = {
	field: string;
	label?: string;
	levels?: string[];
};

// Autocomplete config
export type AutocompleteStoreConfig = StoreConfig & {
	globals?: Partial<AutocompleteRequestModel>;
	selector: string;
	action?: string;
	settings?: {
		integratedSpellCorrection?: boolean;
		initializeFromUrl?: boolean;
		syncInputs?: boolean;
		serializeForm?: boolean;
		facets?: FacetStoreConfig & {
			fields?: {
				[field: string]: FacetStoreConfig;
			};
		};
		trending?: {
			limit: number;
			showResults?: boolean;
		};
		history?: {
			limit: number;
			showResults?: boolean;
		};
		redirects?: {
			merchandising?: boolean;
		};
	};
};

// Recommendation config
export type RecommendationStoreConfig = StoreConfig & {
	globals?: any;
	tag: string;
	branch?: string;
	realtime?: boolean;
	batched?: boolean;
	order?: number;
};

export type StoreConfigs = SearchStoreConfig | AutocompleteStoreConfig | FinderStoreConfig | RecommendationStoreConfig;

export type StoreServices = {
	urlManager: UrlManager;
};

export enum ErrorType {
	WARNING = 'warning',
	INFO = 'info',
	ERROR = 'error',
}

export type SelectedSelection = {
	selected: string;
	data: SearchResponseModelFacetValueAllOfValues[];
	facet: any;
};

export type FinderStoreState = {
	persisted: boolean;
};
