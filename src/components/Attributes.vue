<template>
  <div class="v-list-attributes">
    <template v-for="(attr, index) in $parent.localAttrs">
      <!--
        @slot Render custom UI to configure attributes
        @binding {function} change Apply the change
        @binding {object} attr The attribute object
      -->
      <slot :update="update" :attr="attr">
        <label :key="`attr-${index}`">
          <span>{{ attr.label }}</span>
          <input
            type="checkbox"
            :checked="attr.visible"
            @input="update(attr.name, 'visible', $event.target.checked)"
          />
        </label>
      </slot>
    </template>
  </div>
</template>

<script>
/**
 * Get all the attributes and modify the settings.
 */
export default {
  methods: {
    /**
     * Update the config of an attribute
     *
     * @param {name} string Name of an attribute
     * @param {prop} string A property to update
     * @param {value} string A value to set
     */
    update(name, prop, value) {
      this.$parent.updateAttr(name, prop, value);
    },
  },
};
</script>
