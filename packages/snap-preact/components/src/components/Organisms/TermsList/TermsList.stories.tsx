import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { componentArgs, highlightedCode } from '../../../utilities';
import { TermsList, TermsListProps } from './TermsList';
import Readme from './readme.md';
import { AutocompleteController } from '@athoscommerce/snap-controller';
import { Snapify } from '../../../utilities/snapify';
import type { AutocompleteTermStore } from '@athoscommerce/snap-store-mobx';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import { useState } from 'preact/hooks';

export default {
	title: 'Organisms/TermsList',
	component: TermsList,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
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
						marginBottom: '20px',
					}}
				/>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'autocomplete controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'autocomplete controller object',
				},
			},
			control: { type: 'none' },
		},
		layout: {
			description: 'array of modules to render in specified order',
			table: {
				type: {
					summary: "['History' | 'Trending' | 'Suggestions' | '_']",
				},
				defaultValue: { summary: "[['Suggestions'], ['Trending'], ['History']]" },
			},
			control: 'array',
		},
		historyTitle: {
			description: 'history terms title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Recent Searches' },
			},
			control: { type: 'text' },
		},
		verticalOptions: {
			description: 'boolean to specify if the terms should be displayed vertically',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: undefined },
			},
			control: { type: 'boolean' },
		},
		suggestionTitle: {
			description: 'suggested terms title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Search Suggestions' },
			},
			control: { type: 'text' },
		},
		trendingTitle: {
			description: 'trending terms title',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Popular Searches' },
			},
			control: { type: 'text' },
		},
		retainHistory: {
			description: 'boolean to specify if the history terms should always be rendered',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		retainTrending: {
			description: 'boolean to specify if the trending terms should always be rendered',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.autocomplete({
	id: 'Autocomplete-TermsList',
	selector: '#searchInput',
	globals: {
		siteId: 'atkzs2',
	},
	settings: {
		trending: {
			limit: 5,
		},
	},
});

export const Default = (args: TermsListProps, { loaded: { controller } }: { loaded: { controller: AutocompleteController } }) => {
	const [termState, setTermState] = useState(false);

	const mockTerms: AutocompleteTermStore = [
		{
			active: termState === 'dress',
			preview: () => setTermState('dress'),
			value: 'dress',
			url: {
				href: 'www.dress.com',
			} as UrlManager,
		},
		{
			active: termState === 'drss',
			preview: () => setTermState('drss'),
			value: 'drss',
			url: {
				href: 'www.drss.com',
			} as UrlManager,
		},
		{
			active: termState === 'dreees',
			preview: () => setTermState('dreees'),
			value: 'dreees',
			url: {
				href: 'www.dreees.com',
			} as UrlManager,
		},
		{
			active: termState === 'dres',
			preview: () => setTermState('dres'),
			value: 'dres',
			url: {
				href: 'www.dres.com',
			} as UrlManager,
		},
		{
			active: termState === 'dss',
			preview: () => setTermState('dss'),
			value: 'dss',
			url: {
				href: 'www.dss.com',
			} as UrlManager,
		},
		{
			active: termState === 'ress',
			preview: () => setTermState('ress'),
			value: 'ress',
			url: {
				href: 'www.ress.com',
			} as UrlManager,
		},
	];

	setTimeout(() => {
		controller.bind();
	});

	controller.store.history = mockTerms;

	return <TermsList {...args} controller={controller} />;
};

Default.args = {
	retainHistory: true,
	retainTrending: true,
};

Default.loaders = [
	async () => ({
		controller: await snapInstance,
	}),
];
