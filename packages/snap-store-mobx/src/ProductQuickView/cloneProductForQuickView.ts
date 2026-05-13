import type { MetaResponseModel } from '@athoscommerce/snapi-types';
import { Product } from '../Search/Stores/SearchResultStore';

/** Build a fresh observable Product from an existing one. Variants are intentionally
 * omitted — they're populated from the products API response after the clone is set
 * on the quickview store. */
export function cloneProductForQuickView(product: Product, meta: MetaResponseModel | undefined): Product {
	const result: any = {
		id: product.id,
		responseId: product.responseId,
		mappings: JSON.parse(JSON.stringify(product.mappings || {})),
		attributes: JSON.parse(JSON.stringify(product.attributes || {})),
		badges: product.badges?.all?.map((b: any) => ({ tag: b.tag })) || [],
	};
	return new Product({
		config: {} as any,
		data: { result, meta: meta || ({} as MetaResponseModel) },
		position: product.position ?? 0,
		responseId: product.responseId,
	});
}
