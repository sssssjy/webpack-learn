/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 09:55:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
import Print from './print'
import _ from 'lodash'
function getComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello','webpack'],' ');
    element.onclick = Print.bind(null,'hello webpack click');
    return element;
}

document.body.appendChild(getComponent())