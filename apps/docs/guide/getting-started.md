# Getting Started

<!--
<img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/fbf45e184fdb17a53d7568936911ec92c3928d69-1333x1333.png?w=750&q=40&fit=max&auto=format" width="300" height="100">
 -->

## Installation

Vue List can be installed with package installer of your choice as following:

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

Let's begin by setting up the plugin object. It is recommended to create it in a separate file and export it, as shown below to keep the logic contained and separate.

### Step 1: Create a plugin folder

Inside your project folder, create a new folder called plugins inside the `/src` folder. You should now have a path like `src/plugins`.

### Step 2: Create the VueJS plugin

Create a javascript file named vue-list.js inside the `src/plugins`. Main method of Vue List is
`requestHandler()`, which we will dicusss in step 3. export requestHandler() and import it in `main.js` along with `vue-list` package as below.

::: code-group

```js [vue-list.js]
// src/plugins/vue-list.js
export const requestHandler = (requestData) => {};
```

:::

::: code-group

```js {4,5,8} [main.js]
// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import VueList from "@7span/vue-list";
import { requestHandler } from "./plugins/vue-list";

const app = createApp(App);
app.use(VueList, { requestHandler });
app.mount("#app");
```

:::

### Step 3: Data Fetching

`vue-list` package provides a generic data fetching and processing solution for Vue.js applications, particularly focusing on functionalities related to data tables.

> [!note] Note
> `vue-list` is designed to be agnostic to the underlying data source technology.
> It can work with various data providers like Axios, GraphQL, or Directus, allowing you to adapt it to your specific project needs.

Let's understand `requestHandler()` in following steps:

**1. Data Request Handler:**

- The requestHandler function serves as the central point for fetching and processing data.
- It accepts an single argument containing information about the data request, including:\
   `endpoint`: URL of the API endpoint to fetch data from.\
   `filters`: Any filters to be applied to the data.\
   `search`: Search term to filter the data.\
   `pagination`: Information about pagination (current page and items per page).\
   `sort`: Sorting criteria (field and order).\
   `config`: Additional configuration options.

**2. Standardized Data Response:**

- The requestHandler function expects the API response to adhere to a specific format, regardless of the data source:\
  `items`: This key should hold the actual data fetched from the server, typically an array of objects representing the data items.\
  `count`: This key should hold an integer representing the total number of data items available, even if not displayed due to pagination or filters.\
  `res`: This key can optionally hold the entire raw response object for further use in your application.

## Example

::: code-group

```js[vue-list.js]
import axios from "axios";

export const requestHandler = (requestData) => {
  return axios
    .get(endpoint)
    .then(({ data }) => {
      return {
        items: data.data,
        count: data.data.length,
        res: data,
      };
    })
    .catch((error) => {
      console.log(error);
    });
};
```

:::

## Basic Usage

::: code-group

```js[App.vue]
<template>
  <VList
    class="divide-y divide-gray-100"
    endpoint="https://crm.7span.in/items/skills"
  >
    <template #header>V List Table </template>
    <template #default="{ items }">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="flex items-center justify-between p-4"
      >
        {{ index }}-{{ item }}
      </div>
    </template>
    <template #loading> Loading Data... </template>
    <template #empty>
      <div class="py-4 h-full">===No Data Found===</div>
    </template>
  </VList>
</template>

```

:::
