/*
 * @Author: your name
 * @Date: 2020-12-04 14:00:27
 * @LastEditTime: 2020-12-04 14:02:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\server.js
 */
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const options = {
    contentBase:'./dist',
    hot:true,
    host:'localhost'
};

webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);
server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
})