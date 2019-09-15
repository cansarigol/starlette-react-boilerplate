const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

common.plugins = common.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.BASE_API_URL': JSON.stringify('/api/'),
  }),
])

common.output= {
  filename: '[name].bundle.js',
  publicPath: 'http://localhost:8080/static/webpack_bundles/',
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map'
});