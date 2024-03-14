<template>
  <div class="v-list-load-more">
    <!-- 
      @slot Button to let users click to load more data.
      @binding {function} loadMore A function to call to load more items
      @binding {boolean} loading true when loadMore is called and waiting for API response.
     -->
    <slot v-if="count > loaded" :loading="loadingMore" :loadMore="loadMore">
      <button @click="loadMore">Load More</button>
    </slot>

    <!-- 
      @slot When all the available items are loaded. Displayed when a count returned from API is equal to the items in a list.
     -->
    <slot v-else name="end">
      <p>— That's all —</p>
    </slot>
  </div>
</template>

<script>
import child from "../mixins/child";

/**
 * Provides infinite list where users can click on Load more and new items from
 * API will be appended in a list keeping previous items as it is.

 */
export default {
  mixins: [child],

  created() {
    this.root.set("paginationMode", "infinite");
  },

  computed: {
    loadingMore() {
      return this.root.loadingMore;
    },

    loaded() {
      return this.root.localItems?.length;
    },

    count() {
      return this.root.count;
    },
  },
  methods: {
    loadMore() {
      this.root.loadMore();
    },
  },
};
</script>
