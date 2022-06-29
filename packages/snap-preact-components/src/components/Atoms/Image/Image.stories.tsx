import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { Image, FALLBACK_IMAGE_URL, ImageProps } from './Image';
import { componentArgs } from '../../../utilities';
import { searchResponse } from '../../../mocks/searchResponse';
import Readme from '../Image/readme.md';

export default {
	title: `Atoms/Image`,
	component: Image,
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
					maxWidth: '300px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		src: {
			description: 'Image url',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		alt: {
			description: 'Image alt text',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		fallback: {
			description: 'Fallback image url',
			defaultValue: FALLBACK_IMAGE_URL,
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		lazy: {
			defaultValue: true,
			description: 'Image lazy loading',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		hoverSrc: {
			description: 'Image onHover url',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		onError: {
			description: 'Image error event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onError',
		},
		onLoad: {
			description: 'Image loaded event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onLoad',
		},
		onClick: {
			description: 'Image click event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onClick',
		},
		onMouseOver: {
			description: 'Image mouse enter event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onMouseOver',
		},
		onMouseOut: {
			description: 'Image mouse exit event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onMouseOut',
		},
		...componentArgs,
	},
};

export const Default = (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />;
Default.args = {
	src: searchResponse.results[6].mappings.core.imageUrl,
	alt: searchResponse.results[6].mappings.core.name,
};

export const BrokenImg = (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />;
BrokenImg.args = {
	src: 'intentionally_broken_image.jpg',
	alt: searchResponse.results[6].mappings.core.name,
};

export const ManualFallBack = (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />;
ManualFallBack.args = {
	src: 'intentionally_broken_image.jpg',
	alt: searchResponse.results[5].mappings.core.name,
	fallback: searchResponse.results[5].mappings.core.imageUrl,
};

export const onhover = (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />;
onhover.args = {
	src: searchResponse.results[6].mappings.core.imageUrl,
	alt: searchResponse.results[6].mappings.core.name,
	hoverSrc: searchResponse.results[7].mappings.core.imageUrl,
};
