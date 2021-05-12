# Snap Javascript Client

Simple Javascript client for communicating with the Searchspring Snap API.

---

# Quick Links

[Snap API docs](http://snapi.kube.searchspring.io/api/v1/) - Search & Autocomplete API documentation

[Snapi Explorer](https://searchspring.github.io/snapi-explorer/) - a tool for making requests to Searchspring's API

# Installation

```bash
npm install --save @searchspring/snap-client
```

# Usage
## Import
```typescript
import { SnapClient } from '@searchspring/snap-client';
```

## Global Config
Client is constructed with `globals`.  

Globals are API parameters that will be applied to all searches requested by the client. This will typically contain just the *siteId*; but could also include global filters, background filters, sorts, or merchandising segments.

`siteId` (required)

```typescript
const globals = {
	siteId: 'a1b2c3'
};
```

Any other keys defined here will be passed to the API request

For a full list of parameters please see the [Snap API docs](http://snapi.kube.searchspring.io/api/v1/)

For example, with background filter:

```typescript
const globals = {
	siteId: 'a1b2c3',
  filters: [{
    field: 'stock_status',
    value: 'yes',
    type: 'value',
    background: true
  }]
};
```

## Client Config
Object required for all controllers

```typescript
export type SnapClientConfig = {
	meta?: {
		prefetch?: boolean;
		ttl?: number;
		api?: SnapApiConfig;
	};
	search?: {
		api?: SnapApiConfig;
	};
	autocomplete?: {
		api?: SnapApiConfig;
	};
	trending?: {
		prefetch?: boolean;
		ttl?: number;
		api?: SnapApiConfig;
	};
};

export type SnapApiConfig = {
	host?: string;
	path?: string;
};
```

## Controller usage
Snap Client is a dependency of Snap Controller and it is recommended to use the Controller's `search` method to perform a search. 

See [Search Typical Usage](../../README.md#SearchTypicalUsage)


## Standalone usage
```typescript
const client = new SnapClient(globals, clientConfig);

const results = await client.search({
  search: {
    query: {
      string: 'dress'
    }
  }
});
```

## `search` method
Makes a request to the Searchspring Search API and returns a promise.  

```typescript
const client = new SnapClient(globals, clientConfig);

const results = await client.search({
  search: {
    query: {
      string: 'dress'
    }
  }
});
```

## `autocomplete` method
Makes a request to the Searchspring Autocomplete API and returns a promise.  

```typescript
const client = new SnapClient(globals, clientConfig);

const results = await client.autocomplete({
  suggestions: {
    count: 5
  },
  search: {
    query: {
      string: 'yellw',
      spellCorrection: true
    }
  }
});
```

## `meta` property
The meta property contains the metadata related to the siteId that the client was instantiated with. This data is to be used together with search results. Metadata contains site configuration like facet and sorting information.

Note that the `search` method sets the `meta` property, therefore it must be called before attempting to access the `meta` property.

```typescript
const client = new SnapClient(globals, clientConfig);

const results = await client.search({
  search: {
    query: {
      string: 'dress'
    }
  }
});

const meta = client.meta;
```