import { reject, resolve } from "core-js/fn/promise";

export default {
  componentPrefix: "V",
  requestHandler() {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  },
  itemProps: {},
  typeAdapters: {},
};
