import { css } from '@emotion/react';
import type { PaginationInfoProps } from '../../../../components/Atoms/PaginationInfo';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationInfoStyleScript = ({ theme }: PaginationInfoProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	// pagination info styles
	const paginationInfoStyles = css([
		{
			...custom.styles.headerText(variables?.colors?.secondary),
			...custom.styles.boxSizing(),
		},
	]);

	return paginationInfoStyles;
};

// PaginationInfo component props
export const paginationInfo: ThemeComponent<'paginationInfo', PaginationInfoProps> = {
	default: {
		paginationInfo: {
			themeStyleScript: paginationInfoStyleScript,
		},
	},
};
