/*
 * @Author: your name
 * @Date: 2020-12-04 15:36:09
 * @LastEditTime: 2020-12-09 10:19:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\webpack.config.js
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry:{
        main:{
            import:'./src/index.jsx',
            filename:'pages/[name][contenthash:6].js'
        }
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:9000
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        chunkFilename:'pages/app.js'
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
}
