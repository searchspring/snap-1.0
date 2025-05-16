import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = ({ theme }: CheckboxProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps> = {
	default: {
		props: {
			themeStyleScript: checkboxStyleScript,
			icon: customVariables.icons.check,
		},
	},
};
