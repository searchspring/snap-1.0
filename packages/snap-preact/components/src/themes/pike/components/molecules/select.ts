import { css } from '@emotion/react';
import type { SelectProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Select component
const selectStyleScript = (props: SelectProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// default styles
	const defaultStyles = css([
		{
			display: 'block',
			...custom.styles.boxSizing(),
			'.ss__dropdown': {
				'.ss__dropdown__button .ss__button, .ss__dropdown__content': {
					...custom.styles.box(variables?.colors?.text),
				},
				'.ss__dropdown__button': {
					'.ss__button': {
						paddingTop: 0,
						paddingBottom: 0,
						textAlign: 'left',
						'.ss__button__content': {
							'.ss__select__selection__icon': {
								margin: 0,
							},
							'.ss__select__selection': {
								flex: '1 1 0%',
								paddingRight: `${custom.spacing.x1}px`,
								fontWeight: 'normal',
							},
							'.ss__select__dropdown__button__icon': {
								transition: 'transform ease 0.5s',
							},
						},
					},
				},
				'.ss__dropdown__content': {
					marginTop: `${custom.spacing.x2}px`,
					'.ss__select__select': {
						margin: 0,
						padding: 0,
						border: 0,
						backgroundColor: 'transparent',
						'.ss__select__select__option': {
							color: 'inherit',
							gap: `${custom.spacing.x2}px`,
							padding: 0,
							margin: `0 0 ${custom.spacing.x1}px 0`,
							'&:last-of-type': {
								marginBottom: '0',
							},
							'&:hover': {
								backgroundColor: 'transparent',
								fontWeight: 'normal',
							},
							'a, span': {
								cursor: 'pointer',
							},
						},
						'.ss__select__select__option--selected': {
							...custom.styles.activeText(variables?.colors?.primary),
						},
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
		},
	]);

	// native styles
	const nativeStyles = css([
		{
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			gap: `${custom.spacing.x1}px`,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			...custom.styles.box(variables?.colors?.text),
			paddingTop: 0,
			paddingBottom: 0,
			...custom.styles.boxSizing(),
			'.ss__select__label, .ss__select__select': {
				...custom.styles.fontSize(14),
			},
			'.ss__select__label': {
				fontWeight: custom.fonts.weight01,
			},
			'.ss__select__select': {
				flex: '1 1 0%',
				padding: `0 ${custom.spacing.x1}px 0 0`,
				backgroundColor: 'transparent',
				height: '100%',
				lineHeight: '100%',
				border: 'none',
				appearance: 'none',
				color: 'inherit',
				cursor: 'pointer',
				'&::-ms-expand': {
					display: 'none',
				},
				'&[disabled]': {
					...custom.styles.disabled(),
				},
			},
			'.ss__select__dropdown__button__icon': {
				width: `${custom.sizes.icon12}px`,
				height: `${custom.sizes.icon12}px`,
			},
		},
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Select component props
export const select: ThemeComponent<'select', SelectProps> = {
	default: {
		select: {
			themeStyleScript: selectStyleScript,
			iconOpen: custom.icons.arrowDown,
			iconClose: custom.icons.arrowDown,
		},
		'select icon.open': {
			size: `${custom.sizes.icon12}px`,
		},
		'select dropdown button icon': {
			size: `${custom.sizes.icon12}px`,
		},
	},
};
