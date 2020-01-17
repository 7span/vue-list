<template>
  <div class="v-list-table">
    <table
      class="v-list-table__table"
      :class="{ 'v-list-table--row-click': $listeners.rowClick }"
    >
      <!-- HEADER -->
      <thead>
        <tr>
          <th
            v-for="key in columns"
            :key="`v-list-table-header-${key}`"
            :class="thClass(key)"
            :style="thStyle(key)"
            @click="sortItemsBy(key)"
          >
            <div class="v-list__head">
              <label>{{ th(key) }} </label>
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
        v-model="rows"
        @change="change($event)"
      >
        <!-- Looping Rows -->
        <tr
          v-for="(row, index) in rows"
          :key="`v-list-table-row-${index}`"
          @click="$emit('rowClick', row)"
        >
          <!-- Looping Columns -->
          <td
            v-for="key in columns"
            :key="`v-list-table-col-${key}`"
            :class="tdClass(key)"
          >
            <!-- Override Slot -->
            <slot v-if="$scopedSlots[key]" :name="key" :item="row">
              {{ row[key] }}
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

            <!-- Default Slot -->
            <slot v-else :name="key" :item="row">{{ td(key, row) }}</slot>
          </td>
        </tr>
      </component>
    </table>
  </div>
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

  computed: {
    columns() {
      //If not itemProps configuration is provided, return all the items to show!
      if (!this.itemProps || Object.keys(this.itemProps).length == 0) {
        //Get all the keys from response data
        if (this.rows[0]) {
          return Object.keys(this.rows[0]);
        }
        return [];
      } else {
        return Object.keys(this.itemProps);
      }
    },
    mergedProps() {
      //Merge with global configuration
      const mergedProps = merge(
        defaultItemProps,
        this.OPTIONS.itemProps,
        this.itemProps
      );
      return mergedProps;
    },
    rows: {
      set() {
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
    },
    th(key) {
      const props = this.mergedProps[key];
      return (props && props.label) || startCase(key);
    },
    thClass(key) {
      const props = this.mergedProps[key];
      if (!props) return;
      const classList = [];
      if (key == this.sortBy) classList.push("v-list-table__sort");
      if (props.fix) classList.push("v-list-table__fix");
      return classList;
    },
    thStyle(key) {
      const props = this.mergedProps[key];
      if (!props) return;
      const style = {};
      if (props.width) style.width = props.width;
      return style;
    },
    tdClass(key) {
      const props = this.mergedProps[key];
      if (!props) return;
      const classList = [];
      if (this.mergedProps[key].fix) classList.push("v-list-table__fix");
      return classList;
    },
    td(key, row) {
      const props = this.mergedProps[key];
      if (!props) return row[key];

      // valueMap: JSON
      // User can define a key:value map for "enum values" to "human readable" form, from response.
      if (props.valueMap) {
        const value = row[key];
        if (value && props.valueMap[value]) {
          return props.valueMap[value];
        }
      }

      // type: String
      // If type is provided, user can configure its value in global typeAdapter configuration.
      if (props.type && this.OPTIONS.typeAdapters[props.type]) {
        return this.OPTIONS.typeAdapters[props.type](row[key], row);
      }

      // value: Function
      // If user needs to evaluate the value manually.
      if (props.value) {
        return props.value(row);
      }

      //If props are defined but need to display row value.
      return row[key];
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list-table {
  --v-list-table--border-color: #{--color(grey, lighter)};
  padding: --space(3);
}
.v-list-table__table {
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
  border-bottom: 2px solid var(--v-list-table--border-color);
  th,
  td {
    padding: 10px;
    border-color: var(--v-list-table--border-color);
    border-style: solid;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-left-width: 0px;
    border-right-width: 0px;
    text-align: start;
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
      background-color: #fff8e1;
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
