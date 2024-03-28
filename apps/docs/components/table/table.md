<script setup>
import Table from './table.vue';
import TableSlots from './table-slots.vue';
</script>

# Table Component

## Overview

- `VListTable` component provides a customizable table layout for displaying list data. It offers sortable columns, row selection, and drag-and-drop reordering features.
- Use `VListTable` component inside the **#default** slot of the wrapper component.

<Table/>

## Example

```vue {10} [app.vue]
<template>
  <VList
    :attrs="state.attrs"
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="desc"
  >
    <template #default>
      <VListTable :rowClass="() => []"> </VListTable>
    </template>
  </VList>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color", rowClick: false },
    { name: "status" },
    { name: "name", sortable: true },
  ],
});
</script>
```

## Configuration

- `Named Slots`

If you want to specify a default value to display when the actual data is unavailable or empty, you can use these slots. Named Slots corresponds to **attribute names** defined in the attrs.

You can define a default value using either of the following methods:

**Example**

```vue
<!-- 1. Using named slots -->
<template #color="{ item }">
  {{ item.color || "-" }}
</template>

<!-- 2. Using value function inside attrs -->
<script setup>
const state = reactive({
  attrs: [
    {
      name: "color",
      value(item) {
        return item.color || "-";
      },
    },
  ],
});
</script>
```

- `th_after`

The `th_after` slot allows you to customize the appearance of table headers after the default content. This slot is particularly useful for adding sorting indicators to sortable columns or displaying additional icons based on specific conditions.

**Slot Props**

`attr`: Represents the attribute object associated with the current table header.\
`sortBy`: Indicates the currently sorted column name.\
`sortOrder`: Specifies the sorting order (asc or desc).

**Example**

```vue
<template #th_after="{ attr, sortBy, sortOrder }">
  <div v-if="attr.name == sortBy">
    <span v-if="sortOrder == 'asc'">
      <IconSortUp />
    </span>
    <span v-else-if="sortOrder == 'desc'">
      <IconSortDown />
    </span>
  </div>

  <!-- Unsorted icon: conditions explainantion -->
  <!-- If Sortable is true -->
  <!-- If sortBy is null OR column name is not same as sortBy -->
  <IconUnsorted v-if="attr.sortable && (!sortBy || attr.name !== sortBy)" />
</template>
```

- `_drag`

The `_drag` slot allows you to customize the appearance and behavior of the drag handle used for reordering rows.

To enable drag and drop functionality for row reordering, you need to install the [vuedraggable](https://github.com/SortableJS/vue.draggable.next) package for vue 3.

> [!NOTE] Note
> You must register component with **draggable** alias.

**Example**

```vue
<template #_drag>
  <IconDrag class="v-list-table__drag cursor-grab" />
</template>
```

You can replace `<IconDrag>` with any custom component or HTML content to represent the drag handle. Additionally, ensure that the element inside the slot has the **v-list-table\_\_drag** handler as class to work this.

**Attribute Configuration**

To make the drag handle slot available in the table attributes (attrs), you should include the following configuration:

```vue [app.vue]
<script setup>
const state = reactive({
  const state = reactive({
  attrs: [
    <!-- existing columns -->
    { name: "_drag", label: "Drag" }
  ],
});
})
</script>
```

<TableSlots/>
## Slots

| Name       | Description                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| th_after   | Used for adding content after each table header cell. This slot provides information about the attribute being displayed, the current sort order, and sort functionality. |
| th_select  |                                                                                                                                                                           |
| select     |                                                                                                                                                                           |
| \_drag     | Slot for adding a drag handle to each row for reordering rows                                                                                                             |
| body-start | Slot for adding additional content to be displayed at the start of the table body                                                                                         |
| body-end   | Slot for adding additional content to be displayed at the end of the table body                                                                                           |
