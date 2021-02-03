const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
};
module.exports = config;