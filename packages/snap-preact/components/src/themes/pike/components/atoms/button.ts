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
	const fontColor = buttonColor.isDark() || buttonColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	// disabled button selectors
	const disabledSelectors = '&.ss__button--disabled, &.ss__load-more__button.ss__load-more__button--disabled';

	// shared button styles
	const disabledStyles = css({
		[`${disabledSelectors}`]: {
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
			[`&, &:hover, &:not(.ss__button--disabled):hover, ${disabledSelectors}`]: {
				borderColor: buttonColor.hex(),
				backgroundColor: buttonColor.hex(),
			},
		},
		disabledStyles,
	]);

	// native styles
	const nativeStyles = css([
		{
			cursor: 'pointer',
			padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
			[`&, &:hover, &:not(.ss__button--disabled):hover, ${disabledSelectors}`]: {
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.white,
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
