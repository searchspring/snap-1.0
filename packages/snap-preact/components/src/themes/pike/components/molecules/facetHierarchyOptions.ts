import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = (props: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isHorizontal = props?.className?.includes('horizontal') ? true : false;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);

	// shared hierarchy styles
	const sharedStyles = css({
		'.ss__facet-hierarchy-options__option': {
			display: 'block',
			margin: `0 0 ${custom.spacing.x1}px 0`,
			padding: 0,
			color: variables?.colors?.text,
			'&:last-child': {
				marginBottom: 0,
			},
			'.ss__facet-hierarchy-options__option__value': {
				margin: 0,
				'.ss__facet-hierarchy-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: custom.utils.convertPxToEm(10),
					color: lightGray,
				},
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--return': {
			'&:before': {
				display: 'none',
			},
			'.ss__icon': {
				position: 'relative',
				top: '1px',
				margin: `0 ${custom.spacing.x1}px 0 0`,
				padding: 0,
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
		},
	});

	// default hierarchy styles
	const defaultStyles = css([
		sharedStyles,
		{
			'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
				'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': {
					paddingLeft: `${custom.spacing.x6}px`,
				},
			},
		},
	]);

	// horizontal hierarchy styles
	const horizontalStyles = css([
		sharedStyles,
		{
			display: 'flex',
			flexFlow: 'row wrap',
			margin: `0 -${custom.spacing.x2}px`,
			'.ss__facet-hierarchy-options__option': {
				flex: '0 1 auto',
				minWidth: '1px',
				padding: `0 ${custom.spacing.x2}px`,
				boxSizing: 'border-box',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},
			'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
				'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': {
					paddingLeft: `${custom.spacing.x2}px`,
				},
			},
		},
	]);

	return isHorizontal ? horizontalStyles : defaultStyles;
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
		},
	},
};
