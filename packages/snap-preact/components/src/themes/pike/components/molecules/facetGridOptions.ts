import { css } from '@emotion/react';
import type { FacetGridOptionsProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = (props: FacetGridOptionsProps) => {
	const variables = props?.theme?.variables;
	const activeColors = custom.utils.activeColors();
	const activeColor = activeColors[0];
	const fontColor = activeColors[1];

	// grid styles
	const gridStyles = css({
		alignItems: 'center',
		...custom.styles.boxSizing('facetGridOptions', props?.treePath),
		'.ss__facet-grid-options__option': {
			height: '100%',
			aspectRatio: 1,
			padding: `${custom.spacing.x2}px`,
			'.ss__facet-grid-options__option__value': {
				display: 'block',
				overflow: 'hidden',
				maxHeight: '100%',
				color: 'inherit',
				'&, &.ss__facet-grid-options__option__value--smaller': {
					...custom.styles.fontSize(12),
					lineHeight: 1,
				},
			},
			'&, &:hover:not(.ss__facet-grid-options__option--filtered)': {
				...custom.styles.box(variables?.colors?.text, 0),
			},
			'&.ss__facet-grid-options__option--filtered': {
				backgroundColor: activeColor,
				borderColor: activeColor,
				fontWeight: custom.fonts.weight01,
				color: fontColor,
			},
		},
	});

	return gridStyles;
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps> = {
	default: {
		facetGridOptions: {
			themeStyleScript: facetGridOptionsStyleScript,
			horizontal: true,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
		},
	},
};
