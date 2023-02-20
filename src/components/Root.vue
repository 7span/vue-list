<template>
  <div class="v-list">
    <!-- 
      @slot Header Slot
     -->
    <slot name="header" v-bind="scope" />

    <!-- 
      @slot Loader to display when a component is loading for the first time.
     -->
    <slot v-if="loading" name="loading" v-bind="scope">
      <p>Loading...</p>
    </slot>

    <!-- CONTENT -->
    <template v-else>
      <!-- 
      @slot Loader to display when navigating to other page.
     -->
      <slot v-if="loadingPage" name="loading-page" v-bind="scope">
        <p>Loading Page...</p>
      </slot>

      <!-- 
      @slot If there was an error from an API
      @binding {object} error An errror returned from API
     -->
      <slot v-if="error" name="error" :error="error" v-bind="scope">
        <div>
          <p>There was an error while processing your request.</p>
          <p>{{ error }}</p>
        </div>
      </slot>

      <!-- 
      @slot When API returned no items.
     -->
      <slot v-else-if="isEmpty" name="empty" v-bind="scope">
        <p>No data found!</p>
      </slot>

      <!-- 
      @slot Render a UI to list items.
      @binding {array} items List if items
      @binding {object} response A latest response from an API
      @binding {boolean} loading If component is initializing and first request is being made.
      @binding {boolean} loadingPage If navigating to another page.
      @binding {boolean} loadingMore If loading more items.
      @binding {boolean} isEmpty If there are no items returned by API.
      @binding {function} refresh Refresh the listing by using the same parameters.
     -->
      <slot v-else v-bind="scope" />
    </template>

    <!-- 
      @slot Footer Slot
     -->
    <slot name="footer" v-bind="scope" />
  </div>
</template>

<script>
/**
 * This is the base component to render the listing
 */
import { startCase, isEqual, cloneDeep } from "lodash-es";
export default {
  name: "VList",
  props: {
    /**
     * An API endpoint to hit for getting data. This will be appended to baseUrl
     */
    endpoint: String,

    /**
     * Static Config which will be passed to handler
     */
    config: Object,

    /**
     * Default page to load.
     */
    page: {
      type: Number,
      default: 1,
    },

    /**
     * Number of results to fetch and display on each page.
     */
    perPage: {
      type: Number,
      default: 25,
    },

    /**
     * Additional parameters to pass when making an API request.
     */
    params: Object,

    /**
     * Just like parameters but specifically to filter data.
     */
    filters: [Object, Array],

    /**
     * Uses this attribute when sorting items in listing.
     */
    sortBy: String,

    /**
     * Ascending or Descending?
     */
    sortOrder: {
      type: String,
      validator(value) {
        return ["asc", "desc"].includes(value);
      },
    },

    /**
     * Default search query to use
     */
    search: {
      type: String,
    },

    /**
     * List of attributes to display in a list
     */
    attrs: {
      type: Array,
    },

    /**
     * An adaptor defines which attributes to be passed to layout
     * This is helpful when you don't know which attributes are sent from API
     * Also useful when you need to show all the columns except few.
     */
    attrsAdaptor: {
      type: Function,
      default: (data) => data,
    },

    /**
     * Request Handler handles the API requests
     * Use this prop to handle requests individually.
     * If set, will get higher priority over global handler
     */
    requestHandler: {
      type: Function,
    },
  },
  data() {
    return {
      localPage: this.page,
      localPerPage: this.perPage,
      localSortBy: this.sortBy,
      localSortOrder: this.sortOrder,
      localSearch: this.search,
      localItems: null,
      localAttrs: null,
      paginationMode: null,
      selection: [],

      error: false,
      response: null,
      count: 0,

      initial: true,
      loading: false,
      loadingMore: false,
      loadingPage: false,
    };
  },

  watch: {
    /**
     * Only filters, params, localSearch, sortBy & sortOrder props will react to change
     * All other props are non-reactive once component is initialized.
     * When filters and params are changed, we need to reset the page
     * and reseting a page will use the latest filter and params props.
     */
    filters: {
      deep: true,
      handler(newValue, oldValue) {
        if (!isEqual(newValue, oldValue)) {
          this.changePage(1);
        }
      },
    },

    params: {
      deep: true,
      handler(newValue, oldValue) {
        if (!isEqual(newValue, oldValue)) {
          this.changePage(1);
        }
      },
    },

    search(newValue, oldValue) {
      if (newValue != oldValue) {
        this.localSearch = newValue;
        this.changePage(1);
      }
    },

    localSearch(newValue, oldValue) {
      if (newValue != oldValue) {
        this.changePage(1);
      }
    },

    sortBy(newValue, oldValue) {
      if (newValue != oldValue) {
        this.localSortBy = newValue;
        this.changePage(1);
      }
    },

    sortOrder(newValue, oldValue) {
      if (newValue != oldValue) {
        this.localSortOrder = newValue;
        this.changePage(1);
      }
    },

    selection: {
      deep: true,
      handler(newValue, oldValue) {
        this.$emit("selection", newValue, oldValue);
      },
    },

    "$route.query.page"(newValue) {
      if (!newValue) {
        this.changePage(1);
        return;
      }
      if (this.localPage != newValue) {
        this.changePage(newValue);
      }
    },
  },

  created() {
    this.init();
  },

  computed: {
    instance() {
      return this;
    },
    attrsToUse() {
      const attrs = this.attrs || Object.keys(this.localItems?.[0] || {});
      return this.attrsAdaptor(attrs);
    },
    isFilterArrayType() {
      if (typeof this.filters == "object" && Array.isArray(this.filters))
        return true;
      else return false;
    },

    isEmpty() {
      if (this.localItems?.length != 0) return false;
      return true;
    },
    scope() {
      return {
        items: this.localItems,
        response: this.response,
        loading: this.loading,
        isEmpty: this.isEmpty,
        refresh: this.refresh,
        selection: this.selection,
        instance: this.instance,
        loadingPage: this.loadingPage,
        loadingMore: this.loadingMore,
        filters: this.filters,
      };
    },
  },

  methods: {
    init() {
      /**
       *  TODO: localAttrs is not reactive as it is copied here.
       */
      this.localAttrs = this.attrSerializer(this.attrsToUse);
      if (!this.endpoint) return;

      const page = parseInt(this.$route?.query?.page || this.page);
      this.changePage(page);
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
          return {
            visible: true,
            label: startCase(item.name),
            ...item,
          };
        }
      });
    },

    set(key, value) {
      this[key] = value;
    },

    refresh() {
      this.getData();
    },

    changePage(value) {
      this.localPage = value;
      this.getData();
    },

    changePerPage(value) {
      this.localPerPage = value;
      this.changePage(1);
    },

    loadMore() {
      const oldPage = this.localPage;
      this.localPage++;
      const newPage = this.localPage;

      /**
       * @property {object} payload - Payload
       * @property {int} payload.oldPage - Old Page No
       * @property {int} payload.newPage - New Page No
       */
      this.$emit("beforeLoadMore", {
        oldPage,
        newPage,
      });

      this.getData(true);
    },

    setData(res, appendData) {
      if (appendData) {
        this.localItems = this.localItems.concat(res.items);

        /**
         * @property {object} res - Response received from an API
         */
        this.$emit("afterLoadMore", res);
      } else {
        this.localItems = res.items;

        /**
         * @property {object} res - Response received from an API
         */
        this.$emit("afterLoad", res);
      }
      this.count = res.count;
    },

    /**
     * Updates the query parameters in the router when pagination is available.
     *
     * Initially when the component is loaded, the default page is 1 and no query param is added.
     * So when navigaing back to page=1, we should avoid adding page = 1 in query param to avoid
     * additional history in routing.
     */
    setUrl() {
      if (
        this.$router &&
        this.paginationMode == "paging" &&
        this.$route.query.page != this.localPage &&
        this.localPage != 1
      ) {
        //Maintain already existing query params in URL
        const existingQueryParams = this.$route.query || {};
        this.$router.push({
          query: {
            ...existingQueryParams,
            page: this.localPage,
          },
        });
      }
    },

    convertDataStructure(filters) {
      let result = {};
      filters.forEach((item) => {
        result[item.key] = item.values;
      });

      return result;
    },

    getData(appendData = false) {
      this.error = false;
      this.setLoader(true);

      const handler = this.requestHandler || this.options.requestHandler;

      handler({
        method: "get",
        endpoint: this.endpoint,
        params: this.params,
        filters: this.isFilterArrayType
          ? this.convertDataStructure(this.filters)
          : this.filters,
        search: this.localSearch,
        pagination: {
          page: this.localPage,
          perPage: this.localPerPage,
        },
        sort: {
          by: this.localSortBy,
          order: this.localSortOrder,
        },
        config: this.config,
      })
        .then((res) => {
          this.response = res;

          /**
           * @property {object} res - Response received from an API
           */
          this.selection = [];
          this.$emit("res", res);
          this.setData(res, appendData);
          this.setUrl();
          this.setLoader(false);
        })
        .catch((err) => {
          this.error = err;
          this.setLoader(false);

          // Throwing error here to allow handling errors at config level
          throw new Error(err);
        });
    },

    setLoader(value) {
      if (!value) {
        this.initial = false;
        this.loading = false;
        this.loadingPage = false;
        this.loadingMore = false;
      } else {
        if (this.paginationMode == "infinite") {
          this.loadingMore = true;
        } else {
          if (this.initial) {
            this.loading = true;
          } else {
            this.loadingPage = true;
          }
        }
      }
    },

    sort(e) {
      const context = {
        items: e,
        endpoint: this.endpoint,
        params: this.params,
      };
      //If sort listner is provided, use it
      //Else execute the global callback
      if (this.$listeners.sort) {
        this.$emit("sort", context);
      } else if (this.options.sort) {
        this.options.sort(context);
      }
    },

    updateAttr(name, prop, value) {
      const attr = this.localAttrs.find((item) => item.name == name);
      this.$set(attr, prop, value);
    },
    resetFilter(key, value) {
      let clonedFilters = cloneDeep(this.filters);

      if (this.isFilterArrayType) {
        const filteredItem = clonedFilters.find((item) => {
          return item.key == key;
        });

        if (filteredItem.values.length == 1) {
          clonedFilters = clonedFilters.filter((item) => {
            return item.key !== key;
          });
        } else {
          filteredItem.values = filteredItem.values.filter(
            (item) => item.value !== value
          );
        }
      } else {
        if (
          Array.isArray(clonedFilters[key] && clonedFilters[key].length > 1)
        ) {
          clonedFilters[key] = clonedFilters[key].filter(
            (item) => item !== value
          );
        } else {
          clonedFilters[key] = [];
        }
      }

      this.$emit("update:filters", clonedFilters);
    },
  },
};
</script>
