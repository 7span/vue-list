<template>
  <div class="v-list-counter">
    <slot :showing="items.length" :count="count">
      <span> Showing {{ showing }} items out of {{ totalCount }} </span>
    </slot>
  </div>
</template>

<script setup>
/**
 * Displays the counter of total items and displayed items in a list.
 */
import { inject } from 'vue'
const items = inject('items')
const count = inject('count')
</script>
