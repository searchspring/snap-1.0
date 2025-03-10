import { css } from '@emotion/react';
import type { ImageProps } from '../../../../components/Atoms/Image';

// CSS in JS style script for the Image component
const imageStyleScript = ({ visibility, theme }: ImageProps & { visibility: React.CSSProperties['visibility'] }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({
		borderRadius: '20px',
		overflow: 'hidden',
		'& img': {
			visibility: visibility,
		},
	});
};

// Image component props
export const image: ThemeComponentProps<ImageProps> = {
	default: {
		themeStyleScript: imageStyleScript,
	},
	mobile: {},
	tablet: {},
	desktop: {},
};
