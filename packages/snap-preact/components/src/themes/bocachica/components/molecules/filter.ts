import { css } from '@emotion/react';
import type { FilterProps } from '../../../../components/Molecules/Filter';
import Color from 'color';

// CSS in JS style script for the Filter component
const filterStyleScript = ({ theme }: FilterProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;
	const backgroundColor = new Color(variables?.colors.primary);
	const backgroundTextColor = backgroundColor.isDark() ? '#fff' : '#000';

	return css({
		textDecoration: 'none',
		display: 'inline-flex',
		'& .ss__filter__button': {
			alignItems: 'center',
			backgroundColor: backgroundColor.hex(),
			color: backgroundTextColor,

			'& .ss__filter__button__icon': {
				fill: backgroundTextColor,
				stroke: backgroundTextColor,
				margin: '0 5px 0 0',
			},
		},
		'& .ss__filter__label': {
			marginRight: '5px',
			fontWeight: 'bold',
		},
	});
};

// Filter component props
export const filter: Partial<FilterProps> = {
	themeStyleScript: filterStyleScript,
};
