import { css } from '@emotion/react';
import type { GridProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// grid size
const gridSize = 52;

// CSS in JS style script for the Grid component
const gridStyleScript = (props: Partial<GridProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary);
	const fontColor = activeColor.isDark() || activeColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	// light colors selector
	const gridPrefix = '&.ss__grid__option-value';
	const lightColors = `${gridPrefix}--white, ${gridPrefix}--ivory, ${gridPrefix}--clear, ${gridPrefix}--transparent`;

	return css({
		'.ss__grid__title': {
			margin: `0 0 ${custom.spacing.x1}px 0`,
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			lineHeight: 1,
		},
		'.ss__grid__options': {
			gridTemplateColumns: `repeat(auto-fill, minmax(${gridSize}px, 1fr))`,
			gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
			alignItems: 'center',
			'&:after': {
				display: 'none',
			},
			'.ss__grid__option': {
				position: 'relative',
				height: '100%',
				aspectRatio: 1,
				color: variables?.colors?.text,
				overflow: 'hidden',
				'&, &.ss__grid__option--selected': {
					border: 0,
				},
				'&, &:after, .ss__grid__option__label, .ss__grid__show-more': {
					boxSizing: 'border-box',
				},
				'&:after, .ss__grid__option__label, .ss__grid__show-more': {
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
					opacity: 0,
				},
				'.ss__grid__option__label, .ss__grid__show-more': {
					position: 'relative',
					zIndex: 2,
					maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
					maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
					overflow: 'hidden',
					'&, &.ss__grid__option__label--smaller': {
						fontSize: custom.utils.convertPxToEm(12),
					},
				},
				[`&:not([style]), ${lightColors}`]: {
					'&:after': {
						opacity: 1,
					},
				},
				'&:not([style])': {
					'&:after': {
						backgroundColor: custom.colors.gray01,
					},
				},
				'&[style*="url"]': {
					backgroundRepeat: 'no-repeat !important',
					backgroundSize: 'cover !important',
					backgroundPosition: 'center !important',
					transition: 'transform 0.5s ease-in-out',
					'&:hover': {
						transform: 'scale(1.5)',
					},
				},
			},
			'.ss__grid__option--selected': {
				fontWeight: custom.fonts.weight01,
				color: fontColor.hex(),
				'&:after': {
					borderColor: custom.colors.black,
					opacity: 0.3,
				},
				'&:not([style])': {
					'&:after': {
						backgroundColor: activeColor.hex(),
						borderColor: activeColor.hex(),
					},
				},
				[lightColors]: {
					color: variables?.colors?.text,
					'&:after': {
						borderColor: darkGray,
					},
				},
				'&[style*="url"]': {
					'&:hover': {
						transform: 'none',
					},
				},
			},
			'.ss__grid__option.ss__grid__option--unavailable': {
				opacity: 1,
				cursor: 'not-allowed',
				pointerEvents: 'none',
				'&:before': {
					top: 0,
					bottom: 0,
					zIndex: 3,
					margin: 'auto',
					borderColor: darkGray,
					outline: 0,
				},
			},
			'.ss__grid__show-more-wrapper': {
				alignItems: 'flex-start',
				'&:after': {
					display: 'none',
				},
			},
		},
		'.ss__grid__show-more-wrapper': {
			'&:not(.ss__grid__option)': {
				margin: `${custom.spacing.x2}px 0 0 0`,
			},
			'&, .ss__grid__show-more': {
				cursor: 'pointer',
			},
			'.ss__grid__show-more': {
				fontSize: custom.utils.convertPxToEm(12),
				fontWeight: custom.fonts.weight01,
				color: variables?.colors?.primary,
			},
		},
	});
};

// Grid component props
export const grid: ThemeComponent<'grid', GridProps> = {
	default: {
		grid: {
			themeStyleScript: gridStyleScript,
			gapSize: `${custom.spacing.x1}px`,
			hideLabels: false,
		},
	},
};
