import { css } from '@emotion/react';
import type { ButtonProps } from '../../../../components/Atoms/Button';

// CSS in JS style script for the Button component
const buttonStyleScript = ({}: ButtonProps) => {
	return css({
		backgroundColor: '#fff',
		borderRadius: '2em',
		padding: '10px 15px',
		color: '#959595',
		border: `2px solid #e6e6e6`,

		'.ss__icon': {
			fill: '#5C5C5C',
			stroke: '#5C5C5C',
		},

		'&:not(.ss__button--disabled):hover': {
			opacity: 0.7,
			backgroundColor: '#fff',

			'.ss__icon': {
				fill: '#5C5C5C',
				stroke: '#5C5C5C',
			},
		},
	});
};

// Button component props
export const button: ThemeComponentProps<ButtonProps> = {
	default: {
		themeStyleScript: buttonStyleScript,
	},
	mobile: {},
	tablet: {},
	desktop: {},
};
