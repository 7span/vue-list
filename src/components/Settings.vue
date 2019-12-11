<template>
  <div class="v-list__settings">
    <s-list gap="sm" stack fluid>
      <!-- ITEM PROPS -->
      <!-- <s-field size="sm" label="Columns">
        <s-dropdown select placeholder="Columns">
          <h1>Hello!</h1>
        </s-dropdown>
      </s-field>-->

      <!-- LIMIT, PER PAGE RESULTS -->
      <s-field
        v-if="currentPerPageOptions.length > 0"
        class="list__limit m--0"
        label="Per Page"
        size="sm"
      >
        <s-select
          :value="perPage"
          @input="$emit('per-page',parseInt($event))"
          :options="currentPerPageOptions"
        ></s-select>
      </s-field>
    </s-list>
  </div>
</template>

<script>
export default {
  name: "list-header",

  props: {
    perPage: Number,
    perPageOptions: Array
  },

  computed: {
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

      //If the limit provided is not in perLimitOptions
      const perPageOptionValues = options.map(item => item.value);
      if (!perPageOptionValues.includes(this.perPage)) {
        options.push({
          value: this.perPage,
          label: this.perPage
        });
      }

      return options;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list__settings {
  display: flex;
  justify-content: space-between;
  .field {
    margin-bottom: 0;
  }
  .list {
    grid-auto-rows: max-content;
  }
}
</style>