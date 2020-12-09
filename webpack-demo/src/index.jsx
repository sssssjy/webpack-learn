/*
 * @Author: your name
 * @Date: 2020-12-07 11:19:58
 * @LastEditTime: 2020-12-07 15:16:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.jsx
 */
import React from 'react';
import ReactDOM from 'react-dom';

console.log(module.loaded);
console.log(module.hot);
console.log(module.id);

console.log(import.meta.url);
console.log(import.meta.webpack);


import('./app.jsx').then((App) => {
    ReactDOM.render(<App />,document.body)
}).catch((ERR) => {
    console.log(ERR)
});