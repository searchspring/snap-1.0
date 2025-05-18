import { css } from '@emotion/react';
import type { LayoutSelectorProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = (props: LayoutSelectorProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const backgroundColor = new Color(custom.colors.gray02).lighten(0.055);
	const activeColor = new Color(variables?.colors?.primary || custom.colors.black);
	const activeIconColor = activeColor.isDark() || activeColor.hex() == '#00AEEF' ? Color('#ffffff') : Color('#000000');

	// dropdown styles
	const dropdownStyles = css({
		'.ss__dropdown': {
			'.ss__dropdown__button .ss__button__content': {
				gap: `${custom.spacing.x2}px`,
			},
		},
	});

	// list styles
	const listStyles = css({
		'.ss__list__options': {
			display: 'flex',
			'.ss__list__option': {
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: backgroundColor.hex(),
				height: `${custom.sizes.height}px`,
				lineHeight: `${custom.sizes.height}px`,
				padding: `0 ${custom.spacing.x2}px`,
				margin: 0,
			},
			'.ss__list__option--selected': {
				borderColor: activeColor.hex(),
				backgroundColor: activeColor.hex(),
				color: activeIconColor.hex(),
				'&, *': {
					cursor: 'text',
				},
			},
		},
	});

	if (props?.type == 'dropdown') {
		return dropdownStyles;
	} else if (props?.type == 'list') {
		return listStyles;
	} else {
		return css({});
	}
};

// LayoutSelector component props
export const layoutSelector: ThemeComponent<'layoutSelector', LayoutSelectorProps> = {
	default: {
		props: {
			themeStyleScript: layoutSelectorStyleScript,
			type: 'list',
		},
		components: {
			'*layoutSelector select': {
				hideSelection: true,
				separator: '',
			},
			'*layoutSelector list': {
				hideTitleText: true,
			},
			'*layoutSelector radioList': {
				hideTitleText: true,
			},
		},
	},
};
