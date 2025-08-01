import { css } from '@emotion/react';
import type { OverlayProps } from '../../../../components/Atoms/Overlay';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Overlay component
const overlayStyleScript = (props: OverlayProps) => {
	const backgroundColor = props?.color || 'rgba(0, 0, 0, 0.80)';

	return css({
		'&, &.ss__overlay--active': {
			background: backgroundColor,
		},
	});
};

// Overlay component props
export const overlay: ThemeComponent<'overlay', OverlayProps> = {
	default: {
		overlay: {
			themeStyleScript: overlayStyleScript,
		},
	},
};
