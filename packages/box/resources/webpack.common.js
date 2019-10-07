const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BABEL_INCLUDE = [
  path.resolve('node_modules/@baldr/core/src'),
  path.resolve('src'),
];

module.exports = {
  target: 'web',
  entry: [
    path.join(path.resolve(), 'src/index.jsx'),
    path.join(path.resolve(), 'src/customizations/entrypoints.scss'),
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: BABEL_INCLUDE,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(path.resolve(), 'src/customizations/resources.scss'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.scss'],
    symlinks: false,
    alias: {
      react: path.resolve('node_modules/@baldr/core/node_modules/react'),
      'react-router-dom': path.resolve('node_modules/@baldr/core/node_modules/react-router-dom'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(path.resolve(), 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css',
      publicPath: './',
    }),
    new CleanWebpackPlugin(),
  ],
};
