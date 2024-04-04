<template>
  <div class="v-list-counter">
    <!-- 
      @slot Custom interface to display counters
      @binding {int} showing Number of items being displayed in a list
      @binding {int} count Total number of items returned via API
     -->
    <slot :showing="showing" :count="count">
      <span> Showing {{ showing }} items out of {{ count }} </span>
    </slot>
  </div>
</template>

<script>
import child from "../mixins/child";

/**
 * Displays the counter of total items and displayed items in a list.
 */
export default {
  mixins: [child],
  computed: {
    items() {
      return this.root.items || [];
    },

    showing() {
      return this.items.length;
    },
    count() {
      return this.root.count;
    },
  },
};
</script>
