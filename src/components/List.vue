<template>
  <div
    class="v-list"
    :class="{ 'v-list--settings': isSettings }"
    v-shilp-loader.overlay="loading && !initial"
  >
    <!-- HEADER -->
    <header class="v-list__header">
      <div class="v-list__title">{{ title }}</div>
      <!-- <div class="v-list__filters">
        <s-button size="sm" color="secondary" shape="pill" label>Active</s-button>
        <s-button size="sm" color="secondary" shape="pill" label>Pro Users</s-button>
      </div>-->
      <s-nav class="v-list__actions" color="grey" size="sm" style_="trn" shape="square">
        <s-nav-item icon="Settings" @click.native="isSettings = !isSettings"></s-nav-item>
        <slot name="actions"></slot>
      </s-nav>
    </header>

    <!-- SETTINGS -->
    <settings
      @per-page="currentPerPage = $event"
      :perPage="currentPerPage"
      :perPageOptions="perPageOptions"
    ></settings>

    <!-- CONTENT -->
    <section class="v-list__content">
      <!-- LOADER -->
      <ul v-if="loading && initial" class="v-list__loader">
        <li v-for="n in 10" :key="`loader-item--${n}`"></li>
      </ul>

      <!-- ITEMS -->
      <slot v-else :items="data || items"></slot>
    </section>

    <!-- FOOTER -->
    <footer v-if="!initial" class="v-list__footer">
      <pagination
        v-if="currentPage > 0"
        :perPage="currentPerPage"
        :page="currentPage"
        :count="count"
        @change="currentPage = $event"
      />
      <metadata :items="items" :count="count" />
    </footer>
  </div>
</template>

<script>
import { debounce } from "lodash";

export default {
  components: {
    Pagination: require("../components/Pagination").default,
    Metadata: require("../components/MetaData").default,
    Settings: require("../components/Settings").default
  },

  props: {
    endpoint: String,
    title: {
      default: ""
    },
    page: {
      type: Number,
      default: 1
    },
    pageKey: {
      type: String,
      default: "page"
    },
    perPage: {
      type: Number,
      default: 25
    },
    perPageKey: {
      type: String,
      default: "per_page"
    },
    perPageOptions: {
      type: Array,
      default: () => [10, 25, 50, 100]
    },
    maxPagingLinks: {
      type: Number,
      default: 5
    },
    paginationMode: {
      type: String,
      default: "querystring"
    },
    params: Object,
    data: Array,
    pagination: {
      type: Boolean,
      default: true
    },
    filters: Object,
    debounce: {
      type: Number,
      default: 1000
    },
    sortBy: String,
    sortOrder: String
  },

  data() {
    const self = this;

    return {
      isSettings: false,
      isFilters: false,
      items: [],
      count: 0,
      loading: false,
      initial: true,
      localPage: null,
      localPerPage: null,
      localSortBy: self.sortBy,
      localSortOrder: self.sortOrder
    };
  },

  watch: {
    filters: {
      deep: true,
      handler() {
        this.getData();
      }
    },
    page(nv) {
      this.currentPage = nv;
    },
    perPage(nv) {
      this.currentPerPage = nv;
    },

    params: {
      handler(newValue) {
        //Changing page to 1 will automatically call getData with latest params due to watcher
        this.currentPage = 1;
      },
      deep: true
    }
  },

  created() {
    this.$on("vlist", data => console.log(data));
    this.initial = true;
    //Create a clone of config to make overridable configs
    //This helps to use v-model as config
    this.setPaginationConfig();

    //If data is provided explicitly, prevent the request
    if (!this.data) {
      this.refresh();
    }
  },

  computed: {
    currentPage: {
      get() {
        return parseInt(this.localPage || this.page);
      },
      set(value) {
        this.localPage = value;
        this.$emit("update:page", value);
        this.refresh();
      }
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
        this.currentPage = 1;
      }
    }
  },

  methods: {
    set(key, value) {
      this[key] = value;
    },

    setPaginationConfig() {
      if (!this.pagination) return;

      //Set the default page to render if page provided in URL
      if (this.$route && this.$route.query.page) {
        this.currentPage = this.$route.query.page;
      }
    },

    refresh() {
      this.getData(0);
    },

    getData(debounceValue = this.debounce) {
      const self = this;
      debounce(
        function(e) {
          this.loading = true;
          const params = {
            ...this.filters,
            ...(this.params || {}),
            [this.pageKey]: this.page || undefined,
            [this.perPageKey]: this.currentPerPage || undefined,
            sort_by: this.localSortBy,
            sort_order: this.localSortOrder
          };

          const request = this.options.requestHandler({
            method: "get",
            endpoint: this.endpoint,
            params
          });

          request
            .then(res => {
              this.items = res.items;
              this.count = res.count;

              //Set Page URL
              if (
                this.$router &&
                this.paginationMode == "querystring" &&
                this.$route.query.page != this.currentPage
              ) {
                this.$router.push({
                  query: {
                    page: this.currentPage
                  }
                });
              }
              this.loading = this.initial = false;
            })
            .catch(err => {
              this.loading = this.initial = false;
            });
        },
        this.initial ? 0 : debounceValue
      ).call(self);
    },

    sort(e) {
      const context = {
        items: e,
        endpoint: this.endpoint,
        params: this.params,
        data: this.data
      };
      //If sort listner is provided, use it
      //Else execute the global callback
      if (this.$listeners.sort) {
        this.$emit("sort", context);
      } else if (this.options.sort) {
        this.options.sort(context);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 240px;
}

.v-list--settings {
  .v-list__content {
    grid-column-start: 2;
  }
  .v-list__settings {
    display: block;
  }
}

.v-list__header {
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 3 / 2 / 1;
  //border-bottom: 1px solid --color(grey, lightest);
  align-items: center;
  background-color: --color(grey, lightest);
  padding: 8px;
}
.v-list__settings {
  display: none;
  grid-area: 2 / 3 / 3 / 2;
  border-left: 1px solid --color(grey, lightest);
  padding: 24px;
}
.v-list__content {
  grid-area: 2 / 3 / 3 / 1;
  padding: 24px;
}
.v-list__footer {
  grid-area: 3 / 3 / 4 / 1;
}

.v-list__title {
  margin: 0;
  font-size: 16px;
  flex: 0 0 auto;
}

.v-list__filters {
  margin-left: 8px;
  .button {
    margin-right: 8px;
    --button--padding: 16px;
    &:hover {
      text-decoration: line-through;
    }
  }
}

.v-list__actions {
  margin: 0;
  margin-left: auto;
}

@keyframes shine {
  to {
    background-position: -200% 0;
  }
}
.v-list__loader {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    height: 40px;
    opacity: 0.5;
    background: linear-gradient(
      90deg,
      --color(grey, lightest),
      --color(grey, lighter),
      --color(grey, lightest)
    );
    margin-top: 10px;
    position: relative;
    border-radius: --border-radius(sm);
    animation: shine 1.5s infinite;
    background-size: 200%;
  }
}
</style>
