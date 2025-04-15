# `<VueListRefresh>`

This component is a simple button that lets users manually re-fetch the list data — with the same context as the previous request.

It's ideal for refreshing stale data, busting cache, or simply giving users a sense of control like:

> Yes, we tried again. The data is still broken. But at least we tried. 😅

```vue
<template>
  <VueListRefresh>
    <template #default="{ isLoading, refresh }">
      <button @click="refresh()" :disabled="isLoading">Refresh</button>
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
