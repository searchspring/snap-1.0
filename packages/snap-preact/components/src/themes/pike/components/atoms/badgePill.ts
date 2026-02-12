import { css } from '@emotion/react';
import type { BadgePillProps } from '../../../../components/Atoms/BadgePill';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgePill component
const badgePillStyleScript = (props: BadgePillProps) => {
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

// BadgePill component props
export const badgePill: ThemeComponent<'badgePill', BadgePillProps> = {
	default: {
		badgePill: {
			themeStyleScript: badgePillStyleScript,
		},
	},
};
