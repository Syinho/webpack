/* 使用dll技术，对某些库单独打包
    比如jquery等第三方库。
    webpack 默认查找 webpack.config.js配置文件
    需要使用 webpack --config webpack.dll.js 命令

*/

const {
    join
} = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        jquery: ['jquery']
        // 最终打包生成的name:['要打包的库的name']
    },
    output: {
        filename: '[name].js',
        path: join(__dirname, '/dll'),
        library: '[name]_[hash]'
        // library 打包的库里面向外暴露出去的内容叫什么名字
        // 通过val一个变量然后暴露这个变量
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            // 映射库暴露的内容名称
            path: join(__dirname, 'dll/manifest.json')
            // 输出文件路径
        })
    ],
    mode: 'production'
}