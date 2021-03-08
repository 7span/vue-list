<template>
  <input
    class="v-list-search"
    type="text"
    v-model="localSearch"
    placeholder="Search"
  />
</template>

<script>
export default {
  computed: {
    localSearch: {
      get() {
        return this.$parent.localSearch;
      },
      set(value) {
        this.$parent.localSearch = value;
      },
    },
  },
};
</script>
