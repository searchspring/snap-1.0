import { css } from '@emotion/react';
import type { SearchInputProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const desktopBp = variables?.breakpoints?.mobile || 767;

	return css({
		'&.ss__search-input': {
			margin: `0 0 ${custom.spacing.x2}px`,
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: `${custom.colors.gray01}`,
			'.ss__icon, .ss__search-input__input': {
				minWidth: '1px',
				padding: 0,
			},
			'.ss__icon': {
				flex: '0 1 auto',
				margin: `0 0 0 ${custom.spacing.x2}px`,
			},
			'.ss__search-input__input': {
				flex: '1 1 0%',
				margin: `0 ${custom.spacing.x2}px`,
				backgroundColor: `inherit`,
				minHeight: '1px',
				height: `${custom.sizes.height}px`,
				lineHeight: `${custom.sizes.height}px`,
				fontSize: custom.utils.convertPxToEm(16),
				color: variables?.colors?.text,
				'&::-webkit-input-placeholder': {
					color: lightGray,
				},
				'&::-ms-input-placeholder': {
					color: lightGray,
				},
				'&::placeholder': {
					color: lightGray,
				},
			},
		},
		[`@media (min-width: ${desktopBp + 1}px)`]: {
			'&.ss__search-input': {
				'.ss__search-input__input': {
					fontSize: custom.utils.convertPxToEm(14),
				},
			},
		},
	});
};

// SearchInput component props
export const searchInput: ThemeComponent<'searchInput', SearchInputProps> = {
	default: {
		searchInput: {
			themeStyleScript: searchInputStyleScript,
		},
		'searchInput icon': {
			size: `${custom.sizes.icon14}px`,
		},
	},
};
