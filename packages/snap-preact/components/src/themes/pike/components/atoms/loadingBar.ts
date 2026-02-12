import { css } from '@emotion/react';
import type { LoadingBarProps } from '../../../../components/Atoms/Loading';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = (props: LoadingBarProps) => {
	const variables = props?.theme?.variables;

	return css([
		custom.styles.boxSizing,
		{
			background: variables?.colors?.primary,
			'.ss__loading-bar__bar': {
				background: variables?.colors?.secondary,
			},
		},
	]);
};

// LoadingBar component props
export const loadingBar: ThemeComponent<'loadingBar', LoadingBarProps> = {
	default: {
		loadingBar: {
			themeStyleScript: loadingBarStyleScript,
		},
	},
};
