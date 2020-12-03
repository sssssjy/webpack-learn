/*
 * @Author: your name
 * @Date: 2020-12-03 15:44:36
 * @LastEditTime: 2020-12-03 15:47:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\document\webpack-demo\server.js
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

// 使用webpack-dev-middleware
// 将webpack.config.js作为基础配置文件
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}))

app.listen(3000,function () {
    console.log('example app listening on port 3000');
})