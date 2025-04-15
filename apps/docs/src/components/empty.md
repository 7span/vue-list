# `<VueListEmpty>`

This component is your friendly fallback when there's nothing to see here. It automatically appears when the list has been fetched and the API returns an empty array — no items to show.

- Only renders after the API call is completed & there are no errors.
- Only shows when the returned items list is empty.
- Everything inside the default slot will be displayed as the empty state UI.

```vue
<template>
  <VueListEmpty>
    <!-- Render your fallback content here -->
    <p>No users found.</p>
    <p>Try adjusting your filters or search.</p>
  </VueListEmpty>
</template>
```

## Slots

### `default`

Render anything you'd like — text, icon, image, call to action — for empty state.
