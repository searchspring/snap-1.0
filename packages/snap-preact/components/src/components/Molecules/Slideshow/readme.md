# Slideshow

Renders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.

## Sub-components
- Image
- Button

## Usage

```jsx
<Slideshow images={imageArray} />
```

### images
The `images` prop accepts an array of image URLs (strings) or image objects with callbacks and metadata. Image objects allow for individual click handlers and custom properties.

```jsx
<Slideshow images={['img1.jpg', 'img2.jpg', 'img3.jpg']} />
```

or

```jsx
const imageObjects = [
    {
        src: 'product1.jpg',
        alt: 'Premium Headphones',
        onClick: (image, index) => openProductDetails(image)
    },
    {
        src: 'product2.jpg',
        alt: 'Wireless Speaker',
        onClick: (image, index) => addToCart(image)
    }
];
```
```jsx
<Slideshow images={imageObjects} />
```

### slidesToShow
The `slidesToShow` prop specifies the number of slides visible at once in the slideshow.

```jsx
<Slideshow images={imageArray} slidesToShow={4} />
```

### slidesToMove
The `slidesToMove` prop specifies the number of slides to advance when using navigation controls.

```jsx
<Slideshow images={imageArray} slidesToMove={2} />
```

### gap
The `gap` prop sets the spacing between slides in pixels.

```jsx
<Slideshow images={imageArray} gap={20} />
```

### autoPlay
The `autoPlay` prop enables automatic progression through the slideshow.

```jsx
<Slideshow images={imageArray} autoPlay={true} />
```

### autoPlayInterval
The `autoPlayInterval` prop sets the time in milliseconds between automatic slide transitions.

```jsx
<Slideshow images={imageArray} autoPlay={true} autoPlayInterval={5000} />
```

### showNavigation
The `showNavigation` prop controls the visibility of previous/next navigation buttons.

```jsx
<Slideshow images={imageArray} showNavigation={false} />
```

### showPagination
The `showPagination` prop controls the visibility of pagination dots at the bottom of the slideshow.

```jsx
<Slideshow images={imageArray} showPagination={false} />
```

### overlayNavigation
The `overlayNavigation` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. 

```jsx
<Slideshow images={imageArray} overlayNavigation={false} />
```

### touchDragging
The `touchDragging` prop controls if the slideshow should have drag navigation enabled. 

```jsx
<Slideshow images={imageArray} touchDragging={true} />
```

### dragThreshold
The `dragThreshold` prop sets the drag sensitivity. 

```jsx
<Slideshow images={imageArray} dragThreshold={50} />
```

### loop
The `loop` prop enables continuous looping through the slideshow when reaching the end.

```jsx
<Slideshow images={imageArray} loop={false} />
```

### fallbackImage
The `fallbackImage` prop specifies a default image URL to display when an image fails to load.

```jsx
<Slideshow images={imageArray} fallbackImage="/path/to/default.jpg" />
```

### alt
The `alt` prop provides default alt text for images, which will be appended with the image number for accessibility.

```jsx
<Slideshow images={imageArray} alt="Product image" />
```

### ariaLabel
The `ariaLabel` prop provides an accessible label for the entire slideshow component.

```jsx
<Slideshow images={imageArray} ariaLabel="Featured products slideshow" />
```

### ariaLabelledBy
The `ariaLabelledBy` prop references the ID of an element that labels the slideshow.

```jsx
<h2 id="slideshow-title">Our Products</h2>
<Slideshow images={imageArray} ariaLabelledBy="slideshow-title" />
```