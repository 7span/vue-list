<script setup>
import GoToPage from './goto-page.vue';

</script>

# Components

## GoTo Page

<GoToPage/>

## Example

```vue
<template>
  <v-list :attrs="state.attrs" :per-page="4" endpoint="skills" sort-by="name">
    <template #default>
      <v-list-table :rowClass="() => []">
        <template #actions="{ item }">
          <button class="btn btn-primary">View</button>
        </template>
      </v-list-table>
      <span>Go To Page :</span><v-list-go-to class="go-to" />
    </template>
  </v-list>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color" },
    { name: "status" },
    { name: "name", sortable: true },
    { name: "actions" },
  ],
});
</script>

<style>
/* Tabel Styling */
table {
  width: 100%;
  border: 1px solid #e5e7eb;
}

thead tr th {
  font-size: 0.875rem;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280 !important;
  padding-bottom: 0.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: start;
}

tbody tr td {
  padding: 0.5rem;
  text-align: start;
}

tbody tr:hover {
  background: #f8f9fa;
}

/* Button Styling */
.btn {
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn.btn-primary {
  background-color: #1690d8;
  color: #ffffff;
  text-align: start;
}

.vp-doc table {
  display: table;
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
  accent-color: #1690d8;
}
</style>
```

## Props

| Prop name    | Description                                                                                                                                                                                           | Type   | Values        | Default        |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------- | -------------- |
| endpoint     | An API endpoint to hit for getting data. This will be appended to baseUrl                                                                                                                             | string | -             |                |
| page         | Default page to load.                                                                                                                                                                                 | number | -             | 1              |
| perPage      | Number of results to fetch and display on each page.                                                                                                                                                  | number | -             | 25             |
| params       | Additional parameters to pass when making an API request.                                                                                                                                             | object | -             |                |
| filters      | Just like parameters but specifically to filter data.                                                                                                                                                 | object | -             |                |
| sortBy       | Uses this attribute when sorting items in listing.                                                                                                                                                    | string | -             |                |
| sortOrder    | Ascending or Descending?                                                                                                                                                                              | string | `asc`, `desc` |                |
| search       | Default search query to use                                                                                                                                                                           | string | -             |                |
| attrs        | List of attributes to display in a list                                                                                                                                                               | array  | -             |                |
| attrsAdaptor | An adaptor defines which attributes to be passed to layout<br>This is helpful when you don't know which attributes are sent from API<br>Also useful when you need to show all the columns except few. | func   | -             | (data) => data |

## Events

| Event name     | Properties                                                                                                                 | Description |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| beforeLoadMore | **payload** `object` - Payload<br>**payload** `int` - .oldPage - Old Page No<br>**payload** `int` - .newPage - New Page No |
| afterLoadMore  |                                                                                                                            |
| afterLoad      |                                                                                                                            |
| res            |                                                                                                                            |
| sort           |                                                                                                                            |

## Slots

| Name         | Description                                                       | Bindings                                                                                                                                                                                                                                                                                                                            |
| ------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loading      | Loader to display when a component is loading for the first time. |                                                                                                                                                                                                                                                                                                                                     |
| loading-page | Loader to display when navigating to other page.                  |                                                                                                                                                                                                                                                                                                                                     |
| error        | If there was an error from an API                                 | **error** `object` - An errror returned from API                                                                                                                                                                                                                                                                                    |
| empty        | When API returned no items.                                       |                                                                                                                                                                                                                                                                                                                                     |
| default      | Render a UI to list items.                                        | **items** `array` - List if items<br>**response** `object` - A latest response from an API<br>**loading** `boolean` - If component is initializing and first request is being made.<br>**isEmpty** `boolean` - If there are no items returned by API.<br>**refresh** `function` - Refresh the listing by using the same parameters. |

---
