import { css } from '@emotion/react';
import type { DropdownProps } from '../../../../components/Atoms/Dropdown';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Dropdown component
const dropdownStyleScript = (props: DropdownProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([
		custom.styles.boxSizing,
		{
			width: 'auto',
			'&.ss__dropdown__portal.ss__select__dropdown': {
				'.ss__dropdown__content': {
					marginTop: `${custom.spacing.x2}px`,
					padding: `${custom.spacing.x2}px`,
					border: `1px solid ${custom.colors.gray02}`,
					color: variables?.colors?.text,
					backgroundColor: custom.colors.gray01,
					'.ss__select__select': {
						margin: 0,
						border: 0,
						backgroundColor: 'transparent',
						'.ss__select__select__option': {
							gap: `${custom.spacing.x2}px`,
							padding: 0,
							margin: `0 0 ${custom.spacing.x1}px 0`,
							color: 'inherit',
							'&:last-of-type': {
								marginBottom: '0',
							},
							'&:hover': {
								backgroundColor: 'transparent',
							},
							'a, span': {
								cursor: 'pointer',
							},
						},
						'.ss__select__select__option--selected': {
							fontWeight: custom.fonts.weight01,
							color: variables?.colors?.primary,
						},
					},
				},
			},
			'&.ss__dropdown--open': {
				'.ss__dropdown__content': {
					zIndex: 5,
				},
			},
			'.ss__dropdown__content': {
				minWidth: '1px',
				left: 0,
				right: 0,
				zIndex: -1,
			},
		},
	]);
};

// Dropdown component props
export const dropdown: ThemeComponent<'dropdown', DropdownProps> = {
	default: {
		dropdown: {
			themeStyleScript: dropdownStyleScript,
		},
	},
};
