# AutocompleteTemplate

Renders an autocomplete popup that binds to an `<input>` element.

The AutocompleteTemplate component is very similar to the Autocomplete component in functionality, however the main difference is that the autocompleteTemplate components layout is determined by the layout prop, which specifies what child components render and where.

## Components Used
- Banner
- Results
- Icon
- TermsList
- Terms
- Button
- Facets
- FacetsHorizontal

## Usage

### input
The required `input` prop expects either:

- a string CSS selector that targets `<input>` element(s) to bind to

- an `<input>` element to bind to

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} />
```

### controller
The required `controller` prop specifies a reference to the autocomplete controller.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} />
```

### layout
The `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.

There are also a few special module names - `C1`, `C2`, `C3`, `C4`, & `_` 

All of the `Cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `C1` module can be overwrote via the `column1` prop. 

The `_` module is used a seperator module to center|left|right justify the other elements in the layout.

available modules to use in the layout are 

`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`


```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} layout={[['C1','C2','C3']]}/>
```

### column1
The `column1` prop specifies the layout to render in the `C1` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} column1={{
    width: '150px',
    layout: ['terms.history', 'terms.trending']
}}/>
```

### column2
The `column2` prop specifies a layout array to render in the `C2` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} column2={{
    width: '150px',
    layout: ['facets']
}}/>
```

### column3
The `column3` prop specifies a layout array to render in the `C3` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `[['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} column3={{
    width: '150px',
    layout: [['content', ['_', 'button.see-more', '_']]]
}}/>
```

### column4
The `column4` prop specifies a layout array to render in the `C4` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `[['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} column4={{
width: '150px',
layout: ['facets']
}}/>
```

### width
The `width` prop specifies a width for the overall component. The default value is '100%'.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} width="800px" />
```

### excludeBanners
The `excludeBanners` prop specifies if the Autocomplete should automatically include banners. 

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} excludeBanners={true} />
```

### vertical
The `vertical` prop will alter autocomplete's CSS to display in a vertical layout.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} vertical={true} />
```

### facetsTitle
The `facetsTitle` prop will display the given text above the facets area.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />
```

### contentTitle
The `contentTitle` prop will display the given text above the content area.

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />
```

### viewportMaxHeight
The `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. 

```jsx
<AutocompleteTemplate controller={controller} input={'#searchInput'} viewportMaxHeight={true} />
```
