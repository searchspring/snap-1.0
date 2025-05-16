import { css } from '@emotion/react';
import type { IconProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Icon component
const iconStyleScript = ({ theme }: IconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps> = {
	default: {
		props: {
			themeStyleScript: iconStyleScript,
		},
	},
};
