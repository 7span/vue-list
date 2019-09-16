<template>
  <header class="list__header">
    <div class="list__title"></div>
    <div class="list__settings">
      <!-- LIMIT, PER PAGE RESULTS -->
      <div v-if="paginationConfig.perPageOptions.length > 0" class="list__limit">
        <select @change="$emit('per-page',$event.target.value)" :value="paginationConfig.perPage">
          <option
            v-for="(item,index) in paginationConfig.perPageOptions"
            :value="item.value"
            :key="`per-page-option--${index}`"
          >{{item.label}}</option>
        </select>
      </div>
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