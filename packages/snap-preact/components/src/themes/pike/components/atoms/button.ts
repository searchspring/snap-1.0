import { css } from '@emotion/react';
import type { ButtonProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Button component
const buttonStyleScript = (props: ButtonProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const buttonColor = new Color(props?.backgroundColor || variables?.colors?.primary);
	const fontColor =
		buttonColor.isDark() || buttonColor.hex() == '#00AEEF' ? Color(customVariables.colors.white) : Color(customVariables.colors.black);

	// shared button styles
	const disabledStyles = css({
		'&.ss__button--disabled': {
			opacity: 0.65,
			'&, & *': {
				cursor: 'not-allowed',
			},
		},
	});

	// default styles
	const defaultStyles = css([
		{
			padding: `0 ${customVariables.spacing.x4}px`,
			borderColor: buttonColor.hex(),
			color: fontColor.hex(),
			fontWeight: customVariables.fonts.weight01,
			textAlign: 'center',
			height: `${customVariables.sizes.height}px`,
			lineHeight: `${customVariables.sizes.height}px`,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				backgroundColor: buttonColor.hex() || customVariables.colors.black,
			},
		},
		disabledStyles,
	]);

	// native styles
	const nativeStyles = css([
		{
			cursor: 'pointer',
			border: `1px solid ${customVariables.colors.gray02}`,
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				color: variables?.colors?.text,
				backgroundColor: customVariables.colors.white,
			},
		},
		disabledStyles,
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps> = {
	default: {
		props: {
			themeStyleScript: buttonStyleScript,
		},
	},
};
