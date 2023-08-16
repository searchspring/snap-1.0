import type * as SnapPreactTypes from '@searchspring/snap-preact';
import type * as ComponentTypes from '@searchspring/snap-preact-components';
import type * as ControllerTypes from '@searchspring/snap-controller';
import type * as StoreTypes from '@searchspring/snap-store-mobx';
import type * as EventManagerTypes from '@searchspring/snap-event-manager';

declare global {
	const BRANCHNAME: string;

	// snap types
	type Snap = SnapPreactTypes.Snap;
	type SnapConfig = SnapPreactTypes.SnapConfig;

	// controller types
	type AbstractController = ControllerTypes.AbstractController;
	type FinderController = ControllerTypes.FinderController;
	type RecommendationController = ControllerTypes.RecommendationController;
	type SearchController = ControllerTypes.SearchController;
	type AutocompleteController = ControllerTypes.AutocompleteController;

	// store types
	type AbstractStore = StoreTypes.AbstractStore;
	type AutocompleteStore = StoreTypes.AutocompleteStore;
	type FinderStore = StoreTypes.FinderStore;
	type RecommendationStore = StoreTypes.RecommendationStore;
	type SearchStore = StoreTypes.SearchStore;
	type Filter = StoreTypes.Filter;
	type SearchFacetsStore = StoreTypes.SearchFacetStore;
	type SearchResultsStore = StoreTypes.SearchResultStore;

	// layout types
	type LayoutElement = ComponentTypes.LayoutElement;
	type LayoutFunc<Controller = SearchController | AutocompleteController | RecommendationController> = ComponentTypes.ResultLayoutFunc<Controller>;
	type LayoutTypes<Controller = SearchController | AutocompleteController | RecommendationController> = ComponentTypes.ResultLayoutTypes<Controller>;

	// services types
	type Next = EventManagerTypes.Next;
	type Middleware<T> = EventManagerTypes.Middleware<T>;

	// window globals
	interface Window {
		mergeSnapConfig?: any;
	}

	type Result = StoreTypes.Product & {
		// attributes: {
		// }
		// custom: {
		// }
	};
}
