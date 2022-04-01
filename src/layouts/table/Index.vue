<template>
  <table class="v-list-table">
    <thead>
      <tr
        v-for="(row, rowIndex) in headers"
        :key="key('head-row', rowIndex)"
        :class="[...rowClass(row, rowIndex)]"
      >
        <template v-for="(col, colIndex) in row">
          <th
            v-if="col.visible"
            :key="key('head-col', rowIndex, colIndex)"
            :class="thClass(col)"
            :style="thStyle(col)"
            :rowspan="rowspan(rowIndex, col.key)"
            :colspan="colspan(rowIndex, col.key)"
            @click="col.sortable ? sortItemsBy(col) : null"
          >
            <slot name="th_before" v-bind="thScope(col)">
              <template v-if="col.name == sortBy">
                <span v-if="sortOrder == 'asc'">↑</span>
                <span v-else-if="sortOrder == 'desc'">↓</span>
              </template>
            </slot>

            <slot :name="`th_${col.name}`" v-bind="thScope(col)">
              <span>{{ col.label }}</span>
            </slot>

            <slot name="th_after" v-bind="thScope(col)" />
          </th>
        </template>
      </tr>
    </thead>

    <component
      :is="reorder ? 'draggable' : 'tbody'"
      v-bind="reorder ? { handle: '.v-list-table__drag', tag: 'tbody' } : {}"
      v-model="rows"
    >
      <slot name="body-start" />

      <tr
        v-for="(row, rowIndex) in rows"
        :key="key('body-row', rowIndex)"
        :class="[
          { 'v-list-table__selected': isSelected(row) },
          ...rowClass(row, rowIndex),
        ]"
      >
        <template v-for="(attr, colIndex) in body">
          <td
            v-if="attr.visible"
            :key="key('body-col', colIndex)"
            :class="tdClass(attr)"
            @click="tdClick(attr, row)"
          >
            <!-- Override Slot -->
            <slot
              v-if="$scopedSlots[attr.name]"
              :name="attr.name"
              v-bind="tdScope(attr, row, rowIndex)"
            >
              {{ row[attr.name] }}
            </slot>

            <!-- Global Slot -->
            <component
              v-else-if="OPTIONS.slots && OPTIONS.slots[attr.name]"
              :is="OPTIONS.slots[attr.name]"
              v-bind="tdScope(attr, row, rowIndex)"
            />

            <!-- Index -->
            <slot
              v-else-if="attr.name == '_index'"
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

            <!-- Default Slot -->
            <slot
              v-else
              :name="attr.name"
              v-bind="tdScope(attr, row, rowIndex)"
            >
              {{ td(attr, row) }}
            </slot>
          </td>
        </template>
      </tr>

      <slot name="body-end" />
    </component>
  </table>
</template>

<script>
import { cloneDeep } from "lodash-es";
import layout from "../../mixins/layout";
import { key } from "../../utils";

export default {
  mixins: [layout],
  props: {
    reorder: {
      type: Boolean,
      default: false,
    },
    rowClass: {
      type: Function,
    },
  },

  inject: ["OPTIONS"],

  data() {
    return {
      key,
      headers: [],
      body: [],
    };
  },

  watch: {
    attrs: {
      deep: true,
      handler(newValue) {
        this.$set(this, "headers", []);
        this.$set(this, "body", []);
        this.generateHeader(newValue, 0);
      },
    },
  },

  created() {
    this.generateHeader(this.attrs, 0);
  },

  computed: {
    rows: {
      set(value) {
        this.$emit("reorder", value);
        this.root.set("localItems", value);
      },
      get() {
        return cloneDeep(this.items);
      },
    },
    selectionState() {
      if (this.root.selection.length === this.rows.length) {
        return "all";
      } else if (this.root.selection.length === 0) {
        return "none";
      } else {
        return "some";
      }
    },
  },

  methods: {
    rowspan(rowIndex, colKey) {
      let spans = 1;
      for (var i = rowIndex + 1; i < this.headers.length; i++) {
        const row = this.headers[i];
        const hasChild = row.some((item) => item.key.startsWith(colKey));
        if (hasChild) {
          return spans;
        } else {
          spans++;
        }
      }
      return spans;
    },

    colspan(rowIndex, colKey) {
      let spans = 1;
      for (var i = rowIndex + 1; i < this.headers.length; i++) {
        const row = this.headers[i];
        const items = row.filter((item) => item.key.startsWith(colKey));
        if (items?.length > 0) {
          spans = spans + items.length - 1;
        }
      }
      return spans;
    },

    generateHeader(attrs, index, parentKey = "0") {
      if (!this.headers[index]) {
        this.$set(this.headers, index, []);
      }
      attrs.forEach((attr, attrIndex) => {
        //Render only if the attr is visible
        if (attr.visible) {
          //This unique key based on index helps to find parent-child
          //Make sure `attr` stays reactive by not extracting it but adding additional data by keys
          const uniqueKey = parentKey + "" + attrIndex;
          attr.key = uniqueKey;
          this.headers[index].push(attr);

          //If there are child elements, we need to add new row
          if (attr.attrs) {
            const newIndex = index + 1;
            this.generateHeader(attr.attrs, newIndex, uniqueKey);
          } else {
            //This helps to render body rows
            this.body.push(attr);
          }
        }
      });
    },

    columnClass(attr) {
      const classList = [];

      if (attr.fix) classList.push("v-list-table__fix");
      if (attr.type) classList.push(`v-list-table__${attr.type}`);
      if (attr.classList) classList.push(...attr.classList);

      return classList;
    },

    thClass(attr) {
      const classList = [
        ...this.columnClass(attr),
        `v-list-table__${attr.name}`,
      ];
      if (attr.name == this.sortBy) classList.push("v-list-table__sort");
      if (attr.sortable) classList.push("v-list-table__sortable");
      return classList;
    },

    thStyle(attr) {
      const style = {};
      if (attr.width) style.width = attr.width;
      return style;
    },

    tdClick(attr, row) {
      if (attr.onClick) {
        attr.onClick(row);
      } else if (attr.rowClick !== false) {
        this.$emit("rowClick", row);
      }
    },

    tdClass(attr) {
      const classList = [...this.columnClass(attr)];
      if (this.$listeners.rowClick && attr.rowClick !== false)
        classList.push("v-list-table__click");
      return classList;
    },

    tdScope(attr, row, rowIndex) {
      return {
        toggleSelect: () => this.toggleSelect(row),
        isSelected: this.isSelected(row),
        item: row,
        rowIndex: this.itemIndex(rowIndex),
        content: this.td(attr, row),
      };
    },

    thScope(col) {
      return {
        attr: col,
        toggleSelectAll: () => this.toggleSelectAll(),
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
        selectionState: this.selectionState,
      };
    },

    td(attr, row) {
      const key = attr.name;
      // valueMap: JSON
      // User can define a key:value map for "enum values" to "human readable" form, from response.
      if (attr.valueMap) {
        const value = row[key];
        if (value && attr.valueMap[value]) {
          return attr.valueMap[value];
        }
      }

      // type: String
      // If type is provided, user can configure its value in global typeAdapter configuration.
      if (attr.type && this.OPTIONS.typeAdapters[attr.type]) {
        return this.OPTIONS.typeAdapters[attr.type](row[key], row);
      }

      // value: Function
      // If user needs to evaluate the value manually.
      if (attr.value) {
        return attr.value(row);
      }

      //If props are defined but need to display row value.
      return row[key];
    },

    toggleSelect(row) {
      const selectedRows = [...this.root.selection];
      const index = selectedRows.findIndex((item) => item.id === row.id);
      if (index > -1) {
        this.$delete(selectedRows, index);
      } else {
        selectedRows.push({ ...row });
      }
      this.root.set("selection", selectedRows);
    },

    isSelected(row) {
      const selectedRows = [...this.root.selection];
      const index = selectedRows.findIndex((item) => item.id === row.id);
      return index > -1;
    },

    toggleSelectAll() {
      switch (this.selectionState) {
        case "all":
          this.root.set("selection", []);
          break;

        case "some":
        case "none":
          this.root.set("selection", this.rows);
          break;

        default:
          break;
      }
    },
  },
};
</script>
