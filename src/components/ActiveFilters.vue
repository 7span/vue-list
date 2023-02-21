<template>
  <div v-if="filters">
    <slot
      :filters="filters"
      :serializedField="serializedField"
      :active="active"
    >
      <template v-for="filter in active">
        <label :key="`category-${filter.key}`">
          {{ filter.label }}
        </label>

        <template v-for="value in filter.values">
          <button
            type="button"
            :key="`value-${value.value}`"
            @click="value.reset(filter.key, value.value)"
          >
            {{ value.label }}
          </button>
        </template>
      </template>
    </slot>
  </div>
</template>

<script>
import child from "../mixins/child";
import { pascalCase } from "@/utils.js";
export default {
  mixins: [child],
  props: {},

  created() {},

  computed: {
    filters() {
      return this.root.filters;
    },

    serializedField() {
      // This method generates standard filter data structure
      if (this.root.isFilterArrayType) {
        return this.root.filters.map((item) => {
          return {
            ...item,
            values: item.values.map((value) => {
              return {
                ...value,
                reset: (key, value) => this.root.resetFilter(key, value),
              };
            }),
          };
        });
      } else {
        return Object.keys(this.root.filters).map((item) => {
          return {
            key: item,
            label: pascalCase(item),
            values: this.valueSerializer(this.filters[item]),
          };
        });
      }
    },

    active() {
      // This method checks for active filter values and filters out any null value
      return this.serializedField.filter((item) => {
        const values = item.values.filter((value) => {
          if (!value.value) return false;
          else return true;
        });

        if (!values.length) return false;
        else return true;
      });
    },
  },

  methods: {
    valueSerializer(value) {
      if (Array.isArray(value)) {
        return value.map((item) => {
          return {
            label: pascalCase(item),
            value: item,
            reset: (key, value) => this.root.resetFilter(key, value),
          };
        });
      } else {
        return [
          {
            label: pascalCase(value),
            value: value,
            reset: (key, value) => this.root.resetFilter(key, value),
          },
        ];
      }
    },
  },
};
</script>
