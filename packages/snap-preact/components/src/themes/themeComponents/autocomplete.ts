import { AutocompleteProps, AutocompleteTemplatesLegalProps } from '../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../providers';

export const autocompleteThemeComponentProps: ThemeComponent<'autocomplete', AutocompleteProps, AutocompleteTemplatesLegalProps> = {
	default: {
		'autocomplete facet': {
			// valueProps,
			limit: 6,
			disableOverflow: true,
			disableCollapse: true,
			searchable: false,
			showClearAllText: false,
			showSelectedCount: false,
			rangeInputs: false,
		},
		'autocomplete facetGridOptions': {
			// onClick: facetClickEvent,
			columns: 3,
			previewOnFocus: true,
		},
		'autocomplete facetHierarchyOptions': {
			// onClick: facetClickEvent,
			hideCount: true,
			previewOnFocus: true,
		},
		'autocomplete facetListOptions': {
			// onClick: facetClickEvent,
			hideCheckbox: true,
			hideCount: true,
			previewOnFocus: true,
		},
		'autocomplete facetPaletteOptions': {
			// onClick: facetClickEvent,
			hideLabel: true,
			columns: 3,
			previewOnFocus: true,
		},
		'autocomplete result': {
			hideBadge: true,
			hideVariantSelections: true,
		},
		'autocomplete recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
	mobile: {
		'autocomplete results': {
			columns: 2,
			rows: 1,
		},

		'autocomplete recommendationGrid': {
			columns: 2,
			rows: 1,
		},
		'autocomplete searchInput button.close-search icon': {
			icon: 'angle-left',
		},
	},
	tablet: {
		'autocomplete results': {
			columns: 3,
			rows: 1,
		},
	},
	desktop: {
		'autocomplete results': {
			columns: 2,
			rows: 2,
		},
		'autocomplete recommendationGrid': {
			columns: 3,
			rows: 2,
		},
	},
};
