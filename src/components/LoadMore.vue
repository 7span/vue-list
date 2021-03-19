<template>
  <div class="v-list-load-more">
    <slot v-if="count > loaded" :loading="loadingMore" :loadMore="loadMore">
      <button @click="loadMore">Load More</button>
    </slot>
    <slot v-else name="end">
      <p>— That's all —</p>
    </slot>
  </div>
</template>

<script>
import pagination from "@/mixins/pagination";

export default {
  mixins: [pagination],
  computed: {
    loadingMore() {
      return this.$parent.loadingMore;
    },

    loaded() {
      return this.$parent.items && this.$parent.items.length;
    }
  },
  methods: {
    loadMore() {
      this.$parent.loadMore();
    }
  }
};
</script>
