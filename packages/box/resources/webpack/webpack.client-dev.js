const webpack = require('webpack');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const { client } = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(client, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3006' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
}));
