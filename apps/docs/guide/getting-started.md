# Getting Started

## Installation

Install `vue-list` using your preferred package manager:

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

## Setup

Let's begin by setting up the plugin object. In your `main.js` or main entry file, install the plugin into Vue:

::: code-group

```js [main.js]
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueList from "@7span/vue-list";
import axios from "axios";
import qs from "qs"; // Import the qs library for query string serialization

const app = createApp(App);
app.use(VueList, {
  async requestHandler(requestData) {
    const { endpoint, pagination, search, sort, filters } = requestData;
    const { page, perPage } = pagination;

    // Fetch total count of items
    const count = await axios
      .get(`https://crm.7span.in/items/${endpoint}?aggregate[countDistinct]=id`)
      .then(({ data }) => data.data[0].countDistinct.id);

    return axios
      .get(`https://crm.7span.in/items/${endpoint}`, {
        params: {
          page,
          limit: perPage,
          search: search,
          sort: (sort.order == "asc" ? "-" : "") + sort.by,
        },
        paramsSerializer: (params) => qs.stringify(params),
      })
      .then(({ data }) => {
        return {
          items: data.data,
          count: count,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

app.mount("#app");
```

:::

## Description

The `requestHandler` function defined above is responsible for fetching and processing data from the API endpoint. Here's how it works:

**1. Data Request Handler:**

- It accepts an single argument containing information about the data request, including:\
   `endpoint`: URL of the API endpoint to fetch data from.\
   `filters`: Any filters to be applied to the data.\
   `search`: Search term to filter the data.\
   `pagination`: Information about pagination (current page and items per page).\
   `sort`: Sorting criteria (field and order).\
   `config`: Additional configuration options.

**2. Standardized Data Response:**

- The requestHandler function expects to return the API response to adhere to a specific format, regardless of the data source:\
  `items`: This key should hold the actual data fetched from the server, typically an array of objects representing the data items.\
  `count`: This key should hold an integer representing the total number of data items available, even if not displayed due to pagination or filters.\
  `res`: This key can optionally hold the entire raw response object for further use in your application.

> [!note] Note
> Ensure that the `requestHandler` function setup correctly with expected response format. Adjust the endpoint URLs and query parameters according to your specific API requirements.

Now that you've learned how to set up the `vue-list` plugin, let's dive into the [Components](/guide/builtin-components/intro.html) provided by the package to understand how they work and how you can use them to build listing layouts in your Vue.js applications.
