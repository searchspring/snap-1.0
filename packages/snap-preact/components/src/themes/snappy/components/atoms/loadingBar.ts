import { css } from '@emotion/react';
import type { LoadingBarProps } from '../../../../components/Atoms/Loading';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = ({ color, backgroundColor, theme }: LoadingBarProps) => {
	const variables = theme?.variables;
	return css({
		background: backgroundColor || '#f8f8f8',
		'& .ss__loading-bar__bar': {
			background: `${color || variables?.colors?.accent || '#ccc'}`,
		},
	});
};

// LoadingBar component props
export const loadingBar: ThemeComponentProps<LoadingBarProps> = {
	default: {
		themeStyleScript: loadingBarStyleScript,
	},
	mobile: {},
	tablet: {},
	desktop: {},
};
