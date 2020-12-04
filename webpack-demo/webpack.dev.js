/*
 * @Author: your name
 * @Date: 2020-12-04 15:05:57
 * @LastEditTime: 2020-12-04 15:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.dev.js
 */
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode: 'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    }
})