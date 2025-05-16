import { css } from '@emotion/react';
import type { GridProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Grid component
const gridStyleScript = (props: Partial<GridProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Grid component props
export const grid: ThemeComponent<'grid', GridProps> = {
	default: {
		props: {
			themeStyleScript: gridStyleScript,
		},
	},
};
