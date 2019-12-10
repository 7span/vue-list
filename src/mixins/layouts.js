export default {
  computed: {
    sortBy() {
      return this.$parent.localSortBy;
    }
  },
  methods: {
    apply(key, value) {
      this.$parent.set(key, value);
    }
  }
};
