import type { AbstractController } from './Abstract/AbstractController';
import type { EventManager, Middleware, Next } from '@searchspring/snap-event-manager';

import type { Client } from '@searchspring/snap-client';
import type {
	AbstractStore,
	StoreConfig,
	SearchStoreConfig,
	FinderStoreConfig,
	AutocompleteStoreConfig,
	RecommendationStoreConfig,
} from '@searchspring/snap-store-mobx';
import type { Tracker } from '@searchspring/snap-tracker';
import type { Profiler } from '@searchspring/snap-profiler';
import type { UrlManager } from '@searchspring/snap-url-manager';
import type { Logger } from '@searchspring/snap-logger';

// Global
declare global {
	interface Window {
		searchspring?: any;
	}
}

// Middleware

export type NextEvent = Next;

export type PluginFunction = (cntrlr: AbstractController, ...args) => Promise<void>;
export type PluginGrouping = [func: PluginFunction, ...args: unknown[]];

export type BeforeSearchObj = {
	controller: AbstractController;
	request: any;
};

export type AfterSearchObj = {
	controller: AbstractController;
	response: any;
};

export type AfterStoreObj = {
	controller: AbstractController;
	request: any;
	response: any;
};

export type ControllerServices = {
	client: Client;
	store: AbstractStore;
	urlManager: UrlManager;
	eventManager: EventManager;
	profiler: Profiler;
	logger: Logger;
	tracker: Tracker;
};

export type Attachments = {
	middleware?: {
		[eventName: string]: Middleware<unknown> | Middleware<unknown>[];
	};
	plugins?: PluginGrouping[];
	[any: string]: unknown;
};

export interface ControllerConfig extends StoreConfig {
	middleware?: {
		[eventName: string]: Middleware<unknown> | Middleware<unknown>[];
	};
}

// Search Config
export type SearchControllerConfig = ControllerConfig & Attachments & SearchStoreConfig;
// Finder Config
export type FinderControllerConfig = ControllerConfig & Attachments & FinderStoreConfig;
// Autocomplete config
export type AutocompleteControllerConfig = ControllerConfig & Attachments & AutocompleteStoreConfig;
// Recommendation config
export type RecommendationControllerConfig = ControllerConfig & Attachments & RecommendationStoreConfig;

export type ControllerConfigs = SearchControllerConfig | AutocompleteControllerConfig | FinderControllerConfig | RecommendationControllerConfig;
