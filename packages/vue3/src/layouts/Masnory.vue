<template>
  <div class="masnory">
    <ul class="masnory__cols">
      <li
        :style="{ flexBasis: `${100 / size}%` }"
        v-for="(col, index) in masnoryCols()"
        :key="`col-${index}`"
      >
        <div
          class="masnory__item"
          v-for="(item, itemIndex) in col"
          :key="`item-${itemIndex}`"
        >
          <slot :item="item" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import layout from "../layout";

export default {
  name: "layout-masnory",
  mixins: [layout],
  data() {
    return {
      screenWidth: null,
    };
  },
  props: {
    config: {
      default: () => {},
    },
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", () => {
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
    },
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
    },
  },
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
