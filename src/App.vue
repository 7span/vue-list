<template>
  <div id="app">
    <button @click="tag++">TG</button>
    <v-list
      :per-page="18"
      :attrs="attrs"
      endpoint="https://api.pagemaker.dev/api/v1/modules"
      :filters="{ tag }"
      @selection="selectionChange(arguments)"
    >
      <template #default="{ selection }">
        <p>{{ selection }}</p>
        <hr />

        <v-list-search />
        <v-list-table>
          <template #select="{ toggleSelect }">
            <button @click="toggleSelect()">Select</button>
          </template>
        </v-list-table>
        <v-list-pagination />
        <v-list-counter />
        <v-list-per-page />
        <v-list-go-to />
        <v-list-load-more />
        <v-list-attributes />
      </template>
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
          name: "select",
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
  methods: {
    selectionChange(val) {
      console.log(val);
    }
  }
};
</script>
