/*
 * @Author: your name
 * @Date: 2020-12-04 15:36:09
 * @LastEditTime: 2020-12-07 10:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.config.js
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode:'production',
    entry:{
        home: ['./src/home/index.js', './src/home/index.css'],
        account: ['./src/account/index.js', './src/account/index.css']
    },
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
            // use:[
            //     process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            //     'css-loader'
            // ]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}