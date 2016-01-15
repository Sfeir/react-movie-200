var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/App.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx/,
            loaders: ['react-hot', 'babel']
        }, {
      			test: /\.(png|jpg)$/,
      			loader: 'url?limit=25000'
		    }]
    },
    devServer: {
        contentBase: 'build',
        stats: { colors: true },
        hot: true,
        proxy: [{
            path: /\/server(.*)/,
            target: 'http://localhost:3000/'
        }]
    }
};
