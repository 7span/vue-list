# `<VueListError>`

This component handles errors gracefully by displaying UI when the list’s API call fails. It only appears after the request completes with an error and no retry is in progress.

- Automatically shown when the API request fails.
- Will not show while the request is still active (loading).
- Renders the content inside the default slot.
- Provides the actual Error object via slot props for debugging or messaging.

```vue
<template>
  <VueListError>
    <!-- Render your error content here -->
    <template #default="{ error }">
      <pre>{{ error.name }}</pre>
      <pre>{{ error.message }}</pre>
    </template>
  </VueListError>
</template>
```

## Slots

### `default`

#### Slot Props

| Name    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| `error` | `Error` <br/> The actual error object from the failed request. |

The error provided in the slot is the exact Error instance thrown by your `requestHandler`.

In VueList, your `requestHandler` function is expected to return a Promise. If that promise is rejected, VueList catches the failure and passes the error object down to `<VueListError>`.

This means you have full control over what gets thrown — whether it's a native Error, a custom error class, or an API error with additional info.
