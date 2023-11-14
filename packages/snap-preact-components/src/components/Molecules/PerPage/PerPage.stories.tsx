import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../PerPage/readme.md';
import type { SearchController } from '@searchspring/snap-controller';
import { PerPage, PerPageProps } from './PerPage';

export default {
	title: `Molecules/PerPage`,
	component: PerPage,
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
		pagination: {
			description: 'reference to the SearchPaginationStore',
			type: { required: true },
			table: {
				type: {
					summary: 'reference to the SearchSortingStore',
				},
			},
			control: { type: 'none' },
		},
		controller: {
			description: 'reference to the Search Controller',
			table: {
				type: {
					summary: 'reference to the Search Controller',
				},
			},
			control: { type: 'none' },
		},
		label: {
			description: 'Header label text to render.',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		type: {
			description: 'type of Select to render.',
			table: {
				type: {
					summary: '"dropdown" | "list" | "radio"',
				},
				defaultValue: { summary: 'dropdown' },
			},
			control: {
				type: 'select',
				options: ['dropdown', 'list', 'radio'],
			},
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Select', globals: { siteId: '8uyt2m' } });

export const Default = (args: PerPageProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <PerPage {...args} pagination={controller?.store?.pagination} />;
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
Default.args = {
	label: 'Per Page',
};

export const List = (args: PerPageProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <PerPage {...args} pagination={controller?.store?.pagination} />;
};

List.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
List.args = {
	label: 'Per Page',
	type: 'list',
};

export const Radio = (args: PerPageProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <PerPage {...args} pagination={controller?.store?.pagination} />;
};

Radio.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
Radio.args = {
	label: 'Per Page',
	type: 'radio',
};
