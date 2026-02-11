import { css } from '@emotion/react';
import type { BadgeTextProps } from '../../../../components/Atoms/BadgeText';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeText component
const badgeTextStyleScript = (props: BadgeTextProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([
		custom.styles.boxSizing,
		{
			padding: 0,
			span: {
				display: 'block',
				fontSize: custom.utils.convertPxToEm(12),
				lineHeight: 1,
			},
		},
	]);
};

// BadgeText component props
export const badgeText: ThemeComponent<'badgeText', BadgeTextProps> = {
	default: {
		badgeText: {
			themeStyleScript: badgeTextStyleScript,
		},
	},
};
