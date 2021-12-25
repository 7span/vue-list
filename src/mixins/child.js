export default {
  props: {
    rootRef: Function,
  },
  computed: {
    root() {
      return this.rootRef ? this.rootRef() : this.$parent;
    },
  },
};
