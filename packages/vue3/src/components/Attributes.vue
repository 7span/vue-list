<template>
  <div class="v-list-attributes">
    <template v-for="(attr, index) in root.serializedAttrs">
      <!--
        @slot An individual attribute interface.
        @binding {object} attr The attribute object
        @binding {function} update Apply a change to an attribute and it's props. Params: [name,prop,value]
      -->
      <slot :update="updateAttr" :attr="attr">
        <label :key="`attr-${index}`">
          <span>{{ attr.label }}</span>
          <input
            type="checkbox"
            :checked="root.attrSettings?.[attr.name]?.visible"
            @change="updateAttr(attr.name, 'visible', $event.target.checked)"
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
  inject: ["updateAttr"],
};
</script>
