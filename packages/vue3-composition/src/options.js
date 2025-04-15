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
  stateManager: {
    set() {},
    get() {},
    init() {},
  },
}
