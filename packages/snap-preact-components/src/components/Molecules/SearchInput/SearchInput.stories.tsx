import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/blocks';

import { SearchInput, SearchInputProps } from './SearchInput';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	component: SearchInput,
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
					height: '300px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		onChange: {
			description: 'Onchange Callback',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onChange',
		},
		hideIcon: {
			description: 'Hides icon',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		placeholder: {
			defaultValue: 'Search',
			description: 'Display placeholder text',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Search' },
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};
export const Default = (args: SearchInputProps) => <SearchInput {...args} />;
