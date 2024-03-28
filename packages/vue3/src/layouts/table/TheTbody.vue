<template>
  <!-- 
    Used 'item-key' as 'name' to ensure unique identification as columns are generated with 'name' key in the attrs array
  -->
  <Draggable
    v-if="reorder"
    handle=".v-list-table__drag"
    v-model="rowsData"
    item-key="name"
    tag="tbody"
  >
    <slot name="body-start" />
    <template #item="{ element, index }">
      <tr
        :class="[
          { 'v-list-table__selected': isSelected(element) },
          ...rowClass(element, index),
        ]"
      >
        <slot name="body-row" :row="element" :rowIndex="index" />
      </tr>
    </template>
    <slot name="body-end" />
  </Draggable>

  <template v-else>
    <tbody>
      <slot name="body-start" />
      <tr
        v-for="(row, rowIndex) in rows"
        :key="key('body-row', rowIndex)"
        :class="[
          { 'v-list-table__selected': isSelected(row) },
          ...rowClass(row, rowIndex),
        ]"
      >
        <slot name="body-row" :row="row" :rowIndex="rowIndex" />
      </tr>
      <slot name="body-end" />
    </tbody>
  </template>
</template>

<script>
import { key } from "../../utils";

export default {
  inject: ["reorder"],
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    isSelected: {
      type: Function,
      default: () => null,
    },
    rowClass: {
      type: Function,
      default: () => null,
    },
  },
  data() {
    return {
      key,
      rowsData: this.rows,
    };
  },
};
</script>
