import { css } from '@emotion/react';
import type { ImageProps } from '../../../../components/Atoms/Image';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Image component
const imageStyleScript = (props: ImageProps & { visibility: React.CSSProperties['visibility'] }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// image styles
	const imageStyles = css([
		{
			...custom.styles.boxSizing('image', props?.treePath, props?.name),
			'&, img': {
				lineHeight: 0,
			},
			img: {
				border: 0,
			},
			'&.ss__result__image': {
				position: 'relative',
				height: 0,
				padding: '0 0 100% 0',
				overflow: 'hidden',
				'&, img': {
					display: 'block',
				},
				img: {
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					margin: 'auto',
					width: '100%',
					height: '100%',
					objectPosition: 'center center',
				},
			},
		},
	]);

	return imageStyles;
};

// Image component props
export const image: ThemeComponent<'image', ImageProps> = {
	default: {
		image: {
			themeStyleScript: imageStyleScript,
		},
	},
};
