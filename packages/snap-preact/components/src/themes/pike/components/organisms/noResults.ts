import { css } from '@emotion/react';
import type { NoResultsProps } from '../../../../components/Organisms/NoResults';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the NoResults component
const noResultsStyleScript = (props: NoResultsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'h1, h2, h3, h4, h5, h6, ul': {
			margin: `0 0 ${custom.spacing.x4}px 0`,
		},
		'h1, h2, h3, h4, h5, h6': {
			fontSize: custom.utils.convertPxToEm(20),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'ul li, p': {
			color: variables?.colors?.text,
		},
		a: {
			color: variables?.colors?.primary,
			'&:hover': {
				color: variables?.colors?.secondary,
			},
		},
		ul: {
			padding: 0,
			marginLeft: `${custom.spacing.x8}px`,
			listStyle: 'none',
			li: {
				listStyle: 'disc',
				margin: `0 0 ${custom.spacing.x1}px 0`,
				'&:last-of-type': {
					marginBottom: 0,
				},
			},
		},
	});
};

// NoResults component props
export const noResults: ThemeComponent<'noResults', NoResultsProps> = {
	default: {
		noResults: {
			themeStyleScript: noResultsStyleScript,
		},
	},
};
