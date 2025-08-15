import { css } from '@emotion/react';
import { autocompleteModalThemeComponentProps } from '../../../themeComponents/autocompleteModal';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteModalProps } from '../../../../components/Templates/AutocompleteModal';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const autocompleteModalStyleScript = (props: AutocompleteModalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || 1024;
	const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		'.ss__modal': {
			'&, .ss__modal__content': {
				height: '100%',
			},
			'.ss__modal__content': {
				backgroundColor: 'transparent',
				'&, .ss__autocomplete-modal__inner': {
					position: 'static',
					display: 'flex',
					flexFlow: 'column nowrap',
					justifyContent: 'center',
				},
				'.ss__autocomplete-modal__inner': {
					width: props?.width,
					maxHeight: 'none',
					height: '80vh',
					overflow: 'hidden',
					'& > .ss__search-input, .ss__autocomplete': {
						minHeight: '1px',
						minWidth: '1px',
					},
					'& > .ss__search-input': {
						flex: '0 1 auto',
						height: '40px',
						margin: 0,
						'.ss__search-input__icons .ss__button, .ss__search-input__button--close-search-button': {
							width: '40px',
							padding: 0,
						},
					},
					'.ss__autocomplete': {
						flex: '1 1 0%',
						overflowY: 'auto',
						borderWidth: 0,
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
						'.ss__autocomplete__content__results .ss__results': {
							maxHeight: 'none',
							overflow: 'visible',
						},
					},
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-modal__inner': {
						'.ss__autocomplete': {
							'& > .ss__autocomplete__row': {
								alignContent: 'flex-start',
							},
						},
					},
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-modal__inner': {
						width: props?.width,
						height: '100%',
					},
				},
			},
		},
		'@media (max-width: 540px)': {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-modal__inner': {
						'.ss__autocomplete': {
							'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__recommendation-grid__results': {
								'& > *:nth-of-type(n+3)': {
									display: 'block',
								},
								'& > *:nth-of-type(n+5)': {
									display: 'none',
								},
							},
						},
					},
				},
			},
		},
	});
};

export const autocompleteModal: ThemeComponent<'autocompleteModal', AutocompleteModalProps> = {
	default: {
		...autocompleteModalThemeComponentProps.default,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal'] || {}),
			themeStyleScript: autocompleteModalStyleScript,
			width: '70vw',
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
		'autocompleteModal searchInput': {
			className: 'ss__secondary',
		},
		'autocompleteModal facet searchInput': {
			className: '',
		},
		'autocompleteModal termsList': {
			retainHistory: true,
			retainTrending: true,
		},
		'autocompleteModal facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocompleteModal facetGridOptions': {
			gridSize: '38px',
		},
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
		},
		'autocompleteModal button.see-more icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteModalThemeComponentProps.mobile,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.mobile?.['autocompleteModal'] || {}),
			width: '100%',
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
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteModalThemeComponentProps.tablet,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.tablet?.['autocompleteModal'] || {}),
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
		'autocompleteModal results': {
			rows: 1,
			columns: 4,
		},
		'autocompleteModal recommendationGrid': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteModalThemeComponentProps.desktop,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.desktop?.['autocompleteModal'] || {}),
			width: '80vw',
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
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
};
