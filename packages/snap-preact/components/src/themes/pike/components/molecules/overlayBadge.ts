import { css } from '@emotion/react';
import type { OverlayBadgeProps } from '../../../../components/Molecules/OverlayBadge';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Search component
const overlayBadgeStyleScript = (props: OverlayBadgeProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// OverlayBadge component props
export const overlayBadge: ThemeComponent<'overlayBadge', OverlayBadgeProps> = {
	default: {
		overlayBadge: {
			themeStyleScript: overlayBadgeStyleScript,
		},
	},
};
