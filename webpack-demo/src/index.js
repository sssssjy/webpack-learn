/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 15:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
import {cube} from './math';
if (process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in development model');
}
function component() {
    const element = document.createElement('pre');
    element.innerHTML = ['hello webpack','5 cubed is equal to' + cube(5)].join('\n\n');
    
    return element
}

// 解决onclick绑定函数未更新
let element = component();
document.body.appendChild(element);
