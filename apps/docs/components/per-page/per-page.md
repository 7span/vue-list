<script setup>
import PerPage from './per-page.vue';

</script>

# Components

## Overview

- `v-list-per-page` component provides a pagination bar with clickable page numbers, allowing users to navigate through the list easily.
- To utilize `v-list-per-page` component, integrate it within the **#default** slot of the wrapper component.

<PerPage/>

## Example

```vue
<template>
  <v-list
    :attrs="state.attrs"
    :per-page="10"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <v-list-table :rowClass="() => []"> </v-list-table>

      <!-- Integration of v-list-per-page component -->
      <span>Per Page :</span> <v-list-per-page />
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

| Prop name | Description                                                                                                                                                                               | Type  | Values | Default           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------ | ----------------- |
| options   | An array of options which lets user select how many items they want to see in a list at a time.<br>Provide an object with 'label' and 'value' keys to have a label diffrent then a value. | array | -      | [10, 25, 50, 100] |

## Slots

| Name    | Description                                    | Bindings                                                                                                                               |
| ------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| default | Custom interface to list down all the options. | **value** `int` - Current value.<br>**change** `function` - Change the value.<br>**options** `array` - An array of serialized options. |

---