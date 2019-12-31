<template>
  <table class="v-list-table" :class="{ 'v-list-table--row-click': $listeners.rowClick }">
    <!-- HEADER -->
    <thead>
      <tr>
        <th
          v-for="(col, key) in itemProps"
          :key="`v-list-table-header-${key}`"
          :class="{
            'v-list-table__sort': key == sortBy,
            'v-list-table__fix': col.fix
          }"
          :style="{ width: mergedItems[key].width || false }"
          @click="sortItemsBy(key)"
        >
          <div class="v-list__head">
            <label>{{ mergedItems[key].label || startCase(key) }}</label>
            <div v-if="key == sortBy" class="v-list__sort-icon">
              <s-icon v-if="sortOrder == 'asc'" name="ChevronUp"></s-icon>
              <s-icon v-if="sortOrder == 'desc'" name="ChevronDown"></s-icon>
            </div>
          </div>
        </th>
      </tr>
    </thead>

    <!-- BODY -->
    <component
      :is="sortable ? 'draggable' : 'tbody'"
      handle=".v-list-table__sort"
      tag="tbody"
      v-model="listItems"
      @change="change($event)"
    >
      <!-- Looping Rows -->
      <tr
        v-for="(row, index) in listItems"
        :key="`v-list-table-row-${index}`"
        @click="$emit('rowClick', row)"
      >
        <!-- Looping Columns -->
        <td
          v-for="(col, key) in itemProps"
          :key="`v-list-table-col-${key}`"
          :class="{
            'v-list-table__fix': col.fix
          }"
        >
          <!-- Override Slot -->
          <slot v-if="$scopedSlots[key]" :name="key" :item="row">
            {{
            row[key]
            }}
          </slot>

          <!-- Global Slot -->
          <component
            v-else-if="OPTIONS.slots && OPTIONS.slots[key]"
            :item="row"
            :is="OPTIONS.slots[key]"
          />

          <!-- Index -->
          <slot v-else-if="key == '_index'" name="_index" :item="row">
            <span>{{ itemIndex(index) }}</span>
          </slot>

          <!-- Drag Handle -->
          <p v-else-if="key == '_sort'" class="v-list-table__sort">
            <slot name="_sort" :item="row">
              <s-icon title="Drag to Sort" name="drag"></s-icon>
            </slot>
          </p>

          <!-- If value is defined in valueMap-->
          <slot
            v-else-if="col.valueMap && col.valueMap[row[key]]"
            :name="key"
            :item="row"
          >{{ col.valueMap[row[key]] }}</slot>

          <!-- Type Adaptor -->
          <slot
            v-else-if="col.type && OPTIONS.typeAdapters[col.type]"
            :name="key"
            :item="row"
          >{{ OPTIONS.typeAdapters[col.type](row[key], row) }}</slot>

          <!-- Default Slot -->
          <slot v-else :name="key" :item="row">{{ row[key] }}</slot>
        </td>
      </tr>
    </component>
  </table>
</template>

<script>
import { merge, startCase } from "lodash";

const defaultItemProps = {
  _index: {
    width: "50px",
    label: "#"
  },
  _sort: {
    width: "24px"
  }
};

export default {
  name: "v-list-table",
  mixins: [require("../mixins/layouts").default],
  props: {
    sortable: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      startCase
    };
  },

  computed: {
    mergedItems() {
      //Merge with global configuration
      const mergedItems = merge(
        defaultItemProps,
        this.OPTIONS.itemProps,
        this.itemProps
      );
      return mergedItems;
    },
    listItems: {
      set(newValue) {
        //Update of items is done with API and refreshing the request so no need to update the UI
      },
      get() {
        return JSON.parse(JSON.stringify(this.items));
      }
    }
  },
  methods: {
    change(data) {
      this.$emit("sort", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list-table {
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
  th,
  td {
    padding: 10px;
    border-color: --color(grey, lighter);
    border-style: solid;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-left-width: 0px;
    border-right-width: 0px;
    text-align: left;
  }
  th {
    border-bottom-width: 2px;
    font-weight: bold;
    color: --color(grey);
    font-size: 13px;
  }
  tbody {
    tr {
      &:hover {
        background-color: --color(grey, lightest);
      }
    }
  }
  .col-drag {
    button {
      cursor: move !important;
    }
  }
  .sortable-ghost {
    position: relative;
    &:after {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $md-amber-50;
      position: absolute;
      z-index: 2;
    }
  }
}

.v-list-table--row-click {
  tr {
    cursor: pointer;
  }
}

.v-list__head {
  display: flex;
  align-items: center;
  label {
    flex: 0 0 auto;
    cursor: pointer;
  }
}
.v-list-table__fix {
  width: 1px;
  white-space: nowrap;
}
</style>
