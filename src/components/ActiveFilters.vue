<template>
  <div v-if="filters && Object.keys(filters).length">
    <slot :active="active" :filters="filters" :serializedFields="serializer">
      <template v-for="(filter, categoryIndex) in active">
        <label :key="`category-${categoryIndex}`">
          {{ filter.attr.label }}
        </label>

        <template v-for="value in filter.data">
          <button
            type="button"
            :key="`value-${value.value}`"
            @click="value.reset(filter.attr.value, value.value)"
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
    isEmpty() {
      if (this.filters && Object.entries(this.filters).length) return false;
      else return true;
    },

    serializer() {
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
            values: this.getValues(this.filters[item], item),
          };
        });
      }
    },

    active() {
      let result = [];
      if (!this.isEmpty) {
        const entries = Object.entries(this.filters);
        entries.forEach((item) => {
          const key = item[0];
          const value = item[1];
          if (value) {
            if (
              typeof value == "object" &&
              Array.isArray(value) &&
              value.length
            ) {
              result.push({
                attr: {
                  label: pascalCase(key),
                  value: key,
                },
                data: value.map((item) => {
                  return {
                    label: pascalCase(item),
                    value: item,
                    reset: (key, value) => this.reset(key, value),
                  };
                }),
              });
            } else if (typeof value == "object") {
              // Currently no support for objects nested.
            } else {
              //         // Static string or boolean or number
              result.push({
                attr: {
                  label: pascalCase(key), // convert gender or status_id to valid label like Gender or Status ID
                  value: key,
                },
                data: [
                  {
                    label: pascalCase(value), // convert value to valid label like 2 -> display_name like male or female
                    value: value,
                    reset: (key, value) => this.reset(key, value),
                  },
                ],
              });
            }
          }
        });
      }

      return result;
    },
  },

  methods: {
    reset(key, value) {
      this.root.resetFilter(key, value);
    },

    getValues(value, key) {
      if (Array.isArray(value)) {
        return value.map((item) => {
          return {
            label: pascalCase(item),
            value: item,
            reset: (key, value) => this.root.resetFilter(key, value),
          };
        });
      } else {
        return {
          label: pascalCase(value),
          value: value,
          reset: (key, value) => this.root.resetFilter(key, value),
        };
      }
    },
  },
};
</script>
