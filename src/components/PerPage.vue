<template>
  <span v-if="currentPerPageOptions.length > 0">
    <slot :value="perPage" :change="change" :options="currentPerPageOptions">
      <select
        class="v-list-per-page"
        :value="perPage"
        @input="$parent.changePerPage(parseInt($event.target.value))"
      >
        <option
          v-for="(option, index) in currentPerPageOptions"
          :key="`option-${index}`"
        >
          {{ option }}
        </option>
      </select>
    </slot>
  </span>
</template>

<script>
export default {
  props: {
    perPageOptions: {
      type: Array,
      default: () => [10, 25, 50, 100]
    },
    allAttrs: Array
  },

  computed: {
    perPage() {
      return this.$parent.perPage;
    },
    currentPerPageOptions() {
      const options = this.perPageOptions;
      //If the limit is set to 0
      //Add "All" option to dropdown
      //Only if user has nnot provided blank array. This is to hide dropdown
      if (this.perPage == 0 && this.perPageOptions.length > 0) {
        options.push({
          value: 0,
          label: "All"
        });
      }

      return options;
    }
  },
  methods: {
    change(event) {
      this.$parent.changePerPage(parseInt(event.target.value));
    }
  }
};
</script>
