import { css } from '@emotion/react';
import type { OverlayProps } from '../../../../components/Atoms/Overlay';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Overlay component
const overlayStyleScript = (props: OverlayProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = props?.color || 'rgba(0, 0, 0, 0.80)';

	return css([
		custom.styles.boxSizing,
		{
			cursor: 'pointer',
			'&, &.ss__overlay--active': {
				background: backgroundColor,
			},
		},
	]);
};

// Overlay component props
export const overlay: ThemeComponent<'overlay', OverlayProps> = {
	default: {
		overlay: {
			themeStyleScript: overlayStyleScript,
		},
	},
};
