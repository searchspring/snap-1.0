import { css } from '@emotion/react';
import type { SelectProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Select component
const selectStyleScript = ({ theme }: SelectProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Select component props
export const select: ThemeComponent<'select', SelectProps> = {
	default: {
		props: {
			themeStyleScript: selectStyleScript,
			iconOpen: customVariables?.icons?.arrowDown,
			iconClose: customVariables.icons.arrowUp,
		},
	},
};
