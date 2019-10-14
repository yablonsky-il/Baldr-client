const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const common = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    })],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new DuplicatesPlugin({
      verbose: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
}));
