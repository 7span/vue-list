<script setup>
import LoadMore from './load-more.vue';
import LoadMoreSlots from './load-more-slots.vue';

</script>

# Load More Component

## Overview

- Provides functionality for infinite scrolling in a list, allowing users to load additional items from an API seamlessly.
- To utilize `VListLoadMore` component, integrate it within the **#default** slot of the wrapper component.

<LoadMore/>

## Example

```vue {13-27} [app.vue]
<template>
  <VList
    :attrs="state.attrs"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
    :per-page="4"
  >
    <template #default>
      <VListTable :rowClass="() => []"></VListTable>

      <!-- Integration of VListLoadMore component -->
      <VListLoadMore>
        <template #default="{ loadMore, loading }">
          <button
            type="button"
            class="btn btn-primary btn-load-more"
            @click.native="loadMore"
            :class="{ 'btn-load-more--loading': loading }"
          >
            <span class="btn-load-more__text">Load More</span>
          </button>
        </template>
        <template #end>
          <span class="load-more-end"> -- That's all -- </span>
        </template>
      </VListLoadMore>
    </template>
  </VList>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color" },
    { name: "status" },
    { name: "name", sortable: true },
  ],
});
</script>

<style lang="scss" scoped>
/* Tabel Styling */
table {
  width: 100%;
}

.vp-doc table {
  display: table;
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

## Configuration

`VListLoadMore` component offers two slots for customization: `#default` slot and `#end` slot. These slots allow you to tailor the appearance and behavior of the load more functionality according to their specific requirements.

- `default`

  The default slot is used to define the UI elements that trigger the loading of more items when clicked. It typically contains a button or any other interactive element that initiates the loading process.

- `end`

  The end slot is displayed when all available items have been loaded, indicating the end of the list. It's often used to provide a visual cue to users that there are no more items to load.

## Load more slots example

<LoadMoreSlots />

```vue {12-27} [app.vue]
<template>
  <VList
    :attrs="state.attrs"
    endpoint="skills"
    :per-page="4"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>

      <!-- Integration of VListLoadMore component with slots -->
      <VListLoadMore>
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
      </VListLoadMore>
    </template>
  </VList>
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

<style lang="scss" scoped>
/* Tabel Styling */
table {
  width: 100%;
}

.vp-doc table {
  display: table;
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
