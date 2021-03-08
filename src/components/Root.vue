<template>
  <div class="v-list" v-if="options">
    <!-- LOADER -->
    <slot v-if="loading && (initial || !loader)" name="loader">
      <p>Loading...</p>
    </slot>

    <!-- CONTENT -->
    <template v-else>
      <slot v-if="error" name="error">
        <p>There was an error while processing your request.</p>
      </slot>

      <!-- EMPTY -->
      <slot v-else-if="isEmpty" name="empty">
        <p>No data found!</p>
      </slot>

      <!-- ITEMS -->
      <slot
        v-else
        :items="data || items"
        :response="response"
        :loading="loading"
        :isEmpty="isEmpty"
        :refresh="refresh"
      />
    </template>
  </div>
</template>

<script>
import { debounce, startCase } from "lodash-es";
import props from "@/props";

export default {
  props: props,
  data() {
    return {
      sidebarContent: false,
      items: this.data || [],
      count: 0,
      loading: false,
      initial: true,
      localPage: this.page,
      localPerPage: this.perPage,
      localSortBy: this.sortBy,
      localSortOrder: this.sortOrder,
      localAttrs: null,
      localSearch: this.search,
      loadingMore: false,
      error: false,
      response: null,
    };
  },

  watch: {
    data(newValue) {
      this.items = newValue;
    },

    filters: {
      deep: true,
      handler() {
        //When filter changes, we need to set the page to 1st to get all the data from start
        this.changePage(1);
      },
    },

    page(nv) {
      this.changePage(nv);
    },

    sortBy(nv) {
      this.localSortBy = nv;
      this.changePage(1);
    },
    sortOrder(nv) {
      this.localSortOrder = nv;
      this.changePage(1);
    },
    perPage(nv) {
      this.changePerPage(nv);
    },
    search(value) {
      this.localSearch = value;
    },

    localSearch() {
      this.debounceGetData();
    },
    params: {
      handler(newValue) {
        //Changing page to 1 will automatically call getData with latest params due to watcher
        this.changePage(1);
      },
      deep: true,
    },
    attrsToUse(newValue) {
      this.serializeAttrs(newValue);
    },
  },

  created() {
    this.initial = true;
    //Create a clone of config to make overridable configs
    //This helps to use v-model as config
    this.setPaginationConfig();
    this.serializeAttrs(this.attrsToUse);
    //If data is provided explicitly, prevent the request
    if (!this.data) {
      this.refresh();
    }
  },

  computed: {
    attrsToUse() {
      const attrs = this.attrs || Object.keys(this.items?.[0] || []);
      if (this.attrsAdaptor) {
        return this.attrsAdaptor(attrs);
      } else {
        return attrs;
      }
    },
    allAttrs() {
      return this.localAttrs;
    },

    debounceGetData() {
      return debounce(this.getData, this.debounce);
    },

    isEmpty() {
      if (this.data && this.data?.length != 0) return false;
      if (this.items && this.items?.length != 0) return false;
      return true;
    },

    currentPage: {
      get() {
        return parseInt(this.localPage || this.page);
      },
      set(value) {
        this.localPage = value;
        this.$emit("update:page", value);
        this.refresh();
      },
    },

    currentPerPage: {
      get() {
        return parseInt(
          this.localPerPage || this.perPage || this.perPageOptions[0]
        );
      },
      set(value) {
        this.localPerPage = value;
        this.$emit("update:perPage", value);
        this.changePage(1);
      },
    },
  },

  methods: {
    serializeAttrs(attrs) {
      this.localAttrs = this.attrSerializer(attrs);
    },

    attrSerializer(attrs) {
      return attrs.map((item) => {
        if (typeof item == "string") {
          return {
            label: startCase(item),
            name: item,
            visible: true,
          };
        } else {
          if (item.attrs) {
            item.attrs = this.attrSerializer(item.attrs);
          }
          return Object.assign(
            {},
            {
              visible: true,
              label: startCase(item.name),
            },
            item
          );
        }
      });
    },

    set(key, value) {
      this[key] = value;
    },

    toggleSidebar(content) {
      if (this.sidebarContent == content) {
        this.sidebarContent = false;
      } else {
        this.sidebarContent = content;
      }
    },

    setPaginationConfig() {
      if (!this.pagination) return;

      //Set the default page to render if page provided in URL
      if (this.$route && this.$route.query.page) {
        const page = parseInt(this.$route.query.page);
        if (page != this.localPage) {
          this.changePage(page);
        }
      }
    },

    refresh() {
      this.getData();
    },

    changePage(value) {
      this.localPage = value;
      this.$emit("update:page", value);
      this.getData(false);
    },

    changePerPage(value) {
      this.localPerPage = value;
      this.$emit("update:perPage", value);
      this.changePage(1);
    },

    loadMore() {
      this.$emit("beforeLoadMore");
      this.localPage++;
      this.$emit("update:page", this.localPage);
      this.getData(true);
    },

    setData(res, appendData) {
      if (appendData) {
        this.items = this.items.concat(res.items);
        this.$emit("afterLoadMore", res);
      } else {
        this.items = res.items;
        this.$emit("afterLoad", res);
      }
      this.count = res.count;

      //Set Page URL
      if (
        this.$router &&
        this.paginationMode == "querystring" &&
        this.$route.query.page != this.localPage
      ) {
        //We need maintain already existing query params in URL
        const existingQueryParams = this.$route.query || {};
        this.$router.push({
          query: {
            ...existingQueryParams,
            page: this.localPage,
          },
        });
      }
    },

    getData(appendData = false) {
      this.error = false;
      if (appendData) {
        this.loadingMore = true;
      } else {
        this.loading = true;
      }

      //TODO: Accept requestHandler via props too for individual configs
      this.options
        .requestHandler({
          method: "get",
          endpoint: this.endpoint,
          params: this.params,
          filters: this.filters,
          search: this.localSearch,
          pagination: {
            page: this.localPage,
            perPage: this.localPerPage,
          },
          sort: {
            by: this.localSortBy,
            order: this.localSortOrder,
          },
        })
        .then((res) => {
          this.response = res;

          //Response event
          //Fires asap after ajax request is successfull
          this.$emit("res", res);
          this.setData(res, appendData);
          this.loading = this.loadingMore = this.initial = false;
        })
        .catch(() => {
          this.error = true;
          this.loading = this.loadingMore = this.initial = false;
        });
    },

    sort(e) {
      const context = {
        items: e,
        endpoint: this.endpoint,
        params: this.params,
        data: this.data,
      };
      //If sort listner is provided, use it
      //Else execute the global callback
      if (this.$listeners.sort) {
        this.$emit("sort", context);
      } else if (this.options.sort) {
        this.options.sort(context);
      }
    },

    updateAttr(data) {
      const { index, key, value } = data;
      this.$set(this.localAttrs[index], key, value);
    },
  },
};
</script>
