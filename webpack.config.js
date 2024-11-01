const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devtool: 'eval-source-map',
    devServer:{watchFiles: ['./src/template.html'],},
    plugins: [new HtmlWebpackPlugin()],
};