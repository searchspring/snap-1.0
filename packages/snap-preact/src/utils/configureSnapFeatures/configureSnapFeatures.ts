import type { TrackerEvents } from '@athoscommerce/snap-tracker';
import type { SnapConfig } from '../../Snap';

export const SHOPIFY_WEBPIXEL_STORAGE_KEY = 'ssWebPixel';

export function configureSnapFeatures(config: SnapConfig) {
	/* configure snap features by mutating the config as needed */

	configureTracking(config);
}

function configureTracking(config: SnapConfig) {
	// Athos' Shopify Web Pixel App compatibility
	let webPixel;
	try {
		webPixel = window.sessionStorage?.getItem(SHOPIFY_WEBPIXEL_STORAGE_KEY);
	} catch {
		// storage not enabled
	}

	if (webPixel) {
		try {
			const webPixelData = JSON.parse(webPixel);

			// when enabled, add certain events to doNotTrack list
			if (webPixelData?.enabled) {
				const doNotTrack: TrackerEvents[] = ['product.view', 'cart.view', 'order.transaction'];

				config.tracker = config.tracker || {};
				config.tracker.config = config.tracker.config || {};
				config.tracker.config.doNotTrack = (config.tracker.config.doNotTrack || []).concat(doNotTrack);
			}
		} catch {
			// storage not enabled
		}
	}
}
