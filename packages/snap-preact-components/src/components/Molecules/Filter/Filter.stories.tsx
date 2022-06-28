import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { Filter, FilterProps } from './Filter';
import { iconPaths } from '../../Atoms/Icon/paths';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { FacetType } from '../../../types';
import Readme from '../Filter/readme.md';

import type { SearchRequestModelFilterValue } from '@searchspring/snapi-types';
import type { SearchController } from '@searchspring/snap-controller';

export default {
	title: `Molecules/Filter`,
	component: Filter,
	parameters: {
		docs: {
			page: () => (
				<div>
					<Readme />
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
	},
	argTypes: {
		filter: {
			description: 'Filter store object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: { type: 'object' },
		},
		facetLabel: {
			description: 'Filter field',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		valueLabel: {
			description: 'Filter value',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		url: {
			description: 'URL manager object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: { type: 'object' },
		},
		hideFacetLabel: {
			description: 'Hide facet label',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		separator: {
			defaultValue: ':',
			description: 'Filter delimiter',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		icon: {
			defaultValue: 'close-thin',
			description: 'Icon name',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'close-thin' },
			},
			control: {
				type: 'select',
				options: [...Object.keys(iconPaths)],
			},
		},
		onClick: {
			description: 'Facet option click event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onClick',
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({
	id: 'Filter',
	globals: {
		siteId: '8uyt2m',
		filters: [
			{
				type: 'value',
				field: 'color_family',
				value: 'Blue',
			} as SearchRequestModelFilterValue,
		],
	},
});

export const Default = (args: FilterProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<Filter
		{...args}
		facetLabel={controller?.store?.facets.filter((facet) => facet.type === FacetType.VALUE).shift().label}
		valueLabel={
			controller?.store?.facets
				.filter((facet) => facet.type === FacetType.VALUE)
				.shift()
				.values.shift().value
		}
	/>
);

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

export const NoFacetLabel = (args: FilterProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<Filter
		{...args}
		facetLabel={controller?.store?.facets.filter((facet) => facet.type === FacetType.VALUE).shift().label}
		valueLabel={
			controller?.store?.facets
				.filter((facet) => facet.type === FacetType.VALUE)
				.shift()
				.values.shift().value
		}
	/>
);

NoFacetLabel.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
NoFacetLabel.args = {
	hideFacetLabel: true,
};
