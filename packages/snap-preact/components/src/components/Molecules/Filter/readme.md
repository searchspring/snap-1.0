# Filter

Renders a facet filter.

## Sub-components
- Icon
- Button

## Usage
```tsx
import { Filter } from '@athoscommerce/snap-preact/components';
```

### facetLabel
The `facetLabel` prop specifies the filter label. Typically set to the facet label.

```tsx
<Filter facetLabel={'Brand'} />
```

### valueLabel
The `valueLabel` prop specifies the filter value. Typically set to the facet value label.

```tsx
<Filter valueLabel={'Nike'} />
```

### url
The `url` prop specifies a link to clear the filter selection.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} url={filter.url} />
```

### hideFacetLabel
The `hideFacetLabel` prop will disable the filter facet label.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} hideFacetLabel={true} />
```
### separator
The `separator` prop will specify the separator character between `facetLabel` and `valueLabel`.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} separator={': '} />
```

### icon
The `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery). Can take a `false` boolean to disable the icon. 

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} icon={'close-thin'} />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function for when a filter is clicked.

```tsx
<Filter onClick={(e)=>{console.log(e)}}/>
```
