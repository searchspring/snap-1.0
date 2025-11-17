import { css } from '@emotion/react';
import type { ButtonProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Button component
const buttonStyleScript = (props: ButtonProps) => {
	const variables = props?.theme?.variables;
	const buttonDisabledSelectors = '&.ss__button--disabled';
	const buttonSelector = `&, &:hover, &:not(.ss__button--disabled):hover, ${buttonDisabledSelectors}`;
	const buttonColor = new Color(props?.backgroundColor || variables?.colors?.primary || undefined);
	const fontColor = buttonColor.isDark() || buttonColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	// shared button styles
	const disabledStyles = css({
		[buttonDisabledSelectors]: {
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
			color: fontColor.hex(),
			fontWeight: custom.fonts.weight01,
			textAlign: 'center',
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			[buttonSelector]: {
				border: `1px solid ${buttonColor.hex()}`,
				backgroundColor: buttonColor.hex(),
			},
			'.ss__icon--filters': {
				circle: {
					fill: buttonColor.hex(),
				},
			},
		},
		disabledStyles,
	]);

	// native styles
	const nativeStyles = css([
		{
			cursor: 'pointer',
			padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
			[buttonSelector]: {
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.white,
				fontSize: custom.utils.convertPxToEm(14),
				color: variables?.colors?.text,
			},
		},
		disabledStyles,
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps> = {
	default: {
		button: {
			themeStyleScript: buttonStyleScript,
		},
	},
};
