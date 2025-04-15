# Components

VueList is a headless package — which means it handles all the list logic, state management, and API plumbing for you, but doesn't render any UI by default.

Instead, it gives you a set of composable components that expose useful state and behaviors. You can place them anywhere in your layout, wrap them in custom UI, or completely style them your way.

## Example

::: code-group

```vue [app.vue]
<template>
  <VueList>
    <template #default>
      <VueListInitialLoader />
      <VueListLoader />
      <VueListError />
      <VueListItems #default="{items}">
        <!-- Render your list items here -->
        <pre>{{ items }}</pre>
      </VueListItems>
      <VueListInitialLoader />
      <VueListLoader />
      <VueListError />
      <VueListItems />
      <VueListPagination />
      <VueListLoadMore />
      <VueListRefresh />
    </template>
  </VueList>
</template>
```

:::

## Notes

- `<VueList>` must be the root component to manage the list context.
- All child components consume the internal state automatically — no need to pass props.
- You can wrap child components with custom markup, layouts, or UI frameworks like Tailwind, Vuetify, etc.
- You don’t have to use every child component — use only what you need.

Know more about the components, their props and slots in next section.
