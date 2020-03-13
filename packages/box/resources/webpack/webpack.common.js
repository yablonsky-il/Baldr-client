const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CURRENT_DIRECTORY = path.resolve();

const OUTPUT = {
  path: path.resolve('dist'),
  publicPath: '/assets/',
  sourceMapFilename: '[name].js.map',
};

const INCLUDES = [
  path.resolve('src'),
  path.resolve('node_modules/@baldr/core/src'),
];

const CORE_PATH = 'node_modules/@baldr/core/node_modules/';

const server = {
  target: 'node',
  entry: path.resolve('src/server/index.js'),
  externals: [nodeExternals()],
  output: {
    ...OUTPUT,
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: INCLUDES,
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                node: 8,
              },
            }],
          ],
        },
      },
      {
        test: /\.(css|scss|jpg|png|svg)$/,
        loader: 'ignore-loader',
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

const client = {
  target: 'web',
  entry: [
    path.join(CURRENT_DIRECTORY, 'src/client/index.jsx'),
    path.join(CURRENT_DIRECTORY, 'src/customizations/entrypoints.scss'),
  ],
  output: {
    ...OUTPUT,
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: INCLUDES,
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
      react: path.resolve(path.join(CORE_PATH, 'react')),
      'react-dom': path.resolve(path.join(CORE_PATH, 'react-dom')),
      'react-router-dom': path.resolve(path.join(CORE_PATH, 'react-router-dom')),
      rxjs: path.resolve(path.join(CORE_PATH, 'rxjs')),
      ramda: path.resolve(path.join(CORE_PATH, 'ramda')),
      'prop-types': path.resolve(path.join(CORE_PATH, 'prop-types')),
      '@loadable/component': path.resolve(path.join(CORE_PATH, '@loadable/component')),
      '@babel/runtime': path.resolve(path.join(CORE_PATH, '@babel/runtime')),
      // recharts: path.resolve(path.join(CORE_PATH, 'recharts')),
      'react-redux': path.resolve(path.join(CORE_PATH, 'react-redux')),
      '@material-ui/core': path.resolve(path.join(CORE_PATH, '@material-ui/core')),
      '@material-ui/lab': path.resolve(path.join(CORE_PATH, '@material-ui/lab')),
      '@material-ui/pickers': path.resolve(path.join(CORE_PATH, '@material-ui/pickers')),
    },
  },
  plugins: [
    new LoadablePlugin(),
    new CopyWebpackPlugin([{ from: path.resolve('public'), to: 'public/' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = { server, client };
