# ChatStore
The ChatStore holds the chat session state, conversation history, attachment data, and product quickview state. It extends the AbstractStore and manages one or more `ChatSessionStore` instances that represent individual chat conversations. Chat history is persisted in local storage.

## `open` property
Boolean indicating whether the chat UI is currently open.

## `inputValue` property
The current text value of the chat input field.

## `loading` property
Boolean indicating whether a chat request is currently in progress.

## `chatEnabled` property
Boolean (or `null` before the status check completes) indicating whether chat is enabled for the current site. This is determined by the chat status endpoint.

## `initChatLoading` property
Boolean indicating whether the initial chat session creation is in progress.

## `suggestedQuestions` property
An array of suggested question strings returned from the chat status endpoint. These can be displayed as quick-start prompts when the chat is first opened.

## `welcomeMessage` property
A welcome message string returned from the chat status endpoint, displayed when the chat is first opened.

## `features` property
An object describing the features enabled for the current site, such as `imageSearch` and `similarProducts`. Returned from the chat status endpoint and can be used to conditionally show or hide UI elements.

## `currentChat` getter
Returns the current active `ChatSessionStore` instance, or `undefined` if no chat session exists. Contains the full conversation history, attachments, and comparison state.

## `chats` property
An array of all `ChatSessionStore` instances. Chat history is persisted in local storage and previous conversations can be accessed here.

## `chatsIds` getter
Returns an array of chat session IDs.

## `blocked` getter
Returns `true` when the chat input should be blocked (e.g., during loading or when chat is disabled).

## `productQuickview` property
The currently viewed product in the quickview panel, or `null` if no product quickview is open. Set via `setProductQuickview()` and cleared via `clearProductQuickview()`.

## `productQuickviewError` property
An error message string if the product quickview failed to load, or `null` otherwise.

## `error` property
An error object set when a chat request fails. Contains the following properties:

| Property | Type | Description |
|---|---|---|
| `type` | `'error'` \| `'warning'` | The severity of the error |
| `message` | `string` | A human-readable error message |
| `code` | `number` (optional) | HTTP status code (e.g. `429` for rate limiting, `500` for server errors) |

## `meta` property
Contains meta data retrieved from the Athos Meta API, stored as a `MetaStore` instance.

## Methods

### `createChat(data?)`
Creates a new `ChatSessionStore` and sets it as the current chat. Optionally accepts an object with a `sessionId`.

```js
store.createChat();
store.createChat({ sessionId: 'abc123' });
```

### `switchChat(id)`
Switches the current active chat to the specified chat session ID.

```js
store.switchChat('session-id');
```

### `clearHistory()`
Removes all stored chat sessions.

### `reset()`
Resets the store to its initial state.

### `setProductQuickview(product)`
Sets the product to display in the quickview panel.

### `updateProductQuickview(response)`
Updates the current quickview product with full product data from the products API response.

### `setProductQuickviewError(message)`
Sets an error message for the product quickview.

### `clearProductQuickview()`
Clears the product quickview, closing the panel.

### `compareProduct(result)`
Adds a product to the comparison set on the current chat session.

### `sendProductQuery(result, options)`
Attaches a product to the current chat context for discussion. The `options.requestType` determines how the product is used (`'productQuery'`, `'productSimilar'`, or `'productComparison'`).

### `addFacet(facet)`
Adds a facet filter attachment to the current chat session.

### `removeFacet(key, value)`
Removes a specific facet filter attachment by key and value.

### `clearPendingFacets()`
Clears all pending facet filter attachments.

### `isFacetSelected(key, value)`
Returns `true` if the specified facet filter is currently selected.

### `request(request)`
Stores the outgoing chat request on the current session (called internally before a search).

### `update(data)`
Updates the store with a chat API response. Processes the response and appends the assistant message to the conversation history.

### `handleChatStatusResponse(response)`
Processes the chat status response. Sets `chatEnabled`, `suggestedQuestions`, `welcomeMessage`, and `features`. Returns a boolean indicating whether chat is enabled.

## ChatSessionStore

Each chat session is represented by a `ChatSessionStore` instance, accessible via `store.currentChat` or from the `store.chats` array. Key properties include:

| Property | Description |
|---|---|
| `sessionId` | The unique session identifier assigned by the API |
| `messages` | Array of message objects (user and assistant messages) in the conversation |
| `activeMessage` | The currently active/displayed assistant message |
| `attachments` | `ChatAttachmentStore` managing image, product, and facet attachments |
| `comparisons` | `ChatCompareStore` managing the product comparison set |
| `sessionFeedback` | Session-level feedback object with a `rating` of `'UP'` or `'DOWN'` |
| `feedbackJustGiven` | Boolean flag set after feedback is submitted |
| `feedbackDismissed` | Boolean flag set when the feedback prompt is dismissed |
| `sessionLimitReached` | Boolean flag set when the session message limit is exceeded |

### `save()`
Persists the current session state to local storage.

### `pushProductQueryMessage(result)`
Adds a product query message to the conversation for the given product.

### `dismissSideChat()`
Dismisses the side chat panel (used for product query/answer/comparison views).
