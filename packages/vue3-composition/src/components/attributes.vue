<template>
  <div class="v-list-attributes">
    <slot name="default" :update="updateAttr" :attrs="attrs" :settings="attrSettings">
      <template v-for="(attr, index) in attrs">
        <slot :update="updateAttr" :attr="attr">
          <label :key="`attr-${index}`">
            <span>{{ attr.label }}</span>
            <input
              type="checkbox"
              :checked="_attrSettings?.[attr.name]?.visible"
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
import { inject } from 'vue'
const updateAttr = inject('updateAttr')
const attrs = inject('attrs')
const attrSettings = inject('attrSettings')
</script>
