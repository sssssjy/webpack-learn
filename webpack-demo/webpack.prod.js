/*
 * @Author: your name
 * @Date: 2020-12-04 15:06:03
 * @LastEditTime: 2020-12-04 15:25:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.prod.js
 */
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode:'production',
    devtool:'source-map',//避免在生产环境中使用inline-和eval-
})