import { css } from '@emotion/react';
import type { SelectProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Select component
const selectStyleScript = (props: SelectProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(customVariables.colors.gray02).lighten(0.055);
	const spacingHalf = customVariables.sizes.spacing / 2;
	const spacingQuarter = customVariables.sizes.spacing / 4;

	return css(
		props?.native
			? {
					flexFlow: 'row nowrap',
					display: 'flex',
					alignItems: 'center',
					gap: `${spacingQuarter}px`,
					padding: `0 ${spacingHalf}px`,
					height: `${customVariables.sizes.height}px`,
					lineHeight: `${customVariables.sizes.height}px`,
					border: `1px solid ${customVariables.colors.gray02}`,
					color: variables?.colors?.text,
					'&, .ss__select__select': {
						backgroundColor: backgroundColor.hex(),
					},
					'.ss__select__label': {
						fontWeight: customVariables.fonts.weight01,
					},
					'.ss__select__select': {
						border: `1px solid ${backgroundColor.hex()}`,
						color: 'inherit',
						cursor: 'pointer',
					},
			  }
			: {
					'.ss__dropdown__button .ss__button, .ss__dropdown__content .ss__select__select': {
						backgroundColor: backgroundColor.hex(),
						border: `1px solid ${customVariables.colors.gray02}`,
						color: variables?.colors?.text,
					},
					'.ss__dropdown__button': {
						'.ss__button': {
							padding: `0 ${spacingHalf}px`,
							'.ss__select__selection': {
								paddingRight: `${spacingQuarter}px`,
								fontWeight: 'normal',
							},
							'.ss__select__dropdown__button__icon': {
								transition: 'transform ease .5s',
							},
						},
					},
					'.ss__dropdown__content': {
						marginTop: `${spacingHalf}px`,
						'.ss__select__select': {
							padding: `${spacingHalf}px`,
							'.ss__select__select__option': {
								padding: 0,
								margin: `0 0 ${spacingQuarter}px 0`,
								color: 'inherit',
								'&:last-child': {
									marginButtom: '0',
								},
								'&:hover': {
									backgroundColor: 'transparent',
								},
							},
							'.ss__select__select__option--selected': {
								fontWeight: customVariables.fonts.weight01,
								color: variables?.colors?.primary || customVariables.colors.black,
							},
						},
					},
					'.ss__dropdown--open': {
						'.ss__dropdown__button': {
							'.ss__button': {
								'.ss__select__dropdown__button__icon': {
									transform: 'rotate(180deg)',
								},
							},
						},
					},
			  }
	);
};

// Select component props
export const select: ThemeComponent<'select', SelectProps> = {
	default: {
		props: {
			themeStyleScript: selectStyleScript,
			iconOpen: customVariables?.icons?.arrowDown,
			iconClose: customVariables.icons.arrowDown,
		},
	},
};
