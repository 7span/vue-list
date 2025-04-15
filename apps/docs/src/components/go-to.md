# `<VueListGoTo>`

This component provides an easy way for users to jump directly to a specific page using a dropdown (or any custom UI you build).

```vue
<template>
  <VueListGoTo>
    <!-- Render your content here -->
  </VueListGoTo>
</template>
```

## Slots

### `default`

#### Slot Props

| Name         | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| `setPage`    | `Function` <br/> Function to update the current page. Takes the page number as argument. |
| `page`       | `Number` <br/> The currently active page number.                                         |
| `pages`      | `Array` <br/> Array of available page numbers (e.g., [1, 2, 3, ...]).                    |
| `pagesCount` | `Number` <br/> Total number of available pages.                                          |
