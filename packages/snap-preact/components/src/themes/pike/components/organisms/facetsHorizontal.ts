import { css } from '@emotion/react';
import type { FacetsHorizontalProps } from '../../../../components/Organisms/FacetsHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const dropdownButtonHeight = custom.sizes.height;
const columnsSelector = `.ss__facet-hierarchy-options, .ss__facet-list-options, .ss__facet-palette-options.ss__facet-palette-options--list`;

// CSS in JS style script for the Facets component
const facetsHorizontalStyleScript = (props: FacetsHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// facets horizontal styles
	const facetsHorizontalStyles = css({
		margin: 0,
		...custom.styles.boxSizing('facetsHorizontal', props?.treePath, props?.name),
		'.ss__facets-horizontal__header': {
			gap: `${custom.spacing.x2}px`,
			position: 'relative',
			'& > *': {
				minWidth: '1px',
				flex: '0 1 auto',
				width: `calc((100% - ${custom.spacing.x2 * 5}px) / 6)`,
			},
			'& > *, .ss__facets-horizontal__header__dropdown, .ss__mobile-sidebar': {
				margin: 0,
			},
			'.ss__facets-horizontal__header__dropdown': {
				position: 'static',
				'&.ss__dropdown--open': {
					'.ss__dropdown__button': {
						'.ss__dropdown__button__heading': {
							'.ss__icon': {
								transform: 'rotate(180deg)',
							},
						},
					},
					'.ss__dropdown__content': {
						width: 'auto',
						minWidth: '1px',
						maxHeight: 'none',
						overflowY: 'visible',
						padding: `${custom.spacing.x4}px`,
						marginTop: `${custom.spacing.x2}px`,
						right: 0,
					},
				},
				'.ss__dropdown__button, .ss__dropdown__content': {
					...custom.styles.box(variables?.colors?.text, `0 ${custom.spacing.x2}px`),
				},
				'.ss__dropdown__button': {
					height: `${dropdownButtonHeight}px`,
					lineHeight: `${dropdownButtonHeight}px`,
					'&, .ss__dropdown__button__heading': {
						width: '100%',
					},
					'.ss__dropdown__button__heading': {
						flexFlow: 'row nowrap',
						justifyContent: 'flex-start',
						gap: `${custom.spacing.x1}px`,
						padding: 0,
						'& > *': {
							minWidth: '1px',
						},
						span: {
							flex: '1 1 0%',
							paddingRight: `${custom.spacing.x1}px`,
							fontWeight: custom.fonts.weight01,
							...custom.styles.textOverflow(),
						},
						'.ss__icon': {
							transition: 'transform ease 0.5s',
						},
					},
				},
				'.ss__dropdown__content': {
					[columnsSelector]: {
						display: 'flex',
						flexFlow: 'row wrap',
						gap: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
						'& > *': {
							flex: '0 1 auto',
							width: `calc((100% - ${custom.spacing.x2 * 3}px) / 4)`,
							minWidth: '1px',
							margin: 0,
						},
					},
					'.ss__checkbox, .ss__radio, .ss__search-input .ss__search-input__input, .ss__facet__range-inputs .ss__facet__range-input__input': {
						backgroundColor: custom.colors.white,
					},
					'.ss__facet': {
						margin: 0,
					},
					'.ss__facet.ss__facet--showing-all:has(.ss__facet__show-more-less) .ss__facet__options': {
						maxHeight: '360px',
					},
					'.ss__facet-list-options': {
						'.ss__facet-list-options__option .ss__facet-list-options__option__value': {
							...custom.styles.textOverflow(),
						},
					},
					'.ss__facet-hierarchy-options': {
						'.ss__facet-hierarchy-options__option .ss__facet-hierarchy-options__option__value': {
							...custom.styles.textOverflow(),
						},
						'.ss__facet-hierarchy-options__option--return, .ss__facet-hierarchy-options__option--filtered': {
							width: '100%',
						},
						'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
							'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': {
								paddingLeft: 0,
							},
						},
					},
					'.ss__facet-grid-options': {
						'.ss__facet-grid-options__option:not(.ss__facet-grid-options__option--filtered)': {
							backgroundColor: custom.colors.white,
						},
					},
					'.ss__facet--slider .ss__facet__options, .ss__facet__range-inputs': {
						maxWidth: '50%',
						marginLeft: 'auto',
						marginRight: 'auto',
					},
					'.ss__facet__show-more-less': {
						justifyContent: 'center',
					},
				},
			},
			'.ss__facets-horizontal__header__dropdown .ss__dropdown__content .ss__facet__show-more-less, .ss__mobile-sidebar .ss__slideout__button .ss__button':
				{
					display: 'flex',
				},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__facets-horizontal__header': {
				'& > *': {
					width: `calc((100% - ${custom.spacing.x2 * 3}px) / 4)`,
				},
				'.ss__facets-horizontal__header__dropdown .ss__dropdown__content': {
					[columnsSelector]: {
						'& > *': {
							width: `calc((100% - ${custom.spacing.x2 * 2}px) / 3)`,
						},
					},
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__facets-horizontal__header': {
				'& > *': {
					width: `calc((100% - ${custom.spacing.x2 * 2}px) / 3)`,
				},
				'.ss__facets-horizontal__header__dropdown .ss__dropdown__content': {
					[columnsSelector]: {
						'& > *': {
							width: `calc((100% - ${custom.spacing.x2}px) / 2)`,
						},
					},
				},
			},
		},
	});

	return facetsHorizontalStyles;
};

// FacetsHorizontal component props
export const facetsHorizontal: ThemeComponent<'facetsHorizontal', FacetsHorizontalProps> = {
	default: {
		facetsHorizontal: {
			themeStyleScript: facetsHorizontalStyleScript,
			iconExpand: custom.icons.arrowDown,
			iconCollapse: custom.icons.arrowDown,
			alwaysShowFiltersButton: true,
		},
		'facetsHorizontal dropdown button icon': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
		},
		'facetsHorizontal dropdown facet': {
			statefulOverflow: true,
			display: {
				list: {
					limit: 32,
				},
				hierarchy: {
					limit: 32,
				},
				grid: {
					limit: 36,
				},
				palette: {
					limit: 36,
				},
			},
		},
		'facetsHorizontal mobileSidebar facet': {
			statefulOverflow: true,
			display: {
				list: {
					limit: 10,
				},
				hierarchy: {
					limit: 10,
				},
				grid: {
					limit: 12,
				},
				palette: {
					limit: 12,
				},
			},
		},
		'facetsHorizontal facetGridOptions': {
			gridSize: '48px',
		},
		'facetsHorizontal mobileSidebar facetGridOptions': {
			gridSize: '52px',
		},
		'facetsHorizontal facetPaletteOptions': {
			gridSize: '48px',
		},
		'facetsHorizontal mobileSidebar facetPaletteOptions': {
			gridSize: '52px',
		},
	},
};
