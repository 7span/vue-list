# `<VueListPagination>`

The default slot gives you full control over rendering pagination. You get all the computed state and helper functions needed to build a custom pagination layout from scratch.

```vue
<template>
  <VueListPagination :page-links="5">
    <template #first></template>
    <template #prev></template>
    <template #page></template>
    <template #next></template>
    <template #last></template>
  </VueListPagination>
</template>
```

::: warning Heads up!
This component will only work when `paginationMode` prop is set to `pagination` on the root `<VueList>` component.
:::

## Props

| Name        | Description                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `pageLinks` | `Number` <br/> Defines how many pagination buttons should be visible at once. The current (active) page is centered when possible. |

## Slots

Following slots are available:

### `default`

Use this to render the entire pagination manually. The default slot exposes a set of scoped variables that let you access and render the list state however you like.

```vue
<template>
  <VueListPagination>
    <template #default="{...}">
      <!-- Render your pagination here -->
    </template>
  </VueListPagination>
</template>
```

<a id="pagination_slot_props"></a>

#### Slot Props

| Name             | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `page`           | `Number` <br/> The current active page number                                   |
| `perPage`        | `Number` <br/> Items per page                                                   |
| `count`          | `Number` <br/> Total number of items returned by the API                        |
| `pagesCount`     | `Number` <br/> Total number of pages                                            |
| `pagesToDisplay` | `Array` <br/> Array of visible page numbers (based on pageLinks prop)           |
| `halfWay`        | `Number` <br/> Half of the pageLinks count (used for centering logic)           |
| `hasNext`        | `Boolean` <br/> Is there a next page?                                           |
| `hasPrev`        | `Boolean` <br/> Is there a previous page?                                       |
| `prev`           | `Function` <br/> Go to previous page                                            |
| `next`           | `Function` <br/> Go to next page                                                |
| `first`          | `Function` <br/> Go to first page                                               |
| `last`           | `Function` <br/> Go to last page                                                |
| `setPage`        | `Function` <br/> Navigate to specific page. Pass the page number as an argument |

### `first`

Button for navigating to the first page.

Exposes same slot props as [default](#pagination_slot_props)

### `prev`

Button for navigating to the previous page.

Exposes same slot props as [default](#pagination_slot_props)

### `pages`

Render visible page numbers.

Exposes same slot props as [default](#pagination_slot_props)

### `page`

Button for each visible page number.

Exposes same slot props as [default](#pagination_slot_props)

Additionally, following helper slot props are available.:

#### Slot Props

| Name       | Description                           |
| ---------- | ------------------------------------- |
| `page`     | `Number` <br/> The page number        |
| `isActive` | `Boolean` <br/> If the page is active |

### `next`

Button for navigating to the next page.

Exposes same slot props as [default](#pagination_slot_props)

### `last`

Button for navigating to the last page.

Exposes same slot props as [default](#pagination_slot_props)
