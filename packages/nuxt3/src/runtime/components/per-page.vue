<template>
  <div class="vue-list__per-page">
    <slot v-bind="scope">
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

defineOptions({
  name: 'VueListPerPage',
})

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

const scope = computed(() => {
  return {
    // Injected state
    perPage: localPerPage.value,

    // Computed properties
    options: serializedOptions.value,

    // Injected methods
    setPerPage: setPerPage,
  }
})
</script>
