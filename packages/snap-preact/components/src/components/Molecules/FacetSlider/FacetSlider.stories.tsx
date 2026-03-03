import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { FacetSlider, FacetSliderProps } from './FacetSlider';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../FacetSlider/readme.md';
import type { RangeFacet } from '@athoscommerce/snap-store-mobx';

// unfortunatley we have to hardcode the searchresponse data here rather than use the Snap-Shared
// mockdata due to issues with storybook being unable to bundle MockData due to it using fs
const sliderFacetMock = {
	field: 'price',
	label: 'Price',
	type: 'range',
	display: 'slider',
	filtered: false,
	collapsed: false,
	range: {
		low: 0,
		high: 120,
	},
	active: {
		low: 0,
		high: 120,
	},
	step: 1,
	formatValue: '$%01.2f',
};

export default {
	title: 'Molecules/FacetSlider',
	component: FacetSlider,
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
			<div style={{ maxWidth: '300px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		facet: {
			description: 'Facet store reference',
			type: { required: true },
			table: {
				type: {
					summary: 'facet store object',
				},
			},
			control: { type: 'none' },
		},
		showTicks: {
			description: 'enables/disables ticks',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		tickSize: {
			defaultValue: 20,
			description: 'distance between ticks',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 20 },
			},
			control: { type: 'number' },
		},
		tickTextColor: {
			description: 'ticks color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		trackColor: {
			description: 'Slider track color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		railColor: {
			description: 'Slider rail Color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		valueTextColor: {
			description: 'Slider value Text Color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		handleColor: {
			description: 'Slider handle color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		stickyHandleLabel: {
			description: 'enables/disables sticky handle labels',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		separateHandles: {
			description: 'separates slider handles by one step value to prevent min and max from being equal',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		handleDraggingColor: {
			description: 'Slider handle color when dragging',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		onDrag: {
			description: 'Slider onDrag event handler - fires as the slider is dragged (should not be used to trigger searches)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: { type: 'none' },
			action: 'onDrag',
		},
		onChange: {
			description:
				'Slider onChange event handler - fires after touchEnd and before URL manager updates (used to trigger search and allows for value mutation)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: { type: 'none' },
			action: 'onChange',
		},
		...componentArgs,
	},
};

export const Price = (args: FacetSliderProps) => <FacetSlider {...args} facet={sliderFacetMock as RangeFacet} />;
