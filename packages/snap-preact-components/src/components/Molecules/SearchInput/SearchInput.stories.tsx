import { Fragment, h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { SearchInput, SearchInputProps } from './SearchInput';
import { Icon, iconPaths } from '../../Atoms/Icon';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: `Molecules/SearchInput`,
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
		(Story) => (
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
			defaultValue: true,
			description: 'Onchange Callback',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onChange',
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

const Template = (args: SearchInputProps) => <SearchInput {...args} />;

export const Default = Template.bind({});
