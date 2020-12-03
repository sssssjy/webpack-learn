/*
 * @Author: your name
 * @Date: 2020-12-03 09:42:10
 * @LastEditTime: 2020-12-03 17:04:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\webpack-demo\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//entry代码分离
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false
        }),
        new HtmlWebpackPlugin({
            title:'import prefetch'
        })
    ]
}