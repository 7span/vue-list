# Components

Vue List offers a set of ready-to-use components that serve as a higher-level layer of the library. These headless components simplify the integration of Vue List's core functionality into your project by providing basic configurations for common listing layouts. All these components seamlessly work within the `#default` slot of Vue List, allowing for easy customization and extension.

> [!note] Note
> `vue-list` is designed to be agnostic to the underlying data source technology.
> It can work with various data providers like Axios, GraphQL, or Directus, allowing you to adapt it to your specific project needs.

## Features

Vue List components offer almost all elements that needed to create listing layouts with the following features:

- **Headless Components**
- **Customizable**

  All components offer a high degree of customization, allowing developers to tailor the appearance, behavior, and styling to fit specific project requirements.

- **Configurable Options**

  Components provide configurable options and props, empowering developers to adjust settings according to the desired behavior.

- **Dynamic Updates**

  Components support dynamic updates, allowing real-time changes to the list without requiring a full page reload.

## How-it-works

All Vue List components mentioned below are designed to be used within the `#default` slot of Vue List. This headless approach ensures flexibility and ease of customization, allowing you to tailor the components to your specific project requirements.

## Available components

1. `v-list-attributes`

   - Displays attributes for each list item.

2. `v-list-search`

   - Enables a search functionality within Vue List.

3. `v-list-table`

   - Renders a table for organizing and presenting list data.

4. `v-list-counter`

   - Displays the current count of items in the list.

5. `v-list-go-to`

   - Facilitates navigation to a specific page or item in the list.

6. `v-list-load-more`

   - Offers a button or trigger to load more items in the list.
   - Useful for implementing lazy loading or paginated data retrieval.

7. `v-list-pagination`

   - Manages pagination controls for navigating through different pages of the list.
   - Integrates seamlessly with Vue List, providing a user-friendly way to explore large datasets.

8. `v-list-per-page`
   - Allows users to configure the number of items displayed per page.
   - Enhances user control over the list view, accommodating preferences for the number of items shown.

## Example

```vue [app.vue]
<template>
  <v-list>
    <v-list-search />
    <v-list-table />
    <v-list-pagination />
  </v-list>
</template>
```
