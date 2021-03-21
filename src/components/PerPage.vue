<template>
  <div class="v-list-per-page">
    <!-- 
      @slot Custom interface to list down all the options.
      @binding {int} value Current value.
      @binding {function} change Change the value.
      @binding {array} options An array of serialized options.
      @binding {string} options.label A label to display for an option.
      @binding {int} options.value A value to set for an option.
     -->
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
    /**
     * An array of options which lets user select how many items they want to see in a list at a time.
     * Provide an object with 'label' and 'value' keys to have a label diffrent then a value.
     */
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
