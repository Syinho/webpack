const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        // 单入口
        // entry:'./src/js/index.js
        // 多入口：有一个入口，最终输出有两个文件
        main:'./src/js/index.js',
        test:'./src/js/test.js'
    },
    output: {
        // [name]:取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
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
module.exports = config;