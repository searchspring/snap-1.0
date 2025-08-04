import { css } from '@emotion/react';
import type { SearchInputProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isSecondary = props?.className?.includes('secondary') ? true : false;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);

	// shared search input styles
	const sharedStyles = css({
		'&.ss__search-input': {
			margin: `0 0 ${custom.spacing.x2}px`,
			border: `1px solid ${custom.colors.gray02}`,
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
				fontSize: custom.utils.convertPxToEm(14),
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
	});

	// default search input styles
	const defaultStyles = css([
		sharedStyles,
		{
			'&.ss__search-input': {
				backgroundColor: `${custom.colors.gray01}`,
			},
		},
	]);

	// secondary search input styles
	const secondaryStyles = css([
		sharedStyles,
		{
			'&.ss__search-input': {
				backgroundColor: `${custom.colors.white}`,
			},
		},
	]);

	return isSecondary ? secondaryStyles : defaultStyles;
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
