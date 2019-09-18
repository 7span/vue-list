<template>
  <div
    class="list"
    :class="{'loader loader--dark loader--xl overlay overlay--light':loading && !initial}"
  >
    <!-- HEADER -->
    <list-header @per-page="paginationConfig.perPage = $event" :paginationConfig="paginationConfig"></list-header>

    <!-- CONTENT -->
    <section class="list__content">
      <div v-if="loading && initial" class="list-loader">
        <div v-for="n in 10" class="list-loader__item" :key="`loader-item--${n}`"></div>
      </div>

      <template v-else>
        <!-- CUSTOM LAYOUT -->
        <div v-if="layoutConfig.name=='custom'" class="list__custom">
          <slot :items="data || items"></slot>
        </div>

        <!-- LAYOUT -->
        <component
          v-else
          class="list__layout"
          :class="'list__layout--'+layoutConfig.name"
          :is="'layout-'+layoutConfig.name"
          :items.sync="items"
          :layoutConfig="layoutConfig"
          :paginationConfig="paginationConfig"
          @sort="sort"
        >
          <!-- PARENT SLOTS -->
          <!-- Inherits the slots from the parent -->
          <template v-for="(slot,name) in $scopedSlots" v-slot:[name]="scope">
            <slot :name="name" v-bind="scope" />
          </template>
        </component>
      </template>
    </section>

    <!-- FOOTER -->
    <footer v-if="!initial" class="list__footer">
      <pagination
        v-if="paginationConfig.perPage > 0"
        v-model.number="paginationConfig.page"
        :paginationConfig="paginationConfig"
        :count="count"
        @change="paginationConfig.page = $event"
      />
      <metadata :items="items" :count="count" />
    </footer>
  </div>
</template>

<script>
import {
  defaultConfig,
  gridTableConfig,
  masnoryConfig,
  paginationConfig
} from "../config";

const configs = {
  gridTable: gridTableConfig,
  masnory: masnoryConfig,
  pagination: paginationConfig
};

export default {
  components: {
    LayoutGridTable: require("../layouts/GridTable").default,
    LayoutMasnory: require("../layouts/Masnory").default,
    Pagination: require("../components/Pagination").default,
    Metadata: require("../components/MetaData").default,
    ListHeader: require("../components/Header").default
  },
  provide() {
    return {
      AXIOS: this.options.axios,
      DRAGGABLE: this.options.vueDraggable,
      COLS: this.options.cols
    };
  },
  props: {
    endpoint: String,
    config: Object,
    params: Object,
    data: Array,
    layout: [String, Object],
    pagination: {
      type: [Boolean, Object],
      default: true
    }
  },

  data() {
    return {
      items: [],
      count: 0,
      loading: false,
      //localConfig will contain all the default configs merged with
      //user provided config and may change as user interfacts
      localConfig: null,
      paginationConfig: null,
      layoutConfig: null,
      initial: true
    };
  },

  watch: {
    "paginationConfig.page"(newValue, oldValue) {
      //This avoid the initial extra request when the component values are not set.
      if (oldValue === undefined) return;
      this.getData();
    },
    "paginationConfig.perPage"(newValue, oldValue) {
      //This avoid the initial extra request when the component values are not set.
      if (oldValue === undefined) return;
      //Changing page to 1 will automatically call getData with latest params due to watcher
      this.paginationConfig.page = 1;
    },
    params: {
      handler(newValue) {
        //Changing page to 1 will automatically call getData with latest params due to watcher
        this.paginationConfig.page = 1;
      },
      deep: true
    }
  },

  created() {
    this.initial = true;
    //Create a clone of config to make overridable configs
    //This helps to use v-model as config
    this.setLocalConfig();
    this.setPaginationConfig();
    this.setLayoutConfig();

    //If data is provided explicitly, prevent the request
    if (!this.data) {
      this.getData();
    }
  },

  methods: {
    setLocalConfig() {
      this.localConfig = Object.assign({}, defaultConfig, this.config);
    },

    setPaginationConfig() {
      if (!this.pagination) return;
      this.paginationConfig = Object.assign(
        {},
        paginationConfig,
        this.options.pagination || {},
        this.pagination
      );

      //Set the default page to render if page provided in URL
      if (this.$route && this.$route.query.page) {
        this.paginationConfig.page = this.$route.query.page;
      }

      //If the limit is set to 0
      //Add "All" option to dropdown
      //Only if user has nnot provided blank array. This is to hide dropdown
      if (
        this.paginationConfig.perPage == 0 &&
        this.paginationConfig.perPageOptions.length > 0
      ) {
        this.paginationConfig.perPageOptions.push({
          value: 0,
          label: "All"
        });
      }

      //If the limit provided is not in perLimitOptions
      const perPageOptionValues = this.paginationConfig.perPageOptions.map(
        item => item.value
      );
      if (!perPageOptionValues.includes(this.paginationConfig.perPage)) {
        this.paginationConfig.perPageOptions.push({
          value: this.paginationConfig.perPage,
          label: this.paginationConfig.perPage
        });
      }

      // //Add List of colums to dropdown
      // for (var col in this.localConfig.cols) {
      //   this.localConfig.colsList.push({
      //     label: this.localConfig.cols[col].title,
      //     value: col
      //   });
      //   if (!col.hasOwnProperty("visible") || col.visible) {
      //     this.localConfig.visibleCols.push(col);
      //   }
      // }
    },

    setLayoutConfig() {
      let config;
      if (typeof this.layout == "string") {
        //Use the default config
        config = {
          name: this.layout,
          ...configs[name]
        };
      } else if (typeof this.layout == "object") {
        //Merge with default config
        config = Object.assign({}, configs[this.layout.name], this.layout);
      } else {
        config = {
          name: "custom"
        };
      }
      //Merge with global config.
      this.layoutConfig = { ...(this.options[config.name] || {}), ...config };
    },

    refresh() {
      this.getData();
    },

    responseAdapter(data) {
      if (this.options.responseAdapter) {
        return this.options.responseAdapter(data);
      } else if (this.localConfig.responseAdapter) {
        return this.localConfig.responseAdapter(data);
      } else {
        return data;
      }
    },

    getData(e) {
      this.loading = true;
      this.options.axios
        .get(this.endpoint, {
          params: {
            ...this.params,
            page: this.paginationConfig.page,
            [this.paginationConfig.perPageKey]:
              this.paginationConfig.perPage || undefined
          }
        })
        .then(res => {
          //Set the requestURL with the all the options
          //This can be retrived from the event
          this.$emit("action", {
            name: "request",
            data: { url: res.request.responseURL }
          });

          //Pass through the response adapor
          let resData = this.responseAdapter(res.data);
          this.items = resData.data;
          this.count = resData.count;

          this.$emit("action", {
            name: "response",
            data: resData
          });

          //Set Page URL
          if (this.$router && this.paginationConfig.mode == "querystring") {
            this.$router.push({
              query: {
                page: this.paginationConfig.page
              }
            });
          }
          this.loading = this.initial = false;
        })
        .catch(err => {
          console.error(err);
          this.loading = this.initial = false;
        });
    },

    sort(e) {
      const context = {
        layout: this.layoutConfig,
        pagination: this.paginationConfig,
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

<style lang="scss">
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
.list {
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.list--loading {
  min-height: 100px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    background-image: url("../img/loader-dark.svg");
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: top 25px center;
    z-index: 2;
    border-radius: 5px;
  }
}
.list__footer {
  margin-top: 24px;
}
</style>
