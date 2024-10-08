import type { ClientGlobals } from '@searchspring/snap-client';
import type { AbstractController } from '@searchspring/snap-controller';
import type { Next } from '@searchspring/snap-event-manager';

export type GenericBackgroundFilterPluginConfig = {
	enabled: boolean;
	field: string;
	value: string;
	background?: boolean;
};
export type GenericBackgroundFiltersConfig = {
	tags?: GenericBackgroundFilterPluginConfig[];
	collection?: GenericBackgroundFilterPluginConfig[];
};

export const backgroundFilters = async (cntrlr: AbstractController, config?: GenericBackgroundFiltersConfig): Promise<void> => {
	const backgroundFilters: { field: string; value: string; type: string; background: boolean }[] = [];

	if (cntrlr.context?.category?.path) {
		const categoryPath = replaceCharacters(cntrlr.context.category.path);

		backgroundFilters.push({
			field: 'categories_hierarchy',
			value: categoryPath,
			type: 'value',
			background: true,
		});
	} else if (cntrlr.context?.brand) {
		const brandName = replaceCharacters(cntrlr.context.brand);

		backgroundFilters.push({
			field: 'brand',
			value: brandName,
			type: 'value',
			background: true,
		});
	}

	const configFilters = [...(config?.collection?.length ? config.collection : []), ...(config?.tags?.length ? config.tags : [])];

	configFilters.forEach((filter) => {
		if (filter.enabled && filter.field && filter.value) {
			backgroundFilters.push({
				field: filter.field,
				value: filter.value,
				type: 'value',
				background: filter.background ?? true,
			});
		}
	});

	cntrlr.on('init', async ({ controller }: { controller: AbstractController }, next: Next) => {
		if (backgroundFilters.length) {
			controller.config = controller.config || {};
			controller.config.globals = controller.config.globals || {};
			(controller.config.globals as ClientGlobals).filters = (controller.config.globals as ClientGlobals).filters || [];
			(controller.config.globals as ClientGlobals).filters = (controller.config.globals as ClientGlobals).filters.concat(backgroundFilters);
		}

		await next();
	});
};

function replaceCharacters(value: string): string {
	if (value) {
		return value
			.replace(/\&amp\;/g, '&')
			.replace(/\&lt\;/g, '<')
			.replace(/\&gt\;/g, '>')
			.replace(/\&quot\;/g, '"')
			.replace(/\&#039\;/g, "'")
			.replace(/\&#x27\;/g, "'")
			.trim();
	} else {
		return '';
	}
}