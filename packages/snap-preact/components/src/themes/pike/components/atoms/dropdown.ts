import { css } from '@emotion/react';
import type { DropdownProps } from '../../../../components/Atoms/Dropdown';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Dropdown component
const dropdownStyleScript = ({ theme }: DropdownProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Dropdown component props
export const dropdown: ThemeComponent<'dropdown', DropdownProps> = {
	default: {
		props: {
			themeStyleScript: dropdownStyleScript,
		},
	},
};
