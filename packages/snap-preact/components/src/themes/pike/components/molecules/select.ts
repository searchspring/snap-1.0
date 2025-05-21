import { css } from '@emotion/react';
import type { SelectProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Select component
const selectStyleScript = (props: SelectProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(custom.colors.gray02).lighten(0.055);
	const nativeIcon = `<svg class="ss__icon ss__icon--chevron-down" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" fill="${
		variables?.colors?.text || '#515151'
	}"><path d="M55.348 19.573l-25.785 25.75c-0.869 0.869-2.259 0.869-3.128 0l-25.785-25.75c-0.869-0.869-0.869-2.293 0-3.162l5.768-5.734c0.869-0.869 2.259-0.869 3.128 0l18.452 18.452 18.452-18.452c0.869-0.869 2.259-0.869 3.128 0l5.768 5.734c0.869 0.869 0.869 2.293 0 3.162z"></path></svg>`;

	// shared styles for select menus
	const sharedStyles = css({
		border: `1px solid ${custom.colors.gray02}`,
		color: variables?.colors?.text,
		backgroundColor: backgroundColor.hex(),
	});

	// default styles
	const defaultStyles = css([
		{
			'.ss__dropdown': {
				'.ss__dropdown__button .ss__button, .ss__dropdown__content .ss__select__select': {
					...sharedStyles,
				},
				'.ss__dropdown__button': {
					'.ss__button': {
						padding: `0 ${custom.spacing.x2}px`,
						'.ss__select__selection': {
							paddingRight: `${custom.spacing.x1}px`,
							fontWeight: 'normal',
						},
						'.ss__select__dropdown__button__icon': {
							transition: 'transform ease .5s',
						},
					},
				},
				'.ss__dropdown__content': {
					marginTop: `${custom.spacing.x2}px`,
					'.ss__select__select': {
						padding: `${custom.spacing.x2}px`,
						'.ss__select__select__option': {
							padding: 0,
							margin: `0 0 ${custom.spacing.x2}px 0`,
							color: 'inherit',
							'&:last-child': {
								marginBottom: '0',
							},
							'&:hover': {
								backgroundColor: 'transparent',
							},
						},
						'.ss__select__select__option--selected': {
							fontWeight: custom.fonts.weight01,
							color: variables?.colors?.primary,
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
		sharedStyles,
		{
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			gap: `${custom.spacing.x1}px`,
			padding: `0 ${custom.spacing.x4 + custom.sizes.icons}px 0 ${custom.spacing.x2}px`,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			backgroundImage: `url(data:image/svg+xml;base64,${btoa(nativeIcon)})`,
			backgroundPosition: `right ${custom.spacing.x2}px center`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: `${custom.sizes.icons}px ${custom.sizes.icons}px`,
			'.ss__select__label': {
				fontWeight: custom.fonts.weight01,
			},
			'.ss__select__select': {
				backgroundColor: 'transparent',
				border: 'none',
				appearance: 'none',
				color: 'inherit',
				cursor: 'pointer',
				'&[disabled]': {
					cursor: 'not-allowed',
				},
				'&::-ms-expand': {
					display: 'none',
				},
			},
		},
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Select component props
export const select: ThemeComponent<'select', SelectProps> = {
	default: {
		props: {
			themeStyleScript: selectStyleScript,
			iconOpen: custom.icons.arrowDown,
			iconClose: custom.icons.arrowDown,
		},
		components: {
			'*select dropdown button': {
				native: false,
			},
			'*select dropdown icon': {
				size: '12px',
			},
		},
	},
};
