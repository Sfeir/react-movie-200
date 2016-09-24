var webpack = require('webpack'),
    path = require('path');

module.exports = {
    cache: true,
    debug: true,
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/App.jsx'),
        path.resolve(__dirname, 'index.html'),
        'babel-polyfill',
        'whatwg-fetch'
    ],
    resolve:   {
        packageAlias: 'browser',
        root:       path.join( __dirname, 'app' ),
        extensions: ['', '.js', '.jsx']
    },
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
            test: /\.js/,
            loaders: ['babel?presets[]=es2015,presets[]=stage-0']
        },{
            test: /\.jsx/,
            loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }, {
            test: /\.html$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?sourceMap!postcss-loader'
        }, {
           test:   /\.(eot|svg|ttf|otf)(\?.*)?$/,
           loader: 'url-loader?limit=100000'
        }, {
           test:   /\.woff(2)?(\?.*)?$/,
           loader: 'url-loader?limit=100000'
        }]
    },
    devServer: {
        contentBase: 'app',
        stats: { colors: true },
        hot: true,
        proxy: {
            '/server/*' : {
               target : 'http://localhost:3000/'
            }
        }
    }
};
