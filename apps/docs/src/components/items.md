# `<VueListItems>`

This is a wrapper component to render the list of items returned by `<VueList>`.

## Slots

It supports two slots — `default` and `item`.
You can use either of them based on your needs.

### `default`

This exposes the entire items array. You handle the `v-for` yourself.

```vue
<template>
  <VueList>
    <VueListItems>
      <template #default="{ items }">
        <pre v-for="user in items" :key="user.id">
          {{ user.name }}
        </pre>
      </template>
    </VueListItems>
  </VueList>
</template>
```

#### Slot Props

| Name    | Description                                             |
| ------- | ------------------------------------------------------- |
| `items` | `Array` <br/> List of visible items returned by the API |

### `item`

This exposes each individual item. The looping is handled internally by `<VueListItems>`.

```vue
<template>
  <VueList>
    <VueListItems>
      <template #item="{ item, index }">
        <pre> {{ item }}</pre>
      </template>
    </VueListItems>
  </VueList>
</template>
```

#### Slot Props

| Name    | Description                                                                                 |
| ------- | ------------------------------------------------------------------------------------------- |
| `item`  | `Object` <br/> An individual item from the set of items returned by API                     |
| `index` | `Number` <br/> The index of the item. It will always start from the `0` for any of the page |

::: warning
Do not use both slots at the same time.
If both are present, only the `default` slot will be used.
:::
