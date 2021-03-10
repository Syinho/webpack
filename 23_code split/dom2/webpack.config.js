const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    // entry: {
    //     index: './src/js/index.js',
    //     test: './src/js/test.js'
    // },
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    // 将node_modules中代码单独打包成一个chunk
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production'
};