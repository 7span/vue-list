# `<VueListLoadMore>`

A headless component designed for "Load More" style pagination.
It gives you full control over how the button (or UI) looks while handling the logic for fetching additional items when needed.

```vue
<template>
  <VueListLoadMore>
    <template #default="{ loadMore, isLoading, hasMoreItems }">
      <!-- Render your load more button here -->
    </template>
  </VueListLoadMore>
</template>
```

::: warning Heads up!
This component will only work when `paginationMode` prop is set to `loadMore` on the root `<VueList>` component.
:::

## Slots

### `default`

A headless component designed for "Load More" style pagination.
It gives you full control over how the button (or UI) looks while handling the logic for fetching additional items when needed.

#### Slot Props

| Name           | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `isLoading`    | `Boolean` <br/> `true` while the next set of items is being fetched |
| `loadMore`     | `Function` <br/> Call this function to load the next page of items. |
| `hasMoreItems` | `Boolean` <br/> `true` if there are more items to load              |
