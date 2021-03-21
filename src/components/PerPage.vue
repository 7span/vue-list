<template>
  <div class="v-list-per-page">
    <slot :value="perPage" :change="change" :options="serializedOptions">
      <select :value="perPage" @input="change($event.target.value)">
        <option
          v-for="(option, index) in serializedOptions"
          :key="`option-${index}`"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [10, 25, 50, 100],
    },
  },

  computed: {
    perPage() {
      return this.$parent.perPage;
    },
    serializedOptions() {
      return this.options.map((item) => {
        if (typeof item != "object") {
          return {
            value: item,
            label: item,
          };
        } else {
          return item;
        }
      });
    },
  },
  methods: {
    change(value) {
      this.$parent.changePerPage(value);
    },
  },
};
</script>
