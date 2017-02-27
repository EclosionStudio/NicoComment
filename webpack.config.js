const path = require ('path');
const webpack = require ('webpack');

module.exports = {

    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015','react-hmre']
                }
            }
        ]
    }



}