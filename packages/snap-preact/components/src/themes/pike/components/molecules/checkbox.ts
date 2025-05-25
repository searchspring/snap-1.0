import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

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
			backgroundColor: custom.colors.gray01,
			border: `1px solid ${custom.colors.gray02}`,
			'.ss__icon': {
				width: '8px',
				height: '8px',
			},
			'&.ss__checkbox--active': {
				backgroundColor: custom.colors.white,
				borderColor: custom.colors.gray03,
				'.ss__icon': {
					fill: variables?.colors?.primary,
					stroke: variables?.colors?.primary,
				},
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
			size: `${custom.sizes.icon14}px`,
		},
	},
};
