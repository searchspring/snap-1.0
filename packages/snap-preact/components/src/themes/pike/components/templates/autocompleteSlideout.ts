import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteSlideoutProps } from '../../../../components/Templates/AutocompleteSlideout';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = (props: AutocompleteSlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		border: 0,
		padding: `${custom.spacing.x4}px`,
		'& > *': {
			display: 'flex',
			flexFlow: 'column nowrap',
			height: '100%',
			'& > .ss__search-input.autocomplete-slideout__search-input, .ss__autocomplete': {
				minHeight: '1px',
				minWidth: '1px',
			},
			'& > .ss__search-input.autocomplete-slideout__search-input': {
				flex: '0 1 auto',
				height: '40px',
				margin: `0 0 ${custom.spacing.x2}px 0`,
				'.ss__button, .ss__search-input__button--close-search-button': {
					width: '40px',
				},
			},
			'.ss__autocomplete': {
				flex: '1 1 0%',
				alignContent: 'flex-start',
				borderWidth: 0,
				overflowY: 'auto',
				'&::-webkit-scrollbar': {
					width: '8px',
					height: '8px',
				},
				'&::-webkit-scrollbar-track': {
					backgroundColor: custom.colors.gray01,
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: custom.colors.gray02,
				},
				'& > .ss__autocomplete__row .ss__autocomplete__column': {
					padding: `${custom.spacing.x4}px 0`,
				},
				'.ss__autocomplete__content__results .ss__results': {
					maxHeight: 'none',
					overflow: 'visible',
				},
			},
		},
	});
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
			layout: 'mini',
			// layout: [['c1', 'c2']],
			// column1: {
			// 	width: '100%',
			// 	layout: ['termsList'],
			// },
			// column2: {
			// 	width: '100%',
			// 	layout: ['content', 'button.see-more'],
			// },
		},
		// 'autocompleteSlideout searchInput': {
		// 	className: 'ss__secondary',
		// },
		// 'autocompleteSlideout facet searchInput': {
		// 	className: '',
		// },
		'autocompleteSlideout termsList': {
			retainHistory: true,
			retainTrending: true,
		},
		'autocompleteSlideout facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocompleteSlideout facetGridOptions': {
			gridSize: '38px',
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout button.see-more icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteSlideoutThemeComponentProps.mobile,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.mobile?.['autocompleteSlideout'] || {}),
			layout: 'mini',
			// layout: [['c1', 'c2']],
			// column1: {
			// 	width: '100%',
			// 	layout: ['termsList'],
			// },
			// column2: {
			// 	width: '100%',
			// 	layout: ['content', 'button.see-more'],
			// },
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 2,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 2,
		},
	},
	tablet: {
		...autocompleteSlideoutThemeComponentProps.tablet,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.tablet?.['autocompleteSlideout'] || {}),
			layout: 'mini',
			// layout: [['c1', 'c2']],
			// column1: {
			// 	width: '100%',
			// 	layout: ['termsList'],
			// },
			// column2: {
			// 	width: '100%',
			// 	layout: ['content', 'button.see-more'],
			// },
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
	desktop: {
		...autocompleteSlideoutThemeComponentProps.desktop,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.desktop?.['autocompleteSlideout'] || {}),
			layout: 'mini',
			// layout: [['c1', 'c2']],
			// column1: {
			// 	width: '100%',
			// 	layout: ['termsList'],
			// },
			// column2: {
			// 	width: '100%',
			// 	layout: ['content', 'button.see-more'],
			// },
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
};
