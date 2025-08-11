import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteSlideoutProps } from '../../../../components/Templates/AutocompleteSlideout';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = (props: AutocompleteSlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	// const tabletBp = variables?.breakpoints?.tablet || 1024;
	// const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		// '.ss__modal': {
		// 	'&, .ss__modal__content': {
		// 		height: '100%',
		// 	},
		// 	'.ss__modal__content': {
		// 		backgroundColor: 'transparent',
		// 		'&, .ss__autocomplete-modal__inner': {
		// 			position: 'static',
		// 			display: 'flex',
		// 			flexFlow: 'column nowrap',
		// 			justifyContent: 'center',
		// 		},
		// 		'.ss__autocomplete-modal__inner': {
		// 			width: props?.width,
		// 			maxHeight: 'none',
		// 			height: '80vh',
		// 			overflow: 'hidden',
		// 			'& > .ss__search-input, .ss__autocomplete': {
		// 				minHeight: '1px',
		// 				minWidth: '1px',
		// 			},
		// 			'& > .ss__search-input': {
		// 				flex: '0 1 auto',
		// 				height: '40px',
		// 				margin: 0,
		// 				'.ss__search-input__icons .ss__button, .ss__search-input__button--close-search-button': {
		// 					width: '40px',
		// 					padding: 0,
		// 				},
		// 			},
		// 			'.ss__autocomplete': {
		// 				flex: '1 1 0%',
		// 				overflowY: 'auto',
		// 				borderWidth: 0,
		// 				'&::-webkit-scrollbar': {
		// 					width: '8px',
		// 					height: '8px',
		// 				},
		// 				'&::-webkit-scrollbar-track': {
		// 					backgroundColor: custom.colors.gray01,
		// 				},
		// 				'&::-webkit-scrollbar-thumb': {
		// 					backgroundColor: custom.colors.gray02,
		// 				},
		// 				'.ss__autocomplete__content__results .ss__results': {
		// 					maxHeight: 'none',
		// 					overflow: 'visible',
		// 				}
		// 			},
		// 		},
		// 	},
		// },
		// [`@media (max-width: ${tabletBp}px)`]: {
		// 	'.ss__modal': {
		// 		'.ss__modal__content': {
		// 			'.ss__autocomplete-modal__inner': {
		// 				'.ss__autocomplete': {
		// 					'& > .ss__autocomplete__row': {
		// 						alignContent: 'flex-start',
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// },
		// [`@media (max-width: ${mobileBp}px)`]: {
		// 	'.ss__modal': {
		// 		'.ss__modal__content': {
		// 			'.ss__autocomplete-modal__inner': {
		// 				width: props?.width,
		// 				height: '100%',
		// 			}
		// 		}
		// 	}
		// },
		// '@media (max-width: 540px)': {
		// 	'.ss__modal': {
		// 		'.ss__modal__content': {
		// 			'.ss__autocomplete-modal__inner': {
		// 				'.ss__autocomplete': {
		// 					'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__recommendation-grid__results': {
		// 						'& > *:nth-of-type(n+3)': {
		// 							display: 'block',
		// 						},
		// 						'& > *:nth-of-type(n+5)': {
		// 							display: 'none',
		// 						},
		// 					},
		// 				}
		// 			}
		// 		}
		// 	}
		// },
	});
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
			//className: 'ss__autocomplete-slideout__slideout--slim',
			layout: [['c1', 'c3']],
			column1: {
				width: '100%',
				layout: ['termsList'],
			},
			column3: {
				width: '100%',
				layout: ['content', 'button.see-more'],
			},
			//width: '80vw',
		},
		'autocompleteSlideout searchInput': {
			className: 'ss__secondary',
		},
		// 'autocompleteSlideout facet searchInput': {
		// 	className: '',
		// },
		'autocompleteSlideout termsList': {
			retainHistory: true,
			retainTrending: true,
		},
		// 'autocompleteSlideout facetPaletteOptions': {
		// 	gridSize: '38px',
		// 	hideLabel: false,
		// },
		// 'autocompleteSlideout facetGridOptions': {
		// 	gridSize: '38px',
		// },
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
			layout: [['c1', 'c3']],
			column1: {
				width: '100%',
				layout: ['termsList'],
			},
			column3: {
				width: '100%',
				layout: ['content', 'button.see-more'],
			},
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
			layout: [['c1', 'c3']],
			column1: {
				width: '100%',
				layout: ['termsList'],
			},
			column3: {
				width: '100%',
				layout: ['content', 'button.see-more'],
			},
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
