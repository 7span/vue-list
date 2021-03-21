# VList

## Props

| Prop name      | Description                                                                                                                                                                                           | Type   | Values                                | Default       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------- | ------------- |
| paginationMode |                                                                                                                                                                                                       | string | `querystring`, `internal`, `infinite` | "querystring" |
| endpoint       | An API endpoint to hit for getting data. This will be appended to baseUrl                                                                                                                             | string | -                                     |               |
| page           | Default page to load                                                                                                                                                                                  | number | -                                     | 1             |
| perPage        | Number of results to fetch and display on each page.                                                                                                                                                  | number | -                                     | 25            |
| params         | Additional parameters to pass when making an API request.                                                                                                                                             | object | -                                     |               |
| filters        | Just like parameters but specifically to filter data.                                                                                                                                                 | object | -                                     |               |
| debounce       | When making API requests, this value is used to reduce immediate requests.                                                                                                                            | number | -                                     | 1000          |
| sortBy         | Uses this attribute when sorting items in listing.                                                                                                                                                    | string | -                                     |               |
| sortOrder      | Ascending or Descending?                                                                                                                                                                              | string | `asc`, `desc`                         |               |
| search         | Default search query to use                                                                                                                                                                           | string | -                                     |               |
| attrs          | List of attributes to display in a list                                                                                                                                                               | array  | -                                     |               |
| attrsAdaptor   | An adaptor defines which attributes to be passed to layout<br>This is helpful when you don't know which attributes are sent from API<br>Also useful when you need to show all the columns except few. | func   | -                                     |               |

## Events

| Event name     | Properties | Description |
| -------------- | ---------- | ----------- |
| update:page    |            |
| update:perPage |            |
| beforeLoadMore |            |
| afterLoadMore  |            |
| afterLoad      |            |
| res            |            |
| sort           |            |

## Slots

| Name         | Description | Bindings         |
| ------------ | ----------- | ---------------- |
| loading      |             |                  |
| loading-page |             |                  |
| error        |             |                  |
| empty        |             |                  |
| default      |             | <br><br><br><br> |

---
