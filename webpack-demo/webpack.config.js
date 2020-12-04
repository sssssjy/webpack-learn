/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:14
 * @LastEditTime: 2020-12-04 14:58:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    mode:'production',
}