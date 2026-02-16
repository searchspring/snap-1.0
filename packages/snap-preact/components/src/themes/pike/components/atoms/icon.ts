import { css } from '@emotion/react';
import type { IconProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Icon component
const iconStyleScript = (props: IconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// icon styles
	const iconStyles = css([
		{
			minWidth: '1px',
			flex: props?.size ? `0 0 ${props.size}` : ``,
			stroke: 'transparent',
			lineHeight: 1,
		},
	]);

	return iconStyles;
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps> = {
	default: {
		icon: {
			themeStyleScript: iconStyleScript,
			size: `${custom.sizes.icon16}px`,
			color: 'currentColor',
		},
	},
};
