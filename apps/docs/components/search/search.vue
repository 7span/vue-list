<template>
  <VList
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <!-- Integration of VListSearch component -->
      <VListSearch class="search" />

      <VListTable :rowClass="() => []"> </VListTable>
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

<style>
/* Tabel Styling */
table {
  width: 100%;
}

.vp-doc table {
  display: table;
}

.search {
  margin: 2px;
  padding: 10px;
  font-size: 14px;
  text-align: end;
}

.search input {
  border: 1px solid #a09d9d;
  border-radius: 5px;
  padding: 3px;
}
</style>
