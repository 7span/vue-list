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
      <slot v-if="loadingMore" name="loading-more" v-bind="scope">
        <p>Loading More...</p>
      </slot>

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
      <slot
        v-if="error"
        name="error"
        :error="error"
        v-bind="scope"
        :clearState="clearState"
      >
        <div>
          <p>There was an error while processing your request.</p>
          <p>{{ error }}</p>
          <button @click="clearState">Reset Filters & State</button>
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
import { startCase, isEqual } from "lodash-es";

export default {
  name: "VList",
  props: {
    /**
     * An API endpoint to hit for getting data.
     */
    endpoint: String,

    /**
     * Default page to load.
     * The prop is just an initial value.
     * Local state is managed by localPage.
     */
    page: {
      type: Number,
      default: 1,
    },

    /**
     * Number of results to fetch and display on each page.
     * The prop is just an initial value.
     * Local state is managed by localPerPage.
     */
    perPage: {
      type: Number,
      default: 25,
    },

    /**
     * DO WE NEED THIS?
     * Additional parameters to pass when making an API request.
     * This prop does not have any local copy as it is just a forwarder.
     */
    params: Object,

    /**
     * Just like parameters but specifically to filter data.
     */
    filters: Object,

    /**
     * Uses this attribute when sorting items in listing.
     * The prop is just an initial value.
     * Local state is managed by localSortBy.
     */
    sortBy: String,

    /**
     * Ascending or Descending?
     * The prop is just an initial value.
     * Local state is managed by localSortOrder.
     */
    sortOrder: {
      type: String,
      validator(value) {
        return ["asc", "desc"].includes(value);
      },
    },

    /**
     * Default search query to use
     * The prop is just an initial value.
     * Local state is managed by localSearch.
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
     * Additional request payload while making requests.
     * requestHandler will get this in the context with `payload` key
     */
    requestPayload: {
      default: () => {},
    },

    /**
     * Request Handler handles the API requests
     * Use this prop to handle requests individually.
     * If set, will get higher priority over global handler
     */
    requestHandler: {
      type: Function,
    },

    /**
     * Version is being used for stateManager
     */
    version: {
      type: [String, Number],
      default: 1,
    },

    /**
     * Enable / Disable Routes for pagination history
     */
    paginationHistory: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    const previousState = this.getState();
    const {
      page,
      perPage,
      sortBy,
      sortOrder,
      search,
      attrSettings,
    } = previousState;

    return {
      /**
       * These local variables are copy of props.
       * This is required as the values given as props are considered as initial values.
       * The component may change these values as user interacts with interface.
       * Thought of updating the props vial .sync modifier but in that case user will have to
       * create a state in host component to sync values.
       */
      localPage: page,
      localPerPage: perPage,
      localSortBy: sortBy,
      localSortOrder: sortOrder,
      localSearch: search,

      attrSettings,

      items: null,

      /**
       * serverPage only gets updated after success full response respected to page.
       * This is added to prevent a flash update of indexes due to "page" variable change.
       */
      serverPage: null,
      selection: [],

      error: false,
      response: null,
      count: 0,

      paginationMode: null,
      isFirstRequest: true,
      loading: false,
      loadingMore: false,
      loadingPage: false,
      initializingState: true,
    };
  },

  /**
   * Once all the child components are ready and provided a proper state like "paginationMode"
   * call initialization of table.
   */
  mounted() {
    this.init();
  },

  provide() {
    return {
      setSearch: this.setSearch,
      setSort: this.setSort,
      setPaginationMode: this.setPaginationMode,
      setSelection: this.setSelection,
      setItems: this.setItems,
      setPage: this.setPage,
      setPerPage: this.setPerPage,

      updateAttr: this.updateAttr,
      loadMore: this.loadMore,
      attrs: this.serializedAttrs,

      // https://v2.vuejs.org/v2/api/#provide-inject
      // Provide Injects are not reactive
      attrSettings: () => this.attrSettings,
      items: () => this.items || [],
      count: () => this.count,
      localSortBy: () => this.localSortBy,
      localSortOrder: () => this.localSortOrder,
      localPage: () => this.localPage,
      localPerPage: () => this.localPerPage,
      loadingMore: () => this.loadingMore,
      localSearch: () => this.localSearch,
      selection: () => this.selection,
      serverPage: () => this.serverPage,
      paginationMode: () => this.paginationMode,
    };
  },

  watch: {
    /**
     * Only filters, params, search, sortBy & sortOrder props will react to change
     * All other props are non-reactive once component is initialized.
     * When filters and params are changed, we need to reset the page
     * and resetting a page will use the latest filter and params props.
     */
    watchFilters: {
      deep: true,
      handler() {
        if (this.initializingState) return;
        this.setPage(1);
      },
    },

    /**
     * params is just a forwarder & it does not have
     * any usage in the component.
     */
    params: {
      deep: true,
      handler(newValue, oldValue) {
        if (!isEqual(newValue, oldValue)) {
          this.setPage(1);
        }
      },
    },

    search(newValue) {
      this.setSearch(newValue);
    },

    sortBy(newValue) {
      this.setSort({ by: newValue, order: this.localSortOrder });
    },

    sortOrder(newValue) {
      this.setSort({ by: this.localSortBy, order: newValue });
    },

    selection: {
      deep: true,
      handler(newValue, oldValue) {
        this.$emit("selection", newValue, oldValue);
      },
    },

    "$route.query.page"(newValue) {
      if (!newValue) {
        this.setPage(1);
      } else if (this.localPage !== Number(newValue)) {
        this.setPage(Number(newValue));
      }
    },
  },

  computed: {
    /**
     * Why these watch-computed required:
     * https://stackoverflow.com/a/74945916/3165956
     */
    watchFilters() {
      return Object.assign({}, this.filters);
    },

    /**
     * When attrs is provided in props, the same attr.name is used to find column value from response.
     * If the attrs is not provided, we can get first item of response and get keys from there as fallback.
     */
    serializedAttrs() {
      const attrs = this.attrs || Object.keys(this.items?.[0] || {});
      const attrsAfterAdaptor = this.attrsAdaptor(attrs);
      return this.attrSerializer(attrsAfterAdaptor);
    },

    isEmpty() {
      if (this.items?.length != 0) return false;
      return true;
    },

    scope() {
      return {
        items: this.items,
        response: this.response,
        loading: this.loading,
        isEmpty: this.isEmpty,
        refresh: this.refresh,
        selection: this.selection,
        loadingPage: this.loadingPage,
        loadingMore: this.loadingMore,
      };
    },

    requestHandlerPayload() {
      return {
        params: this.params,
        filters: this.filters,
        search: this.localSearch,
        page: this.localPage,
        perPage: this.localPerPage,
        sortBy: this.localSortBy,
        sortOrder: this.localSortOrder,
        requestPayload: this.requestPayload,
        attrSettings: this.attrSettings,
        version: this.version,
        paginationHistory: this.paginationHistory,

        //To be deprecated in future
        pagination: {
          page: this.localPage,
          perPage: this.localPerPage,
        },
        //To be deprecated in future
        sort: {
          by: this.localSortBy,
          order: this.localSortOrder,
        },
      };
    },
  },

  methods: {
    init() {
      if (!this.endpoint) return;

      /**
       * Init stateManager
       * can be used to cleanup stale states
       */
      this.$vueList.options.stateManager.init(this.endpoint, {
        requestPayload: this.requestPayload,
        version: this.version,
      });

      this.setDefaultAttrSettings();
      const { filters } = this.getState();

      /**
       * Emit filters only when there is an old state.
       * If we don't check this, filters object will be overridden in the parent component.
       */
      if (filters) {
        this.$emit("update:filters", filters);
      }

      this.$nextTick(() => {
        const page =
          this.localPage || Number(this.$route?.query?.page) || this.page;
        // Validate if page number is valid
        // if invalid, just replace the query param and watcher will take care of request.
        if (page < 1) {
          const existingQueryParams = this.$route.query || {};
          this.$router.replace({
            query: {
              ...existingQueryParams,
              page: undefined,
            },
          });
        } else {
          this.setPage(page);
        }

        this.initializingState = false;
      });
    },

    getState() {
      try {
        const oldState = this.$vueList.options.stateManager.get(this.endpoint, {
          requestPayload: this.requestPayload,
          version: this.version,
        });
        return {
          page: oldState?.pagination?.page || this.page,
          perPage: oldState?.pagination?.perPage || this.perPage,
          sortBy: oldState?.sort?.by || this.sortBy,
          sortOrder: oldState?.sort?.order || this.sortOrder,
          search: oldState?.search || this.search,
          attrSettings: oldState?.attrSettings,
          filters: oldState?.filters,
        };
      } catch (err) {
        console.error(err);
        return {};
      }
    },

    /**
     * Attribute serializer builds an array of objects with following keys:
     * label, name.
     *
     * input: ['name','email']
     * output: [{label:'Name',name:'name'},{label:'Email',name:'email'} ]
     */
    attrSerializer(attrs) {
      return attrs.map((item) => {
        if (typeof item == "string") {
          return {
            label: startCase(item),
            name: item,
          };
        } else {
          // If there is a nested attribute:
          if (item.attrs) {
            item.attrs = this.attrSerializer(item.attrs);
          }
          return {
            label: startCase(item.name),
            ...item,
          };
        }
      });
    },

    setSearch(value) {
      this.localSearch = value;
      this.setPage(1);
    },

    setSort({ by, order }) {
      this.localSortBy = by;
      this.localSortOrder = order;
      this.setPage(1);
    },

    setPaginationMode(value) {
      this.paginationMode = value;
    },

    setSelection(value) {
      this.selection = value;
    },

    setItems(value) {
      this.items = value;
    },

    refresh(payload) {
      if (this.paginationMode == "infinite") {
        this.setPage(1, payload);
      } else {
        this.getData(payload);
      }
    },

    setPage(value, payload) {
      this.localPage = value;
      this.getData(payload);
    },

    setPerPage(value) {
      this.localPerPage = value;
      this.setPage(1);
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

      this.getData();
    },

    setData(res) {
      if (this.paginationMode == "infinite") {
        if (this.localPage == 1) {
          this.items = res.items;
        } else {
          this.items = (this.items || []).concat(res.items);
        }

        /**
         * @property {object} res - Response received from an API
         */
        this.$emit("afterLoadMore", res);
      } else {
        this.$set(this, "items", res.items);

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
     * So when navigating back to page=1, we should avoid adding page = 1 in query param to avoid
     * additional history in routing.
     */
    setUrl() {
      if (
        this.$router &&
        this.paginationMode == "paging" &&
        this.$route.query.page != this.localPage &&
        this.paginationHistory
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

    getData(overridePayload = {}) {
      this.error = false;
      this.setLoader(true);

      const handler =
        this.requestHandler || this.$vueList.options.requestHandler;

      handler({
        endpoint: this.endpoint,
        ...this.requestHandlerPayload,
        ...overridePayload,
      })
        .then((res) => {
          this.response = res;
          this.setStateOnStateManager();

          /**
           * @property {object} res - Response received from an API
           */
          this.selection = [];
          this.$emit("res", res);
          this.setData(res);
          this.setUrl();
          this.setLoader(false);
          this.serverPage = this.localPage;
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
        this.isFirstRequest = false;
        this.loading = false;
        this.loadingPage = false;
        this.loadingMore = false;
      } else {
        if (this.paginationMode == "infinite") {
          this.loadingMore = true;
        } else {
          if (this.isFirstRequest) {
            this.loading = true;
          } else {
            this.loadingPage = true;
          }
        }
      }
    },

    /**
     * Update the config of an attribute
     *
     * @param {name} string Name of an attribute
     * @param {prop} string A property to update
     * @param {value} string A value to set
     */
    updateAttr(name, prop, value) {
      if (!this.attrSettings[name]) {
        this.$set(this.attrSettings, name, {});
      }
      this.$set(this.attrSettings[name], prop, value);
      this.setStateOnStateManager();
    },

    setDefaultAttrSettings() {
      if (this.attrSettings) return;

      const attrSettings = this.serializedAttrs.reduce((value, item) => {
        value[item.name] = {
          visible: true,
        };
        return value;
      }, {});
      this.$set(this, "attrSettings", attrSettings);
    },

    setStateOnStateManager() {
      /**
       * Determine the current page number for data fetching based on the pagination mode.
       *  If the pagination mode is "infinite" (Load More), always set the page to 1 to avoid loading data based on any previously saved page state.
       */

      const data = { ...this.requestHandlerPayload };
      if (this.paginationMode === "infinite") {
        data.page = 1;

        // TODO: Remove when pagination is deprecated
        data.pagination.page = 1;
      }

      this.$vueList.options.stateManager.set(this.endpoint, data);
    },

    clearState() {
      this.$vueList.options.stateManager.set(this.endpoint, {});
    },
  },
};
</script>
