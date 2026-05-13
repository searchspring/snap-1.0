# RecommendationStore
The recommendation store is meant to hold the recommend and profile API response and associated state. It extends the AbstractStore and the recommend response by adding several additional properties and methods to make working with the data easier.

```js
import { RecommendationStore } from '@athoscommerce/snap-store-mobx'
import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';

const recommendationConfig = {
	id: 'recommendation',
	tag: 'also-bought'
};

const recommendationUrlManager = new UrlManager(new UrlTranslator()).detach(0);
const store = new RecommendationStore(recommendationConfig, { urlManager: recommendationUrlManager });

store.update(data);

console.log(store.toJSON());
```

## `reset` method
Reset store to the initial state by clearing data

```js
const store = new RecommendationStore();

store.reset()
```

## `profile` property
Contains an object with the following properties:

`tag` - the profile unique tag (set in ASD)

`placement` - location of the profile on a site (set in ASD)

`display` - object containing details regarding the template and any template parameters
## `results` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `results` property

## `productQuickView` property
An instance of the shared [`ProductQuickViewStore`](../ProductQuickView/) holding the currently displayed quickview product (cloned, so changes don't leak back to the result that triggered it), an error string, and a loading flag. Populated by `recommendationController.productQuickView(result)` and cleared from the modal's close handler. The intended consumer is the `ProductQuickView` organism in `@athoscommerce/snap-preact/components`.