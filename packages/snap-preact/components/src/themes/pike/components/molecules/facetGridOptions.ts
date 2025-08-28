import { css } from '@emotion/react';
import type { FacetGridOptionsProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = (props: FacetGridOptionsProps) => {
	const variables = props?.theme?.variables;
	const isSecondary = props?.className?.includes('secondary') ? true : false;
	const activeColor = new Color(variables?.colors?.primary);
	const fontColor = activeColor.isDark() || activeColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);
	const gridSize = props?.gridSize ? props.gridSize : '52px';

	// shared grid styles
	const sharedStyles = css({
		gridTemplateColumns: `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
		gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
		alignItems: 'center',
		'.ss__facet-grid-options__option': {
			position: 'relative',
			height: '100%',
			aspectRatio: 1,
			border: 0,
			color: variables?.colors?.text,
			'&, &:after, .ss__facet-grid-options__option__value': {
				boxSizing: 'border-box',
			},
			'&:after, .ss__facet-grid-options__option__value': {
				display: 'block',
			},
			'&:after': {
				content: '""',
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 1,
				border: `1px solid ${custom.colors.gray02}`,
			},
			'.ss__facet-grid-options__option__value': {
				position: 'relative',
				zIndex: 2,
				maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
				maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
				overflow: 'hidden',
				'&, &.ss__facet-grid-options__option__value--smaller': {
					fontSize: custom.utils.convertPxToEm(12),
				},
			},
		},
		'.ss__facet-grid-options__option.ss__facet-grid-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: fontColor.hex(),
			'&:after': {
				backgroundColor: activeColor.hex(),
				borderColor: activeColor.hex(),
			},
		},
	});

	// default grid styles
	const defaultStyles = css([
		sharedStyles,
		{
			'.ss__facet-grid-options__option': {
				'&:after': {
					backgroundColor: custom.colors.gray01,
				},
			},
		},
	]);

	// secondary grid styles
	const secondaryStyles = css([
		sharedStyles,
		{
			'.ss__facet-grid-options__option': {
				'&:after': {
					backgroundColor: custom.colors.white,
				},
			},
		},
	]);

	return isSecondary ? secondaryStyles : defaultStyles;
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
