export default {
  props: {
    parent: Object,
  },
  computed: {
    root() {
      return this.parent || this.$parent;
    },
  },
};
