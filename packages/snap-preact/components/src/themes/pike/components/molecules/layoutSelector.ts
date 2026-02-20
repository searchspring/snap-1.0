import { css } from '@emotion/react';
import type { LayoutSelectorProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const activeIconColor = activeColors[1];

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = (props: LayoutSelectorProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		...custom.styles.boxSizing('layoutSelector', props?.treePath, props?.name),
	});

	// dropdown styles
	const dropdownStyles = css([
		sharedStyles,
		{
			'.ss__dropdown': {
				'.ss__dropdown__button .ss__button__content .ss__select__label': {
					paddingRight: `${custom.spacing.x1 / 2}px`,
				},
			},
		},
	]);

	// radio styles
	const radioStyles = css([sharedStyles]);

	// list styles
	const listStyles = css([
		sharedStyles,
		{
			'.ss__list__options': {
				display: 'flex',
				'.ss__list__option': {
					...custom.styles.box(variables?.colors?.text, `0 ${custom.spacing.x2}px`),
					margin: 0,
					height: `${custom.sizes.height}px`,
					lineHeight: `${custom.sizes.height}px`,
				},
				'.ss__list__option--selected': {
					'&, &:hover': {
						borderColor: activeColor,
						backgroundColor: activeColor,
						color: activeIconColor,
					},
					'&, *': {
						cursor: 'text',
					},
				},
			},
		},
	]);

	if (props?.type == 'list') {
		return listStyles;
	} else if (props?.type == 'radio') {
		return radioStyles;
	} else {
		return dropdownStyles;
	}
};

// LayoutSelector component props
export const layoutSelector: ThemeComponent<'layoutSelector', LayoutSelectorProps> = {
	default: {
		layoutSelector: {
			themeStyleScript: layoutSelectorStyleScript,
		},
		'layoutSelector select': {
			hideSelection: false,
		},
		'layoutSelector list': {
			hideTitleText: true,
			hideOptionLabels: true,
		},
		'layoutSelector radioList': {
			hideTitleText: true,
		},
	},
};
