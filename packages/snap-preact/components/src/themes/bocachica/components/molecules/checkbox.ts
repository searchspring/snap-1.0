import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import Color from 'color';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = ({ color, theme }: CheckboxProps) => {
	const variables = theme?.variables;
	const backgroundColorObj = new Color(color || variables?.colors.primary);
	const backgroundTextColorObj = backgroundColorObj.isDark() ? new Color('#fff') : new Color('#000');

	return css({
		border: `1px solid ${backgroundColorObj.hex()}`,
		borderRadius: '3px',
		'&.ss__checkbox--active': {
			backgroundColor: backgroundColorObj.hex(),
			'.ss__icon': {
				fill: backgroundTextColorObj.hex(),
				stroke: backgroundTextColorObj.hex(),
			},
		},
		'&.ss__checkbox--disabled': {
			opacity: 0.3,
		},
	});
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps> = {
	default: {
		checkbox: {
			themeStyleScript: checkboxStyleScript,
			size: '18px',
		},
	},
};
