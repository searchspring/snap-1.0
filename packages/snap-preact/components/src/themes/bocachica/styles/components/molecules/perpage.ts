import { css, PerPageProps } from '../../../../../index';

// CSS in JS style script for the PerPage component
const perPageStyleScript = ({ theme }: PerPageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// PerPage component props
export const perPage: Partial<PerPageProps> = {
	styleScript: perPageStyleScript,
};