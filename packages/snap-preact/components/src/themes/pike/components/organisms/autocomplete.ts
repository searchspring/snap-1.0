import { css } from '@emotion/react';
import type { AutocompleteProps } from '../../../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import { autocompleteThemeComponentProps } from '../../../themeComponents/autocomplete';

// static variables
const headerSelectors =
	'.ss__autocomplete__terms .ss__autocomplete__title h5, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__content__info a, .ss__no-results__recommendations h3';
const activeSelectors =
	'.ss__autocomplete__terms .ss__autocomplete__terms__options .ss__autocomplete__terms__option--active a, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__content__info a:hover';

// CSS in JS style script for the Autocomplete component
const autocompleteStyleScript = (props: AutocompleteProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop || custom.breakpoints.desktop;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// autcomplete styles
	const autocompleteStyles = css({
		'&.ss__autocomplete': {
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: custom.colors.white,
			overflow: 'hidden',
			top: '50px',
			right: 0,
			left: 'auto',
			gap: `${custom.spacing.x4}px`,
			padding: `${custom.spacing.x4}px`,
			...custom.styles.boxSizing('autocomplete', props?.treePath, props?.name),
			'&.ss__autocomplete--only-terms': {
				width: '100%',
			},
			'a, div, p, .ss__button': {
				fontSize: '12px',
			},
			'a, div:not(.ss__button, .ss__rating__icons, .ss__rating__icons .ss__rating__stars .ss__rating__stars__star), p': {
				lineHeight: 1.5,
				color: variables?.colors?.text,
			},
			a: {
				display: 'block',
			},
			'ul, ul li': {
				padding: 0,
				margin: 0,
				listStyle: 'none',
			},
			'.ss__banner': {
				img: {
					maxWidth: '100%',
					maxHeight: '150px',
					height: 'auto',
				},
			},
			[headerSelectors]: {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				padding: 0,
				...custom.styles.headerText(variables?.colors?.secondary, '16px'),
				lineHeight: 1.2,
			},
			[activeSelectors]: {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			'& > div': {
				minWidth: '1px',
				maxWidth: 'none',
				flex: '0 1 auto',
				padding: `0 ${custom.spacing.x4}px`,
				margin: `0 -${custom.spacing.x4}px`,
			},
			'.ss__autocomplete__terms, .ss__autocomplete__facets': {
				flex: '0 0 220px',
				width: 'auto',
			},
			'.ss__autocomplete__terms': {
				backgroundColor: 'transparent',
				gap: `${custom.spacing.x4}px`,
				'& > div': {
					'.ss__autocomplete__title': {
						padding: 0,
					},
					'.ss__autocomplete__terms__options': {
						'.ss__autocomplete__terms__option': {
							a: {
								padding: `${custom.spacing.x2}px 0`,
								transition: `padding-left 0.5s ease`,
								fontSize: '16px',
								em: {
									color: variables?.colors?.text,
									fontStyle: 'normal',
									fontSize: 'inherit',
									fontWeight: 'inherit',
								},
							},
						},
						'.ss__autocomplete__terms__option--active': {
							a: {
								paddingLeft: `${custom.spacing.x4}px`,
								backgroundColor: custom.colors.gray01,
								'&, & em': {
									...custom.styles.activeText(variables?.colors?.primary),
								},
							},
						},
					},
				},
			},
			'.ss__autocomplete__facets': {
				'.ss__facets': {
					flexFlow: 'row wrap',
					gap: `${custom.spacing.x4}px`,
					'.ss__facet': {
						flex: '1 1 100%',
						margin: 0,
						'.ss__facet__header': {
							borderBottom: 0,
							'.ss__facet__header__inner': {
								fontSize: 'inherit',
								fontWeight: 'inherit',
								lineHeight: 'inherit',
								color: 'inherit',
							},
						},
						'.ss__facet__options': {
							'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
								padding: 0,
								margin: `0 0 ${custom.spacing.x1}px 0`,
								'&:last-of-type': {
									marginBottom: 0,
								},
							},
							'.ss__facet__facet-grid-options .ss__facet-grid-options__option': {
								display: 'flex',
							},
						},
					},
				},
				'.ss__banner': {
					margin: `${custom.spacing.x4}px 0 0 0`,
				},
			},
			'.ss__autocomplete__content': {
				display: 'block',
				flex: '1 1 0%',
				overflow: 'visible',
				'.ss__banner': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
				},
			},
			'.ss__autocomplete__content__results': {
				'&:after': {
					content: '""',
					display: 'block',
					height: `${custom.spacing.x4}px`,
					margin: `0 -${custom.spacing.x4}px`,
					position: 'relative',
					zIndex: 2,
				},
				'.ss__results': {
					overflowY: 'auto',
					overflowX: 'hidden',
					maxHeight: '60vh',
					...custom.styles.scrollbar(),
					'.ss__inline-banner': {
						overflow: 'hidden',
					},
					'.ss__inline-banner--grid': {
						maxHeight: '212px',
					},
					'.ss__inline-banner--list': {
						maxHeight: '100px',
					},
				},
				'.ss__results .ss__result.ss__result--grid': {
					...custom.styles.resultCompact('grid', '', 12),
				},
				'.ss__results .ss__result.ss__result--list': {
					...custom.styles.resultCompact('', '0 0 80px', 12),
				},
			},
			'.ss__autocomplete__content__info': {
				padding: 0,
				a: {
					position: 'relative',
					padding: `0 ${custom.spacing.x1 + custom.sizes.icon12}px 0 0`,
					'&, .ss__icon': {
						margin: 0,
					},
					'.ss__icon': {
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: 0,
						margin: 'auto 0',
					},
				},
			},
			'.ss__autocomplete__content__no-results': {
				'.ss__autocomplete__content__no-results__text': {
					p: {
						display: 'inline',
						margin: 0,
						padding: 0,
						fontSize: '14px',
						'& ~ p': {
							paddingLeft: '4px',
						},
					},
				},
			},
		},
		[`@media (max-width: ${desktopBp}px)`]: {
			'&.ss__autocomplete': {
				'.ss__autocomplete__terms, .ss__autocomplete__facets': {
					flex: '0 0 200px',
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'&.ss__autocomplete': {
				flexWrap: 'wrap',
				left: 0,
				right: 0,
				width: 'auto',
				[headerSelectors]: {
					fontSize: '14px',
				},
				'& > div': {
					flex: '1 1 100%',
					paddingBottom: `${custom.spacing.x4}px`,
					borderBottom: `1px solid ${custom.colors.gray02}`,
					'&:last-of-type': {
						paddingBottom: 0,
						borderBottomWidth: 0,
					},
				},
				'.ss__autocomplete__terms, .ss__autocomplete__facets, .ss__autocomplete__content': {
					flex: '1 1 100%',
				},
				'.ss__autocomplete__terms': {
					flexFlow: 'row nowrap',
					'& > div': {
						flex: '1 1 0%',
						'.ss__autocomplete__terms__options': {
							display: 'flex',
							gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
							justifyContent: 'flex-start',
							'.ss__autocomplete__terms__option': {
								minWidth: '1px',
								flex: '0 1 auto',
							},
							'.ss__autocomplete__terms__option, .ss__autocomplete__terms__option--active': {
								a: {
									padding: 0,
								},
							},
							'.ss__autocomplete__terms__option a': {
								fontSize: '14px',
							},
							'.ss__autocomplete__terms__option--active a': {
								backgroundColor: 'transparent',
							},
						},
					},
				},
				'.ss__autocomplete__facets': {
					'.ss__facets': {
						flexWrap: 'nowrap',
						'.ss__facet': {
							flex: '1 1 0%',
						},
					},
					'.ss__banner': {
						display: 'none',
					},
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'&.ss__autocomplete': {
				'.ss__autocomplete__content .ss__autocomplete__content__info': {
					textAlign: 'left',
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'&.ss__autocomplete': {
				'.ss__autocomplete__content__results .ss__results': {
					gridTemplateColumns: `repeat(2, 1fr)`,
					'& > *:nth-child(n+3)': {
						display: 'none',
					},
				},
			},
		},
	});

	return autocompleteStyles;
};

// Autocomplete component props
export const autocomplete: ThemeComponent<'autocomplete', AutocompleteProps> = {
	default: {
		...autocompleteThemeComponentProps.default,
		autocomplete: {
			...(autocompleteThemeComponentProps.default?.['autocomplete'] || {}),
			themeStyleScript: autocompleteStyleScript,
			width: '940px',
			contentTitle: 'Product Suggestions',
			termsTitle: 'Search Suggestions',
			seeMoreButtonIcon: custom.icons.arrowRight,
		},
		'autocomplete facets': {
			limit: 3,
		},
		'autocomplete facet': {
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
		'autocomplete facetPaletteOptions': {
			gridSize: '48px',
			hideLabel: false,
		},
		'autocomplete facetGridOptions': {
			gridSize: '48px',
		},
		'autocomplete results': {
			rows: 2,
			columns: 3,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocomplete icon': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteThemeComponentProps.mobile,
		autocomplete: {
			...(autocompleteThemeComponentProps.mobile?.['autocomplete'] || {}),
		},
		'autocomplete results': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteThemeComponentProps.tablet,
		autocomplete: {
			...(autocompleteThemeComponentProps.tablet?.['autocomplete'] || {}),
		},
		'autocomplete facet': {
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
		'autocomplete results': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteThemeComponentProps.desktop,
		autocomplete: {
			...(autocompleteThemeComponentProps.desktop?.['autocomplete'] || {}),
		},
		'autocomplete results': {
			rows: 2,
			columns: 3,
		},
	},
};
