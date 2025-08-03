import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = (props: FacetPaletteOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isHorizontal = props?.className?.includes('horizontal') ? true : false;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const hasCheckbox = !props?.hideCheckbox ? true : false;

	// set details for radius
	const radius = 0;
	const radiusUnit = 'px';
	const paletteRadius = radius ? `${radius}${radiusUnit}` : `0`;

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
			display: 'block',
			color: variables?.colors?.text,
			'&, &.ss__facet-palette-options__option--filtered': {
				'.ss__facet-palette-options__option__wrapper': {
					border: 0,
					borderRadius: 0,
					padding: 0,
				},
			},
			'.ss__facet-palette-options__option__wrapper': {
				'&:before, .ss__facet-palette-options__option__palette, .ss__facet-palette-options__option__palette:before': {
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					margin: 'auto',
					borderRadius: paletteRadius,
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
					border: 0,
					padding: 0,
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
				fontSize: custom.utils.convertPxToEm(10),
				color: lightGray,
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
					opacity: 0.3,
				},
				'.ss__facet-palette-options__option__palette': {
					'&:before': {
						opacity: 1,
						margin: '1px',
						borderWidth: props?.layout == 'list' ? `${hasCheckbox ? 2 : 3}px` : `5px`,
						borderRadius: radius ? `calc(${paletteRadius} - 1px)` : '',
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

	// default palette grid styles
	const defaultGridStyles = css({
		gridTemplateColumns: `repeat(auto-fill, minmax(${props?.gridSize ? props.gridSize : '52px'}, 1fr))`,
	});

	// default palette grid horizontal styles
	const defaultGridHorizontalStyles = css({
		gridTemplateColumns: `repeat(auto-fill, minmax(${props?.gridSize ? props.gridSize : '62px'}, 1fr))`,
	});

	// grid palette styles
	const gridStyles = css([
		sharedStyles,
		isHorizontal ? defaultGridHorizontalStyles : defaultGridStyles,
		{
			gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
			alignItems: 'center',
			'.ss__facet-palette-options__option': {
				textAlign: 'center',
				'&, &.ss__facet-palette-options__option--filtered': {
					'.ss__facet-palette-options__option__wrapper': {
						position: 'relative',
						height: 0,
						padding: '0 0 100% 0',
					},
				},
				'.ss__checkbox, .ss__radio': {
					display: 'none',
				},
				'.ss__facet-palette-options__option__value, .ss__facet-palette-options__option__value__count': {
					display: 'block',
					lineHeight: '0.85rem',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				},
				'.ss__facet-palette-options__option__value': {
					fontSize: custom.utils.convertPxToEm(12),
					overflow: 'hidden',
					margin: `${custom.spacing.x1}px 0 0 0`,
				},
				'.ss__facet-palette-options__option__value__count': {
					margin: `${custom.spacing.x1 / 2}px 0 0 0`,
				},
			},
		},
	]);

	// list variables
	const listSize = hasCheckbox ? 16 : 22;
	const listCheckboxSize = 16;
	const listPadding = hasCheckbox ? custom.spacing.x4 + listSize + listCheckboxSize : custom.spacing.x2 + listSize;

	// default palette list styles
	const defaultListStyles = css({
		'&.ss__facet-palette-options--list': {
			display: 'block',
		},
		'.ss__facet-palette-options__option': {
			padding: `${hasCheckbox ? 0 : '2px'} 0 0 ${listPadding}px`,
			'&:last-child': {
				marginBottom: 0,
			},
			'.ss__checkbox, .ss__radio': {
				left: 0,
			},
			'.ss__facet-palette-options__option__wrapper': {
				left: hasCheckbox ? `${listCheckboxSize + custom.spacing.x2}px` : 0,
			},
		},
	});

	// default palette list horizontal styles
	const defaultListHorizontalStyles = css({
		'&.ss__facet-palette-options--list': {
			display: 'flex',
			flexFlow: 'row wrap',
			margin: `0 -${custom.spacing.x2}px`,
		},
		'.ss__facet-palette-options__option': {
			flex: '0 1 auto',
			minWidth: '1px',
			padding: `${hasCheckbox ? 0 : '2px'} ${custom.spacing.x2}px 0 ${listPadding + custom.spacing.x2}px`,
			boxSizing: 'border-box',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			'.ss__checkbox, .ss__radio': {
				left: `${custom.spacing.x2}px`,
				backgroundColor: custom.colors.white,
			},
			'.ss__facet-palette-options__option__wrapper': {
				left: hasCheckbox ? `${listCheckboxSize + custom.spacing.x4}px` : `${custom.spacing.x2}px`,
			},
		},
	});

	// list palette styles
	const listStyles = css([
		sharedStyles,
		isHorizontal ? defaultListHorizontalStyles : defaultListStyles,
		{
			'.ss__facet-palette-options__option': {
				position: 'relative',
				margin: `0 0 ${custom.spacing.x1}px 0`,
				minHeight: hasCheckbox ? '' : `${listSize + 2}px`,
				'.ss__checkbox, .ss__radio, .ss__facet-palette-options__option__wrapper': {
					position: 'absolute',
					top: `${hasCheckbox ? 2 : 0.5}px`,
				},
				'.ss__facet-palette-options__option__wrapper': {
					width: `${listSize}px`,
					height: `${listSize}px`,
					lineHeight: `${listSize}px`,
				},
				'.ss__facet-palette-options__option__value, .ss__facet-palette-options__option__value__count': {
					display: 'inline',
					overflow: 'visible',
					textOverflow: 'unset',
					textAlign: 'left',
					whiteSpace: 'unset',
				},
				'.ss__facet-palette-options__option__value__count': {
					margin: 0,
				},
			},
		},
	]);

	return props?.layout == 'list' ? listStyles : gridStyles;
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps> = {
	default: {
		facetPaletteOptions: {
			themeStyleScript: facetPaletteStyleScript,
			hideIcon: true,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
			layout: 'grid',
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
	},
};
