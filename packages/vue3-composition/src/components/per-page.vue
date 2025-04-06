<template>
  <div class="v-list-per-page">
    <slot :value="localPerPage" :change="setPerPage" :options="serializedOptions">
      <select :value="localPerPage" @input="setPerPage($event.target.value)">
        <option
          v-for="(option, index) in serializedOptions"
          :key="`option-${index}`"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const setPerPage = inject('setPerPage')
const localPerPage = inject('localPerPage')

const props = defineProps({
  options: {
    /**
     * An array of options which lets user select how many items they want to see in a list at a time.
     * Provide an object with 'label' and 'value' keys to have a label different then a value.
     */
    type: Array,
    default: () => [10, 25, 50, 100],
  },
})

const serializedOptions = computed(() => {
  return props.options.map((item) => {
    if (typeof item != 'object') {
      return {
        value: item,
        label: item,
      }
    } else {
      return item
    }
  })
})
</script>
