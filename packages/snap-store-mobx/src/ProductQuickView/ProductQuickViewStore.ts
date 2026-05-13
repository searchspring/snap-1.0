import { makeObservable, observable } from 'mobx';
import type { MetaResponseModel } from '@athoscommerce/snapi-types';
import type { ProductsResponseModel } from '@athoscommerce/snap-client';
import { Product, Variants } from '../Search/Stores/SearchResultStore';
import { cloneProductForQuickView } from './cloneProductForQuickView';

/** Composable store holding the currently-displayed quickview product, plus the
 * fetch/error state used by a ProductQuickView UI. Any results-bearing store
 * (Recommendation, Search, Autocomplete, Chat) can hold one as a property. */
export class ProductQuickViewStore {
	public product: Product | null = null;
	public error: string | null = null;
	public loading: boolean = false;

	constructor() {
		makeObservable(this, {
			product: observable,
			error: observable,
			loading: observable,
		});
	}

	/** Clone the supplied product and stash it as the quickview target. The clone
	 * isolates variant selections and mapping merges from the originating result. */
	public set(product: Product, meta?: MetaResponseModel): void {
		this.product = cloneProductForQuickView(product, meta);
		this.error = null;
	}

	/** Merge the parent-level products API response into the cloned product —
	 * core mappings get merged in and Variants are created or updated in place. */
	public update(response: ProductsResponseModel, meta?: MetaResponseModel): void {
		if (!this.product) return;

		this.product.mappings = {
			...this.product.mappings,
			core: { ...this.product.mappings.core, ...response.mappings.core },
		};

		if (this.product.variants) {
			this.product.variants.optionConfig = response.variants.optionConfig;
			this.product.variants.update(response.variants.data as any);
		} else {
			this.product.variants = new Variants({
				data: {
					mask: this.product.mask,
					variants: response.variants.data as any,
					optionConfig: response.variants.optionConfig as any,
					meta: meta || ({} as MetaResponseModel),
				},
			});
		}
	}

	public setError(message: string): void {
		this.error = message;
	}

	public clear(): void {
		this.product = null;
		this.error = null;
		this.loading = false;
	}
}
