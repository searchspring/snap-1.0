import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(customVariables.colors.gray02).lighten(0.055);
	const activeBorderColor = new Color(customVariables.colors.gray02).darken(0.055);
	const borderColor = props?.checked ? activeBorderColor.hex() : customVariables.colors.gray02;

	return css(
		props?.native
			? {
					position: 'relative',
					top: '-1px',
					width: '16px',
					height: '16px',
					border: `1px solid ${customVariables.colors.gray02}`,
			  }
			: {
					position: 'relative',
					top: '-1px',
					backgroundColor: backgroundColor.hex(),
					borderColor: borderColor,
					'.ss__icon': {
						width: '8px',
						height: '8px',
					},
			  }
	);
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps> = {
	default: {
		props: {
			themeStyleScript: checkboxStyleScript,
			icon: customVariables.icons.check,
			size: '14px',
		},
	},
};
