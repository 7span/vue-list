<script setup>
import LoadMore from './load-more.vue';
import LoadMoreSlots from './load-more-slots.vue';

</script>

# Components

## Overview

- Provides functionality for infinite scrolling in a list, allowing users to load additional items from an API seamlessly.
- To utilize `v-list-load-more` component, integrate it within the **#default** slot of the wrapper component.

<LoadMore/>

## Example

```vue {17} [app.vue]
<template>
  <v-list
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <v-list-table :rowClass="() => []">
        <template #actions="{ item }">
          <button class="btn btn-primary">View</button>
        </template>
      </v-list-table>

      <!-- Integration of v-list-load-more component -->
      <v-list-load-more class="load-more" />
    </template>
  </v-list>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color" },
    { name: "status" },
    { name: "name", sortable: true },
    { name: "actions" },
  ],
});
</script>

<style>
/* Tabel Styling */
table {
  width: 100%;
  border: 1px solid #e5e7eb;
}

thead tr th {
  font-size: 0.875rem;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280 !important;
  padding-bottom: 0.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: start;
}

tbody tr td {
  padding: 0.5rem;
  text-align: start;
}

tbody tr:hover {
  background: #f8f9fa;
}

/* Button Styling */
.btn {
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn.btn-primary {
  background-color: #1690d8;
  color: #ffffff;
  text-align: start;
}

.vp-doc table {
  display: table;
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
  accent-color: #1690d8;
}

/* Load More Button Styling */
.load-more {
  text-align: center;
}

.load-more button {
  color: #1690d8;
}
</style>
```

## Configuration

`v-list-load-more` component offers two slots for customization: `#default` slot and `#end` slot. These slots allow you to tailor the appearance and behavior of the load more functionality according to their specific requirements.

- `default`

  The default slot is used to define the UI elements that trigger the loading of more items when clicked. It typically contains a button or any other interactive element that initiates the loading process.

- `end`

  The end slot is displayed when all available items have been loaded, indicating the end of the list. It's often used to provide a visual cue to users that there are no more items to load.

## Load more slots example

<LoadMoreSlots />

```vue {11-26} [app.vue]
<template>
  <v-list
    :attrs="state.attrs"
    endpoint="skills"
    :per-page="4"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <v-list-table :rowClass="() => []"> </v-list-table>
      <v-list-load-more>
        <!-- Integration of v-list-load-more component with slots -->
        <template #default="{ loadMore, loading }">
          <button
            type="button"
            class="btn btn-primary btn-load-more"
            @click="loadMore"
            :class="{ 'btn-load-more--loading': loading }"
          >
            <span class="btn-load-more__text">Load More</span>
          </button>
        </template>
        <template #end>
          <span class="load-more-end"> -- That's all -- </span>
        </template>
      </v-list-load-more>
    </template>
  </v-list>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color" },
    { name: "status" },
    { name: "name" },
  ],
});
</script>

<style lang="scss">
/* Tabel Styling */
table {
  width: 100%;
  border: 1px solid #e5e7eb;
}

thead tr th {
  font-size: 0.875rem;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280 !important;
  padding-bottom: 0.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: start;
}

tbody tr td {
  padding: 0.5rem;
  text-align: start;
}

tbody tr:hover {
  background: #f8f9fa;
}

/* Button Styling */
.vp-doc table {
  display: table;
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
  accent-color: #1690d8;
}

/* Load More Button Styling */
.v-list-load-more {
  text-align: center;
}

.btn {
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn.btn-primary {
  background-color: #1690d8;
  color: #ffffff;
  text-align: start;
}

.btn-load-more {
  position: relative;
}

.btn-load-more__text {
  transition: all 0.2s;
}

.btn-load-more--loading .btn-load-more__text {
  visibility: hidden;
  opacity: 0;
}

.btn-load-more--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}

.load-more-end {
  color: #6d6c6c;
}
</style>
```

## Slots

| Name    | Description                                                                                                        | Bindings                                                                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Button to let users click to load more data.                                                                       | **loading** `boolean` <br/> true when loadMore is called and waiting for API response.<br>**loadMore** `function` <br /> A function to call to load more items |
| end     | When all the available items are loaded. Displayed when a count returned from API is equal to the items in a list. |                                                                                                                                                                |
