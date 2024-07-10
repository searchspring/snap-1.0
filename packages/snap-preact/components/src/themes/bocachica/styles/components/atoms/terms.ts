import { css, TermsProps } from '../../../../../index';

// CSS in JS style script for the Terms component
const termsStyleScript = ({ theme }: TermsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Terms component props
export const terms: Partial<TermsProps> = {
	styleScript: termsStyleScript,
};