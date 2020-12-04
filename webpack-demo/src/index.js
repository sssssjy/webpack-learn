/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 15:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
import _ from 'lodash';
function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'click me and look at the console';
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print();
    })

    return element
}

document.body.appendChild(component())