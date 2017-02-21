'use strict';

const path = require('path');
const webpack = require ('webpack');

module.exports = {
    deltool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client.js',
        './client/client.js',
    ],  // starting file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist/js'),
        publicPath: '/',
    },
    plugin:[
        // Hot Module Replacement
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, // if there is .js at the end, run the loader
                loader: 'babel-loader',
                exclude: /node_modules/,
                // tell babel what to do
                // compile js and ES6 preset
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }
        ]
    }

}
