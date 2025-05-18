import { css } from '@emotion/react';
import type { IconProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Icon component
const iconStyleScript = (props: IconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		fill: 'currentColor',
		stroke: 'currentColor',
	});
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps> = {
	default: {
		props: {
			themeStyleScript: iconStyleScript,
			size: custom.sizes.icons,
		},
	},
};
