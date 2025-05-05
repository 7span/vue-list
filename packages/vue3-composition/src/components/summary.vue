<template>
  <div class="vue-list__counter">
    <slot v-bind="scope">
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

defineOptions({
  name: 'VueListSummary',
})

const from = computed(() => {
  return localPage.value * localPerPage.value - localPerPage.value + 1
})

const to = computed(() => {
  const calculatedTo = localPage.value * localPerPage.value
  return calculatedTo > count.value ? count.value : calculatedTo
})

const scope = computed(() => {
  return {
    visibleCount: items.value.length,
    count: count.value,
    from: from.value,
    to: to.value,
  }
})
</script>
