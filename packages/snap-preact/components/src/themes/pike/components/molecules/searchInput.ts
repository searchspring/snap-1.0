import { css } from '@emotion/react';
import type { SearchInputProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&.ss__search-input': {
			margin: `0 0 ${custom.spacing.x4}px`,
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: `${custom.colors.gray01}`,
			'.ss__icon': {
				padding: `0 0 0 ${custom.spacing.x2}px`,
			},
			'.ss__search-input__input': {
				padding: `0 ${custom.spacing.x2}px`,
				backgroundColor: `inherit`,
				color: variables?.colors?.text,
				height: `${custom.sizes.height}px`,
				lineHeight: `${custom.sizes.height}px`,
				'&::-webkit-input-placeholder': {
					opacity: 0.5,
				},
				'&::-ms-input-placeholder': {
					opacity: 0.5,
				},
				'&::placeholder': {
					opacity: 0.5,
				},
			},
		},
	});
};

// SearchInput component props
export const searchInput: ThemeComponent<'searchInput', SearchInputProps> = {
	default: {
		props: {
			themeStyleScript: searchInputStyleScript,
		},
	},
};
