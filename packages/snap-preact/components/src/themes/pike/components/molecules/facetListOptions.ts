import { css } from '@emotion/react';
import type { FacetListOptionsProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__facet-list-options__option': {
			display: 'block',
			position: 'relative',
			margin: `0 0 ${custom.spacing.x1}px 0`,
			padding: props?.hideCheckbox ? `` : `0 0 0 ${16 + custom.spacing.x2}px`,
			color: variables?.colors?.text,
			'&:last-child': {
				marginBottom: 0,
			},
			'.ss__checkbox, .ss__radio': {
				position: 'absolute',
				top: '1.5px',
				left: 0,
			},
			'.ss__facet-list-options__option__value': {
				margin: 0,
				'.ss__facet-list-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					opacity: 0.805,
					fontSize: '0.6rem',
				},
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
		facetListOptions: {
			themeStyleScript: facetListOptionsStyleScript,
			respectSingleSelect: true,
		},
	},
};
