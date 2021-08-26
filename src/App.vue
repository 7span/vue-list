<template>
  <div id="app">
    <button @click="tag++">TG</button>
    <v-list
      :per-page="18"
      :attrs="attrs"
      endpoint="https://api.pagemaker.dev/api/v1/modules"
      :filters="{ tag }"
    >
      <v-list-search />
      <v-list-table />
      <v-list-pagination />
      <v-list-counter />
      <v-list-per-page />
      <v-list-go-to />
      <!-- <v-list-load-more /> -->
      <v-list-attributes />
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: 1,
      attrs: [
        {
          name: "_index",
        },
        {
          name: "id",
          sortable: true,
        },
        {
          name: "name",
        },
      ],
    };
  },
};
</script>
