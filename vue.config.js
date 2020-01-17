module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@7span/shilp/scss/_globals.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      symlinks: false
    }
  }
};
