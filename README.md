# VueList

Simplified API-based list rendering

Build listing layouts faster by abstracting away the boilerplate of API calls, pagination, and state management.

✅ Headless
✅ Centralized Request Handling
✅ Reactive
✅ State Manager
✅ Opinionated

Listing pages are everywhere — users, products, orders. And every time, you write the same boilerplate:
`page`, `perPage`, `filters`, `isLoading`, `data`, `error`... again and again.

✨ VueList eliminates this repetition ✨

Write less. List more!

## ⚙️ Configuring the Plugin

```js
app.use(VueList, {
  requestHandler(context) {
    const {
      endpoint,
      page,
      perPage,
      sortBy,
      sortOrder,
      version,
      filters,
      search,
      meta,
      isRefresh,
    } = context;

    // Make the API as per your requirements
    // This should return a Promise
    return axios
      .get(`${import.meta.baseUrl}/api/${endpoint}`, {
        params: {
          page,
          limit: perPage,
          search: search,
          // ...
        },
      })
      .then(({ data }) => {
        // Process the response data and return it in a defined format
        return {
          items: data, // This should be the array of data items
          count: count, // This should be the total count of data items available
        };
      });
  },
});
```

## ✨ Using in Components

```vue
<template>
  <VList endpoint="users" :per-page="5" pagination-mode="pagination">
    <template #default>
      <VListInitialLoader />
      <VListLoader />
      <VListError />
      <VListItems #default="{items}">
        <!-- Render your list items here -->
        <pre>{{ items }}</pre>
      </VListItems>
      <VListInitialLoader />
      <VListLoader />
      <VListError />
      <VListItems />
      <VListPagination />
      <VListPagination />
    </template>
  </VList>
</template>
```

## 🤔 Interesting?

Check out the [documentation](https://7span.com/open-source/vue-list/) for more information.
