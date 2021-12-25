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
      :change="change"
      :value="page"
      :options="options"
      :total="total"
    >
      <select @input="change($event.target.value)" :value="page">
        <option v-for="(option, index) in options" :key="`option-${index}`">
          {{ option }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script>
import child from "../mixins/child";

export default {
  mixins: [child],
  computed: {
    options() {
      const links = [];
      for (var i = 1; i <= this.total; i++) {
        links.push(i);
      }
      return links;
    },

    page() {
      return this.root.localPage;
    },

    perPage() {
      return this.root.localPerPage;
    },

    count() {
      return this.root.count;
    },

    total() {
      return Math.ceil(this.count / this.perPage);
    },
  },

  methods: {
    change(number) {
      this.root.changePage(number);
    },
  },
};
</script>
