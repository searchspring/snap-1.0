import { css } from '@emotion/react';
import type { CalloutBadgeProps } from '../../../../components/Molecules/CalloutBadge';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Search component
const calloutBadgeStyleScript = (props: CalloutBadgeProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// CalloutBadge component props
export const calloutBadge: ThemeComponent<'calloutBadge', CalloutBadgeProps> = {
	default: {
		props: {
			themeStyleScript: calloutBadgeStyleScript,
		},
	},
};
