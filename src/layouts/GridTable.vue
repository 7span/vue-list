<template>
  <div class="grid-table" :style="_style">
    <!-- HEADER -->
    <header class="grid-table__header">
      <article class="grid-table__row">
        <p
          v-for="(col, key) in localCols"
          :key="`header--${key}`"
          @click="apply('localSortBy', key)"
          :class="{ 'grid-table__sort-by': key == sortBy }"
        >
          {{ mergedCols[key].label }}
        </p>
      </article>
    </header>

    <!-- BODY -->
    <component
      class="grid-table__body"
      :is="sortable ? 'draggable' : 'div'"
      @end="$emit('sort', dataClone)"
      handle=".grid-table__col--_drag"
      v-model="dataClone"
    >
      <!-- LOOP ROWS -->
      <component
        v-for="(row, index) in dataClone"
        :key="`row--${index}`"
        :is="itemLink ? 'router-link' : 'article'"
        :to="itemLink ? itemLink(row) : false"
        class="grid-table__row"
      >
        <slot name="before-row" :item="row" />

        <!-- LOOP COLUMNS : STARTS  -->
        <template v-for="(col, key) in localCols">
          <!-- INBUILT COL: INDEX -->
          <p
            v-if="key == '_index'"
            :class="colClasses(key)"
            :key="colKey(key, index)"
          >
            <slot name="_index" :item="row">
              <span>{{ rowIndex(index) }}</span>
            </slot>
          </p>

          <!-- INBUILT COL: DRAG HANDLE -->
          <p
            v-else-if="key == '_drag'"
            :class="colClasses(key)"
            :key="colKey(key, index)"
          >
            <slot name="_drag" :item="row">
              <s-icon title="Drag to Sort" name="drag"></s-icon>
              <!-- <s-button title="Drag to Sort" icon="drag" color="grey" style_="trn" shape="square"></s-button> -->
            </slot>
          </p>

          <!-- GLOBAL SLOT -->
          <p
            v-else-if="slots && slots[key]"
            :class="colClasses(key)"
            :key="colKey(key, index)"
          >
            <component :item="row" :is="slots[key]" />
          </p>

          <!-- DEFAULT SLOT -->
          <p
            v-else
            class="grid-table__col"
            :class="colClasses(key)"
            :key="colKey(key, index)"
          >
            <slot :name="key" :item="row">{{ row[key] }}</slot>
          </p>
        </template>
        <!-- LOOP COLUMNS : ENDS -->

        <slot name="after-row" :item="row"></slot>
      </component>
    </component>
  </div>
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
  name: "grid-table",
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

    _style() {
      return {
        "--cols": this.totalCols,
        "--cols-template": this.colTemplate
      };
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
    },
    colTemplate() {
      //LocalCols are used for keeping the order same as provided in configuration
      //Merged Cols changes the sequence of keys due to merge by lodash
      let template = Object.keys(this.localCols).map(
        item => this.mergedCols[item].width || "1fr"
      );
      return template.join(" ");
    }
  },
  methods: {
    colKey(key, index) {
      return `${key}--${index}`;
    },

    colClasses(key) {
      return ["grid-table__col", `grid-table__col--${key}`];
    },

    rowIndex(index) {
      return (
        this.$parent.currentPerPage * (this.$parent.currentPage - 1) + index + 1
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-table {
  --cols: 5;
  --cols-template: repeat(var(--cols), 1fr);
  --gap: 10px;
  font-size: 14px;
  overflow: auto;
  display: grid;
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
.grid-table__header {
  font-weight: bold;
  text-transform: uppercase;
  color: --color(grey);
  font-size: 13px;
  > .grid-table__row {
    border-bottom: 2px solid --color(grey, lighter);
  }
}

.grid-table__header,
.grid-table__body {
  display: grid;
  gap: 0px;
}

.grid-table__row {
  grid-template-columns: var(--cols-template);
  gap: var(--gap);
  display: grid;
  width: 100%;
  padding: 0px 10px;
  border-bottom: 1px solid --color(grey, lighter);
  text-decoration: none !important;
  > p {
    margin: 0;
    padding: 10px 0;
  }
}

.grid-table__body {
  > .grid-table__row {
    &:hover {
      background-color: --color(grey, lightest);
    }
  }
}

.grid-table {
  .col-drag {
    button {
      cursor: move !important;
    }
  }
}
</style>
