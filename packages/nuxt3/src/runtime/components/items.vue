<template>
  <div v-if="!isInitialLoading" class="vue-list__items">
    <slot name="default" :items="items">
      <div v-for="(item, index) in items" :key="index">
        <slot name="item" :item="item" :index="index">
          <pre>{{ item }}</pre>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const items = inject('items')
const isInitialLoading = inject('isInitialLoading')

defineOptions({
  name: 'VueListItems',
})
</script>
