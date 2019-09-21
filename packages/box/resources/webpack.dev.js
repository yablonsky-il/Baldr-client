const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(path.resolve(), 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 3006,
    proxy: {
      '/api': {
        target: 'http://localhost:3005',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3006' }),
  ],
});
