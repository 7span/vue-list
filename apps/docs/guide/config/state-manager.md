# State Manager

The `vue-list` package allows you to set up a **State Manager**, allowing users to persist their applied filters, pagination settings, and other state data. This feature ensures that users retain their preferences even when they navigate away from the application and return later. `stateManager` have the flexibility to choose preferred storage mechanism, such as localStorage, sessionStorage, IndexedDB, or server-side storage. You can easily customize the set and get methods within the stateManager object to align with their chosen storage solution.

## Setup

Along with `requestHandler()` defined in the [setup guide](/guide/getting-started.html#setup) file, you need to provide an object **stateManager** with init, set and get methods to save and retrieve the state data, respectively.

**Example:**

::: code-group

```js [main.js]
const app = createApp(App);
app.use(VueList, {
  stateManager: {
    init(endpoint, state) {
      // Custom initialization logic, such as clearing stale data
    },
    set(endpoint, state) {
      // Custom logic to store state data
    },
    get(endpoint) {
      // Custom logic to retrieve state data
    },
  },
  async requestHandler(requestData) {
    // existing configuration
  },
});
```

:::

## Configuration

To set up the State Manager, you need to provide an object containing three key methods: `init`, `set`, and `get`.
Users have complete control over the behavior of the State Manager. They can customize the set and get methods to align with their chosen storage solution and application requirements.

**`init`**

The init method is responsible for initializing the State Manager. It is called when the application starts or when the endpoint or state version changes. Within this method, users can define any initialization logic, such as clearing stale data or setting up default values.

```js [main.js]
init(endpoint, state);
```

**endpoint**: The endpoint identifier for which the state is being managed. \
**state**: The current state object containing user preferences.

**`set`**

The set method is used to store the state data into the chosen storage mechanism. This method is called whenever there is a change in the state that needs to be persisted.

```js [main.js]
set(endpoint, state);
```

**endpoint**: The endpoint identifier for which the state is being managed. \
**state**: The updated state object containing user preferences.

**`get`**

The get method is responsible for retrieving the stored state data from the storage mechanism. It is called when the application needs to restore the user's previous preferences.

```js [main.js]
get(endpoint);
```

**endpoint**: The endpoint identifier for which the state is being retrieved.

## Example with Local Storage

::: code-group

```js [main.js]
import { createApp } from "vue";
import App from "./App.vue";
import VueList from "@7span/vue-list";

const app = createApp(App);
app.use(VueList, {
  stateManager: {
    set(endpoint, state) {
      const key = `vue-list--${endpoint}`;
      localStorage.setItem(key, JSON.stringify(state));
    },

    get(endpoint) {
      const key = `vue-list--${endpoint}`;
      try {
        if (localStorage.getItem(key)) {
          return JSON.parse(localStorage.getItem(key));
        } else {
          return null;
        }
      } catch {
        return null;
      }
    },
  },
  async requestHandler(requestData) {
    // existing configuration
  },
});

app.mount("#app");
```

:::
