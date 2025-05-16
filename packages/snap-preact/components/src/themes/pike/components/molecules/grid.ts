import { css } from '@emotion/react';
import type { GridProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Grid component
const gridStyleScript = ({ theme }: Partial<GridProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

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
