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
		facetsHorizontal: {
			themeStyleScript: facetsHorizontalStyleScript,
			limit: 9,
		},
	},
	mobile: {
		facetsHorizontal: {
			limit: 0,
		},
	},
	tablet: {
		facetsHorizontal: {
			limit: 5,
		},
	},
	desktop: {
		facetsHorizontal: {
			limit: 7,
		},
	},
};
