// import { css } from '@emotion/react';
// import type { AutocompleteTemplateProps } from '../../../../components/Templates/AutocompleteTemplate';
// import { autocompleteThemeComponentProps } from '../../../themeComponents/autocompleteTemplate';
// import { ThemeComponent } from '../../../../providers';
// import { custom } from '../../custom';

// // CSS in JS style script for the Search component
// const autocompleteTemplateStyleScript = (props: AutocompleteTemplateProps) => {
// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 	const variables = props?.theme?.variables;
// 	const tabletBp = variables?.breakpoints?.tablet || 1024;
// 	const textSelectors = 'a, div, p';
// 	const headerSelectors =
// 		'.ss__terms .ss__terms__title h5, .ss__autocomplete__facets-wrapper .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content .ss__autocomplete__content-inner .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__button--see-more .ss__button__content .ss__autocomplete__see-more a, .ss__no-results__recommendations h3';
// 	const activeSelectors =
// 		'.ss__terms .ss__terms__options .ss__terms__option--active a, .ss__autocomplete__facets-wrapper .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content .ss__autocomplete__content-inner .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__button--see-more .ss__button__content .ss__autocomplete__see-more a:hover';

// 	// determine autocomplete layout and type
// 	let acLayout = 'default';
// 	let acType = 'default';
// 	if (props?.className?.includes('slim')) {
// 		acLayout = 'secondary';
// 		acType = 'slim';
// 	} else if (props?.className?.includes('terms')) {
// 		acLayout = 'secondary';
// 		acType = 'terms';
// 	}

// 	// shared autocomplete styles
// 	const sharedStyles = css({
// 		border: `1px solid ${custom.colors.gray02}`,
// 		backgroundColor: custom.colors.white,
// 		width: props?.width,
// 		right: 0,
// 		left: 'auto',
// 		top: 'auto',
// 		margin: `${custom.spacing.x1}px 0 0 0`,
// 		[textSelectors]: {
// 			fontSize: custom.utils.convertPxToEm(acType == 'terms' ? 15 : 12),
// 			lineHeight: 1.5,
// 			color: variables?.colors?.text,
// 		},
// 		a: {
// 			display: 'block',
// 		},
// 		'ul, ul li': {
// 			padding: 0,
// 			margin: 0,
// 			listStyle: 'none',
// 		},
// 		'.ss__banner': {
// 			img: {
// 				maxWidth: '100%',
// 				maxHeight: '150px',
// 				height: 'auto',
// 			},
// 		},
// 		[headerSelectors]: {
// 			margin: `0 0 ${custom.spacing.x4}px 0`,
// 			padding: 0,
// 			fontSize: custom.utils.convertPxToEm(acType == 'terms' ? 17 : 16),
// 			fontWeight: custom.fonts.weight02,
// 			lineHeight: 1.2,
// 			color: variables?.colors?.secondary,
// 		},
// 		[activeSelectors]: {
// 			fontWeight: custom.fonts.weight01,
// 			color: variables?.colors?.primary,
// 		},
// 	});
// 	const sharedFacetStyles = css({
// 		'&.ss__facet--showing-all': {
// 			'.ss__facet__options': {
// 				maxHeight: 'none',
// 				overflow: 'visible',
// 				padding: 0,
// 			},
// 		},
// 		'.ss__facet__header': {
// 			borderBottom: 0,
// 		},
// 		'.ss__facet__options': {
// 			'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
// 				padding: 0,
// 				margin: `0 0 ${custom.spacing.x1}px 0`,
// 				'&:last-child': {
// 					marginBottom: 0,
// 				},
// 			},
// 		},
// 	});
// 	const sharedContentStyles = css({
// 		'.ss__autocomplete__content': {
// 			overflow: 'visible',
// 			justifyContent: 'flex-start',
// 			margin: `0 0 ${custom.spacing.x4}px 0`,
// 			'.ss__autocomplete__content-inner': {
// 				padding: 0,
// 			},
// 		},
// 		'.ss__autocomplete__content__results': {
// 			'.ss__results': {
// 				overflowY: 'auto',
// 				overflowX: 'hidden',
// 				maxHeight: '75vh',
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
// 				'.ss__result': {
// 					'.ss__result__details': {
// 						gap: `${custom.spacing.x1}px`,
// 					},
// 				},
// 				'.ss__inline-banner': {
// 					maxHeight: '250px',
// 					overflow: 'hidden',
// 				},
// 			},
// 		},
// 		'.ss__autocomplete__button--see-more': {
// 			padding: 0,
// 			width: '100%',
// 			height: 'auto',
// 			'&, &:hover': {
// 				backgroundColor: 'transparent',
// 				border: 0,
// 			},
// 			'.ss__button__content': {
// 				'.ss__autocomplete__see-more': {
// 					a: {
// 						margin: 0,
// 					},
// 				},
// 			},
// 		},
// 		'.ss__autocomplete__content__no-results': {
// 			'[ss-lang="noResultsText"]': {
// 				p: {
// 					display: 'inline',
// 					margin: 0,
// 					padding: 0,
// 					'& ~ p': {
// 						paddingLeft: '4px',
// 					},
// 				},
// 			},
// 			'.ss__no-results__recommendations': {
// 				margin: `${custom.spacing.x4}px 0 0 0`,
// 			},
// 		},
// 	});
// 	const sharedTabletStyles = css({
// 		[`@media (max-width: ${tabletBp}px)`]: {
// 			width: props?.width,
// 			left: 0,
// 			right: 0,
// 			[headerSelectors]: {
// 				fontSize: custom.utils.convertPxToEm(14),
// 			},
// 			'.ss__terms': {
// 				'.ss__terms__options': {
// 					'.ss__terms__option': {
// 						a: {
// 							fontSize: custom.utils.convertPxToEm(12),
// 						},
// 					},
// 				},
// 			},
// 			'.ss__autocomplete__button--see-more': {
// 				'.ss__button__content': {
// 					'.ss__autocomplete__see-more': {
// 						a: {
// 							'.ss__icon': {
// 								position: 'relative',
// 								top: '1px',
// 							},
// 						},
// 					},
// 				},
// 			},
// 		},
// 	});
// 	const sharedMobileStyles = css({
// 		'@media (max-width: 540px)': {
// 			'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__recommendation-grid__results': {
// 				gridTemplateColumns: `repeat(2, 1fr)`,
// 				'& > div:nth-child(n+3)': {
// 					display: 'none',
// 				},
// 			},
// 		},
// 	});

// 	// default autocomplete styles
// 	const defaultStyles = css([
// 		sharedStyles,
// 		{
// 			'& > .ss__autocomplete__row': {
// 				gap: `${custom.spacing.x4}px`,
// 				'.ss__autocomplete__column': {
// 					alignContent: 'flex-start',
// 					minWidth: '1px',
// 					padding: `${custom.spacing.x4}px 0`,
// 					'&:first-child': {
// 						paddingLeft: `${custom.spacing.x4}px`,
// 					},
// 					'&:last-child': {
// 						paddingRight: `${custom.spacing.x4}px`,
// 					},
// 					'&:has(.ss__autocomplete__terms-wrapper)': {
// 						padding: 0,
// 					},
// 				},
// 			},
// 			'.ss__autocomplete__terms-wrapper': {
// 				backgroundColor: custom.colors.gray01,
// 				height: '100%',
// 			},
// 			'.ss__terms-list': {
// 				backgroundColor: 'transparent',
// 				'.ss__terms-list__row': {
// 					'&:first-child .ss__terms .ss__terms__title': {
// 						marginTop: `${custom.spacing.x2}px`,
// 					},
// 					'&:last-child .ss__terms .ss__terms__options': {
// 						marginBottom: `${custom.spacing.x2}px`,
// 					},
// 				},
// 			},
// 			'.ss__terms': {
// 				width: '100%',
// 				textAlign: 'left',
// 				'.ss__terms__title': {
// 					h5: {
// 						margin: 0,
// 						padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
// 					},
// 				},
// 				'.ss__terms__options': {
// 					display: 'block',
// 					margin: 0,
// 					'.ss__terms__option': {
// 						a: {
// 							padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
// 							fontSize: custom.utils.convertPxToEm(14),
// 						},
// 					},
// 					'.ss__terms__option--active': {
// 						backgroundColor: custom.colors.white,
// 					},
// 				},
// 			},
// 			'.ss__autocomplete__facets': {
// 				padding: 0,
// 				textAlign: 'left',
// 				'.ss__facets': {
// 					'.ss__facet': {
// 						margin: `0 0 ${custom.spacing.x4}px 0`,
// 						'&:last-child': {
// 							marginBottom: 0,
// 						},
// 						...sharedFacetStyles,
// 					},
// 				},
// 			},
// 			[`@media (max-width: ${tabletBp}px)`]: {
// 				'& > .ss__autocomplete__row': {
// 					flexFlow: 'row wrap',
// 					gap: 0,
// 					'.ss__autocomplete__column': {
// 						minWidth: '1px',
// 						borderBottom: `1px solid ${custom.colors.gray02}`,
// 						'&:last-child': {
// 							borderBottom: 0,
// 						},
// 						'&, &:has(.ss__autocomplete__terms-wrapper)': {
// 							padding: `${custom.spacing.x4}px`,
// 						},
// 					},
// 				},
// 				'.ss__autocomplete__terms-wrapper': {
// 					backgroundColor: 'transparent',
// 				},
// 				'.ss__terms-list': {
// 					flexFlow: 'row nowrap',
// 					gap: `${custom.spacing.x4}px`,
// 					'.ss__terms-list__row': {
// 						flex: '1 1 0%',
// 						'&:first-child .ss__terms .ss__terms__title': {
// 							marginTop: 0,
// 						},
// 						'&:last-child .ss__terms .ss__terms__options': {
// 							marginBottom: 0,
// 						},
// 					},
// 				},
// 				'.ss__terms .ss__terms__options, .ss__autocomplete__facets .ss__facets': {
// 					display: 'flex',
// 				},
// 				'.ss__terms .ss__terms__options .ss__terms__options, .ss__autocomplete__facets .ss__facets .ss__facet': {
// 					minWidth: '1px',
// 				},
// 				'.ss__terms': {
// 					'.ss__terms__title h5': {
// 						padding: 0,
// 						margin: `0 0 ${custom.spacing.x4}px 0`,
// 					},
// 					'.ss__terms__options': {
// 						gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
// 						flexFlow: 'row wrap',
// 						'.ss__terms__option': {
// 							flex: '0 1 auto',
// 							a: {
// 								padding: 0,
// 							},
// 						},
// 					},
// 				},
// 				'.ss__autocomplete__facets': {
// 					'.ss__facets': {
// 						gap: `0 ${custom.spacing.x4}px`,
// 						flexFlow: 'row nowrap',
// 						'.ss__facet': {
// 							flex: '1 1 0%',
// 							'&, &:last-child': {
// 								margin: 0,
// 							},
// 						},
// 					},
// 				},
// 			},
// 		},
// 		sharedContentStyles,
// 		sharedTabletStyles,
// 		sharedMobileStyles,
// 	]);

// 	// secondary autocomplete styles
// 	const secondaryStyles = css([
// 		sharedStyles,
// 		{
// 			'& > .ss__autocomplete__row': {
// 				flexFlow: 'row wrap',
// 				gap: 0,
// 				'.ss__autocomplete__column': {
// 					alignContent: 'flex-start',
// 					flex: `1 1 100%`,
// 					maxWidth: '100%',
// 					minWidth: '1px',
// 					padding: `${custom.spacing.x4}px`,
// 					borderBottom: `1px solid ${custom.colors.gray02}`,
// 					'&:last-child': {
// 						borderBottom: 0,
// 					},
// 				},
// 			},
// 			'.ss__autocomplete__terms-wrapper': {
// 				backgroundColor: custom.colors.white,
// 				height: '100%',
// 			},
// 			'.ss__terms-list': {
// 				flexFlow: 'row nowrap',
// 				gap: `${custom.spacing.x4}px`,
// 				backgroundColor: 'transparent',
// 				'.ss__terms-list__row': {
// 					flex: '1 1 0%',
// 				},
// 			},
// 			'.ss__terms .ss__terms__options, .ss__autocomplete__facets .ss__facets': {
// 				display: 'flex',
// 			},
// 			'.ss__terms .ss__terms__options .ss__terms__options, .ss__autocomplete__facets .ss__facets .ss__facet': {
// 				minWidth: '1px',
// 			},
// 			'.ss__terms': {
// 				width: '100%',
// 				textAlign: 'left',
// 				'.ss__terms__title': {
// 					h5: {
// 						padding: 0,
// 					},
// 				},
// 				'.ss__terms__options': {
// 					gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
// 					flexFlow: 'row wrap',
// 					margin: 0,
// 					'.ss__terms__option': {
// 						flex: '0 1 auto',
// 						a: {
// 							padding: 0,
// 							fontSize: custom.utils.convertPxToEm(acType == 'terms' ? 15 : 14),
// 						},
// 					},
// 				},
// 			},
// 			'.ss__autocomplete__facets': {
// 				padding: 0,
// 				textAlign: 'left',
// 				'.ss__facets': {
// 					gap: `0 ${custom.spacing.x4}px`,
// 					flexFlow: 'row nowrap',
// 					'.ss__facet': {
// 						flex: '1 1 0%',
// 						margin: 0,
// 						...sharedFacetStyles,
// 					},
// 				},
// 			},
// 		},
// 		sharedContentStyles,
// 		sharedTabletStyles,
// 		sharedMobileStyles,
// 	]);

// 	// return autocomplete styles
// 	if (acLayout == 'secondary') {
// 		return secondaryStyles;
// 	} else {
// 		return defaultStyles;
// 	}
// };

// // AutocompleteTemplate component props come from Template export
// export const autocompleteTemplate: ThemeComponent<'autocompleteTemplate', AutocompleteTemplateProps> = {
// 	default: {
// 		...autocompleteThemeComponentProps.default,
// 		autocompleteTemplate: {
// 			...(autocompleteThemeComponentProps.default?.['autocompleteTemplate'] || {}),
// 			themeStyleScript: autocompleteTemplateStyleScript,
// 			width: '900px',
// 			contentTitle: 'Product Suggestions',
// 			column1: {
// 				width: '200px',
// 				layout: ['termsList'],
// 			},
// 			column2: {
// 				width: '160px',
// 				layout: ['facets'],
// 			},
// 			column3: {
// 				width: 'auto',
// 				layout: ['content', 'button.see-more'],
// 			},
// 		},
// 		'autocompleteTemplate termsList': {
// 			retainHistory: true,
// 			retainTrending: true,
// 		},
// 		'autocompleteTemplate facetPaletteOptions': {
// 			gridSize: '38px',
// 			hideLabel: false,
// 		},
// 		'autocompleteTemplate facetGridOptions': {
// 			gridSize: '38px',
// 		},
// 		'autocompleteTemplate results': {
// 			rows: 2,
// 			columns: 3,
// 			gapSize: `${custom.spacing.x4}px`,
// 		},
// 		'autocompleteTemplate recommendationGrid': {
// 			rows: 2,
// 			columns: 4,
// 			gapSize: `${custom.spacing.x4}px`,
// 		},
// 		'autocompleteTemplate icon': {
// 			icon: custom.icons.arrowRight,
// 			size: `${custom.sizes.icon12}px`,
// 		},
// 	},
// 	mobile: {
// 		...autocompleteThemeComponentProps.mobile,
// 		autocompleteTemplate: {
// 			...(autocompleteThemeComponentProps.mobile?.['autocompleteTemplate'] || {}),
// 			width: '100%',
// 			layout: [['c1', 'c2']],
// 			column1: {
// 				width: '100%',
// 				layout: ['termsList'],
// 			},
// 			column2: {
// 				width: '100%',
// 				layout: ['content', 'button.see-more'],
// 			},
// 		},
// 		'autocompleteTemplate results': {
// 			rows: 1,
// 			columns: 3,
// 			gapSize: `${custom.spacing.x2}px`,
// 		},
// 		'autocompleteTemplate recommendationGrid': {
// 			rows: 1,
// 			columns: 3,
// 			gapSize: `${custom.spacing.x2}px`,
// 		},
// 	},
// 	tablet: {
// 		...autocompleteThemeComponentProps.tablet,
// 		autocompleteTemplate: {
// 			...(autocompleteThemeComponentProps.tablet?.['autocompleteTemplate'] || {}),
// 			width: '100%',
// 			layout: [['c1', 'c2', 'c3']],
// 			column1: {
// 				width: '100%',
// 				layout: ['termsList'],
// 			},
// 			column2: {
// 				width: '100%',
// 				layout: ['facets'],
// 			},
// 			column3: {
// 				width: '100%',
// 				layout: ['content', 'button.see-more'],
// 			},
// 		},
// 		'autocompleteTemplate results': {
// 			rows: 1,
// 			columns: 4,
// 			gapSize: `${custom.spacing.x4}px`,
// 		},
// 		'autocompleteTemplate recommendationGrid': {
// 			rows: 1,
// 			columns: 4,
// 			gapSize: `${custom.spacing.x4}px`,
// 		},
// 	},
// 	desktop: {
// 		...autocompleteThemeComponentProps.desktop,
// 		autocompleteTemplate: {
// 			...(autocompleteThemeComponentProps.desktop?.['autocompleteTemplate'] || {}),
// 		},
// 		'autocompleteTemplate results': {
// 			rows: 2,
// 			columns: 3,
// 			gapSize: `${custom.spacing.x4}px`,
// 		},
// 		'autocompleteTemplate recommendationGrid': {
// 			rows: 2,
// 			columns: 4,
// 			gapSize: `${custom.spacing.x4}px`,
// 		},
// 	},
// };
