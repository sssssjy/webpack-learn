/*
 * @Author: your name
 * @Date: 2020-12-04 15:36:09
 * @LastEditTime: 2020-12-07 14:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.config.js
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry:'./src/index.jsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        chunkFilename:'app.js'
    },
    module:{
        rules: [{
            test:/\.jsx$/,
            exclude:/[\\/]node_modules[\\/]/,
            use:{
                loader:'babel-loader',
                options:{
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        },]
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}