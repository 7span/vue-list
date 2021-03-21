<template>
  <div class="v-list-search">
    <slot :value="$parent.localSearch" :set="set">
      <input
        type="text"
        :value="$parent.localSearch"
        @input="set($event.target.value)"
        placeholder="Search"
      />
    </slot>
  </div>
</template>

<script>
import { debounce } from "lodash-es";

export default {
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
    this.set = debounce(function(value) {
      this.$parent.localSearch = value;
    }, this.debounceTime);
  },
};
</script>
