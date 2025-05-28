import { css } from '@emotion/react';
import type { PerPageProps } from '../../../../components/Molecules/PerPage';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the PerPage component
const perPageStyleScript = (props: PerPageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// PerPage component props
export const perPage: ThemeComponent<'perPage', PerPageProps> = {
	default: {
		perPage: {
			themeStyleScript: perPageStyleScript,
		},
	},
};
