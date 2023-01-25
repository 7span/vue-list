<template>
  <div v-if="filters && Object.keys(filters).length">
    <slot :active="active" :reset="reset">
      <template v-for="(filter, index) in active">
        <button type="button" :key="index" @click="reset(filter)">
          {{ filter[0] }}
        </button>
      </template>
    </slot>
  </div>
</template>

<script>
import { set, unset, findKey } from "lodash-es";

import child from "../mixins/child";

export default {
  mixins: [child],
  props: {},

  created() {
    // var cart = { a: [{ b: { c: 7 } }] };
    // set(cart, "a.b", null);
    // console.log("cart object", cart);
    // let obj = {
    //   location: { city: { town: { area: "naranpura" } }, state: "gujrat" },
    // };
    // console.log("Find KEY===>", this.findPath(obj, "area"));
  },

  computed: {
    filters() {
      return this.root.filters;
    },

    active() {
      return Object.entries(this.filters).filter((item) => {
        const filterKey = item[0];
        const filterValue = item[1];
        if (typeof filterValue == "object") {
          console.log("inside typeof Object");
        } else {
        }

        if (filterValue)
          return {
            name: filterKey,
            value: filterValue,
          };
      });
    },
  },

  methods: {
    reset(filter) {
      this.root.resetFilter(filter[0], filter[1]);
    },
  },
};
</script>
