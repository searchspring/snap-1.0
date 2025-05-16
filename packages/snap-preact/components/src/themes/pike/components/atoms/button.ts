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
	const fontColor = buttonColor.isDark() || buttonColor.hex() == '#00AEEF' ? Color('#ffffff') : Color('#000000');

	return css({
		padding: `0 ${customVariables.sizes.spacing}px`,
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
		'&.ss__button--disabled': {
			opacity: 0.65,
			'&, .ss__button__content, .ss__icon': {
				cursor: 'not-allowed',
			},
		},
	});
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps> = {
	default: {
		props: {
			themeStyleScript: buttonStyleScript,
		},
	},
};
