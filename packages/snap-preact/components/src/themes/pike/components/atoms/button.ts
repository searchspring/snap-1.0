import { css } from '@emotion/react';
import type { ButtonProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Button component
const buttonStyleScript = (props: ButtonProps) => {
	const variables = props?.theme?.variables;
	const buttonDisabledSelectors = '&.ss__button--disabled';
	const buttonColor = new Color(props?.backgroundColor || variables?.colors?.primary || undefined);
	const fontColor = buttonColor.isDark() || buttonColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	// disabled button styles
	const disabledStyles = css({
		[buttonDisabledSelectors]: {
			opacity: 0.65,
			cursor: 'not-allowed !important',
		},
	});

	// const shared button styles
	const sharedStyles = css([
		custom.styles.boxSizing,
		{
			cursor: 'pointer',
			padding: `0 ${custom.spacing.x4}px`,
			color: fontColor.hex(),
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight01,
			textAlign: 'center',
			textTransform: custom.fonts.transform,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			'.ss__button__content': {
				minWidth: '1px',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},
			[`&, &:hover, &:not(.ss__button--disabled):hover, ${buttonDisabledSelectors}`]: {
				border: `1px solid ${buttonColor.hex()}`,
				borderRadius: `${custom.sizes.radius}px`,
				backgroundColor: buttonColor.hex(),
			},
			'.ss__icon': {
				width: `${custom.sizes.icon12}px`,
				height: `${custom.sizes.icon12}px`,
				flex: `0 0 ${custom.sizes.icon12}px`,
			},
			'.ss__icon--filters': {
				circle: {
					fill: buttonColor.hex(),
				},
			},
		},
		disabledStyles,
	]);

	// default styles
	const defaultStyles = sharedStyles;

	// native styles
	const nativeStyles = css([
		{
			display: 'inline-flex',
			alignItems: 'center',
			gap: `${custom.spacing.x1}px`,
			position: 'relative',
			outline: 0,
		},
		sharedStyles,
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
