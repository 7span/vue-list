<template>
  <div class="masnory">
    <ul class="masnory__cols">
      <li :style="{flexBasis:`${100/size}%`}" v-for="col in masnoryCols()">
        <div class="masnory__item" v-for="item in col">
          <slot :item="item" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "layout-masnory",
  mixins: [require("../mixins/layouts").default],
  data() {
    return {
      screenWidth: null
    };
  },
  props: {
    config: {
      default: () => {}
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", e => {
      this.screenWidth = window.innerWidth;
    });
  },
  computed: {
    size() {
      //IF NUMBER
      if (typeof this.layoutConfig.size == "number") {
        return this.layoutConfig.size;
      }

      //IF OBJECT
      if (this.screenWidth <= 576) {
        return this.layoutConfig.size.xs;
      } else if (this.screenWidth <= 768) {
        return this.layoutConfig.size.sm;
      } else if (this.screenWidth <= 992) {
        return this.layoutConfig.size.md;
      } else {
        return this.layoutConfig.size.lg;
      }
    }
  },

  methods: {
    masnoryCols() {
      let _cols = [];
      this.items.forEach((item, index) => {
        if (!_cols[index % this.size]) {
          _cols[index % this.size] = [];
        }
        _cols[index % this.size].push(item);
      });
      return _cols;
    }
  }
};
</script>

<style lang="scss">
.masnory {
}
.masnory__cols {
  display: flex;
  list-style: none;
  margin: -10px;
  padding: 0;
  > li {
    flex: 0 0 20%;
  }
}
.masnory__item {
  padding: 10px;
}
</style>
