# Counters Component

## Overview

- Displays the counter of total items and displayed items in a list.
- Use `VListCounter` component inside the **#default** slot of the wrapper component.

## Example

```vue {13} [app.vue]
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

      <!-- Integration of VListCounter component -->
      <VListCounter />
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

## Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | Custom interface to display counters |
