const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BABEL_INCLUDE = [
  path.resolve('node_modules/@baldr/core/src'),
  path.resolve('src'),
];

console.log(BABEL_INCLUDE);

module.exports = {
  target: 'web',
  entry: path.join(path.resolve(), 'src/index.jsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'client.bundle.js',
    publicPath: '/',
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
              resources: path.join(path.resolve(), 'src/customizations/entrypoints.scss'),
            },
          },
        ],
      },
    ]
  },
  // resolve: {
  //   extensions: ['*', '.js', '.jsx']
  // },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.scss'],
    symlinks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(path.resolve(), 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
};
