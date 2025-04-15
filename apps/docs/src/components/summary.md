# `<VueListSummary>`

This component provides metadata about the current list view — great for showing things like:

> Showing 11–20 of 154 results

It gives you full control over rendering, so you can use it for any custom summary UI.

```vue
<template>
  <VueListSummary>
    <!-- Render your summary here -->
  </VueListSummary>
</template>
```

### Slots

### `default`

#### Slot Props

| Name           | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `visibleCount` | `Number` <br/> Number of items currently visible on the page.    |
| `count`        | `Number` <br/> Total number of items matching the current query. |
| `from`         | `Number` <br/> Starting index of the current page.               |
| `to`           | `Number` <br/> Ending index of the current page.                 |
