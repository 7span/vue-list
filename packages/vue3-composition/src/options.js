export const defaultRequestHandler = () => {
  return new Promise((resolve) => {
    resolve({
      items: [],
      count: 0,
    })
  })
}

export const defaultStateManager = {
  set() {},
  get() {},
  init() {},
}

export default {
  componentPrefix: '',
  requestHandler: defaultRequestHandler,
  stateManager: defaultStateManager,
}
