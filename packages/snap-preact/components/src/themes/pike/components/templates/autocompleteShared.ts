import { css } from '@emotion/react';
import type { AutocompleteLayoutProps } from '../../../../components/Organisms/AutocompleteLayout';
import { custom } from '../../custom';

// static variables
const textSelectors = 'a, div, p';
const headerSelectors =
	'.ss__terms-list .ss__terms .ss__terms__title h5, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__button--see-more .ss__button__content, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__title';
const activeSelectors =
	'.ss__terms-list .ss__terms .ss__terms__options .ss__terms__option.ss__terms__option--active a, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__button--see-more:hover .ss__button__content';

// CSS in JS style script for the Autocomplete Layout component
export const autocompleteSharedStyleScript = (props: AutocompleteLayoutProps, template: string) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop || custom.breakpoints.desktop;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// get autocomplete layout
	const acLayout = props?.layout ? props.layout : 'standard';

	// shared styles
	const sharedStyles = css({
		// alignContent: acLayout == 'standard' ? 'normal' : 'flex-start',
		border: `1px solid ${custom.colors.gray02}`,
		backgroundColor: custom.colors.white,
		// overflowX: 'hidden',
		// overflowY: template == 'autocompleteModal' ? 'auto' : 'hidden',
		// maxHeight: props?.height ? props.height : '80vh',
		//overflow: 'hidden',
		// top: '50px',
		// right: 0,
		// left: 'auto',
		//...custom.styles.boxSizing('autocompleteLayout', props?.treePath, props?.name),
		[textSelectors]: {
			//fontSize: `${acLayout == 'terms' ? 15 : 12}px`,
			fontSize: '12px',
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
		// '.ss__autocomplete__row, .ss__autocomplete__column': {
		// 	'.ss__search-input': {
		// 		background: 'transparent',
		// 		width: 'auto',
		// 		height: '30px',
		// 		margin: `0 0 ${custom.spacing.x2}px 0`,
		// 	},
		// },
		'& > .ss__autocomplete__row': {
			gap: `${custom.spacing.x4}px`,
			padding: `${custom.spacing.x4}px`,
			'.ss__autocomplete__column': {
				// alignContent: 'flex-start',
				minWidth: '1px',
				padding: `0 ${custom.spacing.x4}px`,
				margin: `0 -${custom.spacing.x4}px`,
				'&:has(.ss__autocomplete__content)': {
					alignContent: 'flex-start',
				},
			},
		},
	});

	// shared tablet styles
	const sharedTabletStyles = css({
		// alignContent: 'flex-start',
		// [textSelectors]: {
		// 	fontSize: acLayout == 'terms' ? '12px' : '',
		// },
		[headerSelectors]: {
			fontSize: '14px',
		},
		'.ss__terms-list .ss__terms .ss__terms__options .ss__terms__option--active a': {
			fontSize: '14px',
		},
	});

	// terms wrapper styles
	const termsWrapperStyles = css({
		'.ss__autocomplete__terms-wrapper': {
			backgroundColor: 'transparent',
			//padding: `${custom.spacing.x4}px`,
		},
	});

	// facets styles
	const facetsStyles = css({
		// '.ss__autocomplete__facets-wrapper': {
		// 	padding: `${custom.spacing.x4}px`,
		// },
		'.ss__autocomplete__facets': {
			padding: 0,
			'.ss__facets': {
				flexFlow: 'row wrap',
				gap: `${custom.spacing.x4}px`,
				'.ss__facet': {
					flex: '1 1 100%',
					margin: 0,
					// 			margin: `0 0 ${custom.spacing.x4}px 0`,
					// 			'&:last-of-type': {
					// 				marginBottom: 0,
					// 			},
					// 			'&.ss__facet--showing-all:has(.ss__facet__show-more-less)': {
					// 				'.ss__facet__options': {
					// 					maxHeight: 'none',
					// 					overflow: 'visible',
					// 					padding: 0,
					// 				},
					// 			},
					'.ss__facet__header': {
						borderBottom: 0,
						'.ss__facet__header__inner': {
							fontSize: 'inherit',
							fontWeight: 'inherit',
							color: 'inherit',
							lineHeight: 'inherit',
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
	});

	// content styles
	const contentStyles = css({
		// '.ss__autocomplete__column:has(.ss__autocomplete__content)': {
		// 	alignContent: 'flex-start',
		// },
		'.ss__autocomplete__content': {
			overflow: 'visible',
			// justifyContent: 'flex-start',
			// padding: `${custom.spacing.x4}px`,
			// borderTop: `1px solid ${custom.colors.gray02}`,
			'.ss__autocomplete__content-inner': {
				padding: 0,
				'&:after': {
					content: '""',
					display: 'block',
					height: `${custom.spacing.x4}px`,
					margin: `0 -${custom.spacing.x4}px`,
					position: 'relative',
					zIndex: 2,
				},
			},
			'.ss__banner': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				'&:last-of-type': {
					marginBottom: 0,
				},
			},
		},
	});

	// results overflow styles
	const resultsOverflowStyles = css(
		template == 'autocompleteModal'
			? {
					overflow: 'visible',
			  }
			: {
					overflowY: 'auto',
					overflowX: 'hidden',
					maxHeight: '60vh',
					...custom.styles.scrollbar(),
			  }
	);

	// results layout styles
	const resultsLayoutStyles = css({
		gap: `${custom.spacing.x4}px`,
		'.ss__result': {
			'.ss__result__details': {
				gap: `${custom.spacing.x1}px`,
				'.ss__result__details__pricing': {
					'.ss__result__price': {
						fontSize: '14px',
					},
					'.ss__price--strike': {
						fontSize: '12px',
					},
				},
			},
		},
		'.ss__inline-banner': {
			maxHeight: '250px',
			overflow: 'hidden',
		},
	});

	// results styles
	const resultsStyles = css({
		'.ss__autocomplete__content__results': {
			'.ss__results': {
				...resultsLayoutStyles,
				...resultsOverflowStyles,
			},
		},
	});

	// no results styles
	const noResultsStyles = css({
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
			'.ss__autocomplete__content__no-results__recommendations': {
				'.ss__recommendation-grid': {
					margin: `${custom.spacing.x4}px 0 0 0`,
				},
				'.ss__recommendation-grid__title': {
					textAlign: 'left',
				},
				'.ss__recommendation-grid__results': {
					...resultsLayoutStyles,
					...resultsOverflowStyles,
				},
			},
		},
	});

	// see more styles
	const seeMoreStyles = css({
		'.ss__autocomplete__button--see-more': {
			padding: 0,
			height: 'auto',
			lineHeight: 1,
			'&, &:hover': {
				backgroundColor: 'transparent',
				border: 0,
			},
			'.ss__button__content': {
				margin: 0,
			},
		},
	});

	// see more tablet styles
	const seeMoreMobileStyles = css({
		order: -1,
		// textAlign: 'left',
	});

	// standard styles
	const standardStyles = css([
		sharedStyles,
		{
			'& > .ss__autocomplete__row': {
				'.ss__autocomplete__column': {
					'&:has(.ss__autocomplete__terms-wrapper, .ss__autocomplete__facets-wrapper)': {
						flex: '0 0 220px',
						width: 'auto',
						maxWidth: 'none',
					},
				},
			},
		},
		termsWrapperStyles,
		{
			'.ss__terms-list': {
				// display: 'block',
				flexFlow: 'row wrap',
				'.ss__terms-list__row': {
					flex: '1 1 100%',
					// '&:first-of-type .ss__terms .ss__terms__title': {
					// 	marginTop: `${custom.spacing.x2}px`,
					// },
					// '&:last-of-type .ss__terms .ss__terms__options': {
					// 	marginBottom: `${custom.spacing.x2}px`,
					// },
				},
				'.ss__terms': {
					width: '100%',
					'.ss__terms__title': {
						h5: {
							// margin: 0,
							// padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
						},
					},
					'.ss__terms__options': {
						display: 'block',
						// margin: 0,
						'.ss__terms__option': {
							a: {
								padding: `${custom.spacing.x2}px 0`,
								transition: `padding-left 0.5s ease`,
							},
						},
						'.ss__terms__option--active': {
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
		},
		facetsStyles,
		contentStyles,
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`@media (max-width: ${desktopBp}px)`]: {
				'& > .ss__autocomplete__row .ss__autocomplete__column:has(.ss__autocomplete__terms-wrapper, .ss__autocomplete__facets-wrapper)': {
					flex: '0 0 200px',
				},
			},
		},
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
				'& > .ss__autocomplete__row': {
					flexWrap: 'wrap',
					'.ss__autocomplete__column': {
						paddingBottom: `${custom.spacing.x4}px`,
						borderBottom: `1px solid ${custom.colors.gray02}`,
						'&, &:has(.ss__autocomplete__terms-wrapper, .ss__autocomplete__facets-wrapper)': {
							flex: '1 1 100%',
						},
						'&:last-of-type': {
							paddingBottom: 0,
							borderBottomWidth: 0,
						},
					},
				},
				// 		'.ss__autocomplete__row:has(.ss__autocomplete__column)': {
				// 			display: 'block',
				// 			'.ss__autocomplete__column': {
				// 				width: '100%',
				// 				maxWidth: 'none',
				// 			},
				// 		},
				// 		'.ss__autocomplete__column': {
				// 			'&:has(.ss__autocomplete__facets-wrapper)': {
				// 				marginRight: 0,
				// 			},
				// 		},
				// 		'.ss__autocomplete__terms-wrapper': {
				// 			backgroundColor: 'transparent',
				// 			padding: `${custom.spacing.x4}px`,
				// 		},
				'.ss__terms-list': {
					//display: 'flex',
					'.ss__terms-list__row': {
						flex: '1 1 0%',
						// '&:first-of-type .ss__terms .ss__terms__title': {
						// 	marginTop: 0,
						// },
						// '&:last-of-type .ss__terms .ss__terms__options': {
						// 	marginBottom: 0,
						// },
					},
					'.ss__terms': {
						'.ss__terms__title': {
							// h5: {
							// 	padding: 0,
							// 	margin: `0 0 ${custom.spacing.x4}px 0`,
							// },
						},
						'.ss__terms__options': {
							display: 'flex',
							'.ss__terms__option, .ss__terms__option--active': {
								a: {
									padding: 0,
								},
							},
							'.ss__terms__option--active a': {
								backgroundColor: 'transparent',
							},
						},
					},
				},
				// 		'.ss__autocomplete__facets-wrapper': {
				// 			borderTop: `1px solid ${custom.colors.gray02}`,
				// 		},
				'.ss__autocomplete__facets': {
					'.ss__facets': {
						// gap: `0 ${custom.spacing.x4}px`,
						// flexFlow: 'row nowrap',
						// minWidth: '1px',
						flexWrap: 'nowrap',
						'.ss__facet': {
							flex: '1 1 0%',
							// minWidth: '1px',
							// '&, &:last-of-type': {
							// 	margin: 0,
							// },
						},
					},
				},
				// 		'.ss__autocomplete__button--see-more': {
				// 			...seeMoreMobileStyles,
				// 		},
			},
		},
		{
			[`@media (max-width: ${mobileBp}px)`]: {
				'.ss__autocomplete__button--see-more': {
					...seeMoreMobileStyles,
				},
			},
		},
	]);

	// mini styles
	const miniStyles = css([
		sharedStyles,
		// {
		// 	'& > .ss__autocomplete__row': {
		// 		borderBottom: `1px solid ${custom.colors.gray02}`,
		// 		'&:last-of-type': {
		// 			borderBottomWidth: 0,
		// 			'&:has(.ss__autocomplete__button--see-more)': {
		// 				paddingTop: 0,
		// 				marginTop: '-1px',
		// 			}
		// 		},
		// 	}
		// },
		termsWrapperStyles,
		contentStyles,
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
				// '.ss__autocomplete__button--see-more': {
				// 	...seeMoreMobileStyles,
				// },
			},
		},
		{
			[`@media (max-width: ${mobileBp}px)`]: {
				'.ss__autocomplete__button--see-more': {
					...seeMoreMobileStyles,
				},
			},
		},
		// {
		// 	[`@media (max-width: ${custom.breakpoints.small}px)`]: {
		// 		'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
		// 			{
		// 				gridTemplateColumns: `repeat(2, 1fr)`,
		// 			},
		// 	},
		// },
	]);

	// terms styles
	const termsStyles = css([
		// sharedStyles,
		// termsWrapperStyles,
		// contentStyles,
		// {
		// 	'.ss__autocomplete__content__no-results': {
		// 		'.ss__autocomplete__content__no-results__text': {
		// 			p: {
		// 				display: 'inline',
		// 				margin: 0,
		// 				padding: 0,
		// 				fontSize: '14px',
		// 				'& ~ p': {
		// 					paddingLeft: '4px',
		// 				},
		// 			},
		// 		},
		// 	},
		// },
		// seeMoreStyles,
		// {
		// 	[`@media (max-width: ${tabletBp}px)`]: {
		// 		'&': sharedTabletStyles,
		// 		'.ss__autocomplete__content__no-results': {
		// 			'.ss__autocomplete__content__no-results__text': {
		// 				p: {
		// 					fontSize: '12px',
		// 				},
		// 			},
		// 		},
		// 		'.ss__autocomplete__button--see-more': {
		// 			...seeMoreMobileStyles,
		// 		},
		// 	},
		// },
	]);

	if (acLayout == 'terms') {
		return termsStyles;
	} else if (acLayout == 'mini') {
		return miniStyles;
	} else {
		return standardStyles;
	}
};
