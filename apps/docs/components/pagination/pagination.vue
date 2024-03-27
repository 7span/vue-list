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

<style scoped>
/* Tabel Styling */
table {
  width: 100%;
}

.vp-doc table {
  display: table;
}
</style>
