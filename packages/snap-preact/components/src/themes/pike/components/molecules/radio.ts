import { css } from '@emotion/react';
import type { RadioProps } from '../../../../components/Molecules/Radio';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Radio component
const radioStyleScript = (props: RadioProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

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
			backgroundColor: custom.colors.gray01,
			border: `1px solid ${custom.colors.gray02}`,
			'&, & .ss__icon': {
				borderRadius: '50%',
			},
			'.ss__icon': {
				display: 'none',
			},
			'&.ss__radio--active': {
				backgroundColor: custom.colors.white,
				borderColor: custom.colors.gray03,
				'.ss__icon': {
					display: 'block',
					fill: variables?.colors?.primary,
					stroke: variables?.colors?.primary,
				},
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
			size: `${custom.sizes.icon14}px`,
		},
		components: {
			'*radio icon': {
				icon: 'square',
				size: `${custom.sizes.icon10 - 2}px`,
			},
		},
	},
};
