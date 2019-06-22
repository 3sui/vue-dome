const path = require('path')
//npm install --D webpack webpack-cli
//npm install --D webpack-dev-server
//npm install --D html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

//npm i vue
//npm install -D vue-loader vue-template-compiler
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html') // 以这个文件作为模板,如果没有的话修改HTML文件将没有反应
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            // npm i -D style-loader css-loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // npm i -D url-loader file-loader
            {
                test: /\.(jpg|gif|svg|png)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2037
                    }
                }]
            },
            { //npm install -D @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/polyfill babel-loader
                //babel转换
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}