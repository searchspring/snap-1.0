import { css } from '@emotion/react';
import type { BadgePillProps } from '../../../../components/Atoms/BadgePill';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgePill component
const badgePillStyleScript = (props: BadgePillProps) => {
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

// BadgePill component props
export const badgePill: ThemeComponent<'badgePill', BadgePillProps> = {
	default: {
		badgePill: {
			themeStyleScript: badgePillStyleScript,
		},
	},
};
