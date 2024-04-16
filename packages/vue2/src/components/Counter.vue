<template>
  <div class="v-list-counter">
    <!-- 
      @slot Custom interface to display counters
      @binding {int} showing Number of items being displayed in a list
      @binding {int} count Total number of items returned via API
     -->
    <slot :showing="showing" :count="totalCount">
      <span> Showing {{ showing }} items out of {{ totalCount }} </span>
    </slot>
  </div>
</template>

<script>
/**
 * Displays the counter of total items and displayed items in a list.
 */
export default {
  inject: ["items", "count"],
  computed: {
    showing() {
      return this.items().length;
    },
    totalCount() {
      return this.count();
    },
  },
};
</script>
