import { css } from '@emotion/react';
import type { FacetsProps } from '../../../../components/Organisms/Facets';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facets component
const facetsStyleScript = (props: FacetsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		...custom.styles.boxSizing('facets', props?.treePath, props?.name),
		'&.ss__facets': {
			display: 'block',
			width: 'auto',
		},
	});
};

// Facets component props
export const facets: ThemeComponent<'facets', FacetsProps> = {
	default: {
		facets: {
			themeStyleScript: facetsStyleScript,
		},
	},
};
