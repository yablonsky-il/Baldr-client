const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const common = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(path.resolve(), 'dist'),
  //   historyApiFallback: true,
  //   hot: true,
  //   compress: true,
  //   port: 3006,
  //   proxy: {
  //     '/proxy': {
  //       target: 'http://localhost:3005',
  //       pathRewrite: { '^/proxy': '' },
  //     },
  //   },
  // },
  // plugins: [
  //   new OpenBrowserPlugin({ url: 'http://localhost:3006' }),
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify('development'),
  //   }),
  // ],
}));
