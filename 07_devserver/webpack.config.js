const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        // publicPath: './'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',

    // 安装webpack-dev-server
    // 开发服务器 devServer 自动化
    // 特点：只在内存中编译打包，不会有任何输出，也就是说它不会打包，它只会将在内存中打包后的展示出来，但并不执行打包
    // 启动指令为 npx webpack-dev-server 
    devServer: {
        // 项目构建后的路径
        contentBase: path.join(__dirname, '/dist'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}
module.exports = config;