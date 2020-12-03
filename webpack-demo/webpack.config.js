/*
 * @Author: your name
 * @Date: 2020-12-03 09:42:10
 * @LastEditTime: 2020-12-03 16:39:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\webpack-demo\webpack.config.js
 */
const path = require('path');
//entry代码分离
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        // 缺点：如果入口chunk包含重复模块，将会被引入到各个bundle中
        // 不灵活，不能动态将核心应用程序逻辑中的代码拆分
        index:'./src/index.js',
        another:'./src/another-module.js'

        //使用dependOn 将公共依赖抽离
        // index:{
        //     import:'./src/index.js',
        //     dependOn:'shared'
        // },
        // another:{
        //     import: './src/another-module.js',
        //     dependOn:'shared'
        // },
        // shared: ['lodash']
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    optimization:{
        //splitChunksPlugin 将公共依赖的模块提取到已有的入口chunk中 或新生成的chunk
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false
        })
    ]
}