const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ["./src/main.js"],
    output: {
        chunkFilename: '[name].[hash].js',
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: false
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: './index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                include: [],
                loader: 'babel-loader'
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|webp|jpeg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `[name].[ext]`,
                        // Output into parent folder's directory
                        outputPath: "./img",
                    }
                }
            },

        ]
    },

    devServer: {
        port : 3000,
        hot : true,
        historyApiFallback: true
    },
    optimization: {
        minimizer: [new TerserPlugin()],

        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },
    node: { fs: 'empty' }
};
