const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            // css资源的打包
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            // less资源的打包
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            // 图片资源的打包，仅限于css中的url指定的图片
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'imgs'
                }
            }]
        }, {
            // html中img的url指定资源打包
            test: /\.html$/,
            use: ['html-loader']
        }, {
            // 其它资源的打包
            exclude: /\.(js|css|html|less|jpg|png|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
}

module.exports = config;