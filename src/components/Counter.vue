<template>
  <span class="v-list-counter" v-if="items.length > 0">
    <slot name="metadata" :showing="showing" :count="count">
      Showing {{ showing }} items out of {{ count }}
    </slot>
  </span>
</template>

<script>
export default {
  computed: {
    showing() {
      return this.items.length;
    },
    items() {
      return this.$parent.items;
    },
    count() {
      return this.$parent.count;
    },
  },
};
</script>
