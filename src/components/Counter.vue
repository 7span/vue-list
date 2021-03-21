<template>
  <div class="v-list-counter">
    <slot name="metadata" :showing="showing" :count="count">
      <span> Showing {{ showing }} items out of {{ count }} </span>
    </slot>
  </div>
</template>

<script>
export default {
  computed: {
    showing() {
      return this.items.length;
    },
    items() {
      return this.$parent.localItems;
    },
    count() {
      return this.$parent.count;
    },
  },
};
</script>
