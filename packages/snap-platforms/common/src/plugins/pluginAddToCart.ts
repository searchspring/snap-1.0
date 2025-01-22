import type { Product } from '@searchspring/snap-store-mobx';
import { AbstractController } from '@searchspring/snap-controller';
import type { Next } from '@searchspring/snap-event-manager';
import type { AbstractPluginConfig } from '../../../common/src/types';

export type PluginAddToCartConfig = AbstractPluginConfig & {
	function: (products: Product[], controller?: AbstractController) => void | Promise<void>;
};

export const pluginAddToCart = (cntrlr: AbstractController, config?: PluginAddToCartConfig) => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	const addToCartEvent = async ({ controller, products }: { controller: AbstractController; products: Product[] }, next: Next) => {
		await (config?.function && config.function(products, controller));
		await next();
	};

	cntrlr.on('addToCart', addToCartEvent);
};
