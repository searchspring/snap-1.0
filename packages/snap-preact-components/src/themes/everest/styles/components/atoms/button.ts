import { css, ButtonProps } from '../../../../../index';
import { EverestVariables } from '../../../index';

// CSS in JS style script for the Button component
const buttonStyleScript = ({ color, backgroundColor, borderColor, theme }: ButtonProps) => {
	const variables = theme?.variables as EverestVariables;

	return css({
		display: 'inline-flex',
		padding: '5px 10px',
		position: 'relative',
		color: color || variables?.color?.primary,
		outline: 0,
		backgroundColor: backgroundColor || '#fff',
		border: `1px solid ${variables?.color?.primary || borderColor || color || theme?.colors?.primary || '#333'}`,
		borderRadius: '3px',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: variables?.color?.hover || '#f8f8f8',
		},
		'&.ss__button--disabled': {
			opacity: 0.7,
			borderColor: 'rgba(51,51,51,0.7)',
			backgroundColor: 'initial',
			'&:hover': {
				cursor: 'default',
			},
		},
	});
};

// Button component props
// https://searchspring.github.io/snap/packages/snap-preact-components/docs/?path=/docs/atoms-button--default
export const button: ButtonProps = {
	styleScript: buttonStyleScript,
};
