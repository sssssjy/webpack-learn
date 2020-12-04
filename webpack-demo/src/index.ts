/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 16:17:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
function component() {
    const element = document.createElement('div');
    element.innerHTML = 'hello webpack'
    return element
}

document.body.appendChild(component())