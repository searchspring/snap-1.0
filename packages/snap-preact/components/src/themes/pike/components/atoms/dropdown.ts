import { css } from '@emotion/react';
import type { DropdownProps } from '../../../../components/Atoms/Dropdown';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Dropdown component
const dropdownStyleScript = (props: DropdownProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([
		custom.styles.boxSizing,
		{
			width: 'auto',
			'&.ss__dropdown--open': {
				'.ss__dropdown__content': {
					zIndex: 5,
				},
			},
			'.ss__dropdown__content': {
				minWidth: '1px',
				left: 0,
				right: 0,
				zIndex: -1,
			},
		},
	]);
};

// Dropdown component props
export const dropdown: ThemeComponent<'dropdown', DropdownProps> = {
	default: {
		dropdown: {
			themeStyleScript: dropdownStyleScript,
		},
	},
};
