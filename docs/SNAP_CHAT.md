# Chat

To set up Chat using Snap, we'll need to define a chat controller in our Snap configuration. The Chat controller provides an AI-powered conversational shopping assistant that supports text queries, image search, product discussions, product comparisons, and similar product discovery.


```js
// src/index.js

import { Snap } from '@athoscommerce/snap-preact';

const snap = new Snap({
    client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                    settings: {
                        feedbackAfterMessages: 3,
                    },
                },
                targeters: [
                    {
                        selector: '#athos-chat',
                        component: async () => {
                            return (await import('@athoscommerce/snap-preact/components')).Chat;
                        },
                    },
                ],
            },
        ],
    },
});
```


## Configuration

The following settings can be configured in the `ChatControllerConfig`:

| Setting | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | `'chat'` | Controller identifier |
| `settings.feedbackAfterMessages` | `number` | `3` | Number of messages before showing a session feedback prompt |
| `settings.addToCart` | `(products) => void` | — | Callback function invoked when a user adds a product to their cart from within the chat |
| `settings.displayFields` | `string[]` | — | Fields to display on product results within the chat |
| `beacon` | `{ enabled: boolean }` | — | Enable or disable analytics tracking for chat events |
| `globals` | `Partial<ChatRequestModel>` | — | Default request parameters applied to all chat requests |
| `middleware` | `object` | — | Event middleware hooks (see [Middleware](https://athoscommerce.github.io/snap/reference-snap-preact-middleware)) |


### Add to Cart

To handle add-to-cart actions from within the chat, provide an `addToCart` callback in the controller settings:

```js
const snap = new Snap({
    client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                    settings: {
                        addToCart: (products) => {
                            // handle adding products to the cart
                            products.forEach((product) => {
                                console.log('Adding to cart:', product.mappings.core.name);
                            });
                        },
                    },
                },
                targeters: [
                    {
                        selector: '#athos-chat',
                        component: async () => {
                            return (await import('@athoscommerce/snap-preact/components')).Chat;
                        },
                    },
                ],
            },
        ],
    },
});
```


## Opening the Chat Programmatically

The chat can be opened programmatically using the controller's `openChat` method or via global events. An optional initial message can be provided to immediately start a conversation.

```js
// open the chat via controller
const chatController = snap.controllers.chat;
chatController.openChat();

// open with an initial message
chatController.openChat('I am looking for running shoes');
```

### Global Events

The Chat controller registers the following global events that can be dispatched from anywhere on the page:

```js
// open the chat
document.dispatchEvent(new CustomEvent('chat/open'));

// open the chat with an initial query
document.dispatchEvent(new CustomEvent('chat/open', { detail: { query: 'Show me winter jackets' } }));

// open the chat to discuss a specific product
document.dispatchEvent(new CustomEvent('chat/open/discussProduct', { detail: { product: productData } }));
```


## Controller Methods

The `ChatController` provides the following methods:

### controller.search()

Sends a chat message. The request is constructed from the current input value, attached images, attached products, and active comparisons.

```js
controller.search();

// with request overrides
controller.search({ data: { message: 'Find me blue shoes' } });
```

### controller.upload(files)

Uploads image files for visual search. Accepts a `FileList` from a file input element.

```js
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', (e) => {
    controller.upload(e.target.files);
});
```

### controller.viewProduct(result)

Opens a product quickview within the chat for a given product result.

```js
controller.viewProduct(result);
```

### controller.discussProduct(result, options)

Attaches a product to the chat context for discussion. The `requestType` option determines how the product is used in the conversation.

```js
// ask questions about a product
controller.discussProduct(result, { requestType: 'productQuery' });

// find similar products
controller.discussProduct(result, { requestType: 'productSimilar' });
```

### controller.compareProduct(result)

Adds a product to the comparison set. When two or more products are added, the next message will be sent as a product comparison request.

```js
controller.compareProduct(result1);
controller.compareProduct(result2);
// next search() call will compare these products
```

### controller.addToCart(products)

Triggers the add-to-cart flow for one or more products. Fires the `addToCart` event and invokes the configured `settings.addToCart` callback.

```js
controller.addToCart(result);
// or multiple products
controller.addToCart([result1, result2]);
```

### controller.handleFeedback(thumbs)

Records session-level feedback. Accepts `'UP'` or `'DOWN'`.

```js
controller.handleFeedback('UP');
```


## Chat Store

The following properties are available on the Chat Store via a Chat Controller.

### ChatController.store.open

A boolean indicating whether the chat UI is currently open.

```js
controller.store.open = true;  // opens the chat
controller.store.open = false; // closes the chat
```

### ChatController.store.inputValue

The current text value of the chat input field.

### ChatController.store.loading

A boolean indicating whether a chat request is currently in progress.

### ChatController.store.chatEnabled

A boolean (or `null` before the status check completes) indicating whether chat is enabled for the current site.

### ChatController.store.suggestedQuestions

An array of suggested question strings returned from the chat status endpoint. These can be displayed as quick-start prompts for the user.

```tsx
const { suggestedQuestions } = controller.store;

return (
    <div class="ss__chat__suggestions">
        {suggestedQuestions.map((question) => (
            <button onClick={() => controller.search({ data: { message: question } })}>
                {question}
            </button>
        ))}
    </div>
);
```

### ChatController.store.welcomeMessage

A welcome message string returned from the chat status endpoint, displayed when the chat is first opened.

### ChatController.store.currentChat

The current active `ChatSessionStore` instance. Contains the full conversation history, attachments, and comparison state. A new session is created automatically when the first message is sent.

### ChatController.store.chats

An array of all `ChatSessionStore` instances. Chat history is persisted in local storage and can be accessed to display previous conversations.

### ChatController.store.productQuickview

The currently viewed product in the quickview panel, or `null` if no product quickview is open. Set via `controller.viewProduct(result)` and cleared via `controller.store.clearProductQuickview()`.

### ChatController.store.features

An object describing the features enabled for the current site, such as `imageSearch` and `similarProducts`. These values are returned from the chat status endpoint and can be used to conditionally render UI elements.

### ChatController.store.error

An error object containing `type` (`'error'` or `'warning'`), `message`, and optionally `code`. Set when a chat request fails (e.g., rate limiting with status 429, server errors with status 500, or session limit exceeded).


## Request Types

The Chat controller automatically determines the request type based on the current context (attachments, comparisons, etc.):

| Request Type | Triggered When |
|---|---|
| `general` | Default - a plain text message with no attachments |
| `imageSearch` | An image has been uploaded and attached |
| `productQuery` | A single product is attached for discussion |
| `productSimilar` | A product is attached with the "find similar" intent |
| `productComparison` | Two or more products are in the comparison set |
| `productSearch` | Facet filters are attached |


## Tracking

The Chat controller provides tracking methods under `controller.track.product` for analytics. These are automatically invoked by the `Chat` component but can also be called manually:

```js
// track a product impression
controller.track.product.impression(result);

// track a product click-through
controller.track.product.clickThrough(event, result);

// track an add-to-cart event
controller.track.product.addToCart(result);

// track session feedback
controller.track.product.feedback('UP');
```

Tracking requires `beacon` to be enabled in the controller config:

```js
config: {
    id: 'chat',
    beacon: {
        enabled: true,
    },
}
```


## Middleware Events

The Chat controller fires the following middleware events that can be hooked into:

| Event | Description |
|---|---|
| `init` | Fired during controller initialization; checks chat availability |
| `beforeSearch` | Fired before a chat request is sent; can be used to modify the request or cancel it |
| `afterSearch` | Fired after a response is received from the API |
| `afterStore` | Fired after the store has been updated with the response data |
| `addToCart` | Fired when a product is added to the cart |

```js
const snap = new Snap({
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                    middleware: {
                        afterSearch: (data, next) => {
                            console.log('Chat response:', data.response);
                            next();
                        },
                    },
                },
                targeters: [
                    {
                        selector: '#athos-chat',
                        component: async () => {
                            return (await import('@athoscommerce/snap-preact/components')).Chat;
                        },
                    },
                ],
            },
        ],
    },
});
```
