/*
 * @Author: your name
 * @Date: 2020-12-07 11:19:58
 * @LastEditTime: 2020-12-07 14:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.jsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import(
    './app.jsx'
    ).then((App) => {
    ReactDOM.render(<App />,document.body)
}).catch((ERR) => {
    console.log(ERR)
});