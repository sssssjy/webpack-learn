/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 14:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['hello','webpack'],' ');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe
    element.appendChild(btn);
    return element
}

// 解决onclick绑定函数未更新
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('accepting the upgrade printMe module');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}