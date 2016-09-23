var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/App.jsx'),
        path.resolve(__dirname, 'index.html'),
        'babel-polyfill',
        'whatwg-fetch'
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
            loaders: ['babel?presets[]=react']
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.html$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?sourceMap!postcss-loader'
        }, {
           test:   /\.(eot|svg|ttf|otf)(\?.*)?$/,
           loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
           test:   /\.woff(2)?(\?.*)?$/,
           loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    },
    devServer: {
        contentBase: 'src',
        stats: { colors: true },
        hot: true,
        proxy: {
            '/server/*' : {
               target : 'http://localhost:3000/'
            }
        }
    }
};
