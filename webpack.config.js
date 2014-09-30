var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/entry.js',
    output: {
        path: 'dist', 
        filename: '[hash].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index_template.html'
        })
    ]
};