const merge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const { server } = require('./webpack.common');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(server, {
  mode: 'development',
}));
