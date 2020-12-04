/*
 * @Author: your name
 * @Date: 2020-12-03 09:42:10
 * @LastEditTime: 2020-12-04 09:41:54
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
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,'dist')
    },
    //提取入口公共代码
    optimization:{
        runtimeChunk:'single',
        //将第三方库提取到单独的 vendor chunk文件中 
        //这些文件不像本地源代码频繁修改 利用client长期缓存机制命中缓存消除请求 减少向server获取资源 并且保证client与server代码版本一致
        splitChunks:{
            cacheGroups:{
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false
        }),
        new HtmlWebpackPlugin({
            title:'Caching'
        })
    ]
}