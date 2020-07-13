const path = require('path');
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
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
}