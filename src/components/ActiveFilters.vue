<template>
  <div v-if="filters && Object.keys(filters).length">
    <slot :active="active">
      <template v-for="(filter, categoryIndex) in active">
        <label :key="`category-${categoryIndex}`" style="display:block">
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
import { toPascalCase } from "@/utils.js";
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
                  label: toPascalCase(key),
                  value: key,
                },
                data: value.map((item) => {
                  return {
                    label: toPascalCase(item),
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
                  label: toPascalCase(key), // convert gender or status_id to valid label like Gender or Status ID
                  value: key,
                },
                data: [
                  {
                    label: toPascalCase(value), // convert value to valid label like 2 -> display_name like male or female
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
  },
};
</script>

<!-- Input props 
filters:{
  category:['denim','cotton'],
  gender:'male',
  archived:true
}

filters:[
  {
    attr:{
      label:'Category',
      value:'category'
    },
    data:[
      {
        label:'Denim',
        value:1
      },
      {
        label:'Cotton',
        value:2
      }
    ]
  },
  {
    attr : {
      label : 'Archived',
      value : 'archived'
    },
    data : [
    {
      label : 'True',
      value : true
    },
    ]
  }
]



Output active filter 
[
  {
    key : {value:'gender', label:'Gender'},
    value : {value:'male',label:'Male'}
  },
  {
    key : 'category',
    value : ['denim','cotton']
  }
] -->
