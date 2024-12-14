<template>
  <div id="app">
    <div class="filters-container">
      <div class="filters">
        <p>Filters: {{ filters }}</p>
        <button @click="toggleSortOrder">Toggle Sort Order</button>
      </div>

      <div class="search">
        <p>Search: {{ search }}</p>
        <input type="text" v-model="search" />
      </div>
    </div>
    <v-list
      v-model:filters="filters"
      :per-page="5"
      :attrs="attrs"
      endpoint="skills"
      :sort-by="sortBy"
      :sort-order="sortOrder"
      ref="list"
      :search="search"
      :request-payload="{ query: query }"
      @sort="onSort"
      :version="5"
    >
      <template #loading-more> HELLO! </template>
      <template #default="{ selection, instance, loadingMore }">
        <div class="header">
          <v-list-search />
          <v-list-attributes />
        </div>
        <v-list-table>
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
          <template #_drag>
            <p class="v-list-table__drag cursor-grab">Drag</p>
          </template>
        </v-list-table>

        <div class="footer">
          <v-list-counter />

          <!--
            Use the following component to "enable" pagination.
            This will allow navigating through multiple pages of the list.
          -->
          <!-- <v-list-pagination /> -->

          <!-- OR -->

          <!--
            Use the following component to "load more" functionality.
            This will dynamically load additional items in the list.
          -->
          <v-list-load-more />

          <div>Go To: <v-list-go-to /></div>
          <div>Per Page: <v-list-per-page :parent="instance" /></div>
        </div>

        <p>{{ loadingMore }}</p>
      </template>
    </v-list>

    <div class="options">
      <button @click="$set(filters, 'tagId', 1)">Tag 1</button>
      <button @click="$set(filters, 'tagId', 2)">Tag 2</button>
      <button @click="clearState()">Clear State</button>
      <button @click="$refs.list.refresh({ hi: 'hello' })">Refresh</button>
    </div>
  </div>
</template>

<script>
import query from "./query.gql";

export default {
  data() {
    return {
      filters: {
        tagId: null,
      },
      query,
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
        {
          name: "_drag",
          label: "Drag",
        },
      ],
    };
  },
  methods: {
    onSort(data) {
      console.log("ON SORT", data);
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
    clearState() {
      this.$refs.list.clearState();
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.v-list {
  max-width: 70%;
  margin: 20px auto;
}

.v-list-table {
  width: 100%;
  border-collapse: collapse;
}

.v-list-table th,
.v-list-table td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

.v-list-table__head {
  display: flex;
  gap: 10px;
}

.v-list-search,
.v-list-attributes {
  display: inline-block;
  vertical-align: middle;
}

.v-list-search input {
  width: 100%;
}

.v-list-attributes {
  width: 70%;
  text-align: right;
}

.v-list-attributes label {
  margin-left: 10px;
}

input[type="text"] {
  height: 20px;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.footer {
  margin: 10px 0;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.v-list-pagination,
.v-list-counter,
.v-list-go-to,
.v-list-per-page {
  display: inline-block;
  vertical-align: middle;
}

.v-list-counter {
  color: #727272;
}

button {
  padding: 5px 10px;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
  cursor: pointer;
}

button:hover {
  background-color: #eaeaea;
}

button:disabled {
  cursor: not-allowed;
  background-color: #e9e9e9;
}

.v-list-pagination span {
  padding: 5px 10px;
}

.v-list-pagination span {
  padding: 5px 10px;
  background-color: #1d85fb;
  color: white;
}

.v-list-go-to select,
.v-list-per-page select {
  height: 30px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filters-container {
  width: 68%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: block;
  max-width: 80%;
  margin: 40px auto 10px;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  display: flex;
  justify-content: space-between;
}

.options {
  text-align: end;
  max-width: 85%;
}
</style>
