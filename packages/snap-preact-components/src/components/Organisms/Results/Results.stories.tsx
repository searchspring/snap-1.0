import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/blocks';

import { Results, ResultsProps } from './Results';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { ResultsLayout } from '../../../types';

import Readme from './readme.md';
import type { SearchController } from '@searchspring/snap-controller';

export default {
	component: Results,
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
	decorators: [
		(Story: any) => (
			<div
				style={{
					maxWidth: '900px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		results: {
			description: 'Results store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Results store object',
				},
			},
			control: { type: 'none' },
		},
		layout: {
			description: 'Results layout',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: {
				type: 'select',
				options: [ResultsLayout.GRID, ResultsLayout.LIST],
			},
		},
		columns: {
			defaultValue: 4,
			description: 'Number of columns in results grid',
			table: {
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 4 },
			},
			control: { type: 'number' },
		},
		rows: {
			description: 'Number of rows in results grid - adding this will put a hard limit on the results',
			table: {
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		gapSize: {
			defaultValue: '20px',
			description: 'Gap size between rows and columns',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '20px' },
			},
			control: { type: 'text' },
		},
		breakpoints: {
			defaultValue: {
				0: {
					columns: 1,
				},
				540: {
					columns: 2,
				},
				768: {
					columns: 3,
				},
				991: {
					columns: 4,
				},
			},
			description: 'Breakpoints options object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: {
				type: 'object',
			},
		},
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: { type: 'none' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Results', globals: { siteId: '8uyt2m' } });

export const Grid = (args: ResultsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <Results {...args} controller={controller} results={controller?.store?.results} />;
};

Grid.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

export const List = (args: ResultsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.LIST} />;
};

List.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
