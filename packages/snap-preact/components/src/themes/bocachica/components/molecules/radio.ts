import { css } from '@emotion/react';
import type { RadioProps } from '../../../../components/Molecules/Radio';

// CSS in JS style script for the Radio component
const radioStyleScript = ({ size, native, color, theme }: RadioProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	if (native) {
		return css({
			width: size,
			height: size,
			display: 'flex',
			justifyContent: 'center',

			'.ss__radio__input': {
				height: `calc(${size} - 30%)`,
				width: `calc(${size} - 30%)`,
				margin: 'auto',
			},
		});
	}

	return css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: size,
		width: size,
		cursor: 'pointer',

		'.ss__icon': {
			fill: color || variables?.colors.primary,
			stroke: color || variables?.colors.primary,
		},

		'&.ss__radio--disabled': {
			opacity: 0.3,
			cursor: 'default',
		},
	});
};

// Radio component props
export const radio: Partial<RadioProps> = {
	styleScript: radioStyleScript,
};
