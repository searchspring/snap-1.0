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

	// determine template being used
	const isFixed = template == 'autocompleteFixed';
	const isSlideout = template == 'autocompleteSlideout';

	// get autocomplete layout
	const acLayout = props?.layout ? props.layout : 'standard';

	// shared styles
	const sharedStyles = css({
		padding: isSlideout ? 0 : `${custom.spacing.x4}px`,
		gap: `${custom.spacing.x4}px`,
		border: isSlideout ? 0 : `1px solid ${custom.colors.gray02}`,
		backgroundColor: custom.colors.white,
		[textSelectors]: {
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
		'.ss__terms-list .ss__terms .ss__terms__options .ss__terms__option a': {
			fontSize: '16px',
		},
	});

	// shared layout styles
	const sharedLayoutStyles = css({
		'& > .ss__autocomplete__row': {
			flex: '1 1 100%',
			minWidth: '1px',
			padding: isSlideout ? `0 0 ${custom.spacing.x4}px 0` : `0 ${custom.spacing.x4}px ${custom.spacing.x4}px ${custom.spacing.x4}px`,
			margin: isSlideout ? 0 : `0 -${custom.spacing.x4}px`,
			borderBottom: `1px solid ${custom.colors.gray02}`,
			'&:last-of-type': {
				borderBottomWidth: 0,
				paddingBottom: 0,
			},
		},
	});

	// shared tablet styles
	const sharedTabletStyles = css({
		[headerSelectors]: {
			fontSize: '14px',
		},
		'.ss__terms-list .ss__terms .ss__terms__options .ss__terms__option a': {
			fontSize: '14px',
		},
	});

	// terms wrapper styles
	const termsWrapperStyles = css({
		'.ss__autocomplete__terms-wrapper': {
			backgroundColor: 'transparent',
		},
	});

	// facets styles
	const facetsStyles = css({
		'.ss__autocomplete__facets': {
			padding: 0,
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
		'.ss__autocomplete__content': {
			overflow: 'visible',
			'.ss__autocomplete__content-inner': {
				padding: 0,
				'& > *': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
				},
			},
		},
	});

	// results layout styles
	const resultsLayoutStyles = css({
		gap: `${custom.spacing.x4}px`,
		overflowY: isFixed ? 'auto' : 'hidden',
		overflowX: 'hidden',
		maxHeight: isFixed ? '60vh' : '',
		...custom.styles.scrollbar(),
		'.ss__result': {
			'.ss__result__details': {
				gap: `${custom.spacing.x1}px`,
				'&:after': {
					display: 'none',
				},
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
			maxHeight: '212px',
			overflow: 'hidden',
		},
	});

	// results styles
	const resultsStyles = css({
		'.ss__autocomplete__content__results': {
			'.ss__results': {
				...resultsLayoutStyles,
			},
		},
	});

	// mobile results styles
	const resultsMobileStyles = css({
		'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
			{
				gridTemplateColumns: `repeat(2, 1fr)`,
				'& > *:nth-child(n+3)': {
					display: 'none',
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
					fontSize: acLayout == 'terms' ? '16px' : '14px',
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

	// see more mobile styles
	const seeMoreMobileStyles = css({
		order: -1,
	});

	// standard styles
	const standardStyles = css([
		sharedStyles,
		{
			'& > .ss__autocomplete__row': {
				gap: `${custom.spacing.x4}px`,
				'.ss__autocomplete__column': {
					alignContent: 'flex-start',
					minWidth: '1px',
					padding: `0 ${custom.spacing.x4}px`,
					margin: `0 -${custom.spacing.x4}px`,
					borderBottom: `0 solid ${custom.colors.gray02}`,
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
				flexFlow: 'row wrap',
				'.ss__terms-list__row': {
					flex: '1 1 100%',
				},
				'.ss__terms': {
					width: '100%',
					'.ss__terms__options': {
						display: 'block',
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
				'& > .ss__autocomplete__row .ss__autocomplete__column': {
					'&:has(.ss__autocomplete__terms-wrapper, .ss__autocomplete__facets-wrapper)': {
						flex: '0 0 200px',
					},
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
						borderBottomWidth: '1px',
						'&:has(.ss__autocomplete__terms-wrapper, .ss__autocomplete__facets-wrapper)': {
							flex: '1 1 100%',
						},
						'&:last-of-type': {
							paddingBottom: 0,
							borderBottomWidth: 0,
						},
						'.ss__autocomplete__row:has(.ss__autocomplete__button--see-more)': {
							minWidth: '1px',
							flex: '1 1 100%',
							padding: `${custom.spacing.x4}px ${custom.spacing.x4}px 0 ${custom.spacing.x4}px`,
							margin: `0 -${custom.spacing.x4}px`,
							borderTop: `1px solid ${custom.colors.gray02}`,
						},
					},
				},
				'.ss__terms-list': {
					'.ss__terms-list__row': {
						flex: '1 1 0%',
					},
					'.ss__terms': {
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
		{
			[`@media (max-width: ${mobileBp}px)`]: {
				'.ss__autocomplete__button--see-more': {
					...seeMoreMobileStyles,
				},
			},
		},
		{
			[`@media (max-width: ${custom.breakpoints.small}px)`]: {
				...resultsMobileStyles,
			},
		},
	]);

	// mini styles
	const miniStyles = css([
		sharedStyles,
		sharedLayoutStyles,
		termsWrapperStyles,
		contentStyles,
		{
			'.ss__autocomplete__content .ss__autocomplete__content-inner > *:last-of-type': {
				marginBottom: 0,
			},
		},
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
			},
		},
		{
			[`@media (max-width: ${mobileBp}px)`]: {
				'.ss__autocomplete__button--see-more': {
					...seeMoreMobileStyles,
				},
			},
		},
		{
			[`@media (max-width: ${custom.breakpoints.small}px)`]: {
				...resultsMobileStyles,
			},
		},
	]);

	// terms styles
	const termsStyles = css([
		sharedStyles,
		sharedLayoutStyles,
		termsWrapperStyles,
		contentStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
				'.ss__autocomplete__content__no-results': {
					'.ss__autocomplete__content__no-results__text': {
						p: {
							fontSize: '14px',
						},
					},
				},
				'.ss__autocomplete__button--see-more': {
					...seeMoreMobileStyles,
				},
			},
		},
	]);

	if (acLayout == 'terms') {
		return termsStyles;
	} else if (acLayout == 'mini') {
		return miniStyles;
	} else {
		return standardStyles;
	}
};
