# State Manager

The `vue-list` package allows you to set up a state manager, allowing users to persist their applied filters, pagination settings, and other state data. This feature ensures that users retain their preferences even when they navigate away from the application and return later. `stateManager` have the flexibility to choose preferred storage mechanism, such as localStorage, sessionStorage, IndexedDB, or server-side storage. You can easily customize the set and get methods within the stateManager object to align with their chosen storage solution.

Below is an example of how to configure the state manager:

## Setup

Along with `requestHandler()` defined in the [setup guide](/guide/getting-started.html#setup) file, you need to provide an object **stateManager** with set and get methods to save and retrieve the state data, respectively.

**Example:**

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
