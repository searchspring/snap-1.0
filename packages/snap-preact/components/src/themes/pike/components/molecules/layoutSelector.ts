import { css } from '@emotion/react';
import type { LayoutSelectorProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
// import { customVariables } from '../../custom';
// import Color from 'color';

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = (props: LayoutSelectorProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	//const backgroundColor = new Color(customVariables.colors.gray02).lighten(0.055);
	//const activeColor = new Color(variables?.colors?.primary || customVariables.colors.black);
	//const activeIconColor = activeColor.isDark() || activeColor.hex() == '#00AEEF' ? Color('#ffffff') : Color('#000000');

	return css({
		// '&.ss__list' : {
		// 	'.ss__list__options': {
		// 		'.ss__list__option': {
		// 			border: `1px solid ${customVariables.colors.gray02}`,
		// 			backgroundColor: backgroundColor.hex(),
		// 			height: `${customVariables.sizes.height}px`,
		// 			lineHeight: `${customVariables.sizes.height}px`,
		// 			padding: `0 ${customVariables.spacing.x2}px`,
		// 		},
		// 		'.ss__list__option--selected': {
		// 			borderColor: activeColor.hex(),
		// 			backgroundColor: activeColor.hex(),
		// 			color: activeIconColor.hex(),
		// 			'&, *': {
		// 				cursor: 'text',
		// 			}
		// 		}
		// 	}
		// },
		// '&.ss__radio-list': {
		// 	'.ss__radio-list__options-wrapper': {
		// 		display: 'flex',
		// 		flexFlow: 'row wrap',
		// 		alignItems: 'center',
		// 		gap: `${customVariables.spacing.x2}px`,
		// 		'.ss__radio-list__option': {
		// 			padding: 0,
		// 		}
		// 	},
		// },
		// '&.ss__select': {
		// 	'.ss__select__dropdown .ss__select__dropdown__button .ss__button__content': {
		// 		gap: `${customVariables.spacing.x2}px`,
		// 	},
		// },
	});
};

// LayoutSelector component props
export const layoutSelector: ThemeComponent<'layoutSelector', LayoutSelectorProps> = {
	default: {
		props: {
			themeStyleScript: layoutSelectorStyleScript,
			type: 'radio',
		},
		components: {
			// '*layoutSelector list': {
			// 	hideTitleText: true,
			// },
			// '*layoutSelector list icon': {
			// 	size: '16px',
			// },
			// '*layoutSelector radioList': {
			// 	hideTitleText: true,
			// },
			// '*layoutSelector radioList icon': {
			// 	size: '16px',
			// },
			// '*layoutSelector select': {
			// 	hideSelection: true,
			// 	separator: '',
			// },
		},
	},
};
