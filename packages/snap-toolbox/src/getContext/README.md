# Script Context
This utility function gets a script tags attributes and innerHTML declarations and returns them in an object.

```js
import { getContext } from '@athoscommerce/snap-toolbox';
```

The function takes two parameters, the first being an array of script tag attributes or innerHTML variable names to evaluate. The second optional parameter for a script tag element or CSS selector string. If the script tag element is not provided, the function will query the DOM for a Snap script (using src or #athos-context selector).

The script element must either have a src containing `snapui.athoscommerce.io` or an id or type attribute that equals `athos-context`.  
For example: `src="https://snapui.athoscommerce.io/siteId/bundle.js"` or `id="athos-context"`.

> **Legacy support:** Scripts with a src containing `snapui.searchspring.io`, an id starting with `searchspring`, or a type starting with `searchspring` are also recognized for backwards compatibility.

The innerHTML of the script MUST only contain variable assignments without `var`, `let`, or `const`. Each declaration should end with a semi-colon to ensure minification does not impact the functions ability to parse the innerHTML.

Typical usage would be getting integration context variables from a script tag and passing them off to a controller instantiation.

If siteId is passed as a variable to evaluate, it will grab it out of the context variables if found, otherwise it will grab it from the script src. 

### Example Integration Context

```html
<script src="https://snapui.athoscommerce.io/REPLACE_WITH_YOUR_SITE_ID/bundle.js" id="athos-context">
	shopper = {
		id: 'snapdev'
	};
	category = 'categoryName';
</script>
```

```js
const context = getContext(['shopper', 'category']);
/*
	context = {
		type: 'text/javascript',
		src: 'https://snapui.athoscommerce.io/REPLACE_WITH_YOUR_SITE_ID/bundle.js',
		shopper: {
			id: 'snapdev'
		},
		category: 'categoryName'
	}
*/
```

### Example Providing a Script Element

```html
<script type="athos/recommend" profile="similar">
	product = 'C-AD-W1-1869P';
	shopper = {
		id: 'snapdev'
	};
	options = {
		siteId: 'REPLACE_WITH_YOUR_SITE_ID'
	};
</script>
```

```js
const scriptTag = document.querySelector('script[type="athos/recommend"]');
const context = getContext(['product', 'shopper', 'options'], scriptTag);
/*
	context = {
		type: 'athos/recommend',
		profile: 'similar',
		product: 'C-AD-W1-1869P',
		shopper: {
			id: 'snapdev'
		},
		options: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID'
		}
	}
*/
```