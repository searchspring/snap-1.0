import { css } from '@emotion/react';
import type { ButtonProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Button component
const buttonStyleScript = (props: ButtonProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const buttonColor = new Color(props?.backgroundColor || variables?.colors?.primary);
	const fontColor = buttonColor.isDark() || buttonColor.hex() == '#00AEEF' ? Color(custom.colors.white) : Color(custom.colors.black);

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
			padding: `0 ${custom.spacing.x4}px`,
			borderColor: buttonColor.hex(),
			color: fontColor.hex(),
			fontWeight: custom.fonts.weight01,
			textAlign: 'center',
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				backgroundColor: buttonColor.hex(),
			},
		},
		disabledStyles,
	]);

	// native styles
	const nativeStyles = css([
		{
			cursor: 'pointer',
			border: `1px solid ${custom.colors.gray02}`,
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				color: variables?.colors?.text,
				backgroundColor: custom.colors.white,
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
