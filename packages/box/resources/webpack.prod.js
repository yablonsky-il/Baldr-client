const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false,
          },
          output: {
            beautify: false,
          },
          mangle: true,
        },
      }),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
