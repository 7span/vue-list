module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "material-colors/dist/colors.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      symlinks: false
    }
  }
};
