import { css } from '@emotion/react';
import type { BadgePillProps } from '../../../../components/Atoms/BadgePill';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgePill component
const badgePillStyleScript = (props: BadgePillProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// badge pill styles
	const badgePillStyles = css([
		{
			padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			...custom.styles.boxSizing(),
			span: {
				...custom.styles.badgeText(12),
			},
		},
	]);

	return badgePillStyles;
};

// BadgePill component props
export const badgePill: ThemeComponent<'badgePill', BadgePillProps> = {
	default: {
		badgePill: {
			themeStyleScript: badgePillStyleScript,
		},
	},
};
