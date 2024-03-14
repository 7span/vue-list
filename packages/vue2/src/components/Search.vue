<template>
  <div class="v-list-search">
    <slot :value="root.localSearch" :set="set">
      <input
        type="text"
        :value="root.localSearch"
        @input="set($event.target.value)"
        placeholder="Search"
      />
    </slot>
  </div>
</template>

<script>
import { debounce } from "lodash-es";
import child from "../mixins/child";

export default {
  mixins: [child],
  inject: ["setSearch"],
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
  created() {
    this.set = debounce((value) => {
      this.setSearch(value);
    }, this.debounceTime);
  },
};
</script>
