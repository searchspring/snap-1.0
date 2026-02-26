import { css } from '@emotion/react';
import { autocompleteModalThemeComponentProps } from '../../../themeComponents/autocompleteModal';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteModalProps } from '../../../../components/Templates/AutocompleteModal';
import { custom } from '../../custom';
import { autocompleteSharedStyleScript } from '../templates/autocompleteShared';

// static variables
const searchInputHeight = 40;

// CSS in JS style script for the Search component
const autocompleteModalStyleScript = (props: AutocompleteModalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const shared = autocompleteSharedStyleScript(props, 'autocompleteModal');

	// autocomplete shared styles
	const sharedStyles = css({
		'.ss__modal': {
			'.ss__modal__content': {
				'.ss__autocomplete-modal__inner': {
					'.ss__autocomplete': {
						...shared,
					},
				},
			},
		},
	});

	// autocomplete modal styles
	const modalStyles = css({
		...custom.styles.boxSizing('autocompleteModal', props?.treePath, props?.name),
		'.ss__modal': {
			// '&, .ss__modal__content': {
			// 	height: '100%',
			// },
			'.ss__modal__content': {
				// 	backgroundColor: 'transparent',
				// 	justifyContent: 'center',
				// 	'&, .ss__autocomplete-modal__inner': {
				// 		position: 'static',
				// 		display: 'flex',
				// 		flexFlow: 'column nowrap',
				// 	},
				'.ss__autocomplete-modal__inner': {
					// 		width: props?.width,
					// 		maxHeight: 'none',
					// 		height: '80vh',
					// overflowX: 'hidden',
					// overflowY: 'auto',
					// ...custom.styles.scrollbar(),
					maxWidth: '1000px',
					maxHeight: 'none',
					overflow: 'visible',
					// 		'& > .ss__search-input.autocomplete-modal__search-input, .ss__autocomplete': {
					// 			minHeight: '1px',
					// 			minWidth: '1px',
					// 		},
					'& > .ss__search-input': {
						// position: 'absolute',
						// top: 0,
						// left: 0,
						// right: 0,
						// margin: '0 auto',
						//flex: '0 1 auto',
						height: `${searchInputHeight}px`,
						margin: 0,
						'.ss__button, .ss__search-input__button--close-search-button': {
							width: `${searchInputHeight}px`,
						},
					},
					'.ss__autocomplete': {
						overflowY: 'auto',
						maxHeight: props?.height ? props.height : '80vh',
						...custom.styles.scrollbar(),
						// flex: '1 1 0%',
						// borderWidth: 0,
						// '&::-webkit-scrollbar': {
						// 	width: '8px',
						// 	height: '8px',
						// },
						// '&::-webkit-scrollbar-track': {
						// 	backgroundColor: custom.colors.gray01,
						// },
						// '&::-webkit-scrollbar-thumb': {
						// 	backgroundColor: custom.colors.gray02,
						// },
						// '.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
						// 	{
						// 		maxHeight: 'none',
						// 		overflow: 'visible',
						// 	},
					},
				},
			},
			// },
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__modal': {
				// '.ss__modal__content': {
				// 	'.ss__autocomplete-modal__inner': {
				// 		width: props?.width,
				// 		height: '100%',
				// 	},
				// },
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__modal': {
				// '.ss__modal__content': {
				// 	'.ss__autocomplete-modal__inner': {
				// 		'.ss__autocomplete': {
				// 			'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
				// 				{
				// 					'& > *:nth-of-type(n+5)': {
				// 						display: 'none',
				// 					},
				// 				},
				// 		},
				// 	},
				// },
			},
		},
	});

	// autocomplete styles
	const autocompleteStyles = css([sharedStyles, modalStyles]);

	return autocompleteStyles;
};

export const autocompleteModal: ThemeComponent<'autocompleteModal', AutocompleteModalProps> = {
	default: {
		...autocompleteModalThemeComponentProps.default,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal'] || {}),
			themeStyleScript: autocompleteModalStyleScript,
			layout: 'standard',
			width: '90vw',
			contentTitle: 'Product Suggestions',
		},
		'autocompleteModal facets': {
			limit: 3,
		},
		'autocompleteModal facet': {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal facet'] || {}),
			disableOverflow: true,
			disableCollapse: true,
			display: {
				list: {
					limit: 5,
				},
				hierarchy: {
					limit: 5,
				},
				grid: {
					limit: 6,
				},
				palette: {
					limit: 6,
				},
			},
		},
		'autocompleteModal facetPaletteOptions': {
			gridSize: '48px',
			hideLabel: false,
		},
		'autocompleteModal facetGridOptions': {
			gridSize: '48px',
		},
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocompleteModal button.see-more icon': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
			icon: custom.icons.arrowRight,
		},
	},
	mobile: {
		...autocompleteModalThemeComponentProps.mobile,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.mobile?.['autocompleteModal'] || {}),
			width: '100%',
			layout: 'mini',
		},
		'autocompleteModal results': {
			rows: 1,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteModalThemeComponentProps.tablet,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.tablet?.['autocompleteModal'] || {}),
			layout: 'standard',
		},
		'autocompleteModal facet': {
			display: {
				list: {
					limit: 3,
				},
				hierarchy: {
					limit: 3,
				},
				grid: {
					limit: 4,
				},
				palette: {
					limit: 4,
				},
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
			layout: 'standard',
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
