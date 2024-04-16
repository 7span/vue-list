<template>
  <div class="v-list-attributes">
    <slot
      name="default"
      :update="updateAttr"
      :attrs="attrs"
      :settings="_attrSettings"
    >
      <template v-for="(attr, index) in attrs">
        <!--
        @slot An individual attribute interface.
        @binding {object} attr The attribute object
        @binding {function} update Apply a change to an attribute and it's props. Params: [prop,value]
        -->
        <slot
          name="attr"
          :update="(key, value) => updateAttr(attr.name, key, value)"
          :attr="attr"
          :settings="_attrSettings?.[attr.name]"
        >
          <label :key="`attr-${index}`">
            <span>{{ attr.label }}</span>
            <input
              type="checkbox"
              :checked="_attrSettings?.[attr.name]?.visible"
              @input="updateAttr(attr.name, 'visible', $event.target.checked)"
            />
          </label>
        </slot>
      </template>
    </slot>
  </div>
</template>

<script>
/**
 * Display all the attributes you provided and render a UI to modify those attributes.
 */
export default {
  inject: ["updateAttr", "attrs", "attrSettings"],
  computed: {
    _attrSettings() {
      return this.attrSettings();
    },
  },
};
</script>
