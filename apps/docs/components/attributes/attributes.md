<script setup>
import Attributes from './attributes.vue';

</script>

# Components

## Overview

- Display all the attributes you provided and render a UI to modify those attributes within the context of a v-list component.
- The component renders a user interface to modify attributes provided through the `attrs` prop.
- Use `v-list-attributes` component inside the **#default** slot of the wrapper component.

<Attributes/>

## Example

```vue {3,11} [app.vue]
<template>
  <v-list
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <!-- Integration of v-list-attributes component -->
      <v-list-attributes />

      <!-- Additional customization within the default slot -->
      <v-list-table :rowClass="() => []">
        <template #actions="{ item }">
          <button class="btn btn-primary" @click="handleView">View</button>
        </template>
      </v-list-table>
    </template>
  </v-list>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color", rowClick: false },
    { name: "status" },
    { name: "name", sortable: true },
    { name: "actions", rowClick: false },
  ],
});
</script>

<style scoped>
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

/* Attributes Styling */
.v-list-attributes {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin: 10px 0;
}

.v-list-attributes label {
  display: flex;
  align-items: center;
}
.v-list-attributes label input {
  margin-left: 5px;
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

## Configuration

You Can configure attrs as following:

```vue[app.vue]
// In Setup script
const state = reactive({
  attrs: [
    { name: "_index", label: "#", fix: true },
    { name: "color",  width: "30%", },
    { name: "status", type: "string", rowClick: false },
    { name: "name", sortable: true },
    { name: "actions", fix: true },
  ],
});

```

**Attribute Configuration Properties:**

- `name`: Specifies the key in the API response corresponding to the data for the column.
- `label`: Can be used to override the default column name for display purposes.
- `type`: Defines the type of data in the column (e.g., "string", "number", etc.).
- `fix`: When set to true, enforces a fixed width for the column.
- `width`: Allows developers to specify a custom width for the column.
- `rowClick`: Allows developers to specify whether a row should be clickable or not for that column.
- `sortable`: When set to true, enables sorting functionality for the column.

## Props

| Prop name | Description                                                              | Type  | Values | Default |
| --------- | ------------------------------------------------------------------------ | ----- | ------ | ------- |
| attrs     | Array of objects representing the attributes to be displayed in the list | array |        |         |

## Slots

| Name    | Description                        |
| ------- | ---------------------------------- |
| default | An individual attribute interface. |
