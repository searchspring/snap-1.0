import { css } from '@emotion/react';
import type { FacetsHorizontalProps } from '../../../../components/Organisms/FacetsHorizontal';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Facets component
const facetsHorizontalStyleScript = (props: FacetsHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// FacetsHorizontal component props
export const facetsHorizontal: ThemeComponent<'facetsHorizontal', FacetsHorizontalProps> = {
	default: {
		props: {
			themeStyleScript: facetsHorizontalStyleScript,
			limit: 9,
		},
	},
	mobile: {
		props: {
			limit: 0,
		},
	},
	tablet: {
		props: {
			limit: 5,
		},
	},
	desktop: {
		props: {
			limit: 7,
		},
	},
};
