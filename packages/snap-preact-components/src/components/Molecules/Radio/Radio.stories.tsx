import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { Radio, RadioProps } from './Radio';
import { iconPaths } from '../../Atoms/Icon';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: `Molecules/Radio`,
	component: Radio,
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
		checked: {
			description: 'Checkbox is checked (externally managed state)',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disabled: {
			description: 'Checkbox is disabled',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		size: {
			defaultValue: '20px',
			description: 'Checkbox size',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '20px' },
			},
			control: { type: 'text' },
		},
		icon: {
			// defaultValue: 'bullet',
			description: 'Icon name',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'bullet' },
			},
			control: {
				type: 'select',
				options: [...Object.keys(iconPaths)],
			},
		},
		color: {
			description: 'Checkbox color',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'theme.colors.primary' },
			},
			control: { type: 'color' },
		},
		iconColor: {
			description: 'Checkbox icon color. Overwrites color.',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'theme.colors.primary' },
			},
			control: { type: 'color' },
		},
		startChecked: {
			description: 'Checkbox is checked initially (internally managed state)',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		native: {
			description: 'Render as unstyled native checkbox',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onClick: {
			description: 'Checkbox click event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onClick',
		},
		disableA11y: {
			description: 'boolean to disable autoset ally properties',
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

export const Default = (args: RadioProps) => <Radio {...args} />;

export const Disabled = (args: RadioProps) => <Radio {...args} />;
Disabled.args = {
	checked: true,
	disabled: true,
};

export const Native = (args: RadioProps) => <Radio {...args} />;
Native.args = {
	native: true,
};
