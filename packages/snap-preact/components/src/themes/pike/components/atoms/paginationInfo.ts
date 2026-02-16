import { css } from '@emotion/react';
import type { PaginationInfoProps } from '../../../../components/Atoms/PaginationInfo';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationInfoStyleScript = (props: PaginationInfoProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// pagination info styles
	const paginationInfoStyles = css([
		{
			...custom.styles.headerText(variables?.colors?.secondary),
			...custom.styles.boxSizing('paginationInfo', props?.treePath),
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
