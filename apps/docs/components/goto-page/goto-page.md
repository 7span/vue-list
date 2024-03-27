<script setup>
import GoToPage from './goto-page.vue';

</script>

# Goto Component

## Overview

- Facilitates navigation to a specific page or item in the list.
- Use `VListGoTo` component inside the **#default** slot of the wrapper component.

<GoToPage/>

## Example

```vue {14} [app.vue]
<template>
  <VList
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>

      <!-- Integration of VListGoTo component -->
      <span>Go To Page :</span>
      <VListGoTo />
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
