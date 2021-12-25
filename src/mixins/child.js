export default {
  props: {
    rootRef: String,
  },
  computed: {
    root() {
      return this.rootRef ? this.$refs[this.rootRef] : this.$parent;
    },
  },
};
