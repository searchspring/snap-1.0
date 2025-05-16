import { css } from '@emotion/react';
import type { LoadingBarProps } from '../../../../components/Atoms/Loading';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = ({ theme }: LoadingBarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// LoadingBar component props
export const loadingBar: ThemeComponent<'loadingBar', LoadingBarProps> = {
	default: {
		props: {
			themeStyleScript: loadingBarStyleScript,
		},
	},
};
