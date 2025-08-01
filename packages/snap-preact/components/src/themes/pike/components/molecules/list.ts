import { css } from '@emotion/react';
import type { ListProps } from '../../../../components/Molecules/List';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the List component
const listStyleScript = (props: ListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&, .ss__list__options': {
			display: 'block',
		},
		'.ss__list__title, .ss__list__options .ss__list__option': {
			margin: `0 0 ${custom.spacing.x1}px 0`,
		},
		'.ss__list__title': {
			display: 'block',
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			lineHeight: 1,
		},
		'.ss__list__options': {
			'.ss__list__option': {
				gap: `${custom.spacing.x2}px`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
			'.ss__list__option--selected': {
				fontWeight: custom.fonts.weight01,
				color: variables?.colors?.primary,
			},
		},
	});
};

// List component props
export const list: ThemeComponent<'list', ListProps> = {
	default: {
		list: {
			themeStyleScript: listStyleScript,
		},
	},
};
