/*
 * @Author: your name
 * @Date: 2020-12-07 11:19:58
 * @LastEditTime: 2020-12-09 11:44:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.jsx
 */
import png from './dfd11.png'
const img = new Image();
img.src = png;
document.body.appendChild(img)

import('./app.js').then((result) => {
    console.log(result.default);
}).catch((ERR) => {
    console.log(ERR)
});