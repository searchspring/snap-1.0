import { css } from '@emotion/react';
import type { GridProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Grid component
const gridStyleScript = (props: Partial<GridProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary);
	const fontColor = activeColor.isDark() || activeColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	return css({
		'.ss__grid__title': {
			margin: `0 0 ${custom.spacing.x1}px 0`,
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			lineHeight: 1,
		},
		'.ss__grid__options': {
			gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
			gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
			alignItems: 'center',
			'&:after': {
				display: 'none',
			},
			'.ss__grid__option': {
				position: 'relative',
				height: 0,
				paddingBottom: '100%',
				color: variables?.colors?.text,
				'&, &.ss__grid__option--selected': {
					border: 0,
				},
				'&, &:after, .ss__grid__option__label': {
					display: 'block',
					boxSizing: 'border-box',
				},
				'&:after, .ss__grid__option__label': {
					position: 'absolute',
					margin: 'auto',
				},
				'&:after': {
					content: '""',
					display: 'block',
					width: '100%',
					height: '100%',
					border: `1px solid ${custom.colors.gray02}`,
				},
				'.ss__grid__option__label': {
					top: '50%',
					left: 0,
					right: 0,
					zIndex: 2,
					transform: 'translateY(-50%)',
					maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
					maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
					overflow: 'hidden',
					textAlign: 'center',
					'&, &.ss__grid__option__label--smaller': {
						fontSize: custom.utils.convertPxToEm(12),
					},
				},
				'&:not([style])': {
					'&:after': {
						backgroundColor: custom.colors.gray01,
					},
				},
			},
			'.ss__grid__option--selected': {
				fontWeight: custom.fonts.weight01,
				'&:after': {
					borderColor: darkGray,
				},
				'&:not([style])': {
					color: fontColor.hex(),
					'&:after': {
						backgroundColor: activeColor.hex(),
						borderColor: activeColor.hex(),
					},
				},
			},
		},
	});
};

// Grid component props
export const grid: ThemeComponent<'grid', GridProps> = {
	default: {
		grid: {
			themeStyleScript: gridStyleScript,
			//gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
			titleText: 'this is title',
			hideLabels: false,
			hideShowLess: false,
		},
	},
};
