# Options

When installing VueList, you can pass an options object to customize its behavior. These options allow you to define global behavior like how API requests are handled or how state is persisted.

## `componentPrefix`

- Type: `string`
- Default: `'V'`

Adds a prefix to the globally registered components (e.g., VList if the prefix is 'V'). Useful to avoid naming conflicts or to follow a naming convention in your app.

## `requestHandler`

- Type: `Function`

Global request handler function used to fetch data. Receives an object with `endpoint`, `page`, `perPage`, `filters`, and more. Must return a Promise.

Read more about [Request Handler](/configuration/request-handler.md).

## `stateManager`

- Type: `Function`

The stateManager option allows you to customize how the listing state is saved and retrieved — for example, from localStorage, session, or even an API.

Read more about [State Manager](/configuration/state-manager.md).
