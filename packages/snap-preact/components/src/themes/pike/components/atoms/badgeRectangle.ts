import { css } from '@emotion/react';
import type { BadgeRectangleProps } from '../../../../components/Atoms/BadgeRectangle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeRectangle component
const badgeRectangleStyleScript = (props: BadgeRectangleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// badge styles
	const badgeStyles = css([
		{
			padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			...custom.styles.boxSizing2(),
			span: {
				...custom.styles.badgeText(12),
			},
		},
	]);

	return badgeStyles;
};

// BadgeRectangle component props
export const badgeRectangle: ThemeComponent<'badgeRectangle', BadgeRectangleProps> = {
	default: {
		badgeRectangle: {
			themeStyleScript: badgeRectangleStyleScript,
		},
	},
};
