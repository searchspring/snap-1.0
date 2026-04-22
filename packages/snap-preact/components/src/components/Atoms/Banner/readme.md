# Banner

Renders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. 

This `Banner` component does not support inline banners. See `InlineBanner` component below.

## Usage
```tsx
import { Banner } from '@athoscommerce/snap-preact/components';
```

### content
The required `content` prop specifies an object of banners returned from the athos API.

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'header'} />
```

### type
The required `type` prop specifies the banner type to render from the `content` object.

Banner Types include `header`, `footer`, `left`, and `banner`. 

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'header'} />
```

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'footer'} />
```

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'left'} />
```

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'banner'} />
```