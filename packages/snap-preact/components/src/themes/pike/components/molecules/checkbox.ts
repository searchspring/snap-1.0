import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor();

	// shared checkbox styles
	const sharedStyles = css({
		position: 'relative',
		top: '-1px',
	});

	// default checkbox styles
	const defaultStyles = css([
		sharedStyles,
		{
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: custom.colors.gray01,
			...custom.styles.boxSizing('checkbox', props?.treePath),
			'&:has(.ss__icon)': {
				borderColor: darkGray,
				'.ss__icon': {
					width: '8px',
					height: '8px',
					fill: variables?.colors?.primary,
				},
			},
			'&.ss__checkbox--disabled': {
				...custom.styles.disabled(),
			},
		},
	]);

	// native checkbox styles
	const nativeStyles = css([
		sharedStyles,
		{
			width: `${custom.sizes.icon16}px`,
			height: `${custom.sizes.icon16}px`,
			cursor: 'pointer',
			...custom.styles.boxSizing('checkbox', props?.treePath),
			'&.ss__checkbox--disabled': {
				...custom.styles.disabled(),
			},
		},
	]);

	// return checkbox styles
	return props?.native ? nativeStyles : defaultStyles;
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps> = {
	default: {
		checkbox: {
			themeStyleScript: checkboxStyleScript,
			icon: custom.icons.check,
			size: `${custom.sizes.icon16}px`,
		},
	},
};
