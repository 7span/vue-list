<template>
  <div id="app">
    <div>
      <p>Filters: {{ filters }}</p>
      <p>Search: {{ search }}</p>
      <input type="text" v-model="search" />
    </div>
    <button @click="toggleSortOrder">Toggle Sort Order</button>
    <v-list
      :per-page="18"
      :attrs="attrs"
      endpoint="skills"
      :filters.sync="filters"
      :sort-by="sortBy"
      :sort-order="sortOrder"
      ref="list"
      :search="search"
    >
      <template #default="{ selection, instance, loadingMore }">
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

        <v-list-per-page :parent="instance" />

        <p>{{ loadingMore }}</p>
      </template>
    </v-list>

    <button @click="$set(filters, 'tagId', 1)">Tag 1</button>
    <button @click="$set(filters, 'tagId', 2)">Tag 2</button>
    <button @click="clearState()">Clear State</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        tagId: null,
      },
      search: null,
      sortBy: "name",
      sortOrder: "desc",
      attrs: [
        {
          name: "_index",
        },
        {
          name: "id",
          sortable: true,
        },
        {
          name: "status",
        },
        {
          name: "name",
          sortable: true,
        },
        {
          name: "color",
        },
      ],
    };
  },
  methods: {
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
    clearState() {
      this.$refs.list.clearState();
    },
  },
};
</script>
