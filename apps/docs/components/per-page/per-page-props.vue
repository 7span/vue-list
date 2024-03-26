<template>
  <VList
    :attrs="state.attrs"
    :per-page="5"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>

      <!-- Integration of VListPerPage component -->
      <span>Per Page :</span>
      <VListPerPage :options="[5, 10, 15, 20]" />
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
