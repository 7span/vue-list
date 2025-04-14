# Per Page Component

## Overview

- `VListPerPage` component provides a pagination bar with clickable page numbers, allowing users to navigate through the list easily.
- To utilize `VListPerPage` component, integrate it within the **#default** slot of the wrapper component.

## Example

```vue {13} [app.vue]
<template>
  <VList
    :attrs="state.attrs"
    :per-page="10"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>

      <!-- Integration of VListPerPage component -->
      <span>Per Page :</span> <VListPerPage />
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
```

## Configuration

- `options`

  **Type:** `array`

  **Default:** [10, 25, 50, 100]

  **Desc:** The options prop allows you to specify an array of options for users to select from.
  Each option can be provided as an object with value or label and value keys to customize the display label and underlying value.

**Example**

```vue
<VListPerPage :options="[10, 20, 30, 40, 50]" />

<!-- OR -->

<VListPerPage
  :options="[
    { label: 'Option1', value: 15 },
    { label: 'Option2', value: 20 },
    { label: 'Option3', value: 30 },
  ]"
/>
```

- `Default Value` : To set the default number of items per page, pass the desired value to the `per-page` prop in the `VList` component where `VListPerPage` is integrated.

**Example**

```vue {3}
<VList
  :attrs="state.attrs"
  :per-page="5"
  endpoint="skills"
  sort-by="name"
  sort-order="asc"
>
</VList>
```

<PerPageProps />

## Props

| Prop name | Description                                                                                                                                                                               | Type  | Values | Default           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------ | ----------------- |
| options   | An array of options which lets user select how many items they want to see in a list at a time.<br>Provide an object with 'label' and 'value' keys to have a label diffrent then a value. | array | -      | [10, 25, 50, 100] |

## Slots

| Name    | Description                                    | Bindings                                                                                                                               |
| ------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| default | Custom interface to list down all the options. | **value** `int` - Current value.<br>**change** `function` - Change the value.<br>**options** `array` - An array of serialized options. |
