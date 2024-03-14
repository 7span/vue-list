<script setup>
import Pagination from './pagination.vue';

</script>

# Components

## Pagination

- Display a pagination bar with clickable page numbers to allow users to navigate.

<Pagination/>

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
      <v-list-pagination class="paginate" />
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

| Prop name | Description                                                                                                                                             | Type   | Values | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------- |
| pageLinks | Number of buttons to display in pagination.<br>Current Page will be center and other pages will be added in start and end.<br>Odd number is recommended | number | -      | 7       |

## Slots

| Name | Description                                   | Bindings                                                                                                                                                                    |
| ---- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prev | Render a previous button                      | **prev** `function` - Got to previous page.<br>**hasPrev** `boolean` - If previous page is available or not.                                                                |
| page | Render an interface to display a page button. | **change** `function` - Call it to change a page.<br>**value** `int` - Page number a button presents.<br>**isActive** `boolean` - If a button is presenting a current page. |
| next | Render a next button                          | <br>                                                                                                                                                                        |

---
