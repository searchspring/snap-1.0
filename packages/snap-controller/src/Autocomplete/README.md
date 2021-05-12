# AutocompleteController

The `AutocompleteController` is used when making queries to the API `autocomplete` endpoint. It can also bind events to DOM elements to handle user input of queries.

## AutocompleteControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | ➖ | ✔️ |
| selector | css selector for input elements that DOM events should be bound to | ➖ | ✔️ |
| action | optional way to override the form action or provide one when it does not exist | ➖ |   |
| globals | keys defined here will be passed to the API request (can overwrite global config)| ➖ |   |
| settings.initializeFromUrl | initialize the controller with query parameter from URL (pre-fill input with current search) | true |   |
| settings.syncInputs | if the selector targets multiple inputs, the value of those inputs will be synced | false |   |
| settings.facets.trim | facets that do not change results will be removed | true |   |

<br>

```typescript
const autocompleteConfig = {
	id: 'autocomplete',
	selector: '#searchInput',
	settings: {
		syncInputs: true
	},
};
```

## Instantiate
`AutocompleteController` requires an `AutocompleteControllerConfig` and `ControllerServices` object and is usually paired with an `AutocompleteStore`.

```typescript
import { AutocompleteController } from '@searchspring/snap-controller';
import SnapClient from '@searchspring/snap-client';
import { AutocompleteStore } from '@searchspring/snap-store-mobx';
import { UrlManager, UrlTranslator, reactLinker } from '@searchspring/snap-url-manager';
import { EventManager } from '@searchspring/snap-event-manager';
import { Profiler } from '@searchspring/snap-profiler';
import { Logger } from '@searchspring/snap-logger';

const autocompleteController = new AutocompleteController(autocompleteConfig, {
		client: new SnapClient(globals, clientConfig),
		store: new AutocompleteStore(),
		urlManager: new UrlManager(new UrlTranslator(), reactLinker),
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger()
	}
));
```

## Initialize
Invoking the `init` method is required to subscribe to changes that occur in the UrlManager.

```typescript
autocompleteController.init();
```

## Bind
<!-- TODO: set/test link to DomTargeter -->
Invoking the `bind` method is required to attach event listeners to each input specified as `selector` in the `AutocompleteControllerConfig`.

```typescript
autocompleteController.bind();
```

## Search
This will invoke a search request to Searchspring's search API and populate the store with the response. This should be automatically called by the DOM event binding that occurs when the `bind` method (see above) is invoked.

```typescript
autocompleteController.search();
```

## Events
### init
- Called with `eventData` = { controller }
- Always invoked by a call to the `init` controller method

### beforeSearch
- Called with `eventData` = { controller, request }
- Always invoked before an API request is made 
- Sets `controller.store.loading = true`

### afterSearch
- Called with `eventData` = { controller, request, response }
- Always invoked after an API request is made 
- Sets `controller.store.loading = false`
- Cancels search if input doesn't match current urlManager input state

### afterStore
- Called with `eventData` = { controller, request, response }
- Always invoked after data has been stored in mobx store

### focusChange
- Called with `eventData` = { controller }
- Invoked when an input has been focused