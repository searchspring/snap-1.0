# Slideshow

Renders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.

## Sub-components
- Image
- Button

## Usage

```jsx
<Slideshow slides={slidesArray} />
```

### slides
The `slides` prop accepts an array of image URLs (strings) or slides objects with callbacks and metadata. slides objects allow for individual click handlers and custom properties.

```jsx
<Slideshow slides={['img1.jpg', 'img2.jpg', 'img3.jpg']} />
```

or

```jsx
const slidesObjects = [
    {
        src: 'product1.jpg',
        alt: 'Premium Headphones',
        onClick: (slide, index) => openProductDetails(slide)
    },
    {
        onClick: (slide, index) => addToCart(slide),
        content: <div>slide 2</div>
    }
];
```

```jsx
<Slideshow slides={slidesObjects} />
```

### slidesToShow
The `slidesToShow` prop specifies the number of slides visible at once in the slideshow.

```jsx
<Slideshow slides={slidesArray} slidesToShow={4} />
```

### slidesToMove
The `slidesToMove` prop specifies the number of slides to advance when using navigation controls.

```jsx
<Slideshow slides={slidesArray} slidesToMove={2} />
```

### gap
The `gap` prop sets the spacing between slides in pixels.

```jsx
<Slideshow slides={slidesArray} gap={20} />
```

### autoPlay
The `autoPlay` prop enables automatic progression through the slideshow.

```jsx
<Slideshow slides={slidesArray} autoPlay={true} />
```

### autoPlayInterval
The `autoPlayInterval` prop sets the time in milliseconds between automatic slide transitions.

```jsx
<Slideshow slides={slidesArray} autoPlay={true} autoPlayInterval={5000} />
```

### showNavigation
The `showNavigation` prop controls the visibility of previous/next navigation buttons.

```jsx
<Slideshow slides={slidesArray} showNavigation={false} />
```

### showPagination
The `showPagination` prop controls the visibility of pagination dots at the bottom of the slideshow.

```jsx
<Slideshow slides={slidesArray} showPagination={false} />
```

### overlayNavigation
The `overlayNavigation` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. 

```jsx
<Slideshow slides={slidesArray} overlayNavigation={false} />
```

### touchDragging
The `touchDragging` prop controls if the slideshow should have drag navigation enabled. 

```jsx
<Slideshow slides={slidesArray} touchDragging={true} />
```

### dragThreshold
The `dragThreshold` prop sets the drag sensitivity. 

```jsx
<Slideshow slides={slidesArray} dragThreshold={50} />
```

### loop
The `loop` prop enables continuous looping through the slideshow when reaching the end.

```jsx
<Slideshow slides={slidesArray} loop={false} />
```

### fallbackImage
The `fallbackImage` prop specifies a default image URL to display when an image fails to load.

```jsx
<Slideshow slides={slidesArray} fallbackImage="/path/to/default.jpg" />
```

### slideImageAlt
The `slideImageAlt` prop provides default alt text for images, which will be appended with the image number for accessibility.

```jsx
<Slideshow slides={slidesArray} slideImageAlt="Product image" />
```

### ariaLabel
The `ariaLabel` prop provides an accessible label for the entire slideshow component.

```jsx
<Slideshow slides={slidesArray} ariaLabel="Featured products slideshow" />
```

### ariaLabelledBy
The `ariaLabelledBy` prop references the ID of an element that labels the slideshow.

```jsx
<h2 id="slideshow-title">Our Products</h2>
<Slideshow slides={slidesArray} ariaLabelledBy="slideshow-title" />
```

### alwaysShowNavigation
The `alwaysShowNavigation` prop ensures navigation buttons are always displayed and take up space, even when the number of slides is below the `slidesPerView` threshold. This is particularly useful when using the slideshow in a grid of product cards to maintain consistent layout and height across all cards.

```jsx
<Slideshow slides={slidesArray} alwaysShowNavigation={true} />
```

### centerInsufficientSlides
The `centerInsufficientSlides` prop centers slides when there are fewer slides than the `slidesToShow` setting. This is enabled by default.

```jsx
<Slideshow slides={slidesArray} centerInsufficientSlides={true} />
```