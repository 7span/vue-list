<template>
  <VList
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <!-- Integration of VListAttributes component -->
      <VListAttributes />

      <!-- Additional customization within the default slot -->
      <VListTable :rowClass="() => []">
        <template #color="{ item }">
          <div>
            {{ item.color || "---" }}
          </div>
        </template>

        <template #actions="{ item }">
          <button class="btn btn-primary">View</button>
        </template>
      </VListTable>
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
    { name: "actions", rowClick: true },
  ],
});
</script>

<style scoped>
/* Tabel Styling */
table {
  width: 100%;
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
