<template>
  <div class="v-list__meta">
    <!-- SHOW COUNTS -->
    <p class="v-list__results" v-if="items.length > 0">
      Showing {{ showing }} items out of {{ count }}
    </p>

    <!-- NO RESULTS -->
    <p class="v-list__empty" v-else>
      No data found for given duration & filters. Try changing duration/filters.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    showing() {
      return this.items.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list__results {
  text-align: center;
  font-size: 12px;
  color: --color(grey);
}

.v-list__empty {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid $md-grey-300;
  p {
    margin: 0;
    max-width: 300px;
    text-align: center;
    color: --color(grey);
    margin-top: 25px;
  }
}
</style>
