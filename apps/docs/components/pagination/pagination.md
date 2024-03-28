<script setup>
import Pagination from './pagination.vue';

</script>

# Pagination Component

## Overview

- Display a pagination bar with clickable page numbers, allowing users to navigate through a list of items.
- To utilize `VListPagination` component, integrate it within the **#default** slot of the wrapper component.

<Pagination/>

## Example

```vue {13} [app.vue]
<template>
  <VList
    :attrs="state.attrs"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
    :per-page="5"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>

      <!-- Integration of VListPagination component -->
      <VListPagination />
    </template>
  </VList>
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
```

## Props

| Prop name | Description                                                                                                                                             | Type   | Values | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------- |
| pageLinks | Number of buttons to display in pagination.<br>Current Page will be center and other pages will be added in start and end.<br>Odd number is recommended | number | -      | 5       |

## Slots

| Name  | Description                                   | Bindings                                                                                                                                                                    |
| ----- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prev  | Render a previous button                      | **prev** `function` - Got to previous page.<br>**hasPrev** `boolean` - If previous page is available or not.                                                                |
| page  | Render an interface to display a page button. | **change** `function` - Call it to change a page.<br>**value** `int` - Page number a button presents.<br>**isActive** `boolean` - If a button is presenting a current page. |
| next  | Render a next button                          | <br>                                                                                                                                                                        |
| first | Render a next button                          | <br>                                                                                                                                                                        |
| last  | Render a next button                          | <br>                                                                                                                                                                        |
