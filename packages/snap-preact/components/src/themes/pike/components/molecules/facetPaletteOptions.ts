import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
//import Color from 'color';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = (props: FacetPaletteOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	//const activeColor = new Color(variables?.colors?.primary);
	//const fontColor = activeColor.isDark() || activeColor.hex() == '#00AEEF' ? Color(custom.colors.white) : Color(custom.colors.black);

	console.log('props', props);

	// shared palette styles
	const sharedStyles = css({
		'.ss__facet-palette-options__option': {
			color: variables?.colors?.text,
		},
	});

	// default styles
	const defaultStyles = css([
		sharedStyles,
		{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
			gap: custom.spacing.x1,
			alignItems: 'center',
			'.ss__facet-palette-options__option': {
				'.ss__facet-palette-options__option__wrapper': {
					position: 'relative',
					height: 0,
					paddingBottom: '100%',
					'&:before, .ss__facet-palette-options__option__palette': {
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						margin: 'auto',
					},
					'&:before, .ss__facet-palette-options__option__palette:before': {
						content: '""',
						display: 'block',
					},
					'&:before': {
						zIndex: 2,
					},
					'.ss__facet-palette-options__option__palette': {
						zIndex: 1,
					},
				},
				'.ss__facet-palette-options__option__value': {
					display: 'block',
					fontSize: '0.75rem',
					lineHeight: '0.85rem',
					textAlign: 'center',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					margin: `${custom.spacing.x1}px 0 0 0`,
				},
			},
		},
	]);

	// list styles
	const listStyles = css([
		sharedStyles,
		{
			// width: `${custom.sizes.icon}px`,
			// height: `${custom.sizes.icon}px`,
			// border: `1px solid ${custom.colors.gray02}`,
			// cursor: 'pointer',
		},
	]);

	return props?.layout == 'list' ? listStyles : defaultStyles;
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetPaletteStyleScript,
			columns: 5,
			disableStyles: true,
			hideIcon: true,
		},
	},
};
