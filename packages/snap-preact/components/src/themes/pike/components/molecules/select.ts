import { css } from '@emotion/react';
import type { SelectProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';
//import Color from 'color';

// CSS in JS style script for the Select component
const selectStyleScript = (props: SelectProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	// const backgroundColor = new Color(customVariables.colors.gray02).lighten(0.055);
	// const nativeIcon = `<svg class="ss__icon ss__icon--chevron-down" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" fill="${variables?.colors?.text || '#515151'}"><path d="M55.348 19.573l-25.785 25.75c-0.869 0.869-2.259 0.869-3.128 0l-25.785-25.75c-0.869-0.869-0.869-2.293 0-3.162l5.768-5.734c0.869-0.869 2.259-0.869 3.128 0l18.452 18.452 18.452-18.452c0.869-0.869 2.259-0.869 3.128 0l5.768 5.734c0.869 0.869 0.869 2.293 0 3.162z"></path></svg>`;

	// // shared styles for select menus
	// const sharedStyles = css({
	// 	border: `1px solid ${customVariables.colors.gray02}`,
	// 	color: variables?.colors?.text,
	// 	backgroundColor: backgroundColor.hex(),
	// });

	return css({});

	// return css(
	// 	props?.native ? {
	// 		// display: 'flex',
	// 		// flexFlow: 'row nowrap',
	// 		// alignItems: 'center',
	// 		// gap: `${customVariables.spacing.x1}px`,
	// 		// padding: `0 ${customVariables.spacing.x4 + customVariables.sizes.icons}px 0 ${customVariables.spacing.x2}px`,
	// 		// height: `${customVariables.sizes.height}px`,
	// 		// lineHeight: `${customVariables.sizes.height}px`,
	// 		// ...sharedStyles,
	// 		// backgroundImage: `url(data:image/svg+xml;base64,${btoa(nativeIcon)})`,
	// 		// backgroundPosition: `right ${customVariables.spacing.x2}px center`,
	// 		// backgroundRepeat: 'no-repeat',
	// 		// backgroundSize: `${customVariables.sizes.icons}px ${customVariables.sizes.icons}px`,
	// 		// '.ss__select__label': {
	// 		// 	fontWeight: customVariables.fonts.weight01,
	// 		// },
	// 		// '.ss__select__select': {
	// 		// 	backgroundColor: 'transparent',
	// 		// 	border: 'none',
	// 		// 	appearance: 'none',
	// 		// 	color: 'inherit',
	// 		// 	cursor: 'pointer',
	// 		// 	'&[disabled]': {
	// 		// 		cursor: 'not-allowed',
	// 		// 	},
	// 		// 	'&::-ms-expand': {
	// 		// 		display: 'none',
	// 		// 	}
	// 		// },
	// 	} : {
	// 		// '.ss__dropdown__button .ss__button, .ss__dropdown__content .ss__select__select': {
	// 		// 	...sharedStyles,
	// 		// },
	// 		// '.ss__dropdown__button': {
	// 		// 	'.ss__button': {
	// 		// 		padding: `0 ${customVariables.spacing.x2}px`,
	// 		// 		'.ss__select__selection': {
	// 		// 			paddingRight: `${customVariables.spacing.x1}px`,
	// 		// 			fontWeight: 'normal',
	// 		// 		},
	// 		// 		'.ss__select__dropdown__button__icon': {
	// 		// 			transition: 'transform ease .5s',
	// 		// 		},
	// 		// 	},
	// 		// },
	// 		// '.ss__dropdown__content': {
	// 		// 	marginTop: `${customVariables.spacing.x2}px`,
	// 		// 	'.ss__select__select': {
	// 		// 		padding: `${customVariables.spacing.x2}px`,
	// 		// 		'.ss__select__select__option': {
	// 		// 			padding: 0,
	// 		// 			margin: `0 0 ${customVariables.spacing.x1}px 0`,
	// 		// 			color: 'inherit',
	// 		// 			'&:last-child': {
	// 		// 				marginButtom: '0',
	// 		// 			},
	// 		// 			'&:hover': {
	// 		// 				backgroundColor: 'transparent',
	// 		// 			},
	// 		// 		},
	// 		// 		'.ss__select__select__option--selected': {
	// 		// 			fontWeight: customVariables.fonts.weight01,
	// 		// 			color: variables?.colors?.primary || customVariables.colors.black,
	// 		// 		},
	// 		// 	},
	// 		// },
	// 		// '.ss__dropdown--open': {
	// 		// 	'.ss__dropdown__button': {
	// 		// 		'.ss__button': {
	// 		// 			'.ss__select__dropdown__button__icon': {
	// 		// 				transform: 'rotate(180deg)',
	// 		// 			},
	// 		// 		},
	// 		// 	},
	// 		// },
	// 	}
	// );
};

// Select component props
export const select: ThemeComponent<'select', SelectProps> = {
	default: {
		props: {
			themeStyleScript: selectStyleScript,
			iconOpen: customVariables.icons.arrowDown,
			iconClose: customVariables.icons.arrowDown,
		},
	},
};
