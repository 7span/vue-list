<template>
  <div class="list-meta">
    <!-- SHOW COUNTS -->
    <div class="list-meta__results" v-if="items.length > 0">
      <p>Showing {{showing}} items out of {{count}}</p>
    </div>

    <!-- NO RESULTS -->
    <div class="list-meta__empty" v-else>
      <p>No data found for given duration & filters. Try changing duration/filters.</p>
    </div>
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

<style lang="scss">
.list-meta__results {
  margin-top: 16px;
  text-align: center;
  font-size: 12px;
  color: --color(grey);
}

.list-meta__empty {
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
