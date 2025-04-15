# State Manager

The `stateManager` in VueList is an optional but powerful feature that allows you to persist user interaction state across sessions or navigations. In simpler terms: if a user applies filters, changes the page, or selects a different perPage value, you can remember those choices - so when they return, the list looks exactly how they left it.

By default, listing state lives in memory and resets on page refresh or route change. With `stateManager`, you can plug into a storage layer (like `localStorage`, `sessionStorage`, or even an API).

::: code-group

```js [main.js]
app.use(VueList, {
  stateManager: {
    set(endpoint, context) {
      localStorage.setItem(endpoint, JSON.stringify(context));
    },
    get(endpoint) {
      const context = localStorage.getItem(endpoint);
      return context ? JSON.parse(context) : null;
    },
    init() {
      // Optional setup logic
    },
  },
});
```

:::

### How VueList Uses It

- VueList will provide the endpoint and component **context**.
- On mount, it will call `get(endpoint)` and restore state if found.
- On any user interaction (changing page, filters, etc.), it will call `set(endpoint, newContext)` to persist the new state.
- You can use this to sync state with:
  - LocalStorage
  - Vuex/Pinia
  - SessionStorage
  - Remote storage APIs

## Endpoint

- Type: `string`

Used as the key (i.e., the unique identifier for the listing). You can modify this based on your requirements.
