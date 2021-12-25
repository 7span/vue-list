<template>
  <div class="v-list-attributes">
    <template v-for="(attr, index) in root.localAttrs">
      <!--
        @slot An individual attribute interface.
        @binding {object} attr The attribute object
        @binding {function} update Apply a change to an attribute and it's props. Params: [name,prop,value]
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
import child from "../mixins/child";

/**
 * Display all the attributes you provided and render a UI to modify those attributes.
 */
export default {
  mixins: [child],
  methods: {
    /**
     * Update the config of an attribute
     *
     * @param {name} string Name of an attribute
     * @param {prop} string A property to update
     * @param {value} string A value to set
     */
    update(name, prop, value) {
      this.root.updateAttr(name, prop, value);
    },
  },
};
</script>
