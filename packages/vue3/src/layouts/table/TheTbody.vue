<template>
  <!-- 
    Used 'item-key' as 'name' to ensure unique identification as columns are generated with 'name' key in the attrs array
  -->
  <Draggable
    v-if="reorder"
    handle=".v-list-table__drag"
    v-model="value"
    item-key="name"
    tag="tbody"
  >
    <template #header>
      <slot name="body-start" />
    </template>
    <template #item="{ element, index }">
      <tr
        :class="[
          { 'v-list-table__selected': isSelected(element) },
          rowClass ? rowClass(element, index) : '',
        ]"
      >
        <slot name="body-row" :row="element" :rowIndex="index" />
      </tr>
    </template>
    <template #footer>
      <slot name="body-end" />
    </template>
  </Draggable>

  <template v-else>
    <tbody>
      <slot name="body-start" />
      <tr
        v-for="(row, rowIndex) in modelValue"
        :key="key('body-row', rowIndex)"
        :class="[
          { 'v-list-table__selected': isSelected(row) },
          rowClass ? rowClass(row, rowIndex) : '',
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
    modelValue: {
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
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data() {
    return {
      key,
    };
  },
};
</script>
