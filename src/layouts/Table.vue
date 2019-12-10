<template>
  <table
    class="v-list-table"
    :class="{ 'v-list-table--row-click': $listeners.rowClick }"
  >
    <!-- HEADER -->
    <thead>
      <tr>
        <th
          v-for="(col, key) in localCols"
          :key="`v-list-table-header-${key}`"
          @click="apply('localSortBy', key)"
          :class="{ 'v-list-table__sort': key == sortBy }"
          :style="{ width: col.width || false }"
        >
          {{ mergedCols[key].label }}
        </th>
      </tr>
    </thead>

    <!-- BODY -->
    <component
      :is="sortable ? 'draggable' : 'tbody'"
      @end="$emit('sort', dataClone)"
      handle=".v-list-table__drag"
      v-model="dataClone"
      tag="tbody"
    >
      <!-- LOOP ROWS -->
      <tr
        v-for="(row, index) in dataClone"
        :key="`v-list-table-row-${index}`"
        @click="$emit('rowClick', row)"
      >
        <!-- LOOP COLUMNS : STARTS  -->
        <td v-for="(col, key) in localCols" :key="`v-list-table-col-${key}`">
          <!-- INBUILT COL: INDEX -->
          <p v-if="key == '_index'">
            <slot name="_index" :item="row">
              <span>{{ rowIndex(index) }}</span>
            </slot>
          </p>

          <!-- INBUILT COL: DRAG HANDLE -->
          <p
            data-test="hi"
            class="v-list-table__drag"
            v-else-if="key == '_drag'"
          >
            <slot name="_drag" :item="row">
              <s-icon title="Drag to Sort" name="drag"></s-icon>
            </slot>
          </p>

          <!-- GLOBAL SLOT -->
          <p v-else-if="slots && slots[key]">
            <component :item="row" :is="slots[key]" />
          </p>

          <!-- DEFAULT SLOT -->
          <p v-else>
            <slot :name="key" :item="row">{{ row[key] }}</slot>
          </p>
        </td>
        <!-- LOOP COLUMNS : ENDS -->
      </tr>
    </component>
  </table>
</template>

<script>
var merge = require("lodash/merge");

const defaultItemProps = {
  _index: {
    width: "50px",
    label: "#"
  },
  _drag: {
    width: "24px"
  }
};

export default {
  name: "v-list-table",
  inject: ["OPTIONS"],
  mixins: [require("../mixins/layouts").default],
  props: {
    itemProps: Object,
    itemLink: Function,
    slots: Object,
    sortable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    items() {
      return this.$parent.items;
    },
    pagination() {
      return this.$parent.paginationConfig;
    },

    localCols() {
      let localCols;
      if (Array.isArray(this.itemProps)) {
        this.itemProps.forEach(item => {
          localCols[item] = {
            label: item
          };
        });
      } else if (typeof this.itemProps == "object") {
        localCols = this.itemProps;
      } else {
        localCols = {};
      }
      return localCols;
    },

    mergedCols() {
      //Merge with global configuration
      return merge(defaultItemProps, this.OPTIONS.itemProps, this.localCols);
    },

    //Number of Columns
    totalCols() {
      let total = Object.keys(this.localCols).length;
      return total;
    },
    dataClone: {
      set(newValue) {
        this.$emit("update:items", newValue);
      },
      get() {
        return JSON.parse(JSON.stringify(this.items));
      }
    }
  },
  methods: {
    rowIndex(index) {
      return (
        this.$parent.currentPerPage * (this.$parent.currentPage - 1) + index + 1
      );
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
    text-transform: uppercase;
    color: --color(grey);
    font-size: 13px;
  }
  tr {
    &:hover {
      background-color: --color(grey, lightest);
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
</style>
