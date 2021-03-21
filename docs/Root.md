# VList

## Props

| Prop name    | Description                                                                                                                                                                                           | Type   | Values        | Default        |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------- | -------------- |
| endpoint     | An API endpoint to hit for getting data. This will be appended to baseUrl                                                                                                                             | string | -             |                |
| page         | Default page to load.                                                                                                                                                                                 | number | -             | 1              |
| perPage      | Number of results to fetch and display on each page.                                                                                                                                                  | number | -             | 25             |
| params       | Additional parameters to pass when making an API request.                                                                                                                                             | object | -             |                |
| filters      | Just like parameters but specifically to filter data.                                                                                                                                                 | object | -             |                |
| sortBy       | Uses this attribute when sorting items in listing.                                                                                                                                                    | string | -             |                |
| sortOrder    | Ascending or Descending?                                                                                                                                                                              | string | `asc`, `desc` |                |
| search       | Default search query to use                                                                                                                                                                           | string | -             |                |
| attrs        | List of attributes to display in a list                                                                                                                                                               | array  | -             |                |
| attrsAdaptor | An adaptor defines which attributes to be passed to layout<br>This is helpful when you don't know which attributes are sent from API<br>Also useful when you need to show all the columns except few. | func   | -             | (data) => data |

## Events

| Event name     | Properties                                                                                                                 | Description |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| beforeLoadMore | **payload** `object` - Payload<br>**payload** `int` - .oldPage - Old Page No<br>**payload** `int` - .newPage - New Page No |
| afterLoadMore  |                                                                                                                            |
| afterLoad      |                                                                                                                            |
| res            |                                                                                                                            |
| sort           |                                                                                                                            |

## Slots

| Name         | Description                                                       | Bindings                                                                                                                                                                                                                                                                                                                            |
| ------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loading      | Loader to display when a component is loading for the first time. |                                                                                                                                                                                                                                                                                                                                     |
| loading-page | Loader to display when navigating to other page.                  |                                                                                                                                                                                                                                                                                                                                     |
| error        | If there was an error from an API                                 | **error** `object` - An errror returned from API                                                                                                                                                                                                                                                                                    |
| empty        | When API returned no items.                                       |                                                                                                                                                                                                                                                                                                                                     |
| default      | Render a UI to list items.                                        | **items** `array` - List if items<br>**response** `object` - A latest response from an API<br>**loading** `boolean` - If component is initializing and first request is being made.<br>**isEmpty** `boolean` - If there are no items returned by API.<br>**refresh** `function` - Refresh the listing by using the same parameters. |

---
