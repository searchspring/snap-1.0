import { css } from '@emotion/react';
import type { ButtonProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Button component
const buttonStyleScript = ({ theme }: ButtonProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps> = {
	default: {
		props: {
			themeStyleScript: buttonStyleScript,
		},
	},
};
