<template>
  <div class="v-list-search">
    <slot :value="search" :set="set">
      <input
        type="text"
        :value="search"
        @input="set($event.target.value)"
        placeholder="Search"
      />
    </slot>
  </div>
</template>

<script>
import { debounce } from "lodash-es";

export default {
  inject: ["setSearch", "localSearch"],
  props: {
    /**
     * Wait till this time to send an API request to avoid multiple requests when user is typing.
     */
    debounceTime: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      debounce,
      set: null,
    };
  },
  computed: {
    search() {
      return this.localSearch();
    },
  },
  created() {
    this.set = debounce((value) => {
      this.setSearch(value);
    }, this.debounceTime);
  },
};
</script>
