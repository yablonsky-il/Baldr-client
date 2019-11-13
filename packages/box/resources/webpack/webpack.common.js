const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const CURRENT_DIRECTORY = path.resolve();

module.exports = {
  target: 'web',
  entry: [
    path.join(CURRENT_DIRECTORY, 'src/index.jsx'),
    path.join(CURRENT_DIRECTORY, 'src/customizations/entrypoints.scss'),
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
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
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(CURRENT_DIRECTORY, 'src/customizations/resources.scss'),
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer({
                  grid: true,
                }),
              ],
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
      'react-dom': path.resolve('node_modules/@baldr/core/node_modules/react-dom'),
      'react-router-dom': path.resolve('node_modules/@baldr/core/node_modules/react-router-dom'),
    },
  },
  plugins: [
    new LoadablePlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(CURRENT_DIRECTORY, 'public/index.html'),
    // }),
    // new CopyWebpackPlugin([{ from: path.resolve('public'), to: 'public/' }]),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css',
      publicPath: './',
    }),
    // new CleanWebpackPlugin(),
  ],
};
