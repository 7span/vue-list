<script setup>
import LoadMore from './load-more.vue';

</script>

# Components

## Load More

- Provides infinite list where users can click on Load more and new items from
- API will be appended in a list keeping previous items as it is.

<LoadMore/>

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
      <v-list-load-more class="load-more-btn" />
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

## Slots

| Name    | Description                                                                                                        | Bindings                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Button to let users click to load more data.                                                                       | **loading** `boolean` - true when loadMore is called and waiting for API response.<br>**loadMore** `function` - A function to call to load more items |
| end     | When all the available items are loaded. Displayed when a count returned from API is equal to the items in a list. |                                                                                                                                                       |

---
