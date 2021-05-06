import { h } from 'preact';

import { Overlay } from './Overlay';

import { componentArgs } from '../../../utilities';
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import Readme from '../Overlay/readme.md';

export default {
	title: `Atoms/Overlay`,
	component: Overlay,
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
		active: {
			defaultValue: false,
			description: 'Overlay is displayed',
			type: { required: true },
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		color: {
			defaultValue: 'rgba(0,0,0,0.8)',
			description: 'Overlay color',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'rgba(0,0,0,0.8)' },
			},
			control: { type: 'color' },
		},
		transitionSpeed: {
			defaultValue: '0.25s',
			description: 'Overlay opening/closing transition speed',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '0.25s' },
			},
			control: { type: 'text' },
		},
		onClick: {
			description: 'Overlay click event handler',
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

const Template = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
Default.args = {
	active: true,
};
