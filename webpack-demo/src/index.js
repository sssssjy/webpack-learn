/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 14:35:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
import {cube} from './math';

function component() {
    const element = document.createElement('pre');
    element.innerHTML = ['hello webpack','5 cubed is equal to' + cube(5)].join('\n\n')
    element.appendChild(btn);
    return element
}

// 解决onclick绑定函数未更新
let element = component();
document.body.appendChild(element);
