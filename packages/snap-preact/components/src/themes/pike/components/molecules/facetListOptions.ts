import { css } from '@emotion/react';
import type { FacetListOptionsProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isHorizontal = props?.className?.includes('horizontal') ? true : false;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const checkboxSpacing = 16 + custom.spacing.x2;

	// shared list styles
	const sharedStyles = css({
		'.ss__facet-list-options__option': {
			display: 'block',
			position: 'relative',
			margin: `0 0 ${custom.spacing.x1}px 0`,
			color: variables?.colors?.text,
			'.ss__checkbox, .ss__radio': {
				position: 'absolute',
				top: '1.5px',
			},
			'.ss__facet-list-options__option__value': {
				margin: 0,
				'.ss__facet-list-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: custom.utils.convertPxToEm(10),
					color: lightGray,
				},
			},
		},
		'.ss__facet-list-options__option.ss__facet-list-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
		},
	});

	// default list styles
	const defaultStyles = css([
		sharedStyles,
		{
			'.ss__facet-list-options__option': {
				padding: props?.hideCheckbox ? `` : `0 0 0 ${checkboxSpacing}px`,
				'&:last-child': {
					marginBottom: 0,
				},
				'.ss__checkbox, .ss__radio': {
					left: 0,
				},
			},
		},
	]);

	// horizontal list styles
	const horizontalStyles = css([
		sharedStyles,
		{
			display: 'flex',
			flexFlow: 'row wrap',
			margin: `0 -${custom.spacing.x2}px`,
			'.ss__facet-list-options__option': {
				flex: '0 1 auto',
				minWidth: '1px',
				padding: props?.hideCheckbox ? `0 ${custom.spacing.x2}px` : `0 ${custom.spacing.x2}px 0 ${checkboxSpacing + custom.spacing.x2}px`,
				boxSizing: 'border-box',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
				'.ss__checkbox, .ss__radio': {
					left: `${custom.spacing.x2}px`,
					backgroundColor: custom.colors.white,
				},
			},
		},
	]);

	return isHorizontal ? horizontalStyles : defaultStyles;
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
