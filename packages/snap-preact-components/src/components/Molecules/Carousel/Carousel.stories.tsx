import { Fragment, h } from 'preact';

import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';

import { Carousel } from './Carousel';
import { Icon, iconPaths } from '../../Atoms/Icon';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { Result } from '../Result';
import Readme from './readme.md';

export default {
	title: `Molecules/Carousel`,
	component: Carousel,
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
		loop: {
			defaultValue: true,
			description: 'Carousel slides loop',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		pagination: {
			defaultValue: false,
			description: 'Display pagination dots',
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
			description: 'Carousel vertical slide direction',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideButtons: {
			defaultValue: false,
			description: 'Hide prev/next buttons',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		prevButton: {
			description: 'Previous button',
			table: {
				type: {
					summary: 'string | JSX Element',
				},
			},
			control: { type: 'text' },
		},
		nextButton: {
			description: 'Next button',
			table: {
				type: {
					summary: 'string | JSX Element',
				},
			},
			control: { type: 'text' },
		},
		breakpoints: {
			defaultValue: undefined,
			description: 'Carousel breakpoints',
			table: {
				type: {
					summary: 'object',
				},
				defaultValue: { summary: 'Breakpoint object' },
			},
			control: { type: 'object' },
		},
		onNextButtonClick: {
			description: 'Carousel next button click event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onNextButtonClick',
		},
		onPrevButtonClick: {
			description: 'Carousel prev button click event handler',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onPrevButtonClick',
		},
		onClick: {
			description: 'Carousel onClick event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onClick',
		},
		onInit: {
			description: 'Carousel onInit event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
			},
			action: 'onInit',
		},
		...componentArgs,
	},
};

const colors = Array.from(Array(9).keys());
export const Colors = (props) => {
	return (
		<Carousel {...props}>
			{colors.map((number, index) => (
				<div style={{ height: '100px', width: '100px', background: shiftColor('#3a23ad', (index + `111`).padStart(6, '0')), margin: '0 auto' }}></div>
			))}
		</Carousel>
	);
};
Colors.args = {
	pagination: true,
	hideButtons: true,
	loop: false,
};

export const Icons = (props) => {
	return (
		<Carousel {...props}>
			{Object.keys(iconPaths).map((icon, index) => {
				return (
					<div style={{ margin: '0 auto', textAlign: 'center' }}>
						<Icon icon={icon} color={shiftColor('#3a23ad', (index + '111').padStart(6, '1'))} size="80px" style={{ padding: '20px' }} />
						<div style="text-align: center">{icon}</div>
					</div>
				);
			})}
		</Carousel>
	);
};

function shiftColor(base, change) {
	const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;

	if (!base || !change) {
		return '#000000';
	}

	if (!base.match(colorRegEx) || !change.match(colorRegEx)) {
		return '#000000';
	}

	// remove '#'s
	base = base.replace(/\#/g, '');
	change = change.replace(/\#/g, '');

	let newColor = '';
	for (let i = 0; i < 3; i++) {
		const basePiece = parseInt(base.substring(i * 2, i * 2 + 2), 16);
		const changePiece = parseInt(change.substring(i * 2, i * 2 + 2), 16);
		let newPiece: string | number;

		newPiece = basePiece + changePiece;
		newPiece = newPiece > 255 ? 255 : newPiece;

		newPiece = newPiece.toString(16);
		newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece;
		newColor += newPiece;
	}

	return `#${newColor}`;
}
