export function afterStore(controller: AbstractController) {
	controller.on('init', async ({ controller: AbstractController }, next) => {
		controller.log.debug('initialization...');
		await next();
	});
	controller.on('afterStore', async ({ controller: { store } }, next) => {
		mutateFacets(store.facets);

		await next();
	});

	// log the store
	controller.on('afterStore', async ({ controller }, next) => {
		controller.log.debug('store', controller.store.toJSON());
		await next();
	});

	controller.on('afterStore', scrollToTop);
}

function mutateFacets(facets: SearchFacetsStore) {
	for (let facet of facets) {
		let limit = 12;
		if (facet.display == 'palette' || facet.display == 'grid') {
			limit = 16;
		}

		facet.overflow?.setLimit(limit);
	}
}

export async function scrollToTop({ controller }: { controller: SearchController }, next: Next) {
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	await next();
}
