const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve('node_modules/@baldr/core/src/server/index.js'),
  externals: [nodeExternals()],
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [
          path.resolve('node_modules/@baldr/core/src'),
          path.resolve('src'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve('src'), 'node_modules'],
    symlinks: false,
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new LoadablePlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};
