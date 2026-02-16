import { css } from '@emotion/react';
import type { InlineBannerProps } from '../../../../components/Atoms/Merchandising/InlineBanner';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the InlineBanner component
const inlineBannerStyleScript = (props: InlineBannerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// inline banner styles
	const inlineBannerStyles = css([
		{
			...custom.styles.boxSizing('inlineBanner', props?.treePath),
		},
	]);

	return inlineBannerStyles;
};

// InlineBanner component props
export const inlineBanner: ThemeComponent<'inlineBanner', InlineBannerProps> = {
	default: {
		inlineBanner: {
			themeStyleScript: inlineBannerStyleScript,
		},
	},
};
