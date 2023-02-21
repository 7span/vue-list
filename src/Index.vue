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
            <template #default="{ active }">
              <template v-for="(filter, categoryIndex) in active">
                <label :key="`category-${categoryIndex}`">
                  {{ filter.label }}
                </label>
                <template v-for="value in filter.values">
                  <button
                    type="button"
                    :key="`value-${value.value}`"
                    @click="value.reset(filter.key, value.value)"
                  >
                    {{ value.label }}
                  </button>
                </template>
              </template>
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
      filters: {
        location: ["rajkot", "junagadh", "amreli"],
        places: ["Ajmer", "Mount Abu"],
        archived: true,
        gender: "",
        category: [],
      },

      // filters: [
      //   {
      //     key: "location",
      //     label: "Location",
      //     values: [
      //       {
      //         label: "Rajkot",
      //         value: 2,
      //       },
      //       {
      //         label: "Junagadh",
      //         value: 4,
      //       },
      //     ],
      //   },
      //   {
      //     key: "gender",
      //     label: "Gender",
      //     values: [
      //       {
      //         label: "Male",
      //         value: 1,
      //       },
      //     ],
      //   },
      // ],

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
