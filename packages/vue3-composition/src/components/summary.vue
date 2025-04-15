<template>
  <div class="v-list-counter">
    <slot :visibleCount="items.length" :count="count" :from="from" :to="to">
      <span> Showing {{ items.length }} items ({{ from }} - {{ to }}) out of {{ count }} </span>
    </slot>
  </div>
</template>

<script setup>
/**
 * Displays the counter of total items and displayed items in a list.
 */
import { inject, computed } from 'vue'
const items = inject('items')
const count = inject('count')
const localPage = inject('localPage')
const localPerPage = inject('localPerPage')

const from = computed(() => {
  return localPage.value * localPerPage.value - localPerPage.value + 1
})

const to = computed(() => {
  const calculatedTo = localPage.value * localPerPage.value
  return calculatedTo > count.value ? count.value : calculatedTo
})
</script>
