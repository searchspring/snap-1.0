import { css } from '@emotion/react';
import type { FacetGridOptionsProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = (props: FacetGridOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary);
	const fontColor = activeColor.isDark() || activeColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	return css({
		gridTemplateColumns: `repeat(auto-fill, minmax(${props?.gridSize ? props.gridSize : '52px'}, 1fr))`,
		gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
		alignItems: 'center',
		'&:before': {
			display: 'none',
		},
		'.ss__facet-grid-options__option': {
			position: 'relative',
			height: 0,
			paddingBottom: '100%',
			border: 0,
			'&, &:before, .ss__facet-grid-options__option__value': {
				display: 'block',
			},
			'&:before, .ss__facet-grid-options__option__value': {
				position: 'absolute',
				margin: 'auto',
			},
			'&:before': {
				content: '""',
				display: 'block',
				width: '100%',
				height: '100%',
				backgroundColor: custom.colors.gray01,
				border: `1px solid ${custom.colors.gray02}`,
				boxSizing: 'border-box',
			},
			'.ss__facet-grid-options__option__value': {
				top: '50%',
				left: 0,
				right: 0,
				zIndex: 2,
				transform: 'translateY(-50%)',
				maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
				maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
				overflow: 'hidden',
				textAlign: 'center',
				'&, &.ss__facet-grid-options__option__value--smaller': {
					fontSize: custom.utils.convertPxToEm(12),
				},
			},
		},
		'.ss__facet-grid-options__option.ss__facet-grid-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: fontColor.hex(),
			'&:before': {
				backgroundColor: activeColor.hex(),
				borderColor: activeColor.hex(),
			},
		},
	});
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps> = {
	default: {
		facetGridOptions: {
			themeStyleScript: facetGridOptionsStyleScript,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
		},
	},
};
