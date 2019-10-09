<template>
  <header class="list__header">
    <div class="list__title"></div>
    <div class="list__settings">
      <!-- LIMIT, PER PAGE RESULTS -->
      <s-field
        v-if="paginationConfig.perPageOptions.length > 0"
        class="list__limit m--0"
        label="Per Page"
        size="sm"
      >
        <s-select
          :value="paginationConfig.perPage"
          @input="$emit('per-page',$event)"
          :options="paginationConfig.perPageOptions"
        ></s-select>
      </s-field>
    </div>
  </header>
</template>

<script>
export default {
  name: "list-header",

  props: {
    paginationConfig: Object
  }
};
</script>

<style lang="scss" scoped>
.list__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: --space(sm);
}

.list__settings {
  display: flex;
}
</style>