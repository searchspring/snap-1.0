import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteFixedProps } from '../../../../components/Templates/AutocompleteFixed';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = (props: AutocompleteFixedProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || 1024;

	return css({
		'.ss__modal': {
			'.ss__slideout__overlay': {
				display: 'none',
			},
			'.ss__modal__content': {
				'.ss__autocomplete-fixed__inner': {
					'& > .ss__search-input': {
						height: '40px',
						margin: `0 0 ${custom.spacing.x1}px 0`,
						'.ss__search-input__icons .ss__button, .ss__search-input__button--close-search-button': {
							width: '40px',
							padding: 0,
						},
					},
					'.ss__autocomplete-fixed__inner__layout-wrapper': {
						overflowY: 'visible',
						maxHeight: 'none',
						width: 'auto',
						'.ss__autocomplete': {
							maxWidth: 'none',
							width: props?.width,
							right: 0,
							left: '-102px',
							top: 'auto',
							margin: 'auto',
						},
					},
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-fixed__inner': {
						'.ss__autocomplete-fixed__inner__layout-wrapper': {
							'.ss__autocomplete': {
								maxWidth: '100%',
								width: props?.width,
								left: 0,
								right: 0,
							},
						},
					},
				},
			},
		},
	});
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteFixedProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
			width: '900px',
			layout: [['c1', 'c2', 'c3']],
			column1: {
				width: '200px',
				layout: ['termsList'],
			},
			column2: {
				width: '160px',
				layout: ['facets'],
			},
			column3: {
				width: 'auto',
				layout: ['content', 'button.see-more'],
			},
		},
		'autocompleteFixed searchInput': {
			className: 'ss__secondary',
		},
		'autocompleteFixed facet searchInput': {
			className: '',
		},
		'autocompleteFixed termsList': {
			retainHistory: true,
			retainTrending: true,
		},
		'autocompleteFixed facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocompleteFixed facetGridOptions': {
			gridSize: '38px',
		},
		'autocompleteFixed results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 2,
			columns: 4,
		},
		'autocompleteFixed button.see-more icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteFixedThemeComponentProps.mobile,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.mobile?.['autocompleteFixed'] || {}),
			width: 'auto',
			layout: [['c1', 'c2']],
			column1: {
				width: '100%',
				layout: ['termsList'],
			},
			column2: {
				width: '100%',
				layout: ['content', 'button.see-more'],
			},
		},
		'autocompleteFixed results': {
			rows: 1,
			columns: 3,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteFixedThemeComponentProps.tablet,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.tablet?.['autocompleteFixed'] || {}),
			width: 'auto',
			layout: [['c1', 'c2', 'c3']],
			column1: {
				width: '100%',
				layout: ['termsList'],
			},
			column2: {
				width: '100%',
				layout: ['facets'],
			},
			column3: {
				width: '100%',
				layout: ['content', 'button.see-more'],
			},
		},
		'autocompleteFixed results': {
			rows: 1,
			columns: 4,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteFixedThemeComponentProps.desktop,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.desktop?.['autocompleteFixed'] || {}),
			layout: [['c1', 'c2', 'c3']],
			column1: {
				width: '200px',
				layout: ['termsList'],
			},
			column2: {
				width: '160px',
				layout: ['facets'],
			},
			column3: {
				width: 'auto',
				layout: ['content', 'button.see-more'],
			},
		},
		'autocompleteFixed results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
};
