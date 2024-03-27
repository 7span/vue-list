<template>
  <VList
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="desc"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>
    </template>
  </VList>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color", rowClick: false },
    { name: "status" },
    { name: "name", sortable: true },
  ],
});
</script>

<style scoped>
/* Tabel Styling */
table {
  width: 100%;
}

.vp-doc table {
  display: table;
}
</style>
