const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        }),
        // 告诉webpack哪些库不参与打包，同时使用时的名称也得变
        new webpack.DllReferencePlugin({
            manifest: join(__dirname, './dll/manifest.json')
        }),
        // 将某个文件打包输出去，并在html中自动引入该资源
        new addAssetHtmlWebpackPlugin({
            filepath: join(__dirname, 'dll/jquery.js')
        })
    ],
    mode: 'production'
}