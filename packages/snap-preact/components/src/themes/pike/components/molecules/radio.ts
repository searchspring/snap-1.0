import { css } from '@emotion/react';
import type { RadioProps } from '../../../../components/Molecules/Radio';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Radio component
const radioStyleScript = (props: RadioProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(custom.colors.gray02).lighten(0.055);
	const borderColor = new Color(custom.colors.gray02);
	const activeIconColor = new Color(variables?.colors?.primary);
	const activeBorderColor = new Color(custom.colors.gray02).darken(0.055);

	// shared radio styles
	const disabledStyles = css({
		'&.ss__radio--disabled': {
			opacity: 0.65,
			'&, & *': {
				cursor: 'not-allowed',
			},
		},
	});

	// default styles
	const defaultStyles = css([
		{
			backgroundColor: backgroundColor.hex(),
			border: `1px solid ${props?.checked ? activeBorderColor.hex() : borderColor.hex()}`,
			'&, & .ss__icon': {
				borderRadius: '50%',
			},
			'.ss__icon': {
				display: props?.checked ? '' : 'none',
				fill: props?.checked ? activeIconColor.hex() : '',
				stroke: props?.checked ? activeIconColor.hex() : '',
			},
		},
		disabledStyles,
	]);

	// native styles
	const nativeStyles = css([
		{
			lineHeight: 0,
			'.ss__radio__input': {
				width: `${custom.sizes.icon}px`,
				height: `${custom.sizes.icon}px`,
				border: `1px solid ${custom.colors.gray02}`,
				cursor: 'pointer',
			},
		},
		disabledStyles,
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Radio component props
export const radio: ThemeComponent<'radio', RadioProps> = {
	default: {
		props: {
			themeStyleScript: radioStyleScript,
			size: '14px',
		},
		components: {
			'*radio icon': {
				icon: 'square',
				size: '8px',
			},
		},
	},
};
