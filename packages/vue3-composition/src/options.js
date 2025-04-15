export default {
  componentPrefix: '',
  requestHandler() {
    return new Promise((resolve, reject) => {
      resolve({
        items: [],
        count: 0,
      })
    })
  },
  itemProps: {},
  typeAdapters: {},
  stateManager: {
    set() {},
    get() {},
    init() {},
  },
}
