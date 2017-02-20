'use strict';

const path = require('path');

module.exports = {
    entry: ['./client/client.js'],  // starting file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist/js'),
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // if there is .js at the end, run the loader
                loader: 'babel-loader',
                exclude: /node_modules/,
                // tell babel what to do
                // compile js and ES6 preset
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }

}
