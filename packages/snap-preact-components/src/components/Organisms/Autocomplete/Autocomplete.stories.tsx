import { h, Fragment } from 'preact';
import { observer } from 'mobx-react';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { Autocomplete, AutocompleteProps } from './Autocomplete';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Autocomplete/readme.md';

export default {
	title: `Organisms/Autocomplete`,
	component: Autocomplete,
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
		(Story) => (
			<div
				style={{
					maxWidth: '900px',
					position: 'relative',
				}}
			>
				<input
					type="text"
					id="searchInput"
					placeholder="try me!"
					autoComplete="off"
					style={{
						width: '100%',
						padding: '10px',
						boxSizing: 'border-box',
						border: '1px solid #3a23ad',
					}}
				/>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Autocomplete controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Autocomplete controller object',
				},
			},
			control: { type: 'none' },
		},
		width: {
			defaultValue: '100%',
			description: 'Change width of the component',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '100%' },
			},
			control: { type: 'text' },
		},
		hideTerms: {
			defaultValue: false,
			description: 'prevent terms from rendering (also applicable to trending terms)',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideFacets: {
			defaultValue: false,
			description: 'prevent facets from rendering',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideContent: {
			defaultValue: false,
			description: 'prevent content area from rendering',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideBanners: {
			defaultValue: false,
			description: 'prevent merchandising banners from rendering (inline banners not affected)',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		horizontalTerms: {
			defaultValue: false,
			description: 'display terms horizontally, (not required if vertical prop is true)',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		vertical: {
			defaultValue: false,
			description: 'use a vertical (single column) layout',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		termsTitle: {
			defaultValue: '',
			description: 'Change terms header title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		trendingTitle: {
			defaultValue: 'Popular Searches',
			description: 'Change trending terms header title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Popular Searches' },
			},
			control: { type: 'text' },
		},
		facetsTitle: {
			defaultValue: '',
			description: 'Change facets header title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		contentTitle: {
			defaultValue: '',
			description: 'Change content header title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		viewportMaxHeight: {
			defaultValue: false,
			description: 'Autocomplete fully visible in viewport',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		termsSlot: {
			description: 'Slot for custom terms component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		facetsSlot: {
			description: 'Slot for custom facets component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		contentSlot: {
			description: 'Slot for custom content component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		breakpoints: {
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
		...componentArgs,
	},
};

const snapInstance = Snapify.autocomplete({
	id: 'Autocomplete',
	selector: '#searchInput',
	globals: {
		siteId: '8uyt2m',
	},
	settings: {
		trending: {
			limit: 5,
		},
	},
});

const Template = (args: AutocompleteProps, { loaded: { controller } }) => {
	// bind after input exists
	setTimeout(() => {
		controller.bind();
	});
	return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;
};

export const Default = Template.bind({});
Default.loaders = [
	async () => ({
		controller: await snapInstance,
	}),
];
Default.args = {
	breakpoints: {
		0: {
			columns: 1,
			rows: 1,
		},
		320: {
			columns: 2,
			rows: 1,
			hideFacets: true,
			vertical: true,
		},
		768: {
			columns: 3,
			rows: 1,
		},
	},
};
