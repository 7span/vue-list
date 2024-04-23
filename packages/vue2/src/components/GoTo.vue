<template>
  <div class="v-list-go-to">
    <!-- 
      @slot Directly jump to a page by showing all the pages in a dropdown
      @binding {function} change Call to go to a specific page.
      @binding {int} page Current page.
      @binding {array} options An array of all the pages.
      @binding {int} total Total number of pages.
     -->
    <slot
      name="select"
      :change="setPage"
      :value="page"
      :options="options"
      :total="total"
    >
      <select @input="setPage($event.target.value)" :value="page">
        <option v-for="(option, index) in options" :key="`option-${index}`">
          {{ option }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script>
export default {
  inject: ["setPage", "localPage", "localPerPage", "count"],

  computed: {
    options() {
      const links = [];
      for (var i = 1; i <= this.total; i++) {
        links.push(i);
      }
      return links;
    },

    page() {
      return this.localPage();
    },

    total() {
      return Math.ceil(this.count() / this.localPerPage());
    },
  },
};
</script>
