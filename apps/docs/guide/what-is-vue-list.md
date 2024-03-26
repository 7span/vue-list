# What is Vue List?

🔥 **ATTENTION!** You're currently exploring the most comprehensive and feature-rich data table component for Vue. Vue List equips developers with a powerful and flexible tool for displaying and interacting with large datasets within their applications. It encompasses sorting, searching, pagination, and selection features.
Designed with reusability in mind, so that one doesn't have to recreate the same functionality for lists repeatedly.

> [!NOTE] Note
> Vue List does not impose any structure or layout limitations on your HTML, you can use divs, tables or any third party library you like to present your data.

## Brief Concept

Vue List aims to allow developer to get a full control of pagination. Rather than using a full pagination library with the template included, you can embed pagination functionalities on your own template as long as it uses Vue.js. By using this way, you have a full flexibility with pagination without having to breakdown your current template.

## Features

- Highly customizable DOM structure
- Adaptive UI layout
- Global Search
- Custom filtering based on the row values from all or specific data keys
- Pagination, Customizable Columns, and Item Per Page Options
- Show/Hide columns on the fly.
- Customizable Table Title, Actions Column, and Position
- Render table with/without pagination
- Provides infinite list with load more
- GoTo functionality to directly jump to a specific page

## Response Format

Vue List seamlessly integrates with various APIs, including REST, GraphQL, and Directus. The `requestHandler` function, its core method, handles data retrieval and processing. This function allows modification of backend responses to match Vue List's required format. Returned Responses must include `items` and `count` keys, where `items` hold server data and `count` signifies the total item count. It is imperative to return responses from the `requestHandler` function in this format or Vue List cannnot process your data.

## Compatibilty
