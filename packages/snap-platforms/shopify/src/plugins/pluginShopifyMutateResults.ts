import type { Product, SearchStore, Banner } from '@athoscommerce/snap-store-mobx';
import type { AbstractController, SearchController } from '@athoscommerce/snap-controller';
import type { Next } from '@athoscommerce/snap-event-manager';
import { AbstractPluginConfig } from '../../../common/src/types';

declare global {
	interface Window {
		Shopify: any;
	}
}

export type PluginShopifyMutateResultsConfig = {
	mutations?: {
		collectionInUrl?: {
			enabled: boolean;
		};
	};
} & AbstractPluginConfig;

export const pluginShopifyMutateResults = (cntrlr: AbstractController, config?: PluginShopifyMutateResultsConfig) => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	// mutation collectionInUrl
	const collectionHandle = cntrlr.context.collection?.handle;
	if (config?.mutations?.collectionInUrl?.enabled === true && collectionHandle) {
		if (!window.Shopify) {
			cntrlr.log.warn('shopify/pluginMutateResults: window.Shopify not found!');
			return;
		}

		// only proceed if controller is search and page type is category
		if (cntrlr.type == 'search' && cntrlr.context.page?.type == 'category') {
			cntrlr.on('afterStore', async ({ controller }: { controller: SearchController }, next: Next) => {
				const { results } = controller.store as SearchStore;

				results.forEach((result: Product | Banner) => {
					const resultHandle = result.attributes.handle;
					if (result.type != 'banner' && resultHandle) {
						const routeShopify = window?.Shopify?.routes?.root || '/';
						const routeCollection = `collections/${collectionHandle}/`;
						result.mappings.core!.url = `${routeShopify}${routeCollection}products/${resultHandle}`;
					}
				});

				await next();
			});
		}
	}
};
