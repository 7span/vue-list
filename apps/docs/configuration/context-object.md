# The Context Object

The context object is the single source of truth passed into both:

1. The `requestHandler` — to fetch data.
2. The `stateManager` — to persist and restore state.

It contains everything VueList knows about the current list view, bundled into a neat, opinionated object.

```js
{
  endpoint: String,
  page: Number,
  perPage: Number,
  sortBy: String,
  sortOrder: String,
  version: Number,
  filters: Object,
  search: String,
  meta: Object,
}
```

## 🔑 `endpoint`

- type: `String`

  This is the identifier for the data source - usually the API URL or a unique key for the listing.

  - Used to build request URLs in your `requestHandler`
  - Acts as a namespace in `stateManager` for saving/restoring data

## 📄 `page`

- type: `Number`

  The current page number, controlled internally by VueList.

  - Automatically updated on user interactions like "next page" or "go to page"

## 📦 `perPage`

- type: `Number`

  The number of items to show per page.

  - VueList handles this as part of state
  - Passed to the API to limit the result size
  - Useful for paginated responses (limit, pageSize, etc.)

## ↕️ `sortBy`

- Type: `String`

  The field or column name to sort by.

  - Controlled by the user via sorting UI
  - Optional, but useful for sortable tables
  - Works in tandem with `sortOrder`

## ⬆️ `sortOrder`

- type: `String`

  The direction of sorting — either `asc` (ascending) or `desc` (descending).

  - Works with sortBy to define how the list should be ordered

## 🎛️ `filters`

- type: `Object`

  An object representing filter values applied by the user.

  - Can contain any number of filter keys and values
  - Completely dynamic - VueList doesn't enforce the shape

## 🔍 `search`

- type: `String`

  This is the global search term entered by the user, typically via a text input box.

  - Useful for filtering data based on a single search query
  - Can be used in conjunction with `filters` for more advanced filtering

## 🧱 `meta`

- type: `Object`

  Additional metadata or configuration options for the list.

  - Useful for passing extra data to the requestHandler
  - Can be used to customize the list based on specific requirements
