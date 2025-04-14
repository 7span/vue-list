# <VueList\> - The Root Component

## Overview

`<VueList>` is the root component that wires everything together. It manages the entire data lifecycle — state, filters, pagination, search, and API calls — and provides context for all child components.

It’s the only component you must include. Every other component depends on the context provided by `<VueList>`.

## Example

```vue
<template>
  <VueList>
    <!-- Child Components-->
  </VueList>
</template>
```

## Props

| Prop              | Default    | Type                                                                                                                                                             |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endpoint          |            | `String` - _required_<br />The unique identifier for the data source. Passed to the requestHandler. It can be a URL or part of URL.                              |
| page              | 1          | `Number`<br />Initial page value.                                                                                                                                |
| perPage           | 25         | `Number`<br />Initial number of items per page.                                                                                                                  |
| sortBy            |            | `String`<br />Initial sorting field.                                                                                                                             |
| sortOrder         | desc       | `String`<br />Initial sorting direction. Should be either **asc** or **desc**.                                                                                   |
| search            |            | `String` <br />Initial search term.                                                                                                                              |
| requestHandler    |            | Override the global `requestHandler` defined during plugin setup — ideal for module-specific logic.                                                              |
| version           |            | `String` `Number`<br />Optional identifier for `stateManager`. You can use this with `endpoint` to generate new unique keys for state and delete old stale keys. |
| paginationHistory | true       | `Boolean`<br />VueList will append the current page number to the URL query params — improving back button support.                                              |
| paginationMode    | pagination | `String`<br />**pagination**: Shows page numbers and traditional navigation.<br />**loadMore**: Loads more items on scroll or button click.                      |

## Events

| Event name      | Properties | Description                         |
| --------------- | ---------- | ----------------------------------- |
| onItemSelect    |            | Triggered before loading more data. |
| onResponse      |            | Triggered after loading more data.  |
| afterPageChange |            | Triggered after initial data load.  |
| afterLoadMore   |            |                                     |

## Slots
