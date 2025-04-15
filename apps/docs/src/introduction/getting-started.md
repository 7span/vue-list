# Getting Started

## Installation

::: code-group

```sh [npm]
npm install @7span/vue-list
```

```sh [pnpm]
pnpm add @7span/vue-list
```

```sh [yarn]
yarn add @7span/vue-list
```

:::

## Configuring the Plugin

Before using VueList in your components, you need to configure it globally with your preferred `requestHandler`. This is the function VueList will use to fetch data whenever listing state changes (like page, filters, etc.).

::: code-group

```js [main.js]
import { createApp } from "vue";
import VueList from "@7span/vue-list";
import axios from "axios";
import App from "./App.vue";

const app = createApp(App);

app.use(VueList, {
  requestHandler(requestData) {
    const {
      endpoint,
      pagination,
      search,
      filters,
      page,
      perPage,
      sortBy,
      sortOrder,
    } = requestData;

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

app.mount("#app");
```

:::

## Using in Components

Once the plugin is configured, you can use the `<VueList>` component anywhere in your app to power listing views. VueList handles the reactive state (pagination, filters, isLoading, etc.) - you handle the markup.

::: code-group

```vue [users.vue]
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

:::

::: tip
VueList does not render your UI. It only gives you the data and state you need — your components stay 100% in control of layout and design.
:::

Let's break down what VueList offers - configuration options, the components, and props that power your listings.
