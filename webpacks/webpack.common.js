const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: {
        index: './frontend/src/index.js',
    },
    plugins: [
        new BundleTracker({filename: 'webpacks/webpack-stats.json'}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
    ],

    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }
};