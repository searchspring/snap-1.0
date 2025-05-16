import { css } from '@emotion/react';
import type { OverlayBadgeProps } from '../../../../components/Molecules/OverlayBadge';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Search component
const overlayBadgeStyleScript = ({ theme }: OverlayBadgeProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// OverlayBadge component props
export const overlayBadge: ThemeComponent<'overlayBadge', OverlayBadgeProps> = {
	default: {
		props: {
			themeStyleScript: overlayBadgeStyleScript,
		},
	},
};
