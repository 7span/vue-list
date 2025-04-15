# `<VueList>` - The Root Component

The root component that wires everything together. It manages the entire data lifecycle — state, filters, pagination, search, and API calls — and provides context for all child components.

It’s the only component you must include. Every other component depends on the context provided by `<VueList>`.

```vue
<template>
  <VueList>
    <template #default="{...}">
      <!-- Child Components-->
    </template>
  </VueList>
</template>
```

## Props

| Prop                 | Default    | Type                                                                                                                                                             |
| -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endpoint             |            | `String` - _required_<br />The unique identifier for the data source. Passed to the requestHandler. It can be a URL or part of URL.                              |
| page                 | 1          | `Number`<br />Initial page value.                                                                                                                                |
| perPage              | 25         | `Number`<br />Initial number of items per page.                                                                                                                  |
| sortBy               |            | `String`<br />Initial sorting field.                                                                                                                             |
| sortOrder            | desc       | `String`<br />Initial sorting direction. Should be either **asc** or **desc**.                                                                                   |
| search               |            | `String` <br />Initial search term.                                                                                                                              |
| requestHandler       |            | Override the global `requestHandler` defined during plugin setup — ideal for module-specific logic.                                                              |
| version              |            | `String` `Number`<br />Optional identifier for `stateManager`. You can use this with `endpoint` to generate new unique keys for state and delete old stale keys. |
| hasPaginationHistory | true       | `Boolean`<br />VueList will append the current page number to the URL query params — improving back button support.                                              |
| paginationMode       | pagination | `String`<br />**pagination**: Shows page numbers and traditional navigation.<br />**loadMore**: Loads more items on scroll or button click.                      |

## Events

| Name            | Arguments | Description |
| --------------- | --------- | ----------- |
| onItemSelect    |           | WIP         |
| onResponse      |           | WIP         |
| afterPageChange |           | WIP         |
| afterLoadMore   |           | WIP         |

## Slots

### `default`

The only slot available in `<VueList>` is `default`. It exposes a set of scoped variables that let you access and render the list state however you like.

#### Slot Props

| Key       | Description                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------- |
| items     | `Array` <br/> Array of items returned from the API                                              |
| response  | `Object` <br/> Full response object from the requestHandler                                     |
| isLoading | `Boolean` <br/> Indicating whether the list is currently loading                                |
| selection | `Array` <br/> Object containing selected item(s) if selection is enabled                        |
| error     | Error object if the request failed                                                              |
| isEmpty   | `Boolean` <br/> Indicating if the items array is empty                                          |
| context   | `Object`<br/> The full context object same as passed to the `requestHandler` and `stateManager` |
| refresh   | `Function`<br/> Function to manually trigger a refetch                                          |
