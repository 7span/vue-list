<template>
  <div>
    <!-- Index -->
    <slot
      v-if="attr.name == '_index'"
      name="_index"
      v-bind="tdScope(attr, row, rowIndex)"
    >
      {{ itemIndex(rowIndex) }}
    </slot>

    <!-- Drag Handle -->
    <slot
      v-else-if="attr.name == '_drag'"
      name="_drag"
      v-bind="tdScope(attr, row, rowIndex)"
    >
      <span class="v-list-table__drag">Drag</span>
    </slot>

    <!-- Override Slot -->
    <slot
      v-else-if="$scopedSlots[attr.name]"
      :name="attr.name"
      v-bind="tdScope(attr, row, rowIndex)"
    >
      {{ row[attr.name] }}
    </slot>

    <!-- Global Slot -->
    <component
      v-else-if="$vueList.options.slots && $vueList.options.slots[attr.name]"
      :is="$vueList.options.slots[attr.name]"
      v-bind="tdScope(attr, row, rowIndex)"
    />

    <!-- Default Slot -->
    <slot v-else :name="attr.name" v-bind="tdScope(attr, row, rowIndex)">
      {{ td(attr, row) }}
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    attr: Object,
    row: Object,
    rowIndex: Number,
    isSelected: {
      type: Function,
      default: () => null,
    },
    td: {
      type: Function,
      default: () => null,
    },
    itemIndex: {
      type: Function,
      default: () => null,
    },
  },
  methods: {
    tdScope(attr, row, rowIndex) {
      return {
        toggleSelect: () => this.toggleSelect(row),
        isSelected: this.isSelected(row),
        item: row,
        rowIndex: this.itemIndex(rowIndex, this.paginationMode),
        content: this.td(attr, row),
      };
    },
  },
};
</script>