const path = require('path');
module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss', '.sass'],
      alias: {
        '~components': path.resolve(__dirname, './src/components'),
        '~db': path.resolve(__dirname, './src/db'),
        '~style': path.resolve(__dirname, './src/assets/style'),
      },
    },
  },
  devServer: {
    watchOptions: {
      poll: true,
      ignored: ['node_modules'],
    },
  },
};
