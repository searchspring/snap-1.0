# FacetsHorizontal

Renders all facets in a horizontal display. Also incluses MobileSidebar.

## Sub-components
- Facet
- Dropdown
- MobileSidebar

## Usage

### controller
The `controller` prop specifies a reference to the search controller.

```tsx
<FacetsHorizontal controller={controller} />
```

### facets
The optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. 

```tsx
<FacetsHorizontal facets={facets} />
```

### iconExpand
The `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.

```tsx
<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />
```

### iconCollapse
The `iconCollapse` prop is the name of the icon to render when the facet is in its open state.

```tsx
<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />
```

### limit
The `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.

```tsx
<FacetsHorizontal controller={controller} limit={6}/>
```

### showSelectedCount
The `showSelectedCount` prop shows the number of selected options within the facet header.

```tsx
<FacetsHorizontal controller={controller} showSelectedCount={true} />
```

### hideSelectedCountParenthesis
The `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.

```tsx
<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />
```

### alwaysShowFiltersButton
The `alwaysShowFiltersButton` prop will always render the button and MobileSidebar, not just when facets are overflowing.

```tsx
<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />
```

### showClearAllText
The `showClearAllText` prop specifies if the clear all text should render.

```tsx
<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />
```


### clearAllText
The `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'

```tsx
<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />
```


### clearAllIcon
The `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.

```tsx
<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />
```

### hideFiltersButton
The `hideFiltersButton` specifies wether the filters button should be rendered or not. If true, the button will render when there are more filters to show than the limit prop allows (unless the alwaysShowFiltersButton prop is passed, which will ignore the limit). 

```tsx
<FacetsHorizontal controller={controller} hideFiltersButton={true}/>
```


### onFacetOptionClick
The `onFacetOptionClick` callback function for when a facet option is clicked. 

```tsx
<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>
```