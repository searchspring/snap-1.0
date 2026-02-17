import { css } from '@emotion/react';
import type { CheckboxProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const darkGray = custom.utils.darkenColor();

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		position: 'relative',
		top: '-1px',
	});

	// default checkbox styles
	const defaultCheckboxStyles = css([
		sharedStyles,
		{
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: custom.colors.gray01,
			...custom.styles.boxSizing('checkbox', props?.treePath, props?.name),
			'&:has(.ss__icon)': {
				borderColor: darkGray,
			},
			'&.ss__checkbox--disabled': {
				...custom.styles.disabled(),
			},
		},
	]);

	// native checkbox styles
	const nativeCheckboxStyles = css([
		sharedStyles,
		{
			width: `${custom.sizes.icon16}px`,
			height: `${custom.sizes.icon16}px`,
			cursor: 'pointer',
			...custom.styles.boxSizing('checkbox', props?.treePath, props?.name),
			'&.ss__checkbox--disabled': {
				...custom.styles.disabled(),
			},
		},
	]);

	// return checkbox styles
	return props?.native ? nativeCheckboxStyles : defaultCheckboxStyles;
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps> = {
	default: {
		checkbox: {
			themeStyleScript: checkboxStyleScript,
			icon: custom.icons.check,
			size: `${custom.sizes.icon16}px`,
		},
		'checkbox icon': {
			size: `${custom.sizes.icon08}px`,
			width: `${custom.sizes.icon08}px`,
			height: `${custom.sizes.icon08}px`,
			color: custom.colors.primary,
		},
	},
};
