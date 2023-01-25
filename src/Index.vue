<template>
  <div id="app">
    <button @click="filters.tag++">TG</button>
    <button @click="toggleSortOrder">Toggle Sort Order</button>
    <v-list
      :per-page="18"
      :attrs="attrs"
      endpoint="https://api.pagemaker.dev/api/v1/modules"
      :sort-by="sortBy"
      :sort-order="sortOrder"
      ref="list"
      :filters.sync="filters"
    >
      <template #header>
        <div>
          <h2>Filters applied</h2>

          <v-list-active-filters>
            <template #default="{ active,reset }">
              <button
                type="button"
                v-for="(filter, index) in active"
                :key="index"
                @click="reset(filter)"
              >
                {{ filter[0] }}
              </button>
            </template>
          </v-list-active-filters>

          <div>
            <h2>Current filter state</h2>
            <pre>
              {{ filters }}
            </pre>
          </div>
        </div>
      </template>
      <template #default="{ selection, instance, loadingMore }">
        <p>{{ selection }}</p>
        <hr />
        <v-list-search />
        <v-list-table :rowClass="rowClass">
          <template #th_after="{ attr, sortBy, sortOrder }">
            <div v-if="attr.name == sortBy" style="margin-left: 2px">
              <span v-if="sortOrder == 'asc'">⬆️</span>
              <span v-else-if="sortOrder == 'desc'">⬇️</span>
            </div>
          </template>
          <template #th_select="{ toggleSelectAll, selectionState }">
            <button @click="toggleSelectAll()">{{ selectionState }}</button>
          </template>
          <template #select="{ toggleSelect, isSelected }">
            <button v-if="isSelected" @click="toggleSelect()">Selected</button>
            <button v-else @click="toggleSelect()">Select</button>
          </template>
        </v-list-table>

        <v-list-counter />
        <v-list-go-to />
        <v-list-load-more />
        <v-list-attributes />
        <v-list-pagination />

        <dummy>
          <v-list-per-page :parent="instance" />
        </dummy>

        <p>{{ loadingMore }}</p>
      </template>
    </v-list>

    <button @click="filters.tag = 1">Tag 1</button>
    <button @click="filters.tag = 2">Tag 2</button>
  </div>
</template>

<script>
export default {
  components: {
    Dummy: require("@/components/Dummy").default,
  },
  data() {
    return {
      // filters: {
      //   tag: 1,
      // },
      filters: {
        location: {
          city: "rajkot",
          state: "gujarat",
        },
      },
      sortBy: "name",
      sortOrder: "desc",
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
    resetFilterProperty(property) {
      this.filters[property] = null;
    },
    rowClass(row, rowIndex) {
      return [
        {
          "in-active": true,
        },
        "disabled",
      ];
    },
    toggleSortOrder() {
      if (this.sortOrder === "asc") this.sortOrder = "desc";
      else this.sortOrder = "asc";
    },
  },
};
</script>
