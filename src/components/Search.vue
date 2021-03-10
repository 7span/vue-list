<template>
  <span>
    <slot :value="$parent.localSearch" :set="setValue">
      <input
        class="v-list-search"
        type="text"
        :value="$parent.localSearch"
        @input="setValue($event.target.value)"
        placeholder="Search"
      />
    </slot>
  </span>
</template>

<script>
export default {
  methods: {
    setValue(value) {
      this.$parent.localSearch = value;
    }
  }
};
</script>
