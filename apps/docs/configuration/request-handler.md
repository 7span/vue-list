# Request Handler

The `requestHandler` is the core of how VueList fetches data. It's a globally defined async function that VueList calls every time the listing state changes — whether it's the page number, filters, sorting, or search input.

You define the logic once, and VueList handles calling it with the right parameters at the right time.

This function is responsible for:

- Making the actual API request (using fetch, axios, or your library of choice)
- Structuring the request based on the current listing state
- Returning the resolved data (ideally the list of items + any pagination metadata)

## Arguments

When called, the `requestHandler` receives a single argument - an object called `context`.
This context contains everything needed to perform the API call.

Read more about [The Context Object](/configuration/context-object.md).

::: code-group

```js [main.js]
app.use(VueList, {
  requestHandler(context) {
    const {
      endpoint,
      version,
      meta,
      search,
      page,
      perPage,
      sortBy,
      sortOrder,
      filters,
      attrSettings,
    } = context;
    //...
  },
});
```

:::

## Return Value

The requestHandler must return a Promise that resolves with the following object:

```js
{
  items: Array,
  count: Number,
}
```

Following are the properties of the returned object.

### items

- type: `Array`

  The sliced data returned from an API to show on this page.

### count

- type: `Number`

  The total number of items matching the filters which is used for pagination.

---

For example:
::: code-group

```js [main.js]
app.use(VueList, {
  requestHandler(context) {
    // ...
    return axios
      .get(...)
      .then((res) => {
        return {
          items: res.data,
          count: res.count,
        };
      });
  },
});
```

:::

## Error Handling (WIP)

You can handle errors inside the `requestHandler` and return fallbacks, or let the promise reject and handle loading/error state in your app’s UI. VueList won't crash if the handler throws — you can decide how to surface that error.
