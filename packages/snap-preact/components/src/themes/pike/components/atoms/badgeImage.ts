import { css } from '@emotion/react';
import type { BadgeImageProps } from '../../../../components/Atoms/BadgeImage';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeImage component
const badgeImageStyleScript = (props: BadgeImageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([
		custom.styles.boxSizing,
		{
			lineHeight: 0,
		},
	]);
};

// BadgeImage component props
export const badgeImage: ThemeComponent<'badgeImage', BadgeImageProps> = {
	default: {
		badgeImage: {
			themeStyleScript: badgeImageStyleScript,
		},
	},
};
