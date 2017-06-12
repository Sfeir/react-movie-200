var webpack = require('webpack'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    entry: {
        bundle : path.resolve(__dirname, 'app/App.jsx'),
    },
    resolve:   {
        aliasFields: ['browser'],
        modules: [
            path.join( __dirname, 'app' ),
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        // We could also use HtmlWebpackPlugin, instead of make a copy of the index.html
        new CopyWebpackPlugin([{
            from: 'index.html'
        }]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [{
            test: /\.js/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0'],
                    cacheDirectory: true
                }
            }]
        }, {
            test: /\.jsx/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react'],
                    cacheDirectory: true
                }
            }]
        }, {
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test:   /\.(eot|svg|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }]
        }, {
            test:   /\.woff(2)?(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }]
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
