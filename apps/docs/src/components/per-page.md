# `<VueListPerPage>`

This component allows users to control how many items they see per page. It's fully customizable, so you can render a dropdown, buttons, or any other UI you like.

```vue
<template>
  <VueListPerPage>
    <!-- Render your content here -->
  </VueListPerPage>
</template>
```

## Props

| Name      | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| `options` | `Array` <br/> List of available per-page values. Example: [10, 20, 50, 100] |

## Slots

### `default`

#### Slot Props

| Name         | Description                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------- |
| `perPage`    | `Number` <br/> The currently selected perPage value.                                                |
| `setPerPage` | `Function` <br/> Function to update the number of items per page. Pass value as the first argument. |
| `options`    | `Array` <br/> The array of available options (from the prop).                                       |
