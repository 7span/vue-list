<template>
  <div id="app">
    <v-list
      :attrs="attrs"
      endpoint="https://app.whatshash.com/api/V1/public/poll"
    >
      <v-list-search />
      <div>
        <v-list-table> </v-list-table>
      </div>
      <v-list-pagination />
      <v-list-counter />
      <v-list-per-page />
      <v-list-attributes />
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrs: [
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
