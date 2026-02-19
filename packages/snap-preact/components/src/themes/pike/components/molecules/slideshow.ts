import { css } from '@emotion/react';
import type { SlideshowProps } from '../../../../components/Molecules/Slideshow';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Slideshow component
const slideshowStyleScript = (props: SlideshowProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// slideshow styles
	const slideshowStyles = css({
		cursor: 'pointer',
		...custom.styles.boxSizing('slideshow', props?.treePath, props?.name),
	});

	return slideshowStyles;
};

// Slideshow component props
export const slideshow: ThemeComponent<'slideshow', SlideshowProps> = {
	default: {
		slideshow: {
			themeStyleScript: slideshowStyleScript,
		},
	},
};
