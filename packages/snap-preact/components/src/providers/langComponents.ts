/* ATOMS */
// import type { BadgeImageLang } from '../components/Atoms/BadgeImage';
// import type { BadgePillLang } from '../components/Atoms/BadgePill';
// import type { BadgeRectangleLang } from '../components/Atoms/BadgeRectangle';
// import type { BadgeTextLang } from '../components/Atoms/BadgeText';
// import type { BreadcrumbsLang } from '../components/Atoms/Breadcrumbs';
import type { ButtonLang } from '../components/Atoms/Button';
// import type { DropdownLang } from '../components/Atoms/Dropdown';
// import type { FormattedNumberLang } from '../components/Atoms/FormattedNumber';
// import type { IconLang } from '../components/Atoms/Icon';
// import type { ImageLang } from '../components/Atoms/Image';
// import type { LoadingBarLang } from '../components/Atoms/Loading';
// import type { BannerLang, InlineBannerLang } from '../components/Atoms/Merchandising';
// import type { OverlayLang } from '../components/Atoms/Overlay';
import type { PaginationInfoLang } from '../components/Atoms/PaginationInfo';
// import type { PriceLang } from '../components/Atoms/Price';
// import type { SkeletonLang } from '../components/Atoms/Skeleton';
// import type { ToggleLang } from '../components/Atoms/Toggle';

/* MOLECULES */
// import type { CalloutBadgeLang } from '../components/Molecules/CalloutBadge';
// import type { CarouselLang } from '../components/Molecules/Carousel';
import type { CheckboxLang } from '../components/Molecules/Checkbox';
import type { ErrorHandlerLang } from '../components/Molecules/ErrorHandler';
import type { FacetGridOptionsLang } from '../components/Molecules/FacetGridOptions';
import type { FacetHierarchyOptionsLang } from '../components/Molecules/FacetHierarchyOptions';
import type { FacetListOptionsLang } from '../components/Molecules/FacetListOptions';
import type { FacetPaletteOptionsLang } from '../components/Molecules/FacetPaletteOptions';
import type { FacetSliderLang } from '../components/Molecules/FacetSlider';
// import type { FacetToggleLang } from '../components/Molecules/FacetToggle';
import type { FilterLang } from '../components/Molecules/Filter';
import type { GridLang } from '../components/Molecules/Grid';
import type { LayoutSelectorLang } from '../components/Molecules/LayoutSelector';
import type { ListLang } from '../components/Molecules/List';
import type { LoadMoreLang } from '../components/Molecules/LoadMore';
// import type { OverlayBadgeLang } from '../components/Molecules/OverlayBadge';
import type { PaginationLang } from '../components/Molecules/Pagination';
import type { PerPageLang } from '../components/Molecules/PerPage';
import type { RadioLang } from '../components/Molecules/Radio';
import type { RadioListLang } from '../components/Molecules/RadioList';
// import type { RatingLang } from '../components/Molecules/Rating';
// import type { ResultLang } from '../components/Molecules/Result';
// import type { SearchInputLang } from '../components/Molecules/SearchInput';
import type { SelectLang } from '../components/Molecules/Select';
// import type { SlideoutLang } from '../components/Molecules/Slideout';
import type { SortByLang } from '../components/Molecules/SortBy';
// import type { SwatchesLang } from '../components/Molecules/Swatches';
// import type { VariantSelectionLang } from '../components/Molecules/VariantSelection';

/* ORGANISMS */
import type { FacetLang } from '../components/Organisms/Facet';
import type { FacetsHorizontalLang } from '../components/Organisms/FacetsHorizontal';
// import type { FacetsLang } from '../components/Organisms/Facets';
import type { FilterSummaryLang } from '../components/Organisms/FilterSummary';
import type { MobileSidebarLang } from '../components/Organisms/MobileSidebar';
import type { NoResultsLang } from '../components/Organisms/NoResults';
import type { RecommendationBundleLang } from '../components/Templates/RecommendationBundle';
// import type { ResultsLang } from '../components/Organisms/Results';
import type { SearchHeaderLang } from '../components/Atoms/SearchHeader';
import type { SidebarLang } from '../components/Organisms/Sidebar';

/* TEMPLATES */
import type { RecommendationLang } from '../components/Templates/Recommendation';
import type { SearchLang } from '../components/Templates/Search';
import { AutocompleteTemplateLang } from '../components/Templates/AutocompleteTemplate';
import { TermsLang } from '../components/Molecules/Terms';
import { DeepPartial } from '../../../src/types';

// type ComponentLang> = Partial<ComponentLang> & { named?: Partial<{ [named?: Partial<string]?: Partial<Partial<ComponentLang> } };

export type LangComponentOverrides = DeepPartial<LangComponents>;

export type LangComponents = {
	/* ATOMS */
	// badgeImage: BadgeImageLang
	// badgePill: BadgePillLang
	// badgeRectangle: BadgeRectangleLang
	// badgeText: BadgeTextLang
	// breadcrumbs: BreadcrumbsLang
	button: ButtonLang;
	// dropdown: DropdownLang
	// formattedNumber: FormattedNumberLang
	// icon: IconLang
	// image: ImageLang
	// loadingBar: LoadingBarLang
	// banner: BannerLang
	// inlineBanner: InlineBannerLang
	// overlay: OverlayLang
	paginationInfo: PaginationInfoLang;
	// price: PriceLang
	// skeleton: SkeletonLang
	// toggle: ToggleLang;

	/* MOLECULES */
	// calloutBadge: CalloutBadgeLang
	// carousel: CarouselLang
	checkbox: CheckboxLang;
	grid: GridLang;
	layoutSelector: LayoutSelectorLang;
	list: ListLang;
	radio: RadioLang;
	errorHandler: ErrorHandlerLang;
	facetGridOptions: FacetGridOptionsLang;
	facetHierarchyOptions: FacetHierarchyOptionsLang;
	facetListOptions: FacetListOptionsLang;
	facetPaletteOptions: FacetPaletteOptionsLang;
	facetSlider: FacetSliderLang;
	// facetToggle: FacetToggleLang
	filter: FilterLang;
	loadMore: LoadMoreLang;
	// overlayBadge: OverlayBadgeLang
	pagination: PaginationLang;
	perPage: PerPageLang;
	radioList: RadioListLang;
	// rating: RatingLang
	// result: ResultLang
	// searchInput: SearchInputLang
	select: SelectLang;
	// slideout: SlideoutLang;
	sortBy: SortByLang;
	['terms.history']: TermsLang;
	['terms.suggestions']: TermsLang;
	['terms.trending']: TermsLang;
	// swatches: SwatchesLang
	// variantSelection: VariantSelectionLang

	/* ORGANISMS */
	facet: FacetLang;
	// facets: FacetsLang
	facetsHorizontal: FacetsHorizontalLang;
	filterSummary: FilterSummaryLang;
	noResults: NoResultsLang;
	recommendationBundle: RecommendationBundleLang;
	// results: ResultsLang
	searchHeader: SearchHeaderLang;
	sidebar: SidebarLang;
	mobileSidebar: MobileSidebarLang;
	// toolbar: ToolbarLang

	/* TEMPLATES */
	// autocompleteTerms: AutocompleteTermsLang;
	recommendation: RecommendationLang;
	search: SearchLang;
	autocompleteTemplate: AutocompleteTemplateLang;
	// searchHorizontal: SearchHorizontalLang
};
