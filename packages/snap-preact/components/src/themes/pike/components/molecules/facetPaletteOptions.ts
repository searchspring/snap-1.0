import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = (props: FacetPaletteOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const hasCheckbox = !props?.hideCheckbox ? true : false;

	// light colors selector
	const palettePrefix = '.ss__facet-palette-options__option__palette';
	const lightColors = `${palettePrefix}--white, ${palettePrefix}--ivory, ${palettePrefix}--clear, ${palettePrefix}--transparent`;

	// light border styles styles
	const lightBorderStyles = css({
		borderColor: custom.colors.gray02,
		opacity: 1,
		visibility: 'visible',
	});

	// shared palette styles
	const sharedStyles = css({
		'.ss__facet-palette-options__option': {
			color: variables?.colors?.text,
			'.ss__facet-palette-options__option__wrapper': {
				'&:before, .ss__facet-palette-options__option__palette, .ss__facet-palette-options__option__palette:before': {
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
					opacity: 0,
					visibility: 'hidden',
				},
				'&:before': {
					zIndex: 2,
					border: `1px solid ${custom.colors.black}`,
				},
				'.ss__facet-palette-options__option__palette': {
					zIndex: 1,
					'&:before': {
						border: `1px solid ${custom.colors.white}`,
					},
					'&:not([style]):before': {
						...lightBorderStyles,
					},
					'.ss__icon': {
						display: 'none',
					},
				},
				[`${lightColors}`]: {
					'&:before': {
						...lightBorderStyles,
					},
				},
			},
			'.ss__facet-palette-options__option__value__count': {
				position: 'relative',
				top: props?.layout == 'list' ? '-1px' : '',
				padding: props?.layout == 'list' ? `0 ${custom.spacing.x1}px` : ``,
				opacity: 0.805,
				fontSize: '0.6rem',
			},
		},
		'.ss__facet-palette-options__option.ss__facet-palette-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
			'.ss__facet-palette-options__option__wrapper': {
				'&:before, .ss__facet-palette-options__option__palette:before': {
					visibility: 'visible',
				},
				'&:before': {
					opacity: 0.4,
				},
				'.ss__facet-palette-options__option__palette': {
					'&:before': {
						opacity: 1,
						margin: '1px',
						borderWidth: props?.layout == 'list' ? `${hasCheckbox ? 2 : 3}px` : `5px`,
					},
					'&:not([style]):before': {
						borderColor: custom.colors.gray01,
					},
				},
				[`${lightColors}`]: {
					'&:before': {
						borderColor: custom.colors.gray01,
					},
				},
			},
		},
	});

	// default styles
	const defaultStyles = css([
		sharedStyles,
		{
			display: 'grid',
			gridTemplateColumns: `repeat(auto-fill, minmax(${props?.gridSize ? props.gridSize : '52px'}, 1fr))`,
			gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
			alignItems: 'center',
			'.ss__facet-palette-options__option': {
				textAlign: 'center',
				'.ss__checkbox': {
					display: 'none',
				},
				'.ss__facet-palette-options__option__wrapper': {
					position: 'relative',
					height: 0,
					paddingBottom: '100%',
				},
				'.ss__facet-palette-options__option__value, .ss__facet-palette-options__option__value__count': {
					display: 'block',
					lineHeight: '0.85rem',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				},
				'.ss__facet-palette-options__option__value': {
					fontSize: '0.75rem',
					overflow: 'hidden',
					margin: `${custom.spacing.x1}px 0 0 0`,
				},
				'.ss__facet-palette-options__option__value__count': {
					margin: `${custom.spacing.x1 / 2}px 0 0 0`,
				},
			},
		},
	]);

	// list styles
	const listSize = hasCheckbox ? 16 : 22;
	const listCheckboxSize = 16;
	const listPadding = hasCheckbox ? custom.spacing.x4 + listSize + listCheckboxSize : custom.spacing.x2 + listSize;
	const listStyles = css([
		sharedStyles,
		{
			'.ss__facet-palette-options__option': {
				display: 'block',
				position: 'relative',
				margin: `0 0 ${custom.spacing.x1}px 0`,
				padding: `${hasCheckbox ? 0 : custom.spacing.x1 + 'px'} 0 0 ${listPadding}px`,
				minHeight: hasCheckbox ? '' : `${listSize}px`,
				'&:last-child': {
					marginBottom: 0,
				},
				'.ss__checkbox, .ss__facet-palette-options__option__wrapper': {
					position: 'absolute',
					top: `${hasCheckbox ? '2' : '3.5'}px`,
				},
				'.ss__checkbox': {
					left: 0,
				},
				'.ss__facet-palette-options__option__wrapper': {
					left: hasCheckbox ? `${listCheckboxSize + custom.spacing.x2}px` : 0,
					width: `${listSize}px`,
					height: `${listSize}px`,
					lineHeight: `${listSize}px`,
				},
			},
		},
	]);

	return props?.layout == 'list' ? listStyles : defaultStyles;
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps> = {
	default: {
		facetPaletteOptions: {
			themeStyleScript: facetPaletteStyleScript,
			//disableStyles: true,
			hideIcon: true,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
			colorMapping: {
				brown: {
					background: custom.colors.brown,
				},
				Brown: {
					background: custom.colors.brown,
				},
				multi: {
					background: custom.colors.rainbow,
				},
				Multi: {
					background: custom.colors.rainbow,
				},
				'multi-color': {
					background: custom.colors.rainbow,
				},
				'Multi-color': {
					background: custom.colors.rainbow,
				},
				purple: {
					background: custom.colors.purple,
				},
				Purple: {
					background: custom.colors.purple,
				},
				rainbow: {
					background: custom.colors.rainbow,
				},
				Rainbow: {
					background: custom.colors.rainbow,
				},
			},
		},
		// 'facetPaletteOptions checkbox': {
		// 	disableStyles: false,
		// },
	},
};
