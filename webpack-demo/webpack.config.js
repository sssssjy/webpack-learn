/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:14
 * @LastEditTime: 2020-12-04 10:21:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.config.js
 */
const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'webpack-numbers.js'
    },
    //用户环境应该已经存在lodash 打包时不会打包至代码中
    externals:{
        lodash:{
            commonjs:'lodash',
            commonjs2:'lodash',
            amd:'lodash',
            root:'_'
        }
    }
}