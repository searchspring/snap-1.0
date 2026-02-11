import { css } from '@emotion/react';
import type { BadgeRectangleProps } from '../../../../components/Atoms/BadgeRectangle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeRectangle component
const badgeRectangleStyleScript = (props: BadgeRectangleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([
		custom.styles.boxSizing,
		{
			padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			span: {
				display: 'block',
				fontSize: custom.utils.convertPxToEm(12),
				lineHeight: 1,
			},
		},
	]);
};

// BadgeRectangle component props
export const badgeRectangle: ThemeComponent<'badgeRectangle', BadgeRectangleProps> = {
	default: {
		badgeRectangle: {
			themeStyleScript: badgeRectangleStyleScript,
		},
	},
};
