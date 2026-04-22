# Overlay

Renders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.

## Usage
```tsx
import { Overlay } from '@athoscommerce/snap-preact/components';
```

### active
The required `active` prop specifies when to render the component.

```tsx
<Overlay active={true} />
```

### color
The `color` prop specifies the color of the overlay.

```tsx
<Overlay active={true} color={'rgba(0,0,0,0.8)'} />
```

### transitionSpeed
The `transitionSpeed` prop specifies animation transition speed.

```tsx
<Overlay active={true} transitionSpeed='0.5s' />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function.

```tsx
<Overlay active={true} onClick={(e)=>{console.log(e)}} />
```
