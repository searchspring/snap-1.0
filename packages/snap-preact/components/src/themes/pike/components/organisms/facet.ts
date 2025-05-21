import { css } from '@emotion/react';
import type { FacetProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facet component
const facetStyleScript = (props: FacetProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		margin: ` 0 0 ${custom.spacing.x6}px 0`,
		'&.ss__facet--collapsed': {
			'.ss__facet__header': {
				'.ss__icon': {
					transform: 'rotate(0deg)',
				},
			},
		},
		'.ss__facet__header': {
			margin: ` 0 0 ${custom.spacing.x4}px 0`,
			padding: ` 0 0 ${custom.spacing.x2}px 0`,
			gap: `${custom.spacing.x2}px`,
			borderBottomColor: variables?.colors?.primary,
			fontSize: '16px',
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
			'.ss__icon': {
				transition: 'transform ease .5s',
				transform: 'rotate(180deg)',
				width: '12px',
				height: '12px',
				fill: variables?.colors?.primary,
				stroke: variables?.colors?.primary,
			},
		},
		'.ss__facet__options': {
			marginTop: 0,
			maxHeight: `490px`,
			'&::-webkit-scrollbar': {
				width: '8px',
				height: '8px',
			},
			'&::-webkit-scrollbar-track': {
				backgroundColor: custom.colors.gray01,
			},
			'&::-webkit-scrollbar-thumb': {
				backgroundColor: custom.colors.gray02,
			},
		},
		'.ss__facet__show-more-less': {
			margin: `${custom.spacing.x2}px 0 0 0`,
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
			'.ss__icon': {
				width: '10px',
				height: '10px',
			},
		},
	});
};

// Facet component props
export const facet: ThemeComponent<'facet', FacetProps> = {
	default: {
		props: {
			themeStyleScript: facetStyleScript,
			iconCollapse: custom.icons.arrowDown,
			iconExpand: custom.icons.arrowDown,
			iconOverflowMore: custom.icons.plus,
			iconOverflowLess: custom.icons.minus,
		},
	},
};
