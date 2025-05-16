import { css } from '@emotion/react';
import type { FacetProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Facet component
const facetStyleScript = (props: FacetProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&.ss__facet--collapsed': {
			'.ss__facet__header': {
				'.ss__icon': {
					transform: 'rotate(0deg)',
				},
			},
		},
		'.ss__facet__header': {
			'.ss__icon': {
				transition: 'transform ease .5s',
				transform: 'rotate(180deg)',
			},
		},
	});
};

// Facet component props
export const facet: ThemeComponent<'facet', FacetProps> = {
	default: {
		props: {
			themeStyleScript: facetStyleScript,
			iconCollapse: customVariables.icons.arrowDown,
			iconExpand: customVariables.icons.arrowDown,
			iconOverflowMore: customVariables.icons.plus,
			iconOverflowLess: customVariables.icons.minus,
		},
	},
};
