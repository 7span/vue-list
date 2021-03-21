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
/**
 * Displays the counter of total items and displayed items in a list.
 */
export default {
  computed: {
    items() {
      return this.$parent.localItems;
    },

    showing() {
      return this.items.length;
    },
    count() {
      return this.$parent.count;
    },
  },
};
</script>
