<template>
  <div class="list" v-shilp-loader.overlay="loading && !initial">
    <!-- HEADER -->
    <list-header
      @per-page="currentPerPage = $event"
      :perPage="currentPerPage"
      :perPageOptions="perPageOptions"
    ></list-header>

    <!-- CONTENT -->
    <section class="list__content">
      <div v-if="loading && initial" class="list-loader">
        <div v-for="n in 10" class="list-loader__item" :key="`loader-item--${n}`"></div>
      </div>

      <slot v-else :items="data || items"></slot>
    </section>

    <!-- FOOTER -->
    <footer v-if="!initial" class="list__footer">
      <pagination
        v-if="currentPage > 0"
        :perPage="currentPerPage"
        :page="currentPage"
        :count="count"
        @change="currentPage=$event"
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
    ListHeader: require("../components/Header").default
  },

  props: {
    endpoint: String,
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
      default: 500
    }
  },

  data() {
    const self = this;

    return {
      items: [],
      count: 0,
      loading: false,
      localPage: null,
      localPerPage: null,
      initial: true
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
    this.initial = true;
    //Create a clone of config to make overridable configs
    //This helps to use v-model as config
    this.setPaginationConfig();

    //If data is provided explicitly, prevent the request
    if (!this.data) {
      this.getData();
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
        this.getData();
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
    setPaginationConfig() {
      if (!this.pagination) return;

      //Set the default page to render if page provided in URL
      if (this.$route && this.$route.query.page) {
        this.currentPage = this.$route.query.page;
      }
    },

    refresh() {
      this.getData();
    },

    getData() {
      const self = this;
      debounce(
        function(e) {
          this.loading = true;
          const params = {
            ...this.filters,
            ...(this.params || {}),
            [this.pageKey]: this.page || undefined,
            [this.perPageKey]: this.currentPerPage || undefined
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
              if (this.$router && this.paginationMode == "querystring") {
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
        this.initial ? 0 : this.debounce
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
@keyframes shine {
  to {
    background-position: -200% 0;
  }
}
.list-loader__item {
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
.list__footer {
  margin-top: 24px;
}
</style>
