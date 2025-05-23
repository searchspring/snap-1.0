import type { ClientGlobals } from '@searchspring/snap-client';
import type { AbstractController } from '@searchspring/snap-controller';
import type { AbstractPluginConfig, PluginBackgroundFilter, PluginBackgroundFilterGlobal, PluginControl } from '../types';

export type PluginBackgroundFiltersConfig = AbstractPluginConfig & {
	filters?: (PluginBackgroundFilter & PluginControl)[];
};

export const pluginBackgroundFilters = (cntrlr: AbstractController, config?: PluginBackgroundFiltersConfig) => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	const backgroundFilters: PluginBackgroundFilterGlobal[] = [];

	let contextBackgroundFilters: PluginBackgroundFiltersConfig['filters'] = [];

	if (Array.isArray(cntrlr.context?.backgroundFilters)) {
		contextBackgroundFilters = contextBackgroundFilters.concat(cntrlr.context.backgroundFilters);
	} else if (cntrlr.context?.backgroundFilters) {
		cntrlr.log.warn('Context supplied backgroundFilters must be an array!');
	}

	const configBackgroundFilters = [...(config?.filters?.length ? config.filters : [])];

	const combinedBackgroundFilters: PluginBackgroundFiltersConfig['filters'] = contextBackgroundFilters.concat(configBackgroundFilters);
	combinedBackgroundFilters.forEach((filter) => {
		if (
			filter.field &&
			filter.value &&
			filter.type &&
			((filter.type === 'value' && (typeof filter.value === 'string' || typeof filter.value === 'number')) ||
				(filter.type === 'range' && typeof filter.value === 'object'))
		) {
			// filter by controller type
			if (Array.isArray(filter.controllerTypes) && !(filter.controllerTypes as string[]).includes(cntrlr.type)) {
				return;
			}

			// filter by controller id
			if (
				Array.isArray(filter.controllerIds) &&
				!filter.controllerIds.includes(cntrlr.id) &&
				!filter.controllerIds.some((id) => id instanceof RegExp && cntrlr.id.match(id))
			) {
				return;
			}

			backgroundFilters.push({
				type: filter.type,
				field: filter.field,
				value: filter.value,
				background: true,
			} as PluginBackgroundFilterGlobal);
		} else {
			cntrlr.log.error('Invalid filter in backgroundFilters: ', filter);
		}
	});

	cntrlr.on('init', async ({ controller }: { controller: AbstractController }, next) => {
		if (backgroundFilters.length) {
			controller.config = controller.config || {};
			controller.config.globals = controller.config.globals || {};
			(controller.config.globals as ClientGlobals).filters = (controller.config.globals as ClientGlobals).filters || [];
			(controller.config.globals as ClientGlobals).filters = (controller.config.globals as ClientGlobals).filters.concat(
				removeDuplicateFilters(backgroundFilters)
			);
		}

		await next();
	});
};

function removeDuplicateFilters(filters: PluginBackgroundFilter[]) {
	const seen = new Set();
	return filters.filter((filter) => {
		const filterValue = filter.type === 'range' ? `${filter.value?.low}:${filter.value?.high}` : filter.value;
		const key = `${filter.type}:${filter.field}:${filterValue}`;

		if (!seen.has(key)) {
			seen.add(key);
			return true;
		}
		return false;
	});
}
