# LoadMore

> Provides infinite list where users can click on Load more and new items from
> API will be appended in a list keeping previous items as it is.

## Slots

| Name    | Description                                                                                                        | Bindings                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Button to let users click to load more data.                                                                       | **loading** `boolean` - true when loadMore is called and waiting for API response.<br>**loadMore** `function` - A function to call to load more items |
| end     | When all the available items are loaded. Displayed when a count returned from API is equal to the items in a list. |                                                                                                                                                       |

---
