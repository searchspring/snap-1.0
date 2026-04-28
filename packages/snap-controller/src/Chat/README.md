# ChatController

The `ChatController` is used for the AI-powered conversational shopping assistant. It manages chat sessions, image uploads, product discussions, product comparisons, and similar product discovery.

## ChatControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | `'chat'` | ✔️ |
| globals | keys defined here will be passed to the chat API request | ➖ |   |
| settings.feedbackAfterMessages | number of assistant messages before showing a session feedback prompt | `3` |   |
| settings.addToCart | callback function invoked when a product is added to cart from the chat | ➖ |   |
| settings.displayFields | array of field names to display on product results within the chat | ➖ |   |
| beacon.enabled | enable or disable analytics tracking for chat events | ➖ |   |

## Initialize
The `init` method is called automatically during construction. It checks the chat status to determine if chat is enabled for the current site.

```js
chatController.init();
```

## Search
Sends a chat message. The request is constructed from the current input value, attached images, attached products, and active comparisons. The request type is automatically determined based on context.

```js
chatController.search();

// with request overrides
chatController.search({ data: { message: 'Find me blue shoes' } });
```

## Upload
Uploads image files for visual search. Accepts a `FileList` from a file input element. Uploading an image starts a fresh context and clears any in-progress comparisons.

```js
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', (e) => {
    chatController.upload(e.target.files);
});
```

## ViewProduct
Opens a product quickview within the chat. Fetches full product data from the products API.

```js
chatController.viewProduct(result);
```

## DiscussProduct
Attaches a product to the chat context for discussion. The `requestType` option determines how the product is used in the next request.

```js
// ask questions about a product
chatController.discussProduct(result, { requestType: 'productQuery' });

// find similar products
chatController.discussProduct(result, { requestType: 'productSimilar' });
```

## CompareProduct
Adds a product to the comparison set. When two or more products are in the comparison set, the next search will be sent as a `productComparison` request.

```js
chatController.compareProduct(result1);
chatController.compareProduct(result2);
// next search() call will compare these products
```

## OpenChat
Opens the chat UI. Optionally accepts an initial message to start a conversation immediately.

```js
chatController.openChat();

// open with an initial message
chatController.openChat('I am looking for running shoes');
```

## AddToCart
Triggers the add-to-cart flow for one or more products. Fires the `addToCart` event and invokes the configured `settings.addToCart` callback. Takes a single Product or an array of Products as a parameter.

```js
chatController.addToCart(result);
chatController.addToCart([result1, result2]);
```

## HandleFeedback
Records session-level feedback. Accepts `'UP'` or `'DOWN'`. The feedback prompt is automatically dismissed after 3 seconds.

```js
chatController.handleFeedback('UP');
```

## Request Types

The controller automatically determines the request type based on the current context:

| Request Type | Triggered When |
|---|---|
| `general` | Default — a plain text message with no attachments |
| `imageSearch` | An image has been uploaded and attached |
| `productQuery` | A single product is attached for discussion |
| `productSimilar` | A product is attached with the "find similar" intent |
| `productComparison` | Two or more products are in the comparison set |
| `productSearch` | Facet filters are attached |

## Events

### init
- Called with `eventData` = { controller }
- Done once automatically during construction — checks chat availability

### beforeSearch
- Called with `eventData` = { controller, request }
- Always invoked before a chat API request is made
- Prevents the request if chat is disabled
- Initiates a new chat session if one does not exist

### afterSearch
- Called with `eventData` = { controller, request, response }
- Always invoked after a chat API response is received

### afterStore
- Called with `eventData` = { controller, request, response }
- Always invoked after data has been stored in the ChatStore

### addToCart
- Called with `eventData` = { controller, products }
- Always invoked after `addToCart()` method has been invoked

### track.product.impression
- Called with `eventData` = { controller, product, trackEvent }
- Always invoked after `track.product.impression()` method has been invoked

### track.product.clickThrough
- Called with `eventData` = { controller, event, product, trackEvent }
- Always invoked after `track.product.clickThrough()` or `track.product.click()` method has been invoked

### track.product.addToCart
- Called with `eventData` = { controller, product, trackEvent }
- Always invoked after `track.product.addToCart()` method has been invoked

### track.product.feedback
- Called with `eventData` = { controller, trackEvent }
- Always invoked after `track.product.feedback()` method has been invoked
