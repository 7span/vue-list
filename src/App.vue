<template>
  <div id="app">
    <button @click="filters.tag++">TG</button>
    <v-list
      :per-page="18"
      :attrs="attrs"
      endpoint="https://api.pagemaker.dev/api/v1/modules"
      :filters="{ tag: filters.tag }"
      ref="list"
    >
      <template #default="{ selection, instance }">
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
      </template>
    </v-list>

    <button @click="filters.tag = 1">Tag 1</button>
    <button @click="filters.tag = 2">Tag 2</button>
    <button>Tag 2</button>
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
        tag: 1,
      },
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
  },
};
</script>
