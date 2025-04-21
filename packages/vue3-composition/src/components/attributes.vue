<template>
  <div class="vue-list__attributes">
    <slot name="default" v-bind="scope">
      <template v-for="(attr, index) in attrs">
        <slot :update="updateAttr" :attr="attr">
          <label :key="`attr-${index}`">
            <span>{{ attr.label }}</span>
            <input
              type="checkbox"
              :checked="attrSettings?.[attr.name]?.visible"
              @change="updateAttr(attr.name, 'visible', $event.target.checked)"
            />
          </label>
        </slot>
      </template>
    </slot>
  </div>
</template>

<script setup>
/**
 * Display all the attributes you provided and render a UI to modify those attributes.
 */
import { inject, computed } from 'vue'
const updateAttr = inject('updateAttr')
const attrs = inject('attrs')
const attrSettings = inject('attrSettings')

const scope = computed(() => {
  return {
    // Injected states
    attrs: attrs.value,
    settings: attrSettings.value,

    // Injected methods
    update: updateAttr,
  }
})
</script>
