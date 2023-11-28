import type { BadgeProps } from '../components/Atoms/Badge';
import type { BreadcrumbsProps } from '../components/Atoms/Breadcrumbs';
import type { ButtonProps } from '../components/Atoms/Button';
import type { DropdownProps } from '../components/Atoms/Dropdown';
import type { FormattedNumberProps } from '../components/Atoms/FormattedNumber';
import type { IconProps } from '../components/Atoms/Icon';
import type { ImageProps } from '../components/Atoms/Image';
import type { LoadingBarProps } from '../components/Atoms/Loading';
import type { BannerProps, InlineBannerProps } from '../components/Atoms/Merchandising';
import type { OverlayProps } from '../components/Atoms/Overlay';
import type { PriceProps } from '../components/Atoms/Price';
import type { SkeletonProps } from '../components/Atoms/Skeleton';
import type { TermsProps } from '../components/Atoms/Terms';
import type { CarouselProps } from '../components/Molecules/Carousel';
import type { CheckboxProps } from '../components/Molecules/Checkbox';
import type { ErrorHandlerProps } from '../components/Molecules/ErrorHandler';
import type { FacetGridOptionsProps } from '../components/Molecules/FacetGridOptions';
import type { FacetHierarchyOptionsProps } from '../components/Molecules/FacetHierarchyOptions';
import type { FacetListOptionsProps } from '../components/Molecules/FacetListOptions';
import type { FacetPaletteOptionsProps } from '../components/Molecules/FacetPaletteOptions';
import type { FacetSliderProps } from '../components/Molecules/FacetSlider';
import type { FilterProps } from '../components/Molecules/Filter';
import type { PaginationProps } from '../components/Molecules/Pagination';
import type { PerPageProps } from '../components/Molecules/PerPage';
import type { RatingProps } from '../components/Molecules/Rating';
import type { ResultProps } from '../components/Molecules/Result';
import type { SearchInputProps } from '../components/Molecules/SearchInput';
import type { LoadMoreProps } from '../components/Molecules/LoadMore';
import type { SelectProps } from '../components/Molecules/Select';
import type { SlideoutProps } from '../components/Molecules/Slideout';
import type { SortByProps } from '../components/Molecules/SortBy';
import type { BranchOverrideProps } from '../components/Organisms/BranchOverride';
import type { FacetProps } from '../components/Organisms/Facet';
import type { FacetsProps } from '../components/Organisms/Facets';
import type { FilterSummaryProps } from '../components/Organisms/FilterSummary';
import type { ResultsProps } from '../components/Organisms/Results';
import type { SearchHeaderProps } from '../components/Atoms/SearchHeader';
import type { SidebarProps } from '../components/Organisms/Sidebar';
import type { ToolbarProps } from '../components/Organisms/Toolbar';
import type { AutocompleteProps } from '../components/Templates/Autocomplete';
import type { RecommendationProps } from '../components/Templates/Recommendation';
import type { SearchProps } from '../components/Templates/Search';
import type { NoResultsProps } from '../components/Atoms/NoResults';
import type { MobileSidebarProps } from '../components/Organisms/MobileSidebar';
import type { FacetToggleProps } from '../components/Molecules/FacetToggle';
import type { ToggleProps } from '../components/Atoms/Toggle';
import type { RadioListProps } from '../components/Molecules/RadioList';
import type { ListProps } from '../components/Molecules/List';
import type { RadioProps } from '../components/Molecules/Radio';
import type { LayoutSelectorProps } from '../components/Molecules/LayoutSelector';

type GenericComponentProps<ComponentProps> = Partial<ComponentProps> & { named?: { [named: string]: Partial<ComponentProps> } };

export type ThemeComponents = {
	/* ATOMS */
	badge?: GenericComponentProps<BadgeProps>;
	breadcrumbs?: GenericComponentProps<BreadcrumbsProps>;
	button?: GenericComponentProps<ButtonProps>;
	dropdown?: GenericComponentProps<DropdownProps>;
	formattedNumber?: GenericComponentProps<FormattedNumberProps>;
	icon?: GenericComponentProps<IconProps>;
	image?: GenericComponentProps<ImageProps>;
	loadingBar?: GenericComponentProps<LoadingBarProps>;
	banner?: GenericComponentProps<BannerProps>;
	inlineBanner?: GenericComponentProps<InlineBannerProps>;
	overlay?: GenericComponentProps<OverlayProps>;
	price?: GenericComponentProps<PriceProps>;
	skeleton?: GenericComponentProps<SkeletonProps>;
	terms?: GenericComponentProps<TermsProps>;
	toggle?: GenericComponentProps<ToggleProps>;

	/* MOLECULES */
	carousel?: GenericComponentProps<CarouselProps>;
	checkbox?: GenericComponentProps<CheckboxProps>;
	radio?: GenericComponentProps<RadioProps>;
	errorHandler?: GenericComponentProps<ErrorHandlerProps>;
	facetGridOptions?: GenericComponentProps<FacetGridOptionsProps>;
	facetHierarchyOptions?: GenericComponentProps<FacetHierarchyOptionsProps>;
	facetListOptions?: GenericComponentProps<FacetListOptionsProps>;
	facetPaletteOptions?: GenericComponentProps<FacetPaletteOptionsProps>;
	facetSlider?: GenericComponentProps<FacetSliderProps>;
	filter?: GenericComponentProps<FilterProps>;
	loadMore?: GenericComponentProps<LoadMoreProps>;
	pagination?: GenericComponentProps<PaginationProps>;
	perPage?: GenericComponentProps<PerPageProps>;
	rating?: GenericComponentProps<RatingProps>;
	result?: GenericComponentProps<ResultProps>;
	searchInput?: GenericComponentProps<SearchInputProps>;
	select?: GenericComponentProps<SelectProps>;
	slideout?: GenericComponentProps<SlideoutProps>;
	sortBy?: GenericComponentProps<SortByProps>;
	facetToggle?: GenericComponentProps<FacetToggleProps>;
	radioList?: GenericComponentProps<RadioListProps>;
	list?: GenericComponentProps<ListProps>;
	layoutSelector?: GenericComponentProps<LayoutSelectorProps>;

	/* ORGANISMS */
	branchOverride?: GenericComponentProps<BranchOverrideProps>;
	facet?: GenericComponentProps<FacetProps>;
	facets?: GenericComponentProps<FacetsProps>;
	filterSummary?: GenericComponentProps<FilterSummaryProps>;
	noResults?: GenericComponentProps<NoResultsProps>;
	results?: GenericComponentProps<ResultsProps>;
	searchHeader?: GenericComponentProps<SearchHeaderProps>;
	sidebar?: GenericComponentProps<SidebarProps>;
	mobileSidebar?: GenericComponentProps<MobileSidebarProps>;
	toolbar?: GenericComponentProps<ToolbarProps>;
	/* TEMPLATES */
	autocomplete?: GenericComponentProps<AutocompleteProps>;
	recommendation?: GenericComponentProps<RecommendationProps>;
	search?: GenericComponentProps<SearchProps>;
};
