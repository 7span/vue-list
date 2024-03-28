<template>
  <VList
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <VListTable
        :rowClass="() => []"
        class="vpr-table vpr-table--row-click"
        reorder
      >
        <template #th_after="{ attr, sortBy, sortOrder }">
          <div v-if="attr.name == sortBy">
            <span v-if="sortOrder == 'asc'">
              <IconSortUp />
            </span>
            <span v-else-if="sortOrder == 'desc'">
              <IconSortDown />
            </span>
          </div>

          <!-- Unsorted icon: conditions explainantion -->
          <!-- If Sortable is true -->
          <!-- If sortBy is null OR column name is not same as sortBy -->
          <IconUnsorted
            v-if="attr.sortable && (!sortBy || attr.name !== sortBy)"
          />
        </template>

        <!-- Header -->
        <template #th_select="{ toggleSelectAll, selectionState }">
          <button @click="toggleSelectAll()">{{ selectionState }}</button>
        </template>

        <!-- Select -->
        <template #select="{ toggleSelect, isSelected }">
          <button v-if="isSelected" @click="toggleSelect()">☑</button>
          <button v-else @click="toggleSelect()">🟦</button>
        </template>

        <!-- Drag -->

        <template #_drag>
          <IconDrag class="v-list-table__drag cursor-grab" />
        </template>
      </VListTable>
    </template>
  </VList>
</template>

<script setup>
import { reactive } from "vue";
import IconSortUp from "./icon-sort-up.vue";
import IconSortDown from "./icon-sort-down.vue";
import IconUnsorted from "./icon-unsorted.vue";
import IconDrag from "./icon-drag.vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color", rowClick: false },
    { name: "status" },
    { name: "name", sortable: true },
    { name: "_drag", label: "Drag" },
  ],
});
</script>

<style>
/* Tabel Styling */
table {
  width: 100%;
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

/* V List Table Styling */
.v-list-table__head {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
</style>
