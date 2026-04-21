# Radio

Renders a native or custom radio.

## Sub-components
- Icon

## Usage

### native
The `native` prop will render an `<input type='radio'>` element.

```tsx
    <Radio native />
```

### checked
The `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.

```tsx
    <Radio checked={true} />
```

### startChecked
The `startChecked` prop sets the radio to be checked on the initial render. Must use internal state by not using the `checked` prop.

```tsx
    <Radio startChecked={true} />
```

### disabled
The `disabled` prop disables the radio from being toggled or invoking the `onClick` callback.

```tsx
    <Radio disabled={true} />
```

### disableA11y
The `disableA11y` prop specifies a boolean to disable the autoset ally properties.

```tsx
    <Radio disableA11y={true} />
```

### size
The `size` prop will set the custom radio size.

```tsx
    <Radio size={'16px'} />
```

### color
The `color` prop sets the radio border stroke and fill colors.

```tsx
    <Radio color={'#ffff00'} />
```


### checkedIcon
The `checkedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is checked. This only applies if using a custom radio `native={false}`.

```tsx
    <Radio checkedIcon={'bullet'} />
```

### unCheckedIcon
The `unCheckedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is not pchecked. This only applies if using a custom radio `native={false}`.

```tsx
    <Radio unCheckedIcon={'bullet-o'} />
```


### Events

#### onClick
The `onClick` prop allows for a custom callback function for when the radio is clicked.

```tsx
    <Radio onClick={(e)=>{console.log(e)}} />
```
