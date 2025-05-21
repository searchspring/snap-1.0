import { css } from '@emotion/react';
import type { FacetGridOptionsProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = (props: FacetGridOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(custom.colors.gray02).lighten(0.055);
	const activeColor = new Color(variables?.colors?.primary);
	const fontColor = activeColor.isDark() || activeColor.hex() == '#00AEEF' ? Color(custom.colors.white) : Color(custom.colors.black);

	return css({
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
		gap: custom.spacing.x1,
		alignItems: 'center',
		'.ss__facet-grid-options__option': {
			position: 'relative',
			height: 0,
			paddingBottom: '100%',
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
				backgroundColor: backgroundColor.hex(),
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
				fontSize: '0.75rem',
				color: variables?.colors?.text,
			},
		},
		'.ss__facet-grid-options__option.ss__facet-grid-options__option--filtered': {
			'&:before': {
				backgroundColor: activeColor.hex(),
				borderColor: activeColor.hex(),
			},
			'.ss__facet-grid-options__option__value': {
				fontWeight: custom.fonts.weight01,
				color: fontColor.hex(),
			},
		},
	});
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetGridOptionsStyleScript,
			columns: 5,
			disableStyles: true,
		},
	},
};
