/*
 * @Author: your name
 * @Date: 2020-12-02 17:27:35
 * @LastEditTime: 2020-12-03 13:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\webpack-demo\src\index.js
 */
import _ from 'lodash';
import printMe from './print'
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
    // element.innerHTML = _.join(['hello','webpack','中文测试'],' ');
    // element.innerHTML = 'hello, webpack';
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());