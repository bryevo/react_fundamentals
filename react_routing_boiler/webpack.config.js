const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: 'react_app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: path.resolve(__dirname, 'react_app') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'react_app') + '/dist/',
        filename: 'index_bundle.js',
},
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            // { test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
     devServer: {
      historyApiFallback: true
  },
    plugins: [HTMLWebpackPluginConfig]
}
