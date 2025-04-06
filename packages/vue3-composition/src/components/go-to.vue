<template>
  <div class="v-list-go-to">
    <slot :change="setPage" :value="localPage" :options="options" :total="total">
      <select @input="setPage($event.target.value)" :value="localPage">
        <option v-for="(option, index) in options" :key="`option-${index}`">
          {{ option }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const setPage = inject('setPage')
const localPage = inject('localPage')
const localPerPage = inject('localPerPage')
const count = inject('count')

const total = computed(() => {
  return Math.ceil(count.value / localPerPage.value)
})

const options = computed(() => {
  return Array.from({ length: total.value }, (_, i) => i + 1)
})
</script>
