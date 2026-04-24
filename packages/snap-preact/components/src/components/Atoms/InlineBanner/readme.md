# Inline Banner

## Usage
```tsx
import { InlineBanner } from '@athoscommerce/snap-preact/components';
```

### banner
The `banner` prop specifies a reference to an inline banner object from the `content` object.

```tsx
<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} />
```

### width
The `width` prop specifies the width of the inline banner.

```tsx
<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} width={'300px'} />
```

### layout
The `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.

```tsx
<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} layout={'grid'} />
```


### onClick
The `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.

```js
const CustomBannerClick = (e, banner) => {
    console.log('You Clicked a banner!' , e)
};
```

```tsx
<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} onClick={CustomBannerClick} />
```