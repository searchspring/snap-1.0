import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(custom.colors.gray02).lighten(0.055);
	const borderColor = new Color(custom.colors.gray02);
	const activeIconColor = new Color(variables?.colors?.primary);
	const activeBorderColor = new Color(custom.colors.gray02).darken(0.055);

	// shared checkbox styles
	const sharedStyles = css({
		position: 'relative',
		top: '-1px',
	});
	const disabledStyles = css({
		'&.ss__checkbox--disabled': {
			opacity: 0.65,
			'&, & *': {
				cursor: 'not-allowed',
			},
		},
	});

	// default styles
	const defaultStyles = css([
		sharedStyles,
		{
			backgroundColor: backgroundColor.hex(),
			border: `1px solid ${props?.checked ? activeBorderColor.hex() : borderColor.hex()}`,
			'.ss__icon': {
				width: '8px',
				height: '8px',
				fill: props?.checked ? activeIconColor.hex() : '',
				stroke: props?.checked ? activeIconColor.hex() : '',
			},
		},
		disabledStyles,
	]);

	// native styles
	const nativeStyles = css([
		sharedStyles,
		{
			width: `${custom.sizes.icon}px`,
			height: `${custom.sizes.icon}px`,
			border: `1px solid ${custom.colors.gray02}`,
			cursor: 'pointer',
		},
		disabledStyles,
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps> = {
	default: {
		props: {
			themeStyleScript: checkboxStyleScript,
			icon: custom.icons.check,
			size: '14px',
		},
	},
};
