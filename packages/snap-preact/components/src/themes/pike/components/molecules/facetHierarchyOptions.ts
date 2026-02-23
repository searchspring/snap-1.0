import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.utils.lightenColor();

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = (props: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// facet hierarchy styles
	const facetHierarchyStyles = css({
		...custom.styles.boxSizing('facetHierarchyOptions', props?.treePath, props?.name),
		'.ss__facet-hierarchy-options__option': {
			color: variables?.colors?.text,
			gap: `${custom.spacing.x1}px`,
			padding: 0,
			margin: `0 0 ${custom.spacing.x1}px 0`,
			'&:last-of-type': {
				marginBottom: 0,
			},
			'.ss__facet-hierarchy-options__option__value': {
				margin: 0,
				'.ss__facet-hierarchy-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: '10px',
					color: lightGray,
				},
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--return': {
			'.ss__icon': {
				padding: 0,
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
			...custom.styles.activeText(variables?.colors?.primary),
			'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': {
				paddingLeft: `${custom.spacing.x6}px`,
			},
		},
	});

	return facetHierarchyStyles;
};

// FacetHierarchyOptions component props
export const facetHierarchyOptions: ThemeComponent<'facetHierarchyOptions', FacetHierarchyOptionsProps> = {
	default: {
		facetHierarchyOptions: {
			themeStyleScript: facetHierarchyOptionsStyleScript,
			returnIcon: custom.icons.arrowLeft,
		},
		'facetHierarchyOptions icon': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
		},
	},
};
