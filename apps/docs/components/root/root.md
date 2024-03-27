<script setup>
import Root from './root.vue';

</script>

# Root Component

## Overview

- The `VList` (or root) component is designed for displaying lists of data with various features such as pagination, sorting, filtering, and bulk actions.
- Utilize the `VList` wrapper component to manage and display your list data effectively.

<Root />

## Example

```vue
<template>
  <VList
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
    class="divide-y divide-gray-200 border"
  >
    <!-- ERROR -->
    <template #error="{ error }"> {{ error }} </template>

    <!-- EMPTY -->
    <template #empty> No Data Found </template>

    <!-- LOADING PAGE -->
    <template #loading-page> ...Loading page </template>

    <!-- LOADING -->
    <template #loading> ...Loading </template>

    <!-- DEFAULT  -->
    <template #default="{  items }">
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white p-4 hover:bg-gray-50 dark:bg-gray-900"
      >
        <!-- Rest of your listing code -->
      </div>
    </template>
  </VList>
</template>
```

## Props

| Prop name    | Description                                                                                                                                                                                           | Type     | Values        | Default        |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- | -------------- |
| endpoint     | An API endpoint to hit for getting data. This will be appended to baseUrl                                                                                                                             | `string` | -             |                |
| page         | Default page to load.                                                                                                                                                                                 | `number` | -             | 1              |
| perPage      | Number of results to fetch and display on each page.                                                                                                                                                  | `number` | -             | 25             |
| params       | Additional parameters to pass when making an API request.                                                                                                                                             | `object` | -             |                |
| filters      | Just like parameters but specifically to filter data.                                                                                                                                                 | `object` | -             |                |
| sortBy       | Uses this attribute when sorting items in listing.                                                                                                                                                    | `string` | -             |                |
| sortOrder    | Ascending or Descending?                                                                                                                                                                              | `string` | `asc`, `desc` |                |
| search       | Default search query to use                                                                                                                                                                           | `string` | -             |                |
| attrs        | List of attributes to display in a list                                                                                                                                                               | `array`  | -             |                |
| attrsAdaptor | An adaptor defines which attributes to be passed to layout<br>This is helpful when you don't know which attributes are sent from API<br>Also useful when you need to show all the columns except few. | `func`   | -             | (data) => data |

## Events

| Event name     | Properties                                                                                                                 | Description                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| beforeLoadMore | **payload** `object` - Payload<br>**payload** `int` - .oldPage - Old Page No<br>**payload** `int` - .newPage - New Page No | Triggered before loading more data. |
| afterLoadMore  |                                                                                                                            | Triggered after loading more data.  |
| afterLoad      |                                                                                                                            | Triggered after initial data load.  |
| res            |                                                                                                                            |
| sort           |                                                                                                                            |

## Slots

| Name         | Description                                             | Bindings                                                                                                                                                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loading      | Displayed when component is loading for the first time. |                                                                                                                                                                                                                                                                                                                                   |
| loading-page | Displayed when navigating to another page.              |                                                                                                                                                                                                                                                                                                                                   |
| error        | If there was an error from an API                       | **error** `object` - An errror returned from API                                                                                                                                                                                                                                                                                  |
| empty        | When API returned no items.                             |                                                                                                                                                                                                                                                                                                                                   |
| default      | Renders the UI to list items.                           | **items** `array` - List if items<br>**response** `object` - Latest response from an API<br>**loading** `boolean` - If component is initializing and first request is being made.<br>**isEmpty** `boolean` - If there are no items returned by API.<br>**refresh** `function` - Refresh the listing by using the same parameters. |
