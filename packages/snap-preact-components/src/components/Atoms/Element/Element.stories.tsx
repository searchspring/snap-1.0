import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { Element, ElementProps } from './Element';
import { componentArgs } from '../../../utilities';
import Readme from '../Dropdown/readme.md';

export default {
	title: `Atoms/Element`,
	component: Element,
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
		type: {
			description: 'Determines the type of element to render. ',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
			},
			control: {
				type: 'select',
				options: ['div', 'span', 'p', 'label'],
			},
		},
		content: {
			description: 'Content to be displayed in Element',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		attributes: {
			description: 'Attributes to be added to the element. (onClick not allowed)',
			defaultValue: {},
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

export const Default = (args: ElementProps) => <Element {...args} />;
Default.args = {
	type: 'div',
	content: 'content text',
};

export const Span = (args: ElementProps) => <Element {...args} />;
Span.args = {
	type: 'span',
	content: "I'm a span",
};

export const Attributes = (args: ElementProps) => <Element {...args} />;
Attributes.args = {
	type: 'label',
	content: "I'm a label with attributes",
	attributes: {
		attribute1: 'hi',
		attribute2: 'mom',
	},
};
