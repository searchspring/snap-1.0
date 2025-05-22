import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = (props: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__facet-hierarchy-options__option': {
			display: 'block',
			margin: `0 0 ${custom.spacing.x1}px 0`,
			color: variables?.colors?.text,
			'&:last-child': {
				marginBottom: 0,
			},
			'.ss__facet-hierarchy-options__option__value': {
				margin: 0,
				'.ss__facet-hierarchy-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					padding: `0 ${custom.spacing.x1}px`,
					opacity: 0.805,
					fontSize: '0.6rem',
				},
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--return': {
			'&:before': {
				content: '"\\0000ab"',
				display: 'inline-block',
				height: '24px',
				position: 'relative',
				top: '1px',
				padding: `0 ${custom.spacing.x1}px 0 0`,
				fontSize: '24px',
				color: 'inherit',
				lineHeight: '24px',
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
			'& ~ .ss__facet-hierarchy-options__option': {
				paddingLeft: `${custom.spacing.x6}px`,
			},
		},
	});
};

// FacetHierarchyOptions component props
export const facetHierarchyOptions: ThemeComponent<'facetHierarchyOptions', FacetHierarchyOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetHierarchyOptionsStyleScript,
			disableStyles: true,
		},
	},
};
