module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data:
          '@import "material-colors/dist/colors.scss"; @import "@7span/shilp/scss/_globals.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      symlinks: false
    }
  }
};
