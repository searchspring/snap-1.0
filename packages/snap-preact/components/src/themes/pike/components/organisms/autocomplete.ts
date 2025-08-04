import { css } from '@emotion/react';
import type { AutocompleteProps } from '../../../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Autocomplete component
const autocompleteStyleScript = (props: AutocompleteProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		border: `1px solid ${custom.colors.gray02}`,
		backgroundColor: custom.colors.white,
		width: props?.width,
		right: 0,
		left: 'auto',
		top: 'auto',
		margin: `${custom.spacing.x1}px 0 0 0`,
		gap: `${custom.spacing.x4}px`,
		'a, div, p': {
			fontSize: custom.utils.convertPxToEm(12),
			lineHeight: 1.5,
			color: variables?.colors?.text,
		},
		a: {
			display: 'block',
		},
		'.ss__banner': {
			img: {
				maxWidth: '100%',
				maxHeight: '150px',
				height: 'auto',
			},
		},
		'& > div': {
			minWidth: '1px',
			maxWidth: 'none',
			flex: '0 1 auto',
			padding: `${custom.spacing.x4}px 0`,
			'&:first-child': {
				paddingLeft: `${custom.spacing.x4}px`,
			},
			'&:last-child': {
				paddingRight: `${custom.spacing.x4}px`,
			},
		},
		'.ss__autocomplete__terms .ss__autocomplete__title h5, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__content__info a, .ss__no-results__recommendations h3':
			{
				margin: `0 0 ${custom.spacing.x4}px 0`,
				fontSize: custom.utils.convertPxToEm(16),
				fontWeight: custom.fonts.weight02,
				lineHeight: 1.2,
				color: variables?.colors?.secondary,
			},
		'.ss__autocomplete__terms .ss__autocomplete__terms__options .ss__autocomplete__terms__option--active a, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__content__info a:hover':
			{
				fontWeight: custom.fonts.weight01,
				color: variables?.colors?.primary,
			},
		'.ss__autocomplete__terms': {
			width: '200px',
			backgroundColor: custom.colors.gray01,
			padding: 0,
			textAlign: 'left',
			'& > div:first-child .ss__autocomplete__title': {
				marginTop: `${custom.spacing.x2}px`,
			},
			'& > div:last-child .ss__autocomplete__terms__options': {
				marginBottom: `${custom.spacing.x2}px`,
			},
			'& > div': {
				'.ss__autocomplete__title': {
					h5: {
						margin: 0,
						padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
					},
				},
				'.ss__autocomplete__terms__options': {
					'.ss__autocomplete__terms__option': {
						a: {
							padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
							fontSize: custom.utils.convertPxToEm(14),
						},
					},
					'.ss__autocomplete__terms__option--active': {
						backgroundColor: custom.colors.white,
					},
				},
			},
		},
		'.ss__autocomplete__facets': {
			width: '200px',
			padding: 0,
			textAlign: 'left',
			'.ss__facets': {
				'.ss__facet': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
					'&.ss__facet--showing-all': {
						'.ss__facet__options': {
							maxHeight: 'none',
							overflow: 'visible',
							padding: 0,
						},
					},
					'&:last-child': {
						marginBottom: 0,
					},
					'.ss__facet__header': {
						borderBottom: 0,
					},
					'.ss__facet__options': {
						'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
							padding: 0,
							margin: `0 0 ${custom.spacing.x1}px 0`,
							'&:last-child': {
								marginBottom: 0,
							},
						},
						'.ss__facet-list-options': {
							'.ss__facet-list-options__option': {},
						},
					},
				},
			},
		},
		'.ss__autocomplete__content': {
			flex: '1 1 0%',
			overflow: 'visible',
			justifyContent: 'flex-start',
		},
		'.ss__autocomplete__content__results': {
			margin: `0 0 ${custom.spacing.x4}px 0`,
			'.ss__results': {
				overflowY: 'auto',
				overflowX: 'hidden',
				maxHeight: '75vh',
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
				'.ss__result': {
					'.ss__result__details': {
						gap: `${custom.spacing.x1}px`,
					},
				},
				'.ss__inline-banner': {
					maxHeight: '250px',
					overflow: 'hidden',
				},
			},
		},
		'.ss__autocomplete__content__info': {
			padding: 0,
			a: {
				margin: 0,
			},
		},
		'.ss__autocomplete__content__no-results': {
			'[ss-lang="noResultsText"]': {
				p: {
					display: 'inline',
					margin: 0,
					padding: 0,
					'& ~ p': {
						paddingLeft: '4px',
					},
				},
			},
			'.ss__no-results__recommendations': {
				margin: `${custom.spacing.x4}px 0 0 0`,
			},
		},
	});
};

// Autocomplete component props
export const autocomplete: ThemeComponent<'autocomplete', AutocompleteProps> = {
	default: {
		autocomplete: {
			themeStyleScript: autocompleteStyleScript,
			width: '900px',
		},
		'autocomplete facet': {
			limit: 5,
			disableOverflow: true,
			disableCollapse: true,
		},
		'autocomplete facets': {
			limit: 3,
		},
		'autocomplete facetListOptions': {
			hideCheckbox: true,
		},
		'autocomplete facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocomplete facetGridOptions': {
			gridSize: '38px',
		},
		'autocomplete results': {
			rows: 2,
			columns: 3,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocomplete recommendationGrid': {
			rows: 2,
			columns: 4,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocomplete icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
};
