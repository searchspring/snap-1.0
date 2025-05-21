import { css } from '@emotion/react';
import type { FacetListOptionsProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isHorizontal = props?.horizontal ? true : false;

	return css({
		gap: isHorizontal ? `${custom.spacing.x2}px` : '',
		'.ss__facet-list-options__option': {
			padding: 0,
			margin: isHorizontal ? `` : `0 0 ${custom.spacing.x2}px 0`,
			color: variables?.colors?.text,
			'.ss__facet-list-options__option__value': {
				margin: props?.hideCheckbox ? `` : `0 0 0 ${custom.spacing.x2}px`,
				'.ss__facet-list-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: `0 0 0 ${custom.spacing.x1}px`,
					opacity: 0.805,
					fontSize: '0.6rem',
				},
			},
			'&:last-child': {
				marginBottom: isHorizontal ? '' : 0,
			},
		},
		'.ss__facet-list-options__option.ss__facet-list-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
		},
	});
};

// FacetListOptions component props
export const facetListOptions: ThemeComponent<'facetListOptions', FacetListOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetListOptionsStyleScript,
		},
	},
};
