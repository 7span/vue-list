<template>
  <div class="v-list-attributes">
    <template v-for="(attr, index) in allAttrs">
      <label :key="`attr-${index}`">
        <span>{{ attr.label }}</span>
        <input
          type="checkbox"
          :checked="attr.visible"
          @input="update(index, attr.name, $event)"
        />
      </label>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    allAttrs() {
      return this.$parent.allAttrs;
    },
  },
  methods: {
    update(index, name, event) {
      this.$parent.updateAttr({
        index,
        name: name,
        value: event.target.checked,
        key: "visible",
      });
    },
  },
};
</script>
