import deepmerge from 'deepmerge';

import { CacheConfig, Cache } from '../../types';

const CACHE_STORAGE_KEY = 'ss-networkcache';

const defaultConfig: CacheConfig = {
	enabled: true,
	ttl: 300000, // ms
	maxSize: 200, // KB
	purgeable: true,
};

export class NetworkCache {
	private memoryCache: Cache = {};
	config: CacheConfig;

	constructor(config?: CacheConfig) {
		this.config = deepmerge(defaultConfig, config || {});
	}

	public get(key: string): Response {
		try {
			if (this.memoryCache[key]) {
				if (Date.now() < this.memoryCache[key].expires) {
					return this.memoryCache[key].value;
				}
			}

			const stored = sessionStorage.getItem(CACHE_STORAGE_KEY);
			const localData: Cache = stored && JSON.parse(stored);

			if (localData && key && localData[key]) {
				// compare the expiry time of the item with the current time
				if (Date.now() > localData[key].expires) {
					// remove item
					const newStored = {
						...localData,
					};
					delete newStored[key];
					//update storage
					sessionStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(newStored));

					return undefined;
				} else {
					return localData[key].value;
				}
			}
		} catch (err) {
			console.warn('something went wrong, browser might not have cookies enabled');
		}
	}

	public set(key: string, value: Response): void {
		if (this.config.enabled) {
			try {
				const cacheObject = {
					value,
					expires: Date.now() + this.config.ttl,
					purgeable: this.config.purgeable,
				};

				this.memoryCache[key] = cacheObject;

				const stored: any = sessionStorage.getItem(CACHE_STORAGE_KEY);
				const newStored: Cache = {
					...(stored && JSON.parse(stored)),
				};
				newStored[key] = cacheObject;

				let size = new Blob([JSON.stringify(newStored)], { endings: 'native' }).size / 1024;
				while (size > this.config.maxSize) {
					const oldestKey = Object.keys(newStored)
						.filter((key) => newStored[key].purgeable)
						.sort((a, b) => {
							return newStored[a].expires - newStored[b].expires;
						})[0];

					if (!oldestKey) break;
					delete newStored[oldestKey];

					// recalculate size after removing oldest
					size = new Blob([JSON.stringify(newStored)], { endings: 'native' }).size / 1024;
				}

				if (size < this.config.maxSize) {
					sessionStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(newStored));
				}
			} catch (err) {
				console.warn('something went wrong, browser might not have cookies enabled');
			}
		}
	}

	public clear() {
		try {
			this.memoryCache = {};
			sessionStorage.setItem(CACHE_STORAGE_KEY, '');
		} catch (err) {
			console.warn('something went wrong, browser might not have cookies enabled');
		}
	}
}