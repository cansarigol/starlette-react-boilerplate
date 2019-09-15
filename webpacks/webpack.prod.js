const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

common.plugins = common.plugins.concat([
  new UglifyJSPlugin({
    sourceMap: true,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.BASE_API_URL': JSON.stringify('/api/'),
  }),
])

common.output= {
  filename: '[name].bundle.js',
  path: path.resolve('./static/webpack_bundles/'),
};

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});