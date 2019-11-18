const merge = require('webpack-merge');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { server } = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(server, {
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
    // new BundleAnalyzerPlugin(),
  ],
}));
